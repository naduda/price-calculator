import { PlatformModule } from '@angular/cdk/platform';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ConfirmDialogComponent } from './diaolg/confirm-dialog/confirm-dialog.component';
import { ThemeService } from './theme/theme.service';
import { ETheme } from './theme/utils/ETheme';

@NgModule({
  declarations: [
    AppComponent,
    ConfirmDialogComponent,
    NavigationComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production, registrationStrategy: 'registerImmediately' }),
    PlatformModule,
    MatDialogModule,
    MatMenuModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(themeService: ThemeService) {
    themeService.setTheme(ETheme.Main);
  }
}
