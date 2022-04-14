import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/classes/user';
import { GithubService } from 'src/app/services/github.service';


@Component({
  selector: 'app-resultpage',
  templateUrl: './resultpage.component.html',
  styleUrls: ['./resultpage.component.css']
})
export class ResultpageComponent implements OnInit {

  user!: User;
  repos:any[] = [];
  githubService: GithubService;
  //isDoneLoading: boolean;
  //browserRefresh: boolean;
  route: Router;

  constructor(githubService: GithubService, route: Router) {
    this.githubService = githubService;
    this.route = route;
   }

  ngOnInit(): void {
    this.user = this.githubService.user;
    this.repos = this.githubService.repos;
  }

}
