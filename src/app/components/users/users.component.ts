import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GithubUserService } from 'src/app/services/github-user.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  username!:string;
  userDetails:any;
  isEmpty!:boolean;

  constructor(private active:ActivatedRoute,
    private githubUserService:GithubUserService,
    private route: Router
  ) { }

  startSearch(){
    this.active.params.subscribe(params =>{
      this.username =params['id'];
      //console.log("params =", this.username);
    })

    if(this.username){
      this.githubUserService.getUser(this.username).subscribe(
        //{
        //complete:()=>{console.log("successful")},
        //error:()=>{
        //alert("Username does not exist");
        //this.route.navigate(['search']);
        //},
        //next:
        (data:any=[])=>{
          this.userDetails = data;
          //console.log(this.userDetails);
        }
      )
      this.route.navigate(['../results']);
    }
    else{
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
