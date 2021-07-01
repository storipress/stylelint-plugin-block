# @storipress/stylelint-plugin-block

This is a custom [stylelint](https://stylelint.io) plugin for catching common errors when developing Storipress blocks

Usage
-----

Please install this package and [stylelint](https://stylelint.io) then add this to your stylelint configuration:

```json
{
  "plugins": ["@storipress/stylelint-plugin-block"],
  "rules": {
    "storipress/conflict-classes": true,
    "storipress/custom-media-query-match-spec": true
  }
}
```

Installation
------------

Using yarn:

```shell
$ yarn add --dev @storipress/stylelint-plugin-block
```

Using npm:

```shell
$ npm install --save-dev @storipress/stylelint-plugin-block
```
