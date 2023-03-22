# 🕉 @sensethenlove/loop-backwards


### 🙏 Description
Loop an array backwards, calback provides the current item & a splice function that removes elements from DOM if splice is called on a DOM element and/or removes item from array if item is not a DOM element


### ☯️ Install
```bash
pnpm add @sensethenlove/loop-backwards
```

### 💛 Example: Array of numbers
```ts
import loopBackwards from '@sensethenlove/loop-backwards'

loopBackwards(numbers, (number, splice) => {
  if (number !== 9) splice()
})
```


### 🧡 Example: Array of objects
```ts
loopBackwards(sources, (source, splice) => {
  if (source.foo !== 'bar') splice()
})
```

### 💚 Example: Array of DOM elements
```ts
const elements = document.querySelectorAll('div')

loopBackwards(Array.from(elements), (element, splice) => {
  if (element.getAttribute('foo') !== 'bar') splice()
})
```

### 💖 Our helpful packages!
* [@sensethenlove/jwt](https://www.npmjs.com/package/@sensethenlove/jwt)
* [@sensethenlove/toast](https://www.npmjs.com/package/@sensethenlove/toast)
* [@sensethenlove/env-write](https://www.npmjs.com/package/@sensethenlove/env-write)
* [@sensethenlove/global-style](https://www.npmjs.com/package/@sensethenlove/global-style)
* [@sensethenlove/svelte-turnstile](https://www.npmjs.com/package/@sensethenlove/svelte-turnstile)
