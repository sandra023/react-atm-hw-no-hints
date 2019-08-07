import React, { Component } from 'react';


class Account extends Component {
  constructor() {
    super();

    this.state = {
      balance: 0,
      balanceClass: "balance"
    }

  }
  
  handleDeposit = (e) => {
    this.setState({ 
      balance: this.state.balance + parseInt(this.refs.textInput.value)
    })
  }
        
 handleWithdraw = async (e) => {
    if(this.state.balance >= parseInt(this.refs.textInput.value)){
      await this.setState({
        balance: this.state.balance - parseInt(this.refs.textInput.value)
      })
    } else {
      alert('There is not enought money in the account to complete your withdrawal.')
    }
   
    if(await this.state.balance <= 0){
      this.setState({
        balanceClass: "zero"
      }) 
    }
    

  }
  render() {
    
    return (
      <div className="account">
        <h2>{this.props.name}</h2>
        <div className={this.state.balanceClass}>${this.state.balance}</div>
        <input ref="textInput" type="text" placeholder="enter an amount" />
        <input type="button" onClick={this.handleDeposit} value="Deposit" />
        <input type="button" onClick={this.handleWithdraw} value="Withdraw" />
      </div>
    )
  }
}

export default Account;
