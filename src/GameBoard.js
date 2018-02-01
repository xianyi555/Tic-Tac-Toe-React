import React, { Component } from 'react';
import './GameBoard.css'; 
// import $ from 'jquery';

export default class GameBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // board: [["", "", ""], ["", "", ""], ["", "", ""]],
      player1: [],
      player2: [],
      turn: 'X',
    }
    this.handleBoard = this.handleBoard.bind(this);
    this.checkIfWin = this.checkIfWin.bind(this);
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
        this.state.player1.push(id)
        console.log(this.state.player1)
  
      }else{
        input.innerHTML = this.state.turn
        this.setState({
          turn: 'X'
        })
        this.state.player2.push(id)
        console.log(this.state.player2)
      }
    }
    this.checkIfWin(this.state.player1,this.state.player2)

  }



  checkIfWin(p1,p2) {
    console.log(p1)
    const winArr = [["id1","id2","id3"],
                    ["id4","id5","id6"],
                    ["id7","id8","id9"],
                    ["id1","id4","id7"],
                    ["id2","id5","id8"],
                    ["id3","id6","id9"],
                    ["id1","id5","id9"],
                    ["id3","id5","id7"]]

    if(p1.length >= 3){
      winArr.forEach((senario) => {
  
        if(senario.every((e) => p1.includes(e))){
          alert("Player 1 Win")
        }
        if(senario.every((e) => p2.includes(e))){
          alert("Player 2 Win")
        }
        })
      if(p1.length === 5){
          alert("Tie")
      }
    }
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
