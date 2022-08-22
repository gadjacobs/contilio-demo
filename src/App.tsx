import * as React from 'react';
import Login from './components/Login/Login';
import Dashboard from './Dashboard/Dashboard';

export interface IAppProps {}

export interface IAppState {
  isLoggedIn: boolean;
}

export default class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  public render() {
    const handleLogin = () => {
      this.setState({
        isLoggedIn: true,
      });
    };

    return (
      <>
        {this.state.isLoggedIn ? (
          <Dashboard />
        ) : (
          <Login handleLogin={handleLogin} />
        )}
      </>
    );
  }
}
