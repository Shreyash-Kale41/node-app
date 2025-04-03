const { log } = require('console');
const { hostname } = require('os');

const url = require('url');

const urlString = "https://us02web.zoom.us/j/8748449745?pwd=IQelRYADLrADpEUMwoI4JdwalXEyID.1&omn=82184057048";

const urlObject = url.parse(urlString, true);
console.table(urlObject);
console.log(`Protocol: ${urlObject.protocol}`);
console.log(`Host name: ${urlObject.hostname}`);
console.log(`Path: ${urlObject.pathname}`);
console.log(`Query parameter: pwd=${urlObject.query.pwd} &omn=${urlObject.query.omn}`);


console.log("----------- using url.farmat() -----------");
const formatUrl = url.format({
    protocol : "http:",
    hostname : "www.netflix.com",
    pathname : "/path",
    query : {
        queryKey1: "value1",
        queryKey2: "value2"
    }
});

console.log(`URL : ${formatUrl}`);
