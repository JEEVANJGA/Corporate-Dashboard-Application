import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('paying-customers', 'Integration | Component | paying customers', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{paying-customers}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#paying-customers}}
      template block text
    {{/paying-customers}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
