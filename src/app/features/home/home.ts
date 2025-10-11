import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Header } from '../../shared/components/header/header';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-home',
  imports: [TranslateModule, Header, ButtonModule],
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
