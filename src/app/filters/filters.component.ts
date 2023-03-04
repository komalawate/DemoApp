import { Component, Output, EventEmitter } from '@angular/core';
import { Data } from '@angular/router';
import { Options } from 'ng5-slider';
import {DataService} from '../dataService';


@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent {
  constructor(private dataService:DataService) { }
  status = [{ id: "1", name: "FINISHED" }, { id: "2", name: "UPCOMING" },{id:"3",name:"ONGOING"}]
  statusReceived: string[] = [];
  public value = { lower: 1, upper: 3057 };

  getValue(event: any) {
    this.dataService.episodes=event.detail.value;
    this.dataService.selectedPage.next(1);
    this.dataService.slicedProducts();
  }

  checkValue(event: any) {
    {
      if (event.target.checked) {
        console.log(event.target.value);
        this.statusReceived.push(event.target.value);
       this.dataService.statusReceived=this.statusReceived;
       this.dataService.selectedPage.next(1);
       this.dataService.slicedProducts();

      }
      else {
        this.statusReceived = this.statusReceived.filter(obj => obj !== event.target.value);
        this.dataService.statusReceived=this.statusReceived;
        this.dataService.slicedProducts;
      }
    }
  }
}
