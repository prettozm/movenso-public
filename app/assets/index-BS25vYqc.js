const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./esm-CZBI3DOE.js","./dist-sZ8V2geg.js","./esm-DisWyHRy.js","./esm-CIu01MvU.js","./esm-B5umUG-z.js"])))=>i.map(i=>d[i]);
(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=globalThis,t=e.ShadowRoot&&(e.ShadyCSS===void 0||e.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,n=Symbol(),r=new WeakMap,i=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,n=this.t;if(t&&e===void 0){let t=n!==void 0&&n.length===1;t&&(e=r.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&r.set(n,e))}return e}toString(){return this.cssText}},a=e=>new i(typeof e==`string`?e:e+``,void 0,n),o=(n,r)=>{if(t)n.adoptedStyleSheets=r.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let t of r){let r=document.createElement(`style`),i=e.litNonce;i!==void 0&&r.setAttribute(`nonce`,i),r.textContent=t.cssText,n.appendChild(r)}},s=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return a(t)})(e):e,{is:c,defineProperty:l,getOwnPropertyDescriptor:u,getOwnPropertyNames:d,getOwnPropertySymbols:f,getPrototypeOf:p}=Object,m=globalThis,h=m.trustedTypes,g=h?h.emptyScript:``,_=m.reactiveElementPolyfillSupport,v=(e,t)=>e,y={toAttribute(e,t){switch(t){case Boolean:e=e?g:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},b=(e,t)=>!c(e,t),x={attribute:!0,type:String,converter:y,reflect:!1,useDefault:!1,hasChanged:b};Symbol.metadata??=Symbol(`metadata`),m.litPropertyMetadata??=new WeakMap;var S=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=x){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&l(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=u(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??x}static _$Ei(){if(this.hasOwnProperty(v(`elementProperties`)))return;let e=p(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(v(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v(`properties`))){let e=this.properties,t=[...d(e),...f(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(s(e))}else e!==void 0&&t.push(s(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return o(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?y:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?y:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??b)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};S.elementStyles=[],S.shadowRootOptions={mode:`open`},S[v(`elementProperties`)]=new Map,S[v(`finalized`)]=new Map,_?.({ReactiveElement:S}),(m.reactiveElementVersions??=[]).push(`2.1.2`);var C=globalThis,w=e=>e,T=C.trustedTypes,E=T?T.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,D=`$lit$`,O=`lit$${Math.random().toFixed(9).slice(2)}$`,ee=`?`+O,te=`<${ee}>`,k=document,A=()=>k.createComment(``),j=e=>e===null||typeof e!=`object`&&typeof e!=`function`,M=Array.isArray,N=e=>M(e)||typeof e?.[Symbol.iterator]==`function`,ne=`[ 	
\f\r]`,P=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,re=/-->/g,ie=/>/g,F=RegExp(`>|${ne}(?:([^\\s"'>=/]+)(${ne}*=${ne}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),I=/'/g,ae=/"/g,oe=/^(?:script|style|textarea|title)$/i,L=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),se=Symbol.for(`lit-noChange`),R=Symbol.for(`lit-nothing`),ce=new WeakMap,le=k.createTreeWalker(k,129);function ue(e,t){if(!M(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return E===void 0?t:E.createHTML(t)}var de=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=P;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===P?c[1]===`!--`?o=re:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=F):(oe.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=F):o=ie:o===F?c[0]===`>`?(o=i??P,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?F:c[3]===`"`?ae:I):o===ae||o===I?o=F:o===re||o===ie?o=P:(o=F,i=void 0);let d=o===F&&e[t+1].startsWith(`/>`)?` `:``;a+=o===P?n+te:l>=0?(r.push(s),n.slice(0,l)+D+n.slice(l)+O+d):n+O+(l===-2?t:d)}return[ue(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]},fe=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=de(t,n);if(this.el=e.createElement(l,r),le.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=le.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(D)){let t=u[o++],n=i.getAttribute(e).split(O),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?_e:r[1]===`?`?ve:r[1]===`@`?ye:ge}),i.removeAttribute(e)}else e.startsWith(O)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(oe.test(i.tagName)){let e=i.textContent.split(O),t=e.length-1;if(t>0){i.textContent=T?T.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],A()),le.nextNode(),c.push({type:2,index:++a});i.append(e[t],A())}}}else if(i.nodeType===8)if(i.data===ee)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(O,e+1))!==-1;)c.push({type:7,index:a}),e+=O.length-1}a++}}static createElement(e,t){let n=k.createElement(`template`);return n.innerHTML=e,n}};function pe(e,t,n=e,r){if(t===se)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=j(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=pe(e,i._$AS(e,t.values),i,r)),t}var me=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??k).importNode(t,!0);le.currentNode=r;let i=le.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new he(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new be(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=le.nextNode(),a++)}return le.currentNode=k,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},he=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=R,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=pe(this,e,t),j(e)?e===R||e==null||e===``?(this._$AH!==R&&this._$AR(),this._$AH=R):e!==this._$AH&&e!==se&&this._(e):e._$litType$===void 0?e.nodeType===void 0?N(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==R&&j(this._$AH)?this._$AA.nextSibling.data=e:this.T(k.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=fe.createElement(ue(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new me(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=ce.get(e.strings);return t===void 0&&ce.set(e.strings,t=new fe(e)),t}k(t){M(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(A()),this.O(A()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=w(e).nextSibling;w(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},ge=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=R,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=R}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=pe(this,e,t,0),a=!j(e)||e!==this._$AH&&e!==se,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=pe(this,r[n+o],t,o),s===se&&(s=this._$AH[o]),a||=!j(s)||s!==this._$AH[o],s===R?e=R:e!==R&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===R?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},_e=class extends ge{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===R?void 0:e}},ve=class extends ge{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==R)}},ye=class extends ge{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=pe(this,e,t,0)??R)===se)return;let n=this._$AH,r=e===R&&n!==R||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==R&&(n===R||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},be=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){pe(this,e)}},xe=C.litHtmlPolyfillSupport;xe?.(fe,he),(C.litHtmlVersions??=[]).push(`3.3.3`);var Se=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new he(t.insertBefore(A(),e),e,void 0,n??{})}return i._$AI(e),i},Ce=globalThis,we=class extends S{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Se(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return se}};we._$litElement$=!0,we.finalized=!0,Ce.litElementHydrateSupport?.({LitElement:we});var Te=Ce.litElementPolyfillSupport;Te?.({LitElement:we}),(Ce.litElementVersions??=[]).push(`4.2.2`);var Ee=[`referentiel`,`enseignement`,`ressource`,`personnel`],De=[{id:`prepare`,libelle:`Prépare`,libelleInverse:`Préparée par`},{id:`enchaine`,libelle:`Enchaîne vers`,libelleInverse:`Enchaînée depuis`},{id:`contre`,libelle:`Contre`,libelleInverse:`Contrée par`},{id:`similaire`,libelle:`Similaire à`,symetrique:!0}],Oe=[`local`,`lien`,`plateforme`],ke=[`youtube`],Ae=[`technique`,`etape`,`transition`,`consigne`,`objectif`,`duree`,`media`,`repere`,`pause`];function je(){return{versionSchema:3,typesRelation:De.map(e=>({...e})),disciplines:[],techniques:[],contributions:[],compositions:[],favoris:[],doublonsIgnores:[]}}function Me(e){let t=new Map,n=new Map(e.techniques.map(e=>[e.id,e.nom])),r=(e,n)=>{let r=t.get(e.id);r?r.references.push(n):t.set(e.id,{media:e,references:[n]})};for(let t of e.contributions)for(let e of t.medias)r(e,{ou:`contribution`,conteneurId:t.id,techniqueId:t.techniqueId,nom:t.techniqueId?n.get(t.techniqueId)??`?`:`capture à rattacher`});for(let t of e.compositions)for(let e of t.blocs)for(let n of e.medias)r(n,{ou:`bloc`,conteneurId:t.id,techniqueId:null,nom:`composition « ${t.nom} »`});for(let n of e.techniques){if(!n.mediaPrincipalId)continue;let e=t.get(n.mediaPrincipalId);e&&e.references.push({ou:`media-principal`,conteneurId:n.id,techniqueId:n.id,nom:n.nom})}return t}function Ne(e){let t=new Set;for(let[n,r]of Me(e))r.media.type===`local`&&t.add(n);for(let n of e.corbeille??[])for(let e of n.contributions)for(let n of e.medias)n.type===`local`&&t.add(n.id);return t}var Pe={"video/webm":`webm`,"video/mp4":`mp4`,"video/quicktime":`mov`,"video/x-matroska":`mkv`,"video/3gpp":`3gp`,"video/ogg":`ogv`,"video/x-msvideo":`avi`};function Fe(e,t){let n=Pe[e?.split(`;`)[0]?.trim().toLowerCase()??``];if(n)return n;let r=t?.match(/\.([a-z0-9]{1,5})$/i)?.[1];return r?r.toLowerCase():void 0}function Ie(e,t,n){if(n){for(let{media:r}of Me(e).values())if(r.type===`local`&&r.sha256===n&&r.taille===t)return r}}var Le=`0123456789ABCDEFGHJKMNPQRSTVWXYZ`,Re=10,ze=16,Be=-1,Ve=[];function He(e){let t=``;for(let n=Re-1;n>=0;n--)t=Le[e%32]+t,e=Math.floor(e/32);return t}function Ue(){let e=new Uint8Array(ze);return globalThis.crypto.getRandomValues(e),Array.from(e,e=>e%32)}function We(e){let t=e.slice();for(let e=t.length-1;e>=0;e--){let n=t[e]??0;if(n<31)return t[e]=n+1,t;t[e]=0}return t}function z(e=Date.now()){let t;return e===Be?t=We(Ve):(t=Ue(),Be=e),Ve=t,He(e)+t.map(e=>Le[e]).join(``)}var Ge=/^[0-9A-HJKMNP-TV-Z]{26}$/;function Ke(e){return Ge.test(e)}var qe=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),Je=(e,t)=>e>>>t|e<<32-t,Ye=class{#e=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]);#t=new Uint8Array(64);#n=0;#r=0;#i=new Uint32Array(64);#a=!1;update(e){if(this.#a)throw Error(`Sha256 : digest() déjà appelé`);this.#r+=e.length;let t=0;if(this.#n>0){for(;t<e.length&&this.#n<64;)this.#t[this.#n++]=e[t++];this.#n===64&&(this.#o(this.#t,0),this.#n=0)}for(;t+64<=e.length;t+=64)this.#o(e,t);for(;t<e.length;)this.#t[this.#n++]=e[t++];return this}digestHex(){if(this.#a)throw Error(`Sha256 : digest() déjà appelé`);this.#a=!0;let e=this.#r*8,t=this.#n,n=new Uint8Array(t<56?64:128);n.set(this.#t.subarray(0,t)),n[t]=128;let r=new DataView(n.buffer);r.setUint32(n.length-8,Math.floor(e/4294967296)),r.setUint32(n.length-4,e>>>0);for(let e=0;e<n.length;e+=64)this.#o(n,e);let i=``;for(let e=0;e<8;e++)i+=this.#e[e].toString(16).padStart(8,`0`);return i}#o(e,t){let n=this.#i;for(let r=0;r<16;r++){let i=t+r*4;n[r]=(e[i]<<24|e[i+1]<<16|e[i+2]<<8|e[i+3])>>>0}for(let e=16;e<64;e++){let t=Je(n[e-15],7)^Je(n[e-15],18)^n[e-15]>>>3,r=Je(n[e-2],17)^Je(n[e-2],19)^n[e-2]>>>10;n[e]=n[e-16]+t+n[e-7]+r>>>0}let[r,i,a,o,s,c,l,u]=this.#e;for(let e=0;e<64;e++){let t=Je(s,6)^Je(s,11)^Je(s,25),d=s&c^~s&l,f=u+t+d+qe[e]+n[e]>>>0,p=(Je(r,2)^Je(r,13)^Je(r,22))+(r&i^r&a^i&a)>>>0;u=l,l=c,c=s,s=o+f>>>0,o=a,a=i,i=r,r=f+p>>>0}let d=this.#e;d[0]=d[0]+r>>>0,d[1]=d[1]+i>>>0,d[2]=d[2]+a>>>0,d[3]=d[3]+o>>>0,d[4]=d[4]+s>>>0,d[5]=d[5]+c>>>0,d[6]=d[6]+l>>>0,d[7]=d[7]+u>>>0}};function Xe(e){return new Ye().update(e).digestHex()}async function Ze(e){if(typeof e.stream!=`function`){let t=await e.arrayBuffer(),n=await crypto.subtle.digest(`SHA-256`,t);return[...new Uint8Array(n)].map(e=>e.toString(16).padStart(2,`0`)).join(``)}let t=new Ye,n=e.stream().getReader();for(;;){let{done:e,value:r}=await n.read();if(e)break;r&&t.update(r)}return t.digestHex()}function Qe(e){return e.size===0?`Fichier vide — rien à enregistrer`:e.type&&!e.type.toLowerCase().startsWith(`video/`)?`Ce fichier n'est pas une vidéo — seules les vidéos s'ajoutent ici`:null}async function $e(e,t,n){let r=await Ze(t),i=Ie(e,t.size,r);if(i)return{media:{...i},dejaPresent:!0};let a=z(),o=Fe(t.type,t.name);return{media:{id:a,type:`local`,ref:`videos/${a}`,sha256:r,taille:t.size,ajouteLe:new Date().toISOString(),origineMedia:n,...t.type?{mime:t.type}:{},...o?{extension:o}:{},...t.name?{nomOriginal:t.name}:{}},dejaPresent:!1}}function et(e){return Math.max(16e6,Math.round(e*.1))}function tt(e,t){if(t===null)return{suffisant:!0,fiable:!1,requis:e,disponible:null};let n=Math.max(0,t.quota-t.usage);return{suffisant:e+et(e)<=n,fiable:!0,requis:e,disponible:n}}function nt(e){return e>=1e9?`${(e/1e9).toFixed(1)} Go`:e>=1e6?`${(e/1e6).toFixed(1)} Mo`:`${Math.max(1,Math.round(e/1e3))} Ko`}function B(e){return e.toLowerCase().normalize(`NFD`).replace(/[̀-ͯ]/g,``).replace(/[\s\-'’]/g,``)}function rt(e,t,n=20){let r=B(t);if(r===``)return[];let i=new Map;for(let t of e.contributions)t.provenance!==`personnel`||!t.techniqueId||!t.description||i.set(t.techniqueId,(i.get(t.techniqueId)??``)+` `+B(t.description));let a=new Map,o=[];for(let t of e.techniques){let e=B(t.nom),n=B(t.nomTraditionnel??``),s=null;e.startsWith(r)?s=0:e.includes(r)?s=1:n!==``&&n.includes(r)?s=2:i.get(t.id)?.includes(r)&&(s=3),s!==null&&(a.set(t.id,s),o.push(t))}return o.sort((e,t)=>a.get(e.id)-a.get(t.id)||e.nom.localeCompare(t.nom,`fr`)).slice(0,n)}var it={1:e=>({...e,versionSchema:2,typesRelation:De.map(e=>({...e})),compositions:[]}),2:e=>({...e,versionSchema:3,favoris:[]})},at=class extends Error{constructor(e){super(e),this.name=`ErreurMigration`}};function ot(e,t=3){if(typeof e!=`object`||!e)throw new at(`Données illisibles : la bibliothèque n'est pas un objet`);let n=e,r=n.versionSchema;if(typeof r!=`number`||!Number.isInteger(r)||r<1)throw new at(`Version de schéma absente ou invalide : ${String(r)}`);let i=r;if(i>t)throw new at(`Bibliothèque en version ${i}, plus récente que l'application (${t}) — mettre à jour l'application plutôt que risquer une perte`);for(;i<t;){let e=it[i];if(!e)throw new at(`Aucune migration enregistrée depuis la version ${i}`);n=e(n);let t=n.versionSchema;if(typeof t!=`number`||t!==i+1)throw new at(`La migration ${i} → ${i+1} n'a pas incrémenté la version`);i=t}return n}var st=class extends Error{constructor(e){super(e),this.name=`ErreurValidation`}};function V(e,t){if(!e)throw new st(t)}function ct(e,t){let n=new Set;for(let r of e)V(Ke(r),`${t} : id « ${r} » n'est pas un ULID valide`),V(!n.has(r),`${t} : id « ${r} » en double`),n.add(r)}function lt(e){return e===``||e.startsWith(`/`)||e.includes(`\\`)||/^[a-zA-Z]:/.test(e)?!1:!e.split(`/`).some(e=>e===`..`||e===``)}function ut(e){let t=new Set;for(let n of e)V(n.id.trim()!==``,`Type de relation : id vide`),V(!t.has(n.id),`Type de relation « ${n.id} » en double`),t.add(n.id),V(n.libelle.trim()!==``,`Type de relation « ${n.id} » : libellé vide`),V(n.symetrique===!0||(n.libelleInverse??``).trim()!==``,`Type de relation « ${n.id} » : un type orienté déclare son libellé inverse (ou sa symétrie)`)}function dt(e){V(e.nom.trim()!==``,`Discipline ${e.id} : nom vide`);let t=[...e.familles.map(e=>e.id),...e.niveaux.map(e=>e.id)],n=new Set;for(let r of t)V(r.trim()!==``,`Discipline « ${e.nom} » : id de taxonomie vide`),V(!n.has(r),`Discipline « ${e.nom} » : id de taxonomie « ${r} » en double`),n.add(r)}function ft(e,t,n){V(e.nom.trim()!==``,`Technique ${e.id} : nom vide`);let r=t.get(e.disciplineId);V(r!==void 0,`Technique « ${e.nom} » : discipline ${e.disciplineId} inconnue`),e.familleId!==void 0&&V(r.familles.some(t=>t.id===e.familleId),`Technique « ${e.nom} » : famille « ${e.familleId} » absente de la discipline « ${r.nom} »`);for(let t of e.niveauxIds)V(r.niveaux.some(e=>e.id===t),`Technique « ${e.nom} » : niveau « ${t} » absent de la discipline « ${r.nom} »`);for(let t of e.relations)V(n.has(t.type),`Technique « ${e.nom} » : type de relation « ${t.type} » non déclaré`),V(Ke(t.cibleId),`Technique « ${e.nom} » : cible de relation « ${t.cibleId} » mal formée`);e.mediaPrincipalId!==void 0&&V(Ke(e.mediaPrincipalId),`Technique « ${e.nom} » : média principal « ${e.mediaPrincipalId} » mal formé`)}function pt(e,t){ct(e.map(e=>e.id),`${t}, médias`);for(let t of e)V(Oe.includes(t.type),`Média ${t.id} : type « ${t.type} » inconnu`),V(t.ref.trim()!==``,`Média ${t.id} : référence vide`),t.type===`local`&&V(lt(t.ref),`Média ${t.id} : chemin local « ${t.ref} » non relatif ou dangereux`),t.type===`plateforme`&&V(t.service!==void 0&&ke.includes(t.service),`Média ${t.id} : un média de plateforme déclare son service (${ke.join(`, `)})`)}function mt(e,t,n){V(Ee.includes(e),`${n} : provenance « ${e} » inconnue`),(e===`referentiel`||e===`ressource`)&&V((t??``).trim()!==``,`${n} : une provenance « ${e} » exige une attribution (savoir sourcé)`)}function ht(e,t){mt(e.provenance,e.attribution,`Contribution ${e.id}`),e.techniqueId!==null&&V(t.has(e.techniqueId),`Contribution ${e.id} : technique ${e.techniqueId} inconnue`),V(!Number.isNaN(Date.parse(e.creeLe)),`Contribution ${e.id} : date « ${e.creeLe} » invalide`),pt(e.medias,`Contribution ${e.id}`)}function gt(e){V(e.nom.trim()!==``,`Composition ${e.id} : nom vide`),mt(e.provenance,e.attribution,`Composition « ${e.nom} »`),V(!Number.isNaN(Date.parse(e.creeLe)),`Composition « ${e.nom} » : date « ${e.creeLe} » invalide`),ct(e.blocs.map(e=>e.id),`Composition « ${e.nom} », blocs`);for(let t of e.blocs)V(Ae.includes(t.type),`Composition « ${e.nom} » : bloc de type « ${t.type} » inconnu`),t.type===`technique`?V(t.techniqueId!==void 0&&Ke(t.techniqueId),`Composition « ${e.nom} » : un bloc technique référence une identité`):V((t.texte??``).trim()!==``||t.medias.length>0||t.dureeSec!==void 0,`Composition « ${e.nom} » : un bloc « ${t.type} » porte un texte, un média ou une durée`),t.dureeSec!==void 0&&V(Number.isFinite(t.dureeSec)&&t.dureeSec>=0,`Composition « ${e.nom} » : durée « ${t.dureeSec} » invalide`),pt(t.medias,`Composition « ${e.nom} », bloc ${t.id}`);e.presentation&&pt(e.presentation.medias,`Composition « ${e.nom} », présentation`)}function _t(e){V(e.versionSchema===3,`Version de schéma ${e.versionSchema} inattendue (courante : 3) — passer par les migrations avant validation`),ut(e.typesRelation),ct(e.disciplines.map(e=>e.id),`Disciplines`),ct(e.techniques.map(e=>e.id),`Techniques`),ct(e.contributions.map(e=>e.id),`Contributions`),ct(e.compositions.map(e=>e.id),`Compositions`);let t=new Map(e.disciplines.map(e=>[e.id,e])),n=new Set(e.techniques.map(e=>e.id)),r=new Set(e.typesRelation.map(e=>e.id));e.disciplines.forEach(dt),e.techniques.forEach(e=>ft(e,t,r)),e.contributions.forEach(e=>ht(e,n)),e.compositions.forEach(gt),ct(e.favoris,`Favoris`);for(let t of e.favoris)V(Ke(t),`Favori « ${t} » mal formé`)}var vt=class extends Error{constructor(e){super(e),this.name=`ErreurRapprochement`}};function yt(e,t,n){if(Math.abs(e.length-t.length)>n)return n+1;let r=Array.from({length:t.length+1},(e,t)=>t);for(let n=1;n<=e.length;n++){let i=[n];for(let a=1;a<=t.length;a++)i[a]=Math.min((r[a]??0)+1,(i[a-1]??0)+1,(r[a-1]??0)+(e[n-1]===t[a-1]?0:1));r=i}return r[t.length]??n+1}function bt(e,t,n){let r=B(n);if(r.length<3)return{exacte:null,proches:[]};let i=e.techniques.filter(e=>e.disciplineId===t),a=i.filter(e=>B(e.nom)===r);return{exacte:a.length===1?a[0]:null,proches:[...a.length>1?a:[],...i.filter(e=>{let t=B(e.nom);return t!==r&&(yt(t,r,2)<=2||t.includes(r)||r.includes(t))})].slice(0,4)}}function xt(e,t,n){let r=new Map;for(let i of t){let t=e.find(e=>B(e.nom)===B(i.nom));if(t)r.set(i.id,t.id);else{let t=e.some(e=>e.id===i.id)?`${n}-${i.id}`:i.id;e.push({...i,id:t}),r.set(i.id,t)}}return r}function St(e,t,n){if(t.disciplines.length===0)throw new vt(`Un pack importable contient au moins une discipline`);let r=structuredClone(e),i=n.packId,a=new Map((n.regles??[]).map(e=>[B(e.de),B(e.vers)])),o={discipline:t.disciplines.map(e=>e.nom).join(` + `),rejointes:[],creees:[],retirees:[],suggestions:[]};for(let e of t.typesRelation??[])r.typesRelation.some(t=>t.id===e.id)||r.typesRelation.push({...structuredClone(e),origine:{pack:i,element:e.id}});let s=new Map,c=new Set,l=new Map(r.techniques.filter(e=>e.origine?.pack===i).map(e=>[e.origine.element,e]));for(let e of t.disciplines){let n=r.disciplines.find(t=>B(t.nom)===B(e.nom))??r.disciplines.find(t=>t.id===e.id);n||(n=structuredClone(e),r.disciplines.push(n));let u=n,d=xt(u.familles,e.familles,i),f=xt(u.niveaux,e.niveaux,i),p=()=>r.techniques.filter(e=>e.disciplineId===u.id),m=new Map;for(let e of p()){let t=B(e.nom);m.set(t,[...m.get(t)??[],e])}for(let n of t.techniques.filter(t=>t.disciplineId===e.id)){let e=n.origine?.element??n.id;c.add(e);let t=l.get(e);if(t){s.set(n.id,t.id),Ct(t,n,d,f),t.nom=n.nom,o.rejointes.push(n.nom);continue}let h=r.techniques.find(e=>e.id===n.id);if(h){s.set(n.id,h.id),Ct(h,n,d,f),o.rejointes.push(n.nom);continue}let g=a.has(B(n.nom)),_=a.get(B(n.nom))??B(n.nom),v=(m.get(_)??[]).filter(e=>e.origine?.pack!==i);if(g){if(v.length===0)throw new vt(`Règle « ${n.nom} » → « ${_} » : aucune identité cible dans « ${u.nom} »`);if(v.length===1){let e=v[0];s.set(n.id,e.id),Ct(e,n,d,f),o.rejointes.push(n.nom);continue}o.suggestions.push({nom:n.nom,candidats:v.map(e=>e.nom),motif:`ambigu`})}else if(v.length>1)o.suggestions.push({nom:n.nom,candidats:v.map(e=>e.nom),motif:`ambigu`});else if(v.length===0){let e=p().filter(e=>e.origine?.pack!==i&&yt(B(e.nom),B(n.nom),2)<=2).map(e=>e.nom);e.length&&o.suggestions.push({nom:n.nom,candidats:e,motif:`quasi-correspondance`})}let y={...structuredClone(n),disciplineId:u.id,niveauxIds:n.niveauxIds.map(e=>f.get(e)??e),relations:[],origine:{pack:i,element:e}};n.familleId?y.familleId=d.get(n.familleId)??n.familleId:delete y.familleId,r.techniques.push(y),m.set(B(y.nom),[...m.get(B(y.nom))??[],y]),s.set(n.id,y.id),o.creees.push(n.nom)}}for(let[e,t]of l)c.has(e)||(r.contributions=r.contributions.filter(t=>!(t.origine?.pack===i&&t.origine.element===e)),r.contributions.some(e=>e.techniqueId===t.id)||(r.techniques=r.techniques.filter(e=>e.id!==t.id),o.retirees.push(t.nom)));for(let e of t.contributions){let t=e.origine?.element??e.id,n=e.techniqueId?s.get(e.techniqueId)??null:null,a=r.contributions.find(n=>n.origine?.pack===i&&n.origine.element===t||n.id===e.id);a?Object.assign(a,structuredClone(e),{id:a.id,techniqueId:n,origine:{pack:i,element:t}}):r.contributions.push({...structuredClone(e),techniqueId:n,origine:{pack:i,element:t}})}let u=new Map(r.compositions.filter(e=>e.origine?.pack===i).map(e=>[e.origine.element,e])),d=new Set;for(let e of t.compositions??[]){let t=e.origine?.element??e.id;d.add(t);let n=e.blocs.map(e=>e.type===`technique`&&e.techniqueId?{...structuredClone(e),techniqueId:s.get(e.techniqueId)??e.techniqueId}:structuredClone(e)),a=u.get(t)??r.compositions.find(t=>t.id===e.id);a?Object.assign(a,structuredClone(e),{id:a.id,blocs:n,origine:{pack:i,element:t}}):r.compositions.push({...structuredClone(e),blocs:n,origine:{pack:i,element:t}})}for(let[e,t]of u)d.has(e)||(r.compositions=r.compositions.filter(e=>e.id!==t.id));for(let e of t.techniques){let t=s.get(e.id),n=r.techniques.find(e=>e.id===t);for(let t of e.relations){let e={type:t.type,cibleId:s.get(t.cibleId)??t.cibleId};e.cibleId!==n.id&&(n.relations.some(t=>t.type===e.type&&t.cibleId===e.cibleId)||n.relations.push(e))}}return _t(r),{bibliotheque:r,rapport:o}}function Ct(e,t,n,r){!e.nomTraditionnel&&t.nomTraditionnel&&(e.nomTraditionnel=t.nomTraditionnel),!e.mediaPrincipalId&&t.mediaPrincipalId&&(e.mediaPrincipalId=t.mediaPrincipalId),!e.familleId&&t.familleId&&(e.familleId=n.get(t.familleId)??t.familleId);for(let n of t.niveauxIds){let t=r.get(n)??n;e.niveauxIds.includes(t)||e.niveauxIds.push(t)}}var H=Uint8Array,wt=Uint16Array,Tt=Int32Array,Et=new H([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Dt=new H([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Ot=new H([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),kt=function(e,t){for(var n=new wt(31),r=0;r<31;++r)n[r]=t+=1<<e[r-1];for(var i=new Tt(n[30]),r=1;r<30;++r)for(var a=n[r];a<n[r+1];++a)i[a]=a-n[r]<<5|r;return{b:n,r:i}},At=kt(Et,2),jt=At.b,Mt=At.r;jt[28]=258,Mt[258]=28;for(var Nt=kt(Dt,0),Pt=Nt.b,Ft=Nt.r,It=new wt(32768),U=0;U<32768;++U){var Lt=(U&43690)>>1|(U&21845)<<1;Lt=(Lt&52428)>>2|(Lt&13107)<<2,Lt=(Lt&61680)>>4|(Lt&3855)<<4,It[U]=((Lt&65280)>>8|(Lt&255)<<8)>>1}for(var Rt=(function(e,t,n){for(var r=e.length,i=0,a=new wt(t);i<r;++i)e[i]&&++a[e[i]-1];var o=new wt(t);for(i=1;i<t;++i)o[i]=o[i-1]+a[i-1]<<1;var s;if(n){s=new wt(1<<t);var c=15-t;for(i=0;i<r;++i)if(e[i])for(var l=i<<4|e[i],u=t-e[i],d=o[e[i]-1]++<<u,f=d|(1<<u)-1;d<=f;++d)s[It[d]>>c]=l}else for(s=new wt(r),i=0;i<r;++i)e[i]&&(s[i]=It[o[e[i]-1]++]>>15-e[i]);return s}),zt=new H(288),U=0;U<144;++U)zt[U]=8;for(var U=144;U<256;++U)zt[U]=9;for(var U=256;U<280;++U)zt[U]=7;for(var U=280;U<288;++U)zt[U]=8;for(var Bt=new H(32),U=0;U<32;++U)Bt[U]=5;var Vt=Rt(zt,9,0),Ht=Rt(zt,9,1),Ut=Rt(Bt,5,0),Wt=Rt(Bt,5,1),Gt=function(e){for(var t=e[0],n=1;n<e.length;++n)e[n]>t&&(t=e[n]);return t},Kt=function(e,t,n){var r=t/8|0;return(e[r]|e[r+1]<<8)>>(t&7)&n},qt=function(e,t){var n=t/8|0;return(e[n]|e[n+1]<<8|e[n+2]<<16)>>(t&7)},Jt=function(e){return(e+7)/8|0},Yt=function(e,t,n){return(t==null||t<0)&&(t=0),(n==null||n>e.length)&&(n=e.length),new H(e.subarray(t,n))},Xt=[`unexpected EOF`,`invalid block type`,`invalid length/literal`,`invalid distance`,`stream finished`,`no stream handler`,,`no callback`,`invalid UTF-8 data`,`extra field too long`,`date not in range 1980-2099`,`filename too long`,`stream finishing`,`invalid zip data`],W=function(e,t,n){var r=Error(t||Xt[e]);if(r.code=e,Error.captureStackTrace&&Error.captureStackTrace(r,W),!n)throw r;return r},Zt=function(e,t,n,r){var i=e.length,a=r?r.length:0;if(!i||t.f&&!t.l)return n||new H(0);var o=!n,s=o||t.i!=2,c=t.i;o&&(n=new H(i*3));var l=function(e){var t=n.length;if(e>t){var r=new H(Math.max(t*2,e));r.set(n),n=r}},u=t.f||0,d=t.p||0,f=t.b||0,p=t.l,m=t.d,h=t.m,g=t.n,_=i*8;do{if(!p){u=Kt(e,d,1);var v=Kt(e,d+1,3);if(d+=3,!v){var y=Jt(d)+4,b=e[y-4]|e[y-3]<<8,x=y+b;if(x>i){c&&W(0);break}s&&l(f+b),n.set(e.subarray(y,x),f),t.b=f+=b,t.p=d=x*8,t.f=u;continue}else if(v==1)p=Ht,m=Wt,h=9,g=5;else if(v==2){var S=Kt(e,d,31)+257,C=Kt(e,d+10,15)+4,w=S+Kt(e,d+5,31)+1;d+=14;for(var T=new H(w),E=new H(19),D=0;D<C;++D)E[Ot[D]]=Kt(e,d+D*3,7);d+=C*3;for(var O=Gt(E),ee=(1<<O)-1,te=Rt(E,O,1),D=0;D<w;){var k=te[Kt(e,d,ee)];d+=k&15;var y=k>>4;if(y<16)T[D++]=y;else{var A=0,j=0;for(y==16?(j=3+Kt(e,d,3),d+=2,A=T[D-1]):y==17?(j=3+Kt(e,d,7),d+=3):y==18&&(j=11+Kt(e,d,127),d+=7);j--;)T[D++]=A}}var M=T.subarray(0,S),N=T.subarray(S);h=Gt(M),g=Gt(N),p=Rt(M,h,1),m=Rt(N,g,1)}else W(1);if(d>_){c&&W(0);break}}s&&l(f+131072);for(var ne=(1<<h)-1,P=(1<<g)-1,re=d;;re=d){var A=p[qt(e,d)&ne],ie=A>>4;if(d+=A&15,d>_){c&&W(0);break}if(A||W(2),ie<256)n[f++]=ie;else if(ie==256){re=d,p=null;break}else{var F=ie-254;if(ie>264){var D=ie-257,I=Et[D];F=Kt(e,d,(1<<I)-1)+jt[D],d+=I}var ae=m[qt(e,d)&P],oe=ae>>4;ae||W(3),d+=ae&15;var N=Pt[oe];if(oe>3){var I=Dt[oe];N+=qt(e,d)&(1<<I)-1,d+=I}if(d>_){c&&W(0);break}s&&l(f+131072);var L=f+F;if(f<N){var se=a-N,R=Math.min(N,L);for(se+f<0&&W(3);f<R;++f)n[f]=r[se+f]}for(;f<L;++f)n[f]=n[f-N]}}t.l=p,t.p=re,t.b=f,t.f=u,p&&(u=1,t.m=h,t.d=m,t.n=g)}while(!u);return f!=n.length&&o?Yt(n,0,f):n.subarray(0,f)},Qt=function(e,t,n){n<<=t&7;var r=t/8|0;e[r]|=n,e[r+1]|=n>>8},$t=function(e,t,n){n<<=t&7;var r=t/8|0;e[r]|=n,e[r+1]|=n>>8,e[r+2]|=n>>16},en=function(e,t){for(var n=[],r=0;r<e.length;++r)e[r]&&n.push({s:r,f:e[r]});var i=n.length,a=n.slice();if(!i)return{t:cn,l:0};if(i==1){var o=new H(n[0].s+1);return o[n[0].s]=1,{t:o,l:1}}n.sort(function(e,t){return e.f-t.f}),n.push({s:-1,f:25001});var s=n[0],c=n[1],l=0,u=1,d=2;for(n[0]={s:-1,f:s.f+c.f,l:s,r:c};u!=i-1;)s=n[n[l].f<n[d].f?l++:d++],c=n[l!=u&&n[l].f<n[d].f?l++:d++],n[u++]={s:-1,f:s.f+c.f,l:s,r:c};for(var f=a[0].s,r=1;r<i;++r)a[r].s>f&&(f=a[r].s);var p=new wt(f+1),m=tn(n[u-1],p,0);if(m>t){var r=0,h=0,g=m-t,_=1<<g;for(a.sort(function(e,t){return p[t.s]-p[e.s]||e.f-t.f});r<i;++r){var v=a[r].s;if(p[v]>t)h+=_-(1<<m-p[v]),p[v]=t;else break}for(h>>=g;h>0;){var y=a[r].s;p[y]<t?h-=1<<t-p[y]++-1:++r}for(;r>=0&&h;--r){var b=a[r].s;p[b]==t&&(--p[b],++h)}m=t}return{t:new H(p),l:m}},tn=function(e,t,n){return e.s==-1?Math.max(tn(e.l,t,n+1),tn(e.r,t,n+1)):t[e.s]=n},nn=function(e){for(var t=e.length;t&&!e[--t];);for(var n=new wt(++t),r=0,i=e[0],a=1,o=function(e){n[r++]=e},s=1;s<=t;++s)if(e[s]==i&&s!=t)++a;else{if(!i&&a>2){for(;a>138;a-=138)o(32754);a>2&&(o(a>10?a-11<<5|28690:a-3<<5|12305),a=0)}else if(a>3){for(o(i),--a;a>6;a-=6)o(8304);a>2&&(o(a-3<<5|8208),a=0)}for(;a--;)o(i);a=1,i=e[s]}return{c:n.subarray(0,r),n:t}},rn=function(e,t){for(var n=0,r=0;r<t.length;++r)n+=e[r]*t[r];return n},an=function(e,t,n){var r=n.length,i=Jt(t+2);e[i]=r&255,e[i+1]=r>>8,e[i+2]=e[i]^255,e[i+3]=e[i+1]^255;for(var a=0;a<r;++a)e[i+a+4]=n[a];return(i+4+r)*8},on=function(e,t,n,r,i,a,o,s,c,l,u){Qt(t,u++,n),++i[256];for(var d=en(i,15),f=d.t,p=d.l,m=en(a,15),h=m.t,g=m.l,_=nn(f),v=_.c,y=_.n,b=nn(h),x=b.c,S=b.n,C=new wt(19),w=0;w<v.length;++w)++C[v[w]&31];for(var w=0;w<x.length;++w)++C[x[w]&31];for(var T=en(C,7),E=T.t,D=T.l,O=19;O>4&&!E[Ot[O-1]];--O);var ee=l+5<<3,te=rn(i,zt)+rn(a,Bt)+o,k=rn(i,f)+rn(a,h)+o+14+3*O+rn(C,E)+2*C[16]+3*C[17]+7*C[18];if(c>=0&&ee<=te&&ee<=k)return an(t,u,e.subarray(c,c+l));var A,j,M,N;if(Qt(t,u,1+(k<te)),u+=2,k<te){A=Rt(f,p,0),j=f,M=Rt(h,g,0),N=h;var ne=Rt(E,D,0);Qt(t,u,y-257),Qt(t,u+5,S-1),Qt(t,u+10,O-4),u+=14;for(var w=0;w<O;++w)Qt(t,u+3*w,E[Ot[w]]);u+=3*O;for(var P=[v,x],re=0;re<2;++re)for(var ie=P[re],w=0;w<ie.length;++w){var F=ie[w]&31;Qt(t,u,ne[F]),u+=E[F],F>15&&(Qt(t,u,ie[w]>>5&127),u+=ie[w]>>12)}}else A=Vt,j=zt,M=Ut,N=Bt;for(var w=0;w<s;++w){var I=r[w];if(I>255){var F=I>>18&31;$t(t,u,A[F+257]),u+=j[F+257],F>7&&(Qt(t,u,I>>23&31),u+=Et[F]);var ae=I&31;$t(t,u,M[ae]),u+=N[ae],ae>3&&($t(t,u,I>>5&8191),u+=Dt[ae])}else $t(t,u,A[I]),u+=j[I]}return $t(t,u,A[256]),u+j[256]},sn=new Tt([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),cn=new H(0),ln=function(e,t,n,r,i,a){var o=a.z||e.length,s=new H(r+o+5*(1+Math.ceil(o/7e3))+i),c=s.subarray(r,s.length-i),l=a.l,u=(a.r||0)&7;if(t){u&&(c[0]=a.r>>3);for(var d=sn[t-1],f=d>>13,p=d&8191,m=(1<<n)-1,h=a.p||new wt(32768),g=a.h||new wt(m+1),_=Math.ceil(n/3),v=2*_,y=function(t){return(e[t]^e[t+1]<<_^e[t+2]<<v)&m},b=new Tt(25e3),x=new wt(288),S=new wt(32),C=0,w=0,T=a.i||0,E=0,D=a.w||0,O=0;T+2<o;++T){var ee=y(T),te=T&32767,k=g[ee];if(h[te]=k,g[ee]=te,D<=T){var A=o-T;if((C>7e3||E>24576)&&(A>423||!l)){u=on(e,c,0,b,x,S,w,E,O,T-O,u),E=C=w=0,O=T;for(var j=0;j<286;++j)x[j]=0;for(var j=0;j<30;++j)S[j]=0}var M=2,N=0,ne=p,P=te-k&32767;if(A>2&&ee==y(T-P))for(var re=Math.min(f,A)-1,ie=Math.min(32767,T),F=Math.min(258,A);P<=ie&&--ne&&te!=k;){if(e[T+M]==e[T+M-P]){for(var I=0;I<F&&e[T+I]==e[T+I-P];++I);if(I>M){if(M=I,N=P,I>re)break;for(var ae=Math.min(P,I-2),oe=0,j=0;j<ae;++j){var L=T-P+j&32767,se=L-h[L]&32767;se>oe&&(oe=se,k=L)}}}te=k,k=h[te],P+=te-k&32767}if(N){b[E++]=268435456|Mt[M]<<18|Ft[N];var R=Mt[M]&31,ce=Ft[N]&31;w+=Et[R]+Dt[ce],++x[257+R],++S[ce],D=T+M,++C}else b[E++]=e[T],++x[e[T]]}}for(T=Math.max(T,D);T<o;++T)b[E++]=e[T],++x[e[T]];u=on(e,c,l,b,x,S,w,E,O,T-O,u),l||(a.r=u&7|c[u/8|0]<<3,u-=7,a.h=g,a.p=h,a.i=T,a.w=D)}else{for(var T=a.w||0;T<o+l;T+=65535){var le=T+65535;le>=o&&(c[u/8|0]=l,le=o),u=an(c,u+1,e.subarray(T,le))}a.i=o}return Yt(s,0,r+Jt(u)+i)},un=(function(){for(var e=new Int32Array(256),t=0;t<256;++t){for(var n=t,r=9;--r;)n=(n&1&&-306674912)^n>>>1;e[t]=n}return e})(),dn=function(){var e=-1;return{p:function(t){for(var n=e,r=0;r<t.length;++r)n=un[n&255^t[r]]^n>>>8;e=n},d:function(){return~e}}},fn=function(e,t,n,r,i){if(!i&&(i={l:1},t.dictionary)){var a=t.dictionary.subarray(-32768),o=new H(a.length+e.length);o.set(a),o.set(e,a.length),e=o,i.w=a.length}return ln(e,t.level==null?6:t.level,t.mem==null?i.l?Math.ceil(Math.max(8,Math.min(13,Math.log(e.length)))*1.5):20:12+t.mem,n,r,i)},pn=function(e,t){var n={};for(var r in e)n[r]=e[r];for(var r in t)n[r]=t[r];return n},mn=function(e,t){return e[t]|e[t+1]<<8},hn=function(e,t){return(e[t]|e[t+1]<<8|e[t+2]<<16|e[t+3]<<24)>>>0},gn=function(e,t){return hn(e,t)+hn(e,t+4)*4294967296},G=function(e,t,n){for(;n;++t)e[t]=n,n>>>=8},_n=function(){function e(e,t){if(typeof e==`function`&&(t=e,e={}),this.ondata=t,this.o=e||{},this.s={l:0,i:32768,w:32768,z:32768},this.b=new H(98304),this.o.dictionary){var n=this.o.dictionary.subarray(-32768);this.b.set(n,32768-n.length),this.s.i=32768-n.length}}return e.prototype.p=function(e,t){this.ondata(fn(e,this.o,0,0,this.s),t)},e.prototype.push=function(e,t){this.ondata||W(5),this.s.l&&W(4);var n=e.length+this.s.z;if(n>this.b.length){if(n>2*this.b.length-32768){var r=new H(n&-32768);r.set(this.b.subarray(0,this.s.z)),this.b=r}var i=this.b.length-this.s.z;this.b.set(e.subarray(0,i),this.s.z),this.s.z=this.b.length,this.p(this.b,!1),this.b.set(this.b.subarray(-32768)),this.b.set(e.subarray(i),32768),this.s.z=e.length-i+32768,this.s.i=32766,this.s.w=32768}else this.b.set(e,this.s.z),this.s.z+=e.length;this.s.l=t&1,(this.s.z>this.s.w+8191||t)&&(this.p(this.b,t||!1),this.s.w=this.s.i,this.s.i-=2),t&&(this.s=this.o={},this.b=cn)},e.prototype.flush=function(e){if(this.ondata||W(5),this.s.l&&W(4),this.p(this.b,!1),this.s.w=this.s.i,this.s.i-=2,e){var t=new H(6);t[0]=this.s.r>>3;var n=an(t,this.s.r,cn);this.s.r=0,this.ondata(t.subarray(0,n>>3),!1)}},e}();function vn(e,t){return fn(e,t||{},0,0)}var yn=function(){function e(e,t){typeof e==`function`&&(t=e,e={}),this.ondata=t;var n=e&&e.dictionary&&e.dictionary.subarray(-32768);this.s={i:0,b:n?n.length:0},this.o=new H(32768),this.p=new H(0),n&&this.o.set(n)}return e.prototype.e=function(e){if(this.ondata||W(5),this.d&&W(4),!this.p.length)this.p=e;else if(e.length){var t=new H(this.p.length+e.length);t.set(this.p),t.set(e,this.p.length),this.p=t}},e.prototype.c=function(e){this.s.i=+(this.d=e||!1);var t=this.s.b,n=Zt(this.p,this.s,this.o);this.ondata(Yt(n,t,this.s.b),this.d),this.o=Yt(n,this.s.b-32768),this.s.b=this.o.length,this.p=Yt(this.p,this.s.p/8|0),this.s.p&=7},e.prototype.push=function(e,t){this.e(e),this.c(t)},e}(),bn=function(e,t,n,r){for(var i in e){var a=e[i],o=t+i,s=r;Array.isArray(a)&&(s=pn(r,a[1]),a=a[0]),ArrayBuffer.isView(a)?n[o]=[a,s]:(n[o+=`/`]=[new H(0),s],bn(a,o,n,r))}},xn=typeof TextEncoder<`u`&&new TextEncoder,Sn=typeof TextDecoder<`u`&&new TextDecoder;try{Sn.decode(cn,{stream:!0})}catch{}var Cn=function(e){for(var t=``,n=0;;){var r=e[n++],i=(r>127)+(r>223)+(r>239);if(n+i>e.length)return{s:t,r:Yt(e,n-1)};i?i==3?(r=((r&15)<<18|(e[n++]&63)<<12|(e[n++]&63)<<6|e[n++]&63)-65536,t+=String.fromCharCode(55296|r>>10,56320|r&1023)):i&1?t+=String.fromCharCode((r&31)<<6|e[n++]&63):t+=String.fromCharCode((r&15)<<12|(e[n++]&63)<<6|e[n++]&63):t+=String.fromCharCode(r)}};function wn(e,t){if(t){for(var n=new H(e.length),r=0;r<e.length;++r)n[r]=e.charCodeAt(r);return n}if(xn)return xn.encode(e);for(var i=e.length,a=new H(e.length+(e.length>>1)),o=0,s=function(e){a[o++]=e},r=0;r<i;++r){if(o+5>a.length){var c=new H(o+8+(i-r<<1));c.set(a),a=c}var l=e.charCodeAt(r);l<128||t?s(l):l<2048?(s(192|l>>6),s(128|l&63)):l>55295&&l<57344?(l=65536+(l&1047552)|e.charCodeAt(++r)&1023,s(240|l>>18),s(128|l>>12&63),s(128|l>>6&63),s(128|l&63)):(s(224|l>>12),s(128|l>>6&63),s(128|l&63))}return Yt(a,0,o)}function Tn(e,t){if(t){for(var n=``,r=0;r<e.length;r+=16384)n+=String.fromCharCode.apply(null,e.subarray(r,r+16384));return n}else if(Sn)return Sn.decode(e);else{var i=Cn(e),a=i.s,n=i.r;return n.length&&W(8),a}}var En=function(e){return e==1?3:e<6?2:+(e==9)},Dn=function(e,t,n,r,i,a,o){var s=i==4294967295,c=a==4294967295,l=o==4294967295,u=t+n,d=s+c+l;if(r&&d){for(;t+4<u;t+=4+mn(e,t+2))if(mn(e,t)==1)return[s?gn(e,t+4+8*c):i,c?gn(e,t+4):a,l?gn(e,t+4+8*(c+s)):o,1];r<2&&W(13)}return[i,a,o,0]},On=function(e){var t=0;if(e)for(var n in e){var r=e[n].length;r>65535&&W(9),t+=r+4}return t},kn=function(e,t,n,r,i,a,o,s){var c=r.length,l=n.extra,u=s&&s.length,d=On(l);G(e,t,o==null?67324752:33639248),t+=4,o!=null&&(e[t++]=20,e[t++]=n.os),e[t]=20,t+=2,e[t++]=n.flag<<1|(a<0&&8),e[t++]=i&&8,e[t++]=n.compression&255,e[t++]=n.compression>>8;var f=new Date(n.mtime==null?Date.now():n.mtime),p=f.getFullYear()-1980;if((p<0||p>119)&&W(10),G(e,t,p<<25|f.getMonth()+1<<21|f.getDate()<<16|f.getHours()<<11|f.getMinutes()<<5|f.getSeconds()>>1),t+=4,a!=-1&&(G(e,t,n.crc),G(e,t+4,a<0?-a-2:a),G(e,t+8,n.size)),G(e,t+12,c),G(e,t+14,d),t+=16,o!=null&&(G(e,t,u),G(e,t+6,n.attrs),G(e,t+10,o),t+=14),e.set(r,t),t+=c,d)for(var m in l){var h=l[m],g=h.length;G(e,t,+m),G(e,t+2,g),e.set(h,t+4),t+=4+g}return u&&(e.set(s,t),t+=u),t},An=function(e,t,n,r,i){G(e,t,101010256),G(e,t+8,n),G(e,t+10,n),G(e,t+12,r),G(e,t+16,i)},jn=function(){function e(e){this.filename=e,this.c=dn(),this.size=0,this.compression=0}return e.prototype.process=function(e,t){this.ondata(null,e,t)},e.prototype.push=function(e,t){this.ondata||W(5),this.c.p(e),this.size+=e.length,t&&(this.crc=this.c.d()),this.process(e,t||!1)},e}(),Mn=function(){function e(e,t){var n=this;t||={},jn.call(this,e),this.d=new _n(t,function(e,t){n.ondata(null,e,t)}),this.compression=8,this.flag=En(t.level)}return e.prototype.process=function(e,t){try{this.d.push(e,t)}catch(e){this.ondata(e,null,t)}},e.prototype.push=function(e,t){jn.prototype.push.call(this,e,t)},e}(),Nn=function(){function e(e){this.ondata=e,this.u=[],this.d=1}return e.prototype.add=function(e){var t=this;if(this.ondata||W(5),this.d&2)this.ondata(W(4+(this.d&1)*8,0,1),null,!1);else{var n=wn(e.filename),r=n.length,i=e.comment,a=i&&wn(i),o=r!=e.filename.length||a&&i.length!=a.length,s=r+On(e.extra)+30;r>65535&&this.ondata(W(11,0,1),null,!1);var c=new H(s);kn(c,0,e,n,o,-1);var l=[c],u=function(){for(var e=0,n=l;e<n.length;e++){var r=n[e];t.ondata(null,r,!1)}l=[]},d=this.d;this.d=0;var f=this.u.length,p=pn(e,{f:n,u:o,o:a,t:function(){e.terminate&&e.terminate()},r:function(){if(u(),d){var e=t.u[f+1];e?e.r():t.d=1}d=1}}),m=0;e.ondata=function(n,r,i){if(n)t.ondata(n,r,i),t.terminate();else if(m+=r.length,l.push(r),i){var a=new H(16);G(a,0,134695760),G(a,4,e.crc),G(a,8,m),G(a,12,e.size),l.push(a),p.c=m,p.b=s+m+16,p.crc=e.crc,p.size=e.size,d&&p.r(),d=1}else d&&u()},this.u.push(p)}},e.prototype.end=function(){var e=this;if(this.d&2){this.ondata(W(4+(this.d&1)*8,0,1),null,!0);return}this.d?this.e():this.u.push({r:function(){e.d&1&&(e.u.splice(-1,1),e.e())},t:function(){}}),this.d=3},e.prototype.e=function(){for(var e=0,t=0,n=0,r=0,i=this.u;r<i.length;r++){var a=i[r];n+=46+a.f.length+On(a.extra)+(a.o?a.o.length:0)}for(var o=new H(n+22),s=0,c=this.u;s<c.length;s++){var a=c[s];kn(o,e,a,a.f,a.u,-a.c-2,t,a.o),e+=46+a.f.length+On(a.extra)+(a.o?a.o.length:0),t+=a.b}An(o,e,this.u.length,n,t),this.ondata(null,o,!0),this.d=2},e.prototype.terminate=function(){for(var e=0,t=this.u;e<t.length;e++)t[e].t();this.d=2},e}();function Pn(e,t){t||={};var n={},r=[];bn(e,``,n,t);var i=0,a=0;for(var o in n){var s=n[o],c=s[0],l=s[1],u=l.level==0?0:8,d=wn(o),f=d.length,p=l.comment,m=p&&wn(p),h=m&&m.length,g=On(l.extra);f>65535&&W(11);var _=u?vn(c,l):c,v=_.length,y=dn();y.p(c),r.push(pn(l,{size:c.length,crc:y.d(),c:_,f:d,m,u:f!=o.length||m&&p.length!=h,o:i,compression:u})),i+=30+f+g+v,a+=76+2*(f+g)+(h||0)+v}for(var b=new H(a+22),x=i,S=a-i,C=0;C<r.length;++C){var d=r[C];kn(b,d.o,d,d.f,d.u,d.c.length);var w=30+d.f.length+On(d.extra);b.set(d.c,d.o+w),kn(b,i,d,d.f,d.u,d.c.length,d.o,d.m),i+=16+w+(d.m?d.m.length:0)}return An(b,i,r.length,S,x),b}var Fn=function(){function e(){}return e.prototype.push=function(e,t){this.ondata(null,e,t)},e.compression=0,e}(),In=function(){function e(){var e=this;this.i=new yn(function(t,n){e.ondata(null,t,n)})}return e.prototype.push=function(e,t){try{this.i.push(e,t)}catch(e){this.ondata(e,null,t)}},e.compression=8,e}(),Ln=function(){function e(e){this.onfile=e,this.k=[],this.o={0:Fn},this.p=cn}return e.prototype.push=function(e,t){var n=this;if(this.onfile||W(5),this.p||W(4),this.c>0){var r=Math.min(this.c,e.length),i=e.subarray(0,r);if(this.c-=r,this.d?this.d.push(i,!this.c):this.k[0].push(i),e=e.subarray(r),e.length)return this.push(e,t)}else{var a=0,o=0,s=void 0,c=void 0;this.p.length?e.length?(c=new H(this.p.length+e.length),c.set(this.p),c.set(e,this.p.length)):c=this.p:c=e;for(var l=c.length,u=this.c,d=u&&this.d,f=function(){var e=hn(c,o);if(e==67324752){a=1,s=o,p.d=null,p.c=0;var t=mn(c,o+6),r=mn(c,o+8),i=t&2048,d=t&8,f=mn(c,o+26),m=mn(c,o+28);if(l>o+30+f+m){var h=[];p.k.unshift(h),a=2;var g=hn(c,o+18),_=hn(c,o+22),v=Tn(c.subarray(o+30,o+=30+f),!i),y=Dn(c,o,m,2,g,_,0),b=y[0],x=y[1],S=y[3];d&&(b=-1-S),o+=m,p.c=b;var C,w={name:v,compression:r,start:function(){if(w.ondata||W(5),!b)w.ondata(null,cn,!0);else{var e=n.o[r];e||w.ondata(W(14,`unknown compression type `+r,1),null,!1),C=b<0?new e(v):new e(v,b,x),C.ondata=function(e,t,n){w.ondata(e,t,n)};for(var t=0,i=h;t<i.length;t++){var a=i[t];C.push(a,!1)}n.k[0]==h&&n.c?n.d=C:C.push(cn,!0)}},terminate:function(){C&&C.terminate&&C.terminate()}};b>=0&&(w.size=b,w.originalSize=x),p.onfile(w)}return`break`}else if(u){if(e==134695760)return s=o+=12+(u==-2&&8),a=3,p.c=0,`break`;if(e==33639248)return s=o-=4,a=3,p.c=0,`break`}},p=this;o<l-4&&f()!==`break`;++o);if(this.p=cn,u<0){var m=a?c.subarray(0,s-12-(u==-2&&8)-(hn(c,s-16)==134695760&&4)):c.subarray(0,o);d?d.push(m,!!a):this.k[+(a==2)].push(m)}if(a&2)return this.push(c.subarray(o),t);this.p=c.subarray(o)}t&&(this.c&&W(13),this.p=null)},e.prototype.register=function(e){this.o[e.compression]=e},e}(),K=class extends Error{constructor(e){super(e),this.name=`ErreurMovpack`}};function Rn(e){return e.length>3&&e[0]===80&&e[1]===75}function zn(e){return(e.startsWith(`medias/`)||e.startsWith(`videos/`))&&e.length>7}function Bn(e){let t=e.slice(e.indexOf(`/`)+1),n=t.indexOf(`.`);return n===-1?t:t.slice(0,n)}function Vn(e,t){let n=e.get(t)?.media.extension;return n?`medias/${t}.${n}`:`medias/${t}`}function Hn(e,t,n,r,i,a,o){return{format:`movpack`,version:4,id:t.id,nom:t.nom,portee:t.portee,...t.auteur?{auteur:t.auteur}:{},...t.conditions?{conditions:t.conditions}:{},creeLe:o,versionSchema:e.versionSchema,empreinte:i,videos:n,versionEditoriale:t.versionEditoriale??1,algorithme:`SHA-256`,inclusions:{medias:a,contenuPersonnel:t.portee===`complet`},fichiers:r}}async function Un(e,t,n){_t(e);let r=new TextEncoder().encode(JSON.stringify(e)),i=Xe(r),a=Me(e),o=[{chemin:`bibliotheque.json`,taille:r.length,sha256:i}];for(let[e,t]of n)o.push({chemin:Vn(a,e),taille:t.length,sha256:Xe(t)});let s=Hn(e,t,[...n.keys()],o,i,n.size>0,new Date().toISOString()),c={"manifeste.json":new TextEncoder().encode(JSON.stringify(s,null,2)),"bibliotheque.json":r};for(let[e,t]of n)c[Vn(a,e)]=[t,{level:0}];return Pn(c,{level:6})}async function Wn(e,t,n,r,i,a){_t(e);let o=Me(e),s=new TextEncoder().encode(JSON.stringify(e)),c=[{chemin:`bibliotheque.json`,taille:s.length,sha256:Xe(s)}],l=[],u=null,d=new Nn((e,t)=>{e?u=e:t&&t.length&&l.push(t)}),f=async()=>{if(u)throw new K(`Compression du conteneur échouée : ${u.message}`);let e=l;l=[];for(let t of e)await i.ecrire(t)},p=()=>{if(a.estAnnule?.())throw new K(`Export annulé`)},m=new Mn(`bibliotheque.json`,{level:6});d.add(m),m.push(s,!0),await f();for(let e of n){p();let t=Vn(o,e),i=new jn(t);d.add(i);let s=new Ye,l=0,u=null;for await(let t of r(e))u&&(i.push(u,!1),s.update(u),l+=u.length,await f(),p()),u=t;u?(i.push(u,!0),s.update(u),l+=u.length):i.push(new Uint8Array,!0),await f(),c.push({chemin:t,taille:l,sha256:s.digestHex()}),a.surProgression?.(c.length-1,n.length)}let h=Hn(e,t,n,c,c[0].sha256,n.length>0,a.creeLe),g=new Mn(`manifeste.json`,{level:6});return d.add(g),g.push(new TextEncoder().encode(JSON.stringify(h,null,2)),!0),await f(),d.end(),await f(),h}function Gn(e){if(e.length===1)return e[0];let t=0;for(let n of e)t+=n.length;let n=new Uint8Array(t),r=0;for(let t of e)n.set(t,r),r+=t.length;return n}async function Kn(e,t,n={}){let r=null,i=null,a=new Map,o=new Set,s=[],c=null,l=new Ln;l.register(In),l.onfile=e=>{s.push({t:`debut`,nom:e.name}),e.ondata=(t,n,r)=>{t?c=t:s.push({t:`donnee`,nom:e.name,bloc:n,final:r})},e.start()};let u=null,d=null,f=async()=>{for(;s.length;){let e=s.shift();if(e.t===`debut`)if(o.add(e.nom),zn(e.nom)){let n=e.nom.slice(e.nom.indexOf(`/`)+1);u={chemin:e.nom,id:Bn(e.nom),nomPhysique:n,hacheur:new Ye,taille:0},await t.ouvrir(n)}else d={nom:e.nom,garder:e.nom===`manifeste.json`||e.nom===`bibliotheque.json`,morceaux:[]};else if(u&&e.nom===u.chemin)e.bloc.length&&(u.hacheur.update(e.bloc),u.taille+=e.bloc.length,await t.ecrire(e.bloc)),e.final&&(await t.fermer(),a.set(u.chemin,{id:u.id,nomPhysique:u.nomPhysique,taille:u.taille,sha256:u.hacheur.digestHex()}),u=null);else if(d&&e.nom===d.nom&&(d.garder&&e.bloc.length&&d.morceaux.push(e.bloc.slice()),e.final)){if(d.garder){let e=Gn(d.morceaux);d.nom===`manifeste.json`?r=e:i=e}d=null}}},p=()=>new K(`Fichier illisible : pas une archive .movpack valide`);try{let t=e.getReader();for(;;){if(n.estAnnule?.())throw new K(`Import annulé`);let{done:e,value:r}=await t.read();try{l.push(r??new Uint8Array,e)}catch{throw p()}if(c)throw p();if(await f(),e)break}let s=r,u=i;if(!s||!u)throw new K(`Archive incomplète : manifeste.json et bibliotheque.json attendus`);let d=JSON.parse(new TextDecoder().decode(s));if(d.format!==`movpack`)throw new K(`Manifeste inconnu : pas un .movpack`);if(d.version>4)throw new K(`Conteneur .movpack v${d.version}, plus récent que l'application (v4) — mettre à jour l'application`);let m=[],h;if(d.fichiers&&d.fichiers.length){let e=new Set([`manifeste.json`]),t=!1;h=[];for(let n of d.fichiers)if(e.add(n.chemin),n.chemin===`bibliotheque.json`){if(u.length!==n.taille)throw new K(`Taille inattendue : bibliotheque.json (${u.length} octets, ${n.taille} attendus)`);if(Xe(u)!==n.sha256)throw new K(`Intégrité en échec : bibliotheque.json ne correspond pas à son empreinte`);t=!0}else{let e=a.get(n.chemin);if(!e)throw new K(`Fichier manquant : ${n.chemin} est déclaré mais absent de l'archive`);if(e.taille!==n.taille)throw new K(`Taille inattendue : ${n.chemin} (${e.taille} octets, ${n.taille} attendus)`);if(e.sha256!==n.sha256)throw new K(`Intégrité en échec : ${n.chemin} ne correspond pas à son empreinte`);h.push(e)}if(!t)throw new K(`Manifeste incomplet : bibliotheque.json absent de l'inventaire d'intégrité`);for(let t of o)e.has(t)||m.push(`Fichier inattendu ignoré : ${t}`)}else{if(Xe(u)!==d.empreinte)throw new K(`Intégrité en échec : le contenu ne correspond pas à l'empreinte du manifeste`);h=[...a.values()]}let g=ot(JSON.parse(new TextDecoder().decode(u)));return _t(g),{manifeste:d,bibliotheque:g,medias:h,avertissements:m}}catch(e){throw await t.abandonner(),e instanceof K?e:p()}}function q(e){return e.origine?.pack??`local`}function qn(e,t,n=new Set([`local`]),r,i={}){let a=e.disciplines.find(e=>e.id===t);if(!a)throw new K(`Discipline introuvable`);let o=e=>!r||r.has(e),s=e.contributions.filter(e=>e.provenance!==`personnel`&&e.techniqueId!==null&&o(e.techniqueId)&&n.has(q(e))),c=new Set(s.map(e=>e.techniqueId)),l=e.techniques.filter(e=>e.disciplineId===t&&o(e.id)&&(n.has(q(e))||c.has(e.id))),u=new Set(l.map(e=>e.id)),d=[],f=l.map(e=>{let t=structuredClone(e);return t.relations=e.relations.filter(t=>u.has(t.cibleId)?!0:(d.push({techniqueId:e.id,techniqueNom:e.nom,type:t.type,cibleId:t.cibleId}),!1)),t}),p={versionSchema:e.versionSchema,typesRelation:structuredClone(e.typesRelation),disciplines:[structuredClone(a)],techniques:f,contributions:structuredClone(s.filter(e=>u.has(e.techniqueId))),compositions:structuredClone(e.compositions.filter(e=>{let t=e.blocs.filter(e=>e.type===`technique`&&e.techniqueId),r=t.length>0&&t.every(e=>u.has(e.techniqueId));return e.provenance===`personnel`?(i.compositionsPersonnelles??!1)&&r:r||n.has(q(e))})),favoris:[]};return _t(p),{extrait:p,relationsExclues:d}}function Jn(e,t){let n=e.techniques.find(e=>e.id===t);if(!n)throw new K(`Technique introuvable`);let r=e.disciplines.find(e=>e.id===n.disciplineId);if(!r)throw new K(`Discipline introuvable`);let i=e.contributions.filter(e=>e.techniqueId===n.id&&e.provenance!==`personnel`),a=[],o=structuredClone(n);o.relations=n.relations.filter(e=>e.cibleId===n.id?!0:(a.push({techniqueId:n.id,techniqueNom:n.nom,type:e.type,cibleId:e.cibleId}),!1));let s={versionSchema:e.versionSchema,typesRelation:structuredClone(e.typesRelation),disciplines:[structuredClone(r)],techniques:[o],contributions:structuredClone(i),compositions:[],favoris:[]};return _t(s),{extrait:s,relationsExclues:a}}function Yn(e,t){let n=e.compositions.find(e=>e.id===t);if(!n)throw new K(`Composition introuvable`);let r=new Set(n.blocs.filter(e=>e.type===`technique`&&e.techniqueId).map(e=>e.techniqueId)),i=e.techniques.filter(e=>r.has(e.id)),a=new Set(i.map(e=>e.disciplineId)),o={versionSchema:e.versionSchema,typesRelation:structuredClone(e.typesRelation),disciplines:structuredClone(e.disciplines.filter(e=>a.has(e.id))),techniques:structuredClone(i),contributions:[],compositions:[structuredClone(n)],favoris:[]};return _t(o),o}function Xn(e){return`pack-${B(e)}`}function Zn(e){return`pack-${e}`}var Qn=`bibliotheque.json`,$n=`bibliotheque.json.tmp`,er=`preferences.json`,tr=`videos`,nr=`staging`,rr=`import`,ir=`sauvegardes`,ar=10;function or(e,t){return t?`${e}.${t}`:e}function sr(e){let t=e.indexOf(`.`);return t===-1?e:e.slice(0,t)}function cr(){return{version:1,demarrage:{mode:`bibliotheque`}}}function lr(e){if(typeof e!=`object`||!e)return cr();let t=e;return t.version!==1||!t.demarrage?.mode?cr():t.demarrage.mode===`accueil`?{...t,demarrage:{mode:`bibliotheque`}}:t}async function J(){return navigator.storage.getDirectory()}async function ur(e){try{return await(await(await(await J()).getFileHandle(e)).getFile()).text()}catch{return null}}async function dr(e,t){let n=await(await(await J()).getFileHandle(e,{create:!0})).createWritable();await n.write(t),await n.close()}async function fr(e){try{await(await J()).removeEntry(e)}catch{}}var pr=class{#e=!1;#t=Promise.resolve();async charger(){await this.reprendreTransactionInachevee();let e=await ur(Qn);if(e===null)return null;let t=ot(JSON.parse(e));return _t(t),t}async reprendreTransactionInachevee(){return await ur($n)===null?!1:(await fr($n),!0)}async sauvegarder(e){_t(e);let t=this.#t,n=(async()=>{await t.catch(()=>{}),this.#e||=(await this.snapshot(`debut-de-session`),!0);let n=JSON.stringify(e);await dr($n,n);let r=await ur($n);if(r!==n)throw Error(`Écriture d'état incohérente — bascule annulée, état courant conservé`);_t(ot(JSON.parse(r))),await dr(Qn,r),await fr($n)})();this.#t=n,await n}async chargerPreferences(){let e=await ur(er);if(e===null)return cr();try{let t=JSON.parse(e),n=lr(t);return t?.demarrage?.mode===`accueil`&&await this.sauvegarderPreferences(n),n}catch{return cr()}}async sauvegarderPreferences(e){await dr(er,JSON.stringify(e))}async snapshot(e=`session`){let t=await ur(Qn);if(t===null)return;let n=await(await J()).getDirectoryHandle(ir,{create:!0}),r=e.toLowerCase().normalize(`NFD`).replace(/[\u0300-\u036f]/g,``).replace(/[^a-z0-9]+/g,`-`).slice(0,40),i=new Date().toISOString().replaceAll(`:`,`-`)+`__`+r+`.json`,a=await(await n.getFileHandle(i,{create:!0})).createWritable();await a.write(t),await a.close();let o=[];for await(let[e]of n)o.push(e);for(let e of o.sort().slice(0,Math.max(0,o.length-ar)))await n.removeEntry(e)}async listerSauvegardes(){try{let e=await(await J()).getDirectoryHandle(ir),t=[];for await(let[n]of e)t.push(n);return t.sort().reverse()}catch{return[]}}async restaurerSauvegarde(e){let t=await(await(await(await(await J()).getDirectoryHandle(ir)).getFileHandle(e)).getFile()).text(),n=ot(JSON.parse(t));return _t(n),await this.snapshot(`avant-restauration`),await dr(Qn,JSON.stringify(n)),n}async#n(e){try{let t=await(await J()).getDirectoryHandle(tr);try{return await t.getFileHandle(e)}catch{for await(let[n,r]of t)if(r.kind===`file`&&n.startsWith(e+`.`))return r;return null}}catch{return null}}async ecrireVideo(e,t,n,r){let i=or(e,n),a=await(await J()).getDirectoryHandle(nr,{create:!0}),o=await a.getFileHandle(i,{create:!0}),s=await o.createWritable(),c=t.size,l=0;await(r&&c>0?t.stream().pipeThrough(new TransformStream({transform(e,t){l+=e.byteLength,r(Math.min(1,l/c)),t.enqueue(e)}})):t.stream()).pipeTo(s),r&&r(1);let u=await(await J()).getDirectoryHandle(tr,{create:!0});try{await o.move(u)}catch{let e=await(await u.getFileHandle(i,{create:!0})).createWritable();await(await o.getFile()).stream().pipeTo(e),await a.removeEntry(i)}}async#r(e=!1){return(await(await J()).getDirectoryHandle(nr,{create:e})).getDirectoryHandle(rr,{create:e})}puitsImport(){let e=this,t=null;return{async ouvrir(n){t=await(await(await e.#r(!0)).getFileHandle(n,{create:!0})).createWritable()},async ecrire(e){await t.write(e)},async fermer(){await t.close(),t=null},async abandonner(){try{t&&await t.close()}catch{}t=null,await e.nettoyerImport()}}}async promouvoirImportMedias(e){if(e.length===0)return;let t=await this.#r(!1),n=await(await J()).getDirectoryHandle(tr,{create:!0});for(let r of e){let e;try{e=await t.getFileHandle(r)}catch{continue}let i=!1;try{await n.getFileHandle(r),i=!0}catch{}if(i){try{await t.removeEntry(r)}catch{}continue}try{await e.move(n)}catch{let i=await(await n.getFileHandle(r,{create:!0})).createWritable();await(await e.getFile()).stream().pipeTo(i);try{await t.removeEntry(r)}catch{}}}}async nettoyerImport(){try{await(await(await J()).getDirectoryHandle(nr)).removeEntry(rr,{recursive:!0})}catch{}}async*lireMediaParBlocs(e,t){let n=await this.#n(e);if(!n)return;let r=await n.getFile();for(let e=0;e<r.size;e+=t){let n=r.slice(e,Math.min(e+t,r.size));yield new Uint8Array(await n.arrayBuffer())}}async ouvrirArchiveTemp(e){return(await(await(await J()).getDirectoryHandle(nr,{create:!0})).getFileHandle(e,{create:!0})).createWritable()}async fichierArchiveTemp(e){return(await(await(await J()).getDirectoryHandle(nr)).getFileHandle(e)).getFile()}async supprimerArchiveTemp(e){try{await(await(await J()).getDirectoryHandle(nr)).removeEntry(e)}catch{}}async nettoyerArchivesTemp(){try{let e=await(await J()).getDirectoryHandle(nr),t=[];for await(let[n]of e)n.startsWith(`export-`)&&n.endsWith(`.movpack`)&&t.push(n);for(let n of t)await e.removeEntry(n)}catch{}}async nettoyerStaging(){try{await(await J()).removeEntry(nr,{recursive:!0})}catch{}}async estimerEspace(){try{let e=await navigator.storage.estimate();return typeof e.usage!=`number`||typeof e.quota!=`number`?null:{usage:e.usage,quota:e.quota}}catch{return null}}async urlVideo(e){let t=await this.#n(e);if(!t)return null;try{return URL.createObjectURL(await t.getFile())}catch{return null}}async lireVideo(e){let t=await this.#n(e);if(!t)return null;try{return new Uint8Array(await(await t.getFile()).arrayBuffer())}catch{return null}}async listerVideos(){try{let e=await(await J()).getDirectoryHandle(tr),t=new Set;for await(let[n]of e)t.add(sr(n));return t}catch{return new Set}}async taillesVideos(){let e=new Map;try{let t=await(await J()).getDirectoryHandle(tr);for await(let[n,r]of t)r.kind===`file`&&e.set(sr(n),(await r.getFile()).size)}catch{}return e}async supprimerVideo(e){let t=await this.#n(e);if(t)try{await(await(await J()).getDirectoryHandle(tr)).removeEntry(t.name)}catch{}}async reinitialiser(){let e=await J();for(let t of[Qn,$n,er])try{await e.removeEntry(t)}catch{}for(let t of[tr,nr,ir])try{await e.removeEntry(t,{recursive:!0})}catch{}}},mr=31e4;function hr(e){if(!/^\d{6,12}$/.test(e))return`Le PIN est une suite de 6 à 12 chiffres`;if(/^(\d)\1+$/.test(e))return`Un même chiffre répété est trop évident`;let t=`01234567890123456789012`,n=[...t].reverse().join(``);return t.includes(e)||n.includes(e)?`Une suite de chiffres est trop évidente`:null}function gr(e){return[...e].map(e=>e.toString(16).padStart(2,`0`)).join(``)}function _r(e){let t=new Uint8Array(e.length/2);for(let n=0;n<t.length;n++)t[n]=parseInt(e.slice(n*2,n*2+2),16);return t}async function vr(e,t,n){let r=await crypto.subtle.importKey(`raw`,new TextEncoder().encode(e),`PBKDF2`,!1,[`deriveBits`]),i=await crypto.subtle.deriveBits({name:`PBKDF2`,hash:`SHA-256`,salt:_r(t),iterations:n},r,256);return gr(new Uint8Array(i))}async function yr(e){let t=hr(e);if(t)throw Error(t);let n=gr(crypto.getRandomValues(new Uint8Array(16)));return{version:1,sel:n,iterations:mr,empreinte:await vr(e,n,mr)}}async function br(e,t){let n=await vr(e,t.sel,t.iterations);if(n.length!==t.empreinte.length)return!1;let r=0;for(let e=0;e<n.length;e++)r|=n.charCodeAt(e)^t.empreinte.charCodeAt(e);return r===0}function xr(e){return e<5?0:Math.min(30,2**(e-4))}function Sr(e,t,n){return e===`consultation`||!(e===`modification`?t.modifications:t.suppressions)||n?`libre`:`pin_requis`}function Cr(e,t,n){return e===null?!1:t===`arriere-plan`||n-e<(t===`15min`?15:5)*6e4}function wr(e,t){return e?.libelle??t}function Tr(e,t){return e?e.symetrique?e.libelle:e.libelleInverse??`${e.libelle} (inverse)`:t}function Er(e,t){let n=new Map(e.typesRelation.map(e=>[e.id,e])),r=new Set(e.techniques.map(e=>e.id)),i=[],a=new Set,o=(e,t,n,o)=>{let s=`${e}:${o}`;a.has(s)||(a.add(s),i.push({libelle:e,typeId:t,directe:n,techniqueId:o,presente:r.has(o)}))},s=e.techniques.find(e=>e.id===t);for(let e of s?.relations??[])o(wr(n.get(e.type),e.type),e.type,!0,e.cibleId);for(let r of e.techniques)if(r.id!==t)for(let e of r.relations)e.cibleId===t&&o(Tr(n.get(e.type),e.type),e.type,!1,r.id);return i}function Dr(e){let t=Math.max(0,Math.round(e)),n=Math.floor(t/60),r=t%60;if(n===0)return`${r} seconde${r>1?`s`:``}`;let i=`${n} minute${n>1?`s`:``}`;return r===0?i:`${i} ${r}`}function Or(e,t){return e>=60&&t===Math.round(e/2)?`mi-temps`:e>40&&t===30?`30 secondes`:e>12&&t===10?`10 secondes`:null}function kr(e,t){return e.compositions.filter(e=>e.blocs.some(e=>e.type===`technique`&&e.techniqueId===t))}function Ar(e,t=`personnel`,n){return{id:z(),nom:e,provenance:t,creeLe:new Date().toISOString(),...n?{type:n}:{},blocs:[]}}function jr(e,t={}){return{id:z(),type:e,...t.techniqueId===void 0?{}:{techniqueId:t.techniqueId},...t.texte===void 0?{}:{texte:t.texte},...t.consigne===void 0?{}:{consigne:t.consigne},...t.dureeSec===void 0?{}:{dureeSec:t.dureeSec},medias:[]}}function Mr(e,t,n){if(t===n)return;let r=e.blocs.findIndex(e=>e.id===t);if(r<0)return;let[i]=e.blocs.splice(r,1),a=e.blocs.findIndex(e=>e.id===n);if(a<0){e.blocs.splice(r,0,i);return}e.blocs.splice(a,0,i)}var Nr=L`<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.8-3.8"/></svg>`;function Pr(){return L`<header class="marque">
    <img class="marque-logo" src="./movenso-mark-sombre.svg" width="40" height="40" alt="" aria-hidden="true">
    <div style="flex:1">
      <div class="nom">Movenso</div>
      <div class="devise">Ta mémoire du mouvement.</div>
    </div>
  </header>`}function Fr(e){if(e===`local`)return`Mon contenu`;let t=e.replace(/^pack-/,``).replaceAll(`-`,` `);return t.charAt(0).toUpperCase()+t.slice(1)}function Ir(e){let t=e.attribution?.trim(),n=e.origine?Fr(q(e)):void 0;return t&&n&&n.length>t.length&&n.toLowerCase().includes(t.toLowerCase())?n:t??n??`Moi`}function Lr(e,t,n){let r=L`<span class="vignette-initiale">${t.nomTraditionnel?.charAt(0)??t.nom.charAt(0)}</span>`,i=e=>e.target.style.display=`none`;if(t.couverture?.type===`image`)return L`<span class="vignette">${r}<img loading="lazy" src=${t.couverture.dataUrl} alt="" @error=${i}></span>`;let a;if(t.couverture?.type===`media`){let n=t.couverture.mediaId;a=e.bibliotheque.contributions.filter(e=>e.techniqueId===t.id).flatMap(e=>e.medias).find(e=>e.id===n)}let o=e.bibliotheque.contributions.filter(e=>e.techniqueId===t.id&&e.provenance!==`personnel`).flatMap(e=>e.medias.map(t=>({media:t,source:q(e)}))).filter(e=>e.media.type===`plateforme`&&e.media.service===`youtube`),s=a??(n?o.find(e=>e.source===n)?.media:void 0)??o[0]?.media;return L`<span class="vignette">
    ${r}
    ${s&&s.type===`plateforme`&&s.service===`youtube`?L`<img loading="lazy" src="https://img.youtube.com/vi/${s.ref}/mqdefault.jpg" alt="" @error=${i}>`:R}
  </span>`}function Rr(e){return L`<span class="puce-niveau" style="background:${e.couleur?e.couleur2?`linear-gradient(90deg, ${e.couleur} 50%, ${e.couleur2} 50%)`:e.couleur:`var(--trait)`}" title=${e.nom}></span>`}function zr(e){let t=new Map;for(let n of e)t.has(n.id)||t.set(n.id,n);return[...t.values()]}function Br(e){return e.nom.trim().toLowerCase().replace(/\s+/g,` `)}function Vr(e){let t=new Set;return e.filter(e=>{let n=Br(e);return t.has(n)?!1:(t.add(n),!0)})}function Hr(e){return{familleParId:new Map(e.disciplines.flatMap(e=>e.familles).map(e=>[e.id,e])),niveauParId:new Map(e.disciplines.flatMap(e=>e.niveaux).map(e=>[e.id,e]))}}function Ur(e){return L`<svg width="20" height="20" viewBox="0 0 24 24" fill=${e?`currentColor`:`none`}
    stroke="currentColor" stroke-width="2" aria-hidden="true">
    <path d="M12 20.5s-7.2-4.6-9.6-9C1 8.8 2.4 5.5 5.6 5.5c2 0 3.2 1.1 4.4 2.7 1.2-1.6 2.4-2.7 4.4-2.7 3.2 0 4.6 3.3 3.2 6-2.4 4.4-9.6 9-9.6 9Z"/>
  </svg>`}function Wr(e,t,n,r){let i=q(t),a=e.estFavori(t.id);return L`<div class="carte-technique">
    <button class="carte-ouvrir" @click=${()=>e.ouvrirFiche(t.id)}>
      <span class="carte-media">${Lr(e,t,i)}</span>
      <span class="carte-nom">${t.nom}</span>
      ${t.nomTraditionnel?L`<span class="carte-jp jp">${t.nomTraditionnel}</span>`:R}
      ${t.niveauxIds.length?L`<span class="carte-sous">
            ${t.niveauxIds.map(e=>{let t=r.get(e);return t?L`<span class="carte-niveau">${Rr(t)}${t.nom}</span>`:R})}
          </span>`:R}
    </button>
    <button class="coeur ${a?`actif`:``}" aria-pressed=${a}
      aria-label=${a?`Retirer des favoris`:`Ajouter aux favoris`} title=${a?`Retirer des favoris`:`Ajouter aux favoris`}
      @click=${n=>{n.stopPropagation(),e.basculerFavori(t.id)}}>${Ur(a)}</button>
  </div>`}function Gr(e){let t=e.preferences.densiteBibliotheque;return t?`grid-template-columns:repeat(${t},1fr)`:``}function Kr(e,t){let n=e.bibliotheque,r=e.filtres,{familleParId:i,niveauParId:a}=Hr(n),o=t=>e.majFiltres({...r,...t}),s=(e,t)=>o({[e]:r[e]===t?null:t}),c=t=>{let i=t?n.disciplines.filter(e=>e.id===t):n.disciplines,o=new Set(i.flatMap(e=>e.familles.map(e=>e.id))),s=new Set(n.techniques.filter(e=>!t||e.disciplineId===t).map(q)),c=r.niveauId?a.get(r.niveauId):void 0,l=c?Br(c):null,u=l?i.flatMap(e=>e.niveaux).find(e=>Br(e)===l)?.id??null:null;e.majFiltres({...r,disciplineId:t,familleId:r.familleId&&o.has(r.familleId)?r.familleId:null,niveauId:u,source:r.source&&s.has(r.source)?r.source:null})},l=t??r.disciplineId??null,u=n.techniques.filter(e=>!l||e.disciplineId===l),d=new Set;for(let e of u)d.add(q(e));let f=l?n.disciplines.filter(e=>e.id===l):n.disciplines,p=zr(f.flatMap(e=>e.familles)).sort((e,t)=>(e.ordre??0)-(t.ordre??0)),m=Vr(f.flatMap(e=>e.niveaux).sort((e,t)=>(e.ordre??0)-(t.ordre??0))),h=r.niveauId?a.get(r.niveauId):void 0,g=h?Br(h):null,_=g?new Set(f.flatMap(e=>e.niveaux).filter(e=>Br(e)===g).map(e=>e.id)):null,v=e=>o({niveauId:g===Br(e)?null:e.id}),y=(r.texte.trim()?rt({...n,techniques:u},r.texte,999):u).filter(e=>!r.familleId||e.familleId===r.familleId).filter(e=>!_||e.niveauxIds.some(e=>_.has(e))).filter(e=>!r.source||q(e)===r.source).filter(t=>!r.favorisSeuls||e.estFavori(t.id)).sort((e,t)=>e.nom.localeCompare(t.nom,`fr`)),b=!t&&r.disciplineId!==null||r.niveauId!==null||r.familleId!==null||r.source!==null||r.favorisSeuls||r.texte.trim()!==``,x=()=>e.majFiltres({disciplineId:t?r.disciplineId:null,niveauId:null,familleId:null,source:null,favorisSeuls:!1,texte:``}),S=!t&&n.disciplines.length>=1?L`<div class="chips-filtres defilable" aria-label="Disciplines">
          <button class="chip-filtre ${r.disciplineId===null?`actif`:``}"
            @click=${()=>c(null)}>Toutes</button>
          ${n.disciplines.map(e=>L`<button class="chip-filtre chip-discipline ${r.disciplineId===e.id?`actif`:``}"
              @click=${()=>c(r.disciplineId===e.id?null:e.id)}>${e.nom}</button>`)}
        </div>`:R;return{corps:L`
    <div class="recherche-ligne">
      <div class="recherche">
        ${Nr}
        <input type="search" placeholder="Rechercher une technique…" autocomplete="off" .value=${r.texte}
               aria-label="Rechercher une technique"
               @input=${e=>o({texte:e.target.value})}>
      </div>
    </div>
    ${S}
    ${p.length>1?L`<div class="chips-filtres defilable" aria-label="Catégories">
          ${p.map(e=>L`<button class="chip-filtre ${r.familleId===e.id?`actif`:``}"
              @click=${()=>s(`familleId`,e.id)}>${e.nom}</button>`)}
        </div>`:R}
    ${m.length?L`<div class="chips-filtres defilable" aria-label="Niveaux">
          ${m.map(e=>L`<button class="chip-filtre ${g===Br(e)?`actif`:``}"
              @click=${()=>v(e)}>${Rr(e)}${e.nom}</button>`)}
        </div>`:R}
    ${b?L`<div class="chips-filtres">
          <button class="chip-filtre reinitialiser" @click=${x}>✕ Réinitialiser les filtres</button>
        </div>`:R}

    ${y.length?L`<div class="grille" style=${Gr(e)}>${y.map(t=>Wr(e,t,i,a))}</div>`:u.length===0?qr(e,t?n.disciplines.find(e=>e.id===t)?.nom:void 0):L`<p class="fil-vide sans-resultat" style="padding-top:14px">Aucune technique ne correspond à ces filtres.</p>`}
  `,nombre:y.length}}function qr(e,t){return t?L`<div class="discipline-vide">
      <p class="fil-vide" style="padding-top:14px">« ${t} » ne contient encore aucune technique.</p>
      <button class="bouton principal" style="margin:8px 18px 0; align-self:flex-start"
        @click=${e=>{let t=e.target.closest(`.ecran`)?.querySelector(`.actions-bibliotheque .creation-discipline input`);t?.scrollIntoView({block:`center`}),t?.focus()}}>Créer la première technique</button>
      <button class="action-douce" style="margin-top:6px" @click=${()=>e.choisirPackAImporter()}>
        ⤓ Importer un pack <span>(il peut compléter « ${t} » ou en installer d'autres)</span>
      </button>
    </div>`:L`<p class="fil-vide sans-resultat" style="padding-top:14px">Aucune technique pour l'instant — importe un pack ou capture la tienne.</p>`}function Jr(e){let t=e.bibliotheque,n=t.disciplines.length===0&&t.techniques.length===0;return L`
    <div class="ecran">
      ${Pr()}
      ${n?L`
            <p class="fil-vide" style="padding:4px 0 10px">
              Ta bibliothèque est vide. Importe un pack ou crée ta première technique.
            </p>
            <button class="action-douce" @click=${()=>e.choisirPackAImporter()}>
              ⤓ Importer un pack <span>fichier .movpack</span>
            </button>
            <button class="action-douce" @click=${()=>{e.ajouter={creation:!0},e.requestUpdate()}}>
              ＋ Créer ta première technique <span>son nom et sa discipline suffisent</span>
            </button>
          `:Kr(e).corps}
    </div>
  `}var Yr={texte:``,disciplineId:null,familleId:null,niveauId:null};function Xr(e){let t=e.bibliotheque,{familleParId:n,niveauParId:r}=Hr(t),i=e.techniquesFavorites(),a=L`<header class="marque"><div style="flex:1"><div class="nom">Favoris</div>
    <div class="devise">Tes techniques marquées, à portée de main.</div></div></header>`;if(i.length===0)return L`<div class="ecran">${a}
      <p class="fil-vide" style="padding:10px 18px">Aucun favori pour le moment. Ajoute-en depuis la Bibliothèque.</p></div>`;let o=Yr,s=t=>{Object.assign(Yr,t),e.requestUpdate()},c=(e,t)=>s({[e]:o[e]===t?null:t}),l=t.disciplines.filter(e=>i.some(t=>t.disciplineId===e.id)),u=[...new Set(i.map(e=>e.familleId).filter(Boolean))].map(e=>n.get(e)).filter(e=>!!e),d=new Set(i.flatMap(e=>e.niveauxIds)),f=Vr([...d].map(e=>r.get(e)).filter(e=>!!e)),p=o.niveauId?r.get(o.niveauId):void 0,m=p?Br(p):null,h=m?new Set([...d].filter(e=>{let t=r.get(e);return t?Br(t)===m:!1})):null,g=e=>s({niveauId:m===Br(e)?null:e.id}),_=(o.texte.trim()?rt({...t,techniques:i},o.texte,999):i).filter(e=>!o.disciplineId||e.disciplineId===o.disciplineId).filter(e=>!o.familleId||e.familleId===o.familleId).filter(e=>!h||e.niveauxIds.some(e=>h.has(e))).sort((e,t)=>e.nom.localeCompare(t.nom,`fr`)),v=o.texte.trim()!==``||o.disciplineId||o.familleId||o.niveauId;return L`
    <div class="ecran">
      ${a}
      <div class="recherche-ligne">
        <div class="recherche">${Nr}
          <input type="search" placeholder="Rechercher dans mes favoris…" autocomplete="off" .value=${o.texte}
                 aria-label="Rechercher dans les favoris"
                 @input=${e=>s({texte:e.target.value})}></div>
      </div>
      ${l.length>1?L`<div class="chips-filtres" aria-label="Disciplines">
            ${l.map(e=>L`<button class="chip-filtre ${o.disciplineId===e.id?`actif`:``}"
              @click=${()=>c(`disciplineId`,e.id)}>${e.nom}</button>`)}
          </div>`:R}
      ${u.length>1?L`<div class="chips-filtres" aria-label="Catégories">
            ${u.map(e=>L`<button class="chip-filtre ${o.familleId===e.id?`actif`:``}"
              @click=${()=>c(`familleId`,e.id)}>${e.nom}</button>`)}
          </div>`:R}
      ${f.length>1?L`<div class="chips-filtres" aria-label="Niveaux">
            ${f.map(e=>L`<button class="chip-filtre ${m===Br(e)?`actif`:``}"
              @click=${()=>g(e)}>${Rr(e)}${e.nom}</button>`)}
          </div>`:R}
      ${v?L`<div class="chips-filtres"><button class="chip-filtre reinitialiser"
            @click=${()=>s({texte:``,disciplineId:null,familleId:null,niveauId:null})}>✕ Réinitialiser</button></div>`:R}
      ${_.length?L`<div class="grille">${_.map(t=>Wr(e,t,n,r))}</div>`:L`<p class="fil-vide sans-resultat" style="padding-top:14px">Aucun favori ne correspond à ces filtres.</p>`}
    </div>
  `}function Zr(e,t){let n=e.bibliotheque.disciplines.find(e=>e.id===t);if(!n)return L`<div class="ecran"><p class="fil-vide">Discipline introuvable.</p></div>`;let{corps:r,nombre:i}=Kr(e,t);return L`
    <div class="ecran">
      <div class="barre">
        <button class="bouton-icone" aria-label="Retour" @click=${()=>e.retour()}>
          <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M15 5l-7 7 7 7"/></svg>
        </button>
        <span class="contexte">${n.nom} · <span style="font-variant-numeric:tabular-nums">${i}</span> technique${i>1?`s`:``}</span>
      </div>
      ${r}
      <div class="actions-bibliotheque">
        <div class="creation-discipline">
          <input placeholder="＋ Ajouter une technique (nom)…" aria-label="Nom de la nouvelle technique"
                 @keydown=${t=>{if(t.key!==`Enter`)return;let r=t.target;e.creerTechnique(n.id,r.value),r.value=``}}>
          <button class="bouton principal"
            @click=${t=>{let r=t.target.parentElement.querySelector(`input`);e.creerTechnique(n.id,r.value),r.value=``}}>Créer</button>
        </div>
      </div>
    </div>
  `}function Qr(e,t){return t?e.bibliotheque.disciplines.flatMap(e=>e.familles).find(e=>e.id===t)?.nom??``:``}function $r(e,t){let n={referentiel:0,enseignement:1,ressource:2,personnel:3};return e.bibliotheque.contributions.filter(e=>e.techniqueId===t.id).sort((e,t)=>(n[e.provenance]??9)-(n[t.provenance]??9)).flatMap(e=>e.medias.map(t=>({media:t,contribution:e})))}function ei(e,t){let n=e.bibliotheque,r=e.technique(t);if(!r)return L`<div class="ecran"><p class="fil-vide">Technique introuvable.</p></div>`;let i=n.disciplines.find(e=>e.id===r.disciplineId),a={referentiel:1,enseignement:2,ressource:3,personnel:4},o=n.contributions.filter(e=>e.techniqueId===r.id&&e.provenance!==`personnel`).sort((e,t)=>(a[e.provenance]??9)-(a[t.provenance]??9)),s=o.find(e=>(e.description??``).trim()||e.pointsCles.length)??o[0],c=n.contributions.filter(e=>e.techniqueId===r.id&&e.provenance===`personnel`&&!e.attribution).sort((e,t)=>t.creeLe.localeCompare(e.creeLe)),l=Er(n,r.id),u=new Map;for(let e of l)u.set(e.libelle,[...u.get(e.libelle)??[],e]);let d=kr(n,r.id),f=$r(e,r),p=f.find(e=>e.media.id===r.mediaPrincipalId)??f[0],m=f.find(t=>t.media.id===e.mediaAffiche)??p,h=(e,t)=>e.media.label??`Vidéo ${t+1}`,g=e.estFavori(r.id),_=e.editionFiche,v=(s?.pointsCles??[]).join(`
`);return L`
    <div class="ecran">
      <div class="barre fiche-barre">
        <span class="contexte">${r.nom}</span>
        <div class="fiche-actions">
          ${_?L`<button class="bouton-icone actif" aria-label="Enregistrer" title="Enregistrer et fermer l'édition"
                @click=${()=>e.validerEditionFiche()}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7"/></svg>
              </button>`:L`<button class="bouton-icone" aria-label="Modifier" title="Modifier"
                @click=${()=>e.autoriser(`modification`,`Saisis le PIN pour modifier « ${r.nom} ».`,()=>{e.entrerEditionFiche(r.id)})}>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true"><path d="M4 20h4L18.5 9.5a2.1 2.1 0 0 0-3-3L5 17v3z"/><path d="M13.5 6.5l3 3"/></svg>
              </button>`}
          <button class="bouton-icone etoile-favori ${g?`actif`:``}" aria-pressed=${g}
            aria-label=${g?`Retirer des favoris`:`Ajouter aux favoris`}
            title=${g?`Retirer des favoris`:`Ajouter aux favoris`}
            @click=${()=>void e.basculerFavori(r.id)}>${Ur(g)}</button>
          ${_||!e.preferences.vueRelationBeta?R:L`<button class="bouton-icone" aria-label="Voir en graphe" title="Voir les relations en graphe (bêta)"
                @click=${()=>e.ouvrirRelationsVisuelle(r.id)}>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true"><circle cx="12" cy="5" r="2.3"/><circle cx="5" cy="18" r="2.3"/><circle cx="19" cy="18" r="2.3"/><path d="M12 7.3 6 16M12 7.3 18 16M6.5 18h11"/></svg>
              </button>`}
          ${_?R:L`<button class="bouton-icone" aria-label="Partager" title="Partager"
                @click=${()=>void e.demanderPartageTechnique(r.id)}>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true"><circle cx="18" cy="5" r="2.6"/><circle cx="6" cy="12" r="2.6"/><circle cx="18" cy="19" r="2.6"/><path d="M8.3 10.7l7.4-4.3M8.3 13.3l7.4 4.3"/></svg>
              </button>`}
          ${_?L`<button class="bouton-icone" aria-label="Annuler l'édition" title="Annuler l'édition (défait les modifications)"
                @click=${()=>void e.annulerEditionFiche()}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>
              </button>`:L`<button class="bouton-icone" aria-label="Fermer" title="Fermer" @click=${()=>e.retour()}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>
              </button>`}
        </div>
      </div>

      ${_?ni(e,r):ti(e,r,i)}

      ${_?ri(e,r,f):m?L`<div class="media-principal">
              ${f.length>1?L`<div class="chips-filtres media-choix" aria-label="Médias de la technique">
                    ${f.map((t,n)=>L`<button class="chip-filtre ${t.media.id===m.media.id?`actif`:``}"
                        @click=${()=>{e.mediaAffiche=t.media.id,e.requestUpdate()}}>${h(t,n)}</button>`)}
                  </div>`:R}
              ${si(e,m.media,m.contribution.attribution)}
            </div>`:L`<div class="media-principal media-absent">
              <div class="fil-vide" style="padding:0 0 8px">Aucun média pour l'instant — le geste se filme, se choisit ou se lie.</div>
              <button class="action-douce" @click=${()=>e.ajoutMedia={techniqueId:r.id,provenance:`personnel`}}>
                🎞 Ajouter un média <span>(filmer, choisir un fichier ou coller un lien)</span>
              </button>
            </div>`}

      ${s&&((s.description??``).trim()||_)?L`<section class="bloc-lecture">
            <h2 class="section-titre">Description</h2>
            ${_?L`<textarea class="champ-note" style="min-height:80px" .value=${s.description??``}
                  placeholder="Décris la technique…"
                  @change=${t=>void e.amenderContribution(s.id,{description:t.target.value})}></textarea>`:L`<p>${s.description}</p>`}
            ${s.modifiePar&&s.modifiePar!==`moi`?L`<div class="geste modifie-par" style="padding-top:4px">Modifié par ${s.modifiePar}</div>`:R}
          </section>`:R}

      ${s&&(s.pointsCles.length||_)?L`<section class="bloc-lecture">
            <h2 class="section-titre">Points clés</h2>
            ${_?L`<textarea class="champ-note" style="min-height:80px" .value=${v}
                  placeholder="Un point clé par ligne"
                  @change=${t=>void e.amenderContribution(s.id,{pointsCles:t.target.value.split(`
`)})}></textarea>`:L`<ol class="points">${s.pointsCles.map(e=>L`<li>${e}</li>`)}</ol>`}
          </section>`:R}

      ${s?.variantes?L`<section class="bloc-lecture"><p><em>${s.variantes}</em></p></section>`:R}

      ${l.length>0&&e.preferences.vueRelationBeta?L`<div class="liaisons relations">
            <h2 class="section-titre" style="padding:12px 0 0">Relations · ${l.length}</h2>
            ${e.relationsDepliees||l.length<=3?[...u.entries()].map(([t,n])=>L`<div class="liaison-groupe">
                    <span class="quoi">${t}</span>
                    ${n.map(t=>oi(e,t))}
                  </div>`):L`${l.slice(0,3).map(t=>L`<div class="liaison-groupe">
                      <span class="quoi">${t.libelle} →</span>
                      ${oi(e,t)}
                    </div>`)}
                  <button class="action-douce" @click=${()=>{e.relationsDepliees=!0,e.requestUpdate()}}>
                    Voir toutes les relations <span>(${l.length})</span>
                  </button>`}
          </div>`:R}
      ${d.length?L`<div class="liaisons">
            <h2 class="section-titre" style="padding:12px 0 0">Utilisée dans · ${d.length} composition${d.length>1?`s`:``}</h2>
            <div class="liaison-groupe">
              ${d.map(t=>L`<button class="puce-liaison" @click=${()=>e.ouvrirComposition(t.id)}>${t.nom}</button>`)}
            </div>
          </div>`:R}

      <section class="bloc-lecture commentaire">
        <h2 class="section-titre">Commentaire</h2>
        ${e.pinConfigure?L`<p class="commentaire-zone">${c[0]?.description?L`${c[0].description}`:L`<span class="fil-vide">Aucune note.</span>`}</p>
              <div class="geste" style="padding-top:4px">🔒 Lecture seule — un PIN protège cet appareil.</div>`:L`<textarea class="champ-note commentaire-zone" style="min-height:72px" .value=${c[0]?.description??``}
              placeholder="Ta note, ton repère — juste pour toi" aria-label="Commentaire"
              @change=${t=>{let n=t.target.value;c[0]?e.majContribution(c[0].id,n):n.trim()&&e.ajouterNote(r.id,n)}}></textarea>`}
      </section>
    </div>
  `}function ti(e,t,n){let r=Qr(e,t.familleId);return L`
    <div class="fiche-entete">
      ${r?L`<div class="fiche-famille">${r}</div>`:R}
      <h1>${t.nom}</h1>
      ${t.nomTraditionnel?L`<div class="jp">${t.nomTraditionnel}</div>`:R}
    </div>
    ${t.niveauxIds.length?L`<div class="pastilles">
          ${t.niveauxIds.map(e=>{let t=n?.niveaux.find(t=>t.id===e);return t?L`<span class="pastille">${Rr(t)}${t.nom}</span>`:R})}
        </div>`:R}
  `}function ni(e,t){let n=e.bibliotheque,r=n.disciplines.find(e=>e.id===t.disciplineId);return L`
    <div class="edition">
      <label class="etiquette-champ" for="champ-titre">Titre</label>
      <input id="champ-titre" class="champ-edition" .value=${t.nom} placeholder="Titre"
        @change=${n=>void e.majTechnique(t.id,{nom:n.target.value||t.nom})}>

      <label class="etiquette-champ" for="champ-sous-titre">Sous-titre</label>
      <input id="champ-sous-titre" class="champ-edition" .value=${t.nomTraditionnel??``} placeholder="Sous-titre (optionnel)"
        @change=${n=>void e.majTechnique(t.id,{nomTraditionnel:n.target.value})}>

      <label class="etiquette-champ" for="champ-discipline">Discipline</label>
      <select id="champ-discipline" class="champ-edition"
        @change=${n=>void e.majTechnique(t.id,{disciplineId:n.target.value})}>
        ${n.disciplines.map(e=>L`<option value=${e.id} ?selected=${e.id===t.disciplineId}>${e.nom}</option>`)}
      </select>

      ${r?.familles.length?L`<label class="etiquette-champ" for="champ-categorie">Catégorie</label>
            <select id="champ-categorie" class="champ-edition"
              @change=${n=>{let r=n.target.value;e.majTechnique(t.id,{familleId:r||void 0})}}>
              <option value="" ?selected=${!t.familleId}>— aucune —</option>
              ${r.familles.map(e=>L`<option value=${e.id} ?selected=${e.id===t.familleId}>${e.nom}</option>`)}
            </select>`:R}

      ${r?.niveaux.length?L`<div class="etiquette-champ">Niveaux</div>
            <div class="niveaux-coches">
              ${r.niveaux.map(n=>L`<label class="niveau-coche">
                  <input type="checkbox" ?checked=${t.niveauxIds.includes(n.id)}
                    @change=${()=>void e.majTechnique(t.id,{niveauxIds:t.niveauxIds.includes(n.id)?t.niveauxIds.filter(e=>e!==n.id):[...t.niveauxIds,n.id]})}>
                  ${Rr(n)}<span>${n.nom}</span>
                </label>`)}
            </div>`:R}

    </div>
  `}function ri(e,t,n){return L`
    <div class="edition edition-medias">
      <div class="etiquette-champ">Médias</div>
      <button class="action-douce" @click=${()=>e.ajoutMedia={techniqueId:t.id,provenance:`personnel`}}>
        🎞 Ajouter un média <span>(filmer, choisir un fichier ou coller un lien)</span>
      </button>
      ${n.length===0?L`<p class="fil-vide" style="padding:6px 0">Aucun média — le geste se filme, se choisit ou se lie.</p>`:n.map(({media:r,contribution:i},a)=>ii(e,t,r,i,a,n.length))}
      ${ai(e,t,n)}
    </div>
  `}function ii(e,t,n,r,i,a){let o=n.id===t.mediaPrincipalId||!t.mediaPrincipalId&&i===0;return L`
    <div class="bloc-media-edition">
      <input class="champ-edition" .value=${n.label??``} placeholder="Titre de la vidéo" aria-label="Titre de la vidéo"
        @change=${t=>void e.majMediaLabel(n.id,t.target.value)}>
      ${si(e,n,r.attribution)}
      <div class="bloc-media-actions">
        ${a>1?o?L`<span class="badge-principal">✓ Vidéo principale</span>`:L`<button class="chip-filtre"
                @click=${()=>void e.majTechnique(t.id,{mediaPrincipalId:n.id}).then(()=>e.afficherToast(`Vidéo principale mise à jour ✓`))}>
                ★ Définir comme principale</button>`:R}
        <button class="bouton-retrait-media" aria-label="Retirer ce média"
          @click=${()=>void e.retirerMedia(t.id,n.id)}>🗑 Retirer</button>
      </div>
    </div>
  `}function ai(e,t,n){return L`
    <div class="etiquette-champ">Vignette</div>
    <div class="couverture-edition chips-filtres">
      <label class="chip-filtre couverture-import">
        🖼 Importer une image
        <input type="file" accept="image/*" hidden
          @change=${n=>{let r=n.target,i=r.files?.[0];r.value=``,i&&e.definirCouvertureImage(t.id,i)}}>
      </label>
      ${n.filter(({media:e})=>e.type===`plateforme`&&e.service===`youtube`).map(({media:n},r)=>L`<button class="chip-filtre ${t.couverture?.type===`media`&&t.couverture.mediaId===n.id?`actif`:``}"
          @click=${()=>void e.definirCouvertureMedia(t.id,n.id)}>Miniature ${n.label??`vidéo ${r+1}`}</button>`)}
      ${t.couverture?L`<button class="chip-filtre danger" @click=${()=>void e.retirerCouverture(t.id)}>Retirer la vignette</button>`:R}
    </div>
    ${t.couverture?.type===`image`?L`<div class="couverture-apercu"><img src=${t.couverture.dataUrl} alt="Vignette actuelle"></div>`:R}
  `}function oi(e,t){let n=e.technique(t.techniqueId);return n?L`<button class="puce-liaison" @click=${()=>e.ouvrirFiche(t.techniqueId)}>${n.nom}</button>`:L`<span class="puce-liaison absente">absente de la bibliothèque</span>`}function si(e,t,n){let r=e.mediasDeplies.has(t.id),i=()=>{e.mediasDeplies=new Set([t.id]),document.querySelectorAll(`video`).forEach(e=>e.pause()),e.requestUpdate()};return t.type===`plateforme`&&t.service===`youtube`?r?L`<div class="media-video"><iframe
            src="https://www.youtube-nocookie.com/embed/${t.ref}"
            title=${t.label??`Vidéo`} allow="encrypted-media; picture-in-picture" allowfullscreen></iframe></div>`:L`<button class="bouton-video" @click=${i}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="#fff" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>
          <span>${t.label??`Vidéo${n?` (${n})`:``}`} — lecture en ligne</span>
        </button>`:t.type===`lien`?r?L`<div class="media-video"><video src=${t.ref} controls playsinline
          @play=${e=>{document.querySelectorAll(`video`).forEach(t=>{t!==e.target&&t.pause()})}}></video></div>`:L`<button class="bouton-video" @click=${i}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="#fff" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>
          <span>${t.label??`Vidéo`} — lecture en ligne</span>
        </button>`:L`<movenso-video-locale .app=${e} .mediaId=${t.id}></movenso-video-locale>`}function ci(e,t,n,r){r.preventDefault(),r.stopPropagation(),e.reordreGlisse=t,e.requestUpdate();let i=t=>{if(!e.reordreGlisse)return;let r=(document.elementFromPoint(t.clientX,t.clientY)?.closest?.(`[data-glisser-id]`))?.getAttribute(`data-glisser-id`);r&&r!==e.reordreGlisse&&(n.reordonner(e.reordreGlisse,r),e.requestUpdate())},a=()=>{window.removeEventListener(`pointermove`,i),window.removeEventListener(`pointerup`,a),window.removeEventListener(`pointercancel`,a);let t=e.reordreGlisse!==null;e.reordreGlisse=null,t&&n.enregistrer(),e.requestUpdate()};window.addEventListener(`pointermove`,i),window.addEventListener(`pointerup`,a),window.addEventListener(`pointercancel`,a)}function li(e,t,n){return L`<span class="poignee-glisser" aria-label="Glisser pour réorganiser" title="Glisser pour réorganiser"
    @pointerdown=${r=>ci(e,t,n,r)}>⠿</span>`}function ui(e,t){return[e,t].sort().join(`|`)}function di(e,t,n){if(Math.abs(e.length-t.length)>n)return n+1;let r=Array.from({length:t.length+1},(e,t)=>t);for(let i=1;i<=e.length;i++){let a=[i,...Array(t.length).fill(0)],o=a[0];for(let n=1;n<=t.length;n++){let s=e[i-1]===t[n-1]?0:1;a[n]=Math.min(r[n]+1,a[n-1]+1,r[n-1]+s),a[n]<o&&(o=a[n])}if(o>n)return n+1;r=a}return r[t.length]}function fi(e,t){let n=B(e),r=B(t);if(n===r)return!0;let i=Math.max(n.length,r.length);if(i<4)return!1;let a=Math.min(3,Math.max(1,Math.floor(i*.2)));return di(n,r,a)<=a}function pi(e,t=[]){let n=new Set(t),r=[],i=new Map;for(let t of e.techniques)i.set(t.disciplineId,[...i.get(t.disciplineId)??[],t]);for(let e of i.values())for(let t=0;t<e.length;t++)for(let i=t+1;i<e.length;i++){let a=e[t],o=e[i];q(a)!==q(o)&&fi(a.nom,o.nom)&&(n.has(ui(a.id,o.id))||r.push({aId:a.id,bId:o.id}))}return r.sort((e,t)=>ui(e.aId,e.bId).localeCompare(ui(t.aId,t.bId))),r}function mi(e,t,n){let r=t=>{let n=e.techniques.find(e=>e.id===t);if(!n)return null;let r=e.contributions.filter(e=>e.techniqueId===t&&e.provenance!==`personnel`);return{technique:n,source:q(n),description:r.map(e=>e.description??``).filter(Boolean).join(`

`),pointsCles:r.flatMap(e=>e.pointsCles),medias:r.flatMap(e=>e.medias),niveaux:n.niveauxIds,relations:n.relations.length}},i=r(t),a=r(n);return!i||!a?null:{a:i,b:a}}function hi(e){return e.sha256?`sha:${e.sha256}`:`${e.type}:${e.ref}`}function gi(e,t,n,r){let i=structuredClone(e),a=i.techniques.find(e=>e.id===t),o=i.techniques.find(e=>e.id===n);if(!a||!o)throw Error(`Fusion impossible : identité introuvable`);if(a.disciplineId!==o.disciplineId)throw Error(`Fusion impossible : disciplines différentes`);let s=r.titre===`a`?a:o,c=e=>e===a.id?`a`:`b`,l=i.contributions.filter(e=>e.techniqueId===a.id&&e.provenance!==`personnel`),u=i.contributions.filter(e=>e.techniqueId===o.id&&e.provenance!==`personnel`),d=i.contributions.filter(e=>(e.techniqueId===a.id||e.techniqueId===o.id)&&e.provenance===`personnel`),f=new Set,p=e=>r.medias===`deux`||r.medias===e,m=e=>r.textes===`deux`||r.textes===e,h=[];for(let e of[...l,...u]){let t=c(e.techniqueId),n=p(t)?e.medias.filter(e=>{let t=hi(e);return f.has(t)?!1:(f.add(t),!0)}):[],r=m(t);if(!r&&n.length===0)continue;let i=structuredClone(e);i.techniqueId=a.id,i.medias=n,r||(delete i.description,i.pointsCles=[],delete i.variantes),h.push(i)}if(r.textes===`deux`){let e=h.filter(e=>e.provenance!==`personnel`);if(e.length>1){let t=e[0],n=[],r=[];for(let t of e){let e=(t.description??``).trim();e&&!n.includes(e)&&n.push(e);for(let e of t.pointsCles){let t=e.trim();t&&!r.includes(t)&&r.push(t)}}n.length?t.description=n.join(`

`):delete t.description,t.pointsCles=r;for(let n of e)n!==t&&(delete n.description,n.pointsCles=[],delete n.variantes)}}for(let e of d)e.techniqueId=a.id;a.nom=s.nom,s.nomTraditionnel===void 0?delete a.nomTraditionnel:a.nomTraditionnel=s.nomTraditionnel,s.familleId===void 0?delete a.familleId:a.familleId=s.familleId;let g=new Set;if(r.niveaux!==`b`)for(let e of a.niveauxIds)g.add(e);if(r.niveaux!==`a`)for(let e of o.niveauxIds)g.add(e);a.niveauxIds=[...g];let _=[],v=new Set,y=[...r.relations===`b`?[]:a.relations,...r.relations===`a`?[]:o.relations];for(let e of y){let t=e.cibleId===o.id?a.id:e.cibleId;if(t===a.id)continue;let n=`${e.type}|${t}`;v.has(n)||(v.add(n),_.push({type:e.type,cibleId:t}))}a.relations=_;let b=new Set(h.flatMap(e=>e.medias.map(e=>e.id)));if(!a.mediaPrincipalId||!b.has(a.mediaPrincipalId)){let e=h.flatMap(e=>e.medias)[0];e?a.mediaPrincipalId=e.id:delete a.mediaPrincipalId}i.contributions=[...i.contributions.filter(e=>e.techniqueId!==a.id&&e.techniqueId!==o.id),...h,...d],i.techniques=i.techniques.filter(e=>e.id!==o.id);for(let e of i.techniques){if(e.id===a.id)continue;let t=new Set;e.relations=e.relations.map(e=>({type:e.type,cibleId:e.cibleId===o.id?a.id:e.cibleId})).filter(n=>{if(n.cibleId===e.id)return!1;let r=`${n.type}|${n.cibleId}`;return t.has(r)?!1:(t.add(r),!0)})}i.favoris=[...new Set(i.favoris.map(e=>e===o.id?a.id:e))];for(let e of i.compositions)for(let t of e.blocs)t.type===`technique`&&t.techniqueId===o.id&&(t.techniqueId=a.id);return i.doublonsIgnores&&=i.doublonsIgnores.filter(e=>e!==ui(t,n)),_t(i),i}function _i(e,t){let n=structuredClone(e),r=(n.fusions??[]).findIndex(e=>e.fusionneeId===t);if(r<0)throw Error(`Défusion impossible : fusion introuvable`);let i=n.fusions[r],a=i.a.technique.id,o=i.b.technique.id;return n.techniques=n.techniques.filter(e=>e.id!==a),n.contributions=n.contributions.filter(e=>e.techniqueId!==a),n.techniques.push(structuredClone(i.a.technique),structuredClone(i.b.technique)),n.contributions.push(...i.a.contributions.map(e=>structuredClone(e)),...i.b.contributions.map(e=>structuredClone(e))),n.favoris=n.favoris.filter(e=>e!==a&&e!==o),i.a.etaitFavori&&n.favoris.push(a),i.b.etaitFavori&&n.favoris.push(o),n.fusions.splice(r,1),n.fusions.length===0&&delete n.fusions,_t(n),n}var Y=new Set;function vi(e,t,n){let r=Y.has(t);return L`<div class="encart-entete">
    <span class="titre-atelier">${e}</span>
    <button class="bouton-plus ${r?`actif`:``}" aria-label=${r?`Fermer la création dans ${e}`:`Ajouter dans ${e}`} aria-expanded=${r}
      @click=${()=>{r?Y.delete(t):Y.add(t),n.requestUpdate()}}>${r?`−`:`＋`}</button>
  </div>`}function yi(e,t){return L`<div class="carte-atelier">
    <div class="encart-entete"><span class="titre-atelier">${e}</span></div>
    ${t}
  </div>`}function bi(e){let t=e.bibliotheque;if(t.disciplines.length===0)return L`
      <div class="carte-atelier">
        ${vi(`Disciplines`,`discipline`,e)}
        ${Y.has(`discipline`)?Ai(e):R}
        <p class="fil-vide" style="padding:6px 2px 0">Aucune discipline — touche ＋ pour en créer une, ou importe un pack.</p>
      </div>
    `;let n=e.disciplineGestion&&t.disciplines.some(t=>t.id===e.disciplineGestion)?e.disciplineGestion:t.disciplines[0].id,r=t.disciplines.find(e=>e.id===n),i={reordonner:(t,n)=>e.deplacerDisciplineVers(t,n),enregistrer:()=>void e.enregistrerReordre()};return L`
    <div class="carte-atelier">
      ${vi(`Disciplines`,`discipline`,e)}
      ${Y.has(`discipline`)?Ai(e):R}
      <div class="chips-glissables" aria-label="Disciplines">
        ${t.disciplines.map(n=>L`<span class="chip-glissable ${e.reordreGlisse===n.id?`glisse`:``}" data-glisser-id=${n.id}>
            ${t.disciplines.length>1?li(e,n.id,i):R}
            <button class="chip-filtre chip-gestion ${n.id===r.id?`actif`:``}"
              @click=${()=>{e.disciplineGestion=n.id,e.requestUpdate()}}>${n.nom}</button>
          </span>`)}
      </div>
    </div>
    ${aa(e,r)}
    ${oa(e,r)}
    ${sa(e,r)}
  `}function xi(e){return e.bibliotheque.techniques.length===0?L`<p class="fil-vide" style="padding-top:10px">Aucune technique pour l'instant.</p>`:Ca(e,xa.disciplineId)}function Si(e){return e.bibliotheque.disciplines.length===0?L`<p class="fil-vide" style="padding-top:10px">Rien à publier pour l'instant — crée ou importe d'abord du contenu.</p>`:L`
    <p class="fil-vide" style="padding:8px 2px 0">Un pack, c'est du contenu <b>à partager</b> — sans ton carnet ni tes favoris. Pour une archive complète <b>pour toi</b>, va dans « Sauvegardes ».</p>
    ${wa(e)}
  `}function Ci(e){return L`
    ${yi(`Sauvegarder`,L`
      <p class="fil-vide" style="padding:0 2px 6px">Une sauvegarde, c'est <b>tout, pour toi</b> (avec ton carnet et tes favoris) — pour restaurer ton installation. Pour partager à d'autres, utilise « Créer ou exporter un pack ».</p>
      <div class="actions-bibliotheque" style="padding-top:0">
        <button class="action-douce" @click=${()=>void e.exporterTout(!0)}>
          ⇓ Sauvegarde complète <span>fichier avec les vidéos — restaurable à l'identique sur un appareil vierge</span>
        </button>
        <button class="action-douce" @click=${()=>void e.exporterTout(!1)}>
          ⇓ Sauvegarde légère, sans les vidéos <span>ce n'est PAS une sauvegarde complète — les vidéos restent sur cet appareil</span>
        </button>
      </div>
      ${e.dernierFichier?L`<div class="suppression-discipline" style="border-color:var(--trait); background:var(--papier)">
            <p class="details fichier-produit" style="line-height:1.5">
              <b style="color:var(--encre)">${e.dernierFichier.role}</b><br>
              ${e.dernierFichier.nom} · ${e.dernierFichier.taille>=1e6?`${(e.dernierFichier.taille/1e6).toFixed(1)} Mo`:`${Math.max(1,Math.round(e.dernierFichier.taille/1e3))} Ko`}<br>
              ${e.dernierFichier.resume}<br>
              L'emplacement du fichier est indiqué dans la confirmation à l'enregistrement.
            </p>
          </div>`:R}
    `)}
    ${yi(`Revenir à un état précédent`,Ta(e))}
    ${yi(`Restaurer une sauvegarde complète`,L`
      <div class="actions-bibliotheque" style="padding-top:0">
        <button class="action-douce" @click=${()=>e.choisirPackAImporter()}>
          ⤒ Restaurer depuis un fichier <span>importe une sauvegarde complète — sur une installation vierge</span>
        </button>
      </div>
    `)}
  `}function wi(e){return L`${Aa(e)}`}function Ti(e){let t=e.preferences.theme??`auto`,n=e.preferences.tonalite??`vermillon`;return L`
    <div class="carte-atelier">
      <div class="encart-entete"><span class="titre-atelier">Thème</span></div>
      <div class="chips-filtres" style="padding:2px 0 0">
        ${[`auto`,`clair`,`sombre`].map(n=>L`<button class="chip-filtre ${t===n?`actif`:``}"
            @click=${()=>e.changerApparence({theme:n})}>${n===`auto`?`Auto (système)`:n===`clair`?`Jour`:`Nuit`}</button>`)}
      </div>
    </div>

    <div class="carte-atelier">
      <div class="encart-entete"><span class="titre-atelier">Tonalité</span></div>
      <div class="chips-filtres" style="flex-wrap:wrap; padding:2px 0 0">
        ${Ea.map(t=>L`<button class="chip-filtre ${n===t.id?`actif`:``}"
            @click=${()=>e.changerApparence({tonalite:t.id})}>
            <span class="puce-niveau" style="background:${t.couleur}"></span>${t.nom}</button>`)}
      </div>
    </div>

    ${Di(e)}

    <div class="carte-atelier">
      <div class="encart-entete"><span class="titre-atelier">Au démarrage</span></div>
      ${Pa(e)}
    </div>

    <div class="carte-atelier">
      <div class="encart-entete"><span class="titre-atelier">Ton pseudo</span></div>
      <div class="aide" style="font-size:12px; color:var(--sourdine)">Signe les techniques que tu crées ou modifies (« Modifié par… »).</div>
      <input class="champ-mini" placeholder="Ton nom ou ton pseudo"
             .value=${(e.preferences.pseudo??``).trim()} aria-label="Ton pseudo"
             @change=${t=>e.changerPseudo(t.target.value)}>
    </div>

    ${Oi(e)}

    <div class="carte-atelier">
      <div class="encart-entete"><span class="titre-atelier">Réglages avancés</span></div>
      ${Ei(e,`Mode avancé`,`Affiche les outils de curation (doublons, relations, médias, diagnostic).`,`modeAvance`)}
      ${Ei(e,`Vue relation (bêta)`,`Active les relations entre techniques : sur les fiches, en graphe, et leur édition. En cours de refonte.`,`vueRelationBeta`)}
    </div>
  `}function Ei(e,t,n,r){let i=e.preferences[r]??!1;return L`
    <button class="interrupteur ${i?`actif`:``}" role="switch" aria-checked=${i}
      @click=${()=>e.basculerReglage(r)}>
      <span class="interrupteur-texte">
        <span class="interrupteur-titre">${t}</span>
        <span class="interrupteur-aide">${n}</span>
      </span>
      <span class="interrupteur-piste" aria-hidden="true"><span class="interrupteur-bouton"></span></span>
    </button>`}function Di(e){let t=e.preferences.densiteBibliotheque??0,n=t===0?`Auto — s'adapte à l'écran (2 sur téléphone, plus sur tablette)`:`${t} colonne${t>1?`s`:``}`;return L`
    <div class="carte-atelier">
      <div class="encart-entete"><span class="titre-atelier">Densité de la bibliothèque</span></div>
      <div class="aide" style="font-size:12px; color:var(--sourdine)">Nombre de colonnes de la grille des techniques.</div>
      <div class="densite-reglage">
        <input type="range" min="0" max="6" step="1" .value=${String(t)}
          aria-label="Nombre de colonnes de la bibliothèque"
          @input=${t=>{let n=Number(t.target.value);e.changerDensite(n===0?null:n)}}>
        <span class="densite-valeur">${n}</span>
      </div>
    </div>`}function Oi(e){let t=[200,500,1e3,2e3,5e3,1e4,2e4,0],n=e.preferences.limiteEspaceMo??5e3,r=t.indexOf(n),i=r>=0?r:4,a=e=>e===0?`Illimité`:e>=1e3?`${e/1e3} Go`:`${e} Mo`,o=e.infoEspace;return L`
    <div class="carte-atelier">
      <div class="encart-entete"><span class="titre-atelier">Espace de stockage</span></div>
      <div class="aide" style="font-size:12px; color:var(--sourdine)">Limite que Movenso peut utiliser pour les vidéos locales — les liens en ligne ne comptent pas.</div>
      <div class="densite-reglage">
        <input type="range" min="0" max="7" step="1" .value=${String(i)}
          aria-label="Limite d'espace pour les vidéos"
          @input=${n=>void e.changerLimiteEspace(t[Number(n.target.value)]??5e3)}>
        <span class="densite-valeur">${a(n)}</span>
      </div>
      <div class="aide" style="font-size:11.5px; color:var(--sourdine)">
        Minimum 200 Mo → Illimité.
        ${o?L`<br>Utilisé : ${ji(o.usage)} · max appareil ~${ji(o.quota)}`:R}
      </div>
      ${n===0?L`<div class="aide" style="font-size:11.5px; color:var(--attention, #b26b00)">⚠ Sans limite, Movenso peut remplir le stockage de l'appareil.</div>`:R}
    </div>`}function ki(e){return L`
    ${yi(`Diagnostic`,L`
      <div class="aide" style="font-size:12px; color:var(--sourdine)">Un fichier texte (compteurs, santé des médias, stockage, versions) pour comprendre un souci d'import, d'export ou de place — sans aucun secret.</div>
      <button class="chip-filtre diagnostic-export" @click=${()=>void e.exporterDiagnostic()}>Exporter le diagnostic</button>
    `)}
    ${Oa(e)}
  `}function Ai(e){let t=async t=>{let n=t.value;t.value=``;let r=await e.creerDiscipline(n);Y.delete(`discipline`),r&&(e.disciplineGestion=r),e.requestUpdate()};return L`
    <div class="creation-discipline" style="margin:6px 0 2px">
      <input placeholder="Nom de la discipline…" autofocus aria-label="Nom de la discipline"
             @keydown=${e=>{e.key===`Enter`&&t(e.target)}}>
      <button class="bouton principal"
        @click=${e=>void t(e.target.parentElement.querySelector(`input`))}>Créer</button>
    </div>
  `}function ji(e){return e>=1e6?`${(e/1e6).toFixed(1)} Mo`:`${Math.max(1,Math.round(e/1e3))} Ko`}var Mi=new Set;function Ni(e){let t=[...Xi(e).values()],n=t.filter(e=>e.media.type===`local`),r=t.filter(e=>e.media.type!==`local`);return L`
    <div class="carte-atelier" style="gap:0">
      <div class="encart-entete" style="padding-bottom:4px"><span class="titre-atelier">Médiathèque</span></div>
      ${$i(e,n.length,`Vidéos locales`,`local`)}
      ${Gi===`local`?ta(e,n):R}
      ${$i(e,r.length,`Médias en ligne`,`enligne`)}
      ${Gi===`enligne`?ta(e,r):R}
      ${t.length===0?L`<p class="fil-vide" style="padding:6px 0 0">Aucun média pour l'instant.</p>`:R}
    </div>
  `}function Pi(e){let t=e.bibliotheque,n=t.contributions.filter(e=>e.techniqueId===null),r=new Set;for(let e of t.contributions)e.techniqueId&&e.medias.length&&r.add(e.techniqueId);let i=t.techniques.filter(e=>!r.has(e.id)),a=t.techniques.filter(e=>!e.familleId&&e.niveauxIds.length===0),o=e.doublonsPotentiels().length;return L`
    ${n.length+i.length+a.length+e.mediasManquants.length+e.videosOrphelines.length+o===0?L`<p class="fil-vide" style="padding:10px 2px 0">Rien à traiter — ta bibliothèque est en ordre. ✓</p>`:R}
    <div class="carte-atelier" style="gap:0">
      <div class="encart-entete" style="padding-bottom:4px"><span class="titre-atelier">À compléter</span></div>
      ${$i(e,n.length,`Captures à rattacher`,`rattacher`)}
      ${Gi===`rattacher`?Ii(e,n):R}
      ${$i(e,i.length,`Techniques sans vidéo`,`sansvideo`)}
      ${Gi===`sansvideo`?na(e,i,`Ajouter une vidéo`,`Toutes tes techniques ont une vidéo ou un lien.`):R}
      ${$i(e,a.length,`Techniques sans classement`,`aclasser`)}
      ${Gi===`aclasser`?na(e,a,`Classer`,`Toutes tes techniques ont une catégorie ou un niveau.`):R}
    </div>
    <div class="carte-atelier" style="gap:0">
      <div class="encart-entete" style="padding-bottom:4px"><span class="titre-atelier">Intégrité des médias</span></div>
      ${$i(e,e.mediasManquants.length,`Vidéos manquantes`,`manquantes`,`rouge`)}
      ${Gi===`manquantes`?Fi(e):R}
      ${$i(e,e.videosOrphelines.length,`Fichiers inutilisés`,`inutilises`,`rouge`)}
      ${Gi===`inutilises`?ra(e):R}
    </div>
    ${o?L`<div class="carte-atelier" style="gap:0">
          <div class="encart-entete" style="padding-bottom:4px"><span class="titre-atelier">À examiner</span></div>
          <button class="kpi kpi-filtre" @click=${()=>e.ouvrirPlusSection(`doublons`)}>
            <span class="voyant neutre"></span>
            <span class="kpi-libelle">Doublons potentiels</span>
            <span class="kpi-nombre">${o}</span>
            <span class="chevron" aria-hidden="true">›</span>
          </button>
        </div>`:R}
  `}function Fi(e){let t=e.mediasManquants.filter(e=>e.techniqueId).map(e=>({id:e.techniqueId,nom:e.nom})).sort((e,t)=>e.nom.localeCompare(t.nom,`fr`,{sensitivity:`base`}));return L`<div class="mediatheque-liste">
    <p class="details" style="padding:2px 2px 6px">Fichier absent — restaure une sauvegarde, ou retire la note.</p>
    ${t.length?t.map(t=>L`<div class="ligne-atelier ligne-media">
          <span class="details" style="flex:1;min-width:0"><button class="lien-media-fiche" @click=${()=>e.ouvrirFiche(t.id)}>${t.nom}</button></span>
        </div>`):L`<p class="fil-vide" style="padding:6px 0 8px">Aucune vidéo manquante rattachée à une fiche.</p>`}
  </div>`}function Ii(e,t){return L`<div class="mediatheque-liste">
    <p class="details" style="padding:2px 2px 6px">Un savoir sans nom s'oublie — donne-lui une technique.</p>
    ${t.length?t.map((t,n)=>L`<div class="ligne-atelier ligne-media">
          <span class="details" style="flex:1;min-width:0">Capture ${n+1}</span>
          <button class="chip-filtre" @click=${()=>e.ouvrirRattachement(t.id)}>Rattacher</button>
        </div>`):L`<p class="fil-vide" style="padding:6px 0 8px">Aucune capture à rattacher.</p>`}
  </div>`}function Li(e){return L`${ma(e)}`}function Ri(e){let t=e.bibliotheque,n=t.corbeille??[];return n.length===0?L`<p class="fil-vide" style="padding-top:10px">La corbeille est vide. Une fiche retirée arrive ici et reste restaurable tant que tu ne vides pas.</p>`:L`
    <div class="carte-atelier" style="gap:0">
      <div class="ligne-atelier">
        <span class="titre-atelier" style="font-size:14px;flex:1">${n.length} fiche${n.length>1?`s`:``} en corbeille</span>
        <button class="chip-filtre danger"
          @click=${()=>{confirm(`Vider la corbeille (${n.length} fiche${n.length>1?`s`:``}) ? Irréversible — un point de restauration sera conservé.`)&&e.viderCorbeille()}}>
          Vider la corbeille</button>
      </div>
      <p class="fil-vide" style="padding:2px 2px 8px">Restaurer une fiche la remet à l'identique (notes, favori, liens). Le vidage nettoie les liens qui pointaient vers elle.</p>
      ${n.map(n=>{let r=t.disciplines.find(e=>e.id===n.technique.disciplineId),i=n.contributions.reduce((e,t)=>e+t.medias.length,0),a=n.supprimeeLe.slice(0,10);return L`<div class="ligne-atelier ligne-corbeille" style="flex-wrap:wrap">
          <span class="ligne-menu-icone" style="background:#efe3d6" aria-hidden="true">🗑</span>
          <span class="details" style="flex:1;min-width:0">
            <b>${n.technique.nom}</b>
            <span style="opacity:.7"> · ${r?.nom??`sans discipline`} · ${n.contributions.length} note${n.contributions.length>1?`s`:``}${i?` · ${i} média${i>1?`s`:``}`:``} · retirée le ${a}</span>
          </span>
          <button class="chip-filtre" @click=${()=>void e.restaurerTechnique(n.technique.id)}>Restaurer</button>
          <button class="bouton-icone danger" aria-label=${`Supprimer définitivement ${n.technique.nom}`} title="Supprimer définitivement"
            @click=${()=>{confirm(`Supprimer définitivement « ${n.technique.nom} » ? Irréversible.`)&&e.supprimerDefinitivement(n.technique.id)}}>✕</button>
        </div>`})}
    </div>
  `}function zi(e){let t=[...e.doublonsPotentiels()].sort((t,n)=>(e.technique(t.aId)?.nom??``).localeCompare(e.technique(n.aId)?.nom??``,`fr`,{sensitivity:`base`})),n=(e.bibliotheque.doublonsIgnores??[]).length,r=n?L`<button class="chip-filtre rescan-doublons" style="margin:8px 18px 0"
        @click=${()=>void e.rescannerDoublons()}>
        ↻ Rescanner <span>retrouve les ${n} paire${n>1?`s`:``} déjà écartée${n>1?`s`:``}</span>
      </button>`:R,i=e.bibliotheque.fusions??[],a=i.length?L`<div class="carte-atelier" style="margin-top:10px">
        <div class="titre-atelier" style="font-size:14px">Fusions réversibles</div>
        <p class="fil-vide" style="padding:2px 0 6px">Défusionner rétablit les deux fiches d'origine (les liens entrants restent sur la fiche fusionnée).</p>
        ${i.map(t=>L`<div class="ligne-atelier">
            <span class="details" style="flex:1">🔀 « ${t.a.technique.nom} » + « ${t.b.technique.nom} »</span>
            <button class="chip-filtre" @click=${()=>void e.defusionner(t.fusionneeId)}>Défuser</button>
          </div>`)}
      </div>`:R;if(t.length===0)return L`
      <p class="fil-vide" style="padding-top:10px">Aucun doublon détecté. Deux fiches de nom identique ou proche, venant de sources différentes, s'afficheraient ici.</p>
      ${r}
      ${a}
    `;let o=e.doublonOuvert?t.find(t=>ui(t.aId,t.bId)===e.doublonOuvert):void 0;return o?L`
      <div class="actions-bibliotheque" style="padding-top:8px">
        <button class="chip-filtre" @click=${()=>{e.doublonOuvert=null,e.fusionDoublon=null,e.requestUpdate()}}>← Tous les doublons</button>
      </div>
      ${Hi(e,o)}
    `:L`
    <p class="fil-vide" style="padding:8px 2px 6px">
      Deux fiches de nom identique ou proche, venant de sources différentes. Elles
      restent indépendantes tant que tu ne décides rien — choisis-en une pour comparer.
    </p>
    <div class="fil doublons-liste">
      ${t.map(t=>Bi(e,t))}
    </div>
    ${r}
    ${a}
  `}function Bi(e,t){let n=e.technique(t.aId),r=e.technique(t.bId);return!n||!r?L``:L`<button class="ligne-menu ligne-doublon" @click=${()=>{e.doublonOuvert=ui(t.aId,t.bId),e.requestUpdate()}}>
    <span class="ligne-menu-icone" style="background:#efe3d6" aria-hidden="true">🔀</span>
    <span class="ligne-menu-corps">
      <span class="ligne-menu-titre">${n.nom}</span>
      <span class="ligne-menu-etat">${n.nom===r.nom?`même nom, deux sources`:`≈ « ${r.nom} »`}</span>
    </span>
    <span class="chevron">›</span>
  </button>`}function Vi(e,t,n){return L`<div class="doublon-cote">
    <div class="doublon-apercu">
      ${Lr(e,t.technique,t.source)}
    </div>
    <div class="doublon-titre">${n} · ${t.technique.nom}</div>
    ${t.description?L`<div class="doublon-desc">${t.description.slice(0,140)}${t.description.length>140?`…`:``}</div>`:R}
    <div class="doublon-chiffres">
      ${t.medias.length} média${t.medias.length>1?`s`:``} ·
      ${t.pointsCles.length} point${t.pointsCles.length>1?`s`:``} ·
      ${t.niveaux.length} niveau${t.niveaux.length>1?`x`:``} ·
      ${t.relations} relation${t.relations>1?`s`:``}
    </div>
  </div>`}function Hi(e,t){let n=mi(e.bibliotheque,t.aId,t.bId);if(!n)return L``;let r=e.fusionDoublon!==null&&e.fusionDoublon.aId===t.aId&&e.fusionDoublon.bId===t.bId;return L`<div class="doublon">
    <div class="doublon-cotes">
      ${Vi(e,n.a,`A`)}
      ${Vi(e,n.b,`B`)}
    </div>
    ${r?Ui(e,t,n):L`<div class="doublon-decisions">
          <button class="chip-filtre" @click=${()=>void e.classerDoublon(t.aId,t.bId,`Conservées toutes les deux ✓ — fiches indépendantes`)}>
            Conserver les deux
          </button>
          <button class="chip-filtre" @click=${()=>void e.resoudreDoublonGarder(t.aId,t.bId)}>
            Garder « ${n.a.technique.nom} » (A)
          </button>
          <button class="chip-filtre" @click=${()=>void e.resoudreDoublonGarder(t.bId,t.aId)}>
            Garder « ${n.b.technique.nom} » (B)
          </button>
          <button class="chip-filtre" @click=${()=>{e.fusionDoublon={aId:t.aId,bId:t.bId,choix:{titre:`a`,textes:`deux`,medias:`deux`,niveaux:`deux`,relations:`deux`}},e.requestUpdate()}}>Fusionner…</button>
          <button class="chip-filtre" @click=${()=>void e.classerDoublon(t.aId,t.bId,`Marquées « pas des doublons » — plus proposées`)}>
            Ce ne sont pas des doublons
          </button>
        </div>`}
  </div>`}function Ui(e,t,n){let r=e.fusionDoublon,i=r.choix,a=t=>{e.fusionDoublon={...r,choix:{...i,...t}},e.requestUpdate()},o=n.a.technique.nom,s=n.b.technique.nom,c=(e,t,n)=>L`<div class="fusion-ligne">
    <span class="fusion-libelle">${e}</span>
    <div class="chips-filtres" style="padding:0">
      ${n.map(e=>L`<button class="chip-filtre ${i[t]===e.valeur?`actif`:``}"
          @click=${()=>a({[t]:e.valeur})}>${e.texte}</button>`)}
    </div>
  </div>`,l=L``;try{let n=gi(e.bibliotheque,t.aId,t.bId,i),r=n.techniques.find(e=>e.id===t.aId),a=n.contributions.filter(e=>e.techniqueId===r.id&&e.provenance!==`personnel`),o=a.reduce((e,t)=>e+t.medias.length,0),s=a.map(e=>e.description??``).filter(Boolean).join(` `).slice(0,120);l=L`<div class="fusion-apercu">
      <div class="fusion-apercu-titre">Aperçu : « ${r.nom} »</div>
      <div class="doublon-chiffres">${o} média${o>1?`s`:``} · ${r.niveauxIds.length} niveau${r.niveauxIds.length>1?`x`:``} · ${r.relations.length} relation${r.relations.length>1?`s`:``}</div>
      ${s?L`<div class="doublon-desc">${s}${s.length>=120?`…`:``}</div>`:R}
    </div>`}catch{l=L`<p class="fil-vide">Aperçu indisponible pour ce choix.</p>`}return L`<div class="fusion-panneau">
    ${c(`Titre et famille`,`titre`,[{valeur:`a`,texte:`A (${o})`},{valeur:`b`,texte:`B (${s})`}])}
    ${c(`Textes`,`textes`,[{valeur:`a`,texte:`A`},{valeur:`b`,texte:`B`},{valeur:`deux`,texte:`Les deux`}])}
    ${c(`Médias`,`medias`,[{valeur:`a`,texte:`A`},{valeur:`b`,texte:`B`},{valeur:`deux`,texte:`Les deux`}])}
    ${c(`Niveaux`,`niveaux`,[{valeur:`a`,texte:`A`},{valeur:`b`,texte:`B`},{valeur:`deux`,texte:`Les deux`}])}
    ${c(`Relations`,`relations`,[{valeur:`a`,texte:`A`},{valeur:`b`,texte:`B`},{valeur:`deux`,texte:`Les deux`}])}
    ${l}
    <div class="doublon-decisions">
      <button class="bouton principal" @click=${()=>void e.fusionnerDoublonAvec(t.aId,t.bId,i)}>Fusionner en une fiche</button>
      <button class="chip-filtre" @click=${()=>{e.fusionDoublon=null,e.requestUpdate()}}>Annuler</button>
    </div>
  </div>`}function Wi(e,t){let n=Mi.has(t.id);return L`<div class="ligne-atelier ligne-orpheline" style="flex-wrap:wrap">
    <span class="details" style="flex:1">🎞 fichier de ${ji(t.taille)} — plus rien ne le référence</span>
    <button class="chip-filtre" @click=${()=>{n?Mi.delete(t.id):Mi.add(t.id),e.requestUpdate()}}>
      ${n?`Replier`:`Vérifier`}</button>
    ${n?L`<div style="width:100%">
          <movenso-video-locale .app=${e} .mediaId=${t.id}></movenso-video-locale>
          <button class="action-danger" style="margin-top:6px"
            @click=${()=>{confirm(`Supprimer définitivement ce fichier inutilisé (${ji(t.taille)}) ?`)&&(Mi.delete(t.id),e.supprimerVideoOrpheline(t.id))}}>Supprimer ce fichier inutilisé</button>
        </div>`:R}
  </div>`}var Gi=null;function Ki(){Gi=null,qi=null}var qi=null,Ji=new Set,Yi=null;function Xi(e){let t=e.bibliotheque,n=new Map,r=(e,t,r)=>{let i=n.get(e.id);i||(i={media:e,refs:[],disciplines:new Set},n.set(e.id,i)),i.refs.push(t),r&&i.disciplines.add(r)};for(let n of t.contributions){let t=n.techniqueId?e.technique(n.techniqueId):void 0;for(let e of n.medias)r(e,{nom:t?t.nom:`capture à rattacher`,techniqueId:n.techniqueId},t?.disciplineId)}for(let e of t.compositions)for(let t of e.blocs)for(let n of t.medias)r(n,{nom:`composition « ${e.nom} »`,techniqueId:null});return n}function Zi(e){return e.label?.trim()?e.label.trim():e.nomOriginal?.trim()?e.nomOriginal.trim():e.type===`local`?`vidéo`:e.type===`plateforme`?e.service??`vidéo en ligne`:`lien`}function Qi(e){return e.type===`plateforme`&&e.service===`youtube`?`https://www.youtube.com/watch?v=${e.ref}`:e.ref}function $i(e,t,n,r,i=`neutre`){let a=Gi===r;return L`<button class="kpi kpi-filtre ${a?`actif`:``}" aria-expanded=${a}
    @click=${()=>{Gi=a?null:r,e.requestUpdate()}}>
    <span class="voyant ${t?i:`vert`}"></span>
    <span class="kpi-libelle">${n}</span>
    <span class="kpi-nombre">${t}</span>
    <span class="chevron" aria-hidden="true">${a?`▾`:`▸`}</span>
  </button>`}function ea(e,t){let n=t.media,r=n.type===`local`?`🎞`:n.type===`plateforme`?`▶`:`🔗`,i=n.type===`local`&&e.taillesVideos.has(n.id),a=n.type===`local`?e.taillesVideos.get(n.id)??n.taille:void 0,o=n.type===`local`?i?ji(a??0):`fichier absent`:`en ligne`,s=t.refs[0]?.nom??`média`,c=t.refs.find(e=>e.techniqueId),l=Ji.has(n.id),u=Yi===n.id;return L`<div class="ligne-atelier ligne-media" style="flex-wrap:wrap">
    <span class="details" style="flex:1;min-width:0">
      <span aria-hidden="true">${r}</span>
      ${c?L`<button class="lien-media-fiche" @click=${()=>e.ouvrirFiche(c.techniqueId)}>${s}</button>`:L`<b>${s}</b>`}
      <span aria-hidden="true"> · </span>
      ${u?L`<input class="champ-mini nom-media-champ" .value=${n.label??``} placeholder=${Zi(n)} aria-label="Libellé du média"
            @change=${t=>void e.majMediaLabel(n.id,t.target.value)}>`:L`<span>${Zi(n)}</span>`}
      <span style="opacity:.7"> · ${o}</span>
    </span>
    <button class="bouton-icone" aria-label="Modifier ce média" title=${n.type===`local`?`Renommer`:`Modifier le nom et le lien`}
      @click=${()=>{Yi=u?null:n.id,e.requestUpdate()}}>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>
    </button>
    ${n.type===`local`?L`<button class="chip-filtre" ?disabled=${!i}
          @click=${()=>{l?Ji.delete(n.id):Ji.add(n.id),e.requestUpdate()}}>
          ${l?`Replier`:`▶ Aperçu`}</button>`:c?L`<button class="chip-filtre" @click=${()=>e.ouvrirFiche(c.techniqueId)}>Ouvrir la fiche</button>`:L`<a class="chip-filtre" href=${n.ref} target="_blank" rel="noopener">▶ Ouvrir le lien</a>`}
    ${u&&n.type!==`local`?L`<input class="champ-mini" style="width:100%; margin-top:6px" inputmode="url" aria-label="Lien du média (YouTube ou autre)"
          placeholder="🔗 Lien (YouTube ou autre)" .value=${Qi(n)}
          @change=${t=>void e.majMediaLien(n.id,t.target.value)}>`:R}
    ${l&&i?L`<div style="width:100%"><movenso-video-locale .app=${e} .mediaId=${n.id}></movenso-video-locale></div>`:R}
  </div>`}function ta(e,t){let n=e.bibliotheque.disciplines,r=qi&&n.some(e=>e.id===qi)?qi:null,i=(r?t.filter(e=>e.disciplines.has(r)):t).slice().sort((e,t)=>(e.refs[0]?.nom??Zi(e.media)).localeCompare(t.refs[0]?.nom??Zi(t.media),`fr`,{sensitivity:`base`}));return L`<div class="mediatheque-liste">
    ${n.length>=2?L`<div class="chips-filtres" style="padding:2px 0 6px">
          <button class="chip-filtre ${r===null?`actif`:``}" @click=${()=>{qi=null,e.requestUpdate()}}>Toutes</button>
          ${n.map(t=>L`<button class="chip-filtre ${r===t.id?`actif`:``}"
            @click=${()=>{qi=t.id,e.requestUpdate()}}>${t.nom}</button>`)}
        </div>`:R}
    ${i.length?i.map(t=>ea(e,t)):L`<p class="fil-vide" style="padding:6px 0 8px">${t.length?`Aucun média pour cette discipline.`:`Aucun média de ce type pour l'instant.`}</p>`}
  </div>`}function na(e,t,n,r){let i=e.bibliotheque.disciplines,a=qi&&i.some(e=>e.id===qi)?qi:null,o=(a?t.filter(e=>e.disciplineId===a):t).slice().sort((e,t)=>e.nom.localeCompare(t.nom,`fr`,{sensitivity:`base`}));return L`<div class="mediatheque-liste">
    ${i.length>=2?L`<div class="chips-filtres" style="padding:2px 0 6px">
          <button class="chip-filtre ${a===null?`actif`:``}" @click=${()=>{qi=null,e.requestUpdate()}}>Toutes</button>
          ${i.map(t=>L`<button class="chip-filtre ${a===t.id?`actif`:``}"
            @click=${()=>{qi=t.id,e.requestUpdate()}}>${t.nom}</button>`)}
        </div>`:R}
    ${o.length?o.map(t=>{let r=i.find(e=>e.id===t.disciplineId);return L`<div class="ligne-atelier ligne-media">
            <span class="details" style="flex:1;min-width:0">
              <button class="lien-media-fiche" @click=${()=>e.ouvrirFiche(t.id)}>${t.nom}</button>
              ${r?L`<span style="opacity:.7"> · ${r.nom}</span>`:R}
            </span>
            <button class="chip-filtre" @click=${()=>e.ouvrirFiche(t.id)}>${n}</button>
          </div>`}):L`<p class="fil-vide" style="padding:6px 0 8px">${t.length?`Aucune pour cette discipline.`:r}</p>`}
  </div>`}function ra(e){return L`<div class="mediatheque-liste">
    <p class="details" style="padding:2px 2px 6px">Vérifie chacun avant de le supprimer — jamais en masse.</p>
    ${e.videosOrphelines.length?e.videosOrphelines.map(t=>Wi(e,t)):L`<p class="fil-vide" style="padding:6px 0 8px">Aucun fichier inutilisé.</p>`}
  </div>`}var ia=new Set;function aa(e,t){let n=e.bibliotheque.techniques.filter(e=>e.disciplineId===t.id),r=n.length,i=new Set(n.map(e=>e.id));return L`
    <div class="carte-atelier carte-discipline">
      <div class="discipline-ligne">
        <input class="champ-edition titre-discipline-champ" .value=${t.nom} aria-label="Nom de la discipline"
               @change=${n=>void e.majNomDiscipline(t.id,n.target.value)}>
        <button class="bouton-discipline danger" aria-label="Supprimer la discipline" title="Supprimer"
          @click=${()=>{r===0?e.autoriser(`destruction_ou_sensible`,`Saisis le PIN pour retirer « ${t.nom} ».`,()=>{confirm(`Retirer la discipline vide « ${t.nom} » ?`)&&e.supprimerDiscipline(t.id)}):(ia.add(t.id),e.requestUpdate())}}>🗑️</button>
      </div>
      <div class="details">${r} technique${r>1?`s`:``}, ${t.familles.length} catégorie${t.familles.length>1?`s`:``}, ${t.niveaux.length} niveau${t.niveaux.length>1?`x`:``}</div>
      ${ia.has(t.id)?ua(e,t,n,i):R}
    </div>
  `}function oa(e,t){let n=`${t.id}:familles`,r={reordonner:(n,r)=>e.deplacerTaxonomieVers(t.id,`familles`,n,r),enregistrer:()=>void e.enregistrerReordre()},i=r=>{e.ajouterTaxonomie(t.id,`familles`,r.value),r.value=``,Y.delete(n),e.requestUpdate()};return L`
    <details class="carte-atelier sous-volet">
      <summary class="encart-entete"><span class="titre-atelier">Catégories <span class="carnet-compte">${t.familles.length}</span></span></summary>
      <div style="padding-top:8px">
      <button class="chip-filtre ${Y.has(n)?`actif`:``}"
        @click=${()=>{Y.has(n)?Y.delete(n):Y.add(n),e.requestUpdate()}}>${Y.has(n)?`− Fermer`:`＋ Ajouter une catégorie`}</button>
      ${Y.has(n)?L`<div class="ligne-atelier">
            <input class="champ-mini" placeholder="Nom de la catégorie" autofocus aria-label="Nouvelle catégorie"
                   @keydown=${e=>{e.key===`Enter`&&i(e.target)}}>
            <button class="bouton" style="flex:none"
              @click=${e=>i(e.target.parentElement.querySelector(`input`))}>Ajouter</button>
          </div>`:R}
      ${t.familles.map(n=>L`
        <div class="ligne-atelier ${e.reordreGlisse===n.id?`glisse`:``}" data-glisser-id=${n.id}>
          ${t.familles.length>1?li(e,n.id,r):R}
          <input class="champ-mini" .value=${n.nom} aria-label="Nom de la catégorie"
                 @change=${r=>void e.majTaxonomie(t.id,`familles`,n.id,{nom:r.target.value})}>
          ${fa(e,t,`familles`,n.id,n.nom,`la catégorie`)}
        </div>
        ${pa(e,t,`familles`,n.id,n.nom)}`)}
      ${t.familles.length===0&&!Y.has(n)?L`<p class="fil-vide" style="padding:6px 2px 0">Aucune catégorie — touche ＋.</p>`:R}
      </div>
    </details>
  `}function sa(e,t){let n=`${t.id}:niveaux`,r={reordonner:(n,r)=>e.deplacerTaxonomieVers(t.id,`niveaux`,n,r),enregistrer:()=>void e.enregistrerReordre()},i=r=>{e.ajouterTaxonomie(t.id,`niveaux`,r.value),r.value=``,Y.delete(n),e.requestUpdate()};return L`
    <details class="carte-atelier sous-volet">
      <summary class="encart-entete"><span class="titre-atelier">Niveaux <span class="carnet-compte">${t.niveaux.length}</span></span></summary>
      <div style="padding-top:8px">
      <button class="chip-filtre ${Y.has(n)?`actif`:``}"
        @click=${()=>{Y.has(n)?Y.delete(n):Y.add(n),e.requestUpdate()}}>${Y.has(n)?`− Fermer`:`＋ Ajouter un niveau`}</button>
      ${Y.has(n)?L`<div class="ligne-atelier">
            <input class="champ-mini" placeholder="Nom du niveau" autofocus aria-label="Nouveau niveau"
                   @keydown=${e=>{e.key===`Enter`&&i(e.target)}}>
            <button class="bouton" style="flex:none"
              @click=${e=>i(e.target.parentElement.querySelector(`input`))}>Ajouter</button>
          </div>`:R}
      ${t.niveaux.map(n=>L`
        <div class="ligne-atelier ${e.reordreGlisse===n.id?`glisse`:``}" data-glisser-id=${n.id}>
          ${t.niveaux.length>1?li(e,n.id,r):R}
          <input class="champ-mini" .value=${n.nom} aria-label="Nom du niveau"
                 @change=${r=>void e.majTaxonomie(t.id,`niveaux`,n.id,{nom:r.target.value})}>
          ${la(e,t,n)}
          ${fa(e,t,`niveaux`,n.id,n.nom,`le niveau`)}
        </div>
        ${pa(e,t,`niveaux`,n.id,n.nom)}`)}
      ${t.niveaux.length===0&&!Y.has(n)?L`<p class="fil-vide" style="padding:6px 2px 0">Aucun niveau — touche ＋.</p>`:R}
      </div>
    </details>
  `}var ca=new Set;function la(e,t,n){let r=ca.has(n.id)||n.couleur2!==void 0;return L`<span class="couleur-niveau">
    <span class="apercu-niveau" title="Aperçu du niveau" style="background:${n.couleur?n.couleur2?`linear-gradient(90deg, ${n.couleur} 50%, ${n.couleur2} 50%)`:n.couleur:`var(--trait)`}"
      @click=${()=>{ca.add(n.id),e.requestUpdate()}}></span>
    <input type="color" class="pastille-couleur" .value=${n.couleur??`#cccccc`} title="Couleur"
           @change=${r=>void e.majTaxonomie(t.id,`niveaux`,n.id,{couleur:r.target.value})}>
    ${r?L`<input type="color" class="pastille-couleur" .value=${n.couleur2??n.couleur??`#cccccc`} title="Seconde couleur (bicolore)"
               @change=${r=>void e.majTaxonomie(t.id,`niveaux`,n.id,{couleur2:r.target.value})}>`:L`<button class="chip-mini-plus" aria-label="Seconde couleur" title="Ajouter une seconde couleur"
               @click=${()=>{ca.add(n.id),e.requestUpdate()}}>＋</button>`}
  </span>`}function ua(e,t,n,r){let i=e.bibliotheque,a=i.contributions.filter(e=>e.techniqueId&&r.has(e.techniqueId)),o=a.filter(e=>e.provenance===`personnel`).length,s=a.flatMap(e=>e.medias).filter(e=>e.type===`local`).length,c=i.compositions.filter(e=>e.blocs.some(e=>e.type===`technique`&&e.techniqueId&&r.has(e.techniqueId))),l=()=>{ia.delete(t.id),e.requestUpdate()};return L`<div class="suppression-discipline">
    <p class="details" style="line-height:1.5">
      Supprimer « ${t.nom} » retirera <b>${n.length} technique${n.length>1?`s`:``}</b>
      (${s?`${s} vidéo${s>1?`s`:``} locale${s>1?`s`:``}`:`aucune vidéo locale`}).
      ${o?L`${o>1?`Tes ${o} notes personnelles reviendront`:`Ta note personnelle reviendra`}
            « à rattacher » — rien de personnel n'est perdu.`:R}
      ${c.length?`Compositions concernées : ${c.map(e=>e.nom).join(`, `)} — leurs blocs resteront lisibles « à retrouver ».`:`Aucune composition concernée.`}
      Un point de restauration est créé d'abord.
    </p>
    <div class="chips-filtres" style="flex-wrap:wrap; padding:4px 0 0">
      <button class="chip-filtre" @click=${l}>Annuler</button>
      <button class="chip-filtre" title="Sauvegarde complète avant de supprimer"
        @click=${()=>void e.exporterTout(!0)}>Exporter tout d'abord (.movpack)</button>
      <button class="action-danger" style="padding:6px 10px; font-size:12px"
        @click=${()=>e.autoriser(`destruction_ou_sensible`,`Saisis le PIN pour supprimer « ${t.nom} » et son contenu.`,()=>{confirm(`Dernière confirmation : supprimer définitivement « ${t.nom} » et ses ${n.length} technique${n.length>1?`s`:``} ?\nUn point de restauration sera créé juste avant.`)&&(l(),e.supprimerDisciplineEtContenu(t.id))})}>Supprimer la discipline et son contenu</button>
    </div>
  </div>`}var da=null;function fa(e,t,n,r,i,a){return L`
    <button class="bouton-icone" aria-label="Retirer ${a}"
      @click=${()=>{e.usagesTaxonomie(t.id,n,r).length?(da=`${t.id}:${n}:${r}`,e.requestUpdate()):confirm(`Retirer ${a} « ${i} » (inutilisé${n===`familles`?`e`:``}) ?`)&&e.supprimerTaxonomie(t.id,n,r)}}>✕</button>
  `}function pa(e,t,n,r,i){if(da!==`${t.id}:${n}:${r}`)return L``;let a=e.usagesTaxonomie(t.id,n,r),o=t[n].filter(e=>e.id!==r),s=()=>{da=null,e.requestUpdate()};return L`<div class="suppression-discipline suppression-taxonomie">
    <p class="details" style="line-height:1.5">
      « ${i} » est utilisée par <b>${a.length} technique${a.length>1?`s`:``}</b> :
    </p>
    <div class="chips-filtres" style="flex-wrap:wrap; padding:2px 0 0">
      ${a.slice(0,8).map(t=>L`<button class="chip-filtre" @click=${()=>e.ouvrirFiche(t.id)}>${t.nom}</button>`)}
      ${a.length>8?L`<span class="chip-filtre" style="cursor:default">… ${a.length-8} de plus</span>`:R}
    </div>
    <div class="chips-filtres" style="flex-wrap:wrap; padding:6px 0 0">
      <button class="chip-filtre" @click=${s}>Annuler</button>
      ${o.map(i=>L`<button class="chip-filtre" @click=${()=>{s(),e.supprimerTaxonomie(t.id,n,r,i.id)}}>
          Remplacer par « ${i.nom} »</button>`)}
      <button class="action-danger" style="padding:6px 10px; font-size:12px"
        @click=${()=>{s(),e.supprimerTaxonomie(t.id,n,r,null)}}>
        Retirer la classification</button>
    </div>
  </div>`}function ma(e){return L`
    <div class="carte-atelier">
      <div class="ligne-atelier"><span class="titre-atelier" style="font-size:14px">Liens entre techniques</span></div>
      <details class="sous-volet">
        <summary class="details" style="cursor:pointer">Comment ça marche ?</summary>
        <p class="fil-vide" style="padding:6px 0 0">
          Un lien se lit dans les deux sens : « Ko-uchi-gari <b>prépare</b>
          O-soto-gari » s'affiche aussi « O-soto-gari <b>préparée par</b>
          Ko-uchi-gari ». C'est ce libellé inverse qu'on te demande — laisse-le
          vide si le lien se lit pareil des deux côtés (« similaire à »).
        </p>
      </details>
      ${e.bibliotheque.typesRelation.map(t=>ha===t.id?ba(e,t):ya(e,t))}
      <div class="ligne-atelier">
        <input class="champ-mini" placeholder="Nouveau lien…" aria-label="Libellé du type">
        <input class="champ-mini" placeholder="Lecture inverse…" aria-label="Libellé inverse">
        <button class="bouton principal" style="flex:none"
          @click=${t=>{let n=t.target.parentElement.querySelectorAll(`input`);e.ajouterTypeRelation(n[0].value,n[1].value),n.forEach(e=>e.value=``)}}>Ajouter</button>
      </div>
    </div>
  `}var ha=null,ga=null;function _a(e,t,n){let r=e.bibliotheque,i=new Map(r.techniques.map(e=>[e.id,e.nom])),a=[],o=new Set;for(let e of r.techniques)for(let r of e.relations){if(r.type!==t)continue;let s=i.get(r.cibleId);if(s===void 0)continue;let c=n?[e.id,r.cibleId].sort().join(`|`):`${e.id}|${r.cibleId}`;o.has(c)||(o.add(c),a.push({sourceId:e.id,sourceNom:i.get(e.id)??`?`,cibleId:r.cibleId,cibleNom:s}))}return a.sort((e,t)=>e.sourceNom.localeCompare(t.sourceNom))}function va(e,t){let n=_a(e,t.id,t.symetrique??!1);if(n.length===0)return L`<p class="fil-vide" style="padding:4px 12px 8px">Aucun lien de ce type pour l'instant.</p>`;let r=t.symetrique?`⇄`:`→`;return L`<div class="instances-relation">
    ${n.map(n=>L`<div class="ligne-instance">
        <button class="lien-instance" @click=${()=>e.ouvrirFiche(n.sourceId)}
          title="Ouvrir « ${n.sourceNom} »">${n.sourceNom} <span class="fleche-instance">${r}</span> ${n.cibleNom}</button>
        <button class="bouton-icone danger" aria-label=${`Retirer le lien ${n.sourceNom} ${r} ${n.cibleNom}`} title="Retirer ce lien"
          @click=${()=>{confirm(`Retirer le lien « ${n.sourceNom} ${r} ${n.cibleNom} » ?`)&&e.retirerRelation(n.sourceId,n.cibleId,t.id)}}>✕</button>
      </div>`)}
  </div>`}function ya(e,t){let n=e.usagesTypeRelation(t.id),r=ga===t.id;return L`<div class="type-relation-bloc">
    <div class="ligne-atelier">
      <button class="details lien-type" style="flex:1;text-align:left" aria-expanded=${r}
        @click=${()=>{ga=r?null:t.id,e.requestUpdate()}}>
        <span class="chevron-type" aria-hidden="true">${r?`▾`:`▸`}</span>
        ${t.libelle}${t.symetrique?` ⇄`:` → ${t.libelleInverse}`}
        ${n?L`<span class="kpi-nombre" style="font-size:10px">${n}</span>`:R}
        ${t.origine?L`<span style="opacity:.7"> · importé</span>`:R}
      </button>
      <button class="bouton-icone" aria-label="Modifier ce lien" title="Renommer / lecture inverse"
        @click=${()=>{ha=t.id,e.requestUpdate()}}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>
      </button>
      <button class="bouton-icone" aria-label="Supprimer ce lien"
        @click=${()=>{(n||confirm(`Retirer le lien « ${t.libelle} » (inutilisé) ?`))&&e.supprimerTypeRelation(t.id)}}>✕</button>
    </div>
    ${r?va(e,t):R}
  </div>`}function ba(e,t){let n=e.usagesTypeRelation(t.id);return L`<div class="ligne-atelier edition-type-relation" style="flex-wrap:wrap">
    <input class="champ-mini" .value=${t.libelle} aria-label="Libellé du lien">
    ${t.symetrique?L`<span class="details">⇄ se lit pareil des deux sens</span>`:L`<input class="champ-mini" .value=${t.libelleInverse??``} aria-label="Lecture inverse">`}
    <button class="chip-filtre" title=${n?`des relations utilisent déjà cette lecture`:`basculer la nature de lecture`}
      @click=${()=>void e.basculerSymetrieTypeRelation(t.id)}>${t.symetrique?`Rendre orienté`:`Rendre symétrique ⇄`}</button>
    <button class="bouton principal" style="flex:none; padding:7px 12px; font-size:12.5px"
      @click=${n=>{let r=n.target.parentElement.querySelectorAll(`input`);ha=null,e.majTypeRelation(t.id,{libelle:r[0].value,...t.symetrique?{}:{libelleInverse:r[1]?.value??``}})}}>OK</button>
  </div>`}var xa={requete:``,disciplineId:null};function Sa(e,t){e.autoriser(`destruction_ou_sensible`,`Saisis le PIN pour retirer « ${t.nom} ».`,()=>{let n=kr(e.bibliotheque,t.id),r=n.length?`\nUtilisée dans ${n.length} composition${n.length>1?`s`:``} (${n.map(e=>e.nom).join(`, `)}).`:``;confirm(`Mettre « ${t.nom} » à la corbeille ?${r}\nGeste réversible : tu pourras la restaurer depuis Plus › Corbeille.`)&&e.supprimerTechnique(t.id)})}function Ca(e,t){let n=e.bibliotheque;t&&!n.disciplines.some(e=>e.id===t)&&(t=null);let r=new Set(n.techniques.map(e=>e.id)),i=new Set(n.contributions.filter(e=>e.techniqueId).map(e=>e.techniqueId)),a=new Set(n.contributions.filter(e=>e.techniqueId&&e.medias.length).map(e=>e.techniqueId)),o=new Set(e.mediasManquants.filter(e=>e.techniqueId).map(e=>e.techniqueId)),s=e=>n.disciplines.find(t=>t.id===e)?.nom??``,c=e=>e.familleId?n.disciplines.find(t=>t.id===e.disciplineId)?.familles.find(t=>t.id===e.familleId)?.nom??``:``,l=e=>{let t=[];return!e.familleId&&e.niveauxIds.length===0&&t.push(`sans classification`),i.has(e.id)?a.has(e.id)||t.push(`sans média`):t.push(`sans contenu`),e.relations.some(e=>!r.has(e.cibleId))&&t.push(`relation à réparer`),o.has(e.id)&&t.push(`vidéo manquante`),t},u=xa.requete.trim().toLowerCase(),d=n.techniques.filter(e=>!(t&&e.disciplineId!==t||u&&!`${e.nom} ${e.nomTraditionnel??``}`.toLowerCase().includes(u))).sort((e,t)=>e.nom.localeCompare(t.nom,`fr`,{sensitivity:`base`}));return L`
    <div class="carte-atelier" style="margin-top:10px">
      ${n.disciplines.length>1?L`<div class="chips-filtres" style="padding:0 0 4px" aria-label="Filtrer par discipline">
            <button class="chip-filtre ${t?``:`actif`}"
              @click=${()=>{xa.disciplineId=null,e.requestUpdate()}}>Toutes</button>
            ${n.disciplines.map(n=>L`<button class="chip-filtre ${t===n.id?`actif`:``}"
                @click=${()=>{xa.disciplineId=n.id,e.requestUpdate()}}>${n.nom}</button>`)}
          </div>`:R}
      <div class="recherche" style="margin:0">
        <input placeholder="Chercher une technique…" .value=${xa.requete}
               @input=${t=>{xa.requete=t.target.value,e.requestUpdate()}}>
      </div>
      ${d.map(t=>{let n=c(t);return L`<div class="ligne-gestion ligne-gestion-double">
          <button class="ligne-gestion-ouvrir" @click=${()=>e.ouvrirFiche(t.id)}>
            <span class="ligne-gestion-nom">${t.nom}</span>
            <span class="details">${s(t.disciplineId)}${n?` · ${n}`:``}</span>
            ${l(t).length?L`<span class="etiquettes-gestion">${l(t).map(e=>L`<span class="etiquette-gestion">${e}</span>`)}</span>`:R}
          </button>
          <button class="bouton-icone danger supprimer-technique" aria-label=${`Retirer ${t.nom}`} title="Retirer cette technique"
            @click=${()=>Sa(e,t)}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true"><path d="M4 7h16M9 7V5h6v2M6 7l1 13h10l1-13"/></svg>
          </button>
        </div>`})}
      ${d.length===0?L`<p class="fil-vide" style="padding:8px 0 0">Rien ne correspond.</p>`:R}
    </div>
  `}var X={disciplineId:null,tout:!0,techniques:new Set,avecVideos:!0,auteur:``,note:``,compositionsPerso:!1};function wa(e){let t=e.bibliotheque,n=e.publicationPrete;if(n)return L`
      <div class="carte-atelier">
        <div class="titre-atelier">Pack prêt</div>
        <p class="details" style="line-height:1.5"><b style="color:var(--encre)">${n.nomPack}</b> · ${ji(n.taille)}<br>${n.resume}</p>
        <div class="edition-actions">
          <button class="bouton principal" @click=${()=>e.enregistrerPublicationLocale()}>⇓ Enregistrer localement</button>
          <button class="bouton" @click=${()=>void e.partagerPublication()}>↗ Partager</button>
        </div>
        <button class="action-douce" style="margin-top:6px" @click=${()=>e.fermerPublication()}>← Préparer un autre pack</button>
      </div>
    `;let r=X.disciplineId&&t.disciplines.some(e=>e.id===X.disciplineId)?X.disciplineId:t.disciplines[0].id;X.disciplineId=r;let i=t.disciplines.find(e=>e.id===r),a=t.techniques.filter(e=>e.disciplineId===r),o=X.tout?a.length:a.filter(e=>X.techniques.has(e.id)).length,s=t=>{X.disciplineId=t,X.techniques=new Set,X.tout=!0,e.requestUpdate()},c=new Set(X.tout?a.map(e=>e.id):a.filter(e=>X.techniques.has(e.id)).map(e=>e.id)),l=new Set;for(let e of t.contributions)if(e.techniqueId&&c.has(e.techniqueId)&&e.provenance!==`personnel`)for(let t of e.medias)t.type===`local`&&l.add(t.id);let u=[...l].reduce((t,n)=>t+(e.taillesVideos.get(n)??0),0),d=t.compositions.filter(e=>e.provenance===`personnel`&&e.blocs.some(e=>e.type===`technique`&&e.techniqueId)&&e.blocs.every(e=>e.type!==`technique`||!e.techniqueId||c.has(e.techniqueId)));return L`
    <p class="fil-vide" style="padding-top:0">
      Produire un fichier <b>à partager</b> — pas une sauvegarde. Ton carnet, tes
      favoris et tes captures à reprendre ne partent jamais.
    </p>
    <div class="carte-atelier">
      <div class="etiquette-champ">Discipline</div>
      <div class="chips-filtres">
        ${t.disciplines.map(e=>L`<button class="chip-filtre ${e.id===r?`actif`:``}" @click=${()=>s(e.id)}>${e.nom}</button>`)}
      </div>

      <div class="etiquette-champ">Contenu</div>
      <div class="chips-filtres">
        <button class="chip-filtre ${X.tout?`actif`:``}" @click=${()=>{X.tout=!0,e.requestUpdate()}}>Tout (${a.length})</button>
        <button class="chip-filtre ${X.tout?``:`actif`}" @click=${()=>{X.tout=!1,e.requestUpdate()}}>Choix de techniques</button>
      </div>
      ${X.tout?R:L`<div class="publier-techniques">
            ${a.map(t=>L`<label class="niveau-coche">
                <input type="checkbox" ?checked=${X.techniques.has(t.id)}
                  @change=${()=>{X.techniques.has(t.id)?X.techniques.delete(t.id):X.techniques.add(t.id),e.requestUpdate()}}>
                <span>${t.nom}</span>
              </label>`)}
            ${a.length===0?L`<p class="fil-vide">Aucune technique dans cette discipline.</p>`:R}
          </div>`}

      <div class="etiquette-champ">Vidéos</div>
      <div class="chips-filtres">
        <button class="chip-filtre ${X.avecVideos?`actif`:``}" @click=${()=>{X.avecVideos=!0,e.requestUpdate()}}>Avec les vidéos locales</button>
        <button class="chip-filtre ${X.avecVideos?``:`actif`}" @click=${()=>{X.avecVideos=!1,e.requestUpdate()}}>Sans les vidéos</button>
      </div>
      <p class="fil-vide" style="padding:4px 0 0">Les liens (YouTube…) restent inclus dans les deux cas.</p>

      ${d.length?L`<div class="etiquette-champ">Mes séances</div>
            <label class="niveau-coche">
              <input type="checkbox" ?checked=${X.compositionsPerso}
                @change=${()=>{X.compositionsPerso=!X.compositionsPerso,e.requestUpdate()}}>
              <span>Inclure ${d.length} séance${d.length>1?`s`:``} personnelle${d.length>1?`s`:``} (jouable${d.length>1?`s`:``} avec ce pack)</span>
            </label>
            <p class="fil-vide" style="padding:2px 0 0">Par défaut, tes séances perso restent privées.</p>`:R}

      <div class="etiquette-champ">Auteur du pack</div>
      <input class="champ-mini" placeholder="Auteur ou organisation (recommandé)" .value=${X.auteur}
             aria-label="Auteur du pack" @input=${e=>X.auteur=e.target.value}>

      <div class="etiquette-champ">Note de diffusion</div>
      <input class="champ-mini" placeholder="Note de diffusion (facultatif)" .value=${X.note}
             aria-label="Note de diffusion" @input=${e=>X.note=e.target.value}>

      <div class="details" style="padding-top:4px">${o} technique${o>1?`s`:``}${X.avecVideos?u?` · ~${ji(u)} de vidéos`:` · aucune vidéo locale`:` · sans les vidéos`}</div>
      <button class="bouton principal" style="margin-top:8px; align-self:flex-start" ?disabled=${o===0}
        @click=${()=>void e.preparerPublication(r,{...X.tout?{}:{techniques:X.techniques},avecVideos:X.avecVideos,auteur:X.auteur,note:X.note,nom:i.nom,compositionsPersonnelles:X.compositionsPerso})}>Valider</button>
    </div>
  `}function Ta(e){return e.sauvegardes.length===0?L`<p class="fil-vide" style="padding-top:2px">
      Aucun point de restauration pour l'instant — ils se créent seuls avant chaque
      action sensible (import, suppression, restauration).
    </p>`:L`
    <div class="chips-filtres" style="flex-wrap:wrap">
      ${e.sauvegardes.map(t=>{let[n,r]=t.replace(`.json`,``).split(`__`),i=`${(n??``).replace(`T`,` `).slice(0,16)}${r?` · ${r.replaceAll(`-`,` `)}`:``}`;return L`<button class="chip-filtre"
          @click=${()=>e.autoriser(`destruction_ou_sensible`,`Saisis le PIN pour revenir à un état précédent.`,()=>{confirm(`Revenir à l'état « ${i} » ?\n— La bibliothèque actuelle (techniques, contributions, compositions, favoris) sera REMPLACÉE par cet état ; tout ce qui a été créé depuis sera retiré.\n— Les fichiers vidéo de l'appareil ne bougent PAS (les points de restauration n'incluent pas les vidéos).\n— L'état actuel est lui-même sauvegardé d'abord : ce retour est annulable.`)&&e.restaurerSauvegarde(t)})}>↺ ${i}</button>`})}
    </div>
    <p class="fil-vide" style="padding-top:6px">
      Points de restauration automatiques (10 conservés), données seules — pour la vraie
      sauvegarde avec vidéos, utilise « Sauvegarde complète ».
    </p>
  `}var Ea=[{id:`vermillon`,nom:`Vermillon`,couleur:`#B23A26`},{id:`indigo`,nom:`Indigo`,couleur:`#35506F`},{id:`foret`,nom:`Forêt`,couleur:`#2F6B4F`},{id:`ocre`,nom:`Ocre`,couleur:`#96682B`},{id:`prune`,nom:`Prune`,couleur:`#7A3E68`},{id:`acier`,nom:`Acier`,couleur:`#47586B`}],Da=!1;function Oa(e){let t=()=>{Da=!1,e.requestUpdate()};return L`
    ${yi(`Réinitialisation`,L`
    ${Da?L`<div class="suppression-discipline">
          <p class="details" style="line-height:1.5">
            Tout sera supprimé de cet appareil : la bibliothèque (techniques,
            contenus, compositions, favoris), les vidéos locales, les
            points de restauration ET les réglages — protections et PIN compris. Movenso
            reviendra à une Bibliothèque vide. Pense à faire une sauvegarde
            complète d'abord.
          </p>
          <div class="chips-filtres" style="flex-wrap:wrap; padding:4px 0 0">
            <button class="chip-filtre" @click=${t}>Annuler</button>
            <button class="chip-filtre" @click=${()=>void e.exporterTout(!0)}>Sauvegarder d'abord (.movpack)</button>
            <button class="action-danger" style="padding:6px 10px; font-size:12px"
              @click=${()=>{confirm(`Dernière confirmation : tout supprimer définitivement de cet appareil ?
Cette action ne se défait pas.`)&&(t(),e.reinitialiserTout())}}>Tout supprimer définitivement</button>
          </div>
        </div>`:L`<div class="ligne-atelier">
          <button class="action-danger reinitialiser"
            @click=${()=>e.autoriser(`destruction_ou_sensible`,`Saisis le PIN pour réinitialiser Movenso.`,()=>{Da=!0,e.requestUpdate()})}>Réinitialiser Movenso…</button>
        </div>`}
    `)}
  `}var Z={formulaire:null,desactivation:null,changementPin:!1,erreur:``,reveler:!1},ka={modifications:`Un PIN sera demandé pour créer, modifier, capturer, importer ou composer — la consultation reste toujours libre.`,suppressions:`Un PIN sera demandé pour supprimer, restaurer, revenir en arrière, publier ou sauvegarder — la consultation reste toujours libre.`,partage:`Tablette partagée : consultation libre pour tous ; modifications, suppressions et opérations sensibles protégées par ton PIN ; session courte ; démarrage sur la Bibliothèque.`};function Aa(e){let t=e.reglagesProtections,n=!!e.preferences.protections?.verification,r=e.preferences.protections?.verrouillage??`5min`,i=()=>{Z.formulaire=null,Z.desactivation=null,Z.changementPin=!1,Z.erreur=``,Z.reveler=!1,e.requestUpdate()},a=(r,a)=>L`
    <div class="ligne-atelier">
      <span class="details" style="flex:1">${t[r]?`🔒`:`—`} ${a} : <b>${t[r]?`protégée par le PIN`:`libre`}</b></span>
      ${t[r]?L`<button class="chip-filtre" @click=${()=>{Z.desactivation=r,Z.formulaire=null,Z.erreur=``,e.requestUpdate()}}>Désactiver…</button>`:L`<button class="chip-filtre" @click=${()=>{n?e.activerProtection(r):(Z.formulaire=r,Z.desactivation=null,Z.erreur=``,e.requestUpdate())}}>Protéger…</button>`}
    </div>
    ${Z.desactivation===r?Ma(e,r,i):R}
    ${Z.formulaire===r?ja(e,r,i):R}
  `;return L`
    ${yi(`Protections`,L`
    ${!t.modifications&&!t.suppressions?L`<p class="fil-vide etat-protections" style="padding-top:2px">
          Aucune protection active : tout est libre sur cet appareil. Tu peux
          demander un PIN local avant certaines actions (aucun compte, aucun serveur).
        </p>`:R}
    ${a(`modifications`,`Modifications`)}
    ${a(`suppressions`,`Suppressions et opérations sensibles`)}
    ${t.modifications||t.suppressions?L`<div class="reglage-session">
            <span class="details" style="display:block;padding-bottom:4px">Garder la session déverrouillée :</span>
            <div class="chips-filtres">
              ${[[`5min`,`5 min`],[`15min`,`15 min`],[`arriere-plan`,`jusqu'à l'arrière-plan`]].map(([t,n])=>L`<button class="chip-filtre ${r===t?`actif`:``}"
                  @click=${()=>void e.choisirVerrouillage(t)}>${n}</button>`)}
            </div>
          </div>
          <div class="ligne-atelier">
            <button class="chip-filtre" @click=${()=>{Z.changementPin=!Z.changementPin,Z.erreur=``,e.requestUpdate()}}>Changer le PIN…</button>
          </div>
          ${Z.changementPin?Na(e,i):R}
          ${e.journalSecurite.length||e.echecsCumules?L`<p class="details journal-securite" style="padding-top:2px">
                Journal (session) : ${e.journalSecurite.slice(-3).join(` · `)}${e.echecsCumules?` · échecs cumulés : ${e.echecsCumules}`:``}
              </p>`:R}
          <p class="fil-vide" style="padding-top:4px">
            PIN oublié ? Aucune récupération à distance : restaure une sauvegarde,
            ou réinitialise ci-dessous. Le PIN protège les actions dans l'app,
            pas le téléphone.
          </p>`:R}
    `)}
  `}function ja(e,t,n){let r=Z.reveler?`text`:`password`;return L`<div class="suppression-discipline formulaire-pin" style="border-color:var(--trait); background:var(--papier)">
    <p class="details" style="line-height:1.5">${ka[t]}</p>
    <div class="ligne-atelier" style="flex-wrap:wrap">
      <input class="champ-mini" type=${r} inputmode="numeric" autocomplete="off"
             placeholder="PIN (6 à 12 chiffres)" aria-label="Nouveau PIN">
      <input class="champ-mini" type=${r} inputmode="numeric" autocomplete="off"
             placeholder="Confirme le PIN" aria-label="Confirmation du PIN">
      <button class="chip-filtre" @click=${()=>{Z.reveler=!Z.reveler,e.requestUpdate()}}>
        ${Z.reveler?`Masquer`:`Révéler`}</button>
    </div>
    ${Z.erreur?L`<p class="details erreur-pin" role="alert" style="color:var(--accent)">${Z.erreur}</p>`:R}
    <div class="chips-filtres" style="padding:4px 0 0">
      <button class="chip-filtre" @click=${n}>Annuler</button>
      <button class="bouton principal" style="padding:7px 12px; font-size:12.5px"
        @click=${async r=>{let i=r.target.closest(`.formulaire-pin`).querySelectorAll(`input`),a={pin:i[0].value,confirmation:i[1].value},o=t===`partage`?await e.activerPrereglagePartage(a):await e.activerProtection(t,a);o?(Z.erreur=o,e.requestUpdate()):n()}}>Activer</button>
    </div>
  </div>`}function Ma(e,t,n){return L`<div class="suppression-discipline formulaire-pin">
    <div class="ligne-atelier" style="flex-wrap:wrap">
      <input class="champ-mini" type="password" inputmode="numeric" autocomplete="off"
             placeholder="PIN actuel" aria-label="PIN actuel">
      <button class="chip-filtre" @click=${n}>Annuler</button>
      <button class="action-danger" style="padding:6px 10px; font-size:12px"
        @click=${async r=>{let i=r.target.closest(`.formulaire-pin`).querySelector(`input`),a=await e.desactiverProtection(t,i.value);a?(Z.erreur=a,i.value=``,e.requestUpdate()):n()}}>Désactiver cette protection</button>
    </div>
    ${Z.erreur?L`<p class="details erreur-pin" role="alert" style="color:var(--accent)">${Z.erreur}</p>`:R}
  </div>`}function Na(e,t){return L`<div class="suppression-discipline formulaire-pin" style="border-color:var(--trait); background:var(--papier)">
    <div class="ligne-atelier" style="flex-wrap:wrap">
      <input class="champ-mini" type="password" inputmode="numeric" autocomplete="off" placeholder="PIN actuel" aria-label="PIN actuel">
      <input class="champ-mini" type="password" inputmode="numeric" autocomplete="off" placeholder="Nouveau PIN" aria-label="Nouveau PIN">
      <input class="champ-mini" type="password" inputmode="numeric" autocomplete="off" placeholder="Confirme le nouveau" aria-label="Confirmation du nouveau PIN">
    </div>
    ${Z.erreur?L`<p class="details erreur-pin" role="alert" style="color:var(--accent)">${Z.erreur}</p>`:R}
    <div class="chips-filtres" style="padding:4px 0 0">
      <button class="chip-filtre" @click=${t}>Annuler</button>
      <button class="bouton principal" style="padding:7px 12px; font-size:12.5px"
        @click=${async n=>{let r=n.target.closest(`.formulaire-pin`).querySelectorAll(`input`),i=await e.changerPin(r[0].value,r[1].value,r[2].value);i?(Z.erreur=i,e.requestUpdate()):t()}}>Changer le PIN</button>
    </div>
  </div>`}function Pa(e){let t=e.bibliotheque,n=e.preferences.demarrage,r=n.mode===`bibliotheque`||n.mode===`derniere`||n.mode===`discipline`,i=e.preferences.vueRelationBeta??!1;return L`
    <div class="aide" style="font-size:12px; color:var(--sourdine)">L'écran ouvert au lancement de l'app.</div>
    <div class="chips-filtres" style="flex-wrap:wrap; padding:2px 0 0">
      <button class="chip-filtre ${r?`actif`:``}"
        @click=${()=>e.changerDemarrage(`bibliotheque`)}>Bibliothèque</button>
      <button class="chip-filtre ${n.mode===`favoris`?`actif`:``}"
        @click=${()=>e.changerDemarrage(`favoris`)}>Favoris</button>
      <button class="chip-filtre ${n.mode===`compositions`?`actif`:``}"
        @click=${()=>e.changerDemarrage(`compositions`)}>Compositions</button>
      ${i?L`<button class="chip-filtre ${n.mode===`relations`?`actif`:``}"
            @click=${()=>e.changerDemarrage(`relations`)}>Relations</button>`:R}
    </div>
    ${r?L`<div class="aide" style="font-size:12px; color:var(--sourdine); padding-top:6px">Ouvrir la Bibliothèque sur :</div>
          <div class="chips-filtres" style="flex-wrap:wrap; padding:2px 0 0">
            <button class="chip-filtre ${n.mode===`bibliotheque`?`actif`:``}"
              @click=${()=>e.changerDemarrage(`bibliotheque`)}>Toutes</button>
            <button class="chip-filtre ${n.mode===`derniere`?`actif`:``}"
              @click=${()=>e.changerDemarrage(`derniere`)}>Dernière consultée</button>
            ${t.disciplines.map(t=>L`<button class="chip-filtre ${n.mode===`discipline`&&n.disciplineId===t.id?`actif`:``}"
                @click=${()=>e.changerDemarrage(`discipline`,t.id)}>${t.nom}</button>`)}
          </div>`:R}
  `}var Fa={packs:`Disciplines et classement`,techniques:`Gestion des techniques`,atraiter:`À traiter`,doublons:`Doublons potentiels`,medias:`Médias`,relations:`Relations entre techniques`,corbeille:`Corbeille`,publier:`Créer ou exporter un pack`,sauvegardes:`Sauvegardes`,securite:`Sécurité`,apparence:`Apparence`,diagnostic:`Diagnostic et maintenance`};function Ia(e,t){switch(t){case`packs`:return bi(e);case`techniques`:return xi(e);case`atraiter`:return Pi(e);case`doublons`:return zi(e);case`medias`:return Ni(e);case`relations`:return Li(e);case`corbeille`:return Ri(e);case`publier`:return Si(e);case`sauvegardes`:return Ci(e);case`securite`:return wi(e);case`apparence`:return Ti(e);case`diagnostic`:return ki(e)}}function La(e,t){return L`
    <div class="ecran">
      <div class="barre">
        <button class="bouton-icone" aria-label="Retour" @click=${()=>e.retour()}>
          <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M15 5l-7 7 7 7"/></svg>
        </button>
        <span class="contexte">${Fa[t]}</span>
      </div>
      ${Ia(e,t)}
    </div>
  `}function Ra(e){let t=e.bibliotheque,n=new Set;for(let e of t.techniques)q(e)!==`local`&&n.add(q(e));for(let e of t.contributions)q(e)!==`local`&&n.add(q(e));n.size;let r=t.disciplines.length,i=t.techniques.length,a=t.disciplines.reduce((e,t)=>e+t.familles.length,0),o=t.disciplines.reduce((e,t)=>e+t.niveaux.length,0),s=e.doublonsPotentiels().length,c=e.taillesVideos.size,l=new Set(t.contributions.filter(e=>e.techniqueId&&e.medias.length).map(e=>e.techniqueId)),u=t.contributions.filter(e=>e.techniqueId===null).length,d=t.techniques.filter(e=>!l.has(e.id)).length,f=t.techniques.filter(e=>!e.familleId&&e.niveauxIds.length===0).length,p=u+d+f+e.mediasManquants.length+e.videosOrphelines.length+s,m=t.techniques.reduce((e,t)=>e+t.relations.length,0),h=(t.corbeille??[]).length,g=e.sauvegardes[0],_=g?(g.replace(`.json`,``).split(`__`)[0]??``).slice(0,10):``,v=e.preferences.protections,y=v&&(v.modifications||v.suppressions)?`PIN actif`:`Modification libre`,b=e.preferences.theme??`auto`,x=b===`auto`?`Auto (système)`:b===`clair`?`Jour`:`Nuit`,S=e.preferences.modeAvance??!1,C=e.preferences.vueRelationBeta??!1;return{bibliotheque:[{section:`packs`,icone:`📚`,fond:`var(--indigo-doux, #e7ecf3)`,titre:`Disciplines et classement`,etat:`${r} discipline${r>1?`s`:``} · ${a} catégorie${a>1?`s`:``} · ${o} niveau${o>1?`x`:``}`},{section:`techniques`,icone:`🥋`,fond:`#e5ece6`,titre:`Gestion des techniques`,etat:`${i} technique${i>1?`s`:``}`},{section:`atraiter`,icone:`🩹`,fond:`#efe3d6`,titre:`À traiter`,etat:p?`${p} à traiter`:`Rien à traiter`},{section:`corbeille`,icone:`🗑`,fond:`#efe3d6`,titre:`Corbeille`,etat:h?`${h} fiche${h>1?`s`:``} restaurable${h>1?`s`:``}`:`Vide`},...S?[{section:`doublons`,icone:`🔀`,fond:`#efe3d6`,titre:`Doublons potentiels`,etat:s?`${s} à examiner`:`Aucun doublon détecté`},{section:`medias`,icone:`🎞`,fond:`#e5ece6`,titre:`Médias`,etat:c?`${c} vidéo${c>1?`s`:``} locale${c>1?`s`:``}`:`Parc de médias`}]:[],...C?[{section:`relations`,icone:`🔗`,fond:`#e8e4ef`,titre:`Relations entre techniques`,etat:`${m} relation${m>1?`s`:``}`}]:[]],echange:[{action:e=>e.choisirPackAImporter(),icone:`⤓`,fond:`#e5ece6`,titre:`Importer un pack`,etat:`Fichier .movpack`},{section:`publier`,icone:`📤`,fond:`#efe3d6`,titre:`Créer ou exporter un pack`,etat:`Produire un fichier partageable`},{section:`sauvegardes`,icone:`💾`,fond:`var(--indigo-doux, #e7ecf3)`,titre:`Sauvegardes`,etat:_?`Dernière sauvegarde ${_}`:`Aucune sauvegarde`}],preferences:[{section:`securite`,icone:`🔒`,fond:`#e8e4ef`,titre:`Sécurité`,etat:y},{section:`apparence`,icone:`🎨`,fond:`#efe3d6`,titre:`Apparence`,etat:x},...S?[{section:`diagnostic`,icone:`🩺`,fond:`#e5ece6`,titre:`Diagnostic et maintenance`}]:[]]}}function za(e,t){return L`<button class="ligne-menu" @click=${()=>t.section?e.ouvrirPlusSection(t.section):t.action?.(e)}>
    <span class="ligne-menu-icone" style="background:${t.fond}" aria-hidden="true">${t.icone}</span>
    <span class="ligne-menu-corps">
      <span class="ligne-menu-titre">${t.titre}</span>
      ${t.etat?L`<span class="ligne-menu-etat">${t.etat}</span>`:R}
    </span>
    <span class="chevron" aria-hidden="true">›</span>
  </button>`}function Ba(e){let t=Ra(e),n=(t,n)=>L`
    <div class="menu-section-titre">${t}</div>
    <div class="menu-groupe">${n.map(t=>za(e,t))}</div>`;return L`
    <div class="ecran plus">
      <header class="marque"><div style="flex:1"><div class="nom">Plus</div>
        <div class="devise">Gérer, importer, sauvegarder, régler.</div></div></header>
      ${n(`Ma bibliothèque`,t.bibliotheque)}
      ${n(`Importer, exporter et sauvegarder`,t.echange)}
      ${n(`Préférences`,t.preferences)}
    </div>
  `}var Va={recherche:``};function Ha(e,t){return t.familleId?e.disciplines.find(e=>e.id===t.disciplineId)?.familles.find(e=>e.id===t.familleId)?.nom??``:``}function Ua(e){let t=e.toLowerCase();return t.includes(`contr`)?{classe:`zone--contre`,icone:L`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3l7 3v5c0 4.2-2.9 7.7-7 8.9C7.9 18.7 5 15.2 5 11V6z"/></svg>`}:t.includes(`similaire`)?{classe:`zone--similaire`,icone:L`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 17l-5.2 2.7 1-5.8L3.5 9.7l5.9-.9z"/></svg>`}:{classe:`zone--enchaine`,icone:L`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 12h14M13 6l6 6-6 6"/></svg>`}}var Wa=[`Prépare`,`Enchaîne vers`,`Contré par`,`Similaire à`];function Ga(e){let t=e.bibliotheque,n=e.techniqueCentreRelations(),r=n?e.technique(n):void 0;return L`
    <div class="ecran ecran-relations">
      <header class="marque"><div style="flex:1">
        <div class="nom">Relations</div>
      </div></header>

      ${Ka(e,r)}

      ${r?qa(e,t,r):L`<p class="fil-vide" style="padding-top:10px">Aucune technique pour l'instant — ajoute-en d'abord.</p>`}
    </div>
  `}function Ka(e,t){let n=e.bibliotheque,r=Va.recherche.trim(),i=r?rt(n,r,6).filter(e=>e.id!==t?.id):[];return L`
    <div class="recherche" style="margin:8px 18px 0">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.8-3.8"/></svg>
      <input type="search" placeholder="Centrer sur une autre technique…" .value=${Va.recherche}
             aria-label="Centrer sur une autre technique"
             @input=${t=>{Va.recherche=t.target.value,e.requestUpdate()}}>
    </div>
    ${i.length?L`<div class="chips-filtres" style="padding:6px 18px 0">
          ${i.map(t=>L`<button class="chip-filtre" @click=${()=>{e.relationCentre=t.id,Va.recherche=``,e.requestUpdate()}}>${t.nom}</button>`)}
        </div>`:R}
  `}function qa(e,t,n){let r=Er(t,n.id),i=new Map;for(let e of r)i.set(e.libelle,[...i.get(e.libelle)??[],e]);let a=[...i.keys()].sort((e,t)=>{let n=Wa.indexOf(e),r=Wa.indexOf(t);return(n===-1?99:n)-(r===-1?99:r)||e.localeCompare(t,`fr`)}),o=Ha(t,n),s=new Set(r.map(e=>e.techniqueId)).size;return L`
    <div class="graphe">
      <button class="graphe-centre" @click=${()=>e.ouvrirFiche(n.id)} title="Ouvrir la fiche">
        <span class="graphe-centre-media">${Lr(e,n)}</span>
        <span class="graphe-centre-nom">${n.nom}</span>
        ${o?L`<span class="graphe-centre-fam">${o}</span>`:R}
        <span class="graphe-centre-voir">Ouvrir la fiche ›</span>
      </button>
      <div class="graphe-compte">${s?`Reliée à ${s} technique${s>1?`s`:``}`:`Aucun lien pour l'instant`}</div>

      ${a.length===0?L`<div class="graphe-vide">
            <p class="fil-vide" style="padding:4px 4px 8px">Aucun lien pour l'instant.</p>
            <button class="action-douce" @click=${()=>e.ouvrirPlusSection(`relations`)}>
              ＋ Créer un lien <span>ouvre l'éditeur des relations entre techniques</span>
            </button>
          </div>`:a.map(n=>Ja(e,t,n,i.get(n)))}
    </div>
  `}function Ja(e,t,n,r){let{classe:i,icone:a}=Ua(n);return L`
    <div class="zone-relation ${i}">
      <div class="zone-entete">${a}<span>${n}</span><span class="zone-compte">${r.length}</span></div>
      <div class="zone-noeuds">
        ${r.map(n=>Ya(e,t,n))}
      </div>
    </div>
  `}function Ya(e,t,n){if(!n.presente)return L`<span class="noeud absent" title="Cette technique n'est pas (ou plus) dans la bibliothèque">absente</span>`;let r=e.technique(n.techniqueId);if(!r)return R;let i=Ha(t,r);return L`<button class="noeud" @click=${()=>{e.relationCentre=r.id,e.requestUpdate()}}>
    <span class="noeud-media">${Lr(e,r)}</span>
    <span class="noeud-nom">${r.nom}</span>
    ${i?L`<span class="noeud-fam">${i}</span>`:R}
  </button>`}var Xa=`modulepreload`,Za=function(e,t){return new URL(e,t).href},Qa={},$a=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=Za(t,n),t=s(t),t in Qa)return;Qa[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:Xa,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})};function eo(e){let t=[...e.bibliotheque.compositions].sort((e,t)=>(t.modifieLe??t.creeLe).localeCompare(e.modifieLe??e.creeLe)),n=t=>{let n=t.blocs.find(e=>e.type===`technique`&&e.techniqueId),r=n?.techniqueId?e.technique(n.techniqueId):void 0;return r?Lr(e,r):R},r=e=>{if(e.blocs.length===0)return`à construire`;let t=e.blocs.filter(e=>e.type!==`media`).length,n=fo(e),r=`${t} pas${n>0?` · ⏱ ${uo(n)}`:``}`;return e.provenance!==`personnel`&&(r+=` · ${e.attribution??e.provenance}`),r};return L`
    <div class="ecran">
      <header class="marque"><div style="flex:1"><div class="nom">Compositions</div>
        <div class="devise">Tes enchaînements, programmes, séances…</div></div></header>

      ${t.length===0?L`<p class="fil-vide" style="padding-top:12px">
            Assemble et ordonne plusieurs techniques pour créer un enchaînement ou une séance.
            Touche <b>＋ Créer</b> en bas pour commencer.
          </p>`:L`<div class="fil" style="margin-top:10px">${t.map(t=>L`
    <div class="composition-carte">
      <button class="composition-ouvrir" @click=${()=>e.ouvrirComposition(t.id)}>
        ${n(t)}
        <span class="composition-infos">
          <span class="composition-nom">${t.nom}</span>
          <span class="composition-sous">${r(t)}</span>
        </span>
      </button>
      ${t.blocs.length?L`<button class="composition-play" aria-label="Jouer « ${t.nom} »" title="Passer en revue"
            @click=${()=>e.demarrerEntrainement(t.id)}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 5v14l12-7z"/></svg>
          </button>`:R}
    </div>`)}</div>`}
    </div>
  `}function to(e,t,n){let r=t??0,i=Math.floor(r/60),a=r%60,o=(e,t)=>Array.from({length:e},(e,n)=>L`<option value=${n} ?selected=${n===t}>${`${n}`.padStart(2,`0`)}</option>`),s=(t,r)=>{let i=t*60+r;n(i<=0?void 0:i),e.requestUpdate()};return L`
    <div class="duree-picker">
      <div class="duree-affiche">${t===void 0?`Aucune durée`:Dr(t)}</div>
      <div class="duree-roues">
        <label class="duree-roue">min
          <select aria-label="Minutes" @change=${e=>s(Number(e.target.value),a)}>${o(61,i)}</select>
        </label>
        <span class="duree-sep">:</span>
        <label class="duree-roue">s
          <select aria-label="Secondes" @change=${e=>s(i,Number(e.target.value))}>${o(60,a)}</select>
        </label>
        <button type="button" class="duree-aucune ${t===void 0?`actif`:``}" @click=${()=>{n(void 0),e.requestUpdate()}}>Aucune</button>
      </div>
    </div>`}var Q={quoi:`technique`,requete:``,techId:void 0,techNom:``,libre:``,dureeSec:void 0};function no(){Q.requete=``,Q.techId=void 0,Q.techNom=``,Q.libre=``,Q.dureeSec=void 0}function ro(e,t){return t.type===`technique`?t.techniqueId&&e.technique(t.techniqueId)?.nom||t.texte||`technique`:t.type===`pause`?t.texte||`Pause`:t.texte||(t.dureeSec===void 0?`étape`:uo(t.dureeSec))}function io(e,t){let n=e.bibliotheque,r=Q.quoi===`technique`,i=r&&Q.requete.trim()?rt(n,Q.requete,6):[],a=e=>n.disciplines.find(t=>t.id===e)?.nom??``,o=r?Q.techId!==void 0:Q.libre.trim()!==``||Q.dureeSec!==void 0;return L`
    <div class="toggle-quoi">
      <button class="chip-choix ${r?`actif`:``}" @click=${()=>{Q.quoi=`technique`,e.requestUpdate()}}>Une technique</button>
      <button class="chip-choix ${r?``:`actif`}" @click=${()=>{Q.quoi=`libre`,e.requestUpdate()}}>Une saisie libre</button>
    </div>
    ${r?L`<div class="recherche" style="margin:8px 0 0">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.8-3.8"/></svg>
            <input placeholder="Chercher une technique…" autocomplete="off" .value=${Q.requete}
                   @input=${t=>{Q.requete=t.target.value,Q.techId=void 0,e.requestUpdate()}}>
          </div>
          ${i.length?L`<div class="resultats" style="padding:6px 0 0">
                ${i.map(t=>L`<button class="resultat ${Q.techId===t.id?`actif`:``}"
                    @click=${()=>{Q.techId=t.id,Q.techNom=t.nom,Q.requete=t.nom,e.requestUpdate()}}>
                    <span>${t.nom}</span><span class="jp">${t.nomTraditionnel??``}</span><span class="fam">${a(t.disciplineId)}</span>
                  </button>`)}
              </div>`:R}`:L`<input class="champ-edition" style="margin-top:8px" placeholder="Décris l'étape (échauffement, transition, repère…)"
              .value=${Q.libre} aria-label="Saisie libre"
              @input=${t=>{Q.libre=t.target.value,e.requestUpdate()}}>`}
    <div class="section-titre" style="padding:12px 4px 4px">Durée (facultatif)</div>
    ${to(e,Q.dureeSec,t=>{Q.dureeSec=t,e.requestUpdate()})}
    <button class="bouton principal ajout-valider" ?disabled=${!o} @click=${()=>{let n=Q.dureeSec;if(r){if(!Q.techId)return;let r=Q.techId,i=Q.techNom;e.modifierComposition(t,e=>e.blocs.push(jr(`technique`,{techniqueId:r,texte:i,...n===void 0?{}:{dureeSec:n}})))}else{let r=Q.libre.trim();if(!r&&n===void 0)return;let i=!r&&n!==void 0?jr(`pause`,{dureeSec:n}):jr(`etape`,{...r?{texte:r}:{},...n===void 0?{}:{dureeSec:n}});e.modifierComposition(t,e=>e.blocs.push(i))}no(),e.requestUpdate()}}>Ajouter</button>`}function ao(e){let t=e.creationCompo;return L`
    <div class="voile" @click=${()=>{t.etape===`pas`?e.fermerCreationCompo():e.creationCompo=null}}></div>
    <div class="feuille" role="dialog" aria-label="Créer une composition">
      <div class="prise"></div>
      ${t.etape===`nom`?oo(e,t):so(e,t)}
    </div>`}function oo(e,t){let n=t.nom.trim()!==``,r=()=>{n&&e.creerCompositionFunnel()};return L`
    <h2>Nouvelle composition</h2>
    <div class="geste">Donne-lui un nom — tu pourras tout changer ensuite.</div>
    <div class="creation-discipline" style="margin-top:8px">
      <input .value=${t.nom} aria-label="Nom de la composition"
             @input=${n=>e.creationCompo={...t,nom:n.target.value}}
             @keydown=${e=>{e.key===`Enter`&&r()}}>
      <button class="bouton principal" ?disabled=${!n} @click=${r}>Suivant</button>
    </div>
    <div class="actions"><button class="bouton" @click=${()=>e.creationCompo=null}>Annuler</button></div>`}function so(e,t){let n=e.bibliotheque.compositions.find(e=>e.id===t.compoId),r=n?.blocs??[];return L`
    <h2>${n?.nom??`Composition`}</h2>
    <div class="geste">Ajoute tes éléments dans l'ordre.</div>
    ${r.length?L`<ol class="funnel-pas">${r.map((t,n)=>L`<li>${n+1}. ${ro(e,t)}</li>`)}</ol>`:L`<p class="fil-vide" style="padding:6px 2px">Aucun élément pour l'instant.</p>`}
    ${io(e,t.compoId)}
    <div class="actions" style="margin-top:12px">
      <button class="bouton principal" @click=${()=>e.fermerCreationCompo()}>Terminer</button>
    </div>`}function co(e){let t=e.ajoutPas;return L`
    <div class="voile" @click=${()=>{e.ajoutPas=null,e.requestUpdate()}}></div>
    <div class="feuille" role="dialog" aria-label="Ajouter un élément">
      <div class="prise"></div>
      <h2>Ajouter un élément</h2>
      ${io(e,t)}
      <div class="actions" style="margin-top:12px">
        <button class="bouton" @click=${()=>{e.ajoutPas=null,e.requestUpdate()}}>Terminer</button>
      </div>
    </div>`}function lo(e){let{compoId:t,blocId:n}=e.editionPas,r=e.bibliotheque,i=r.compositions.find(e=>e.id===t)?.blocs.find(e=>e.id===n),a=()=>{e.editionPas=null,e.requestUpdate()};if(!i)return L`<div class="voile" @click=${a}></div>`;let o=r=>void e.modifierComposition(t,e=>{let t=e.blocs.find(e=>e.id===n);t&&r(t)}),s=i.type===`technique`,c=s&&i.techniqueId?e.technique(i.techniqueId):void 0,l=s&&Q.requete.trim()?rt(r,Q.requete,6):[],u=e=>r.disciplines.find(t=>t.id===e)?.nom??``;return L`
    <div class="voile" @click=${a}></div>
    <div class="feuille" role="dialog" aria-label="Modifier le pas">
      <div class="prise"></div>
      <h2>${s?c?.nom??`Technique`:i.type===`pause`?`Pause`:`Étape`}</h2>
      ${s?L`<div class="section-titre" style="padding:4px 4px 2px">Consigne</div>
            <input class="champ-edition" placeholder="gauche et droite, sur le contre…" .value=${i.consigne??``} aria-label="Consigne du pas"
              @change=${e=>o(t=>{let n=e.target.value.trim();n?t.consigne=n:delete t.consigne})}>
            <div class="section-titre" style="padding:10px 4px 2px">Remplacer la technique</div>
            <div class="recherche" style="margin:0">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.8-3.8"/></svg>
              <input placeholder="Chercher une technique…" autocomplete="off" .value=${Q.requete}
                @input=${t=>{Q.requete=t.target.value,e.requestUpdate()}}>
            </div>
            ${l.length?L`<div class="resultats" style="padding:6px 0 0">
                  ${l.map(e=>L`<button class="resultat" @click=${()=>{Q.requete=``,o(t=>{t.techniqueId=e.id,t.texte=e.nom})}}>
                    <span>${e.nom}</span><span class="jp">${e.nomTraditionnel??``}</span><span class="fam">${u(e.disciplineId)}</span>
                  </button>`)}
                </div>`:R}`:L`<div class="section-titre" style="padding:4px 4px 2px">Texte</div>
            <input class="champ-edition" placeholder="Décris l'étape…" .value=${i.texte??``} aria-label="Texte du pas"
              @change=${e=>o(t=>{let n=e.target.value.trim();n?t.texte=n:delete t.texte})}>`}
      <div class="section-titre" style="padding:10px 4px 2px">Durée</div>
      ${to(e,i.dureeSec,e=>o(t=>{e===void 0?delete t.dureeSec:t.dureeSec=e}))}
      <div class="actions" style="margin-top:14px">
        <button class="action-danger" @click=${()=>{a(),e.modifierComposition(t,e=>e.blocs=e.blocs.filter(e=>e.id!==n))}}>Retirer ce pas</button>
        <button class="bouton principal" @click=${a}>Terminer</button>
      </div>
    </div>`}function uo(e){if(e<60)return`${Math.round(e)} s`;let t=Math.round(e/60);if(t<60)return`${t} min`;let n=Math.floor(t/60),r=t%60;return r?`${n} h ${`${r}`.padStart(2,`0`)}`:`${n} h`}function fo(e){return e.blocs.reduce((e,t)=>e+(t.dureeSec??0),0)}function po(e,t,n){let r=t.presentation?.medias??[];return r.length?L`
    <div class="composition-presentation">
      <div class="section-titre section-liste-titre" style="padding:8px 4px 2px">Présentation</div>
      <div class="presentation-medias">
        ${r.map(r=>L`<div class="presentation-media">
            ${si(e,r)}
            ${n?L`<button class="bouton-icone" aria-label="Retirer de la présentation" title="Retirer de la présentation"
                  @click=${()=>void e.retirerMediaPresentation(t.id,r.id)}>✕</button>`:R}
          </div>`)}
      </div>
    </div>`:L``}function mo(e,t){let n=e.bibliotheque.compositions.find(e=>e.id===t);return n?L`
    <div class="ecran">
      <div class="barre fiche-barre">
        <button class="bouton-icone" aria-label="Retour" @click=${()=>e.retour()}>
          <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M15 5l-7 7 7 7"/></svg>
        </button>
        <span class="contexte">Composition${n.provenance===`personnel`?``:` · ${n.attribution??n.provenance}`}</span>
        <!-- Actions à DROITE, dans l'ordre d'une fiche technique : options (⋮) · (jouer) · partager.
             D-126 : plus de crayon — tout se modifie en place, le ⋮ ne garde QUE le hors-séquence
             (renommer, présentation d'ensemble, dupliquer, supprimer). -->
        <div class="fiche-actions">
          <button class="bouton-icone menu-composition" aria-label="Options" title="Options de la composition"
            @click=${()=>{e.menuComposition=n.id,e.requestUpdate()}}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="12" cy="5" r="1.9"/><circle cx="12" cy="12" r="1.9"/><circle cx="12" cy="19" r="1.9"/></svg>
          </button>
          <!-- Mode pas-à-pas (D-093) : lance le déroulé plein écran dès qu'il y a des blocs. -->
          ${n.blocs.length>0?L`<button class="bouton-icone passer-en-revue" aria-label="Passer en revue" title="Passer en revue, pas à pas"
                @click=${()=>e.demarrerEntrainement(n.id)}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 5v14l12-7z"/></svg>
              </button>`:R}
          <!-- Partage natif du .movpack. -->
          <button class="bouton-icone partager-composition" aria-label="Partager" title="Partager la composition"
            @click=${()=>void e.partagerComposition(n.id)}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true"><circle cx="18" cy="5" r="2.6"/><circle cx="6" cy="12" r="2.6"/><circle cx="18" cy="19" r="2.6"/><path d="M8.3 10.7l7.4-4.3M8.3 13.3l7.4 4.3"/></svg>
          </button>
        </div>
      </div>

      <!-- Le premier « carré » de la composition, c'est le titre (tuning post-V3). -->
      <div class="fiche-entete composition-titre-lecture"><h1>${n.nom}</h1>
        ${n.description?L`<div class="jp" style="font-family:var(--ui)">${n.description}</div>`:R}
      </div>

      ${po(e,n,!1)}

      ${(()=>{let e=fo(n);return e>0?L`<div class="composition-total" aria-label="Durée totale">⏱ Séance · ${uo(e)}</div>`:R})()}

      ${n.blocs.length===0?L`<p class="fil-vide">Vide pour l'instant — touche <b>＋ Ajouter un élément</b>.</p>`:R}

      <ol class="blocs">
        ${(()=>{let t=0;return n.blocs.map(r=>jo(e,n,r,r.type===`media`?0:++t))})()}
      </ol>

      <!-- Édition INLINE (D-126) : tout se fait en lecture — ajouter un élément
           directement, sans crayon. -->
      <button class="bouton ajouter-pas-inline" @click=${()=>{e.ajoutPas=n.id,e.requestUpdate()}}>
        ＋ Ajouter un élément
      </button>
    </div>
  `:L`<div class="ecran"><p class="fil-vide">Composition introuvable.</p></div>`}function ho(e){let t=e.bibliotheque?.compositions.find(t=>t.id===e.menuComposition);if(!t)return L``;let n=()=>{e.menuComposition=null,e.requestUpdate()};return L`
    <div class="voile" @click=${n}></div>
    <div class="feuille" role="dialog" aria-label="Options de la composition">
      <div class="prise"></div>
      <div class="section-titre" style="padding:4px 4px 2px">Renommer / décrire</div>
      <input class="champ-edition composition-titre" .value=${t.nom} aria-label="Titre de la composition"
        @change=${n=>{let r=n.target.value.trim();r&&e.modifierComposition(t.id,e=>e.nom=r)}}>
      <input class="champ-edition champ-description" .value=${t.description??``}
        placeholder="Description ou objectif (facultatif)" aria-label="Description"
        @change=${n=>{let r=n.target.value.trim();e.modifierComposition(t.id,e=>{r?e.description=r:delete e.description})}}>
      ${po(e,t,!0)}
      ${go(e,t)}
      <div class="actions" style="margin-top:14px">
        <button class="bouton" @click=${()=>{e.dupliquerComposition(t.id),n()}}>Dupliquer</button>
        <button class="action-danger supprimer-composition"
          @click=${()=>e.autoriser(`destruction_ou_sensible`,`Saisis le PIN pour supprimer « ${t.nom} ».`,()=>{confirm(`Supprimer la composition « ${t.nom} » ?\nTes techniques restent dans la bibliothèque — un snapshot est conservé.`)&&(e.supprimerComposition(t.id),n())})}>Supprimer</button>
      </div>
      <button class="bouton principal" style="margin-top:10px" @click=${n}>Terminer</button>
    </div>`}function go(e,t){return L`
    <div class="ajout-bloc capture-composition">
      <div class="section-titre" style="padding:12px 4px 2px">Présenter l'ensemble (démo complète, vidéo « moi »)</div>
      <div class="edition-actions">
        <button class="chip-filtre" @click=${()=>{let n=document.createElement(`input`);n.type=`file`,n.accept=`video/*`,n.onchange=()=>{let r=n.files?.[0];r&&e.ajouterMediaPresentation(t.id,{fichier:r})},n.click()}}>🎞 Vidéo de présentation</button>
        <button class="chip-filtre" @click=${()=>{let n=prompt(`Coller un lien (YouTube ou autre) qui présente cette composition :`);n?.trim()&&e.ajouterMediaPresentation(t.id,{lien:n})}}>🔗 Lien</button>
      </div>
    </div>
  `}function _o(e,t,n){let r=e.bibliotheque.compositions.find(e=>e.id===t);if(!r||r.blocs.length===0)return L`<div class="ecran"><p class="fil-vide">Composition introuvable.</p></div>`;let i=Math.max(0,Math.min(n,r.blocs.length-1)),a=r.blocs[i],o=r.blocs[i+1],s=a.techniqueId?e.technique(a.techniqueId):void 0,c=fo(r),l=n=>{Do(),e.ecran={type:`entrainement`,compositionId:t,index:n},window.scrollTo({top:0})},u=()=>{ko(),e.retour()},d=t=>t.type===`technique`?t.techniqueId&&e.technique(t.techniqueId)?.nom||t.texte||`technique`:t.texte||(t.dureeSec===void 0?``:uo(t.dureeSec)),f=a.type===`technique`&&a.consigne?L`<div class="entrainement-consigne">↳ ${a.consigne}</div>`:R,p=a.dureeSec!==void 0;p?Ao(e,r,a,i):($.blocId!==null&&Do(),Eo(e,a));let m=p&&$.blocId===a.id&&$.phase===`prepa`,h=p?m?L`<div class="entrainement-prepa">Préparez-vous</div>
          <div class="entrainement-chrono ${$.enMarche?``:`en-pause`}">${$.restant}</div>`:L`<div class="entrainement-chrono ${$.enMarche?``:`en-pause`}">${xo($.blocId===a.id?$.restant:a.dureeSec)}</div>`:R,g=Math.max(0,Math.round(e.preferences.transitionSec??3));return $.mode=e.preferences.sonSeance??`les-deux`,L`
    <div class="ecran entrainement">
      <div class="entrainement-entete">
        <span class="entrainement-titre">${r.nom}</span>
        <span class="entrainement-progression">${i+1} / ${r.blocs.length}${c>0?L` · ⏱ ${uo(c)}`:R}</span>
      </div>
      <div class="entrainement-bloc">
        ${a.type===`technique`?s?L`<button class="entrainement-vignette-lien" title="Voir la fiche" @click=${()=>e.ouvrirFiche(s.id)}>
                  <div class="entrainement-vignette">${Lr(e,s)}</div>
                </button>
                <div class="entrainement-nom">${s.nom}</div>
                ${s.nomTraditionnel?L`<div class="entrainement-jp">${s.nomTraditionnel}</div>`:R}
                ${f}${h}`:L`<div class="entrainement-nom sourdine">${a.texte??`Technique`} — indisponible</div>${h}`:a.type===`media`?L`<div class="entrainement-media">${a.medias.map(t=>si(e,t))}</div>`:L`<div class="entrainement-texte">${a.type===`pause`?a.texte||`Pause`:a.texte||`Segment`}</div>${h}`}
      </div>
      ${p?L`<div class="entrainement-chrono-controles">
            <button class="bouton" @click=${()=>{$.enMarche=!$.enMarche,e.requestUpdate()}}>
              ${$.enMarche?`⏸ Pause`:`▶ Reprendre`}
            </button>
            <button class="bouton entrainement-son" title="Retour sonore : voix + bips, voix seule, bips seuls, ou muet"
              @click=${()=>{let t=[`les-deux`,`voix`,`bips`,`muet`];e.definirSonSeance(t[(t.indexOf($.mode)+1)%t.length])}}>
              ${$.mode===`les-deux`?`🔊 Voix + bips`:$.mode===`voix`?`🗣 Voix`:$.mode===`bips`?`🔔 Bips`:`🔇 Muet`}
            </button>
            <button class="bouton" title="Transition de préparation avant chaque pas minuté"
              @click=${()=>{let t=[0,3,5,10];e.definirTransition(t[(t.indexOf(g)+1)%t.length])}}>
              ${g>0?`⏳ Prépa ${g}s`:`⏳ Prépa off`}
            </button>
          </div>`:R}
      ${o?L`<div class="entrainement-suite">Ensuite : ${d(o)}</div>`:R}
      <div class="entrainement-actions">
        <button class="bouton" ?disabled=${i===0} @click=${()=>l(i-1)}>← Précédent</button>
        <button class="bouton" @click=${u}>Quitter</button>
        <button class="bouton principal" ?disabled=${i===r.blocs.length-1} @click=${()=>l(i+1)}>Suivant →</button>
      </div>
    </div>
  `}var $={blocId:null,phase:`actif`,restant:0,enMarche:!0,mode:`les-deux`,annonce:null,timer:null},vo=null,yo=()=>$.mode===`les-deux`||$.mode===`voix`,bo=()=>$.mode===`les-deux`||$.mode===`bips`;function xo(e){let t=Math.max(0,Math.round(e));return`${Math.floor(t/60)}:${`${t%60}`.padStart(2,`0`)}`}function So(e=880,t=120,n=.18){if(bo())try{let r=window.AudioContext||window.webkitAudioContext;vo??=new r,vo.resume?.();let i=vo.currentTime,a=vo.createOscillator(),o=vo.createGain();a.type=`sine`,a.frequency.value=e,a.connect(o),o.connect(vo.destination),o.gain.setValueAtTime(n,i),o.gain.exponentialRampToValueAtTime(1e-4,i+t/1e3),a.start(i),a.stop(i+t/1e3)}catch{}}function Co(e,t){return t.type===`technique`?t.techniqueId&&e.technique(t.techniqueId)?.nom||t.texte||`technique`:t.type===`pause`?t.texte?.trim()||`Pause`:t.texte?.trim()||`segment`}async function wo(e){try{if(window.Capacitor?.isNativePlatform?.()){let{TextToSpeech:t}=await $a(async()=>{let{TextToSpeech:e}=await import(`./esm-CZBI3DOE.js`);return{TextToSpeech:e}},__vite__mapDeps([0,1]),import.meta.url);await t.speak({text:e,lang:`fr-FR`,rate:1});return}}catch{}try{let t=window.speechSynthesis;if(!t)return;t.paused&&t.resume();let n=new SpeechSynthesisUtterance(e);n.lang=`fr-FR`,t.speak(n)}catch{}}function To(e){if(!yo()||!e)return;let t=window;Array.isArray(t.__voix)&&t.__voix.push(e),wo(e)}function Eo(e,t){$.annonce!==t.id&&($.annonce=t.id,To(Co(e,t)))}function Do(){$.timer!==null&&(clearInterval($.timer),$.timer=null),$.blocId=null}function Oo(){try{window.speechSynthesis?.cancel()}catch{}try{window.Capacitor?.isNativePlatform?.()&&$a(()=>import(`./esm-CZBI3DOE.js`).then(e=>e.TextToSpeech.stop()),__vite__mapDeps([0,1]),import.meta.url).catch(()=>{})}catch{}}function ko(){Do(),$.annonce=null,Oo()}function Ao(e,t,n,r){if(n.dureeSec===void 0||$.blocId===n.id)return;Do(),$.blocId=n.id,$.annonce=n.id,$.enMarche=!0;let i=Math.max(1,Math.round(n.dureeSec)),a=Math.max(0,Math.round(e.preferences.transitionSec??3)),o=Co(e,n);a>0?($.phase=`prepa`,$.restant=a,To(`Préparez-vous. ${o}`),So(520,90)):($.phase=`actif`,$.restant=i,To(`${o}, ${Dr(i)}`)),$.timer=window.setInterval(()=>{if(e.ecran.type!==`entrainement`||e.ecran.compositionId!==t.id){ko();return}if(!($.blocId!==n.id||!$.enMarche)){if(--$.restant,$.phase===`prepa`){if($.restant>0){So(520,90),e.requestUpdate();return}$.phase=`actif`,$.restant=i,To(`${o}, ${Dr(i)}`),So(720,160),e.requestUpdate();return}if($.restant>0){let t=Or(i,$.restant);t&&To(t),$.restant<=3&&So(880,90),e.requestUpdate();return}So(440,380),Do(),r+1<t.blocs.length&&(e.ecran={type:`entrainement`,compositionId:t.id,index:r+1}),e.requestUpdate()}},1e3)}function jo(e,t,n,r){let i=n.techniqueId?e.technique(n.techniqueId):void 0,a=n.type===`technique`?i?L`<button class="bloc-technique-lecture" @click=${()=>e.ouvrirFiche(i.id)}>
            ${Lr(e,i)}<span class="bloc-nom">${i.nom}</span>
          </button>`:L`<span class="puce-liaison absente">${n.texte??`technique`} — indisponible</span>`:n.type===`media`?L`<span class="bloc-media-corps">${n.medias.map(t=>si(e,t))}</span>`:L`<span class="bloc-texte">${n.type===`pause`?n.texte||`Pause`:n.texte}</span>`,o=n.type===`media`?R:n.consigne||n.dureeSec!==void 0?L`<div class="bloc-meta bloc-meta-lecture">
            ${n.type===`technique`&&n.consigne?L`<span class="bloc-consigne">↳ ${n.consigne}</span>`:R}
            ${n.dureeSec===void 0?R:L`<span class="bloc-duree">⏱ ${uo(n.dureeSec)}</span>`}
          </div>`:R;return L`
    <li class="bloc ${n.type} lecture ${Mo===n.id?`glisse`:``}"
        data-bloc-id=${n.id}>
      <!-- Édition INLINE (D-126) : glisser + modifier + supprimer directement en
           lecture, via le garde d'écriture (PIN) de modifierComposition — plus de
           crayon global. -->
      <span class="poignee-glisser" aria-label="Glisser pour réordonner" title="Glisser pour réordonner"
        @pointerdown=${r=>No(e,t,n.id,r)}>⠿</span>
      <span class="bloc-nature">${n.type===`media`?R:`${r}.`}</span>
      ${a}
      <span class="bloc-outils">
        ${n.type===`media`?R:L`<button class="bouton-icone" aria-label="Modifier ce pas" title="Modifier ce pas"
              @click=${()=>{no(),e.editionPas={compoId:t.id,blocId:n.id},e.requestUpdate()}}>✎</button>`}
        <button class="bouton-icone" aria-label="Retirer ce pas" title="Retirer ce pas"
          @click=${()=>void e.modifierComposition(t.id,e=>e.blocs=e.blocs.filter(e=>e.id!==n.id))}>✕</button>
      </span>
      ${o}
    </li>
  `}var Mo=null;function No(e,t,n,r){r.preventDefault(),Mo=n,e.requestUpdate();let i=n=>{if(!Mo)return;let r=(document.elementFromPoint(n.clientX,n.clientY)?.closest?.(`li.bloc`))?.getAttribute(`data-bloc-id`);if(r&&r!==Mo){let n=e.bibliotheque?.compositions.find(e=>e.id===t.id);n&&(Mr(n,Mo,r),e.requestUpdate())}},a=()=>{window.removeEventListener(`pointermove`,i),window.removeEventListener(`pointerup`,a),window.removeEventListener(`pointercancel`,a);let n=Mo!==null;Mo=null,n&&e.modifierComposition(t.id,()=>{}),e.requestUpdate()};window.addEventListener(`pointermove`,i),window.addEventListener(`pointerup`,a),window.addEventListener(`pointercancel`,a)}function Po(e,t){let n={...e};if(t.description!==void 0){let e=t.description.trim();e?n.description=e:delete n.description}return t.attribution!==void 0&&t.attribution.trim()&&(n.attribution=t.attribution.trim()),t.pointsCles!==void 0&&(n.pointsCles=t.pointsCles.map(e=>e.trim()).filter(e=>e.length>0)),t.modifiePar!==void 0&&t.modifiePar.trim()&&(n.modifiePar=t.modifiePar.trim()),n}function Fo(e){let{avecVideos:t,nbManquants:n}=e,r=t&&n===0,i=[];return t?n>0&&i.push(`${n} vidéo${n>1?`s`:``} absente${n>1?`s`:``} du stockage`):i.push(`toutes les vidéos (fichier léger)`),i.push(`les réglages d'appareil (thème, démarrage, protections — se reconfigurent après restauration)`),{complete:r,role:r?`Sauvegarde complète de cette installation`:`Sauvegarde PARTIELLE de cette installation`,exclusions:i}}function Io(e){return`${(e/(1<<20)).toFixed(1)} Mo`}function Lo(e){return[`Movenso — diagnostic technique`,`généré : ${e.genereLe}`,`plateforme : ${e.plateforme}`,`version du schéma : ${e.versionSchema}`,`version du conteneur .movpack : ${e.versionMovpack}`,``,`Contenu :`,`  disciplines : ${e.disciplines}`,`  techniques : ${e.techniques}`,`  contributions : ${e.contributions}`,`  compositions : ${e.compositions}`,`  favoris : ${e.favoris}`,``,`Médias :`,`  références locales : ${e.mediasReferences}`,`  fichiers présents : ${e.mediasPresents}`,`  vidéos manquantes (référencées, fichier absent) : ${e.mediasManquants}`,`  fichiers orphelins (présents, plus référencés) : ${e.orphelins}`,``,`Stockage :`,e.espace?`  utilisé : ${Io(e.espace.usage)} / quota estimé : ${Io(e.espace.quota)}`:`  estimation indisponible sur cet appareil`,``,`Ce diagnostic ne rapporte que des informations techniques agrégées :`,`aucune donnée personnelle, aucun réglage de protection, aucun contenu de`,`média, aucune adresse privée.`].join(`
`)}function Ro(e){let t=e.capture,n=t.question?Bo(e):t.etape===`contenu`?Ho(e):t.etape===`apercu`?Vo(e):t.etape===`note`?Uo(e):Wo(e),r=t.rattacherSeul?`Rattacher`:`Capturer`;return L`
    <div class="voile" @click=${()=>e.fermerCapture()}></div>
    <div class="feuille" role="dialog" aria-label=${r}>
      <div class="prise"></div>
      <h2>${r}</h2>
      <div class="geste">${t.question?`Que faire de cette capture ?`:t.rattacherSeul?`Un seul geste`:t.etape===`contenu`?`Geste 1 / 3 — le contenu`:t.etape===`apercu`?`Geste 1 / 3 — vérifier le contenu`:t.etape===`note`?`Geste 2 / 3 — la note`:`Geste 3 / 3 — sais-tu où le ranger ?`}</div>
      ${n}
    </div>
  `}function zo(e,t){let n=document.createElement(`input`);n.type=`file`,n.accept=`video/*`,t&&n.setAttribute(`capture`,`environment`),n.onchange=()=>{let r=n.files?.[0];!r||!e.capture||(e.capture.apercuUrl&&URL.revokeObjectURL(e.capture.apercuUrl),e.capture={...e.capture,video:r,apercuUrl:URL.createObjectURL(r),camera:t,etape:`apercu`})},n.click()}function Bo(e){let t=e.capture,n=(t.provenance??`personnel`)!==`ressource`||(t.attribution??``).trim()!==``;return L`
    <div class="gestes-ajouter">
      <button class="option-ajouter" ?disabled=${!n}
        title=${n?``:`Une ressource a besoin de sa source avant d'être conservée`}
        @click=${()=>void e.terminerCapture(null)}>
        Garder pour plus tard <span>tu la retrouveras dans Plus › À traiter › Captures à rattacher</span>
      </button>
      <button class="option-ajouter" @click=${()=>e.capture={...t,question:!1}}>
        Continuer <span>revenir où tu en étais</span>
      </button>
      <button class="option-ajouter" @click=${()=>e.fermerCapture()}>
        Abandonner <span>rien ne sera enregistré</span>
      </button>
    </div>
  `}function Vo(e){let t=e.capture,n=n=>{t.apercuUrl&&URL.revokeObjectURL(t.apercuUrl),e.capture={...t,apercuUrl:void 0,...n}};return L`
    ${t.video&&t.apercuUrl?L`<div class="media-video"><video src=${t.apercuUrl} controls playsinline autoplay muted></video></div>
          <div class="apercu-infos">${(t.video.size/1e6).toFixed(1)} Mo — rien n'est encore enregistré</div>`:R}
    ${t.lien?L`<div class="apercu-lien">
            <span class="joint">🔗 ${t.lien}</span>
            <div class="apercu-infos">${(e=>{if(/youtube\.com|youtu\.be/.test(e))return`YouTube — lecture en ligne`;try{return`${new URL(e).hostname} — lecture en ligne`}catch{return`lien — lecture en ligne`}})(t.lien)} — l'URL est conservée telle quelle</div>
          </div>`:R}
    <div class="actions">
      <button class="bouton" @click=${()=>n({video:void 0,lien:void 0,etape:`contenu`})}>
        Abandonner
      </button>
      ${t.video?L`<button class="bouton" @click=${()=>zo(e,t.camera??!1)}>
            ${t.camera?`Refilmer`:`Choisir un autre fichier`}
          </button>`:L`<button class="bouton" @click=${()=>n({saisieLien:!0,etape:`contenu`})}>
            Modifier
          </button>`}
      <button class="bouton principal" @click=${()=>n({etape:`note`})}>Utiliser</button>
    </div>
  `}function Ho(e){let t=e.capture;return L`
    <div class="choix-double">
      <button @click=${()=>zo(e,!0)}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="6" width="14" height="12" rx="2"/><path d="m16 10 6-3v10l-6-3"/></svg>
        Filmer <span class="indice">caméra, hors ligne</span>
      </button>
      <button @click=${()=>e.capture={...e.capture,etape:`note`}}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>
        Noter <span class="indice">un mot peut suffire</span>
      </button>
    </div>
    <div class="choix-secondaire">
      <button class="action-douce" @click=${()=>zo(e,!1)}>
        ⤒ Ajouter une vidéo existante <span>(depuis l'appareil, stockée hors ligne)</span>
      </button>
      ${t.saisieLien?L`<div class="creation-discipline" style="margin-top:6px">
            <input placeholder="Coller un lien (YouTube ou autre)…" autofocus .value=${t.lien??``}
                   @keydown=${n=>{if(n.key===`Enter`){let r=n.target.value.trim();r&&(e.capture={...t,lien:r,etape:`apercu`})}}}>
            <button class="bouton principal"
              @click=${n=>{let r=n.target.parentElement.querySelector(`input`).value.trim();r&&(e.capture={...t,lien:r,etape:`apercu`})}}>OK</button>
          </div>`:L`<button class="action-douce" @click=${()=>e.capture={...t,saisieLien:!0}}>
            🔗 Coller un lien <span>(YouTube ou autre — lecture en ligne)</span>
          </button>`}
    </div>
  `}function Uo(e){let t=e.capture,n=n=>{e.capture={...t,note:n.target.value}},r=t.provenance??`personnel`,i=n=>e.capture={...t,provenance:n,...n===`personnel`?{attribution:``}:{}},a=r!==`ressource`||(t.attribution??``).trim()!==``;return L`
    ${t.video?L`<span class="joint">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
          vidéo jointe (${(t.video.size/1e6).toFixed(1)} Mo)
        </span><div style="height:10px"></div>`:R}
    ${t.lien?L`<span class="joint">🔗 ${t.lien}</span><div style="height:10px"></div>`:R}
    <textarea class="champ-note"
              placeholder="Un mot peut suffire (« la banane »). Une vidéo peut suffire. Développe si tu veux."
              .value=${t.note} @input=${n} autofocus></textarea>
    ${t.autreProvenance?L`<div class="chips-filtres" style="padding:10px 0 0" aria-label="Qui affirme ceci ?">
            <button class="chip-filtre ${r===`personnel`?`actif`:``}" @click=${()=>i(`personnel`)}>Moi</button>
            <button class="chip-filtre ${r===`enseignement`?`actif`:``}" @click=${()=>i(`enseignement`)}>Mon prof / club</button>
            <button class="chip-filtre ${r===`ressource`?`actif`:``}" @click=${()=>i(`ressource`)}>Une ressource</button>
          </div>
          ${r===`personnel`?R:L`<div style="margin-top:8px">
                <input class="champ-note" style="min-height:0"
                       placeholder=${r===`enseignement`?`Qui l'enseigne ? (ex. Club, Sensei Dupont)`:`Source (obligatoire — ex. chaîne, livre)`}
                       .value=${t.attribution??``}
                       @input=${t=>e.capture={...e.capture,attribution:t.target.value}}>
              </div>`}`:L`<button class="action-douce autre-provenance" style="margin-top:10px"
          @click=${()=>e.capture={...t,autreProvenance:!0}}>
          Ce contenu vient de quelqu'un d'autre <span>(par défaut : toi — prof, club ou ressource sur demande)</span>
        </button>`}
    <div class="actions">
      <button class="bouton" @click=${()=>e.fermerCapture()}>Annuler</button>
      <button class="bouton principal" ?disabled=${!a}
        @click=${()=>e.capture={...e.capture,etape:`rattacher`}}>
        Rattacher →
      </button>
    </div>
  `}function Wo(e){let t=e.capture,n=e.bibliotheque,r=!t.rattacherSeul&&e.ecran.type===`fiche`?e.technique(e.ecran.techniqueId):void 0,i=t.rechercheRattache??``,a=t.chercherPartout?void 0:t.disciplineChoisieId,o=i.trim()?rt(n,i,30).filter(e=>!a||e.disciplineId===a).slice(0,6):[],s=e=>n.disciplines.find(t=>t.id===e)?.nom??``,c=n=>{e.capture={...t,rechercheRattache:n.target.value}},l=t.rattacherSeul?n.contributions.find(e=>e.id===t.rattacherSeul):void 0;return L`
    ${l?L`<div class="reprise-contenu">
          <textarea class="champ-note" style="min-height:52px" .value=${l.description??``}
            placeholder="Ton mot, ton libellé — modifiable ici"
            @change=${t=>void e.majContribution(l.id,t.target.value)}></textarea>
          ${l.medias.map(t=>t.type===`local`?L`<movenso-video-locale .app=${e} .mediaId=${t.id}></movenso-video-locale>`:L`<span class="joint" style="margin-top:6px">🔗 ${t.ref}</span>`)}
          ${l.provenance===`personnel`?R:L`<div class="apercu-infos">
                ${l.provenance===`enseignement`?`Enseignement`:`Ressource`}${l.attribution?` · ${l.attribution}`:``}
                — la provenance choisie est conservée
              </div>`}
          <button class="action-douce" style="margin:8px 0"
            @click=${()=>{confirm(`Supprimer cette capture ? (un snapshot est conservé)`)&&(e.supprimerContribution(l.id),e.fermerCapture())}}>
            ✕ Supprimer cette capture <span>réversible — snapshot conservé</span>
          </button>
        </div>`:R}
    ${r?L`<span class="joint">Suggestion : ${r.nom} (fiche ouverte)</span><div style="height:8px"></div>`:R}
    ${t.compositionCible&&!t.rattacherSeul?L`<button class="action-douce" style="width:100%; margin-bottom:8px"
          @click=${()=>void e.terminerCaptureRepere()}>
          ⧉ Ajouter comme repère à « ${e.bibliotheque.compositions.find(e=>e.id===t.compositionCible)?.nom??`la composition`} »
          <span>le mot et la vidéo rejoignent la composition, pas une fiche</span>
        </button>`:R}
    <div class="recherche" style="margin:0">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.8-3.8"/></svg>
      <input placeholder="À quelle technique ?" autocomplete="off" .value=${i} @input=${c}>
    </div>
    <div class="resultats" style="padding:6px 0 0">
      ${r&&!i.trim()?L`<button class="resultat" @click=${()=>void e.terminerCapture(r.id)}>
            <span>${r.nom}</span><span class="jp">${r.nomTraditionnel??``}</span><span class="fam">suggérée</span>
          </button>`:R}
      ${o.map(n=>L`<button class="resultat" @click=${()=>void e.terminerCapture(n.id)}>
          ${Lr(e,n)}
          <span class="resultat-nom">${n.nom}</span><span class="jp">${n.nomTraditionnel??``}</span>
          ${t.chercherPartout?L`<span class="fam">${s(n.disciplineId)}</span>`:R}
        </button>`)}
      ${i.trim()&&o.length===0?L`<p class="fil-vide" style="padding:6px 0 0">
            Rien de ce nom${a?` dans ${s(a)}`:``} — crée-la ci-dessous.
          </p>`:R}
      ${a&&i.trim()?L`<button class="action-douce" style="margin-top:6px"
            @click=${()=>e.capture={...t,chercherPartout:!0}}>
            Chercher dans toutes les disciplines <span>(au-delà de ${s(a)})</span>
          </button>`:R}
      ${Go(e,i.trim())}
    </div>
    <div class="actions">
      <button class="bouton" @click=${()=>e.fermerCapture()}>Annuler</button>
      ${t.rattacherSeul?R:L`<button class="bouton" title="Tu la retrouveras dans Plus › À traiter › Captures à rattacher"
            @click=${()=>void e.terminerCapture(null)}>Garder pour plus tard</button>`}
    </div>
  `}function Go(e,t){let n=e.capture,r=e.bibliotheque,i=(n.nouveauNom??t).trim(),a=e.ecran.type===`fiche`?e.technique(e.ecran.techniqueId)?.disciplineId:void 0,o=r.disciplines.length>1&&!a,s=n.disciplineChoisieId??a??r.disciplines[0]?.id;return L`
    <div class="section-titre" style="padding:12px 4px 2px">Ou créer une nouvelle technique</div>
    <div style="padding:2px 0">
      <input class="champ-note champ-nouveau-nom" style="min-height:0"
             placeholder="Nom de la nouvelle technique…"
             .value=${n.nouveauNom??t}
             @input=${t=>e.capture={...n,nouveauNom:t.target.value}}>
    </div>
    ${r.disciplines.length===0?L`<div style="padding:6px 0 2px">
          <input class="champ-note champ-discipline" style="min-height:0" placeholder="Dans quelle discipline ? (ex. Judo, Boxe…)"
                 .value=${n.disciplineNom??``}
                 @input=${t=>e.capture={...n,disciplineNom:t.target.value}}>
        </div>`:R}
    ${o?L`<div class="chips-filtres" style="padding:8px 0 2px">
          ${r.disciplines.map(t=>L`<button class="chip-filtre ${s===t.id?`actif`:``}"
              @click=${()=>e.capture={...n,disciplineChoisieId:t.id}}>${t.nom}</button>`)}
        </div>`:R}
    <button class="resultat creer" ?disabled=${!i} @click=${()=>{i&&e.terminerCapture(null,i,{...s?{disciplineId:s}:{},...n.disciplineNom?{disciplineNom:n.disciplineNom}:{}})}}>
      <span>＋ Créer ${i?`« ${i} »`:`cette technique`}</span><span class="fam">et y rattacher la capture</span>
    </button>
  `}function Ko(e){let t=e.ajoutMedia;if(t.mode===`contribution`)return L`
      <div class="voile" @click=${()=>e.ajoutMedia=null}></div>
      <div class="feuille" role="dialog" aria-label="Ajouter du contenu">
        <div class="prise"></div>
        <h2>Ajouter du contenu</h2>
        <div class="geste">De qui vient ce contenu ? — la technique est déjà connue</div>
        ${qo(e)}
      </div>
    `;let n=t.fichier!==void 0||t.lien!==void 0;return L`
    <div class="voile" @click=${()=>e.ajoutMedia=null}></div>
    <div class="feuille" role="dialog" aria-label="Ajouter un média">
      <div class="prise"></div>
      <h2>Ajouter un média</h2>
      <div class="geste">${n?`Qui a produit ce média ?`:`Le contenu — filmer, choisir ou lier`}</div>
      ${n?Xo(e):Yo(e)}
    </div>
  `}function qo(e){let t=e.ajoutMedia,n=n=>e.ajoutMedia={...t,provenance:n,...n===`personnel`?{attribution:``}:{}},r=((t.texte??``).trim()!==``||t.fichier!==void 0||(t.lien??``).trim()!==``)&&(t.provenance!==`ressource`||(t.attribution??``).trim()!==``);return L`
    <div class="chips-filtres" style="padding:4px 0 0" aria-label="De qui vient ce contenu ?">
      <button class="chip-filtre ${t.provenance===`personnel`?`actif`:``}" @click=${()=>n(`personnel`)}>Moi</button>
      <button class="chip-filtre ${t.provenance===`enseignement`?`actif`:``}" @click=${()=>n(`enseignement`)}>Mon prof / club</button>
      <button class="chip-filtre ${t.provenance===`ressource`?`actif`:``}" @click=${()=>n(`ressource`)}>Une ressource</button>
    </div>
    ${t.provenance===`personnel`?R:L`<div style="margin-top:8px">
          <input class="champ-note" style="min-height:0"
                 placeholder=${t.provenance===`enseignement`?`Qui l'enseigne ? (ex. Club, Sensei Dupont)`:`Source (obligatoire — ex. chaîne, livre)`}
                 .value=${t.attribution??``}
                 @input=${t=>e.ajoutMedia={...e.ajoutMedia,attribution:t.target.value}}>
        </div>`}
    <textarea class="champ-note" style="margin-top:8px; min-height:72px"
              placeholder="Texte — explication, points d'attention… (un média peut suffire)"
              .value=${t.texte??``}
              @input=${t=>e.ajoutMedia={...e.ajoutMedia,texte:t.target.value}}></textarea>
    ${t.fichier?L`<span class="joint" style="margin-top:6px">🎞 vidéo jointe (${(t.fichier.size/1e6).toFixed(1)} Mo)</span>`:R}
    <input class="champ-mini" style="margin-top:8px" inputmode="url" aria-label="Lien vidéo (YouTube ou autre)"
           placeholder="🔗 Coller un lien (YouTube…) — facultatif"
           .value=${t.lien??``}
           @input=${t=>e.ajoutMedia={...e.ajoutMedia,lien:t.target.value}}>
    <div class="chips-filtres" style="padding:8px 0 0">
      <button class="chip-filtre" @click=${()=>{let t=document.createElement(`input`);t.type=`file`,t.accept=`video/*`,t.onchange=()=>{let n=t.files?.[0];n&&e.ajoutMedia&&(e.ajoutMedia={...e.ajoutMedia,fichier:n})},t.click()}}>🎞 joindre une vidéo</button>
    </div>
    <div class="actions">
      <button class="bouton" @click=${()=>e.ajoutMedia=null}>Annuler</button>
      <button class="bouton principal" ?disabled=${!r}
        @click=${()=>{let n={...t.fichier?{fichier:t.fichier}:{},...t.lien?.trim()?{lien:t.lien.trim()}:{}};e.ajouterMediaFiche(t.techniqueId,n,{provenance:t.provenance,...t.attribution?.trim()?{attribution:t.attribution.trim()}:{},...t.texte?.trim()?{texte:t.texte.trim()}:{}})}}>
        Ajouter
      </button>
    </div>
  `}function Jo(e,t){let n=document.createElement(`input`);n.type=`file`,n.accept=`video/*`,t&&n.setAttribute(`capture`,`environment`),n.onchange=()=>{let t=n.files?.[0];t&&e.ajoutMedia&&(e.ajoutMedia={...e.ajoutMedia,fichier:t})},n.click()}function Yo(e){let t=e.ajoutMedia;return L`
    <div class="choix-double">
      <button @click=${()=>Jo(e,!0)}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="6" width="14" height="12" rx="2"/><path d="m16 10 6-3v10l-6-3"/></svg>
        Filmer maintenant <span class="indice">caméra, hors ligne</span>
      </button>
      <button @click=${()=>Jo(e,!1)}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3v12"/><path d="m7 8 5-5 5 5"/><rect x="4" y="15" width="16" height="6" rx="2"/></svg>
        Une vidéo de l'appareil <span class="indice">stockée hors ligne</span>
      </button>
    </div>
    <div class="choix-secondaire">
      ${t.saisieLien?L`<div class="creation-discipline" style="margin-top:6px">
            <input placeholder="Coller un lien (YouTube ou autre)…" autofocus
                   @keydown=${n=>{if(n.key===`Enter`){let r=n.target.value.trim();r&&(e.ajoutMedia={...t,lien:r})}}}>
            <button class="bouton principal"
              @click=${n=>{let r=n.target.parentElement.querySelector(`input`).value.trim();r&&(e.ajoutMedia={...t,lien:r})}}>OK</button>
          </div>`:L`<button class="action-douce" @click=${()=>e.ajoutMedia={...t,saisieLien:!0}}>
            🔗 Coller un lien <span>(YouTube ou autre — lecture en ligne)</span>
          </button>`}
    </div>
    <div class="actions">
      <button class="bouton" @click=${()=>e.ajoutMedia=null}>Annuler</button>
    </div>
  `}function Xo(e){let t=e.ajoutMedia,n=n=>e.ajoutMedia={...t,provenance:n,...n===`personnel`?{attribution:``}:{}},r=t.provenance!==`ressource`||(t.attribution??``).trim()!==``;return L`
    ${t.fichier?L`<span class="joint">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
          vidéo jointe (${(t.fichier.size/1e6).toFixed(1)} Mo)
        </span><div style="height:10px"></div>`:R}
    ${t.lien?L`<span class="joint">🔗 ${t.lien}</span><div style="height:10px"></div>`:R}
    <div class="chips-filtres" style="padding:4px 0 0" aria-label="Qui a produit ce média ?">
      <button class="chip-filtre ${t.provenance===`personnel`?`actif`:``}" @click=${()=>n(`personnel`)}>Moi</button>
      <button class="chip-filtre ${t.provenance===`enseignement`?`actif`:``}" @click=${()=>n(`enseignement`)}>Mon prof / club</button>
      <button class="chip-filtre ${t.provenance===`ressource`?`actif`:``}" @click=${()=>n(`ressource`)}>Une ressource</button>
    </div>
    ${t.provenance===`personnel`?R:L`<div style="margin-top:8px">
          <input class="champ-note" style="min-height:0"
                 placeholder=${t.provenance===`enseignement`?`Qui l'enseigne ? (ex. Club, Sensei Dupont)`:`Source (obligatoire — ex. chaîne, livre)`}
                 .value=${t.attribution??``}
                 @input=${t=>e.ajoutMedia={...e.ajoutMedia,attribution:t.target.value}}>
        </div>`}
    <div style="margin-top:8px">
      <input class="champ-note champ-libelle" style="min-height:0"
             placeholder="Libellé facultatif (ex. « vue de côté »)"
             .value=${t.label??``}
             @input=${t=>e.ajoutMedia={...e.ajoutMedia,label:t.target.value}}>
    </div>
    <div class="actions">
      <button class="bouton" @click=${()=>e.ajoutMedia=null}>Annuler</button>
      <button class="bouton principal" ?disabled=${!r}
        @click=${()=>{let n={...t.fichier?{fichier:t.fichier}:{},...t.lien?{lien:t.lien}:{}},r={provenance:t.provenance,...t.attribution?.trim()?{attribution:t.attribution.trim()}:{},...t.label?.trim()?{label:t.label.trim()}:{}};e.ajouterMediaFiche(t.techniqueId,n,r)}}>
        Ajouter
      </button>
    </div>
  `}function Zo(e){let t=e.ajouter;return L`
    <div class="voile" @click=${()=>e.ajouter=null}></div>
    <div class="feuille" role="dialog" aria-label="Ajouter">
      <div class="prise"></div>
      <h2>Que veux-tu ajouter ?</h2>
      ${t.creation?L`<div class="geste">Son nom et sa discipline suffisent.</div>`:R}
      ${t.creation?$o(e):Qo(e)}
    </div>
  `}function Qo(e){let t=e.ajouter;return L`
    <div class="gestes-ajouter">
      <button class="option-ajouter" @click=${()=>e.ajouter={...t,creation:!0}}>
        ＋ Créer une technique <span>nom et discipline</span>
      </button>
      <button class="option-ajouter" @click=${()=>{e.ajouter=null,e.ouvrirCapture()}}>
        🎥 Capture rapide <span>Filmer, choisir une vidéo ou enregistrer un lien pour le classer plus tard.</span>
      </button>
    </div>
    <div class="actions">
      <button class="bouton" @click=${()=>e.ajouter=null}>Annuler</button>
    </div>
  `}function $o(e){let t=e.ajouter,n=e.bibliotheque,r=t.disciplineChoisieId??t.disciplineId??n.disciplines[0]?.id,i=n.disciplines.find(e=>e.id===r),a=(t.nomTechnique??``).trim(),o=a!==``&&(n.disciplines.length>0?r!==void 0:(t.disciplineNom??``).trim()!==``),s=r&&a?bt(n,r,a):{exacte:null,proches:[]},c=()=>({...t.appellation?.trim()?{nomTraditionnel:t.appellation.trim()}:{},...t.familleId?{familleId:t.familleId}:{},...t.niveauxIds?.length?{niveauxIds:t.niveauxIds}:{}}),l=async()=>{if(!o||s.exacte&&!confirm(`« ${s.exacte.nom} » existe déjà dans ${i?.nom??`cette discipline`}.\nCréer quand même une technique distincte ?`))return;let l=n.disciplines.length?r:void 0;l||=await e.creerDiscipline(t.disciplineNom.trim())??void 0,l&&(e.ajouter=null,await e.creerTechnique(l,a,c()))},u=t=>{e.ajouter=null,e.ouvrirFiche(t)},d=n=>{let r=t.niveauxIds??[];e.ajouter={...t,niveauxIds:r.includes(n)?r.filter(e=>e!==n):[...r,n]}},f=(i?.familles.length??0)>0||(i?.niveaux.length??0)>0;return L`
    <div style="padding:2px 0">
      <input class="champ-note champ-nouveau-nom" style="min-height:0" autofocus
             placeholder="Nom de la technique…"
             .value=${t.nomTechnique??``}
             @input=${n=>e.ajouter={...t,nomTechnique:n.target.value}}
             @keydown=${e=>{e.key===`Enter`&&l()}}>
    </div>
    ${s.exacte||s.proches.length?L`<div class="doublons">
          ${s.exacte?L`<div class="doublon-exacte">« ${s.exacte.nom} » existe déjà dans ${i?.nom??`cette discipline`}.</div>`:L`<div>Technique similaire déjà présente :</div>`}
          <div class="chips-filtres" style="padding:6px 0 0">
            ${[...s.exacte?[s.exacte]:[],...s.proches].map(e=>L`<button class="chip-filtre" @click=${()=>u(e.id)}>Utiliser « ${e.nom} »</button>`)}
          </div>
        </div>`:R}
    ${t.disciplineId===void 0&&n.disciplines.length>0?L`<div class="chips-filtres" style="padding:8px 0 2px" aria-label="Dans quelle discipline ?">
          ${n.disciplines.map(n=>L`<button class="chip-filtre ${r===n.id?`actif`:``}"
              @click=${()=>e.ajouter={...t,disciplineChoisieId:n.id,familleId:void 0,niveauxIds:[]}}>${n.nom}</button>`)}
        </div>`:R}
    ${n.disciplines.length===0?L`<div style="padding:6px 0 2px">
          <input class="champ-note champ-discipline" style="min-height:0"
                 placeholder="Dans quelle discipline ? (ex. Judo, Boxe…)"
                 .value=${t.disciplineNom??``}
                 @input=${n=>e.ajouter={...t,disciplineNom:n.target.value}}>
        </div>`:R}
    ${f?t.classer?L`<div class="classer-maintenant">
            ${i.familles.length?L`<div class="section-titre" style="padding:8px 2px 2px">Famille</div>
                  <div class="chips-filtres">
                    ${i.familles.map(n=>L`<button class="chip-filtre ${t.familleId===n.id?`actif`:``}"
                        @click=${()=>e.ajouter={...t,familleId:t.familleId===n.id?void 0:n.id}}>${n.nom}</button>`)}
                  </div>`:R}
            ${i.niveaux.length?L`<div class="section-titre" style="padding:8px 2px 2px">Niveau</div>
                  <div class="chips-filtres">
                    ${i.niveaux.map(e=>L`<button class="chip-filtre ${t.niveauxIds?.includes(e.id)?`actif`:``}"
                        @click=${()=>d(e.id)}>${e.nom}</button>`)}
                  </div>`:R}
            <button class="action-douce" style="margin-top:8px"
              @click=${()=>e.ajouter={...t,classer:!1,familleId:void 0,niveauxIds:[]}}>
              Je le ferai plus tard <span>la technique se crée sans classement</span>
            </button>
          </div>`:L`<button class="action-douce" style="margin-top:8px" @click=${()=>e.ajouter={...t,classer:!0}}>
            Classer maintenant <span>(facultatif — famille, niveau)</span>
          </button>`:R}
    <div class="actions">
      <button class="bouton" @click=${()=>e.ajouter={...t,creation:!1}}>← Retour</button>
      <button class="bouton principal" ?disabled=${!o} @click=${()=>void l()}>
        ${s.exacte||s.proches.length?`Créer quand même`:`Créer la technique`}
      </button>
    </div>
  `}var es=class extends we{static properties={app:{attribute:!1},mediaId:{attribute:!1},url:{state:!0}};constructor(){super(),this.mediaId=``,this.url=void 0}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.app.stockage.urlVideo(this.mediaId).then(e=>this.url=e)}disconnectedCallback(){super.disconnectedCallback(),this.url&&URL.revokeObjectURL(this.url)}render(){return this.url===void 0?R:this.url===null?L`<div class="video-absente" style="font-size:12.5px;color:var(--sourdine)">
        Vidéo introuvable sur cet appareil.
        <button class="action-douce" style="margin-top:4px" @click=${()=>this.app.ouvrirPlusSection(`medias`)}>
          Vérifier <span>(Plus — Médias)</span>
        </button>
      </div>`:L`<div class="media-video"><video src=${this.url} controls playsinline preload="metadata"
      @play=${e=>{document.querySelectorAll(`video`).forEach(t=>{t!==e.target&&t.pause()}),this.app.mediasDeplies.size&&(this.app.mediasDeplies=new Set,this.app.requestUpdate())}}></video></div>`}};customElements.define(`movenso-video-locale`,es);var ts=class e extends we{static properties={bibliotheque:{state:!0},ecran:{state:!0},capture:{state:!0},ajoutMedia:{state:!0},ajouter:{state:!0},creationCompo:{state:!0},ajoutPas:{state:!0},editionPas:{state:!0},menuComposition:{state:!0},partagePreparation:{state:!0},enregistrementMedia:{state:!0},toast:{state:!0},preferences:{state:!0},erreurDemarrage:{state:!0}};rechercheGlobale=``;pratiqueDeplie={reprendre:!1,favoris:!1};mediasDeplies=new Set;creationDiscipline=!1;filtres={disciplineId:null,niveauId:null,familleId:null,source:null,favorisSeuls:!1,texte:``};fusionDoublon=null;doublonOuvert=null;disciplineGestion=null;stockage=new pr;#e;#t=0;constructor(){super(),this.bibliotheque=null,this.ecran={type:`bibliotheques`},this.capture=null,this.ajoutMedia=null,this.ajouter=null,this.creationCompo=null,this.ajoutPas=null,this.editionPas=null,this.menuComposition=null,this.partagePreparation=null,this.enregistrementMedia=null,this.toast=null,this.preferences=cr(),this.erreurDemarrage=null}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.#n(),document.addEventListener(`visibilitychange`,()=>{document.visibilityState===`hidden`&&(this.preferences.protections?.verrouillage??`5min`)===`arriere-plan`&&this.verrouiller(!0)})}async#n(){navigator.storage?.persist?.().catch(()=>{}),this.stockage.nettoyerStaging();let e;try{if(!navigator.storage?.getDirectory)throw Error(`Le stockage local n'est pas disponible sur ce navigateur / cette version d'Android. Mets à jour Android System WebView (Play Store), puis rouvre Movenso.`);e=await this.stockage.charger(),e===null&&(e=je(),await this.stockage.sauvegarder(e))}catch(e){this.erreurDemarrage=e instanceof Error&&e.message.startsWith(`Le stockage`)?e.message:`Movenso n'a pas pu lire ses données sur cet appareil. Si tu viens d'installer une version plus ANCIENNE par-dessus une récente, réinstalle la dernière version — tes données ne sont pas perdues.`,this.requestUpdate();return}this.preferences=await this.stockage.chargerPreferences(),this.#r(),this.bibliotheque=e;let{mode:t,disciplineId:n}=this.preferences.demarrage,r=t===`discipline`?n:t===`derniere`?this.preferences.derniereDisciplineId:void 0;(t===`discipline`||t===`derniere`)&&r&&e.disciplines.some(e=>e.id===r)?this.ecran={type:`discipline`,disciplineId:r}:t===`discipline`&&n?this.afficherToast(`La discipline choisie au démarrage n'existe plus — ouverture sur la Bibliothèque`):t===`favoris`?this.ecran={type:`favoris`}:t===`compositions`?this.ecran={type:`compositions`}:t===`relations`&&this.preferences.vueRelationBeta&&this.ouvrirRelationsVisuelle(),await this.#i()}#r(){let e=document.documentElement,t=this.preferences.theme??`auto`;t===`auto`?delete e.dataset.theme:e.dataset.theme=t;let n=this.preferences.tonalite??`vermillon`;n===`vermillon`?delete e.dataset.tonalite:e.dataset.tonalite=n}changerApparence(e){this.preferences={...this.preferences,...e.theme===void 0?{}:{theme:e.theme},...e.tonalite===void 0?{}:{tonalite:e.tonalite}},this.#r(),this.stockage.sauvegarderPreferences(this.preferences)}changerDensite(e){if(e===null){let{densiteBibliotheque:e,...t}=this.preferences;this.preferences=t}else{let t=Math.max(1,Math.min(6,Math.round(e)));this.preferences={...this.preferences,densiteBibliotheque:t}}this.stockage.sauvegarderPreferences(this.preferences),this.requestUpdate()}definirTransition(e){this.preferences={...this.preferences,transitionSec:Math.max(0,Math.round(e))},this.stockage.sauvegarderPreferences(this.preferences),this.requestUpdate()}definirSonSeance(e){this.preferences={...this.preferences,sonSeance:e},this.stockage.sauvegarderPreferences(this.preferences),this.requestUpdate()}basculerReglage(e){this.preferences={...this.preferences,[e]:!this.preferences[e]},this.stockage.sauvegarderPreferences(this.preferences),this.requestUpdate()}changerPseudo(e){let t=e.trim().slice(0,40);this.preferences={...this.preferences,pseudo:t},this.stockage.sauvegarderPreferences(this.preferences),this.requestUpdate()}changerDemarrage(e,t){this.preferences={...this.preferences,demarrage:{mode:e,...t===void 0?{}:{disciplineId:t}}},this.stockage.sauvegarderPreferences(this.preferences)}async#i(){if(!window.Capacitor?.isNativePlatform?.())return;let{App:e}=await $a(async()=>{let{App:e}=await import(`./esm-DisWyHRy.js`);return{App:e}},__vite__mapDeps([2,1]),import.meta.url);await e.addListener(`backButton`,()=>{let t=this.ecran.type===`bibliotheques`||this.ecran.type===`favoris`||this.ecran.type===`compositions`||this.ecran.type===`plus`&&this.ecran.section===null;this.demandePin?this.annulerDemandePin():this.capture?this.reculerCapture():this.ajoutMedia?this.ajoutMedia=null:this.partagePreparation?this.partagePreparation=null:this.ajouter?this.ajouter=null:this.editionPas?this.editionPas=null:this.ajoutPas?this.ajoutPas=null:this.menuComposition?this.menuComposition=null:this.creationCompo?this.#R():this.importEnAttente?this.annulerImport():this.rapportApresImport?this.fermerRapportImport():this.restaurationEnAttente?this.annulerRestauration():this.menuFiche?(this.menuFiche=!1,this.requestUpdate()):this.editionFiche?(this.#L=null,this.editionFiche=!1,this.requestUpdate()):this.#a.length?this.retour():t?this.ecran.type===`bibliotheques`?e.minimizeApp():this.ouvrirBibliotheque():(this.#g(),this.ecran=this.#l(),window.scrollTo({top:0}))})}technique(e){return this.bibliotheque?.techniques.find(t=>t.id===e)}filPersonnel(){let e=new Set(this.preferences.repriseMasquees??[]);return(this.bibliotheque?.contributions??[]).filter(e=>e.provenance===`personnel`||e.techniqueId===null).filter(t=>t.techniqueId===null||!e.has(t.id)).sort((e,t)=>t.creeLe.localeCompare(e.creeLe))}masquerReprise(e){let t=[...this.preferences.repriseMasquees??[],e];this.preferences={...this.preferences,repriseMasquees:t.slice(-200)},this.stockage.sauvegarderPreferences(this.preferences)}#a=[];#o={};#s(e){this.#g(),this.#a.push({ecran:this.ecran,defilement:window.scrollY}),this.#a.length>24&&this.#a.shift(),this.ecran=e,window.scrollTo({top:0})}#c(e){let t=e.type===`favoris`?`favoris`:e.type===`compositions`?`compositions`:e.type===`plus`?`plus`:`bibliotheque`,n=this.zoneCourante();if(this.#g(),this.#d(),n===t){this.#a=[],this.ecran=e,window.scrollTo({top:0});return}this.#o[n]={ecran:this.ecran,pile:[...this.#a],defilement:window.scrollY};let r=this.#o[t];r?(this.#a=[...r.pile],this.ecran=r.ecran,this.#f(),this.updateComplete.then(()=>window.scrollTo({top:r.defilement}))):(this.#a=[],this.ecran=e,window.scrollTo({top:0}))}retour(){this.#g(),this.menuFiche=!1,this.#d();let e=this.#a.pop();e?(this.ecran=e.ecran,this.updateComplete.then(()=>window.scrollTo({top:e.defilement}))):(this.ecran=this.#l(),window.scrollTo({top:0})),this.#f()}#l(){let e=this.zoneCourante();return e===`favoris`?{type:`favoris`}:e===`relations`?{type:`relations`}:e===`compositions`?{type:`compositions`}:e===`plus`?{type:`plus`,section:null}:{type:`bibliotheques`}}derniereTechniqueVue=null;relationCentre=null;ouvrirFiche(e){this.editionFiche=!1,this.#L=null,this.menuFiche=!1,this.ajoutMedia=null,this.derniereTechniqueVue=e,this.#d(),this.#s({type:`fiche`,techniqueId:e}),this.#f()}ouvrirRelationsVisuelle(e){e&&(this.relationCentre=e),this.#c({type:`relations`})}techniqueCentreRelations(){let e=this.bibliotheque;if(!e||e.techniques.length===0)return null;let t=t=>!!t&&e.techniques.some(e=>e.id===t);return t(this.relationCentre)?this.relationCentre:t(this.derniereTechniqueVue)?this.derniereTechniqueVue:(e.techniques.find(e=>e.relations.length>0)??e.techniques.find(t=>e.techniques.some(e=>e.relations.some(e=>e.cibleId===t.id)))??e.techniques[0]).id}#u=new Map;#d(){this.ecran.type===`fiche`&&this.#u.set(this.ecran.techniqueId,{mediaAffiche:this.mediaAffiche,voixOuverte:this.voixOuverte,relationsDepliees:this.relationsDepliees})}#f(){if(this.ecran.type!==`fiche`)return;let e=this.#u.get(this.ecran.techniqueId);this.mediaAffiche=e?.mediaAffiche??null,this.voixOuverte=e?.voixOuverte??null,this.relationsDepliees=e?.relationsDepliees??!1}#p=new Map;majFiltres(e){this.filtres=e,this.ecran.type===`discipline`&&this.#p.set(this.ecran.disciplineId,e),this.requestUpdate()}ouvrirDiscipline(e){this.filtres=this.#p.get(e)??{disciplineId:null,niveauId:null,familleId:null,source:null,favorisSeuls:!1,texte:``},this.#s({type:`discipline`,disciplineId:e}),this.preferences.derniereDisciplineId!==e&&(this.preferences={...this.preferences,derniereDisciplineId:e},this.stockage.sauvegarderPreferences(this.preferences))}ouvrirBibliotheque(){this.#c({type:`bibliotheques`})}mediasManquants=[];videosOrphelines=[];taillesVideos=new Map;infoEspace=null;sauvegardes=[];ouvrirPlus(){this.#c({type:`plus`,section:null}),this.#h()}ouvrirPlusSection(e){this.doublonOuvert=null,(e===`medias`||e===`atraiter`)&&Ki(),this.zoneCourante()!==`plus`&&this.#c({type:`plus`,section:null}),this.#s({type:`plus`,section:e}),this.#h()}ouvrirFavoris(){this.#c({type:`favoris`})}#m(e){return Ne(e)}async#h(){let e=this.bibliotheque;if(!e)return;this.taillesVideos=await this.stockage.taillesVideos();let t=new Set(this.taillesVideos.keys());this.mediasManquants=e.contributions.flatMap(e=>e.medias.filter(e=>e.type===`local`&&!t.has(e.id)).map(()=>({techniqueId:e.techniqueId,nom:e.techniqueId?this.technique(e.techniqueId)?.nom??`?`:`capture à rattacher`})));let n=this.#m(e);this.videosOrphelines=[...this.taillesVideos.entries()].filter(([e])=>!n.has(e)).map(([e,t])=>({id:e,taille:t})),this.sauvegardes=await this.stockage.listerSauvegardes(),this.infoEspace=await this.stockage.estimerEspace(),this.requestUpdate()}async supprimerVideoOrpheline(e){if(!this.#x(`destruction_ou_sensible`,`Saisis le PIN pour supprimer ce fichier.`,()=>void this.supprimerVideoOrpheline(e)))return;let t=this.bibliotheque;if(t){if(this.#m(t).has(e)){this.afficherToast(`Ce fichier est référencé — il ne sera pas supprimé`);return}await this.stockage.supprimerVideo(e),this.afficherToast(`Fichier inutilisé supprimé ✓`),await this.#h()}}async restaurerSauvegarde(e){if(this.#x(`destruction_ou_sensible`,`Saisis le PIN pour restaurer cet état.`,()=>void this.restaurerSauvegarde(e)))try{let t=await this.stockage.restaurerSauvegarde(e);this.bibliotheque={...t},this.afficherToast(`Sauvegarde restaurée ✓ — l'état précédent est lui-même sauvegardé`),this.#h()}catch(e){this.afficherToast(`Restauration impossible : ${e instanceof Error?e.message:`sauvegarde illisible`}`)}}async majNomDiscipline(e,t){if(!this.#x(`modification`,`Saisis le PIN pour renommer cette discipline.`,()=>void this.majNomDiscipline(e,t)))return;let n=this.bibliotheque,r=n?.disciplines.find(t=>t.id===e);!n||!r||!t.trim()||(r.nom=t.trim(),await this.#G(n))}async ajouterTaxonomie(e,t,n){if(!this.#x(`modification`,`Saisis le PIN pour modifier les taxonomies.`,()=>void this.ajouterTaxonomie(e,t,n)))return;let r=this.bibliotheque,i=r?.disciplines.find(t=>t.id===e),a=n.trim();if(!r||!i||!a)return;let o=a.toLowerCase().normalize(`NFD`).replace(/[̀-ͯ]/g,``).replace(/[^a-z0-9]+/g,`-`),s=o;for(let e=2;[...i.familles,...i.niveaux].some(e=>e.id===s);e++)s=`${o}-${e}`;i[t].push({id:s,nom:a,ordre:i[t].length+1}),await this.#G(r)}async majTaxonomie(e,t,n,r){if(!this.#x(`modification`,`Saisis le PIN pour modifier les taxonomies.`,()=>void this.majTaxonomie(e,t,n,r)))return;let i=this.bibliotheque,a=(i?.disciplines.find(t=>t.id===e))?.[t].find(e=>e.id===n);if(!(!i||!a)){if(r.nom?.trim()&&(a.nom=r.nom.trim()),t===`niveaux`){let e=a;r.couleur!==void 0&&(r.couleur?e.couleur=r.couleur:delete e.couleur),r.couleur2!==void 0&&(r.couleur2?e.couleur2=r.couleur2:delete e.couleur2)}await this.#G(i)}}usagesTaxonomie(e,t,n){return(this.bibliotheque?.techniques??[]).filter(r=>r.disciplineId===e&&(t===`familles`?r.familleId===n:r.niveauxIds.includes(n)))}reordonnerTaxonomie(e,t,n,r){if(!this.#x(`modification`,`Saisis le PIN pour modifier les taxonomies.`,()=>void this.reordonnerTaxonomie(e,t,n,r)))return;let i=this.bibliotheque,a=i?.disciplines.find(t=>t.id===e);if(!i||!a)return;let o=a[t],s=o.findIndex(e=>e.id===n),c=s+r;if(s<0||c<0||c>=o.length)return;let[l]=o.splice(s,1);o.splice(c,0,l),o.forEach((e,t)=>e.ordre=t+1),this.#G(i)}async supprimerTaxonomie(e,t,n,r){if(!this.#x(`destruction_ou_sensible`,`Saisis le PIN pour supprimer cette valeur de classification.`,()=>void this.supprimerTaxonomie(e,t,n,r)))return;let i=this.bibliotheque,a=i?.disciplines.find(t=>t.id===e),o=a?.[t].find(e=>e.id===n);if(!i||!a||!o)return;let s=this.usagesTaxonomie(e,t,n);if(s.length&&r===void 0){this.afficherToast(`Utilisé par ${s.length} technique${s.length>1?`s`:``} — choisis « remplacer » ou « retirer la classification »`);return}let c=r?a[t].find(e=>e.id===r)?.nom:null;if(!(r&&!c)){if(s.length){await this.stockage.snapshot(`avant-suppression-taxonomie-${o.nom}`);for(let e of s)t===`familles`?r?e.familleId=r:delete e.familleId:e.niveauxIds=r?[...new Set(e.niveauxIds.map(e=>e===n?r:e))]:e.niveauxIds.filter(e=>e!==n)}a[t]=a[t].filter(e=>e.id!==n),await this.#G(i),s.length&&this.afficherToast(c?`« ${o.nom} » supprimée — ${s.length} technique${s.length>1?`s`:``} reclassée${s.length>1?`s`:``} vers « ${c} » (point de restauration conservé)`:`« ${o.nom} » supprimée — classification retirée de ${s.length} technique${s.length>1?`s`:``} (point de restauration conservé)`)}}async ajouterTypeRelation(e,t){if(!this.#x(`modification`,`Saisis le PIN pour modifier les types de lien.`,()=>void this.ajouterTypeRelation(e,t)))return;let n=this.bibliotheque,r=e.trim();if(!n||!r)return;let i=r.toLowerCase().normalize(`NFD`).replace(/[̀-ͯ]/g,``).replace(/[^a-z0-9]+/g,`-`);if(n.typesRelation.some(e=>e.id===i)){this.afficherToast(`Le type « ${r} » existe déjà`);return}let a=t.trim()===``;n.typesRelation.push({id:i,libelle:r,...a?{symetrique:!0}:{libelleInverse:t.trim()}}),await this.#G(n),this.afficherToast(`Type de relation « ${r} » ajouté ✓`)}async majTypeRelation(e,t){if(!this.#x(`modification`,`Saisis le PIN pour modifier les types de lien.`,()=>void this.majTypeRelation(e,t)))return;let n=this.bibliotheque,r=n?.typesRelation.find(t=>t.id===e);if(!(!n||!r)){if(t.libelle!==void 0&&t.libelle.trim()&&(r.libelle=t.libelle.trim()),t.libelleInverse!==void 0&&!r.symetrique){let e=t.libelleInverse.trim();if(!e){this.afficherToast(`Un lien orienté garde une lecture inverse — ou passe-le en symétrique d'abord`);return}r.libelleInverse=e}await this.#G(n)}}async basculerSymetrieTypeRelation(e){if(!this.#x(`modification`,`Saisis le PIN pour modifier les types de lien.`,()=>void this.basculerSymetrieTypeRelation(e)))return;let t=this.bibliotheque,n=t?.typesRelation.find(t=>t.id===e);if(!t||!n)return;let r=this.usagesTypeRelation(e);if(r){this.afficherToast(`« ${n.libelle} » relie déjà ${r} paire${r>1?`s`:``} de techniques — sa nature de lecture ne peut plus changer`);return}n.symetrique?(delete n.symetrique,n.libelleInverse=n.libelleInverse??`${n.libelle} (inverse)`):(n.symetrique=!0,delete n.libelleInverse),await this.#G(t)}ouvrirCompositions(){this.#c({type:`compositions`})}ouvrirComposition(e){this.menuComposition=null,this.#s({type:`composition`,compositionId:e})}afficherToast(e){this.toast=e,this.#t=Date.now()+3400,clearTimeout(this.#e),this.#e=setTimeout(()=>this.toast=null,3400)}#g(){clearTimeout(this.#e),this.toast=null}willUpdate(e){super.willUpdate(e),this.toast&&Date.now()>=this.#t&&this.#g(),e.has(`ecran`)&&this.ecran.type!==`entrainement`&&ko()}get reglagesProtections(){let e=this.preferences.protections;return{modifications:e?.modifications??!1,suppressions:e?.suppressions??!1}}get pinConfigure(){return this.preferences.protections?.verification!==void 0}async#_(e){this.preferences={...this.preferences,protections:e},await this.stockage.sauvegarderPreferences(this.preferences),this.requestUpdate()}async activerProtection(e,t){let n=this.preferences.protections,r=n?.verification;if(!r){if(!t)return`Crée d'abord un PIN`;let e=hr(t.pin);if(e)return e;if(t.pin!==t.confirmation)return`Les deux saisies ne correspondent pas`;r=await yr(t.pin)}return await this.#_({modifications:e===`modifications`?!0:n?.modifications??!1,suppressions:e===`suppressions`?!0:n?.suppressions??!1,verrouillage:n?.verrouillage??`5min`,verification:r}),this.#w(`protection activée`),this.afficherToast(`Protection ${e===`modifications`?`des modifications`:`des suppressions et opérations sensibles`} activée ✓`),null}async desactiverProtection(e,t){let n=this.preferences.protections;if(!n?.verification)return null;if(!await br(t,n.verification))return`PIN incorrect`;let r={...n,modifications:e!==`modifications`&&n.modifications,suppressions:e!==`suppressions`&&n.suppressions};return!r.modifications&&!r.suppressions?(await this.#_({modifications:!1,suppressions:!1}),this.#w(`protections désactivées — secret supprimé`),this.afficherToast(`Plus aucune action n'est protégée — les données du PIN ont été supprimées`)):(await this.#_(r),this.afficherToast(`Protection désactivée ✓ — l'autre reste active`)),null}async activerPrereglagePartage(e){return await this.activerProtection(`modifications`,e)||(await this.activerProtection(`suppressions`),await this.#_({...this.preferences.protections,verrouillage:`5min`}),this.changerDemarrage(`bibliotheque`),this.afficherToast(`Tablette partagée : consultation libre, modifications et suppressions protégées ✓`),null)}async choisirVerrouillage(e){let t=this.preferences.protections;t&&await this.#_({...t,verrouillage:e})}async changerPin(e,t,n){let r=this.preferences.protections;return r?.verification?await br(e,r.verification)?hr(t)||(t===n?(await this.#_({...r,verification:await yr(t)}),this.#v=null,this.#w(`PIN modifié`),this.afficherToast(`PIN changé ✓`),null):`Les deux saisies ne correspondent pas — l'ancien PIN reste valable`):`PIN actuel incorrect`:`Aucun PIN à changer`}#v=null;#y=0;#b=0;demandePin=null;get sessionDeverrouillee(){return Cr(this.#v,this.preferences.protections?.verrouillage??`5min`,Date.now())}#x(e,t,n){return Sr(e,this.reglagesProtections,this.sessionDeverrouillee)===`libre`?(this.#v!==null&&this.sessionDeverrouillee&&(this.#v=Date.now()),!0):(this.demandePin={raison:t,action:n},this.requestUpdate(),!1)}autoriser(e,t,n){this.#x(e,t,n)&&n()}echecsCumules=0;verrouiller(e=!1){this.#v!==null&&this.#w(e?`verrouillé à l'arrière-plan`:`verrouillage manuel`),this.#v=null,e||this.afficherToast(`Verrouillé — le PIN sera demandé à la prochaine action protégée`),this.requestUpdate()}annulerDemandePin(){this.demandePin=null,this.requestUpdate()}async validerDemandePin(e){let t=this.demandePin,n=this.preferences.protections?.verification;if(!t||!n)return;let r=Math.ceil((this.#b-Date.now())/1e3);if(r>0){this.demandePin={...t,erreur:`Attends ${r} s avant le prochain essai`},this.requestUpdate();return}if(!await br(e,n)){this.#y++,this.echecsCumules++;let e=xr(this.#y);this.#b=Date.now()+e*1e3,this.demandePin={...t,erreur:e?`PIN incorrect — prochain essai dans ${e} s`:`PIN incorrect`},this.requestUpdate();return}this.#y=0,this.#b=0,this.#v=Date.now(),this.#w(`déverrouillage réussi`),this.demandePin=null,this.requestUpdate(),await t.action()}#S(){let e=this.demandePin;return L`
      <div class="voile" @click=${()=>this.annulerDemandePin()}></div>
      <div class="feuille" role="dialog" aria-label="Action protégée">
        <div class="prise"></div>
        <h2>Action protégée</h2>
        <div class="geste">${e.raison}</div>
        <div class="creation-discipline" style="margin-top:8px">
          <input type="password" inputmode="numeric" autocomplete="off" aria-label="PIN"
                 placeholder="PIN" class="champ-pin"
                 @keydown=${e=>{e.key===`Enter`&&this.validerDemandePin(e.target.value)}}>
          <button class="bouton principal"
            @click=${e=>{let t=e.target.parentElement.querySelector(`input`);this.validerDemandePin(t.value)}}>Déverrouiller</button>
        </div>
        ${e.erreur?L`<p class="details erreur-pin" role="alert" style="color:var(--accent); padding-top:6px">${e.erreur}</p>`:R}
        <div class="actions">
          <button class="bouton" @click=${()=>this.annulerDemandePin()}>Annuler</button>
        </div>
      </div>
    `}#C(){let e=this.reglagesProtections;return!(e.modifications||e.suppressions)||!this.sessionDeverrouillee?R:L`<button class="session-curateur" title="Modifications temporairement déverrouillées"
      @click=${()=>this.verrouiller()}>🔓 déverrouillé · <b>Verrouiller</b></button>`}journalSecurite=[];#w(e){this.journalSecurite=[...this.journalSecurite.slice(-9),`${new Date().toTimeString().slice(0,5)} · ${e}`]}async reinitialiserTout(){await this.stockage.reinitialiser(),this.bibliotheque=je(),await this.stockage.sauvegarder(this.bibliotheque),this.preferences=cr(),await this.stockage.sauvegarderPreferences(this.preferences),this.#v=null,this.#y=0,this.#b=0,this.journalSecurite=[],this.#r(),this.#a=[],this.#o={},this.ecran={type:`bibliotheques`},this.mediasManquants=[],this.videosOrphelines=[],this.taillesVideos=new Map,this.sauvegardes=[],this.dernierFichier=null,window.scrollTo({top:0}),this.afficherToast(`Movenso réinitialisé — bibliothèque vide, aucune protection, aucun PIN`)}choisirPackAImporter(){if(!this.#x(`modification`,`Saisis le PIN pour importer un pack.`,()=>void this.choisirPackAImporter()))return;let e=document.createElement(`input`);e.type=`file`,e.accept=`.movpack`,e.onchange=()=>{let t=e.files?.[0];t&&this.importerPack(t)},e.click()}async importerPack(e){let t=this.bibliotheque;if(t){this.importEnAttente=null,this.restaurationEnAttente=null,await this.stockage.nettoyerImport();try{let n=new Uint8Array(await e.slice(0,4).arrayBuffer()),r,i,a,o=[],s=[];if(Rn(n)){let t=await Kn(e.stream(),this.stockage.puitsImport());if(t.manifeste.portee===`complet`){await this.#j(t);return}o=t.medias,r=t.bibliotheque,i=t.manifeste.id,a=t.manifeste,s=t.avertissements}else{let t=new Uint8Array(await e.arrayBuffer());r=ot(JSON.parse(new TextDecoder().decode(t))),_t(r),i=r.contributions[0]?.origine?.pack??e.name.replace(/\.(json|movpack)$/i,``),s=[`Fichier JSON historique : ni manifeste ni intégrité de conteneur — analysé et validé, mais non vérifié par empreinte.`]}let c=t.techniques.some(e=>e.origine?.pack===i)||t.contributions.some(e=>e.origine?.pack===i),l=St(t,r,{packId:i});this.importEnAttente={...l,packId:i,medias:o,dejaInstalle:c,...a?{manifeste:a}:{},volume:e.size,contenus:{techniques:r.techniques.length,contributions:r.contributions.length},avertissements:s},this.requestUpdate()}catch(e){await this.stockage.nettoyerImport(),this.afficherToast(`Import impossible : ${e instanceof Error?e.message:`fichier illisible`}`)}}}importEnAttente=null;rapportApresImport=null;#T(e,t){let n=tt(e,t);return n.suffisant?!0:(this.afficherToast(`Espace insuffisant : ${nt(n.requis)} à écrire, environ ${nt(n.disponible??0)} disponibles — libère de l'espace d'abord, rien n'a été écrit`),!1)}#E(e){return e.reduce((e,t)=>e+t.taille,0)}#D(){let e=this.preferences.limiteEspaceMo??5e3;return e<=0?null:e*1e6}async#O(){let e=await this.stockage.estimerEspace();if(e===null)return null;let t=this.#D();return t===null?e:{usage:e.usage,quota:Math.min(e.quota,t)}}async changerLimiteEspace(e){let t=e<=0?0:Math.max(200,Math.round(e));this.preferences={...this.preferences,limiteEspaceMo:t},this.stockage.sauvegarderPreferences(this.preferences),this.requestUpdate()}async#k(e){let t=tt(e.size,await this.#O());return t.suffisant?!1:(this.afficherToast(`Espace insuffisant : ${nt(t.requis)} à écrire, environ ${nt(t.disponible??0)} disponibles — libère de l'espace d'abord, rien n'a été écrit`),!0)}async#A(e,t,n){this.enregistrementMedia={phase:`analyse`,fraction:0,octets:t.size,etaSec:null},this.requestUpdate();try{let{media:r,dejaPresent:i}=await $e(e,t,n);if(i)return{media:r,ecrit:!1};if(await this.#k(t))return null;let a=performance.now();this.enregistrementMedia={phase:`ecriture`,fraction:0,octets:t.size,etaSec:null},this.requestUpdate();let o=0;return await this.stockage.ecrireVideo(r.id,t,r.extension,e=>{let n=performance.now();if(e<1&&n-o<100)return;o=n;let r=(n-a)/1e3,i=e>.03?Math.max(0,Math.round(r/e-r)):null;this.enregistrementMedia={phase:`ecriture`,fraction:e,octets:t.size,etaSec:i},this.requestUpdate()}),{media:r,ecrit:!0}}finally{this.enregistrementMedia=null,this.requestUpdate()}}async confirmerImport(){let e=this.importEnAttente;if(!e||!this.#T(this.#E(e.medias),await this.#O()))return;await this.stockage.snapshot(`avant-import-${e.packId}`);try{await this.stockage.promouvoirImportMedias(e.medias.map(e=>e.nomPhysique)),await this.#G(e.bibliotheque)}catch(e){this.afficherToast(`Import impossible : ${e instanceof Error?e.message:`écriture refusée`}`);return}await this.stockage.nettoyerImport();let t=e.rapport;this.importEnAttente=null,this.rapportApresImport={discipline:t.discipline,disciplineId:e.bibliotheque.disciplines.find(e=>e.nom===t.discipline)?.id??null,rejointes:t.rejointes.length,creees:t.creees.length,suggestions:t.suggestions,videos:e.medias.length},this.requestUpdate()}fermerRapportImport(){this.rapportApresImport=null,this.requestUpdate()}async annulerImport(){this.importEnAttente=null,await this.stockage.nettoyerImport(),this.requestUpdate(),this.afficherToast(`Import annulé — rien n'a été écrit`)}restaurationEnAttente=null;async#j(e){let t=this.bibliotheque;if(!(t.disciplines.length===0&&t.techniques.length===0&&t.contributions.length===0&&t.compositions.length===0)){await this.stockage.nettoyerImport(),this.afficherToast(`Cet export complet se restaure sur une installation vierge — ici, importe plutôt un pack de discipline (Plus › Créer ou exporter un pack)`);return}this.restaurationEnAttente=e,this.requestUpdate()}async confirmerRestauration(){if(!this.#x(`destruction_ou_sensible`,`Saisis le PIN pour restaurer cette sauvegarde.`,()=>void this.confirmerRestauration()))return;let e=this.restaurationEnAttente;if(e&&this.#T(this.#E(e.medias),await this.#O())){try{await this.stockage.promouvoirImportMedias(e.medias.map(e=>e.nomPhysique)),await this.#G(e.bibliotheque)}catch(e){this.afficherToast(`Restauration impossible : ${e instanceof Error?e.message:`écriture refusée`}`);return}await this.stockage.nettoyerImport(),this.restaurationEnAttente=null,this.afficherToast(`Bibliothèque restaurée ✓ ${e.bibliotheque.techniques.length} techniques, ${e.medias.length} vidéo${e.medias.length>1?`s`:``} — réglages d'appareil (thème, démarrage, protections) à reconfigurer`)}}async annulerRestauration(){this.restaurationEnAttente=null,await this.stockage.nettoyerImport(),this.requestUpdate(),this.afficherToast(`Restauration annulée — rien n'a été écrit`)}static#M=1<<20;progressionExport=null;#N=!1;annulerExport(){this.#N=!0}async#P(e){let t=await this.stockage.listerVideos();return[...Ne(e)].filter(e=>t.has(e))}async#F(t,n,r,i,a=!0){await this.stockage.nettoyerArchivesTemp();let o=`export-${Date.now()}.movpack`,s;try{s=await this.stockage.ouvrirArchiveTemp(o)}catch{return this.afficherToast(`Export impossible : stockage temporaire indisponible sur cet appareil`),null}this.#N=!1,this.progressionExport={fait:0,total:r.length},this.requestUpdate();try{await Wn(t,n,r,t=>this.stockage.lireMediaParBlocs(t,e.#M),{ecrire:e=>s.write(e)},{creeLe:new Date().toISOString(),estAnnule:()=>this.#N,surProgression:(e,t)=>{this.progressionExport={fait:e,total:t},this.requestUpdate()}}),await s.close()}catch(e){try{await s.close()}catch{}return await this.stockage.supprimerArchiveTemp(o),this.progressionExport=null,this.requestUpdate(),this.afficherToast(this.#N?`Export annulé — rien n'a été téléchargé`:e instanceof Error?e.message:`Export échoué`),null}let c=await this.stockage.fichierArchiveTemp(o),l=c.size;return a&&ns(c,i),this.progressionExport=null,this.requestUpdate(),{taille:l,fichier:new File([c],i,{type:`application/octet-stream`})}}dernierFichier=null;async exporterTout(e=!0){if(!this.#x(`destruction_ou_sensible`,`Saisis le PIN pour créer une sauvegarde.`,()=>void this.exporterTout(e)))return;let t=this.bibliotheque;if(!t)return;let n=Ne(t),r=await this.stockage.listerVideos(),i=[...n].filter(e=>!r.has(e)),a=e?[...n].filter(e=>r.has(e)):[],o=Fo({avecVideos:e,nbManquants:i.length}),s=`movenso-${o.complete?`complet`:`partiel`}-${new Date().toISOString().slice(0,10)}.movpack`,c=await this.#F(t,{id:`movenso-export-complet`,nom:o.complete?`Sauvegarde complète Movenso`:`Sauvegarde partielle Movenso`,portee:`complet`},a,s,!1);if(c===null)return;let l=c.taille,u=await this.#B(c.fichier),d=`${t.disciplines.length} discipline${t.disciplines.length>1?`s`:``}, ${t.techniques.length} techniques, ${t.contributions.length} contenus, ${t.compositions.length} composition${t.compositions.length>1?`s`:``}, ${t.favoris.length} favori${t.favoris.length>1?`s`:``}, ${a.length} vidéo${a.length>1?`s`:``}`;this.dernierFichier={role:o.role,nom:s,taille:l,resume:`${d} — EXCLUS : ${o.exclusions.join(` ; `)}`},this.afficherToast(o.complete?`Sauvegarde complète ✓ — enregistrée dans ${u}`:`Sauvegarde PARTIELLE ✓ (exclut ${o.exclusions[0]}) — dans ${u}`)}async exporterDiagnostic(){let e=this.bibliotheque;if(!e)return;let t=await this.stockage.listerVideos(),n=Ne(e),r=window.Capacitor,i=Lo({genereLe:new Date().toISOString(),plateforme:r?.getPlatform?.()??`web`,versionSchema:3,versionMovpack:4,disciplines:e.disciplines.length,techniques:e.techniques.length,contributions:e.contributions.length,compositions:e.compositions.length,favoris:e.favoris.length,mediasReferences:n.size,mediasPresents:t.size,mediasManquants:[...n].filter(e=>!t.has(e)).length,orphelins:[...t].filter(e=>!n.has(e)).length,espace:await this.stockage.estimerEspace()}),a=`movenso-diagnostic-${new Date().toISOString().slice(0,10)}.txt`,o=await this.#B(new File([i],a,{type:`text/plain`}));this.afficherToast(`Diagnostic enregistré dans ${o} — informations techniques uniquement, aucun secret`)}publicationPrete=null;async preparerPublication(e,t){if(!this.#x(`destruction_ou_sensible`,`Saisis le PIN pour préparer ce pack.`,()=>void this.preparerPublication(e,t)))return;let n=this.bibliotheque,r=n?.disciplines.find(t=>t.id===e);if(!n||!r)return;let i=new Set([`local`]);for(let t of n.techniques)t.disciplineId===e&&t.origine&&i.add(t.origine.pack);for(let t of n.contributions)(t.techniqueId?n.techniques.find(e=>e.id===t.techniqueId):void 0)?.disciplineId===e&&t.origine&&i.add(t.origine.pack);let a,o=[];try{({extrait:a,relationsExclues:o}=qn(n,e,i,t.techniques,{compositionsPersonnelles:t.compositionsPersonnelles??!1}))}catch(e){this.afficherToast(`Publication impossible : ${e instanceof Error?e.message:`état inattendu`}`);return}if(a.techniques.length===0){this.afficherToast(`Rien à publier — sélectionne au moins une technique`);return}let s=t.nom?.trim()||r.nom,c=t.avecVideos?await this.#P(a):[],l=`${Xn(s)}.movpack`,u=await this.#F(a,{id:Zn(r.id),nom:s,portee:`discipline`,...t.auteur?.trim()?{auteur:t.auteur.trim()}:{},...t.note?.trim()?{conditions:t.note.trim()}:{}},c,l,!1);u!==null&&(this.publicationPrete={fichier:u.fichier,nomFichier:l,taille:u.taille,nomPack:s,resume:`${a.techniques.length} technique${a.techniques.length>1?`s`:``}${c.length?`, ${c.length} vidéo${c.length>1?`s`:``}`:` (sans vidéo)`} — sans carnet ni favoris${o.length?` ; ${o.length} relation${o.length>1?`s`:``} hors périmètre exclue${o.length>1?`s`:``}`:``}`},this.requestUpdate())}async enregistrerPublicationLocale(){let e=this.publicationPrete;if(!e)return;let t=await this.#B(e.fichier);this.afficherToast(`« ${e.nomPack} » enregistré (${nt(e.taille)}) dans ${t}`),this.publicationPrete=null,this.requestUpdate()}async partagerPublication(){let e=this.publicationPrete;e&&await this.#V(e.fichier,e.nomPack,`Pack « ${e.nomPack} » — Movenso`)}fermerPublication(){this.publicationPrete=null,this.requestUpdate()}async creerTechnique(e,t,n){if(!this.#x(`modification`,`Saisis le PIN pour créer une technique.`,()=>void this.creerTechnique(e,t,n)))return;let r=this.bibliotheque,i=t.trim();if(!r||!i||!r.disciplines.some(t=>t.id===e))return;let a=z();r.techniques.push({id:a,disciplineId:e,nom:i,...n?.nomTraditionnel?.trim()?{nomTraditionnel:n.nomTraditionnel.trim()}:{},...n?.familleId?{familleId:n.familleId}:{},niveauxIds:n?.niveauxIds??[],relations:[]}),await this.#G(r),this.ouvrirFiche(a),this.editionFiche=!0,this.afficherToast(`« ${i} » créée ✓ — complète-la, ou capture dessus`)}async creerDiscipline(e){if(!this.#x(`modification`,`Saisis le PIN pour créer une discipline.`,()=>void this.creerDiscipline(e)))return null;let t=this.bibliotheque,n=e.trim();if(!t||!n)return null;let r=t.disciplines.find(e=>B(e.nom)===B(n));if(r)return this.afficherToast(`« ${r.nom} » existe déjà`),r.id;let i=z();return t.disciplines.push({id:i,nom:n,familles:[],niveaux:[]}),await this.#G(t),this.afficherToast(`Discipline « ${n} » créée ✓ — capture ou importe, elle se remplira`),i}usagesTypeRelation(e){return(this.bibliotheque?.techniques??[]).reduce((t,n)=>t+n.relations.filter(t=>t.type===e).length,0)}async retirerRelation(e,t,n){if(!this.#x(`modification`,`Saisis le PIN pour retirer ce lien.`,()=>void this.retirerRelation(e,t,n)))return;let r=this.bibliotheque,i=r?.techniques.find(t=>t.id===e);!r||!i||(i.relations=i.relations.filter(e=>!(e.type===n&&e.cibleId===t)),await this.#G(r),this.afficherToast(`Lien retiré ✓`))}async supprimerTypeRelation(e){if(!this.#x(`destruction_ou_sensible`,`Saisis le PIN pour supprimer ce type de lien.`,()=>void this.supprimerTypeRelation(e)))return;let t=this.bibliotheque,n=t?.typesRelation.find(t=>t.id===e);if(!t||!n)return;let r=this.usagesTypeRelation(e);if(r){this.afficherToast(`« ${n.libelle} » est utilisé par ${r} relation${r>1?`s`:``} — retire-les d'abord des fiches concernées`);return}t.typesRelation=t.typesRelation.filter(t=>t.id!==e),await this.#G(t),this.afficherToast(`Lien « ${n.libelle} » supprimé ✓`)}async supprimerTechnique(e){if(!this.#x(`destruction_ou_sensible`,`Saisis le PIN pour retirer cette technique.`,()=>void this.supprimerTechnique(e)))return;let t=this.bibliotheque,n=t?.techniques.find(t=>t.id===e);if(!t||!n)return;let r=t.contributions.filter(t=>t.techniqueId===e);t.corbeille=[{supprimeeLe:new Date().toISOString(),technique:n,contributions:r,etaitFavori:t.favoris.includes(e)},...t.corbeille??[]],t.techniques=t.techniques.filter(t=>t.id!==e),t.contributions=t.contributions.filter(t=>t.techniqueId!==e),t.favoris=t.favoris.filter(t=>t!==e),await this.#G(t),this.editionFiche=!1,this.retour(),this.afficherToast(`« ${n.nom} » mise en corbeille ✓ — restaurable depuis Plus › Corbeille`)}async restaurerTechnique(e){if(!this.#x(`modification`,`Saisis le PIN pour restaurer cette fiche.`,()=>void this.restaurerTechnique(e)))return;let t=this.bibliotheque,n=t?.corbeille?.find(t=>t.technique.id===e);!t||!n||(t.corbeille=(t.corbeille??[]).filter(t=>t.technique.id!==e),t.techniques=[...t.techniques,n.technique],t.contributions=[...t.contributions,...n.contributions],n.etaitFavori&&!t.favoris.includes(e)&&(t.favoris=[...t.favoris,e]),await this.#G(t),this.afficherToast(`« ${n.technique.nom} » restaurée ✓`))}async#I(e,t){let n=new Set(t),r=(e.corbeille??[]).filter(e=>n.has(e.technique.id));if(r.length!==0){for(let t of e.techniques)t.relations=t.relations.filter(e=>!n.has(e.cibleId));for(let t of r){let n=t.contributions.filter(e=>e.provenance===`personnel`).map(e=>({...e,techniqueId:null}));e.contributions=[...e.contributions,...n]}e.corbeille=(e.corbeille??[]).filter(e=>!n.has(e.technique.id)),await this.#G(e)}}async supprimerDefinitivement(e){if(!this.#x(`destruction_ou_sensible`,`Saisis le PIN pour supprimer définitivement.`,()=>void this.supprimerDefinitivement(e)))return;let t=this.bibliotheque,n=t?.corbeille?.find(t=>t.technique.id===e);!t||!n||(await this.stockage.snapshot(`avant-purge-${n.technique.nom}`),await this.#I(t,[e]),this.afficherToast(`« ${n.technique.nom} » supprimée définitivement ✓ — point de restauration conservé`))}async viderCorbeille(){if(!this.#x(`destruction_ou_sensible`,`Saisis le PIN pour vider la corbeille.`,()=>void this.viderCorbeille()))return;let e=this.bibliotheque;if(!e||!(e.corbeille??[]).length)return;let t=e.corbeille.length;await this.stockage.snapshot(`avant-vidage-corbeille`),await this.#I(e,e.corbeille.map(e=>e.technique.id)),this.afficherToast(`Corbeille vidée ✓ — ${t} fiche${t>1?`s`:``} supprimée${t>1?`s`:``}, point de restauration conservé`)}async supprimerDiscipline(e){if(!this.#x(`destruction_ou_sensible`,`Saisis le PIN pour retirer cette discipline.`,()=>void this.supprimerDiscipline(e)))return;let t=this.bibliotheque,n=t?.disciplines.find(t=>t.id===e);if(!t||!n)return;let r=t.techniques.filter(t=>t.disciplineId===e).length;if(r){this.afficherToast(`« ${n.nom} » contient encore ${r} technique${r>1?`s`:``} — retire-les d'abord (fiche → crayon → Retirer)`);return}await this.stockage.snapshot(`avant-retrait-${n.nom}`),t.disciplines=t.disciplines.filter(t=>t.id!==e),await this.#G(t),this.afficherToast(`Discipline « ${n.nom} » retirée ✓`)}reordonnerDiscipline(e,t){if(!this.#x(`modification`,`Saisis le PIN pour réordonner les disciplines.`,()=>void this.reordonnerDiscipline(e,t)))return;let n=this.bibliotheque;if(!n)return;let r=n.disciplines.findIndex(t=>t.id===e),i=r+t;if(r<0||i<0||i>=n.disciplines.length)return;let[a]=n.disciplines.splice(r,1);n.disciplines.splice(i,0,a),this.#G(n)}reordreGlisse=null;deplacerDisciplineVers(e,t){let n=this.bibliotheque;if(!n||e===t)return;let r=n.disciplines.findIndex(t=>t.id===e);if(r<0)return;let[i]=n.disciplines.splice(r,1),a=n.disciplines.findIndex(e=>e.id===t);n.disciplines.splice(a<0?r:a,0,i),this.requestUpdate()}deplacerTaxonomieVers(e,t,n,r){let i=this.bibliotheque,a=i?.disciplines.find(t=>t.id===e);if(!i||!a||n===r)return;let o=a[t],s=o.findIndex(e=>e.id===n);if(s<0)return;let[c]=o.splice(s,1),l=o.findIndex(e=>e.id===r);o.splice(l<0?s:l,0,c),o.forEach((e,t)=>e.ordre=t+1),this.requestUpdate()}async enregistrerReordre(){if(!this.#x(`modification`,`Saisis le PIN pour enregistrer l'ordre.`,()=>void this.enregistrerReordre()))return;let e=this.bibliotheque;e&&await this.#G(e)}async supprimerDisciplineEtContenu(e){if(!this.#x(`destruction_ou_sensible`,`Saisis le PIN pour supprimer cette discipline et son contenu.`,()=>void this.supprimerDisciplineEtContenu(e)))return;let t=this.bibliotheque,n=t?.disciplines.find(t=>t.id===e);if(!t||!n)return;await this.stockage.snapshot(`avant-suppression-discipline-${n.nom}`);let r=new Set(t.techniques.filter(t=>t.disciplineId===e).map(e=>e.id));t.techniques=t.techniques.filter(t=>t.disciplineId!==e),t.favoris=t.favoris.filter(e=>!r.has(e)),t.contributions=t.contributions.flatMap(e=>!e.techniqueId||!r.has(e.techniqueId)?[e]:e.provenance===`personnel`?[{...e,techniqueId:null}]:[]),t.disciplines=t.disciplines.filter(t=>t.id!==e),await this.#G(t),this.afficherToast(`Discipline « ${n.nom} » supprimée — tes notes sont revenues « à rattacher », point de restauration conservé`)}editionFiche=!1;#L=null;entrerEditionFiche(e){let t=this.bibliotheque,n=t?.techniques.find(t=>t.id===e);!t||!n||(this.#L={techniqueId:e,technique:structuredClone(n),contributions:t.contributions.filter(t=>t.techniqueId===e).map(e=>structuredClone(e)),favori:t.favoris.includes(e)},this.editionFiche=!0,this.requestUpdate())}validerEditionFiche(){this.#L=null,this.editionFiche=!1,this.afficherToast(`Modifications enregistrées ✓`),this.requestUpdate()}async annulerEditionFiche(){let e=this.#L,t=this.bibliotheque;if(this.editionFiche=!1,this.#L=null,!e||!t){this.requestUpdate();return}let n=t.techniques.findIndex(t=>t.id===e.techniqueId);n>=0&&(t.techniques[n]=structuredClone(e.technique)),t.contributions=t.contributions.filter(t=>t.techniqueId!==e.techniqueId),t.contributions.push(...e.contributions.map(e=>structuredClone(e)));let r=t.favoris.includes(e.techniqueId);e.favori&&!r?t.favoris.push(e.techniqueId):!e.favori&&r&&(t.favoris=t.favoris.filter(t=>t!==e.techniqueId)),await this.#G(t),this.afficherToast(`Modifications annulées`),this.requestUpdate()}menuFiche=!1;mediaAffiche=null;voixOuverte=null;relationsDepliees=!1;async majTechnique(e,t){if(!this.#x(`modification`,`Saisis le PIN pour enregistrer cette modification.`,()=>void this.majTechnique(e,t)))return;let n=this.bibliotheque,r=n?.techniques.find(t=>t.id===e);if(!n||!r)return;let i=structuredClone(r);t.disciplineId&&t.disciplineId!==r.disciplineId&&(delete r.familleId,r.niveauxIds=[]),Object.assign(r,t);for(let e of[`nomTraditionnel`,`familleId`,`mediaPrincipalId`])e in t&&(t[e]===void 0||t[e]===``)&&delete r[e];try{await this.#G(n)}catch(e){Object.assign(r,i),this.afficherToast(e instanceof Error?e.message:`Modification refusée`)}}async majContribution(e,t){if(!this.#x(`modification`,`Saisis le PIN pour modifier cette contribution.`,()=>void this.majContribution(e,t)))return;let n=this.bibliotheque,r=n?.contributions.find(t=>t.id===e);!n||!r||(t.trim()?r.description=t.trim():delete r.description,await this.#G(n))}async supprimerContribution(e){if(!this.#x(`destruction_ou_sensible`,`Saisis le PIN pour supprimer cette contribution.`,()=>void this.supprimerContribution(e)))return;let t=this.bibliotheque,n=t?.contributions.find(t=>t.id===e);!t||!n||(await this.stockage.snapshot(`avant-retrait-d-une-note`),t.contributions=t.contributions.filter(t=>t.id!==e),await this.#G(t),this.afficherToast(`Contribution retirée — point de restauration conservé dans les sauvegardes`))}ouvrirCreationCompo(){this.#x(`modification`,`Saisis le PIN pour créer une composition.`,()=>this.ouvrirCreationCompo())&&(no(),this.creationCompo={etape:`nom`,nom:``},this.requestUpdate())}async creerCompositionFunnel(){let e=this.bibliotheque,t=this.creationCompo?.nom.trim();if(!e||!this.creationCompo||!t)return;let n=Ar(t);e.compositions.push(n),await this.#G(e),no(),this.creationCompo={...this.creationCompo,compoId:n.id,etape:`pas`},this.requestUpdate()}fermerCreationCompo(){let e=this.creationCompo?.compoId;this.creationCompo=null,e&&this.ouvrirComposition(e),this.requestUpdate()}#R(){let e=this.creationCompo;e&&(e.etape===`pas`?this.fermerCreationCompo():(this.creationCompo=null,this.requestUpdate()))}async creerComposition(e){if(!this.#x(`modification`,`Saisis le PIN pour créer une composition.`,()=>void this.creerComposition(e)))return;let t=this.bibliotheque,n=e.trim();if(!t||!n)return;let r=Ar(n);t.compositions.push(r),await this.#G(t),this.ouvrirComposition(r.id),this.requestUpdate()}async modifierComposition(e,t){if(!this.#x(`modification`,`Saisis le PIN pour enregistrer cette composition.`,()=>void this.modifierComposition(e,t)))return!1;let n=this.bibliotheque,r=n?.compositions.find(t=>t.id===e);if(!n||!r)return!1;let i=structuredClone(r);t(r),r.modifieLe=new Date().toISOString();try{return await this.#G(n),!0}catch(e){return Object.assign(r,i),this.afficherToast(e instanceof Error?e.message:`Modification refusée`),!1}}async dupliquerComposition(e){if(!this.#x(`modification`,`Saisis le PIN pour dupliquer cette composition.`,()=>void this.dupliquerComposition(e)))return;let t=this.bibliotheque,n=t?.compositions.find(t=>t.id===e);if(!t||!n)return;let r={...structuredClone(n),id:z(),nom:`${n.nom} (copie)`,creeLe:new Date().toISOString(),modifieLe:new Date().toISOString(),blocs:n.blocs.map(e=>({...structuredClone(e),id:z()}))};delete r.origine,t.compositions.push(r),await this.#G(t),this.ouvrirComposition(r.id),this.afficherToast(`« ${r.nom} » créée ✓ — l'originale n'a pas bougé`)}async exporterComposition(e){if(!this.#x(`destruction_ou_sensible`,`Saisis le PIN pour exporter cette composition.`,()=>void this.exporterComposition(e)))return;let t=this.bibliotheque,n=t?.compositions.find(t=>t.id===e);if(!t||!n)return;let r=new Set(n.blocs.filter(e=>e.type===`technique`&&e.techniqueId).map(e=>e.techniqueId)).size,i=n.blocs.flatMap(e=>e.medias).filter(e=>e.type===`local`).length;if(!confirm(`Exporter « ${n.nom} » (.movpack) ?\n- la composition (${n.blocs.length} bloc${n.blocs.length>1?`s`:``})\n- ${r} technique${r>1?`s`:``} référencée${r>1?`s`:``} (identités seules, sans contenu)\n- ${i?`${i} vidéo(s) de repère incluse(s)`:`aucune vidéo locale`}\n- ton carnet personnel : jamais inclus`))return;let a=Yn(t,e),o=await this.#P(a);await this.#F(a,{id:Zn(n.id),nom:n.nom,portee:`composition`},o,`${Xn(n.nom)}.movpack`)!==null&&this.afficherToast(`Composition « ${n.nom} » exportée ✓ — s'importe et rejoint la bibliothèque cible`)}async partagerComposition(e,t=!0){let n=this.bibliotheque,r=n?.compositions.find(t=>t.id===e);if(!n||!r)return;let i=Yn(n,e),a=Ne(i),o=await this.stockage.listerVideos(),s=t?[...a].filter(e=>o.has(e)):[],c=new Map;for(let e of s)c.set(e,await this.#W(e));let l=`${Xn(r.nom)}.movpack`,u;try{u=await Un(i,{id:Zn(r.id),nom:r.nom,portee:`composition`},c)}catch(e){this.afficherToast(`Partage impossible : ${e instanceof Error?e.message:`export échoué`}`);return}let d=new File([u],l,{type:`application/octet-stream`});await this.#V(d,r.nom,`Composition « ${r.nom} » — Movenso`)}async ajouterMediaPresentation(e,t,n){if(!this.#x(`modification`,`Saisis le PIN pour ajouter ce média.`,()=>void this.ajouterMediaPresentation(e,t,n)))return;let r=this.bibliotheque,i=r?.compositions.find(t=>t.id===e);if(!(!r||!i)&&!this.#q){this.#q=!0;try{let e=[],a=[];if(t.fichier){let n=Qe(t.fichier);if(n){this.afficherToast(n);return}let i=await this.#A(r,t.fichier,`fichier`);if(!i)return;i.ecrit&&a.push(i.media.id),e.push(i.media)}if(t.lien?.trim()&&e.push(is(t.lien.trim())),!e.length)return;n?.trim()&&e[0]&&(e[0].label=n.trim());let o=i.presentation?structuredClone(i.presentation):void 0;if(i.presentation={medias:[...i.presentation?.medias??[],...e]},i.modifieLe=new Date().toISOString(),!await this.#K(r,a,()=>{o?i.presentation=o:delete i.presentation}))return;this.afficherToast(`Présentation ajoutée ✓`)}finally{this.#q=!1}}}async retirerMediaPresentation(e,t){await this.modifierComposition(e,e=>{if(!e.presentation)return;let n=e.presentation.medias.filter(e=>e.id!==t);n.length?e.presentation={medias:n}:delete e.presentation})}async supprimerComposition(e){if(!this.#x(`destruction_ou_sensible`,`Saisis le PIN pour supprimer cette composition.`,()=>void this.supprimerComposition(e)))return;let t=this.bibliotheque,n=t?.compositions.find(t=>t.id===e);!t||!n||(await this.stockage.snapshot(`avant-suppression-de-composition`),t.compositions=t.compositions.filter(t=>t.id!==e),await this.#G(t),this.menuComposition=null,this.retour(),this.afficherToast(`Composition « ${n.nom} » supprimée — point de restauration conservé`))}async ajouterNote(e,t){if(!this.#x(`modification`,`Saisis le PIN pour écrire dans ton carnet.`,()=>void this.ajouterNote(e,t)))return;let n=this.bibliotheque,r=t.trim();!n||!r||(n.contributions.push({id:z(),techniqueId:e,provenance:`personnel`,description:r,pointsCles:[],creeLe:new Date().toISOString(),medias:[]}),await this.#G(n))}async ajouterMediaFiche(e,t,n){if(!this.#x(`modification`,`Saisis le PIN pour ajouter ce média.`,()=>void this.ajouterMediaFiche(e,t,n)))return;let r=this.bibliotheque;if(r&&!this.#q){this.#q=!0;try{let i=[],a=[];if(t.fichier){let e=Qe(t.fichier);if(e){this.afficherToast(e);return}let n=await this.#A(r,t.fichier,`fichier`);if(!n)return;n.ecrit&&a.push(n.media.id),i.push(n.media)}if(t.lien?.trim()&&i.push(is(t.lien.trim())),!i.length&&!n?.texte?.trim())return;n?.label&&i[0]&&(i[0].label=n.label);let o=n?.provenance??`personnel`,s={id:z(),techniqueId:e,provenance:o,...n?.texte?.trim()?{description:n.texte.trim()}:{},...o!==`personnel`&&n?.attribution?{attribution:n.attribution}:{},pointsCles:[],creeLe:new Date().toISOString(),medias:i};if(r.contributions.push(s),!await this.#K(r,a,()=>{r.contributions=r.contributions.filter(e=>e.id!==s.id)}))return;i[0]&&(this.mediaAffiche=i[0].id),this.ajoutMedia=null,this.afficherToast(o===`personnel`?`Ajouté à ton carnet ✓`:i.length?`Média ajouté ✓`:`Contribution ajoutée ✓`)}finally{this.#q=!1}}}async amenderContribution(e,t){if(!this.#x(`modification`,`Saisis le PIN pour modifier cette contribution.`,()=>void this.amenderContribution(e,t)))return;let n=this.bibliotheque,r=n?.contributions.find(t=>t.id===e);if(!n||!r)return;let i=r.origine?{modifiePar:this.preferences.pseudo?.trim()||`moi`}:{};t={...t,...i};let a=Po(r,t),o=e=>{let t=n.contributions.findIndex(e=>e.id===r.id);t!==-1&&(n.contributions[t]=e)};o(a);try{await this.#G(n)}catch(e){o(r),this.afficherToast(e instanceof Error?e.message:`Modification refusée`)}}async majMediaLabel(e,t){if(!this.#x(`modification`,`Saisis le PIN pour renommer ce média.`,()=>void this.majMediaLabel(e,t)))return;let n=this.bibliotheque;if(!n)return;let r=n.contributions.find(t=>t.medias.some(t=>t.id===e)),i=r?.medias.find(t=>t.id===e);if(!r||!i)return;let a=i.label,o=t.trim();o?i.label=o:delete i.label;try{await this.#G(n)}catch(e){a===void 0?delete i.label:i.label=a,this.afficherToast(e instanceof Error?e.message:`Renommage refusé`)}}async majMediaLien(e,t){if(!this.#x(`modification`,`Saisis le PIN pour modifier ce lien.`,()=>void this.majMediaLien(e,t)))return;let n=this.bibliotheque;if(!n)return;let r=t.trim();if(!r)return;let i=n.contributions.flatMap(e=>e.medias).filter(t=>t.id===e&&t.type!==`local`);if(i.length===0)return;let a=is(r),o=i.map(e=>({m:e,type:e.type,service:e.service,ref:e.ref}));for(let e of i)e.type=a.type,e.ref=a.ref,a.service?e.service=a.service:delete e.service;try{await this.#G(n),this.afficherToast(`Lien mis à jour ✓`)}catch(e){for(let e of o)e.m.type=e.type,e.m.ref=e.ref,e.service?e.m.service=e.service:delete e.m.service;this.afficherToast(e instanceof Error?e.message:`Lien refusé`)}}async#z(e,t){let n=this.bibliotheque,r=n?.techniques.find(t=>t.id===e);!n||!r||(t?r.couverture=t:delete r.couverture,await this.#G(n))}async definirCouvertureImage(e,t){if(this.#x(`modification`,`Saisis le PIN pour changer la vignette.`,()=>void this.definirCouvertureImage(e,t)))try{let n=await rs(t);await this.#z(e,{type:`image`,dataUrl:n}),this.afficherToast(`Vignette mise à jour ✓`)}catch{this.afficherToast(`Image illisible — choisis une autre photo`)}}async definirCouvertureMedia(e,t){this.#x(`modification`,`Saisis le PIN pour changer la vignette.`,()=>void this.definirCouvertureMedia(e,t))&&(await this.#z(e,{type:`media`,mediaId:t}),this.afficherToast(`Vignette mise à jour ✓`))}async retirerCouverture(e){this.#x(`modification`,`Saisis le PIN pour changer la vignette.`,()=>void this.retirerCouverture(e))&&(await this.#z(e,null),this.afficherToast(`Vignette retirée ✓`))}async retirerMedia(e,t){if(!this.#x(`destruction_ou_sensible`,`Saisis le PIN pour retirer ce média.`,()=>void this.retirerMedia(e,t)))return;let n=this.bibliotheque,r=n?.techniques.find(t=>t.id===e),i=n?.contributions.find(n=>n.techniqueId===e&&n.medias.some(e=>e.id===t));!n||!r||!i||(await this.stockage.snapshot(`avant-retrait-d-un-media`),i.medias=i.medias.filter(e=>e.id!==t),i.medias.length===0&&!(i.description??``).trim()&&i.pointsCles.length===0&&(n.contributions=n.contributions.filter(e=>e.id!==i.id)),r.mediaPrincipalId===t&&delete r.mediaPrincipalId,r.couverture?.type===`media`&&r.couverture.mediaId===t&&delete r.couverture,this.mediaAffiche===t&&(this.mediaAffiche=null),await this.#G(n),this.afficherToast(`Média retiré — point de restauration conservé dans les sauvegardes`))}demarrerEntrainement(e){this.menuComposition=null,this.#s({type:`entrainement`,compositionId:e,index:0})}estFavori(e){return this.bibliotheque?.favoris.includes(e)??!1}async basculerFavori(e){if(!this.#x(`modification`,`Saisis le PIN pour modifier tes favoris.`,()=>void this.basculerFavori(e)))return;let t=this.bibliotheque;if(!t||!t.techniques.some(t=>t.id===e))return;let n=t.favoris.includes(e);t.favoris=n?t.favoris.filter(t=>t!==e):[...t.favoris,e],await this.#G(t),this.afficherToast(n?`Retiré des favoris`:`Ajouté aux favoris`)}techniquesFavorites(){let e=this.bibliotheque;return e?e.favoris.map(t=>e.techniques.find(e=>e.id===t)).filter(e=>e!==void 0):[]}async demanderPartageTechnique(e){let t=this.bibliotheque,n=t?.techniques.find(t=>t.id===e);if(!t||!n)return;let r;try{({extrait:r}=Jn(t,e))}catch{this.partagerTechnique(e);return}let i=await this.stockage.listerVideos(),a=[...Ne(r)].filter(e=>i.has(e));if(a.length===0){this.partagerTechnique(e);return}let o=r.contributions.flatMap(e=>e.medias).filter(e=>e.type===`lien`||e.type===`plateforme`).length,s=await this.stockage.taillesVideos(),c=a.reduce((e,t)=>e+(s.get(t)??0),0);this.partagePreparation={techniqueId:e,nom:n.nom,avecVideos:!0,nbLiens:o,nbLocales:a.length,octetsLocaux:c}}async confirmerPartage(){let e=this.partagePreparation;e&&(this.partagePreparation=null,await this.partagerTechnique(e.techniqueId,e.avecVideos))}async partagerTechnique(e,t=!0){let n=this.bibliotheque,r=n?.techniques.find(t=>t.id===e);if(!n||!r)return;let i;try{({extrait:i}=Jn(n,e))}catch(e){this.afficherToast(`Partage impossible : ${e instanceof Error?e.message:`fiche illisible`}`);return}let a=Ne(i),o=await this.stockage.listerVideos(),s=t?[...a].filter(e=>o.has(e)):[],c=new Map;for(let e of s)c.set(e,await this.#W(e));let l=`${Xn(r.nom)}.movpack`,u;try{u=await Un(i,{id:`technique-${r.id}`,nom:r.nom,portee:`discipline`},c)}catch(e){this.afficherToast(`Partage impossible : ${e instanceof Error?e.message:`export échoué`}`);return}let d=new File([u],l,{type:`application/octet-stream`});await this.#V(d,r.nom,`Technique « ${r.nom} » — Movenso`)}async#B(e){let t=!1;try{let{Capacitor:n}=await $a(async()=>{let{Capacitor:e}=await import(`./dist-sZ8V2geg.js`);return{Capacitor:e}},[],import.meta.url);if(t=!!n?.isNativePlatform?.(),t)return await this.#U(e,`documents`,`Movenso/${e.name}`),`Documents/Movenso/${e.name}`}catch{if(t)return await this.#V(e,e.name,`Movenso — ${e.name}`),`le partage — choisis « Enregistrer dans Fichiers »`}return ns(e,e.name),`tes téléchargements`}async#V(e,t,n){try{let{Capacitor:r}=await $a(async()=>{let{Capacitor:e}=await import(`./dist-sZ8V2geg.js`);return{Capacitor:e}},[],import.meta.url);if(r?.isNativePlatform?.()){let{Filesystem:r,Directory:i}=await $a(async()=>{let{Filesystem:e,Directory:t}=await import(`./esm-CIu01MvU.js`);return{Filesystem:e,Directory:t}},__vite__mapDeps([3,1]),import.meta.url),{Share:a}=await $a(async()=>{let{Share:e}=await import(`./esm-B5umUG-z.js`);return{Share:e}},__vite__mapDeps([4,1]),import.meta.url);await this.#U(e,`cache`,e.name);let{uri:o}=await r.getUri({path:e.name,directory:i.Cache});await a.share({title:t,text:n,url:o}),this.afficherToast(`Partagé ✓`);return}}catch(e){if(e instanceof Error&&/cancel/i.test(e.message))return}let r=navigator;if(r.share&&r.canShare?.({files:[e]}))try{await r.share({files:[e],title:t,text:n}),this.afficherToast(`Partagé ✓`);return}catch(e){if(e instanceof DOMException&&e.name===`AbortError`)return}ns(e,e.name),this.afficherToast(`Fichier .movpack enregistré dans tes téléchargements — joins-le depuis WhatsApp, Drive ou un mail.`)}async#H(e){let t=new Uint8Array(await e.arrayBuffer()),n=``,r=32768;for(let e=0;e<t.length;e+=r)n+=String.fromCharCode(...t.subarray(e,e+r));return btoa(n)}async#U(e,t,n){let{Filesystem:r,Directory:i}=await $a(async()=>{let{Filesystem:e,Directory:t}=await import(`./esm-CIu01MvU.js`);return{Filesystem:e,Directory:t}},__vite__mapDeps([3,1]),import.meta.url),a=t===`documents`?i.Documents:i.Cache,o=3*1024*1024;if(e.size===0){await r.writeFile({path:n,data:``,directory:a,recursive:!0});return}let s=!0;for(let t=0;t<e.size;t+=o){let i=await this.#H(e.slice(t,t+o));s?(await r.writeFile({path:n,data:i,directory:a,recursive:!0}),s=!1):await r.appendFile({path:n,data:i,directory:a})}}async#W(e){let t=[];for await(let n of this.stockage.lireMediaParBlocs(e,1<<20))t.push(n);let n=t.reduce((e,t)=>e+t.length,0),r=new Uint8Array(n),i=0;for(let e of t)r.set(e,i),i+=e.length;return r}doublonsPotentiels(){let e=this.bibliotheque;return e?pi(e,e.doublonsIgnores??[]):[]}async rescannerDoublons(){let e=this.bibliotheque;!e||!(e.doublonsIgnores??[]).length||(delete e.doublonsIgnores,await this.#G(e),this.doublonOuvert=null,this.requestUpdate(),this.afficherToast(`Rescan effectué — les paires écartées reviennent à l'arbitrage.`))}async classerDoublon(e,t,n){let r=this.bibliotheque;r&&(r.doublonsIgnores=[...new Set([...r.doublonsIgnores??[],ui(e,t)])],await this.#G(r),this.fusionDoublon&&this.fusionDoublon.aId===e&&this.fusionDoublon.bId===t&&(this.fusionDoublon=null),this.afficherToast(n))}async resoudreDoublonGarder(e,t){let n=this.bibliotheque;!n||!n.techniques.some(t=>t.id===e)||await this.supprimerTechnique(t)}async fusionnerDoublonAvec(e,t,n){if(!this.#x(`destruction_ou_sensible`,`Saisis le PIN pour fusionner ces fiches.`,()=>void this.fusionnerDoublonAvec(e,t,n)))return;let r=this.bibliotheque;if(!r)return;await this.stockage.snapshot(`avant-fusion-doublon`);let i=e=>{let t=r.techniques.find(t=>t.id===e);return{technique:structuredClone(t),contributions:r.contributions.filter(t=>t.techniqueId===e).map(e=>structuredClone(e)),etaitFavori:r.favoris.includes(e)}},a=i(e),o=i(t),s;try{s=gi(r,e,t,n)}catch(e){this.afficherToast(`Fusion impossible : ${e instanceof Error?e.message:`état inattendu`}`);return}s.fusions=[...s.fusions??[],{fusionneeLe:new Date().toISOString(),fusionneeId:e,a,b:o}],this.fusionDoublon=null,await this.#G(s),this.afficherToast(`Fusionnées en une seule fiche ✓ — défusionnable depuis « Doublons »`)}async defusionner(e){if(!this.#x(`destruction_ou_sensible`,`Saisis le PIN pour défusionner ces fiches.`,()=>void this.defusionner(e)))return;let t=this.bibliotheque;if(!t)return;await this.stockage.snapshot(`avant-defusion`);let n;try{n=_i(t,e)}catch(e){this.afficherToast(`Défusion impossible : ${e instanceof Error?e.message:`état inattendu`}`);return}await this.#G(n),this.afficherToast(`Fiches défusionnées ✓ — les deux fiches d'origine sont rétablies`)}async creerAdaptationLocale(e){if(!this.#x(`modification`,`Saisis le PIN pour créer une adaptation locale.`,()=>void this.creerAdaptationLocale(e)))return;let t=this.bibliotheque,n=t?.contributions.find(t=>t.id===e);if(!t||!n)return;let r={id:z(),techniqueId:n.techniqueId,provenance:`personnel`,...n.description?{description:n.description}:{},pointsCles:[...n.pointsCles],...n.variantes?{variantes:n.variantes}:{},attribution:`Adaptation locale d'après ${Ir(n)}`,creeLe:new Date().toISOString(),medias:[]};t.contributions.push(r),await this.#G(t),this.voixOuverte=r.id,this.afficherToast(`Adaptation locale créée — modifiable librement ✓`)}ouvrirCapture(){this.capture={etape:`contenu`,note:``,demarreA:Date.now(),...this.ecran.type===`composition`?{compositionCible:this.ecran.compositionId}:{},...this.ecran.type===`discipline`?{disciplineChoisieId:this.ecran.disciplineId}:{}}}async terminerCaptureRepere(){let e=this.capture,t=e?.compositionCible,n=this.bibliotheque;if(!e||!t||!n||!this.#x(`modification`,`Saisis le PIN pour enregistrer ce repère.`,()=>void this.terminerCaptureRepere()))return;let r=n.compositions.find(e=>e.id===t);if(r&&!this.#q){this.#q=!0;try{let t=[],i=[];if(e.video){let r=Qe(e.video);if(r){this.afficherToast(r);return}let a=await this.#A(n,e.video,e.camera?`camera`:`fichier`);if(!a)return;a.ecrit&&i.push(a.media.id),t.push(a.media)}e.lien?.trim()&&t.push(is(e.lien.trim()));let a=e.note.trim();if(!a&&t.length===0)return;let o=z(),s=r.modifieLe;if(r.blocs.push({id:o,type:`repere`,...a?{texte:a}:{},medias:t}),r.modifieLe=new Date().toISOString(),!await this.#K(n,i,()=>{r.blocs=r.blocs.filter(e=>e.id!==o),s===void 0?delete r.modifieLe:r.modifieLe=s}))return;this.capture=null,this.afficherToast(`Repère ajouté à la composition ✓`)}finally{this.#q=!1}}}ouvrirRattachement(e){this.#x(`modification`,`Saisis le PIN pour reprendre cette capture.`,()=>void this.ouvrirRattachement(e))&&(this.capture={etape:`rattacher`,note:``,demarreA:Date.now(),rattacherSeul:e})}fermerCapture(){this.capture?.apercuUrl&&URL.revokeObjectURL(this.capture.apercuUrl),this.capture=null}reculerCapture(){let e=this.capture;if(!e)return;if(e.question){this.capture={...e,question:!1};return}if(e.rattacherSeul){this.fermerCapture();return}let t=e.video!==void 0||(e.lien??``).trim()!==``||e.note.trim()!==``;if(e.etape===`rattacher`){this.capture={...e,etape:`note`};return}if(e.etape===`apercu`||e.etape===`note`){this.capture=t?{...e,question:!0}:{...e,etape:`contenu`};return}if(e.saisieLien){this.capture={...e,saisieLien:!1};return}this.fermerCapture()}async terminerCapture(e,t,n){if(!this.#x(`modification`,`Saisis le PIN pour enregistrer cette capture.`,()=>void this.terminerCapture(e,t,n)))return;let r=this.bibliotheque,i=this.capture;if(!r||!i)return;let a=Math.max(1,Math.round((Date.now()-i.demarreA)/1e3));if(t!==void 0){let i=n?.disciplineId??(this.ecran.type===`fiche`?this.technique(this.ecran.techniqueId)?.disciplineId:void 0)??(r.disciplines.length===1?r.disciplines[0].id:void 0);if(!i&&n?.disciplineNom?.trim()&&(i=z(),r.disciplines.push({id:i,nom:n.disciplineNom.trim(),familles:[],niveaux:[]})),!i){this.afficherToast(`Choisis ou nomme une discipline pour cette technique`);return}e=z(),r.techniques.push({id:e,disciplineId:i,nom:t,niveauxIds:[],relations:[]})}if(i.rattacherSeul!==void 0){let t=r.contributions.find(e=>e.id===i.rattacherSeul);t&&e&&(t.techniqueId=e),await this.#G(r),this.capture=null,e&&(this.afficherToast(`Rattaché à ${this.technique(e)?.nom} ✓`),this.ouvrirFiche(e));return}if(this.#q)return;this.#q=!0;let o=[],s=[];try{if(i.video){let e=Qe(i.video);if(e){this.afficherToast(e);return}let t=await this.#A(r,i.video,i.camera?`camera`:`fichier`);if(!t)return;t.ecrit&&s.push(t.media.id),o.push(t.media)}i.lien?.trim()&&o.push(is(i.lien.trim()));let t=i.provenance??`personnel`,n={id:z(),techniqueId:e,provenance:t,...i.note.trim()?{description:i.note.trim()}:{},...t!==`personnel`&&i.attribution?.trim()?{attribution:i.attribution.trim()}:{},pointsCles:[],creeLe:new Date().toISOString(),medias:o};if(r.contributions.push(n),!await this.#K(r,s,()=>{r.contributions=r.contributions.filter(e=>e.id!==n.id)}))return}finally{this.#q=!1}this.capture=null,e?(this.afficherToast(`Capturé ✓ rattaché à ${this.technique(e)?.nom} — ${a} s, hors ligne`),this.ouvrirFiche(e)):(this.afficherToast(`Conservé — à rattacher, dans Plus › À traiter ✓ — ${a} s, hors ligne`),this.ouvrirPlusSection(`atraiter`))}async#G(e){await this.stockage.sauvegarder(e),this.bibliotheque={...e}}async#K(e,t,n){try{return await this.#G(e),!0}catch(e){n();for(let e of t)await this.stockage.supprimerVideo(e);return this.afficherToast(e instanceof Error?e.message:`Enregistrement refusé`),!1}}#q=!1;render(){if(this.erreurDemarrage)return L`<div class="ecran" style="padding:24px 18px"><div class="carte-atelier">
        <div class="encart-entete"><span class="titre-atelier">Movenso n'a pas pu démarrer</span></div>
        <p class="details" style="line-height:1.6">${this.erreurDemarrage}</p>
      </div></div>`;if(!this.bibliotheque)return R;let e=this.ecran.type===`fiche`?ei(this,this.ecran.techniqueId):this.ecran.type===`discipline`?Zr(this,this.ecran.disciplineId):this.ecran.type===`bibliotheques`?Jr(this):this.ecran.type===`plus`?this.ecran.section?La(this,this.ecran.section):Ba(this):this.ecran.type===`relations`?Ga(this):this.ecran.type===`favoris`?Xr(this):this.ecran.type===`compositions`?eo(this):this.ecran.type===`composition`?mo(this,this.ecran.compositionId):this.ecran.type===`entrainement`?_o(this,this.ecran.compositionId,this.ecran.index):Jr(this),t=this.capture!==null||this.importEnAttente!==null||this.rapportApresImport!==null||this.restaurationEnAttente!==null||this.demandePin!==null||this.ajoutMedia!==null||this.ajouter!==null||this.partagePreparation!==null||this.enregistrementMedia!==null||this.ecran.type===`entrainement`;return L`
      ${e}
      ${t?R:this.#J()}
      ${t?R:this.#ee()}
      ${t||this.ecran.type===`entrainement`?R:this.#C()}
      ${this.importEnAttente?this.#Y():R}
      ${this.rapportApresImport?this.#X():R}
      ${this.restaurationEnAttente?this.#Z():R}
      ${this.demandePin?this.#S():R}
      ${this.capture?Ro(this):R}
      ${this.ajoutMedia?Ko(this):R}
      ${this.partagePreparation?this.#Q():R}
      ${this.enregistrementMedia?this.#$():R}
      ${this.ajouter?Zo(this):R}
      ${this.creationCompo?ao(this):R}
      ${this.ajoutPas?co(this):R}
      ${this.editionPas?lo(this):R}
      ${this.menuComposition?ho(this):R}
      ${this.toast&&this.ecran.type!==`entrainement`?L`<div class="toast" role="status">${this.toast}</div>`:R}
    `}#J(){let e=e=>this.autoriser(`modification`,`Saisis le PIN pour ajouter ou capturer.`,()=>{this.ajouter=e,this.requestUpdate()});if(this.ecran.type===`discipline`){let t=this.ecran.disciplineId;return L`<button class="fab" @click=${()=>e({disciplineId:t})}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M12 5v14M5 12h14"/></svg>
        Ajouter
      </button>`}return this.ecran.type===`bibliotheques`&&this.bibliotheque?L`<button class="fab" @click=${()=>e({})}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M12 5v14M5 12h14"/></svg>
        Ajouter
      </button>`:this.ecran.type===`compositions`&&this.bibliotheque?L`<button class="fab" @click=${()=>this.ouvrirCreationCompo()}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M12 5v14M5 12h14"/></svg>
        Créer
      </button>`:R}#Y(){let e=this.importEnAttente,{rapport:t,manifeste:n,volume:r,medias:i}=e,a=i.length,o=r>=1e6?`${(r/1e6).toFixed(1)} Mo`:`${Math.max(1,Math.round(r/1e3))} Ko`,s=t.creees.length,c=t.rejointes.length>0||t.retirees.length>0,l=e.dejaInstalle,u=n?.nom??t.discipline;return L`
      <div class="voile" @click=${()=>this.annulerImport()}></div>
      <div class="feuille" role="dialog" aria-label="Proposition d'import">
        <div class="prise"></div>
        <h2>${l?L`Mettre à jour « ${u} » ?`:L`Installer « ${u} » ?`}</h2>
        <div class="geste manifeste-import">
          ${n?.auteur?L`${n.auteur} · `:R}${a?L`${a} vidéo${a>1?`s`:``} · `:R}${o}${n?.conditions?L`<br>Conditions : ${n.conditions}`:R}
        </div>
        ${l?L`<div class="geste avertissement-import" style="color:var(--attention,#b26b00)">
              ⚠ Ce pack est déjà installé. Le mettre à jour remplace le contenu du pack par cette version.
              Tes vidéos, notes et favoris sont conservés ; tes retouches au texte des fiches <b>du pack</b> seront remplacées.</div>`:R}
        ${e.avertissements.length?L`<div class="geste avertissement-import" style="color:var(--attention,#b26b00)">
              ⚠ ${e.avertissements.join(` · `)}</div>`:R}
        <ul class="points" style="margin:8px 0 0; list-style:none; padding:0">
          <li>${s?L`<b>${s}</b> technique${s>1?`s`:``} ser${s>1?`ont`:`a`} ajoutée${s>1?`s`:``}.`:`Rien de nouveau à ajouter.`}</li>
          <li>${l||c?`Le contenu du pack déjà installé est mis à jour.`:`Aucune technique existante ne sera modifiée.`}</li>
        </ul>
        ${t.suggestions.length?L`<p class="geste" style="padding:8px 0 0; line-height:1.5">
              <b>${t.suggestions.length}</b> technique${t.suggestions.length>1?`s semblent`:` semble`} déjà présente${t.suggestions.length>1?`s`:``} dans un autre pack.
              Elles resteront séparées et pourront être comparées plus tard dans Plus › Doublons potentiels.</p>`:R}
        <div class="actions">
          <button class="bouton" @click=${()=>this.annulerImport()}>Annuler</button>
          <button class="bouton principal" @click=${()=>void this.confirmerImport()}>${l?`Mettre à jour`:`Installer`}</button>
        </div>
      </div>
    `}#X(){let e=this.rapportApresImport,t=(e,t)=>e?L`<li><b>${e}</b> ${t}</li>`:R;return L`
      <div class="voile" @click=${()=>this.fermerRapportImport()}></div>
      <div class="feuille" role="dialog" aria-label="Rapport d'import">
        <div class="prise"></div>
        <h2>« ${e.discipline} » installé ✓</h2>
        <ul class="points" style="margin:4px 0 0; list-style:none; padding:0">
          ${t(e.creees,`technique(s) ajoutée(s)`)}
          ${t(e.videos,`vidéo(s) ajoutée(s)`)}
        </ul>
        ${e.suggestions.length?L`<p class="geste" style="padding:8px 0 0; line-height:1.5">
              <b>${e.suggestions.length}</b> technique${e.suggestions.length>1?`s`:``} à comparer plus tard dans Plus › Doublons potentiels.
            </p>`:R}
        <div class="actions">
          ${e.disciplineId?L`<button class="bouton" @click=${()=>{let t=e.disciplineId;this.fermerRapportImport(),this.ouvrirDiscipline(t)}}>
                Ouvrir la discipline</button>`:R}
          <button class="bouton principal" @click=${()=>this.fermerRapportImport()}>Fermer</button>
        </div>
      </div>
    `}#Z(){let e=this.restaurationEnAttente,t=e.bibliotheque;return L`
      <div class="voile" @click=${()=>this.annulerRestauration()}></div>
      <div class="feuille" role="dialog" aria-label="Restauration complète">
        <div class="prise"></div>
        <h2>Restaurer cette sauvegarde complète ?</h2>
        <div class="geste">
          ${e.manifeste.creeLe.slice(0,10)} ·
          ${t.disciplines.length} discipline${t.disciplines.length>1?`s`:``} (${t.disciplines.map(e=>e.nom).join(`, `)}) ·
          ${t.techniques.length} techniques · ${t.contributions.length} contenus ·
          ${t.compositions.length} composition${t.compositions.length>1?`s`:``} ·
          ${t.favoris.length} favori${t.favoris.length>1?`s`:``} ·
          ${e.medias.length} vidéo${e.medias.length>1?`s`:``}
        </div>
        ${e.avertissements.length?L`<div class="geste avertissement-import" style="color:var(--attention,#b26b00)">
              ⚠ ${e.avertissements.join(` · `)}</div>`:R}
        <p class="fil-vide" style="padding:6px 0 0">
          Cette installation est vierge : rien n'est remplacé. Rien n'est
          écrit avant ta confirmation.
        </p>
        <div class="actions">
          <button class="bouton" @click=${()=>this.annulerRestauration()}>Annuler</button>
          <button class="bouton principal" @click=${()=>void this.confirmerRestauration()}>Restaurer</button>
        </div>
      </div>
    `}#Q(){let e=this.partagePreparation,t=e=>e>=1e6?`${(e/1e6).toFixed(1)} Mo`:`${Math.max(1,Math.round(e/1e3))} Ko`;return L`
      <div class="voile" @click=${()=>this.partagePreparation=null}></div>
      <div class="feuille" role="dialog" aria-label="Partager la technique">
        <div class="prise"></div>
        <h2>Partager « ${e.nom} »</h2>
        <div class="geste">
          1 technique${e.nbLiens?` · ${e.nbLiens} vidéo${e.nbLiens>1?`s`:``} en lien`:``}
          · ${e.nbLocales} vidéo${e.nbLocales>1?`s`:``} locale${e.nbLocales>1?`s`:``}${e.avecVideos?` (~${t(e.octetsLocaux)})`:``}
        </div>
        <button class="interrupteur ${e.avecVideos?`actif`:``}" role="switch" aria-checked=${e.avecVideos} @click=${()=>{this.partagePreparation={...e,avecVideos:!e.avecVideos},this.requestUpdate()}}>
          <span class="interrupteur-texte">
            <span class="interrupteur-titre">Inclure les vidéos locales</span>
            <span class="interrupteur-aide">${e.avecVideos?`Fichier plus lourd (~${t(e.octetsLocaux)})`:`Fichier léger — les liens restent inclus`}</span>
          </span>
          <span class="interrupteur-piste" aria-hidden="true"><span class="interrupteur-bouton"></span></span>
        </button>
        <p class="fil-vide" style="padding:6px 0 0">Sans tes notes privées ni tes favoris.</p>
        <div class="actions">
          <button class="bouton" @click=${()=>this.partagePreparation=null}>Annuler</button>
          <button class="bouton principal" @click=${()=>void this.confirmerPartage()}>Partager</button>
        </div>
      </div>
    `}#$(){let e=this.enregistrementMedia,t=e.octets>=1e6?`${(e.octets/1e6).toFixed(1)} Mo`:`${Math.max(1,Math.round(e.octets/1e3))} Ko`,n=Math.round(e.fraction*100);return L`
      <div class="voile"></div>
      <div class="feuille feuille-progression" role="dialog" aria-label="Enregistrement en cours" aria-live="polite">
        <div class="prise"></div>
        <h2>${e.phase===`analyse`?`Analyse de la vidéo…`:`Enregistrement…`}</h2>
        <div class="geste">
          ${t}${e.phase===`ecriture`?L` · ${n} %${e.etaSec===null?R:L` · ~${e.etaSec} s restant`}`:``}
        </div>
        <div class="barre-progression">
          <div class="barre-progression-jauge ${e.phase===`analyse`?`indeterminee`:``}"
            style=${e.phase===`ecriture`?`width:${n}%`:``}></div>
        </div>
      </div>
    `}zoneCourante(){switch(this.ecran.type){case`plus`:return`plus`;case`relations`:return`relations`;case`favoris`:return`favoris`;case`compositions`:case`composition`:case`entrainement`:return`compositions`;default:return`bibliotheque`}}#ee(){let e=this.zoneCourante(),t=(t,n,r,i)=>L`
      <button class="nav-onglet ${e===t?`actif`:``}" @click=${i}
              aria-label=${n} aria-current=${e===t?`page`:R}>
        ${r}<span>${n}</span>
      </button>`;return L`<nav class="barre-nav">
      ${t(`bibliotheque`,`Bibliothèque`,L`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 5a2 2 0 0 1 2-2h13v18H6a2 2 0 0 1-2-2Z"/><path d="M4 17.5A2.5 2.5 0 0 1 6.5 15H19"/></svg>`,()=>this.ouvrirBibliotheque())}
      ${t(`favoris`,`Favoris`,L`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20s-7-4.35-9.3-8.5C1.2 8.7 2.6 5.5 5.7 5.5c1.9 0 3.1 1 4.3 2.5 1.2-1.5 2.4-2.5 4.3-2.5 3.1 0 4.5 3.2 3 6-2.3 4.15-9.3 8.5-9.3 8.5Z"/></svg>`,()=>this.ouvrirFavoris())}
      ${this.preferences.vueRelationBeta?t(`relations`,`Relations`,L`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="6" r="2.4"/><circle cx="5" cy="18" r="2.4"/><circle cx="19" cy="18" r="2.4"/><path d="M12 8.4 6.6 15.8M12 8.4l5.4 7.4M7.4 18h9.2"/></svg>`,()=>this.ouvrirRelationsVisuelle()):R}
      ${t(`compositions`,`Compositions`,L`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="5" rx="1.5"/><rect x="4" y="12" width="16" height="5" rx="1.5"/></svg>`,()=>this.ouvrirCompositions())}
      ${t(`plus`,`Plus`,L`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="5" cy="12" r="1.6"/><circle cx="12" cy="12" r="1.6"/><circle cx="19" cy="12" r="1.6"/></svg>`,()=>this.ouvrirPlus())}
    </nav>`}};function ns(e,t){let n=URL.createObjectURL(e),r=document.createElement(`a`);r.href=n,r.download=t,r.click(),setTimeout(()=>URL.revokeObjectURL(n),6e4)}async function rs(e){let t=URL.createObjectURL(e);try{let e=await new Promise((e,n)=>{let r=new Image;r.onload=()=>e(r),r.onerror=()=>n(Error(`image illisible`)),r.src=t}),n=Math.min(1,480/Math.max(e.naturalWidth,e.naturalHeight||1)),r=Math.max(1,Math.round(e.naturalWidth*n)),i=Math.max(1,Math.round(e.naturalHeight*n)),a=document.createElement(`canvas`);a.width=r,a.height=i;let o=a.getContext(`2d`);if(!o)throw Error(`canvas indisponible`);return o.drawImage(e,0,0,r,i),a.toDataURL(`image/jpeg`,.72)}finally{URL.revokeObjectURL(t)}}function is(e){let t=e.match(/(?:youtube\.com\/watch\?.*?v=|youtu\.be\/|youtube\.com\/shorts\/)([\w-]{6,})/);return t?.[1]?{id:z(),type:`plateforme`,service:`youtube`,ref:t[1]}:{id:z(),type:`lien`,ref:e}}customElements.define(`movenso-app`,ts);export{$a as t};