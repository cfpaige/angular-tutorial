import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Kitten }         from '../kitten';
import { KittenService }  from '../kitten.service';

@Component({
  selector: 'app-kitten-detail',
  templateUrl: './kitten-detail.component.html',
  styleUrls: [ './kitten-detail.component.css' ]
})
export class KittenDetailComponent implements OnInit {
  @Input() kitten: Kitten;

  constructor(
    private route: ActivatedRoute,
    private kittenService: KittenService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getKitten();
  }

  getKitten(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.kittenService.getKitten(id)
      .subscribe(kitten => this.kitten = kitten);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.kittenService.updateKitten(this.kitten)
      .subscribe(() => this.goBack());
  }
}