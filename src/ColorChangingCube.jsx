import { useState } from 'react';
import getRandomColor from './getRandomColor';
import useRenderCount from './useRenderCount';
import './ColorChangingCube.css';

function ColorChangingCube({ id, onColorChanged, object }) {
  const [color, setColor] = useState(getRandomColor());
  const renderCount = useRenderCount();

  const changeColor = () => {
    setColor(getRandomColor());
    onColorChanged?.(id);
  };

  return (
    <div className="cube" style={{ backgroundColor: color }}>
      <div className="id-display">Id: {id}</div>
      <div>Rendered {renderCount} Times</div>
      <button className="change-color-btn" onClick={changeColor}>
        CHANGE COLOR
      </button>
    </div>
  );
}

export default ColorChangingCube;
