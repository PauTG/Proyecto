import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
public token
  constructor(private route: Router) { 
  
  }


  ngOnInit(): void {
    console.log(this.token)
    this.token = sessionStorage.getItem("AuthToken");
  }
  LogOut(){
    this.token = sessionStorage.clear()
  }
}
