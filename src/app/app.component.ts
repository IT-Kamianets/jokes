import { Component } from '@angular/core';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  joke: string = 'Натисніть кнопку, щоб отримати жарт!';

  constructor(private http: HttpClient) {}

  getJoke() {
    this.http.get<{ joke: string }>('https://webart.work/api/kpnu/joke').subscribe(
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

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient()],
}).catch((err) => console.error(err));
