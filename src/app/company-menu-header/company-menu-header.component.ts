import { Component, Input, OnInit } from '@angular/core';
import { AUTOMOTIVE_CONFIG } from '../config/env-variables';

interface AscoImage {
  image: string;
  label: string;
}

@Component({
  selector: 'app-company-menu-header',
  templateUrl: './company-menu-header.html',
  styleUrls: ['./company-menu-header.css']
})

export class CompanyMenuHeaderComponent implements OnInit {
  constructor() { }

  fbUrl: string = AUTOMOTIVE_CONFIG.FACEBOOK_URL;
  twitterUrl: string = AUTOMOTIVE_CONFIG.TWITTER_URL;
  public imageChangeInterval = 6000;
  public ascoImages: Array<AscoImage> = [
    {
      image: './assets/images/img_1.jpg',
      label: 'India'
    },
    {
      image: './assets/images/img_2.jpg',
      label: 'Japan'
    },
    {
      image: './assets/images/img_3.jpg',
      label: 'Image 3'
    }
  ];
  selectedMenuItem = 1;

  @Input() showDog: boolean;

  selectedMenu(num: number): void{
    this.selectedMenuItem = num;
  }

  ngOnInit(): void {
  }

}
