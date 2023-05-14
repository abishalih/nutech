import { cleanup, fireEvent, renderWithProvider } from "infrastructure/utils/test";
import App, { useTableDialogUpdater } from "./dialog";

jest.mock("infrastructure/components/common/table/components/context", () => ({
    ...jest.requireActual("infrastructure/components/common/table/components/context"),
    useState: jest.fn().mockReturnValue({
        dialog: {
            content: <></>,
            open: false,
            options: [{ label: "Back" }, { label: "Save" }],
            payload: {},
            title: "",
            size: "sm"
        }
    }),
    useStateUpdate: jest.fn().mockReturnValue(jest.fn())
    // useStateUpdate: jest.fn(),
}));

describe("<Dialog />", () => {
    let container;

    beforeEach(() => {
        const render = renderWithProvider(<App />, {});
        container = render.container;
    });

    afterEach(() => {
        cleanup();
        jest.clearAllMocks();
    });

    it("Render Default", () => {
        expect(container).toBeTruthy();
    });

    it("useTableDialogUpdater", () => {
        const { dialog, updateDialogInfo } = useTableDialogUpdater();
        expect(dialog).toStrictEqual({
            content: <></>,
            open: false,
            options: [{ label: "Back" }, { label: "Save" }],
            payload: {},
            title: "",
            size: "sm"
        });
        updateDialogInfo({ title: "Test" });
    });
});
