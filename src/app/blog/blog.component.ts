import { Component, OnInit } from '@angular/core';
import blogData from '../blogData.json';
import { BlogPost } from '../BlogPost';
import { PostComponent } from '../post/post.component';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogPosts: Array<BlogPost> = blogData;
  post: PostComponent;
  constructor() { }

  ngOnInit(): void {
  }

}
