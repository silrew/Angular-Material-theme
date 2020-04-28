import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialAngularModule } from './angular-material/angular-material.module';
import {OverlayContainer, OverlayModule} from '@angular/cdk/overlay';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavComponent } from './side-nav/side-nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RatingComponent } from './shared/rating/rating.component';
import { SalesComponent } from './sales/sales.component';
import { OrdersComponent } from './orders/orders.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { PostersCatlogComponent } from './posters-catlog/posters-catlog.component';
import { PosterDetailComponent } from './posters-catalog/poster-detail/poster-detail.component';
import { CategorisComponent } from './categoris/categoris.component';
import { CustomersComponent } from './customers/customers.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    DashboardComponent,
    RatingComponent,
    SalesComponent,
    OrdersComponent,
    PersonalInfoComponent,
    PostersCatlogComponent,
    PosterDetailComponent,
    CategorisComponent,
    CustomersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialAngularModule ,
    OverlayModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
