"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ApiErrorHandler(err, req, res, next) {
    console.error("API error handler triggered", err);
    res.status(500).json({ errorCode: 'ERR-001', message: "Internal server error" });
}
exports.ApiErrorHandler = ApiErrorHandler;
//# sourceMappingURL=errorHandler.js.map