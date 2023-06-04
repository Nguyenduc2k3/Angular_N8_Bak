import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Product } from '../common/product';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://127.0.0.1:8088/api/products/'; // Đường dẫn tới API của Node.js

  constructor(private http: HttpClient) { }

  getData(): Observable<Product[]> {
    return this.http.get<any>(this.apiUrl); // Gửi yêu cầu GET đến API
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'Đã xảy ra lỗi';
    if (error.error instanceof ErrorEvent) {
      // Xử lý lỗi client-side
      errorMessage = error.error.message;
    } else {
      // Xử lý lỗi server-side
      errorMessage = `Mã lỗi: ${error.status}\nThông báo: ${error.error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

  getProduct(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url);
  }

  createProduct(product: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, product);
  }

  updateProduct(id: string, product: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<any>(url, product);
  }

  deleteProduct(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<any>(url);
  }
}
