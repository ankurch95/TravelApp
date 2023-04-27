import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BookingStackParamList } from './screens';
import BookingScreen from '../screen/Booking';
import BookingDetailScreen from '../screen/BookingDetail';

const Stack = createNativeStackNavigator<BookingStackParamList>();


export default function BookingRoutes() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='BookingScreen' component={BookingScreen} />
            <Stack.Screen name='BookingDetailScreen' component={BookingDetailScreen} />
        </Stack.Navigator>
    )
}