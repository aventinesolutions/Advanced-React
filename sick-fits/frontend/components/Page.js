import React, { Component } from 'react';
import Header from '../components/Header';
import Meta from '../components/Meta';
import styled from 'styled-components';

const MyButton = styled.button`
  background: red;
  font-size: 50px;
`;

const BigText = styled.span`
  font-size: 100px;
`;

export default class Page extends Component {
  render() {
    return (
      <div>
        <Meta/>
        <Header/>
        <MyButton>Click
          <BigText>here ...</BigText>
        </MyButton>
        {this.props.children}
      </div>
    );
  }
}
