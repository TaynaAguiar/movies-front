import { Component, OnInit } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-accessibility',
  templateUrl: './accessibility.component.html',
  styleUrls: ['./accessibility.component.css'],
})
export class AccessibilityComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
   
  }

  getFocus() {
    document.getElementById("home")?.focus(); 
    // setTimeout(() => {
    //  const teste2: HTMLElement | null = document.getElementById('home').style.color = '#fff';
    // }, 200);
  }
}
