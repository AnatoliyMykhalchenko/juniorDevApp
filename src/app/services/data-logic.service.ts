import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { Subject, Observable } from 'rxjs';

export interface IHistory {
  randomNumber: number;
  date: any;
}

@Injectable({
  providedIn: 'root'
})

export class DataLogicService {

  public history: IHistory[] = [];
  public _startTime: string;
  public subject: Subject<any> = new Subject();
  public startWorking: boolean = false;
  public randomNumber: number;
  public developerInfo = {
    img: '../../assets/me.jpg',
    name: 'Anatolii Mykhalchenko',
    email: 'anatoliymykhalchenko@gmail.com',
    telegram: 'https://t.me/joseph_tribbiani_jr',
    linkedin: 'https://linkedin.com/in/anatoliy-mykhalchenko-77993194'
  }
  
  constructor() {}

  public generateRandom(): void {

    this.randomNumber = Math.round(0 - 0.5 + Math.random() * (100 - 0 + 1));
    const time = moment().format('DD/MM/YYYY HH:mm:ss');
    const diff = moment.utc(moment(time, 'DD/MM/YYYY HH:mm:ss').diff(moment(this._startTime, 'DD/MM/YYYY HH:mm:ss'))).format('HH:mm:ss')
    this.history.push({randomNumber: this.randomNumber, date: diff});
    this.startWorking = true;
    this.subject.next({randomNumber: this.randomNumber, startWorking: this.startWorking});
  }

  public set startTime(date) {
    this._startTime = date;
  }

  public getSubject(): Observable<any> {
    return this.subject.asObservable();
  }
}
