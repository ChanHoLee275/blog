import React from 'react';
import styled from '@emotion/styled';
import Item from './Item';

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    margin-top: 20px;
`;

const List = () => <Container><Item title={"test"} abstract={"test"}/></Container>

export default List;