let pageMod = require('sdk/page-mod');
let self = require('sdk/self');

pageMod.PageMod({
  include: 'http://dl.acm.org/citation.cfm?id=*',
  contentScriptFile: [
    self.data.url('util.js'),
    self.data.url('acm.js')
  ]
});
