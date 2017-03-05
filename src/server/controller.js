export const homePage = () => null

export const helloPage = () => ({
  hello: { message: 'Server-side preloaded message here' },
})

export const helloAsyncPage = () => ({
  hello: { messageAsync: 'Server-side preloaded message for async page here' },
})

export const helloEndpoint = (num) => ({
  serverMessage: `Hello from the server! (received ${num})`,
})
