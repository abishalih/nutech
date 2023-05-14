import { render } from "@testing-library/react";
import * as React from "react";
import { Provider } from "react-redux";

import { store } from "application/store/config";

import App from "./account";

jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useDispatch: () => jest.fn()
}));

describe("<Account />", () => {
    let wrapper;
    beforeEach(() => {
        const renderedApp = render(
            <Provider store={store}>
                <App />
            </Provider>
        );
        wrapper = renderedApp.container;
    });
    afterEach(() => jest.clearAllMocks());

    it("It should mount", () => expect(wrapper).toBeTruthy());
});
