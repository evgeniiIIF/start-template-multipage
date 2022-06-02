const path = require("path");

res = {};
res.entry = {
	index: path.join(__dirname, "../src/pages/index/index.js"),
};

res.pages = [{ chunks: ["index"], page: "index.html", template: path.join(__dirname, "../src/pages/index/index.pug") }];

module.exports = res;
