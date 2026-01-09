import { Component } from '@angular/core';
import reactiveRoutes from '../../../reactive/reactive.routes';
import { RouterLink } from "@angular/router";
import countryRoutes from '../../../country/country.routes';


interface MenuItem {
  tittle: string;
  route: string;
}

@Component({
  selector: 'app-side-menu',
  imports: [RouterLink],
  templateUrl: './side-menu.html'
})
export class SideMenuComponent {

  reactiveMenuItems: MenuItem[] = reactiveRoutes[0]
    .children!
    .filter(item => item.path !== '**')
    .map(item => ({
      tittle: `${item.title}`,
      route: item.path ?? ''
    }))

  countryMenuItems: MenuItem = {
    tittle: 'Country',
    route: '/country'
  }

  authMenuItem: MenuItem = {
    tittle: 'Register',
    route: '/auth'
  }
}
