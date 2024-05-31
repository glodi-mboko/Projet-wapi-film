export default defineNuxtRouteMiddleware((to, from) => {
    const userIsLoggedIn = false

    if(!userIsLoggedIn) {
        // return abortNavigation({
        //     statusCode: 403,
        //     message: "Your're not allowed to visit /admin!"
        // })
        return navigateTo({ path: '/login' })
    }
})