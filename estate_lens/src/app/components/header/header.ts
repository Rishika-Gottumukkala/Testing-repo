import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class HeaderComponent {
  searchValue = '';

  navigationItems = [
    { label: 'Dashboard', active: true },
    { label: 'Properties', active: false },
    { label: 'Income', active: false },
    { label: 'Expenses', active: false },
    { label: 'Reports', active: false }
  ];

  onSearchChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.searchValue = target.value;
  }

  onNavItemClick(clickedItem: any) {
    this.navigationItems.forEach(item => item.active = false);
    clickedItem.active = true;
  }
}