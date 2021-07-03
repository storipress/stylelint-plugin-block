# check media query for matching our spec

## Fail

```scss
@media (min-width: 400px) {}
@media (min-width: 700px) {}
```

## Pass

```scss
@media (min-width: 365px) {}
@media (min-width: 768px) {}
@media (min-width: 1070px) {}
```
