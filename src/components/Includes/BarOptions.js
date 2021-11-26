import React, { Component } from 'react'
import Select from 'react-select'
import {  Row, Col, Form, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import RangeSlider from 'react-bootstrap-range-slider'

/**
 * Redux Actions
 * 
 */
import { 
    setAnimationSpeed, 
    setAlgorithmType, 
    setArrayBars, 
    setArray, 
    setRunning, 
    setSorted,
    clearTimeout
} from '../../actions'


/**
 * Import Algorithms
 * 
 */
import InsertionSort from '../SortingAlgorithms/InsertionSort'
import SelectionSort from '../SortingAlgorithms/SelectionSort'
import BubbleSort from '../SortingAlgorithms/BubbleSort'
import MergeSort from '../SortingAlgorithms/MergeSort'
import QuickSort from '../SortingAlgorithms/QuickSort'


/**
 * Array size options
 * Change this value to set default array bars
 * 
 */
const MAX_ARRAY_SIZE = 200
const MIN_ARRAY_SIZE = 10
const DEFAULT_ARRAY_SIZE = 100 // default set array size must be less than max array size


/**
 * List of Algorithm Types
 * 
 */
const ALGORITHM_TYPES = [
    { value:"quickSort",        label:"Quick Sort" },
    { value:"mergeSort",        label:"Merge Sort" },
    { value:"insertionSort",    label:"Insertion Sort" },
    { value:"selectionSort",    label:"Selection Sort" },
    { value:"bubbleSort",       label:"Bubble Sort" },
]

const DEFAULT_ALGORITHM_TYPE = ALGORITHM_TYPES[0] // index of algorithm types


/**
 * List of Animation Speed
 * 
 */
const ANIMATION_SPEED = [
    { value:0.5,    label:"0.5x" },
    { value:0.75,   label: "0.75x" },
    { value:1,      label: "1x" },
    { value:2,      label: "2x" },
    { value:4,      label: "4x" },
]

const DEFAULT_ANIMATION_SPEED = ANIMATION_SPEED[4]

class BarOptions extends Component {
    constructor(props) {
        super(props)

        this.setArray           = this.setArray.bind(this)
        this.sort               = this.sort.bind(this)
        this.setAlgorithmType   = this.setAlgorithmType.bind(this)
        this.setAnimationSpeed  = this.setAnimationSpeed.bind(this)
        this.stopSort           = this.stopSort.bind(this)
    }

    componentDidMount(){
        this.setAlgorithmType()
        this.setAnimationSpeed()
        this.setArrayBars()
    }

    setAlgorithmType(algorithm = DEFAULT_ALGORITHM_TYPE) {
        this.props.setAlgorithm(algorithm)
    }

    setAnimationSpeed(speed = DEFAULT_ANIMATION_SPEED) {
        this.props.setAnimationSpeed(speed)
    }

    setArrayBars(bars = DEFAULT_ARRAY_SIZE) {
        bars = (bars > MAX_ARRAY_SIZE) ? MAX_ARRAY_SIZE / 2 : bars
        this.props.setArrayBars(Number(bars))
        this.setArray(Number(bars))
    }

    setArray(bars) {
        const array = []
        const arrayBars = Number(bars) ? Number(bars) : Number(this.props.arrayBars)
        
        for (let i = 0; i < arrayBars; i++) 
            array.push(this.randomIntFromInterval(5, 100));
    
        this.props.setArray(array)
        this.props.setSorted(false)
        this.props.setRunning(false)
    }

    sort() {
        const { array, animationSpeed, algorithm, sorted } = this.props

        if(!sorted){
            const doSort = algorithm.value === 'insertionSort' ? InsertionSort :
                algorithm.value === 'selectionSort' ? SelectionSort :
                algorithm.value === 'bubbleSort' ? BubbleSort :
                algorithm.value === 'mergeSort' ? MergeSort : 
                algorithm.value === 'quickSort' ? QuickSort : null

            doSort(array, animationSpeed.value, algorithm.value)
        }
    }

    randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    stopSort() {
        this.props.clearTimeouts()
        this.props.setRunning(false)
    }

    render() {

        const {isRunning} = this.props
        
        return (
            <Col className="bars-option shadow">
                <Form>
                    <Row>
                        <Col md="3" lg="3" sm="12">
                            <Form.Group className="mb-3" >
                                <Form.Label>Sort Algorithm</Form.Label>
                                <Select 
                                    onChange={this.setAlgorithmType}
                                    options={ALGORITHM_TYPES}
                                    isDisabled={isRunning}
                                    placeholder="Select Algorithm"
                                    menuPlacement="auto"
                                    value={this.props.algorithm}
                                    defaultValue={this.props.algorithm}
                                />
                            </Form.Group>
                        </Col>
                        <Col md="3" lg="3" sm="12">
                            <Form.Group className="mb-3" >
                                <Form.Label>Animation Speed</Form.Label>
                                <Select 
                                    onChange={this.setAnimationSpeed}
                                    options={ANIMATION_SPEED}
                                    isDisabled={isRunning}
                                    menuPlacement="auto"
                                    placeholder="Select Speed"
                                    value={this.props.animationSpeed}
                                    defaultValue={this.props.animationSpeed}
                                />
                            </Form.Group>
                        </Col>
                        <Col md="3" lg="3" sm="12" >
                            <Form.Label>Size</Form.Label>
                            <RangeSlider
                                className={isRunning ? "disabled" : ""}
                                min={MIN_ARRAY_SIZE} 
                                max={MAX_ARRAY_SIZE}
                                value= {this.props.arrayBars}
                                tooltipPlacement="top"
                                tooltipLabel={currentValue => currentValue}
                                size="sm"
                                variant="info"                                
                                onChange={e => this.setArrayBars(e.target.value)}
                                onAfterChange={e => this.setArrayBars(e.target.value)}
                                disabled={isRunning}
                            />
                        </Col>
                        <Col md="3" lg="3" sm="12">
                            
                            <Button 
                                className={`${isRunning ? "disabled" : ""} `}
                                variant="success" 
                                id="generate_array" 
                                onClick={this.setArray}
                                style={{ marginRight:"5px" }}>
                                New Array
                            </Button>

                            {isRunning ? <Button 
                                className={`${!isRunning ? "disabled" : ""} `} 
                                id="stop_sort" 
                                variant="danger"
                                onClick={this.stopSort}
                                >
                                Stop
                            </Button> 
                            :<Button 
                                className={`${isRunning ? "disabled" : ""}`} 
                                id="sort" 
                                onClick={this.sort}
                                variant="success"
                                >
                                Run Sort
                            </Button>}
                        </Col>
                    </Row>
                </Form>
            </Col>
        )
    }
}

/**
 * Sates to Props
 * 
 */
const mapStateToProps = (state) => ({
    array: state.array,
    arrayBars: state.arrayBars,
    animationSpeed: state.animationSpeed,
    algorithm: state.algorithm,
    swappers: state.swappers,
    isRunning: state.isRunning,
    sorted: state.sorted
})


/**
 * Action to Props
 * Dispatch Reducers
 * 
 */
const mapDispatchToProps = (dispatch) => {
    return {
        setAnimationSpeed: (speed) => dispatch(setAnimationSpeed(speed)),
        setAlgorithm: (algorithm) => dispatch(setAlgorithmType(algorithm)),
        setArrayBars: (bars) => dispatch(setArrayBars(bars)),
        setArray: (array) => dispatch(setArray(array)),
        setRunning: (isRunning) => dispatch(setRunning(isRunning)),
        setSorted: (isSorted) => dispatch(setSorted(isSorted)),
        clearTimeouts : () => dispatch(clearTimeout()),
    }
};


/**
 * Connect States, Reducer to Props
 * 
 */
export default connect(mapStateToProps, mapDispatchToProps)(BarOptions)
