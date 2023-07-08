import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Login from './Login';
import './TextDisplayPanel.css'
import { useNavigate } from "react-router-dom";

export const TextDisplayPanel = ({  handleLogin, handleLogout }) => {
  const [texts, setTexts] = useState([]);
  const [textIndex, setTextIndex] = useState(0);
  const history = useNavigate();
  let isLoggedIn=localStorage.getItem('isauth');
  handleLogout = () => {
    localStorage.removeItem('isauth');
    history('/login', { replace: true });
  };

  useEffect(() => {
    fetchTexts();
  }, []);

  const fetchTexts = async () => {
    try {
      const response = await axios.get('http://localhost:8000/Text/');
      console.log(response);
      const fetchedTexts = response.data;
      setTexts(fetchedTexts);
    } catch (error) {
      console.error('Error fetching text data:', error);
    }
  };

  const handleNextText = () => {
    if (textIndex < texts.length - 1) {
      setTextIndex(textIndex + 1);
    }
  };

  const handlePreviousText = () => {
    if (textIndex > 0) {
      setTextIndex(textIndex - 1);
    }
  };

  return (
    <div className="app-container">
      <h1></h1>
      {isLoggedIn ? (
        <><div>
 <p class="text-display-panel">{texts[textIndex]?.text}</p>
          <div className="button-container">
            <button
              className="prev-button"
              disabled={textIndex === 0}
              onClick={handlePreviousText}
            >
              Previous
            </button>
            <button
              className="next-button"
              disabled={textIndex === texts.length - 1}
              onClick={handleNextText}
            >
              Next
            </button>
          </div>
           <button class="logout-button" onClick={handleLogout}>Logout</button>
        </div>
         
           
        </>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default TextDisplayPanel;
