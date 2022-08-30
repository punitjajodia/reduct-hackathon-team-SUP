import './App.css';
import {useState} from 'react';


function Home({db, setDb}) {

  const [email, setEmail] = useState("");

  const login = () => {

    const account = db.admin_accounts.find(account => {
      return account.email === email
    });

    if(account) {
      setDb({
        ...db,
        current_login: {
          email: email,
          type: "employer"
        }
      })
    } else {
      alert("Oh no");
    }
  }

  console.log(db.current_login);

  if(db.current_login) {
    return(
      <div>Welcome back {db.current_login.email}</div>
    )
  }


  return (
    <div className="App">
      <header className="App-header">
         <input value={email} onChange={(e) => setEmail(e.target.value)}></input>
         <button onClick = {login}>Login</button>
      </header>
    </div>
  );
}

export default Home;
