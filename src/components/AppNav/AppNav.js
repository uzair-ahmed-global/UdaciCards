import React from 'react'
import { StatusBar, Platform, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons'

import NewDeck from '../NewDeck/NewDeck'
import DeckStacks from '../DeckStacks/DeckStacks'


const TabNav = createBottomTabNavigator()

export default AppNav = () => {
  return (
    <React.Fragment>
      <StatusBar barStyle="default" backgroundColor="black" />
      <NavigationContainer>
        <TabNav.Navigator>
          <TabNav.Screen
            name="Decks"
            component={DeckStacks}
            options={{
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="cards-outline" size={24} color={color} />
              ),
            }}
          />
          <TabNav.Screen
            name="AddDeck"
            component={NewDeck}
            options={{
              tabBarIcon: ({ color }) => (
                <Entypo
                  name='add-to-list'
                  size={24}
                  color={color}
                />
              ),
            }}
          />
        </TabNav.Navigator>
      </NavigationContainer>
    </React.Fragment>
  )
}
