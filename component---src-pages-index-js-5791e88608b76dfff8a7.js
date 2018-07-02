webpackJsonp([35783957827783],{91:function(e,t,n){"use strict";function a(e){return e}function r(e,t,n){function r(e,t){var n=h.hasOwnProperty(t)?h[t]:null;M.hasOwnProperty(t)&&s("OVERRIDE_BASE"===n,"ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.",t),e&&s("DEFINE_MANY"===n||"DEFINE_MANY_MERGED"===n,"ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",t)}function l(e,n){if(n){s("function"!=typeof n,"ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."),s(!t(n),"ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object.");var a=e.prototype,l=a.__reactAutoBindPairs;n.hasOwnProperty(u)&&b.mixins(e,n.mixins);for(var o in n)if(n.hasOwnProperty(o)&&o!==u){var i=n[o],c=a.hasOwnProperty(o);if(r(c,o),b.hasOwnProperty(o))b[o](e,i);else{var d=h.hasOwnProperty(o),p="function"==typeof i,g=p&&!d&&!c&&n.autobind!==!1;if(g)l.push(o,i),a[o]=i;else if(c){var E=h[o];s(d&&("DEFINE_MANY_MERGED"===E||"DEFINE_MANY"===E),"ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.",E,o),"DEFINE_MANY_MERGED"===E?a[o]=m(a[o],i):"DEFINE_MANY"===E&&(a[o]=f(a[o],i))}else a[o]=i}}}else;}function c(e,t){if(t)for(var n in t){var a=t[n];if(t.hasOwnProperty(n)){var r=n in b;s(!r,'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',n);var l=n in e;if(l){var o=v.hasOwnProperty(n)?v[n]:null;return s("DEFINE_MANY_MERGED"===o,"ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",n),void(e[n]=m(e[n],a))}e[n]=a}}}function d(e,t){s(e&&t&&"object"==typeof e&&"object"==typeof t,"mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.");for(var n in t)t.hasOwnProperty(n)&&(s(void 0===e[n],"mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.",n),e[n]=t[n]);return e}function m(e,t){return function(){var n=e.apply(this,arguments),a=t.apply(this,arguments);if(null==n)return a;if(null==a)return n;var r={};return d(r,n),d(r,a),r}}function f(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function p(e,t){var n=t.bind(e);return n}function g(e){for(var t=e.__reactAutoBindPairs,n=0;n<t.length;n+=2){var a=t[n],r=t[n+1];e[a]=p(e,r)}}function E(e){var t=a(function(e,a,r){this.__reactAutoBindPairs.length&&g(this),this.props=e,this.context=a,this.refs=i,this.updater=r||n,this.state=null;var l=this.getInitialState?this.getInitialState():null;s("object"==typeof l&&!Array.isArray(l),"%s.getInitialState(): must return an object or null",t.displayName||"ReactCompositeComponent"),this.state=l});t.prototype=new I,t.prototype.constructor=t,t.prototype.__reactAutoBindPairs=[],y.forEach(l.bind(null,t)),l(t,N),l(t,e),l(t,_),t.getDefaultProps&&(t.defaultProps=t.getDefaultProps()),s(t.prototype.render,"createClass(...): Class specification must implement a `render` method.");for(var r in h)t.prototype[r]||(t.prototype[r]=null);return t}var y=[],h={mixins:"DEFINE_MANY",statics:"DEFINE_MANY",propTypes:"DEFINE_MANY",contextTypes:"DEFINE_MANY",childContextTypes:"DEFINE_MANY",getDefaultProps:"DEFINE_MANY_MERGED",getInitialState:"DEFINE_MANY_MERGED",getChildContext:"DEFINE_MANY_MERGED",render:"DEFINE_ONCE",componentWillMount:"DEFINE_MANY",componentDidMount:"DEFINE_MANY",componentWillReceiveProps:"DEFINE_MANY",shouldComponentUpdate:"DEFINE_ONCE",componentWillUpdate:"DEFINE_MANY",componentDidUpdate:"DEFINE_MANY",componentWillUnmount:"DEFINE_MANY",UNSAFE_componentWillMount:"DEFINE_MANY",UNSAFE_componentWillReceiveProps:"DEFINE_MANY",UNSAFE_componentWillUpdate:"DEFINE_MANY",updateComponent:"OVERRIDE_BASE"},v={getDerivedStateFromProps:"DEFINE_MANY_MERGED"},b={displayName:function(e,t){e.displayName=t},mixins:function(e,t){if(t)for(var n=0;n<t.length;n++)l(e,t[n])},childContextTypes:function(e,t){e.childContextTypes=o({},e.childContextTypes,t)},contextTypes:function(e,t){e.contextTypes=o({},e.contextTypes,t)},getDefaultProps:function(e,t){e.getDefaultProps?e.getDefaultProps=m(e.getDefaultProps,t):e.getDefaultProps=t},propTypes:function(e,t){e.propTypes=o({},e.propTypes,t)},statics:function(e,t){c(e,t)},autobind:function(){}},N={componentDidMount:function(){this.__isMounted=!0}},_={componentWillUnmount:function(){this.__isMounted=!1}},M={replaceState:function(e,t){this.updater.enqueueReplaceState(this,e,t)},isMounted:function(){return!!this.__isMounted}},I=function(){};return o(I.prototype,e.prototype,M),E}var l,o=n(5),i=n(32),s=n(1),u="mixins";l={},e.exports=r},5:function(e,t){"use strict";function n(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function a(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var a=Object.getOwnPropertyNames(t).map(function(e){return t[e]});if("0123456789"!==a.join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}var r=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;e.exports=a()?Object.assign:function(e,t){for(var a,i,s=n(e),u=1;u<arguments.length;u++){a=Object(arguments[u]);for(var c in a)l.call(a,c)&&(s[c]=a[c]);if(r){i=r(a);for(var d=0;d<i.length;d++)o.call(a,i[d])&&(s[i[d]]=a[i[d]])}}return s}},194:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(4),l=a(r),o=n(281),i=a(o);t.default=function(e){var t=e.title,n=e.children,a=e.start,r=e.end;return l.default.createElement("div",{className:i.default.root},l.default.createElement("div",{className:i.default.details},l.default.createElement("h4",null,t),l.default.createElement("span",null,a," - ",r)),l.default.createElement("div",{className:i.default.content},n))},e.exports=t.default},281:function(e,t){e.exports={root:"src-components-Experience-components-Company----styles-module---root---3xgYb",details:"src-components-Experience-components-Company----styles-module---details---2nI91",content:"src-components-Experience-components-Company----styles-module---content---6rpDk"}},195:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(4),l=a(r),o=n(282),i=a(o),s=n(194),u=a(s);t.default=function(){return l.default.createElement("div",{className:i.default.root},l.default.createElement("div",{className:i.default.content},l.default.createElement("h2",null,"Work Experience "),l.default.createElement(u.default,{title:"Software Consulting",start:"2015",end:"2017"},l.default.createElement("h4",null," Head, Sales & Marketing "),l.default.createElement("ul",null,l.default.createElement("li",null,"Introduced and led onboarding and training new account managers for CMS, database and email marketing automation software."),l.default.createElement("li",null,"Strategized revamp of corporate website for international hypermarket client; increased value of development for client by including monetization features which would amortize website development investment."),l.default.createElement("li",null,"Created brand voice and refined UI/UX, User Manual and web/marketing content for a SaaS cloud based transactional email product launched for the ASEAN region, post MVP."),l.default.createElement("li",null,"Increased project value by $20,000 for banking client by introduction of retainer servicess"),l.default.createElement("li",null,"Contribution to new deals worth USD $650,000.")),l.default.createElement("h4",null," Senior Key Account Manager "),l.default.createElement("ul",null,l.default.createElement("li",null,"Led development project for loyalty card registration & verification interface for international hypermarket chain. This successfully resolved the customers' issue with fraudulent cards usage & transactions."),l.default.createElement("li",null,"Led email marketing strategy development with B2C clients, advising on content development, A/B testing, data analysis and understanding the impact of data on digital marketing strategies. Doubled performance of open rates, CTRs for clients. "),l.default.createElement("li",null,"Introduced marketing advisory and support for key accounts; regular meetings to support clients' needs on best practices for email marketing, responsive web design, targeted & triggered marketing communications and compliance to brand voice."))),l.default.createElement(u.default,{title:"Medical Technology",start:"2013",end:"2015"},l.default.createElement("h4",null,"Marketing Manager, Asia Pacific"),l.default.createElement("ul",null,l.default.createElement("li",null,"Introduced email marketing automation software use and led email marketing campaigns based on best practices."),l.default.createElement("li",null,"Introduced experiential marketing concepts and led application in customer touch points. "),l.default.createElement("li",null,"Introduced market segmentation and persona marketing concepts in developing regional marketing and account-based marketing strategies. "),l.default.createElement("li",null,"Led and initiated team performance rewards system for Sales Team, supported by Marketing for enhancing Team performance."),l.default.createElement("li",null,"Representative at 11th Malaysia Plan Steering Committee meeting to discuss opportunities in applications of technology across industries for economic development. "),l.default.createElement("li",null,"Revised branding direction and developed packaging for software products, marketing materials including corporate gifts, and guidelines for events booth displays and conferences."),l.default.createElement("li",null,"Initiated & led specialized training programs in Asia Pac to upskill customers and partners. Training materials were adopted by HQ as new benchmark training program."),l.default.createElement("li",null,"Refined proprietary CRM system reporting features for better understanding of marketing performance. "))),l.default.createElement(u.default,{title:"Luxury Automotive",start:"2011",end:"2013"},l.default.createElement("h4",null,"Marketing Manager"),l.default.createElement("ul",null,l.default.createElement("li",null,"Project managed three major car lauching events, 30 major marketing campaigns and up to 60 events."),l.default.createElement("li",null,"Introduced marketing KPI concepts and decision making based on quantitative data. Improved social media engagement by 200% in first year."),l.default.createElement("li",null,"Improved long-term customer retention by initiating and leading customer onboarding, referral & loyalty programs for better return sales."))),l.default.createElement(u.default,{title:"Food & Beverage Group",start:"2006",end:"2011"},l.default.createElement("h4",null,"Group PR & Marketing Manager"),l.default.createElement("ul",null,l.default.createElement("li",null,"Introduced email marketing automation software use and led email marketing campaigns based on best practices."),l.default.createElement("li",null,"Introduced, developed and led customer loyalty program and partnership marketing with leading lifestyle and beverage brands."),l.default.createElement("li",null,"Led revision of business offerings at specific outlets with poor sales performance. Revenue turnover improved in 4months; overall sales performances improved by over 200% in 18 months."),l.default.createElement("li",null,"Led development and operations of catering business as additional revenue stream, which contributed up to 25% of total Group income."),l.default.createElement("li",null,"Introduced, developed and led service staff coaching program for improved sales performance. Program saved the Company $20,000 in professional fees and sales performance improved up to 18% across all outlets after training."))),l.default.createElement(u.default,{title:"Management Consulting",start:"2004",end:"2006"},l.default.createElement("h4",null,"Sales & Marketing Executive"),l.default.createElement("ul",null,l.default.createElement("li",null,"Developed and initiaed email marketing campaigns. Managed online and email lead distribution. "),l.default.createElement("li",null,"Designed and developed company Corporate Identity, training and guide materials."),l.default.createElement("li",null,"Top sales executive with largest deal procured at $50,000. Total sales contribution at $125,000.")))))},e.exports=t.default},282:function(e,t){e.exports={root:"src-components-Experience----styles-module---root---3S3B2",content:"src-components-Experience----styles-module---content---rgXhz"}},196:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(4),l=a(r),o=n(283),i=a(o);t.default=function(){return l.default.createElement("div",{className:i.default.root},l.default.createElement("div",{className:i.default.content},l.default.createElement("h1",{className:i.default.heading},"Hi, I'm Melissa"),l.default.createElement("div",{className:i.default.subHeading},"Email Marketing | Digital Marketing | Strategy")))},e.exports=t.default},283:function(e,t){e.exports={root:"src-components-Intro----styles-module---root---3xBja",content:"src-components-Intro----styles-module---content---2bgeg",heading:"src-components-Intro----styles-module---heading---2Rod7",subHeading:"src-components-Intro----styles-module---subHeading---9bC15"}},197:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(4),l=a(r),o=n(284),i=a(o);t.default=function(e){var t=e.title,n=e.abilityLevel;return l.default.createElement("div",{className:i.default.root},l.default.createElement("h3",{className:i.default.heading},t),l.default.createElement("div",{className:i.default.progressBar},l.default.createElement("div",{className:i.default.progressBarFill,style:{width:n}})))},e.exports=t.default},284:function(e,t){e.exports={root:"src-components-Profile-components-Skill----styles-module---root---306Ih",heading:"src-components-Profile-components-Skill----styles-module---heading---2vf-E",progressBar:"src-components-Profile-components-Skill----styles-module---progressBar---F5c76",progressBarFill:"src-components-Profile-components-Skill----styles-module---progressBarFill---zGALC"}},198:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(4),l=a(r),o=n(285),i=a(o),s=n(421),u=a(s),c=n(197),d=a(c);t.default=function(){return l.default.createElement("div",{className:i.default.root},l.default.createElement("div",{className:i.default.content},l.default.createElement("h1",{className:i.default.heading},"About Me"),l.default.createElement("div",{className:i.default.personalStatement},l.default.createElement("img",{src:u.default}),l.default.createElement("p",null,"Marketing maven with extensive experience in strategy, business development, partner marketing and field marketing. Stumbled into SQL, HTML, CSS and a little Javascript along the way. Currently based in the Silicon Valley and looking for my next marketing challenge!")),l.default.createElement("div",{className:i.default.skills},l.default.createElement("h2",null,"Skills"),l.default.createElement(d.default,{title:"Email marketing",abilityLevel:"90%"}),l.default.createElement(d.default,{title:"SEO",abilityLevel:"60%"}),l.default.createElement(d.default,{title:"Social media advertising",abilityLevel:"70%"}),l.default.createElement(d.default,{title:"Content writing",abilityLevel:"90%"}),l.default.createElement(d.default,{title:"Strategy",abilityLevel:"90%"}))))},e.exports=t.default},421:function(e,t,n){e.exports=n.p+"static/profile-image.9a89cde9.jpg"},285:function(e,t){e.exports={root:"src-components-Profile----styles-module---root---3aOQA",content:"src-components-Profile----styles-module---content---3WwZZ",heading:"src-components-Profile----styles-module---heading---2Ed81",personalStatement:"src-components-Profile----styles-module---personalStatement---9tOvB",skills:"src-components-Profile----styles-module---skills---19JgC"}},201:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(4),l=a(r),o=n(196),i=a(o),s=n(198),u=a(s),c=n(195),d=a(c),m=function(){return l.default.createElement("div",{style:{height:"100%"}},l.default.createElement(i.default,null),l.default.createElement(u.default,null),l.default.createElement(d.default,null))};t.default=m,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-index-js-5791e88608b76dfff8a7.js.map