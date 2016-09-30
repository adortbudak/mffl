import {Component} from '@angular/core';
import {Platform, ionicBootstrap, MenuController} from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import { TabsPage } from './pages/tabs/tabs';
import {SettingsPage} from "./pages/settings/settings";



@Component({
  template: `
      <ion-menu [content]="content" menuToggle>
        <ion-toolbar>
          <ion-title>Pages</ion-title>
        </ion-toolbar>
        <ion-content>
          <ion-list>
            <button ion-item *ngFor="let p of pages" (click)="openPage(p)">
              {{p.title}}
            </button>
          </ion-list>
        </ion-content>
      </ion-menu>
  <ion-nav [root]="rootPage" #content swipe-back-enabled="false"></ion-nav>`

})
export class MyApp {
  public rootPage: any;
  pages: Array<{title: string, component: any}>;

  constructor(private platform: Platform,
              private menu: MenuController) {
    this.rootPage = TabsPage;

    this.pages = [
      {title: 'Settings', component: 'SettingsPage'}
    ];

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();

    });
  }

  openPage(message){
    this.rootPage = SettingsPage;
}
}



ionicBootstrap(MyApp);
