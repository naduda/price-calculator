import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { CalculatorRoutingModule } from './calculator-routing.module';
import { CreateFormDialogComponent } from './components/create-form-dialog/create-form-dialog.component';
import { SettingsComponent } from './components/settings/settings.component';
import { MainComponent } from './main.component';

const sharedModules = [
  MatIconModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
];

@NgModule({
  declarations: [
    SettingsComponent,
    MainComponent,
    CreateFormDialogComponent,
  ],
  imports: [
    CommonModule,
    CalculatorRoutingModule,
    ReactiveFormsModule,
    sharedModules,
  ],
  exports: [
    sharedModules,
  ]
})
export class CalculatorModule { }
