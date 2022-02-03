import React, { Component } from 'react';
import KekambasRows from './KekambasRows';

export default class KekambasList extends Component {
    constructor(props){
        console.log('Component Constructed')
        super(props);
        this.state={
            classmates: []
        }
    }
    componentDidMount(){
        console.log('Component Mounted')
        fetch(' https://kekambas-bs.herokuapp.com/kekambas')
        .then(res => res.json())
        .then(data =>{
           console.log(data)
            this.setState({
                classmates: data
            })
        })
    }
  render() {
      console.log('component Rendered')
    return (
        <div className="container">
        <h1> This is the list of the Kekamba's Students</h1>
        <table className='table table-dark table-striped'>
                <thead>
                    <tr>
                    <th scope="col">Id</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    </tr>
                </thead>
        </table>
        <tbody>
            {this.state.classmates.map((x, i)=> <KekambasRows students={x} key={i}/>)}
        </tbody>
        
        </div>
    );
  }
}