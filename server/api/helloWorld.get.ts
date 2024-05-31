export default defineEventHandler((event) => {
  // return 'Hello helloWorld'
  return {
    message: getQuery(event)
  }
})
