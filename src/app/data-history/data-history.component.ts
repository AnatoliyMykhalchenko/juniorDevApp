import { Component, OnInit } from '@angular/core';
import { IHistory, DataLogicService } from '../services/data-logic.service';

@Component({
  selector: 'app-data-history',
  templateUrl: './data-history.component.html',
  styleUrls: ['./data-history.component.scss']
})
export class DataHistoryComponent implements OnInit {
  history: IHistory[]
  constructor(public dataService: DataLogicService) { 
    this.history = dataService.history;
    
   }

  ngOnInit() {
  }

}
