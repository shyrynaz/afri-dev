import React, { FC } from 'react';
interface ErrorBoundaryProps {
  children: React.ReactNode[];
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  info: object;
}
class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: new Error(),
      info: { componentStack: '' }
    };
  }

  static getDerivedStateFromError = (error: Error) => {
    return { hasError: true };
  };

  componentDidCatch(error: Error | null, info: object) {
    console.log('error', error);
    this.setState({ hasError: true, error, info });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className='container mx-auto h-screen items-center justify-center flex'>
          <h2 className='text-center text-lg'>
            Something has gone wrong. Please reload your screen.
          </h2>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
