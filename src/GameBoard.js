import React, { Component } from 'react';
import './GameBoard.css'; 
// import $ from 'jquery';

export default class GameBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [["", "", ""], ["", "", ""], ["", "", ""]],
      turn: 'X'
    }
    this.handleBoard = this.handleBoard.bind(this);
  }



  handleBoard(e) {
    e.preventDefault();
    console.log("yay!!")
    this.setState({ 
      turn: 'O'
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
                    <div className="col-md-4 box id1" onClick={ (e) => this.handleBoard(e) } onChange={ this.handleBoard }>+</div>
                    <div className="col-md-4 box id2" onClick={ (e) => this.handleBoard(e) } onChange={ this.handleBoard }>+</div>
                    <div className="col-md-4 box id3" onClick={ (e) => this.handleBoard(e) } onChange={ this.handleBoard }>+</div>
                  </div>
                  <div className="row">
                    <div className="col-md-4 box id4" onClick={ (e) => this.handleBoard(e) } onChange={ this.handleBoard }>+</div>
                    <div className="col-md-4 box id5" onClick={ (e) => this.handleBoard(e) } onChange={ this.handleBoard }>+</div>
                    <div className="col-md-4 box id6" onClick={ (e) => this.handleBoard(e) } onChange={ this.handleBoard }>+</div>
                  </div>
                  <div className="row">
                    <div className="col-md-4 box id7" onClick={ (e) => this.handleBoard(e) } onChange={ this.handleBoard }>+</div>
                    <div className="col-md-4 box id8" onClick={ (e) => this.handleBoard(e) } onChange={ this.handleBoard }>+</div>
                    <div className="col-md-4 box id9" onClick={ (e) => this.handleBoard(e) } onChange={ this.handleBoard }>+</div>
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
