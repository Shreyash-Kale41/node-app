const http = require('http');

const httpServer = http.createServer( (request, response)=>{
    const url = request.url;
    console.log(`Received url: ${url}`);
    switch (url) {
        case '/':
            response.end(`Home content`);
            break;
        
        case '/home':
            response.end('Home content');
            break;

        case '/about':
            response.end('About content');
            break;

        case '/projects':
            response.end('Project content');
            break;

        case '/skills':
            response.end('Skill content');
            break;

        default:
            console.log('Invalid URL');
            break;
    }
    

    // response.end(`Request URL - ${url}`);
    //response.end("Hello, from server....");
} );

httpServer.listen(8080, ()=>{
    console.log(`Server started on port 8080`); 
});