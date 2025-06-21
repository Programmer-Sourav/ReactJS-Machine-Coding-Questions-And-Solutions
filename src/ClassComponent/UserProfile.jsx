import React from 'react';

class UserProfile extends React.Component {
  // 1. Constructor: initialize state and bind methods
  constructor(props) {
    super(props);
    this.state = {
      name: 'Sourav Nath',
      age: 36,
      profession: 'Software Engineer',
      bio: '',
    };
    console.log('Constructor: Initialization');
  }

  // 2. componentDidMount: Called after component is mounted
  componentDidMount() {
    console.log('componentDidMount: Component mounted');
    // Simulate fetching data or setting up subscriptions
    this.setState({ bio: 'Hello, I love coding!' });
  }

  // 3. shouldComponentUpdate: Optimization (optional)
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate: Should update?');
    return true; // returning false will skip render
  }

  // 4. componentDidUpdate: After render update
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate: Component updated');
    // Use for network requests based on changed props/state
  }

  // 5. componentWillUnmount: Cleanup
  componentWillUnmount() {
    console.log('componentWillUnmount: Cleanup before destroy');
    // Cleanup timers, listeners, etc.
  }

  // 6. Custom handler method
  updateBio = () => {
    this.setState({ bio: 'Awesome Guy!' });
  };

  // 7. render: Outputs UI
  render() {
    console.log('Render method');
    const { name, age, profession, bio } = this.state;

    return (
      <div>
        <h1>Class Component Demo</h1>
        <h2>Name: {name}</h2>
        <h2>Age: {age}</h2>
        <h2>Profession: {profession}</h2>
        <h2>Bio: {bio}</h2>
        <button onClick={this.updateBio}>Update Bio</button>
      </div>
    );
  }
}

export default UserProfile;
