import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { IComponent, ISelectedComponent } from '../../model/iterface';
import { StorageService } from '../../services/storage.service';
import { CreateFormDialogComponent } from '../create-form-dialog/create-form-dialog.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.sass']
})
export class SettingsComponent implements OnInit {

  isClient = false;
  total = 0;

  items$: Observable<ISelectedComponent[]>;

  constructor(
    public storageService: StorageService,
    private router: Router,
    private dialog: MatDialog,
  ) {
    this.items$ = storageService.storageItem$
      .pipe(
        map(e => e.selected),
        tap(e => this.total = e.reduce((a, b) => a + b.value * b.price, 0)),
      );
  }

  ngOnInit(): void {
    this.isClient = this.router.url.endsWith('/client');
  }

  addComponent(): void {
    this.dialog.open(CreateFormDialogComponent, {
      data: {
        isClient: this.isClient,
      },
    }).afterClosed()
      .pipe(
        filter(e => !!e),
      )
      .subscribe(e => {
        if (this.isClient) {
          this.storageService.saveSelectedItem(e);
        } else {
          this.storageService.saveComponent(e);
        }
      });
  }

  removeComponent(id: number): void {
    if (this.isClient) {
      this.storageService.removeSelectedItem(id);
    } else {
      this.storageService.removeComponent(id);
    }
  }

  changeValue(item: ISelectedComponent, e: Event): void {
    const value = (e.target as any).value;
    if (!value) {
      return;
    }
    this.storageService.changeValue({
      ...item,
      value,
    });
  }

  changePrice(item: IComponent, e: Event): void {
    const price = (e.target as any).value;
    if (!price) {
      return;
    }
    this.storageService.changePrice({
      ...item,
      price,
    });
  }
}
