import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogHistoryComponent } from './components/dialog-history/dialog-history.component';
import { DataLogicService } from './services/data-logic.service';
import * as moment from 'moment'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  private subscription: Subscription;
  private startWorking: boolean = false;
  constructor(
    private dialog: MatDialog,
    private dataService: DataLogicService
  ) {}

  ngOnInit(): void {
    this.dataService.startTime = moment().format('DD/MM/YYYY HH:mm:ss');
    this.subscription = this.dataService.getSubject().subscribe(obj => {
      this.startWorking = obj.startWorking;
    })
  }

  public openDialogHistory(): void {
    if(this.dataService.startWorking) {
      const dialog = this.dialog.open(DialogHistoryComponent, {
        panelClass: 'modal-history'
      })
    }
  }


}
