// import { LIST_FEATURE } from "app/common";
import PrivateRoute from "app/routes/PrivateRoute";
// import DynamicApp from "infrastructure/components/common/DynamicApp";
import ErrorPage from "infrastructure/templates/ErrorPage";
// import useRouteList from "infrastructure/utils/useRouteList";
import Home from "pages/Home";
import MasterGoods from "pages/master/Goods";
import { BrowserRouter, Switch } from "react-router-dom";
import "./App.css";

function App() {
    // const { routeList = [] } = useRouteList(LIST_FEATURE);
    return (
        <BrowserRouter>
            <Switch>
                <PrivateRoute path="/" component={Home} withLayout exact />
                <PrivateRoute path="/master/goods" component={MasterGoods} withLayout />
                {/* {routeList.map(({ url, container, role, withLayout = false }, key) => {
                    return (
                        <PrivateRoute
                            component={() => <DynamicApp componentType="pages" container={container} />}
                            data-testid="private-route-fok"
                            exact
                            path={url}
                            key={key}
                            role={role}
                            withLayout={withLayout}
                        />
                    );
                })} */}
                <PrivateRoute component={ErrorPage} withLayout />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
