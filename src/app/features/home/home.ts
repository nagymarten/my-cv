import { Component } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { DarkModeButton } from '../../shared/components/dark-mode-button/dark-mode-button';
import { LanguageSwicherButton } from '../../shared/components/language-swicher-button/language-swicher-button';

@Component({
  selector: 'app-home',
  imports: [TranslateModule , DarkModeButton, LanguageSwicherButton],
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  constructor(private translate: TranslateService) {
    this.translate.addLangs(['de', 'en']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }
}
