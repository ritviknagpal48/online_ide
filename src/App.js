// import React, { Fragment, useState } from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import Navbar from './components/Navbar';
// import Textbox from './components/Textbox';
// import axios from 'axios';

// const App = () => {
//   return (
//     <Router>
//       <div className='App #00695c teal darken-3'>
//         <Navbar />

//         <div className='container'>
//           <Switch>
//             <Route exact path='/' />
//           </Switch>
//         </div>
//         <Textbox lang='c++' />
//       </div>
//     </Router>
//   );
// };

// export default App;
import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Navbar from './components/Navbar';
import Textbox from './components/Textbox';
import axios from 'axios';

const App = () => {
  return (
    <Router>
      <div className='#424242 grey darken-3'>
        <Navbar />

        <div className='container'>
          <Switch>
            <Route exact path='/'>
              <Textbox lang='c++' lang_id='12' />
            </Route>
            <Route exact path='/c++'>
              <Textbox lang='c++' lang_id='12' />
            </Route>
            <Route exact path='/python'>
              <Textbox lang='python' lang_id='34' />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
