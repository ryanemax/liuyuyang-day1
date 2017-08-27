import { Component } from '@angular/core';
import { routes } from './app-routing.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Ng Lazyload Starter';
  routes = routes
  constructor(){
  }
  getEnableNavitem(){
    return routes.filter(route=>{
      if(route.data&&route.data.title){
        return route
      }
    })
  }
}
