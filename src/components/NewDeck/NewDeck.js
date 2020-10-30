import React, { Component } from 'react'
import { Text, View, TouchableOpacity, TextInput } from 'react-native'
import { connect } from 'react-redux'

import * as actions from '../../../store/actions/decks'
import * as styles from './styles'

class NewDeck extends Component {
  state = {
    name: ''
  }
  nameChangedHandler = (text) => {
    this.setState({ name: text })
  }

  postNavigate = () => {
    this.props.navigation.navigate('Deck', { deck: this.state.name })
  }

  deckSubmissionHandler = () => {
    this.props.dispatch(actions.addDeckStart(this.state.name, this.postNavigate))
  }
  render() {
    return <View style={styles.view}>
      <Text style={styles.title}>Deck name</Text>
      <TextInput
        style={styles.input}
        value={this.state.name}
        onChangeText={this.nameChangedHandler}
      />

      <TouchableOpacity
        disabled={!(this.state.name)}
        onPress={this.deckSubmissionHandler}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Add Deck</Text>
        </View>
      </TouchableOpacity>
    </View>
  }
}

export default connect()(NewDeck)