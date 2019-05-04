import React, {Component} from 'react';
import {Button} from 'reactstrap';
import { connect } from 'react-redux';
import { addWord } from './actions/actions';

class App extends Component {
  render() {
    return (<>
      <Button onClick={() => this.props.addWord('word')}>Press me!</Button>
      {this.props.words}
    </>);
  }
}

const mapStateToProps = (state) => {
  return {
    words: state.listReducer.words
  }
}

const mapDispatchToProps = {addWord};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);