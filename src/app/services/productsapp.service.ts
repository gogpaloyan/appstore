import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {delay, Observable} from "rxjs";

export interface productinter{
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating:{
    rate: number,
    count: number
  }
}
@Injectable({
  providedIn: 'root'
})
export class ProductsappService {

  getProducts(): Observable<productinter> {
    return this.http.get<productinter>('https://fakestoreapi.com/products',
      {
        params: new HttpParams({
          fromObject: {limit: 7}
        })
      }).pipe(delay(500))
  }

  constructor(private http: HttpClient) {
  }
}
