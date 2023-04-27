import React from 'react'
import { View, Text, StatusBar } from 'react-native'
import { Portal as PaperPortal, Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes';
import { colors } from './theme/colors';

export default function App() {
  return (
    <PaperProvider>
      <PaperPortal>
        <SafeAreaProvider>
          <NavigationContainer>
            <>
              <StatusBar backgroundColor={colors.STATUS_BAR_COLOR} barStyle={'light-content'} />
              <Routes />
            </>
          </NavigationContainer>
        </SafeAreaProvider>
      </PaperPortal>
    </PaperProvider>

  )
}