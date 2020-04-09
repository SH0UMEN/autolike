import Index from "../../views/lk/Index"
import store from "../../store"

function isAuthenticated(to, from, next) {
    if(store.getters.isAuthenticated) {
        if(!store.getters.getUser) {
            console.log("b")
            store.dispatch("getUserData").then(()=>{
                next()
                return
            })
        } else {
            next()
        }
    } else {
        next("/auth/login")
    }
}

export default [
    {
        path: '/lk',
        name: 'lk-index',
        component: Index,
        beforeEnter: isAuthenticated
    }
]