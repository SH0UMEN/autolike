import Index from "../../views/landing/Index"
import Choose from "../../views/landing/Choose"
import Doer from "../../views/landing/Doer"
import Customer from "../../views/landing/Customer"


export default [
    {
        path: "/",
        name: "landing",
        component: Index,
        children: [
            {
                path: "/",
                name: "landing-index",
                component: Choose
            },
            {
                path: '/doer',
                name: 'landing-doer',
                component: Doer
            },
            {
                path: '/customer',
                name: 'landing-customer',
                component: Customer
            }
        ]
    },
]