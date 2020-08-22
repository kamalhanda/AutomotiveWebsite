import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-company-menu',
  templateUrl: './company-menu.component.html',
  styleUrls: ['./company-menu.component.css']
})
export class CompanyMenuComponent{
  selectedMenuItem : number = 0;
  onClick(num:number){
    this.selectedMenuItem = num;
  }
}
