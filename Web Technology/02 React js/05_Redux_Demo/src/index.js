import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import Store from './Store';
import { Add } from './Add';
import { Input } from './input';
import { Sub } from './Sub'

const root = ReactDOM.createRoot(document.getElementById('root'));
 
root.render(
 <>
   <Provider store={Store}>
      <Add/>
      <Input/>
      <Sub/>
   </Provider>
 </>
);