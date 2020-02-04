import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataLogicService } from '../../services/data-logic.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-figure',
  templateUrl: './figure.component.html',
  styleUrls: ['./figure.component.scss']
})
export class FigureComponent implements OnInit, OnDestroy {
  public startWorking: boolean;
  private subscription: Subscription;
  public randomNumber: number;

  constructor( public dataService: DataLogicService ) { }

  ngOnInit() {
    this.randomNumber = this.dataService.randomNumber;
    this.startWorking = this.dataService.startWorking;
    this.subscription = this.dataService.getSubject().subscribe(obj => {
      this.startWorking = obj.startWorking;
      this.randomNumber = obj.randomNumber;
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  
}
