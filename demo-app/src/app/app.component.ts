import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'demo-app';
  fullName: string = 'Hello';

  onSave() {
    console.log('Name: ', this.fullName);
  }

}
