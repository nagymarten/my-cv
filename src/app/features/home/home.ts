import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Header } from '../../shared/components/header/header';

@Component({
  selector: 'app-home',
  imports: [TranslateModule, Header],
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
