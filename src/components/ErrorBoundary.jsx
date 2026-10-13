import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (!this.state.hasError) return this.props.children;

    return (
      <div className="flex min-h-screen items-center justify-center px-4">
        <div className="max-w-md text-center">
          <h1 className="text-3xl font-semibold tracking-tight">Something went wrong</h1>
          <p className="mt-3 text-muted">Please refresh the page. If it keeps happening, the rest of the internet still works.</p>
          <button type="button" onClick={() => window.location.reload()} className="btn-primary mt-8">
            Refresh page
          </button>
          {import.meta.env.DEV && this.state.error && (
            <pre className="mt-8 whitespace-pre-wrap text-left text-sm text-red-500">{this.state.error.toString()}</pre>
          )}
        </div>
      </div>
    );
  }
}

export default ErrorBoundary;
