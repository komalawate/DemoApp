import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";



@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private http: HttpClient) { }

  getData(page: number, limitNumber: number, searchValue: string, statusValue: string[], episodes: any) {
    if (statusValue.length == 3) {
      return this.http.get<any>
        (`http://localhost:3000/data/?title_like=^${searchValue}&status=${statusValue.at(0)}&status=${statusValue.at(1)}&status=${statusValue.at(2)}&episodes_gte=${episodes.lower}&episodes_lte=${episodes.upper}&_limit=${limitNumber}&_page=${page}`, { observe: 'response' });
    }
      if (statusValue.length == 2) {
        return this.http.get<any>
          (`http://localhost:3000/data/?title_like=^${searchValue}&status=${statusValue.at(0)}&status=${statusValue.at(1)}&episodes_gte=${episodes.lower}&episodes_lte=${episodes.upper}&_limit=${limitNumber}&_page=${page}`, { observe: 'response' });
      }
      if(statusValue.length == 1){
        return this.http.get<any>
          (`http://localhost:3000/data/?title_like=^${searchValue}&status=${statusValue.at(0)}&episodes_gte=${episodes.lower}&episodes_lte=${episodes.upper}&_limit=${limitNumber}&_page=${page}`, { observe: 'response' });
      }

      else {
        return this.http.get<any>
          (`http://localhost:3000/data/?title_like=^${searchValue}&episodes_gte=${episodes.lower}&episodes_lte=${episodes.upper}&_limit=${limitNumber}&_page=${page}`, { observe: 'response' });
      }
  }
}
