import { Component } from '@angular/core';
import { CountryCodePickerComponent } from 'country-code-picker';

@Component({
  selector: 'app-country-code',
  standalone: true,
  imports: [CountryCodePickerComponent],
  templateUrl: './country-code.component.html',
  styleUrl: './country-code.component.css',
})
export class CountryCodeComponent {
  actionSelectEvent(event: Event) {
    console.log(event);
  }
}
