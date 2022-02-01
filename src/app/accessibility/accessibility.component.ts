import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-accessibility',
  templateUrl: './accessibility.component.html',
  styleUrls: ['./accessibility.component.css'],
})
export class AccessibilityComponent implements OnInit {
  font_size = 16;

  constructor() {}

  ngOnInit(): void {}

  getFocusMenu() {
    document.getElementById('home')?.focus();
  }
  getFocusContent() {
    document.getElementById('content')?.focus();
  }
  getFocusAccessibility() {
    document.getElementById('accessibility')?.focus();
  }

  setFontSize(idd: string) {
    if (idd === 'a+') {
      this.font_size += 1;
    } else if (idd === 'a-') {
      this.font_size -= 1;
    } else {
      this.font_size = 16;
    }

    let htmlRoot: HTMLElement = <HTMLElement>(
      document.getElementsByTagName('body')[0]
    );
    if (htmlRoot != null) {
      htmlRoot.style.fontSize = `${this.font_size}px`;
    }
  }

  highContrast() {
    let element: HTMLElement = document.getElementById('body') as HTMLElement;
    element.classList.toggle('high-contrast');
  }
}
