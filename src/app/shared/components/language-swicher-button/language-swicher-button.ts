import { Component, Input, OnInit, inject } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PLATFORM_ID } from '@angular/core';
import { SelectModule } from 'primeng/select'; // PrimeNG 20+
import { TranslateService, TranslateModule } from '@ngx-translate/core';

type Lang = { name: string; code: 'en' | 'hu' | (string & {}) };

@Component({
  selector: 'app-language-swicher-button',
  imports: [CommonModule, FormsModule, SelectModule, TranslateModule],
  templateUrl: './language-swicher-button.html',
  styleUrl: './language-swicher-button.css',
})
export class LanguageSwicherButton implements OnInit {
  @Input() languages: Lang[] = [
    { name: 'English', code: 'en' },
    { name: 'Magyar', code: 'hu' },
    { name: 'Deutsch', code: 'de' },
  ];

  selectedLanguage!: Lang;

  private readonly translate = inject(TranslateService);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly browser = isPlatformBrowser(this.platformId);

  constructor() {
    this.initLanguage();
  }
  ngOnInit(): void {
    this.initLanguage();
  }

  private initLanguage(): void {
    const saved = this.browser ? localStorage.getItem('language') : null;
    const fallback = 'hu';
    const browserPref = this.browser ? navigator.language?.slice(0, 2) ?? fallback : fallback;

    const initial = (saved || browserPref || fallback).toLowerCase();

    const match = this.languages.find((l) => l.code.toLowerCase() === initial) ?? this.languages[0];

    this.selectedLanguage = match;

    this.translate.setDefaultLang(match.code);
    this.translate.use(match.code);
    this.setHtmlLang(match.code);

    if (this.browser) {
      localStorage.setItem('language', match.code);
    }
  }

  onLanguageChange(event: { value: Lang }, selectRef?: any) {
    const langCode = event.value.code;

    this.translate.use(langCode);
    this.setHtmlLang(langCode);

    if (this.browser) {
      localStorage.setItem('language', langCode);
    }

    const el = selectRef?.el?.nativeElement as HTMLElement | undefined;
    if (el) {
      el.blur();
      el.classList.remove('p-focus');
    }
  }

  getFlagUrl(code: string): string {
    switch (code) {
      case 'en':
        return 'https://flagcdn.com/gb.svg';
      case 'hu':
        return 'https://flagcdn.com/hu.svg';
      case 'de':
        return 'https://flagcdn.com/de.svg';
      case 'sv':
        return 'https://flagcdn.com/se.svg';
      default:
        return 'https://flagcdn.com/unknown.svg';
    }
  }

  private setHtmlLang(code: string) {
    if (!this.browser) return;
    document.documentElement.setAttribute('lang', code);
  }
}
