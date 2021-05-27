import React, {useState, useEffect} from 'react';
import './App.css';
const App = () => {
 
  const [balance, setBalance] = useState(1500);
  const [savingBalance, setSavingBalance] = useState(1349);
  const [notification, setNotification] = useState(false);

  function useCustom(x,y) {
    const [name,setName]=useState('Meyssa');
    const [phone,setPhone]=useState(55454512120);
       useEffect(() => {
        setName(x);
        setPhone(y);
        
    }, [x,y]);
  return {'name':name, 'phone':phone};
  }
 


  const handleSavings = () => {
    if (balance > 1000) {
      setBalance(balance - 100);
      setSavingBalance(savingBalance + 100);
    }
  }

  const handleSpending = () => {
    setBalance(balance + 100);
    setSavingBalance(savingBalance - 100);
  }


 let obj= useCustom('Sirine', 227841253225);
 let obj2= useCustom('Aida', 22744441253225);
 let obj3= useCustom('Rania', 288888888885);


  useEffect(() => {
    if (balance <= 1000) {
      setNotification(true);
    }
  }, [balance]);

  return (
    <div className="columns">
      <div className="column">
        <div className="box">
         <h2>my name is {obj.name}</h2>
         <h3>my phone is {obj.phone}</h3>
         <h2>my name is {obj2.name}</h2>
         <h3>my phone is {obj2.phone}</h3>
         <h2>my name is {obj3.name}</h2>
         <h3>my phone is {obj3.phone}</h3>
          <h4 className="title is-4">Your account balance:</h4>
          <div className="amount">{balance}$</div>
          <button
            className="button is-info"
            onClick={() => handleSavings()}
          >
            Send 100$
          </button>
        </div>
      </div>
      <div className="column">
        <div className="box">
          <h4 className="title is-4">Your savings balance:</h4>
          <div className="amount savings">{savingBalance}$</div>
          <button
            className="button is-info"
            onClick={() => handleSpending()}
          >
            Send 100$
          </button>
        </div>
      </div>
      {notification && (
        <div className="notification is-danger">
          <button onClick={() => setNotification(false)} className="delete"></button>
          <p>Your account balance is very low.</p>
          <p>You can't transfer more money today.</p>
        </div>
      )}
    </div>
  )
}
export default App;
