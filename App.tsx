// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import {store,persistor} from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
 import BudgetEntryScreen from './BudgetEntryScreen';
 import BudgetEntryListingScreen from './BudgetEntryListingScreen';   
const Stack = createStackNavigator();
function App(): React.JSX.Element {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
  <NavigationContainer>
    <Stack.Navigator initialRouteName='BudgetEntry'>
  <Stack.Screen name='BudgetEntry' component={BudgetEntryScreen}/>
   <Stack.Screen name="BudgetEntryListing" component={BudgetEntryListingScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  </PersistGate>
    </Provider>
  );
}

export default App;


