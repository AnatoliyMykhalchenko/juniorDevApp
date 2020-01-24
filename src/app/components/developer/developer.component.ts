import { Component, OnInit } from '@angular/core';
import { DataLogicService } from '../../services/data-logic.service';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.scss']
})
export class DeveloperComponent implements OnInit {

  constructor(public dataService: DataLogicService) { }

  ngOnInit() {
  }

}
