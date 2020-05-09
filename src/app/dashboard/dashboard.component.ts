import { Component, OnInit } from '@angular/core';
import { Kitten } from '../kitten';
import { KittenService } from '../kitten.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  kittens: Kitten[] = [];

  constructor(private kittenService: KittenService) { }

  ngOnInit() {
    this.getKittens();
  }

  getKittens(): void {
    this.kittenService.getKittens()
      .subscribe(kittens => this.kittens = kittens.slice(1, 5));
  }
}