import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { map, take } from 'rxjs/operators';
import { EType, IComponent } from 'src/app/calculator/model/iterface';
import { StorageService } from 'src/app/calculator/services/storage.service';

@Component({
  selector: 'app-create-form-dialog',
  templateUrl: './create-form-dialog.component.html',
  styleUrls: ['./create-form-dialog.component.sass']
})
export class CreateFormDialogComponent implements OnInit {

  form: FormGroup;

  units = [
    { value: EType.METER, label: 'Meter', },
    { value: EType.HOUR, label: 'Hour', },
    { value: EType.ONE, label: 'One', },
  ];

  components: IComponent[] = [];

  constructor(
    public ref: MatDialogRef<CreateFormDialogComponent>,
    private storageService: StorageService,
    @Inject(MAT_DIALOG_DATA) public data: { isClient: boolean },
    fb: FormBuilder,
  ) {
    this.form = data.isClient ? this.buildClientForm(fb) : this.buildSettingsForm(fb);
    if (data.isClient) {
      this.initComponents();
    }
  }

  ngOnInit(): void {

  }

  private initComponents(): void {
    this.storageService.storageItem$
      .pipe(
        take(1),
        map(e => e.components),
      )
      .subscribe(e => this.components = e);
  }

  private buildClientForm(fb: FormBuilder): FormGroup {
    return fb.group({
      selectedItem: [null, Validators.required],
    });
  }

  private buildSettingsForm(fb: FormBuilder): FormGroup {
    return fb.group({
      name: [null, Validators.required],
      unit: [null, Validators.required],
      price: [0, [
        Validators.required,
        Validators.min(0),
      ]],
    });
  }

  submit(): void {
    if (this.form.invalid) {
      return;
    }

    const data = this.form.value;
    this.ref.close(this.data.isClient ? data.selectedItem : data);
  }

  get nameControl(): FormControl {
    return this.form.get('name') as FormControl;
  }
}
