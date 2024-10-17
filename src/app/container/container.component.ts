import { Component } from '@angular/core';
import {Product} from './../models/Product' ;


@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {

 listOfString: string []= ['Mary', 'Pury', 'Jane', 'Sarah']

 searchText: string = '';

 setSearchText (value: string){
  this.searchText= value;

 }
}
