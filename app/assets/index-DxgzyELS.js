const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./esm-DB60KP7u.js","./dist-sZ8V2geg.js","./esm-CuZFasAi.js","./esm-BROC65WP.js","./esm-Bmskl0bn.js"])))=>i.map(i=>d[i]);
(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=globalThis,t=e.ShadowRoot&&(e.ShadyCSS===void 0||e.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,n=Symbol(),r=new WeakMap,i=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,n=this.t;if(t&&e===void 0){let t=n!==void 0&&n.length===1;t&&(e=r.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&r.set(n,e))}return e}toString(){return this.cssText}},a=e=>new i(typeof e==`string`?e:e+``,void 0,n),o=(n,r)=>{if(t)n.adoptedStyleSheets=r.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let t of r){let r=document.createElement(`style`),i=e.litNonce;i!==void 0&&r.setAttribute(`nonce`,i),r.textContent=t.cssText,n.appendChild(r)}},s=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return a(t)})(e):e,{is:c,defineProperty:l,getOwnPropertyDescriptor:u,getOwnPropertyNames:d,getOwnPropertySymbols:f,getPrototypeOf:p}=Object,m=globalThis,h=m.trustedTypes,g=h?h.emptyScript:``,_=m.reactiveElementPolyfillSupport,v=(e,t)=>e,y={toAttribute(e,t){switch(t){case Boolean:e=e?g:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},b=(e,t)=>!c(e,t),x={attribute:!0,type:String,converter:y,reflect:!1,useDefault:!1,hasChanged:b};Symbol.metadata??=Symbol(`metadata`),m.litPropertyMetadata??=new WeakMap;var S=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=x){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&l(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=u(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??x}static _$Ei(){if(this.hasOwnProperty(v(`elementProperties`)))return;let e=p(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(v(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v(`properties`))){let e=this.properties,t=[...d(e),...f(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(s(e))}else e!==void 0&&t.push(s(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return o(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?y:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?y:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??b)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};S.elementStyles=[],S.shadowRootOptions={mode:`open`},S[v(`elementProperties`)]=new Map,S[v(`finalized`)]=new Map,_?.({ReactiveElement:S}),(m.reactiveElementVersions??=[]).push(`2.1.2`);var C=globalThis,w=e=>e,T=C.trustedTypes,E=T?T.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,D=`$lit$`,O=`lit$${Math.random().toFixed(9).slice(2)}$`,ee=`?`+O,te=`<${ee}>`,k=document,A=()=>k.createComment(``),j=e=>e===null||typeof e!=`object`&&typeof e!=`function`,ne=Array.isArray,re=e=>ne(e)||typeof e?.[Symbol.iterator]==`function`,ie=`[ 	
\f\r]`,ae=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,oe=/-->/g,se=/>/g,M=RegExp(`>|${ie}(?:([^\\s"'>=/]+)(${ie}*=${ie}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),N=/'/g,ce=/"/g,le=/^(?:script|style|textarea|title)$/i,ue=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),P=ue(1),de=ue(2),fe=Symbol.for(`lit-noChange`),F=Symbol.for(`lit-nothing`),pe=new WeakMap,me=k.createTreeWalker(k,129);function he(e,t){if(!ne(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return E===void 0?t:E.createHTML(t)}var ge=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=ae;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===ae?c[1]===`!--`?o=oe:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=M):(le.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=M):o=se:o===M?c[0]===`>`?(o=i??ae,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?M:c[3]===`"`?ce:N):o===ce||o===N?o=M:o===oe||o===se?o=ae:(o=M,i=void 0);let d=o===M&&e[t+1].startsWith(`/>`)?` `:``;a+=o===ae?n+te:l>=0?(r.push(s),n.slice(0,l)+D+n.slice(l)+O+d):n+O+(l===-2?t:d)}return[he(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]},_e=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=ge(t,n);if(this.el=e.createElement(l,r),me.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=me.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(D)){let t=u[o++],n=i.getAttribute(e).split(O),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?Se:r[1]===`?`?Ce:r[1]===`@`?we:xe}),i.removeAttribute(e)}else e.startsWith(O)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(le.test(i.tagName)){let e=i.textContent.split(O),t=e.length-1;if(t>0){i.textContent=T?T.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],A()),me.nextNode(),c.push({type:2,index:++a});i.append(e[t],A())}}}else if(i.nodeType===8)if(i.data===ee)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(O,e+1))!==-1;)c.push({type:7,index:a}),e+=O.length-1}a++}}static createElement(e,t){let n=k.createElement(`template`);return n.innerHTML=e,n}};function ve(e,t,n=e,r){if(t===fe)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=j(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=ve(e,i._$AS(e,t.values),i,r)),t}var ye=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??k).importNode(t,!0);me.currentNode=r;let i=me.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new be(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new Te(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=me.nextNode(),a++)}return me.currentNode=k,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},be=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=F,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=ve(this,e,t),j(e)?e===F||e==null||e===``?(this._$AH!==F&&this._$AR(),this._$AH=F):e!==this._$AH&&e!==fe&&this._(e):e._$litType$===void 0?e.nodeType===void 0?re(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==F&&j(this._$AH)?this._$AA.nextSibling.data=e:this.T(k.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=_e.createElement(he(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new ye(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=pe.get(e.strings);return t===void 0&&pe.set(e.strings,t=new _e(e)),t}k(t){ne(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(A()),this.O(A()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=w(e).nextSibling;w(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},xe=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=F,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=F}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=ve(this,e,t,0),a=!j(e)||e!==this._$AH&&e!==fe,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=ve(this,r[n+o],t,o),s===fe&&(s=this._$AH[o]),a||=!j(s)||s!==this._$AH[o],s===F?e=F:e!==F&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===F?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},Se=class extends xe{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===F?void 0:e}},Ce=class extends xe{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==F)}},we=class extends xe{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=ve(this,e,t,0)??F)===fe)return;let n=this._$AH,r=e===F&&n!==F||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==F&&(n===F||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Te=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){ve(this,e)}},Ee={M:D,P:O,A:ee,C:1,L:ge,R:ye,D:re,V:ve,I:be,H:xe,N:Ce,U:we,B:Se,F:Te},De=C.litHtmlPolyfillSupport;De?.(_e,be),(C.litHtmlVersions??=[]).push(`3.3.3`);var Oe=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new be(t.insertBefore(A(),e),e,void 0,n??{})}return i._$AI(e),i},ke=globalThis,Ae=class extends S{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Oe(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return fe}};Ae._$litElement$=!0,Ae.finalized=!0,ke.litElementHydrateSupport?.({LitElement:Ae});var je=ke.litElementPolyfillSupport;je?.({LitElement:Ae}),(ke.litElementVersions??=[]).push(`4.2.2`);var Me=[`referentiel`,`enseignement`,`ressource`,`personnel`],Ne=[{id:`prepare`,libelle:`Prépare`,libelleInverse:`Préparée par`,role:`before`},{id:`enchaine`,libelle:`Enchaîne vers`,libelleInverse:`Enchaînée depuis`,role:`after`},{id:`contre`,libelle:`Contre`,libelleInverse:`Contrée par`,role:`opposition`},{id:`similaire`,libelle:`Similaire à`,symetrique:!0,role:`peer`}],Pe=[`local`,`lien`,`plateforme`],Fe=[`youtube`];function Ie(e){return e.origine?.pack??`local`}var Le=[`technique`,`etape`,`transition`,`consigne`,`objectif`,`duree`,`media`,`repere`,`pause`];function Re(){return{versionSchema:4,typesRelation:Ne.map(e=>({...e})),disciplines:[],techniques:[],contributions:[],compositions:[],favoris:[],doublonsIgnores:[]}}function ze(e){let t=new Map,n=new Map(e.techniques.map(e=>[e.id,e.nom])),r=(e,n)=>{let r=t.get(e.id);r?r.references.push(n):t.set(e.id,{media:e,references:[n]})};for(let t of e.contributions)for(let e of t.medias)r(e,{ou:`contribution`,conteneurId:t.id,techniqueId:t.techniqueId,nom:t.techniqueId?n.get(t.techniqueId)??`?`:`capture à rattacher`});for(let t of e.compositions)for(let e of t.blocs)for(let n of e.medias)r(n,{ou:`bloc`,conteneurId:t.id,techniqueId:null,nom:`composition « ${t.nom} »`});for(let n of e.techniques){if(!n.mediaPrincipalId)continue;let e=t.get(n.mediaPrincipalId);e&&e.references.push({ou:`media-principal`,conteneurId:n.id,techniqueId:n.id,nom:n.nom})}return t}function Be(e){let t=new Set;for(let[n,r]of ze(e))r.media.type===`local`&&t.add(n);for(let n of e.corbeille??[])for(let e of n.contributions)for(let n of e.medias)n.type===`local`&&t.add(n.id);return t}var Ve={"video/webm":`webm`,"video/mp4":`mp4`,"video/quicktime":`mov`,"video/x-matroska":`mkv`,"video/3gpp":`3gp`,"video/ogg":`ogv`,"video/x-msvideo":`avi`};function He(e,t){let n=Ve[e?.split(`;`)[0]?.trim().toLowerCase()??``];if(n)return n;let r=t?.match(/\.([a-z0-9]{1,5})$/i)?.[1];return r?r.toLowerCase():void 0}function Ue(e,t,n){if(n){for(let{media:r}of ze(e).values())if(r.type===`local`&&r.sha256===n&&r.taille===t)return r}}var We=`0123456789ABCDEFGHJKMNPQRSTVWXYZ`,Ge=10,Ke=16,qe=-1,Je=[];function Ye(e){let t=``;for(let n=Ge-1;n>=0;n--)t=We[e%32]+t,e=Math.floor(e/32);return t}function Xe(){let e=new Uint8Array(Ke);return globalThis.crypto.getRandomValues(e),Array.from(e,e=>e%32)}function Ze(e){let t=e.slice();for(let e=t.length-1;e>=0;e--){let n=t[e]??0;if(n<31)return t[e]=n+1,t;t[e]=0}return t}function Qe(e=Date.now()){let t;return e===qe?t=Ze(Je):(t=Xe(),qe=e),Je=t,Ye(e)+t.map(e=>We[e]).join(``)}var $e=/^[0-9A-HJKMNP-TV-Z]{26}$/;function et(e){return $e.test(e)}var tt=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),nt=(e,t)=>e>>>t|e<<32-t,rt=class{#e=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]);#t=new Uint8Array(64);#n=0;#r=0;#i=new Uint32Array(64);#a=!1;update(e){if(this.#a)throw Error(`Sha256 : digest() déjà appelé`);this.#r+=e.length;let t=0;if(this.#n>0){for(;t<e.length&&this.#n<64;)this.#t[this.#n++]=e[t++];this.#n===64&&(this.#o(this.#t,0),this.#n=0)}for(;t+64<=e.length;t+=64)this.#o(e,t);for(;t<e.length;)this.#t[this.#n++]=e[t++];return this}digestHex(){if(this.#a)throw Error(`Sha256 : digest() déjà appelé`);this.#a=!0;let e=this.#r*8,t=this.#n,n=new Uint8Array(t<56?64:128);n.set(this.#t.subarray(0,t)),n[t]=128;let r=new DataView(n.buffer);r.setUint32(n.length-8,Math.floor(e/4294967296)),r.setUint32(n.length-4,e>>>0);for(let e=0;e<n.length;e+=64)this.#o(n,e);let i=``;for(let e=0;e<8;e++)i+=this.#e[e].toString(16).padStart(8,`0`);return i}#o(e,t){let n=this.#i;for(let r=0;r<16;r++){let i=t+r*4;n[r]=(e[i]<<24|e[i+1]<<16|e[i+2]<<8|e[i+3])>>>0}for(let e=16;e<64;e++){let t=nt(n[e-15],7)^nt(n[e-15],18)^n[e-15]>>>3,r=nt(n[e-2],17)^nt(n[e-2],19)^n[e-2]>>>10;n[e]=n[e-16]+t+n[e-7]+r>>>0}let[r,i,a,o,s,c,l,u]=this.#e;for(let e=0;e<64;e++){let t=nt(s,6)^nt(s,11)^nt(s,25),d=s&c^~s&l,f=u+t+d+tt[e]+n[e]>>>0,p=(nt(r,2)^nt(r,13)^nt(r,22))+(r&i^r&a^i&a)>>>0;u=l,l=c,c=s,s=o+f>>>0,o=a,a=i,i=r,r=f+p>>>0}let d=this.#e;d[0]=d[0]+r>>>0,d[1]=d[1]+i>>>0,d[2]=d[2]+a>>>0,d[3]=d[3]+o>>>0,d[4]=d[4]+s>>>0,d[5]=d[5]+c>>>0,d[6]=d[6]+l>>>0,d[7]=d[7]+u>>>0}};function it(e){return new rt().update(e).digestHex()}var at=class extends Error{constructor(){super(`Ajout annulé`),this.name=`AnnulationIngestion`}};async function ot(e,t){if(typeof e.stream!=`function`){let t=await e.arrayBuffer(),n=await crypto.subtle.digest(`SHA-256`,t);return[...new Uint8Array(n)].map(e=>e.toString(16).padStart(2,`0`)).join(``)}let n=new rt,r=e.stream().getReader();for(;;){if(t?.())throw await r.cancel(),new at;let{done:e,value:i}=await r.read();if(e)break;i&&n.update(i)}return n.digestHex()}function st(e){return e.size===0?`Fichier vide — rien à enregistrer`:e.type&&!e.type.toLowerCase().startsWith(`video/`)?`Ce fichier n'est pas une vidéo — seules les vidéos s'ajoutent ici`:null}async function ct(e,t,n,r){let i=await ot(t,r),a=Ue(e,t.size,i);if(a)return{media:{...a},dejaPresent:!0};let o=Qe(),s=He(t.type,t.name);return{media:{id:o,type:`local`,ref:`videos/${o}`,sha256:i,taille:t.size,ajouteLe:new Date().toISOString(),origineMedia:n,...t.type?{mime:t.type}:{},...s?{extension:s}:{},...t.name?{nomOriginal:t.name}:{}},dejaPresent:!1}}function lt(e){return Math.max(16e6,Math.round(e*.1))}function ut(e,t){if(t===null)return{suffisant:!0,fiable:!1,requis:e,disponible:null};let n=Math.max(0,t.quota-t.usage);return{suffisant:e+lt(e)<=n,fiable:!0,requis:e,disponible:n}}function dt(e){return e>=1e9?`${(e/1e9).toFixed(1)} Go`:e>=1e6?`${(e/1e6).toFixed(1)} Mo`:`${Math.max(1,Math.round(e/1e3))} Ko`}var ft=new Set([`youtube.com`,`www.youtube.com`,`m.youtube.com`,`music.youtube.com`,`www.youtube-nocookie.com`,`youtu.be`]);function pt(e){return/^[A-Za-z0-9_-]{6,20}$/.test(e)}function mt(e){let t=null;return t=e.hostname===`youtu.be`?e.pathname.slice(1).split(`/`)[0]||null:e.pathname===`/watch`?e.searchParams.get(`v`):e.pathname.match(/^\/(?:shorts|embed|live|v)\/([^/]+)/)?.[1]??null,t&&pt(t)?t:null}function ht(e){let t=e.trim();if(!t)return{ok:!1,raison:`Lien vide.`};let n;try{n=new URL(t)}catch{return{ok:!1,raison:`Ce n'est pas une adresse valide (attendu : https://…).`}}if(n.protocol!==`https:`)return{ok:!1,raison:n.protocol===`http:`?`Seuls les liens https sont acceptés — ce site existe sans doute en https.`:`Protocole refusé (${n.protocol.replace(`:`,``)}) — seuls les liens https sont acceptés.`};if(ft.has(n.hostname.toLowerCase())){let e=mt(n);if(e)return{ok:!0,type:`plateforme`,service:`youtube`,ref:e,url:n.toString()}}return{ok:!0,type:`lien`,ref:n.toString(),url:n.toString()}}function gt(e){if(!e)return null;try{let t=new URL(e.trim());return t.protocol===`https:`?t.toString():null}catch{return null}}function _t(e){let t=gt(e);if(!t)return null;try{return new URL(t).hostname.replace(/^www\./,``)}catch{return null}}function I(e){return e.toLowerCase().normalize(`NFD`).replace(/[̀-ͯ]/g,``).replace(/[\s\-'’]/g,``)}function vt(e,t,n=20){let r=I(t);if(r===``)return[];let i=new Map;for(let t of e.contributions)t.provenance!==`personnel`||!t.techniqueId||!t.description||i.set(t.techniqueId,(i.get(t.techniqueId)??``)+` `+I(t.description));let a=new Map,o=[];for(let t of e.techniques){let e=I(t.nom),n=I(t.nomTraditionnel??``),s=null;e.startsWith(r)?s=0:e.includes(r)?s=1:n!==``&&n.includes(r)?s=2:i.get(t.id)?.includes(r)&&(s=3),s!==null&&(a.set(t.id,s),o.push(t))}return o.sort((e,t)=>a.get(e.id)-a.get(t.id)||e.nom.localeCompare(t.nom,`fr`)).slice(0,n)}var yt={1:e=>({...e,versionSchema:2,typesRelation:Ne.map(e=>({...e})),compositions:[]}),2:e=>({...e,versionSchema:3,favoris:[]}),3:e=>({...e,versionSchema:4,typesRelation:bt(e.typesRelation)})};function bt(e){if(!Array.isArray(e))return e;let t=new Map(Ne.map(e=>[e.id,e]));return e.map(e=>{if(!e||typeof e!=`object`||Array.isArray(e))return e;let n=e,r=t.get(n.id);return!r||n.role!==void 0?e:r.ordre===void 0?{...n,role:r.role}:{...n,role:r.role,ordre:r.ordre}})}var xt=class extends Error{constructor(e){super(e),this.name=`ErreurMigration`}};function St(e,t=4){if(typeof e!=`object`||!e)throw new xt(`Données illisibles : la bibliothèque n'est pas un objet`);let n=e,r=n.versionSchema;if(typeof r!=`number`||!Number.isInteger(r)||r<1)throw new xt(`Version de schéma absente ou invalide : ${String(r)}`);let i=r;if(i>t)throw new xt(`Bibliothèque en version ${i}, plus récente que l'application (${t}) — mettre à jour l'application plutôt que risquer une perte`);for(;i<t;){let e=yt[i];if(!e)throw new xt(`Aucune migration enregistrée depuis la version ${i}`);n=e(n);let t=n.versionSchema;if(typeof t!=`number`||t!==i+1)throw new xt(`La migration ${i} → ${i+1} n'a pas incrémenté la version`);i=t}return n}var Ct=class extends Error{constructor(e){super(e),this.name=`ErreurValidation`}};function L(e,t){if(!e)throw new Ct(t)}function wt(e,t){let n=new Set;for(let r of e)L(et(r),`${t} : id « ${r} » n'est pas un ULID valide`),L(!n.has(r),`${t} : id « ${r} » en double`),n.add(r)}function Tt(e){return e===``||e.startsWith(`/`)||e.includes(`\\`)||/^[a-zA-Z]:/.test(e)?!1:!e.split(`/`).some(e=>e===`..`||e===``)}function Et(e){let t=new Set;for(let n of e)L(n.id.trim()!==``,`Type de relation : id vide`),L(!t.has(n.id),`Type de relation « ${n.id} » en double`),t.add(n.id),L(n.libelle.trim()!==``,`Type de relation « ${n.id} » : libellé vide`),L(n.symetrique===!0||(n.libelleInverse??``).trim()!==``,`Type de relation « ${n.id} » : un type orienté déclare son libellé inverse (ou sa symétrie)`)}function Dt(e){L(e.nom.trim()!==``,`Discipline ${e.id} : nom vide`);let t=[...e.familles.map(e=>e.id),...e.niveaux.map(e=>e.id)],n=new Set;for(let r of t)L(r.trim()!==``,`Discipline « ${e.nom} » : id de taxonomie vide`),L(!n.has(r),`Discipline « ${e.nom} » : id de taxonomie « ${r} » en double`),n.add(r)}function Ot(e,t,n){L(e.nom.trim()!==``,`Technique ${e.id} : nom vide`);let r=t.get(e.disciplineId);L(r!==void 0,`Technique « ${e.nom} » : discipline ${e.disciplineId} inconnue`),e.familleId!==void 0&&L(r.familles.some(t=>t.id===e.familleId),`Technique « ${e.nom} » : famille « ${e.familleId} » absente de la discipline « ${r.nom} »`);for(let t of e.niveauxIds)L(r.niveaux.some(e=>e.id===t),`Technique « ${e.nom} » : niveau « ${t} » absent de la discipline « ${r.nom} »`);for(let t of e.relations)L(n.has(t.type),`Technique « ${e.nom} » : type de relation « ${t.type} » non déclaré`),L(et(t.cibleId),`Technique « ${e.nom} » : cible de relation « ${t.cibleId} » mal formée`);e.mediaPrincipalId!==void 0&&L(et(e.mediaPrincipalId),`Technique « ${e.nom} » : média principal « ${e.mediaPrincipalId} » mal formé`)}function kt(e,t){wt(e.map(e=>e.id),`${t}, médias`);for(let t of e)L(Pe.includes(t.type),`Média ${t.id} : type « ${t.type} » inconnu`),L(t.ref.trim()!==``,`Média ${t.id} : référence vide`),t.type===`local`&&L(Tt(t.ref),`Média ${t.id} : chemin local « ${t.ref} » non relatif ou dangereux`),t.type===`plateforme`&&L(t.service!==void 0&&Fe.includes(t.service),`Média ${t.id} : un média de plateforme déclare son service (${Fe.join(`, `)})`)}function At(e,t,n){L(Me.includes(e),`${n} : provenance « ${e} » inconnue`),(e===`referentiel`||e===`ressource`)&&L((t??``).trim()!==``,`${n} : une provenance « ${e} » exige une attribution (savoir sourcé)`)}function jt(e,t){At(e.provenance,e.attribution,`Contribution ${e.id}`),e.techniqueId!==null&&L(t.has(e.techniqueId),`Contribution ${e.id} : technique ${e.techniqueId} inconnue`),L(!Number.isNaN(Date.parse(e.creeLe)),`Contribution ${e.id} : date « ${e.creeLe} » invalide`),kt(e.medias,`Contribution ${e.id}`)}function Mt(e){L(e.nom.trim()!==``,`Composition ${e.id} : nom vide`),At(e.provenance,e.attribution,`Composition « ${e.nom} »`),L(!Number.isNaN(Date.parse(e.creeLe)),`Composition « ${e.nom} » : date « ${e.creeLe} » invalide`),wt(e.blocs.map(e=>e.id),`Composition « ${e.nom} », blocs`);for(let t of e.blocs)L(Le.includes(t.type),`Composition « ${e.nom} » : bloc de type « ${t.type} » inconnu`),t.type===`technique`?L(t.techniqueId!==void 0&&et(t.techniqueId),`Composition « ${e.nom} » : un bloc technique référence une identité`):L((t.texte??``).trim()!==``||t.medias.length>0||t.dureeSec!==void 0,`Composition « ${e.nom} » : un bloc « ${t.type} » porte un texte, un média ou une durée`),t.dureeSec!==void 0&&L(Number.isFinite(t.dureeSec)&&t.dureeSec>=0,`Composition « ${e.nom} » : durée « ${t.dureeSec} » invalide`),kt(t.medias,`Composition « ${e.nom} », bloc ${t.id}`);e.presentation&&kt(e.presentation.medias,`Composition « ${e.nom} », présentation`)}function Nt(e){L(e.versionSchema===4,`Version de schéma ${e.versionSchema} inattendue (courante : 4) — passer par les migrations avant validation`),Et(e.typesRelation),wt(e.disciplines.map(e=>e.id),`Disciplines`),wt(e.techniques.map(e=>e.id),`Techniques`),wt(e.contributions.map(e=>e.id),`Contributions`),wt(e.compositions.map(e=>e.id),`Compositions`);let t=new Map(e.disciplines.map(e=>[e.id,e])),n=new Set(e.techniques.map(e=>e.id)),r=new Set(e.typesRelation.map(e=>e.id));e.disciplines.forEach(Dt),e.techniques.forEach(e=>Ot(e,t,r)),e.contributions.forEach(e=>jt(e,n)),e.compositions.forEach(Mt),wt(e.favoris,`Favoris`);for(let t of e.favoris)L(et(t),`Favori « ${t} » mal formé`)}var Pt=class extends Error{constructor(e){super(e),this.name=`ErreurRapprochement`}};function Ft(e,t,n){if(Math.abs(e.length-t.length)>n)return n+1;let r=Array.from({length:t.length+1},(e,t)=>t);for(let n=1;n<=e.length;n++){let i=[n];for(let a=1;a<=t.length;a++)i[a]=Math.min((r[a]??0)+1,(i[a-1]??0)+1,(r[a-1]??0)+(e[n-1]===t[a-1]?0:1));r=i}return r[t.length]??n+1}function It(e,t,n){let r=I(n);if(r.length<3)return{exacte:null,proches:[]};let i=e.techniques.filter(e=>e.disciplineId===t),a=i.filter(e=>I(e.nom)===r);return{exacte:a.length===1?a[0]:null,proches:[...a.length>1?a:[],...i.filter(e=>{let t=I(e.nom);return t!==r&&(Ft(t,r,2)<=2||t.includes(r)||r.includes(t))})].slice(0,4)}}function Lt(e,t,n){let r=new Map;for(let i of t){let t=e.find(e=>I(e.nom)===I(i.nom));if(t)r.set(i.id,t.id);else{let t=e.some(e=>e.id===i.id)?`${n}-${i.id}`:i.id;e.push({...i,id:t}),r.set(i.id,t)}}return r}function Rt(e,t,n){if(t.disciplines.length===0)throw new Pt(`Un pack importable contient au moins une discipline`);let r=structuredClone(e),i=n.packId,a=new Map((n.regles??[]).map(e=>[I(e.de),I(e.vers)])),o={discipline:t.disciplines.map(e=>e.nom).join(` + `),rejointes:[],creees:[],retirees:[],suggestions:[],conflitsLiaisons:0};for(let e of t.typesRelation??[]){let t=r.typesRelation.find(t=>t.id===e.id);t?(t.role===void 0&&e.role!==void 0&&(t.role=e.role),t.ordre===void 0&&e.ordre!==void 0&&(t.ordre=e.ordre)):r.typesRelation.push({...structuredClone(e),origine:{pack:i,element:e.id}})}if(t.typesAlerte?.length){r.typesAlerte??=[];for(let e of t.typesAlerte)r.typesAlerte.some(t=>t.id===e.id)||r.typesAlerte.push(structuredClone(e))}let s=new Map,c=new Set,l=new Map(r.techniques.filter(e=>e.origine?.pack===i).map(e=>[e.origine.element,e]));for(let e of t.disciplines){let n=r.disciplines.find(t=>I(t.nom)===I(e.nom))??r.disciplines.find(t=>t.id===e.id);n||(n=structuredClone(e),r.disciplines.push(n));let u=n,d=Lt(u.familles,e.familles,i),f=Lt(u.niveaux,e.niveaux,i),p=()=>r.techniques.filter(e=>e.disciplineId===u.id),m=new Map;for(let e of p()){let t=I(e.nom);m.set(t,[...m.get(t)??[],e])}for(let n of t.techniques.filter(t=>t.disciplineId===e.id)){let e=n.origine?.element??n.id;c.add(e);let t=l.get(e);if(t){s.set(n.id,t.id),zt(t,n,d,f),t.nom=n.nom,o.rejointes.push(n.nom);continue}let h=r.techniques.find(e=>e.id===n.id);if(h){s.set(n.id,h.id),zt(h,n,d,f),o.rejointes.push(n.nom);continue}let g=a.has(I(n.nom)),_=a.get(I(n.nom))??I(n.nom),v=(m.get(_)??[]).filter(e=>e.origine?.pack!==i);if(g){if(v.length===0)throw new Pt(`Règle « ${n.nom} » → « ${_} » : aucune identité cible dans « ${u.nom} »`);if(v.length===1){let e=v[0];s.set(n.id,e.id),zt(e,n,d,f),o.rejointes.push(n.nom);continue}o.suggestions.push({nom:n.nom,candidats:v.map(e=>e.nom),motif:`ambigu`})}else if(v.length>1)o.suggestions.push({nom:n.nom,candidats:v.map(e=>e.nom),motif:`ambigu`});else if(v.length===0){let e=p().filter(e=>e.origine?.pack!==i&&Ft(I(e.nom),I(n.nom),2)<=2).map(e=>e.nom);e.length&&o.suggestions.push({nom:n.nom,candidats:e,motif:`quasi-correspondance`})}let y={...structuredClone(n),disciplineId:u.id,niveauxIds:n.niveauxIds.map(e=>f.get(e)??e),relations:[],origine:{pack:i,element:e}};n.familleId?y.familleId=d.get(n.familleId)??n.familleId:delete y.familleId,r.techniques.push(y),m.set(I(y.nom),[...m.get(I(y.nom))??[],y]),s.set(n.id,y.id),o.creees.push(n.nom)}}for(let[e,t]of l)c.has(e)||(r.contributions=r.contributions.filter(t=>!(t.origine?.pack===i&&t.origine.element===e)),r.contributions.some(e=>e.techniqueId===t.id)||(r.techniques=r.techniques.filter(e=>e.id!==t.id),o.retirees.push(t.nom)));for(let e of t.contributions){let t=e.origine?.element??e.id,n=e.techniqueId?s.get(e.techniqueId)??null:null,a=r.contributions.find(n=>n.origine?.pack===i&&n.origine.element===t||n.id===e.id);a?Object.assign(a,structuredClone(e),{id:a.id,techniqueId:n,origine:{pack:i,element:t}}):r.contributions.push({...structuredClone(e),techniqueId:n,origine:{pack:i,element:t}})}let u=new Map(r.compositions.filter(e=>e.origine?.pack===i).map(e=>[e.origine.element,e])),d=new Set;for(let e of t.compositions??[]){let t=e.origine?.element??e.id;d.add(t);let n=e.blocs.map(e=>e.type===`technique`&&e.techniqueId?{...structuredClone(e),techniqueId:s.get(e.techniqueId)??e.techniqueId}:structuredClone(e)),a=u.get(t)??r.compositions.find(t=>t.id===e.id);a?Object.assign(a,structuredClone(e),{id:a.id,blocs:n,origine:{pack:i,element:t}}):r.compositions.push({...structuredClone(e),blocs:n,origine:{pack:i,element:t}})}for(let[e,t]of u)d.has(e)||(r.compositions=r.compositions.filter(e=>e.id!==t.id));let f=e=>`${e.pack}|${e.sourceId}|${e.cibleId}|${e.type}`,p=new Map((r.conflitsLiaisons??[]).map(e=>[f(e),e]));for(let e of t.techniques){let t=s.get(e.id),n=r.techniques.find(e=>e.id===t);for(let t of e.relations){let e={type:t.type,cibleId:s.get(t.cibleId)??t.cibleId};if(t.note!==void 0&&(e.note=t.note),t.priorite!==void 0&&(e.priorite=t.priorite),e.cibleId===n.id)continue;let r=n.relations.find(t=>t.type===e.type&&t.cibleId===e.cibleId);if(!r){n.relations.push(e);continue}let a=f({pack:i,sourceId:n.id,cibleId:e.cibleId,type:e.type});(e.note!==void 0||e.priorite!==void 0)&&(e.note!==r.note||e.priorite!==r.priorite)?p.set(a,{pack:i,sourceId:n.id,cibleId:e.cibleId,type:e.type,...e.note===void 0?{}:{note:e.note},...e.priorite===void 0?{}:{priorite:e.priorite},detecteLe:new Date().toISOString()}):p.delete(a)}}return p.size>0?r.conflitsLiaisons=[...p.values()]:delete r.conflitsLiaisons,o.conflitsLiaisons=p.size,Nt(r),{bibliotheque:r,rapport:o}}function zt(e,t,n,r){!e.nomTraditionnel&&t.nomTraditionnel&&(e.nomTraditionnel=t.nomTraditionnel),!e.mediaPrincipalId&&t.mediaPrincipalId&&(e.mediaPrincipalId=t.mediaPrincipalId),!e.familleId&&t.familleId&&(e.familleId=n.get(t.familleId)??t.familleId);for(let n of t.niveauxIds){let t=r.get(n)??n;e.niveauxIds.includes(t)||e.niveauxIds.push(t)}}function Bt(e,t,n){let r=e=>e.pack===t.pack&&e.sourceId===t.sourceId&&e.cibleId===t.cibleId&&e.type===t.type,i=(e.conflitsLiaisons??[]).filter(e=>!r(e));if(i.length>0?e.conflitsLiaisons=i:delete e.conflitsLiaisons,n===`local`)return;let a=e.techniques.find(e=>e.id===t.sourceId)?.relations.find(e=>e.type===t.type&&e.cibleId===t.cibleId);if(!a)return;if(n===`pack`){t.note===void 0?delete a.note:a.note=t.note,t.priorite===void 0?delete a.priorite:a.priorite=t.priorite;return}let o=[a.note,t.note].filter(e=>e!==void 0&&e.trim()!==``),s=[...new Set(o)].join(`

`);s===``?delete a.note:a.note=s,a.priorite===void 0&&t.priorite!==void 0&&(a.priorite=t.priorite)}var R=Uint8Array,Vt=Uint16Array,Ht=Int32Array,Ut=new R([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Wt=new R([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Gt=new R([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Kt=function(e,t){for(var n=new Vt(31),r=0;r<31;++r)n[r]=t+=1<<e[r-1];for(var i=new Ht(n[30]),r=1;r<30;++r)for(var a=n[r];a<n[r+1];++a)i[a]=a-n[r]<<5|r;return{b:n,r:i}},qt=Kt(Ut,2),Jt=qt.b,Yt=qt.r;Jt[28]=258,Yt[258]=28;for(var Xt=Kt(Wt,0),Zt=Xt.b,Qt=Xt.r,$t=new Vt(32768),z=0;z<32768;++z){var en=(z&43690)>>1|(z&21845)<<1;en=(en&52428)>>2|(en&13107)<<2,en=(en&61680)>>4|(en&3855)<<4,$t[z]=((en&65280)>>8|(en&255)<<8)>>1}for(var tn=(function(e,t,n){for(var r=e.length,i=0,a=new Vt(t);i<r;++i)e[i]&&++a[e[i]-1];var o=new Vt(t);for(i=1;i<t;++i)o[i]=o[i-1]+a[i-1]<<1;var s;if(n){s=new Vt(1<<t);var c=15-t;for(i=0;i<r;++i)if(e[i])for(var l=i<<4|e[i],u=t-e[i],d=o[e[i]-1]++<<u,f=d|(1<<u)-1;d<=f;++d)s[$t[d]>>c]=l}else for(s=new Vt(r),i=0;i<r;++i)e[i]&&(s[i]=$t[o[e[i]-1]++]>>15-e[i]);return s}),nn=new R(288),z=0;z<144;++z)nn[z]=8;for(var z=144;z<256;++z)nn[z]=9;for(var z=256;z<280;++z)nn[z]=7;for(var z=280;z<288;++z)nn[z]=8;for(var rn=new R(32),z=0;z<32;++z)rn[z]=5;var an=tn(nn,9,0),on=tn(nn,9,1),sn=tn(rn,5,0),cn=tn(rn,5,1),ln=function(e){for(var t=e[0],n=1;n<e.length;++n)e[n]>t&&(t=e[n]);return t},un=function(e,t,n){var r=t/8|0;return(e[r]|e[r+1]<<8)>>(t&7)&n},dn=function(e,t){var n=t/8|0;return(e[n]|e[n+1]<<8|e[n+2]<<16)>>(t&7)},fn=function(e){return(e+7)/8|0},pn=function(e,t,n){return(t==null||t<0)&&(t=0),(n==null||n>e.length)&&(n=e.length),new R(e.subarray(t,n))},mn=[`unexpected EOF`,`invalid block type`,`invalid length/literal`,`invalid distance`,`stream finished`,`no stream handler`,,`no callback`,`invalid UTF-8 data`,`extra field too long`,`date not in range 1980-2099`,`filename too long`,`stream finishing`,`invalid zip data`],B=function(e,t,n){var r=Error(t||mn[e]);if(r.code=e,Error.captureStackTrace&&Error.captureStackTrace(r,B),!n)throw r;return r},hn=function(e,t,n,r){var i=e.length,a=r?r.length:0;if(!i||t.f&&!t.l)return n||new R(0);var o=!n,s=o||t.i!=2,c=t.i;o&&(n=new R(i*3));var l=function(e){var t=n.length;if(e>t){var r=new R(Math.max(t*2,e));r.set(n),n=r}},u=t.f||0,d=t.p||0,f=t.b||0,p=t.l,m=t.d,h=t.m,g=t.n,_=i*8;do{if(!p){u=un(e,d,1);var v=un(e,d+1,3);if(d+=3,!v){var y=fn(d)+4,b=e[y-4]|e[y-3]<<8,x=y+b;if(x>i){c&&B(0);break}s&&l(f+b),n.set(e.subarray(y,x),f),t.b=f+=b,t.p=d=x*8,t.f=u;continue}else if(v==1)p=on,m=cn,h=9,g=5;else if(v==2){var S=un(e,d,31)+257,C=un(e,d+10,15)+4,w=S+un(e,d+5,31)+1;d+=14;for(var T=new R(w),E=new R(19),D=0;D<C;++D)E[Gt[D]]=un(e,d+D*3,7);d+=C*3;for(var O=ln(E),ee=(1<<O)-1,te=tn(E,O,1),D=0;D<w;){var k=te[un(e,d,ee)];d+=k&15;var y=k>>4;if(y<16)T[D++]=y;else{var A=0,j=0;for(y==16?(j=3+un(e,d,3),d+=2,A=T[D-1]):y==17?(j=3+un(e,d,7),d+=3):y==18&&(j=11+un(e,d,127),d+=7);j--;)T[D++]=A}}var ne=T.subarray(0,S),re=T.subarray(S);h=ln(ne),g=ln(re),p=tn(ne,h,1),m=tn(re,g,1)}else B(1);if(d>_){c&&B(0);break}}s&&l(f+131072);for(var ie=(1<<h)-1,ae=(1<<g)-1,oe=d;;oe=d){var A=p[dn(e,d)&ie],se=A>>4;if(d+=A&15,d>_){c&&B(0);break}if(A||B(2),se<256)n[f++]=se;else if(se==256){oe=d,p=null;break}else{var M=se-254;if(se>264){var D=se-257,N=Ut[D];M=un(e,d,(1<<N)-1)+Jt[D],d+=N}var ce=m[dn(e,d)&ae],le=ce>>4;ce||B(3),d+=ce&15;var re=Zt[le];if(le>3){var N=Wt[le];re+=dn(e,d)&(1<<N)-1,d+=N}if(d>_){c&&B(0);break}s&&l(f+131072);var ue=f+M;if(f<re){var P=a-re,de=Math.min(re,ue);for(P+f<0&&B(3);f<de;++f)n[f]=r[P+f]}for(;f<ue;++f)n[f]=n[f-re]}}t.l=p,t.p=oe,t.b=f,t.f=u,p&&(u=1,t.m=h,t.d=m,t.n=g)}while(!u);return f!=n.length&&o?pn(n,0,f):n.subarray(0,f)},gn=function(e,t,n){n<<=t&7;var r=t/8|0;e[r]|=n,e[r+1]|=n>>8},_n=function(e,t,n){n<<=t&7;var r=t/8|0;e[r]|=n,e[r+1]|=n>>8,e[r+2]|=n>>16},vn=function(e,t){for(var n=[],r=0;r<e.length;++r)e[r]&&n.push({s:r,f:e[r]});var i=n.length,a=n.slice();if(!i)return{t:Tn,l:0};if(i==1){var o=new R(n[0].s+1);return o[n[0].s]=1,{t:o,l:1}}n.sort(function(e,t){return e.f-t.f}),n.push({s:-1,f:25001});var s=n[0],c=n[1],l=0,u=1,d=2;for(n[0]={s:-1,f:s.f+c.f,l:s,r:c};u!=i-1;)s=n[n[l].f<n[d].f?l++:d++],c=n[l!=u&&n[l].f<n[d].f?l++:d++],n[u++]={s:-1,f:s.f+c.f,l:s,r:c};for(var f=a[0].s,r=1;r<i;++r)a[r].s>f&&(f=a[r].s);var p=new Vt(f+1),m=yn(n[u-1],p,0);if(m>t){var r=0,h=0,g=m-t,_=1<<g;for(a.sort(function(e,t){return p[t.s]-p[e.s]||e.f-t.f});r<i;++r){var v=a[r].s;if(p[v]>t)h+=_-(1<<m-p[v]),p[v]=t;else break}for(h>>=g;h>0;){var y=a[r].s;p[y]<t?h-=1<<t-p[y]++-1:++r}for(;r>=0&&h;--r){var b=a[r].s;p[b]==t&&(--p[b],++h)}m=t}return{t:new R(p),l:m}},yn=function(e,t,n){return e.s==-1?Math.max(yn(e.l,t,n+1),yn(e.r,t,n+1)):t[e.s]=n},bn=function(e){for(var t=e.length;t&&!e[--t];);for(var n=new Vt(++t),r=0,i=e[0],a=1,o=function(e){n[r++]=e},s=1;s<=t;++s)if(e[s]==i&&s!=t)++a;else{if(!i&&a>2){for(;a>138;a-=138)o(32754);a>2&&(o(a>10?a-11<<5|28690:a-3<<5|12305),a=0)}else if(a>3){for(o(i),--a;a>6;a-=6)o(8304);a>2&&(o(a-3<<5|8208),a=0)}for(;a--;)o(i);a=1,i=e[s]}return{c:n.subarray(0,r),n:t}},xn=function(e,t){for(var n=0,r=0;r<t.length;++r)n+=e[r]*t[r];return n},Sn=function(e,t,n){var r=n.length,i=fn(t+2);e[i]=r&255,e[i+1]=r>>8,e[i+2]=e[i]^255,e[i+3]=e[i+1]^255;for(var a=0;a<r;++a)e[i+a+4]=n[a];return(i+4+r)*8},Cn=function(e,t,n,r,i,a,o,s,c,l,u){gn(t,u++,n),++i[256];for(var d=vn(i,15),f=d.t,p=d.l,m=vn(a,15),h=m.t,g=m.l,_=bn(f),v=_.c,y=_.n,b=bn(h),x=b.c,S=b.n,C=new Vt(19),w=0;w<v.length;++w)++C[v[w]&31];for(var w=0;w<x.length;++w)++C[x[w]&31];for(var T=vn(C,7),E=T.t,D=T.l,O=19;O>4&&!E[Gt[O-1]];--O);var ee=l+5<<3,te=xn(i,nn)+xn(a,rn)+o,k=xn(i,f)+xn(a,h)+o+14+3*O+xn(C,E)+2*C[16]+3*C[17]+7*C[18];if(c>=0&&ee<=te&&ee<=k)return Sn(t,u,e.subarray(c,c+l));var A,j,ne,re;if(gn(t,u,1+(k<te)),u+=2,k<te){A=tn(f,p,0),j=f,ne=tn(h,g,0),re=h;var ie=tn(E,D,0);gn(t,u,y-257),gn(t,u+5,S-1),gn(t,u+10,O-4),u+=14;for(var w=0;w<O;++w)gn(t,u+3*w,E[Gt[w]]);u+=3*O;for(var ae=[v,x],oe=0;oe<2;++oe)for(var se=ae[oe],w=0;w<se.length;++w){var M=se[w]&31;gn(t,u,ie[M]),u+=E[M],M>15&&(gn(t,u,se[w]>>5&127),u+=se[w]>>12)}}else A=an,j=nn,ne=sn,re=rn;for(var w=0;w<s;++w){var N=r[w];if(N>255){var M=N>>18&31;_n(t,u,A[M+257]),u+=j[M+257],M>7&&(gn(t,u,N>>23&31),u+=Ut[M]);var ce=N&31;_n(t,u,ne[ce]),u+=re[ce],ce>3&&(_n(t,u,N>>5&8191),u+=Wt[ce])}else _n(t,u,A[N]),u+=j[N]}return _n(t,u,A[256]),u+j[256]},wn=new Ht([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),Tn=new R(0),En=function(e,t,n,r,i,a){var o=a.z||e.length,s=new R(r+o+5*(1+Math.ceil(o/7e3))+i),c=s.subarray(r,s.length-i),l=a.l,u=(a.r||0)&7;if(t){u&&(c[0]=a.r>>3);for(var d=wn[t-1],f=d>>13,p=d&8191,m=(1<<n)-1,h=a.p||new Vt(32768),g=a.h||new Vt(m+1),_=Math.ceil(n/3),v=2*_,y=function(t){return(e[t]^e[t+1]<<_^e[t+2]<<v)&m},b=new Ht(25e3),x=new Vt(288),S=new Vt(32),C=0,w=0,T=a.i||0,E=0,D=a.w||0,O=0;T+2<o;++T){var ee=y(T),te=T&32767,k=g[ee];if(h[te]=k,g[ee]=te,D<=T){var A=o-T;if((C>7e3||E>24576)&&(A>423||!l)){u=Cn(e,c,0,b,x,S,w,E,O,T-O,u),E=C=w=0,O=T;for(var j=0;j<286;++j)x[j]=0;for(var j=0;j<30;++j)S[j]=0}var ne=2,re=0,ie=p,ae=te-k&32767;if(A>2&&ee==y(T-ae))for(var oe=Math.min(f,A)-1,se=Math.min(32767,T),M=Math.min(258,A);ae<=se&&--ie&&te!=k;){if(e[T+ne]==e[T+ne-ae]){for(var N=0;N<M&&e[T+N]==e[T+N-ae];++N);if(N>ne){if(ne=N,re=ae,N>oe)break;for(var ce=Math.min(ae,N-2),le=0,j=0;j<ce;++j){var ue=T-ae+j&32767,P=ue-h[ue]&32767;P>le&&(le=P,k=ue)}}}te=k,k=h[te],ae+=te-k&32767}if(re){b[E++]=268435456|Yt[ne]<<18|Qt[re];var de=Yt[ne]&31,fe=Qt[re]&31;w+=Ut[de]+Wt[fe],++x[257+de],++S[fe],D=T+ne,++C}else b[E++]=e[T],++x[e[T]]}}for(T=Math.max(T,D);T<o;++T)b[E++]=e[T],++x[e[T]];u=Cn(e,c,l,b,x,S,w,E,O,T-O,u),l||(a.r=u&7|c[u/8|0]<<3,u-=7,a.h=g,a.p=h,a.i=T,a.w=D)}else{for(var T=a.w||0;T<o+l;T+=65535){var F=T+65535;F>=o&&(c[u/8|0]=l,F=o),u=Sn(c,u+1,e.subarray(T,F))}a.i=o}return pn(s,0,r+fn(u)+i)},Dn=(function(){for(var e=new Int32Array(256),t=0;t<256;++t){for(var n=t,r=9;--r;)n=(n&1&&-306674912)^n>>>1;e[t]=n}return e})(),On=function(){var e=-1;return{p:function(t){for(var n=e,r=0;r<t.length;++r)n=Dn[n&255^t[r]]^n>>>8;e=n},d:function(){return~e}}},kn=function(e,t,n,r,i){if(!i&&(i={l:1},t.dictionary)){var a=t.dictionary.subarray(-32768),o=new R(a.length+e.length);o.set(a),o.set(e,a.length),e=o,i.w=a.length}return En(e,t.level==null?6:t.level,t.mem==null?i.l?Math.ceil(Math.max(8,Math.min(13,Math.log(e.length)))*1.5):20:12+t.mem,n,r,i)},An=function(e,t){var n={};for(var r in e)n[r]=e[r];for(var r in t)n[r]=t[r];return n},jn=function(e,t){return e[t]|e[t+1]<<8},Mn=function(e,t){return(e[t]|e[t+1]<<8|e[t+2]<<16|e[t+3]<<24)>>>0},Nn=function(e,t){return Mn(e,t)+Mn(e,t+4)*4294967296},V=function(e,t,n){for(;n;++t)e[t]=n,n>>>=8},Pn=function(){function e(e,t){if(typeof e==`function`&&(t=e,e={}),this.ondata=t,this.o=e||{},this.s={l:0,i:32768,w:32768,z:32768},this.b=new R(98304),this.o.dictionary){var n=this.o.dictionary.subarray(-32768);this.b.set(n,32768-n.length),this.s.i=32768-n.length}}return e.prototype.p=function(e,t){this.ondata(kn(e,this.o,0,0,this.s),t)},e.prototype.push=function(e,t){this.ondata||B(5),this.s.l&&B(4);var n=e.length+this.s.z;if(n>this.b.length){if(n>2*this.b.length-32768){var r=new R(n&-32768);r.set(this.b.subarray(0,this.s.z)),this.b=r}var i=this.b.length-this.s.z;this.b.set(e.subarray(0,i),this.s.z),this.s.z=this.b.length,this.p(this.b,!1),this.b.set(this.b.subarray(-32768)),this.b.set(e.subarray(i),32768),this.s.z=e.length-i+32768,this.s.i=32766,this.s.w=32768}else this.b.set(e,this.s.z),this.s.z+=e.length;this.s.l=t&1,(this.s.z>this.s.w+8191||t)&&(this.p(this.b,t||!1),this.s.w=this.s.i,this.s.i-=2),t&&(this.s=this.o={},this.b=Tn)},e.prototype.flush=function(e){if(this.ondata||B(5),this.s.l&&B(4),this.p(this.b,!1),this.s.w=this.s.i,this.s.i-=2,e){var t=new R(6);t[0]=this.s.r>>3;var n=Sn(t,this.s.r,Tn);this.s.r=0,this.ondata(t.subarray(0,n>>3),!1)}},e}();function Fn(e,t){return kn(e,t||{},0,0)}var In=function(){function e(e,t){typeof e==`function`&&(t=e,e={}),this.ondata=t;var n=e&&e.dictionary&&e.dictionary.subarray(-32768);this.s={i:0,b:n?n.length:0},this.o=new R(32768),this.p=new R(0),n&&this.o.set(n)}return e.prototype.e=function(e){if(this.ondata||B(5),this.d&&B(4),!this.p.length)this.p=e;else if(e.length){var t=new R(this.p.length+e.length);t.set(this.p),t.set(e,this.p.length),this.p=t}},e.prototype.c=function(e){this.s.i=+(this.d=e||!1);var t=this.s.b,n=hn(this.p,this.s,this.o);this.ondata(pn(n,t,this.s.b),this.d),this.o=pn(n,this.s.b-32768),this.s.b=this.o.length,this.p=pn(this.p,this.s.p/8|0),this.s.p&=7},e.prototype.push=function(e,t){this.e(e),this.c(t)},e}(),Ln=function(e,t,n,r){for(var i in e){var a=e[i],o=t+i,s=r;Array.isArray(a)&&(s=An(r,a[1]),a=a[0]),ArrayBuffer.isView(a)?n[o]=[a,s]:(n[o+=`/`]=[new R(0),s],Ln(a,o,n,r))}},Rn=typeof TextEncoder<`u`&&new TextEncoder,zn=typeof TextDecoder<`u`&&new TextDecoder;try{zn.decode(Tn,{stream:!0})}catch{}var Bn=function(e){for(var t=``,n=0;;){var r=e[n++],i=(r>127)+(r>223)+(r>239);if(n+i>e.length)return{s:t,r:pn(e,n-1)};i?i==3?(r=((r&15)<<18|(e[n++]&63)<<12|(e[n++]&63)<<6|e[n++]&63)-65536,t+=String.fromCharCode(55296|r>>10,56320|r&1023)):i&1?t+=String.fromCharCode((r&31)<<6|e[n++]&63):t+=String.fromCharCode((r&15)<<12|(e[n++]&63)<<6|e[n++]&63):t+=String.fromCharCode(r)}};function Vn(e,t){if(t){for(var n=new R(e.length),r=0;r<e.length;++r)n[r]=e.charCodeAt(r);return n}if(Rn)return Rn.encode(e);for(var i=e.length,a=new R(e.length+(e.length>>1)),o=0,s=function(e){a[o++]=e},r=0;r<i;++r){if(o+5>a.length){var c=new R(o+8+(i-r<<1));c.set(a),a=c}var l=e.charCodeAt(r);l<128||t?s(l):l<2048?(s(192|l>>6),s(128|l&63)):l>55295&&l<57344?(l=65536+(l&1047552)|e.charCodeAt(++r)&1023,s(240|l>>18),s(128|l>>12&63),s(128|l>>6&63),s(128|l&63)):(s(224|l>>12),s(128|l>>6&63),s(128|l&63))}return pn(a,0,o)}function Hn(e,t){if(t){for(var n=``,r=0;r<e.length;r+=16384)n+=String.fromCharCode.apply(null,e.subarray(r,r+16384));return n}else if(zn)return zn.decode(e);else{var i=Bn(e),a=i.s,n=i.r;return n.length&&B(8),a}}var Un=function(e){return e==1?3:e<6?2:+(e==9)},Wn=function(e,t,n,r,i,a,o){var s=i==4294967295,c=a==4294967295,l=o==4294967295,u=t+n,d=s+c+l;if(r&&d){for(;t+4<u;t+=4+jn(e,t+2))if(jn(e,t)==1)return[s?Nn(e,t+4+8*c):i,c?Nn(e,t+4):a,l?Nn(e,t+4+8*(c+s)):o,1];r<2&&B(13)}return[i,a,o,0]},Gn=function(e){var t=0;if(e)for(var n in e){var r=e[n].length;r>65535&&B(9),t+=r+4}return t},Kn=function(e,t,n,r,i,a,o,s){var c=r.length,l=n.extra,u=s&&s.length,d=Gn(l);V(e,t,o==null?67324752:33639248),t+=4,o!=null&&(e[t++]=20,e[t++]=n.os),e[t]=20,t+=2,e[t++]=n.flag<<1|(a<0&&8),e[t++]=i&&8,e[t++]=n.compression&255,e[t++]=n.compression>>8;var f=new Date(n.mtime==null?Date.now():n.mtime),p=f.getFullYear()-1980;if((p<0||p>119)&&B(10),V(e,t,p<<25|f.getMonth()+1<<21|f.getDate()<<16|f.getHours()<<11|f.getMinutes()<<5|f.getSeconds()>>1),t+=4,a!=-1&&(V(e,t,n.crc),V(e,t+4,a<0?-a-2:a),V(e,t+8,n.size)),V(e,t+12,c),V(e,t+14,d),t+=16,o!=null&&(V(e,t,u),V(e,t+6,n.attrs),V(e,t+10,o),t+=14),e.set(r,t),t+=c,d)for(var m in l){var h=l[m],g=h.length;V(e,t,+m),V(e,t+2,g),e.set(h,t+4),t+=4+g}return u&&(e.set(s,t),t+=u),t},qn=function(e,t,n,r,i){V(e,t,101010256),V(e,t+8,n),V(e,t+10,n),V(e,t+12,r),V(e,t+16,i)},Jn=function(){function e(e){this.filename=e,this.c=On(),this.size=0,this.compression=0}return e.prototype.process=function(e,t){this.ondata(null,e,t)},e.prototype.push=function(e,t){this.ondata||B(5),this.c.p(e),this.size+=e.length,t&&(this.crc=this.c.d()),this.process(e,t||!1)},e}(),Yn=function(){function e(e,t){var n=this;t||={},Jn.call(this,e),this.d=new Pn(t,function(e,t){n.ondata(null,e,t)}),this.compression=8,this.flag=Un(t.level)}return e.prototype.process=function(e,t){try{this.d.push(e,t)}catch(e){this.ondata(e,null,t)}},e.prototype.push=function(e,t){Jn.prototype.push.call(this,e,t)},e}(),Xn=function(){function e(e){this.ondata=e,this.u=[],this.d=1}return e.prototype.add=function(e){var t=this;if(this.ondata||B(5),this.d&2)this.ondata(B(4+(this.d&1)*8,0,1),null,!1);else{var n=Vn(e.filename),r=n.length,i=e.comment,a=i&&Vn(i),o=r!=e.filename.length||a&&i.length!=a.length,s=r+Gn(e.extra)+30;r>65535&&this.ondata(B(11,0,1),null,!1);var c=new R(s);Kn(c,0,e,n,o,-1);var l=[c],u=function(){for(var e=0,n=l;e<n.length;e++){var r=n[e];t.ondata(null,r,!1)}l=[]},d=this.d;this.d=0;var f=this.u.length,p=An(e,{f:n,u:o,o:a,t:function(){e.terminate&&e.terminate()},r:function(){if(u(),d){var e=t.u[f+1];e?e.r():t.d=1}d=1}}),m=0;e.ondata=function(n,r,i){if(n)t.ondata(n,r,i),t.terminate();else if(m+=r.length,l.push(r),i){var a=new R(16);V(a,0,134695760),V(a,4,e.crc),V(a,8,m),V(a,12,e.size),l.push(a),p.c=m,p.b=s+m+16,p.crc=e.crc,p.size=e.size,d&&p.r(),d=1}else d&&u()},this.u.push(p)}},e.prototype.end=function(){var e=this;if(this.d&2){this.ondata(B(4+(this.d&1)*8,0,1),null,!0);return}this.d?this.e():this.u.push({r:function(){e.d&1&&(e.u.splice(-1,1),e.e())},t:function(){}}),this.d=3},e.prototype.e=function(){for(var e=0,t=0,n=0,r=0,i=this.u;r<i.length;r++){var a=i[r];n+=46+a.f.length+Gn(a.extra)+(a.o?a.o.length:0)}for(var o=new R(n+22),s=0,c=this.u;s<c.length;s++){var a=c[s];Kn(o,e,a,a.f,a.u,-a.c-2,t,a.o),e+=46+a.f.length+Gn(a.extra)+(a.o?a.o.length:0),t+=a.b}qn(o,e,this.u.length,n,t),this.ondata(null,o,!0),this.d=2},e.prototype.terminate=function(){for(var e=0,t=this.u;e<t.length;e++)t[e].t();this.d=2},e}();function Zn(e,t){t||={};var n={},r=[];Ln(e,``,n,t);var i=0,a=0;for(var o in n){var s=n[o],c=s[0],l=s[1],u=l.level==0?0:8,d=Vn(o),f=d.length,p=l.comment,m=p&&Vn(p),h=m&&m.length,g=Gn(l.extra);f>65535&&B(11);var _=u?Fn(c,l):c,v=_.length,y=On();y.p(c),r.push(An(l,{size:c.length,crc:y.d(),c:_,f:d,m,u:f!=o.length||m&&p.length!=h,o:i,compression:u})),i+=30+f+g+v,a+=76+2*(f+g)+(h||0)+v}for(var b=new R(a+22),x=i,S=a-i,C=0;C<r.length;++C){var d=r[C];Kn(b,d.o,d,d.f,d.u,d.c.length);var w=30+d.f.length+Gn(d.extra);b.set(d.c,d.o+w),Kn(b,i,d,d.f,d.u,d.c.length,d.o,d.m),i+=16+w+(d.m?d.m.length:0)}return qn(b,i,r.length,S,x),b}var Qn=function(){function e(){}return e.prototype.push=function(e,t){this.ondata(null,e,t)},e.compression=0,e}(),$n=function(){function e(){var e=this;this.i=new In(function(t,n){e.ondata(null,t,n)})}return e.prototype.push=function(e,t){try{this.i.push(e,t)}catch(e){this.ondata(e,null,t)}},e.compression=8,e}(),er=function(){function e(e){this.onfile=e,this.k=[],this.o={0:Qn},this.p=Tn}return e.prototype.push=function(e,t){var n=this;if(this.onfile||B(5),this.p||B(4),this.c>0){var r=Math.min(this.c,e.length),i=e.subarray(0,r);if(this.c-=r,this.d?this.d.push(i,!this.c):this.k[0].push(i),e=e.subarray(r),e.length)return this.push(e,t)}else{var a=0,o=0,s=void 0,c=void 0;this.p.length?e.length?(c=new R(this.p.length+e.length),c.set(this.p),c.set(e,this.p.length)):c=this.p:c=e;for(var l=c.length,u=this.c,d=u&&this.d,f=function(){var e=Mn(c,o);if(e==67324752){a=1,s=o,p.d=null,p.c=0;var t=jn(c,o+6),r=jn(c,o+8),i=t&2048,d=t&8,f=jn(c,o+26),m=jn(c,o+28);if(l>o+30+f+m){var h=[];p.k.unshift(h),a=2;var g=Mn(c,o+18),_=Mn(c,o+22),v=Hn(c.subarray(o+30,o+=30+f),!i),y=Wn(c,o,m,2,g,_,0),b=y[0],x=y[1],S=y[3];d&&(b=-1-S),o+=m,p.c=b;var C,w={name:v,compression:r,start:function(){if(w.ondata||B(5),!b)w.ondata(null,Tn,!0);else{var e=n.o[r];e||w.ondata(B(14,`unknown compression type `+r,1),null,!1),C=b<0?new e(v):new e(v,b,x),C.ondata=function(e,t,n){w.ondata(e,t,n)};for(var t=0,i=h;t<i.length;t++){var a=i[t];C.push(a,!1)}n.k[0]==h&&n.c?n.d=C:C.push(Tn,!0)}},terminate:function(){C&&C.terminate&&C.terminate()}};b>=0&&(w.size=b,w.originalSize=x),p.onfile(w)}return`break`}else if(u){if(e==134695760)return s=o+=12+(u==-2&&8),a=3,p.c=0,`break`;if(e==33639248)return s=o-=4,a=3,p.c=0,`break`}},p=this;o<l-4&&f()!==`break`;++o);if(this.p=Tn,u<0){var m=a?c.subarray(0,s-12-(u==-2&&8)-(Mn(c,s-16)==134695760&&4)):c.subarray(0,o);d?d.push(m,!!a):this.k[+(a==2)].push(m)}if(a&2)return this.push(c.subarray(o),t);this.p=c.subarray(o)}t&&(this.c&&B(13),this.p=null)},e.prototype.register=function(e){this.o[e.compression]=e},e}(),H=class extends Error{constructor(e){super(e),this.name=`ErreurMovpack`}};function tr(e){return e.length>3&&e[0]===80&&e[1]===75}function nr(e){return(e.startsWith(`medias/`)||e.startsWith(`videos/`))&&e.length>7}function rr(e){let t=e.slice(e.indexOf(`/`)+1),n=t.indexOf(`.`);return n===-1?t:t.slice(0,n)}function ir(e,t){let n=e.get(t)?.media.extension;return n?`medias/${t}.${n}`:`medias/${t}`}function ar(e,t,n,r,i,a,o){return{format:`movpack`,version:4,id:t.id,nom:t.nom,portee:t.portee,...t.auteur?{auteur:t.auteur}:{},...t.conditions?{conditions:t.conditions}:{},creeLe:o,versionSchema:e.versionSchema,empreinte:i,videos:n,versionEditoriale:t.versionEditoriale??1,algorithme:`SHA-256`,inclusions:{medias:a,contenuPersonnel:t.portee===`complet`},fichiers:r}}async function or(e,t,n){Nt(e);let r=new TextEncoder().encode(JSON.stringify(e)),i=it(r),a=ze(e),o=[{chemin:`bibliotheque.json`,taille:r.length,sha256:i}];for(let[e,t]of n)o.push({chemin:ir(a,e),taille:t.length,sha256:it(t)});let s=ar(e,t,[...n.keys()],o,i,n.size>0,new Date().toISOString()),c={"manifeste.json":new TextEncoder().encode(JSON.stringify(s,null,2)),"bibliotheque.json":r};for(let[e,t]of n)c[ir(a,e)]=[t,{level:0}];return Zn(c,{level:6})}async function sr(e,t,n,r,i,a){Nt(e);let o=ze(e),s=new TextEncoder().encode(JSON.stringify(e)),c=[{chemin:`bibliotheque.json`,taille:s.length,sha256:it(s)}],l=[],u=null,d=new Xn((e,t)=>{e?u=e:t&&t.length&&l.push(t)}),f=async()=>{if(u)throw new H(`Compression du conteneur échouée : ${u.message}`);let e=l;l=[];for(let t of e)await i.ecrire(t)},p=()=>{if(a.estAnnule?.())throw new H(`Export annulé`)},m=new Yn(`bibliotheque.json`,{level:6});d.add(m),m.push(s,!0),await f();for(let e of n){p();let t=ir(o,e),i=new Jn(t);d.add(i);let s=new rt,l=0,u=null;for await(let t of r(e))u&&(i.push(u,!1),s.update(u),l+=u.length,await f(),p()),u=t;u?(i.push(u,!0),s.update(u),l+=u.length):i.push(new Uint8Array,!0),await f(),c.push({chemin:t,taille:l,sha256:s.digestHex()}),a.surProgression?.(c.length-1,n.length)}let h=ar(e,t,n,c,c[0].sha256,n.length>0,a.creeLe),g=new Yn(`manifeste.json`,{level:6});return d.add(g),g.push(new TextEncoder().encode(JSON.stringify(h,null,2)),!0),await f(),d.end(),await f(),h}var cr={octetsPetitFichier:64e6,entreesMax:4096,octetsTotal:8e9},lr=new Set([`webm`,`mp4`,`mov`,`mkv`,`3gp`,`ogv`,`avi`]);function ur(e){return e.length>=2&&e[0]===77&&e[1]===90?`exécutable Windows (MZ)`:e.length>=4&&e[0]===127&&e[1]===69&&e[2]===76&&e[3]===70?`exécutable ELF`:e.length>=2&&e[0]===35&&e[1]===33?`script exécutable (#!)`:null}function dr(e){return!e||e.length>512||/[\u0000-\u001f\\]/.test(e)||e.startsWith(`/`)||/^[a-z]:/i.test(e)?!1:e.split(`/`).every(e=>e.length>0&&e!==`.`&&e!==`..`)}function fr(e){if(e.length===1)return e[0];let t=0;for(let n of e)t+=n.length;let n=new Uint8Array(t),r=0;for(let t of e)n.set(t,r),r+=t.length;return n}async function pr(e,t,n={}){let r={...cr,...n.limites},i=0,a=0,o=null,s=null,c=new Map,l=new Set,u=[],d=null,f=new er;f.register($n),f.onfile=e=>{u.push({t:`debut`,nom:e.name}),e.ondata=(t,n,r)=>{t?d=t:u.push({t:`donnee`,nom:e.name,bloc:n,final:r})},e.start()};let p=null,m=null,h=async()=>{for(;u.length;){let e=u.shift();if(e.t===`debut`){if(++i>r.entreesMax)throw new H(`Archive refusée : plus de ${r.entreesMax} entrées`);if(!dr(e.nom))throw new H(`Archive refusée : chemin dangereux (${e.nom})`);if(l.has(e.nom))throw new H(`Archive refusée : chemin en double (${e.nom})`);if(l.add(e.nom),nr(e.nom)){let n=e.nom.slice(e.nom.indexOf(`/`)+1),r=n.match(/\.([a-z0-9]{1,5})$/i)?.[1]?.toLowerCase();if(r!==void 0&&!lr.has(r))throw new H(`Archive refusée : type de média inattendu (${e.nom})`);p={chemin:e.nom,id:rr(e.nom),nomPhysique:n,hacheur:new rt,taille:0},await t.ouvrir(n)}else m={nom:e.nom,garder:e.nom===`manifeste.json`||e.nom===`bibliotheque.json`,morceaux:[],taille:0}}else if(p&&e.nom===p.chemin){if(e.bloc.length){if(p.taille===0){let t=ur(e.bloc);if(t)throw new H(`Archive refusée : ${p.chemin} est un ${t}, pas une vidéo`)}if(a+=e.bloc.length,a>r.octetsTotal)throw new H(`Archive refusée : volume décompressé au-delà de ${Math.round(r.octetsTotal/1e6)} Mo`);p.hacheur.update(e.bloc),p.taille+=e.bloc.length,await t.ecrire(e.bloc)}e.final&&(await t.fermer(),c.set(p.chemin,{id:p.id,nomPhysique:p.nomPhysique,taille:p.taille,sha256:p.hacheur.digestHex()}),p=null)}else if(m&&e.nom===m.nom){if(e.bloc.length){if(a+=e.bloc.length,m.taille+=e.bloc.length,a>r.octetsTotal)throw new H(`Archive refusée : volume décompressé au-delà de ${Math.round(r.octetsTotal/1e6)} Mo`);if(m.taille>r.octetsPetitFichier)throw new H(`Archive refusée : ${m.nom} dépasse ${Math.round(r.octetsPetitFichier/1e6)} Mo`);m.garder&&m.morceaux.push(e.bloc.slice())}if(e.final){if(m.garder){let e=fr(m.morceaux);m.nom===`manifeste.json`?o=e:s=e}m=null}}}},g=()=>new H(`Fichier illisible : pas une archive .movpack valide`);try{let t=e.getReader();for(;;){if(n.estAnnule?.())throw new H(`Import annulé`);let{done:e,value:r}=await t.read();try{f.push(r??new Uint8Array,e)}catch{throw g()}if(d)throw g();if(await h(),e)break}let r=o,i=s;if(!r||!i)throw new H(`Archive incomplète : manifeste.json et bibliotheque.json attendus`);let a=JSON.parse(new TextDecoder().decode(r));if(a.format!==`movpack`)throw new H(`Manifeste inconnu : pas un .movpack`);if(a.version>4)throw new H(`Conteneur .movpack v${a.version}, plus récent que l'application (v4) — mettre à jour l'application`);let u=[],p;if(a.fichiers&&a.fichiers.length){let e=new Set([`manifeste.json`]),t=!1;p=[];for(let n of a.fichiers)if(e.add(n.chemin),n.chemin===`bibliotheque.json`){if(i.length!==n.taille)throw new H(`Taille inattendue : bibliotheque.json (${i.length} octets, ${n.taille} attendus)`);if(it(i)!==n.sha256)throw new H(`Intégrité en échec : bibliotheque.json ne correspond pas à son empreinte`);t=!0}else{let e=c.get(n.chemin);if(!e)throw new H(`Fichier manquant : ${n.chemin} est déclaré mais absent de l'archive`);if(e.taille!==n.taille)throw new H(`Taille inattendue : ${n.chemin} (${e.taille} octets, ${n.taille} attendus)`);if(e.sha256!==n.sha256)throw new H(`Intégrité en échec : ${n.chemin} ne correspond pas à son empreinte`);p.push(e)}if(!t)throw new H(`Manifeste incomplet : bibliotheque.json absent de l'inventaire d'intégrité`);for(let t of l)e.has(t)||u.push(`Fichier inattendu ignoré : ${t}`)}else{if(it(i)!==a.empreinte)throw new H(`Intégrité en échec : le contenu ne correspond pas à l'empreinte du manifeste`);p=[...c.values()]}let m=St(JSON.parse(new TextDecoder().decode(i)));return Nt(m),{manifeste:a,bibliotheque:m,medias:p,avertissements:u}}catch(e){throw await t.abandonner(),e instanceof H?e:g()}}function mr(e,t,n=new Set([`local`]),r,i={}){let a=e.disciplines.find(e=>e.id===t);if(!a)throw new H(`Discipline introuvable`);let o=e=>!r||r.has(e),s=e.contributions.filter(e=>e.provenance!==`personnel`&&e.techniqueId!==null&&o(e.techniqueId)&&n.has(Ie(e))),c=new Set(s.map(e=>e.techniqueId)),l=e.techniques.filter(e=>e.disciplineId===t&&o(e.id)&&(n.has(Ie(e))||c.has(e.id))),u=new Set(l.map(e=>e.id)),d=[],f=l.map(e=>{let t=structuredClone(e);return t.relations=e.relations.filter(t=>u.has(t.cibleId)?!0:(d.push({techniqueId:e.id,techniqueNom:e.nom,type:t.type,cibleId:t.cibleId}),!1)),t}),p={versionSchema:e.versionSchema,typesRelation:structuredClone(e.typesRelation),...e.typesAlerte?{typesAlerte:structuredClone(e.typesAlerte)}:{},disciplines:[structuredClone(a)],techniques:f,contributions:structuredClone(s.filter(e=>u.has(e.techniqueId))),compositions:structuredClone(e.compositions.filter(e=>{let t=e.blocs.filter(e=>e.type===`technique`&&e.techniqueId),r=t.length>0&&t.every(e=>u.has(e.techniqueId));return e.provenance===`personnel`?(i.compositionsPersonnelles??!1)&&r:r||n.has(Ie(e))})),favoris:[]};return Nt(p),{extrait:p,relationsExclues:d}}function hr(e,t){let n=e.techniques.find(e=>e.id===t);if(!n)throw new H(`Technique introuvable`);let r=e.disciplines.find(e=>e.id===n.disciplineId);if(!r)throw new H(`Discipline introuvable`);let i=e.contributions.filter(e=>e.techniqueId===n.id&&e.provenance!==`personnel`),a=[],o=structuredClone(n);o.relations=n.relations.filter(e=>e.cibleId===n.id?!0:(a.push({techniqueId:n.id,techniqueNom:n.nom,type:e.type,cibleId:e.cibleId}),!1));let s={versionSchema:e.versionSchema,typesRelation:structuredClone(e.typesRelation),...e.typesAlerte?{typesAlerte:structuredClone(e.typesAlerte)}:{},disciplines:[structuredClone(r)],techniques:[o],contributions:structuredClone(i),compositions:[],favoris:[]};return Nt(s),{extrait:s,relationsExclues:a}}function gr(e,t){let n=e.compositions.find(e=>e.id===t);if(!n)throw new H(`Composition introuvable`);let r=new Set(n.blocs.filter(e=>e.type===`technique`&&e.techniqueId).map(e=>e.techniqueId)),i=e.techniques.filter(e=>r.has(e.id)),a=new Set(i.map(e=>e.disciplineId)),o={versionSchema:e.versionSchema,typesRelation:structuredClone(e.typesRelation),disciplines:structuredClone(e.disciplines.filter(e=>a.has(e.id))),techniques:structuredClone(i),contributions:[],compositions:[structuredClone(n)],favoris:[]};return Nt(o),o}function _r(e){return`pack-${I(e)}`}function vr(e){return`pack-${e}`}var yr=`bibliotheque.json`,br=`bibliotheque.json.tmp`,xr=`preferences.json`,Sr=`videos`,Cr=`staging`,wr=`import`,Tr=`sauvegardes`,Er=10;function Dr(e,t){return t?`${e}.${t}`:e}function Or(e){let t=e.indexOf(`.`);return t===-1?e:e.slice(0,t)}function kr(){return{version:1,demarrage:{mode:`bibliotheque`}}}function Ar(e){if(typeof e!=`object`||!e)return kr();let t=e;return t.version!==1||!t.demarrage?.mode?kr():t.demarrage.mode===`accueil`?{...t,demarrage:{mode:`bibliotheque`}}:t}async function U(){return navigator.storage.getDirectory()}async function jr(e){try{return await(await(await(await U()).getFileHandle(e)).getFile()).text()}catch{return null}}async function Mr(e,t){let n=await(await(await U()).getFileHandle(e,{create:!0})).createWritable();await n.write(t),await n.close()}async function Nr(e){try{await(await U()).removeEntry(e)}catch{}}var Pr=class{#e=!1;#t=Promise.resolve();async charger(){await this.reprendreTransactionInachevee();let e=await jr(yr);if(e===null)return null;let t=St(JSON.parse(e));return Nt(t),t}async reprendreTransactionInachevee(){return await jr(br)===null?!1:(await Nr(br),!0)}async sauvegarder(e){Nt(e);let t=this.#t,n=(async()=>{await t.catch(()=>{}),this.#e||=(await this.snapshot(`debut-de-session`),!0);let n=JSON.stringify(e);await Mr(br,n);let r=await jr(br);if(r!==n)throw Error(`Écriture d'état incohérente — bascule annulée, état courant conservé`);Nt(St(JSON.parse(r))),await Mr(yr,r),await Nr(br)})();this.#t=n,await n}async chargerPreferences(){let e=await jr(xr);if(e===null)return kr();try{let t=JSON.parse(e),n=Ar(t);return t?.demarrage?.mode===`accueil`&&await this.sauvegarderPreferences(n),n}catch{return kr()}}async sauvegarderPreferences(e){await Mr(xr,JSON.stringify(e))}async snapshot(e=`session`){let t=await jr(yr);if(t===null)return;let n=await(await U()).getDirectoryHandle(Tr,{create:!0}),r=e.toLowerCase().normalize(`NFD`).replace(/[\u0300-\u036f]/g,``).replace(/[^a-z0-9]+/g,`-`).slice(0,40),i=new Date().toISOString().replaceAll(`:`,`-`)+`__`+r+`.json`,a=await(await n.getFileHandle(i,{create:!0})).createWritable();await a.write(t),await a.close();let o=[];for await(let[e]of n)o.push(e);for(let e of o.sort().slice(0,Math.max(0,o.length-Er)))await n.removeEntry(e)}async listerSauvegardes(){try{let e=await(await U()).getDirectoryHandle(Tr),t=[];for await(let[n]of e)t.push(n);return t.sort().reverse()}catch{return[]}}async restaurerSauvegarde(e){let t=await(await(await(await(await U()).getDirectoryHandle(Tr)).getFileHandle(e)).getFile()).text(),n=St(JSON.parse(t));return Nt(n),await this.snapshot(`avant-restauration`),await Mr(yr,JSON.stringify(n)),n}async#n(e){try{let t=await(await U()).getDirectoryHandle(Sr);try{return await t.getFileHandle(e)}catch{for await(let[n,r]of t)if(r.kind===`file`&&n.startsWith(e+`.`))return r;return null}}catch{return null}}async ecrireVideo(e,t,n,r,i){let a=Dr(e,n),o=await(await U()).getDirectoryHandle(Cr,{create:!0}),s=await o.getFileHandle(a,{create:!0}),c=await s.createWritable(),l=t.size,u=0,d=r&&l>0||i?t.stream().pipeThrough(new TransformStream({transform(e,t){if(i?.())throw new at;u+=e.byteLength,r&&l>0&&r(Math.min(1,u/l)),t.enqueue(e)}})):t.stream();try{await d.pipeTo(c)}catch(e){try{await c.abort()}catch{}try{await o.removeEntry(a)}catch{}throw e}r&&r(1);let f=await(await U()).getDirectoryHandle(Sr,{create:!0});try{await s.move(f)}catch{let e=await(await f.getFileHandle(a,{create:!0})).createWritable();await(await s.getFile()).stream().pipeTo(e),await o.removeEntry(a)}}async#r(e=!1){return(await(await U()).getDirectoryHandle(Cr,{create:e})).getDirectoryHandle(wr,{create:e})}puitsImport(){let e=this,t=null;return{async ouvrir(n){t=await(await(await e.#r(!0)).getFileHandle(n,{create:!0})).createWritable()},async ecrire(e){await t.write(e)},async fermer(){await t.close(),t=null},async abandonner(){try{t&&await t.close()}catch{}t=null,await e.nettoyerImport()}}}async promouvoirImportMedias(e){if(e.length===0)return[];let t=[],n=await this.#r(!1),r=await(await U()).getDirectoryHandle(Sr,{create:!0});for(let i of e){let e;try{e=await n.getFileHandle(i)}catch{continue}let a=!1;try{await r.getFileHandle(i),a=!0}catch{}if(a){try{await n.removeEntry(i)}catch{}continue}try{await e.move(r)}catch{let t=await(await r.getFileHandle(i,{create:!0})).createWritable();await(await e.getFile()).stream().pipeTo(t);try{await n.removeEntry(i)}catch{}}t.push(i)}return t}async annulerPromotionMedias(e){if(e.length===0)return;let t=await this.#r(!0),n=await(await U()).getDirectoryHandle(Sr,{create:!0});for(let r of e){let e;try{e=await n.getFileHandle(r)}catch{continue}try{await e.move(t)}catch{try{let i=await(await t.getFileHandle(r,{create:!0})).createWritable();await(await e.getFile()).stream().pipeTo(i),await n.removeEntry(r)}catch{}}}}async nettoyerImport(){try{await(await(await U()).getDirectoryHandle(Cr)).removeEntry(wr,{recursive:!0})}catch{}}async*lireMediaParBlocs(e,t){let n=await this.#n(e);if(!n)return;let r=await n.getFile();for(let e=0;e<r.size;e+=t){let n=r.slice(e,Math.min(e+t,r.size));yield new Uint8Array(await n.arrayBuffer())}}async ouvrirArchiveTemp(e){return(await(await(await U()).getDirectoryHandle(Cr,{create:!0})).getFileHandle(e,{create:!0})).createWritable()}async fichierArchiveTemp(e){return(await(await(await U()).getDirectoryHandle(Cr)).getFileHandle(e)).getFile()}async supprimerArchiveTemp(e){try{await(await(await U()).getDirectoryHandle(Cr)).removeEntry(e)}catch{}}async nettoyerArchivesTemp(){try{let e=await(await U()).getDirectoryHandle(Cr),t=[];for await(let[n]of e)n.startsWith(`export-`)&&n.endsWith(`.movpack`)&&t.push(n);for(let n of t)await e.removeEntry(n)}catch{}}async nettoyerStaging(){try{await(await U()).removeEntry(Cr,{recursive:!0})}catch{}}async estimerEspace(){try{let e=await navigator.storage.estimate();return typeof e.usage!=`number`||typeof e.quota!=`number`?null:{usage:e.usage,quota:e.quota}}catch{return null}}async persistanceStockage(e=!1){try{return navigator.storage?.persisted?await navigator.storage.persisted()?!0:e&&navigator.storage.persist?await navigator.storage.persist():!1:null}catch{return null}}async fichierVideo(e){let t=await this.#n(e);if(!t)return null;try{return await t.getFile()}catch{return null}}async urlVideo(e){let t=await this.#n(e);if(!t)return null;try{return URL.createObjectURL(await t.getFile())}catch{return null}}async lireVideo(e){let t=await this.#n(e);if(!t)return null;try{return new Uint8Array(await(await t.getFile()).arrayBuffer())}catch{return null}}async listerVideos(){try{let e=await(await U()).getDirectoryHandle(Sr),t=new Set;for await(let[n]of e)t.add(Or(n));return t}catch{return new Set}}async taillesVideos(){let e=new Map;try{let t=await(await U()).getDirectoryHandle(Sr);for await(let[n,r]of t)r.kind===`file`&&e.set(Or(n),(await r.getFile()).size)}catch{}return e}async supprimerVideo(e){let t=await this.#n(e);if(t)try{await(await(await U()).getDirectoryHandle(Sr)).removeEntry(t.name)}catch{}}async reinitialiser(){let e=await U();for(let t of[yr,br,xr])try{await e.removeEntry(t)}catch{}for(let t of[Sr,Cr,Tr])try{await e.removeEntry(t,{recursive:!0})}catch{}}},Fr=31e4;function Ir(e){if(!/^\d{6,12}$/.test(e))return`Le PIN est une suite de 6 à 12 chiffres`;if(/^(\d)\1+$/.test(e))return`Un même chiffre répété est trop évident`;let t=`01234567890123456789012`,n=[...t].reverse().join(``);return t.includes(e)||n.includes(e)?`Une suite de chiffres est trop évidente`:null}function Lr(e){return[...e].map(e=>e.toString(16).padStart(2,`0`)).join(``)}function Rr(e){let t=new Uint8Array(e.length/2);for(let n=0;n<t.length;n++)t[n]=parseInt(e.slice(n*2,n*2+2),16);return t}async function zr(e,t,n){let r=await crypto.subtle.importKey(`raw`,new TextEncoder().encode(e),`PBKDF2`,!1,[`deriveBits`]),i=await crypto.subtle.deriveBits({name:`PBKDF2`,hash:`SHA-256`,salt:Rr(t),iterations:n},r,256);return Lr(new Uint8Array(i))}async function Br(e){let t=Ir(e);if(t)throw Error(t);let n=Lr(crypto.getRandomValues(new Uint8Array(16)));return{version:1,sel:n,iterations:Fr,empreinte:await zr(e,n,Fr)}}async function Vr(e,t){let n=await zr(e,t.sel,t.iterations);if(n.length!==t.empreinte.length)return!1;let r=0;for(let e=0;e<n.length;e++)r|=n.charCodeAt(e)^t.empreinte.charCodeAt(e);return r===0}function Hr(e){return e<5?0:Math.min(30,2**(e-4))}function Ur(e,t,n){return e===`consultation`||!(e===`modification`?t.modifications:t.suppressions)||n?`libre`:`pin_requis`}function Wr(e,t,n){return e===null?!1:t===`arriere-plan`||n-e<(t===`15min`?15:5)*6e4}var{I:Gr}=Ee,Kr=e=>e.strings===void 0,qr={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Jr=e=>(...t)=>({_$litDirective$:e,values:t}),Yr=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}},Xr=(e,t)=>{let n=e._$AN;if(n===void 0)return!1;for(let e of n)e._$AO?.(t,!1),Xr(e,t);return!0},Zr=e=>{let t,n;do{if((t=e._$AM)===void 0)break;n=t._$AN,n.delete(e),e=t}while(n?.size===0)},Qr=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(n===void 0)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),ti(t)}};function $r(e){this._$AN===void 0?this._$AM=e:(Zr(this),this._$AM=e,Qr(this))}function ei(e,t=!1,n=0){let r=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(r))for(let e=n;e<r.length;e++)Xr(r[e],!1),Zr(r[e]);else r!=null&&(Xr(r,!1),Zr(r));else Xr(this,e)}var ti=e=>{e.type==qr.CHILD&&(e._$AP??=ei,e._$AQ??=$r)},ni=class extends Yr{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,n){super._$AT(e,t,n),Qr(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(Xr(this,e),Zr(this))}setValue(e){if(Kr(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}},ri=new WeakMap,ii=Jr(class extends ni{render(e){return F}update(e,[t]){let n=t!==this.G;return n&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),F}rt(e){if(this.G!==void 0)if(this.isConnected||(e=void 0),typeof this.G==`function`){let t=this.ht??globalThis,n=ri.get(t);n===void 0&&(n=new WeakMap,ri.set(t,n)),n.get(this.G)!==void 0&&this.G.call(this.ht,void 0),n.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G==`function`?ri.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});function ai(e,t){return e?.libelle??t}function oi(e,t){return e?e.symetrique?e.libelle:e.libelleInverse??`${e.libelle} (inverse)`:t}function si(e,t){let n=e?.role??`peer`;return t?n:n===`after`?`before`:n===`before`?`after`:n}function ci(e,t){let n=new Map(e.typesRelation.map(e=>[e.id,e])),r=new Set(e.techniques.map(e=>e.id)),i=[],a=new Set,o=(e,t,o,s,c,l)=>{let u=`${e}:${s}`;if(a.has(u))return;a.add(u);let d={libelle:e,typeId:t,directe:o,techniqueId:s,presente:r.has(s),role:si(n.get(t),o)};c!==void 0&&(d.note=c),l!==void 0&&(d.priorite=l),i.push(d)},s=e.techniques.find(e=>e.id===t);for(let e of s?.relations??[])o(ai(n.get(e.type),e.type),e.type,!0,e.cibleId,e.note,e.priorite);for(let r of e.techniques)if(r.id!==t)for(let e of r.relations)e.cibleId===t&&o(oi(n.get(e.type),e.type),e.type,!1,r.id,e.note,e.priorite);return i}var li=[{id:`enchainer`,titre:`Construire un enchaînement`,invite:`Suite après la technique`,garde:e=>e.role===`after`},{id:`preparer`,titre:`Trouver une préparation`,invite:`Ce qui amène à cette technique`,garde:e=>e.role===`before`},{id:`comparer`,titre:`Comparer / ne pas confondre`,invite:`Variantes et distinctions`,garde:e=>e.role===`peer`},{id:`defendre`,titre:`Voir les contres et réactions`,invite:`Ce qui répond à la technique`,garde:e=>e.role===`opposition`}],W={recherche:``,vue:`liste`,choixDepart:!1,filtre:null,tri:`pertinence`,plein:!1,exIntent:null,exChemin:[],mmDeplie:new Set,mmMasque:new Set,mmCherche:!1,carteDeplie:new Set,carteMasque:new Set,carteRoleDeplie:new Set};function ui(e,t){W.recherche=``,W.choixDepart=!1,di(e,t)}var G=[];function di(e,t){let n=G.lastIndexOf(t);G=n>=0?G.slice(0,n+1):[...G,t],e.recentrerRelations(t)}function fi(e,t){t<0||t>=G.length||(G=G.slice(0,t+1),e.recentrerRelations(G[G.length-1]))}function pi(e){G.length<=1||(G=G.slice(0,-1),e.recentrerRelations(G[G.length-1]))}function mi(e){if(G.length===0){G=[e];return}if(G[G.length-1]===e)return;let t=G.lastIndexOf(e);G=t>=0?G.slice(0,t+1):[...G,e]}function hi(e,t){return t.familleId?e.disciplines.find(e=>e.id===t.disciplineId)?.familles.find(e=>e.id===t.familleId)?.nom??``:``}function gi(e){return`role--${e}`}function _i(e,t){let n=e.technique(t)?.alertes?.[0];return n?P`<span class="rel-alerte" title=${n.libelle}>⚠️</span>`:F}function vi(e){let t=e=>P`<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">${de`<path d=${e}></path>`}</svg>`;switch(e){case`before`:return t(`M20 12H6M11 6l-6 6 6 6`);case`after`:return t(`M4 12h14M13 6l6 6-6 6`);case`opposition`:return t(`M12 3l7 3v5c0 4.2-2.9 7.7-7 8.9C7.9 18.7 5 15.2 5 11V6z`);case`peer`:return t(`M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 17l-5.2 2.7 1-5.8L3.5 9.7l5.9-.9z`);case`context`:return t(`M4 5h11a3 3 0 013 3v11M4 5v11a3 3 0 003 3h12M4 5l4 3`);default:return t(`M4 12h14M13 6l6 6-6 6`)}}var yi=[`before`,`after`,`opposition`,`peer`,`context`];function bi(e){let t=new Map;for(let n of e)t.set(n.libelle,[...t.get(n.libelle)??[],n]);return[...t.entries()].map(([e,t])=>({libelle:e,role:t[0].role,liste:t})).sort((e,t)=>yi.indexOf(e.role)-yi.indexOf(t.role)||e.libelle.localeCompare(t.libelle,`fr`))}function xi(e,t){let n=t=>e.technique(t.techniqueId)?.nom??``;return[...t].map((e,t)=>({l:e,i:t})).sort((e,t)=>W.tri===`alpha`?n(e.l).localeCompare(n(t.l),`fr`)||e.i-t.i:(e.l.priorite??1/0)-(t.l.priorite??1/0)||e.i-t.i).map(e=>e.l)}var Si=!1;function Ci(e){Si=!0,W.vue=e}function wi(e){let t=e.bibliotheque;if(!Si){Si=!0;let t=e.preferences.relationsVue;t&&(W.vue=t)}let n=e.techniqueCentreRelations(),r=n?e.technique(n):void 0,i=P`
    <header class="rel-tete">
      <div>
        <div class="rel-titre">Relations</div>
        <div class="rel-sous">Navigation par liens techniques</div>
      </div>
      <div class="rel-tete-actions">
        ${W.vue===`classique`?P`<button class="rel-tete-bt ${W.mmCherche?`actif`:``}" @click=${()=>{W.mmCherche=!W.mmCherche,W.mmCherche||(W.recherche=``),e.requestUpdate()}} aria-label="Rechercher une technique à centrer" title="Rechercher">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.8-3.8"/></svg>
              </button>
              ${G.length>1?P`<button class="rel-tete-bt" @click=${()=>Ea(e)} aria-label="Revenir à la technique de départ" title="Recentrer">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/></svg>
                  </button>`:F}`:F}
        ${r&&!W.choixDepart?P`<button class="rel-tete-bt" @click=${()=>{W.choixDepart=!0,e.requestUpdate()}}
              aria-label="Changer de point de départ" title="Changer de point de départ">🎲</button>`:F}
      </div>
    </header>`;if(!r||W.choixDepart)return P`<div class="ecran ecran-relations">
      ${i}
      ${t.techniques.length===0?P`<p class="fil-vide" style="padding-top:10px">Aucune technique pour l'instant — ajoute-en d'abord.</p>`:P`${r?P`<button class="chip-filtre rel-depart-annuler" style="margin:8px 18px 0"
                @click=${()=>{W.choixDepart=!1,e.requestUpdate()}}>← Revenir à ${r.nom}</button>`:F}
          ${Ti(e,t)}`}
    </div>`;mi(r.id);let a=ci(t,r.id),o=W.vue===`classique`;return P`
    <div class="ecran ecran-relations ${o?`mm-plein`:``}">
      ${i}
      ${W.vue===`explorer`?ki(e):F}
      ${Di(e)}
      ${o?F:Ai(e,r)}

      ${W.vue===`mindmap`||W.vue===`classique`?F:Ni(e,t,r,a)}
      ${a.length===0?P`<div class="rel-vide">
            <p class="fil-vide">Aucun lien pour l'instant.</p>
            <button class="action-douce" @click=${()=>e.ouvrirEditionLien(r.id)}>
              ＋ Créer un lien <span>depuis « ${r.nom} »</span>
            </button>
          </div>`:W.vue===`mindmap`?_a(e,t,r,a):W.vue===`classique`?ka(e,t,r,a):W.vue===`explorer`?Pa(e,t,r):Pi(e,t,a)}
    </div>
  `}function Ti(e,t){let n=W.recherche.trim(),r=n?vt(t,n,8):[],i=e=>t.techniques.some(t=>t.id===e),a=[...G.slice().reverse(),...e.derniereTechniqueVue?[e.derniereTechniqueVue]:[]].filter((e,t,n)=>i(e)&&n.indexOf(e)===t).slice(0,6),o=t.favoris.filter(i),s=t.techniques.filter(e=>e.relations.length>0||t.techniques.some(t=>t.relations.some(t=>t.cibleId===e.id))),c=()=>{if(s.length===0)return;let t=s[Math.floor(Math.random()*s.length)];ui(e,t.id)},l=n=>{let r=e.technique(n);if(!r)return F;let i=hi(t,r);return P`<button class="rel-depart-item" @click=${()=>ui(e,n)}>
      <span class="rel-depart-media">${eo(e,r)}</span>
      <span class="rel-depart-corps">
        <span class="rel-depart-nom">${r.nom}${_i(e,r.id)}</span>
        ${i?P`<span class="rel-depart-fam">${i}</span>`:F}
      </span>
    </button>`};return P`
    <div class="rel-depart">
      <h2 class="rel-depart-titre">Choisis un point de départ</h2>
      <p class="rel-depart-sous">Les relations partent d'une technique. Cherche-la, reprends-en une récente, ou laisse-toi guider.</p>

      <div class="recherche" style="margin:12px 0 0">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.8-3.8"/></svg>
        <input type="search" placeholder="Chercher une technique…" .value=${W.recherche}
               aria-label="Chercher une technique de départ"
               @input=${t=>{W.recherche=t.target.value,e.requestUpdate()}}>
      </div>
      ${n?r.length?P`<div class="rel-depart-liste">${r.map(e=>l(e.id))}</div>`:P`<p class="fil-vide" style="padding-top:10px">Aucune technique ne correspond.</p>`:F}

      ${!n&&a.length?P`<section class="rel-depart-sec">
            <h3 class="rel-depart-sec-titre">Récemment consultées</h3>
            <div class="rel-depart-liste">${a.map(e=>l(e))}</div>
          </section>`:F}

      ${!n&&o.length?P`<section class="rel-depart-sec">
            <h3 class="rel-depart-sec-titre">Favoris</h3>
            <div class="rel-depart-chips">${o.map(t=>Ei(e,t))}</div>
          </section>`:F}

      ${s.length?P`<button class="rel-depart-hasard" @click=${c}>🎲 Explorer au hasard</button>`:F}
    </div>
  `}function Ei(e,t){let n=e.technique(t);return n?P`<button class="rel-depart-chip" @click=${()=>ui(e,t)}>${n.nom}${_i(e,t)}</button>`:F}function Di(e){return P`
    <div class="rel-vues" role="tablist" aria-label="Vue des relations">
      ${[{id:`liste`,nom:`Liste`},{id:`mindmap`,nom:`Carte`},{id:`classique`,nom:`Mindmap`},{id:`explorer`,nom:`Explorer`}].map(t=>P`<button role="tab" aria-selected=${W.vue===t.id} class="rel-vue-onglet ${W.vue===t.id?`actif`:``}"
          @click=${()=>{W.vue=t.id,W.plein=!1,e.enregistrerVueRelations(t.id),e.requestUpdate()}}>${t.nom}</button>`)}
    </div>
  `}var Oi=4;function ki(e){if(G.length<=1)return F;let t=G.length>Oi,n=t?G.length-Oi:0,r=G.slice(n);return P`
    <nav class="rel-fil" aria-label="Historique de navigation">
      <button class="rel-fil-retour" @click=${()=>pi(e)} aria-label="Revenir au centre précédent" title="Revenir">←</button>
      <div class="rel-fil-chemin">
        ${t?P`<span class="rel-fil-ellipse" aria-hidden="true">…</span><span class="rel-fil-sep">›</span>`:F}
        ${r.map((t,r)=>{let i=n+r,a=i===G.length-1,o=e.technique(t)?.nom??`?`;return P`
            ${r>0?P`<span class="rel-fil-sep" aria-hidden="true">›</span>`:F}
            ${a?P`<span class="rel-fil-courant" aria-current="page">${o}</span>`:P`<button class="rel-fil-maillon" @click=${()=>fi(e,i)}>${o}</button>`}
          `})}
      </div>
    </nav>
  `}function Ai(e,t){let n=e.bibliotheque,r=W.recherche.trim(),i=r?vt(n,r,6).filter(e=>e.id!==t?.id):[];return P`
    <div class="recherche" style="margin:8px 18px 0">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.8-3.8"/></svg>
      <input type="search" placeholder="Centrer sur une autre technique…" .value=${W.recherche}
             aria-label="Centrer sur une autre technique"
             @input=${t=>{W.recherche=t.target.value,e.requestUpdate()}}>
    </div>
    ${i.length?P`<div class="chips-filtres" style="padding:6px 18px 0">
          ${i.map(t=>P`<button class="chip-filtre" @click=${()=>{W.recherche=``,W.filtre=null,di(e,t.id)}}>${t.nom}</button>`)}
        </div>`:F}
  `}var ji=!1;function Mi(e){if(!e)return;let t=()=>{document.querySelector(`.rel-centre`)?.classList.toggle(`compacte`,window.scrollY>48)};t(),ji||(ji=!0,window.addEventListener(`scroll`,t,{passive:!0}))}function Ni(e,t,n,r){let i=hi(t,n),a=new Set(r.map(e=>e.techniqueId)).size;return P`
    <button class="rel-centre" ${ii(Mi)} @click=${()=>e.ouvrirFiche(n.id)} title="Ouvrir la fiche">
      <span class="rel-centre-media">${eo(e,n)}</span>
      <span class="rel-centre-txt">
        <span class="rel-centre-nom">${n.nom}${_i(e,n.id)}</span>
        ${i?P`<span class="rel-centre-fam">${i}</span>`:F}
        <span class="rel-centre-compte">${a?`${a} technique${a>1?`s`:``} reliée${a>1?`s`:``}`:`aucun lien`}</span>
        <span class="rel-centre-voir">Ouvrir la fiche ›</span>
      </span>
    </button>
  `}function Pi(e,t,n){let r=bi(n),i=W.filtre&&r.some(e=>e.libelle===W.filtre)?W.filtre:null,a=i?r.filter(e=>e.libelle===i):r,o=e=>{let t=e;t?.classList.contains(`actif`)&&t.scrollIntoView({inline:`center`,block:`nearest`})};return P`
    <div class="rel-filtres">
      <button class="rel-chip ${i===null?`actif`:``}" ${ii(o)}
        @click=${()=>{W.filtre=null,e.requestUpdate()}}>
        Toutes <span class="rel-chip-n">${n.length}</span>
      </button>
      ${r.map(t=>P`<button class="rel-chip ${gi(t.role)} ${i===t.libelle?`actif`:``}" ${ii(o)}
          @click=${()=>{W.filtre=i===t.libelle?null:t.libelle,e.requestUpdate()}}>
          ${t.libelle} <span class="rel-chip-n">${t.liste.length}</span>
        </button>`)}
    </div>

    <div class="rel-tri">
      <label>Tri
        <select .value=${W.tri} @change=${t=>{W.tri=t.target.value,e.requestUpdate()}}>
          <option value="pertinence">pertinence</option>
          <option value="alpha">alphabétique</option>
        </select>
      </label>
      <button class="rel-tri-ajouter" @click=${()=>{let t=e.techniqueCentreRelations();t&&e.ouvrirEditionLien(t)}}
        title="Créer un lien depuis la technique centrale">＋ lien</button>
    </div>

    <div class="rel-listes">
      ${a.map(n=>P`<section class="rel-groupe ${gi(n.role)}">
          <header class="rel-groupe-tete">${vi(n.role)}<span>${n.libelle}</span><span class="rel-groupe-n">${n.liste.length}</span></header>
          ${xi(e,n.liste).map(n=>Ba(e,t,n))}
        </section>`)}
    </div>
  `}function Fi(e){switch(e){case`before`:return`var(--state-success)`;case`after`:return`var(--state-info)`;case`opposition`:return`#9B72D0`;case`peer`:return`var(--accent)`;case`context`:return`#C9971E`;default:return`var(--sourdine)`}}var Ii=176,Li=150,Ri=208,zi=168,Bi=360,Vi=330,Hi=168,Ui=210,Wi=4,Gi=48,Ki=.3,qi=2.4,Ji=.6,Yi=1,Xi={before:{axe:`v`,ax:-360,ay:0},after:{axe:`v`,ax:Bi,ay:0},peer:{axe:`h`,ax:0,ay:-330},opposition:{axe:`h`,ax:0,ay:Vi},context:{axe:`v`,ax:-360,ay:Vi}};function Zi(e,t,n){return e.axe===`v`?{x:e.ax,y:e.ay-(n-1)*Hi/2+t*Hi}:{x:e.ax-(n-1)*Ui/2+t*Ui,y:e.ay}}function Qi(e,t,n){if(n===`before`||n===`after`){let n=e.x+(t.x<e.x?-e.w/2:e.w/2),r=e.y,i=t.x+(t.x<e.x?t.w/2:-t.w/2),a=t.y,o=(n+i)/2;return`M${n} ${r} C ${o} ${r} ${o} ${a} ${i} ${a}`}let r=e.y+(t.y<e.y?-e.h/2:e.h/2),i=e.x,a=t.y+(t.y<e.y?t.h/2:-t.h/2),o=t.x,s=(r+a)/2;return`M${i} ${r} C ${i} ${s} ${o} ${s} ${o} ${a}`}var $i=4,ea=265,ta=40;function na(e){return e?Li+Math.min(8,Math.ceil(e.length/22))*13:Li}function ra(e){for(let t=0;t<120;t++){let t=!1;for(let n=0;n<e.length;n++)for(let r=n+1;r<e.length;r++){let i=e[n],a=e[r],o=a.x-i.x,s=a.y-i.y,c=(i.w+a.w)/2+16-Math.abs(o),l=(i.h+a.h)/2+16-Math.abs(s);if(c<=0||l<=0)continue;let u=c<l,d=Math.sign(u?o||1:s||1),f=u?c:l,p=i.centre?0:a.centre?f:f/2,m=a.centre?0:i.centre?f:f/2;u?(i.x-=d*p,a.x+=d*m):(i.y-=d*p,a.y+=d*m),t=!0}if(!t)break}}function ia(e,t,n,r){let i=[],a=new Map,o={x:0,y:0,w:Ri,h:zi,centre:!0,role:null,niveau:0,nom:n.nom,fam:hi(t,n),id:n.id},s=e.technique(n.id)?.alertes?.[0]?.libelle;s&&(o.alerte=s),i.push(o),a.set(n.id,o);let c=new Map;for(let e of r)c.set(e.role,[...c.get(e.role)??[],e]);for(let n of yi){let r=c.get(n);if(!r||r.length===0)continue;let o=xi(e,r),s=W.carteRoleDeplie.has(n)?1/0:Wi,l=o.length>s?o.slice(0,s-1):o,u=o.length-l.length,d=l.length+ +(u>0),f=Xi[n];if(l.forEach((r,o)=>{let s=e.technique(r.techniqueId),c=Zi(f,o,d),l={x:c.x,y:c.y,w:Ii,h:na(r.note),role:n,niveau:1,id:r.techniqueId,nom:s?.nom??`(absente)`,fam:s?hi(t,s):``,absente:!r.presente||!s};r.note!==void 0&&(l.note=r.note);let u=s?.alertes?.[0]?.libelle;u&&(l.alerte=u),i.push(l),l.id&&!l.absente&&!a.has(l.id)&&a.set(l.id,l)}),u>0){let e=Zi(f,l.length,d);i.push({x:e.x,y:e.y,w:Ii,h:Li,role:n,plus:u,nom:`+${u} autres`,fam:``})}}let l=[];for(let n of W.carteDeplie){let r=a.get(n);if(!r)continue;r.deplie=!0;let o=xi(e,ci(t,n).filter(e=>e.presente&&!W.carteMasque.has(e.libelle))),s=o.filter(e=>!a.has(e.techniqueId)).slice(0,Math.max(0,Math.min($i,ta-i.length))),c=Math.hypot(r.x,r.y)||1,u=r.x/c,d=r.y/c,f=-d,p=u,m=Math.abs(f)*210+Math.abs(p)*190;s.forEach((n,o)=>{let c=e.technique(n.techniqueId);if(!c)return;let h=(o-(s.length-1)/2)*m,g={x:r.x+u*ea+f*h,y:r.y+d*ea+p*h,w:Ii,h:na(n.note),role:n.role,niveau:(r.niveau??1)+1,id:n.techniqueId,nom:c.nom,fam:hi(t,c)};n.note!==void 0&&(g.note=n.note);let _=c.alertes?.[0]?.libelle;_&&(g.alerte=_),i.push(g),a.set(g.id,g),l.push({de:r,vers:g,role:n.role})});for(let e of o){let t=a.get(e.techniqueId);t&&t!==r&&!s.some(t=>t.techniqueId===e.techniqueId)&&l.push({de:r,vers:t,role:e.role})}}for(let e of i)!e.id||e.absente||e.centre||(e.depl=ci(t,e.id).filter(e=>e.presente&&!a.has(e.techniqueId)&&!W.carteMasque.has(e.libelle)).length);ra(i);let u=1/0,d=-1/0,f=1/0,p=-1/0;for(let e of i)u=Math.min(u,e.x-e.w/2),d=Math.max(d,e.x+e.w/2),f=Math.min(f,e.y-e.h/2),p=Math.max(p,e.y+e.h/2);let m=Gi-u,h=Gi-f,g=new Map,_=i.map(e=>{let t={...e,x:e.x+m,y:e.y+h};return g.set(e,t),t}),v=_[0],y=[];for(let e=1;e<_.length;e++){let t=_[e];(t.role&&(t.niveau??1)===1||t.plus)&&y.push({d:Qi(v,t,t.role??`peer`),role:t.role??`peer`})}for(let e of l){let t=g.get(e.de),n=g.get(e.vers);y.push({d:Qi(t,n,e.role),role:e.role})}return{noeuds:_,aretes:y,sceneW:d-u+2*Gi,sceneH:p-f+2*Gi,hubX:v.x,hubY:v.y}}var aa=!1,K={tx:0,ty:0,k:1,fitId:``},oa=null,sa=null,ca={w:1,h:1,hubX:0,hubY:0};function la(){oa&&(oa.style.transform=`translate(${K.tx}px, ${K.ty}px) scale(${K.k})`)}function ua(){if(!sa)return;let e=sa.getBoundingClientRect();if(!e.width||!e.height)return;let t=Math.max(Ji,Math.min(Yi,Math.min(e.width/ca.w,e.height/ca.h)));K.k=t,K.tx=e.width/2-ca.hubX*t,K.ty=e.height/2-ca.hubY*t,la()}function da(e,t,n){if(!sa)return;let r=sa.getBoundingClientRect(),i=e-r.left,a=t-r.top,o=Math.max(Ki,Math.min(qi,K.k*n)),s=(i-K.tx)/K.k,c=(a-K.ty)/K.k;K.k=o,K.tx=i-s*o,K.ty=a-c*o,la()}function fa(e){if(!sa)return;let t=sa.getBoundingClientRect();da(t.left+t.width/2,t.top+t.height/2,e)}function pa(e){let[t,n]=[...e.values()];return t&&n?Math.hypot(t.x-n.x,t.y-n.y):0}function ma(e){let[t,n]=[...e.values()];return t&&n?{x:(t.x+n.x)/2,y:(t.y+n.y)/2}:{x:0,y:0}}function ha(e){let t=new Map,n=null,r=null,i=0;e.addEventListener(`pointerdown`,i=>{aa=!1,t.set(i.pointerId,{x:i.clientX,y:i.clientY}),t.size===1?(n={x:i.clientX,y:i.clientY},r=null):t.size===2&&(n=null,r={dist:pa(t)}),e.classList.add(`grab`)}),e.addEventListener(`pointermove`,i=>{if(t.has(i.pointerId)){if(t.set(i.pointerId,{x:i.clientX,y:i.clientY}),t.size>=2&&r){let e=pa(t),n=ma(t);r.dist>0&&da(n.x,n.y,e/r.dist),r.dist=e,aa=!0}else if(n){let t=i.clientX-n.x,r=i.clientY-n.y;if(!aa&&Math.abs(t)+Math.abs(r)>6){aa=!0;try{e.setPointerCapture(i.pointerId)}catch{}}K.tx+=t,K.ty+=r,n={x:i.clientX,y:i.clientY},la()}}});let a=i=>{t.delete(i.pointerId);try{e.releasePointerCapture(i.pointerId)}catch{}if(t.size===1){let[e]=[...t.values()];n=e?{x:e.x,y:e.y}:null,r=null}else t.size===0&&(n=null,r=null,e.classList.remove(`grab`))};e.addEventListener(`pointerup`,a),e.addEventListener(`pointercancel`,a),e.addEventListener(`wheel`,e=>{e.preventDefault(),da(e.clientX,e.clientY,e.deltaY>0?.9:1.11)},{passive:!1}),e.addEventListener(`dblclick`,()=>ua()),e.addEventListener(`pointerup`,e=>{if(e.pointerType!==`touch`)return;let t=Date.now();t-i<320&&ua(),i=t})}function ga(e,t){let n=`left:${t.x-t.w/2}px; top:${t.y-t.h/2}px; width:${t.w}px; height:${t.h}px`,r=t.alerte?P`<span class="rel-alerte" title=${t.alerte}>⚠️</span>`:F;if(t.centre&&t.id){let i=e.technique(t.id);return P`<button class="rel-carte-carte hub" style=${n} @click=${()=>{aa||e.ouvrirFiche(t.id)}} title="Ouvrir la fiche">
      <span class="rel-carte-media">${i?eo(e,i):F}</span>
      <span class="rel-carte-nom">${t.nom}${r}</span>
      <span class="rel-carte-voir">Ouvrir la fiche ›</span>
    </button>`}if(t.plus&&t.role)return P`<button class="rel-carte-carte plus ${gi(t.role)}" style=${n}
      @click=${()=>{!aa&&t.role&&(W.carteRoleDeplie.add(t.role),e.requestUpdate())}}>
      <span class="rel-carte-plus-txt">${t.nom}</span>
      <span class="rel-carte-plus-sous">déplier ici ›</span>
    </button>`;let i=t.id?e.technique(t.id):void 0;if(t.absente||!i)return P`<div class="rel-carte-carte absente ${t.role?gi(t.role):``}" style=${n}>
      <span class="rel-carte-nom">${t.nom}</span>
    </div>`;let a=t.deplie||(t.depl??0)>0?P`<button class="rel-carte-depl ${t.deplie?`actif`:``}"
        style=${`left:${t.x+t.w/2-16}px; top:${t.y+t.h/2-13}px`}
        aria-label=${t.deplie?`Replier les liens de ce nœud`:`Déplier ${t.depl} lien${(t.depl??0)>1?`s`:``} de plus`}
        title=${t.deplie?`Replier`:`Déplier ${t.depl} lien${(t.depl??0)>1?`s`:``} de plus`}
        @click=${n=>{n.stopPropagation(),!(aa||!t.id)&&(t.deplie?W.carteDeplie.delete(t.id):W.carteDeplie.add(t.id),e.requestUpdate())}}>${t.deplie?`−`:`+${t.depl}`}</button>`:F;return P`<button class="rel-carte-carte ${gi(t.role??`peer`)} ${(t.niveau??1)>=2?`niveau2`:``}" style=${n}
    @click=${()=>{!aa&&t.id&&di(e,t.id)}} title=${t.note??F}>
    <span class="rel-carte-media">${eo(e,i)}</span>
    <span class="rel-carte-nom">${i.nom}${r}</span>
    ${t.note?P`<span class="rel-carte-note">${t.note}</span>`:F}
  </button>${a}`}function _a(e,t,n,r){K.fitId!==n.id&&(W.carteDeplie.clear(),W.carteRoleDeplie.clear());let i=bi(r),a=r.filter(e=>!W.carteMasque.has(e.libelle)),{noeuds:o,aretes:s,sceneW:c,sceneH:l,hubX:u,hubY:d}=ia(e,t,n,a);ca={w:c,h:l,hubX:u,hubY:d};let f=[...new Set(a.filter(e=>e.presente).map(e=>e.techniqueId))];return P`
    <div class="rel-carte-chips" role="list" aria-label="Familles de liens (légende / filtre)">
      ${i.map(t=>{let n=W.carteMasque.has(t.libelle),r=Fi(t.role);return P`<button role="listitem" class="rel-carte-chip ${n?`masque`:``}"
          style=${`color:${r}; background:color-mix(in srgb, ${r} 15%, var(--carte))`}
          @click=${()=>{n?W.carteMasque.delete(t.libelle):W.carteMasque.add(t.libelle),e.requestUpdate()}}
          title=${n?`Afficher « ${t.libelle} »`:`Masquer « ${t.libelle} »`}>
          ${vi(t.role)}<span class="rel-carte-chip-lib">${t.libelle}</span><span class="rel-carte-chip-n">${t.liste.length}</span>
        </button>`})}
    </div>
    <div class="rel-carte ${W.plein?`plein`:``}">
      <div class="rel-carte-outils">
        <button class="rel-carte-bt" @click=${()=>fa(1.25)} aria-label="Zoom avant" title="Zoom avant">+</button>
        <button class="rel-carte-bt" @click=${()=>fa(.8)} aria-label="Zoom arrière" title="Zoom arrière">−</button>
        <button class="rel-carte-bt" @click=${()=>ua()} aria-label="Réajuster la carte" title="Réajuster">⊙</button>
        <button class="rel-carte-bt ${W.carteDeplie.size>0||W.carteRoleDeplie.size>0?`actif`:``}" @click=${()=>{if(W.carteDeplie.size>0||W.carteRoleDeplie.size>0)W.carteDeplie.clear(),W.carteRoleDeplie.clear();else{f.forEach(e=>W.carteDeplie.add(e));for(let e of i)W.carteRoleDeplie.add(e.role)}e.requestUpdate()}}
          aria-label=${W.carteDeplie.size>0||W.carteRoleDeplie.size>0?`Replier tout (premier niveau)`:`Tout déplier`}
          title=${W.carteDeplie.size>0||W.carteRoleDeplie.size>0?`Replier tout (premier niveau)`:`Tout déplier`}>${W.carteDeplie.size>0||W.carteRoleDeplie.size>0?`⊟`:`⊞`}</button>
        <button class="rel-carte-bt ${W.plein?`actif`:``}" @click=${()=>{W.plein=!W.plein,K.fitId=``,e.requestUpdate()}}
          aria-label=${W.plein?`Quitter le plein écran`:`Plein écran`} title=${W.plein?`Quitter le plein écran`:`Plein écran`}>⛶</button>
      </div>
      <div class="rel-carte-aide">Glisse pour te déplacer · pince/molette pour zoomer · touche une carte pour recentrer</div>
      <div class="rel-carte-vue" ${ii(e=>{e&&(sa=e,sa.dataset.carteInstallee||(sa.dataset.carteInstallee=`1`,ha(sa)))})}>
        <div class="rel-carte-scene" style=${`width:${c}px; height:${l}px`} ${ii(e=>{if(!e)return;oa=e;let t=K.fitId!==n.id;K.fitId=n.id,requestAnimationFrame(()=>{t?ua():la()})})}>
          <svg class="rel-carte-liens" viewBox=${`0 0 ${c} ${l}`} width=${c} height=${l} aria-hidden="true">
            ${s.map(e=>de`<path d=${e.d} stroke-linecap="round" style=${`stroke:${Fi(e.role)}; fill:none; stroke-width:2.6; opacity:.7`}></path>`)}
          </svg>
          ${o.map(t=>ga(e,t))}
        </div>
      </div>
    </div>
  `}var va=2,ya={peer:`top`,before:`left`,after:`right`,context:`bottom`,opposition:`second`},ba={top:`peer`,left:`after`,right:`after`,bottom:`context`,second:`opposition`,autres:`context`};function xa(e){switch(e){case`top`:return`var(--accent)`;case`left`:return`var(--state-success)`;case`right`:return`var(--state-info)`;case`bottom`:return`#C9971E`;case`second`:return`#9B72D0`;default:return`var(--sourdine)`}}var Sa=[`top`,`left`,`right`,`bottom`,`second`,`autres`],Ca=new Set([`top`,`bottom`,`second`,`autres`]),wa={top:`Similaires`,left:`Enchaînée depuis`,right:`Enchaîne vers`,bottom:`Fondamentaux requis`,second:`Contre`,autres:`Autres liens`};function Ta(e,t){let n=e.typesRelation.find(e=>e.id===t.typeId)?.role;if(n===void 0){let e=`${t.typeId} ${t.libelle}`.toLowerCase();return/kata|fondament|prerequis|prérequis|prealable|préalable|requis|kihon|principe|\bbase\b/.test(e)?`bottom`:(typeof console<`u`&&console.warn(`[mindmap] relation de type sans rôle « ${t.typeId} » (${t.libelle}) → Autres`),`autres`)}return t.directe||(n===`after`?n=`before`:n===`before`&&(n=`after`)),ya[n]}function Ea(e){G.length>1&&fi(e,0)}function Da(e){return[...e].map((e,t)=>({l:e,i:t})).sort((e,t)=>(e.l.priorite??1/0)-(t.l.priorite??1/0)||e.i-t.i).map(e=>e.l)}function Oa(e){try{let t=e.querySelector(`.rel-mm-monde`)??e,n=t.querySelector(`.rel-mm-liens`),r=t.querySelector(`.rel-mm-hub`);if(!n||!r)return;let i=t.getBoundingClientRect();if(i.width===0)return;n.setAttribute(`viewBox`,`0 0 ${i.width} ${i.height}`);let a=e=>({l:e.left-i.left,t:e.top-i.top,r:e.right-i.left,b:e.bottom-i.top,cx:(e.left+e.right)/2-i.left,cy:(e.top+e.bottom)/2-i.top}),o=a(r.getBoundingClientRect()),s=[];Array.from(t.querySelectorAll(`.rel-mm-branche`)).forEach(e=>{let t=e,n=t.dataset.slot??``,r=t.dataset.couleur??`var(--sourdine)`,i=Array.from(t.querySelectorAll(`.rel-mm-carte`)).map(e=>a(e.getBoundingClientRect()));if(i.length===0)return;let c=e=>{let t=document.createElementNS(`http://www.w3.org/2000/svg`,`path`);t.setAttribute(`d`,e),t.setAttribute(`style`,`stroke:${r};fill:none;stroke-width:2;opacity:.9`),t.setAttribute(`stroke-linecap`,`round`),s.push(t)},l=(e,t,n,r)=>c(`M${e} ${t} L${n} ${r}`),u=(e,t,n,r)=>c(`M${e} ${t} C ${e} ${(t+r)/2} ${n} ${(t+r)/2} ${n} ${r}`),d=(e,t,n,r)=>c(`M${e} ${t} C ${(e+n)/2} ${t} ${(e+n)/2} ${r} ${n} ${r}`);if(n===`top`){let e=o.t-11;l(o.cx,o.t,o.cx,e),i.forEach(t=>u(o.cx,e,t.cx,t.b-2))}else if(n===`left`){let e=o.l-11;l(o.l,o.cy,e,o.cy),i.forEach(t=>d(e,o.cy,t.r-2,t.cy))}else if(n===`right`){let e=o.r+11;l(o.r,o.cy,e,o.cy),i.forEach(t=>d(e,o.cy,t.l+2,t.cy))}else if(n===`bottom`){let e=a(t.getBoundingClientRect()),n=Math.max(o.b+12,e.t-4);i.slice(0,3).forEach(e=>{let t=Math.max(o.l+14,Math.min(o.r-14,e.cx));l(t,o.b,t,n)})}else if(n===`second`){let e=a(t.getBoundingClientRect());i.slice(0,1).forEach(t=>l(o.cx,o.b,t.cx,Math.max(o.b+12,e.t-4)))}else{let e=a(t.getBoundingClientRect());i.slice(0,1).forEach(t=>u(o.cx,o.b,t.cx,Math.max(o.b+12,e.t-4)))}}),n.replaceChildren(...s)}catch{}}function ka(e,t,n,r){let i=new Map;for(let e of r){let n=Ta(t,e);i.set(n,[...i.get(n)??[],e])}let a=Sa.filter(e=>(i.get(e)?.length??0)>0).map(e=>{let t=i.get(e),n=[...new Set(t.map(e=>e.libelle))];return{slot:e,label:n.length===1?n[0]:wa[e],liste:Da(t),total:t.length,filtre:n.length===1?n[0]:null}}),o=a.filter(e=>!W.mmMasque.has(e.slot)),s=W.mmDeplie.size>0,c=e=>{e&&requestAnimationFrame(()=>{let t=e.querySelector(`.rel-mm-scene`);if(t&&(t.style.transform=``,!s)){let n=Math.min(1,e.clientHeight/Math.max(1,t.scrollHeight),e.clientWidth/Math.max(1,t.scrollWidth));n<.999&&(t.style.transform=`scale(${n})`)}requestAnimationFrame(()=>Oa(e))})},l=hi(t,n),u=W.recherche.trim(),d=W.mmCherche&&u?vt(t,u,8).filter(e=>e.id!==n.id):[];return P`
    <div class="rel-mm-chips" role="list" aria-label="Familles de relations (légende / filtre)">
      ${a.map(t=>{let n=W.mmMasque.has(t.slot);return P`<button role="listitem" class="rel-mm-chip slot--${t.slot} ${n?`masque`:``}"
          @click=${()=>{n?W.mmMasque.delete(t.slot):W.mmMasque.add(t.slot),e.requestUpdate()}}
          title=${n?`Afficher « ${t.label} »`:`Masquer « ${t.label} »`}>
          ${vi(ba[t.slot])}<span class="rel-mm-chip-lib">${t.label}</span><span class="rel-mm-chip-n">${t.total}</span>
        </button>`})}
    </div>
    ${W.mmCherche?P`<div class="rel-mm-cherche">
          <div class="rel-mm-recherche">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.8-3.8"/></svg>
            <input type="search" placeholder="Centrer sur une technique…" .value=${W.recherche} autofocus
                   aria-label="Centrer sur une autre technique"
                   @input=${t=>{W.recherche=t.target.value,e.requestUpdate()}}>
          </div>
          ${d.length?P`<div class="rel-mm-res">${d.map(t=>P`<button class="chip-filtre" @click=${()=>{W.recherche=``,W.mmCherche=!1,di(e,t.id)}}>${t.nom}</button>`)}</div>`:F}
        </div>`:F}
    <div class="rel-mm-radial ${s?`defile`:``}" ${ii(c)}>
      <div class="rel-mm-monde">
        <svg class="rel-mm-liens" aria-hidden="true"></svg>
        <div class="rel-mm-scene">
          <button class="rel-mm-hub" @click=${()=>e.ouvrirFiche(n.id)} title="Ouvrir la fiche">
            <span class="rel-mm-hub-media">${eo(e,n)}</span>
            <span class="rel-mm-hub-nom">${n.nom}${_i(e,n.id)}</span>
            ${l?P`<span class="rel-mm-hub-sous">${l}</span>`:F}
            <span class="rel-mm-hub-badge">${r.length} relation${r.length>1?`s`:``}</span>
          </button>
          ${o.map(n=>Aa(e,t,n))}
        </div>
      </div>
    </div>
  `}function Aa(e,t,n){let r=ba[n.slot],i=Ca.has(n.slot)?`rangee`:`colonne`,a=W.mmDeplie.has(n.slot),o=a?n.liste:n.liste.slice(0,va),s=n.total-o.length,c=()=>{W.vue=`liste`,W.filtre=n.filtre,e.requestUpdate()},l=()=>{a?W.mmDeplie.delete(n.slot):W.mmDeplie.add(n.slot),e.requestUpdate()};return P`
    <section class="rel-mm-branche slot--${n.slot} ${i} ${a?`depliee`:``}" style="grid-area:${n.slot}" data-slot=${n.slot} data-couleur=${xa(n.slot)}>
      <button class="rel-mm-label" @click=${c} title="Voir « ${n.label} » dans la Liste">
        ${Ca.has(n.slot)?vi(r):F}<span class="rel-mm-label-txt">${n.label}</span>
      </button>
      <div class="rel-mm-cartes">
        ${o.map(r=>ja(e,t,r,n.slot))}
        ${s>0?P`<button class="rel-mm-plus" @click=${l} title="Déplier les ${s} autres ici">+${s}</button>`:F}
        ${a?P`<button class="rel-mm-plus" @click=${l} title="Revenir à la vue synthétique">réduire</button>`:F}
      </div>
    </section>
  `}function ja(e,t,n,r){let i=e.technique(n.techniqueId);if(!n.presente||!i)return P`<div class="rel-mm-carte slot--${r} absente" title="Absente de la bibliothèque">absente</div>`;let a=hi(t,i);return P`
    <button class="rel-mm-carte slot--${r}" title=${n.note??F} @click=${()=>di(e,i.id)}>
      <span class="rel-mm-carte-media">${eo(e,i)}<span class="rel-mm-carte-badge">${vi(ba[r])}</span></span>
      <span class="rel-mm-carte-nom">${i.nom}${_i(e,i.id)}</span>
      ${a?P`<span class="rel-mm-carte-fam">${a}</span>`:F}
    </button>
  `}var Ma=6;function Na(e,t,n,r,i){return ci(t,n).filter(e=>r.garde(e)&&e.presente&&!i.has(e.techniqueId)).sort((e,t)=>(e.priorite??1/0)-(t.priorite??1/0)).slice(0,Ma)}function Pa(e,t,n){let r=W.exChemin[W.exChemin.length-1]?.id;(W.exChemin.length===0||r!==n.id&&W.exChemin[0].id!==n.id)&&(W.exChemin=[{id:n.id}],W.exIntent=null);let i=li.find(e=>e.id===W.exIntent);if(!i){let r=li.map(r=>({i:r,n:Na(e,t,n.id,r,new Set([n.id])).length})).filter(e=>e.n>0);return P`
      <div class="rel-ex">
        <p class="rel-ex-q">Que veux-tu faire avec <strong>${n.nom}</strong> ?</p>
        ${r.length===0?P`<p class="fil-vide">Aucun lien exploitable pour l'instant sur cette technique.</p>`:P`<div class="rel-ex-intents">
              ${r.map(({i:t,n:r})=>P`<button class="rel-ex-intent" @click=${()=>{W.exIntent=t.id,W.exChemin=[{id:n.id}],e.requestUpdate()}}>
                <span class="rel-ex-intent-t">${t.titre}</span>
                <span class="rel-ex-intent-s">${t.invite} · ${r}</span>
              </button>`)}
            </div>`}
      </div>
    `}let a=new Set(W.exChemin.map(e=>e.id)),o=W.exChemin[W.exChemin.length-1].id,s=Na(e,t,o,i,a);return P`
    <div class="rel-ex">
      <div class="rel-ex-tete">
        <span class="rel-ex-obj">${i.titre}</span>
        <button class="rel-ex-changer" @click=${()=>{W.exIntent=null,e.requestUpdate()}}>Changer d'objectif</button>
      </div>

      <ol class="rel-ex-chemin">
        ${W.exChemin.map((t,n)=>P`
          ${n>0?P`<li class="rel-ex-pourquoi">${t.note??`—`}</li>`:F}
          <li class="rel-ex-etape ${n===W.exChemin.length-1?`courant`:``}">
            <button class="rel-ex-nom" @click=${()=>e.ouvrirFiche(t.id)} title="Ouvrir la fiche">${e.technique(t.id)?.nom??`?`}</button>
          </li>
        `)}
      </ol>

      <div class="rel-ex-actions">
        ${W.exChemin.length>1?P`<button class="rel-ex-ctrl" @click=${()=>{W.exChemin=W.exChemin.slice(0,-1),di(e,W.exChemin[W.exChemin.length-1].id)}}>← Revenir</button>`:F}
        ${W.exChemin.length>=2?P`<button class="rel-ex-ctrl principal" @click=${()=>Fa(e)}>Enregistrer comme composition</button>`:F}
      </div>

      ${s.length?P`
            <p class="rel-ex-label">Étape suivante</p>
            <div class="rel-ex-suivants">
              ${s.map(t=>P`<button class="rel-ex-cand" @click=${()=>{W.exChemin=[...W.exChemin,t.note===void 0?{id:t.techniqueId}:{id:t.techniqueId,note:t.note}],di(e,t.techniqueId)}}>
                <span class="rel-ex-cand-nom">${e.technique(t.techniqueId)?.nom??`?`}${_i(e,t.techniqueId)}</span>
                ${t.note?P`<span class="rel-ex-cand-note">${t.note}</span>`:F}
              </button>`)}
            </div>`:P`<p class="fil-vide rel-ex-fin">Fin de piste — aucune suite pour cet objectif. Reviens en arrière ou change d'objectif.</p>`}
    </div>
  `}function Fa(e){let t=W.exChemin.map(t=>e.technique(t.id)?.nom??`?`).join(` → `),n=W.exChemin.map(e=>e.note===void 0?{techniqueId:e.id}:{techniqueId:e.id,consigne:e.note});e.creerCompositionDepuisEtapes(t,n)}var q={hydrate:!1,typeId:``,sourceId:null,sourceRequete:``,cibleId:null,cibleRequete:``,note:``,priorite:void 0};function Ia(){q.hydrate=!1}function La(e){let t=e.bibliotheque,n=e.editionLien,r=n.cibleId!==void 0&&n.typeId!==void 0;if(!q.hydrate){q.hydrate=!0,q.sourceId=n.sourceId,q.sourceRequete=``,q.cibleId=n.cibleId??null,q.cibleRequete=``,q.typeId=n.typeId??n.typePrefere??t.typesRelation[0]?.id??``;let e=r?t.techniques.find(e=>e.id===n.sourceId)?.relations.find(e=>e.type===n.typeId&&e.cibleId===n.cibleId):void 0;q.note=e?.note??``,q.priorite=e?.priorite}let i=()=>{e.editionLien=null,e.requestUpdate()},a=q.sourceId?e.technique(q.sourceId):void 0,o=q.cibleId?e.technique(q.cibleId):void 0,s=!!a&&!!o&&q.typeId!==``&&a.id!==o.id,c=async()=>{if(!s||!a||!o)return;let t=q.note.trim(),c;c=r?await e.modifierRelation(n.sourceId,n.cibleId,n.typeId,{type:q.typeId,note:t===``?null:t,priorite:q.priorite??null}):await e.ajouterRelation(a.id,{type:q.typeId,cibleId:o.id,...t===``?{}:{note:t},...q.priorite===void 0?{}:{priorite:q.priorite}}),c&&i()},l=()=>{confirm(`Retirer ce lien ? Les deux lectures (directe et inverse) disparaissent.`)&&e.retirerRelation(n.sourceId,n.cibleId,n.typeId).then(()=>i())},u=(n,r,i,a,o,s)=>{if(r&&s)return P`<div class="lien-fixe"><b>${r.nom}</b>${hi(t,r)?P` <span class="lien-fixe-fam">· ${hi(t,r)}</span>`:F}</div>`;if(r)return P`<div class="lien-fixe">
        <b>${r.nom}</b>${hi(t,r)?P` <span class="lien-fixe-fam">· ${hi(t,r)}</span>`:F}
        <button class="chip-filtre" style="margin-left:auto" @click=${()=>{o(void 0)}}>changer</button>
      </div>`;let c=i.trim()?vt(t,i,6).filter(e=>e.id!==(n===`cible`?q.sourceId:q.cibleId)):[];return P`
      <div class="recherche" style="margin:4px 0 0">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.8-3.8"/></svg>
        <input type="search" placeholder=${n===`source`?`Technique de départ…`:`Technique liée…`} .value=${i}
               aria-label=${n===`source`?`Chercher la technique de départ`:`Chercher la technique liée`}
               @input=${t=>{a(t.target.value),e.requestUpdate()}}>
      </div>
      ${c.length?P`<div class="chips-filtres" style="padding:6px 0 0">
            ${c.map(t=>P`<button class="chip-filtre" @click=${()=>{o(t),e.requestUpdate()}}>${t.nom}</button>`)}
          </div>`:F}
    `};return P`
    <div class="voile" @click=${i}></div>
    <div class="feuille" role="dialog" aria-modal="true" tabindex="-1" aria-label=${r?`Modifier le lien`:`Nouveau lien`}>
      <div class="prise"></div>
      <h2>${r?`Modifier le lien`:`Nouveau lien`}</h2>
      <div class="geste">La lecture inverse est automatique — la raison décrit le lien, elle s'affiche dans les deux sens.</div>

      <div class="section-titre" style="padding:10px 0 4px">Depuis</div>
      ${u(`source`,a,q.sourceRequete,e=>{q.sourceRequete=e},e=>{q.sourceId=e?e.id:null,q.sourceRequete=``},r||n.sourceId!==null)}

      <div class="section-titre" style="padding:12px 0 4px">Type de lien</div>
      <div class="chips-filtres" style="padding:0">
        ${t.typesRelation.map(t=>P`<button class="chip-filtre ${q.typeId===t.id?`actif`:``}"
          @click=${()=>{q.typeId=t.id,e.requestUpdate()}}>${t.libelle}${t.symetrique?` ⇄`:``}</button>`)}
      </div>

      <div class="section-titre" style="padding:12px 0 4px">Vers</div>
      ${u(`cible`,o,q.cibleRequete,e=>{q.cibleRequete=e},e=>{q.cibleId=e?e.id:null,q.cibleRequete=``},r)}

      <div class="section-titre" style="padding:12px 0 4px">Raison <span style="font-weight:400;opacity:.7">(facultatif)</span></div>
      <textarea class="champ-note" style="min-height:64px" placeholder="Pourquoi ce lien ? (ex. : continuation directe lorsque le fauchage reste engagé…)"
        .value=${q.note} aria-label="Raison du lien"
        @input=${e=>{q.note=e.target.value}}></textarea>

      <div class="section-titre" style="padding:12px 0 4px">Priorité <span style="font-weight:400;opacity:.7">(1 = montrée en premier)</span></div>
      <div class="chips-filtres" style="padding:0">
        ${[1,2,3,4,5].map(t=>P`<button class="chip-filtre ${q.priorite===t?`actif`:``}"
          @click=${()=>{q.priorite=q.priorite===t?void 0:t,e.requestUpdate()}}>${t}</button>`)}
        <button class="chip-filtre ${q.priorite===void 0?`actif`:``}"
          @click=${()=>{q.priorite=void 0,e.requestUpdate()}}>aucune</button>
      </div>

      <div class="actions" style="margin-top:14px">
        ${r?P`<button class="bouton danger-lien" @click=${l}>Retirer ce lien</button>`:F}
        <button class="bouton" @click=${i}>Annuler</button>
        <button class="bouton principal" ?disabled=${!s} @click=${()=>void c()}>${r?`Enregistrer`:`Ajouter`}</button>
      </div>
    </div>
  `}function Ra(e,t,n){let r=n.directe?t:n.techniqueId,i=n.directe?n.techniqueId:t;e.ouvrirEditionLien(r,i,n.typeId)}function za(e,t,n,r,i){let a=e.technique(n.techniqueId);if(!n.presente||!a)return P`<div class="rel-ligne absente"><span class="rel-ligne-nom">absente de la bibliothèque</span></div>`;let o=hi(t,a);return P`
    <div class="rel-ligne-conteneur">
      <button class="rel-ligne" @click=${()=>r(a.id)}>
        <span class="rel-ligne-media">${eo(e,a)}</span>
        <span class="rel-ligne-corps">
          <span class="rel-ligne-nom">${a.nom}${_i(e,a.id)}</span>
          ${o?P`<span class="rel-ligne-fam">${o}</span>`:F}
        </span>
        ${n.note?P`<span class="rel-ligne-note">${n.note}</span>`:F}
        <span class="rel-ligne-fleche">›</span>
      </button>
      ${i?P`<button class="rel-ligne-editer" aria-label="Modifier ce lien" title="Modifier ce lien"
            @click=${e=>{e.stopPropagation(),i()}}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>
          </button>`:F}
    </div>
  `}function Ba(e,t,n){let r=e.techniqueCentreRelations();return za(e,t,n,t=>{W.filtre=null,di(e,t)},r?()=>Ra(e,r,n):void 0)}var Va=2;function Ha(e,t,n){let r=ci(t,n.id);if(r.length===0)return P`
      <div class="liaisons relations">
        <h2 class="section-titre" style="padding:12px 0 6px">Relations</h2>
        <button class="action-douce rel-fiche-lien" @click=${()=>e.ouvrirEditionLien(n.id)}>
          ＋ Ajouter un lien <span>relie cette technique à une autre</span>
        </button>
      </div>`;let i=bi(r),a=i.filter(e=>e.role!==`context`),o=i.filter(e=>e.role===`context`),s=r=>P`
    <section class="rel-groupe ${gi(r.role)}">
      <header class="rel-groupe-tete">${vi(r.role)}<span>${r.libelle}</span><span class="rel-groupe-n">${r.liste.length}</span></header>
      ${xi(e,r.liste).slice(0,Va).map(r=>za(e,t,r,t=>e.ouvrirFiche(t),()=>Ra(e,n.id,r)))}
    </section>`;return P`
    <div class="liaisons relations">
      <h2 class="section-titre" style="padding:12px 0 6px">Relations · ${r.length}</h2>
      <div class="rel-fiche-listes">
        ${a.map(s)}
      </div>
      ${o.length?P`<div class="rel-fiche-contexte">
            <div class="rel-fiche-contexte-titre">Présente dans</div>
            ${o.map(s)}
          </div>`:F}
      <button class="action-douce rel-fiche-lien" @click=${()=>e.ouvrirEditionLien(n.id)}>
        ＋ Ajouter un lien <span>type, technique liée, raison, priorité</span>
      </button>
      <button class="action-douce rel-fiche-toutes" @click=${()=>e.ouvrirRelationsVisuelle(n.id,`liste`)}>
        Voir toutes les relations <span>(${r.length})</span>
      </button>
    </div>
  `}function Ua(e){let t=Math.max(0,Math.round(e)),n=Math.floor(t/60),r=t%60;if(n===0)return`${r} seconde${r>1?`s`:``}`;let i=`${n} minute${n>1?`s`:``}`;return r===0?i:`${i} ${r}`}function Wa(e,t){return e>=60&&t===Math.round(e/2)?`mi-temps`:e>40&&t===30?`30 secondes`:e>12&&t===10?`10 secondes`:null}function Ga(e,t){return e.compositions.filter(e=>e.blocs.some(e=>e.type===`technique`&&e.techniqueId===t))}function Ka(e,t=`personnel`,n){return{id:Qe(),nom:e,provenance:t,creeLe:new Date().toISOString(),...n?{type:n}:{},blocs:[]}}function qa(e,t={}){return{id:Qe(),type:e,...t.techniqueId===void 0?{}:{techniqueId:t.techniqueId},...t.texte===void 0?{}:{texte:t.texte},...t.consigne===void 0?{}:{consigne:t.consigne},...t.dureeSec===void 0?{}:{dureeSec:t.dureeSec},medias:[]}}function Ja(e,t,n){if(t===n)return;let r=e.blocs.findIndex(e=>e.id===t);if(r<0)return;let[i]=e.blocs.splice(r,1),a=e.blocs.findIndex(e=>e.id===n);if(a<0){e.blocs.splice(r,0,i);return}e.blocs.splice(a,0,i)}var Ya=P`<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.8-3.8"/></svg>`;function Xa(e,t,n){let r=n.value.trim();if(!r)return;let i=It(e.bibliotheque,t.id,r).exacte;i&&!confirm(`« ${i.nom} » existe déjà dans ${t.nom}.\nCréer quand même une technique distincte ?`)||(e.creerTechnique(t.id,r),n.value=``)}function Za(){return P`<header class="marque">
    <img class="marque-logo" src="./movenso-mark-sombre.svg" width="40" height="40" alt="" aria-hidden="true">
    <div style="flex:1">
      <div class="nom">Movenso</div>
      <div class="devise">Ta mémoire du mouvement.</div>
    </div>
  </header>`}function Qa(e){if(e===`local`)return`Mon contenu`;let t=e.replace(/^pack-/,``).replaceAll(`-`,` `);return t.charAt(0).toUpperCase()+t.slice(1)}function $a(e){let t=e.attribution?.trim(),n=e.origine?Qa(Ie(e)):void 0;return t&&n&&n.length>t.length&&n.toLowerCase().includes(t.toLowerCase())?n:t??n??`Moi`}function eo(e,t,n){let r=P`<span class="vignette-initiale">${t.nomTraditionnel?.charAt(0)??t.nom.charAt(0)}</span>`,i=e=>e.target.style.display=`none`;if(t.couverture?.type===`image`)return P`<span class="vignette">${r}<img loading="lazy" src=${t.couverture.dataUrl} alt="" @error=${i}></span>`;let a;if(t.couverture?.type===`media`){let n=t.couverture.mediaId;a=e.bibliotheque.contributions.filter(e=>e.techniqueId===t.id).flatMap(e=>e.medias).find(e=>e.id===n)}let o=e.bibliotheque.contributions.filter(e=>e.techniqueId===t.id&&e.provenance!==`personnel`).flatMap(e=>e.medias.map(t=>({media:t,source:Ie(e)}))).filter(e=>e.media.type===`plateforme`&&e.media.service===`youtube`),s=a??(n?o.find(e=>e.source===n)?.media:void 0)??o[0]?.media;return P`<span class="vignette">
    ${r}
    ${s&&s.type===`plateforme`&&s.service===`youtube`&&pt(s.ref)?P`<img loading="lazy" src="https://img.youtube.com/vi/${s.ref}/mqdefault.jpg" alt="" @error=${i}>`:F}
  </span>`}function to(e){return P`<span class="puce-niveau" style="background:${e.couleur?e.couleur2?`linear-gradient(90deg, ${e.couleur} 50%, ${e.couleur2} 50%)`:e.couleur:`var(--trait)`}" title=${e.nom}></span>`}function no(e){let t=new Map;for(let n of e)t.has(n.id)||t.set(n.id,n);return[...t.values()]}function ro(e){return e.nom.trim().toLowerCase().replace(/\s+/g,` `)}function io(e){let t=new Set;return e.filter(e=>{let n=ro(e);return t.has(n)?!1:(t.add(n),!0)})}function ao(e){return{familleParId:new Map(e.disciplines.flatMap(e=>e.familles).map(e=>[e.id,e])),niveauParId:new Map(e.disciplines.flatMap(e=>e.niveaux).map(e=>[e.id,e]))}}function oo(e){return P`<svg width="20" height="20" viewBox="0 0 24 24" fill=${e?`currentColor`:`none`}
    stroke="currentColor" stroke-width="2" aria-hidden="true">
    <path d="M12 20.5s-7.2-4.6-9.6-9C1 8.8 2.4 5.5 5.6 5.5c2 0 3.2 1.1 4.4 2.7 1.2-1.6 2.4-2.7 4.4-2.7 3.2 0 4.6 3.3 3.2 6-2.4 4.4-9.6 9-9.6 9Z"/>
  </svg>`}function so(e,t,n,r){let i=Ie(t),a=e.estFavori(t.id);return P`<div class="carte-technique">
    <button class="carte-ouvrir" @click=${()=>e.ouvrirFiche(t.id)}>
      <span class="carte-media">${eo(e,t,i)}</span>
      <span class="carte-nom">${t.nom}</span>
      ${t.nomTraditionnel?P`<span class="carte-jp jp">${t.nomTraditionnel}</span>`:F}
      ${t.niveauxIds.length?P`<span class="carte-sous">
            ${t.niveauxIds.map(e=>{let t=r.get(e);return t?P`<span class="carte-niveau">${to(t)}${t.nom}</span>`:F})}
          </span>`:F}
    </button>
    <button class="coeur ${a?`actif`:``}" aria-pressed=${a}
      aria-label=${a?`Retirer des favoris`:`Ajouter aux favoris`} title=${a?`Retirer des favoris`:`Ajouter aux favoris`}
      @click=${n=>{n.stopPropagation(),e.basculerFavori(t.id)}}>${oo(a)}</button>
  </div>`}function co(e){let t=e.preferences.densiteBibliotheque;return t?`grid-template-columns:repeat(${t},1fr)`:``}function lo(e,t){let n=e.bibliotheque,r=e.filtres,{familleParId:i,niveauParId:a}=ao(n),o=t=>e.majFiltres({...r,...t}),s=(e,t)=>o({[e]:r[e]===t?null:t}),c=t=>{let i=t?n.disciplines.filter(e=>e.id===t):n.disciplines,o=new Set(i.flatMap(e=>e.familles.map(e=>e.id))),s=new Set(n.techniques.filter(e=>!t||e.disciplineId===t).map(Ie)),c=r.niveauId?a.get(r.niveauId):void 0,l=c?ro(c):null,u=l?i.flatMap(e=>e.niveaux).find(e=>ro(e)===l)?.id??null:null;e.majFiltres({...r,disciplineId:t,familleId:r.familleId&&o.has(r.familleId)?r.familleId:null,niveauId:u,source:r.source&&s.has(r.source)?r.source:null})},l=t??r.disciplineId??null,u=n.techniques.filter(e=>!l||e.disciplineId===l),d=new Set;for(let e of u)d.add(Ie(e));let f=l?n.disciplines.filter(e=>e.id===l):n.disciplines,p=no(f.flatMap(e=>e.familles)).sort((e,t)=>(e.ordre??0)-(t.ordre??0)),m=io(f.flatMap(e=>e.niveaux).sort((e,t)=>(e.ordre??0)-(t.ordre??0))),h=r.niveauId?a.get(r.niveauId):void 0,g=h?ro(h):null,_=g?new Set(f.flatMap(e=>e.niveaux).filter(e=>ro(e)===g).map(e=>e.id)):null,v=e=>o({niveauId:g===ro(e)?null:e.id}),y=(r.texte.trim()?vt({...n,techniques:u},r.texte,999):u).filter(e=>!r.familleId||e.familleId===r.familleId).filter(e=>!_||e.niveauxIds.some(e=>_.has(e))).filter(e=>!r.source||Ie(e)===r.source).filter(t=>!r.favorisSeuls||e.estFavori(t.id)).sort((e,t)=>e.nom.localeCompare(t.nom,`fr`)),b=!t&&r.disciplineId!==null||r.niveauId!==null||r.familleId!==null||r.source!==null||r.favorisSeuls||r.texte.trim()!==``,x=()=>e.majFiltres({disciplineId:t?r.disciplineId:null,niveauId:null,familleId:null,source:null,favorisSeuls:!1,texte:``}),S=!t&&n.disciplines.length>=1?P`<div class="chips-filtres defilable" aria-label="Disciplines">
          <button class="chip-filtre ${r.disciplineId===null?`actif`:``}"
            @click=${()=>c(null)}>Toutes</button>
          ${n.disciplines.map(e=>P`<button class="chip-filtre chip-discipline ${r.disciplineId===e.id?`actif`:``}"
              @click=${()=>c(r.disciplineId===e.id?null:e.id)}>${e.nom}</button>`)}
        </div>`:F;return{corps:P`
    <div class="recherche-ligne">
      <div class="recherche">
        ${Ya}
        <input type="search" placeholder="Rechercher une technique…" autocomplete="off" .value=${r.texte}
               aria-label="Rechercher une technique"
               @input=${e=>o({texte:e.target.value})}>
      </div>
    </div>
    ${S}
    ${p.length>1?P`<div class="chips-filtres defilable" aria-label="Catégories">
          ${p.map(e=>P`<button class="chip-filtre ${r.familleId===e.id?`actif`:``}"
              @click=${()=>s(`familleId`,e.id)}>${e.nom}</button>`)}
        </div>`:F}
    ${m.length?P`<div class="chips-filtres defilable" aria-label="Niveaux">
          ${m.map(e=>P`<button class="chip-filtre ${g===ro(e)?`actif`:``}"
              @click=${()=>v(e)}>${to(e)}${e.nom}</button>`)}
        </div>`:F}
    ${b?P`<div class="chips-filtres">
          <button class="chip-filtre reinitialiser" @click=${x}>✕ Réinitialiser les filtres</button>
        </div>`:F}

    ${y.length?P`<div class="grille" style=${co(e)}>${y.map(t=>so(e,t,i,a))}</div>`:u.length===0?uo(e,t?n.disciplines.find(e=>e.id===t)?.nom:void 0):P`<p class="fil-vide sans-resultat" style="padding-top:14px">Aucune technique ne correspond à ces filtres.</p>`}
  `,nombre:y.length}}function uo(e,t){return t?P`<div class="discipline-vide">
      <p class="fil-vide" style="padding-top:14px">« ${t} » ne contient encore aucune technique.</p>
      <button class="bouton principal" style="margin:8px 18px 0; align-self:flex-start"
        @click=${e=>{let t=e.target.closest(`.ecran`)?.querySelector(`.actions-bibliotheque .creation-discipline input`);t?.scrollIntoView({block:`center`}),t?.focus()}}>Créer la première technique</button>
      <button class="action-douce" style="margin-top:6px" @click=${()=>e.choisirPackAImporter()}>
        ⤓ Importer un pack <span>(il peut compléter « ${t} » ou en installer d'autres)</span>
      </button>
    </div>`:P`<p class="fil-vide sans-resultat" style="padding-top:14px">Aucune technique pour l'instant — importe un pack ou capture la tienne.</p>`}function fo(e){let t=e.bibliotheque,n=t.disciplines.length===0&&t.techniques.length===0;return P`
    <div class="ecran">
      ${Za()}
      ${n?P`
            <p class="fil-vide" style="padding:4px 0 2px">
              <b>Movenso est ta mémoire du mouvement</b> : tes techniques, tes repères
              et tes séances, dans une bibliothèque à toi.
            </p>
            <p class="fil-vide" style="padding:0 0 10px">
              Elle démarre vide, par choix. Importe un pack ou crée ta première technique.
            </p>
            <button class="action-douce" @click=${()=>e.choisirPackAImporter()}>
              ⤓ Importer un pack <span>fichier .movpack</span>
            </button>
            <button class="action-douce" @click=${()=>{e.ajouter={creation:!0},e.requestUpdate()}}>
              ＋ Créer ta première technique <span>son nom et sa discipline suffisent</span>
            </button>
            <p class="fil-vide" style="padding:10px 0 0; font-size:12px; opacity:.8">
              Tes données et vidéos restent sur cet appareil — pense à créer une
              sauvegarde de temps en temps (Plus › Sauvegardes), c'est ton filet.
            </p>
          `:lo(e).corps}
    </div>
  `}var po={texte:``,disciplineId:null,familleId:null,niveauId:null};function mo(e){let t=e.bibliotheque,{familleParId:n,niveauParId:r}=ao(t),i=e.techniquesFavorites(),a=P`<header class="marque"><div style="flex:1"><div class="nom">Favoris</div>
    <div class="devise">Tes techniques marquées, à portée de main.</div></div></header>`;if(i.length===0)return P`<div class="ecran">${a}
      <p class="fil-vide" style="padding:10px 18px">Aucun favori pour le moment. Ajoute-en depuis la Bibliothèque.</p></div>`;let o=po,s=t=>{Object.assign(po,t),e.requestUpdate()},c=(e,t)=>s({[e]:o[e]===t?null:t}),l=t.disciplines.filter(e=>i.some(t=>t.disciplineId===e.id)),u=[...new Set(i.map(e=>e.familleId).filter(Boolean))].map(e=>n.get(e)).filter(e=>!!e),d=new Set(i.flatMap(e=>e.niveauxIds)),f=io([...d].map(e=>r.get(e)).filter(e=>!!e)),p=o.niveauId?r.get(o.niveauId):void 0,m=p?ro(p):null,h=m?new Set([...d].filter(e=>{let t=r.get(e);return t?ro(t)===m:!1})):null,g=e=>s({niveauId:m===ro(e)?null:e.id}),_=(o.texte.trim()?vt({...t,techniques:i},o.texte,999):i).filter(e=>!o.disciplineId||e.disciplineId===o.disciplineId).filter(e=>!o.familleId||e.familleId===o.familleId).filter(e=>!h||e.niveauxIds.some(e=>h.has(e))).sort((e,t)=>e.nom.localeCompare(t.nom,`fr`)),v=o.texte.trim()!==``||o.disciplineId||o.familleId||o.niveauId;return P`
    <div class="ecran">
      ${a}
      <div class="recherche-ligne">
        <div class="recherche">${Ya}
          <input type="search" placeholder="Rechercher dans mes favoris…" autocomplete="off" .value=${o.texte}
                 aria-label="Rechercher dans les favoris"
                 @input=${e=>s({texte:e.target.value})}></div>
      </div>
      ${l.length>1?P`<div class="chips-filtres" aria-label="Disciplines">
            ${l.map(e=>P`<button class="chip-filtre ${o.disciplineId===e.id?`actif`:``}"
              @click=${()=>c(`disciplineId`,e.id)}>${e.nom}</button>`)}
          </div>`:F}
      ${u.length>1?P`<div class="chips-filtres" aria-label="Catégories">
            ${u.map(e=>P`<button class="chip-filtre ${o.familleId===e.id?`actif`:``}"
              @click=${()=>c(`familleId`,e.id)}>${e.nom}</button>`)}
          </div>`:F}
      ${f.length>1?P`<div class="chips-filtres" aria-label="Niveaux">
            ${f.map(e=>P`<button class="chip-filtre ${m===ro(e)?`actif`:``}"
              @click=${()=>g(e)}>${to(e)}${e.nom}</button>`)}
          </div>`:F}
      ${v?P`<div class="chips-filtres"><button class="chip-filtre reinitialiser"
            @click=${()=>s({texte:``,disciplineId:null,familleId:null,niveauId:null})}>✕ Réinitialiser</button></div>`:F}
      ${_.length?P`<div class="grille">${_.map(t=>so(e,t,n,r))}</div>`:P`<p class="fil-vide sans-resultat" style="padding-top:14px">Aucun favori ne correspond à ces filtres.</p>`}
    </div>
  `}function ho(e,t){let n=e.bibliotheque.disciplines.find(e=>e.id===t);if(!n)return P`<div class="ecran"><p class="fil-vide">Discipline introuvable.</p></div>`;let{corps:r,nombre:i}=lo(e,t);return P`
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
                 @keydown=${t=>{t.key===`Enter`&&Xa(e,n,t.target)}}>
          <button class="bouton principal"
            @click=${t=>{let r=t.target.parentElement.querySelector(`input`);Xa(e,n,r)}}>Créer</button>
        </div>
      </div>
    </div>
  `}function go(e,t){return t?e.bibliotheque.disciplines.flatMap(e=>e.familles).find(e=>e.id===t)?.nom??``:``}function _o(e,t){let n={referentiel:0,enseignement:1,ressource:2,personnel:3};return e.bibliotheque.contributions.filter(e=>e.techniqueId===t.id).sort((e,t)=>(n[e.provenance]??9)-(n[t.provenance]??9)).flatMap(e=>e.medias.map(t=>({media:t,contribution:e})))}function vo(e,t){let n=e.bibliotheque,r=e.technique(t);if(!r)return P`<div class="ecran"><p class="fil-vide">Technique introuvable.</p></div>`;let i=n.disciplines.find(e=>e.id===r.disciplineId),a={referentiel:1,enseignement:2,ressource:3,personnel:4},o=n.contributions.filter(e=>e.techniqueId===r.id&&e.provenance!==`personnel`).sort((e,t)=>(a[e.provenance]??9)-(a[t.provenance]??9)),s=o.find(e=>(e.description??``).trim()||e.pointsCles.length)??o[0],c=n.contributions.filter(e=>e.techniqueId===r.id&&e.provenance===`personnel`&&!e.attribution).sort((e,t)=>t.creeLe.localeCompare(e.creeLe)),l=Ga(n,r.id),u=_o(e,r),d=u.find(e=>e.media.id===r.mediaPrincipalId)??u[0],f=u.find(t=>t.media.id===e.mediaAffiche)??d,p=(e,t)=>e.media.label??`Vidéo ${t+1}`,m=e.estFavori(r.id),h=e.editionFiche,g=(s?.pointsCles??[]).join(`
`);return P`
    <div class="ecran">
      <div class="barre fiche-barre">
        <span class="contexte">${r.nom}</span>
        <div class="fiche-actions">
          ${h?P`<button class="bouton-icone actif" aria-label="Enregistrer" title="Enregistrer et fermer l'édition"
                @click=${()=>e.validerEditionFiche()}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7"/></svg>
              </button>`:P`<button class="bouton-icone" aria-label="Modifier" title="Modifier"
                @click=${()=>e.autoriser(`modification`,`Saisis le PIN pour modifier « ${r.nom} ».`,()=>{e.entrerEditionFiche(r.id)})}>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true"><path d="M4 20h4L18.5 9.5a2.1 2.1 0 0 0-3-3L5 17v3z"/><path d="M13.5 6.5l3 3"/></svg>
              </button>`}
          <button class="bouton-icone etoile-favori ${m?`actif`:``}" aria-pressed=${m}
            aria-label=${m?`Retirer des favoris`:`Ajouter aux favoris`}
            title=${m?`Retirer des favoris`:`Ajouter aux favoris`}
            @click=${()=>void e.basculerFavori(r.id)}>${oo(m)}</button>
          ${h||!e.preferences.vueRelationBeta?F:P`<button class="bouton-icone" aria-label="Voir en graphe" title="Voir les relations dans la Carte (bêta)"
                @click=${()=>e.ouvrirRelationsVisuelle(r.id,`mindmap`)}>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true"><circle cx="12" cy="5" r="2.3"/><circle cx="5" cy="18" r="2.3"/><circle cx="19" cy="18" r="2.3"/><path d="M12 7.3 6 16M12 7.3 18 16M6.5 18h11"/></svg>
              </button>`}
          ${h?F:P`<button class="bouton-icone" aria-label="Partager" title="Partager"
                @click=${()=>void e.demanderPartageTechnique(r.id)}>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true"><circle cx="18" cy="5" r="2.6"/><circle cx="6" cy="12" r="2.6"/><circle cx="18" cy="19" r="2.6"/><path d="M8.3 10.7l7.4-4.3M8.3 13.3l7.4 4.3"/></svg>
              </button>`}
          ${h?P`<button class="bouton-icone" aria-label="Annuler l'édition" title="Annuler l'édition (défait les modifications)"
                @click=${()=>void e.annulerEditionFiche()}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>
              </button>`:P`<button class="bouton-icone" aria-label="Fermer" title="Fermer" @click=${()=>e.retour()}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>
              </button>`}
        </div>
      </div>

      ${h?bo(e,r):yo(e,r,i)}

      ${h?F:wo(r)}

      ${h?xo(e,r,u):f?P`<div class="media-principal">
              ${u.length>1?P`<div class="chips-filtres media-choix" aria-label="Médias de la technique">
                    ${u.map((t,n)=>P`<button class="chip-filtre ${t.media.id===f.media.id?`actif`:``}"
                        @click=${()=>{e.mediaAffiche=t.media.id,e.requestUpdate()}}>${p(t,n)}</button>`)}
                  </div>`:F}
              ${To(e,f.media,f.contribution.attribution)}
            </div>`:P`<div class="media-principal media-absent">
              <div class="fil-vide" style="padding:0 0 8px">Aucun média pour l'instant — le geste se filme, se choisit ou se lie.</div>
              <button class="action-douce" @click=${()=>e.ajoutMedia={techniqueId:r.id,provenance:`personnel`}}>
                🎞 Ajouter un média <span>(filmer, choisir un fichier ou coller un lien)</span>
              </button>
            </div>`}

      ${s&&((s.description??``).trim()||h)?P`<section class="bloc-lecture">
            <h2 class="section-titre">Description</h2>
            ${h?P`<textarea class="champ-note" style="min-height:80px" .value=${s.description??``}
                  placeholder="Décris la technique…" aria-label="Description"
                  @change=${t=>void e.amenderContribution(s.id,{description:t.target.value})}></textarea>`:P`<p>${s.description}</p>`}
            ${s.modifiePar&&s.modifiePar!==`moi`?P`<div class="geste modifie-par" style="padding-top:4px">Modifié par ${s.modifiePar}</div>`:F}
          </section>`:F}

      ${s&&(s.pointsCles.length||h)?P`<section class="bloc-lecture">
            <h2 class="section-titre">Points clés</h2>
            ${h?P`<textarea class="champ-note" style="min-height:80px" .value=${g}
                  placeholder="Un point clé par ligne" aria-label="Points clés"
                  @change=${t=>void e.amenderContribution(s.id,{pointsCles:t.target.value.split(`
`)})}></textarea>`:P`<ol class="points">${s.pointsCles.map(e=>P`<li>${e}</li>`)}</ol>`}
          </section>`:F}

      ${s?.variantes?P`<section class="bloc-lecture"><p><em>${s.variantes}</em></p></section>`:F}

      ${e.preferences.vueRelationBeta?Ha(e,n,r):F}
      ${l.length?P`<div class="liaisons">
            <h2 class="section-titre" style="padding:12px 0 0">Utilisée dans · ${l.length} composition${l.length>1?`s`:``}</h2>
            <div class="liaison-groupe">
              ${l.map(t=>P`<button class="puce-liaison" @click=${()=>e.ouvrirComposition(t.id)}>${t.nom}</button>`)}
            </div>
          </div>`:F}

      <section class="bloc-lecture commentaire">
        <h2 class="section-titre">Commentaire</h2>
        ${e.pinConfigure?P`<p class="commentaire-zone">${c[0]?.description?P`${c[0].description}`:P`<span class="fil-vide">Aucune note.</span>`}</p>
              <div class="geste" style="padding-top:4px">🔒 Lecture seule — un PIN protège cet appareil.</div>`:P`<textarea class="champ-note commentaire-zone" style="min-height:72px" .value=${c[0]?.description??``}
              placeholder="Ta note, ton repère — juste pour toi" aria-label="Commentaire"
              @change=${t=>{let n=t.target.value;c[0]?e.majContribution(c[0].id,n):n.trim()&&e.ajouterNote(r.id,n)}}></textarea>`}
      </section>
    </div>
  `}function yo(e,t,n){let r=go(e,t.familleId);return P`
    <div class="fiche-entete">
      ${r?P`<div class="fiche-famille">${r}</div>`:F}
      <h1>${t.nom}</h1>
      ${t.nomTraditionnel?P`<div class="jp">${t.nomTraditionnel}</div>`:F}
    </div>
    ${t.niveauxIds.length?P`<div class="pastilles">
          ${t.niveauxIds.map(e=>{let t=n?.niveaux.find(t=>t.id===e);return t?P`<span class="pastille">${to(t)}${t.nom}</span>`:F})}
        </div>`:F}
  `}function bo(e,t){let n=e.bibliotheque,r=n.disciplines.find(e=>e.id===t.disciplineId);return P`
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
        ${n.disciplines.map(e=>P`<option value=${e.id} ?selected=${e.id===t.disciplineId}>${e.nom}</option>`)}
      </select>

      ${r?.familles.length?P`<label class="etiquette-champ" for="champ-categorie">Catégorie</label>
            <select id="champ-categorie" class="champ-edition"
              @change=${n=>{let r=n.target.value;e.majTechnique(t.id,{familleId:r||void 0})}}>
              <option value="" ?selected=${!t.familleId}>— aucune —</option>
              ${r.familles.map(e=>P`<option value=${e.id} ?selected=${e.id===t.familleId}>${e.nom}</option>`)}
            </select>`:F}

      ${r?.niveaux.length?P`<div class="etiquette-champ">Niveaux</div>
            <div class="niveaux-coches">
              ${r.niveaux.map(n=>P`<label class="niveau-coche">
                  <input type="checkbox" ?checked=${t.niveauxIds.includes(n.id)}
                    @change=${()=>void e.majTechnique(t.id,{niveauxIds:t.niveauxIds.includes(n.id)?t.niveauxIds.filter(e=>e!==n.id):[...t.niveauxIds,n.id]})}>
                  ${to(n)}<span>${n.nom}</span>
                </label>`)}
            </div>`:F}

    </div>
  `}function xo(e,t,n){return P`
    <div class="edition edition-medias">
      <div class="etiquette-champ">Médias</div>
      <button class="action-douce" @click=${()=>e.ajoutMedia={techniqueId:t.id,provenance:`personnel`}}>
        🎞 Ajouter un média <span>(filmer, choisir un fichier ou coller un lien)</span>
      </button>
      ${n.length===0?P`<p class="fil-vide" style="padding:6px 0">Aucun média — le geste se filme, se choisit ou se lie.</p>`:n.map(({media:r,contribution:i},a)=>So(e,t,r,i,a,n.length))}
      ${Co(e,t,n)}
    </div>
  `}function So(e,t,n,r,i,a){let o=n.id===t.mediaPrincipalId||!t.mediaPrincipalId&&i===0;return P`
    <div class="bloc-media-edition">
      <input class="champ-edition" .value=${n.label??``} placeholder="Titre de la vidéo" aria-label="Titre de la vidéo"
        @change=${t=>void e.majMediaLabel(n.id,t.target.value)}>
      ${To(e,n,r.attribution)}
      <div class="bloc-media-actions">
        ${a>1?o?P`<span class="badge-principal">✓ Vidéo principale</span>`:P`<button class="chip-filtre"
                @click=${()=>void e.majTechnique(t.id,{mediaPrincipalId:n.id}).then(()=>e.afficherToast(`Vidéo principale mise à jour ✓`))}>
                ★ Définir comme principale</button>`:F}
        <button class="bouton-retrait-media" aria-label="Retirer ce média"
          @click=${()=>void e.retirerMedia(t.id,n.id)}>🗑 Retirer</button>
      </div>
    </div>
  `}function Co(e,t,n){return P`
    <div class="etiquette-champ">Vignette</div>
    <div class="couverture-edition chips-filtres">
      <label class="chip-filtre couverture-import">
        🖼 Importer une image
        <input type="file" accept="image/*" hidden
          @change=${n=>{let r=n.target,i=r.files?.[0];r.value=``,i&&e.definirCouvertureImage(t.id,i)}}>
      </label>
      ${n.filter(({media:e})=>e.type===`plateforme`&&e.service===`youtube`).map(({media:n},r)=>P`<button class="chip-filtre ${t.couverture?.type===`media`&&t.couverture.mediaId===n.id?`actif`:``}"
          @click=${()=>void e.definirCouvertureMedia(t.id,n.id)}>Miniature ${n.label??`vidéo ${r+1}`}</button>`)}
      ${t.couverture?P`<button class="chip-filtre danger" @click=${()=>void e.retirerCouverture(t.id)}>Retirer la vignette</button>`:F}
    </div>
    ${t.couverture?.type===`image`?P`<div class="couverture-apercu"><img src=${t.couverture.dataUrl} alt="Vignette actuelle"></div>`:F}
  `}function wo(e){let t=e.alertes??[];return t.length?P`${t.map(e=>P`<div class="alerte alerte--${e.niveau}" role="note">
      <span class="alerte-icone" aria-hidden="true">⚠️</span>
      <div class="alerte-corps">
        <strong>${e.libelle}</strong>
        ${e.detail?P`<span class="alerte-detail">${e.detail}</span>`:F}
        ${e.reference?.url&&gt(e.reference.url)?P`<a class="alerte-ref" href=${gt(e.reference.url)} target="_blank" rel="noopener noreferrer"
              title=${`Quitte Movenso — ${_t(e.reference.url)??`lien externe`}`}>${e.reference.organisation??`Référence`}${e.reference.article?` · art. ${e.reference.article}`:``} ↗</a>`:e.reference?P`<span class="alerte-ref">${e.reference.organisation??`Référence`}${e.reference.article?` · art. ${e.reference.article}`:``}</span>`:F}
      </div>
    </div>`)}`:F}function To(e,t,n){let r=e.mediasDeplies.has(t.id),i=()=>{e.mediasDeplies=new Set([t.id]),document.querySelectorAll(`video`).forEach(e=>e.pause()),e.requestUpdate()};if(t.type===`plateforme`&&t.service===`youtube`)return pt(t.ref)?r?P`<div class="media-video"><iframe
            src="https://www.youtube-nocookie.com/embed/${t.ref}"
            title=${t.label??`Vidéo`} allow="encrypted-media; picture-in-picture" allowfullscreen></iframe></div>`:P`<button class="bouton-video" @click=${i}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="#fff" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>
          <span>${t.label??`Vidéo${n?` (${n})`:``}`} — lecture en ligne</span>
        </button>`:P`<span class="joint" title="Référence vidéo invalide">🔗 vidéo en ligne non vérifiable</span>`;if(t.type===`lien`){let e=gt(t.ref);return e?r?P`<div class="media-video"><video src=${e} controls playsinline
          @play=${e=>{document.querySelectorAll(`video`).forEach(t=>{t!==e.target&&t.pause()})}}></video></div>`:P`<button class="bouton-video" @click=${i}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="#fff" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>
          <span>${t.label??`Vidéo`} — lecture en ligne</span>
        </button>`:P`<span class="joint" title="Lien non https — jamais chargé">🔗 ${t.ref}</span>`}return P`<movenso-video-locale .app=${e} .mediaId=${t.id}></movenso-video-locale>`}var Eo=`0.9.0-rc.1`,Do=null;function Oo(e){(!Do||!Do.isConnected)&&(Do=document.createElement(`div`),Do.className=`annonce-lecteur`,Do.setAttribute(`role`,`status`),Do.setAttribute(`aria-live`,`polite`),document.body.append(Do)),Do.textContent=``,requestAnimationFrame(()=>{Do&&(Do.textContent=e)})}function ko(e,t,n,r){let i=r.ordre(),a=i.indexOf(t);if(a<0)return;let o=a+n;if(o<0||o>=i.length){Oo(`${r.nom(t)} est déjà en ${n<0?`première`:`dernière`} position.`);return}n<0?r.reordonner(t,i[o]):r.reordonner(i[o],t),r.enregistrer(),Oo(`${r.nom(t)}, position ${o+1} sur ${i.length}.`),e.requestUpdate()}function Ao(e,t,n,r){r.preventDefault(),r.stopPropagation(),e.reordreGlisse=t,e.requestUpdate();let i=t=>{if(!e.reordreGlisse)return;let r=(document.elementFromPoint(t.clientX,t.clientY)?.closest?.(`[data-glisser-id]`))?.getAttribute(`data-glisser-id`);r&&r!==e.reordreGlisse&&(n.reordonner(e.reordreGlisse,r),e.requestUpdate())},a=()=>{window.removeEventListener(`pointermove`,i),window.removeEventListener(`pointerup`,a),window.removeEventListener(`pointercancel`,a);let t=e.reordreGlisse!==null;e.reordreGlisse=null,t&&n.enregistrer(),e.requestUpdate()};window.addEventListener(`pointermove`,i),window.addEventListener(`pointerup`,a),window.addEventListener(`pointercancel`,a)}function jo(e,t,n,r){let i=r.key===`ArrowUp`||r.key===`ArrowLeft`?-1:+(r.key===`ArrowDown`||r.key===`ArrowRight`);i&&(r.preventDefault(),r.stopPropagation(),ko(e,t,i,n))}function Mo(e,t,n){return P`<button type="button" class="poignee-glisser"
    aria-label="Réordonner ${n.nom(t)} — glisser, ou flèches haut et bas"
    title="Glisser pour réorganiser (ou flèches au clavier)"
    @pointerdown=${r=>Ao(e,t,n,r)}
    @keydown=${r=>jo(e,t,n,r)}>⠿</button>`}function No(e,t,n){let r=n.ordre();if(r.length<2)return F;let i=r.indexOf(t),a=n.nom(t);return P`<span class="boutons-reordre">
    <button type="button" class="bouton-icone" aria-label="Monter ${a}" title="Monter"
      ?disabled=${i<=0} @click=${()=>ko(e,t,-1,n)}>▲</button>
    <button type="button" class="bouton-icone" aria-label="Descendre ${a}" title="Descendre"
      ?disabled=${i>=r.length-1} @click=${()=>ko(e,t,1,n)}>▼</button>
  </span>`}function Po(e,t){return[e,t].sort().join(`|`)}function Fo(e,t,n){if(Math.abs(e.length-t.length)>n)return n+1;let r=Array.from({length:t.length+1},(e,t)=>t);for(let i=1;i<=e.length;i++){let a=[i,...Array(t.length).fill(0)],o=a[0];for(let n=1;n<=t.length;n++){let s=e[i-1]===t[n-1]?0:1;a[n]=Math.min(r[n]+1,a[n-1]+1,r[n-1]+s),a[n]<o&&(o=a[n])}if(o>n)return n+1;r=a}return r[t.length]}function Io(e,t){let n=I(e),r=I(t);if(n===r)return!0;let i=Math.max(n.length,r.length);if(i<4)return!1;let a=Math.min(3,Math.max(1,Math.floor(i*.2)));return Fo(n,r,a)<=a}function Lo(e,t=[]){let n=new Set(t),r=[],i=new Map;for(let t of e.techniques)i.set(t.disciplineId,[...i.get(t.disciplineId)??[],t]);for(let e of i.values())for(let t=0;t<e.length;t++)for(let i=t+1;i<e.length;i++){let a=e[t],o=e[i];Ie(a)!==Ie(o)&&Io(a.nom,o.nom)&&(n.has(Po(a.id,o.id))||r.push({aId:a.id,bId:o.id}))}return r.sort((e,t)=>Po(e.aId,e.bId).localeCompare(Po(t.aId,t.bId))),r}function Ro(e,t,n){let r=t=>{let n=e.techniques.find(e=>e.id===t);if(!n)return null;let r=e.contributions.filter(e=>e.techniqueId===t&&e.provenance!==`personnel`);return{technique:n,source:Ie(n),description:r.map(e=>e.description??``).filter(Boolean).join(`

`),pointsCles:r.flatMap(e=>e.pointsCles),medias:r.flatMap(e=>e.medias),niveaux:n.niveauxIds,relations:n.relations.length}},i=r(t),a=r(n);return!i||!a?null:{a:i,b:a}}function zo(e){return e.sha256?`sha:${e.sha256}`:`${e.type}:${e.ref}`}function Bo(e,t,n,r){let i=structuredClone(e),a=i.techniques.find(e=>e.id===t),o=i.techniques.find(e=>e.id===n);if(!a||!o)throw Error(`Fusion impossible : identité introuvable`);if(a.disciplineId!==o.disciplineId)throw Error(`Fusion impossible : disciplines différentes`);let s=r.titre===`a`?a:o,c=e=>e===a.id?`a`:`b`,l=i.contributions.filter(e=>e.techniqueId===a.id&&e.provenance!==`personnel`),u=i.contributions.filter(e=>e.techniqueId===o.id&&e.provenance!==`personnel`),d=i.contributions.filter(e=>(e.techniqueId===a.id||e.techniqueId===o.id)&&e.provenance===`personnel`),f=new Set,p=e=>r.medias===`deux`||r.medias===e,m=e=>r.textes===`deux`||r.textes===e,h=[];for(let e of[...l,...u]){let t=c(e.techniqueId),n=p(t)?e.medias.filter(e=>{let t=zo(e);return f.has(t)?!1:(f.add(t),!0)}):[],r=m(t);if(!r&&n.length===0)continue;let i=structuredClone(e);i.techniqueId=a.id,i.medias=n,r||(delete i.description,i.pointsCles=[],delete i.variantes),h.push(i)}if(r.textes===`deux`){let e=h.filter(e=>e.provenance!==`personnel`);if(e.length>1){let t=e[0],n=[],r=[];for(let t of e){let e=(t.description??``).trim();e&&!n.includes(e)&&n.push(e);for(let e of t.pointsCles){let t=e.trim();t&&!r.includes(t)&&r.push(t)}}n.length?t.description=n.join(`

`):delete t.description,t.pointsCles=r;for(let n of e)n!==t&&(delete n.description,n.pointsCles=[],delete n.variantes)}}for(let e of d)e.techniqueId=a.id;a.nom=s.nom,s.nomTraditionnel===void 0?delete a.nomTraditionnel:a.nomTraditionnel=s.nomTraditionnel,s.familleId===void 0?delete a.familleId:a.familleId=s.familleId;let g=new Set;if(r.niveaux!==`b`)for(let e of a.niveauxIds)g.add(e);if(r.niveaux!==`a`)for(let e of o.niveauxIds)g.add(e);a.niveauxIds=[...g];let _=[],v=new Set,y=[...r.relations===`b`?[]:a.relations,...r.relations===`a`?[]:o.relations];for(let e of y){let t=e.cibleId===o.id?a.id:e.cibleId;if(t===a.id)continue;let n=`${e.type}|${t}`;v.has(n)||(v.add(n),_.push({...e,cibleId:t}))}a.relations=_;let b=new Set(h.flatMap(e=>e.medias.map(e=>e.id)));if(!a.mediaPrincipalId||!b.has(a.mediaPrincipalId)){let e=h.flatMap(e=>e.medias)[0];e?a.mediaPrincipalId=e.id:delete a.mediaPrincipalId}i.contributions=[...i.contributions.filter(e=>e.techniqueId!==a.id&&e.techniqueId!==o.id),...h,...d],i.techniques=i.techniques.filter(e=>e.id!==o.id);for(let e of i.techniques){if(e.id===a.id)continue;let t=new Set;e.relations=e.relations.map(e=>({...e,cibleId:e.cibleId===o.id?a.id:e.cibleId})).filter(n=>{if(n.cibleId===e.id)return!1;let r=`${n.type}|${n.cibleId}`;return t.has(r)?!1:(t.add(r),!0)})}i.favoris=[...new Set(i.favoris.map(e=>e===o.id?a.id:e))];for(let e of i.compositions)for(let t of e.blocs)t.type===`technique`&&t.techniqueId===o.id&&(t.techniqueId=a.id);return i.doublonsIgnores&&=i.doublonsIgnores.filter(e=>e!==Po(t,n)),Nt(i),i}function Vo(e,t){let n=structuredClone(e),r=(n.fusions??[]).findIndex(e=>e.fusionneeId===t);if(r<0)throw Error(`Défusion impossible : fusion introuvable`);let i=n.fusions[r],a=i.a.technique.id,o=i.b.technique.id;return n.techniques=n.techniques.filter(e=>e.id!==a),n.contributions=n.contributions.filter(e=>e.techniqueId!==a),n.techniques.push(structuredClone(i.a.technique),structuredClone(i.b.technique)),n.contributions.push(...i.a.contributions.map(e=>structuredClone(e)),...i.b.contributions.map(e=>structuredClone(e))),n.favoris=n.favoris.filter(e=>e!==a&&e!==o),i.a.etaitFavori&&n.favoris.push(a),i.b.etaitFavori&&n.favoris.push(o),n.fusions.splice(r,1),n.fusions.length===0&&delete n.fusions,Nt(n),n}var J=new Set;function Ho(e,t,n){let r=J.has(t);return P`<div class="encart-entete">
    <span class="titre-atelier">${e}</span>
    <button class="bouton-plus ${r?`actif`:``}" aria-label=${r?`Fermer la création dans ${e}`:`Ajouter dans ${e}`} aria-expanded=${r}
      @click=${()=>{r?J.delete(t):J.add(t),n.requestUpdate()}}>${r?`−`:`＋`}</button>
  </div>`}function Uo(e,t){return P`<div class="carte-atelier">
    <div class="encart-entete"><span class="titre-atelier">${e}</span></div>
    ${t}
  </div>`}function Wo(e){let t=e.bibliotheque;if(t.disciplines.length===0)return P`
      <div class="carte-atelier">
        ${Ho(`Disciplines`,`discipline`,e)}
        ${J.has(`discipline`)?ns(e):F}
        <p class="fil-vide" style="padding:6px 2px 0">Aucune discipline — touche ＋ pour en créer une, ou importe un pack.</p>
      </div>
    `;let n=e.disciplineGestion&&t.disciplines.some(t=>t.id===e.disciplineGestion)?e.disciplineGestion:t.disciplines[0].id,r=t.disciplines.find(e=>e.id===n),i={reordonner:(t,n)=>e.deplacerDisciplineVers(t,n),enregistrer:()=>void e.enregistrerReordre(),ordre:()=>t.disciplines.map(e=>e.id),nom:e=>t.disciplines.find(t=>t.id===e)?.nom??`la discipline`};return P`
    <div class="carte-atelier">
      ${Ho(`Disciplines`,`discipline`,e)}
      ${J.has(`discipline`)?ns(e):F}
      <div class="chips-glissables" aria-label="Disciplines">
        ${t.disciplines.map(n=>P`<span class="chip-glissable ${e.reordreGlisse===n.id?`glisse`:``}" data-glisser-id=${n.id}>
            ${t.disciplines.length>1?Mo(e,n.id,i):F}
            ${No(e,n.id,i)}
            <button class="chip-filtre chip-gestion ${n.id===r.id?`actif`:``}"
              @click=${()=>{e.disciplineGestion=n.id,e.requestUpdate()}}>${n.nom}</button>
          </span>`)}
      </div>
    </div>
    ${Ns(e,r)}
    ${Ps(e,r)}
    ${Fs(e,r)}
  `}function Go(e){return e.bibliotheque.techniques.length===0?P`<p class="fil-vide" style="padding-top:10px">Aucune technique pour l'instant.</p>`:Zs(e,Ys.disciplineId)}function Ko(e){return e.bibliotheque.disciplines.length===0?P`<p class="fil-vide" style="padding-top:10px">Rien à publier pour l'instant — crée ou importe d'abord du contenu.</p>`:P`
    <p class="fil-vide" style="padding:8px 2px 0">Un pack, c'est du contenu <b>à partager</b> — sans ton carnet ni tes favoris. Pour une archive complète <b>pour toi</b>, va dans « Sauvegardes ».</p>
    ${Qs(e)}
  `}function qo(e){return P`
    ${Uo(`Sauvegarder`,P`
      <p class="fil-vide" style="padding:0 2px 6px">Une sauvegarde, c'est <b>tout, pour toi</b> (avec ton carnet et tes favoris) — pour restaurer ton installation. Pour partager à d'autres, utilise « Créer ou exporter un pack ».</p>
      <div class="actions-bibliotheque" style="padding-top:0">
        <button class="action-douce" @click=${()=>void e.exporterTout(!0)}>
          ⇓ Sauvegarde complète <span>fichier avec les vidéos — savoir, compositions, favoris et vidéos reviennent sur un appareil vierge ; réglages d'appareil et PIN à reconfigurer</span>
        </button>
        <button class="action-douce" @click=${()=>void e.exporterTout(!1)}>
          ⇓ Sauvegarde légère, sans les vidéos <span>ce n'est PAS une sauvegarde complète — les vidéos restent sur cet appareil</span>
        </button>
      </div>
      <p class="avertissement-sauvegarde" style="margin-top:8px; padding:10px 12px; border:1px solid var(--trait); border-radius:12px; background:var(--papier); line-height:1.5">
        ⚠️ <b style="color:var(--encre)">Une sauvegarde n'est pas chiffrée.</b> Le fichier
        contient ton <b>carnet personnel</b> et tes <b>vidéos</b>, lisibles tels quels par
        quiconque l'ouvre. Garde-le <b>pour toi</b> (ou un appareil de confiance) —
        ne l'envoie jamais à quelqu'un d'autre. Pour transmettre du contenu,
        passe par « Créer ou exporter un pack », qui <b>exclut ton carnet</b>.
      </p>
      ${e.dernierFichier?P`<div class="suppression-discipline" style="border-color:var(--trait); background:var(--papier)">
            <p class="details fichier-produit" style="line-height:1.5">
              <b style="color:var(--encre)">${e.dernierFichier.role}</b><br>
              ${e.dernierFichier.nom} · ${e.dernierFichier.taille>=1e6?`${(e.dernierFichier.taille/1e6).toFixed(1)} Mo`:`${Math.max(1,Math.round(e.dernierFichier.taille/1e3))} Ko`}<br>
              ${e.dernierFichier.resume}<br>
              L'emplacement du fichier est indiqué dans la confirmation à l'enregistrement.
            </p>
          </div>`:F}
    `)}
    ${Uo(`Revenir à un état précédent`,$s(e))}
    ${Uo(`Restaurer une sauvegarde complète`,P`
      <div class="actions-bibliotheque" style="padding-top:0">
        <button class="action-douce" @click=${()=>e.choisirPackAImporter()}>
          ⤒ Restaurer depuis un fichier <span>importe une sauvegarde complète — sur une installation vierge</span>
        </button>
      </div>
    `)}
  `}function Jo(e){return P`${ic(e)}`}function Yo(e){let t=e.preferences.theme??`auto`,n=e.preferences.tonalite??`vermillon`;return P`
    <div class="carte-atelier">
      <div class="encart-entete"><span class="titre-atelier">Thème</span></div>
      <div class="chips-filtres" style="padding:2px 0 0">
        ${[`auto`,`clair`,`sombre`].map(n=>P`<button class="chip-filtre ${t===n?`actif`:``}"
            @click=${()=>e.changerApparence({theme:n})}>${n===`auto`?`Auto (système)`:n===`clair`?`Jour`:`Nuit`}</button>`)}
      </div>
    </div>

    <div class="carte-atelier">
      <div class="encart-entete"><span class="titre-atelier">Tonalité</span></div>
      <div class="chips-filtres" style="flex-wrap:wrap; padding:2px 0 0">
        ${ec.map(t=>P`<button class="chip-filtre ${n===t.id?`actif`:``}"
            @click=${()=>e.changerApparence({tonalite:t.id})}>
            <span class="puce-niveau" style="background:${t.couleur}"></span>${t.nom}</button>`)}
      </div>
    </div>

    ${Zo(e)}

    <div class="carte-atelier">
      <div class="encart-entete"><span class="titre-atelier">Au démarrage</span></div>
      ${cc(e)}
    </div>

    <div class="carte-atelier">
      <div class="encart-entete"><span class="titre-atelier">Ton pseudo</span></div>
      <div class="aide" style="font-size:12px; color:var(--sourdine)">Signe les techniques que tu crées ou modifies (« Modifié par… »).</div>
      <input class="champ-mini" placeholder="Ton nom ou ton pseudo"
             .value=${(e.preferences.pseudo??``).trim()} aria-label="Ton pseudo"
             @change=${t=>e.changerPseudo(t.target.value)}>
    </div>

    ${Qo(e)}

    <div class="carte-atelier">
      <div class="encart-entete"><span class="titre-atelier">Réglages avancés</span></div>
      ${Xo(e,`Mode avancé`,`Affiche les outils de curation (doublons, relations, médias, diagnostic).`,`modeAvance`)}
      ${Xo(e,`Vue relation (bêta)`,`Active les relations entre techniques : sur les fiches, en graphe, et leur édition. En cours de refonte.`,`vueRelationBeta`)}
    </div>
  `}function Xo(e,t,n,r){let i=e.preferences[r]??!1;return P`
    <button class="interrupteur ${i?`actif`:``}" role="switch" aria-checked=${i}
      @click=${()=>e.basculerReglage(r)}>
      <span class="interrupteur-texte">
        <span class="interrupteur-titre">${t}</span>
        <span class="interrupteur-aide">${n}</span>
      </span>
      <span class="interrupteur-piste" aria-hidden="true"><span class="interrupteur-bouton"></span></span>
    </button>`}function Zo(e){let t=e.preferences.densiteBibliotheque??0,n=t===0?`Auto — s'adapte à l'écran (2 sur téléphone, plus sur tablette)`:`${t} colonne${t>1?`s`:``}`;return P`
    <div class="carte-atelier">
      <div class="encart-entete"><span class="titre-atelier">Densité de la bibliothèque</span></div>
      <div class="aide" style="font-size:12px; color:var(--sourdine)">Nombre de colonnes de la grille des techniques.</div>
      <div class="densite-reglage">
        <input type="range" min="0" max="6" step="1" .value=${String(t)}
          aria-label="Nombre de colonnes de la bibliothèque"
          @input=${t=>{let n=Number(t.target.value);e.changerDensite(n===0?null:n)}}>
        <span class="densite-valeur">${n}</span>
      </div>
    </div>`}function Qo(e){let t=[200,500,1e3,2e3,5e3,1e4,2e4,0],n=e.preferences.limiteEspaceMo??5e3,r=t.indexOf(n),i=r>=0?r:4,a=e=>e===0?`Illimité`:e>=1e3?`${e/1e3} Go`:`${e} Mo`,o=e.infoEspace;return P`
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
        ${o?P`<br>Utilisé : ${rs(o.usage)} · max appareil ~${rs(o.quota)}`:F}
      </div>
      ${n===0?P`<div class="aide" style="font-size:11.5px; color:var(--attention, #b26b00)">⚠ Sans limite, Movenso peut remplir le stockage de l'appareil.</div>`:F}
      ${$o(e)}
    </div>`}function $o(e){let t=e.persistanceStockage,n=t===`accordee`?P`✓ Persistance accordée — le navigateur ne purgera pas ces données.`:t===`native`?P`Stockage applicatif natif — géré par le système, pas de purge navigateur.`:t===`refusee`?P`⚠ Persistance non garantie : le navigateur pourrait purger ces données s'il manque de place.
              <button class="lien-texte" @click=${()=>void e.redemanderPersistance()}>Demander la persistance</button>`:P`Persistance : ce navigateur ne sait pas répondre — pense aux sauvegardes régulières.`;return P`<div class="aide persistance-stockage" style="font-size:11.5px; color:${t===`refusee`?`var(--attention, #b26b00)`:`var(--sourdine)`}">${n}</div>`}function es(e){return P`
    ${Uo(`Movenso`,P`
      <div class="apropos-version">
        <div><strong>Version</strong> ${Eo}</div>
        <div class="aide" style="font-size:12px; color:var(--sourdine)">
          Bibliothèque personnelle de vos disciplines du mouvement — sans compte ni
          cloud. Les données et vidéos restent sur cet appareil ; une connexion peut
          être nécessaire pour charger ou mettre à jour l'application web et
          consulter les ressources externes.
        </div>
        ${`0.9.0-rc.1`.includes(`dev`)||`0.9.0-rc.1`.includes(`rc`)||`0.9.0-rc.1`.includes(`beta`)?P`<div class="aide" style="font-size:12px; color:var(--state-warning, #9a6a00)">
              Version d'évaluation : build de test possiblement non signée —
              pense à exporter une sauvegarde avant chaque mise à jour.
            </div>`:F}
      </div>
    `)}
    ${Uo(`Prise en main rapide`,P`
      <ul class="apropos-liste">
        <li><strong>Ajouter du contenu</strong> : ouvre une discipline puis « ＋ Ajouter »
          pour créer une technique ou capturer une vidéo/note.</li>
        <li><strong>Installer un pack</strong> : Plus › <em>Importer un pack</em>, puis choisis
          un fichier <code>.movpack</code>. Les techniques rejoignent ta bibliothèque
          sans écraser tes notes.</li>
        <li><strong>Composer une séance</strong> : onglet Compositions › Créer ; en lecture,
          ▶ lance le pas-à-pas avec le chrono (voix et bips optionnels).</li>
      </ul>
    `)}
    ${Uo(`Sauvegarde et restauration`,P`
      <div class="aide" style="font-size:13px">
        <p>Une <strong>sauvegarde complète</strong> (Plus › Créer ou exporter un pack)
          emporte ta bibliothèque, ton carnet perso, tes favoris et tes vidéos
          dans un seul fichier <code>.movpack</code>, restaurable sur une installation
          vierge (Plus › Sauvegardes). Les réglages propres à l'appareil (thème,
          démarrage) et le PIN ne voyagent jamais — à reconfigurer après.</p>
        <p><strong>Partage ≠ sauvegarde.</strong> Un pack que tu <em>partages</em> (une
          discipline, une composition) exclut par principe ton carnet personnel et tes
          captures. Une <em>sauvegarde complète</em>, elle, contient ton contenu privé
          <strong>en clair</strong> : ne la partage qu'avec toi-même ou un appareil de
          confiance.</p>
      </div>
    `)}
  `}function ts(e){return P`
    ${Uo(`Diagnostic`,P`
      <div class="aide" style="font-size:12px; color:var(--sourdine)">Un fichier texte (compteurs, santé des médias, stockage, versions) pour comprendre un souci d'import, d'export ou de place — sans aucun secret.</div>
      <button class="chip-filtre diagnostic-export" @click=${()=>void e.exporterDiagnostic()}>Exporter le diagnostic</button>
    `)}
    ${nc(e)}
  `}function ns(e){let t=async t=>{let n=t.value;t.value=``;let r=await e.creerDiscipline(n);J.delete(`discipline`),r&&(e.disciplineGestion=r),e.requestUpdate()};return P`
    <div class="creation-discipline" style="margin:6px 0 2px">
      <input placeholder="Nom de la discipline…" autofocus aria-label="Nom de la discipline"
             @keydown=${e=>{e.key===`Enter`&&t(e.target)}}>
      <button class="bouton principal"
        @click=${e=>void t(e.target.parentElement.querySelector(`input`))}>Créer</button>
    </div>
  `}function rs(e){return e>=1e6?`${(e/1e6).toFixed(1)} Mo`:`${Math.max(1,Math.round(e/1e3))} Ko`}var is=new Set;function as(e){let t=[...ws(e).values()],n=t.filter(e=>e.media.type===`local`),r=t.filter(e=>e.media.type!==`local`);return P`
    <div class="carte-atelier" style="gap:0">
      <div class="encart-entete" style="padding-bottom:4px"><span class="titre-atelier">Médiathèque</span></div>
      ${Ds(e,n.length,`Vidéos locales`,`local`)}
      ${ys===`local`?ks(e,n):F}
      ${Ds(e,r.length,`Médias en ligne`,`enligne`)}
      ${ys===`enligne`?ks(e,r):F}
      ${t.length===0?P`<p class="fil-vide" style="padding:6px 0 0">Aucun média pour l'instant.</p>`:F}
    </div>
  `}function os(e){let t=e.bibliotheque,n=t.contributions.filter(e=>e.techniqueId===null),r=new Set;for(let e of t.contributions)e.techniqueId&&e.medias.length&&r.add(e.techniqueId);let i=t.techniques.filter(e=>!r.has(e.id)),a=t.techniques.filter(e=>!e.familleId&&e.niveauxIds.length===0),o=e.doublonsPotentiels().length;return P`
    ${n.length+i.length+a.length+e.mediasManquants.length+e.videosOrphelines.length+o===0?P`<p class="fil-vide" style="padding:10px 2px 0">Rien à traiter — ta bibliothèque est en ordre. ✓</p>`:F}
    <div class="carte-atelier" style="gap:0">
      <div class="encart-entete" style="padding-bottom:4px"><span class="titre-atelier">À compléter</span></div>
      ${Ds(e,n.length,`Captures à rattacher`,`rattacher`)}
      ${ys===`rattacher`?cs(e,n):F}
      ${Ds(e,i.length,`Techniques sans vidéo`,`sansvideo`)}
      ${ys===`sansvideo`?As(e,i,`Ajouter une vidéo`,`Toutes tes techniques ont une vidéo ou un lien.`):F}
      ${Ds(e,a.length,`Techniques sans classement`,`aclasser`)}
      ${ys===`aclasser`?As(e,a,`Classer`,`Toutes tes techniques ont une catégorie ou un niveau.`):F}
    </div>
    <div class="carte-atelier" style="gap:0">
      <div class="encart-entete" style="padding-bottom:4px"><span class="titre-atelier">Intégrité des médias</span></div>
      ${Ds(e,e.mediasManquants.length,`Vidéos manquantes`,`manquantes`,`rouge`)}
      ${ys===`manquantes`?ss(e):F}
      ${Ds(e,e.videosOrphelines.length,`Fichiers inutilisés`,`inutilises`,`rouge`)}
      ${ys===`inutilises`?js(e):F}
    </div>
    ${o?P`<div class="carte-atelier" style="gap:0">
          <div class="encart-entete" style="padding-bottom:4px"><span class="titre-atelier">À examiner</span></div>
          <button class="kpi kpi-filtre" @click=${()=>e.ouvrirPlusSection(`doublons`)}>
            <span class="voyant neutre"></span>
            <span class="kpi-libelle">Doublons potentiels</span>
            <span class="kpi-nombre">${o}</span>
            <span class="chevron" aria-hidden="true">›</span>
          </button>
        </div>`:F}
  `}function ss(e){let t=e.mediasManquants.filter(e=>e.techniqueId).map(e=>({id:e.techniqueId,nom:e.nom})).sort((e,t)=>e.nom.localeCompare(t.nom,`fr`,{sensitivity:`base`}));return P`<div class="mediatheque-liste">
    <p class="details" style="padding:2px 2px 6px">Fichier absent — restaure une sauvegarde, ou retire la note.</p>
    ${t.length?t.map(t=>P`<div class="ligne-atelier ligne-media">
          <span class="details" style="flex:1;min-width:0"><button class="lien-media-fiche" @click=${()=>e.ouvrirFiche(t.id)}>${t.nom}</button></span>
        </div>`):P`<p class="fil-vide" style="padding:6px 0 8px">Aucune vidéo manquante rattachée à une fiche.</p>`}
  </div>`}function cs(e,t){return P`<div class="mediatheque-liste">
    <p class="details" style="padding:2px 2px 6px">Un savoir sans nom s'oublie — donne-lui une technique.</p>
    ${t.length?t.map((t,n)=>P`<div class="ligne-atelier ligne-media">
          <span class="details" style="flex:1;min-width:0">Capture ${n+1}</span>
          <button class="chip-filtre" @click=${()=>e.ouvrirRattachement(t.id)}>Rattacher</button>
        </div>`):P`<p class="fil-vide" style="padding:6px 0 8px">Aucune capture à rattacher.</p>`}
  </div>`}function ls(e){return P`${us(e)}${Hs(e)}`}function us(e){let t=e.bibliotheque,n=(t.conflitsLiaisons??[]).filter(e=>!!t.techniques.find(t=>t.id===e.sourceId)?.relations.some(t=>t.type===e.type&&t.cibleId===e.cibleId)&&t.techniques.some(t=>t.id===e.cibleId));if(n.length===0)return F;let r=e=>t.techniques.find(t=>t.id===e)?.nom??`?`,i=e=>t.typesRelation.find(t=>t.id===e)?.libelle??e;return P`
    <div class="carte-atelier">
      <div class="ligne-atelier">
        <span class="titre-atelier" style="font-size:14px">Liaisons à arbitrer</span>
        <span class="kpi-nombre">${n.length}</span>
      </div>
      <p class="fil-vide" style="padding:0 2px 6px">Un pack propose une raison ou une priorité différente sur ces liens.
        Ta version reste en place tant que tu n'as pas choisi.</p>
      ${n.map(n=>{let a=t.techniques.find(e=>e.id===n.sourceId).relations.find(e=>e.type===n.type&&e.cibleId===n.cibleId);return P`<div class="conflit-liaison">
          <div class="conflit-liaison-titre"><b>${r(n.sourceId)}</b> <span class="fleche-instance">→</span> <b>${r(n.cibleId)}</b>
            <span class="conflit-liaison-type">${i(n.type)}</span></div>
          <div class="conflit-liaison-versions">
            <div class="conflit-version"><div class="conflit-version-tete">La mienne</div>
              <div class="conflit-version-note">${a.note??P`<i>sans raison</i>`}</div>
              ${a.priorite===void 0?F:P`<div class="conflit-version-prio">priorité ${a.priorite}</div>`}</div>
            <div class="conflit-version"><div class="conflit-version-tete">Celle du pack</div>
              <div class="conflit-version-note">${n.note??P`<i>sans raison</i>`}</div>
              ${n.priorite===void 0?F:P`<div class="conflit-version-prio">priorité ${n.priorite}</div>`}</div>
          </div>
          <div class="conflit-liaison-actions">
            <button class="chip-filtre" @click=${()=>void e.arbitrerConflitLiaison(n,`local`)}>La mienne</button>
            <button class="chip-filtre" @click=${()=>void e.arbitrerConflitLiaison(n,`pack`)}>Celle du pack</button>
            <button class="chip-filtre" @click=${()=>void e.arbitrerConflitLiaison(n,`deux`)}>Les deux</button>
          </div>
        </div>`})}
    </div>
  `}function ds(e){let t=e.bibliotheque,n=t.corbeille??[];return n.length===0?P`<p class="fil-vide" style="padding-top:10px">La corbeille est vide. Une fiche mise à la corbeille arrive ici et reste restaurable sans limite de durée — rien n'expire tout seul, tant que tu ne vides pas.</p>`:P`
    <div class="carte-atelier" style="gap:0">
      <div class="ligne-atelier">
        <span class="titre-atelier" style="font-size:14px;flex:1">${n.length} fiche${n.length>1?`s`:``} en corbeille</span>
        <button class="chip-filtre danger"
          @click=${()=>{confirm(`Vider la corbeille (${n.length} fiche${n.length>1?`s`:``}) ? Irréversible — un point de restauration sera conservé.`)&&e.viderCorbeille()}}>
          Vider la corbeille</button>
      </div>
      <p class="fil-vide" style="padding:2px 2px 8px">Restaurer une fiche la remet à l'identique (notes, favori, liens). Le vidage nettoie les liens qui pointaient vers elle.</p>
      ${n.map(n=>{let r=t.disciplines.find(e=>e.id===n.technique.disciplineId),i=n.contributions.reduce((e,t)=>e+t.medias.length,0),a=n.supprimeeLe.slice(0,10);return P`<div class="ligne-atelier ligne-corbeille" style="flex-wrap:wrap">
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
  `}function fs(e){let t=[...e.doublonsPotentiels()].sort((t,n)=>(e.technique(t.aId)?.nom??``).localeCompare(e.technique(n.aId)?.nom??``,`fr`,{sensitivity:`base`})),n=(e.bibliotheque.doublonsIgnores??[]).length,r=n?P`<button class="chip-filtre rescan-doublons" style="margin:8px 18px 0"
        @click=${()=>void e.rescannerDoublons()}>
        ↻ Rescanner <span>retrouve les ${n} paire${n>1?`s`:``} déjà écartée${n>1?`s`:``}</span>
      </button>`:F,i=e.bibliotheque.fusions??[],a=i.length?P`<div class="carte-atelier" style="margin-top:10px">
        <div class="titre-atelier" style="font-size:14px">Fusions réversibles</div>
        <p class="fil-vide" style="padding:2px 0 6px">Défusionner rétablit les deux fiches d'origine (les liens entrants restent sur la fiche fusionnée).</p>
        ${i.map(t=>P`<div class="ligne-atelier">
            <span class="details" style="flex:1">🔀 « ${t.a.technique.nom} » + « ${t.b.technique.nom} »</span>
            <button class="chip-filtre" @click=${()=>void e.defusionner(t.fusionneeId)}>Défuser</button>
          </div>`)}
      </div>`:F;if(t.length===0)return P`
      <p class="fil-vide" style="padding-top:10px">Aucun doublon détecté. Deux fiches de nom identique ou proche, venant de sources différentes, s'afficheraient ici.</p>
      ${r}
      ${a}
    `;let o=e.doublonOuvert?t.find(t=>Po(t.aId,t.bId)===e.doublonOuvert):void 0;return o?P`
      <div class="actions-bibliotheque" style="padding-top:8px">
        <button class="chip-filtre" @click=${()=>{e.doublonOuvert=null,e.fusionDoublon=null,e.requestUpdate()}}>← Tous les doublons</button>
      </div>
      ${hs(e,o)}
    `:P`
    <p class="fil-vide" style="padding:8px 2px 6px">
      Deux fiches de nom identique ou proche, venant de sources différentes. Elles
      restent indépendantes tant que tu ne décides rien — choisis-en une pour comparer.
    </p>
    <div class="fil doublons-liste">
      ${t.map(t=>ps(e,t))}
    </div>
    ${r}
    ${a}
  `}function ps(e,t){let n=e.technique(t.aId),r=e.technique(t.bId);return!n||!r?P``:P`<button class="ligne-menu ligne-doublon" @click=${()=>{e.doublonOuvert=Po(t.aId,t.bId),e.requestUpdate()}}>
    <span class="ligne-menu-icone" style="background:#efe3d6" aria-hidden="true">🔀</span>
    <span class="ligne-menu-corps">
      <span class="ligne-menu-titre">${n.nom}</span>
      <span class="ligne-menu-etat">${n.nom===r.nom?`même nom, deux sources`:`≈ « ${r.nom} »`}</span>
    </span>
    <span class="chevron">›</span>
  </button>`}function ms(e,t,n){return P`<div class="doublon-cote">
    <div class="doublon-apercu">
      ${eo(e,t.technique,t.source)}
    </div>
    <div class="doublon-titre">${n} · ${t.technique.nom}</div>
    ${t.description?P`<div class="doublon-desc">${t.description.slice(0,140)}${t.description.length>140?`…`:``}</div>`:F}
    <div class="doublon-chiffres">
      ${t.medias.length} média${t.medias.length>1?`s`:``} ·
      ${t.pointsCles.length} point${t.pointsCles.length>1?`s`:``} ·
      ${t.niveaux.length} niveau${t.niveaux.length>1?`x`:``} ·
      ${t.relations} relation${t.relations>1?`s`:``}
    </div>
  </div>`}function hs(e,t){let n=Ro(e.bibliotheque,t.aId,t.bId);if(!n)return P``;let r=e.fusionDoublon!==null&&e.fusionDoublon.aId===t.aId&&e.fusionDoublon.bId===t.bId;return P`<div class="doublon">
    <div class="doublon-cotes">
      ${ms(e,n.a,`A`)}
      ${ms(e,n.b,`B`)}
    </div>
    ${r?gs(e,t,n):P`<div class="doublon-decisions">
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
  </div>`}function gs(e,t,n){let r=e.fusionDoublon,i=r.choix,a=t=>{e.fusionDoublon={...r,choix:{...i,...t}},e.requestUpdate()},o=n.a.technique.nom,s=n.b.technique.nom,c=(e,t,n)=>P`<div class="fusion-ligne">
    <span class="fusion-libelle">${e}</span>
    <div class="chips-filtres" style="padding:0">
      ${n.map(e=>P`<button class="chip-filtre ${i[t]===e.valeur?`actif`:``}"
          @click=${()=>a({[t]:e.valeur})}>${e.texte}</button>`)}
    </div>
  </div>`,l=P``;try{let n=Bo(e.bibliotheque,t.aId,t.bId,i),r=n.techniques.find(e=>e.id===t.aId),a=n.contributions.filter(e=>e.techniqueId===r.id&&e.provenance!==`personnel`),o=a.reduce((e,t)=>e+t.medias.length,0),s=a.map(e=>e.description??``).filter(Boolean).join(` `).slice(0,120);l=P`<div class="fusion-apercu">
      <div class="fusion-apercu-titre">Aperçu : « ${r.nom} »</div>
      <div class="doublon-chiffres">${o} média${o>1?`s`:``} · ${r.niveauxIds.length} niveau${r.niveauxIds.length>1?`x`:``} · ${r.relations.length} relation${r.relations.length>1?`s`:``}</div>
      ${s?P`<div class="doublon-desc">${s}${s.length>=120?`…`:``}</div>`:F}
    </div>`}catch{l=P`<p class="fil-vide">Aperçu indisponible pour ce choix.</p>`}return P`<div class="fusion-panneau">
    ${c(`Titre et famille`,`titre`,[{valeur:`a`,texte:`A (${o})`},{valeur:`b`,texte:`B (${s})`}])}
    ${c(`Textes`,`textes`,[{valeur:`a`,texte:`A`},{valeur:`b`,texte:`B`},{valeur:`deux`,texte:`Les deux`}])}
    ${c(`Médias`,`medias`,[{valeur:`a`,texte:`A`},{valeur:`b`,texte:`B`},{valeur:`deux`,texte:`Les deux`}])}
    ${c(`Niveaux`,`niveaux`,[{valeur:`a`,texte:`A`},{valeur:`b`,texte:`B`},{valeur:`deux`,texte:`Les deux`}])}
    ${c(`Relations`,`relations`,[{valeur:`a`,texte:`A`},{valeur:`b`,texte:`B`},{valeur:`deux`,texte:`Les deux`}])}
    ${l}
    ${(()=>{let n=e.bibliotheque,r=n.techniques.reduce((e,n)=>e+(n.id===t.bId?0:n.relations.filter(e=>e.cibleId===t.bId).length),0),i=n.compositions.reduce((e,n)=>e+n.blocs.filter(e=>e.type===`technique`&&e.techniqueId===t.bId).length,0),a=n.favoris.includes(t.bId),o=[r?`${r} lien${r>1?`s`:``} entrant${r>1?`s`:``} redirigé${r>1?`s`:``}`:null,i?`${i} pas de composition redirigé${i>1?`s`:``}`:null,a?`le favori suit`:null].filter(Boolean);return P`<p class="fil-vide fusion-impacts" style="padding:4px 2px 0">
        ${o.length?P`Ce qui pointait « B » suivra la fiche fusionnée : ${o.join(` · `)}.<br>`:F}
        Un point de restauration est créé avant la fusion — et la fusion reste défusionnable depuis « Doublons ».
      </p>`})()}
    <div class="doublon-decisions">
      <button class="bouton principal" @click=${()=>void e.fusionnerDoublonAvec(t.aId,t.bId,i)}>Fusionner en une fiche</button>
      <button class="chip-filtre" @click=${()=>{e.fusionDoublon=null,e.requestUpdate()}}>Annuler</button>
    </div>
  </div>`}var _s=null;function vs(e,t){let n=is.has(t.id);return P`<div class="ligne-atelier ligne-orpheline" style="flex-wrap:wrap">
    <span class="details" style="flex:1">🎞 fichier de ${rs(t.taille)} — plus rien ne le référence</span>
    <button class="chip-filtre" @click=${()=>{n?is.delete(t.id):is.add(t.id),e.requestUpdate()}}>
      ${n?`Replier`:`Vérifier`}</button>
    ${n?P`<div style="width:100%">
          <movenso-video-locale .app=${e} .mediaId=${t.id}></movenso-video-locale>
          ${(()=>{let n=_s?.id===t.id,r=n&&_s.texte.trim()?vt(e.bibliotheque,_s.texte).slice(0,5):[];return P`<div style="margin-top:6px">
              <input class="champ-mini" style="width:100%" placeholder="🔗 Rattacher à une technique (nom)…"
                aria-label="Rattacher ce fichier à une technique"
                .value=${n?_s.texte:``}
                @input=${n=>{_s={id:t.id,texte:n.target.value},e.requestUpdate()}}>
              ${r.length?P`<div class="chips-filtres" style="padding-top:4px">
                    ${r.map(n=>P`<button class="chip-filtre"
                      @click=${()=>{_s=null,e.rattacherOrphelin(t.id,n.id)}}>${n.nom}</button>`)}
                  </div>`:F}
            </div>`})()}
          <button class="action-danger" style="margin-top:6px"
            @click=${()=>{confirm(`Supprimer définitivement ce fichier inutilisé (${rs(t.taille)}) ?`)&&(is.delete(t.id),e.supprimerVideoOrpheline(t.id))}}>Supprimer ce fichier inutilisé</button>
        </div>`:F}
  </div>`}var ys=null;function bs(){ys=null,xs=null}var xs=null,Ss=new Set,Cs=null;function ws(e){let t=e.bibliotheque,n=new Map,r=(e,t,r)=>{let i=n.get(e.id);i||(i={media:e,refs:[],disciplines:new Set},n.set(e.id,i)),i.refs.push(t),r&&i.disciplines.add(r)};for(let n of t.contributions){let t=n.techniqueId?e.technique(n.techniqueId):void 0;for(let e of n.medias)r(e,{nom:t?t.nom:`capture à rattacher`,techniqueId:n.techniqueId},t?.disciplineId)}for(let e of t.compositions)for(let t of e.blocs)for(let n of t.medias)r(n,{nom:`composition « ${e.nom} »`,techniqueId:null});return n}function Ts(e){return e.label?.trim()?e.label.trim():e.nomOriginal?.trim()?e.nomOriginal.trim():e.type===`local`?`vidéo`:e.type===`plateforme`?e.service??`vidéo en ligne`:`lien`}function Es(e){return e.type===`plateforme`&&e.service===`youtube`?`https://www.youtube.com/watch?v=${e.ref}`:e.ref}function Ds(e,t,n,r,i=`neutre`){let a=ys===r;return P`<button class="kpi kpi-filtre ${a?`actif`:``}" aria-expanded=${a}
    @click=${()=>{ys=a?null:r,e.requestUpdate()}}>
    <span class="voyant ${t?i:`vert`}"></span>
    <span class="kpi-libelle">${n}</span>
    <span class="kpi-nombre">${t}</span>
    <span class="chevron" aria-hidden="true">${a?`▾`:`▸`}</span>
  </button>`}function Os(e,t){let n=t.media,r=n.type===`local`?`🎞`:n.type===`plateforme`?`▶`:`🔗`,i=n.type===`local`&&e.taillesVideos.has(n.id),a=n.type===`local`?e.taillesVideos.get(n.id)??n.taille:void 0,o=n.type===`local`?i?rs(a??0):`fichier absent`:`en ligne`,s=t.refs[0]?.nom??`média`,c=t.refs.find(e=>e.techniqueId),l=Ss.has(n.id),u=Cs===n.id;return P`<div class="ligne-atelier ligne-media" style="flex-wrap:wrap">
    <span class="details" style="flex:1;min-width:0">
      <span aria-hidden="true">${r}</span>
      ${c?P`<button class="lien-media-fiche" @click=${()=>e.ouvrirFiche(c.techniqueId)}>${s}</button>`:P`<b>${s}</b>`}
      <span aria-hidden="true"> · </span>
      ${u?P`<input class="champ-mini nom-media-champ" .value=${n.label??``} placeholder=${Ts(n)} aria-label="Libellé du média"
            @change=${t=>void e.majMediaLabel(n.id,t.target.value)}>`:P`<span>${Ts(n)}</span>`}
      <span style="opacity:.7"> · ${o}</span>
    </span>
    <button class="bouton-icone" aria-label="Modifier ce média" title=${n.type===`local`?`Renommer`:`Modifier le nom et le lien`}
      @click=${()=>{Cs=u?null:n.id,e.requestUpdate()}}>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>
    </button>
    ${n.type===`local`?P`<button class="chip-filtre" ?disabled=${!i}
          @click=${()=>{l?Ss.delete(n.id):Ss.add(n.id),e.requestUpdate()}}>
          ${l?`Replier`:`▶ Aperçu`}</button>`:c?P`<button class="chip-filtre" @click=${()=>e.ouvrirFiche(c.techniqueId)}>Ouvrir la fiche</button>`:gt(n.ref)?P`<a class="chip-filtre" href=${gt(n.ref)} target="_blank" rel="noopener noreferrer"
              title="Quitte Movenso — s'ouvre dans le navigateur">▶ Ouvrir le lien · ${_t(n.ref)} ↗</a>`:P`<span class="chip-filtre" title="Lien non https — jamais ouvert" style="opacity:.6">🔗 lien non sûr</span>`}
    ${u&&n.type!==`local`?P`<input class="champ-mini" style="width:100%; margin-top:6px" inputmode="url" aria-label="Lien du média (YouTube ou autre)"
          placeholder="🔗 Lien (YouTube ou autre)" .value=${Es(n)}
          @change=${t=>void e.majMediaLien(n.id,t.target.value)}>`:F}
    ${l&&i?P`<div style="width:100%"><movenso-video-locale .app=${e} .mediaId=${n.id}></movenso-video-locale></div>`:F}
  </div>`}function ks(e,t){let n=e.bibliotheque.disciplines,r=xs&&n.some(e=>e.id===xs)?xs:null,i=(r?t.filter(e=>e.disciplines.has(r)):t).slice().sort((e,t)=>(e.refs[0]?.nom??Ts(e.media)).localeCompare(t.refs[0]?.nom??Ts(t.media),`fr`,{sensitivity:`base`}));return P`<div class="mediatheque-liste">
    ${n.length>=2?P`<div class="chips-filtres" style="padding:2px 0 6px">
          <button class="chip-filtre ${r===null?`actif`:``}" @click=${()=>{xs=null,e.requestUpdate()}}>Toutes</button>
          ${n.map(t=>P`<button class="chip-filtre ${r===t.id?`actif`:``}"
            @click=${()=>{xs=t.id,e.requestUpdate()}}>${t.nom}</button>`)}
        </div>`:F}
    ${i.length?i.map(t=>Os(e,t)):P`<p class="fil-vide" style="padding:6px 0 8px">${t.length?`Aucun média pour cette discipline.`:`Aucun média de ce type pour l'instant.`}</p>`}
  </div>`}function As(e,t,n,r){let i=e.bibliotheque.disciplines,a=xs&&i.some(e=>e.id===xs)?xs:null,o=(a?t.filter(e=>e.disciplineId===a):t).slice().sort((e,t)=>e.nom.localeCompare(t.nom,`fr`,{sensitivity:`base`}));return P`<div class="mediatheque-liste">
    ${i.length>=2?P`<div class="chips-filtres" style="padding:2px 0 6px">
          <button class="chip-filtre ${a===null?`actif`:``}" @click=${()=>{xs=null,e.requestUpdate()}}>Toutes</button>
          ${i.map(t=>P`<button class="chip-filtre ${a===t.id?`actif`:``}"
            @click=${()=>{xs=t.id,e.requestUpdate()}}>${t.nom}</button>`)}
        </div>`:F}
    ${o.length?o.map(t=>{let r=i.find(e=>e.id===t.disciplineId);return P`<div class="ligne-atelier ligne-media">
            <span class="details" style="flex:1;min-width:0">
              <button class="lien-media-fiche" @click=${()=>e.ouvrirFiche(t.id)}>${t.nom}</button>
              ${r?P`<span style="opacity:.7"> · ${r.nom}</span>`:F}
            </span>
            <button class="chip-filtre" @click=${()=>e.ouvrirFiche(t.id)}>${n}</button>
          </div>`}):P`<p class="fil-vide" style="padding:6px 0 8px">${t.length?`Aucune pour cette discipline.`:r}</p>`}
  </div>`}function js(e){let t=e.videosOrphelines.reduce((e,t)=>e+t.taille,0),n=e.videosOrphelines.filter(e=>is.has(e.id)),r=n.reduce((e,t)=>e+t.taille,0);return P`<div class="mediatheque-liste">
    <p class="details" style="padding:2px 2px 6px">Vérifie chaque fichier avant de le supprimer${t?P` · total : ${rs(t)}`:F}. Un média retrouvé peut aussi être RATTACHÉ à une fiche.</p>
    ${n.length>=2?P`<button class="action-danger suppression-groupe-orphelins" style="margin:2px 0 8px"
          @click=${()=>{confirm(`Supprimer les ${n.length} fichiers vérifiés (${rs(r)}) ? Chacun sera revérifié inutilisé à l'instant de supprimer.`)&&(n.forEach(e=>is.delete(e.id)),e.supprimerOrphelinsVerifies(n.map(e=>e.id)))}}>Supprimer les ${n.length} fichiers vérifiés — ${rs(r)}</button>`:F}
    ${e.videosOrphelines.length?e.videosOrphelines.map(t=>vs(e,t)):P`<p class="fil-vide" style="padding:6px 0 8px">Aucun fichier inutilisé.</p>`}
  </div>`}var Ms=new Set;function Ns(e,t){let n=e.bibliotheque.techniques.filter(e=>e.disciplineId===t.id),r=n.length,i=new Set(n.map(e=>e.id));return P`
    <div class="carte-atelier carte-discipline">
      <div class="discipline-ligne">
        <input class="champ-edition titre-discipline-champ" .value=${t.nom} aria-label="Nom de la discipline"
               @change=${n=>void e.majNomDiscipline(t.id,n.target.value)}>
        <button class="bouton-discipline danger" aria-label="Supprimer la discipline" title="Supprimer"
          @click=${()=>{r===0?e.autoriser(`destruction_ou_sensible`,`Saisis le PIN pour retirer « ${t.nom} ».`,()=>{confirm(`Supprimer la discipline vide « ${t.nom} » ? Un point de restauration sera conservé.`)&&e.supprimerDiscipline(t.id)}):(Ms.add(t.id),e.requestUpdate())}}>🗑️</button>
      </div>
      <div class="details">${r} technique${r>1?`s`:``}, ${t.familles.length} catégorie${t.familles.length>1?`s`:``}, ${t.niveaux.length} niveau${t.niveaux.length>1?`x`:``}</div>
      ${Ms.has(t.id)?Rs(e,t,n,i):F}
    </div>
  `}function Ps(e,t){let n=`${t.id}:familles`,r={reordonner:(n,r)=>e.deplacerTaxonomieVers(t.id,`familles`,n,r),enregistrer:()=>void e.enregistrerReordre(),ordre:()=>t.familles.map(e=>e.id),nom:e=>t.familles.find(t=>t.id===e)?.nom??`la catégorie`},i=r=>{e.ajouterTaxonomie(t.id,`familles`,r.value),r.value=``,J.delete(n),e.requestUpdate()};return P`
    <details class="carte-atelier sous-volet">
      <summary class="encart-entete"><span class="titre-atelier">Catégories <span class="carnet-compte">${t.familles.length}</span></span></summary>
      <div style="padding-top:8px">
      <button class="chip-filtre ${J.has(n)?`actif`:``}"
        @click=${()=>{J.has(n)?J.delete(n):J.add(n),e.requestUpdate()}}>${J.has(n)?`− Fermer`:`＋ Ajouter une catégorie`}</button>
      ${J.has(n)?P`<div class="ligne-atelier">
            <input class="champ-mini" placeholder="Nom de la catégorie" autofocus aria-label="Nouvelle catégorie"
                   @keydown=${e=>{e.key===`Enter`&&i(e.target)}}>
            <button class="bouton" style="flex:none"
              @click=${e=>i(e.target.parentElement.querySelector(`input`))}>Ajouter</button>
          </div>`:F}
      ${t.familles.map(n=>P`
        <div class="ligne-atelier ${e.reordreGlisse===n.id?`glisse`:``}" data-glisser-id=${n.id}>
          ${t.familles.length>1?Mo(e,n.id,r):F}
          ${No(e,n.id,r)}
          <input class="champ-mini" .value=${n.nom} aria-label="Nom de la catégorie"
                 @change=${r=>void e.majTaxonomie(t.id,`familles`,n.id,{nom:r.target.value})}>
          ${Bs(e,t,`familles`,n.id,n.nom,`la catégorie`)}
        </div>
        ${Vs(e,t,`familles`,n.id,n.nom)}`)}
      ${t.familles.length===0&&!J.has(n)?P`<p class="fil-vide" style="padding:6px 2px 0">Aucune catégorie — touche ＋.</p>`:F}
      </div>
    </details>
  `}function Fs(e,t){let n=`${t.id}:niveaux`,r={reordonner:(n,r)=>e.deplacerTaxonomieVers(t.id,`niveaux`,n,r),enregistrer:()=>void e.enregistrerReordre(),ordre:()=>t.niveaux.map(e=>e.id),nom:e=>t.niveaux.find(t=>t.id===e)?.nom??`le niveau`},i=r=>{e.ajouterTaxonomie(t.id,`niveaux`,r.value),r.value=``,J.delete(n),e.requestUpdate()};return P`
    <details class="carte-atelier sous-volet">
      <summary class="encart-entete"><span class="titre-atelier">Niveaux <span class="carnet-compte">${t.niveaux.length}</span></span></summary>
      <div style="padding-top:8px">
      <button class="chip-filtre ${J.has(n)?`actif`:``}"
        @click=${()=>{J.has(n)?J.delete(n):J.add(n),e.requestUpdate()}}>${J.has(n)?`− Fermer`:`＋ Ajouter un niveau`}</button>
      ${J.has(n)?P`<div class="ligne-atelier">
            <input class="champ-mini" placeholder="Nom du niveau" autofocus aria-label="Nouveau niveau"
                   @keydown=${e=>{e.key===`Enter`&&i(e.target)}}>
            <button class="bouton" style="flex:none"
              @click=${e=>i(e.target.parentElement.querySelector(`input`))}>Ajouter</button>
          </div>`:F}
      ${t.niveaux.map(n=>P`
        <div class="ligne-atelier ${e.reordreGlisse===n.id?`glisse`:``}" data-glisser-id=${n.id}>
          ${t.niveaux.length>1?Mo(e,n.id,r):F}
          ${No(e,n.id,r)}
          <input class="champ-mini" .value=${n.nom} aria-label="Nom du niveau"
                 @change=${r=>void e.majTaxonomie(t.id,`niveaux`,n.id,{nom:r.target.value})}>
          ${Ls(e,t,n)}
          ${Bs(e,t,`niveaux`,n.id,n.nom,`le niveau`)}
        </div>
        ${Vs(e,t,`niveaux`,n.id,n.nom)}`)}
      ${t.niveaux.length===0&&!J.has(n)?P`<p class="fil-vide" style="padding:6px 2px 0">Aucun niveau — touche ＋.</p>`:F}
      </div>
    </details>
  `}var Is=new Set;function Ls(e,t,n){let r=Is.has(n.id)||n.couleur2!==void 0;return P`<span class="couleur-niveau">
    <span class="apercu-niveau" title="Aperçu du niveau" style="background:${n.couleur?n.couleur2?`linear-gradient(90deg, ${n.couleur} 50%, ${n.couleur2} 50%)`:n.couleur:`var(--trait)`}"
      @click=${()=>{Is.add(n.id),e.requestUpdate()}}></span>
    <input type="color" class="pastille-couleur" .value=${n.couleur??`#cccccc`} title="Couleur"
           @change=${r=>void e.majTaxonomie(t.id,`niveaux`,n.id,{couleur:r.target.value})}>
    ${r?P`<input type="color" class="pastille-couleur" .value=${n.couleur2??n.couleur??`#cccccc`} title="Seconde couleur (bicolore)"
               @change=${r=>void e.majTaxonomie(t.id,`niveaux`,n.id,{couleur2:r.target.value})}>`:P`<button class="chip-mini-plus" aria-label="Seconde couleur" title="Ajouter une seconde couleur"
               @click=${()=>{Is.add(n.id),e.requestUpdate()}}>＋</button>`}
  </span>`}function Rs(e,t,n,r){let i=e.bibliotheque,a=i.contributions.filter(e=>e.techniqueId&&r.has(e.techniqueId)),o=a.filter(e=>e.provenance===`personnel`).length,s=a.flatMap(e=>e.medias).filter(e=>e.type===`local`).length,c=i.compositions.filter(e=>e.blocs.some(e=>e.type===`technique`&&e.techniqueId&&r.has(e.techniqueId))),l=()=>{Ms.delete(t.id),e.requestUpdate()};return P`<div class="suppression-discipline">
    <p class="details" style="line-height:1.5">
      Supprimer « ${t.nom} » retirera <b>${n.length} technique${n.length>1?`s`:``}</b>
      (${s?`${s} vidéo${s>1?`s`:``} locale${s>1?`s`:``}`:`aucune vidéo locale`}).
      ${o?P`${o>1?`Tes ${o} notes personnelles reviendront`:`Ta note personnelle reviendra`}
            « à rattacher » — rien de personnel n'est perdu.`:F}
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
  </div>`}var zs=null;function Bs(e,t,n,r,i,a){return P`
    <button class="bouton-icone" aria-label="Retirer ${a}"
      @click=${()=>{e.usagesTaxonomie(t.id,n,r).length?(zs=`${t.id}:${n}:${r}`,e.requestUpdate()):confirm(`Retirer ${a} « ${i} » (inutilisé${n===`familles`?`e`:``}) ?`)&&e.supprimerTaxonomie(t.id,n,r)}}>✕</button>
  `}function Vs(e,t,n,r,i){if(zs!==`${t.id}:${n}:${r}`)return P``;let a=e.usagesTaxonomie(t.id,n,r),o=t[n].filter(e=>e.id!==r),s=()=>{zs=null,e.requestUpdate()};return P`<div class="suppression-discipline suppression-taxonomie">
    <p class="details" style="line-height:1.5">
      « ${i} » est utilisée par <b>${a.length} technique${a.length>1?`s`:``}</b> :
    </p>
    <div class="chips-filtres" style="flex-wrap:wrap; padding:2px 0 0">
      ${a.slice(0,8).map(t=>P`<button class="chip-filtre" @click=${()=>e.ouvrirFiche(t.id)}>${t.nom}</button>`)}
      ${a.length>8?P`<span class="chip-filtre" style="cursor:default">… ${a.length-8} de plus</span>`:F}
    </div>
    <div class="chips-filtres" style="flex-wrap:wrap; padding:6px 0 0">
      <button class="chip-filtre" @click=${s}>Annuler</button>
      ${o.map(i=>P`<button class="chip-filtre" @click=${()=>{s(),e.supprimerTaxonomie(t.id,n,r,i.id)}}>
          Remplacer par « ${i.nom} »</button>`)}
      <button class="action-danger" style="padding:6px 10px; font-size:12px"
        @click=${()=>{s(),e.supprimerTaxonomie(t.id,n,r,null)}}>
        Retirer la classification</button>
    </div>
  </div>`}function Hs(e){return P`
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
      ${e.bibliotheque.typesRelation.map(t=>Us===t.id?Js(e,t):qs(e,t))}
      <div class="ligne-atelier">
        <input class="champ-mini" placeholder="Nouveau lien…" aria-label="Libellé du type">
        <input class="champ-mini" placeholder="Lecture inverse…" aria-label="Libellé inverse">
        <button class="bouton principal" style="flex:none"
          @click=${t=>{let n=t.target.parentElement.querySelectorAll(`input`);e.ajouterTypeRelation(n[0].value,n[1].value),n.forEach(e=>e.value=``)}}>Ajouter</button>
      </div>
    </div>
  `}var Us=null,Ws=null;function Gs(e,t,n){let r=e.bibliotheque,i=new Map(r.techniques.map(e=>[e.id,e.nom])),a=[],o=new Set;for(let e of r.techniques)for(let r of e.relations){if(r.type!==t)continue;let s=i.get(r.cibleId);if(s===void 0)continue;let c=n?[e.id,r.cibleId].sort().join(`|`):`${e.id}|${r.cibleId}`;o.has(c)||(o.add(c),a.push({sourceId:e.id,sourceNom:i.get(e.id)??`?`,cibleId:r.cibleId,cibleNom:s}))}return a.sort((e,t)=>e.sourceNom.localeCompare(t.sourceNom))}function Ks(e,t){let n=Gs(e,t.id,t.symetrique??!1),r=t.symetrique?`⇄`:`→`,i=P`<button class="chip-filtre" style="margin:4px 12px 8px"
    @click=${()=>e.ouvrirEditionLien(null,void 0,void 0,t.id)}>＋ Ajouter un lien de ce type</button>`;return n.length===0?P`<p class="fil-vide" style="padding:4px 12px 2px">Aucun lien de ce type pour l'instant.</p>${i}`:P`<div class="instances-relation">
    ${n.map(n=>P`<div class="ligne-instance">
        <button class="lien-instance" @click=${()=>e.ouvrirFiche(n.sourceId)}
          title="Ouvrir « ${n.sourceNom} »">${n.sourceNom} <span class="fleche-instance">${r}</span> ${n.cibleNom}</button>
        <button class="bouton-icone" aria-label=${`Modifier le lien ${n.sourceNom} ${r} ${n.cibleNom}`} title="Raison, priorité…"
          @click=${()=>e.ouvrirEditionLien(n.sourceId,n.cibleId,t.id)}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>
        </button>
        <button class="bouton-icone danger" aria-label=${`Retirer le lien ${n.sourceNom} ${r} ${n.cibleNom}`} title="Retirer ce lien"
          @click=${()=>{confirm(`Retirer le lien « ${n.sourceNom} ${r} ${n.cibleNom} » ?`)&&e.retirerRelation(n.sourceId,n.cibleId,t.id)}}>✕</button>
      </div>`)}
  </div>${i}`}function qs(e,t){let n=e.usagesTypeRelation(t.id),r=Ws===t.id;return P`<div class="type-relation-bloc">
    <div class="ligne-atelier">
      <button class="details lien-type" style="flex:1;text-align:left" aria-expanded=${r}
        @click=${()=>{Ws=r?null:t.id,e.requestUpdate()}}>
        <span class="chevron-type" aria-hidden="true">${r?`▾`:`▸`}</span>
        ${t.libelle}${t.symetrique?` ⇄`:` → ${t.libelleInverse}`}
        ${n?P`<span class="kpi-nombre" style="font-size:10px">${n}</span>`:F}
        ${t.origine?P`<span style="opacity:.7"> · importé</span>`:F}
      </button>
      <button class="bouton-icone" aria-label="Modifier ce lien" title="Renommer / lecture inverse"
        @click=${()=>{Us=t.id,e.requestUpdate()}}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>
      </button>
      <button class="bouton-icone" aria-label="Supprimer ce lien"
        @click=${()=>{(n||confirm(`Retirer le lien « ${t.libelle} » (inutilisé) ?`))&&e.supprimerTypeRelation(t.id)}}>✕</button>
    </div>
    ${r?Ks(e,t):F}
  </div>`}function Js(e,t){let n=e.usagesTypeRelation(t.id);return P`<div class="ligne-atelier edition-type-relation" style="flex-wrap:wrap">
    <input class="champ-mini" .value=${t.libelle} aria-label="Libellé du lien">
    ${t.symetrique?P`<span class="details">⇄ se lit pareil des deux sens</span>`:P`<input class="champ-mini" .value=${t.libelleInverse??``} aria-label="Lecture inverse">`}
    <button class="chip-filtre" title=${n?`des relations utilisent déjà cette lecture`:`basculer la nature de lecture`}
      @click=${()=>void e.basculerSymetrieTypeRelation(t.id)}>${t.symetrique?`Rendre orienté`:`Rendre symétrique ⇄`}</button>
    <button class="bouton principal" style="flex:none; padding:7px 12px; font-size:12.5px"
      @click=${n=>{let r=n.target.parentElement.querySelectorAll(`input`);Us=null,e.majTypeRelation(t.id,{libelle:r[0].value,...t.symetrique?{}:{libelleInverse:r[1]?.value??``}})}}>OK</button>
  </div>`}var Ys={requete:``,disciplineId:null};function Xs(e,t){e.autoriser(`destruction_ou_sensible`,`Saisis le PIN pour retirer « ${t.nom} ».`,()=>{let n=Ga(e.bibliotheque,t.id),r=n.length?`\nUtilisée dans ${n.length} composition${n.length>1?`s`:``} (${n.map(e=>e.nom).join(`, `)}).`:``;confirm(`Mettre « ${t.nom} » à la corbeille ?${r}\nGeste réversible : tu pourras la restaurer depuis Plus › Corbeille.`)&&e.supprimerTechnique(t.id)})}function Zs(e,t){let n=e.bibliotheque;t&&!n.disciplines.some(e=>e.id===t)&&(t=null);let r=new Set(n.techniques.map(e=>e.id)),i=new Set(n.contributions.filter(e=>e.techniqueId).map(e=>e.techniqueId)),a=new Set(n.contributions.filter(e=>e.techniqueId&&e.medias.length).map(e=>e.techniqueId)),o=new Set(e.mediasManquants.filter(e=>e.techniqueId).map(e=>e.techniqueId)),s=e=>n.disciplines.find(t=>t.id===e)?.nom??``,c=e=>e.familleId?n.disciplines.find(t=>t.id===e.disciplineId)?.familles.find(t=>t.id===e.familleId)?.nom??``:``,l=e=>{let t=[];return!e.familleId&&e.niveauxIds.length===0&&t.push(`sans classification`),i.has(e.id)?a.has(e.id)||t.push(`sans média`):t.push(`sans contenu`),e.relations.some(e=>!r.has(e.cibleId))&&t.push(`relation à réparer`),o.has(e.id)&&t.push(`vidéo manquante`),t},u=Ys.requete.trim().toLowerCase(),d=n.techniques.filter(e=>!(t&&e.disciplineId!==t||u&&!`${e.nom} ${e.nomTraditionnel??``}`.toLowerCase().includes(u))).sort((e,t)=>e.nom.localeCompare(t.nom,`fr`,{sensitivity:`base`}));return P`
    <div class="carte-atelier" style="margin-top:10px">
      ${n.disciplines.length>1?P`<div class="chips-filtres" style="padding:0 0 4px" aria-label="Filtrer par discipline">
            <button class="chip-filtre ${t?``:`actif`}"
              @click=${()=>{Ys.disciplineId=null,e.requestUpdate()}}>Toutes</button>
            ${n.disciplines.map(n=>P`<button class="chip-filtre ${t===n.id?`actif`:``}"
                @click=${()=>{Ys.disciplineId=n.id,e.requestUpdate()}}>${n.nom}</button>`)}
          </div>`:F}
      <div class="recherche" style="margin:0">
        <input placeholder="Chercher une technique…" aria-label="Chercher une technique" .value=${Ys.requete}
               @input=${t=>{Ys.requete=t.target.value,e.requestUpdate()}}>
      </div>
      ${d.map(t=>{let n=c(t);return P`<div class="ligne-gestion ligne-gestion-double">
          <button class="ligne-gestion-ouvrir" @click=${()=>e.ouvrirFiche(t.id)}>
            <span class="ligne-gestion-nom">${t.nom}</span>
            <span class="details">${s(t.disciplineId)}${n?` · ${n}`:``}</span>
            ${l(t).length?P`<span class="etiquettes-gestion">${l(t).map(e=>P`<span class="etiquette-gestion">${e}</span>`)}</span>`:F}
          </button>
          <button class="bouton-icone danger supprimer-technique" aria-label=${`Retirer ${t.nom}`} title="Retirer cette technique"
            @click=${()=>Xs(e,t)}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true"><path d="M4 7h16M9 7V5h6v2M6 7l1 13h10l1-13"/></svg>
          </button>
        </div>`})}
      ${d.length===0?P`<p class="fil-vide" style="padding:8px 0 0">Rien ne correspond.</p>`:F}
    </div>
  `}var Y={disciplineId:null,tout:!0,techniques:new Set,avecVideos:!0,auteur:``,note:``,compositionsPerso:!1};function Qs(e){let t=e.bibliotheque,n=e.publicationPrete;if(n)return P`
      <div class="carte-atelier">
        <div class="titre-atelier">Pack prêt</div>
        <p class="details" style="line-height:1.5"><b style="color:var(--encre)">${n.nomPack}</b> · ${rs(n.taille)}<br>${n.resume}</p>
        <div class="edition-actions">
          <button class="bouton principal" @click=${()=>e.enregistrerPublicationLocale()}>⇓ Enregistrer localement</button>
          <button class="bouton" @click=${()=>void e.partagerPublication()}>↗ Partager</button>
        </div>
        <button class="action-douce" style="margin-top:6px" @click=${()=>e.fermerPublication()}>← Préparer un autre pack</button>
      </div>
    `;let r=Y.disciplineId&&t.disciplines.some(e=>e.id===Y.disciplineId)?Y.disciplineId:t.disciplines[0].id;Y.disciplineId=r;let i=t.disciplines.find(e=>e.id===r),a=t.techniques.filter(e=>e.disciplineId===r),o=Y.tout?a.length:a.filter(e=>Y.techniques.has(e.id)).length,s=t=>{Y.disciplineId=t,Y.techniques=new Set,Y.tout=!0,e.requestUpdate()},c=new Set(Y.tout?a.map(e=>e.id):a.filter(e=>Y.techniques.has(e.id)).map(e=>e.id)),l=new Set;for(let e of t.contributions)if(e.techniqueId&&c.has(e.techniqueId)&&e.provenance!==`personnel`)for(let t of e.medias)t.type===`local`&&l.add(t.id);let u=[...l].reduce((t,n)=>t+(e.taillesVideos.get(n)??0),0),d=t.compositions.filter(e=>e.provenance===`personnel`&&e.blocs.some(e=>e.type===`technique`&&e.techniqueId)&&e.blocs.every(e=>e.type!==`technique`||!e.techniqueId||c.has(e.techniqueId)));return P`
    <p class="fil-vide" style="padding-top:0">
      Produire un fichier <b>à partager</b> — pas une sauvegarde. Ton carnet, tes
      favoris et tes captures à reprendre ne partent jamais.
    </p>
    <div class="carte-atelier">
      <div class="etiquette-champ">Discipline</div>
      <div class="chips-filtres">
        ${t.disciplines.map(e=>P`<button class="chip-filtre ${e.id===r?`actif`:``}" @click=${()=>s(e.id)}>${e.nom}</button>`)}
      </div>

      <div class="etiquette-champ">Contenu</div>
      <div class="chips-filtres">
        <button class="chip-filtre ${Y.tout?`actif`:``}" @click=${()=>{Y.tout=!0,e.requestUpdate()}}>Tout (${a.length})</button>
        <button class="chip-filtre ${Y.tout?``:`actif`}" @click=${()=>{Y.tout=!1,e.requestUpdate()}}>Choix de techniques</button>
      </div>
      ${Y.tout?F:P`<div class="publier-techniques">
            ${a.map(t=>P`<label class="niveau-coche">
                <input type="checkbox" ?checked=${Y.techniques.has(t.id)}
                  @change=${()=>{Y.techniques.has(t.id)?Y.techniques.delete(t.id):Y.techniques.add(t.id),e.requestUpdate()}}>
                <span>${t.nom}</span>
              </label>`)}
            ${a.length===0?P`<p class="fil-vide">Aucune technique dans cette discipline.</p>`:F}
          </div>`}

      <div class="etiquette-champ">Vidéos</div>
      <div class="chips-filtres">
        <button class="chip-filtre ${Y.avecVideos?`actif`:``}" @click=${()=>{Y.avecVideos=!0,e.requestUpdate()}}>Avec les vidéos locales</button>
        <button class="chip-filtre ${Y.avecVideos?``:`actif`}" @click=${()=>{Y.avecVideos=!1,e.requestUpdate()}}>Sans les vidéos</button>
      </div>
      <p class="fil-vide" style="padding:4px 0 0">Les liens (YouTube…) restent inclus dans les deux cas.</p>

      ${d.length?P`<div class="etiquette-champ">Mes séances</div>
            <label class="niveau-coche">
              <input type="checkbox" ?checked=${Y.compositionsPerso}
                @change=${()=>{Y.compositionsPerso=!Y.compositionsPerso,e.requestUpdate()}}>
              <span>Inclure ${d.length} séance${d.length>1?`s`:``} personnelle${d.length>1?`s`:``} (jouable${d.length>1?`s`:``} avec ce pack)</span>
            </label>
            <p class="fil-vide" style="padding:2px 0 0">Par défaut, tes séances perso restent privées.</p>`:F}

      <div class="etiquette-champ">Auteur du pack</div>
      <input class="champ-mini" placeholder="Auteur ou organisation (recommandé)" .value=${Y.auteur}
             aria-label="Auteur du pack" @input=${e=>Y.auteur=e.target.value}>

      <div class="etiquette-champ">Note de diffusion</div>
      <input class="champ-mini" placeholder="Note de diffusion (facultatif)" .value=${Y.note}
             aria-label="Note de diffusion" @input=${e=>Y.note=e.target.value}>

      <div class="details" style="padding-top:4px">${o} technique${o>1?`s`:``}${Y.avecVideos?u?` · ~${rs(u)} de vidéos`:` · aucune vidéo locale`:` · sans les vidéos`}</div>
      <button class="bouton principal" style="margin-top:8px; align-self:flex-start" ?disabled=${o===0}
        @click=${()=>void e.preparerPublication(r,{...Y.tout?{}:{techniques:Y.techniques},avecVideos:Y.avecVideos,auteur:Y.auteur,note:Y.note,nom:i.nom,compositionsPersonnelles:Y.compositionsPerso})}>Valider</button>
    </div>
  `}function $s(e){return e.sauvegardes.length===0?P`<p class="fil-vide" style="padding-top:2px">
      Aucun point de restauration pour l'instant — ils se créent seuls avant chaque
      action sensible (import, suppression, restauration).
    </p>`:P`
    <div class="chips-filtres" style="flex-wrap:wrap">
      ${e.sauvegardes.map(t=>{let[n,r]=t.replace(`.json`,``).split(`__`),i=`${(n??``).replace(`T`,` `).slice(0,16)}${r?` · ${r.replaceAll(`-`,` `)}`:``}`;return P`<button class="chip-filtre"
          @click=${()=>e.autoriser(`destruction_ou_sensible`,`Saisis le PIN pour revenir à un état précédent.`,()=>{confirm(`Revenir à l'état « ${i} » ?\n— La bibliothèque actuelle (techniques, contributions, compositions, favoris) sera REMPLACÉE par cet état ; tout ce qui a été créé depuis sera retiré.\n— Les fichiers vidéo de l'appareil ne bougent PAS (les points de restauration n'incluent pas les vidéos).\n— L'état actuel est lui-même sauvegardé d'abord : ce retour est annulable.`)&&e.restaurerSauvegarde(t)})}>↺ ${i}</button>`})}
    </div>
    <p class="fil-vide" style="padding-top:6px">
      Points de restauration automatiques (10 conservés), données seules — pour la vraie
      sauvegarde avec vidéos, utilise « Sauvegarde complète ».
    </p>
  `}var ec=[{id:`vermillon`,nom:`Vermillon`,couleur:`#B23A26`},{id:`indigo`,nom:`Indigo`,couleur:`#35506F`},{id:`foret`,nom:`Forêt`,couleur:`#2F6B4F`},{id:`ocre`,nom:`Ocre`,couleur:`#96682B`},{id:`prune`,nom:`Prune`,couleur:`#7A3E68`},{id:`acier`,nom:`Acier`,couleur:`#47586B`}],tc=!1;function nc(e){let t=()=>{tc=!1,e.requestUpdate()};return P`
    ${Uo(`Réinitialisation`,P`
    ${tc?P`<div class="suppression-discipline">
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
        </div>`:P`<div class="ligne-atelier">
          <button class="action-danger reinitialiser"
            @click=${()=>e.autoriser(`destruction_ou_sensible`,`Saisis le PIN pour réinitialiser Movenso.`,()=>{tc=!0,e.requestUpdate()})}>Réinitialiser Movenso…</button>
        </div>`}
    `)}
  `}var X={formulaire:null,desactivation:null,changementPin:!1,erreur:``,reveler:!1},rc={modifications:`Un PIN sera demandé pour créer, modifier, capturer, importer ou composer — la consultation reste toujours libre.`,suppressions:`Un PIN sera demandé pour supprimer, restaurer, revenir en arrière, publier ou sauvegarder — la consultation reste toujours libre.`};function ic(e){let t=e.reglagesProtections,n=!!e.preferences.protections?.verification,r=e.preferences.protections?.verrouillage??`5min`,i=()=>{X.formulaire=null,X.desactivation=null,X.changementPin=!1,X.erreur=``,X.reveler=!1,e.requestUpdate()},a=(r,a)=>P`
    <div class="ligne-atelier">
      <span class="details" style="flex:1">${t[r]?`🔒`:`—`} ${a} : <b>${t[r]?`protégée par le PIN`:`libre`}</b></span>
      ${t[r]?P`<button class="chip-filtre" @click=${()=>{X.desactivation=r,X.formulaire=null,X.erreur=``,e.requestUpdate()}}>Désactiver…</button>`:P`<button class="chip-filtre" @click=${()=>{n?e.activerProtection(r):(X.formulaire=r,X.desactivation=null,X.erreur=``,e.requestUpdate())}}>Protéger…</button>`}
    </div>
    ${X.desactivation===r?oc(e,r,i):F}
    ${X.formulaire===r?ac(e,r,i):F}
  `;return P`
    ${Uo(`Protections`,P`
    ${!t.modifications&&!t.suppressions?P`<p class="fil-vide etat-protections" style="padding-top:2px">
          Aucune protection active : tout est libre sur cet appareil. Tu peux
          demander un PIN local avant certaines actions (aucun compte, aucun serveur).
        </p>`:F}
    ${a(`modifications`,`Modifications`)}
    ${a(`suppressions`,`Suppressions et opérations sensibles`)}
    ${t.modifications||t.suppressions?P`<div class="reglage-session">
            <span class="details" style="display:block;padding-bottom:4px">Garder la session déverrouillée :</span>
            <div class="chips-filtres">
              ${[[`5min`,`5 min`],[`15min`,`15 min`],[`arriere-plan`,`jusqu'à l'arrière-plan`]].map(([t,n])=>P`<button class="chip-filtre ${r===t?`actif`:``}"
                  @click=${()=>void e.choisirVerrouillage(t)}>${n}</button>`)}
            </div>
          </div>
          <div class="ligne-atelier">
            <button class="chip-filtre" @click=${()=>{X.changementPin=!X.changementPin,X.erreur=``,e.requestUpdate()}}>Changer le PIN…</button>
          </div>
          ${X.changementPin?sc(e,i):F}
          ${e.journalSecurite.length||e.echecsCumules?P`<p class="details journal-securite" style="padding-top:2px">
                Journal (session) : ${e.journalSecurite.slice(-3).join(` · `)}${e.echecsCumules?` · échecs cumulés : ${e.echecsCumules}`:``}
              </p>`:F}
          <p class="fil-vide" style="padding-top:4px">
            PIN oublié ? Aucune récupération à distance : restaure une sauvegarde,
            ou réinitialise ci-dessous. Le PIN protège les actions dans l'app,
            pas le téléphone.
          </p>`:F}
    `)}
  `}function ac(e,t,n){let r=X.reveler?`text`:`password`;return P`<div class="suppression-discipline formulaire-pin" style="border-color:var(--trait); background:var(--papier)">
    <p class="details" style="line-height:1.5">${rc[t]}</p>
    <div class="ligne-atelier" style="flex-wrap:wrap">
      <input class="champ-mini" type=${r} inputmode="numeric" autocomplete="off"
             placeholder="PIN (6 à 12 chiffres)" aria-label="Nouveau PIN">
      <input class="champ-mini" type=${r} inputmode="numeric" autocomplete="off"
             placeholder="Confirme le PIN" aria-label="Confirmation du PIN">
      <button class="chip-filtre" @click=${()=>{X.reveler=!X.reveler,e.requestUpdate()}}>
        ${X.reveler?`Masquer`:`Révéler`}</button>
    </div>
    ${X.erreur?P`<p class="details erreur-pin" role="alert" style="color:var(--accent)">${X.erreur}</p>`:F}
    <div class="chips-filtres" style="padding:4px 0 0">
      <button class="chip-filtre" @click=${n}>Annuler</button>
      <button class="bouton principal" style="padding:7px 12px; font-size:12.5px"
        @click=${async r=>{let i=r.target.closest(`.formulaire-pin`).querySelectorAll(`input`),a={pin:i[0].value,confirmation:i[1].value},o=await e.activerProtection(t,a);o?(X.erreur=o,e.requestUpdate()):n()}}>Activer</button>
    </div>
  </div>`}function oc(e,t,n){return P`<div class="suppression-discipline formulaire-pin">
    <div class="ligne-atelier" style="flex-wrap:wrap">
      <input class="champ-mini" type="password" inputmode="numeric" autocomplete="off"
             placeholder="PIN actuel" aria-label="PIN actuel">
      <button class="chip-filtre" @click=${n}>Annuler</button>
      <button class="action-danger" style="padding:6px 10px; font-size:12px"
        @click=${async r=>{let i=r.target.closest(`.formulaire-pin`).querySelector(`input`),a=await e.desactiverProtection(t,i.value);a?(X.erreur=a,i.value=``,e.requestUpdate()):n()}}>Désactiver cette protection</button>
    </div>
    ${X.erreur?P`<p class="details erreur-pin" role="alert" style="color:var(--accent)">${X.erreur}</p>`:F}
  </div>`}function sc(e,t){return P`<div class="suppression-discipline formulaire-pin" style="border-color:var(--trait); background:var(--papier)">
    <div class="ligne-atelier" style="flex-wrap:wrap">
      <input class="champ-mini" type="password" inputmode="numeric" autocomplete="off" placeholder="PIN actuel" aria-label="PIN actuel">
      <input class="champ-mini" type="password" inputmode="numeric" autocomplete="off" placeholder="Nouveau PIN" aria-label="Nouveau PIN">
      <input class="champ-mini" type="password" inputmode="numeric" autocomplete="off" placeholder="Confirme le nouveau" aria-label="Confirmation du nouveau PIN">
    </div>
    ${X.erreur?P`<p class="details erreur-pin" role="alert" style="color:var(--accent)">${X.erreur}</p>`:F}
    <div class="chips-filtres" style="padding:4px 0 0">
      <button class="chip-filtre" @click=${t}>Annuler</button>
      <button class="bouton principal" style="padding:7px 12px; font-size:12.5px"
        @click=${async n=>{let r=n.target.closest(`.formulaire-pin`).querySelectorAll(`input`),i=await e.changerPin(r[0].value,r[1].value,r[2].value);i?(X.erreur=i,e.requestUpdate()):t()}}>Changer le PIN</button>
    </div>
  </div>`}function cc(e){let t=e.bibliotheque,n=e.preferences.demarrage,r=n.mode===`bibliotheque`||n.mode===`derniere`||n.mode===`discipline`,i=e.preferences.vueRelationBeta??!1;return P`
    <div class="aide" style="font-size:12px; color:var(--sourdine)">L'écran ouvert au lancement de l'app.</div>
    <div class="chips-filtres" style="flex-wrap:wrap; padding:2px 0 0">
      <button class="chip-filtre ${r?`actif`:``}"
        @click=${()=>e.changerDemarrage(`bibliotheque`)}>Bibliothèque</button>
      <button class="chip-filtre ${n.mode===`favoris`?`actif`:``}"
        @click=${()=>e.changerDemarrage(`favoris`)}>Favoris</button>
      <button class="chip-filtre ${n.mode===`compositions`?`actif`:``}"
        @click=${()=>e.changerDemarrage(`compositions`)}>Compositions</button>
      ${i?P`<button class="chip-filtre ${n.mode===`relations`?`actif`:``}"
            @click=${()=>e.changerDemarrage(`relations`)}>Relations</button>`:F}
    </div>
    ${r?P`<div class="aide" style="font-size:12px; color:var(--sourdine); padding-top:6px">Ouvrir la Bibliothèque sur :</div>
          <div class="chips-filtres" style="flex-wrap:wrap; padding:2px 0 0">
            <button class="chip-filtre ${n.mode===`bibliotheque`?`actif`:``}"
              @click=${()=>e.changerDemarrage(`bibliotheque`)}>Toutes</button>
            <button class="chip-filtre ${n.mode===`derniere`?`actif`:``}"
              @click=${()=>e.changerDemarrage(`derniere`)}>Dernière consultée</button>
            ${t.disciplines.map(t=>P`<button class="chip-filtre ${n.mode===`discipline`&&n.disciplineId===t.id?`actif`:``}"
                @click=${()=>e.changerDemarrage(`discipline`,t.id)}>${t.nom}</button>`)}
          </div>`:F}
  `}var lc={packs:`Disciplines et classement`,techniques:`Gestion des techniques`,atraiter:`À traiter`,doublons:`Doublons potentiels`,medias:`Médias`,relations:`Relations entre techniques`,corbeille:`Corbeille`,publier:`Créer ou exporter un pack`,sauvegardes:`Sauvegardes`,securite:`Sécurité`,apparence:`Apparence`,diagnostic:`Diagnostic et maintenance`,apropos:`À propos`};function uc(e,t){switch(t){case`packs`:return Wo(e);case`techniques`:return Go(e);case`atraiter`:return os(e);case`doublons`:return fs(e);case`medias`:return as(e);case`relations`:return ls(e);case`corbeille`:return ds(e);case`publier`:return Ko(e);case`sauvegardes`:return qo(e);case`securite`:return Jo(e);case`apparence`:return Yo(e);case`diagnostic`:return ts(e);case`apropos`:return es(e)}}function dc(e,t){return P`
    <div class="ecran">
      <div class="barre">
        <button class="bouton-icone" aria-label="Retour" @click=${()=>e.retour()}>
          <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M15 5l-7 7 7 7"/></svg>
        </button>
        <span class="contexte">${lc[t]}</span>
      </div>
      ${uc(e,t)}
    </div>
  `}function fc(e){let t=e.bibliotheque,n=new Set;for(let e of t.techniques)Ie(e)!==`local`&&n.add(Ie(e));for(let e of t.contributions)Ie(e)!==`local`&&n.add(Ie(e));n.size;let r=t.disciplines.length,i=t.techniques.length,a=t.disciplines.reduce((e,t)=>e+t.familles.length,0),o=t.disciplines.reduce((e,t)=>e+t.niveaux.length,0),s=e.doublonsPotentiels().length,c=e.taillesVideos.size,l=new Set(t.contributions.filter(e=>e.techniqueId&&e.medias.length).map(e=>e.techniqueId)),u=t.contributions.filter(e=>e.techniqueId===null).length,d=t.techniques.filter(e=>!l.has(e.id)).length,f=t.techniques.filter(e=>!e.familleId&&e.niveauxIds.length===0).length,p=u+d+f+e.mediasManquants.length+e.videosOrphelines.length+s,m=t.techniques.reduce((e,t)=>e+t.relations.length,0),h=(t.corbeille??[]).length,g=e.sauvegardes[0],_=g?(g.replace(`.json`,``).split(`__`)[0]??``).slice(0,10):``,v=e.preferences.protections,y=v&&(v.modifications||v.suppressions)?`PIN actif`:`Modification libre`,b=e.preferences.theme??`auto`,x=b===`auto`?`Auto (système)`:b===`clair`?`Jour`:`Nuit`,S=e.preferences.modeAvance??!1,C=e.preferences.vueRelationBeta??!1;return{bibliotheque:[{section:`packs`,icone:`📚`,fond:`var(--indigo-doux, #e7ecf3)`,titre:`Disciplines et classement`,etat:`${r} discipline${r>1?`s`:``} · ${a} catégorie${a>1?`s`:``} · ${o} niveau${o>1?`x`:``}`},{section:`techniques`,icone:`🥋`,fond:`#e5ece6`,titre:`Gestion des techniques`,etat:`${i} technique${i>1?`s`:``}`},{section:`atraiter`,icone:`🩹`,fond:`#efe3d6`,titre:`À traiter`,etat:p?`${p} à traiter`:`Rien à traiter`},{section:`corbeille`,icone:`🗑`,fond:`#efe3d6`,titre:`Corbeille`,etat:h?`${h} fiche${h>1?`s`:``} restaurable${h>1?`s`:``}`:`Vide`},...S?[{section:`doublons`,icone:`🔀`,fond:`#efe3d6`,titre:`Doublons potentiels`,etat:s?`${s} à examiner`:`Aucun doublon détecté`},{section:`medias`,icone:`🎞`,fond:`#e5ece6`,titre:`Médias`,etat:c?`${c} vidéo${c>1?`s`:``} locale${c>1?`s`:``}`:`Parc de médias`}]:[],...C?[{section:`relations`,icone:`🔗`,fond:`#e8e4ef`,titre:`Relations entre techniques`,etat:`${m} relation${m>1?`s`:``}`}]:[]],echange:[{action:e=>e.choisirPackAImporter(),icone:`⤓`,fond:`#e5ece6`,titre:`Importer un pack`,etat:`Fichier .movpack`},{section:`publier`,icone:`📤`,fond:`#efe3d6`,titre:`Créer ou exporter un pack`,etat:`Produire un fichier partageable`},{section:`sauvegardes`,icone:`💾`,fond:`var(--indigo-doux, #e7ecf3)`,titre:`Sauvegardes`,etat:_?`Dernière sauvegarde ${_}`:`Aucune sauvegarde`}],preferences:[{section:`securite`,icone:`🔒`,fond:`#e8e4ef`,titre:`Sécurité`,etat:y},{section:`apparence`,icone:`🎨`,fond:`#efe3d6`,titre:`Apparence`,etat:x},...S?[{section:`diagnostic`,icone:`🩺`,fond:`#e5ece6`,titre:`Diagnostic et maintenance`}]:[],{section:`apropos`,icone:`❓`,fond:`var(--indigo-doux, #e7ecf3)`,titre:`À propos et aide`,etat:`Movenso · v${Eo}`}]}}function pc(e,t){return P`<button class="ligne-menu" @click=${()=>t.section?e.ouvrirPlusSection(t.section):t.action?.(e)}>
    <span class="ligne-menu-icone" style="background:${t.fond}" aria-hidden="true">${t.icone}</span>
    <span class="ligne-menu-corps">
      <span class="ligne-menu-titre">${t.titre}</span>
      ${t.etat?P`<span class="ligne-menu-etat">${t.etat}</span>`:F}
    </span>
    <span class="chevron" aria-hidden="true">›</span>
  </button>`}function mc(e){let t=fc(e),n=(t,n)=>P`
    <div class="menu-section-titre">${t}</div>
    <div class="menu-groupe">${n.map(t=>pc(e,t))}</div>`;return P`
    <div class="ecran plus">
      <header class="marque"><div style="flex:1"><div class="nom">Plus</div>
        <div class="devise">Gérer, importer, sauvegarder, régler.</div></div></header>
      ${n(`Ma bibliothèque`,t.bibliotheque)}
      ${n(`Importer, exporter et sauvegarder`,t.echange)}
      ${n(`Préférences`,t.preferences)}
    </div>
  `}var hc=`modulepreload`,gc=function(e,t){return new URL(e,t).href},_c={},vc=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=gc(t,n),t=s(t),t in _c)return;_c[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:hc,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})};function yc(e){let t=[...e.bibliotheque.compositions].sort((e,t)=>(t.modifieLe??t.creeLe).localeCompare(e.modifieLe??e.creeLe)),n=t=>{let n=t.blocs.find(e=>e.type===`technique`&&e.techniqueId),r=n?.techniqueId?e.technique(n.techniqueId):void 0;return r?eo(e,r):F},r=e=>{if(e.blocs.length===0)return`à construire`;let t=e.blocs.filter(e=>e.type!==`media`).length,n=Ac(e),r=`${t} pas${n>0?` · ⏱ ${kc(n)}`:``}`;return e.provenance!==`personnel`&&(r+=` · ${e.attribution??e.provenance}`),r};return P`
    <div class="ecran">
      <header class="marque"><div style="flex:1"><div class="nom">Compositions</div>
        <div class="devise">Tes enchaînements, programmes, séances…</div></div></header>

      ${t.length===0?P`<p class="fil-vide" style="padding-top:12px">
            Assemble et ordonne plusieurs techniques pour créer un enchaînement ou une séance.
            Touche <b>＋ Créer</b> en bas pour commencer.
          </p>`:P`<div class="fil" style="margin-top:10px">${t.map(t=>P`
    <div class="composition-carte">
      <button class="composition-ouvrir" @click=${()=>e.ouvrirComposition(t.id)}>
        ${n(t)}
        <span class="composition-infos">
          <span class="composition-nom">${t.nom}</span>
          <span class="composition-sous">${r(t)}</span>
        </span>
      </button>
      ${t.blocs.length?P`<button class="composition-play" aria-label="Jouer « ${t.nom} »" title="Passer en revue"
            @click=${()=>e.demarrerEntrainement(t.id)}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 5v14l12-7z"/></svg>
          </button>`:F}
    </div>`)}</div>`}
    </div>
  `}function bc(e,t,n){let r=t??0,i=Math.floor(r/60),a=r%60,o=(e,t)=>Array.from({length:e},(e,n)=>P`<option value=${n} ?selected=${n===t}>${`${n}`.padStart(2,`0`)}</option>`),s=(t,r)=>{let i=t*60+r;n(i<=0?void 0:i),e.requestUpdate()};return P`
    <div class="duree-picker">
      <div class="duree-affiche">${t===void 0?`Aucune durée`:Ua(t)}</div>
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
    </div>`}var Z={quoi:`technique`,requete:``,techId:void 0,techNom:``,libre:``,dureeSec:void 0};function xc(){Z.requete=``,Z.techId=void 0,Z.techNom=``,Z.libre=``,Z.dureeSec=void 0}function Sc(e,t){return t.type===`technique`?t.techniqueId&&e.technique(t.techniqueId)?.nom||t.texte||`technique`:t.type===`pause`?t.texte||`Pause`:t.texte||(t.dureeSec===void 0?`étape`:kc(t.dureeSec))}function Cc(e,t){let n=e.bibliotheque,r=Z.quoi===`technique`,i=r&&Z.requete.trim()?vt(n,Z.requete,6):[],a=e=>n.disciplines.find(t=>t.id===e)?.nom??``,o=r?Z.techId!==void 0:Z.libre.trim()!==``||Z.dureeSec!==void 0;return P`
    <div class="toggle-quoi">
      <button class="chip-choix ${r?`actif`:``}" @click=${()=>{Z.quoi=`technique`,e.requestUpdate()}}>Une technique</button>
      <button class="chip-choix ${r?``:`actif`}" @click=${()=>{Z.quoi=`libre`,e.requestUpdate()}}>Une saisie libre</button>
    </div>
    ${r?P`<div class="recherche" style="margin:8px 0 0">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.8-3.8"/></svg>
            <input placeholder="Chercher une technique…" aria-label="Chercher une technique" autocomplete="off" .value=${Z.requete}
                   @input=${t=>{Z.requete=t.target.value,Z.techId=void 0,e.requestUpdate()}}>
          </div>
          ${i.length?P`<div class="resultats" style="padding:6px 0 0">
                ${i.map(t=>P`<button class="resultat ${Z.techId===t.id?`actif`:``}"
                    @click=${()=>{Z.techId=t.id,Z.techNom=t.nom,Z.requete=t.nom,e.requestUpdate()}}>
                    <span>${t.nom}</span><span class="jp">${t.nomTraditionnel??``}</span><span class="fam">${a(t.disciplineId)}</span>
                  </button>`)}
              </div>`:F}`:P`<input class="champ-edition" style="margin-top:8px" placeholder="Décris l'étape (échauffement, transition, repère…)"
              .value=${Z.libre} aria-label="Saisie libre"
              @input=${t=>{Z.libre=t.target.value,e.requestUpdate()}}>`}
    <div class="section-titre" style="padding:12px 4px 4px">Durée (facultatif)</div>
    ${bc(e,Z.dureeSec,t=>{Z.dureeSec=t,e.requestUpdate()})}
    <button class="bouton principal ajout-valider" ?disabled=${!o} @click=${()=>{let n=Z.dureeSec;if(r){if(!Z.techId)return;let r=Z.techId,i=Z.techNom;e.modifierComposition(t,e=>e.blocs.push(qa(`technique`,{techniqueId:r,texte:i,...n===void 0?{}:{dureeSec:n}})))}else{let r=Z.libre.trim();if(!r&&n===void 0)return;let i=!r&&n!==void 0?qa(`pause`,{dureeSec:n}):qa(`etape`,{...r?{texte:r}:{},...n===void 0?{}:{dureeSec:n}});e.modifierComposition(t,e=>e.blocs.push(i))}xc(),e.requestUpdate()}}>Ajouter</button>`}function wc(e){let t=e.creationCompo;return P`
    <div class="voile" @click=${()=>{t.etape===`pas`?e.fermerCreationCompo():e.creationCompo=null}}></div>
    <div class="feuille" role="dialog" aria-modal="true" tabindex="-1" aria-label="Créer une composition">
      <div class="prise"></div>
      ${t.etape===`nom`?Tc(e,t):Ec(e,t)}
    </div>`}function Tc(e,t){let n=t.nom.trim()!==``,r=()=>{n&&e.creerCompositionFunnel()};return P`
    <h2>Nouvelle composition</h2>
    <div class="geste">Donne-lui un nom — tu pourras tout changer ensuite.</div>
    <div class="creation-discipline" style="margin-top:8px">
      <input .value=${t.nom} aria-label="Nom de la composition"
             @input=${n=>e.creationCompo={...t,nom:n.target.value}}
             @keydown=${e=>{e.key===`Enter`&&r()}}>
      <button class="bouton principal" ?disabled=${!n} @click=${r}>Suivant</button>
    </div>
    <div class="actions"><button class="bouton" @click=${()=>e.creationCompo=null}>Annuler</button></div>`}function Ec(e,t){let n=e.bibliotheque.compositions.find(e=>e.id===t.compoId),r=n?.blocs??[];return P`
    <h2>${n?.nom??`Composition`}</h2>
    <div class="geste">Ajoute tes éléments dans l'ordre.</div>
    ${r.length?P`<ol class="funnel-pas">${r.map((t,n)=>P`<li>${n+1}. ${Sc(e,t)}</li>`)}</ol>`:P`<p class="fil-vide" style="padding:6px 2px">Aucun élément pour l'instant.</p>`}
    ${Cc(e,t.compoId)}
    <div class="actions" style="margin-top:12px">
      <button class="bouton principal" @click=${()=>e.fermerCreationCompo()}>Terminer</button>
    </div>`}function Dc(e){let t=e.ajoutPas;return P`
    <div class="voile" @click=${()=>{e.ajoutPas=null,e.requestUpdate()}}></div>
    <div class="feuille" role="dialog" aria-modal="true" tabindex="-1" aria-label="Ajouter un élément">
      <div class="prise"></div>
      <h2>Ajouter un élément</h2>
      ${Cc(e,t)}
      <div class="actions" style="margin-top:12px">
        <button class="bouton" @click=${()=>{e.ajoutPas=null,e.requestUpdate()}}>Terminer</button>
      </div>
    </div>`}function Oc(e){let{compoId:t,blocId:n}=e.editionPas,r=e.bibliotheque,i=r.compositions.find(e=>e.id===t)?.blocs.find(e=>e.id===n),a=()=>{e.editionPas=null,e.requestUpdate()};if(!i)return P`<div class="voile" @click=${a}></div>`;let o=r=>void e.modifierComposition(t,e=>{let t=e.blocs.find(e=>e.id===n);t&&r(t)}),s=i.type===`technique`,c=s&&i.techniqueId?e.technique(i.techniqueId):void 0,l=s&&Z.requete.trim()?vt(r,Z.requete,6):[],u=e=>r.disciplines.find(t=>t.id===e)?.nom??``;return P`
    <div class="voile" @click=${a}></div>
    <div class="feuille" role="dialog" aria-modal="true" tabindex="-1" aria-label="Modifier le pas">
      <div class="prise"></div>
      <h2>${s?c?.nom??`Technique`:i.type===`pause`?`Pause`:`Étape`}</h2>
      ${s?P`<div class="section-titre" style="padding:4px 4px 2px">Consigne</div>
            <input class="champ-edition" placeholder="gauche et droite, sur le contre…" .value=${i.consigne??``} aria-label="Consigne du pas"
              @change=${e=>o(t=>{let n=e.target.value.trim();n?t.consigne=n:delete t.consigne})}>
            <div class="section-titre" style="padding:10px 4px 2px">Remplacer la technique</div>
            <div class="recherche" style="margin:0">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.8-3.8"/></svg>
              <input placeholder="Chercher une technique…" aria-label="Chercher une technique" autocomplete="off" .value=${Z.requete}
                @input=${t=>{Z.requete=t.target.value,e.requestUpdate()}}>
            </div>
            ${l.length?P`<div class="resultats" style="padding:6px 0 0">
                  ${l.map(e=>P`<button class="resultat" @click=${()=>{Z.requete=``,o(t=>{t.techniqueId=e.id,t.texte=e.nom})}}>
                    <span>${e.nom}</span><span class="jp">${e.nomTraditionnel??``}</span><span class="fam">${u(e.disciplineId)}</span>
                  </button>`)}
                </div>`:F}`:P`<div class="section-titre" style="padding:4px 4px 2px">Texte</div>
            <input class="champ-edition" placeholder="Décris l'étape…" .value=${i.texte??``} aria-label="Texte du pas"
              @change=${e=>o(t=>{let n=e.target.value.trim();n?t.texte=n:delete t.texte})}>`}
      <div class="section-titre" style="padding:10px 4px 2px">Durée</div>
      ${bc(e,i.dureeSec,e=>o(t=>{e===void 0?delete t.dureeSec:t.dureeSec=e}))}
      <div class="actions" style="margin-top:14px">
        <button class="action-danger" @click=${()=>{a(),e.modifierComposition(t,e=>e.blocs=e.blocs.filter(e=>e.id!==n))}}>Retirer ce pas</button>
        <button class="bouton principal" @click=${a}>Terminer</button>
      </div>
    </div>`}function kc(e){if(e<60)return`${Math.round(e)} s`;let t=Math.round(e/60);if(t<60)return`${t} min`;let n=Math.floor(t/60),r=t%60;return r?`${n} h ${`${r}`.padStart(2,`0`)}`:`${n} h`}function Ac(e){return e.blocs.reduce((e,t)=>e+(t.dureeSec??0),0)}function jc(e,t,n){let r=t.presentation?.medias??[];return r.length?P`
    <div class="composition-presentation">
      <div class="section-titre section-liste-titre" style="padding:8px 4px 2px">Présentation</div>
      <div class="presentation-medias">
        ${r.map(r=>P`<div class="presentation-media">
            ${To(e,r)}
            ${n?P`<button class="bouton-icone" aria-label="Retirer de la présentation" title="Retirer de la présentation"
                  @click=${()=>void e.retirerMediaPresentation(t.id,r.id)}>✕</button>`:F}
          </div>`)}
      </div>
    </div>`:P``}function Mc(e,t){let n=e.bibliotheque.compositions.find(e=>e.id===t);return n?P`
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
          ${n.blocs.length>0?P`<button class="bouton-icone passer-en-revue" aria-label="Passer en revue" title="Passer en revue, pas à pas"
                @click=${()=>e.demarrerEntrainement(n.id)}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 5v14l12-7z"/></svg>
              </button>`:F}
          <!-- Partage natif du .movpack. -->
          <button class="bouton-icone partager-composition" aria-label="Partager" title="Partager la composition"
            @click=${()=>void e.partagerComposition(n.id)}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true"><circle cx="18" cy="5" r="2.6"/><circle cx="6" cy="12" r="2.6"/><circle cx="18" cy="19" r="2.6"/><path d="M8.3 10.7l7.4-4.3M8.3 13.3l7.4 4.3"/></svg>
          </button>
        </div>
      </div>

      <!-- Le premier « carré » de la composition, c'est le titre (tuning post-V3). -->
      <div class="fiche-entete composition-titre-lecture"><h1>${n.nom}</h1>
        ${n.description?P`<div class="jp" style="font-family:var(--ui)">${n.description}</div>`:F}
      </div>

      ${jc(e,n,!1)}

      ${(()=>{let e=Ac(n);return e>0?P`<div class="composition-total" aria-label="Durée totale">⏱ Séance · ${kc(e)}</div>`:F})()}

      ${n.blocs.length===0?P`<p class="fil-vide">Vide pour l'instant — touche <b>＋ Ajouter un élément</b>.</p>`:F}

      <ol class="blocs">
        ${(()=>{let t=0;return n.blocs.map(r=>rl(e,n,r,r.type===`media`?0:++t))})()}
      </ol>

      <!-- Édition INLINE (D-126) : tout se fait en lecture — ajouter un élément
           directement, sans crayon. -->
      <button class="bouton ajouter-pas-inline" @click=${()=>{e.ajoutPas=n.id,e.requestUpdate()}}>
        ＋ Ajouter un élément
      </button>
    </div>
  `:P`<div class="ecran"><p class="fil-vide">Composition introuvable.</p></div>`}function Nc(e){let t=e.bibliotheque?.compositions.find(t=>t.id===e.menuComposition);if(!t)return P``;let n=()=>{e.menuComposition=null,e.requestUpdate()};return P`
    <div class="voile" @click=${n}></div>
    <div class="feuille" role="dialog" aria-modal="true" tabindex="-1" aria-label="Options de la composition">
      <div class="prise"></div>
      <div class="section-titre" style="padding:4px 4px 2px">Renommer / décrire</div>
      <input class="champ-edition composition-titre" .value=${t.nom} aria-label="Titre de la composition"
        @change=${n=>{let r=n.target.value.trim();r&&e.modifierComposition(t.id,e=>e.nom=r)}}>
      <input class="champ-edition champ-description" .value=${t.description??``}
        placeholder="Description ou objectif (facultatif)" aria-label="Description"
        @change=${n=>{let r=n.target.value.trim();e.modifierComposition(t.id,e=>{r?e.description=r:delete e.description})}}>
      ${jc(e,t,!0)}
      ${Pc(e,t)}
      <div class="actions" style="margin-top:14px">
        <button class="bouton" @click=${()=>{e.dupliquerComposition(t.id),n()}}>Dupliquer</button>
        <button class="action-danger supprimer-composition"
          @click=${()=>e.autoriser(`destruction_ou_sensible`,`Saisis le PIN pour supprimer « ${t.nom} ».`,()=>{confirm(`Supprimer la composition « ${t.nom} » ?\nTes techniques restent dans la bibliothèque — un point de restauration est conservé.`)&&(e.supprimerComposition(t.id),n())})}>Supprimer</button>
      </div>
      <button class="bouton principal" style="margin-top:10px" @click=${n}>Terminer</button>
    </div>`}function Pc(e,t){return P`
    <div class="ajout-bloc capture-composition">
      <div class="section-titre" style="padding:12px 4px 2px">Présenter l'ensemble (démo complète, vidéo « moi »)</div>
      <div class="edition-actions">
        <button class="chip-filtre" @click=${()=>{let n=document.createElement(`input`);n.type=`file`,n.accept=`video/*`,n.onchange=()=>{let r=n.files?.[0];r&&e.ajouterMediaPresentation(t.id,{fichier:r})},n.click()}}>🎞 Vidéo de présentation</button>
        <button class="chip-filtre" @click=${()=>{let n=prompt(`Coller un lien (YouTube ou autre) qui présente cette composition :`);n?.trim()&&e.ajouterMediaPresentation(t.id,{lien:n})}}>🔗 Lien</button>
      </div>
    </div>
  `}function Fc(e,t,n){let r=e.bibliotheque.compositions.find(e=>e.id===t);if(!r||r.blocs.length===0)return P`<div class="ecran"><p class="fil-vide">Composition introuvable.</p></div>`;if($.resume&&$.compositionId===t){let t=$.resume;return P`
      <div class="ecran entrainement entrainement-resume">
        <div class="entrainement-bloc" style="text-align:center">
          <div class="entrainement-prepa">Séance terminée ✓</div>
          <div class="entrainement-nom">${t.nom}</div>
          <div class="details" style="padding-top:8px">${t.blocs} pas parcourus · durée réalisée : ${kc(t.ecouleSec)}</div>
        </div>
        <div class="entrainement-actions" style="justify-content:center">
          <button class="bouton principal" @click=${()=>{$.resume=null,$.compositionId=null,$.debut=null,e.retour()}}>Fermer</button>
        </div>
      </div>`}$.compositionId!==t&&($.compositionId=t,$.debut=Date.now(),$.resume=null);let i=Math.max(0,Math.min(n,r.blocs.length-1)),a=r.blocs[i],o=r.blocs[i+1],s=a.techniqueId?e.technique(a.techniqueId):void 0,c=Ac(r),l=n=>{Zc(),e.ecran={type:`entrainement`,compositionId:t,index:n},window.scrollTo({top:0})},u=()=>{$c(),$.compositionId=null,$.debut=null,e.retour()},d=t=>t.type===`technique`?t.techniqueId&&e.technique(t.techniqueId)?.nom||t.texte||`technique`:t.texte||(t.dureeSec===void 0?``:kc(t.dureeSec)),f=a.type===`technique`&&a.consigne?P`<div class="entrainement-consigne">↳ ${a.consigne}</div>`:F,p=a.dureeSec!==void 0;p?el(e,r,a,i):(Q.blocId!==null&&Zc(),Xc(e,a));let m=p&&Q.blocId===a.id&&Q.phase===`prepa`,h=p?m?P`<div class="entrainement-prepa">Préparez-vous</div>
          <div class="entrainement-chrono ${Q.enMarche?``:`en-pause`}">${Q.restant}</div>`:P`<div class="entrainement-chrono ${Q.enMarche?``:`en-pause`}">${Gc(Q.blocId===a.id?Q.restant:a.dureeSec)}</div>`:F,g=Math.max(0,Math.round(e.preferences.transitionSec??3));return Q.mode=e.preferences.sonSeance??`les-deux`,P`
    <div class="ecran entrainement">
      <div class="entrainement-entete">
        <span class="entrainement-titre">${r.nom}</span>
        <span class="entrainement-progression">${i+1} / ${r.blocs.length}${c>0?P` · ⏱ ${kc(c)}`:F}</span>
      </div>
      <div class="entrainement-bloc">
        ${a.type===`technique`?s?P`<button class="entrainement-vignette-lien" title="Voir la fiche" @click=${()=>e.ouvrirFiche(s.id)}>
                  <div class="entrainement-vignette">${eo(e,s)}</div>
                </button>
                <div class="entrainement-nom">${s.nom}</div>
                ${s.nomTraditionnel?P`<div class="entrainement-jp">${s.nomTraditionnel}</div>`:F}
                ${f}${h}`:P`<div class="entrainement-nom sourdine">${a.texte??`Technique`} — indisponible</div>${h}`:a.type===`media`?P`<div class="entrainement-media">${a.medias.map(t=>To(e,t))}</div>`:P`<div class="entrainement-texte">${a.type===`pause`?a.texte||`Pause`:a.texte||`Segment`}</div>${h}`}
      </div>
      ${p&&!Q.enMarche&&Q.pauseAuto&&Q.blocId===a.id?P`<div class="entrainement-pause-auto">Séance mise en pause — l'app est passée en arrière-plan.</div>`:F}
      ${p?P`<div class="entrainement-chrono-controles">
            <button class="bouton" @click=${()=>{Q.enMarche=!Q.enMarche,Q.pauseAuto=!1,e.requestUpdate()}}>
              ${Q.enMarche?`⏸ Pause`:`▶ Reprendre`}
            </button>
            <button class="bouton entrainement-son" title="Retour sonore : voix + bips, voix seule, bips seuls, ou muet"
              @click=${()=>{let t=[`les-deux`,`voix`,`bips`,`muet`];e.definirSonSeance(t[(t.indexOf(Q.mode)+1)%t.length])}}>
              ${Q.mode===`les-deux`?`🔊 Voix + bips`:Q.mode===`voix`?`🗣 Voix`:Q.mode===`bips`?`🔔 Bips`:`🔇 Muet`}
            </button>
            <button class="bouton" title="Transition de préparation avant chaque pas minuté"
              @click=${()=>{let t=[0,3,5,10];e.definirTransition(t[(t.indexOf(g)+1)%t.length])}}>
              ${g>0?`⏳ Prépa ${g}s`:`⏳ Prépa off`}
            </button>
          </div>`:F}
      ${o?P`<div class="entrainement-suite">Ensuite : ${d(o)}</div>`:F}
      <div class="entrainement-actions">
        <button class="bouton" ?disabled=${i===0} @click=${()=>l(i-1)}>← Précédent</button>
        <button class="bouton" @click=${u}>Quitter</button>
        ${i===r.blocs.length-1?P`<button class="bouton principal" @click=${()=>Vc(e,r)}>Terminer</button>`:P`<button class="bouton principal" @click=${()=>l(i+1)}>Suivant →</button>`}
      </div>
    </div>
  `}var Q={blocId:null,phase:`actif`,restant:0,enMarche:!0,pauseAuto:!1,mode:`les-deux`,annonce:null,timer:null};function Ic(e){Q.blocId===null||!Q.enMarche||(Q.enMarche=!1,Q.pauseAuto=!0,Qc(),e.requestUpdate())}var Lc=null;async function Rc(){if(`wakeLock`in navigator&&!(Lc&&!Lc.released))try{Lc=await navigator.wakeLock.request(`screen`)}catch{Lc=null}}function zc(){Lc?.release().catch(()=>{}),Lc=null}var $={compositionId:null,debut:null,resume:null};function Bc(){$.compositionId=null,$.debut=null,$.resume=null}function Vc(e,t){let n=$.debut?Math.max(0,Math.round((Date.now()-$.debut)/1e3)):0;$c(),Yc(`Séance terminée`),Kc(660,380),$.resume={nom:t.nom,blocs:t.blocs.length,ecouleSec:n},e.requestUpdate()}var Hc=null,Uc=()=>Q.mode===`les-deux`||Q.mode===`voix`,Wc=()=>Q.mode===`les-deux`||Q.mode===`bips`;function Gc(e){let t=Math.max(0,Math.round(e));return`${Math.floor(t/60)}:${`${t%60}`.padStart(2,`0`)}`}function Kc(e=880,t=120,n=.18){if(Wc())try{let r=window.AudioContext||window.webkitAudioContext;Hc??=new r,Hc.resume?.();let i=Hc.currentTime,a=Hc.createOscillator(),o=Hc.createGain();a.type=`sine`,a.frequency.value=e,a.connect(o),o.connect(Hc.destination),o.gain.setValueAtTime(n,i),o.gain.exponentialRampToValueAtTime(1e-4,i+t/1e3),a.start(i),a.stop(i+t/1e3)}catch{}}function qc(e,t){return t.type===`technique`?t.techniqueId&&e.technique(t.techniqueId)?.nom||t.texte||`technique`:t.type===`pause`?t.texte?.trim()||`Pause`:t.texte?.trim()||`segment`}async function Jc(e){try{if(window.Capacitor?.isNativePlatform?.()){let{TextToSpeech:t}=await vc(async()=>{let{TextToSpeech:e}=await import(`./esm-DB60KP7u.js`);return{TextToSpeech:e}},__vite__mapDeps([0,1]),import.meta.url);await t.speak({text:e,lang:`fr-FR`,rate:1});return}}catch{}try{let t=window.speechSynthesis;if(!t)return;t.paused&&t.resume();let n=new SpeechSynthesisUtterance(e);n.lang=`fr-FR`,t.speak(n)}catch{}}function Yc(e){if(!Uc()||!e)return;let t=window;Array.isArray(t.__voix)&&t.__voix.push(e),Jc(e)}function Xc(e,t){Q.annonce!==t.id&&(Q.annonce=t.id,Yc(qc(e,t)))}function Zc(){Q.timer!==null&&(clearInterval(Q.timer),Q.timer=null),Q.blocId=null}function Qc(){try{window.speechSynthesis?.cancel()}catch{}try{window.Capacitor?.isNativePlatform?.()&&vc(()=>import(`./esm-DB60KP7u.js`).then(e=>e.TextToSpeech.stop()),__vite__mapDeps([0,1]),import.meta.url).catch(()=>{})}catch{}}function $c(){Zc(),Q.annonce=null,Qc()}function el(e,t,n,r){if(n.dureeSec===void 0||Q.blocId===n.id)return;Zc(),Q.blocId=n.id,Q.annonce=n.id,Q.enMarche=!0,Q.pauseAuto=!1;let i=Math.max(1,Math.round(n.dureeSec)),a=Math.max(0,Math.round(e.preferences.transitionSec??3)),o=qc(e,n);a>0?(Q.phase=`prepa`,Q.restant=a,Yc(`Préparez-vous. ${o}`),Kc(520,90)):(Q.phase=`actif`,Q.restant=i,Yc(`${o}, ${Ua(i)}`)),Q.timer=window.setInterval(()=>{if(e.ecran.type!==`entrainement`||e.ecran.compositionId!==t.id){$c();return}if(!(Q.blocId!==n.id||!Q.enMarche)){if(--Q.restant,Q.phase===`prepa`){if(Q.restant>0){Kc(520,90),e.requestUpdate();return}Q.phase=`actif`,Q.restant=i,Yc(`${o}, ${Ua(i)}`),Kc(720,160),e.requestUpdate();return}if(Q.restant>0){let t=Wa(i,Q.restant);t&&Yc(t),Q.restant<=3&&Kc(880,90),e.requestUpdate();return}Kc(440,380),Zc(),r+1<t.blocs.length?e.ecran={type:`entrainement`,compositionId:t.id,index:r+1}:Vc(e,t),e.requestUpdate()}},1e3)}function tl(e,t,n){let r=t.blocs.find(e=>e.id===n);return r?r.type===`technique`?(r.techniqueId?e.technique(r.techniqueId)?.nom:void 0)??r.texte??`la technique`:r.type===`pause`?r.texte||`la pause`:r.type===`media`?`le média`:r.texte||`l'étape`:`le pas`}function nl(e,t){return{reordonner:(n,r)=>{let i=e.bibliotheque?.compositions.find(e=>e.id===t.id);i&&Ja(i,n,r)},enregistrer:()=>void e.modifierComposition(t.id,()=>{}),ordre:()=>t.blocs.map(e=>e.id),nom:n=>tl(e,t,n)}}function rl(e,t,n,r){let i=n.techniqueId?e.technique(n.techniqueId):void 0,a=n.type===`technique`?i?P`<button class="bloc-technique-lecture" @click=${()=>e.ouvrirFiche(i.id)}>
            ${eo(e,i)}<span class="bloc-nom">${i.nom}</span>
          </button>`:P`<span class="puce-liaison absente">${n.texte??`technique`} — indisponible</span>`:n.type===`media`?P`<span class="bloc-media-corps">${n.medias.map(t=>To(e,t))}</span>`:P`<span class="bloc-texte">${n.type===`pause`?n.texte||`Pause`:n.texte}</span>`,o=n.type===`media`?F:n.consigne||n.dureeSec!==void 0?P`<div class="bloc-meta bloc-meta-lecture">
            ${n.type===`technique`&&n.consigne?P`<span class="bloc-consigne">↳ ${n.consigne}</span>`:F}
            ${n.dureeSec===void 0?F:P`<span class="bloc-duree">⏱ ${kc(n.dureeSec)}</span>`}
          </div>`:F;return P`
    <li class="bloc ${n.type} lecture ${il===n.id?`glisse`:``}"
        data-bloc-id=${n.id}>
      <!-- Édition INLINE (D-126) : glisser + modifier + supprimer directement en
           lecture, via le garde d'écriture (PIN) de modifierComposition — plus de
           crayon global. -->
      <button type="button" class="poignee-glisser"
        aria-label="Réordonner ${tl(e,t,n.id)} — glisser, ou flèches haut et bas"
        title="Glisser pour réordonner (ou flèches au clavier)"
        @pointerdown=${r=>al(e,t,n.id,r)}
        @keydown=${r=>jo(e,n.id,nl(e,t),r)}>⠿</button>
      <span class="bloc-nature">${n.type===`media`?F:`${r}.`}</span>
      ${a}
      <span class="bloc-outils">
        ${No(e,n.id,nl(e,t))}
        ${n.type===`media`?F:P`<button class="bouton-icone" aria-label="Modifier ce pas" title="Modifier ce pas"
              @click=${()=>{xc(),e.editionPas={compoId:t.id,blocId:n.id},e.requestUpdate()}}>✎</button>`}
        <button class="bouton-icone" aria-label="Retirer ce pas" title="Retirer ce pas"
          @click=${()=>void e.modifierComposition(t.id,e=>e.blocs=e.blocs.filter(e=>e.id!==n.id))}>✕</button>
      </span>
      ${o}
    </li>
  `}var il=null;function al(e,t,n,r){r.preventDefault(),il=n,e.requestUpdate();let i=n=>{if(!il)return;let r=(document.elementFromPoint(n.clientX,n.clientY)?.closest?.(`li.bloc`))?.getAttribute(`data-bloc-id`);if(r&&r!==il){let n=e.bibliotheque?.compositions.find(e=>e.id===t.id);n&&(Ja(n,il,r),e.requestUpdate())}},a=()=>{window.removeEventListener(`pointermove`,i),window.removeEventListener(`pointerup`,a),window.removeEventListener(`pointercancel`,a);let n=il!==null;il=null,n&&e.modifierComposition(t.id,()=>{}),e.requestUpdate()};window.addEventListener(`pointermove`,i),window.addEventListener(`pointerup`,a),window.addEventListener(`pointercancel`,a)}function ol(e,t){let n={...e};if(t.description!==void 0){let e=t.description.trim();e?n.description=e:delete n.description}return t.attribution!==void 0&&t.attribution.trim()&&(n.attribution=t.attribution.trim()),t.pointsCles!==void 0&&(n.pointsCles=t.pointsCles.map(e=>e.trim()).filter(e=>e.length>0)),t.modifiePar!==void 0&&t.modifiePar.trim()&&(n.modifiePar=t.modifiePar.trim()),n}function sl(e){let{avecVideos:t,nbManquants:n}=e,r=t&&n===0,i=[];return t?n>0&&i.push(`${n} vidéo${n>1?`s`:``} absente${n>1?`s`:``} du stockage`):i.push(`toutes les vidéos (fichier léger)`),i.push(`les réglages d'appareil (thème, démarrage, protections — se reconfigurent après restauration)`),{complete:r,role:r?`Sauvegarde complète de cette installation`:`Sauvegarde PARTIELLE de cette installation`,exclusions:i}}function cl(e){return`${(e/(1<<20)).toFixed(1)} Mo`}function ll(e){return[`Movenso — diagnostic technique`,`généré : ${e.genereLe}`,`plateforme : ${e.plateforme}`,`version du schéma : ${e.versionSchema}`,`version du conteneur .movpack : ${e.versionMovpack}`,``,`Contenu :`,`  disciplines : ${e.disciplines}`,`  techniques : ${e.techniques}`,`  contributions : ${e.contributions}`,`  compositions : ${e.compositions}`,`  favoris : ${e.favoris}`,``,`Médias :`,`  références locales : ${e.mediasReferences}`,`  fichiers présents : ${e.mediasPresents}`,`  vidéos manquantes (référencées, fichier absent) : ${e.mediasManquants}`,`  fichiers orphelins (présents, plus référencés) : ${e.orphelins}`,``,`Stockage :`,e.espace?`  utilisé : ${cl(e.espace.usage)} / quota estimé : ${cl(e.espace.quota)}`:`  estimation indisponible sur cet appareil`,``,`Dernier échec :`,e.dernierEchec?`  ${e.dernierEchec.operation} — ${e.dernierEchec.message} (${e.dernierEchec.quand})`:`  aucun depuis le démarrage`,``,`Ce diagnostic ne rapporte que des informations techniques agrégées :`,`aucune donnée personnelle, aucun réglage de protection, aucun contenu de`,`média, aucune adresse privée.`].join(`
`)}function ul(e){let t=e.capture,n=t.question?fl(e):t.etape===`contenu`?ml(e):t.etape===`apercu`?pl(e):t.etape===`note`?hl(e):gl(e),r=t.rattacherSeul?`Rattacher`:`Capturer`;return P`
    <div class="voile" @click=${()=>e.fermerCapture()}></div>
    <div class="feuille" role="dialog" aria-modal="true" tabindex="-1" aria-label=${r}>
      <div class="prise"></div>
      <h2>${r}</h2>
      <div class="geste">${t.question?`Que faire de cette capture ?`:t.rattacherSeul?`Un seul geste`:t.etape===`contenu`?`Geste 1 / 3 — le contenu`:t.etape===`apercu`?`Geste 1 / 3 — vérifier le contenu`:t.etape===`note`?`Geste 2 / 3 — la note`:`Geste 3 / 3 — sais-tu où le ranger ?`}</div>
      ${n}
    </div>
  `}function dl(e,t){let n=document.createElement(`input`);n.type=`file`,n.accept=`video/*`,t&&n.setAttribute(`capture`,`environment`),n.onchange=()=>{let r=n.files?.[0];!r||!e.capture||(e.capture.apercuUrl&&URL.revokeObjectURL(e.capture.apercuUrl),e.capture={...e.capture,video:r,apercuUrl:URL.createObjectURL(r),camera:t,etape:`apercu`})},n.click()}function fl(e){let t=e.capture,n=(t.provenance??`personnel`)!==`ressource`||(t.attribution??``).trim()!==``;return P`
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
  `}function pl(e){let t=e.capture,n=n=>{t.apercuUrl&&URL.revokeObjectURL(t.apercuUrl),e.capture={...t,apercuUrl:void 0,...n}};return P`
    ${t.video&&t.apercuUrl?P`<div class="media-video"><video src=${t.apercuUrl} controls playsinline autoplay muted></video></div>
          <div class="apercu-infos">${(t.video.size/1e6).toFixed(1)} Mo — rien n'est encore enregistré</div>`:F}
    ${t.lien?P`<div class="apercu-lien">
            <span class="joint">🔗 ${t.lien}</span>
            <div class="apercu-infos">${(e=>{if(/youtube\.com|youtu\.be/.test(e))return`YouTube — lecture en ligne`;try{return`${new URL(e).hostname} — lecture en ligne`}catch{return`lien — lecture en ligne`}})(t.lien)} — l'URL est conservée telle quelle</div>
          </div>`:F}
    <div class="actions">
      <button class="bouton" @click=${()=>n({video:void 0,lien:void 0,etape:`contenu`})}>
        Abandonner
      </button>
      ${t.video?P`<button class="bouton" @click=${()=>dl(e,t.camera??!1)}>
            ${t.camera?`Refilmer`:`Choisir un autre fichier`}
          </button>`:P`<button class="bouton" @click=${()=>n({saisieLien:!0,etape:`contenu`})}>
            Modifier
          </button>`}
      <button class="bouton principal" @click=${()=>n({etape:`note`})}>Utiliser</button>
    </div>
  `}function ml(e){let t=e.capture;return P`
    <div class="choix-double">
      <button @click=${()=>dl(e,!0)}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="6" width="14" height="12" rx="2"/><path d="m16 10 6-3v10l-6-3"/></svg>
        Filmer <span class="indice">caméra, hors ligne</span>
      </button>
      <button @click=${()=>e.capture={...e.capture,etape:`note`}}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>
        Noter <span class="indice">un mot peut suffire</span>
      </button>
    </div>
    <div class="choix-secondaire">
      <button class="action-douce" @click=${()=>dl(e,!1)}>
        ⤒ Ajouter une vidéo existante <span>(depuis l'appareil, stockée hors ligne)</span>
      </button>
      ${t.saisieLien?P`<div class="creation-discipline" style="margin-top:6px">
            <input placeholder="Coller un lien (YouTube ou autre)…" aria-label="Lien de la vidéo" autofocus .value=${t.lien??``}
                   @keydown=${n=>{if(n.key===`Enter`){let r=n.target.value.trim();r&&(e.capture={...t,lien:r,etape:`apercu`})}}}>
            <button class="bouton principal"
              @click=${n=>{let r=n.target.parentElement.querySelector(`input`).value.trim();r&&(e.capture={...t,lien:r,etape:`apercu`})}}>OK</button>
          </div>`:P`<button class="action-douce" @click=${()=>e.capture={...t,saisieLien:!0}}>
            🔗 Coller un lien <span>(YouTube ou autre — lecture en ligne)</span>
          </button>`}
    </div>
  `}function hl(e){let t=e.capture,n=n=>{e.capture={...t,note:n.target.value}},r=t.provenance??`personnel`,i=n=>e.capture={...t,provenance:n,...n===`personnel`?{attribution:``}:{}},a=r!==`ressource`||(t.attribution??``).trim()!==``;return P`
    ${t.video?P`<span class="joint">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
          vidéo jointe (${(t.video.size/1e6).toFixed(1)} Mo)
        </span><div style="height:10px"></div>`:F}
    ${t.lien?P`<span class="joint">🔗 ${t.lien}</span><div style="height:10px"></div>`:F}
    <textarea class="champ-note"
              placeholder="Un mot peut suffire (« la banane »). Une vidéo peut suffire. Développe si tu veux."
              .value=${t.note} @input=${n} autofocus></textarea>
    ${t.autreProvenance?P`<div class="chips-filtres" style="padding:10px 0 0" aria-label="Qui affirme ceci ?">
            <button class="chip-filtre ${r===`personnel`?`actif`:``}" @click=${()=>i(`personnel`)}>Moi</button>
            <button class="chip-filtre ${r===`enseignement`?`actif`:``}" @click=${()=>i(`enseignement`)}>Mon prof / club</button>
            <button class="chip-filtre ${r===`ressource`?`actif`:``}" @click=${()=>i(`ressource`)}>Une ressource</button>
          </div>
          ${r===`personnel`?F:P`<div style="margin-top:8px">
                <input class="champ-note" style="min-height:0" aria-label=${r===`enseignement`?`Qui l'enseigne ?`:`Source`}
                       placeholder=${r===`enseignement`?`Qui l'enseigne ? (ex. Club, Sensei Dupont)`:`Source (obligatoire — ex. chaîne, livre)`}
                       .value=${t.attribution??``}
                       @input=${t=>e.capture={...e.capture,attribution:t.target.value}}>
              </div>`}`:P`<button class="action-douce autre-provenance" style="margin-top:10px"
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
  `}function gl(e){let t=e.capture,n=e.bibliotheque,r=!t.rattacherSeul&&e.ecran.type===`fiche`?e.technique(e.ecran.techniqueId):void 0,i=t.rechercheRattache??``,a=t.chercherPartout?void 0:t.disciplineChoisieId,o=i.trim()?vt(n,i,30).filter(e=>!a||e.disciplineId===a).slice(0,6):[],s=e=>n.disciplines.find(t=>t.id===e)?.nom??``,c=n=>{e.capture={...t,rechercheRattache:n.target.value}},l=t.rattacherSeul?n.contributions.find(e=>e.id===t.rattacherSeul):void 0;return P`
    ${l?P`<div class="reprise-contenu">
          <textarea class="champ-note" style="min-height:52px" .value=${l.description??``}
            placeholder="Ton mot, ton libellé — modifiable ici"
            @change=${t=>void e.majContribution(l.id,t.target.value)}></textarea>
          ${l.medias.map(t=>t.type===`local`?P`<movenso-video-locale .app=${e} .mediaId=${t.id}></movenso-video-locale>`:P`<span class="joint" style="margin-top:6px">🔗 ${t.ref}</span>`)}
          ${l.provenance===`personnel`?F:P`<div class="apercu-infos">
                ${l.provenance===`enseignement`?`Enseignement`:`Ressource`}${l.attribution?` · ${l.attribution}`:``}
                — la provenance choisie est conservée
              </div>`}
          <button class="action-douce" style="margin:8px 0"
            @click=${()=>{confirm(`Supprimer cette capture ? (un snapshot est conservé)`)&&(e.supprimerContribution(l.id),e.fermerCapture())}}>
            ✕ Supprimer cette capture <span>réversible — snapshot conservé</span>
          </button>
        </div>`:F}
    ${r?P`<span class="joint">Suggestion : ${r.nom} (fiche ouverte)</span><div style="height:8px"></div>`:F}
    ${t.compositionCible&&!t.rattacherSeul?P`<button class="action-douce" style="width:100%; margin-bottom:8px"
          @click=${()=>void e.terminerCaptureRepere()}>
          ⧉ Ajouter comme repère à « ${e.bibliotheque.compositions.find(e=>e.id===t.compositionCible)?.nom??`la composition`} »
          <span>le mot et la vidéo rejoignent la composition, pas une fiche</span>
        </button>`:F}
    <div class="recherche" style="margin:0">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.8-3.8"/></svg>
      <input placeholder="À quelle technique ?" aria-label="Chercher la technique à rattacher" autocomplete="off" .value=${i} @input=${c}>
    </div>
    <div class="resultats" style="padding:6px 0 0">
      ${r&&!i.trim()?P`<button class="resultat" @click=${()=>void e.terminerCapture(r.id)}>
            <span>${r.nom}</span><span class="jp">${r.nomTraditionnel??``}</span><span class="fam">suggérée</span>
          </button>`:F}
      ${o.map(n=>P`<button class="resultat" @click=${()=>void e.terminerCapture(n.id)}>
          ${eo(e,n)}
          <span class="resultat-nom">${n.nom}</span><span class="jp">${n.nomTraditionnel??``}</span>
          ${t.chercherPartout?P`<span class="fam">${s(n.disciplineId)}</span>`:F}
        </button>`)}
      ${i.trim()&&o.length===0?P`<p class="fil-vide" style="padding:6px 0 0">
            Rien de ce nom${a?` dans ${s(a)}`:``} — crée-la ci-dessous.
          </p>`:F}
      ${a&&i.trim()?P`<button class="action-douce" style="margin-top:6px"
            @click=${()=>e.capture={...t,chercherPartout:!0}}>
            Chercher dans toutes les disciplines <span>(au-delà de ${s(a)})</span>
          </button>`:F}
      ${_l(e,i.trim())}
    </div>
    <div class="actions">
      <button class="bouton" @click=${()=>e.fermerCapture()}>Annuler</button>
      ${t.rattacherSeul?F:P`<button class="bouton" title="Tu la retrouveras dans Plus › À traiter › Captures à rattacher"
            @click=${()=>void e.terminerCapture(null)}>Garder pour plus tard</button>`}
    </div>
  `}function _l(e,t){let n=e.capture,r=e.bibliotheque,i=(n.nouveauNom??t).trim(),a=e.ecran.type===`fiche`?e.technique(e.ecran.techniqueId)?.disciplineId:void 0,o=r.disciplines.length>1&&!a,s=n.disciplineChoisieId??a??r.disciplines[0]?.id;return P`
    <div class="section-titre" style="padding:12px 4px 2px">Ou créer une nouvelle technique</div>
    <div style="padding:2px 0">
      <input class="champ-note champ-nouveau-nom" style="min-height:0" aria-label="Nom de la nouvelle technique"
             placeholder="Nom de la nouvelle technique…"
             .value=${n.nouveauNom??t}
             @input=${t=>e.capture={...n,nouveauNom:t.target.value}}>
    </div>
    ${r.disciplines.length===0?P`<div style="padding:6px 0 2px">
          <input class="champ-note champ-discipline" style="min-height:0" aria-label="Discipline" placeholder="Dans quelle discipline ? (ex. Judo, Boxe…)"
                 .value=${n.disciplineNom??``}
                 @input=${t=>e.capture={...n,disciplineNom:t.target.value}}>
        </div>`:F}
    ${o?P`<div class="chips-filtres" style="padding:8px 0 2px">
          ${r.disciplines.map(t=>P`<button class="chip-filtre ${s===t.id?`actif`:``}"
              @click=${()=>e.capture={...n,disciplineChoisieId:t.id}}>${t.nom}</button>`)}
        </div>`:F}
    <button class="resultat creer" ?disabled=${!i} @click=${()=>{i&&e.terminerCapture(null,i,{...s?{disciplineId:s}:{},...n.disciplineNom?{disciplineNom:n.disciplineNom}:{}})}}>
      <span>＋ Créer ${i?`« ${i} »`:`cette technique`}</span><span class="fam">et y rattacher la capture</span>
    </button>
  `}function vl(e){let t=e.ajoutMedia;if(t.mode===`contribution`)return P`
      <div class="voile" @click=${()=>e.ajoutMedia=null}></div>
      <div class="feuille" role="dialog" aria-modal="true" tabindex="-1" aria-label="Ajouter du contenu">
        <div class="prise"></div>
        <h2>Ajouter du contenu</h2>
        <div class="geste">De qui vient ce contenu ? — la technique est déjà connue</div>
        ${yl(e)}
      </div>
    `;let n=t.fichier!==void 0||t.lien!==void 0;return P`
    <div class="voile" @click=${()=>e.ajoutMedia=null}></div>
    <div class="feuille" role="dialog" aria-modal="true" tabindex="-1" aria-label="Ajouter un média">
      <div class="prise"></div>
      <h2>Ajouter un média</h2>
      <div class="geste">${n?`Qui a produit ce média ?`:`Le contenu — filmer, choisir ou lier`}</div>
      ${n?Sl(e):xl(e)}
    </div>
  `}function yl(e){let t=e.ajoutMedia,n=n=>e.ajoutMedia={...t,provenance:n,...n===`personnel`?{attribution:``}:{}},r=((t.texte??``).trim()!==``||t.fichier!==void 0||(t.lien??``).trim()!==``)&&(t.provenance!==`ressource`||(t.attribution??``).trim()!==``);return P`
    <div class="chips-filtres" style="padding:4px 0 0" aria-label="De qui vient ce contenu ?">
      <button class="chip-filtre ${t.provenance===`personnel`?`actif`:``}" @click=${()=>n(`personnel`)}>Moi</button>
      <button class="chip-filtre ${t.provenance===`enseignement`?`actif`:``}" @click=${()=>n(`enseignement`)}>Mon prof / club</button>
      <button class="chip-filtre ${t.provenance===`ressource`?`actif`:``}" @click=${()=>n(`ressource`)}>Une ressource</button>
    </div>
    ${t.provenance===`personnel`?F:P`<div style="margin-top:8px">
          <input class="champ-note" style="min-height:0" aria-label=${t.provenance===`enseignement`?`Qui l'enseigne ?`:`Source`}
                 placeholder=${t.provenance===`enseignement`?`Qui l'enseigne ? (ex. Club, Sensei Dupont)`:`Source (obligatoire — ex. chaîne, livre)`}
                 .value=${t.attribution??``}
                 @input=${t=>e.ajoutMedia={...e.ajoutMedia,attribution:t.target.value}}>
        </div>`}
    <textarea class="champ-note" style="margin-top:8px; min-height:72px"
              placeholder="Texte — explication, points d'attention… (un média peut suffire)"
              .value=${t.texte??``}
              @input=${t=>e.ajoutMedia={...e.ajoutMedia,texte:t.target.value}}></textarea>
    ${t.fichier?P`<span class="joint" style="margin-top:6px">🎞 vidéo jointe (${(t.fichier.size/1e6).toFixed(1)} Mo)</span>`:F}
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
  `}function bl(e,t){let n=document.createElement(`input`);n.type=`file`,n.accept=`video/*`,t&&n.setAttribute(`capture`,`environment`),n.onchange=()=>{let t=n.files?.[0];t&&e.ajoutMedia&&(e.ajoutMedia={...e.ajoutMedia,fichier:t})},n.click()}function xl(e){let t=e.ajoutMedia;return P`
    <div class="choix-double">
      <button @click=${()=>bl(e,!0)}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="6" width="14" height="12" rx="2"/><path d="m16 10 6-3v10l-6-3"/></svg>
        Filmer maintenant <span class="indice">caméra, hors ligne</span>
      </button>
      <button @click=${()=>bl(e,!1)}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3v12"/><path d="m7 8 5-5 5 5"/><rect x="4" y="15" width="16" height="6" rx="2"/></svg>
        Une vidéo de l'appareil <span class="indice">stockée hors ligne</span>
      </button>
    </div>
    <div class="choix-secondaire">
      ${t.saisieLien?P`<div class="creation-discipline" style="margin-top:6px">
            <input placeholder="Coller un lien (YouTube ou autre)…" aria-label="Lien de la vidéo" autofocus
                   @keydown=${n=>{if(n.key===`Enter`){let r=n.target.value.trim();r&&(e.ajoutMedia={...t,lien:r})}}}>
            <button class="bouton principal"
              @click=${n=>{let r=n.target.parentElement.querySelector(`input`).value.trim();r&&(e.ajoutMedia={...t,lien:r})}}>OK</button>
          </div>`:P`<button class="action-douce" @click=${()=>e.ajoutMedia={...t,saisieLien:!0}}>
            🔗 Coller un lien <span>(YouTube ou autre — lecture en ligne)</span>
          </button>`}
    </div>
    <div class="actions">
      <button class="bouton" @click=${()=>e.ajoutMedia=null}>Annuler</button>
    </div>
  `}function Sl(e){let t=e.ajoutMedia,n=n=>e.ajoutMedia={...t,provenance:n,...n===`personnel`?{attribution:``}:{}},r=t.provenance!==`ressource`||(t.attribution??``).trim()!==``;return P`
    ${t.fichier?P`<span class="joint">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
          vidéo jointe (${(t.fichier.size/1e6).toFixed(1)} Mo)
        </span><div style="height:10px"></div>`:F}
    ${t.lien?P`<span class="joint">🔗 ${t.lien}</span><div style="height:10px"></div>`:F}
    <div class="chips-filtres" style="padding:4px 0 0" aria-label="Qui a produit ce média ?">
      <button class="chip-filtre ${t.provenance===`personnel`?`actif`:``}" @click=${()=>n(`personnel`)}>Moi</button>
      <button class="chip-filtre ${t.provenance===`enseignement`?`actif`:``}" @click=${()=>n(`enseignement`)}>Mon prof / club</button>
      <button class="chip-filtre ${t.provenance===`ressource`?`actif`:``}" @click=${()=>n(`ressource`)}>Une ressource</button>
    </div>
    ${t.provenance===`personnel`?F:P`<div style="margin-top:8px">
          <input class="champ-note" style="min-height:0" aria-label=${t.provenance===`enseignement`?`Qui l'enseigne ?`:`Source`}
                 placeholder=${t.provenance===`enseignement`?`Qui l'enseigne ? (ex. Club, Sensei Dupont)`:`Source (obligatoire — ex. chaîne, livre)`}
                 .value=${t.attribution??``}
                 @input=${t=>e.ajoutMedia={...e.ajoutMedia,attribution:t.target.value}}>
        </div>`}
    <div style="margin-top:8px">
      <input class="champ-note champ-libelle" style="min-height:0" aria-label="Libellé du média"
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
  `}function Cl(e){let t=e.ajouter;return P`
    <div class="voile" @click=${()=>e.ajouter=null}></div>
    <div class="feuille" role="dialog" aria-modal="true" tabindex="-1" aria-label="Ajouter">
      <div class="prise"></div>
      <h2>Que veux-tu ajouter ?</h2>
      ${t.creation?P`<div class="geste">Son nom et sa discipline suffisent.</div>`:F}
      ${t.creation?Tl(e):wl(e)}
    </div>
  `}function wl(e){let t=e.ajouter;return P`
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
  `}function Tl(e){let t=e.ajouter,n=e.bibliotheque,r=t.disciplineChoisieId??t.disciplineId??n.disciplines[0]?.id,i=n.disciplines.find(e=>e.id===r),a=(t.nomTechnique??``).trim(),o=a!==``&&(n.disciplines.length>0?r!==void 0:(t.disciplineNom??``).trim()!==``),s=r&&a?It(n,r,a):{exacte:null,proches:[]},c=()=>({...t.appellation?.trim()?{nomTraditionnel:t.appellation.trim()}:{},...t.familleId?{familleId:t.familleId}:{},...t.niveauxIds?.length?{niveauxIds:t.niveauxIds}:{}}),l=async()=>{if(!o||s.exacte&&!confirm(`« ${s.exacte.nom} » existe déjà dans ${i?.nom??`cette discipline`}.\nCréer quand même une technique distincte ?`))return;let l=n.disciplines.length?r:void 0;l||=await e.creerDiscipline(t.disciplineNom.trim())??void 0,l&&(e.ajouter=null,await e.creerTechnique(l,a,c()))},u=t=>{e.ajouter=null,e.ouvrirFiche(t)},d=n=>{let r=t.niveauxIds??[];e.ajouter={...t,niveauxIds:r.includes(n)?r.filter(e=>e!==n):[...r,n]}},f=(i?.familles.length??0)>0||(i?.niveaux.length??0)>0;return P`
    <div style="padding:2px 0">
      <input class="champ-note champ-nouveau-nom" style="min-height:0" autofocus aria-label="Nom de la technique"
             placeholder="Nom de la technique…"
             .value=${t.nomTechnique??``}
             @input=${n=>e.ajouter={...t,nomTechnique:n.target.value}}
             @keydown=${e=>{e.key===`Enter`&&l()}}>
    </div>
    ${s.exacte||s.proches.length?P`<div class="doublons">
          ${s.exacte?P`<div class="doublon-exacte">« ${s.exacte.nom} » existe déjà dans ${i?.nom??`cette discipline`}.</div>`:P`<div>Technique similaire déjà présente :</div>`}
          <div class="chips-filtres" style="padding:6px 0 0">
            ${[...s.exacte?[s.exacte]:[],...s.proches].map(e=>P`<button class="chip-filtre" @click=${()=>u(e.id)}>Utiliser « ${e.nom} »</button>`)}
          </div>
        </div>`:F}
    ${t.disciplineId===void 0&&n.disciplines.length>0?P`<div class="chips-filtres" style="padding:8px 0 2px" aria-label="Dans quelle discipline ?">
          ${n.disciplines.map(n=>P`<button class="chip-filtre ${r===n.id?`actif`:``}"
              @click=${()=>e.ajouter={...t,disciplineChoisieId:n.id,familleId:void 0,niveauxIds:[]}}>${n.nom}</button>`)}
        </div>`:F}
    ${n.disciplines.length===0?P`<div style="padding:6px 0 2px">
          <input class="champ-note champ-discipline" style="min-height:0" aria-label="Discipline"
                 placeholder="Dans quelle discipline ? (ex. Judo, Boxe…)"
                 .value=${t.disciplineNom??``}
                 @input=${n=>e.ajouter={...t,disciplineNom:n.target.value}}>
        </div>`:F}
    ${f?t.classer?P`<div class="classer-maintenant">
            ${i.familles.length?P`<div class="section-titre" style="padding:8px 2px 2px">Famille</div>
                  <div class="chips-filtres">
                    ${i.familles.map(n=>P`<button class="chip-filtre ${t.familleId===n.id?`actif`:``}"
                        @click=${()=>e.ajouter={...t,familleId:t.familleId===n.id?void 0:n.id}}>${n.nom}</button>`)}
                  </div>`:F}
            ${i.niveaux.length?P`<div class="section-titre" style="padding:8px 2px 2px">Niveau</div>
                  <div class="chips-filtres">
                    ${i.niveaux.map(e=>P`<button class="chip-filtre ${t.niveauxIds?.includes(e.id)?`actif`:``}"
                        @click=${()=>d(e.id)}>${e.nom}</button>`)}
                  </div>`:F}
            <button class="action-douce" style="margin-top:8px"
              @click=${()=>e.ajouter={...t,classer:!1,familleId:void 0,niveauxIds:[]}}>
              Je le ferai plus tard <span>la technique se crée sans classement</span>
            </button>
          </div>`:P`<button class="action-douce" style="margin-top:8px" @click=${()=>e.ajouter={...t,classer:!0}}>
            Classer maintenant <span>(facultatif — famille, niveau)</span>
          </button>`:F}
    <div class="actions">
      <button class="bouton" @click=${()=>e.ajouter={...t,creation:!1}}>← Retour</button>
      <button class="bouton principal" ?disabled=${!o} @click=${()=>void l()}>
        ${s.exacte||s.proches.length?`Créer quand même`:`Créer la technique`}
      </button>
    </div>
  `}var El=class extends Ae{static properties={app:{attribute:!1},mediaId:{attribute:!1},url:{state:!0}};constructor(){super(),this.mediaId=``,this.url=void 0}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.app.stockage.urlVideo(this.mediaId).then(e=>this.url=e)}disconnectedCallback(){super.disconnectedCallback(),this.url&&URL.revokeObjectURL(this.url)}render(){return this.url===void 0?F:this.url===null?P`<div class="video-absente" style="font-size:12.5px;color:var(--sourdine)">
        Vidéo introuvable sur cet appareil.
        <button class="action-douce" style="margin-top:4px" @click=${()=>this.app.ouvrirPlusSection(`medias`)}>
          Vérifier <span>(Plus — Médias)</span>
        </button>
      </div>`:P`<div class="media-video"><video src=${this.url} controls playsinline preload="metadata"
      @play=${e=>{document.querySelectorAll(`video`).forEach(t=>{t!==e.target&&t.pause()}),this.app.mediasDeplies.size&&(this.app.mediasDeplies=new Set,this.app.requestUpdate())}}></video></div>`}};customElements.define(`movenso-video-locale`,El);var Dl=class e extends Ae{static properties={bibliotheque:{state:!0},ecran:{state:!0},capture:{state:!0},ajoutMedia:{state:!0},ajouter:{state:!0},creationCompo:{state:!0},ajoutPas:{state:!0},editionPas:{state:!0},editionLien:{state:!0},menuComposition:{state:!0},partagePreparation:{state:!0},enregistrementMedia:{state:!0},toast:{state:!0},occupe:{state:!0},preferences:{state:!0},erreurDemarrage:{state:!0}};annulationOccupe=null;#e=!1;rechercheGlobale=``;pratiqueDeplie={reprendre:!1,favoris:!1};mediasDeplies=new Set;creationDiscipline=!1;filtres={disciplineId:null,niveauId:null,familleId:null,source:null,favorisSeuls:!1,texte:``};fusionDoublon=null;doublonOuvert=null;disciplineGestion=null;stockage=new Pr;#t;#n=0;constructor(){super(),this.bibliotheque=null,this.ecran={type:`bibliotheques`},this.capture=null,this.ajoutMedia=null,this.ajouter=null,this.creationCompo=null,this.ajoutPas=null,this.editionPas=null,this.editionLien=null,this.menuComposition=null,this.partagePreparation=null,this.enregistrementMedia=null,this.toast=null,this.occupe=null,this.preferences=kr(),this.erreurDemarrage=null}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.#r(),document.addEventListener(`visibilitychange`,()=>{document.visibilityState===`hidden`&&(this.preferences.protections?.verrouillage??`5min`)===`arriere-plan`&&this.verrouiller(!0),this.ecran.type===`entrainement`&&(document.visibilityState===`hidden`?Ic(this):Rc())}),document.addEventListener(`keydown`,e=>{if(e.key!==`Escape`)return;let t=document.querySelectorAll(`.voile`),n=t[t.length-1];n&&(e.preventDefault(),n.click())})}async#r(){window.addEventListener(`error`,e=>this.#a(`erreur non gérée`,e.error??e.message)),window.addEventListener(`unhandledrejection`,e=>this.#a(`promesse non gérée`,e.reason)),this.#_(!0),this.stockage.nettoyerStaging();let e;try{let t=!!navigator.storage?.getDirectory,n=typeof FileSystemFileHandle<`u`&&`createWritable`in FileSystemFileHandle.prototype;if(!t||!n){let e=window.Capacitor;throw Error(e?.isNativePlatform?.()?`Le stockage local n'est pas disponible sur cette version d'Android. Mets à jour Android System WebView (Play Store), puis rouvre Movenso.`:`Le stockage local n'est pas disponible sur ce navigateur. Movenso fonctionne sur Chrome, Edge et Firefox récents (Safari n'est pas encore supporté). Tes données d'un autre appareil restent transportables : une sauvegarde .movpack s'importe sur n'importe quel navigateur supporté.`)}e=await this.stockage.charger(),e===null&&(e=Re(),await this.stockage.sauvegarder(e))}catch(e){this.erreurDemarrage=e instanceof Error&&e.message.startsWith(`Le stockage`)?e.message:`Movenso n'a pas pu lire ses données sur cet appareil. Si tu viens d'installer une version plus ANCIENNE par-dessus une récente, réinstalle la dernière version — tes données ne sont pas perdues.`,this.requestUpdate();return}this.preferences=await this.stockage.chargerPreferences(),this.#o(),this.bibliotheque=e,this.#i(e);let{mode:t,disciplineId:n}=this.preferences.demarrage,r=t===`discipline`?n:t===`derniere`?this.preferences.derniereDisciplineId:void 0;(t===`discipline`||t===`derniere`)&&r&&e.disciplines.some(e=>e.id===r)?this.ecran={type:`discipline`,disciplineId:r}:t===`discipline`&&n?this.afficherToast(`La discipline choisie au démarrage n'existe plus — ouverture sur la Bibliothèque`):t===`favoris`?this.ecran={type:`favoris`}:t===`compositions`?this.ecran={type:`compositions`}:t===`relations`&&this.preferences.vueRelationBeta&&this.ouvrirRelationsVisuelle(),await this.#s()}async#i(e){try{let t=await this.stockage.listerVideos(),n=this.#v(e),r=0;for(let e of t)n.has(e)||r++;r>0&&this.afficherToast(`${r} fichier${r>1?`s`:``} vidéo orphelin${r>1?`s`:``} détecté${r>1?`s`:``} — vérifie et nettoie dans Plus › Médias`)}catch{}}dernierEchec=null;#a(e,t){let n=(t instanceof Error?t.message:String(t)).slice(0,200);this.dernierEchec={quand:new Date().toISOString(),operation:e,message:n}}#o(){let e=document.documentElement,t=this.preferences.theme??`auto`;t===`auto`?delete e.dataset.theme:e.dataset.theme=t;let n=this.preferences.tonalite??`vermillon`;n===`vermillon`?delete e.dataset.tonalite:e.dataset.tonalite=n}changerApparence(e){this.preferences={...this.preferences,...e.theme===void 0?{}:{theme:e.theme},...e.tonalite===void 0?{}:{tonalite:e.tonalite}},this.#o(),this.stockage.sauvegarderPreferences(this.preferences)}changerDensite(e){if(e===null){let{densiteBibliotheque:e,...t}=this.preferences;this.preferences=t}else{let t=Math.max(1,Math.min(6,Math.round(e)));this.preferences={...this.preferences,densiteBibliotheque:t}}this.stockage.sauvegarderPreferences(this.preferences),this.requestUpdate()}definirTransition(e){this.preferences={...this.preferences,transitionSec:Math.max(0,Math.round(e))},this.stockage.sauvegarderPreferences(this.preferences),this.requestUpdate()}definirSonSeance(e){this.preferences={...this.preferences,sonSeance:e},this.stockage.sauvegarderPreferences(this.preferences),this.requestUpdate()}basculerReglage(e){this.preferences={...this.preferences,[e]:!this.preferences[e]},this.stockage.sauvegarderPreferences(this.preferences),this.requestUpdate()}changerPseudo(e){let t=e.trim().slice(0,40);this.preferences={...this.preferences,pseudo:t},this.stockage.sauvegarderPreferences(this.preferences),this.requestUpdate()}changerDemarrage(e,t){this.preferences={...this.preferences,demarrage:{mode:e,...t===void 0?{}:{disciplineId:t}}},this.stockage.sauvegarderPreferences(this.preferences)}async#s(){if(!window.Capacitor?.isNativePlatform?.())return;let{App:e}=await vc(async()=>{let{App:e}=await import(`./esm-CuZFasAi.js`);return{App:e}},__vite__mapDeps([2,1]),import.meta.url);await e.addListener(`backButton`,()=>{let t=this.ecran.type===`bibliotheques`||this.ecran.type===`favoris`||this.ecran.type===`compositions`||this.ecran.type===`plus`&&this.ecran.section===null;this.demandePin?this.annulerDemandePin():this.capture?this.reculerCapture():this.ajoutMedia?this.ajoutMedia=null:this.partagePreparation?this.partagePreparation=null:this.ajouter?this.ajouter=null:this.editionPas?this.editionPas=null:this.editionLien?this.editionLien=null:this.ajoutPas?this.ajoutPas=null:this.menuComposition?this.menuComposition=null:this.creationCompo?this.#J():this.importEnAttente?this.annulerImport():this.rapportApresImport?this.fermerRapportImport():this.restaurationEnAttente?this.annulerRestauration():this.menuFiche?(this.menuFiche=!1,this.requestUpdate()):this.editionFiche?(this.#q=null,this.editionFiche=!1,this.requestUpdate()):this.#c.length?this.retour():t?this.ecran.type===`bibliotheques`?e.minimizeApp():this.ouvrirBibliotheque():(this.#b(),this.ecran=this.#f(),window.scrollTo({top:0}))})}technique(e){return this.bibliotheque?.techniques.find(t=>t.id===e)}#c=[];#l={};#u(e){this.#b(),this.#c.push({ecran:this.ecran,defilement:window.scrollY}),this.#c.length>24&&this.#c.shift(),this.ecran=e,window.scrollTo({top:0})}#d(e){let t=e.type===`favoris`?`favoris`:e.type===`relations`?`relations`:e.type===`compositions`?`compositions`:e.type===`plus`?`plus`:`bibliotheque`,n=this.zoneCourante();if(this.#b(),this.#m(),n===t){this.#c=[],this.ecran=e,window.scrollTo({top:0});return}this.#l[n]={ecran:this.ecran,pile:[...this.#c],defilement:window.scrollY};let r=this.#l[t];r?(this.#c=[...r.pile],this.ecran=r.ecran,this.#h(),this.updateComplete.then(()=>window.scrollTo({top:r.defilement}))):(this.#c=[],this.ecran=e,window.scrollTo({top:0}))}retour(){this.#b(),this.menuFiche=!1,this.#m();let e=this.#c.pop();e?(this.ecran=e.ecran,this.updateComplete.then(()=>window.scrollTo({top:e.defilement}))):(this.ecran=this.#f(),window.scrollTo({top:0})),this.#h()}#f(){let e=this.zoneCourante();return e===`favoris`?{type:`favoris`}:e===`relations`?{type:`relations`}:e===`compositions`?{type:`compositions`}:e===`plus`?{type:`plus`,section:null}:{type:`bibliotheques`}}derniereTechniqueVue=null;relationCentre=null;ouvrirFiche(e){this.editionFiche=!1,this.#q=null,this.menuFiche=!1,this.ajoutMedia=null,this.derniereTechniqueVue=e,this.#m(),this.#u({type:`fiche`,techniqueId:e}),this.#h()}ouvrirRelationsVisuelle(e,t){e&&(this.relationCentre=e,this.preferences={...this.preferences,relationsCentreId:e},this.stockage.sauvegarderPreferences(this.preferences)),t&&(this.enregistrerVueRelations(t),Ci(t)),this.#d({type:`relations`})}recentrerRelations(e){this.relationCentre=e,this.preferences={...this.preferences,relationsCentreId:e},this.stockage.sauvegarderPreferences(this.preferences),this.requestUpdate()}enregistrerVueRelations(e){this.preferences={...this.preferences,relationsVue:e},this.stockage.sauvegarderPreferences(this.preferences)}techniqueCentreRelations(){let e=this.bibliotheque;if(!e||e.techniques.length===0)return null;let t=t=>!!t&&e.techniques.some(e=>e.id===t);return t(this.relationCentre)?this.relationCentre:t(this.preferences.relationsCentreId)?this.preferences.relationsCentreId:t(this.derniereTechniqueVue)?this.derniereTechniqueVue:null}#p=new Map;#m(){this.ecran.type===`fiche`&&this.#p.set(this.ecran.techniqueId,{mediaAffiche:this.mediaAffiche,voixOuverte:this.voixOuverte,relationsDepliees:this.relationsDepliees})}#h(){if(this.ecran.type!==`fiche`)return;let e=this.#p.get(this.ecran.techniqueId);this.mediaAffiche=e?.mediaAffiche??null,this.voixOuverte=e?.voixOuverte??null,this.relationsDepliees=e?.relationsDepliees??!1}#g=new Map;majFiltres(e){this.filtres=e,this.ecran.type===`discipline`&&this.#g.set(this.ecran.disciplineId,e),this.requestUpdate()}ouvrirDiscipline(e){this.filtres=this.#g.get(e)??{disciplineId:null,niveauId:null,familleId:null,source:null,favorisSeuls:!1,texte:``},this.#u({type:`discipline`,disciplineId:e}),this.preferences.derniereDisciplineId!==e&&(this.preferences={...this.preferences,derniereDisciplineId:e},this.stockage.sauvegarderPreferences(this.preferences))}ouvrirBibliotheque(){this.#d({type:`bibliotheques`})}mediasManquants=[];videosOrphelines=[];taillesVideos=new Map;infoEspace=null;sauvegardes=[];persistanceStockage=`inconnue`;async#_(e){if(window.Capacitor?.isNativePlatform?.())this.persistanceStockage=`native`;else{let t=await this.stockage.persistanceStockage(e);this.persistanceStockage=t===!0?`accordee`:t===!1?`refusee`:`inconnue`}this.requestUpdate()}async redemanderPersistance(){await this.#_(!0),this.afficherToast(this.persistanceStockage===`accordee`?`Persistance accordée — le navigateur ne purgera pas tes données.`:`Persistance non accordée pour l'instant — le navigateur décide selon l'usage du site. Pense aux sauvegardes régulières.`)}ouvrirPlus(){this.#d({type:`plus`,section:null}),this.#y()}ouvrirPlusSection(e){this.doublonOuvert=null,(e===`medias`||e===`atraiter`)&&bs(),this.zoneCourante()!==`plus`&&this.#d({type:`plus`,section:null}),this.#u({type:`plus`,section:e}),this.#y()}ouvrirFavoris(){this.#d({type:`favoris`})}#v(e){return Be(e)}async#y(){let e=this.bibliotheque;if(!e)return;this.taillesVideos=await this.stockage.taillesVideos();let t=new Set(this.taillesVideos.keys());this.mediasManquants=e.contributions.flatMap(e=>e.medias.filter(e=>e.type===`local`&&!t.has(e.id)).map(()=>({techniqueId:e.techniqueId,nom:e.techniqueId?this.technique(e.techniqueId)?.nom??`?`:`capture à rattacher`})));let n=this.#v(e);this.videosOrphelines=[...this.taillesVideos.entries()].filter(([e])=>!n.has(e)).map(([e,t])=>({id:e,taille:t})),this.sauvegardes=await this.stockage.listerSauvegardes(),this.infoEspace=await this.stockage.estimerEspace(),this.requestUpdate()}async rattacherOrphelin(e,t){if(!this.#O(`modification`,`Saisis le PIN pour rattacher ce média.`,()=>void this.rattacherOrphelin(e,t)))return;let n=this.bibliotheque,r=n?.techniques.find(e=>e.id===t);if(!n||!r)return;let i=await this.stockage.fichierVideo(e);if(!i){this.afficherToast(`Fichier introuvable — actualise la liste`);return}let a=await ot(i),o=i.name.includes(`.`)?i.name.slice(i.name.indexOf(`.`)+1):void 0,s={id:Qe(),techniqueId:t,provenance:`personnel`,description:`Média retrouvé et rattaché depuis la médiathèque`,pointsCles:[],creeLe:new Date().toISOString(),medias:[{id:e,type:`local`,ref:`videos/${e}`,sha256:a,taille:i.size,ajouteLe:new Date().toISOString(),...o?{extension:o}:{}}]};n.contributions.push(s);try{await this.#te(n)}catch(e){n.contributions=n.contributions.filter(e=>e.id!==s.id),this.afficherToast(`Rattachement impossible : ${e instanceof Error?e.message:`écriture refusée`}`);return}this.afficherToast(`Média rattaché à « ${r.nom} » ✓`),await this.#y()}async supprimerVideoOrpheline(e){if(!this.#O(`destruction_ou_sensible`,`Saisis le PIN pour supprimer ce fichier.`,()=>void this.supprimerVideoOrpheline(e)))return;let t=this.bibliotheque;if(t){if(this.#v(t).has(e)){this.afficherToast(`Ce fichier est référencé — il ne sera pas supprimé`);return}await this.stockage.supprimerVideo(e),this.afficherToast(`Fichier inutilisé supprimé ✓`),await this.#y()}}async supprimerOrphelinsVerifies(e){if(!this.#O(`destruction_ou_sensible`,`Saisis le PIN pour supprimer ces fichiers.`,()=>void this.supprimerOrphelinsVerifies(e)))return;let t=this.bibliotheque;if(!t||e.length===0)return;let n=this.#v(t),r=0,i=0;for(let t of e){if(n.has(t)){i+=1;continue}await this.stockage.supprimerVideo(t),r+=1}this.afficherToast(i?`${r} fichier${r>1?`s`:``} supprimé${r>1?`s`:``} — ${i} redevenu${i>1?`s`:``} référencé${i>1?`s`:``}, conservé${i>1?`s`:``}`:`${r} fichiers inutilisés supprimés ✓`),await this.#y()}async restaurerSauvegarde(e){if(this.#O(`destruction_ou_sensible`,`Saisis le PIN pour restaurer cet état.`,()=>void this.restaurerSauvegarde(e)))try{let t=await this.#x(`Restauration en cours…`,()=>this.stockage.restaurerSauvegarde(e));this.bibliotheque={...t},this.afficherToast(`Sauvegarde restaurée ✓ — l'état précédent est lui-même sauvegardé`),this.#y()}catch(e){this.#a(`restauration de sauvegarde interne`,e),this.afficherToast(`Restauration impossible : ${e instanceof Error?e.message:`sauvegarde illisible`}`)}}async majNomDiscipline(e,t){if(!this.#O(`modification`,`Saisis le PIN pour renommer cette discipline.`,()=>void this.majNomDiscipline(e,t)))return;let n=this.bibliotheque,r=n?.disciplines.find(t=>t.id===e);!n||!r||!t.trim()||(r.nom=t.trim(),await this.#te(n))}async ajouterTaxonomie(e,t,n){if(!this.#O(`modification`,`Saisis le PIN pour modifier les taxonomies.`,()=>void this.ajouterTaxonomie(e,t,n)))return;let r=this.bibliotheque,i=r?.disciplines.find(t=>t.id===e),a=n.trim();if(!r||!i||!a)return;let o=a.toLowerCase().normalize(`NFD`).replace(/[̀-ͯ]/g,``).replace(/[^a-z0-9]+/g,`-`),s=o;for(let e=2;[...i.familles,...i.niveaux].some(e=>e.id===s);e++)s=`${o}-${e}`;i[t].push({id:s,nom:a,ordre:i[t].length+1}),await this.#te(r)}async majTaxonomie(e,t,n,r){if(!this.#O(`modification`,`Saisis le PIN pour modifier les taxonomies.`,()=>void this.majTaxonomie(e,t,n,r)))return;let i=this.bibliotheque,a=(i?.disciplines.find(t=>t.id===e))?.[t].find(e=>e.id===n);if(!(!i||!a)){if(r.nom?.trim()&&(a.nom=r.nom.trim()),t===`niveaux`){let e=a;r.couleur!==void 0&&(r.couleur?e.couleur=r.couleur:delete e.couleur),r.couleur2!==void 0&&(r.couleur2?e.couleur2=r.couleur2:delete e.couleur2)}await this.#te(i)}}usagesTaxonomie(e,t,n){return(this.bibliotheque?.techniques??[]).filter(r=>r.disciplineId===e&&(t===`familles`?r.familleId===n:r.niveauxIds.includes(n)))}reordonnerTaxonomie(e,t,n,r){if(!this.#O(`modification`,`Saisis le PIN pour modifier les taxonomies.`,()=>void this.reordonnerTaxonomie(e,t,n,r)))return;let i=this.bibliotheque,a=i?.disciplines.find(t=>t.id===e);if(!i||!a)return;let o=a[t],s=o.findIndex(e=>e.id===n),c=s+r;if(s<0||c<0||c>=o.length)return;let[l]=o.splice(s,1);o.splice(c,0,l),o.forEach((e,t)=>e.ordre=t+1),this.#te(i)}async supprimerTaxonomie(e,t,n,r){if(!this.#O(`destruction_ou_sensible`,`Saisis le PIN pour supprimer cette valeur de classification.`,()=>void this.supprimerTaxonomie(e,t,n,r)))return;let i=this.bibliotheque,a=i?.disciplines.find(t=>t.id===e),o=a?.[t].find(e=>e.id===n);if(!i||!a||!o)return;let s=this.usagesTaxonomie(e,t,n);if(s.length&&r===void 0){this.afficherToast(`Utilisé par ${s.length} technique${s.length>1?`s`:``} — choisis « remplacer » ou « retirer la classification »`);return}let c=r?a[t].find(e=>e.id===r)?.nom:null;if(!(r&&!c)){if(s.length){await this.stockage.snapshot(`avant-suppression-taxonomie-${o.nom}`);for(let e of s)t===`familles`?r?e.familleId=r:delete e.familleId:e.niveauxIds=r?[...new Set(e.niveauxIds.map(e=>e===n?r:e))]:e.niveauxIds.filter(e=>e!==n)}a[t]=a[t].filter(e=>e.id!==n),await this.#te(i),s.length&&this.afficherToast(c?`« ${o.nom} » supprimée — ${s.length} technique${s.length>1?`s`:``} reclassée${s.length>1?`s`:``} vers « ${c} » (point de restauration conservé)`:`« ${o.nom} » supprimée — classification retirée de ${s.length} technique${s.length>1?`s`:``} (point de restauration conservé)`)}}async ajouterTypeRelation(e,t){if(!this.#O(`modification`,`Saisis le PIN pour modifier les types de lien.`,()=>void this.ajouterTypeRelation(e,t)))return;let n=this.bibliotheque,r=e.trim();if(!n||!r)return;let i=r.toLowerCase().normalize(`NFD`).replace(/[̀-ͯ]/g,``).replace(/[^a-z0-9]+/g,`-`);if(n.typesRelation.some(e=>e.id===i)){this.afficherToast(`Le type « ${r} » existe déjà`);return}let a=t.trim()===``;n.typesRelation.push({id:i,libelle:r,...a?{symetrique:!0}:{libelleInverse:t.trim()}}),await this.#te(n),this.afficherToast(`Type de relation « ${r} » ajouté ✓`)}async majTypeRelation(e,t){if(!this.#O(`modification`,`Saisis le PIN pour modifier les types de lien.`,()=>void this.majTypeRelation(e,t)))return;let n=this.bibliotheque,r=n?.typesRelation.find(t=>t.id===e);if(!(!n||!r)){if(t.libelle!==void 0&&t.libelle.trim()&&(r.libelle=t.libelle.trim()),t.libelleInverse!==void 0&&!r.symetrique){let e=t.libelleInverse.trim();if(!e){this.afficherToast(`Un lien orienté garde une lecture inverse — ou passe-le en symétrique d'abord`);return}r.libelleInverse=e}await this.#te(n)}}async basculerSymetrieTypeRelation(e){if(!this.#O(`modification`,`Saisis le PIN pour modifier les types de lien.`,()=>void this.basculerSymetrieTypeRelation(e)))return;let t=this.bibliotheque,n=t?.typesRelation.find(t=>t.id===e);if(!t||!n)return;let r=this.usagesTypeRelation(e);if(r){this.afficherToast(`« ${n.libelle} » relie déjà ${r} paire${r>1?`s`:``} de techniques — sa nature de lecture ne peut plus changer`);return}n.symetrique?(delete n.symetrique,n.libelleInverse=n.libelleInverse??`${n.libelle} (inverse)`):(n.symetrique=!0,delete n.libelleInverse),await this.#te(t)}ouvrirCompositions(){this.#d({type:`compositions`})}ouvrirComposition(e){this.menuComposition=null,this.#u({type:`composition`,compositionId:e})}afficherToast(e){this.toast=e,this.#n=Date.now()+3400,clearTimeout(this.#t),this.#t=setTimeout(()=>this.toast=null,3400)}#b(){clearTimeout(this.#t),this.toast=null}async#x(e,t){this.occupe=e,this.requestUpdate();try{return await t()}finally{this.occupe=null,this.requestUpdate()}}willUpdate(e){super.willUpdate(e),this.toast&&Date.now()>=this.#n&&this.#b(),e.has(`ecran`)&&this.ecran.type!==`entrainement`&&($c(),zc()),e.has(`ecran`)&&this.ecran.type===`entrainement`&&Rc()}#S=null;#C=!1;updated(){let e=document.querySelector(`.feuille[role="dialog"]`);if(e&&!this.#C){this.#C=!0;let t=document.activeElement;this.#S=t instanceof HTMLElement&&t!==document.body?t:null,e.contains(t)||(e.querySelector(`[autofocus]`)??e).focus()}else!e&&this.#C&&(this.#C=!1,this.#S?.isConnected&&this.#S.focus(),this.#S=null)}get reglagesProtections(){let e=this.preferences.protections;return{modifications:e?.modifications??!1,suppressions:e?.suppressions??!1}}get pinConfigure(){return this.preferences.protections?.verification!==void 0}async#w(e){this.preferences={...this.preferences,protections:e},await this.stockage.sauvegarderPreferences(this.preferences),this.requestUpdate()}async activerProtection(e,t){let n=this.preferences.protections,r=n?.verification;if(!r){if(!t)return`Crée d'abord un PIN`;let e=Ir(t.pin);if(e)return e;if(t.pin!==t.confirmation)return`Les deux saisies ne correspondent pas`;r=await Br(t.pin)}return await this.#w({modifications:e===`modifications`?!0:n?.modifications??!1,suppressions:e===`suppressions`?!0:n?.suppressions??!1,verrouillage:n?.verrouillage??`5min`,verification:r}),this.#j(`protection activée`),this.afficherToast(`Protection ${e===`modifications`?`des modifications`:`des suppressions et opérations sensibles`} activée ✓`),null}async desactiverProtection(e,t){let n=this.preferences.protections;if(!n?.verification)return null;if(!await Vr(t,n.verification))return`PIN incorrect`;let r={...n,modifications:e!==`modifications`&&n.modifications,suppressions:e!==`suppressions`&&n.suppressions};return!r.modifications&&!r.suppressions?(await this.#w({modifications:!1,suppressions:!1}),this.#j(`protections désactivées — secret supprimé`),this.afficherToast(`Plus aucune action n'est protégée — les données du PIN ont été supprimées`)):(await this.#w(r),this.afficherToast(`Protection désactivée ✓ — l'autre reste active`)),null}async choisirVerrouillage(e){let t=this.preferences.protections;t&&await this.#w({...t,verrouillage:e})}async changerPin(e,t,n){let r=this.preferences.protections;return r?.verification?await Vr(e,r.verification)?Ir(t)||(t===n?(await this.#w({...r,verification:await Br(t)}),this.#T=null,this.#j(`PIN modifié`),this.afficherToast(`PIN changé ✓`),null):`Les deux saisies ne correspondent pas — l'ancien PIN reste valable`):`PIN actuel incorrect`:`Aucun PIN à changer`}#T=null;#E=0;#D=0;demandePin=null;get sessionDeverrouillee(){return Wr(this.#T,this.preferences.protections?.verrouillage??`5min`,Date.now())}#O(e,t,n){return Ur(e,this.reglagesProtections,this.sessionDeverrouillee)===`libre`?(this.#T!==null&&this.sessionDeverrouillee&&(this.#T=Date.now()),!0):(this.demandePin={raison:t,action:n},this.requestUpdate(),!1)}autoriser(e,t,n){this.#O(e,t,n)&&n()}echecsCumules=0;verrouiller(e=!1){this.#T!==null&&this.#j(e?`verrouillé à l'arrière-plan`:`verrouillage manuel`),this.#T=null,e||this.afficherToast(`Verrouillé — le PIN sera demandé à la prochaine action protégée`),this.requestUpdate()}annulerDemandePin(){this.demandePin=null,this.requestUpdate()}async validerDemandePin(e){let t=this.demandePin,n=this.preferences.protections?.verification;if(!t||!n)return;let r=Math.ceil((this.#D-Date.now())/1e3);if(r>0){this.demandePin={...t,erreur:`Attends ${r} s avant le prochain essai`},this.requestUpdate();return}if(!await Vr(e,n)){this.#E++,this.echecsCumules++;let e=Hr(this.#E);this.#D=Date.now()+e*1e3,this.demandePin={...t,erreur:e?`PIN incorrect — prochain essai dans ${e} s`:`PIN incorrect`},this.requestUpdate();return}this.#E=0,this.#D=0,this.#T=Date.now(),this.#j(`déverrouillage réussi`),this.demandePin=null,this.requestUpdate(),await t.action()}#k(){let e=this.demandePin;return P`
      <div class="voile" @click=${()=>this.annulerDemandePin()}></div>
      <div class="feuille" role="dialog" aria-modal="true" tabindex="-1" aria-label="Action protégée">
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
        ${e.erreur?P`<p class="details erreur-pin" role="alert" style="color:var(--accent); padding-top:6px">${e.erreur}</p>`:F}
        <div class="actions">
          <button class="bouton" @click=${()=>this.annulerDemandePin()}>Annuler</button>
        </div>
      </div>
    `}#A(){let e=this.reglagesProtections;return!(e.modifications||e.suppressions)||!this.sessionDeverrouillee?F:P`<button class="session-curateur" title="Modifications temporairement déverrouillées"
      @click=${()=>this.verrouiller()}>🔓 déverrouillé · <b>Verrouiller</b></button>`}journalSecurite=[];#j(e){this.journalSecurite=[...this.journalSecurite.slice(-9),`${new Date().toTimeString().slice(0,5)} · ${e}`]}async reinitialiserTout(){await this.stockage.reinitialiser(),this.bibliotheque=Re(),await this.stockage.sauvegarder(this.bibliotheque),this.preferences=kr(),await this.stockage.sauvegarderPreferences(this.preferences),this.#T=null,this.#E=0,this.#D=0,this.journalSecurite=[],this.#o(),this.#c=[],this.#l={},this.ecran={type:`bibliotheques`},this.mediasManquants=[],this.videosOrphelines=[],this.taillesVideos=new Map,this.sauvegardes=[],this.dernierFichier=null,window.scrollTo({top:0}),this.afficherToast(`Movenso réinitialisé — bibliothèque vide, aucune protection, aucun PIN`)}choisirPackAImporter(){if(!this.#O(`modification`,`Saisis le PIN pour importer un pack.`,()=>void this.choisirPackAImporter()))return;let e=document.createElement(`input`);e.type=`file`,e.accept=`.movpack`,e.onchange=()=>{let t=e.files?.[0];t&&this.importerPack(t)},e.click()}async importerPack(e){let t=this.bibliotheque;if(t){this.importEnAttente=null,this.restaurationEnAttente=null,await this.stockage.nettoyerImport();try{let n=new Uint8Array(await e.slice(0,4).arrayBuffer()),r,i,a,o=[],s=[];if(tr(n)){if(!this.#M(e.size,await this.stockage.estimerEspace()))return;this.#e=!1,this.annulationOccupe={libelle:`Annuler`,executer:()=>{this.#e=!0}};let t;try{t=await this.#x(`Lecture du pack…`,()=>pr(e.stream(),this.stockage.puitsImport(),{estAnnule:()=>this.#e}))}finally{this.annulationOccupe=null}if(t.manifeste.portee===`complet`){await this.#B(t);return}o=t.medias,r=t.bibliotheque,i=t.manifeste.id,a=t.manifeste,s=t.avertissements}else{let t=new Uint8Array(await e.arrayBuffer());r=St(JSON.parse(new TextDecoder().decode(t))),Nt(r),i=r.contributions[0]?.origine?.pack??e.name.replace(/\.(json|movpack)$/i,``),s=[`Fichier JSON historique : ni manifeste ni intégrité de conteneur — analysé et validé, mais non vérifié par empreinte.`]}let c=t.techniques.some(e=>e.origine?.pack===i)||t.contributions.some(e=>e.origine?.pack===i),l=Rt(t,r,{packId:i});this.importEnAttente={...l,packId:i,medias:o,dejaInstalle:c,...a?{manifeste:a}:{},volume:e.size,contenus:{techniques:r.techniques.length,contributions:r.contributions.length},avertissements:s},this.requestUpdate()}catch(e){if(await this.stockage.nettoyerImport(),e instanceof Error&&e.message===`Import annulé`){this.afficherToast(`Import annulé — rien n'a été écrit`);return}this.#a(`lecture d'un pack`,e),this.afficherToast(`Import impossible : ${e instanceof Error?e.message:`fichier illisible`}`)}}}importEnAttente=null;rapportApresImport=null;#M(e,t){let n=ut(e,t);return n.suffisant?!0:(this.#N(n),!1)}#N(e){this.afficherToast(`Espace insuffisant : ${dt(e.requis)} à écrire, environ ${dt(e.disponible??0)} disponibles — libère de l'espace d'abord, rien n'a été écrit`)}#P(e){return e.reduce((e,t)=>e+t.taille,0)}#F(){let e=this.preferences.limiteEspaceMo??5e3;return e<=0?null:e*1e6}async#I(){let e=await this.stockage.estimerEspace();if(e===null)return null;let t=this.#F();return t===null?e:{usage:e.usage,quota:Math.min(e.quota,t)}}async changerLimiteEspace(e){let t=e<=0?0:Math.max(200,Math.round(e));this.preferences={...this.preferences,limiteEspaceMo:t},this.stockage.sauvegarderPreferences(this.preferences),this.requestUpdate()}async#L(e){let t=ut(e.size,await this.#I());return t.suffisant?!1:(this.#N(t),!0)}#R=!1;annulerIngestionVideo(){this.#R=!0}async#z(e,t,n){this.#R=!1;let r=()=>this.#R;this.enregistrementMedia={phase:`analyse`,fraction:0,octets:t.size,etaSec:null},this.requestUpdate();try{let{media:i,dejaPresent:a}=await ct(e,t,n,r);if(a)return{media:i,ecrit:!1};if(await this.#L(t))return null;let o=performance.now();this.enregistrementMedia={phase:`ecriture`,fraction:0,octets:t.size,etaSec:null},this.requestUpdate();let s=0;return await this.stockage.ecrireVideo(i.id,t,i.extension,e=>{let n=performance.now();if(e<1&&n-s<100)return;s=n;let r=(n-o)/1e3,i=e>.03?Math.max(0,Math.round(r/e-r)):null;this.enregistrementMedia={phase:`ecriture`,fraction:e,octets:t.size,etaSec:i},this.requestUpdate()},r),{media:i,ecrit:!0}}catch(e){if(e instanceof Error&&e.name===`AnnulationIngestion`)return this.afficherToast(`Ajout annulé — rien n'a été écrit`),null;throw e}finally{this.enregistrementMedia=null,this.requestUpdate()}}async confirmerImport(){let e=this.importEnAttente;if(!e||!this.#M(this.#P(e.medias),await this.#I()))return;await this.stockage.snapshot(`avant-import-${e.packId}`);try{await this.#x(`Installation du pack…`,async()=>{let t=await this.stockage.promouvoirImportMedias(e.medias.map(e=>e.nomPhysique));try{await this.#te(e.bibliotheque)}catch(e){throw await this.stockage.annulerPromotionMedias(t),e}})}catch(e){this.#a(`installation d'un pack`,e),this.afficherToast(`Import impossible : ${e instanceof Error?e.message:`écriture refusée`}`);return}await this.stockage.nettoyerImport();let t=e.rapport;this.importEnAttente=null,this.rapportApresImport={discipline:t.discipline,disciplineId:e.bibliotheque.disciplines.find(e=>e.nom===t.discipline)?.id??null,rejointes:t.rejointes.length,creees:t.creees.length,suggestions:t.suggestions,videos:e.medias.length,conflitsLiaisons:t.conflitsLiaisons},this.requestUpdate()}fermerRapportImport(){this.rapportApresImport=null,this.requestUpdate()}async annulerImport(){this.importEnAttente=null,await this.stockage.nettoyerImport(),this.requestUpdate(),this.afficherToast(`Import annulé — rien n'a été écrit`)}restaurationEnAttente=null;async#B(e){let t=this.bibliotheque;if(!(t.disciplines.length===0&&t.techniques.length===0&&t.contributions.length===0&&t.compositions.length===0)){await this.stockage.nettoyerImport(),this.afficherToast(`Cet export complet se restaure sur une installation vierge — ici, importe plutôt un pack de discipline (Plus › Créer ou exporter un pack)`);return}this.restaurationEnAttente=e,this.requestUpdate()}async confirmerRestauration(){if(!this.#O(`destruction_ou_sensible`,`Saisis le PIN pour restaurer cette sauvegarde.`,()=>void this.confirmerRestauration()))return;let e=this.restaurationEnAttente;if(e&&this.#M(this.#P(e.medias),await this.#I())){try{await this.#x(`Restauration en cours…`,async()=>{let t=await this.stockage.promouvoirImportMedias(e.medias.map(e=>e.nomPhysique));try{await this.#te(e.bibliotheque)}catch(e){throw await this.stockage.annulerPromotionMedias(t),e}})}catch(e){this.#a(`restauration complète`,e),this.afficherToast(`Restauration impossible : ${e instanceof Error?e.message:`écriture refusée`}`);return}await this.stockage.nettoyerImport(),this.restaurationEnAttente=null,this.afficherToast(`Bibliothèque restaurée ✓ ${e.bibliotheque.techniques.length} techniques, ${e.medias.length} vidéo${e.medias.length>1?`s`:``} — réglages d'appareil (thème, démarrage, protections) à reconfigurer`)}}async annulerRestauration(){this.restaurationEnAttente=null,await this.stockage.nettoyerImport(),this.requestUpdate(),this.afficherToast(`Restauration annulée — rien n'a été écrit`)}static#V=1<<20;progressionExport=null;#H=!1;annulerExport(){this.#H=!0}async#U(e){let t=await this.stockage.listerVideos();return[...Be(e)].filter(e=>t.has(e))}async#W(t,n,r,i,a=!0){await this.stockage.nettoyerArchivesTemp();let o=await this.stockage.taillesVideos(),s=r.reduce((e,t)=>e+(o.get(t)??0),0);if(!this.#M(s,await this.stockage.estimerEspace()))return null;let c=`export-${Date.now()}.movpack`,l;try{l=await this.stockage.ouvrirArchiveTemp(c)}catch{return this.afficherToast(`Export impossible : stockage temporaire indisponible sur cet appareil`),null}this.#H=!1,this.progressionExport={fait:0,total:r.length},this.annulationOccupe={libelle:`Annuler`,executer:()=>this.annulerExport()},this.requestUpdate();try{await sr(t,n,r,t=>this.stockage.lireMediaParBlocs(t,e.#V),{ecrire:e=>l.write(e)},{creeLe:new Date().toISOString(),estAnnule:()=>this.#H,surProgression:(e,t)=>{this.progressionExport={fait:e,total:t},this.requestUpdate()}}),await l.close()}catch(e){try{await l.close()}catch{}return await this.stockage.supprimerArchiveTemp(c),this.progressionExport=null,this.annulationOccupe=null,this.requestUpdate(),this.#H||this.#a(`export .movpack`,e),this.afficherToast(this.#H?`Export annulé — rien n'a été téléchargé`:e instanceof Error?e.message:`Export échoué`),null}let u=await this.stockage.fichierArchiveTemp(c),d=u.size;return a&&Ol(u,i),this.progressionExport=null,this.annulationOccupe=null,this.requestUpdate(),{taille:d,fichier:new File([u],i,{type:`application/octet-stream`})}}dernierFichier=null;async exporterTout(e=!0){if(!this.#O(`destruction_ou_sensible`,`Saisis le PIN pour créer une sauvegarde.`,()=>void this.exporterTout(e)))return;let t=this.bibliotheque;if(!t)return;let n=Be(t),r=await this.stockage.listerVideos(),i=[...n].filter(e=>!r.has(e)),a=e?[...n].filter(e=>r.has(e)):[],o=sl({avecVideos:e,nbManquants:i.length}),s=`movenso-${o.complete?`complet`:`partiel`}-${new Date().toISOString().slice(0,10)}.movpack`,c=await this.#W(t,{id:`movenso-export-complet`,nom:o.complete?`Sauvegarde complète Movenso`:`Sauvegarde partielle Movenso`,portee:`complet`},a,s,!1);if(c===null)return;let l=c.taille,u=await this.#X(c.fichier),d=`${t.disciplines.length} discipline${t.disciplines.length>1?`s`:``}, ${t.techniques.length} techniques, ${t.contributions.length} contenus, ${t.compositions.length} composition${t.compositions.length>1?`s`:``}, ${t.favoris.length} favori${t.favoris.length>1?`s`:``}, ${a.length} vidéo${a.length>1?`s`:``}`;this.dernierFichier={role:o.role,nom:s,taille:l,resume:`${d} — EXCLUS : ${o.exclusions.join(` ; `)}`},this.afficherToast(o.complete?`Sauvegarde complète ✓ — enregistrée dans ${u}`:`Sauvegarde PARTIELLE ✓ (exclut ${o.exclusions[0]}) — dans ${u}`)}async exporterDiagnostic(){let e=this.bibliotheque;if(!e)return;let t=await this.stockage.listerVideos(),n=Be(e),r=window.Capacitor,i=ll({genereLe:new Date().toISOString(),plateforme:r?.getPlatform?.()??`web`,versionSchema:4,versionMovpack:4,disciplines:e.disciplines.length,techniques:e.techniques.length,contributions:e.contributions.length,compositions:e.compositions.length,favoris:e.favoris.length,mediasReferences:n.size,mediasPresents:t.size,mediasManquants:[...n].filter(e=>!t.has(e)).length,dernierEchec:this.dernierEchec,orphelins:[...t].filter(e=>!n.has(e)).length,espace:await this.stockage.estimerEspace()}),a=`movenso-diagnostic-${new Date().toISOString().slice(0,10)}.txt`,o=await this.#X(new File([i],a,{type:`text/plain`}));this.afficherToast(`Diagnostic enregistré dans ${o} — informations techniques uniquement, aucun secret`)}publicationPrete=null;async preparerPublication(e,t){if(!this.#O(`destruction_ou_sensible`,`Saisis le PIN pour préparer ce pack.`,()=>void this.preparerPublication(e,t)))return;let n=this.bibliotheque,r=n?.disciplines.find(t=>t.id===e);if(!n||!r)return;let i=new Set([`local`]);for(let t of n.techniques)t.disciplineId===e&&t.origine&&i.add(t.origine.pack);for(let t of n.contributions)(t.techniqueId?n.techniques.find(e=>e.id===t.techniqueId):void 0)?.disciplineId===e&&t.origine&&i.add(t.origine.pack);let a,o=[];try{({extrait:a,relationsExclues:o}=mr(n,e,i,t.techniques,{compositionsPersonnelles:t.compositionsPersonnelles??!1}))}catch(e){this.afficherToast(`Publication impossible : ${e instanceof Error?e.message:`état inattendu`}`);return}if(a.techniques.length===0){this.afficherToast(`Rien à publier — sélectionne au moins une technique`);return}let s=t.nom?.trim()||r.nom,c=t.avecVideos?await this.#U(a):[],l=`${_r(s)}.movpack`,u=await this.#W(a,{id:vr(r.id),nom:s,portee:`discipline`,...t.auteur?.trim()?{auteur:t.auteur.trim()}:{},...t.note?.trim()?{conditions:t.note.trim()}:{}},c,l,!1);u!==null&&(this.publicationPrete={fichier:u.fichier,nomFichier:l,taille:u.taille,nomPack:s,resume:`${a.techniques.length} technique${a.techniques.length>1?`s`:``}${c.length?`, ${c.length} vidéo${c.length>1?`s`:``}`:` (sans vidéo)`} — sans carnet ni favoris${o.length?` ; ${o.length} relation${o.length>1?`s`:``} hors périmètre exclue${o.length>1?`s`:``}`:``}`},this.requestUpdate())}async enregistrerPublicationLocale(){let e=this.publicationPrete;if(!e)return;let t=await this.#X(e.fichier);this.afficherToast(`« ${e.nomPack} » enregistré (${dt(e.taille)}) dans ${t}`),this.publicationPrete=null,this.requestUpdate()}async partagerPublication(){let e=this.publicationPrete;e&&await this.#Z(e.fichier,e.nomPack,`Pack « ${e.nomPack} » — Movenso`)}fermerPublication(){this.publicationPrete=null,this.requestUpdate()}#G(e,t,n,r){let i=n.trim();if(!i||!e.disciplines.some(e=>e.id===t))return null;let a=Qe();return e.techniques.push({id:a,disciplineId:t,nom:i,...r?.nomTraditionnel?.trim()?{nomTraditionnel:r.nomTraditionnel.trim()}:{},...r?.familleId?{familleId:r.familleId}:{},niveauxIds:r?.niveauxIds??[],relations:[]}),a}async creerTechnique(e,t,n){if(!this.#O(`modification`,`Saisis le PIN pour créer une technique.`,()=>void this.creerTechnique(e,t,n)))return;let r=this.bibliotheque;if(!r)return;let i=this.#G(r,e,t,n);if(!i)return;let a=t.trim();await this.#te(r),this.ouvrirFiche(i),this.editionFiche=!0,this.afficherToast(`« ${a} » créée ✓ — complète-la, ou capture dessus`)}async creerDiscipline(e){if(!this.#O(`modification`,`Saisis le PIN pour créer une discipline.`,()=>void this.creerDiscipline(e)))return null;let t=this.bibliotheque,n=e.trim();if(!t||!n)return null;let r=t.disciplines.find(e=>I(e.nom)===I(n));if(r)return this.afficherToast(`« ${r.nom} » existe déjà`),r.id;let i=Qe();return t.disciplines.push({id:i,nom:n,familles:[],niveaux:[]}),await this.#te(t),this.afficherToast(`Discipline « ${n} » créée ✓ — capture ou importe, elle se remplira`),i}usagesTypeRelation(e){return(this.bibliotheque?.techniques??[]).reduce((t,n)=>t+n.relations.filter(t=>t.type===e).length,0)}async retirerRelation(e,t,n){if(!this.#O(`modification`,`Saisis le PIN pour retirer ce lien.`,()=>void this.retirerRelation(e,t,n)))return;let r=this.bibliotheque,i=r?.techniques.find(t=>t.id===e);!r||!i||(i.relations=i.relations.filter(e=>!(e.type===n&&e.cibleId===t)),await this.#te(r),this.afficherToast(`Lien retiré ✓`))}async arbitrerConflitLiaison(e,t){if(!this.#O(`modification`,`Saisis le PIN pour arbitrer ce conflit.`,()=>void this.arbitrerConflitLiaison(e,t)))return;let n=this.bibliotheque;n&&(Bt(n,e,t),await this.#te(n),this.afficherToast(t===`local`?`Ta version conservée ✓`:t===`pack`?`Version du pack appliquée ✓`:`Les deux raisons conservées ✓`))}ouvrirEditionLien(e,t,n,r){this.#O(`modification`,`Saisis le PIN pour modifier les liens.`,()=>this.ouvrirEditionLien(e,t,n,r))&&(Ia(),this.editionLien={sourceId:e,...t===void 0?{}:{cibleId:t},...n===void 0?{}:{typeId:n},...r===void 0?{}:{typePrefere:r}},this.requestUpdate())}async ajouterRelation(e,t){if(!this.#O(`modification`,`Saisis le PIN pour créer un lien.`,()=>void this.ajouterRelation(e,t)))return!1;let n=this.bibliotheque,r=n?.techniques.find(t=>t.id===e);return!n||!r?!1:t.cibleId===e?(this.afficherToast(`Une technique ne peut pas être liée à elle-même`),!1):n.techniques.some(e=>e.id===t.cibleId)?r.relations.some(e=>e.type===t.type&&e.cibleId===t.cibleId)?(this.afficherToast(`Ce lien existe déjà`),!1):(r.relations.push({type:t.type,cibleId:t.cibleId,...t.note===void 0?{}:{note:t.note},...t.priorite===void 0?{}:{priorite:t.priorite}}),await this.#te(n),this.afficherToast(`Lien ajouté ✓`),!0):(this.afficherToast(`Technique cible introuvable`),!1)}async modifierRelation(e,t,n,r){if(!this.#O(`modification`,`Saisis le PIN pour modifier ce lien.`,()=>void this.modifierRelation(e,t,n,r)))return!1;let i=this.bibliotheque,a=i?.techniques.find(t=>t.id===e),o=a?.relations.find(e=>e.type===n&&e.cibleId===t);if(!i||!a||!o)return!1;if(r.type!==void 0&&r.type!==o.type){if(a.relations.some(e=>e!==o&&e.type===r.type&&e.cibleId===t))return this.afficherToast(`Un lien de ce type vers cette technique existe déjà`),!1;o.type=r.type}return r.note!==void 0&&(r.note===null||r.note.trim()===``?delete o.note:o.note=r.note.trim()),r.priorite!==void 0&&(r.priorite===null?delete o.priorite:o.priorite=r.priorite),await this.#te(i),this.afficherToast(`Lien modifié ✓`),!0}async supprimerTypeRelation(e){if(!this.#O(`destruction_ou_sensible`,`Saisis le PIN pour supprimer ce type de lien.`,()=>void this.supprimerTypeRelation(e)))return;let t=this.bibliotheque,n=t?.typesRelation.find(t=>t.id===e);if(!t||!n)return;let r=this.usagesTypeRelation(e);if(r){this.afficherToast(`« ${n.libelle} » est utilisé par ${r} relation${r>1?`s`:``} — retire-les d'abord des fiches concernées`);return}t.typesRelation=t.typesRelation.filter(t=>t.id!==e),await this.#te(t),this.afficherToast(`Lien « ${n.libelle} » supprimé ✓`)}async supprimerTechnique(e){if(!this.#O(`destruction_ou_sensible`,`Saisis le PIN pour retirer cette technique.`,()=>void this.supprimerTechnique(e)))return;let t=this.bibliotheque,n=t?.techniques.find(t=>t.id===e);if(!t||!n)return;let r=t.contributions.filter(t=>t.techniqueId===e);t.corbeille=[{supprimeeLe:new Date().toISOString(),technique:n,contributions:r,etaitFavori:t.favoris.includes(e)},...t.corbeille??[]],t.techniques=t.techniques.filter(t=>t.id!==e),t.contributions=t.contributions.filter(t=>t.techniqueId!==e),t.favoris=t.favoris.filter(t=>t!==e),await this.#te(t),this.editionFiche=!1,this.retour(),this.afficherToast(`« ${n.nom} » mise en corbeille ✓ — restaurable depuis Plus › Corbeille`)}async restaurerTechnique(e){if(!this.#O(`modification`,`Saisis le PIN pour restaurer cette fiche.`,()=>void this.restaurerTechnique(e)))return;let t=this.bibliotheque,n=t?.corbeille?.find(t=>t.technique.id===e);!t||!n||(t.corbeille=(t.corbeille??[]).filter(t=>t.technique.id!==e),t.techniques=[...t.techniques,n.technique],t.contributions=[...t.contributions,...n.contributions],n.etaitFavori&&!t.favoris.includes(e)&&(t.favoris=[...t.favoris,e]),await this.#te(t),this.afficherToast(`« ${n.technique.nom} » restaurée ✓`))}async#K(e,t){let n=new Set(t),r=(e.corbeille??[]).filter(e=>n.has(e.technique.id));if(r.length!==0){for(let t of e.techniques)t.relations=t.relations.filter(e=>!n.has(e.cibleId));for(let t of r){let n=t.contributions.filter(e=>e.provenance===`personnel`).map(e=>({...e,techniqueId:null}));e.contributions=[...e.contributions,...n]}e.corbeille=(e.corbeille??[]).filter(e=>!n.has(e.technique.id)),await this.#te(e)}}async supprimerDefinitivement(e){if(!this.#O(`destruction_ou_sensible`,`Saisis le PIN pour supprimer définitivement.`,()=>void this.supprimerDefinitivement(e)))return;let t=this.bibliotheque,n=t?.corbeille?.find(t=>t.technique.id===e);!t||!n||(await this.stockage.snapshot(`avant-purge-${n.technique.nom}`),await this.#K(t,[e]),this.afficherToast(`« ${n.technique.nom} » supprimée définitivement ✓ — point de restauration conservé`))}async viderCorbeille(){if(!this.#O(`destruction_ou_sensible`,`Saisis le PIN pour vider la corbeille.`,()=>void this.viderCorbeille()))return;let e=this.bibliotheque;if(!e||!(e.corbeille??[]).length)return;let t=e.corbeille.length;await this.stockage.snapshot(`avant-vidage-corbeille`),await this.#K(e,e.corbeille.map(e=>e.technique.id)),this.afficherToast(`Corbeille vidée ✓ — ${t} fiche${t>1?`s`:``} supprimée${t>1?`s`:``}, point de restauration conservé`)}async supprimerDiscipline(e){if(!this.#O(`destruction_ou_sensible`,`Saisis le PIN pour retirer cette discipline.`,()=>void this.supprimerDiscipline(e)))return;let t=this.bibliotheque,n=t?.disciplines.find(t=>t.id===e);if(!t||!n)return;let r=t.techniques.filter(t=>t.disciplineId===e).length;if(r){this.afficherToast(`« ${n.nom} » contient encore ${r} technique${r>1?`s`:``} — retire-les d'abord (fiche → crayon → Retirer)`);return}await this.stockage.snapshot(`avant-retrait-${n.nom}`),t.disciplines=t.disciplines.filter(t=>t.id!==e),await this.#te(t),this.afficherToast(`Discipline « ${n.nom} » retirée ✓`)}reordonnerDiscipline(e,t){if(!this.#O(`modification`,`Saisis le PIN pour réordonner les disciplines.`,()=>void this.reordonnerDiscipline(e,t)))return;let n=this.bibliotheque;if(!n)return;let r=n.disciplines.findIndex(t=>t.id===e),i=r+t;if(r<0||i<0||i>=n.disciplines.length)return;let[a]=n.disciplines.splice(r,1);n.disciplines.splice(i,0,a),this.#te(n)}reordreGlisse=null;deplacerDisciplineVers(e,t){let n=this.bibliotheque;if(!n||e===t)return;let r=n.disciplines.findIndex(t=>t.id===e);if(r<0)return;let[i]=n.disciplines.splice(r,1),a=n.disciplines.findIndex(e=>e.id===t);n.disciplines.splice(a<0?r:a,0,i),this.requestUpdate()}deplacerTaxonomieVers(e,t,n,r){let i=this.bibliotheque,a=i?.disciplines.find(t=>t.id===e);if(!i||!a||n===r)return;let o=a[t],s=o.findIndex(e=>e.id===n);if(s<0)return;let[c]=o.splice(s,1),l=o.findIndex(e=>e.id===r);o.splice(l<0?s:l,0,c),o.forEach((e,t)=>e.ordre=t+1),this.requestUpdate()}async enregistrerReordre(){if(!this.#O(`modification`,`Saisis le PIN pour enregistrer l'ordre.`,()=>void this.enregistrerReordre()))return;let e=this.bibliotheque;e&&await this.#te(e)}async supprimerDisciplineEtContenu(e){if(!this.#O(`destruction_ou_sensible`,`Saisis le PIN pour supprimer cette discipline et son contenu.`,()=>void this.supprimerDisciplineEtContenu(e)))return;let t=this.bibliotheque,n=t?.disciplines.find(t=>t.id===e);if(!t||!n)return;await this.stockage.snapshot(`avant-suppression-discipline-${n.nom}`);let r=new Set(t.techniques.filter(t=>t.disciplineId===e).map(e=>e.id));t.techniques=t.techniques.filter(t=>t.disciplineId!==e),t.favoris=t.favoris.filter(e=>!r.has(e)),t.contributions=t.contributions.flatMap(e=>!e.techniqueId||!r.has(e.techniqueId)?[e]:e.provenance===`personnel`?[{...e,techniqueId:null}]:[]),t.disciplines=t.disciplines.filter(t=>t.id!==e),await this.#te(t),this.afficherToast(`Discipline « ${n.nom} » supprimée — tes notes sont revenues « à rattacher », point de restauration conservé`)}editionFiche=!1;#q=null;entrerEditionFiche(e){let t=this.bibliotheque,n=t?.techniques.find(t=>t.id===e);!t||!n||(this.#q={techniqueId:e,technique:structuredClone(n),contributions:t.contributions.filter(t=>t.techniqueId===e).map(e=>structuredClone(e)),favori:t.favoris.includes(e)},this.editionFiche=!0,this.requestUpdate())}validerEditionFiche(){this.#q=null,this.editionFiche=!1,this.afficherToast(`Modifications enregistrées ✓`),this.requestUpdate()}async annulerEditionFiche(){let e=this.#q,t=this.bibliotheque;if(this.editionFiche=!1,this.#q=null,!e||!t){this.requestUpdate();return}let n=t.techniques.findIndex(t=>t.id===e.techniqueId);n>=0&&(t.techniques[n]=structuredClone(e.technique)),t.contributions=t.contributions.filter(t=>t.techniqueId!==e.techniqueId),t.contributions.push(...e.contributions.map(e=>structuredClone(e)));let r=t.favoris.includes(e.techniqueId);e.favori&&!r?t.favoris.push(e.techniqueId):!e.favori&&r&&(t.favoris=t.favoris.filter(t=>t!==e.techniqueId)),await this.#te(t),this.afficherToast(`Modifications annulées`),this.requestUpdate()}menuFiche=!1;mediaAffiche=null;voixOuverte=null;relationsDepliees=!1;async majTechnique(e,t){if(!this.#O(`modification`,`Saisis le PIN pour enregistrer cette modification.`,()=>void this.majTechnique(e,t)))return;let n=this.bibliotheque,r=n?.techniques.find(t=>t.id===e);if(!n||!r)return;let i=structuredClone(r);t.disciplineId&&t.disciplineId!==r.disciplineId&&(delete r.familleId,r.niveauxIds=[]),Object.assign(r,t);for(let e of[`nomTraditionnel`,`familleId`,`mediaPrincipalId`])e in t&&(t[e]===void 0||t[e]===``)&&delete r[e];try{await this.#te(n)}catch(e){Object.assign(r,i),this.afficherToast(e instanceof Error?e.message:`Modification refusée`)}}async majContribution(e,t){if(!this.#O(`modification`,`Saisis le PIN pour modifier cette contribution.`,()=>void this.majContribution(e,t)))return;let n=this.bibliotheque,r=n?.contributions.find(t=>t.id===e);!n||!r||(t.trim()?r.description=t.trim():delete r.description,await this.#te(n))}async supprimerContribution(e){if(!this.#O(`destruction_ou_sensible`,`Saisis le PIN pour supprimer cette contribution.`,()=>void this.supprimerContribution(e)))return;let t=this.bibliotheque,n=t?.contributions.find(t=>t.id===e);!t||!n||(await this.stockage.snapshot(`avant-retrait-d-une-note`),t.contributions=t.contributions.filter(t=>t.id!==e),await this.#te(t),this.afficherToast(`Contribution retirée — point de restauration conservé dans les sauvegardes`))}ouvrirCreationCompo(){this.#O(`modification`,`Saisis le PIN pour créer une composition.`,()=>this.ouvrirCreationCompo())&&(xc(),this.creationCompo={etape:`nom`,nom:``},this.requestUpdate())}async creerCompositionFunnel(){let e=this.bibliotheque,t=this.creationCompo?.nom.trim();if(!e||!this.creationCompo||!t)return;let n=Ka(t);e.compositions.push(n),await this.#te(e),xc(),this.creationCompo={...this.creationCompo,compoId:n.id,etape:`pas`},this.requestUpdate()}fermerCreationCompo(){let e=this.creationCompo?.compoId;this.creationCompo=null,e&&this.ouvrirComposition(e),this.requestUpdate()}#J(){let e=this.creationCompo;e&&(e.etape===`pas`?this.fermerCreationCompo():(this.creationCompo=null,this.requestUpdate()))}async creerComposition(e){if(!this.#O(`modification`,`Saisis le PIN pour créer une composition.`,()=>void this.creerComposition(e)))return;let t=this.bibliotheque,n=e.trim();if(!t||!n)return;let r=Ka(n);t.compositions.push(r),await this.#te(t),this.ouvrirComposition(r.id),this.requestUpdate()}async creerCompositionDepuisEtapes(e,t){if(!this.#O(`modification`,`Saisis le PIN pour enregistrer ce parcours.`,()=>void this.creerCompositionDepuisEtapes(e,t)))return;let n=this.bibliotheque,r=e.trim();if(!n||!r||t.length===0)return;let i=Ka(r,`personnel`,`enchainement`);for(let e of t)i.blocs.push(qa(`technique`,{techniqueId:e.techniqueId,...e.consigne?{consigne:e.consigne}:{}}));n.compositions.push(i),await this.#te(n),this.ouvrirComposition(i.id),this.requestUpdate()}async modifierComposition(e,t){if(!this.#O(`modification`,`Saisis le PIN pour enregistrer cette composition.`,()=>void this.modifierComposition(e,t)))return!1;let n=this.bibliotheque,r=n?.compositions.find(t=>t.id===e);if(!n||!r)return!1;let i=structuredClone(r);t(r),r.modifieLe=new Date().toISOString();try{return await this.#te(n),!0}catch(e){return Object.assign(r,i),this.afficherToast(e instanceof Error?e.message:`Modification refusée`),!1}}async dupliquerComposition(e){if(!this.#O(`modification`,`Saisis le PIN pour dupliquer cette composition.`,()=>void this.dupliquerComposition(e)))return;let t=this.bibliotheque,n=t?.compositions.find(t=>t.id===e);if(!t||!n)return;let r={...structuredClone(n),id:Qe(),nom:`${n.nom} (copie)`,creeLe:new Date().toISOString(),modifieLe:new Date().toISOString(),blocs:n.blocs.map(e=>({...structuredClone(e),id:Qe()}))};delete r.origine,t.compositions.push(r),await this.#te(t),this.ouvrirComposition(r.id),this.afficherToast(`« ${r.nom} » créée ✓ — l'originale n'a pas bougé`)}async exporterComposition(e){if(!this.#O(`destruction_ou_sensible`,`Saisis le PIN pour exporter cette composition.`,()=>void this.exporterComposition(e)))return;let t=this.bibliotheque,n=t?.compositions.find(t=>t.id===e);if(!t||!n)return;let r=new Set(n.blocs.filter(e=>e.type===`technique`&&e.techniqueId).map(e=>e.techniqueId)).size,i=n.blocs.flatMap(e=>e.medias).filter(e=>e.type===`local`).length;if(!confirm(`Exporter « ${n.nom} » (.movpack) ?\n- la composition (${n.blocs.length} bloc${n.blocs.length>1?`s`:``})\n- ${r} technique${r>1?`s`:``} référencée${r>1?`s`:``} (identités seules, sans contenu)\n- ${i?`${i} vidéo(s) de repère incluse(s)`:`aucune vidéo locale`}\n- ton carnet personnel : jamais inclus`))return;let a=gr(t,e),o=await this.#U(a);await this.#W(a,{id:vr(n.id),nom:n.nom,portee:`composition`},o,`${_r(n.nom)}.movpack`)!==null&&this.afficherToast(`Composition « ${n.nom} » exportée ✓ — s'importe et rejoint la bibliothèque cible`)}async partagerComposition(e,t=!0){let n=this.bibliotheque,r=n?.compositions.find(t=>t.id===e);if(!n||!r)return;let i=gr(n,e),a=Be(i),o=await this.stockage.listerVideos(),s=t?[...a].filter(e=>o.has(e)):[],c=new Map;for(let e of s)c.set(e,await this.#ee(e));let l=`${_r(r.nom)}.movpack`,u;try{u=await or(i,{id:vr(r.id),nom:r.nom,portee:`composition`},c)}catch(e){this.afficherToast(`Partage impossible : ${e instanceof Error?e.message:`export échoué`}`);return}let d=new File([u],l,{type:`application/octet-stream`});await this.#Z(d,r.nom,`Composition « ${r.nom} » — Movenso`)}async ajouterMediaPresentation(e,t,n){if(!this.#O(`modification`,`Saisis le PIN pour ajouter ce média.`,()=>void this.ajouterMediaPresentation(e,t,n)))return;let r=this.bibliotheque,i=r?.compositions.find(t=>t.id===e);if(!(!r||!i)&&!this.#re){this.#re=!0;try{let e=[],a=[];if(t.fichier){let n=st(t.fichier);if(n){this.afficherToast(n);return}let i=await this.#z(r,t.fichier,`fichier`);if(!i)return;i.ecrit&&a.push(i.media.id),e.push(i.media)}if(t.lien?.trim()){let n=Al(t.lien.trim());if(`erreur`in n){this.afficherToast(n.erreur);return}e.push(n.media)}if(!e.length)return;n?.trim()&&e[0]&&(e[0].label=n.trim());let o=i.presentation?structuredClone(i.presentation):void 0;if(i.presentation={medias:[...i.presentation?.medias??[],...e]},i.modifieLe=new Date().toISOString(),!await this.#ne(r,a,()=>{o?i.presentation=o:delete i.presentation}))return;this.afficherToast(`Présentation ajoutée ✓`)}finally{this.#re=!1}}}async retirerMediaPresentation(e,t){await this.modifierComposition(e,e=>{if(!e.presentation)return;let n=e.presentation.medias.filter(e=>e.id!==t);n.length?e.presentation={medias:n}:delete e.presentation})}async supprimerComposition(e){if(!this.#O(`destruction_ou_sensible`,`Saisis le PIN pour supprimer cette composition.`,()=>void this.supprimerComposition(e)))return;let t=this.bibliotheque,n=t?.compositions.find(t=>t.id===e);!t||!n||(await this.stockage.snapshot(`avant-suppression-de-composition`),t.compositions=t.compositions.filter(t=>t.id!==e),await this.#te(t),this.menuComposition=null,this.retour(),this.afficherToast(`Composition « ${n.nom} » supprimée — point de restauration conservé`))}async ajouterNote(e,t){if(!this.#O(`modification`,`Saisis le PIN pour écrire dans ton carnet.`,()=>void this.ajouterNote(e,t)))return;let n=this.bibliotheque,r=t.trim();!n||!r||(n.contributions.push({id:Qe(),techniqueId:e,provenance:`personnel`,description:r,pointsCles:[],creeLe:new Date().toISOString(),medias:[]}),await this.#te(n))}async ajouterMediaFiche(e,t,n){if(!this.#O(`modification`,`Saisis le PIN pour ajouter ce média.`,()=>void this.ajouterMediaFiche(e,t,n)))return;let r=this.bibliotheque;if(r&&!this.#re){this.#re=!0;try{let i=[],a=[];if(t.fichier){let e=st(t.fichier);if(e){this.afficherToast(e);return}let n=await this.#z(r,t.fichier,`fichier`);if(!n)return;n.ecrit&&a.push(n.media.id),i.push(n.media)}if(t.lien?.trim()){let e=Al(t.lien.trim());if(`erreur`in e){this.afficherToast(e.erreur);return}i.push(e.media)}if(!i.length&&!n?.texte?.trim())return;n?.label&&i[0]&&(i[0].label=n.label);let o=n?.provenance??`personnel`,s={id:Qe(),techniqueId:e,provenance:o,...n?.texte?.trim()?{description:n.texte.trim()}:{},...o!==`personnel`&&n?.attribution?{attribution:n.attribution}:{},pointsCles:[],creeLe:new Date().toISOString(),medias:i};if(r.contributions.push(s),!await this.#ne(r,a,()=>{r.contributions=r.contributions.filter(e=>e.id!==s.id)}))return;i[0]&&(this.mediaAffiche=i[0].id),this.ajoutMedia=null,this.afficherToast(o===`personnel`?`Ajouté à ton carnet ✓`:i.length?`Média ajouté ✓`:`Contribution ajoutée ✓`)}finally{this.#re=!1}}}async amenderContribution(e,t){if(!this.#O(`modification`,`Saisis le PIN pour modifier cette contribution.`,()=>void this.amenderContribution(e,t)))return;let n=this.bibliotheque,r=n?.contributions.find(t=>t.id===e);if(!n||!r)return;let i=r.origine?{modifiePar:this.preferences.pseudo?.trim()||`moi`}:{};t={...t,...i};let a=ol(r,t),o=e=>{let t=n.contributions.findIndex(e=>e.id===r.id);t!==-1&&(n.contributions[t]=e)};o(a);try{await this.#te(n)}catch(e){o(r),this.afficherToast(e instanceof Error?e.message:`Modification refusée`)}}async majMediaLabel(e,t){if(!this.#O(`modification`,`Saisis le PIN pour renommer ce média.`,()=>void this.majMediaLabel(e,t)))return;let n=this.bibliotheque;if(!n)return;let r=n.contributions.find(t=>t.medias.some(t=>t.id===e)),i=r?.medias.find(t=>t.id===e);if(!r||!i)return;let a=i.label,o=t.trim();o?i.label=o:delete i.label;try{await this.#te(n)}catch(e){a===void 0?delete i.label:i.label=a,this.afficherToast(e instanceof Error?e.message:`Renommage refusé`)}}async majMediaLien(e,t){if(!this.#O(`modification`,`Saisis le PIN pour modifier ce lien.`,()=>void this.majMediaLien(e,t)))return;let n=this.bibliotheque;if(!n)return;let r=t.trim();if(!r)return;let i=n.contributions.flatMap(e=>e.medias).filter(t=>t.id===e&&t.type!==`local`);if(i.length===0)return;let a=Al(r);if(`erreur`in a){this.afficherToast(a.erreur);return}let o=a.media,s=i.map(e=>({m:e,type:e.type,service:e.service,ref:e.ref}));for(let e of i)e.type=o.type,e.ref=o.ref,o.service?e.service=o.service:delete e.service;try{await this.#te(n),this.afficherToast(`Lien mis à jour ✓`)}catch(e){for(let e of s)e.m.type=e.type,e.m.ref=e.ref,e.service?e.m.service=e.service:delete e.m.service;this.afficherToast(e instanceof Error?e.message:`Lien refusé`)}}async#Y(e,t){let n=this.bibliotheque,r=n?.techniques.find(t=>t.id===e);!n||!r||(t?r.couverture=t:delete r.couverture,await this.#te(n))}async definirCouvertureImage(e,t){if(this.#O(`modification`,`Saisis le PIN pour changer la vignette.`,()=>void this.definirCouvertureImage(e,t)))try{let n=await kl(t);await this.#Y(e,{type:`image`,dataUrl:n}),this.afficherToast(`Vignette mise à jour ✓`)}catch{this.afficherToast(`Image illisible — choisis une autre photo`)}}async definirCouvertureMedia(e,t){this.#O(`modification`,`Saisis le PIN pour changer la vignette.`,()=>void this.definirCouvertureMedia(e,t))&&(await this.#Y(e,{type:`media`,mediaId:t}),this.afficherToast(`Vignette mise à jour ✓`))}async retirerCouverture(e){this.#O(`modification`,`Saisis le PIN pour changer la vignette.`,()=>void this.retirerCouverture(e))&&(await this.#Y(e,null),this.afficherToast(`Vignette retirée ✓`))}async retirerMedia(e,t){if(!this.#O(`destruction_ou_sensible`,`Saisis le PIN pour retirer ce média.`,()=>void this.retirerMedia(e,t)))return;let n=this.bibliotheque,r=n?.techniques.find(t=>t.id===e),i=n?.contributions.find(n=>n.techniqueId===e&&n.medias.some(e=>e.id===t));!n||!r||!i||(await this.stockage.snapshot(`avant-retrait-d-un-media`),i.medias=i.medias.filter(e=>e.id!==t),i.medias.length===0&&!(i.description??``).trim()&&i.pointsCles.length===0&&(n.contributions=n.contributions.filter(e=>e.id!==i.id)),r.mediaPrincipalId===t&&delete r.mediaPrincipalId,r.couverture?.type===`media`&&r.couverture.mediaId===t&&delete r.couverture,this.mediaAffiche===t&&(this.mediaAffiche=null),await this.#te(n),this.afficherToast(`Média retiré — point de restauration conservé dans les sauvegardes`))}demarrerEntrainement(e){Bc(),this.menuComposition=null,this.#u({type:`entrainement`,compositionId:e,index:0})}estFavori(e){return this.bibliotheque?.favoris.includes(e)??!1}async basculerFavori(e){if(!this.#O(`modification`,`Saisis le PIN pour modifier tes favoris.`,()=>void this.basculerFavori(e)))return;let t=this.bibliotheque;if(!t||!t.techniques.some(t=>t.id===e))return;let n=t.favoris.includes(e);t.favoris=n?t.favoris.filter(t=>t!==e):[...t.favoris,e],await this.#te(t),this.afficherToast(n?`Retiré des favoris`:`Ajouté aux favoris`)}techniquesFavorites(){let e=this.bibliotheque;return e?e.favoris.map(t=>e.techniques.find(e=>e.id===t)).filter(e=>e!==void 0):[]}async demanderPartageTechnique(e){let t=this.bibliotheque,n=t?.techniques.find(t=>t.id===e);if(!t||!n)return;let r;try{({extrait:r}=hr(t,e))}catch{this.partagerTechnique(e);return}let i=await this.stockage.listerVideos(),a=[...Be(r)].filter(e=>i.has(e));if(a.length===0){this.partagerTechnique(e);return}let o=r.contributions.flatMap(e=>e.medias).filter(e=>e.type===`lien`||e.type===`plateforme`).length,s=await this.stockage.taillesVideos(),c=a.reduce((e,t)=>e+(s.get(t)??0),0);this.partagePreparation={techniqueId:e,nom:n.nom,avecVideos:!0,nbLiens:o,nbLocales:a.length,octetsLocaux:c}}async confirmerPartage(){let e=this.partagePreparation;e&&(this.partagePreparation=null,await this.partagerTechnique(e.techniqueId,e.avecVideos))}async partagerTechnique(e,t=!0){let n=this.bibliotheque,r=n?.techniques.find(t=>t.id===e);if(!n||!r)return;let i;try{({extrait:i}=hr(n,e))}catch(e){this.afficherToast(`Partage impossible : ${e instanceof Error?e.message:`fiche illisible`}`);return}let a=Be(i),o=await this.stockage.listerVideos(),s=t?[...a].filter(e=>o.has(e)):[],c=new Map;for(let e of s)c.set(e,await this.#ee(e));let l=`${_r(r.nom)}.movpack`,u;try{u=await or(i,{id:`technique-${r.id}`,nom:r.nom,portee:`discipline`},c)}catch(e){this.afficherToast(`Partage impossible : ${e instanceof Error?e.message:`export échoué`}`);return}let d=new File([u],l,{type:`application/octet-stream`});await this.#Z(d,r.nom,`Technique « ${r.nom} » — Movenso`)}async#X(e){let t=!1;try{let{Capacitor:n}=await vc(async()=>{let{Capacitor:e}=await import(`./dist-sZ8V2geg.js`);return{Capacitor:e}},[],import.meta.url);if(t=!!n?.isNativePlatform?.(),t)return await this.#$(e,`documents`,`Movenso/${e.name}`),`Documents/Movenso/${e.name}`}catch{if(t)return await this.#Z(e,e.name,`Movenso — ${e.name}`),`le partage — choisis « Enregistrer dans Fichiers »`}return Ol(e,e.name),`tes téléchargements`}async#Z(e,t,n){try{let{Capacitor:r}=await vc(async()=>{let{Capacitor:e}=await import(`./dist-sZ8V2geg.js`);return{Capacitor:e}},[],import.meta.url);if(r?.isNativePlatform?.()){let{Filesystem:r,Directory:i}=await vc(async()=>{let{Filesystem:e,Directory:t}=await import(`./esm-BROC65WP.js`);return{Filesystem:e,Directory:t}},__vite__mapDeps([3,1]),import.meta.url),{Share:a}=await vc(async()=>{let{Share:e}=await import(`./esm-Bmskl0bn.js`);return{Share:e}},__vite__mapDeps([4,1]),import.meta.url);await this.#$(e,`cache`,e.name);let{uri:o}=await r.getUri({path:e.name,directory:i.Cache});await a.share({title:t,text:n,url:o}),this.afficherToast(`Partagé ✓`);return}}catch(e){if(e instanceof Error&&/cancel/i.test(e.message))return}let r=navigator;if(r.share&&r.canShare?.({files:[e]}))try{await r.share({files:[e],title:t,text:n}),this.afficherToast(`Partagé ✓`);return}catch(e){if(e instanceof DOMException&&e.name===`AbortError`)return}Ol(e,e.name),this.afficherToast(`Fichier .movpack enregistré dans tes téléchargements — joins-le depuis WhatsApp, Drive ou un mail.`)}async#Q(e){let t=new Uint8Array(await e.arrayBuffer()),n=``,r=32768;for(let e=0;e<t.length;e+=r)n+=String.fromCharCode(...t.subarray(e,e+r));return btoa(n)}async#$(e,t,n){let{Filesystem:r,Directory:i}=await vc(async()=>{let{Filesystem:e,Directory:t}=await import(`./esm-BROC65WP.js`);return{Filesystem:e,Directory:t}},__vite__mapDeps([3,1]),import.meta.url),a=t===`documents`?i.Documents:i.Cache,o=3*1024*1024;if(e.size===0){await r.writeFile({path:n,data:``,directory:a,recursive:!0});return}let s=!0;for(let t=0;t<e.size;t+=o){let i=await this.#Q(e.slice(t,t+o));s?(await r.writeFile({path:n,data:i,directory:a,recursive:!0}),s=!1):await r.appendFile({path:n,data:i,directory:a})}}async#ee(e){let t=[];for await(let n of this.stockage.lireMediaParBlocs(e,1<<20))t.push(n);let n=t.reduce((e,t)=>e+t.length,0),r=new Uint8Array(n),i=0;for(let e of t)r.set(e,i),i+=e.length;return r}doublonsPotentiels(){let e=this.bibliotheque;return e?Lo(e,e.doublonsIgnores??[]):[]}async rescannerDoublons(){let e=this.bibliotheque;!e||!(e.doublonsIgnores??[]).length||(delete e.doublonsIgnores,await this.#te(e),this.doublonOuvert=null,this.requestUpdate(),this.afficherToast(`Rescan effectué — les paires écartées reviennent à l'arbitrage.`))}async classerDoublon(e,t,n){let r=this.bibliotheque;r&&(r.doublonsIgnores=[...new Set([...r.doublonsIgnores??[],Po(e,t)])],await this.#te(r),this.fusionDoublon&&this.fusionDoublon.aId===e&&this.fusionDoublon.bId===t&&(this.fusionDoublon=null),this.afficherToast(n))}async resoudreDoublonGarder(e,t){let n=this.bibliotheque;!n||!n.techniques.some(t=>t.id===e)||await this.supprimerTechnique(t)}async fusionnerDoublonAvec(e,t,n){if(!this.#O(`destruction_ou_sensible`,`Saisis le PIN pour fusionner ces fiches.`,()=>void this.fusionnerDoublonAvec(e,t,n)))return;let r=this.bibliotheque;if(!r)return;await this.stockage.snapshot(`avant-fusion-doublon`);let i=e=>{let t=r.techniques.find(t=>t.id===e);return{technique:structuredClone(t),contributions:r.contributions.filter(t=>t.techniqueId===e).map(e=>structuredClone(e)),etaitFavori:r.favoris.includes(e)}},a=i(e),o=i(t),s;try{s=Bo(r,e,t,n)}catch(e){this.afficherToast(`Fusion impossible : ${e instanceof Error?e.message:`état inattendu`}`);return}s.fusions=[...s.fusions??[],{fusionneeLe:new Date().toISOString(),fusionneeId:e,a,b:o}],this.fusionDoublon=null,await this.#te(s),this.afficherToast(`Fusionnées en une seule fiche ✓ — défusionnable depuis « Doublons »`)}async defusionner(e){if(!this.#O(`destruction_ou_sensible`,`Saisis le PIN pour défusionner ces fiches.`,()=>void this.defusionner(e)))return;let t=this.bibliotheque;if(!t)return;await this.stockage.snapshot(`avant-defusion`);let n;try{n=Vo(t,e)}catch(e){this.afficherToast(`Défusion impossible : ${e instanceof Error?e.message:`état inattendu`}`);return}await this.#te(n),this.afficherToast(`Fiches défusionnées ✓ — les deux fiches d'origine sont rétablies`)}async creerAdaptationLocale(e){if(!this.#O(`modification`,`Saisis le PIN pour créer une adaptation locale.`,()=>void this.creerAdaptationLocale(e)))return;let t=this.bibliotheque,n=t?.contributions.find(t=>t.id===e);if(!t||!n)return;let r={id:Qe(),techniqueId:n.techniqueId,provenance:`personnel`,...n.description?{description:n.description}:{},pointsCles:[...n.pointsCles],...n.variantes?{variantes:n.variantes}:{},attribution:`Adaptation locale d'après ${$a(n)}`,creeLe:new Date().toISOString(),medias:[]};t.contributions.push(r),await this.#te(t),this.voixOuverte=r.id,this.afficherToast(`Adaptation locale créée — modifiable librement ✓`)}ouvrirCapture(){this.capture={etape:`contenu`,note:``,demarreA:Date.now(),...this.ecran.type===`composition`?{compositionCible:this.ecran.compositionId}:{},...this.ecran.type===`discipline`?{disciplineChoisieId:this.ecran.disciplineId}:{}}}async terminerCaptureRepere(){let e=this.capture,t=e?.compositionCible,n=this.bibliotheque;if(!e||!t||!n||!this.#O(`modification`,`Saisis le PIN pour enregistrer ce repère.`,()=>void this.terminerCaptureRepere()))return;let r=n.compositions.find(e=>e.id===t);if(r&&!this.#re){this.#re=!0;try{let t=[],i=[];if(e.video){let r=st(e.video);if(r){this.afficherToast(r);return}let a=await this.#z(n,e.video,e.camera?`camera`:`fichier`);if(!a)return;a.ecrit&&i.push(a.media.id),t.push(a.media)}if(e.lien?.trim()){let n=Al(e.lien.trim());if(`erreur`in n){this.afficherToast(n.erreur);return}t.push(n.media)}let a=e.note.trim();if(!a&&t.length===0)return;let o=Qe(),s=r.modifieLe;if(r.blocs.push({id:o,type:`repere`,...a?{texte:a}:{},medias:t}),r.modifieLe=new Date().toISOString(),!await this.#ne(n,i,()=>{r.blocs=r.blocs.filter(e=>e.id!==o),s===void 0?delete r.modifieLe:r.modifieLe=s}))return;this.capture=null,this.afficherToast(`Repère ajouté à la composition ✓`)}finally{this.#re=!1}}}ouvrirRattachement(e){this.#O(`modification`,`Saisis le PIN pour reprendre cette capture.`,()=>void this.ouvrirRattachement(e))&&(this.capture={etape:`rattacher`,note:``,demarreA:Date.now(),rattacherSeul:e})}fermerCapture(){this.capture?.apercuUrl&&URL.revokeObjectURL(this.capture.apercuUrl),this.capture=null}reculerCapture(){let e=this.capture;if(!e)return;if(e.question){this.capture={...e,question:!1};return}if(e.rattacherSeul){this.fermerCapture();return}let t=e.video!==void 0||(e.lien??``).trim()!==``||e.note.trim()!==``;if(e.etape===`rattacher`){this.capture={...e,etape:`note`};return}if(e.etape===`apercu`||e.etape===`note`){this.capture=t?{...e,question:!0}:{...e,etape:`contenu`};return}if(e.saisieLien){this.capture={...e,saisieLien:!1};return}this.fermerCapture()}async terminerCapture(e,t,n){if(!this.#O(`modification`,`Saisis le PIN pour enregistrer cette capture.`,()=>void this.terminerCapture(e,t,n)))return;let r=this.bibliotheque,i=this.capture;if(!r||!i)return;let a=Math.max(1,Math.round((Date.now()-i.demarreA)/1e3));if(t!==void 0){let i=n?.disciplineId??(this.ecran.type===`fiche`?this.technique(this.ecran.techniqueId)?.disciplineId:void 0)??(r.disciplines.length===1?r.disciplines[0].id:void 0);if(!i&&n?.disciplineNom?.trim()&&(i=Qe(),r.disciplines.push({id:i,nom:n.disciplineNom.trim(),familles:[],niveaux:[]})),!i){this.afficherToast(`Choisis ou nomme une discipline pour cette technique`);return}if(e=this.#G(r,i,t),!e){this.afficherToast(`Nom de technique vide — précise-le pour rattacher`);return}}if(i.rattacherSeul!==void 0){let t=r.contributions.find(e=>e.id===i.rattacherSeul);t&&e&&(t.techniqueId=e),await this.#te(r),this.capture=null,e&&(this.afficherToast(`Rattaché à ${this.technique(e)?.nom} ✓`),this.ouvrirFiche(e));return}if(this.#re)return;this.#re=!0;let o=[],s=[];try{if(i.video){let e=st(i.video);if(e){this.afficherToast(e);return}let t=await this.#z(r,i.video,i.camera?`camera`:`fichier`);if(!t)return;t.ecrit&&s.push(t.media.id),o.push(t.media)}if(i.lien?.trim()){let e=Al(i.lien.trim());if(`erreur`in e){this.afficherToast(e.erreur);return}o.push(e.media)}let t=i.provenance??`personnel`,n={id:Qe(),techniqueId:e,provenance:t,...i.note.trim()?{description:i.note.trim()}:{},...t!==`personnel`&&i.attribution?.trim()?{attribution:i.attribution.trim()}:{},pointsCles:[],creeLe:new Date().toISOString(),medias:o};if(r.contributions.push(n),!await this.#ne(r,s,()=>{r.contributions=r.contributions.filter(e=>e.id!==n.id)}))return}finally{this.#re=!1}this.capture=null,e?(this.afficherToast(`Capturé ✓ rattaché à ${this.technique(e)?.nom} — ${a} s, hors ligne`),this.ouvrirFiche(e)):(this.afficherToast(`Conservé — à rattacher, dans Plus › À traiter ✓ — ${a} s, hors ligne`),this.ouvrirPlusSection(`atraiter`))}async#te(e){await this.stockage.sauvegarder(e),this.bibliotheque={...e}}async#ne(e,t,n){try{return await this.#te(e),!0}catch(e){n();for(let e of t)await this.stockage.supprimerVideo(e);return this.afficherToast(e instanceof Error?e.message:`Enregistrement refusé`),!1}}#re=!1;render(){if(this.erreurDemarrage)return P`<div class="ecran erreur-demarrage" style="padding:24px 18px"><div class="carte-atelier">
        <div class="encart-entete"><span class="titre-atelier">Movenso n'a pas pu démarrer</span></div>
        <p class="details" style="line-height:1.6">${this.erreurDemarrage}</p>
        <p class="details" style="line-height:1.6; opacity:.75; font-size:12.5px">
          Navigateurs supportés : Chrome, Edge et Firefox récents — sur téléphone,
          tablette et ordinateur. Rien n'a été modifié sur cet appareil.
        </p>
      </div></div>`;if(!this.bibliotheque)return F;let e=this.ecran.type===`fiche`?vo(this,this.ecran.techniqueId):this.ecran.type===`discipline`?ho(this,this.ecran.disciplineId):this.ecran.type===`bibliotheques`?fo(this):this.ecran.type===`plus`?this.ecran.section?dc(this,this.ecran.section):mc(this):this.ecran.type===`relations`?wi(this):this.ecran.type===`favoris`?mo(this):this.ecran.type===`compositions`?yc(this):this.ecran.type===`composition`?Mc(this,this.ecran.compositionId):this.ecran.type===`entrainement`?Fc(this,this.ecran.compositionId,this.ecran.index):fo(this),t=this.capture!==null||this.importEnAttente!==null||this.rapportApresImport!==null||this.restaurationEnAttente!==null||this.demandePin!==null||this.ajoutMedia!==null||this.ajouter!==null||this.partagePreparation!==null||this.enregistrementMedia!==null||this.ecran.type===`entrainement`;return P`
      ${e}
      ${t?F:this.#ae()}
      ${t?F:this.#de()}
      ${t||this.ecran.type===`entrainement`?F:this.#A()}
      ${this.importEnAttente?this.#oe():F}
      ${this.rapportApresImport?this.#se():F}
      ${this.restaurationEnAttente?this.#ce():F}
      ${this.demandePin?this.#k():F}
      ${this.capture?ul(this):F}
      ${this.ajoutMedia?vl(this):F}
      ${this.partagePreparation?this.#le():F}
      ${this.enregistrementMedia?this.#ue():F}
      ${this.ajouter?Cl(this):F}
      ${this.creationCompo?wc(this):F}
      ${this.ajoutPas?Dc(this):F}
      ${this.editionPas?Oc(this):F}
      ${this.editionLien?La(this):F}
      ${this.menuComposition?Nc(this):F}
      ${this.toast&&this.ecran.type!==`entrainement`?P`<div class="toast" role="status">${this.toast}</div>`:F}
      ${this.#ie()}
    `}#ie(){let e=this.progressionExport,t=e?e.total>0?`Préparation du fichier — ${e.fait} / ${e.total} vidéo${e.total>1?`s`:``}`:`Préparation du fichier…`:this.occupe;return t?P`<div class="voile-occupe" role="status" aria-live="polite">
      <div class="occupe-carte"><span class="occupe-spinner" aria-hidden="true"></span><span>${t}</span>
        ${this.annulationOccupe?P`<button class="chip-filtre" style="margin-left:6px"
              @click=${()=>this.annulationOccupe?.executer()}>${this.annulationOccupe.libelle}</button>`:F}
      </div>
    </div>`:F}#ae(){let e=e=>this.autoriser(`modification`,`Saisis le PIN pour ajouter ou capturer.`,()=>{this.ajouter=e,this.requestUpdate()});if(this.ecran.type===`discipline`){let t=this.ecran.disciplineId;return P`<button class="fab" @click=${()=>e({disciplineId:t})}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M12 5v14M5 12h14"/></svg>
        Ajouter
      </button>`}return this.ecran.type===`bibliotheques`&&this.bibliotheque?P`<button class="fab" @click=${()=>e({})}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M12 5v14M5 12h14"/></svg>
        Ajouter
      </button>`:this.ecran.type===`compositions`&&this.bibliotheque?P`<button class="fab" @click=${()=>this.ouvrirCreationCompo()}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M12 5v14M5 12h14"/></svg>
        Créer
      </button>`:F}#oe(){let e=this.importEnAttente,{rapport:t,manifeste:n,volume:r,medias:i}=e,a=i.length,o=r>=1e6?`${(r/1e6).toFixed(1)} Mo`:`${Math.max(1,Math.round(r/1e3))} Ko`,s=t.creees.length,c=t.rejointes.length>0||t.retirees.length>0,l=e.dejaInstalle,u=n?.nom??t.discipline;return P`
      <div class="voile" @click=${()=>this.annulerImport()}></div>
      <div class="feuille" role="dialog" aria-modal="true" tabindex="-1" aria-label="Proposition d'import">
        <div class="prise"></div>
        <h2>${l?P`Mettre à jour « ${u} » ?`:P`Installer « ${u} » ?`}</h2>
        <div class="geste manifeste-import">
          ${n?.auteur?P`${n.auteur} · `:F}${a?P`${a} vidéo${a>1?`s`:``} · `:F}${o}${n?.conditions?P`<br>Conditions : ${n.conditions}`:F}
        </div>
        ${l?P`<div class="geste avertissement-import" style="color:var(--attention,#b26b00)">
              ⚠ Ce pack est déjà installé. Le mettre à jour remplace le contenu du pack par cette version.
              Tes vidéos, notes et favoris sont conservés ; tes retouches au texte des fiches <b>du pack</b> seront remplacées.</div>`:F}
        ${e.avertissements.length?P`<div class="geste avertissement-import" style="color:var(--attention,#b26b00)">
              ⚠ ${e.avertissements.join(` · `)}</div>`:F}
        <ul class="points" style="margin:8px 0 0; list-style:none; padding:0">
          <li>${s?P`<b>${s}</b> technique${s>1?`s`:``} ser${s>1?`ont`:`a`} ajoutée${s>1?`s`:``}.`:`Rien de nouveau à ajouter.`}</li>
          <li>${l||c?`Le contenu du pack déjà installé est mis à jour.`:`Aucune technique existante ne sera modifiée.`}</li>
        </ul>
        ${t.suggestions.length?P`<p class="geste" style="padding:8px 0 0; line-height:1.5">
              <b>${t.suggestions.length}</b> technique${t.suggestions.length>1?`s semblent`:` semble`} déjà présente${t.suggestions.length>1?`s`:``} dans un autre pack.
              Elles resteront séparées et pourront être comparées plus tard dans Plus › Doublons potentiels.</p>`:F}
        <div class="actions">
          <button class="bouton" @click=${()=>this.annulerImport()}>Annuler</button>
          <button class="bouton principal" @click=${()=>void this.confirmerImport()}>${l?`Mettre à jour`:`Installer`}</button>
        </div>
      </div>
    `}#se(){let e=this.rapportApresImport,t=(e,t)=>e?P`<li><b>${e}</b> ${t}</li>`:F;return P`
      <div class="voile" @click=${()=>this.fermerRapportImport()}></div>
      <div class="feuille" role="dialog" aria-modal="true" tabindex="-1" aria-label="Rapport d'import">
        <div class="prise"></div>
        <h2>« ${e.discipline} » installé ✓</h2>
        <ul class="points" style="margin:4px 0 0; list-style:none; padding:0">
          ${t(e.creees,`technique(s) ajoutée(s)`)}
          ${t(e.videos,`vidéo(s) ajoutée(s)`)}
        </ul>
        ${e.suggestions.length?P`<p class="geste" style="padding:8px 0 0; line-height:1.5">
              <b>${e.suggestions.length}</b> technique${e.suggestions.length>1?`s`:``} à comparer plus tard dans Plus › Doublons potentiels.
            </p>`:F}
        ${e.conflitsLiaisons?P`<p class="geste" style="padding:8px 0 0; line-height:1.5">
              <b>${e.conflitsLiaisons}</b> liaison${e.conflitsLiaisons>1?`s`:``} diffère${e.conflitsLiaisons>1?`nt`:``} du pack —
              <button class="lien-texte" @click=${()=>{this.fermerRapportImport(),this.ouvrirPlusSection(`relations`)}}>à arbitrer dans Plus › Relations</button>.
            </p>`:F}
        <div class="actions">
          ${e.disciplineId?P`<button class="bouton" @click=${()=>{let t=e.disciplineId;this.fermerRapportImport(),this.ouvrirDiscipline(t)}}>
                Ouvrir la discipline</button>`:F}
          <button class="bouton principal" @click=${()=>this.fermerRapportImport()}>Fermer</button>
        </div>
      </div>
    `}#ce(){let e=this.restaurationEnAttente,t=e.bibliotheque;return P`
      <div class="voile" @click=${()=>this.annulerRestauration()}></div>
      <div class="feuille" role="dialog" aria-modal="true" tabindex="-1" aria-label="Restauration complète">
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
        ${e.avertissements.length?P`<div class="geste avertissement-import" style="color:var(--attention,#b26b00)">
              ⚠ ${e.avertissements.join(` · `)}</div>`:F}
        <p class="fil-vide" style="padding:6px 0 0">
          Cette installation est vierge : rien n'est remplacé. Rien n'est
          écrit avant ta confirmation.
        </p>
        <div class="actions">
          <button class="bouton" @click=${()=>this.annulerRestauration()}>Annuler</button>
          <button class="bouton principal" @click=${()=>void this.confirmerRestauration()}>Restaurer</button>
        </div>
      </div>
    `}#le(){let e=this.partagePreparation,t=e=>e>=1e6?`${(e/1e6).toFixed(1)} Mo`:`${Math.max(1,Math.round(e/1e3))} Ko`;return P`
      <div class="voile" @click=${()=>this.partagePreparation=null}></div>
      <div class="feuille" role="dialog" aria-modal="true" tabindex="-1" aria-label="Partager la technique">
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
    `}#ue(){let e=this.enregistrementMedia,t=e.octets>=1e6?`${(e.octets/1e6).toFixed(1)} Mo`:`${Math.max(1,Math.round(e.octets/1e3))} Ko`,n=Math.round(e.fraction*100);return P`
      <div class="voile"></div>
      <div class="feuille feuille-progression" role="dialog" aria-modal="true" tabindex="-1" aria-label="Enregistrement en cours" aria-live="polite">
        <div class="prise"></div>
        <h2>${e.phase===`analyse`?`Analyse de la vidéo…`:`Enregistrement…`}</h2>
        <div class="geste">
          ${t}${e.phase===`ecriture`?P` · ${n} %${e.etaSec===null?F:P` · ~${e.etaSec} s restant`}`:``}
        </div>
        <div class="barre-progression">
          <div class="barre-progression-jauge ${e.phase===`analyse`?`indeterminee`:``}"
            style=${e.phase===`ecriture`?`width:${n}%`:``}></div>
        </div>
        <div class="actions" style="padding-top:10px">
          <button class="bouton" @click=${()=>this.annulerIngestionVideo()}>Annuler</button>
        </div>
      </div>
    `}zoneCourante(){switch(this.ecran.type){case`plus`:return`plus`;case`relations`:return`relations`;case`favoris`:return`favoris`;case`compositions`:case`composition`:case`entrainement`:return`compositions`;default:return`bibliotheque`}}#de(){let e=this.zoneCourante(),t=(t,n,r,i)=>P`
      <button class="nav-onglet ${e===t?`actif`:``}" @click=${i}
              aria-label=${n} aria-current=${e===t?`page`:F}>
        ${r}<span>${n}</span>
      </button>`;return P`<nav class="barre-nav">
      ${t(`bibliotheque`,`Bibliothèque`,P`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 5a2 2 0 0 1 2-2h13v18H6a2 2 0 0 1-2-2Z"/><path d="M4 17.5A2.5 2.5 0 0 1 6.5 15H19"/></svg>`,()=>this.ouvrirBibliotheque())}
      ${t(`favoris`,`Favoris`,P`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20s-7-4.35-9.3-8.5C1.2 8.7 2.6 5.5 5.7 5.5c1.9 0 3.1 1 4.3 2.5 1.2-1.5 2.4-2.5 4.3-2.5 3.1 0 4.5 3.2 3 6-2.3 4.15-9.3 8.5-9.3 8.5Z"/></svg>`,()=>this.ouvrirFavoris())}
      ${this.preferences.vueRelationBeta?t(`relations`,`Relations`,P`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="6" r="2.4"/><circle cx="5" cy="18" r="2.4"/><circle cx="19" cy="18" r="2.4"/><path d="M12 8.4 6.6 15.8M12 8.4l5.4 7.4M7.4 18h9.2"/></svg>`,()=>this.ouvrirRelationsVisuelle()):F}
      ${t(`compositions`,`Compositions`,P`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="5" rx="1.5"/><rect x="4" y="12" width="16" height="5" rx="1.5"/></svg>`,()=>this.ouvrirCompositions())}
      ${t(`plus`,`Plus`,P`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="5" cy="12" r="1.6"/><circle cx="12" cy="12" r="1.6"/><circle cx="19" cy="12" r="1.6"/></svg>`,()=>this.ouvrirPlus())}
    </nav>`}};function Ol(e,t){let n=URL.createObjectURL(e),r=document.createElement(`a`);r.href=n,r.download=t,r.click(),setTimeout(()=>URL.revokeObjectURL(n),6e4)}async function kl(e){let t=URL.createObjectURL(e);try{let e=await new Promise((e,n)=>{let r=new Image;r.onload=()=>e(r),r.onerror=()=>n(Error(`image illisible`)),r.src=t}),n=Math.min(1,480/Math.max(e.naturalWidth,e.naturalHeight||1)),r=Math.max(1,Math.round(e.naturalWidth*n)),i=Math.max(1,Math.round(e.naturalHeight*n)),a=document.createElement(`canvas`);a.width=r,a.height=i;let o=a.getContext(`2d`);if(!o)throw Error(`canvas indisponible`);return o.drawImage(e,0,0,r,i),a.toDataURL(`image/jpeg`,.72)}finally{URL.revokeObjectURL(t)}}function Al(e){let t=ht(e);return t.ok?{media:t.type===`plateforme`?{id:Qe(),type:`plateforme`,service:t.service,ref:t.ref}:{id:Qe(),type:`lien`,ref:t.ref}}:{erreur:t.raison}}customElements.define(`movenso-app`,Dl);export{vc as t};