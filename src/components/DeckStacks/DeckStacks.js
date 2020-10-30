import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import AddCard from '../AddCards/AddCard'
import Quiz from '../Quiz/Quiz'
import Deck from '../Deck/Deck'
import DeckList from '../DeckList/DeckList'

import * as notificationHelper from '../../../utils/notification'

const StackNav = createStackNavigator()

const DeckStacks = (props) => {
  notificationHelper.setNotifications()
  return (
    <StackNav.Navigator>
      <StackNav.Screen name='Your Decks' component={DeckList} />
      <StackNav.Screen
        name='Quiz'
        component={Quiz}
        options={{ title: 'Quiz' }}
      />
      <StackNav.Screen
        name='Deck'
        component={Deck}
        options={({ route }) => ({ title: route.params.deck })}
      />
      <StackNav.Screen
      name='AddCard'
      component={AddCard} 
      options={({ route }) => ({ title: route.params.deck })}/>
    </StackNav.Navigator>
  )
}

export default DeckStacks