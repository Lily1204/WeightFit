import { NavbarComponent } from "./navbar.component";
import { ComponentFixture, async, TestBed } from "@angular/core/testing";
import fromModule from './navbar.module';
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";

describe('NavbarComponent', () => {
    let component: NavbarComponent;
    let fixture: ComponentFixture<NavbarComponent>;
    let navbarDebugElement: DebugElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: fromModule.COMMON_IMPORTS,
            declarations: fromModule.COMMON_DECLARATIONS
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NavbarComponent);
        component = fixture.componentInstance;
        navbarDebugElement = fixture.debugElement;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeDefined();
    });

    it('should find the img', () => {
        const imgDebugElement = navbarDebugElement.query(By.css('img'));
        const img: HTMLElement = imgDebugElement.nativeElement;
        expect(img.attributes.getNamedItem('src').value).toBe('assets/img/LogoW_MM.png')
    });
});