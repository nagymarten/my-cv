import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { DarkModeButton } from '../../shared/components/dark-mode-button/dark-mode-button';
import { LanguageSwicherButton } from '../../shared/components/language-swicher-button/language-swicher-button';

@Component({
  selector: 'app-home',
  imports: [TranslateModule, DarkModeButton, LanguageSwicherButton],
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
