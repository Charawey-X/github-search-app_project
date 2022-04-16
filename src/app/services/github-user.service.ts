import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { User } from '../classes/user';


@Injectable({
  providedIn: 'root'
})
export class GithubUserService {
  url:string ="https://api.github.com/users/";
  user!: User;

  constructor(private http:HttpClient, private route: Router) {
    this.user = new User("", "", "", "", 0, 0, 0, new Date(), "", "", "", new Date(), "", "", "", "");
    this.route = route;
   }
  /*getUser(username:string){

    //from https://api.github.com/users/username

    return this.http.get(this.url + username);
  }
  */

  getUser(username: string){
    interface ApiResponseUser{
        login:string,
        name:string,
        company:string,
        location:string,
        followers:number,
        following:number,
        public_repos:number,
        created_at:Date,
        avatar_url:string,
        html_url:string,
        bio:string,
        updated_at:Date,
        blog:string,
        twitter:string,
        email:string,
        accountlink:string,
    }

    var promise = new Promise((resolve, reject) => {
      firstValueFrom(this.http.get<ApiResponseUser>('https://api.github.com/users/' + username))
        .then((response) =>{
            this.user.login = response.login;
            this.user.name = response.name;
            this.user.company=response.company;
            this.user.location = response.location;
            this.user.followers = response.followers;
            this.user.following = response.following;
            this.user.public_repos = response.public_repos;
            this.user.created_at = response.created_at;
            this.user.avatar_url = response.avatar_url;
            this.user.html_url = response.html_url;
            this.user.bio = response.bio;
            this.user.updated_at = response.updated_at;
            this.user.blog=response.blog;
            this.user.twitter=response.twitter;
            this.user.email=response.email;
            this.user.accountlink=response.accountlink;

            this.user = new User(
                  this.user.login,
                  this.user.name,
                  this.user.company,
                  this.user.location,
                  this.user.followers,
                  this.user.following,
                  this.user.public_repos,
                  this.user.created_at,
                  this.user.avatar_url,
                  this.user.html_url,
                  this.user.bio,
                  this.user.updated_at,
                  this.user.blog,
                  this.user.twitter,
                  this.user.email,
                  this.user.accountlink
                  );

            resolve(response);
        },
        error => {
            let status = error.status;
            if (status == 404){
                this.route.navigate(['../404']);
            }
            reject(error);
          }
        );
      });
    return promise;
  }
}
