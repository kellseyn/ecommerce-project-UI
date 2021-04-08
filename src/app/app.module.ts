import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SplashPageComponent } from './pages/splash-page/splash-page.component';
import { MainMenuComponent } from './pages/main-menu/main-menu.component';
import { ItemsPageComponent } from './pages/items-page/items-page.component';
import { ItemPageComponent } from './pages/item-page/item-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { CheckoutPageComponent } from './pages/checkout-page/checkout-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    SplashPageComponent,
    MainMenuComponent,
    ItemsPageComponent,
    ItemPageComponent,
    CartPageComponent,
    CheckoutPageComponent,
    NavbarComponent,
    AuthPageComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
