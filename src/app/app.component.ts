import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  i = 0;

  somar(){
    console.log(this.i = this.i+1);
  }
}
