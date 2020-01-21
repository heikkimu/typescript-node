"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = require("./api/index");
const errorHandler_1 = require("./api/errorHandler");
const app = express_1.default();
index_1.initApi(app);
app.use(errorHandler_1.ApiErrorHandler);
app.listen(8090, () => {
    console.log('Server is running');
});
//# sourceMappingURL=server.js.map