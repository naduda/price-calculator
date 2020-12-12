import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './components/settings/settings.component';
import { MainComponent } from './main.component';

const routes: Routes = [
  { path: '', redirectTo: 'calculator/client' },
  {
    path: '', component: MainComponent, children: [
      { path: 'settings', component: SettingsComponent },
      { path: 'client', component: SettingsComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalculatorRoutingModule { }
