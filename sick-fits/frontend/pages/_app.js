import App, { Container } from 'next/app';

class Aventine extends App {

  render() {
    const { Component } = this.props;

    return (
      <Container>
        <p>(this is on every page)</p>
        <Component/>
      </Container>
    );
  }
}

export default Aventine;