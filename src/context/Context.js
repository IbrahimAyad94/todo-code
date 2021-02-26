import React from 'react';

const appContext = React.createContext({
    done: 0,
    inProgress: 0,
    updateDone: done => {},
    updateInProgress: inProgress => {}
});


export default appContext;