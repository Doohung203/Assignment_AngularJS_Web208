import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from 'interfaces/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  API_URL = `http://localhost:3000/api/products`
  constructor(private http : HttpClient) { }

  get(endpoint: string) {
    return this.http.get(`${this.API_URL}/${endpoint}`);
  }

  getAll() : Observable<IProduct[]> {
    return  this.http.get<IProduct[]>(this.API_URL);
  }
  getProductById(id: number) {
    const url = `${this.API_URL}/${id}`; 
    return this.http.get(url);
  }
}
