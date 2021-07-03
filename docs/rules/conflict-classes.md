# warning for using tailwindcss class which may conflict with our props

## Fail

```scss
.foo {
  @apply text-base font-bold;
  @apply lg:leading-1 md:uppercase;
}
```

## Pass

```scss
.foo {
  @apply p-1 m-1;
  @apply lg:p-1 md:m-1;
}
```
