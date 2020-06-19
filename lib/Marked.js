"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const marked_1 = __importDefault(require("marked"));
const Marked = ({ options, overrides, content }) => {
    const [html, setHtml] = react_1.useState();
    react_1.useEffect(() => {
        const printError = (error) => {
            if (error instanceof Error) {
                setHtml(`<p>${error.name}: ${error.message}</p><p>${error.stack}</p>`);
            }
            else {
                setHtml(`<p>${error}</p>`);
            }
        };
        try {
            if (overrides) {
                marked_1.default.use(overrides);
            }
            marked_1.default(content, options, (error, parsedResult) => {
                if (error) {
                    printError(error);
                }
                else {
                    setHtml(parsedResult);
                }
            });
        }
        catch (e) {
            printError(e);
        }
    }, [options, overrides, content, setHtml]);
    return react_1.default.createElement("div", { dangerouslySetInnerHTML: { __html: html } });
};
exports.default = Marked;
//# sourceMappingURL=Marked.js.map