import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SvgIconDirective } from './directives/svg-icon.directive';

const exportDirectives = [
  SvgIconDirective,
];

@NgModule({
  declarations: exportDirectives,
  imports: [
    CommonModule,
  ],
  exports: exportDirectives,
})
export class SvgModule { }
