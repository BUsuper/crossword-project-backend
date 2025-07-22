import http from "http";
import { sendResponse } from "./utils/sendResponse.js";
import crosswords from "./crosswords.ts";

const port = 8001;

const server = http.createServer((req, res) => {
  const urlObject = new URL(req.url, `http://${req.headers.host}`);
  const crosswordsKeys = Object.keys(crosswords);

  if (urlObject.pathname === "/api") {
    const searchParams = Object.fromEntries(urlObject.searchParams);
    const isSearchParamsCorrectLength = Object.keys(searchParams).length === 1;
    if (isSearchParamsCorrectLength) {
      const { date } = searchParams;
      if (!date) {
        sendResponse(
          res,
          200,
          "text/plain",
          "Use queries in the form of /api?date=1.1.2025 or /api/keys"
        );
      }

      if (crosswordsKeys.includes(date)) {
        sendResponse(
          res,
          200,
          "application/json",
          JSON.stringify(crosswords[date])
        );
      } else {
        sendResponse(
          res,
          404,
          "text/plain",
          `Crossword with date ${date} not found`
        );
      }
    } else {
      sendResponse(
        res,
        200,
        "text/plain",
        "Use queries in the form of /api?date=1.1.2025"
      );
    }
  } else if (urlObject.pathname === "/api/keys") {
    sendResponse(res, 200, "application/json", JSON.stringify(crosswordsKeys));
  } else {
    sendResponse(
      res,
      200,
      "text/plain",
      "Use queries in the form of /api?date=1.1.2025 or /api/keys"
    );
  }
});

server.listen(port);
