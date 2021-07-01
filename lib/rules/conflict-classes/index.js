const stylelint = require('stylelint')

const ruleName = 'storipress/custom-media-query-match-spec'
const messages = stylelint.utils.ruleMessages(ruleName, {
  foundClass: (name) => `found class ${name} may conflict with prop`,
})

const CONFLICT_PATTERN = [/text-.*/, /leading-.*/, /font-.*/]
const CONFLICT_NAMES = new Set(['uppercase', 'lowercase', 'capitalize', 'underline'])

module.exports = stylelint.createPlugin(ruleName, function () {
  return function (root, result) {
    root.walkAtRules('apply', (atRule) => {
      const value = atRule.toString()
      const classes = atRule.params.split(' ').map((raw) => {
        const parts = raw.split(':')
        return {
          raw,
          className: parts[parts.length - 1],
        }
      })

      for (const { raw, className } of classes) {
        if (CONFLICT_PATTERN.some((pattern) => className.match(pattern))) {
          reportValue(value, raw)
          continue
        }
        if (CONFLICT_NAMES.has(className)) {
          reportValue(value, raw)
        }
      }

      function reportValue(fullClass, className) {
        const pos = fullClass.indexOf(className)
        stylelint.utils.report({
          ruleName,
          result,
          node: atRule,
          message: messages.foundClass(className),
          index: pos,
          word: className,
        })
      }
    })
  }
})

module.exports.ruleName = ruleName
module.exports.messages = messages
