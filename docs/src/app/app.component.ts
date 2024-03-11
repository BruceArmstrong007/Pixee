import { NgClass } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  darkMode = signal<boolean>(false);

  constructor() {
    const item = localStorage.getItem('darkmode');
    if (item === 'true') {
      this.darkMode.set(true);
      return;
    }
    this.darkMode.set(false);
    localStorage.setItem('darkmode', 'false');
  }

  switchMode() {
    if (this.darkMode()) {
      this.darkMode.set(false);
      localStorage.setItem('darkmode', 'false');
      return;
    }
    this.darkMode.set(true);
    localStorage.setItem('darkmode', 'true');
  }
}
