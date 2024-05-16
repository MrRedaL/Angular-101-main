import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ClientsComponent} from "./clients/clients.component";
import { GetClientByIDComponent } from './get-client-by-id/get-client-by-id.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "clients", component: ClientsComponent},
  {path: "getClientByID", component: GetClientByIDComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
