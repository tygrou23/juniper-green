import React, { createContext, useReducer } from 'react';

const SchoolContext = createContext();

export { SchoolContext, SchoolProvider, average, findStudent };