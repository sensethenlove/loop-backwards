# @sensethenlove/loop-backwards


### Description
Loop an array backwards, calback provides the current item & a splice function that removes elements from DOM if splice is called on a DOM element and/or removes item from array if item is not a DOM elements


### Install
```bash
pnpm add @sensethenlove/loop-backwards
```

### Example w/ array of numbers
```ts
loopBackwards(numbers, (number, splice) => {
  if (number !== 9) splice()
})
```


### Example w/ array of objects
```ts
loopBackwards(sources, (source, splice) => {
  if (source.foo !== 'bar') splice()
})
```

### Example w/ array of DOM elements
```ts
const elements = document.querySelectorAll('div')

loopBackwards(Array.from(elements), (element, splice) => {
  if (element.getAttribute('foo') !== 'bar') splice()
})
```
