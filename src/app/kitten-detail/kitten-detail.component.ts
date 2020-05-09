import { Component, OnInit, Input } from '@angular/core';
import { Kitten } from '../kitten';

@Component({
  selector: 'app-kitten-detail',
  templateUrl: './kitten-detail.component.html',
  styleUrls: ['./kitten-detail.component.css']
})

export class KittenDetailComponent implements OnInit {
  @Input() kitten: Kitten;

  constructor() { }

  ngOnInit() {
  }

}