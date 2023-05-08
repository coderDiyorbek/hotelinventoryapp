import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy  } from '@angular/core'; // 3 tasini birvarakayiga chaqirdik (We called 3 of them together)
// import { OnInit } from "@angular/core";
import { RoomList } from '../rooms';



@Component({
  selector: 'hinv-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css'], 
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnInit {


  @Input() rooms : RoomList[] = [];

  @Output() selectedRoom = new EventEmitter<RoomList>(); // bu holda EventEmitter() dan hosil bo'lgan selectedRoom (RoomList) tipidagi hodisani qaytaradi

  constructor() {};

  ngOnInit() : void {

  }

  // selectRoom metodi qaytadigan qiymat roomni ushlab oladi va uning ustida amal bajarish mumkin
  selectRoom(room: RoomList) {
    this.selectedRoom.emit(room);
  }
}
