
import React, { Component } from 'react';

export default class Kekambas extends Component {
    constructor(props){
        console.log('Constructed')
        super(props);
        this.state = {
            kekambas: []
        }
        this.getKekambas = this.getKekambas();
    }
 componentDidMount(){
         fetch('https://kekambas-bs.herokuapp.com/kekambas')
             .then(res => res.json())
             .then(data => {
                 console.log(data)
                this.setState({
                    kekambas: data
              })
            })
     }
     render() {
        console.log('Rendered')
        return ({this.state.kekambas.map((x, i) => <li key={i}>{x.first_name} {x.last_name}</li>)})