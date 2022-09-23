import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  isActive: boolean = false;
  currentRoute: string | undefined;

  constructor(private router: Router) {
      this.router.events.subscribe((event) => {
          if (event instanceof NavigationEnd) {
              this.currentRoute = event.url;
              this.isActive = false;
          }
      });
  }

    ngOnInit(): void {
      this.isActive = false
    }

    openMenu() {
      this.isActive = !this.isActive;
    }
}
