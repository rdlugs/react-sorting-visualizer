import React, { Component } from 'react'
import {  Col } from 'react-bootstrap'
import { connect } from 'react-redux'

class Bars extends Component {
    constructor(props) {
        super(props)

        // Local State
        this.state = {}
    }

    render() {

        const { 
            array, 
            swappers, 
            isSorted,
            selectionSearchIndex,
            selectionCurrentIndex,
            selectionTagIndex 
        } = this.props

        let barOneIndex = null
        let barTwoIndex = null

        if(swappers.length > 0)
        {
            const isSwap = Array.isArray(swappers[0])

            barOneIndex = isSwap ? swappers[0][0] : swappers[0]            
            barTwoIndex = isSwap ? (1 in swappers) ? swappers[1][0] : null : swappers[1]
        }

        return (
            <Col 
                className="bars" 
                md="12"
                lg="12"
                sm="12"
                >
                { array.map((val, key) => {
                    const width = window.innerWidth / this.props.arrayBars
                    const classSwap = (!isSorted) ? (key === barOneIndex || key === barTwoIndex) ? " swap" : "" 
                    : " sorted"

                    const searching = selectionSearchIndex === key ? " search" : ""
                    const tagged    = selectionTagIndex === key ? " tagged" : ""
                    const current   = selectionCurrentIndex === key ? " current" : ""
                  
                    return <span 
                        className={"bar" + classSwap + searching + tagged +  current}
                        key={key}
                        style={{
                            height: `${val}%`,
                            width: `${width}%`
                        }}>
                            {this.props.arrayBars <= 50 ? val :""}
                    </span>
                }) }    
            </Col>
        )
    }
}


const mapStateToProps = (state) => ({
    array: state.array,
    arrayBars: state.arrayBars,
    swappers: state.swappers,
    isSorted : state.sorted,
    selectionSearchIndex : state.selectionSearchIndex,
    selectionCurrentIndex : state.selectionCurrentIndex,
    selectionTagIndex : state.selectionTagIndex
})

export default connect(mapStateToProps)(Bars)