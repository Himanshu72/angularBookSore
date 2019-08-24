import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { GallaryComponent } from './gallary/gallary.component';
import { RouteGService } from './basic/route-g.service';
import { RegisterComponent } from './register/register.component';
import { AntiLogService } from './anti-log.service';
import { AboutUsComponent } from './about-us/about-us.component';
import { CartComponent } from './cart/cart.component';
import { HistoryComponent } from './history/history.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"cart/:id",component:CartComponent,canActivate:[RouteGService] },
  {path:"login",component:LoginComponent},
  {path:"galary/:id",component:GallaryComponent,canActivate:[RouteGService]},
 {path:"register",component:RegisterComponent},
 {path:"about",component:AboutUsComponent },
 {path:"history/:id",component:HistoryComponent,canActivate:[RouteGService]},
 {path:"**",component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
