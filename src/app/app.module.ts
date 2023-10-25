import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { MainComponent } from './main/main.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { ContentRow1Component } from './content-row1/content-row1.component';
import { ContentRow2Component } from './content-row2/content-row2.component';
import { ContentRow3Component } from './content-row3/content-row3.component';
import { PagesProfileComponent } from './pages-profile/pages-profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ComponentNotFoundComponent } from './component-not-found/component-not-found.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { BlankComponent } from './blank/blank.component';
import { ButtonComponent } from './button/button.component';
import { FormsComponent } from './forms/forms.component';
import { CardsComponent } from './cards/cards.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { ChartsComponent } from './charts/charts.component';
import { MapsComponent } from './maps/maps.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    WrapperComponent,
    MainComponent,
    ContentComponent,
    FooterComponent,
    ContentRow1Component,
    ContentRow2Component,
    ContentRow3Component,
    PagesProfileComponent,
    DashboardComponent,
    ComponentNotFoundComponent,
    SignUpComponent,
    SignInComponent,
    BlankComponent,
    ButtonComponent,
    FormsComponent,
    CardsComponent,
    TypographyComponent,
    IconsComponent,
    ChartsComponent,
    MapsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
