import React from 'react'
import { Text, ScrollView, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'

import styleSheet from './styles'

const DeckList = props => {
  let decks = null
  if (props.decks) {
    decks = Object.values(props.decks).map((deck) => (
      <TouchableOpacity
        key={Math.random().toString(36).substring(7)}
        onPress={() => props.navigation.navigate('Deck', { deck: deck.title })}>
        <View style={styleSheet.deckCard}>
          <Text style={styleSheet.title}>{deck.title}</Text>
          <Text style={styleSheet.subtext}>Card Count: {deck.questions.length}</Text>
        </View>
      </TouchableOpacity>
    ))
  }

  return (
    <ScrollView>
      {decks}
    </ScrollView>
  )
}

const mapStateToProps = state => {
  return {
    decks: state.decks
  }
}

export default connect(mapStateToProps)(DeckList)
