import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { ScrollTop } from 'primeng/scrolltop';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { DividerModule } from 'primeng/divider';

interface CvEventKeys {
  nameKey?: string;
  dateKey?: string;
  descKey?: string;
  icon?: string;
  color?: string;
  image?: string;
}
interface CvEventResolved {
  name?: string;
  date?: string;
  description?: string;
  icon?: string;
  color?: string;
  image?: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    ButtonModule,
    TimelineModule,
    CardModule,
    ScrollTop,
    AnimateOnScrollModule,
    DividerModule,
  ],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home {
  private translate = inject(TranslateService);

  private handballEventsKeys: CvEventKeys[] = [
    {
      nameKey: 'HOME.HANDBALL.EVENTS.VALUR.NAME',
      dateKey: 'HOME.HANDBALL.EVENTS.VALUR.DATE',
      descKey: 'HOME.HANDBALL.EVENTS.VALUR.DESC',
      icon: 'pi pi-trophy',
      color: '#06b6d4',
      image: 'assets/images/valur.jpg',
    },
    {
      nameKey: 'HOME.HANDBALL.EVENTS.GUMMERSBACH.NAME',
      dateKey: 'HOME.HANDBALL.EVENTS.GUMMERSBACH.DATE',
      descKey: 'HOME.HANDBALL.EVENTS.GUMMERSBACH.DESC',
      icon: 'pi pi-star',
      color: '#3b82f6',
      // image is optional
    },
    {
      nameKey: 'HOME.HANDBALL.EVENTS.SZEGED.NAME',
      dateKey: 'HOME.HANDBALL.EVENTS.SZEGED.DATE',
      descKey: 'HOME.HANDBALL.EVENTS.SZEGED.DESC',
      icon: 'pi pi-flag',
      color: '#8b5cf6',
    },
    {
      nameKey: 'HOME.HANDBALL.EVENTS.FREDERICIA.NAME',
      dateKey: 'HOME.HANDBALL.EVENTS.FREDERICIA.DATE',
      descKey: 'HOME.HANDBALL.EVENTS.FREDERICIA.DESC',
      icon: 'pi pi-send',
      color: '#ef4444',
    },
    {
      nameKey: 'HOME.HANDBALL.EVENTS.OV_HELSINGBORG.NAME',
      dateKey: 'HOME.HANDBALL.EVENTS.OV_HELSINGBORG.DATE',
      icon: 'pi pi-shield',
      color: '#16a34a',
    },
  ];

  private itEventsKeys: CvEventKeys[] = [
    {
      nameKey: 'HOME.IT.EVENTS.DRIVING.NAME',
      dateKey: 'HOME.IT.EVENTS.DRIVING.DATE',
      descKey: 'HOME.IT.EVENTS.DRIVING.DESC',
      icon: 'pi pi-id-card',
      color: '#94a3b8',
    },
    {
      nameKey: 'HOME.IT.EVENTS.ENGLISH.NAME',
      dateKey: 'HOME.IT.EVENTS.ENGLISH.DATE',
      descKey: 'HOME.IT.EVENTS.ENGLISH.DESC',
      icon: 'pi pi-comments',
      color: '#10b981',
    },
    {
      nameKey: 'HOME.IT.EVENTS.BSC.NAME',
      dateKey: 'HOME.IT.EVENTS.BSC.DATE',
      descKey: 'HOME.IT.EVENTS.BSC.DESC',
      icon: 'pi pi-book',
      color: '#a855f7',
    },
    {
      nameKey: 'HOME.IT.EVENTS.INTERNSHIP.NAME',
      dateKey: 'HOME.IT.EVENTS.INTERNSHIP.DATE',
      descKey: 'HOME.IT.EVENTS.INTERNSHIP.DESC',
      icon: 'pi pi-cog',
      color: '#f59e0b',
    },
    {
      nameKey: 'HOME.IT.EVENTS.INGENIMIND.NAME',
      dateKey: 'HOME.IT.EVENTS.INGENIMIND.DATE',
      descKey: 'HOME.IT.EVENTS.INGENIMIND.DESC',
      icon: 'pi pi-briefcase',
      color: '#2563eb',
    },
  ];

  handballEvents: CvEventResolved[] = [];
  itEvents: CvEventResolved[] = [];

  constructor() {
    this.resolveAll();
    this.translate.onLangChange.subscribe(() => this.resolveAll());
  }

  private tin(optKey?: string): string | undefined {
    if (!optKey) return undefined;
    const v = this.translate.instant(optKey);
    return v && v !== optKey ? v : undefined;
  }

  private resolveAll() {
    const mapResolve = (e: CvEventKeys) => this.resolveOne(e);

    const notEmpty = (e: CvEventResolved) => !!(e.name || e.date || e.description || e.image);

    this.handballEvents = this.handballEventsKeys.map(mapResolve).filter(notEmpty);
    this.itEvents = this.itEventsKeys.map(mapResolve).filter(notEmpty);
  }

  private resolveOne(e: CvEventKeys): CvEventResolved {
    const name = this.tin(e.nameKey);
    const date = this.tin(e.dateKey);
    const description = this.tin(e.descKey);

    const image = e.image;

    return {
      ...(name ? { name } : {}),
      ...(date ? { date } : {}),
      ...(description ? { description } : {}),
      ...(e.icon ? { icon: e.icon } : {}),
      ...(e.color ? { color: e.color } : {}),
      ...(image ? { image } : {}),
    };
  }
}
