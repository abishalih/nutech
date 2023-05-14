import { Component, Suspense, lazy } from "react";
import LoadingPage from "./LoadingPage";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.log({ info: error, location: errorInfo });
    }

    render() {
        const { hasError } = this.state;
        const { children } = this.props;

        if (hasError)
            return <div>There is a problem with the application. Please contact your system administrator.</div>;

        return children;
    }
}

const DynamicApp = ({ componentType = "features", container = "" }) => {
    const MyComponent = lazy(() =>
        import(`${componentType}/${container}`).catch(() => {
            throw new Error(`Failed to load component: ${componentType}/${container}`);
        })
    );
    console.log(MyComponent);

    return (
        <ErrorBoundary errorMessage="There is a problem with the application. Please contact your system administrator.">
            <Suspense fallback={<LoadingPage />}>
                <MyComponent />
            </Suspense>
        </ErrorBoundary>
    );
};

export default DynamicApp;
