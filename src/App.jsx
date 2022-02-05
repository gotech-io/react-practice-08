import { useState, useCallback } from 'react';
import getRandomColor from './getRandomColor';
import ColorChangingCube from './ColorChangingCube';
import LogItem from './LogItem';
import './App.css';

const App = () => {
  const [messages, setMessages] = useState([]);
  const [borderColor, setBorderColor] = useState(getRandomColor());

  const changeBorderColor = () => {
    setBorderColor(getRandomColor());
  };

  const onColorChanged = useCallback((id) => {
    setMessages((prevMessages) => {
      const newMessage = {
        id: new Date().getTime(),
        message: `${id} changed color!`,
      };
      return [newMessage, ...prevMessages];
    });
  }, []);

  const object = { a: 1 };

  return (
    <div className="App">
      <div className="container">
        <div className="color-changers" style={{ borderColor: borderColor }}>
          <ColorChangingCube
            id="1"
            onColorChanged={onColorChanged}
            object={object}
          />
          <ColorChangingCube
            id="2"
            onColorChanged={onColorChanged}
            object={object}
          />
          <ColorChangingCube
            id="3"
            onColorChanged={onColorChanged}
            object={object}
          />
        </div>
        <ul className="log" style={{ borderColor: borderColor }}>
          {messages.map((logItem) => (
            <LogItem key={logItem.id} text={logItem.message} />
          ))}
        </ul>
        <button className="change-color-btn" onClick={changeBorderColor}>
          CHANGE BORDER COLOR
        </button>
      </div>
    </div>
  );
};

export default App;
