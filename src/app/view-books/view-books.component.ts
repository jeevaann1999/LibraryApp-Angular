import { Component } from '@angular/core';

@Component({
  selector: 'app-view-books',
  templateUrl: './view-books.component.html',
  styleUrls: ['./view-books.component.css']
})
export class ViewBooksComponent {

  books:any= [
    {
      "title":"A Tale of Two Cities",
      "image":"https://bestlifeonline.com/wp-content/uploads/sites/3/2020/10/A-Tale-of-Two-Cities-Cover.jpg",
      "author":"Charles Dickens",
      "language":"English",
    },
    {
      "title":"The Alchemist",
      "image":"https://bestlifeonline.com/wp-content/uploads/sites/3/2020/10/The-Alchemist-book-cover.jpg",
      "author":"Paulo Coelho",
      "language":"English",
    },
    {
      "title":"The Da Vinci Code",
      "image":"https://byliner.com/wp-content/uploads/2021/11/The-Da-Vinci-Code.jpg",
      "author":"Dan Brown",
      "language":"English",
    },
    {
      "title":"Harry Potter",
      "image":"https://m.media-amazon.com/images/I/51PcUAhn15L._SX498_BO1,204,203,200_.jpg",
      "author":"J.K Rowling",
      "language":"English",
    },
    {
      "title":"The Hobbit",
      "image":"https://bestlifeonline.com/wp-content/uploads/sites/3/2020/10/The-Hobbit-book-cover.jpg",
      "author":"J.R.R Tokien",
      "language":"English",
    },
    {
      "title":"The ABC Murders",
      "image":"https://s2982.pcdn.co/wp-content/uploads/2018/01/the-abc-murders.jpg.optimal.jpg",
      "author":"Agatha Christie",
      "language":"English",
    },
    {
      "title":"Wings of Fire",
      "image":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1588286863l/634583._SY475_.jpg",
      "author":"A P J Abdul Kalam",
      "language":"English",
    },
    {
      "title":"Ente Katha",
      "image":"https://m.media-amazon.com/images/I/41RD9CKSA7L.jpg",
      "author":"Madhavikutty",
      "language":"Malayalam",
    },
    {
      "title":"KManju",
      "image":"https://m.media-amazon.com/images/I/612UnCXJ7AL.jpg",
      "author":"M.T Vasudevan Nair",
      "language":"Malayalam",
    },
    {
      "title":"Kayar",
      "image":"https://m.media-amazon.com/images/I/51+56aI6x9L.jpg",
      "author":"Thakazhi",
      "language":"Malayalam",
    },
  ]
}
