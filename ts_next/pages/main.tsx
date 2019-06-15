import React from 'react';
import styled from 'styled-components';
import "../reset.css";

const Layout = styled.div`
    margin: 2rem;
`
const Heading = styled.h1`
    font-size: 2em;
    font-family: Arial, Helvetica, sans-serif;
`
export default () => (
    <Layout>
        <Heading>This is another heading.</Heading>
    </Layout>
)