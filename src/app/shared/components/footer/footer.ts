import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { DividerModule } from 'primeng/divider';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { SocialLinks } from "../social-links/social-links";

@Component({
  selector: 'app-footer',
  imports: [DividerModule, CardModule, ButtonModule, TranslateModule, SocialLinks],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  currentYear = new Date().getFullYear();
}
