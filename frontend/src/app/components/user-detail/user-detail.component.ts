import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faMapMarkerAlt, faPhoneAlt} from "@fortawesome/free-solid-svg-icons";
import { Token } from 'src/app/models/Token';
import { User } from 'src/app/models/User';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
    marker = faMapMarkerAlt;
    phoneIcon = faPhoneAlt

    user : User;
    editMode : boolean = false;

    name : string;
    username : string;
    email : string;
    address : string;
    phone : string;

    constructor(private usersService : UsersService, private router : Router) { }

    ngOnInit(): void {
        if (!localStorage.getItem('token')) {
            this.router.navigateByUrl('/login')
            return
        }

        this.usersService.getUserByToken().subscribe((user : User) => {
            this.user = user
            this.name = user.name;
            this.username = user.username;
            this.email = user.email;
            this.address = user.address;
            this.phone = user.phone;
        }, (error : ErrorEvent) => {
            console.log(error)
        })
    }

    logOut () {
        localStorage.removeItem('token')
        this.router.navigateByUrl('/login').then(() => window.location.reload())
    }

    
}
