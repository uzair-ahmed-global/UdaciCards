import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'

import * as API from '../../../utils/api'
import * as actions from '../../../store/actions/index'
import AppNav from '../AppNav/AppNav'


class UdaciCards extends Component {
    state = {
        decks: {}
    }

    componentDidMount() {
        API.init()
            .then(() => {
                this.props.dispatch(actions.initDataStart())
            })
    }

    render() {
        return <AppNav />
    }
}

export default connect()(UdaciCards)