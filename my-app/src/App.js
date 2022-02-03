import React, { Component } from 'react';
import { connect } from 'react-redux';
import KekambasList from './components/KekambasTable';

export class App extends Component {
  render() {
    return 
    <>
    <KekambasList></KekambasList>
    </>
  }
}
const mapStateToProps = (state) => ({});
const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(App);
