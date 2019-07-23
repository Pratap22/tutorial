import React from 'react';

class ShowImage extends React.Component {
  render() {
    console.log('I am render');
    const { value, buttonClicked } = this.props;
    return (
      <div>
        <p>{value}</p>
        <button onClick={buttonClicked}>Click me</button>
      </div>
    );
  }
}
export default ShowImage;
