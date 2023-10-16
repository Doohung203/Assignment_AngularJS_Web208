import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from 'interfaces/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  API_URL = `http://localhost:8080/api/products`
  // API_URL = `http://localhost:3000/products`
  constructor(private http : HttpClient) { }

  getProductById( _id : number | string) : Observable<IProduct>{
    return this.http.get<IProduct>(`${this.API_URL}/${_id}`)
  }
  getAll() : Observable<IProduct[]> {
    return  this.http.get<IProduct[]>(this.API_URL);
  }
  addProduct(product : IProduct) : Observable<IProduct>{
    return this.http.post<IProduct>(`${this.API_URL}`, product)
  }
  editProduct(product : IProduct) : Observable<IProduct>{
    return this.http.patch<IProduct>(`${this.API_URL}/${product._id}`, product)
  }
  removeProduct(_id : number) : Observable<IProduct>{
    return this.http.delete<IProduct>(`${this.API_URL}/${_id}`)
  }

}
