var fs = require('fs');

const copyFile = (src, dist) => {
  fs.writeFileSync(dist, fs.readFileSync(src));
};

copyFile(
  './blacklist.js',
  './node_modules/metro-config/src/defaults/blacklist.js',
);
