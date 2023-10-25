import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesProfileComponent } from './pages-profile/pages-profile.component';
import { AppComponent } from './app.component';
import { ComponentNotFoundComponent } from './component-not-found/component-not-found.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { BlankComponent } from './blank/blank.component';
import { ButtonComponent } from './button/button.component';
import { CardsComponent } from './cards/cards.component';
import { IconsComponent } from './icons/icons.component';
import { TypographyComponent } from './typography/typography.component';
import { ChartsComponent } from './charts/charts.component';
import { MapsComponent } from './maps/maps.component';

const routes: Routes = [
  {
    path:'',
    component: WrapperComponent
  },
  {
    path:'pages-profile',
    component: PagesProfileComponent
  },
  {
    path: "sign-in",
    component: SignInComponent
  },
  {
    path: "sign-up",
    component: SignUpComponent
  },
  {
    path: "button",
    component: ButtonComponent
  },
  {
    path: "cards",
    component: CardsComponent
  },
  {
    path: "icons",
    component: IconsComponent
  },
  {
    path: "typography",
    component: TypographyComponent
  },
  {
    path: "charts",
    component: ChartsComponent
  },
  {
    path: "maps",
    component: MapsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
