import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { WishItem } from '../../shared/models/wishitem';


@Injectable({
  providedIn: 'root'
}) // root: entire app can use class

export class WishService {

  constructor(private http: HttpClient) { }

  private getStandardOptions() : any {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }

  getWishes() {
    let options = this.getStandardOptions();

    options.params = new HttpParams({
      fromObject: {
        format: 'json'
      } //this allows httpRequest to be for specific type of file so get doesn't need to specify
    })

    return this.http.get('assets/wishes.json', options).pipe(catchError(this.handleError)); 
    // dont put whole path, only within folder
    // pipe is called to process an error if it occurs, handleError will handle/process error

    //this.http.post(url, body, options) // similar to get except 3 parms
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status == 0) {
      console.error('There is an issue with the client or network: ', error.error);
    } else {
      console.error('Server-side error: ', error.error);
    }

    return throwError(() => new Error('Cannot retrieve wishes from server. Please try again.'));
  }

  private addWish(wish: WishItem) {
    let options = this.getStandardOptions();

    options.headers = options.headers.set('Authorization', 'value-need-for-authorization');
    this.http.post('assets/wishes.json', wish, options) // similar to get except 3 parms
  }
}
