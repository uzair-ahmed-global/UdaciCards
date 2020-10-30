import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

import styleSheet from './styles'

const QuizResult = props => {
    return (
        <View style={{ width: '100%' }}>
            <Text style={styleSheet.scoreText}>
                Score: {props.answerCount} / {props.cards.length}
          </Text>

            <TouchableOpacity
                style={styleSheet.ansButton}
                onPress={props.resetState}>
                <View>
                    <Text style={styleSheet.ansButtonText}>Try again</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                style={styleSheet.ansButton}
                onPress={props.navigation.goBack}>
                <View>
                    <Text style={styleSheet.ansButtonText}>Back</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default QuizResult
