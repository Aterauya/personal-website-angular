import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminalTypedTextComponent } from './terminal-typed-text.component';

describe('TerminalTypedTextComponent', () => {
  let component: TerminalTypedTextComponent;
  let fixture: ComponentFixture<TerminalTypedTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerminalTypedTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerminalTypedTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
