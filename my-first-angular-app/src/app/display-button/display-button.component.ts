import { Component, OnInit } from '@angular/core';
import { getLocaleDateFormat } from '@angular/common';

@Component({
  selector: 'app-display-button',
  templateUrl: './display-button.component.html',
  styleUrls: ['./display-button.component.css'],
})
export class DisplayButtonComponent implements OnInit {
  paragraphVisibility = false;
  clickArray = [];

  constructor() { }

  ngOnInit() {
  }

  toggleParagraphVisibility() {
    this.paragraphVisibility = !this.paragraphVisibility;
    this.clickArray.push(new Date());
  }

}
