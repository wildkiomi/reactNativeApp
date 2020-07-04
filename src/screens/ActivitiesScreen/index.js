import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import EventsTab from './tabs/EventsTab';
import PlacesTab from './tabs/PlacesTab';
import MoviesTab from './tabs/MoviesTab';
import ActionsTab from './tabs/ActionsTab';
import CustomHeader from '../../components/CustomHeader';
import {View} from 'react-native';
import {Container} from 'native-base';

const Tab = createBottomTabNavigator();

const ActivitiesScreen = ({navigation}) => {
    return (
        <View>
            <Container>
                <CustomHeader
                    navigation={navigation}
                    title={'Activities'}
                />
                <Tab.Navigator>
                    <Tab.Screen name="Actions" component={ActionsTab} />
                    <Tab.Screen name="Movies" component={MoviesTab} />
                    <Tab.Screen name="Places" component={PlacesTab} />
                    <Tab.Screen name="Events" component={EventsTab} />
                </Tab.Navigator>
            </Container>
        </View>
    )
}
export default ActivitiesScreen;