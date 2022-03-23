import React from 'react';
import { Button } from 'antd';
import './App.css'

import RoutesContainer from './Router/Router';

const App: React.FC = () => {
  return (
    <div className="App">
      <RoutesContainer />
      {/* <Button type="primary">Button</Button> */}
    </div>
  );
}

export default App;
