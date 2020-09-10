import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
// import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatChipsModule } from '@angular/material/chips';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { NavLinkComponent } from './nav-link/nav-link.component';
import { MainControlsComponent } from './remote-controls/main-controls.component';
import { ButtonControlComponent } from './button-control/button-control.component';
import { ButtonControlAccentComponent } from './button-control/button-control-accent.component';
import { ButtonControlPrimaryComponent } from './button-control/button-control-primary.component';
import { ButtonControlBasicComponent } from './button-control/button-control-basic.component';
import { ManagementControlsComponent } from './remote-controls/management-controls.component';
import { ChannelsVolumeControlsComponent } from './remote-controls/channels-volume-controls.component';
import { NumericControlsComponent } from './remote-controls/numeric-controls.component';
import { ColoredControlsComponent } from './remote-controls/colored-controls.component';
import { HomeComponent } from './home/home.component';
import { ToIDPipe } from './to-id.pipe';
import { InputFieldTextComponent } from './input-field-text/input-field-text.component';
import { ConfigComponent } from './config/config.component';
import { ToUpperPipe } from './to-upper.pipe';
import { InvalidSelectValueDirective } from './invalid-select-value.directive';
import { RoleComponent } from './role/role.component';



@NgModule({
  declarations: [
    AppComponent,
    NavLinkComponent,
    MainControlsComponent,
    ButtonControlComponent,
    ButtonControlPrimaryComponent,
    ButtonControlBasicComponent,
    ButtonControlAccentComponent,
    ManagementControlsComponent,
    ChannelsVolumeControlsComponent,
    NumericControlsComponent,
    ColoredControlsComponent,
    HomeComponent,
    ToIDPipe,
    InputFieldTextComponent,
    ConfigComponent,
    ToUpperPipe,
    InvalidSelectValueDirective,
    RoleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatSelectModule,
    FormsModule,
    MatInputModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
