import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
@Component({
  selector: 'app-social-links',
  imports: [ButtonModule , TooltipModule],
  templateUrl: './social-links.html',
  styleUrl: './social-links.css'
})
export class SocialLinks {

}
