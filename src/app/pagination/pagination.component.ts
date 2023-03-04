import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DataService } from '../dataService';
import { Data } from '../data';
import { Element } from '@angular/compiler';
@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {
  constructor(private dataService: DataService) {
  }

  allData: Data[] = [];
  productPerPage: number = this.dataService.productPerPage;//100
  selectedPage: number=1;
  count =0;
  entry: number = 0;
  exit: number = 5;
  ngOnInit() {
    this.dataService.selectedPage.subscribe((res) => {
      this.selectedPage = res;
      this.dataService.product.subscribe((res) => {
        this.pageNumbers;    
      })
      this.dataService.count.subscribe((res)=>{
        this.count=res;
      })
    })

  }
  pages: number[] = new Array(5);
  get pageNumbers(): number[] {
    this.pages = this.dataService.pageNumbers.slice(this.entry, this.exit);
    return this.pages;
  }

  changePage(page: number) {
    console.log(page);//5
    if (this.pages.at(4) == page) {
      this.entry = this.entry + 4;//4
      this.exit = this.exit + 4;//9
      this.dataService.selectedPage.next(page);
      this.dataService.slicedProducts();
    }
    else if (this.pages.at(0) == page && page != 1) {
      this.entry = this.entry - 4;
      this.exit = this.exit - 4;
      this.dataService.selectedPage.next(page);
      this.dataService.slicedProducts();
    }
    else {
      this.dataService.selectedPage.next(page);
      this.dataService.slicedProducts();
    }
  }
  nextPage() {
    let page = this.selectedPage + 1; 
    if (this.pages.includes(page)) {
      if (this.pages.at(4) == page) {
        this.entry = this.entry + 4;
        this.exit = this.exit + 4;
        this.dataService.selectedPage.next(page);
        this.dataService.slicedProducts();
      }
      else {
        this.dataService.selectedPage.next(page);
        this.dataService.slicedProducts();
      }
    }
  }
  prevPage() {
    let page = this.selectedPage - 1;//5
    if (this.pages.includes(page)) {
      if (this.pages.at(0) == page && page != 1 && page>4 ) {
        this.entry = this.entry - 4;
        this.exit = this.exit - 4;
        this.dataService.selectedPage.next(page);
        this.dataService.slicedProducts();
      }
      else {
        this.dataService.selectedPage.next(page);
        this.dataService.slicedProducts();
      }
    }
  }

  getNext() {
    if (this.exit != this.count) {
      this.entry = this.entry + 4;
      this.exit = this.exit + 4;
    }
  }
  getPrev() {
    if (this.entry >= 4) {
      this.entry = this.entry - 4;
      this.exit = this.exit - 4;
    }
  }

}
