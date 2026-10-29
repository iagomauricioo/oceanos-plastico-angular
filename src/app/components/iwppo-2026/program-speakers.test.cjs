const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

for (const language of ['pt', 'en', 'es']) {
  test(`withdrawn speakers are absent from the program in ${language}`, () => {
    const data = JSON.parse(fs.readFileSync(path.resolve(__dirname,
      `../../../assets/data/iwppo-2026/${language}.json`), 'utf8'));
    const program = JSON.stringify({ speakers: data.speakers, schedule: data.schedule });
    for (const name of ['Feni Dalano', 'Alexandre Urban', 'Carlos Alberto Cioce Sampaio',
      'Marcos Paulo', 'Robson Guimarães']) {
      assert.ok(!program.includes(name), `${name} must be absent`);
    }
    assert.ok(data.speakers.length > 0);
    assert.equal(data.schedule.length, 4);
  });
}
