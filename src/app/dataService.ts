import { Injectable, Input } from '@angular/core';
import { ApiService } from './apiService';
import { Data } from './data';
import { BehaviorSubject, throttle } from 'rxjs';
import { HttpResponse } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  productPerPage: number = 100;
  selectedPage = new BehaviorSubject<number>(1);
  product = new BehaviorSubject<Data[]>([]);
  count=new BehaviorSubject<any>("");
  searchValue:string='';
  episodes={ lower: 0, upper: 20 };
  statusReceived: string[] = [];

  constructor(private apiService: ApiService) {
    this.apiService.getData(
      this.selectedPage.value, this.productPerPage, this.searchValue, this.statusReceived, this.episodes).subscribe((res: HttpResponse<any>) => {
        this.count.next(res.headers.get('X-Total-Count'));
        this.updateData(res.body);
    });

  }
  updateData(data: any) {
    this.product.next(data);
  }

  get pageNumbers(): number[] {
    return Array(Math.ceil(this.count.value / this.productPerPage))
      .fill(0).map((x, i) => i + 1);

  }
  slicedProducts() {
    this.apiService.getData(
      this.selectedPage.value, this.productPerPage, this.searchValue, this.statusReceived, this.episodes).subscribe((res: HttpResponse<any>) => {
        this.count.next(res.headers.get('X-Total-Count'));
        console.log(this.count);
        this.updateData(res.body);
      });
  }

}

