import { cleanup, renderWithRouter } from "infrastructure/utils/test";
import React from "react";
import * as ReactRedux from "react-redux";

import * as Cookies from "js-cookie";
import PrivateRoute from "../PrivateRoute";

const TheComponent = () => <div>the-component</div>;

// jest.mock("js-cookie");

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useLocation: () => ({
        pathname: "localhost:3000/example/path"
    })
}));

describe("PrivateRoute component", () => {
    let container;
    let useEffect;
    let useDispatch;

    const mockUseEffect = () => {
        useEffect.mockImplementationOnce((f) => f());
    };
    const mockUseDispatch = () => {
        useDispatch.mockImplementationOnce(() => jest.fn());
    };

    beforeEach(() => {
        Object.defineProperty(window, "location", {
            value: {
                host: "localhost"
            },
            writable: true
        });
        useEffect = jest.spyOn(React, "useEffect");
        useDispatch = jest.spyOn(ReactRedux, "useDispatch");
        // Cookies.get.mockClear();
        Cookies.get = jest.fn().mockImplementation(() => "fr");
    });

    afterEach(() => {
        cleanup();
        jest.restoreAllMocks();
        jest.clearAllMocks();
        jest.resetAllMocks();
    });

    it("should render without crashing", () => {
        mockUseEffect();
        mockUseDispatch();
        const render = renderWithRouter(<PrivateRoute component={TheComponent} />);
        container = render.container;
        expect(container).toBeTruthy();
    });

    it("reads the cookie but does not deserialize", () => {
        // Cookies.get.mockReturnValueOnce(undefined);
    });
});
