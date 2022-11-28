import { Component } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

username=""
password=""

readValues=()=>{
  let data:any={
    "username":this.username,
    "password":this.password
  }
  console.log(data)

  if (this.username=="user" && this.password=="12345") {
    alert("Valid credentials")
  } else {
    alert("Invalid credentials")
  }
}

}
