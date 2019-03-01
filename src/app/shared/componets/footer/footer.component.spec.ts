import { FooterComponent } from "./footer.component";
import { ComponentFixture, TestBed, async } from "@angular/core/testing";
import fromModule from './footer.module';
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";
import { MatDivider } from "@angular/material/divider";
import { MatIcon } from "@angular/material/icon";

describe('FooterComponent', () => {
    let component: FooterComponent;
    let fixture: ComponentFixture<FooterComponent>;
    let footerDebugElement: DebugElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: fromModule.COMMON_IMPORTS,
            declarations: fromModule.COMMON_DECLARATIONS
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FooterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        footerDebugElement = fixture.debugElement;
    });

    it('should create', () => {
        expect(component).toBeDefined();
    });

    it('should find the "description" <span>', () => {
        const spanDebugElement = footerDebugElement.query(By.css('span.description'));
        const span: HTMLElement = spanDebugElement.nativeElement;
        expect(span.textContent).toContain('We build software and visual content that seamlessly fits your needs');
    });

    it('should find the footer columns', () => {
        const footerColumnTitles = ['CONTACT', 'NAVIGATE', 'WORK', 'MORE INFO']
        const columnDebugElements = footerDebugElement.queryAll(By.css('#footer-columns>div'));
        expect(columnDebugElements.length).toBe(4);

        columnDebugElements.forEach(columnDebugElement => {
            const spanDebugElement = columnDebugElement.query(By.css('span'));
            const span: HTMLElement = spanDebugElement.nativeElement;
            expect(footerColumnTitles).toContain(span.textContent)
        });
    });

    it('should find the mat-divider', () => {
        const matDividerDebugElement = footerDebugElement.query(By.directive(MatDivider));
        expect(matDividerDebugElement).toBeDefined();
    });

    it('should find the "team" <span>', () => {
        const matIconDebugElement = footerDebugElement.query(By.directive(MatIcon));
        const matIcon: HTMLElement = matIconDebugElement.nativeElement;
        expect(matIcon.textContent).toContain('favorite');
    });
});