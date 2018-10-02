import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NinjaCustomComponentsComponent } from './ninja-custom-components.component';

describe('NinjaCustomComponentsComponent', () => {
    let component: NinjaCustomComponentsComponent;
    let fixture: ComponentFixture<NinjaCustomComponentsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NinjaCustomComponentsComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NinjaCustomComponentsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
