import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-square',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {

  @Input() value: 'X' | 'O' | null = null;

  get backgroundColor() {
    return this.value ? 'filled' : 'empty';
  }
  constructor() {}

  ngOnInit() {}
}
