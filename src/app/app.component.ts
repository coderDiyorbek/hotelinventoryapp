import { Component } from '@angular/core';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  // template: `<h1>Hello World from inline template!</h1>
  // <p>Angular is Awesome</p>
  // `,
  // styleUrls: ['./app.component.css']
  styles: [`h1 { color : red}`]
})
export class AppComponent {
  title = 'hotelinventoryapp';
  role = 'Admin';
}

