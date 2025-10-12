import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { SocialLinks } from "../social-links/social-links";

@Component({
  selector: 'app-footer',
  imports: [CardModule, ButtonModule, TranslateModule, SocialLinks],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  currentYear = new Date().getFullYear();
}
