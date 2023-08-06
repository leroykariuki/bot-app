import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';
import './App.css'

const App = () => {
  const [bots, setBots] = useState([]);
  const [yourBotArmy, setYourBotArmy] = useState([]);

  useEffect(() => {
    // Fetch data from db.json or your backend API
    axios.get('http://localhost:3000/bots').then((response) => {
      setBots(response.data);
    });
  }, []);

  const enlistBot = (bot) => {
    if (!yourBotArmy.some((armyBot) => armyBot.id === bot.id)) {
      setYourBotArmy([...yourBotArmy, bot]);
    }
  };

  const releaseBot = (bot) => {
    const updatedArmy = yourBotArmy.filter((armyBot) => armyBot.id !== bot.id);
    setYourBotArmy(updatedArmy);
  };

  const dischargeBot = (botId) => {
    // Remove the bot from the backend first
    axios.delete(`http://localhost:3000/bots/${botId}`).then(() => {
      // Then, update the frontend
      const updatedArmy = yourBotArmy.filter((armyBot) => armyBot.id !== botId);
      setYourBotArmy(updatedArmy);
    });
  };

  return (
    <div className="app">
      <BotCollection bots={bots} onEnlist={enlistBot} />
      <YourBotArmy
        army={yourBotArmy}
        onRelease={releaseBot}
        onDischarge={dischargeBot}
      />
    </div>
  );
};

export default App;
