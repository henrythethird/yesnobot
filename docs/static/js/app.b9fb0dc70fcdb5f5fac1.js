webpackJsonp([1],{"07PK":function(t,e,n){"use strict";(function(t){var o=n("L6bb"),s=n.n(o),i=[["Yes","Sure","Yeah","Mhm","You know it, girl!","Yap","Definitely"],["Could be","Maybe","Not sure","Mmmmh. I'm going to have to think about it","Perhaps"],["No","Nope","Nah","Certainly not","Oh hell no","That's not true","Don't think so"]];e.a={name:"HelloWorld",data:function(){return{input:"",history:[]}},mounted:function(){var t=this;this.addBotResponse("Hey there ;-)"),setTimeout(function(){t.addBotResponse("Ask me any yes/no question and I will answer it to the best of my knowledge")},500)},methods:{pickRandom:function(t){return t[Math.floor(Math.random()*t.length)]},random:function(t){return this.pickRandom(i[t])},enter:function(){var e=this;if(this.input){var n=t.from(s()(this.input),"hex"),o=n[n.length-1]%3;this.addPersonalResponse(this.input),setTimeout(function(){e.addBotResponse(e.random(o))},500),this.input=""}},addBotResponse:function(t){this._addResponse(!1,t)},addPersonalResponse:function(t){this._addResponse(!0,t)},_addResponse:function(t,e){var n=this;this.history.push({me:t,text:e}),setTimeout(function(){var t=n.$refs.chat;t.scrollTop=t.scrollHeight},10)}}}}).call(e,n("EuP9").Buffer)},AUVq:function(t,e){},CsbM:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("7+uW"),s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var i=n("VU/8")({name:"App"},s,!1,function(t){n("CsbM")},null,null).exports,a=n("/ocq"),r=n("07PK"),u={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"chat"},[t._m(0),t._v(" "),n("div",{ref:"chat",staticClass:"history"},t._l(t.history,function(e){return n("div",{staticClass:"bubble",class:{me:e.me}},[t._v(t._s(e.text))])})),t._v(" "),n("footer",{staticClass:"footer"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.input,expression:"input"}],staticClass:"input",attrs:{placeholder:"Type a question..."},domProps:{value:t.input},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.enter(e):null},input:function(e){e.target.composing||(t.input=e.target.value)}}}),t._v(" "),n("button",{staticClass:"send",on:{click:t.enter}})])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"header"},[e("div",{staticClass:"title"},[this._v("\n      Yes-No Bot\n    ")])])}]};var l=function(t){n("AUVq")},c=n("VU/8")(r.a,u,!1,l,"data-v-6d2905a0",null).exports;o.a.use(a.a);var d=new a.a({routes:[{path:"/",name:"HelloWorld",component:c}]});o.a.config.productionTip=!1,new o.a({el:"#app",router:d,components:{App:i},template:"<App/>"})}},["NHnr"]);
//# sourceMappingURL=app.b9fb0dc70fcdb5f5fac1.js.map