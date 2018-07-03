webpackJsonp([35783957827783],{91:function(e,t,n){"use strict";function o(e){return e}function a(e,t,n){function a(e,t){var n=g.hasOwnProperty(t)?g[t]:null;D.hasOwnProperty(t)&&l("OVERRIDE_BASE"===n,"ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.",t),e&&l("DEFINE_MANY"===n||"DEFINE_MANY_MERGED"===n,"ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",t)}function r(e,n){if(n){l("function"!=typeof n,"ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."),l(!t(n),"ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object.");var o=e.prototype,r=o.__reactAutoBindPairs;n.hasOwnProperty(u)&&_.mixins(e,n.mixins);for(var i in n)if(n.hasOwnProperty(i)&&i!==u){var s=n[i],c=o.hasOwnProperty(i);if(a(c,i),_.hasOwnProperty(i))_[i](e,s);else{var p=g.hasOwnProperty(i),m="function"==typeof s,E=m&&!p&&!c&&n.autobind!==!1;if(E)r.push(i,s),o[i]=s;else if(c){var y=g[i];l(p&&("DEFINE_MANY_MERGED"===y||"DEFINE_MANY"===y),"ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.",y,i),"DEFINE_MANY_MERGED"===y?o[i]=f(o[i],s):"DEFINE_MANY"===y&&(o[i]=d(o[i],s))}else o[i]=s}}}else;}function c(e,t){if(t)for(var n in t){var o=t[n];if(t.hasOwnProperty(n)){var a=n in _;l(!a,'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',n);var r=n in e;if(r){var i=N.hasOwnProperty(n)?N[n]:null;return l("DEFINE_MANY_MERGED"===i,"ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",n),void(e[n]=f(e[n],o))}e[n]=o}}}function p(e,t){l(e&&t&&"object"==typeof e&&"object"==typeof t,"mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.");for(var n in t)t.hasOwnProperty(n)&&(l(void 0===e[n],"mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.",n),e[n]=t[n]);return e}function f(e,t){return function(){var n=e.apply(this,arguments),o=t.apply(this,arguments);if(null==n)return o;if(null==o)return n;var a={};return p(a,n),p(a,o),a}}function d(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function m(e,t){var n=t.bind(e);return n}function E(e){for(var t=e.__reactAutoBindPairs,n=0;n<t.length;n+=2){var o=t[n],a=t[n+1];e[o]=m(e,a)}}function y(e){var t=o(function(e,o,a){this.__reactAutoBindPairs.length&&E(this),this.props=e,this.context=o,this.refs=s,this.updater=a||n,this.state=null;var r=this.getInitialState?this.getInitialState():null;l("object"==typeof r&&!Array.isArray(r),"%s.getInitialState(): must return an object or null",t.displayName||"ReactCompositeComponent"),this.state=r});t.prototype=new M,t.prototype.constructor=t,t.prototype.__reactAutoBindPairs=[],h.forEach(r.bind(null,t)),r(t,v),r(t,e),r(t,b),t.getDefaultProps&&(t.defaultProps=t.getDefaultProps()),l(t.prototype.render,"createClass(...): Class specification must implement a `render` method.");for(var a in g)t.prototype[a]||(t.prototype[a]=null);return t}var h=[],g={mixins:"DEFINE_MANY",statics:"DEFINE_MANY",propTypes:"DEFINE_MANY",contextTypes:"DEFINE_MANY",childContextTypes:"DEFINE_MANY",getDefaultProps:"DEFINE_MANY_MERGED",getInitialState:"DEFINE_MANY_MERGED",getChildContext:"DEFINE_MANY_MERGED",render:"DEFINE_ONCE",componentWillMount:"DEFINE_MANY",componentDidMount:"DEFINE_MANY",componentWillReceiveProps:"DEFINE_MANY",shouldComponentUpdate:"DEFINE_ONCE",componentWillUpdate:"DEFINE_MANY",componentDidUpdate:"DEFINE_MANY",componentWillUnmount:"DEFINE_MANY",UNSAFE_componentWillMount:"DEFINE_MANY",UNSAFE_componentWillReceiveProps:"DEFINE_MANY",UNSAFE_componentWillUpdate:"DEFINE_MANY",updateComponent:"OVERRIDE_BASE"},N={getDerivedStateFromProps:"DEFINE_MANY_MERGED"},_={displayName:function(e,t){e.displayName=t},mixins:function(e,t){if(t)for(var n=0;n<t.length;n++)r(e,t[n])},childContextTypes:function(e,t){e.childContextTypes=i({},e.childContextTypes,t)},contextTypes:function(e,t){e.contextTypes=i({},e.contextTypes,t)},getDefaultProps:function(e,t){e.getDefaultProps?e.getDefaultProps=f(e.getDefaultProps,t):e.getDefaultProps=t},propTypes:function(e,t){e.propTypes=i({},e.propTypes,t)},statics:function(e,t){c(e,t)},autobind:function(){}},v={componentDidMount:function(){this.__isMounted=!0}},b={componentWillUnmount:function(){this.__isMounted=!1}},D={replaceState:function(e,t){this.updater.enqueueReplaceState(this,e,t)},isMounted:function(){return!!this.__isMounted}},M=function(){};return i(M.prototype,e.prototype,D),y}var r,i=n(4),s=n(32),l=n(1),u="mixins";r={},e.exports=a},4:function(e,t){"use strict";function n(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function o(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var o=Object.getOwnPropertyNames(t).map(function(e){return t[e]});if("0123456789"!==o.join(""))return!1;var a={};return"abcdefghijklmnopqrst".split("").forEach(function(e){a[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},a)).join("")}catch(e){return!1}}var a=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;e.exports=o()?Object.assign:function(e,t){for(var o,s,l=n(e),u=1;u<arguments.length;u++){o=Object(arguments[u]);for(var c in o)r.call(o,c)&&(l[c]=o[c]);if(a){s=a(o);for(var p=0;p<s.length;p++)i.call(o,s[p])&&(l[s[p]]=o[s[p]])}}return l}},194:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(5),r=o(a),i=n(279),s=o(i);t.default=function(){return r.default.createElement("div",{className:s.default.root},r.default.createElement("div",{className:s.default.content},r.default.createElement("h1",{className:s.default.heading},"Hi, I'm Melissa"),r.default.createElement("div",{className:s.default.subHeading},"Email Marketing | Digital Marketing | Strategy")))},e.exports=t.default},279:function(e,t){e.exports={root:"src-components-Intro----styles-module---root---3xBja",content:"src-components-Intro----styles-module---content---2bgeg",heading:"src-components-Intro----styles-module---heading---2Rod7",subHeading:"src-components-Intro----styles-module---subHeading---9bC15"}},195:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(5),r=o(a),i=n(280),s=o(i);t.default=function(e){var t=e.title,n=e.abilityLevel;return r.default.createElement("div",{className:s.default.root},r.default.createElement("h3",{className:s.default.heading},t),r.default.createElement("div",{className:s.default.progressBar},r.default.createElement("div",{className:s.default.progressBarFill,style:{width:n}})))},e.exports=t.default},280:function(e,t){e.exports={root:"src-components-Profile-components-Skill----styles-module---root---306Ih",heading:"src-components-Profile-components-Skill----styles-module---heading---2vf-E",progressBar:"src-components-Profile-components-Skill----styles-module---progressBar---F5c76",progressBarFill:"src-components-Profile-components-Skill----styles-module---progressBarFill---zGALC"}},196:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(5),r=o(a),i=n(281),s=o(i),l=n(417),u=o(l),c=n(195),p=o(c);t.default=function(){return r.default.createElement("div",{className:s.default.root},r.default.createElement("div",{className:s.default.content},r.default.createElement("h1",{className:s.default.heading},"About Me"),r.default.createElement("div",{className:s.default.personalStatement},r.default.createElement("img",{src:u.default}),r.default.createElement("p",null,"Marketing maven with extensive experience in strategy, business development, partner marketing and field marketing. Currently based in Silicon Valley but will go anywhere the money takes me!")),r.default.createElement("div",{className:s.default.skills},r.default.createElement("h2",null,"Skills"),r.default.createElement(p.default,{title:"Email marketing",abilityLevel:"90%"}),r.default.createElement(p.default,{title:"SEO",abilityLevel:"30%"}),r.default.createElement(p.default,{title:"Social media advertising",abilityLevel:"70%"}),r.default.createElement(p.default,{title:"Content writing",abilityLevel:"90%"}),r.default.createElement(p.default,{title:"Strategy",abilityLevel:"80%"}))))},e.exports=t.default},417:function(e,t,n){e.exports=n.p+"static/profile-image.9a89cde9.jpg"},281:function(e,t){e.exports={root:"src-components-Profile----styles-module---root---3aOQA",content:"src-components-Profile----styles-module---content---3WwZZ",heading:"src-components-Profile----styles-module---heading---2Ed81",personalStatement:"src-components-Profile----styles-module---personalStatement---9tOvB",skills:"src-components-Profile----styles-module---skills---19JgC"}},199:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(5),r=o(a),i=n(194),s=o(i),l=n(196),u=o(l),c=function(){return r.default.createElement("div",{style:{height:"100%"}},r.default.createElement(s.default,null),r.default.createElement(u.default,null))};t.default=c,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-index-js-ead3420f0850448e811c.js.map