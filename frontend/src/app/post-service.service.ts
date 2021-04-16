import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BlogPost } from './BlogPost';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

const perPage = 6;

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {
  url: string = "https://ng-blogapp-api.herokuapp.com/";

  constructor(private http: HttpClient) { }

  
  getPosts(page, tag, category): Observable<BlogPost[]> {
    let posturl = this.url + `api/posts?page=${page}&perPage=${perPage}`
    if (tag !== null && tag !== undefined) {
      posturl += `&tag=${tag}`;
    }
    if (category !== null && category !== undefined) {
      posturl += `&category=${category}`;
    }
    return this.http.get<BlogPost[]>(posturl);
  }

  getPostbyId(id): Observable<BlogPost> {
    return this.http.get<BlogPost>(this.url + `api/posts/${id}`);
  }

  getCategories(): Observable<any> {
    return this.http.get(this.url + "api/categories");
  }

  getTags(): Observable<string[]> {
    return this.http.get<string[]>(this.url + "api/tags");
  }
}
