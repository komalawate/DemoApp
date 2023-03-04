import { Component,Input } from '@angular/core';
import {Data} from '../data'

@Component({
  selector: 'app-mycard',
  templateUrl: './mycard.component.html',
  styleUrls: ['./mycard.component.css']
})
export class MycardComponent {
  @Input() product:Data={
    sources:[],
    title:'',
    type:'',
    episodes:0,
    status:'',
    animeSeason:'',
    picture:'',
    thumbnail:'',
    synonyms:[],
    realtions:[],
    tags:[]
  };

}
