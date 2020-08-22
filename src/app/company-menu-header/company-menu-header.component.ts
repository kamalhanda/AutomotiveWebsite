import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-company-menu-header',
  templateUrl: './company-menu-header.html',
  styleUrls: ['./company-menu-header.css']
})

export class CompanyMenuHeaderComponent implements OnInit {

  selectedMenuItem : number = 1;
  selectedMenu(num : number){
    this.selectedMenuItem = num;
  }

  @Input() showDog: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
