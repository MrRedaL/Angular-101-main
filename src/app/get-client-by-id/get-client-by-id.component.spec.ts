import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetClientByIDComponent } from './get-client-by-id.component';

describe('GetClientByIDComponent', () => {
  let component: GetClientByIDComponent;
  let fixture: ComponentFixture<GetClientByIDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetClientByIDComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetClientByIDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
