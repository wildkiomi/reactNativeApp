import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

const CustomHeader = ({navigation, title}) => {
    return (
        <Header>
        <Left>
            <Button 
              transparent
              onPress={() => navigation.toggleDrawer()}
            >
            <Icon name='menu' />
            </Button>
        </Left>
        <Body>
            <Title>{title}</Title>
        </Body>
        <Right >
          <Button transparent>
            <Icon name='search' />
          </Button>
          <Button transparent>
            <Icon name='heart' />
          </Button>
          <Button transparent>
            <Icon name='more' />
          </Button>
        </Right>
        </Header>
    )
}
export default CustomHeader;