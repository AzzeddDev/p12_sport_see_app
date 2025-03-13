import React, { Component } from "react"

class ErrorBoundary extends Component {
    state = { hasError: false, error: null, info: null };

    static getDerivedStateFromError(error: Error) {
        return { hasError: true };
    }

    componentDidCatch(error: Error, info: React.ErrorInfo) {
        this.setState({ error, info });
        console.error("Error caught by Error Boundary:", error, info);
    }

    render() {
        if (this.state.hasError) {
            return <div>Erreur</div>;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
