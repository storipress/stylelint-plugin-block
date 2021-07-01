const stylelint = require('stylelint')
const { parse } = require('css-mediaquery')

const ruleName = 'storipress/custom-media-query-match-spec'
const messages = stylelint.utils.ruleMessages(ruleName, {
  rejected: 'please use the media query that match our spec',
})

const VALID_VALUES = new Set([375, 768, 1070])

module.exports = stylelint.createPlugin(ruleName, function () {
  return function (root, result) {
    root.walkAtRules('media', (atRule) => {
      const rules = parse(atRule.params)
      for (const rule of rules) {
        if (rule.type !== 'all' && rule.type !== 'screen') {
          continue
        }

        for (const expression of rule.expressions) {
          if (expression.feature !== 'width') {
            continue
          }

          if (!expression.value.endsWith('px')) {
            stylelint.utils.report({
              ruleName,
              result,
              message: messages.rejected,
              node: atRule,
            })
            break
          }

          const value = Number.parseInt(expression.value)

          if (!VALID_VALUES.has(value)) {
            stylelint.utils.report({
              ruleName,
              result,
              message: messages.rejected,
              node: atRule,
            })
            break
          }
        }
      }
    })
  }
})

module.exports.ruleName = ruleName
module.exports.messages = messages
