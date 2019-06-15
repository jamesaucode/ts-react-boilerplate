import React from 'react';
import styled from 'styled-components';

const Heading = styled.h1`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 2.5em;
    font-weight: 600;
    text-align: center;
    color: #222222;
`
const Layout = styled.div`
    margin: 2rem;
`

export default () => {
    return (
        <Layout>
            <Heading>This is a Heading!</Heading>
        </Layout>
    )
}