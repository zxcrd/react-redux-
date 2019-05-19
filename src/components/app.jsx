import React, { Component } from 'react';


export default class App extends Component {
    state = { 
        count:0
     }
     increment = ()=>{
         const number = this.select.value*1
         const count = number + this.state.count
         this.setState({
             count
         })
     }
     decrement = ()=>{
        const number = this.select.value*1
        const count =  this.state.count - number
        this.setState({
            count
        })
    }
    incrementodd = ()=> {
        if(this.state.count%2 === 1){
            const number = this.select.value*1
            const count =  this.state.count + number
            this.setState({
                count
            })
        }
    }
    incrementasync = ()=> {
        const number = this.select.value*1
        const count =  this.state.count + number
        setTimeout(()=>{           
            this.setState({
                count
            })
        },1000)
           
        
    }
    render() { 
        return ( 
            <div>
                <h2>click {this.state.count} times</h2>
                <select ref={select => this.select = select}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;
                <button onClick={this.increment}>+</button>&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;
                <button onClick={this.incrementodd}>increment if odd</button>&nbsp;
                <button onClick={this.incrementasync}>increment async</button>
            </div>
         );
    }
}
 