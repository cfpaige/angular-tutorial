import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Kitten } from './kitten';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const kittens = [
      { id: 11, name: 'Mr Rumpus' },
      { id: 12, name: 'Luna' },
      { id: 13, name: 'Nutmeg' },
      { id: 14, name: 'Cinnamon' },
      { id: 15, name: 'Toothless' },
      { id: 16, name: 'Colonel Mustard' },
      { id: 17, name: 'Salem' },
      { id: 18, name: 'Whiskey' },
      { id: 19, name: 'Meatball' },
      { id: 20, name: 'Ramen' },
      { id: 21, name: 'Custard' },
      { id: 22, name: 'Wonton' },
      { id: 23, name: 'Heathcliff' },
      { id: 24, name: 'Truffle' },
      { id: 25, name: 'Hamlet' }
    ];
    return {kittens};
  }

  // Overrides the genId method to ensure that a kitten always has an id.
  // If the kittens array is empty,
  // the method below returns the initial number (11).
  // if the kittens array is not empty, the method below returns the highest
  // kitten id + 1.
  genId(kittens: Kitten[]): number {
    return kittens.length > 0 ? Math.max(...kittens.map(kitten => kitten.id)) + 1 : 11;
  }
}