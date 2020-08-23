import { Component, OnInit, Input } from '@angular/core';
import { AUTOMOTIVE_CONFIG } from '../config/env-variables';

@Component({
  selector: 'app-company-menu-header',
  templateUrl: './company-menu-header.html',
  styleUrls: ['./company-menu-header.css']
})

export class CompanyMenuHeaderComponent implements OnInit {

  fbUrl: string = AUTOMOTIVE_CONFIG.FACEBOOK_URL;
  twitterUrl: string = AUTOMOTIVE_CONFIG.TWITTER_URL;
  selectedMenuItem : number = 1;
  selectedMenu(num : number){
    this.selectedMenuItem = num;
  }

  @Input() showDog: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
