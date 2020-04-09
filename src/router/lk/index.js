import Index from "../../views/lk/Index"
import Doer from "../../views/lk/Doer"
import Customer from "../../views/lk/Customer"
import store from "../../store"

function isAuthenticated(to, from, next) {
    if(store.getters.isAuthenticated) {
        if(!store.getters.getUser) {
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
        beforeEnter: isAuthenticated,
        redirect: to => {
            return "/lk/customer"
        },
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