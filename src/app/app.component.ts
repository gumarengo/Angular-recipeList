import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  i = 0;
  loadedFeature = 'recipe';

  somar(){
    console.log(this.i = this.i+1);
  }

  onNavigate(feature: string){
    this.loadedFeature = feature;
  }
}
