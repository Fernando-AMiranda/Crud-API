import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudPessoaFormComponent } from './crud-pessoa-form.component';

describe('CrudPessoaFormComponent', () => {
  let component: CrudPessoaFormComponent;
  let fixture: ComponentFixture<CrudPessoaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudPessoaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudPessoaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
