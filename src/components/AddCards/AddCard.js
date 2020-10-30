import React, { Component } from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

import * as actions from '../../../store/actions/decks'
import styles from './styles'

class AddCard extends Component {
  state = {
    question: null,
    answer: null
  }

  questionChangedHandler = text => {
    this.setState({ question: text })
  }

  answerChangedHAndler = text => {
    this.setState({ answer: text })
  }

  addQuestionHandler = () => {
    if (this.state.question === null || this.state.answer === null) {
      return
    }
    this.setState({ question: null, answer: null })
    console.log("WHAT!", this.props.route.params.deck)
    this.props.dispatch(actions.addQuestionStart(this.props.route.params.deck, this.state.question, this.state.answer, this.postAddNavigate))
  }

  postAddNavigate = () => {
    this.props.navigation.navigate('Deck', { deck: this.props.route.params.deck })
  }

  render() {
    const { question, answer } = this.state
    const { deck } = this.props.route.params

    return (
      <View style={styles.view}>
        <Text style={styles.title}>{deck}</Text>
        <Text style={styles.addQuestion}>Add Question</Text>

        <TextInput
          value={this.state.question}
          style={styles.input}
          onChangeText={this.questionChangedHandler}
          placeholder="Question"
        />
        <TextInput
          value={this.state.answer}
          style={styles.input}
          onChangeText={this.answerChangedHAndler}
          placeholder="Answer"
        />
        <TouchableOpacity onPress={this.addQuestionHandler} disabled={!question && !answer}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Add Question</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

export default connect()(AddCard)
