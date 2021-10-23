import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-page',
  templateUrl: './client-page.component.html',
  styleUrls: ['./client-page.component.css']
})
export class ClientPageComponent implements OnInit {
  sideBarOpen = true;
    title = 'frontend';
    public term : string
    public isTokenThere : boolean
    sideBarToggler() {
        this.sideBarOpen = !this.sideBarOpen;
      }
      constructor(private router: Router) {
        console.log("Token:  " + localStorage.getItem('token'));
        this.isTokenThere = localStorage.getItem('token') != null
    }
    search () {
      this.router.navigate(["/shop", this.term]).then(() => window.location.reload())
  }
  ngOnInit(): void {
  }

}
