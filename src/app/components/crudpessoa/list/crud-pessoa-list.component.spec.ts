import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudPessoaListComponent } from './crud-pessoa-list.component';

describe('CrudPessoaListComponent', () => {
  let component: CrudPessoaListComponent;
  let fixture: ComponentFixture<CrudPessoaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudPessoaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudPessoaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
