import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, Renderer2, ViewChild , forwardRef, ViewEncapsulation} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export const PASSWORDY_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => NgxPasswordyComponent),
  multi: true,
};

@Component({
  selector: 'ngx-passwordy',
  templateUrl: './ngx-passwordy.component.html',
  styleUrls: ['./ngx-passwordy.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [PASSWORDY_VALUE_ACCESSOR]
})
export class NgxPasswordyComponent
  implements OnInit, AfterViewInit, OnDestroy, ControlValueAccessor
{
  onChange = (_: any) => {};
  onTouched = () => {};

  @ViewChild('inputElement') inputElement: ElementRef;

  @Input() maxLength: number = 50;
  @Input() placeholder: string = 'Password';
  @Input() inputId: string = 'password';

  icons = ['visibility', 'visibility_off'];

  passwordValue: string;
  showPassword: boolean;

  unlistenInputEvent: any;
  unlistenBlurEvent: any;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.unlistenInputEvent = this.renderer.listen(
      this.inputElement.nativeElement,
      'input',
      (event) => {
        this.onChange(event.target.value);
      }
    );

    this.unlistenBlurEvent = this.renderer.listen(
      this.inputElement.nativeElement,
      'blur',
      () => {
        this.onTouched();
      }
    );
  }

  writeValue(value: any): void {
    if (this.inputElement) {
      const normalizedValue = value == null ? '' : value;
      this.renderer.setProperty(
        this.inputElement.nativeElement,
        'value',
        normalizedValue
      );
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    if (this.inputElement) {
      this.renderer.setProperty(
        this.inputElement.nativeElement,
        'disabled',
        isDisabled
      );
    }
  }

  ngOnDestroy(): void {
    this.unlistenInputEvent();
    this.unlistenBlurEvent();
  }
}
