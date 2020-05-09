import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Kitten } from './kitten';
import { MessageService } from './message.service';


@Injectable({ providedIn: 'root' })
export class KittenService {

  private kittensUrl = 'api/kittens';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET kittens from the server */
  getKittens(): Observable<Kitten[]> {
    return this.http.get<Kitten[]>(this.kittensUrl)
      .pipe(
        tap(_ => this.log('fetched kittens')),
        catchError(this.handleError<Kitten[]>('getKittens', []))
      );
  }

  /** GET kitten by id. Return `undefined` when id not found */
  getKittenNo404<Data>(id: number): Observable<Kitten> {
    const url = `${this.kittensUrl}/?id=${id}`;
    return this.http.get<Kitten[]>(url)
      .pipe(
        map(kittens => kittens[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} kitten id=${id}`);
        }),
        catchError(this.handleError<Kitten>(`getKitten id=${id}`))
      );
  }

  /** GET kitten by id. Will 404 if id not found */
  getKitten(id: number): Observable<Kitten> {
    const url = `${this.kittensUrl}/${id}`;
    return this.http.get<Kitten>(url).pipe(
      tap(_ => this.log(`fetched kitten id=${id}`)),
      catchError(this.handleError<Kitten>(`getKitten id=${id}`))
    );
  }

  /* GET kittens whose name contains search term */
  searchKittens(term: string): Observable<Kitten[]> {
    if (!term.trim()) {
      // if not search term, return empty kitten array.
      return of([]);
    }
    return this.http.get<Kitten[]>(`${this.kittensUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
         this.log(`found kittens matching "${term}"`) :
         this.log(`no kittens matching "${term}"`)),
      catchError(this.handleError<Kitten[]>('searchKittens', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new kitten to the server */
  addKitten(kitten: Kitten): Observable<Kitten> {
    return this.http.post<Kitten>(this.kittensUrl, kitten, this.httpOptions).pipe(
      tap((newKitten: Kitten) => this.log(`added kitten w/ id=${newKitten.id}`)),
      catchError(this.handleError<Kitten>('addKitten'))
    );
  }

  /** DELETE: delete the kitten from the server */
  deleteKitten(kitten: Kitten | number): Observable<Kitten> {
    const id = typeof kitten === 'number' ? kitten : kitten.id;
    const url = `${this.kittensUrl}/${id}`;

    return this.http.delete<Kitten>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted kitten id=${id}`)),
      catchError(this.handleError<Kitten>('deleteKitten'))
    );
  }

  /** PUT: update the kitten on the server */
  updateKitten(kitten: Kitten): Observable<any> {
    return this.http.put(this.kittensUrl, kitten, this.httpOptions).pipe(
      tap(_ => this.log(`updated kitten id=${kitten.id}`)),
      catchError(this.handleError<any>('updateKitten'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a KittenService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`KittenService: ${message}`);
  }
}