import { Routes } from "@angular/router"
import { BasicPageComponent } from "./pages/basic-page/basic-page"
import { DynamicPageComponent } from "./pages/dynamic-page/dynamic-page"
import { SwitchesPageComponent } from "./pages/switches-page/switches-page"


const reactiveRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'basic',
                title: 'Basic',
                component: BasicPageComponent,
            },
            {
                path: 'dymamic',
                title: 'Dynamic',
                component: DynamicPageComponent
            },
            {
                path: 'switches',
                title: 'Switches',
                component: SwitchesPageComponent
            },
            {
                path: '**',
                redirectTo: 'basic'
            }
        ]
    }
]

export default reactiveRoutes;