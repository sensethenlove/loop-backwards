# 🕉 @sensethenlove/loop-backwards


### 🙏 Description
Loop an array backwards! Give loopBackwards() an array and a callback. On each iteration calback provides the current item, a splice function, and the current index. If the splice function is called the item is removed from the array. If the splice function is called & the current item is a DOM element the item is removed from the array & the item is removed from the DOM

### ☯️ Install
```bash
pnpm add @sensethenlove/loop-backwards
```

### 💛 Example: Array of numbers
```ts
import loopBackwards from '@sensethenlove/loop-backwards'

loopBackwards(numbers, (number, splice, index) => {
  if (number === 9 || index === 9) splice()
})
```


### 🧡 Example: Array of objects
```ts
loopBackwards(items, ({ foo }, splice) => {
  if (foo === 'bar') splice()
})
```

### 💚 Example: Array of DOM elements
```ts
const elements = document.querySelectorAll('div')

loopBackwards(Array.from(elements), (element, splice) => {
  if (element.getAttribute('foo') === 'bar') splice()
})
```

### 💖 Our helpful packages!
* [@sensethenlove/jwt](https://www.npmjs.com/package/@sensethenlove/jwt)
* [@sensethenlove/slug](https://www.npmjs.com/package/@sensethenlove/slug)
* [@sensethenlove/toast](https://www.npmjs.com/package/@sensethenlove/toast)
* [@sensethenlove/env-write](https://www.npmjs.com/package/@sensethenlove/env-write)
* [@sensethenlove/svelte-modal](https://www.npmjs.com/package/@sensethenlove/svelte-modal)
* [@sensethenlove/global-style](https://www.npmjs.com/package/@sensethenlove/global-style)
* [@sensethenlove/svelte-turnstile](https://www.npmjs.com/package/@sensethenlove/svelte-turnstile)
