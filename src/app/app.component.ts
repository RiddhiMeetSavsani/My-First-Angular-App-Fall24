import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CommonModule, JsonPipe, NgForOf} from '@angular/common'; // Import CommonModule
import {User} from './Shared/Models/User';
import {ContentCardComponent} from "./content-card/content-card.component";
import {IContent} from "./icontent";

// Declare IContent interface

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, JsonPipe, CommonModule, ContentCardComponent], //Keep in mind
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  //Keep in mind. it was without s and []
})
export class AppComponent {
  title = 'User Generation';
  // user1 : User = {id: 1, firstName: "Matt", lastName: "Haug",
  //   department: 'Programming', isAdmin: false};
  // user2 : User = {id: 2, firstName: "Darren", lastName:
  //     "Takakki", department: "Web Dev", isAdmin: true};
  // //Can declare values either way
  // userList: User[] = //any[] would have worked as well
  //   [this.user1,this.user2,
  //     {id: 3, firstName: "John", lastName: "Doe", department:
  //         "Programming", isAdmin: false},
  //     {id: 4, firstName: "Jane", lastName: "Doe", department:
  //         "Programming", isAdmin:true}
  //   ]
  //
  // toggleAdminStatus(user: User): void {
  //   user.isAdmin = !user.isAdmin;
  // }

  // Properties
  message: string = 'Hello, Angular!';

  // Method
  showMessage() {
    alert(this.message);
  }

  contentArray: IContent[] = [
    {
      contentId: 1,
      imageUrl: 'https://angular.io/assets/images/logos/angular/angular.png',
      body: 'This is the body of the first content',
      type: 'news'
    },
    {
      contentId: 2,
      imageUrl: 'https://angular.io/assets/images/logos/angular/angular_solidBlack.png',
      body: 'This is the body of the second content',
      type: 'blog'
    }
  ];

  // Declare individualContentItem of type IContent
  individualContentItem: IContent;

  constructor() {
    this.individualContentItem = {
      contentId: 1,
      imageUrl: 'https://angular.io/assets/images/logos/angular/angular.png',
      body: 'This is the body of the content',
      type: 'news'
    };
  }
}

