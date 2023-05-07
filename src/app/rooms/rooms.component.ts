import { Component } from "@angular/core";
import { OnInit } from "@angular/core";
import { Room, RoomList } from "./rooms";

@Component({
  selector: "hinv-rooms",
  templateUrl: "./rooms.component.html",
  styleUrls: ["./rooms.component.css"],
})
export class RoomsComponent implements OnInit {
  hotelName = "Hilton Hotel";

  numberOfRooms: number = 10;

  hideRooms = false;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };

  roomList: RoomList[] = [];

  constructor() {}

  ngOnInit(): void {
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

  toggle() {
    this.hideRooms = !this.hideRooms;
  }
}
