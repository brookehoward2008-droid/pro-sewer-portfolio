const fs=require('fs'),assert=require('assert'),path=require('path');
const html=fs.readFileSync('index.html','utf8'),js=fs.readFileSync('script.js','utf8');
assert.equal((html.match(/class="review-card"/g)||[]).length,8);
assert.equal((html.match(/class="view-button/g)||[]).length,16);
assert(!/textarea|data-choice|mailto:|href="(?:invoice|pricing|sales-client)\.html/.test(html));
assert(!/localStorage|mailto:|invoice\.html|pricing\.html/.test(js));
for(const m of html.matchAll(/(?:src|data-src)="(assets\/[^"?]+)(?:\?[^" ]*)?"/g)) assert(fs.existsSync(m[1]),'Missing asset: '+m[1]);
for(const f of ['invoice.html','pricing.html','sales-client.html','.github','.env']) assert(!fs.existsSync(f),'Excluded file present: '+f);
console.log('PASS: 8 concepts, 16 side controls, asset references; excluded private document routes absent; no review/payment workflows.');
