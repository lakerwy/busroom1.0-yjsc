export default (url) =>()=>import(`@/views/${url}.vue`)
// export default (url) =>resolve=>require([`@/views/${url}.vue`],resolve)

