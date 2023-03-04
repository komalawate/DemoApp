import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../dataService'
import { Data } from '../data';
import { filter } from 'underscore';
import {ApiService} from '../apiService';

@Component({
  selector: 'app-card',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardComponent {
  constructor(private dataService: DataService,private apiService:ApiService) { }
  products: Data[] = [];
  selectedPage: number = 1;
  productPerPage = this.dataService.productPerPage;
  searchTextInput: string = '';
  filterTextInput: number = 0;
  filterStatusChanged: string = '';
  ProductsData: Data[] = [];

  ngOnInit(): void {
    this.dataService.selectedPage.subscribe((res) => {
      this.selectedPage = res;
      this.getSlicedData(res);
    });
  }

  getSlicedData(page: number) {
    this.dataService.product.subscribe((res) => {
      this.products = res;
      this.ProductsData = res;
    })
  }

  onFilterTextChanged(filterValue: any) {
    this.products = this.ProductsData;
    if (filterValue.lower != 0 || filterValue.upper != 20) {
      this.products = this.products.filter((x) => filterValue.lower <= x.episodes && filterValue.upper >= x.episodes)
    }
  }

  onFilterStatusChanged(statusValue: string[]) {
    this.products = this.ProductsData;
    if (statusValue.length != 0) {
      this.products = this.products.filter((x) => {
        return statusValue.includes(x.status);
      })
    }
  }

}



