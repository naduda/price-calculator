import { Injectable } from '@angular/core';
import { ETheme } from './utils/ETheme';
import { main, Theme } from './utils/theme';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private active: Theme = main;
  private availableThemes: Theme[] = [main];

  getAvailableThemes(): Theme[] {
    return this.availableThemes;
  }

  getActiveTheme(): Theme {
    return this.active;
  }

  getActiveThemeName(): ETheme {
    return this.active.name;
  }

  isEcommerceTheme(): boolean {
    return this.active.name === ETheme.Main;
  }

  setTheme(themeName: ETheme): void {
    const theme = this.availableThemes.find(el => el.name === themeName);
    this.setActiveTheme(theme);
  }

  private setActiveTheme(theme: Theme | any): void {
    this.active = theme;

    Object.keys(this.active.properties).forEach(property => {
      document.documentElement.style.setProperty(
        property,
        this.active.properties[property]
      );
    });
  }
}
