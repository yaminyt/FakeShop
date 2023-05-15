import { configureStore }   from "@reduxjs/toolkit";
import  allreducers  from "./reducers/index";



const store = configureStore ({reducer:allreducers},{},
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
    );

export default store;