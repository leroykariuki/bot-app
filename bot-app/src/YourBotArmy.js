import React from 'react';

const YourBotArmy = ({ army, onRelease, onDischarge }) => {
  return (
    <div className="your-bot-army">
      <h2>Your Bot Army</h2>
      {army.map((bot) => (
        <div key={bot.id} className="army-bot">
          <img src={bot.avatar_url} alt={bot.name} />
          <h3>{bot.name}</h3>
          <p>Class: {bot.bot_class}</p>
          <p>Health: {bot.health}</p>
          <p>Damage: {bot.damage}</p>
          <p>Armor: {bot.armor}</p>
          <p>Catchphrase: {bot.catchphrase}</p>
          <button onClick={() => onRelease(bot)}>Release</button>
          <button onClick={() => onDischarge(bot.id)}>Discharge</button>
        </div>
      ))}
    </div>
  );
};

export default YourBotArmy;
