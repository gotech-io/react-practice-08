import useRenderCount from './useRenderCount';

function LogItem({ text }) {
  const renderCount = useRenderCount();
  return (
    <li>
      <span>{text}</span>{' '}
      <span style={{ color: 'grey', fontSize: 12 }}>
        [Log Item Rendered {renderCount} times]
      </span>
    </li>
  );
}

export default LogItem;
