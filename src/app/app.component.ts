import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'github-users-app';
  private readonly ICONS_PATH = '@app/assets/icon/';
  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer){
    this.initCustomIcons();
  }

  private initCustomIcons(): void {
    this.matIconRegistry.addSvgIcon('company-logo', this.domSanitizer.bypassSecurityTrustResourceUrl(this.ICONS_PATH + 'logo-github.svg'));
  }
}
