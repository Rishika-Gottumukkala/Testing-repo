import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class HeaderComponent {
  @Input() logoUrl: string = 'https://res.cloudinary.com/dsxcdtj0h/image/upload/v1755593825/Adobe_Express_-_file_azqejx.png';
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