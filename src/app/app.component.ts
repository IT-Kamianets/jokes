import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jokes';
  joke: string | null = null;

  onButtonClick(): void {
    this.joke = 'Це випадковий жарт!';
  }
}
