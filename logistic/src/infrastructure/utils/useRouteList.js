const useRouteList = (list) => {
    let myList = [];
    list.forEach(({ sub = [], ...menu }) => {
        if (sub.length > 0) {
            sub.forEach((subMenu) => {
                myList.push(subMenu);
            });
        } else {
            myList.push(menu);
        }
    });

    return { routeList: myList };
};

export default useRouteList;
