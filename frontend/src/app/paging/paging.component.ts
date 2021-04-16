import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.css']
})
export class PagingComponent implements OnInit {
  @Input() page: number;

  @Output() newPage = new EventEmitter();

  leftPageClicked() {
    if (this.page > 1) {
      this.page -= 1
      this.newPage.emit(this.page);
    }
  }

  rightPageClicked() {
    this.page += 1;
    this.newPage.emit(this.page);
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
