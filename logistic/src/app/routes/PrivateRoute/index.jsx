import Layout from "infrastructure/components/Layout";
import { useCheckAuth } from "infrastructure/utils/useCheckAuth";
import { Route } from "react-router-dom";

const PrivateRoute = (props) => {
    const { Component, withLayout, ...rest } = useCheckAuth(props);
    return (
        <Route
            {...rest}
            render={(payload) => (
                <Layout withLayout={withLayout}>
                    <Component {...payload} />
                </Layout>
            )}
        />
    );
};
export default PrivateRoute;
