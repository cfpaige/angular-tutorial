import { Component, OnInit } from '@angular/core';

import { Kitten } from '../kitten';
import { KittenService } from '../kitten.service';

@Component({
  selector: 'app-kittens',
  templateUrl: './kittens.component.html',
  styleUrls: ['./kittens.component.css']
})
export class KittensComponent implements OnInit {
  kittens: Kitten[];

  constructor(private kittenService: KittenService) { }

  ngOnInit() {
    this.getKittens();
  }

  getKittens(): void {
    this.kittenService.getKittens()
    .subscribe(kittens => this.kittens = kittens);
  }
}