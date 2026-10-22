const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const src = path.resolve(__dirname, '../../..');

test('Aura cards belong only to November 20 and reference valid PNGs in every language', () => {
  for (const language of ['pt', 'en', 'es']) {
    const data = JSON.parse(fs.readFileSync(path.join(src, `assets/data/iwppo-2026/${language}.json`), 'utf8'));
    const activities = data.schedule.flatMap(day => day.activities.map(activity => ({ ...activity, date: day.date })));
    const experiences = activities.filter(activity => activity.experiences);
    assert.equal(experiences.length, 1);
    assert.equal(experiences[0].date, '2026-11-20');
    assert.ok(experiences[0].experiences.title);
    assert.ok(experiences[0].experiences.contactLabel);
    const contact = new URL(experiences[0].experiences.contactUrl);
    assert.equal(contact.origin, 'https://api.whatsapp.com');
    assert.equal(contact.searchParams.get('phone'), '555191911504');
    assert.equal(contact.searchParams.get('text'), 'Olá, vim do site e gostaria de mais informações sobre o Tour Aromático.');
    assert.equal(experiences[0].experiences.cards.length, 3);
    for (const card of experiences[0].experiences.cards) {
      assert.ok(card.alt);
      assert.match(card.src, /^assets\/images\/iwppo-2026\/aura\/[123]\.png$/);
      const bytes = fs.readFileSync(path.join(src, card.src));
      assert.equal(bytes.subarray(0, 8).toString('hex'), '89504e470d0a1a0a');
    }
  }
});
