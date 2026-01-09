import { Routes } from "@angular/router"
import { RegisterPageComponent } from "./pages/register-page/register-page"


const authRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'register',
                title: 'Register',
                component: RegisterPageComponent
            },
            {
                path: '**',
                redirectTo: 'register'
            }
        ]
    }
]

export default authRoutes;