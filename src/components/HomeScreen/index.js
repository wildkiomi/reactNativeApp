import React, { Component } from 'react';
import {View} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import CustomFooter from '../CustomFooter';
import CustomHeader from '../CustomHeader';

const HomeScreen = ({
  navigation
}) => {
    return (
        <View>
            <Container>
                <CustomHeader 
                navigation={navigation}
                title={'Home'}
                />
                <Content>
                <Text>
                    This is Content Section
                </Text>
                </Content>
                <CustomFooter />
            </Container>
      </View>
    );
}
export default HomeScreen;