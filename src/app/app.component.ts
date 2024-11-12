import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jokes';
  joke: string = 'Натисніть кнопку, щоб отримати жарт!';

  constructor(private http: HttpClient) {}

  getJoke() {
    this.http.get<any>('https://webart.work/api/kpnu/joke').subscribe(
      (data) => {
        this.joke = data.joke || 'Не вдалося отримати жарт.';
      },
      (error) => {
        console.error('Error fetching joke:', error);
        this.joke = 'Помилка при завантаженні жарту.';
      }
    );
  }
}
