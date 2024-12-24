/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import AppNavigator from './navigators/AppNavigator.tsx';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StoreProvider} from './stores/StoreContext';

function App(): React.JSX.Element {
  return (
    <StoreProvider>
      <GestureHandlerRootView style={{flex: 1}}>
        <SafeAreaProvider>
          <AppNavigator />
        </SafeAreaProvider>
      </GestureHandlerRootView>
    </StoreProvider>
  );
}

export default App;
