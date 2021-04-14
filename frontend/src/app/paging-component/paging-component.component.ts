import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paging-component',
  templateUrl: './paging-component.component.html',
  styleUrls: ['./paging-component.component.css']
})
export class PagingComponentComponent implements OnInit {

  page: number;
  
  constructor() { }

  ngOnInit(): void {
  }

}
