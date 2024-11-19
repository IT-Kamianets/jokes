import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Жарти'; // Заголовок сторінки
  joke: string = ''; // Місце для жарту

  // URL для отримання жартів
  private jokeApiUrl = 'https://webart.work/api/kpnu/joke';

  constructor(private http: HttpClient) {}

  // Метод для отримання жарту
  getJoke(): void {
    this.http.get<any>(this.jokeApiUrl).subscribe({
      next: (response) => {
        this.joke = response.joke || 'Жарт не вдалося завантажити.';
      },
      error: (err) => {
        console.error('Помилка при отриманні жарту:', err);
        this.joke = 'Сталася помилка при завантаженні жарту.';
      }
    });
  }
}
