import { Component, OnInit, Input } from '@angular/core';
import { BlogPost } from '../BlogPost';
import { PostServiceService } from '../post-service.service';

@Component({
  selector: 'app-latest-posts',
  templateUrl: './latest-posts.component.html',
  styleUrls: ['./latest-posts.component.css']
})
export class LatestPostsComponent implements OnInit {
  posts: Array<BlogPost>;

  constructor(private postservice: PostServiceService) { }

  ngOnInit(): void {
    this.postservice.getPosts(1, null, null)
    .subscribe((res) => {
      this.posts = res.slice(0, 3);
    })
  }

}
