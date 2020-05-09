import { Component, OnInit } from '@angular/core';
import { Kitten } from '../kitten';
import { KITTENS } from '../mock-kittens';

@Component({
  selector: 'app-kittens',
  templateUrl: './kittens.component.html',
  styleUrls: ['./kittens.component.css']
})
export class KittensComponent implements OnInit {
  kittens = KITTENS;
  selectedKitten: Kitten;

  constructor() { }

  ngOnInit() {
  }

  onSelect(kitten: Kitten): void {
    this.selectedKitten = kitten;
  }
}