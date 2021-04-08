import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { CheckoutPageComponent } from './pages/checkout-page/checkout-page.component';
import { ItemPageComponent } from './pages/item-page/item-page.component';
import { ItemsPageComponent } from './pages/items-page/items-page.component';
import { MainMenuComponent } from './pages/main-menu/main-menu.component';
import { SplashPageComponent } from './pages/splash-page/splash-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'splash', pathMatch: 'full' },
  {path: 'splash', component:SplashPageComponent},
  {path: 'auth', component:AuthPageComponent},
  {path: 'main', component:MainMenuComponent},
  {path: 'items', component:ItemsPageComponent},
  {path: 'item', component:ItemPageComponent},
  {path: 'cart', component:CartPageComponent},
  {path: 'checkout', component:CheckoutPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
