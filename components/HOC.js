import React from "react";
import styled from "styled-components";

const HOC = () => {
  return (
    <Layout>
      <h1 style={{ flex: 1, alignSelf: 'center', paddingLeft: 24 }}>Higher Order Components</h1>
      <div style={{ flex: 2, display: 'flex', justifyContent: 'center' }}><img src="./assets/HOC.png" style={{ width: 700 }} /></div>
    </Layout>
  );
};

const Layout = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  width: 100%;
`;

export default HOC;
