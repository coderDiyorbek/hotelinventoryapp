import { Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles: [`h1 { color: red; }`]
})
export class AppComponent implements OnInit {
  title = 'hotelinventoryapp';
  
  @ViewChild('name', { static: true }) name!: ElementRef;

  ngOnInit(): void {
    // Your initialization logic goes here
    this.name.nativeElement.innerText = "Hilton Hotel (naative Element)";
  }
}

// import { Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
// import { RoomsComponent } from './rooms/rooms.component';

// @Component({
//   selector: 'hinv-root',
//   templateUrl: './app.component.html',
//   // template: `<h1>Hello World from inline template!</h1>
//   // <p>Angular is Awesome</p>
//   // `,
//   styles: [`h1 { color : red}`]
// })

// export class AppComponent implements OnInit {
//   title = 'hotelinventoryapp';
//   // role = 'Admin';
  
//   @ViewChild('name', {static : true}) name!= ElementRef;
  
//   ngOnInit(): void {
//     throw new Error('Not implemented');
//   }
//   // @ViewChild('user', {read: ViewContainerRef}) vcr!: ViewContainerRef; 
  

//   // ngafterViewInit() {
//   //   const componentRef = this.vcr.createComponent(RoomsComponent);
//   //   componentRef.instance.numberOfRooms = 10;
//   // }
// }
