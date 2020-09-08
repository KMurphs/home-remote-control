import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { MainControlsComponent } from './remote-controls/main-controls.component';
import { HomeComponent } from './home/home.component';


const routerOptions: ExtraOptions = {
  // scrollPositionRestoration: 'enabled',
  // anchorScrolling: 'enabled',
  // scrollOffset: [0, 64],
};

const routes: Routes = [
  // { path: 'home', component: HomeComponent },
  // { path: '', redirectTo: 'home', pathMatch: 'full'}
  // { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
