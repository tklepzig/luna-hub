(()=>{"use strict";var e={557:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t},c=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var s=n(17),a=c(n(685)),u=i(n(860)),l=c(n(582)),d=(0,u.default)();d.use((0,l.default)()),d.use((0,u.json)()),d.use((0,u.urlencoded)({extended:!1}));var f=a.default.createServer(d),p=[];d.post("/key",(function(e,t){var n=e.body,r=n.id,o=n.key,i=n.modifiers;console.dir("press key: ".concat(r,", ").concat(o,", ").concat(i)),p.forEach((function(e){e.response.write("event: keyboard-pressKey\ndata: ".concat(JSON.stringify({id:r,key:o,modifiers:i}),"\n\n"))})),t.sendStatus(200)})),d.get("/blubb",(function(e,t){t.writeHead(200,{"Content-Type":"text/event-stream",Connection:"keep-alive","Cache-Control":"no-cache"}),t.write("retry: 10000\n\n");var n=Date.now();t.write("event: welcome\ndata: ".concat(JSON.stringify({clientId:n}),"\n\n")),console.dir("New client connected: ".concat(n)),p.push({id:n,response:t}),e.on("close",(function(){console.log("".concat(n," Connection closed"))}))})),d.use(u.default.static((0,s.resolve)(__dirname,"..","public"))),d.get("/*",(function(e,t){t.sendFile((0,s.resolve)(__dirname,"..","public","index.html"))})),f.listen(8080,(function(){console.log("listening on *:".concat(8080))}))},582:e=>{e.exports=require("cors")},860:e=>{e.exports=require("express")},685:e=>{e.exports=require("http")},17:e=>{e.exports=require("path")}},t={};(function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports})(557)})();