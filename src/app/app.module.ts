import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from 'swiper/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { BottomMostFooterComponent } from './bottom-most-footer/bottom-most-footer.component';
import { FooterMainComponent } from './footer-main/footer-main.component';
import { MailListComponent } from './mail-list/mail-list.component';
import { DestinationComponent } from './destination/destination.component';
import { DiscountComponent } from './discount/discount.component';
import { OffersComponent } from './offers/offers.component';
import { ExploreBangladeshComponent } from './explore-bangladesh/explore-bangladesh.component';
import { TypePropertyComponent } from './type-property/type-property.component';
import { ConnectTravelersComponent } from './connect-travelers/connect-travelers.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    BottomMostFooterComponent,
    FooterMainComponent,
    MailListComponent,
    DestinationComponent,
    DiscountComponent,
    OffersComponent,
    ExploreBangladeshComponent,
    TypePropertyComponent,
    ConnectTravelersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    FormsModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
