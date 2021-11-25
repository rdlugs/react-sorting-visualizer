import React, { Component } from 'react'
import Header from './Includes/Header'
import SortVisualizer from './SortVisualizer/SortVisualizer'

export default class Main extends Component {
    render() {
        return (
            <>
                <Header />
                <SortVisualizer />
            </>
        )
    }
}
