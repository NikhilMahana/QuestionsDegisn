"use strict";
(() => {
var exports = {};
exports.id = 70;
exports.ids = [70];
exports.modules = {

/***/ 671:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ StateContext)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const StateContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const ContextProvider = ({ children  })=>{
    const [questions, setQuestions] = useState({
        age: "",
        gender: "",
        skin: "",
        skinBother: "",
        skinRoutine: "",
        skinTrend: "",
        waterGlasses: "",
        sleepHours: "",
        stressLevel: "",
        diet: "",
        screenTime: "",
        skinProduct: "",
        makeup: "",
        makeupRemove: "",
        climate: ""
    });
    return /*#__PURE__*/ _jsx(StateContext.Provider, {
        value: {
            questions,
            setQuestions
        },
        children: children
    });
};

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (ContextProvider)));


/***/ }),

/***/ 499:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Context_Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(671);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(661);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);




const QuestionTen = ()=>{
    const { questions , setQuestions  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Context_Context__WEBPACK_IMPORTED_MODULE_2__/* .StateContext */ .s);
    const [options, setOptions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([
        {
            id: 1,
            value: "Shiny",
            selected: false
        },
        {
            id: 2,
            value: "Matte",
            selected: false
        },
        {
            id: 3,
            value: "Dull",
            selected: false
        }
    ]);
    const clickHandler = (e, obj)=>{
        setQuestions({
            ...questions,
            skinTrend: e
        });
        let newOptions = options.map((f)=>{
            return {
                ...f,
                selected: false
            };
        });
        newOptions = newOptions.map((f)=>{
            if (f.value === e) {
                return {
                    ...f,
                    selected: true
                };
            } else {
                return f;
            }
        });
        setOptions(newOptions);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "h-[100vh] w-[70vw] flex justify-center items-center",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "h-[50vh] w-[50vw]",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "text-[#7BC4AB] font-[700] text-[15px]",
                                    children: "YOUR SCREEN TIME"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "font-[500] text-[30px]",
                                    children: "How often are you in front of a screen?"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "font-[500] opacity-[0.5] text-[12px]",
                                    children: "Choose that apply"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex mt-[2rem] flex-col gap-[0.5rem]",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex shrink-0 flex-wrap gap-[1rem]",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    value: questions.screenTime,
                                    onChange: (e)=>setQuestions({
                                            ...questions,
                                            screenTime: e.target.value
                                        }),
                                    placeholder: "Your Screen Time",
                                    className: "w-[20rem] px-[1rem] focus:outline-none transition text-[20px] font-[500] opacity-[0.9] h-[3rem] transition border rounded border-[#7BC4AB]"
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex w-[50vw] justify-start mt-[2rem]",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
                                to: "/11",
                                className: `w-[20rem] flex items-center justify-center ${questions.screenTime === "" ? "cursor-not-allowed" : ""} hover:bg-[#6fb09a] transition text-[20px] font-[500] opacity-[0.9] h-[3rem] bg-[#7BC4AB] text-[#fff] transition border rounded border-[#7BC4AB]`,
                                children: "NEXT"
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "h-[100vh] bg-[#EFF9F4] w-[30vw]"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QuestionTen);


/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 661:
/***/ ((module) => {

module.exports = require("react-router-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(499));
module.exports = __webpack_exports__;

})();