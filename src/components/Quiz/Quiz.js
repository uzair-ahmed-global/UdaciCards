import React from 'react'
import { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import QuizCard from './QuizCard'
import QuizResult from './QuizResult'

import * as notificationHelper from '../../../utils/notification'
import styleSheet from './styles'

class Quiz extends Component {
  state = {
    currentQuestion: 0,
    answerCount: 0,
    isFlipped: false,
    shouldShowResults: false
  }

  resetStateHandler = () => {
    this.setState({
      currentQuestion: 0,
      isFlipped: false,
      shouldShowResults: false,
      answerCount: 0,
    })
  }

  componentDidMount() {
    notificationHelper.removeNotifications()
      .then(notificationHelper.setNotifications())
  }

  nextCardHandler = answer => {
    let newCorrectAnswers = null
    if (answer) {
      newCorrectAnswers = this.state.answerCount + 1
    } else {
      newCorrectAnswers = this.state.answerCount
    }

    this.setState({
      ...this.state,
      currentQuestion: this.state.currentQuestion + 1,
      isFlipped: false,
      answerCount: newCorrectAnswers,
      shouldShowResults: this.props.route.params.cards.length == this.state.currentQuestion + 1
    })
  }

  flipHandler = () => {
    this.setState({ isFlipped: !this.state.isFlipped })
  }

  render() {
    const cards = this.props.route.params.cards
    let card = null
    let view = null
    if (cards.length === 0) {
      view = (
        <View style={styleSheet.view}>
          <Text style={styleSheet.noCards}>No cards in available!</Text>
        </View>
      )
    } else {
      card = cards[this.state.currentQuestion]
      if (this.state.shouldShowResults) {
        view = (
          <QuizResult
            answerCount={this.state.answerCount}
            cards={cards}
            resetState={this.resetStateHandler}
            {...this.props} />
        )
      } else {
        view = (
          <View style={{ width: '100%' }}>
            <View style={{ padding: 3 }}>
              <Text>
                {this.state.currentQuestion + 1} of {cards.length}
              </Text>
            </View>
            <QuizCard
              isFlipped={this.state.isFlipped}
              flipHandler={this.flipHandler}
              nextCardHandler={this.nextCardHandler}
              card={card} />
          </View>
        )
      }
    }

    return (
      <View style={styleSheet.view}>
        {view}
      </View>
    )
  }
}

export default Quiz
