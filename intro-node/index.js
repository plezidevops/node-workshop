const http = require('http');
const port = 3000;

const ourApp = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end('home page');
  }

  if (req.url === "/about") {
    res.end("about page");
  }

  res.end("Invalid request!");
});

ourApp.listen(port, () => { `Server is running on port ${port}`; });
