import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Kitten } from './kitten';
import { KITTENS } from './mock-kittens';
import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })
export class KittenService {

  constructor(private messageService: MessageService) { }

  getKittens(): Observable<Kitten[]> {
    // TODO: send the message _after_ fetching the kittens
    this.messageService.add('KittenService: fetched kittens');
    return of(KITTENS);
  }

  getKitten(id: number): Observable<Kitten> {
    // TODO: send the message _after_ fetching the kitten
    this.messageService.add(`KittenService: fetched kitten id=${id}`);
    return of(KITTENS.find(kitten => kitten.id === id));
  }
}