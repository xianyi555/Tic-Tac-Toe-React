import React, { Component } from 'react';
import './GameBoard.css'; 

export default class GameBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [["", "", ""], ["", "", ""], ["", "", ""]],
      turn: 'X',
      player1: [],
      player2: [],
    }
    this.handleBoard1 = this.handleBoard1.bind(this);
    this.handleBoard2 = this.handleBoard2.bind(this);
    this.handleBoard3 = this.handleBoard3.bind(this);
    this.handleBoard4 = this.handleBoard4.bind(this);
    this.handleBoard5 = this.handleBoard5.bind(this);
    this.handleBoard6 = this.handleBoard6.bind(this);
    this.handleBoard7 = this.handleBoard7.bind(this);
    this.handleBoard8 = this.handleBoard8.bind(this);
    this.handleBoard9 = this.handleBoard9.bind(this);
    this.checkIfWin = this.checkIfWin.bind(this);
    this.reset = this.reset.bind(this);
  }



  handleBoard1(e) {
    e.preventDefault();
    console.log(e.target.getAttribute("id"))
    let id = e.target.getAttribute("id")
    let input = document.getElementById(id)
    
    if (input.innerHTML === "") {
      if (this.state.turn === "X") {
        input.innerHTML = this.state.turn
        this.setState({ 
          turn: 'O',
        })
        this.state.board[0][0] = 'X'
        this.state.player1.push(id)
      }else{
        input.innerHTML = this.state.turn
        this.setState({
          turn: 'X',
        })
        this.state.board[0][0] = 'O'
        this.state.player2.push(id)
      }
    }
    this.checkIfWin(this.state.player1,this.state.player2)
  }  

    handleBoard2(e) {
    e.preventDefault();
    console.log(e.target.getAttribute("id"))
    let id = e.target.getAttribute("id")
    let input = document.getElementById(id)
    
    if (input.innerHTML === "") {
      if (this.state.turn === "X") {
        input.innerHTML = this.state.turn
        this.setState({ 
          turn: 'O',
        })
        this.state.board[0][1] = 'X'
        this.state.player1.push(id)
      }else{
        input.innerHTML = this.state.turn
        this.setState({
          turn: 'X',
        })
        this.state.board[0][1] = 'O'
        this.state.player2.push(id)
      }
    }
    this.checkIfWin(this.state.player1,this.state.player2)
  } 

    handleBoard3(e) {
    e.preventDefault();
    console.log(e.target.getAttribute("id"))
    let id = e.target.getAttribute("id")
    let input = document.getElementById(id)
    
    if (input.innerHTML === "") {
      if (this.state.turn === "X") {
        input.innerHTML = this.state.turn
        this.setState({ 
          turn: 'O',
        })
        this.state.board[0][2] = 'X'
        this.state.player1.push(id)
      }else{
        input.innerHTML = this.state.turn
        this.setState({
          turn: 'X',
        })
        this.state.board[0][2] = 'O'
        this.state.player2.push(id)
      }
    }
    this.checkIfWin(this.state.player1,this.state.player2)
  } 

    handleBoard4(e) {
    e.preventDefault();
    console.log(e.target.getAttribute("id"))
    let id = e.target.getAttribute("id")
    let input = document.getElementById(id)
    
    if (input.innerHTML === "") {
      if (this.state.turn === "X") {
        input.innerHTML = this.state.turn
        this.setState({ 
          turn: 'O',
        })
        this.state.board[1][0] = 'X'
        this.state.player1.push(id)
      }else{
        input.innerHTML = this.state.turn
        this.setState({
          turn: 'X',
        })
        this.state.board[1][0] = 'O'
        this.state.player2.push(id)
      }
    }
    this.checkIfWin(this.state.player1,this.state.player2)
  } 

    handleBoard5(e) {
    e.preventDefault();
    console.log(e.target.getAttribute("id"))
    let id = e.target.getAttribute("id")
    let input = document.getElementById(id)
    
    if (input.innerHTML === "") {
      if (this.state.turn === "X") {
        input.innerHTML = this.state.turn
        this.setState({ 
          turn: 'O',
        })
        this.state.board[1][1] = 'X'
        this.state.player1.push(id)
      }else{
        input.innerHTML = this.state.turn
        this.setState({
          turn: 'X',
        })
        this.state.board[1][1] = 'O'
        this.state.player2.push(id)
      }
    }
    this.checkIfWin(this.state.player1,this.state.player2)
  } 

    handleBoard6(e) {
    e.preventDefault();
    console.log(e.target.getAttribute("id"))
    let id = e.target.getAttribute("id")
    let input = document.getElementById(id)
    
    if (input.innerHTML === "") {
      if (this.state.turn === "X") {
        input.innerHTML = this.state.turn
        this.setState({ 
          turn: 'O',
        })
        this.state.board[1][2] = 'X'
        this.state.player1.push(id)
      }else{
        input.innerHTML = this.state.turn
        this.setState({
          turn: 'X',
        })
        this.state.board[1][2] = 'O'
        this.state.player2.push(id)
      }
    }
    this.checkIfWin(this.state.player1,this.state.player2)
  } 

    handleBoard7(e) {
    e.preventDefault();
    console.log(e.target.getAttribute("id"))
    let id = e.target.getAttribute("id")
    let input = document.getElementById(id)
    
    if (input.innerHTML === "") {
      if (this.state.turn === "X") {
        input.innerHTML = this.state.turn
        this.setState({ 
          turn: 'O',
        })
        this.state.board[2][0] = 'X'
        this.state.player1.push(id)
      }else{
        input.innerHTML = this.state.turn
        this.setState({
          turn: 'X',
        })
        this.state.board[2][0] = 'O'
        this.state.player2.push(id)
      }
    }
    this.checkIfWin(this.state.player1,this.state.player2)
  } 

    handleBoard8(e) {
    e.preventDefault();
    console.log(e.target.getAttribute("id"))
    let id = e.target.getAttribute("id")
    let input = document.getElementById(id)
    
    if (input.innerHTML === "") {
      if (this.state.turn === "X") {
        input.innerHTML = this.state.turn
        this.setState({ 
          turn: 'O',
        })
        this.state.board[2][1] = 'X'
        this.state.player1.push(id)
      }else{
        input.innerHTML = this.state.turn
        this.setState({
          turn: 'X',
        })
        this.state.board[2][1] = 'O'
        this.state.player2.push(id)
      }
    }
    this.checkIfWin(this.state.player1,this.state.player2)
  } 

    handleBoard9(e) {
    e.preventDefault();
    console.log(e.target.getAttribute("id"))
    let id = e.target.getAttribute("id")
    let input = document.getElementById(id)
    
    if (input.innerHTML === "") {
      if (this.state.turn === "X") {
        input.innerHTML = this.state.turn
        this.setState({ 
          turn: 'O',
        })
        this.state.board[2][2] = 'X'
        this.state.player1.push(id)
      }else{
        input.innerHTML = this.state.turn
        this.setState({
          turn: 'X',
        })
        this.state.board[2][2] = 'O'
        this.state.player2.push(id)
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

  reset() {
    this.setState({
      board: [["", "", ""], ["", "", ""], ["", "", ""]],
      turn: 'X',
      player1: [],
      player2: []
    });
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
                    <div className="col-md-4 box" id="id1" onClick={ (e) => this.handleBoard1(e) } onChange={ this.handleBoard1 }></div>
                    <div className="col-md-4 box" id="id2" onClick={ (e) => this.handleBoard2(e) } onChange={ this.handleBoard2 }></div>
                    <div className="col-md-4 box" id="id3" onClick={ (e) => this.handleBoard3(e) } onChange={ this.handleBoard3 }></div>
                  </div>
                  <div className="row">
                    <div className="col-md-4 box" id="id4" onClick={ (e) => this.handleBoard4(e) } onChange={ this.handleBoard4 }></div>
                    <div className="col-md-4 box" id="id5" onClick={ (e) => this.handleBoard5(e) } onChange={ this.handleBoard5 }></div>
                    <div className="col-md-4 box" id="id6" onClick={ (e) => this.handleBoard6(e) } onChange={ this.handleBoard6 }></div>
                  </div>
                  <div className="row">
                    <div className="col-md-4 box" id="id7" onClick={ (e) => this.handleBoard7(e) } onChange={ this.handleBoard7 }></div>
                    <div className="col-md-4 box" id="id8" onClick={ (e) => this.handleBoard8(e) } onChange={ this.handleBoard8 }></div>
                    <div className="col-md-4 box" id="id9" onClick={ (e) => this.handleBoard9(e) } onChange={ this.handleBoard9 }></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="reset" onClick={ (e) => this.reset(e) } onChange={ this.reset }>Reset</button>
      </div>
    )
  }
}
