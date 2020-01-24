import { Component, OnInit } from '@angular/core';
import { DataLogicService, IHistory } from 'src/app/services/data-logic.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataHistoryComponent } from 'src/app/data-history/data-history.component';

@Component({
  selector: 'app-dialog-history',
  templateUrl: './dialog-history.component.html',
  styleUrls: ['./dialog-history.component.scss']
})
export class DialogHistoryComponent {
  history: IHistory[]

  constructor(public dialog: MatDialog, dataService: DataLogicService) {
    this.history = dataService.history;
   }

  openDialog(): void {
    const dialogRef = this.dialog.open(DataHistoryComponent, {
      width: '250px',
      data: {number: this.history[0].randomNumber, date: this.history[0].date}
    });


  }
}