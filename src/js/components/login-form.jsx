import React from 'react';

class LoginForm extends React.Component {

  render() {
    return (
      <div className="container">
        <div>
          <form>
            <input type="text" name="username" />
            <input type="password" name="password" />
          </form>
        </div>
      </div>
    );
  }  
}

export default LoginForm;