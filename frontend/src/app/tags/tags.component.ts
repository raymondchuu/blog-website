import { Component, OnInit } from '@angular/core';
import { PostServiceService } from '../post-service.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  tags: Array<string> = [
    // "#funny",
    // "#dramatic",
    // "#rental",
    // "#seeagain",
    // "#spooky",
    // "#worththecost",
    // "#lovedIt",
    // "#scary",
    // "#silly",
    // "#good4kidz"
  ];
  constructor(private postservice: PostServiceService) { }

  ngOnInit(): void {
    this.postservice.getTags()
    .subscribe((res: string[]) => {
      this.tags = [...res];
    });
  }

}
