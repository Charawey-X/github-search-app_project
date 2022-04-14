import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GithubService } from 'src/app/services/github.service';


@Component({
  selector: 'app-searchpage',
  templateUrl: './searchpage.component.html',
  styleUrls: ['./searchpage.component.css']
})
export class SearchpageComponent implements OnInit {
  username!: string;
  isEmpty!: boolean;
  githubService: GithubService;


  constructor(githubService: GithubService, private route: Router) {
    this.githubService=githubService;
   }

  startSearch(){
    if(this.username){
        this.githubService.getData(this.username);
        this.route.navigate(['../results']);
    }else{
        this.isEmpty = true;
    }
  }
  hideAlert(){
    this.isEmpty = false;
  }

  ngOnInit(): void {
    this.isEmpty = false;
  }

}
