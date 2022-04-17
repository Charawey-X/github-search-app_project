import { Component, OnInit } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCodeBranch, faStar } from '@fortawesome/free-solid-svg-icons';
import { GithubRepoService } from 'src/app/services/github-repo.service';



@Component({
  selector: 'app-resultpage',
  templateUrl: './resultpage.component.html',
  styleUrls: ['./resultpage.component.css']
})
export class ResultpageComponent implements OnInit {

  repos:any
  githubIcon = faGithub
  forkIcon = faCodeBranch
  starIcon = faStar
  username!:string
  searchString!:string
  //isDoneLoading!:boolean

  //browserRefresh: boolean;

  constructor(private githubRepoService: GithubRepoService) { }

  repoLink(link:string){
    window.open(link)
  }

  liveLink(link:string){
    window.open(link)
  }

  //ngAfterViewInit(){
      //this.isDoneLoading = true;
  //}


  ngOnInit(): void {
    //this.isDoneLoading = false;
    //this.browserRefresh = browserRefresh;
  }

  newUserName(username:string){
    this.githubRepoService.getRepo(username)
    this.repos = this.githubRepoService.repos
    //this.ngOnInit();
  }

}
