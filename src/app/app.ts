import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { Header } from "./shared/components/header/header";
import { Footer } from "./shared/components/footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonModule, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
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
