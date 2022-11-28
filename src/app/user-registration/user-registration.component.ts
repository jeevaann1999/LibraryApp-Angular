import { Component } from '@angular/core';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent {
name=""
adhaar=""
address=""
pincode=""
dateOfBirth=""
emailid=""
phoneNumber=""
username=""
password=""
confirmpassword=""

readValues=()=>{
  let data:any={
    "name":this.name, "adhaar":this.adhaar, "address":this.address, "pincode":this.pincode, "dateOfBirth":this.dateOfBirth, "emailid":this.emailid, "phoneNumber":this.phoneNumber, "username":this.username, "password":this.password, "confirmpassword":this.confirmpassword 
    }
    console.log(data)
}

}
