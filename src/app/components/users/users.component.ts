import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/classes/user';
import { GithubUserService } from 'src/app/services/github-user.service';
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faBuilding, faMapMarked, faEnvelope, faUser, faLink } from "@fortawesome/free-solid-svg-icons";
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  @Output() onSubmitForm:EventEmitter<string> = new EventEmitter

  username!:string;
  userDetails:any;

  user!:User
  twitterIcon = faTwitter
  githubIcon = faGithub
  locationIcon = faMapMarked
  companyIcon = faBuilding
  emailIcon = faEnvelope
  userIcon = faUser
  linkIcon = faLink
  iconcolor = '#64ffda'

  constructor(private route:ActivatedRoute,
    private githubUserService:GithubUserService,
  ) { }



  ngOnInit(): void {
    /*this.active.params.subscribe(params =>{
      this.username =params['id'];
      //console.log("params =", this.username);
    })

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
     */

    this.route.queryParams.subscribe((params:any)=>{
      this.username = params.data
      this.onSubmitForm.emit(this.username)
      this.githubUserService.getUser(this.username)
      this.user = this.githubUserService.user
    })
  }
}
