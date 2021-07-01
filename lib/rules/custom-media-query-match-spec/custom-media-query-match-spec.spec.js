const { ruleName, messages } = require('.')

testRule({
  plugins: [require.resolve('.')],
  config: true,
  ruleName,
  accept: [
    {
      code: '@media (max-width: 768px)',
    },
    {
      code: '@media screen and (min-width: 1070px)',
    },
  ],
  reject: [
    {
      code: '@media (max-width: 400px)',
      message: messages.rejected,
    },
    {
      code: '@media screen and (min-width: 800px)',
      message: messages.rejected,
    },
  ],
})
