import './App.css';
import React, { useState, useEffect} from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import messengerLogo from './messengerLogo.png';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

function App() {

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    // Run once when the app component loads, always listening for new inputs in the database
    db.collection('messages')
    .orderBy('timestamp', 'desc')
    .onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()}) ))
    });

  }, [])

  useEffect(() => {
    setUsername(prompt('Please enter your name'));

  }, [] )


  const sendMessage = (event) => {
    event.preventDefault();

    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setInput('');
  }

  return (
    <div className="App">
      <img src={messengerLogo} alt="messengerLogo" width="100" height="100"/>
      <h1>Simple Messenger Application</h1>
      <h2>Welcome {username}</h2>
      
      <form className="app__form">  
      <FormControl className="app__formControl">
        <Input className="app__input" placeholder='Enter a message...' value={input} onChange={event => setInput(event.target.value)}/>
        <IconButton className="app__iconButton" variant="contained" color="primary" disabled={!input} type='submit' onClick={sendMessage}>
          <SendIcon />
        </IconButton>
        
      </FormControl>


      </form>

      {/* Messages */}
      <FlipMove>
          {
            messages.map(({id, message}) => (
              <Message key={id} username={username} message={message}/>
            ))
          }
      </FlipMove>



    </div>
  );
}

export default App;
