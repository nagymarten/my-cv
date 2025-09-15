import { Component, OnInit, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-dark-mode-button',
  imports: [ButtonModule],
  templateUrl: './dark-mode-button.html',
  styleUrl: './dark-mode-button.css',
})
export class DarkModeButton implements OnInit {
  protected readonly title = signal('my_cv');
  isDark = signal(false);

  ngOnInit(): void {
    if (typeof window === 'undefined') return;

    const saved = localStorage.getItem('isDarkMode');
    if (saved !== null) {
      this.isDark.set(saved === 'true');
    } else {
      this.isDark.set(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }

    document.documentElement.classList.toggle('my-app-dark', this.isDark());
  }

  toggleDark() {
    const newValue = !this.isDark();
    this.isDark.set(newValue);
    localStorage.setItem('isDarkMode', String(newValue));
    document.documentElement.classList.toggle('my-app-dark', newValue);
  }
}
