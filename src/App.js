import React from 'react';

/* class Switch extends React.Component {
  constructor(props) {
    super(props);
    // maintain its own state
    this.state = {
      checked: false
    };
  }
  // expose state data for parent component to access
  get value() {
    return this.state.checked;
  }
  toggle = () => {
    this.setState((prevState) => {
       return {
         checked: !prevState.checked
       }
    })
  }
  render() {
    // check status is maintained in own state
    const { checked } = this.state;
    let classNames = ['switch'];
    if (checked) {
      classNames = [...classNames, 'checked']
    }
    return (
      <div>
        <button
          className={classNames.join(' ')}
          onClick={this.toggle}/>
      </div>
    );
  }
} */
class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      data : []
    }
  }

  getResponseValue = () => {
    debugger
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(tasksResponse => tasksResponse.json())
    .then(tasksData => {
      this.setState({
        tasks: tasksData
      })
    })
    .catch(error => {
      console.log(error);
    })
  }
  render() {
    return <React.Fragment>
    {this.state.tasks ?   <div>{this.state.tasks['userId']}</div> : null}
      <button
        onClick={this.getResponseValue}
        style={{ marginTop: 20 }}
      >
        Switch Status
      </button>
    </React.Fragment>
  }
}

export default App;