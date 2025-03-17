import React, { useContext, useState, useEffect } from 'react';

const StoreContext = React.createContext(null);

export function connect(mapStateToProps, mapDispatchToProps) {
  return function(WrappedComponent) {
    return function ConnectedComponent(props) {
      const { store } = useContext(StoreContext);
      const [stateProps, setStateProps] = useState(() => mapStateToProps(store.getState(), props));
      const [dispatchProps, setDispatchProps] = useState(() => mapDispatchToProps(store.dispatch, props));

      useEffect(() => {
        store.subscribe(() => {
          setStateProps(mapStateToProps(store.getState(), props));
        });
      }, [props, store]);

      return <WrappedComponent {...props} {...stateProps} {...dispatchProps} />;
    };
  };
}

export const Provider = StoreContext.Provider;

