import { Component } from '@angular/core';

@Component({
  selector: 'app-book-issue',
  templateUrl: './book-issue.component.html',
  styleUrls: ['./book-issue.component.css']
})
export class BookIssueComponent {

  name=""
  title=""
  dateOfIssue=""
  membershipNumber=""

  readValues=()=>
  {
    let data:any={
      "name":this.name,
      "title":this.title,
      "dateOfIssue":this.dateOfIssue,
      "membershipNumber":this.membershipNumber
    }
    console.log(data)
  }


}
