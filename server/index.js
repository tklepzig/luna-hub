(()=>{"use strict";var e={557:function(e,t,n){var r,o=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),c=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&o(t,e,n);return i(t,e),t},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=n(17),u=s(n(685)),l=c(n(860)),d=s(n(582)),f=null!==(r=process.env.PORT)&&void 0!==r?r:8080,p=(0,l.default)();p.use((0,d.default)()),p.use((0,l.json)()),p.use((0,l.urlencoded)({extended:!1}));var v=u.default.createServer(p),_=[];p.post("/key",(function(e,t){var n=e.body,r=n.id,o=n.key,i=n.modifiers;console.dir("press key: ".concat(r,", ").concat(o,", ").concat(i)),_.forEach((function(e){e.response.write("event: keyboard-pressKey\ndata: ".concat(JSON.stringify({id:r,key:o,modifiers:i}),"\n\n"))})),t.sendStatus(200)})),p.get("/blubb",(function(e,t){t.writeHead(200,{"Content-Type":"text/event-stream",Connection:"keep-alive","Cache-Control":"no-cache","X-Accel-Buffering":"no"}),t.write("retry: 10000\n\n");var n=Date.now();t.write("event: welcome\ndata: ".concat(JSON.stringify({clientId:n}),"\n\n")),console.dir("New client connected: ".concat(n)),_.push({id:n,response:t}),e.on("close",(function(){console.log("".concat(n," Connection closed"))}))})),p.use(l.default.static((0,a.resolve)(__dirname,"..","public"))),p.get("/*",(function(e,t){t.sendFile((0,a.resolve)(__dirname,"..","public","index.html"))})),v.listen(f,(function(){console.log("listening on *:".concat(f))}))},582:e=>{e.exports=require("cors")},860:e=>{e.exports=require("express")},685:e=>{e.exports=require("http")},17:e=>{e.exports=require("path")}},t={};(function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports})(557)})();