import { GlobalRegistry } from '@designable/core';
import { TextWidget, useDesigner } from '@designable/react';
import { observer } from '@formily/react';
import { Button, Space, Radio } from 'antd';
import { useEffect } from 'react';
import { loadInitialSchema, saveSchema } from '../service';

import { getLocale } from 'umi';

export const ActionsWidget = observer(() => {

    const designer = useDesigner();

    useEffect(() => {
        loadInitialSchema(designer);
    }, []);

    useEffect(() => {
        // 获取 国际化 配置
        const locale = getLocale();

        GlobalRegistry.setDesignerLanguage(locale === 'en-US' ? 'en-us' : 'zh-cn');
    }, []);

    return (
        <Space style={{
            marginLeft: 10,
            float: 'right',
        }}>
            <Button
                onClick={() => {
                    saveSchema(designer);
                }}
                size="small"
            >
                <TextWidget defaultMessage='Save'></TextWidget>
            </Button>
        </Space>
    );
});
