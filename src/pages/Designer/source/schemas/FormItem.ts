import { ISchema } from '@formily/react';

export const FormItem: ISchema = {
    type: 'object',
    properties: {
        tooltip: {
            type: 'string',
            'x-decorator': 'FormItem',
            'x-component': 'Input',
        },
        addonBefore: {
            type: 'string',
            'x-decorator': 'FormItem',
            'x-component': 'Input',
        },
        addonAfter: {
            type: 'string',
            'x-decorator': 'FormItem',
            'x-component': 'Input',
        },
        labelCol: {
            type: 'number',
            'x-decorator': 'FormItem',
            'x-component': 'NumberPicker',
        },
        wrapperCol: {
            type: 'number',
            'x-decorator': 'FormItem',
            'x-component': 'NumberPicker',
        },
        labelWidth: {
            'x-decorator': 'FormItem',
            'x-component': 'SizeInput',
        },
        wrapperWidth: {
            'x-decorator': 'FormItem',
            'x-component': 'SizeInput',
        },
        colon: {
            type: 'string',
            enum: ['icon', 'text', 'default'],
            'x-decorator': 'FormItem',
            'x-component': 'Select',
            'x-component-props': {
                defaultValue: 'icon',
            },
        },
        asterisk: {
            type: 'boolean',
            'x-decorator': 'FormItem',
            'x-component': 'Switch',
        },
        gridSpan: {
            type: 'number',
            'x-decorator': 'FormItem',
            'x-component': 'NumberPicker',
        },
        feedbackLayout: {
            type: 'string',
            enum: ['left', 'right', 'default'],
            'x-decorator': 'FormItem',
            'x-component': 'Select',
            'x-component-props': {
                defaultValue: 'left',
            },
        },
        size: {
            type: 'string',
            enum: ['large', 'small', 'default', 'middle'],
            'x-decorator': 'FormItem',
            'x-component': 'Select',
            'x-component-props': {
                defaultValue: 'default',
            },
        },
        layout: {
            type: 'string',
            enum: ['vertical', 'horizontal', 'inline', 'default'],
            'x-decorator': 'FormItem',
            'x-component': 'Select',
            'x-component-props': {
                defaultValue: 'vertical',
            },
        },

        tooltipLayout: {
            type: 'string',
            enum: ['left', 'right', 'default'],
            'x-decorator': 'FormItem',
            'x-component': 'Select',
            'x-component-props': {
                defaultValue: 'left',
            },
        },
        labelAlign: {
            type: 'string',
            enum: ['loose', 'terse', 'popover', 'none', 'default'],
            'x-decorator': 'FormItem',
            'x-component': 'Select',
            'x-component-props': {
                defaultValue: 'loose',
            },
        },
        wrapperAlign: {
            type: 'string',
            enum: ['left', 'right', 'default'],
            'x-decorator': 'FormItem',
            'x-component': 'Select',
            'x-component-props': {
                defaultValue: 'left',
            },
        },
        labelWrap: {
            type: 'boolean',
            'x-decorator': 'FormItem',
            'x-component': 'Switch',
        },
        wrapperWrap: {
            type: 'boolean',
            'x-decorator': 'FormItem',
            'x-component': 'Switch',
        },
        fullness: {
            type: 'boolean',
            'x-decorator': 'FormItem',
            'x-component': 'Switch',
        },
        inset: {
            type: 'boolean',
            'x-decorator': 'FormItem',
            'x-component': 'Switch',
        },
        bordered: {
            type: 'boolean',
            'x-decorator': 'FormItem',
            'x-component': 'Switch',
            'x-component-props': {
                defaultChecked: true,
            },
        },
    },
};
