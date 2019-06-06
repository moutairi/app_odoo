import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router , RouterEvent} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'


})
export class AppComponent {
  selectedPath = '';
 
  pages = [
   
    {
      title: 'Clients',
      url: '/tabs/uploader'
    },
    {
      title: 'Bills',
      url: '/tabs/feed'
    },
    {
      title: 'Export',
      url: '/tabs/uploader'
    },
    {
      title: 'Import',
      url: '/tabs/uploader'
    },
    {
      title: 'Devis',
      url: '/tabs/feed'
    },
    {
      title: 'Edit-profile',
      url: '/tabs/edit-profile'
    },
    {
      title: 'Logout',
      url: '/login'
    },
    
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router
  ) {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event && event.url) {
        this.selectedPath = event.url;
      }
    });

    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
