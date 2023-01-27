const algoliasearch = require("algoliasearch");

const client = algoliasearch(process.env.APPLICATION_ID, process.env.API_KEY);

const index = client.initIndex("hub");
index.clearObjects();
console.log("Deleted records of index hub");
