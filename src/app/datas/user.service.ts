import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8088/api/auth/signup'; // Thay đổi thành URL của API Node.js
  private apiSignin = 'http://localhost:8088/api/auth/signin'; // Thay đổi thành URL của API Node.js

  constructor(private http: HttpClient) { }

  register(userData: any): Observable<any> {
    const registerUrl = `${this.apiUrl}`; // Đường dẫn API đăng ký trong Node.js

    // Gửi yêu cầu POST tới API đăng ký
    return this.http.post(registerUrl, userData);
  }
  login(credentials: any): Observable<any> {
    const loginUrl = `${this.apiSignin}`; // Đường dẫn API đăng nhập trong Node.js

    // Gửi yêu cầu POST tới API đăng nhập
    return this.http.post(loginUrl, credentials);
  }
  isLoggedIn() {
    // Kiểm tra xem người dùng đã đăng nhập hay chưa
    // Điều kiện có thể thay đổi tùy vào cách xác thực của bạn
    // Ví dụ: Kiểm tra xem có thông tin người dùng trong local storage hay không
    return !!localStorage.getItem('credentials');
  }

  logout() {
    // Xử lý đăng xuất
    // Ví dụ: Xóa thông tin người dùng khỏi local storage
    localStorage.removeItem('credentials');
  }
}
