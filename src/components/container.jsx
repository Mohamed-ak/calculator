import React, { Component } from 'react';
import '../myStyle.css';
import Button from './button';
import Input from './input';
import Output from './output';
import { isOverLimit, isResult, getLast, isOperator, containNumber, appendOperator } from '../utils';

class Container extends Component {
    state = { 
        input: '0',
        output: ''
       };
    buttons = [
        {name: "one", value: '1', display: '1'},
        {name: "two", value: '2', display: '2'},
        {name: "three", value: '3', display: '3'},
        {name: "four", value: '4', display: '4'},
        {name: "five", value: '5', display: '5'},
        {name: "six", value: '6', display: '6'},
        {name: "seven", value: '7', display: '7'},
        {name: "eight", value: '8', display: '8'},
        {name: "nine", value: '9', display: '9'},
        {name: "zero", value: '0', display: '0'},
        {name: "add", value: '+', display: '+'},
        {name: "minus", value: '-', display: '-'},
        {name: "times", value: 'x', display: 'x'},
        {name: "div", value: '/', display: '/'},
        {name: "ac", value: 'ac', display: 'AC'},
        {name: "del", value: 'del', display: ''+String.fromCharCode(8617)},
        {name: "dot", value: '.', display: '.'},
        {name: "equal", value: '=', display: '='},
      ];

      // This is used to handle the numbers.
      numberClick = (num, input, output) => {
 
        if(isOverLimit(input)){
          setTimeout(()=>{
            this.update({input, output})
          }, 1000);
          return {input:<span className="overlimit">digit limit met</span>, output}
        }
        if (isResult(output)){
          ({ output } = this.clearClick())
        }
        let {start, last} = getLast(output);
        console.log('start',start,'last',last)
    
        if (last === '0' || !last) {
          output = start+num;
          input = num;
        }
        else if (isOperator(last)){
          console.log("NUMBER CLICK: last in operator")
            output = output + num;
            input = num;
        }
        else if (containNumber(last)){
          output += num;
          input += num;
        }
        
        return {input, output}
      }
      // Handles click on an operator (+, -, / or x)
      operatorClick = (op, input, output) => {
        if (isResult(output)){
          output = input;
        }
        let {last} = getLast(output); 
          // If this this operator starts the first operand, 
          // we make sure it can only be minus
          if (last === ''){
              if (op === '-'){
                output = op;
              }
          }
          // Otherwise we append it to the operation
          else{
            if (!(isOperator(last) && last === output)){
              output = appendOperator(output, op);
            }
            
          }
        input = op;
        return {input, output}
      }

      // We are using this function to change the state of the component
      update = ({input, output}) => {
        this.setState({
          input, output
        })
      }

      onClick = (value) =>{
        let {input, output} = this.state;
        // if input is an object, that means we've reached the number of caracters 
        // allowed at once.
        if (typeof input === 'object') return
        if (containNumber(value)){
          this.update(this.numberClick(value, input, output))
        }
        else if (isOperator(value)){
          this.update(this.operatorClick(value,input, output));
        }
          
      }
    render() { 
        return ( 
            <div id="container">
            <Output display={this.state.output} />
            <Input display={this.state.input} />
            {this.buttons.map((d)=><Button key={d.name} classes={`key ${d.name}`} value={d.value} display={d.display} onClick={this.onClick}/> )}
          </div>            
         );
    }
}
 
export default Container;