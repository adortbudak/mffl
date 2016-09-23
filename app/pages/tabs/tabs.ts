import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { TeamsPage } from '../teams/teams';
import { ScoresPage } from '../scores/scores';


@Component({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {

  public tab1Root: any;
  public tab2Root: any;
  public tab3Root: any;

  constructor() {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.tab1Root = HomePage;
    this.tab2Root = TeamsPage;
    this.tab3Root = ScoresPage;
  }
}
