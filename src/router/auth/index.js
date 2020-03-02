import Registration from "../../views/auth/Registration"
import Login from "../../views/auth/Login"
import Auth from "../../views/auth/Index"
import Restore from "../../views/auth/Restore"
import RestoreConfirming from "../../views/auth/RestoreConfirming"
import ChangePassword from "../../views/auth/ChangePassword"
import RestoreSuccessful from "../../views/auth/RestoreSuccessful"
import RegistrationConfirming from "../../views/auth/RegistrationConfirming"
import RegistrationSuccessful from "../../views/auth/RegistationSuccessful"
import DonationSuccessful from "../../views/auth/DonationSuccessful"

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
            },
            {
                path: '/auth/restore',
                name: 'restore',
                component: Restore
            },
            {
                path: '/auth/registration/confirming',
                name: 'confirming',
                component: RegistrationConfirming
            },
            {
                path: '/auth/registration/successful',
                name: 'registration-successful',
                component: RegistrationSuccessful
            },
            {
                path: '/auth/restore/confirming',
                name: 'restore-confirming',
                component: RestoreConfirming
            },
            {
                path: '/auth/restore/successful',
                name: 'restore-successful',
                component: RestoreSuccessful
            },
            {
                path: '/auth/change-password',
                name: 'change-password',
                component: ChangePassword
            },
            {
                path: '/donation-successful',
                name: 'donation-successful',
                component: DonationSuccessful
            }
        ]
    }
]