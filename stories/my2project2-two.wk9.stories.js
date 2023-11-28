import { html } from 'lit';
import '../src/my2project2-two.wk9.js';

export default {
  title: 'My2project2Two.wk9',
  component: 'my2project2-two.wk9',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ header, backgroundColor }) {
  return html`
    <my2project2-two.wk9
      style="--my2project2-two.wk9-background-color: ${backgroundColor || 'white'}"
      .header=${header}
    >
    </my2project2-two.wk9>
  `;
}

export const App = Template.bind({});
App.args = {
  header: 'My app',
};
