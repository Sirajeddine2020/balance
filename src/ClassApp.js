import React from 'react';

export default class App extends React.Component {
    state={
        balance:8000,
        savingBalance:30000,
        notification:false
    }
 
   
    handleSaving=()=> {
       this.setState({...this.state, balance:this.state.balance-1000, savingBalance:this.state.savingBalance+1000});
       this.handleNotification();
    }

   handleSpending=()=> {
    this.setState({...this.state, balance:this.state.balance+1000, savingBalance:this.state.savingBalance-1000});
    this.handleNotification();
}

  handleNotification=()=> this.state.balance <=1000  
  ? this.setState({...this.state, notification:true}) 
  : this.setState({...this.state, notification:false});
  
    render() {
        return (
            <div className="App">
            <div>your balance is {this.state.balance}$
            <button onClick={this.handleSpending}>Finance your balance</button>
            </div>
            <div>your savings are {this.state.savingBalance}$
            <button onClick={this.handleSaving}>Save more</button>
            </div>
        {this.state.notification && 
        (<div>
          <p>Sorry you can't spend more today. Please try next time.</p>
          </div>)}
          </div>
        )
    }
  }
