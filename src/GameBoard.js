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
    console.log(e.target.getAttribute("id"))
    let id = e.target.getAttribute("id")
    let input = document.getElementById(id)
    

    if (input.innerHTML === "") {
      if (this.state.turn === "X") {
        input.innerHTML = this.state.turn
        this.setState({ 
          turn: 'O'
        })  
      }else{
        input.innerHTML = this.state.turn
        this.setState({
          turn: 'X'
        })
      }
    }
  }

  checkIfWin(e) {
    e.preventDefault();
    
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
                    <div className="col-md-4 box" id="id1" onClick={ (e) => this.handleBoard(e) } onChange={ this.handleBoard }></div>
                    <div className="col-md-4 box" id="id2" onClick={ (e) => this.handleBoard(e) } onChange={ this.handleBoard }></div>
                    <div className="col-md-4 box" id="id3" onClick={ (e) => this.handleBoard(e) } onChange={ this.handleBoard }></div>
                  </div>
                  <div className="row">
                    <div className="col-md-4 box" id="id4" onClick={ (e) => this.handleBoard(e) } onChange={ this.handleBoard }></div>
                    <div className="col-md-4 box" id="id5" onClick={ (e) => this.handleBoard(e) } onChange={ this.handleBoard }></div>
                    <div className="col-md-4 box" id="id6" onClick={ (e) => this.handleBoard(e) } onChange={ this.handleBoard }></div>
                  </div>
                  <div className="row">
                    <div className="col-md-4 box" id="id7" onClick={ (e) => this.handleBoard(e) } onChange={ this.handleBoard }></div>
                    <div className="col-md-4 box" id="id8" onClick={ (e) => this.handleBoard(e) } onChange={ this.handleBoard }></div>
                    <div className="col-md-4 box" id="id9" onClick={ (e) => this.handleBoard(e) } onChange={ this.handleBoard }></div>
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
