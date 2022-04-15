import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { Repositories } from '../classes/repositories';

@Injectable({
  providedIn: 'root'
})
export class GithubRepoService {
  repo: Repositories;
  repos:any[] = [];

  constructor(private http: HttpClient, private route: Router) {
    this.repo = new Repositories("", "", 0, 0, "", "", new Date());
    this.route = route;
   }

   getData(username: string){
    interface ApiResponseRepositories{
        name:string,
        description:string,
        watchers:number,
        forks:number,
        language:string,
        svn_url:string,
        created_at:Date
    }

    // User
    var promise:any = new Promise((resolve, reject) => {
      // Repositories
      firstValueFrom(this.http.get<ApiResponseRepositories[]>('https://api.github.com/users/' + username + '/repos'))
        .then((response) =>{
            for (let i=0; i < response.length; i++){
                this.repo.name = response[i].name;
                this.repo.description = response[i].description;
                this.repo.watchers = response[i].watchers;
                this.repo.forks = response[i].forks;
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
