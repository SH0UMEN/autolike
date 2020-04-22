import Index from "../../views/lk/Index"
import Doer from "../../views/lk/Doer"
import Customer from "../../views/lk/Customer"
import store from "../../store"

function isAuthenticated(to, from, next) {
    if(store.getters.isAuthenticated) {
        if(!store.getters.getUser) {
            store.dispatch("getUserData").then(()=>{
                if(to.name == "lk-index") {
                    store.getters.getUser.register_as == 0 ? next({ name: 'lk-customer' }) : next({ name: 'lk-doer' })
                }
                next()
            })
        } else {
            if(to.name == "lk-index") {
                store.getters.getUser.register_as == 0 ? next({ name: 'lk-customer' }) : next({ name: 'lk-doer' })
                return
            }
            next()
        }
    } else {
        next("/auth/login")
    }
    return
}

export default [
    {
        path: '/lk',
        name: 'lk-index',
        component: Index,
        beforeEnter: isAuthenticated,
        children: [
            {
                path: '/lk/doer',
                name: 'lk-doer',
                component: Doer
            },
            {
                path: '/lk/customer',
                name: 'lk-customer',
                component: Customer
            },
        ]
    }
]