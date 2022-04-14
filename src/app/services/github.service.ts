import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { Repositories } from '../classes/repositories';
import { User } from '../classes/user';


@Injectable({
  providedIn: 'root'
})
export class GithubService {
  user: User;
  repo: Repositories;
  repos:any[] = [];

  constructor(private http: HttpClient, private route: Router) {
    this.user = new User("", "", "", 0, 0, 0, new Date(), "", "", "", new Date());
    this.repo = new Repositories("", "", 0, 0, "", "", new Date());
    this.route = route;
   }

   getData(username: string){
    interface ApiResponseUser{
        login:string,
        name:string,
        location:string,
        followers:number,
        following:number,
        public_repos:number,
        created_at:Date,
        avatar_url:string,
        html_url:string,
        bio:string,
        updated_at:Date
    }
    interface ApiResponseRepo{
        name:string,
        description:string,
        stargazers_count:number,
        forks_count:number,
        language:string,
        svn_url:string,
        created_at:Date
    }
    // User
    var promise:any = new Promise((resolve, reject) => {
      firstValueFrom(this.http.get<ApiResponseUser>('https://api.github.com/users/' + username))
        .then((response) =>{
            this.user.login = response.login;
            this.user.name = response.name;
            this.user.location = response.location;
            this.user.followers = response.followers;
            this.user.following = response.following;
            this.user.public_repos = response.public_repos;
            this.user.created_at = response.created_at;
            this.user.avatar_url = response.avatar_url;
            this.user.html_url = response.html_url;
            this.user.bio = response.bio;
            this.user.updated_at = response.updated_at;

            resolve(response);
        }, error => {
            let status = error.status;
            if (status == 404){
                this.route.navigate(['../404']);
            }
            reject(error);
        })
        // Repositories
        firstValueFrom(this.http.get<ApiResponseRepo[]>('https://api.github.com/users/' + username + '/repos'))
        .then((response) =>{
            for (let i=0; i < response.length; i++){
                this.repo.name = response[i].name;
                this.repo.description = response[i].description;
                this.repo.watchers = response[i].stargazers_count;
                this.repo.forks = response[i].forks_count;
                this.repo.language = response[i].language;
                this.repo.svn_url = response[i].svn_url;
                this.repo.created_at=response[i].created_at;

                this.repo = new Repositories(
                  this.repo.name,
                  this.repo.description,
                  this.repo.watchers,
                  this.repo.forks,
                  this.repo.language,
                  this.repo.svn_url,
                  this.repo.created_at
                  );
                this.repos.push(this.repo);
            }

            resolve(response);
        }, error => {
            let status = error.status;
            if (status == 404){
                this.route.navigate(['../404']);
            }
            reject(error);
        });
        return promise;
    });
    //return promise;
  }
}
