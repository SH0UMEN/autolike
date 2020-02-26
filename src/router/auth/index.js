import Registration from "../../views/auth/Registration"
import Login from "../../views/auth/Login"
import Auth from "../../views/auth/Index"

export default [
    {
        path: '/auth',
        name: 'auth',
        component: Auth,
        redirect: to => {
            return "/auth/login"
        },
        children: [
            {
                path: '/auth/registration',
                name: 'registration',
                component: Registration
            },
            {
                path: '/auth/login',
                name: 'login',
                component: Login
            }
        ]
    }
]