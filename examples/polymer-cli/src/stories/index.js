import { storiesOf } from '@storybook/polymer';
import { action } from '@storybook/addon-actions';
import { withNotes } from '@storybook/addon-notes';
import { withKnobs, text } from '@storybook/addon-knobs/polymer';
import { document } from 'global';
import '../playground-button.html';
import './storybook-welcome-to-polymer.html';

const stories = storiesOf('Welcome', module);
stories.addDecorator(withKnobs);

stories.add('Welcome', () => '<storybook-welcome-to-polymer></storybook-welcome-to-polymer>');

stories
  .add('default mode', () => '<playground-button></playground-button>')
  .add('with actions', () => {
    const el = document.createElement('playground-button');
    el.addEventListener('click', action('Button clicked'));
    return el;
  })
  .add('with knobs', () => {
    const el = document.createElement('playground-button');
    el.setAttribute('title', text('title', 'Hello'));
    return el;
  })
  .add(
    'with notes',
    withNotes('We have the <strong>best</strong> playground buttons, ever.')(
      () => '<playground-button></playground-button>'
    )
  );