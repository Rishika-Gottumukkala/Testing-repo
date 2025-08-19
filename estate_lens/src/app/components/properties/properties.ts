import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-properties',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './properties.html',
  styleUrls: ['./properties.scss']
})
export class PropertiesComponent implements OnInit {
  properties = [
    { address: '123 Oak Street, Anytown, CA', type: 'Single Family', value: '$750,000', status: 'Active' },
    { address: '456 Maple Avenue, Anytown, CA', type: 'Condo', value: '$450,000', status: 'Active' },
    { address: '789 Pine Lane, Anytown, CA', type: 'Townhouse', value: '$550,000', status: 'Sold' },
    { address: '101 Elm Road, Anytown, CA', type: 'Multi-Family', value: '$1,200,000', status: 'Active' },
    { address: '222 Cedar Court, Anytown, CA', type: 'Commercial', value: '$2,500,000', status: 'Pending' },
  ];

  // filters
  selectedType: string = '';
  selectedStatus: string = '';
  selectedValueRange: string = '';
  searchText: string = '';

  // dynamic filter options
  uniqueTypes: string[] = [];
  uniqueStatuses: string[] = [];
  valueRanges: string[] = ['< $500k', '$500k - $1M', '$1M+'];

  ngOnInit() {
    this.uniqueTypes = [...new Set(this.properties.map(p => p.type))];
    this.uniqueStatuses = [...new Set(this.properties.map(p => p.status))];
  }

  // helper to parse $ values
  private parseValue(value: string): number {
    return Number(value.replace(/[^0-9]/g, ''));
  }

  // main filter
  get filteredProperties() {
    return this.properties.filter(p => {
      const matchesType = this.selectedType ? p.type === this.selectedType : true;
      const matchesStatus = this.selectedStatus ? p.status === this.selectedStatus : true;

      let matchesValue = true;
      const price = this.parseValue(p.value);

      if (this.selectedValueRange === '< $500k') {
        matchesValue = price < 500000;
      } else if (this.selectedValueRange === '$500k - $1M') {
        matchesValue = price >= 500000 && price <= 1000000;
      } else if (this.selectedValueRange === '$1M+') {
        matchesValue = price > 1000000;
      }

      const matchesSearch = this.searchText
        ? p.address.toLowerCase().includes(this.searchText.toLowerCase()) ||
          p.type.toLowerCase().includes(this.searchText.toLowerCase()) ||
          p.status.toLowerCase().includes(this.searchText.toLowerCase())
        : true;

      return matchesType && matchesStatus && matchesValue && matchesSearch;
    });
  }
}
