const { ruleName, messages } = require('.')

testRule({
  plugins: [require.resolve('.')],
  config: true,
  ruleName,
  accept: [
    {
      code: '@apply p-1 m-1;',
    },
    {
      code: '@apply lg:p-1 md:m-1;',
    },
  ],
  reject: [
    {
      code: '@apply text-base font-bold;',
      warnings: [
        {
          message: messages.foundClass('text-base'),
          line: 1,
          column: 8,
        },
        {
          message: messages.foundClass('font-bold'),
          line: 1,
          column: 18,
        },
      ],
    },
    {
      code: '@apply lg:leading-1 md:uppercase;',
      warnings: [
        {
          message: messages.foundClass('lg:leading-1'),
          line: 1,
          column: 8,
        },
        {
          message: messages.foundClass('md:uppercase'),
          line: 1,
          column: 21,
        },
      ],
    },
  ],
})
