import React, { useEffect } from 'react';
import classes from './style.module.css';
import PathsList from './PathsList/PathsList';
import { useAppState } from '../../state';
import { restoreSchema } from '../../utils/import';

export const AppContext = React.createContext<ReturnType<
  typeof useAppState
> | null>(null);

function render() {
  const appState = useAppState();

  useEffect(() => appState.setSchema(restoreSchema()), []);

  return (
    <section className={classes.app}>
      <AppContext.Provider value={appState}>
        <div className={classes.sidebar}>
          <PathsList />
        </div>
        <div className={classes.main_container}>
          <section>{appState?.selectedPath}</section>
        </div>
      </AppContext.Provider>
    </section>
  );
}

export default render;
