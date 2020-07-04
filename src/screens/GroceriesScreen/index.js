import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FoodTab from './tabs/FoodTab';
import HouseTab from './tabs/HouseTab';
import ClothesTab from './tabs/ClothesTab';
import CustomHeader from '../../components/CustomHeader';
import {View} from 'react-native';
import {Container} from 'native-base';

const Tab = createBottomTabNavigator();

const GroceriesScreen = ({navigation}) => {
    return (
        <View>
            <Container>
                <CustomHeader
                    navigation={navigation}
                    title={'Groceries'}
                />
                <Tab.Navigator>
                    <Tab.Screen name="Food" component={FoodTab} />
                    <Tab.Screen name="House" component={HouseTab} />
                    <Tab.Screen name="Clothes" component={ClothesTab} />
                </Tab.Navigator>
            </Container>
        </View>
    )
}
export default GroceriesScreen;