import React, { Component } from 'react';
import '../myStyle.css';
import Button from './button';
import Input from './input';
import Output from './output';

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
      onClick = (value) =>{
          
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