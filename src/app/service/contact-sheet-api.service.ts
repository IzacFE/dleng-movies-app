import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sheet } from '../model/sheet';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ContactSheetApiService {
  constructor(private http: HttpClient) {}

  createSheet(
    name: string,
    email: string,
    phone: string,
    message: string
  ): Observable<Sheet> {
    return this.http.post<Sheet>(`${environment.CONNECTION_URL}`, {
      name,
      email,
      phone,
      message,
    });
  }
}
