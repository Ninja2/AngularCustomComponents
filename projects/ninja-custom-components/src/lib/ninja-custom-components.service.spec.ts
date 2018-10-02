import { TestBed } from '@angular/core/testing';

import { NinjaCustomComponentsService } from './ninja-custom-components.service';

describe('NinjaCustomComponentsService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: NinjaCustomComponentsService = TestBed.get(NinjaCustomComponentsService);
        expect(service).toBeTruthy();
    });
});
