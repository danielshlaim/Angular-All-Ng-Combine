import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sweet-cake',
  templateUrl: './sweet-cake.component.html',
  styleUrls: ['./sweet-cake.component.css']
})
export class SweetCakeComponent implements OnInit {

  cake:any = {};

  constructor() {
    this.cake = {};
   }

  ngOnInit(): void {
  }
  handleSubmit(data: any): void {
    this.cake.name = data.name;
    this.cake.type = data.type;
    this.cake.tags = data.tags === '' ? [] : data.tags.split(',');
    console.log(this.cake)
  }

  isCarrot(): boolean {
    return this.cake.type === 'carrot';
  }
}
