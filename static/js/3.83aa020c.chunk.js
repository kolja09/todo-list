(this["webpackJsonpreact-todo"]=this["webpackJsonpreact-todo"]||[]).push([[3],{17:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}r.r(t);var u=r(3),i=r(1),a=r(0);t.default=function(e){var t=e.onCreate,r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=Object(i.useState)(e),r=Object(u.a)(t,2),n=r[0],o=r[1];return{bind:{value:n,onChange:function(e){return o(e.target.value)}},clear:function(){return o("")},value:function(){return n}}}("");return Object(a.jsxs)("form",{style:{marginBottom:"1rem"},onSubmit:function(e){e.preventDefault(),r.value().trim()&&(t(r.value()),r.clear())},children:[Object(a.jsx)("input",c({},r.bind)),Object(a.jsx)("button",{type:"submit",children:"Add todo"})]})}}}]);
//# sourceMappingURL=3.83aa020c.chunk.js.map