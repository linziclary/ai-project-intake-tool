import React, { Component, ErrorInfo, ReactNode } from "react";
import { RouterProvider } from "react-router";
import { router } from "./routes";

class ErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean, error: Error | null }> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Caught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-8 bg-red-50 text-red-900 h-screen w-screen flex flex-col items-center justify-center text-center">
          <h1 className="text-2xl font-bold mb-4">Something went wrong.</h1>
          <pre className="text-sm bg-white p-4 rounded border border-red-200 max-w-2xl overflow-auto text-left shadow-sm">
            {this.state.error?.toString()}
            {"\n\n"}
            {this.state.error?.stack}
          </pre>
        </div>
      );
    }

    return this.props.children;
  }
}

export default function App() {
  return (
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  );
}
