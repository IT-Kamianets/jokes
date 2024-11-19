import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class JokeComponent {
  title = 'Жарти з API';
  joke = 'Натисніть кнопку, щоб отримати жарт!';

  constructor(private http: HttpClient) {}

  getJoke() {
    const apiUrl = 'https://webart.work/api/kpnu/joke';
    this.http.get<{ joke: string }>(apiUrl).subscribe({
      next: (response) => {
        this.joke = response.joke;
      },
      error: () => {
        this.joke = 'Не вдалося завантажити жарт. Спробуйте ще раз!';
      }
    });
  }
},
