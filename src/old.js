import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [balance, setBalance]= useState(8000);
  const [savingBalance, setSavingBalance]= useState(30000);
  const [notification, setNotification] = useState(false);
  
  const handleSaving =()=> {
  !notification &&  setBalance(balance-1000);
  !notification && setSavingBalance(savingBalance+1000);
  }

  const handleSpending =()=> {
    setBalance(balance+1000);
    setSavingBalance(savingBalance-1000);
  }
  useEffect(() => {
    if (balance<=1000)   {
      setNotification(true)      
    } else {setNotification(false)  }
  }, [balance])
  return (
    <div className="App">
      <div>your balance is {balance}$
      <button onClick={handleSpending}>Finance your balance</button>
      </div>
      <div>your savings are {savingBalance}$
      <button onClick={handleSaving}>Save more</button>
      </div>
  {notification && 
  (<div>
    <p>Sorry you can't spend more today. Please try next time.</p>
    </div>)}
    </div>
  );
}

export default App;
