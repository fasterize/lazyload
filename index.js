var fs    = require('fs'),
    path  = require('path'),
    merge = require('merge');

var scriptsDir     = path.join(__dirname, 'build'),
    defaultOptions = { offset: 200, src: 'data-frz-src' };

function customizeScript (script, options) {
  var opts = merge({}, defaultOptions, options);
  return script + ';window["lzld"] = lazyload(' + JSON.stringify(opts) + ');';
}

var script = fs.readFileSync(path.join(scriptsDir, 'lazyload.min.js'), 'utf8');
module.exports.script = function (options) {
  return customizeScript(script, options);
};

var scriptDebug = fs.readFileSync(path.join(scriptsDir, 'lazyload.js'), 'utf8');
module.exports.scriptDebug = function (options) {
  return customizeScript(scriptDebug, options);
};
