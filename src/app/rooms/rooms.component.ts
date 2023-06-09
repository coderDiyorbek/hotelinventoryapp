import { AfterViewInit, Component, QueryList, ViewChild, ViewChildren } from "@angular/core";
import { OnInit } from "@angular/core";
import { Room, RoomList } from "./rooms";
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: "hinv-rooms",
  templateUrl: "./rooms.component.html",
  styleUrls: ["./rooms.component.css"],
})
export class RoomsComponent implements OnInit, AfterViewInit {
  hotelName = "Hilton Hotel";

  numberOfRooms: number = 10;

  hideRooms = false;

  title = "Room List";

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };

  roomList: RoomList[] = [];

  selectedRoom!: RoomList;

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

  @ViewChildren(HeaderComponent) headerChildrenComponent !:  QueryList<HeaderComponent>;

  constructor() {}
  
  ngOnInit(): void {
    
    // console.log(this.headerComponent);
    this.roomList = [
      {
        roomNumber: 1,
        roomType: "Deluxe room",
        amenities: "Air-conditioner, Free Wi-FI, TV, Bathroom, Kitchen",
        price: 500,
        photos:
        "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?cs=srgb&dl=pexels-pixabay-164595.jpg&fm=jpg",
        checkinTime: new Date("11-Nov-2022"),
        checkoutTime: new Date("12-Nov-2022"),
        rating: 4.5,
      },
      {
        roomNumber: 2,
        roomType: "Deluxe room",
        amenities: "Air-conditioner, Free Wi-FI, TV, Bathroom, Kitchen",
        price: 1000,
        photos:
          "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?cs=srgb&dl=pexels-pixabay-164595.jpg&fm=jpg",
          checkinTime: new Date("11-Nov-2022"),
        checkoutTime: new Date("12-Nov-2022"),
        rating: 3.4435,
      },
      {
        roomNumber: 3,
        roomType: "Private Suite",
        amenities: "Air-conditioner, Free Wi-FI, TV, Bathroom, Kitchen",
        price: 15000,
        photos:
        "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?cs=srgb&dl=pexels-pixabay-164595.jpg&fm=jpg",
        checkinTime: new Date("11-Nov-2022"),
        checkoutTime: new Date("12-Nov-2022"),
        rating: 2.6,
      },
    ];
  }
  
  ngAfterViewInit(){
    this.headerComponent.title = "Room View (in ngAfterViewInit)";
    // console.log(this.headerComponent);

    // console.log(this.headerChildrenComponent);
    this.headerChildrenComponent.last.title = "Last Title";
  }
  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = "Rooms List";
  }
  
  selectRoom(room: RoomList) {
    this.selectedRoom = room;
    console.log(room);
  }
  
  addRoom() {
    const room: RoomList = {
      roomNumber: 4,
      roomType: "Deluxe room",
      amenities: "Air-conditioner, Free Wi-FI, TV, Bathroom, Kitchen",
      price: 500,
      photos:
        "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?cs=srgb&dl=pexels-pixabay-164595.jpg&fm=jpg",
      checkinTime: new Date("11-Nov-2022"),
      checkoutTime: new Date("12-Nov-2022"),
      rating: 4.5,
    };

    // this.roomList.push(room);

    this.roomList = [...this.roomList, room]; // allRight
  }
}
