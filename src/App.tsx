import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import KbnBoardView from './components/templates/KbnBoardView';
import KbnLoginView from './components/templates/KbnLoginView';
import KbnTaskDetailModal from './components/templates/KbnTaskDetailModal';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Route exact path='/' component={KbnBoardView} />
        <Route path='/login' component={KbnLoginView} />
        <Route path='/tasks/:id' component={KbnTaskDetailModal} />
      </Router>
    </React.Fragment>
  );
}

export default App;
