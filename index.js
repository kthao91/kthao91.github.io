import React from 'react';
import AnimatedText from './AnimatedText';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<p>Hello</p>);

const App = () => {
  return (
    <div>
      <AnimatedText text="Hello, World!" />
    </div>
  );
};

export default App;