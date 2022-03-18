import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frog',
  templateUrl: './frog.component.html',
  styleUrls: ['./frog.component.css']
})
export class FrogComponent implements OnInit {

  image = 'https://cdn.britannica.com/84/206384-050-00698723/Javan-gliding-tree-frog.jpg';
  isVisiblePic = false;
  isVisibleBtn = false;
  displayImage(): void {
    this.isVisiblePic = true;
  };
  displayNext(): void {
    this.isVisibleBtn = true;
  };
  constructor() { }

  ngOnInit(): void {
  }

}
