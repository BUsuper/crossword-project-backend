export function sendResponse(res, status, contentType, payload) {
  res.statusCode = status;
  res.setHeader("Content-Type", contentType);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Method", "GET");
  res.end(payload);
}
