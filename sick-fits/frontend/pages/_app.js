import App, { Container } from 'next/app';
import Master from '../components/layouts/Master';

class MyApp extends App {
  render() {
    const { Component } = this.props;
    console.log(Component);

    return (
      <container>
        <Master>
          <Component />
        </Master>
      </container>
    );
  }
}

export default MyApp;
