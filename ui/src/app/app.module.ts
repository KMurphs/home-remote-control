import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NavLinkComponent } from './nav-link/nav-link.component';
import { MainControlsComponent } from './main-controls/main-controls.component';
import { ButtonControlComponent } from './button-control/button-control.component';
import { ButtonControlAccentComponent } from './button-control/button-control-accent.component';
import { ButtonControlPrimaryComponent } from './button-control/button-control-primary.component';
import { ButtonControlBasicComponent } from './button-control/button-control-basic.component';


@NgModule({
  declarations: [
    AppComponent,
    NavLinkComponent,
    MainControlsComponent,
    ButtonControlComponent,
    ButtonControlPrimaryComponent,
    ButtonControlBasicComponent,
    ButtonControlAccentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
