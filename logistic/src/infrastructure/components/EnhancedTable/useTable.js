import { useEffect, useState } from "react";

const useTable = ({
    actions = [],
    checkbox,
    columns,
    data,
    lang = "id",
    isLoading = false,
    payload,
    pagination,
    title = "",
    period,
    tableFilterOptions = [],
    setPeriod,
    searchPlaceholder,
    requestData = () => false,
    cleanupData,
    toolbarActions = []
}) => {
    const rowsPerPageOptions = [10, 20, 30, 40];
    const [sort, setSort] = useState([]);

    const handleSort = (type, key, id) => {
        if (sort.length === 2) {
            if (sort[1].id === id) {
                setSort([
                    { id: sort[1].id, key: sort[1].key, type },
                    { id: sort[0].id, key: sort[0].key, type: sort[0].type }
                ]);
            } else if (sort[0].id === id) {
                setSort([
                    { id: sort[0].id, key: sort[0].key, type },
                    { id: sort[1].id, key: sort[1].key, type: sort[1].type }
                ]);
            } else {
                setSort([
                    { id, key, type },
                    { id: sort[0].id, key: sort[0].key, type: sort[0].type }
                ]);
            }
        } else if (sort.length === 1 && sort[0].id !== id) {
            setSort([
                { id, key, type },
                { id: sort[0].id, key: sort[0].key, type: sort[0].type }
            ]);
        } else setSort([{ id, key, type }]);
    };
    const [searchKeyword, setSearchKeyword] = useState("");
    // const [selectedPeriod, selectPeriod] = useState({
    //     year: parseInt(new Date().getFullYear()),
    //     month: [parseInt(new Date().getMonth() + 1)]
    // });
    const unmountTable = () => {
        if (cleanupData) cleanupData();
    };
    // const periodValue = selectedPeriod.month.map((monthValue) => `${selectedPeriod.year}-${monthValue}`).join(",");
    const refreshTable = (refreshPayload) => {
        const requestProps = {
            ...refreshPayload,
            ...payload
        };
        requestData(requestProps);
        // return requestProps;
    };

    useEffect(() => {
        window.addEventListener("beforeunload", unmountTable);
        return () => {
            unmountTable();
            window.removeEventListener("beforeunload", unmountTable);
        };
    }, []);

    const propsToolbar = {
        actions,
        data,
        title,
        period,
        tableFilterOptions,
        toolbarActions,
        keyword: searchKeyword,
        searchPlaceholder,
        setSearchKeyword,
        setPeriod: (val) => {
            // selectPeriod(val);
            if (setPeriod) setPeriod(val);
        }
    };
    const propsTableContainer = { sx: { width: "100%", overflow: "auto" } };
    const propsTable = {
        size: "small",
        stickyHeader: true,
        sx: {
            width: "100%",
            "thead, tbody, th, td": {
                border: "none"
            },
            borderSpacing: "0 10px"
        },
        "aria-labelledby": "tableTitle"
    };
    const propsHeader = {
        actions,
        checkbox,
        columns,
        data,
        lang,
        startSortIndex: 0,
        sort,
        handleSort
    };
    const propsBody = {
        actions,
        checkbox,
        columns,
        data,
        pagination,
        loading: isLoading
    };
    const propsPagination = { pagination, refreshTable, requestData, rowsPerPageOptions };
    return {
        payload,
        propsBody,
        propsHeader,
        propsPagination,
        propsTable,
        propsTableContainer,
        propsToolbar,
        refreshTable,
        searchKeyword
    };
};

export default useTable;
