import React from 'react'
import {connect} from 'react-redux';
import {add,reduce,addBy5,reduceBy5,reset} from '../ReactRedux/Actions';

const Counter = ({count,name,add,reduce,addBy5,reduceBy5,reset}) => {

    return (
        <div className="classContent">
            <h1>{name}</h1>
            <h1>{count}</h1>
            <button className="btn btn-success" onClick={add}>+1</button>
            <button className="btn btn-warning" onClick={reduce}>-1</button>
            <button className="btn btn-success" onClick={addBy5}>+5</button>
            <button className="btn btn-warning" onClick={reduceBy5}>-5</button>
            <button className="btn btn-warning" onClick={reset}>0</button>
        </div>
    )
}

const mapStateToProps = state => ({
    count:state.count
})

export default connect(mapStateToProps,{add,addBy5,reduce,reduceBy5,reset})(Counter);
