import React, {createContext} from 'react';

const APP_DATA = {
  theme: "dark",  // dark or light
  language: "english"
}

const GlobalContext = createContext(APP_DATA);

export default GlobalContext;