import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { OrdersComponent } from 'src/app/orders/orders.component';
import { PersonalInfoComponent } from 'src/app/personal-info/personal-info.component';
import { PostersCatlogComponent } from 'src/app/posters-catlog/posters-catlog.component';
import { PosterDetailComponent } from 'src/app/posters-catalog/poster-detail/poster-detail.component';
import { CategorisComponent } from 'src/app/categoris/categoris.component';
import { CustomersComponent } from 'src/app/customers/customers.component';


const routes: Routes = [
  {path:'dashboard', component: DashboardComponent},
  {path:'orders', component: OrdersComponent},
  {path:'posters', component: PostersCatlogComponent},
  {path:'poster/:id', component: PosterDetailComponent},
  {path:'posters/category/:name', component: PostersCatlogComponent},
  {path:'categories', component: CategorisComponent},
  {path:'customers', component: CustomersComponent},
  {path:'personal-info/:id', component: PersonalInfoComponent},
  {path:'', component: DashboardComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
