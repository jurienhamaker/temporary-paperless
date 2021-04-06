import React from 'react';
import { Meta, Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button, ButtonProps } from '.';

const meta: Meta = {
    title: 'Atoms/Button',
    component: Button,
    argTypes: {
        children: {
            name: 'Label',
            control: {
                type: 'text',
            },
        },
    },
    parameters: {
        controls: { expanded: true },
    },
};

export default meta;

const Template: Story<ButtonProps> = args => (
    <Button {...args} onClick={action('click!')} />
);

export const Primary = Template.bind({});
Primary.args = { children: 'Action text' };
