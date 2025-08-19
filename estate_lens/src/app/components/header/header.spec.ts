import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have navigation items', () => {
    expect(component.navigationItems.length).toBe(5);
    expect(component.navigationItems[0].label).toBe('Dashboard');
  });

  it('should handle search input', () => {
    const mockEvent = {
      target: { value: 'test search' }
    } as any;
    
    component.onSearchChange(mockEvent);
    expect(component.searchValue).toBe('test search');
  });

  it('should handle navigation item clicks', () => {
    const secondItem = component.navigationItems[1];
    component.onNavItemClick(secondItem);
    
    expect(component.navigationItems[0].active).toBeFalse();
    expect(component.navigationItems[1].active).toBeTrue();
  });
});