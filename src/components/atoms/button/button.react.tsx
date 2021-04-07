import React, { FC, ButtonHTMLAttributes } from 'react';
import { RiLoader4Line } from 'react-icons/ri';
import styled from 'styled-components';

interface StyledButtonProps {
    variant?: ButtonVariants;
    size?: ButtonSizes;
}
const StyledButton = styled.button.attrs(
    ({ variant, size }: StyledButtonProps) => ({
        className: `btn relative variant-${variant} size-${size} relative`,
    })
)<StyledButtonProps>``;

export type ButtonVariants = 'primary' | 'secondary' | 'link';
export type ButtonSizes = 'default' | 'small';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant: ButtonVariants;
    size: ButtonSizes;
    loading: boolean;
}

export type ButtonClickEvent = React.MouseEvent<HTMLButtonElement, MouseEvent>;

export type ButtonReactProps = ButtonProps & {
    onClick?(e?: ButtonClickEvent): void;
};

export const Button: FC<ButtonReactProps> = ({
    children,
    variant = 'primary',
    size = 'default',
    loading = false,
    onClick,
    ...rest
}) => {
    let labelOpacity = 100;
    let loadingOpacity = 0;
    if (loading) {
        labelOpacity = 0;
        loadingOpacity = 100;
    }

    const checkClick = (e: ButtonClickEvent) => {
        if (loading) {
            e.preventDefault();
            return;
        }

        return onClick ? onClick(e) : null;
    };

    let loadingContainerClasses =
        'absolute w-full h-full top-0 left-0 flex items-center justify-center';
    if (size !== 'default') {
        loadingContainerClasses += ' text-xl';
    } else {
        // we are big
        loadingContainerClasses += ' text-2xl';
    }

    const loader = loading ? (
        <span
            className={`${loadingContainerClasses} opacity-${loadingOpacity}`}
        >
            <RiLoader4Line className="animate-spin duration-75" />
        </span>
    ) : null;

    return (
        <StyledButton
            variant={variant}
            size={size}
            onClick={checkClick}
            {...rest}
        >
            <span className={`opacity-${labelOpacity}`}>{children}</span>
            {loader}
        </StyledButton>
    );
};
