import PrivateRoute from "app/routes/PrivateRoute";
import ErrorPage from "infrastructure/templates/ErrorPage";
import Home from "pages/Home";
import Login from "pages/Login";
import MasterProduct from "pages/master/Product";
import { BrowserRouter, Switch } from "react-router-dom";
import "./App.css";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <PrivateRoute path="/" component={Home} withLayout exact />
                <PrivateRoute path="/login" component={Login} />
                <PrivateRoute path="/master/product" component={MasterProduct} withLayout />
                <PrivateRoute component={ErrorPage} withLayout />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
