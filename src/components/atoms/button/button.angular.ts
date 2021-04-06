import {
    Component,
    ViewEncapsulation,
    Input,
    Output,
    EventEmitter,
} from '@angular/core';
import { BaseWrapperComponent } from '../../../base/wrapper.base-component';
import { ButtonReactProps, ButtonSizes, ButtonVariants } from './button.react';

@Component({
    selector: 'e-button',
    template: `
        <span [id]="rootDomId"></span>
    `,
    encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent extends BaseWrapperComponent {
    @Input() loading: boolean = false;
    @Input() variant: ButtonVariants = 'primary';
    @Input() size: ButtonSizes = 'default';

    @Output() onClick = new EventEmitter();

    protected getProps(): ButtonReactProps {
        const { loading, variant, size } = this;
        return {
            loading,
            variant,
            size,
            onClick: () => this.onClick.emit(),
        };
    }
}
