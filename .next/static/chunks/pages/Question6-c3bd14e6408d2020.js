(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[788],{3981:function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Question6",function(){return __webpack_require__(5250)}])},2671:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{s:function(){return StateContext}}),__webpack_require__(5893);var react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(7294);let StateContext=(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)()},5250:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5893),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(7294),_Context_Context__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2671),react_router_dom__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(480);let QuestionSix=()=>{let{questions,setQuestions}=(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Context_Context__WEBPACK_IMPORTED_MODULE_2__.s),[options,setOptions]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([{id:1,value:"1",selected:!1},{id:2,value:"2",selected:!1},{id:3,value:"3",selected:!1},{id:4,value:"4",selected:!1},{id:5,value:"5",selected:!1},{id:6,value:"6",selected:!1},{id:7,value:"7",selected:!1},{id:8,value:"8",selected:!1},{id:9,value:"More than 8",selected:!1}]),clickHandler=(e,obj)=>{setQuestions({...questions,waterGlasses:e});let newOptions=options.map(f=>({...f,selected:!1}));setOptions(newOptions=newOptions.map(f=>f.value===e?{...f,selected:!0}:f))};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"flex",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"h-[100vh] w-[70vw] flex justify-center items-center",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"h-[70vh] w-[50vw]",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{className:"text-[#7BC4AB] font-[700] text-[15px]",children:"WATER GLASSES"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{className:"font-[500] text-[30px]",children:"How many glasses of water do you consume everyday?"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{className:"font-[500] opacity-[0.5] text-[12px]",children:"Choose that apply"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"flex mt-[2rem] flex-col gap-[0.5rem]",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"flex shrink-0 flex-wrap gap-[1rem]",children:options.map(e=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{onClick:()=>clickHandler(e.value,e),className:"w-[20rem] ".concat(e.selected?"bg-[#7BC4AB] text-[#fff]":"text-[#000] hover:bg-[#7BC4AB] hover:text-[#fff]"," text-[12px] opacity-[0.9] h-[3rem]  border rounded transition border-[#7BC4AB]"),children:e.value},e.id))})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"flex w-[50vw] justify-center mt-[2rem]",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.rU,{to:"/7",className:"w-[20rem] flex items-center justify-center hover:bg-[#6fb09a] transition text-[20px] font-[500] opacity-[0.9] h-[3rem] bg-[#7BC4AB] text-[#fff] transition border rounded border-[#7BC4AB]",children:"NEXT"})})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"h-[100vh] bg-[#EFF9F4] w-[30vw]"})]})};__webpack_exports__.default=QuestionSix}},function(__webpack_require__){__webpack_require__.O(0,[774,480,888,179],function(){return __webpack_require__(__webpack_require__.s=3981)}),_N_E=__webpack_require__.O()}]);