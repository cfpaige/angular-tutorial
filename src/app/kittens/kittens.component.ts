import { Component, OnInit } from '@angular/core';
import { Kitten } from '../kitten';

@Component({
  selector: 'app-kittens',
  templateUrl: './kittens.component.html',
  styleUrls: ['./kittens.component.css']
})
export class KittensComponent implements OnInit {
  kitten: Kitten = {
    id: 1,
    name: 'Mittens'
  };

  constructor() { }

  ngOnInit() {
  }

}