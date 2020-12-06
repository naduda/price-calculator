import { HttpClient } from '@angular/common/http';
import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';
import { EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Directive({
  selector: '[svgIcon]'
})
export class SvgIconDirective implements OnChanges {

  static cache = new Map<string, string>();

  @Input() svgIcon = '';

  constructor(
    private el: ElementRef,
    private http: HttpClient,
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.svgIcon) {
      this.init();
    }
  }

  private init(): void {
    if (SvgIconDirective.cache.has(this.svgIcon)) {
      this.el.nativeElement.innerHTML = SvgIconDirective.cache.get(this.svgIcon);
    }

    this.http.get(this.svgIcon)
      .pipe(
        catchError(err => {
          const svg = err.error.text;
          this.el.nativeElement.innerHTML = svg;
          SvgIconDirective.cache.set(this.svgIcon, svg);
          return EMPTY;
        })
      )
      .subscribe();
  }
}
