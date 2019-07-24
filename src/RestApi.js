import React from 'react';

class RestApi extends React.Component {
  state = {
    data: {},
    loading: false
  };
  //https://jsonplaceholder.typicode.com/todos/1
  componentWillMount() {
    this.setState({ loading: true });
    fetch('https://jsonplacolder.typicode.com/todos/1')
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ data: data, loading: false });
      })
      .catch(err => {
        this.setState({ loading: false });
        console.log(err);
      })
      .finally(data => console.log('Finally called'));
  }
  render() {
    const { data, loading } = this.state;
    console.log('State ', this.state);
    return (
      <div>
        {!this.state.loading && (
          <div>
            <p>User Id: {data.userId}</p>
            <p>Id: {data.id}</p>
            <p>Title: {data.title}</p>
            <p>Completed: {data.completed}</p>
          </div>
        )}
      </div>
    );
  }
}

export default RestApi;
