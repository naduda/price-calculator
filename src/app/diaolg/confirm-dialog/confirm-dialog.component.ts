import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface IConfirmDialog {
  header: string;
  desc?: string;
  acceptLabel?: string;
  rejectLabel?: string;
  hideReject?: boolean;
  headerClass?: string;
  descClass?: string;
}

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.sass']
})
export class ConfirmDialogComponent implements OnInit {

  headerClass = 'confirm-dialog__header';
  descClass = 'confirm-dialog__desc';

  constructor(
    private ref: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IConfirmDialog,
  ) { }

  ngOnInit(): void {
    this.data.desc = this.data.desc || 'Are you sure?';
    this.data.acceptLabel = this.data.acceptLabel || 'Yes';
    this.data.rejectLabel = this.data.rejectLabel || 'No';
    if (this.data.headerClass) {
      this.headerClass += ' ' + this.data.headerClass;
    }
    if (this.data.descClass) {
      this.descClass += ' ' + this.data.descClass;
    }
  }

  close(accepted: boolean): void {
    this.ref.close(accepted);
  }

}
