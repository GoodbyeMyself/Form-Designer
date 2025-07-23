/**
 * 抑制 defaultProps 相关的警告
 */
export function suppressDefaultPropsWarnings() {
    if (typeof window !== 'undefined') {
        // 重写 console.warn 来过滤 defaultProps 警告
        const originalWarn = console.warn;
        console.warn = (...args) => {
            const message = args.join(' ');
            if (
                message.includes('defaultProps') ||
                message.includes('Support for defaultProps') ||
                message.includes('function components')
            ) {
                return; // 忽略 defaultProps 相关警告
            }
            originalWarn.apply(console, args);
        };

        // 重写 console.error 来过滤 defaultProps 错误
        const originalError = console.error;
        console.error = (...args) => {
            const message = args.join(' ');
            if (
                message.includes('defaultProps') ||
                message.includes('Support for defaultProps') ||
                message.includes('function components')
            ) {
                return; // 忽略 defaultProps 相关错误
            }
            originalError.apply(console, args);
        };
    }
}

/**
 * 在开发环境中抑制 React 严格模式的警告
 */
export function suppressReactStrictModeWarnings() {
    if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
        // 重写 React 的警告函数
        const originalConsoleWarn = console.warn;
        console.warn = (...args) => {
            const message = args.join(' ');
            if (
                message.includes('defaultProps') ||
                message.includes('Support for defaultProps') ||
                message.includes('function components') ||
                message.includes('React.StrictMode')
            ) {
                return;
            }
            originalConsoleWarn.apply(console, args);
        };
    }
} 