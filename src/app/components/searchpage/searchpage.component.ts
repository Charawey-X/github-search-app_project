import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-searchpage',
  templateUrl: './searchpage.component.html',
  styleUrls: ['./searchpage.component.css']
})
export class SearchpageComponent implements OnInit {
  username!: string;
  isEmpty!: boolean;


  constructor(private route: Router) { }

  startSearch(){
    if(this.username){
        this.route.navigate(['results'], {queryParams:{data:this.username}});
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
