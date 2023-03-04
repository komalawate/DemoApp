import { Component, EventEmitter, Output } from '@angular/core';
import {DataService} from '../dataService';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  result:any="";
  constructor(private dataService:DataService){
    this.dataService.count.subscribe((res)=>{
      this.result=res;
    })
  }
 
   onSearchTextChanged(event:any){
    
  console.log(event.target.value);
  this.dataService.searchValue=event.target.value;
  this.dataService.selectedPage.next(1);
  this.dataService.slicedProducts();
  }

}
