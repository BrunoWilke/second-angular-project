import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  movies = ['Interestelar', 'Forest Gump', 'A Chegada', 'O Rei do Show', 'Molly`s Game'];
  
  handleEvent(){
    console.log(this.movies);
  }
}
