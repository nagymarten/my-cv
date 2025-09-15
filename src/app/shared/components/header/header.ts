import { Component, OnInit, inject, DestroyRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Menubar } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { LanguageSwicherButton } from '../language-swicher-button/language-swicher-button';
import { DarkModeButton } from './dark-mode-button/dark-mode-button';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    Menubar,
    RouterLink,
    TranslateModule,
    LanguageSwicherButton,
    AvatarModule,
    DarkModeButton,
    InputTextModule,
    CommonModule
  ],
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
})
export class Header implements OnInit {
  private translate = inject(TranslateService);
  private readonly destroyRef = inject(DestroyRef);

  items: MenuItem[] = [];

  ngOnInit(): void {
    this.buildItems();
    this.translate.onLangChange
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => this.buildItems());
  }

  private buildItems() {
    this.items = [
      { label: this.t('NAV.HOME'), icon: 'pi pi-home', routerLink: '/' },
      { label: this.t('NAV.ABOUT'), icon: 'pi pi-user', routerLink: '/about' },
      { label: this.t('NAV.PROJECTS'), icon: 'pi pi-code', routerLink: '/projects' },
      { label: this.t('NAV.CAREER'), icon: 'pi pi-trophy', routerLink: '/career' },
      { label: this.t('NAV.CONTACT'), icon: 'pi pi-envelope', routerLink: '/contact' },
    ];
  }

  private t(key: string) {
    return this.translate.instant(key);
  }
}
