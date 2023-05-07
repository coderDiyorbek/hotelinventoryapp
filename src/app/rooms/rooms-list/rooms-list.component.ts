import { Component, OnInit, Input  } from '@angular/core'; // 3 tasini birvarakayiga chaqirdik (We called 3 of them together)
// import { OnInit } from "@angular/core";
import { RoomList } from '../rooms';



@Component({
  selector: 'hinv-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css']
})
export class RoomsListComponent implements OnInit {


  @Input() rooms : RoomList[] = [];

  constructor() {};

  ngOnInit() : void {

  }
}
