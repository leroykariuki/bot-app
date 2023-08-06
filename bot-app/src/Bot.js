import React from 'react';

const Bot = ({ bot, onEnlist }) => {
  return (
    <div className="bot">
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p>Class: {bot.bot_class}</p>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <p>Catchphrase: {bot.catchphrase}</p>
      <button onClick={() => onEnlist(bot)}>Enlist</button>
    </div>
  );
};

export default Bot;
