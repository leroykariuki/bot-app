import React from 'react';
import Bot from './Bot';

const BotCollection = ({ bots, onEnlist }) => {
  return (
    <div className="bot-collection">
      {bots.map((bot) => (
        <Bot key={bot.id} bot={bot} onEnlist={onEnlist} />
      ))}
    </div>
  );
};

export default BotCollection;
