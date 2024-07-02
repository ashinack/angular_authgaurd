import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'auth-gaurd';

  constructor(private router: Router) {}

  redirectToComponent() {
    this.router.navigate(['/home']);
  }

  homeClick() {
    this.router.navigate(['/home']);
  }

  postClick() {
    this.router.navigate(['/post']);
  }
  countryClick() {
    this.router.navigate(['/country']);
  }

  productClick() {
    this.router.navigate(['/products']);
  }
}
