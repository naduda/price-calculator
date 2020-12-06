import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculatorRoutingModule } from './calculator-routing.module';
import { SettingsComponent } from './components/settings/settings.component';
import { ClientComponent } from './components/client/client.component';
import { MainComponent } from './main.component';


@NgModule({
  declarations: [SettingsComponent, ClientComponent, MainComponent],
  imports: [
    CommonModule,
    CalculatorRoutingModule
  ]
})
export class CalculatorModule { }
