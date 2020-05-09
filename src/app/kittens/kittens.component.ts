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

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.kittenService.addKitten({ name } as Kitten)
      .subscribe(kitten => {
        this.kittens.push(kitten);
      });
  }

  delete(kitten: Kitten): void {
    this.kittens = this.kittens.filter(h => h !== kitten);
    this.kittenService.deleteKitten(kitten).subscribe();
  }

}