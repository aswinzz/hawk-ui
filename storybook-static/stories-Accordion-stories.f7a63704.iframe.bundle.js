/*! For license information please see stories-Accordion-stories.f7a63704.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkhawk_ui=self.webpackChunkhawk_ui||[]).push([[460],{"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread2(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){var obj,key,value;obj=e,key=r,value=t[r],(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}__webpack_require__.d(__webpack_exports__,{Z:function(){return _objectSpread2}})},"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{Z:function(){return _objectWithoutProperties}})},"./src/stories/Accordion.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ClosedPrimaryDark:function(){return ClosedPrimaryDark},ClosedPrimaryLight:function(){return ClosedPrimaryLight},OpenPrimaryDark:function(){return OpenPrimaryDark},OpenPrimaryLight:function(){return OpenPrimaryLight},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return Accordion_stories}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),ThemeContext=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/context/ThemeContext.tsx"));var up_arrow_dark=__webpack_require__.p+"static/media/up-arrow-dark.4f4bdbcabcbfb1e5ca0864bfef309e98.svg";var up_arrow_light=__webpack_require__.p+"static/media/up-arrow-light.e6269f80dcf78883e0650bfacc171b9a.svg";var down_arrow_dark=__webpack_require__.p+"static/media/down-arrow-dark.80b1f4918a2d9aade381daebe09b4422.svg";var _ClosedPrimaryDark$pa,_ClosedPrimaryDark$pa2,_ClosedPrimaryDark$pa3,_ClosedPrimaryLight$p,_ClosedPrimaryLight$p2,_ClosedPrimaryLight$p3,_OpenPrimaryDark$para,_OpenPrimaryDark$para2,_OpenPrimaryDark$para3,_OpenPrimaryLight$par,_OpenPrimaryLight$par2,_OpenPrimaryLight$par3,down_arrow_light=__webpack_require__.p+"static/media/down-arrow-light.b9d6267ab1b86be72d31356d31d1f78a.svg",Accordion_module={"light-mode":"Accordion_light-mode__qHKBK","dark-mode":"Accordion_dark-mode__Ih9M2",accordion:"Accordion_accordion__vpsFI",titleContainer:"Accordion_titleContainer__mvPmb",dark:"Accordion_dark__cLJUr",light:"Accordion_light__+lgUl",content:"Accordion_content__5LU2x",hr:"Accordion_hr__t8fjA"},jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Accordion_excluded=["title","isOpen","children","onToggle","disabled","theme","customClassName"],Accordion=function Accordion(_ref){var title=_ref.title,isOpen=_ref.isOpen,children=_ref.children,onToggle=_ref.onToggle,disabled=_ref.disabled,theme=_ref.theme,customClassName=_ref.customClassName,remainingProps=(0,objectWithoutProperties.Z)(_ref,Accordion_excluded),systemTheme=(0,ThemeContext.Fg)().theme,arrowImg=down_arrow_light;return isOpen?arrowImg="dark"===theme?up_arrow_dark:up_arrow_light:"dark"===theme&&(arrowImg=down_arrow_dark),(0,jsx_runtime.jsxs)("div",(0,objectSpread2.Z)((0,objectSpread2.Z)({},remainingProps),{},{className:"".concat(Accordion_module.accordion," \n            ").concat(disabled?Accordion_module.disabled:""," \n            ").concat(Accordion_module[theme||systemTheme]," \n            ").concat(customClassName||""),onClick:onToggle,children:[(0,jsx_runtime.jsxs)("div",{className:Accordion_module.titleContainer,children:[(0,jsx_runtime.jsx)("div",{className:Accordion_module.title,children:title}),(0,jsx_runtime.jsx)("img",{className:Accordion_module.arrow,src:arrowImg,alt:"arrow"})]}),isOpen&&(0,jsx_runtime.jsxs)("div",{className:Accordion_module.content,children:[(0,jsx_runtime.jsx)("div",{className:"".concat(Accordion_module.hr," ").concat(Accordion_module[theme||systemTheme])}),(0,jsx_runtime.jsx)("div",{className:Accordion_module.children,children:children})]})]}))},Accordion_Accordion=Accordion;try{Accordion.displayName="Accordion",Accordion.__docgenInfo={description:"",displayName:"Accordion",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"ReactNode"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"dark"'},{value:'"light"'}]}},customClassName:{defaultValue:null,description:"",name:"customClassName",required:!1,type:{name:"string"}},isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},onToggle:{defaultValue:null,description:"",name:"onToggle",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Accordion/Accordion.tsx#Accordion"]={docgenInfo:Accordion.__docgenInfo,name:"Accordion",path:"src/components/Accordion/Accordion.tsx#Accordion"})}catch(__react_docgen_typescript_loader_error){}var Accordion_stories={title:"Accordion",component:Accordion_Accordion,parameters:{layout:"centered"},tags:["autodocs"]},ClosedPrimaryDark={args:{children:"Organize and reveal content effortlessly using Hawk's intuitive accordions. Streamline user experience by presenting information in collapsible sections, ensuring a clutter-free interface.",title:"Accordion Title",theme:"dark",isOpen:!1}},ClosedPrimaryLight={args:{children:"Organize and reveal content effortlessly using Hawk's intuitive accordions. Streamline user experience by presenting information in collapsible sections, ensuring a clutter-free interface.",title:"Accordion Title",theme:"light",isOpen:!1}},OpenPrimaryDark={args:{children:"Organize and reveal content effortlessly using Hawk's intuitive accordions. Streamline user experience by presenting information in collapsible sections, ensuring a clutter-free interface.",title:"Accordion Title",theme:"dark",isOpen:!0}},OpenPrimaryLight={args:{children:"Organize and reveal content effortlessly using Hawk's intuitive accordions. Streamline user experience by presenting information in collapsible sections, ensuring a clutter-free interface.",title:"Accordion Title",theme:"light",isOpen:!0}};ClosedPrimaryDark.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},ClosedPrimaryDark.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_ClosedPrimaryDark$pa=ClosedPrimaryDark.parameters)||void 0===_ClosedPrimaryDark$pa?void 0:_ClosedPrimaryDark$pa.docs),{},{source:(0,objectSpread2.Z)({originalSource:'{\n  args: {\n    children: "Organize and reveal content effortlessly using Hawk\'s intuitive accordions. Streamline user experience by presenting information in collapsible sections, ensuring a clutter-free interface.",\n    title: "Accordion Title",\n    theme: "dark",\n    isOpen: false\n  }\n}'},null===(_ClosedPrimaryDark$pa2=ClosedPrimaryDark.parameters)||void 0===_ClosedPrimaryDark$pa2||null===(_ClosedPrimaryDark$pa3=_ClosedPrimaryDark$pa2.docs)||void 0===_ClosedPrimaryDark$pa3?void 0:_ClosedPrimaryDark$pa3.source)})}),ClosedPrimaryLight.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},ClosedPrimaryLight.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_ClosedPrimaryLight$p=ClosedPrimaryLight.parameters)||void 0===_ClosedPrimaryLight$p?void 0:_ClosedPrimaryLight$p.docs),{},{source:(0,objectSpread2.Z)({originalSource:'{\n  args: {\n    children: "Organize and reveal content effortlessly using Hawk\'s intuitive accordions. Streamline user experience by presenting information in collapsible sections, ensuring a clutter-free interface.",\n    title: "Accordion Title",\n    theme: "light",\n    isOpen: false\n  }\n}'},null===(_ClosedPrimaryLight$p2=ClosedPrimaryLight.parameters)||void 0===_ClosedPrimaryLight$p2||null===(_ClosedPrimaryLight$p3=_ClosedPrimaryLight$p2.docs)||void 0===_ClosedPrimaryLight$p3?void 0:_ClosedPrimaryLight$p3.source)})}),OpenPrimaryDark.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},OpenPrimaryDark.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_OpenPrimaryDark$para=OpenPrimaryDark.parameters)||void 0===_OpenPrimaryDark$para?void 0:_OpenPrimaryDark$para.docs),{},{source:(0,objectSpread2.Z)({originalSource:'{\n  args: {\n    children: "Organize and reveal content effortlessly using Hawk\'s intuitive accordions. Streamline user experience by presenting information in collapsible sections, ensuring a clutter-free interface.",\n    title: "Accordion Title",\n    theme: "dark",\n    isOpen: true\n  }\n}'},null===(_OpenPrimaryDark$para2=OpenPrimaryDark.parameters)||void 0===_OpenPrimaryDark$para2||null===(_OpenPrimaryDark$para3=_OpenPrimaryDark$para2.docs)||void 0===_OpenPrimaryDark$para3?void 0:_OpenPrimaryDark$para3.source)})}),OpenPrimaryLight.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},OpenPrimaryLight.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_OpenPrimaryLight$par=OpenPrimaryLight.parameters)||void 0===_OpenPrimaryLight$par?void 0:_OpenPrimaryLight$par.docs),{},{source:(0,objectSpread2.Z)({originalSource:'{\n  args: {\n    children: "Organize and reveal content effortlessly using Hawk\'s intuitive accordions. Streamline user experience by presenting information in collapsible sections, ensuring a clutter-free interface.",\n    title: "Accordion Title",\n    theme: "light",\n    isOpen: true\n  }\n}'},null===(_OpenPrimaryLight$par2=OpenPrimaryLight.parameters)||void 0===_OpenPrimaryLight$par2||null===(_OpenPrimaryLight$par3=_OpenPrimaryLight$par2.docs)||void 0===_OpenPrimaryLight$par3?void 0:_OpenPrimaryLight$par3.source)})});var __namedExportsOrder=["ClosedPrimaryDark","ClosedPrimaryLight","OpenPrimaryDark","OpenPrimaryLight"]},"./src/context/ThemeContext.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Fg:function(){return useTheme}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),THEME_TYPES=(__webpack_require__("./node_modules/react/jsx-runtime.js"),function(THEME_TYPES){return THEME_TYPES.LIGHT="light",THEME_TYPES.DARK="dark",THEME_TYPES}(THEME_TYPES||{})),THEME_CLASSES_DARK_MODE="dark-mode",THEME_CLASSES_LIGHT_MODE="light-mode",ThemeContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({theme:THEME_TYPES.LIGHT,toggleTheme:function toggleTheme(){}}),ThemeProvider=function ThemeProvider(_ref){var children=_ref.children,_useState=useState((function initialTheme(){return THEME_TYPES.LIGHT})),_useState2=_slicedToArray(_useState,2),theme=_useState2[0],setTheme=_useState2[1];return useEffect((function(){theme===THEME_TYPES.LIGHT?(document.documentElement.classList.remove(THEME_CLASSES_DARK_MODE),document.documentElement.classList.add(THEME_CLASSES_LIGHT_MODE)):(document.documentElement.classList.remove(THEME_CLASSES_LIGHT_MODE),document.documentElement.classList.add(THEME_CLASSES_DARK_MODE))}),[theme]),_jsx(ThemeContext.Provider,{value:{theme:theme,toggleTheme:function toggleTheme(){return setTheme((function(theme){return theme===THEME_TYPES.LIGHT?THEME_TYPES.DARK:THEME_TYPES.LIGHT}))}},children:children})},useTheme=function useTheme(){var context=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ThemeContext);if(void 0===context)throw new Error("useTheme must be used within a ThemeProvider");return context};try{ThemeProvider.displayName="ThemeProvider",ThemeProvider.__docgenInfo={description:"",displayName:"ThemeProvider",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/context/ThemeContext.tsx#ThemeProvider"]={docgenInfo:ThemeProvider.__docgenInfo,name:"ThemeProvider",path:"src/context/ThemeContext.tsx#ThemeProvider"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);