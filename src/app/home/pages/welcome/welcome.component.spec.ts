// import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from "@angular/core";
// import { async, ComponentFixture, TestBed } from "@angular/core/testing";
// import { MatIcon, MatButton} from "@angular/material";
// import { By } from "@angular/platform-browser";
// import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
// import { LoginFormComponent } from "./login-form.component";
// import fromModule from "./login-form.module";

// describe("LoginFormComponent", () => {
//   let component: LoginFormComponent;
//   let fixture: ComponentFixture<LoginFormComponent>;
//   let debugElement: DebugElement;
//   fromModule.COMMON_IMPORTS.push(BrowserAnimationsModule);

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       imports: [fromModule.COMMON_IMPORTS],
//       declarations: [fromModule.COMMON_DECLARATIONS],
//     }).compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(LoginFormComponent);
//     component = fixture.componentInstance;

//     debugElement = fixture.debugElement;
//     fixture.detectChanges();
//   });
  
//   it("should create", () => {
//     expect(component).toBeTruthy();
//   });

//   describe("Email", () => {

//     it("email should be initialized", () => {
//       expect(component.email).toBeTruthy();
//     });
  
//     it("email should be required", () => {
//       expect(component.email.hasError("required")).toBe(true);
//     });
  
//     it("email should not be required", () => {
//       component.email.setValue("lorem");
//       expect(component.email.hasError("required")).toBe(false);
//     });
  
//     it("email should be invalid with wrong email", () => {
//       component.email.setValue("lorem");
//       expect(component.email.hasError("email")).toBe(true);
//       expect(component.email.invalid).toBe(true);
//     });
  
//     it("email should be valid email", () => {
//       component.email.setValue("lorem@lorem.com");
//       expect(component.email.hasError("email")).toBe(false);
//       expect(component.email.invalid).toBe(false);
//     });
  

//   })

//   describe("Password",() => {
//     let passwordInput;
    
//     beforeEach(() => {
//       passwordInput = debugElement.query(By.css("input[type='password']"));
//     })

//     it("password should be initialzed", () => {
//       expect(component.password).toBeTruthy();
//     });
  
//     it("password should be required", () => {
//       expect(component.password.hasError("required")).toBe(true);
//     });
  
//     it("password should be invalid with short password", () => {
//       component.password.setValue("lorem");
//       expect(component.password.hasError("minlength")).toBe(true, 'minlength is true');
//       expect(component.password.getError("minlength").actualLength).toBeLessThan(
//         6, 'actualLenght is greater or equal to 6'
//       );
//       expect(component.password.invalid).toBe(true, 'password invalid = true');
//     });
  
//     it("password should be valid password", () => {
//       component.password.setValue("loreml");
//       expect(component.password.hasError("minlength")).toBe(false);
//       expect(component.password.valid).toBe(true);
//     });
  
//     it("password should be hidden", () => {
//       const inputType = "password";
  
//       component.isLogin = true;
//       fixture.detectChanges();
//       passwordInput = debugElement.query(By.css("input[type='password']"));
  
//       expect(component.passwordInputType).toBe(inputType);
//       expect(passwordInput.nativeElement.type).toBe(inputType);
//       expect(component.passwordHidden).toBe(true);
//       expect(component.passwordVisibilityIcon).toBe("visibility_off");
//     });

//     it("password should be visible", () => {
//       const inputType = "text";
//       component.isLogin = true;
//       fixture.detectChanges();
      
//       component.password.setValue("loreml");
//       passwordInput = debugElement.query(By.css("input[type='password']"));
  
//       const visibilityToggleDebugElement = debugElement.query(
//         By.directive(MatIcon)
//       );
  
//       expect(visibilityToggleDebugElement).not.toBeNull('toggle is null');
  
//       const matIcon: HTMLElement = visibilityToggleDebugElement.nativeElement;
  
//       expect(matIcon).not.toBeNull();
  
//       matIcon.click();
  
//       fixture.detectChanges();
  
//       expect(component.passwordInputType).toBe(
//         inputType,
//         `input type is: ${component.passwordInputType}`
//       );
//       expect(passwordInput.nativeElement.type).toBe(
//         inputType,
//         `input type is: ${passwordInput.nativeElement.type}`
//       );
//       expect(component.passwordHidden).toBe(false, "password is hidden");
//       expect(component.passwordVisibilityIcon).toBe(
//         "visibility",
//         `icon is: ${component.passwordVisibilityIcon}`
//       );
//     });
//   })

//   describe("Button",() => {
//     let submitButton: HTMLElement;

//     beforeEach(() => {
//       submitButton = debugElement.query(By.directive(MatButton)).nativeElement;    
//     })

//     it("submit button should be disabled when form invalid", () => {
//       expect(submitButton.attributes.getNamedItem("disabled")).toBeTruthy();
//     });
  
//     it("submitButton should submit form", () => {
//       spyOn(component.save, "emit");
  
//       component.isLogin = true;
  
//       const data = {
//         email: "lorem@lorem.com",
//         password: "Lorem12",
//       };
  
//       component.email.setValue(data.email);
//       component.password.setValue(data.password);
//       fixture.detectChanges();
  
//       submitButton = debugElement.query(By.directive(MatButton)).nativeElement;
      
//       submitButton.click();
  
//       expect(component.save.emit).toHaveBeenCalledWith({
//         email: component.email.value,
//         password: component.password.value,
//       });
  
//     });
  
//     it("submitButton should submit email", () => {
//       spyOn(component.send, "emit");
//       component.isLogin = false;
//       component.email.setValue("lorem@lorem.com");
//       fixture.detectChanges();
  
//       submitButton.click();
      
//       expect(component.send.emit).toHaveBeenCalledWith({
//         email: component.email.value
//       });
//     });
//   })

// });
