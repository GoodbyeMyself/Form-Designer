import React from 'react';

interface ErrorBoundaryState {
    hasError: boolean;
}

interface ErrorBoundaryProps {
    children: React.ReactNode;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        // 如果是 defaultProps 相关的警告，不显示错误
        if (error.message.includes('defaultProps')) {
            return { hasError: false };
        }
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        // 忽略 defaultProps 相关的警告
        if (error.message.includes('defaultProps')) {
            console.warn('Ignoring defaultProps warning:', error.message);
            return;
        }
        
        console.error('Error caught by boundary:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <div>Something went wrong.</div>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary; 