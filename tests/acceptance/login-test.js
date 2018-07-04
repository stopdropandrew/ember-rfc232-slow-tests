import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | login | RFC232', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /login | RFC232', async function(assert) {
    await visit('/login');

    assert.equal(currentURL(), '/login');
  });
});
