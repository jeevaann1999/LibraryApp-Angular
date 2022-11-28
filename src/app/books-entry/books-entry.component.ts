import { Component } from '@angular/core';

@Component({
  selector: 'app-books-entry',
  templateUrl: './books-entry.component.html',
  styleUrls: ['./books-entry.component.css']
})
export class BooksEntryComponent {
  title=""
  image=""
  author=""
  description=""
  publisher=""
  distributor=""
  language=""
  releasedYear=""
  price=""

  readValues=()=>
  {
    let data:any={
      "title":this.title,
      "image":this.image,
      "author":this.author,
      "language":this.language,
      "description":this.description,
      "publisher":this.publisher,
      "distributor":this.distributor,
      "releasedYear":this.releasedYear,
      "price":this.price
    }
    console.log(data)
  }

}

