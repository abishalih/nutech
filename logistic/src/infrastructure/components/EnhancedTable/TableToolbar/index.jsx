import { useContext } from "react";
import styled from "styled-components";
import TableContext from "../TableContext";
import TableToolbarActions from "./TableToolbarActions";

const Container = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 1rem 0;
`;
const Title = styled.h1`
    font-size: 16pt;
`;
const TableToolbar = ({ actions = [] }) => {
    const { toggleDialog } = useContext(TableContext);
    return (
        <Container>
            <Title>Table</Title>
            <TableToolbarActions actions={actions} toggleDialog={toggleDialog} />
        </Container>
    );
};

export default TableToolbar;
