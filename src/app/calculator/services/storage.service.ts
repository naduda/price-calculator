import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IComponent, ISelectedComponent } from '../model/iterface';

interface IStorageItem {
  components: IComponent[];
  selected: ISelectedComponent[];
}

const STORAGE_NAME = 'priceCalculator';

const DEFAULT_STORAGE_ITEM = {
  components: [],
  selected: [],
};

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private storageItemSubject = new BehaviorSubject<IStorageItem>(DEFAULT_STORAGE_ITEM);
  storageItem$ = this.storageItemSubject.asObservable();

  constructor() { }

  init(): void {
    const item = localStorage.getItem(STORAGE_NAME);
    if (item) {
      const storageItem = JSON.parse(item) as IStorageItem;
      this.storageItemSubject.next(storageItem);
    } else {
      localStorage.setItem(STORAGE_NAME, JSON.stringify(DEFAULT_STORAGE_ITEM));
    }
  }

  saveComponent(v: IComponent): void {
    const storageItem = this.storageItemSubject.value;
    storageItem.components.push({
      ...v,
      id: Date.now(),
    });
    localStorage.setItem(STORAGE_NAME, JSON.stringify(storageItem));
    this.storageItemSubject.next(storageItem);
  }

  saveSelectedItem(v: ISelectedComponent): void {
    const storageItem = this.storageItemSubject.value;
    storageItem.selected.push({ ...v, value: 1 });
    localStorage.setItem(STORAGE_NAME, JSON.stringify(storageItem));
    this.storageItemSubject.next(storageItem);
  }

  removeComponent(id: number): void {
    const storageItem = this.storageItemSubject.value;
    storageItem.components = storageItem.components.filter(e => e.id !== id);
    localStorage.setItem(STORAGE_NAME, JSON.stringify(storageItem));
    this.storageItemSubject.next(storageItem);
  }

  removeSelectedItem(id: number): void {
    const storageItem = this.storageItemSubject.value;
    storageItem.selected = storageItem.selected.filter(e => e.id !== id);
    localStorage.setItem(STORAGE_NAME, JSON.stringify(storageItem));
    this.storageItemSubject.next(storageItem);
  }

  changePrice(item: IComponent): void {
    const storageItem = this.storageItemSubject.value;
    const existsSelected = storageItem.selected.find(e => e.id === item.id);
    if (existsSelected) {
      existsSelected.price = item.price;
    }

    const exists = storageItem.components.find(e => e.id === item.id);
    if (exists) {
      exists.price = item.price;
      localStorage.setItem(STORAGE_NAME, JSON.stringify(storageItem));
      this.storageItemSubject.next(storageItem);
    }
  }

}
