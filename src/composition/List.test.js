import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<List key={1}
          header='First List'
          cards={[ 'a', 'b', 'e', 'f', 'g', 'j', 'l', 'm' ]}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders UI as expected', () => {
    const tree = renderer
    .create(<List key={1}
        header='First List'
        cards={[ 'a', 'b', 'e', 'f', 'g', 'j', 'l', 'm' ]}/>)
        .toJSON;
        expect(tree).toMatchSnapshot();
})