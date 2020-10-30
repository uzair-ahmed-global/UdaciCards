import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

import styleSheet from './styles'

const QuizCard = (props) => {
    let view = null
    if (props.isFlipped) {
        view = (
            <View>
                <Text style={styleSheet.text}>{props.card.answer}</Text>
                <TouchableOpacity
                    style={styleSheet.flipButton}
                    onPress={props.flipHandler}>
                    <View>
                        <Text>Question</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    } else {
        view = (
            <View>
                <Text style={styleSheet.text}> {props.card.question} </Text>
                <TouchableOpacity
                    style={styleSheet.flipButton}
                    onPress={props.flipHandler}>
                    <View>
                        <Text style={styleSheet.flipButtonText}>Answer</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <View style={{ width: '100%' }}>
            {view}
            <TouchableOpacity
                style={{...styleSheet.ansButton, backgroundColor: 'red' }}
                onPress={() => props.nextCardHandler(false)}>
                <View>
                    <Text style={styleSheet.ansButtonText}>Wrong</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                style={{...styleSheet.ansButton, backgroundColor: 'green' }}
                onPress={() => props.nextCardHandler(true)}>
                <View>
                    <Text style={styleSheet.ansButtonText}>Right</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default QuizCard
