export default defineNuxtRouteMiddleware((to, from) => {
    console.log('to: '+to.path, 'from: '+from.path);
    
})
