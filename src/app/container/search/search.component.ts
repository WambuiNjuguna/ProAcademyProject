import { Component, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchText: string= "";



  //1. Craete an event
  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter <string> ();
  //2. create a method


  //Optional 2nd argument of @ViewChild()
  //1.Read: use it to read the different token from the queried element;
  //2.static: Determines when the query is resolved
  //This is when the view is initialized(before the first change detection) for the first time.
  //False if you want it to be resolved after every change detection
  @ViewChild ('searchInput') searchInputEl: ElementRef;

  onSearchTextChanged (){
   
  }

  // updateSearchText(event:any){
  //   this.searchText=event.target.value} This was when it was on input as commented out in the html

  // updateSearchText (inputEL: HTMLInputElement){
  //   // console.log(inputELS.value)
  //   this.searchText=inputEL.value;
  //   this.searchTextChanged.emit (this.searchText)
  // } This was the method for when a person clicks. You access the search componennt

  updateSearchText (){
    // console.log(inputELS.value)
    this.searchText=this.searchInputEl.nativeElement.value;
    this.searchTextChanged.emit (this.searchText)
  } 
  


}
