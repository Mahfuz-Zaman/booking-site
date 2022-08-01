import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
