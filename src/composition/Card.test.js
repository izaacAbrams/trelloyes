import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import renderer from 'react-test-renderer';

it('renders App UI as expected', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Card />, div);
  ReactDOM.unmountComponentAtNode(div);
})

it('renders UI as expected', () => {
    const tree = renderer
    .create(<Card />)
        .toJSON;
        expect(tree).toMatchSnapshot();
})