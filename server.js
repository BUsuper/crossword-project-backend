import http from "http";
import { sendResponse } from "./utils/sendResponse.js";

const port = 8001;

const server = http.createServer((req, res) => {
  const urlObject = new URL(req.url, `http://${req.headers.host}`);

  if (urlObject.pathname === "/api") {
    sendResponse(
      res,
      200,
      "text/plain",
      "Hello there, you're using the API correctly"
    );
  } else {
    sendResponse(
      res,
      404,
      "text/plain",
      "Error you're not using the API correctly"
    );
  }
});

server.listen(port);
