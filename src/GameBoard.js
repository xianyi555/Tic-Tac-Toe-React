import React, { Component } from 'react';
import './GameBoard.css'; 
// import $ from 'jquery';

export default class GameBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playBoard: "+",
      firstPlayer: "+",
      sencondPlayer: "+",
    }

    this.handleBoard = this.handleBoard.bind(this);

  }

  handleBoard(e) {
    e.preventDefault();

    this.setState({

      playBoard: "O"
    })

  }


  render() {
    return (
      <div className="gameboard">
        <div id="playboard">
          <div className="container">
            <div className="row text-center">
              <div className="col-md-12">
                <div className="col-md-6 col-md-offset-3" id="board">
                  <div className="row">
                    <div className="col-md-4 box id1 onClick={ (e) => this.handleBoard(e) } onChange={ this.handleBoard }">+</div>
                    <div className="col-md-4 box id2">+</div>
                    <div className="col-md-4 box id3">+</div>
                  </div>
                  <div className="row">
                    <div className="col-md-4 box id4">+</div>
                    <div className="col-md-4 box id5">+</div>
                    <div className="col-md-4 box id6">+</div>
                  </div>
                  <div className="row">
                    <div className="col-md-4 box id7">+</div>
                    <div className="col-md-4 box id8">+</div>
                    <div className="col-md-4 box id9">+</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="reset" >Reset</button>
      </div>
    )
  }
}
