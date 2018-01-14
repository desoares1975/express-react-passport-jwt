import React from 'react';
import { Redirect } from 'react-router';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {'redirect': false};
  }

  componentDidMount() {
    if (1 === 1) {
      this.state.redirect = true;
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to='/login' />
    }

    return (
      <div>
        Teste Teste Retest??!?!?!?
      </div>
    );
  }
};

export default Home;