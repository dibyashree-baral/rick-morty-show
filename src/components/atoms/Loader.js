import React from "react";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
0% { -webkit-transform: rotate(0deg); }
100% { -webkit-transform: rotate(360deg); }
`;
const LoaderDiv = styled.div`
position: absolute;
left: 50%;
top: 50%;  
border: 6px solid #f3f3f3;
border-radius: 50%;
border-top: 6px solid grey;
width: 70px;
height: 70px;
-webkit-animation: ${spin} 2s linear infinite;
animation: ${spin} 2s linear infinite;`;

const Loader = ({}) => <LoaderDiv />;

export default Loader;
