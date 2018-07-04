import { test } from 'qunit';
import moduleForAcceptance from 'ember-fresh/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | login | Module');

test('visiting /login | Module', function(assert) {
  visit('/login');

  andThen(function() {
    assert.equal(currentURL(), '/login');
  });
});
