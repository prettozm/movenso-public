const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./esm-BIhdpn9A.js","./dist-sZ8V2geg.js","./esm-EMPzBRjr.js","./esm-B9y7kQXZ.js","./esm-CfB9jJEB.js"])))=>i.map(i=>d[i]);
(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=globalThis,t=e.ShadowRoot&&(e.ShadyCSS===void 0||e.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,n=Symbol(),r=new WeakMap,i=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,n=this.t;if(t&&e===void 0){let t=n!==void 0&&n.length===1;t&&(e=r.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&r.set(n,e))}return e}toString(){return this.cssText}},a=e=>new i(typeof e==`string`?e:e+``,void 0,n),o=(n,r)=>{if(t)n.adoptedStyleSheets=r.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let t of r){let r=document.createElement(`style`),i=e.litNonce;i!==void 0&&r.setAttribute(`nonce`,i),r.textContent=t.cssText,n.appendChild(r)}},s=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return a(t)})(e):e,{is:c,defineProperty:l,getOwnPropertyDescriptor:u,getOwnPropertyNames:d,getOwnPropertySymbols:f,getPrototypeOf:p}=Object,m=globalThis,h=m.trustedTypes,g=h?h.emptyScript:``,_=m.reactiveElementPolyfillSupport,v=(e,t)=>e,y={toAttribute(e,t){switch(t){case Boolean:e=e?g:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},b=(e,t)=>!c(e,t),x={attribute:!0,type:String,converter:y,reflect:!1,useDefault:!1,hasChanged:b};Symbol.metadata??=Symbol(`metadata`),m.litPropertyMetadata??=new WeakMap;var ee=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=x){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&l(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=u(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??x}static _$Ei(){if(this.hasOwnProperty(v(`elementProperties`)))return;let e=p(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(v(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v(`properties`))){let e=this.properties,t=[...d(e),...f(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(s(e))}else e!==void 0&&t.push(s(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return o(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?y:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?y:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??b)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};ee.elementStyles=[],ee.shadowRootOptions={mode:`open`},ee[v(`elementProperties`)]=new Map,ee[v(`finalized`)]=new Map,_?.({ReactiveElement:ee}),(m.reactiveElementVersions??=[]).push(`2.1.2`);var S=globalThis,C=e=>e,w=S.trustedTypes,T=w?w.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,E=`$lit$`,D=`lit$${Math.random().toFixed(9).slice(2)}$`,te=`?`+D,ne=`<${te}>`,O=document,k=()=>O.createComment(``),A=e=>e===null||typeof e!=`object`&&typeof e!=`function`,re=Array.isArray,j=e=>re(e)||typeof e?.[Symbol.iterator]==`function`,ie=`[ 	
\f\r]`,ae=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,oe=/-->/g,se=/>/g,M=RegExp(`>|${ie}(?:([^\\s"'>=/]+)(${ie}*=${ie}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),N=/'/g,ce=/"/g,le=/^(?:script|style|textarea|title)$/i,ue=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),P=ue(1),de=ue(2),fe=Symbol.for(`lit-noChange`),F=Symbol.for(`lit-nothing`),pe=new WeakMap,me=O.createTreeWalker(O,129);function he(e,t){if(!re(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return T===void 0?t:T.createHTML(t)}var ge=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=ae;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===ae?c[1]===`!--`?o=oe:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=M):(le.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=M):o=se:o===M?c[0]===`>`?(o=i??ae,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?M:c[3]===`"`?ce:N):o===ce||o===N?o=M:o===oe||o===se?o=ae:(o=M,i=void 0);let d=o===M&&e[t+1].startsWith(`/>`)?` `:``;a+=o===ae?n+ne:l>=0?(r.push(s),n.slice(0,l)+E+n.slice(l)+D+d):n+D+(l===-2?t:d)}return[he(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]},_e=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=ge(t,n);if(this.el=e.createElement(l,r),me.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=me.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(E)){let t=u[o++],n=i.getAttribute(e).split(D),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?Se:r[1]===`?`?Ce:r[1]===`@`?we:xe}),i.removeAttribute(e)}else e.startsWith(D)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(le.test(i.tagName)){let e=i.textContent.split(D),t=e.length-1;if(t>0){i.textContent=w?w.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],k()),me.nextNode(),c.push({type:2,index:++a});i.append(e[t],k())}}}else if(i.nodeType===8)if(i.data===te)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(D,e+1))!==-1;)c.push({type:7,index:a}),e+=D.length-1}a++}}static createElement(e,t){let n=O.createElement(`template`);return n.innerHTML=e,n}};function ve(e,t,n=e,r){if(t===fe)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=A(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=ve(e,i._$AS(e,t.values),i,r)),t}var ye=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??O).importNode(t,!0);me.currentNode=r;let i=me.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new be(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new Te(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=me.nextNode(),a++)}return me.currentNode=O,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},be=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=F,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=ve(this,e,t),A(e)?e===F||e==null||e===``?(this._$AH!==F&&this._$AR(),this._$AH=F):e!==this._$AH&&e!==fe&&this._(e):e._$litType$===void 0?e.nodeType===void 0?j(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==F&&A(this._$AH)?this._$AA.nextSibling.data=e:this.T(O.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=_e.createElement(he(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new ye(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=pe.get(e.strings);return t===void 0&&pe.set(e.strings,t=new _e(e)),t}k(t){re(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(k()),this.O(k()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=C(e).nextSibling;C(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},xe=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=F,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=F}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=ve(this,e,t,0),a=!A(e)||e!==this._$AH&&e!==fe,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=ve(this,r[n+o],t,o),s===fe&&(s=this._$AH[o]),a||=!A(s)||s!==this._$AH[o],s===F?e=F:e!==F&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===F?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},Se=class extends xe{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===F?void 0:e}},Ce=class extends xe{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==F)}},we=class extends xe{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=ve(this,e,t,0)??F)===fe)return;let n=this._$AH,r=e===F&&n!==F||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==F&&(n===F||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Te=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){ve(this,e)}},Ee={M:E,P:D,A:te,C:1,L:ge,R:ye,D:j,V:ve,I:be,H:xe,N:Ce,U:we,B:Se,F:Te},De=S.litHtmlPolyfillSupport;De?.(_e,be),(S.litHtmlVersions??=[]).push(`3.3.3`);var Oe=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new be(t.insertBefore(k(),e),e,void 0,n??{})}return i._$AI(e),i},ke=globalThis,Ae=class extends ee{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Oe(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return fe}};Ae._$litElement$=!0,Ae.finalized=!0,ke.litElementHydrateSupport?.({LitElement:Ae});var je=ke.litElementPolyfillSupport;je?.({LitElement:Ae}),(ke.litElementVersions??=[]).push(`4.2.2`);var Me=[`referentiel`,`enseignement`,`ressource`,`personnel`],Ne=[{id:`prepare`,libelle:`Prépare`,libelleInverse:`Préparée par`,role:`before`},{id:`enchaine`,libelle:`Enchaîne vers`,libelleInverse:`Enchaînée depuis`,role:`after`},{id:`contre`,libelle:`Contre`,libelleInverse:`Contrée par`,role:`opposition`},{id:`similaire`,libelle:`Similaire à`,symetrique:!0,role:`peer`}],Pe=[`local`,`lien`,`plateforme`],Fe=[`youtube`];function I(e){return e.origine?.pack??`local`}var Ie=[`camera`,`fichier`,`import`],Le=[`technique`,`etape`,`transition`,`consigne`,`objectif`,`duree`,`media`,`repere`,`pause`],Re=[`simultane`,`reaction`,`puis`];function ze(){return{versionSchema:6,typesRelation:Ne.map(e=>({...e})),disciplines:[],techniques:[],contributions:[],compositions:[],favoris:[],doublonsIgnores:[],images:[]}}var Be=new Set([`typesRelation`]);function Ve(e){return Object.entries(e).every(([e,t])=>!Array.isArray(t)||Be.has(e)||t.length===0)}function He(e){let t=new Map,n=new Map(e.techniques.map(e=>[e.id,e.nom])),r=(e,n)=>{let r=t.get(e.id);r?r.references.push(n):t.set(e.id,{media:e,references:[n]})};for(let t of e.contributions)for(let e of t.medias)r(e,{ou:`contribution`,conteneurId:t.id,techniqueId:t.techniqueId,nom:t.techniqueId?n.get(t.techniqueId)??`?`:`capture à rattacher`});for(let t of e.compositions)for(let e of t.blocs)for(let n of e.medias)r(n,{ou:`bloc`,conteneurId:t.id,techniqueId:null,nom:`composition « ${t.nom} »`});for(let n of e.techniques){if(!n.mediaPrincipalId)continue;let e=t.get(n.mediaPrincipalId);e&&e.references.push({ou:`media-principal`,conteneurId:n.id,techniqueId:n.id,nom:n.nom})}return t}function Ue(e){let t=new Set;for(let[n,r]of He(e))r.media.type===`local`&&t.add(n);for(let n of e.corbeille??[])for(let e of n.contributions)for(let n of e.medias)n.type===`local`&&t.add(n.id);return t}var We={"video/webm":`webm`,"video/mp4":`mp4`,"video/quicktime":`mov`,"video/x-matroska":`mkv`,"video/3gpp":`3gp`,"video/ogg":`ogv`,"video/x-msvideo":`avi`};function Ge(e,t){let n=We[e?.split(`;`)[0]?.trim().toLowerCase()??``];if(n)return n;let r=t?.match(/\.([a-z0-9]{1,5})$/i)?.[1];return r?r.toLowerCase():void 0}function Ke(e,t,n){if(n){for(let{media:r}of He(e).values())if(r.type===`local`&&r.sha256===n&&r.taille===t)return r}}var qe=new Map;async function Je(e,t){let n=new Set((t.images??[]).map(e=>e.id));for(let[e,t]of[...qe])n.has(e)||(URL.revokeObjectURL(t),qe.delete(e));for(let t of n){if(qe.has(t))continue;let n=await e.lireImage(t);n&&qe.set(t,URL.createObjectURL(n))}}function Ye(e){return qe.get(e)??null}var Xe=`0123456789ABCDEFGHJKMNPQRSTVWXYZ`,Ze=10,Qe=16,$e=-1,et=[];function tt(e){let t=``;for(let n=Ze-1;n>=0;n--)t=Xe[e%32]+t,e=Math.floor(e/32);return t}function nt(){let e=new Uint8Array(Qe);return globalThis.crypto.getRandomValues(e),Array.from(e,e=>e%32)}function rt(e){let t=e.slice();for(let e=t.length-1;e>=0;e--){let n=t[e]??0;if(n<31)return t[e]=n+1,t;t[e]=0}return t}function it(e=Date.now()){let t;return e===$e?t=rt(et):(t=nt(),$e=e),et=t,tt(e)+t.map(e=>Xe[e]).join(``)}var at=/^[0-9A-HJKMNP-TV-Z]{26}$/;function ot(e){return at.test(e)}var st=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),ct=(e,t)=>e>>>t|e<<32-t,lt=class{#e=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]);#t=new Uint8Array(64);#n=0;#r=0;#i=new Uint32Array(64);#a=!1;update(e){if(this.#a)throw Error(`Sha256 : digest() déjà appelé`);this.#r+=e.length;let t=0;if(this.#n>0){for(;t<e.length&&this.#n<64;)this.#t[this.#n++]=e[t++];this.#n===64&&(this.#o(this.#t,0),this.#n=0)}for(;t+64<=e.length;t+=64)this.#o(e,t);for(;t<e.length;)this.#t[this.#n++]=e[t++];return this}digestHex(){if(this.#a)throw Error(`Sha256 : digest() déjà appelé`);this.#a=!0;let e=this.#r*8,t=this.#n,n=new Uint8Array(t<56?64:128);n.set(this.#t.subarray(0,t)),n[t]=128;let r=new DataView(n.buffer);r.setUint32(n.length-8,Math.floor(e/4294967296)),r.setUint32(n.length-4,e>>>0);for(let e=0;e<n.length;e+=64)this.#o(n,e);let i=``;for(let e=0;e<8;e++)i+=this.#e[e].toString(16).padStart(8,`0`);return i}#o(e,t){let n=this.#i;for(let r=0;r<16;r++){let i=t+r*4;n[r]=(e[i]<<24|e[i+1]<<16|e[i+2]<<8|e[i+3])>>>0}for(let e=16;e<64;e++){let t=ct(n[e-15],7)^ct(n[e-15],18)^n[e-15]>>>3,r=ct(n[e-2],17)^ct(n[e-2],19)^n[e-2]>>>10;n[e]=n[e-16]+t+n[e-7]+r>>>0}let[r,i,a,o,s,c,l,u]=this.#e;for(let e=0;e<64;e++){let t=ct(s,6)^ct(s,11)^ct(s,25),d=s&c^~s&l,f=u+t+d+st[e]+n[e]>>>0,p=(ct(r,2)^ct(r,13)^ct(r,22))+(r&i^r&a^i&a)>>>0;u=l,l=c,c=s,s=o+f>>>0,o=a,a=i,i=r,r=f+p>>>0}let d=this.#e;d[0]=d[0]+r>>>0,d[1]=d[1]+i>>>0,d[2]=d[2]+a>>>0,d[3]=d[3]+o>>>0,d[4]=d[4]+s>>>0,d[5]=d[5]+c>>>0,d[6]=d[6]+l>>>0,d[7]=d[7]+u>>>0}};function ut(e){return new lt().update(e).digestHex()}var dt=class extends Error{constructor(){super(`Ajout annulé`),this.name=`AnnulationIngestion`}};async function ft(e,t){if(typeof e.stream!=`function`){let t=await e.arrayBuffer(),n=await crypto.subtle.digest(`SHA-256`,t);return[...new Uint8Array(n)].map(e=>e.toString(16).padStart(2,`0`)).join(``)}let n=new lt,r=e.stream().getReader();for(;;){if(t?.())throw await r.cancel(),new dt;let{done:e,value:i}=await r.read();if(e)break;i&&n.update(i)}return n.digestHex()}function pt(e){return e.size===0?`Fichier vide — rien à enregistrer`:e.type&&!e.type.toLowerCase().startsWith(`video/`)?`Ce fichier n'est pas une vidéo — seules les vidéos s'ajoutent ici`:null}async function mt(e,t,n,r){let i=await ft(t,r),a=Ke(e,t.size,i);if(a)return{media:{...a},dejaPresent:!0};let o=it(),s=Ge(t.type,t.name);return{media:{id:o,type:`local`,ref:`videos/${o}`,sha256:i,taille:t.size,ajouteLe:new Date().toISOString(),origineMedia:n,...t.type?{mime:t.type}:{},...s?{extension:s}:{},...t.name?{nomOriginal:t.name}:{}},dejaPresent:!1}}function ht(e){return Math.max(16e6,Math.round(e*.1))}function gt(e,t){if(t===null)return{suffisant:!0,fiable:!1,requis:e,disponible:null};let n=Math.max(0,t.quota-t.usage);return{suffisant:e+ht(e)<=n,fiable:!0,requis:e,disponible:n}}function _t(e){return e>=1e9?`${(e/1e9).toFixed(1)} Go`:e>=1e6?`${(e/1e6).toFixed(1)} Mo`:`${Math.max(1,Math.round(e/1e3))} Ko`}function vt(e,t,n){let r=gt(t,n);return r.suffisant?!0:(yt(e,r),!1)}function yt(e,t){e.afficherToast(`Espace insuffisant : ${_t(t.requis)} à écrire, environ ${_t(t.disponible??0)} disponibles — libère de l'espace d'abord, rien n'a été écrit`,`alerte`)}function bt(e){return e.reduce((e,t)=>e+t.taille,0)}function xt(e){let t=e.preferences.limiteEspaceMo??5e3;return t<=0?null:t*1e6}async function St(e){let t=await e.stockage.estimerEspace();if(t===null)return null;let n=xt(e);return n===null?t:{usage:t.usage,quota:Math.min(t.quota,n)}}async function Ct(e,t){let n=t<=0?0:Math.max(200,Math.round(t));e.preferences={...e.preferences,limiteEspaceMo:n},e.stockage.sauvegarderPreferences(e.preferences),e.requestUpdate()}async function wt(e,t){let n=gt(t.size,await St(e));return n.suffisant?!1:(yt(e,n),!0)}var L=Uint8Array,Tt=Uint16Array,Et=Int32Array,Dt=new L([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Ot=new L([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),kt=new L([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),At=function(e,t){for(var n=new Tt(31),r=0;r<31;++r)n[r]=t+=1<<e[r-1];for(var i=new Et(n[30]),r=1;r<30;++r)for(var a=n[r];a<n[r+1];++a)i[a]=a-n[r]<<5|r;return{b:n,r:i}},jt=At(Dt,2),Mt=jt.b,Nt=jt.r;Mt[28]=258,Nt[258]=28;for(var Pt=At(Ot,0),Ft=Pt.b,It=Pt.r,Lt=new Tt(32768),R=0;R<32768;++R){var Rt=(R&43690)>>1|(R&21845)<<1;Rt=(Rt&52428)>>2|(Rt&13107)<<2,Rt=(Rt&61680)>>4|(Rt&3855)<<4,Lt[R]=((Rt&65280)>>8|(Rt&255)<<8)>>1}for(var zt=(function(e,t,n){for(var r=e.length,i=0,a=new Tt(t);i<r;++i)e[i]&&++a[e[i]-1];var o=new Tt(t);for(i=1;i<t;++i)o[i]=o[i-1]+a[i-1]<<1;var s;if(n){s=new Tt(1<<t);var c=15-t;for(i=0;i<r;++i)if(e[i])for(var l=i<<4|e[i],u=t-e[i],d=o[e[i]-1]++<<u,f=d|(1<<u)-1;d<=f;++d)s[Lt[d]>>c]=l}else for(s=new Tt(r),i=0;i<r;++i)e[i]&&(s[i]=Lt[o[e[i]-1]++]>>15-e[i]);return s}),Bt=new L(288),R=0;R<144;++R)Bt[R]=8;for(var R=144;R<256;++R)Bt[R]=9;for(var R=256;R<280;++R)Bt[R]=7;for(var R=280;R<288;++R)Bt[R]=8;for(var Vt=new L(32),R=0;R<32;++R)Vt[R]=5;var Ht=zt(Bt,9,0),Ut=zt(Bt,9,1),Wt=zt(Vt,5,0),Gt=zt(Vt,5,1),Kt=function(e){for(var t=e[0],n=1;n<e.length;++n)e[n]>t&&(t=e[n]);return t},qt=function(e,t,n){var r=t/8|0;return(e[r]|e[r+1]<<8)>>(t&7)&n},Jt=function(e,t){var n=t/8|0;return(e[n]|e[n+1]<<8|e[n+2]<<16)>>(t&7)},Yt=function(e){return(e+7)/8|0},Xt=function(e,t,n){return(t==null||t<0)&&(t=0),(n==null||n>e.length)&&(n=e.length),new L(e.subarray(t,n))},Zt=[`unexpected EOF`,`invalid block type`,`invalid length/literal`,`invalid distance`,`stream finished`,`no stream handler`,,`no callback`,`invalid UTF-8 data`,`extra field too long`,`date not in range 1980-2099`,`filename too long`,`stream finishing`,`invalid zip data`],z=function(e,t,n){var r=Error(t||Zt[e]);if(r.code=e,Error.captureStackTrace&&Error.captureStackTrace(r,z),!n)throw r;return r},Qt=function(e,t,n,r){var i=e.length,a=r?r.length:0;if(!i||t.f&&!t.l)return n||new L(0);var o=!n,s=o||t.i!=2,c=t.i;o&&(n=new L(i*3));var l=function(e){var t=n.length;if(e>t){var r=new L(Math.max(t*2,e));r.set(n),n=r}},u=t.f||0,d=t.p||0,f=t.b||0,p=t.l,m=t.d,h=t.m,g=t.n,_=i*8;do{if(!p){u=qt(e,d,1);var v=qt(e,d+1,3);if(d+=3,!v){var y=Yt(d)+4,b=e[y-4]|e[y-3]<<8,x=y+b;if(x>i){c&&z(0);break}s&&l(f+b),n.set(e.subarray(y,x),f),t.b=f+=b,t.p=d=x*8,t.f=u;continue}else if(v==1)p=Ut,m=Gt,h=9,g=5;else if(v==2){var ee=qt(e,d,31)+257,S=qt(e,d+10,15)+4,C=ee+qt(e,d+5,31)+1;d+=14;for(var w=new L(C),T=new L(19),E=0;E<S;++E)T[kt[E]]=qt(e,d+E*3,7);d+=S*3;for(var D=Kt(T),te=(1<<D)-1,ne=zt(T,D,1),E=0;E<C;){var O=ne[qt(e,d,te)];d+=O&15;var y=O>>4;if(y<16)w[E++]=y;else{var k=0,A=0;for(y==16?(A=3+qt(e,d,3),d+=2,k=w[E-1]):y==17?(A=3+qt(e,d,7),d+=3):y==18&&(A=11+qt(e,d,127),d+=7);A--;)w[E++]=k}}var re=w.subarray(0,ee),j=w.subarray(ee);h=Kt(re),g=Kt(j),p=zt(re,h,1),m=zt(j,g,1)}else z(1);if(d>_){c&&z(0);break}}s&&l(f+131072);for(var ie=(1<<h)-1,ae=(1<<g)-1,oe=d;;oe=d){var k=p[Jt(e,d)&ie],se=k>>4;if(d+=k&15,d>_){c&&z(0);break}if(k||z(2),se<256)n[f++]=se;else if(se==256){oe=d,p=null;break}else{var M=se-254;if(se>264){var E=se-257,N=Dt[E];M=qt(e,d,(1<<N)-1)+Mt[E],d+=N}var ce=m[Jt(e,d)&ae],le=ce>>4;ce||z(3),d+=ce&15;var j=Ft[le];if(le>3){var N=Ot[le];j+=Jt(e,d)&(1<<N)-1,d+=N}if(d>_){c&&z(0);break}s&&l(f+131072);var ue=f+M;if(f<j){var P=a-j,de=Math.min(j,ue);for(P+f<0&&z(3);f<de;++f)n[f]=r[P+f]}for(;f<ue;++f)n[f]=n[f-j]}}t.l=p,t.p=oe,t.b=f,t.f=u,p&&(u=1,t.m=h,t.d=m,t.n=g)}while(!u);return f!=n.length&&o?Xt(n,0,f):n.subarray(0,f)},$t=function(e,t,n){n<<=t&7;var r=t/8|0;e[r]|=n,e[r+1]|=n>>8},en=function(e,t,n){n<<=t&7;var r=t/8|0;e[r]|=n,e[r+1]|=n>>8,e[r+2]|=n>>16},tn=function(e,t){for(var n=[],r=0;r<e.length;++r)e[r]&&n.push({s:r,f:e[r]});var i=n.length,a=n.slice();if(!i)return{t:ln,l:0};if(i==1){var o=new L(n[0].s+1);return o[n[0].s]=1,{t:o,l:1}}n.sort(function(e,t){return e.f-t.f}),n.push({s:-1,f:25001});var s=n[0],c=n[1],l=0,u=1,d=2;for(n[0]={s:-1,f:s.f+c.f,l:s,r:c};u!=i-1;)s=n[n[l].f<n[d].f?l++:d++],c=n[l!=u&&n[l].f<n[d].f?l++:d++],n[u++]={s:-1,f:s.f+c.f,l:s,r:c};for(var f=a[0].s,r=1;r<i;++r)a[r].s>f&&(f=a[r].s);var p=new Tt(f+1),m=nn(n[u-1],p,0);if(m>t){var r=0,h=0,g=m-t,_=1<<g;for(a.sort(function(e,t){return p[t.s]-p[e.s]||e.f-t.f});r<i;++r){var v=a[r].s;if(p[v]>t)h+=_-(1<<m-p[v]),p[v]=t;else break}for(h>>=g;h>0;){var y=a[r].s;p[y]<t?h-=1<<t-p[y]++-1:++r}for(;r>=0&&h;--r){var b=a[r].s;p[b]==t&&(--p[b],++h)}m=t}return{t:new L(p),l:m}},nn=function(e,t,n){return e.s==-1?Math.max(nn(e.l,t,n+1),nn(e.r,t,n+1)):t[e.s]=n},rn=function(e){for(var t=e.length;t&&!e[--t];);for(var n=new Tt(++t),r=0,i=e[0],a=1,o=function(e){n[r++]=e},s=1;s<=t;++s)if(e[s]==i&&s!=t)++a;else{if(!i&&a>2){for(;a>138;a-=138)o(32754);a>2&&(o(a>10?a-11<<5|28690:a-3<<5|12305),a=0)}else if(a>3){for(o(i),--a;a>6;a-=6)o(8304);a>2&&(o(a-3<<5|8208),a=0)}for(;a--;)o(i);a=1,i=e[s]}return{c:n.subarray(0,r),n:t}},an=function(e,t){for(var n=0,r=0;r<t.length;++r)n+=e[r]*t[r];return n},on=function(e,t,n){var r=n.length,i=Yt(t+2);e[i]=r&255,e[i+1]=r>>8,e[i+2]=e[i]^255,e[i+3]=e[i+1]^255;for(var a=0;a<r;++a)e[i+a+4]=n[a];return(i+4+r)*8},sn=function(e,t,n,r,i,a,o,s,c,l,u){$t(t,u++,n),++i[256];for(var d=tn(i,15),f=d.t,p=d.l,m=tn(a,15),h=m.t,g=m.l,_=rn(f),v=_.c,y=_.n,b=rn(h),x=b.c,ee=b.n,S=new Tt(19),C=0;C<v.length;++C)++S[v[C]&31];for(var C=0;C<x.length;++C)++S[x[C]&31];for(var w=tn(S,7),T=w.t,E=w.l,D=19;D>4&&!T[kt[D-1]];--D);var te=l+5<<3,ne=an(i,Bt)+an(a,Vt)+o,O=an(i,f)+an(a,h)+o+14+3*D+an(S,T)+2*S[16]+3*S[17]+7*S[18];if(c>=0&&te<=ne&&te<=O)return on(t,u,e.subarray(c,c+l));var k,A,re,j;if($t(t,u,1+(O<ne)),u+=2,O<ne){k=zt(f,p,0),A=f,re=zt(h,g,0),j=h;var ie=zt(T,E,0);$t(t,u,y-257),$t(t,u+5,ee-1),$t(t,u+10,D-4),u+=14;for(var C=0;C<D;++C)$t(t,u+3*C,T[kt[C]]);u+=3*D;for(var ae=[v,x],oe=0;oe<2;++oe)for(var se=ae[oe],C=0;C<se.length;++C){var M=se[C]&31;$t(t,u,ie[M]),u+=T[M],M>15&&($t(t,u,se[C]>>5&127),u+=se[C]>>12)}}else k=Ht,A=Bt,re=Wt,j=Vt;for(var C=0;C<s;++C){var N=r[C];if(N>255){var M=N>>18&31;en(t,u,k[M+257]),u+=A[M+257],M>7&&($t(t,u,N>>23&31),u+=Dt[M]);var ce=N&31;en(t,u,re[ce]),u+=j[ce],ce>3&&(en(t,u,N>>5&8191),u+=Ot[ce])}else en(t,u,k[N]),u+=A[N]}return en(t,u,k[256]),u+A[256]},cn=new Et([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),ln=new L(0),un=function(e,t,n,r,i,a){var o=a.z||e.length,s=new L(r+o+5*(1+Math.ceil(o/7e3))+i),c=s.subarray(r,s.length-i),l=a.l,u=(a.r||0)&7;if(t){u&&(c[0]=a.r>>3);for(var d=cn[t-1],f=d>>13,p=d&8191,m=(1<<n)-1,h=a.p||new Tt(32768),g=a.h||new Tt(m+1),_=Math.ceil(n/3),v=2*_,y=function(t){return(e[t]^e[t+1]<<_^e[t+2]<<v)&m},b=new Et(25e3),x=new Tt(288),ee=new Tt(32),S=0,C=0,w=a.i||0,T=0,E=a.w||0,D=0;w+2<o;++w){var te=y(w),ne=w&32767,O=g[te];if(h[ne]=O,g[te]=ne,E<=w){var k=o-w;if((S>7e3||T>24576)&&(k>423||!l)){u=sn(e,c,0,b,x,ee,C,T,D,w-D,u),T=S=C=0,D=w;for(var A=0;A<286;++A)x[A]=0;for(var A=0;A<30;++A)ee[A]=0}var re=2,j=0,ie=p,ae=ne-O&32767;if(k>2&&te==y(w-ae))for(var oe=Math.min(f,k)-1,se=Math.min(32767,w),M=Math.min(258,k);ae<=se&&--ie&&ne!=O;){if(e[w+re]==e[w+re-ae]){for(var N=0;N<M&&e[w+N]==e[w+N-ae];++N);if(N>re){if(re=N,j=ae,N>oe)break;for(var ce=Math.min(ae,N-2),le=0,A=0;A<ce;++A){var ue=w-ae+A&32767,P=ue-h[ue]&32767;P>le&&(le=P,O=ue)}}}ne=O,O=h[ne],ae+=ne-O&32767}if(j){b[T++]=268435456|Nt[re]<<18|It[j];var de=Nt[re]&31,fe=It[j]&31;C+=Dt[de]+Ot[fe],++x[257+de],++ee[fe],E=w+re,++S}else b[T++]=e[w],++x[e[w]]}}for(w=Math.max(w,E);w<o;++w)b[T++]=e[w],++x[e[w]];u=sn(e,c,l,b,x,ee,C,T,D,w-D,u),l||(a.r=u&7|c[u/8|0]<<3,u-=7,a.h=g,a.p=h,a.i=w,a.w=E)}else{for(var w=a.w||0;w<o+l;w+=65535){var F=w+65535;F>=o&&(c[u/8|0]=l,F=o),u=on(c,u+1,e.subarray(w,F))}a.i=o}return Xt(s,0,r+Yt(u)+i)},dn=(function(){for(var e=new Int32Array(256),t=0;t<256;++t){for(var n=t,r=9;--r;)n=(n&1&&-306674912)^n>>>1;e[t]=n}return e})(),fn=function(){var e=-1;return{p:function(t){for(var n=e,r=0;r<t.length;++r)n=dn[n&255^t[r]]^n>>>8;e=n},d:function(){return~e}}},pn=function(e,t,n,r,i){if(!i&&(i={l:1},t.dictionary)){var a=t.dictionary.subarray(-32768),o=new L(a.length+e.length);o.set(a),o.set(e,a.length),e=o,i.w=a.length}return un(e,t.level==null?6:t.level,t.mem==null?i.l?Math.ceil(Math.max(8,Math.min(13,Math.log(e.length)))*1.5):20:12+t.mem,n,r,i)},mn=function(e,t){var n={};for(var r in e)n[r]=e[r];for(var r in t)n[r]=t[r];return n},hn=function(e,t){return e[t]|e[t+1]<<8},gn=function(e,t){return(e[t]|e[t+1]<<8|e[t+2]<<16|e[t+3]<<24)>>>0},_n=function(e,t){return gn(e,t)+gn(e,t+4)*4294967296},B=function(e,t,n){for(;n;++t)e[t]=n,n>>>=8},vn=function(){function e(e,t){if(typeof e==`function`&&(t=e,e={}),this.ondata=t,this.o=e||{},this.s={l:0,i:32768,w:32768,z:32768},this.b=new L(98304),this.o.dictionary){var n=this.o.dictionary.subarray(-32768);this.b.set(n,32768-n.length),this.s.i=32768-n.length}}return e.prototype.p=function(e,t){this.ondata(pn(e,this.o,0,0,this.s),t)},e.prototype.push=function(e,t){this.ondata||z(5),this.s.l&&z(4);var n=e.length+this.s.z;if(n>this.b.length){if(n>2*this.b.length-32768){var r=new L(n&-32768);r.set(this.b.subarray(0,this.s.z)),this.b=r}var i=this.b.length-this.s.z;this.b.set(e.subarray(0,i),this.s.z),this.s.z=this.b.length,this.p(this.b,!1),this.b.set(this.b.subarray(-32768)),this.b.set(e.subarray(i),32768),this.s.z=e.length-i+32768,this.s.i=32766,this.s.w=32768}else this.b.set(e,this.s.z),this.s.z+=e.length;this.s.l=t&1,(this.s.z>this.s.w+8191||t)&&(this.p(this.b,t||!1),this.s.w=this.s.i,this.s.i-=2),t&&(this.s=this.o={},this.b=ln)},e.prototype.flush=function(e){if(this.ondata||z(5),this.s.l&&z(4),this.p(this.b,!1),this.s.w=this.s.i,this.s.i-=2,e){var t=new L(6);t[0]=this.s.r>>3;var n=on(t,this.s.r,ln);this.s.r=0,this.ondata(t.subarray(0,n>>3),!1)}},e}(),yn=function(){function e(e,t){typeof e==`function`&&(t=e,e={}),this.ondata=t;var n=e&&e.dictionary&&e.dictionary.subarray(-32768);this.s={i:0,b:n?n.length:0},this.o=new L(32768),this.p=new L(0),n&&this.o.set(n)}return e.prototype.e=function(e){if(this.ondata||z(5),this.d&&z(4),!this.p.length)this.p=e;else if(e.length){var t=new L(this.p.length+e.length);t.set(this.p),t.set(e,this.p.length),this.p=t}},e.prototype.c=function(e){this.s.i=+(this.d=e||!1);var t=this.s.b,n=Qt(this.p,this.s,this.o);this.ondata(Xt(n,t,this.s.b),this.d),this.o=Xt(n,this.s.b-32768),this.s.b=this.o.length,this.p=Xt(this.p,this.s.p/8|0),this.s.p&=7},e.prototype.push=function(e,t){this.e(e),this.c(t)},e}(),bn=typeof TextEncoder<`u`&&new TextEncoder,xn=typeof TextDecoder<`u`&&new TextDecoder;try{xn.decode(ln,{stream:!0})}catch{}var Sn=function(e){for(var t=``,n=0;;){var r=e[n++],i=(r>127)+(r>223)+(r>239);if(n+i>e.length)return{s:t,r:Xt(e,n-1)};i?i==3?(r=((r&15)<<18|(e[n++]&63)<<12|(e[n++]&63)<<6|e[n++]&63)-65536,t+=String.fromCharCode(55296|r>>10,56320|r&1023)):i&1?t+=String.fromCharCode((r&31)<<6|e[n++]&63):t+=String.fromCharCode((r&15)<<12|(e[n++]&63)<<6|e[n++]&63):t+=String.fromCharCode(r)}};function Cn(e,t){if(t){for(var n=new L(e.length),r=0;r<e.length;++r)n[r]=e.charCodeAt(r);return n}if(bn)return bn.encode(e);for(var i=e.length,a=new L(e.length+(e.length>>1)),o=0,s=function(e){a[o++]=e},r=0;r<i;++r){if(o+5>a.length){var c=new L(o+8+(i-r<<1));c.set(a),a=c}var l=e.charCodeAt(r);l<128||t?s(l):l<2048?(s(192|l>>6),s(128|l&63)):l>55295&&l<57344?(l=65536+(l&1047552)|e.charCodeAt(++r)&1023,s(240|l>>18),s(128|l>>12&63),s(128|l>>6&63),s(128|l&63)):(s(224|l>>12),s(128|l>>6&63),s(128|l&63))}return Xt(a,0,o)}function wn(e,t){if(t){for(var n=``,r=0;r<e.length;r+=16384)n+=String.fromCharCode.apply(null,e.subarray(r,r+16384));return n}else if(xn)return xn.decode(e);else{var i=Sn(e),a=i.s,n=i.r;return n.length&&z(8),a}}var Tn=function(e){return e==1?3:e<6?2:+(e==9)},En=function(e,t,n,r,i,a,o){var s=i==4294967295,c=a==4294967295,l=o==4294967295,u=t+n,d=s+c+l;if(r&&d){for(;t+4<u;t+=4+hn(e,t+2))if(hn(e,t)==1)return[s?_n(e,t+4+8*c):i,c?_n(e,t+4):a,l?_n(e,t+4+8*(c+s)):o,1];r<2&&z(13)}return[i,a,o,0]},Dn=function(e){var t=0;if(e)for(var n in e){var r=e[n].length;r>65535&&z(9),t+=r+4}return t},On=function(e,t,n,r,i,a,o,s){var c=r.length,l=n.extra,u=s&&s.length,d=Dn(l);B(e,t,o==null?67324752:33639248),t+=4,o!=null&&(e[t++]=20,e[t++]=n.os),e[t]=20,t+=2,e[t++]=n.flag<<1|(a<0&&8),e[t++]=i&&8,e[t++]=n.compression&255,e[t++]=n.compression>>8;var f=new Date(n.mtime==null?Date.now():n.mtime),p=f.getFullYear()-1980;if((p<0||p>119)&&z(10),B(e,t,p<<25|f.getMonth()+1<<21|f.getDate()<<16|f.getHours()<<11|f.getMinutes()<<5|f.getSeconds()>>1),t+=4,a!=-1&&(B(e,t,n.crc),B(e,t+4,a<0?-a-2:a),B(e,t+8,n.size)),B(e,t+12,c),B(e,t+14,d),t+=16,o!=null&&(B(e,t,u),B(e,t+6,n.attrs),B(e,t+10,o),t+=14),e.set(r,t),t+=c,d)for(var m in l){var h=l[m],g=h.length;B(e,t,+m),B(e,t+2,g),e.set(h,t+4),t+=4+g}return u&&(e.set(s,t),t+=u),t},kn=function(e,t,n,r,i){B(e,t,101010256),B(e,t+8,n),B(e,t+10,n),B(e,t+12,r),B(e,t+16,i)},An=function(){function e(e){this.filename=e,this.c=fn(),this.size=0,this.compression=0}return e.prototype.process=function(e,t){this.ondata(null,e,t)},e.prototype.push=function(e,t){this.ondata||z(5),this.c.p(e),this.size+=e.length,t&&(this.crc=this.c.d()),this.process(e,t||!1)},e}(),jn=function(){function e(e,t){var n=this;t||={},An.call(this,e),this.d=new vn(t,function(e,t){n.ondata(null,e,t)}),this.compression=8,this.flag=Tn(t.level)}return e.prototype.process=function(e,t){try{this.d.push(e,t)}catch(e){this.ondata(e,null,t)}},e.prototype.push=function(e,t){An.prototype.push.call(this,e,t)},e}(),Mn=function(){function e(e){this.ondata=e,this.u=[],this.d=1}return e.prototype.add=function(e){var t=this;if(this.ondata||z(5),this.d&2)this.ondata(z(4+(this.d&1)*8,0,1),null,!1);else{var n=Cn(e.filename),r=n.length,i=e.comment,a=i&&Cn(i),o=r!=e.filename.length||a&&i.length!=a.length,s=r+Dn(e.extra)+30;r>65535&&this.ondata(z(11,0,1),null,!1);var c=new L(s);On(c,0,e,n,o,-1);var l=[c],u=function(){for(var e=0,n=l;e<n.length;e++){var r=n[e];t.ondata(null,r,!1)}l=[]},d=this.d;this.d=0;var f=this.u.length,p=mn(e,{f:n,u:o,o:a,t:function(){e.terminate&&e.terminate()},r:function(){if(u(),d){var e=t.u[f+1];e?e.r():t.d=1}d=1}}),m=0;e.ondata=function(n,r,i){if(n)t.ondata(n,r,i),t.terminate();else if(m+=r.length,l.push(r),i){var a=new L(16);B(a,0,134695760),B(a,4,e.crc),B(a,8,m),B(a,12,e.size),l.push(a),p.c=m,p.b=s+m+16,p.crc=e.crc,p.size=e.size,d&&p.r(),d=1}else d&&u()},this.u.push(p)}},e.prototype.end=function(){var e=this;if(this.d&2){this.ondata(z(4+(this.d&1)*8,0,1),null,!0);return}this.d?this.e():this.u.push({r:function(){e.d&1&&(e.u.splice(-1,1),e.e())},t:function(){}}),this.d=3},e.prototype.e=function(){for(var e=0,t=0,n=0,r=0,i=this.u;r<i.length;r++){var a=i[r];n+=46+a.f.length+Dn(a.extra)+(a.o?a.o.length:0)}for(var o=new L(n+22),s=0,c=this.u;s<c.length;s++){var a=c[s];On(o,e,a,a.f,a.u,-a.c-2,t,a.o),e+=46+a.f.length+Dn(a.extra)+(a.o?a.o.length:0),t+=a.b}kn(o,e,this.u.length,n,t),this.ondata(null,o,!0),this.d=2},e.prototype.terminate=function(){for(var e=0,t=this.u;e<t.length;e++)t[e].t();this.d=2},e}(),Nn=function(){function e(){}return e.prototype.push=function(e,t){this.ondata(null,e,t)},e.compression=0,e}(),Pn=function(){function e(){var e=this;this.i=new yn(function(t,n){e.ondata(null,t,n)})}return e.prototype.push=function(e,t){try{this.i.push(e,t)}catch(e){this.ondata(e,null,t)}},e.compression=8,e}(),Fn=function(){function e(e){this.onfile=e,this.k=[],this.o={0:Nn},this.p=ln}return e.prototype.push=function(e,t){var n=this;if(this.onfile||z(5),this.p||z(4),this.c>0){var r=Math.min(this.c,e.length),i=e.subarray(0,r);if(this.c-=r,this.d?this.d.push(i,!this.c):this.k[0].push(i),e=e.subarray(r),e.length)return this.push(e,t)}else{var a=0,o=0,s=void 0,c=void 0;this.p.length?e.length?(c=new L(this.p.length+e.length),c.set(this.p),c.set(e,this.p.length)):c=this.p:c=e;for(var l=c.length,u=this.c,d=u&&this.d,f=function(){var e=gn(c,o);if(e==67324752){a=1,s=o,p.d=null,p.c=0;var t=hn(c,o+6),r=hn(c,o+8),i=t&2048,d=t&8,f=hn(c,o+26),m=hn(c,o+28);if(l>o+30+f+m){var h=[];p.k.unshift(h),a=2;var g=gn(c,o+18),_=gn(c,o+22),v=wn(c.subarray(o+30,o+=30+f),!i),y=En(c,o,m,2,g,_,0),b=y[0],x=y[1],ee=y[3];d&&(b=-1-ee),o+=m,p.c=b;var S,C={name:v,compression:r,start:function(){if(C.ondata||z(5),!b)C.ondata(null,ln,!0);else{var e=n.o[r];e||C.ondata(z(14,`unknown compression type `+r,1),null,!1),S=b<0?new e(v):new e(v,b,x),S.ondata=function(e,t,n){C.ondata(e,t,n)};for(var t=0,i=h;t<i.length;t++){var a=i[t];S.push(a,!1)}n.k[0]==h&&n.c?n.d=S:S.push(ln,!0)}},terminate:function(){S&&S.terminate&&S.terminate()}};b>=0&&(C.size=b,C.originalSize=x),p.onfile(C)}return`break`}else if(u){if(e==134695760)return s=o+=12+(u==-2&&8),a=3,p.c=0,`break`;if(e==33639248)return s=o-=4,a=3,p.c=0,`break`}},p=this;o<l-4&&f()!==`break`;++o);if(this.p=ln,u<0){var m=a?c.subarray(0,s-12-(u==-2&&8)-(gn(c,s-16)==134695760&&4)):c.subarray(0,o);d?d.push(m,!!a):this.k[+(a==2)].push(m)}if(a&2)return this.push(c.subarray(o),t);this.p=c.subarray(o)}t&&(this.c&&z(13),this.p=null)},e.prototype.register=function(e){this.o[e.compression]=e},e}(),V=class extends Error{constructor(e){super(e),this.name=`ErreurMovpack`}};function In(e){return e.length>3&&e[0]===80&&e[1]===75}function Ln(e){return(e.startsWith(`medias/`)||e.startsWith(`videos/`))&&e.length>7}function Rn(e){return/^images\/[0-9a-f]{64}$/.test(e)}function zn(e,t){let n=e.slice(7),r=ut(t);if(r!==n)throw new V(`Image falsifiée : ${e} contient des octets d'empreinte ${r.slice(0,12)}… — le nom d'une image EST son contenu, il ne peut pas désigner autre chose`)}function Bn(e,t){let n=(e.images??[]).filter(e=>!t.has(e.id));if(n.length)throw new V(`Conteneur incomplet : ${n.length} image(s) déclarée(s) dont les octets n'ont pas été fournis (première : ${n[0].id.slice(0,12)}…)`)}function Vn(e){let t=e.slice(e.indexOf(`/`)+1),n=t.indexOf(`.`);return n===-1?t:t.slice(0,n)}var Hn=[`complet`,`discipline`,`composition`];function Un(e){return typeof e==`string`}function Wn(e){let t=e=>{throw new V(`Manifeste invalide : ${e}`)};(typeof e!=`object`||!e||Array.isArray(e))&&t(`un objet est attendu`);let n=e;if(n.format!==`movpack`)throw new V(`Manifeste inconnu : pas un .movpack`);(typeof n.version!=`number`||!Number.isInteger(n.version)||n.version<1)&&t(`version de conteneur « ${String(n.version)} » invalide`),(!Un(n.id)||n.id.trim()===``)&&t(`identité du pack manquante — c'est la clé qui distingue une mise à jour d'une installation neuve`),(!Un(n.nom)||n.nom.trim()===``)&&t(`nom manquant`),(!Un(n.portee)||!Hn.includes(n.portee))&&t(`portée « ${String(n.portee)} » inconnue (${Hn.join(`, `)}) — c'est elle qui décide entre importer un pack et REMPLACER la bibliothèque`),(!Un(n.creeLe)||Number.isNaN(Date.parse(n.creeLe)))&&t(`date de création « ${String(n.creeLe)} » illisible`),(typeof n.versionSchema!=`number`||!Number.isInteger(n.versionSchema))&&t(`version de schéma « ${String(n.versionSchema)} » invalide`),Un(n.empreinte)||t(`empreinte manquante`),(!Array.isArray(n.videos)||n.videos.some(e=>!Un(e)))&&t(`« videos » : une liste d'identifiants est attendue`);for(let[e,r]of[[`auteur`,n.auteur],[`conditions`,n.conditions],[`algorithme`,n.algorithme]])r!==void 0&&!Un(r)&&t(`« ${e} » : texte attendu`);if(n.versionEditoriale!==void 0&&(typeof n.versionEditoriale!=`number`||!Number.isInteger(n.versionEditoriale)||n.versionEditoriale<1)&&t(`version éditoriale « ${String(n.versionEditoriale)} » invalide`),n.inclusions!==void 0){let e=n.inclusions;(typeof e!=`object`||!e||typeof e.medias!=`boolean`||typeof e.contenuPersonnel!=`boolean`)&&t(`« inclusions » : { medias: booléen, contenuPersonnel: booléen } attendu — c'est ce que le conteneur DIT emporter`)}return n.fichiers!==void 0&&!Array.isArray(n.fichiers)&&t(`« fichiers » : une liste est attendue`),n}function Gn(e){let t=Array.isArray(e.fichiers)&&e.fichiers.length>0;if(e.version>=4){if(!t)throw new V(`Conteneur v4 incomplet : l'inventaire d'intégrité « fichiers » est obligatoire à partir de la version 4 — un conteneur ne choisit pas la rigueur qu'on lui applique`);if(e.algorithme!==void 0&&e.algorithme!==`SHA-256`)throw new V(`Algorithme d'intégrité « ${e.algorithme} » non supporté (SHA-256 attendu)`);for(let[t,n]of e.fichiers.entries()){let e=`Inventaire, entrée ${t+1}`;if(!n||typeof n!=`object`)throw new V(`${e} : objet attendu`);if(typeof n.chemin!=`string`||n.chemin.trim()===``)throw new V(`${e} : chemin manquant`);if(!Number.isInteger(n.taille)||n.taille<0)throw new V(`${e} (${n.chemin}) : taille invalide`);if(typeof n.sha256!=`string`||!/^[0-9a-f]{64}$/.test(n.sha256))throw new V(`${e} (${n.chemin}) : empreinte SHA-256 mal formée`)}return e.fichiers}if(t)return e.fichiers;if(typeof e.empreinte!=`string`||!/^[0-9a-f]{64}$/.test(e.empreinte))throw new V(`Manifeste incomplet : empreinte de bibliotheque.json manquante ou mal formée`);return null}var Kn={octetsPetitFichier:64e6,entreesMax:4096,octetsTotal:8e9,octetsImage:4e6,octetsImagesTotal:32e6},qn=new Set([`webm`,`mp4`,`mov`,`mkv`,`3gp`,`ogv`,`avi`]);function Jn(e){return e.length>=2&&e[0]===77&&e[1]===90?`exécutable Windows (MZ)`:e.length>=4&&e[0]===127&&e[1]===69&&e[2]===76&&e[3]===70?`exécutable ELF`:e.length>=2&&e[0]===35&&e[1]===33?`script exécutable (#!)`:null}function Yn(e){return!e||e.length>512||/[\u0000-\u001f\\]/.test(e)||e.startsWith(`/`)||/^[a-z]:/i.test(e)?!1:e.split(`/`).every(e=>e.length>0&&e!==`.`&&e!==`..`)}var Xn={1:e=>({...e,versionSchema:2,typesRelation:Ne.map(e=>({...e})),compositions:[]}),2:e=>({...e,versionSchema:3,favoris:[]}),3:e=>({...e,versionSchema:4,typesRelation:er(e.typesRelation)}),4:e=>({...e,versionSchema:5,...$n(e)}),5:(e,t)=>({...e,...Qn(e,t),versionSchema:6})},Zn=/^data:([a-z]+\/[a-z0-9.+-]+);base64,/i;function Qn(e,t){let n=new Map,r=new Map,i=e=>{let i=r.get(e);if(i!==void 0)return i;let a=Zn.exec(e),o=null;if(a)try{let r=atob(e.slice(a[0].length)),i=new Uint8Array(r.length);for(let e=0;e<r.length;e++)i[e]=r.charCodeAt(e);if(o=ut(i),!n.has(o)){let e={id:o,mime:a[1].toLowerCase(),taille:i.length};n.set(o,e),t.push({...e,octets:i})}}catch{o=null}return r.set(e,o),o},a=e=>{if(Array.isArray(e))return e.map(a);if(!e||typeof e!=`object`)return e;let t=e;if(t.type===`image`&&typeof t.dataUrl==`string`){let e=i(t.dataUrl);return e===null?void 0:{type:`fichier`,imageId:e}}let n={};for(let[e,r]of Object.entries(t)){let t=a(r);t!==void 0&&(n[e]=t)}return n},o=a(e),s=Array.isArray(e.images)?e.images:[],c=new Map(s.filter(e=>e&&typeof e.id==`string`).map(e=>[e.id,e]));for(let[e,t]of n)c.has(e)||c.set(e,t);return{...o,images:[...c.values()]}}function $n(e){let t=e.disciplines,n=e.techniques;if(!Array.isArray(t)||!Array.isArray(n))return{};let r=e=>typeof e==`object`&&!!e&&!Array.isArray(e),i=e=>{let t=e.couverture;return r(t)&&t.type===`image`&&typeof t.dataUrl==`string`?t.dataUrl:null},a=new Map;for(let e of n){if(!r(e))continue;let t=e.familleId,n=i(e);if(typeof t!=`string`||!n)continue;a.has(t)||a.set(t,new Map);let o=a.get(t);o.set(n,(o.get(n)??0)+1)}let o=new Map;for(let[e,t]of a){let n=null,r=1;for(let[e,i]of t)i>r&&(r=i,n=e);n&&o.set(e,n)}return o.size===0?{}:{disciplines:t.map(e=>!r(e)||!Array.isArray(e.familles)?e:{...e,familles:e.familles.map(e=>{if(!r(e)||typeof e.id!=`string`)return e;let t=o.get(e.id);return!t||e.couverture!==void 0?e:{...e,couverture:{type:`image`,dataUrl:t}}})}),techniques:n.map(e=>{if(!r(e))return e;let t=e.familleId,n=i(e);if(typeof t!=`string`||!n||o.get(t)!==n)return e;let{couverture:a,...s}=e;return s})}}function er(e){if(!Array.isArray(e))return e;let t=new Map(Ne.map(e=>[e.id,e]));return e.map(e=>{if(!e||typeof e!=`object`||Array.isArray(e))return e;let n=e,r=t.get(n.id);return!r||n.role!==void 0?e:r.ordre===void 0?{...n,role:r.role}:{...n,role:r.role,ordre:r.ordre}})}var tr=class extends Error{constructor(e){super(e),this.name=`ErreurMigration`}};function nr(e,t=6){let n=[];return{bibliotheque:ir(e,t,n),imagesDetachees:n}}function rr(e,t=6){return ir(e,t,[])}function ir(e,t,n){if(typeof e!=`object`||!e)throw new tr(`Données illisibles : la bibliothèque n'est pas un objet`);let r=e,i=r.versionSchema;if(typeof i!=`number`||!Number.isInteger(i)||i<1)throw new tr(`Version de schéma absente ou invalide : ${String(i)}`);let a=i;if(a>t)throw new tr(`Bibliothèque en version ${a}, plus récente que l'application (${t}) — mettre à jour l'application plutôt que risquer une perte`);for(;a<t;){let e=Xn[a];if(!e)throw new tr(`Aucune migration enregistrée depuis la version ${a}`);r=e(r,n);let t=r.versionSchema;if(typeof t!=`number`||t!==a+1)throw new tr(`La migration ${a} → ${a+1} n'a pas incrémenté la version`);a=t}return r}var ar=class extends Error{constructor(e){super(e),this.name=`ErreurValidation`}};function H(e,t){if(!e)throw new ar(t)}function or(e){return typeof e==`object`&&!!e&&!Array.isArray(e)}function sr(e,t){H(Array.isArray(e),`${t} : un tableau est attendu`)}function cr(e,t){H(typeof e==`string`&&e.trim()!==``,`${t} : texte non vide attendu`)}function lr(e,t){e!==void 0&&H(typeof e==`string`,`${t} : texte attendu`)}function ur(e,t,n=0){e!==void 0&&H(typeof e==`number`&&Number.isInteger(e)&&e>=n,`${t} : entier ≥ ${n} attendu, reçu « ${String(e)} »`)}function dr(e,t,n){e!==void 0&&H(typeof e==`string`&&t.includes(e),`${n} : valeur « ${String(e)} » inconnue (${t.join(`, `)})`)}var fr=[`info`,`warning`,`danger`];function pr(e,t){if(e!==void 0){sr(e,`${t}, alertes`);for(let[n,r]of e.entries()){let e=`${t}, alerte ${n+1}`;if(H(or(r),`${e} : objet attendu`),cr(r.type,`${e}, type`),cr(r.libelle,`${e}, libellé`),H(typeof r.niveau==`string`&&fr.includes(r.niveau),`${e} : niveau « ${String(r.niveau)} » inconnu (${fr.join(`, `)})`),lr(r.icone,`${e}, icône`),lr(r.detail,`${e}, détail`),r.bloquante!==void 0&&H(typeof r.bloquante==`boolean`,`${e} : « bloquante » booléen attendu`),r.reference!==void 0){H(or(r.reference),`${e}, référence : objet attendu`);for(let t of[`organisation`,`article`,`url`,`verifieLe`])lr(r.reference[t],`${e}, référence ${t}`)}}}}function mr(e){return typeof e==`string`&&/^[0-9a-f]{64}$/.test(e)}function hr(e,t){e!==void 0&&(H(or(e),`${t}, couverture : objet attendu`),e.type===`fichier`?H(mr(e.imageId),`${t}, couverture : image « ${String(e.imageId)} » mal formée (empreinte SHA-256 attendue)`):e.type===`media`?H(ot(e.mediaId),`${t}, couverture : média « ${String(e.mediaId)} » mal formé`):H(!1,`${t}, couverture : type « ${String(e.type)} » inconnu (fichier, media)`))}function gr(e,t){if(e===void 0)return;sr(e,t);let n=new Set;for(let r of e){H(or(r),`${t} : objet attendu`);let e=r;H(mr(e.id),`${t} : identité « ${String(e.id)} » mal formée (empreinte SHA-256 attendue)`),H(!n.has(e.id),`${t} : l'image « ${String(e.id)} » est déclarée deux fois`),n.add(e.id),H(typeof e.mime==`string`&&e.mime.startsWith(`image/`),`${t} « ${String(e.id)} » : MIME d'image attendu, reçu « ${String(e.mime)} »`),H(typeof e.taille==`number`&&Number.isInteger(e.taille)&&e.taille>0,`${t} « ${String(e.id)} » : taille en octets attendue`)}}function _r(e,t){e!==void 0&&(H(or(e),`${t}, origine : objet attendu ({ pack, element })`),cr(e.pack,`${t}, origine.pack`),cr(e.element,`${t}, origine.element`))}function vr(e,t){let n=new Set;for(let r of e)H(ot(r),`${t} : id « ${r} » n'est pas un ULID valide`),H(!n.has(r),`${t} : id « ${r} » en double`),n.add(r)}function yr(e){return e===``||e.startsWith(`/`)||e.includes(`\\`)||/^[a-zA-Z]:/.test(e)?!1:!e.split(`/`).some(e=>e===`..`||e===``)}function br(e){let t=new Set;for(let n of e)H(n.id.trim()!==``,`Type de relation : id vide`),H(!t.has(n.id),`Type de relation « ${n.id} » en double`),t.add(n.id),H(n.libelle.trim()!==``,`Type de relation « ${n.id} » : libellé vide`),H(n.symetrique===!0||(n.libelleInverse??``).trim()!==``,`Type de relation « ${n.id} » : un type orienté déclare son libellé inverse (ou sa symétrie)`)}function xr(e,t){e!==void 0&&H(/^#[0-9A-Fa-f]{6}$/.test(e),`${t} : couleur « ${e} » — attendu #RRGGBB`)}function Sr(e){cr(e.nom,`Discipline ${e.id}, nom`),sr(e.familles,`Discipline « ${e.nom} », familles`);for(let t of e.familles)hr(t.couverture,`Discipline « ${e.nom} », famille « ${t.nom} »`);sr(e.niveaux,`Discipline « ${e.nom} », niveaux`);for(let t of e.niveaux)xr(t.couleur,`Discipline « ${e.nom} », niveau « ${t.nom} »`),xr(t.couleur2,`Discipline « ${e.nom} », niveau « ${t.nom} », seconde couleur`);let t=[...e.familles.map(e=>e.id),...e.niveaux.map(e=>e.id)],n=new Set;for(let r of t)H(r.trim()!==``,`Discipline « ${e.nom} » : id de taxonomie vide`),H(!n.has(r),`Discipline « ${e.nom} » : id de taxonomie « ${r} » en double`),n.add(r)}function Cr(e,t,n){cr(e.nom,`Technique ${e.id}, nom`);let r=t.get(e.disciplineId);H(r!==void 0,`Technique « ${e.nom} » : discipline ${e.disciplineId} inconnue`),lr(e.nomTraditionnel,`Technique « ${e.nom} », appellation`),sr(e.niveauxIds,`Technique « ${e.nom} », niveaux`),sr(e.relations,`Technique « ${e.nom} », relations`),pr(e.alertes,`Technique « ${e.nom} »`),hr(e.couverture,`Technique « ${e.nom} »`),_r(e.origine,`Technique « ${e.nom} »`),e.familleId!==void 0&&H(r.familles.some(t=>t.id===e.familleId),`Technique « ${e.nom} » : famille « ${e.familleId} » absente de la discipline « ${r.nom} »`);for(let t of e.niveauxIds)H(r.niveaux.some(e=>e.id===t),`Technique « ${e.nom} » : niveau « ${t} » absent de la discipline « ${r.nom} »`);for(let t of e.relations)H(or(t),`Technique « ${e.nom} » : relation — objet attendu`),H(n.has(t.type),`Technique « ${e.nom} » : type de relation « ${t.type} » non déclaré`),H(ot(t.cibleId),`Technique « ${e.nom} » : cible de relation « ${t.cibleId} » mal formée`),lr(t.note,`Technique « ${e.nom} », note de relation`),ur(t.priorite,`Technique « ${e.nom} », priorité de relation`,1);e.mediaPrincipalId!==void 0&&H(ot(e.mediaPrincipalId),`Technique « ${e.nom} » : média principal « ${e.mediaPrincipalId} » mal formé`)}function wr(e,t){vr(e.map(e=>e.id),`${t}, médias`);for(let t of e)H(Pe.includes(t.type),`Média ${t.id} : type « ${t.type} » inconnu`),H(t.ref.trim()!==``,`Média ${t.id} : référence vide`),t.type===`local`&&H(yr(t.ref),`Média ${t.id} : chemin local « ${t.ref} » non relatif ou dangereux`),t.type===`plateforme`&&H(t.service!==void 0&&Fe.includes(t.service),`Média ${t.id} : un média de plateforme déclare son service (${Fe.join(`, `)})`),lr(t.label,`Média ${t.id}, libellé`),lr(t.mime,`Média ${t.id}, MIME`),lr(t.nomOriginal,`Média ${t.id}, nom d'origine`),lr(t.ajouteLe,`Média ${t.id}, date d'ajout`),ur(t.taille,`Média ${t.id}, taille`),dr(t.origineMedia,Ie,`Média ${t.id}, origine`),t.extension!==void 0&&H(typeof t.extension==`string`&&/^[a-z0-9]{1,5}$/i.test(t.extension),`Média ${t.id} : extension « ${String(t.extension)} » mal formée — elle compose le nom du fichier`),t.sha256!==void 0&&H(mr(t.sha256),`Média ${t.id} : empreinte « ${String(t.sha256)} » mal formée`)}function Tr(e){if(e===void 0)return;sr(e,`Bibliothèque, typesAlerte`);let t=new Set;for(let[n,r]of e.entries()){let e=`Bibliothèque, type d'alerte ${n+1}`;H(or(r),`${e} : objet attendu`),cr(r.id,`${e}, id`),H(!t.has(r.id),`${e} : id « ${String(r.id)} » en double`),t.add(r.id),cr(r.libelle,`${e}, libellé`),H(typeof r.niveau==`string`&&fr.includes(r.niveau),`${e} : niveau « ${String(r.niveau)} » inconnu (${fr.join(`, `)})`),lr(r.icone,`${e}, icône`)}}function Er(e){if(e!==void 0){sr(e,`Bibliothèque, conflitsLiaisons`);for(let[t,n]of e.entries()){let e=`Bibliothèque, conflit de liaison ${t+1}`;H(or(n),`${e} : objet attendu`);for(let t of[`pack`,`sourceId`,`cibleId`,`type`,`detecteLe`])cr(n[t],`${e}, ${t}`);dr(n.sens,[`contenu`,`retrait`],`${e}, sens`),lr(n.note,`${e}, note`),ur(n.priorite,`${e}, priorité`,1)}}}function Dr(e){if(e===void 0)return;sr(e,`Bibliothèque, editionsPacks`);let t=new Set;for(let[n,r]of e.entries()){let e=`Bibliothèque, édition de pack ${n+1}`;H(or(r),`${e} : objet attendu`),cr(r.pack,`${e}, pack`),H(!t.has(r.pack),`${e} : le pack « ${String(r.pack)} » a deux éditions — une seule entrée par pack`),t.add(r.pack),H(typeof r.versionEditoriale==`number`&&Number.isInteger(r.versionEditoriale)&&r.versionEditoriale>=1,`${e} : versionEditoriale entière ≥ 1 attendue`),cr(r.majLe,`${e}, majLe`)}}function Or(e){if(e!==void 0){sr(e,`Bibliothèque, conflitsContributions`);for(let[t,n]of e.entries()){let e=`Bibliothèque, conflit de contribution ${t+1}`;H(or(n),`${e} : objet attendu`);for(let t of[`pack`,`element`,`contributionId`,`detecteLe`])cr(n[t],`${e}, ${t}`);sr(n.pointsCles,`${e}, pointsCles`);for(let t of n.pointsCles)H(typeof t==`string`,`${e} : point clé texte attendu`);lr(n.description,`${e}, description`),lr(n.variantes,`${e}, variantes`),lr(n.attribution,`${e}, attribution`)}}}function kr(e,t,n){H(Me.includes(e),`${n} : provenance « ${e} » inconnue`),(e===`referentiel`||e===`ressource`)&&H((t??``).trim()!==``,`${n} : une provenance « ${e} » exige une attribution (savoir sourcé)`)}function Ar(e,t){kr(e.provenance,e.attribution,`Contribution ${e.id}`),sr(e.pointsCles,`Contribution ${e.id}, points clés`),sr(e.medias,`Contribution ${e.id}, médias`),lr(e.description,`Contribution ${e.id}, description`),_r(e.origine,`Contribution ${e.id}`),e.techniqueId!==null&&H(t.has(e.techniqueId),`Contribution ${e.id} : technique ${e.techniqueId} inconnue`),H(!Number.isNaN(Date.parse(e.creeLe)),`Contribution ${e.id} : date « ${e.creeLe} » invalide`),wr(e.medias,`Contribution ${e.id}`)}function jr(e){if(cr(e.nom,`Composition ${e.id}, nom`),sr(e.blocs,`Composition « ${e.nom} », blocs`),_r(e.origine,`Composition « ${e.nom} »`),kr(e.provenance,e.attribution,`Composition « ${e.nom} »`),H(!Number.isNaN(Date.parse(e.creeLe)),`Composition « ${e.nom} » : date « ${e.creeLe} » invalide`),vr(e.blocs.map(e=>e.id),`Composition « ${e.nom} », blocs`),e.acteurs?.length){let t=new Set;for(let n of e.acteurs)H(n.id.trim()!==``,`Composition « ${e.nom} » : un acteur porte un identifiant`),H(!t.has(n.id),`Composition « ${e.nom} » : acteur « ${n.id} » en double`),t.add(n.id),H(n.nom.trim()!==``,`Composition « ${e.nom} » : un acteur porte un nom`)}for(let t of e.blocs)H(Le.includes(t.type),`Composition « ${e.nom} » : bloc de type « ${t.type} » inconnu`),t.lien!==void 0&&H(typeof t.lien==`boolean`||Re.includes(t.lien),`Composition « ${e.nom} » : lien « ${String(t.lien)} » inconnu`),t.type===`technique`?H(t.techniqueId!==void 0&&ot(t.techniqueId),`Composition « ${e.nom} » : un bloc technique référence une identité`):H((t.texte??``).trim()!==``||t.medias.length>0||t.dureeSec!==void 0,`Composition « ${e.nom} » : un bloc « ${t.type} » porte un texte, un média ou une durée`),t.dureeSec!==void 0&&H(Number.isFinite(t.dureeSec)&&t.dureeSec>=0,`Composition « ${e.nom} » : durée « ${t.dureeSec} » invalide`),wr(t.medias,`Composition « ${e.nom} », bloc ${t.id}`);e.presentation&&wr(e.presentation.medias,`Composition « ${e.nom} », présentation`)}function Mr(e){H(e.versionSchema===6,`Version de schéma ${e.versionSchema} inattendue (courante : 6) — passer par les migrations avant validation`);for(let[t,n]of[[`typesRelation`,e.typesRelation],[`disciplines`,e.disciplines],[`techniques`,e.techniques],[`contributions`,e.contributions],[`compositions`,e.compositions],[`favoris`,e.favoris]])sr(n,`Bibliothèque, ${t}`);br(e.typesRelation),Tr(e.typesAlerte),Er(e.conflitsLiaisons),Or(e.conflitsContributions),Dr(e.editionsPacks),vr(e.disciplines.map(e=>e.id),`Disciplines`),vr(e.techniques.map(e=>e.id),`Techniques`),vr(e.contributions.map(e=>e.id),`Contributions`),vr(e.compositions.map(e=>e.id),`Compositions`);let t=new Map(e.disciplines.map(e=>[e.id,e])),n=new Set(e.techniques.map(e=>e.id)),r=new Set(e.typesRelation.map(e=>e.id));e.disciplines.forEach(Sr),e.techniques.forEach(e=>Cr(e,t,r)),e.contributions.forEach(e=>Ar(e,n)),e.compositions.forEach(jr),gr(e.images,`Bibliothèque, images`);let i=new Set((e.images??[]).map(e=>e.id)),a=(e,t)=>{e?.type===`fichier`&&H(i.has(e.imageId),`${t} : l'image « ${e.imageId} » n'est déclarée nulle part dans l'inventaire`)};for(let t of e.disciplines)for(let e of t.familles)a(e.couverture,`Discipline « ${t.nom} », famille « ${e.nom} »`);for(let t of e.techniques)a(t.couverture,`Technique « ${t.nom} »`);for(let t of e.corbeille??[])a(t.technique?.couverture,`Corbeille, « ${t.technique?.nom} »`);vr(e.favoris,`Favoris`);for(let t of e.favoris)H(ot(t),`Favori « ${t} » mal formé`)}function U(e){return e.toLowerCase().normalize(`NFD`).replace(/[̀-ͯ]/g,``).replace(/[\s\-'’]/g,``)}function Nr(e,t,n=20){let r=U(t);if(r===``)return[];let i=new Map;for(let t of e.contributions)t.provenance!==`personnel`||!t.techniqueId||!t.description||i.set(t.techniqueId,(i.get(t.techniqueId)??``)+` `+U(t.description));let a=new Map,o=[];for(let t of e.techniques){let e=U(t.nom),n=U(t.nomTraditionnel??``),s=null;e.startsWith(r)?s=0:e.includes(r)?s=1:n!==``&&n.includes(r)?s=2:i.get(t.id)?.includes(r)&&(s=3),s!==null&&(a.set(t.id,s),o.push(t))}return o.sort((e,t)=>a.get(e.id)-a.get(t.id)||e.nom.localeCompare(t.nom,`fr`)).slice(0,n)}function Pr(e,t){let n=e.get(t)?.media.extension;return n?`medias/${t}.${n}`:`medias/${t}`}function Fr(e,t,n,r,i,a,o){return{format:`movpack`,version:5,id:t.id,nom:t.nom,portee:t.portee,...t.auteur?{auteur:t.auteur}:{},...t.conditions?{conditions:t.conditions}:{},creeLe:o,versionSchema:e.versionSchema,empreinte:i,videos:n,versionEditoriale:t.versionEditoriale??1,algorithme:`SHA-256`,inclusions:{medias:a,contenuPersonnel:t.portee===`complet`},fichiers:r}}async function Ir(e,t,n,r,i,a){Mr(e);let o=a.images??new Map;Bn(e,o);let s=He(e),c=new TextEncoder().encode(JSON.stringify(e)),l=[{chemin:`bibliotheque.json`,taille:c.length,sha256:ut(c)}],u=[],d=null,f=new Mn((e,t)=>{e?d=e:t&&t.length&&u.push(t)}),p=async()=>{if(d)throw new V(`Compression du conteneur échouée : ${d.message}`);let e=u;u=[];for(let t of e)await i.ecrire(t)},m=()=>{if(a.estAnnule?.())throw new V(`Export annulé`)},h=new jn(`bibliotheque.json`,{level:6});f.add(h),h.push(c,!0),await p();for(let e of n){m();let t=Pr(s,e),i=new An(t);f.add(i);let o=new lt,c=0,u=null;for await(let t of r(e))u&&(i.push(u,!1),o.update(u),c+=u.length,await p(),m()),u=t;u?(i.push(u,!0),o.update(u),c+=u.length):i.push(new Uint8Array,!0),await p(),l.push({chemin:t,taille:c,sha256:o.digestHex()}),a.surProgression?.(l.length-1,n.length)}for(let t of e.images??[]){m();let e=`images/${t.id}`,n=new An(e);f.add(n),n.push(o.get(t.id),!0),await p(),l.push({chemin:e,taille:t.taille,sha256:t.id})}let g=Fr(e,t,n,l,l[0].sha256,n.length>0,a.creeLe),_=new jn(`manifeste.json`,{level:6});return f.add(_),_.push(new TextEncoder().encode(JSON.stringify(g,null,2)),!0),await p(),f.end(),await p(),g}function Lr(e,t,n){let r=new Map(t.map(e=>[e.id,e]));for(let t of e.images??[]){if(r.has(t.id))continue;let e=n.get(t.id);e&&r.set(t.id,{...t,octets:e})}return[...r.values()]}function Rr(e){if(e.length===1)return e[0];let t=0;for(let n of e)t+=n.length;let n=new Uint8Array(t),r=0;for(let t of e)n.set(t,r),r+=t.length;return n}async function zr(e,t,n={}){let r={...Kn,...n.limites},i=0,a=0,o=null,s=null,c=new Map,l=new Map,u=0,d=new Set,f=[],p=null,m=new Fn;m.register(Pn),m.onfile=e=>{f.push({t:`debut`,nom:e.name}),e.ondata=(t,n,r)=>{t?p=t:f.push({t:`donnee`,nom:e.name,bloc:n,final:r})},e.start()};let h=null,g=null,_=async()=>{for(;f.length;){let e=f.shift();if(e.t===`debut`){if(++i>r.entreesMax)throw new V(`Archive refusée : plus de ${r.entreesMax} entrées`);if(!Yn(e.nom))throw new V(`Archive refusée : chemin dangereux (${e.nom})`);if(d.has(e.nom))throw new V(`Archive refusée : chemin en double (${e.nom})`);if(d.add(e.nom),Ln(e.nom)){let n=e.nom.slice(e.nom.indexOf(`/`)+1),r=n.match(/\.([a-z0-9]{1,5})$/i)?.[1]?.toLowerCase();if(r!==void 0&&!qn.has(r))throw new V(`Archive refusée : type de média inattendu (${e.nom})`);h={chemin:e.nom,id:Vn(e.nom),nomPhysique:n,hacheur:new lt,taille:0},await t.ouvrir(n)}else g={nom:e.nom,garder:e.nom===`manifeste.json`||e.nom===`bibliotheque.json`||Rn(e.nom),morceaux:[],taille:0}}else if(h&&e.nom===h.chemin){if(e.bloc.length){if(h.taille===0){let t=Jn(e.bloc);if(t)throw new V(`Archive refusée : ${h.chemin} est un ${t}, pas une vidéo`)}if(a+=e.bloc.length,a>r.octetsTotal)throw new V(`Archive refusée : volume décompressé au-delà de ${Math.round(r.octetsTotal/1e6)} Mo`);h.hacheur.update(e.bloc),h.taille+=e.bloc.length,await t.ecrire(e.bloc)}e.final&&(await t.fermer(),c.set(h.chemin,{id:h.id,nomPhysique:h.nomPhysique,taille:h.taille,sha256:h.hacheur.digestHex()}),h=null)}else if(g&&e.nom===g.nom){if(e.bloc.length){if(a+=e.bloc.length,g.taille+=e.bloc.length,a>r.octetsTotal)throw new V(`Archive refusée : volume décompressé au-delà de ${Math.round(r.octetsTotal/1e6)} Mo`);let t=Rn(g.nom)?r.octetsImage:r.octetsPetitFichier;if(g.taille>t)throw new V(`Archive refusée : ${g.nom} dépasse ${Math.round(t/1e6)} Mo`);if(Rn(g.nom)&&(u+=e.bloc.length,u>r.octetsImagesTotal))throw new V(`Archive refusée : ses images dépassent ${Math.round(r.octetsImagesTotal/1e6)} Mo cumulés — elles sont lues en mémoire, un appareil modeste n'y survivrait pas`);g.garder&&g.morceaux.push(e.bloc.slice())}if(e.final){if(g.garder){let e=Rr(g.morceaux);g.nom===`manifeste.json`?o=e:g.nom===`bibliotheque.json`?s=e:l.set(g.nom.slice(7),e)}g=null}}}},v=()=>new V(`Fichier illisible : pas une archive .movpack valide`);try{let t=e.getReader();for(;;){if(n.estAnnule?.())throw new V(`Import annulé`);let{done:e,value:r}=await t.read();try{m.push(r??new Uint8Array,e)}catch{throw v()}if(p)throw v();if(await _(),e)break}let r=o,i=s;if(!r||!i)throw new V(`Archive incomplète : manifeste.json et bibliotheque.json attendus`);let a=Wn(JSON.parse(new TextDecoder().decode(r)));if(a.version>5)throw new V(`Conteneur .movpack v${a.version}, plus récent que l'application (v5) — mettre à jour l'application`);let u=[],f,h=Gn(a);if(h){let e=new Set([`manifeste.json`]),t=!1;f=[];for(let n of h)if(e.add(n.chemin),n.chemin===`bibliotheque.json`){if(i.length!==n.taille)throw new V(`Taille inattendue : bibliotheque.json (${i.length} octets, ${n.taille} attendus)`);if(ut(i)!==n.sha256)throw new V(`Intégrité en échec : bibliotheque.json ne correspond pas à son empreinte`);t=!0}else if(Rn(n.chemin)){let e=l.get(n.chemin.slice(7));if(!e)throw new V(`Fichier manquant : ${n.chemin} est déclaré mais absent de l'archive`);if(e.length!==n.taille)throw new V(`Taille inattendue : ${n.chemin} (${e.length} octets, ${n.taille} attendus)`);if(ut(e)!==n.sha256)throw new V(`Intégrité en échec : ${n.chemin} ne correspond pas à son empreinte`);zn(n.chemin,e)}else{let e=c.get(n.chemin);if(!e)throw new V(`Fichier manquant : ${n.chemin} est déclaré mais absent de l'archive`);if(e.taille!==n.taille)throw new V(`Taille inattendue : ${n.chemin} (${e.taille} octets, ${n.taille} attendus)`);if(e.sha256!==n.sha256)throw new V(`Intégrité en échec : ${n.chemin} ne correspond pas à son empreinte`);f.push(e)}if(!t)throw new V(`Manifeste incomplet : bibliotheque.json absent de l'inventaire d'intégrité`);for(let t of d)e.has(t)||(u.push(`Fichier inattendu ignoré : ${t}`),Rn(t)&&l.delete(t.slice(7)))}else{if(ut(i)!==a.empreinte)throw new V(`Intégrité en échec : le contenu ne correspond pas à l'empreinte du manifeste`);f=[...c.values()];for(let e of l.keys())u.push(`Fichier inattendu ignoré : images/${e}`);l.clear()}let{bibliotheque:g,imagesDetachees:y}=nr(JSON.parse(new TextDecoder().decode(i)));return Mr(g),{manifeste:a,bibliotheque:g,medias:f,images:Lr(g,y,l),avertissements:u}}catch(e){throw await t.abandonner(),e instanceof V?e:v()}}function Br(e){let t=new Set,n=e=>{if(Array.isArray(e))return e.forEach(n);if(!e||typeof e!=`object`)return;let r=e;if(r.type===`fichier`&&typeof r.imageId==`string`){t.add(r.imageId);return}for(let e of Object.values(r))n(e)},{images:r,...i}=e;return n(i),t}function Vr(e){let t=Br(e);return(e.images??[]).filter(e=>t.has(e.id))}function Hr(e,t){let n=new Map((e.images??[]).map(e=>[e.id,e])),r=new Set;for(let e of t??[])n.has(e.id)||(n.set(e.id,structuredClone(e)),r.add(e.id));return e.images=n.size?[...n.values()]:[],e.images=Vr(e),e.images.filter(e=>r.has(e.id)).length}var Ur=class extends Error{constructor(e){super(e),this.name=`ErreurRapprochement`}};function Wr(e,t,n){if(Math.abs(e.length-t.length)>n)return n+1;let r=Array.from({length:t.length+1},(e,t)=>t);for(let n=1;n<=e.length;n++){let i=[n];for(let a=1;a<=t.length;a++)i[a]=Math.min((r[a]??0)+1,(i[a-1]??0)+1,(r[a-1]??0)+(e[n-1]===t[a-1]?0:1));r=i}return r[t.length]??n+1}function Gr(e,t,n){let r=U(n);if(r.length<3)return{exacte:null,proches:[]};let i=e.techniques.filter(e=>e.disciplineId===t),a=i.filter(e=>U(e.nom)===r);return{exacte:a.length===1?a[0]:null,proches:[...a.length>1?a:[],...i.filter(e=>{let t=U(e.nom);return t!==r&&(Wr(t,r,2)<=2||t.includes(r)||r.includes(t))})].slice(0,4)}}function Kr(e,t,n){let r=new Map;for(let i of t){let t=e.find(e=>U(e.nom)===U(i.nom));if(t)r.set(i.id,t.id);else{let t=e.some(e=>e.id===i.id)?`${n}-${i.id}`:i.id;e.push({...i,id:t}),r.set(i.id,t)}}return r}function qr(e,t,n){if(t.disciplines.length===0)throw new Ur(`Un pack importable contient au moins une discipline`);let r=structuredClone(e),i=n.packId,a=new Map((n.regles??[]).map(e=>[U(e.de),U(e.vers)])),o={discipline:t.disciplines.map(e=>e.nom).join(` + `),rejointes:[],creees:[],retirees:[],suggestions:[],conflitsLiaisons:0,conflitsContributions:0,retraitsProposes:0,fichesModifiees:0,compositionsModifiees:0,imagesAjoutees:0,relationsAjoutees:0},s=new Set;for(let e of t.typesRelation??[]){let t=r.typesRelation.find(t=>t.id===e.id);t?(t.role===void 0&&e.role!==void 0&&(t.role=e.role),t.ordre===void 0&&e.ordre!==void 0&&(t.ordre=e.ordre)):r.typesRelation.push({...structuredClone(e),origine:{pack:i,element:e.id}})}if(t.typesAlerte?.length){r.typesAlerte??=[];for(let e of t.typesAlerte)r.typesAlerte.some(t=>t.id===e.id)||r.typesAlerte.push(structuredClone(e))}let c=new Map,l=new Set,u=new Map(r.techniques.filter(e=>e.origine?.pack===i).map(e=>[e.origine.element,e]));for(let e of t.disciplines){let n=r.disciplines.find(t=>U(t.nom)===U(e.nom))??r.disciplines.find(t=>t.id===e.id);n||(n=structuredClone(e),r.disciplines.push(n));let d=n,f=Kr(d.familles,e.familles,i),p=Kr(d.niveaux,e.niveaux,i),m=()=>r.techniques.filter(e=>e.disciplineId===d.id),h=new Map;for(let e of m()){let t=U(e.nom);h.set(t,[...h.get(t)??[],e])}for(let n of t.techniques.filter(t=>t.disciplineId===e.id)){let e=n.origine?.element??n.id;l.add(e);let t=u.get(e);if(t){c.set(n.id,t.id);let e=JSON.stringify(t);Jr(t,n,f,p),t.nom=n.nom,n.nomTraditionnel&&(t.nomTraditionnel=n.nomTraditionnel),n.couverture&&(t.couverture=structuredClone(n.couverture)),JSON.stringify(t)!==e&&s.add(t.id),o.rejointes.push(n.nom);continue}let g=r.techniques.find(e=>e.id===n.id);if(g){c.set(n.id,g.id),Jr(g,n,f,p)&&s.add(g.id),o.rejointes.push(n.nom);continue}let _=a.has(U(n.nom)),v=a.get(U(n.nom))??U(n.nom),y=(h.get(v)??[]).filter(e=>e.origine?.pack!==i);if(_){if(y.length===0)throw new Ur(`Règle « ${n.nom} » → « ${v} » : aucune identité cible dans « ${d.nom} »`);if(y.length===1){let e=y[0];c.set(n.id,e.id),Jr(e,n,f,p)&&s.add(e.id),o.rejointes.push(n.nom);continue}o.suggestions.push({nom:n.nom,candidats:y.map(e=>e.nom),motif:`ambigu`})}else if(y.length>1)o.suggestions.push({nom:n.nom,candidats:y.map(e=>e.nom),motif:`ambigu`});else if(y.length===0){let e=m().filter(e=>e.origine?.pack!==i&&Wr(U(e.nom),U(n.nom),2)<=2).map(e=>e.nom);e.length&&o.suggestions.push({nom:n.nom,candidats:e,motif:`quasi-correspondance`})}let b={...structuredClone(n),disciplineId:d.id,niveauxIds:n.niveauxIds.map(e=>p.get(e)??e),relations:[],origine:{pack:i,element:e}};n.familleId?b.familleId=f.get(n.familleId)??n.familleId:delete b.familleId,r.techniques.push(b),h.set(U(b.nom),[...h.get(U(b.nom))??[],b]),c.set(n.id,b.id),o.creees.push(n.nom)}}for(let[e,t]of u)l.has(e)||(r.contributions=r.contributions.filter(t=>!(t.origine?.pack===i&&t.origine.element===e)),r.contributions.some(e=>e.techniqueId===t.id)||(r.techniques=r.techniques.filter(e=>e.id!==t.id),o.retirees.push(t.nom)));let d=new Map((r.conflitsContributions??[]).map(e=>[`${e.pack}\u0000${e.element}`,e]));for(let e of t.contributions){let t=e.origine?.element??e.id;d.delete(`${i}\u0000${t}`);let n=e.techniqueId?c.get(e.techniqueId)??null:null,a=r.contributions.find(n=>n.origine?.pack===i&&n.origine.element===t||n.id===e.id);if(a){let r=(a.description??``)===(e.description??``)&&(a.variantes??``)===(e.variantes??``)&&(a.attribution??``)===(e.attribution??``)&&a.pointsCles.join(`
`)===e.pointsCles.join(`
`);if(a.modifiePar&&!r){a.techniqueId=n,a.origine={pack:i,element:t},d.set(`${i}\u0000${t}`,{pack:i,element:t,contributionId:a.id,...e.description===void 0?{}:{description:e.description},pointsCles:[...e.pointsCles],...e.variantes===void 0?{}:{variantes:e.variantes},...e.attribution===void 0?{}:{attribution:e.attribution},detecteLe:new Date().toISOString()}),o.conflitsContributions++;continue}!r&&n&&s.add(n),Object.assign(a,structuredClone(e),{id:a.id,techniqueId:n,origine:{pack:i,element:t}}),a.modifiePar&&delete a.modifiePar}else r.contributions.push({...structuredClone(e),techniqueId:n,origine:{pack:i,element:t}})}let f=[...d.values()].filter(e=>r.contributions.some(t=>t.id===e.contributionId));f.length>0?r.conflitsContributions=f:delete r.conflitsContributions;let p=new Map(r.compositions.filter(e=>e.origine?.pack===i).map(e=>[e.origine.element,e])),m=new Set;for(let e of t.compositions??[]){let t=e.origine?.element??e.id;m.add(t);let n=e.blocs.map(e=>e.type===`technique`&&e.techniqueId?{...structuredClone(e),techniqueId:c.get(e.techniqueId)??e.techniqueId}:structuredClone(e)),a=p.get(t)??r.compositions.find(t=>t.id===e.id);if(a){let r=(e,t)=>JSON.stringify([e.nom,e.description,e.type,e.provenance,e.attribution,e.acteurs,e.presentation,t]),s=r(a,a.blocs);Object.assign(a,structuredClone(e),{id:a.id,blocs:n,origine:{pack:i,element:t}}),r(a,a.blocs)!==s&&o.compositionsModifiees++}else r.compositions.push({...structuredClone(e),blocs:n,origine:{pack:i,element:t}})}for(let[e,t]of p)m.has(e)||(r.compositions=r.compositions.filter(e=>e.id!==t.id));let h=e=>`${e.pack}|${e.sourceId}|${e.cibleId}|${e.type}`,g=new Map((r.conflitsLiaisons??[]).map(e=>[h(e),e]));for(let e of t.techniques){let t=c.get(e.id),n=r.techniques.find(e=>e.id===t);for(let t of e.relations){let e={type:t.type,cibleId:c.get(t.cibleId)??t.cibleId};if(t.note!==void 0&&(e.note=t.note),t.priorite!==void 0&&(e.priorite=t.priorite),e.cibleId===n.id)continue;let r=n.relations.find(t=>t.type===e.type&&t.cibleId===e.cibleId);if(!r){n.relations.push(e),o.relationsAjoutees++;continue}let a=h({pack:i,sourceId:n.id,cibleId:e.cibleId,type:e.type});(e.note!==void 0||e.priorite!==void 0)&&(e.note!==r.note||e.priorite!==r.priorite)?g.set(a,{pack:i,sourceId:n.id,cibleId:e.cibleId,type:e.type,...e.note===void 0?{}:{note:e.note},...e.priorite===void 0?{}:{priorite:e.priorite},detecteLe:new Date().toISOString()}):g.delete(a)}}let _=new Set(r.techniques.filter(e=>e.origine?.pack===i).map(e=>e.id)),v=new Set;for(let e of t.techniques){let t=c.get(e.id);for(let n of e.relations){let e=c.get(n.cibleId)??n.cibleId;t&&v.add(`${t}|${e}|${n.type}`)}}for(let e of r.techniques)if(_.has(e.id))for(let t of e.relations)_.has(t.cibleId)&&(v.has(`${e.id}|${t.cibleId}|${t.type}`)||g.set(h({pack:i,sourceId:e.id,cibleId:t.cibleId,type:t.type}),{pack:i,sourceId:e.id,cibleId:t.cibleId,type:t.type,sens:`retrait`,detecteLe:new Date().toISOString()}));for(let[e,t]of g)t.sens!==`retrait`||t.pack!==i||(!r.techniques.find(e=>e.id===t.sourceId)?.relations.some(e=>e.type===t.type&&e.cibleId===t.cibleId)||v.has(`${t.sourceId}|${t.cibleId}|${t.type}`))&&g.delete(e);g.size>0?r.conflitsLiaisons=[...g.values()]:delete r.conflitsLiaisons;let y=[...g.values()];return o.conflitsLiaisons=y.filter(e=>e.pack===i&&e.sens!==`retrait`).length,o.retraitsProposes=y.filter(e=>e.pack===i&&e.sens===`retrait`).length,o.imagesAjoutees=Hr(r,t.images),o.fichesModifiees=s.size,n.versionEditoriale!==void 0&&(r.editionsPacks=[...(r.editionsPacks??[]).filter(e=>e.pack!==i),{pack:i,versionEditoriale:n.versionEditoriale,majLe:new Date().toISOString()}]),Mr(r),{bibliotheque:r,rapport:o}}function Jr(e,t,n,r){let i=JSON.stringify(e);!e.nomTraditionnel&&t.nomTraditionnel&&(e.nomTraditionnel=t.nomTraditionnel),!e.couverture&&t.couverture&&(e.couverture=structuredClone(t.couverture)),!e.mediaPrincipalId&&t.mediaPrincipalId&&(e.mediaPrincipalId=t.mediaPrincipalId),!e.familleId&&t.familleId&&(e.familleId=n.get(t.familleId)??t.familleId);for(let n of t.niveauxIds){let t=r.get(n)??n;e.niveauxIds.includes(t)||e.niveauxIds.push(t)}return JSON.stringify(e)!==i}function Yr(e,t,n){let r=e=>e.pack===t.pack&&e.sourceId===t.sourceId&&e.cibleId===t.cibleId&&e.type===t.type,i=(e.conflitsLiaisons??[]).filter(e=>!r(e));if(i.length>0?e.conflitsLiaisons=i:delete e.conflitsLiaisons,n===`retirer`){let n=e.techniques.find(e=>e.id===t.sourceId);n&&(n.relations=n.relations.filter(e=>!(e.type===t.type&&e.cibleId===t.cibleId)));return}if(n===`local`)return;let a=e.techniques.find(e=>e.id===t.sourceId)?.relations.find(e=>e.type===t.type&&e.cibleId===t.cibleId);if(!a)return;if(n===`pack`){t.note===void 0?delete a.note:a.note=t.note,t.priorite===void 0?delete a.priorite:a.priorite=t.priorite;return}let o=[a.note,t.note].filter(e=>e!==void 0&&e.trim()!==``),s=[...new Set(o)].join(`

`);s===``?delete a.note:a.note=s,a.priorite===void 0&&t.priorite!==void 0&&(a.priorite=t.priorite)}function Xr(e,t,n){let r=(e.conflitsContributions??[]).filter(e=>!(e.pack===t.pack&&e.element===t.element));if(r.length>0?e.conflitsContributions=r:delete e.conflitsContributions,n===`locale`)return;let i=e.contributions.find(e=>e.id===t.contributionId);i&&(t.description===void 0?delete i.description:i.description=t.description,i.pointsCles=[...t.pointsCles],t.variantes===void 0?delete i.variantes:i.variantes=t.variantes,t.attribution===void 0?delete i.attribution:i.attribution=t.attribution,delete i.modifiePar)}var Zr=!1;function Qr(e){if(!e.garde(`modification`,`Saisis le PIN pour importer un pack.`,()=>void e.choisirPackAImporter()))return;let t=document.createElement(`input`);t.type=`file`,t.accept=`.movpack`,t.onchange=()=>{let n=t.files?.[0];n&&e.importerPack(n)},t.click()}async function $r(e,t){let n=e.bibliotheque;if(n){e.importEnAttente=null,e.restaurationEnAttente=null,await e.stockage.nettoyerImport();try{let r=new Uint8Array(await t.slice(0,4).arrayBuffer()),i,a,o,s=[],c=[],l=[];if(In(r)){if(!vt(e,t.size,await e.stockage.estimerEspace()))return;Zr=!1,e.annulationOccupe={libelle:`Annuler`,executer:()=>{Zr=!0}};let n;try{n=await e.occuperPendant(`Lecture du pack…`,()=>zr(t.stream(),e.stockage.puitsImport(),{estAnnule:()=>Zr}))}finally{e.annulationOccupe=null}if(n.manifeste.portee===`complet`){await ri(e,n);return}s=n.medias,c=n.images,i=n.bibliotheque,a=n.manifeste.id,o=n.manifeste,l=n.avertissements}else{let e=new Uint8Array(await t.arrayBuffer());i=rr(JSON.parse(new TextDecoder().decode(e))),Mr(i),a=i.contributions[0]?.origine?.pack??t.name.replace(/\.(json|movpack)$/i,``),l=[`Fichier JSON historique : ni manifeste ni intégrité de conteneur — analysé et validé, mais non vérifié par empreinte.`]}let u=n.techniques.some(e=>e.origine?.pack===a)||n.contributions.some(e=>e.origine?.pack===a);e.importEnAttente={...qr(n,i,{packId:a,...o?.versionEditoriale===void 0?{}:{versionEditoriale:o.versionEditoriale}}),packId:a,medias:s,images:c,dejaInstalle:u,...o?{manifeste:o}:{},volume:t.size,contenus:{techniques:i.techniques.length,contributions:i.contributions.length},avertissements:l},e.requestUpdate()}catch(t){if(await e.stockage.nettoyerImport(),t instanceof Error&&t.message===`Import annulé`){e.afficherToast(`Import annulé — rien n'a été écrit`);return}e.consignerEchec(`MOV-E02`,t),e.afficherToast(`Import impossible : ${t instanceof Error?t.message:`fichier illisible`}`,`alerte`)}}}async function ei(e){let t=e.importEnAttente;if(!t||!vt(e,bt(t.medias),await St(e)))return;await e.stockage.snapshot(`avant-import-${t.packId}`);try{await e.occuperPendant(`Installation du pack…`,async()=>{let n=await e.stockage.promouvoirImportMedias(t.medias.map(e=>e.nomPhysique));await e.stockage.poserImagesRecues(t.images);try{await e.persister(t.bibliotheque)}catch(t){throw await e.stockage.annulerPromotionMedias(n),t}})}catch(t){e.consignerEchec(`MOV-E03`,t),e.afficherToast(`Import impossible : ${t instanceof Error?t.message:`écriture refusée`}`,`alerte`);return}await e.stockage.nettoyerImport();let n=t.rapport;e.importEnAttente=null,e.rapportApresImport={discipline:n.discipline,disciplineId:t.bibliotheque.disciplines.find(e=>e.nom===n.discipline)?.id??null,rejointes:n.rejointes.length,creees:n.creees.length,suggestions:n.suggestions,videos:t.medias.length,conflitsLiaisons:n.conflitsLiaisons,conflitsContributions:n.conflitsContributions,retraitsProposes:n.retraitsProposes,fichesModifiees:n.fichesModifiees,compositionsModifiees:n.compositionsModifiees,imagesAjoutees:n.imagesAjoutees,relationsAjoutees:n.relationsAjoutees},e.requestUpdate()}function ti(e){e.rapportApresImport=null,e.requestUpdate()}async function ni(e){e.importEnAttente=null,await e.stockage.nettoyerImport(),e.requestUpdate(),e.afficherToast(`Import annulé — rien n'a été écrit`)}async function ri(e,t){let n=e.bibliotheque;if(!(n.disciplines.length===0&&n.techniques.length===0&&n.contributions.length===0&&n.compositions.length===0)){await e.stockage.nettoyerImport(),e.afficherToast(`Cet export complet se restaure sur une installation vierge — ici, importe plutôt un pack de discipline (Plus › Créer / exporter un pack)`);return}e.restaurationEnAttente=t,e.requestUpdate()}async function ii(e){if(!e.garde(`destruction_ou_sensible`,`Saisis le PIN pour restaurer cette sauvegarde.`,()=>void e.confirmerRestauration()))return;let t=e.restaurationEnAttente;if(t&&vt(e,bt(t.medias),await St(e))){try{await e.occuperPendant(`Restauration en cours…`,async()=>{let n=await e.stockage.promouvoirImportMedias(t.medias.map(e=>e.nomPhysique));await e.stockage.poserImagesRecues(t.images);try{await e.persister(t.bibliotheque)}catch(t){throw await e.stockage.annulerPromotionMedias(n),t}})}catch(t){e.consignerEchec(`MOV-E04`,t),e.afficherToast(`Restauration impossible : ${t instanceof Error?t.message:`écriture refusée`}`,`alerte`);return}await e.stockage.nettoyerImport(),e.restaurationEnAttente=null,e.afficherToast(`Bibliothèque restaurée ✓ ${t.bibliotheque.techniques.length} techniques, ${t.medias.length} vidéo${t.medias.length>1?`s`:``} — réglages d'appareil (thème, démarrage, protections) à reconfigurer`)}}async function ai(e){e.restaurationEnAttente=null,await e.stockage.nettoyerImport(),e.requestUpdate(),e.afficherToast(`Restauration annulée — rien n'a été écrit`)}function oi(e,t){let n=e.bibliotheque;if(!n)return;let r=(n.conflitsLiaisons??[]).filter(e=>e.sens===`retrait`&&e.pack===t);if(r.length===0)return;let i=r.length>1?`s`:``;e.demanderConfirmation({titre:`Retirer ${r.length} lien${i} ?`,corps:`Ce pack ne les déclare plus. Un lien que tu as tracé toi-même entre deux de ses techniques peut se trouver dans le lot — rien ne les distingue. Un point de restauration est pris avant.`,bouton:`Retirer`,action:()=>void si(e,r)})}async function si(e,t){let n=e.bibliotheque;if(!n)return;await e.stockage.snapshot(`avant-retrait-liens-${t[0].pack}`);for(let e of t)Yr(n,e,`retirer`);await e.persister(n);let r=t.length>1?`s`:``;e.afficherToast(`${t.length} lien${r} retiré${r} — point de restauration conservé`)}var ci=[{nom:`Aïkido`,icon:`packs/img/venir-aikido.webp`},{nom:`Boxe anglaise`,icon:`packs/img/venir-boxe-anglaise.webp`},{nom:`Muay Thaï`,icon:`packs/img/venir-muay-thai.webp`},{nom:`Kick-boxing`,icon:`packs/img/venir-kickboxing.webp`},{nom:`MMA`,icon:`packs/img/venir-mma.webp`},{nom:`Lutte libre`,icon:`packs/img/venir-lutte-libre.webp`},{nom:`Lutte gréco-romaine`,icon:`packs/img/venir-lutte-greco.webp`},{nom:`Sambo`,icon:`packs/img/venir-sambo.webp`},{nom:`Savate`,icon:`packs/img/venir-savate.webp`},{nom:`Taekwondo`,icon:`packs/img/venir-taekwondo.webp`},{nom:`Capoeira`,icon:`packs/img/venir-capoeira.webp`},{nom:`Kali / Eskrima`,icon:`packs/img/venir-kali.webp`},{nom:`Krav Maga`,icon:`packs/img/venir-krav-maga.webp`},{nom:`Mobilité`,icon:`packs/img/venir-mobilite.webp`},{nom:`Musculation`,icon:`packs/img/venir-musculation.webp`},{nom:`Préparation physique`,icon:`packs/img/venir-prepa-physique.webp`},{nom:`Pilates`,icon:`packs/img/venir-pilates.webp`},{nom:`Kendo`,icon:`packs/img/venir-kendo.webp`},{nom:`Wing Chun`,icon:`packs/img/venir-wing-chun.webp`},{nom:`Sumo`,icon:`packs/img/venir-sumo.webp`}],li=e=>e.trim().toLowerCase().normalize(`NFD`).replace(/[̀-ͯ]/g,``);function ui(e){let t=new Set(e.flatMap(e=>[li(e.discipline??``),li(e.title)]));return ci.filter(e=>!t.has(li(e.nom)))}var di=`https://prettozm.github.io/movenso-public/`;function fi(e){return(window.Capacitor?.getPlatform?.()??`web`)===`web`?new URL(`../${e}`,location.href).toString():new URL(e,di).toString()}var pi=new Map;function mi(e){return(e?pi.get(e):void 0)||void 0}async function hi(e,t){for(let n of t)if(!(!n||pi.has(n))){pi.set(n,``);try{let t=await fetch(fi(n),{cache:`force-cache`});if(!t.ok)throw Error(`HTTP ${t.status}`);pi.set(n,URL.createObjectURL(await t.blob())),e.requestUpdate()}catch{}}}async function gi(e){e.catalogueOfficiel=`chargement`,e.requestUpdate();try{let t=await fetch(fi(`packs/index.json`),{cache:`no-cache`});if(!t.ok)throw Error(`HTTP ${t.status}`);let n=await t.json();if(!Array.isArray(n))throw Error(`catalogue illisible`);e.catalogueOfficiel=n.filter(e=>!!e&&typeof e==`object`&&typeof e.id==`string`&&typeof e.title==`string`&&typeof e.href==`string`&&typeof e.downloadName==`string`&&typeof e.version==`string`)}catch{e.catalogueOfficiel=`indisponible`}e.requestUpdate(),Array.isArray(e.catalogueOfficiel)&&hi(e,[...e.catalogueOfficiel.map(e=>e.icon),...ui(e.catalogueOfficiel).map(e=>e.icon)])}async function _i(e,t){try{let n=await e.occuperPendant(`Téléchargement de « ${t.title} »…`,async()=>{let e=await fetch(fi(t.href),{cache:`no-cache`});if(!e.ok)throw Error(`HTTP ${e.status}`);let n=await e.blob();return new File([n],t.downloadName,{type:`application/octet-stream`})});await e.importerPack(n)}catch(t){e.consignerEchec(`MOV-E06`,t),e.afficherToast(`Téléchargement impossible : ${t instanceof Error?t.message:`réseau indisponible`}`,`alerte`)}}function vi(e,t,n){let r=e.images??[];if(!r.length)return;let i=new Set,a=e=>{e?.type===`fichier`&&i.add(e.imageId)};for(let e of n)a(e.couverture);for(let e of t)for(let t of e.familles)a(t.couverture);let o=r.filter(e=>i.has(e.id));return o.length?structuredClone(o):void 0}function yi(e,t,n=new Set([`local`]),r,i={}){let a=e.disciplines.find(e=>e.id===t);if(!a)throw new V(`Discipline introuvable`);let o=e=>!r||r.has(e),s=e.contributions.filter(e=>e.provenance!==`personnel`&&e.techniqueId!==null&&o(e.techniqueId)&&n.has(I(e))),c=new Set(s.map(e=>e.techniqueId)),l=e.techniques.filter(e=>e.disciplineId===t&&o(e.id)&&(n.has(I(e))||c.has(e.id))),u=new Set(l.map(e=>e.id)),d=[],f=l.map(e=>{let t=structuredClone(e);return t.relations=e.relations.filter(t=>u.has(t.cibleId)?!0:(d.push({techniqueId:e.id,techniqueNom:e.nom,type:t.type,cibleId:t.cibleId}),!1)),t}),p={versionSchema:e.versionSchema,typesRelation:structuredClone(e.typesRelation),...e.typesAlerte?{typesAlerte:structuredClone(e.typesAlerte)}:{},disciplines:[structuredClone(a)],techniques:f,contributions:structuredClone(s.filter(e=>u.has(e.techniqueId))),compositions:structuredClone(e.compositions.filter(e=>{let t=e.blocs.filter(e=>e.type===`technique`&&e.techniqueId),r=t.length>0&&t.every(e=>u.has(e.techniqueId));return e.provenance===`personnel`?(i.compositionsPersonnelles??!1)&&r:r||n.has(I(e))})),favoris:[]},m=vi(e,p.disciplines,p.techniques);return m&&(p.images=m),Mr(p),{extrait:p,relationsExclues:d}}function bi(e,t){let n=e.techniques.find(e=>e.id===t);if(!n)throw new V(`Technique introuvable`);let r=e.disciplines.find(e=>e.id===n.disciplineId);if(!r)throw new V(`Discipline introuvable`);let i=e.contributions.filter(e=>e.techniqueId===n.id&&e.provenance!==`personnel`),a=[],o=structuredClone(n);o.relations=n.relations.filter(e=>e.cibleId===n.id?!0:(a.push({techniqueId:n.id,techniqueNom:n.nom,type:e.type,cibleId:e.cibleId}),!1));let s={versionSchema:e.versionSchema,typesRelation:structuredClone(e.typesRelation),...e.typesAlerte?{typesAlerte:structuredClone(e.typesAlerte)}:{},disciplines:[structuredClone(r)],techniques:[o],contributions:structuredClone(i),compositions:[],favoris:[]},c=vi(e,s.disciplines,s.techniques);return c&&(s.images=c),Mr(s),{extrait:s,relationsExclues:a}}function xi(e,t){let n=e.compositions.find(e=>e.id===t);if(!n)throw new V(`Composition introuvable`);let r=new Set(n.blocs.filter(e=>e.type===`technique`&&e.techniqueId).map(e=>e.techniqueId)),i=e.techniques.filter(e=>r.has(e.id)),a=new Set(i.map(e=>e.disciplineId)),o={versionSchema:e.versionSchema,typesRelation:structuredClone(e.typesRelation),disciplines:structuredClone(e.disciplines.filter(e=>a.has(e.id))),techniques:structuredClone(i),contributions:[],compositions:[structuredClone(n)],favoris:[]},s=vi(e,o.disciplines,o.techniques);return s&&(o.images=s),Mr(o),o}function Si(e){return`pack-${U(e)}`}function Ci(e){return`pack-${e}`}function wi(e){let{avecVideos:t,nbManquants:n}=e,r=t&&n===0,i=[];return t?n>0&&i.push(`${n} vidéo${n>1?`s`:``} absente${n>1?`s`:``} du stockage`):i.push(`toutes les vidéos (fichier léger)`),i.push(`les réglages d'appareil (thème, démarrage, protections — se reconfigurent après restauration)`),{complete:r,role:r?`Sauvegarde complète de cette installation`:`Sauvegarde PARTIELLE de cette installation`,exclusions:i}}var Ti=`modulepreload`,Ei=function(e,t){return new URL(e,t).href},Di={},Oi=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=Ei(t,n),t=s(t),t in Di)return;Di[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:Ti,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})};function ki(e,t){let n=URL.createObjectURL(e),r=document.createElement(`a`);r.href=n,r.download=t,r.click(),setTimeout(()=>URL.revokeObjectURL(n),6e4)}async function Ai(e,t){let n=!1;try{let{Capacitor:e}=await Oi(async()=>{let{Capacitor:e}=await import(`./dist-sZ8V2geg.js`);return{Capacitor:e}},[],import.meta.url);if(n=!!e?.isNativePlatform?.(),n)return await Ni(t,`documents`,`Movenso/${t.name}`),`Documents/Movenso/${t.name}`}catch{if(n)return await ji(e,t,t.name,`Movenso — ${t.name}`),`le partage — choisis « Enregistrer dans Fichiers »`}return ki(t,t.name),`tes téléchargements`}async function ji(e,t,n,r){try{let{Capacitor:i}=await Oi(async()=>{let{Capacitor:e}=await import(`./dist-sZ8V2geg.js`);return{Capacitor:e}},[],import.meta.url);if(i?.isNativePlatform?.()){let{Filesystem:i,Directory:a}=await Oi(async()=>{let{Filesystem:e,Directory:t}=await import(`./esm-BIhdpn9A.js`);return{Filesystem:e,Directory:t}},__vite__mapDeps([0,1]),import.meta.url),{Share:o}=await Oi(async()=>{let{Share:e}=await import(`./esm-EMPzBRjr.js`);return{Share:e}},__vite__mapDeps([2,1]),import.meta.url);await Ni(t,`cache`,t.name);let{uri:s}=await i.getUri({path:t.name,directory:a.Cache});await o.share({title:n,text:r,url:s}),e.afficherToast(`Partagé ✓`);return}}catch(e){if(e instanceof Error&&/cancel/i.test(e.message))return}let i=navigator;if(i.share&&i.canShare?.({files:[t]}))try{await i.share({files:[t],title:n,text:r}),e.afficherToast(`Partagé ✓`);return}catch(e){if(e instanceof DOMException&&e.name===`AbortError`)return}ki(t,t.name),e.afficherToast(`Fichier .movpack enregistré dans tes téléchargements — joins-le depuis WhatsApp, Drive ou un mail.`)}async function Mi(e){let t=new Uint8Array(await e.arrayBuffer()),n=``,r=32768;for(let e=0;e<t.length;e+=r)n+=String.fromCharCode(...t.subarray(e,e+r));return btoa(n)}async function Ni(e,t,n){let{Filesystem:r,Directory:i}=await Oi(async()=>{let{Filesystem:e,Directory:t}=await import(`./esm-BIhdpn9A.js`);return{Filesystem:e,Directory:t}},__vite__mapDeps([0,1]),import.meta.url),a=t===`documents`?i.Documents:i.Cache,o=3*1024*1024;if(e.size===0){await r.writeFile({path:n,data:``,directory:a,recursive:!0});return}let s=!0;for(let t=0;t<e.size;t+=o){let i=await Mi(e.slice(t,t+o));s?(await r.writeFile({path:n,data:i,directory:a,recursive:!0}),s=!1):await r.appendFile({path:n,data:i,directory:a})}}var Pi={"MOV-E01":`export .movpack`,"MOV-E02":`lecture d'un pack`,"MOV-E03":`installation d'un pack`,"MOV-E04":`restauration complète`,"MOV-E05":`restauration de sauvegarde interne`,"MOV-E06":`téléchargement de pack officiel`,"MOV-E98":`promesse non gérée`,"MOV-E99":`erreur non gérée`};function Fi(e){return`${(e/(1<<20)).toFixed(1)} Mo`}function Ii(e){return[`Movenso — diagnostic technique`,`généré : ${e.genereLe}`,`plateforme : ${e.plateforme}`,`version de l'application : ${e.versionApp}`,`version du schéma : ${e.versionSchema}`,`version du conteneur .movpack : ${e.versionMovpack}`,``,`Contenu :`,`  disciplines : ${e.disciplines}`,`  techniques : ${e.techniques}`,`  contributions : ${e.contributions}`,`  compositions : ${e.compositions}${e.compositionsARoles?` (dont ${e.compositionsARoles} à plusieurs rôles)`:``}`,`  favoris : ${e.favoris}`,...e.relations===void 0?[]:[`  relations entre techniques : ${e.relations}`],``,`Médias :`,`  références locales : ${e.mediasReferences}`,`  fichiers présents : ${e.mediasPresents}`,`  vidéos manquantes (référencées, fichier absent) : ${e.mediasManquants}`,`  fichiers orphelins (présents, plus référencés) : ${e.orphelins}`,``,`Stockage :`,e.espace?`  utilisé : ${Fi(e.espace.usage)} / quota estimé : ${Fi(e.espace.quota)}`:`  estimation indisponible sur cet appareil`,...e.sauvegardes?[`  sauvegardes internes : ${e.sauvegardes.nombre}${e.sauvegardes.derniere?` (dernière : ${e.sauvegardes.derniere})`:``}`]:[],``,...e.packs?[`Sources du contenu (« local » = créé sur l'appareil) :`,...e.packs.length?e.packs.map(e=>`  ${e.id} : ${e.techniques} technique${e.techniques>1?`s`:``}`):[`  aucune`],``]:[],...e.capacites?[`Capacités de la plateforme :`,...Object.entries(e.capacites).map(([e,t])=>`  ${e} : ${typeof t==`boolean`?t?`oui`:`non`:t}`),``]:[],...e.reglages?[`Réglages actifs (hors protections) :`,...Object.entries(e.reglages).map(([e,t])=>`  ${e} : ${t}`),``]:[],`Opération longue :`,e.operationLongue?e.operationLongue.fin?`  ${e.operationLongue.libelle} — terminée (${e.operationLongue.debut} → ${e.operationLongue.fin})`:`  ${e.operationLongue.libelle} — ENCORE EN COURS au moment du diagnostic (démarrée ${e.operationLongue.debut})`:`  aucune depuis le démarrage`,``,`Dernier échec :`,e.dernierEchec?`  [${e.dernierEchec.code}] ${e.dernierEchec.operation} — ${e.dernierEchec.message} (${e.dernierEchec.quand})`:`  aucun depuis le démarrage`,``,`Ce diagnostic ne rapporte que des informations techniques agrégées et les`,`identifiants éditoriaux des packs installés : aucune donnée personnelle,`,`aucun réglage de protection, aucun nom de technique ou de composition,`,`aucun contenu de média, aucune adresse privée.`].join(`
`)}var Li=`0.9.0-rc.1`,Ri=`9c01446`,zi=e=>String(e).padStart(2,`0`);function Bi(e){return`${e.getFullYear()}-${zi(e.getMonth()+1)}-${zi(e.getDate())}-${zi(e.getHours())}h${zi(e.getMinutes())}`}function Vi(e,t){return`movenso-${e?`complet`:`partiel`}-${Bi(t)}.movpack`}var Hi=!1,Ui=1<<20;function Wi(e){Hi=!0}async function Gi(e,t){let n=await e.stockage.listerVideos();return[...Ue(t)].filter(e=>n.has(e))}async function Ki(e,t,n,r,i,a=!0){await e.stockage.nettoyerArchivesTemp();let o=await e.stockage.taillesVideos();if(!vt(e,r.reduce((e,t)=>e+(o.get(t)??0),0),await e.stockage.estimerEspace()))return null;let s=`export-${Date.now()}.movpack`,c;try{c=await e.stockage.ouvrirArchiveTemp(s)}catch{return e.afficherToast(`Export impossible : stockage temporaire indisponible sur cet appareil`,`alerte`),null}Hi=!1,e.progressionExport={fait:0,total:r.length},e.annulationOccupe={libelle:`Annuler`,executer:()=>e.annulerExport()},e.operationLongue={libelle:`Export de ${i}`,debut:new Date().toISOString(),fin:null},e.requestUpdate();try{await Ir(t,n,r,t=>e.stockage.lireMediaParBlocs(t,Ui),{ecrire:e=>c.write(e)},{creeLe:new Date().toISOString(),images:await e.stockage.octetsImages(t),estAnnule:()=>Hi,surProgression:(t,n)=>{e.progressionExport={fait:t,total:n},e.requestUpdate()}}),await c.close()}catch(t){try{await c.close()}catch{}return await e.stockage.supprimerArchiveTemp(s),e.progressionExport=null,e.annulationOccupe=null,e.operationLongue&&e.operationLongue.fin===null&&(e.operationLongue={...e.operationLongue,fin:new Date().toISOString()}),e.requestUpdate(),Hi||e.consignerEchec(`MOV-E01`,t),Hi?e.afficherToast(`Export annulé — rien n'a été téléchargé`):e.afficherToast(t instanceof Error?t.message:`Export échoué`,`alerte`),null}let l=await e.stockage.fichierArchiveTemp(s),u=l.size;return a&&ki(l,i),e.progressionExport=null,e.annulationOccupe=null,e.operationLongue&&e.operationLongue.fin===null&&(e.operationLongue={...e.operationLongue,fin:new Date().toISOString()}),e.requestUpdate(),{taille:u,fichier:new File([l],i,{type:`application/octet-stream`})}}async function qi(e,t=!0){if(!e.garde(`destruction_ou_sensible`,`Saisis le PIN pour créer une sauvegarde.`,()=>void e.exporterTout(t)))return;let n=e.bibliotheque;if(!n)return;let r=Ue(n),i=await e.stockage.listerVideos(),a=[...r].filter(e=>!i.has(e)),o=t?[...r].filter(e=>i.has(e)):[],s=wi({avecVideos:t,nbManquants:a.length}),c=Vi(s.complete,new Date),l=await Ki(e,n,{id:`movenso-export-complet`,nom:s.complete?`Sauvegarde complète Movenso`:`Sauvegarde partielle Movenso`,portee:`complet`},o,c,!1);if(l===null)return;let u=l.taille,d=await Ai(e,l.fichier),f=`${n.disciplines.length} discipline${n.disciplines.length>1?`s`:``}, ${n.techniques.length} techniques, ${n.contributions.length} contenus, ${n.compositions.length} composition${n.compositions.length>1?`s`:``}, ${n.favoris.length} favori${n.favoris.length>1?`s`:``}, ${o.length} vidéo${o.length>1?`s`:``}`;e.dernierFichier={role:s.role,nom:c,taille:u,resume:`${f} — EXCLUS : ${s.exclusions.join(` ; `)}`},e.afficherToast(s.complete?`Sauvegarde complète ✓ — enregistrée dans ${d}`:`Sauvegarde PARTIELLE ✓ (exclut ${s.exclusions[0]}) — dans ${d}`)}async function Ji(e,t,n){if(!e.garde(`destruction_ou_sensible`,`Saisis le PIN pour préparer ce pack.`,()=>void e.preparerPublication(t,n)))return;let r=e.bibliotheque,i=r?.disciplines.find(e=>e.id===t);if(!r||!i)return;let a=new Set([`local`]);for(let e of r.techniques)e.disciplineId===t&&e.origine&&a.add(e.origine.pack);for(let e of r.contributions)(e.techniqueId?r.techniques.find(t=>t.id===e.techniqueId):void 0)?.disciplineId===t&&e.origine&&a.add(e.origine.pack);let o=Qi(e,`Publication`,()=>yi(r,t,a,n.techniques,{compositionsPersonnelles:n.compositionsPersonnelles??!1}));if(!o)return;let{extrait:s,relationsExclues:c}=o;if(s.techniques.length===0){e.afficherToast(`Rien à publier — sélectionne au moins une technique`,`alerte`);return}let l=n.nom?.trim()||i.nom,u=n.avecVideos?await Gi(e,s):[],d=`${Si(l)}.movpack`,f=await Ki(e,s,{id:Ci(i.id),nom:l,portee:`discipline`,...n.auteur?.trim()?{auteur:n.auteur.trim()}:{},...n.note?.trim()?{conditions:n.note.trim()}:{}},u,d,!1);f!==null&&(e.publicationPrete={fichier:f.fichier,nomFichier:d,taille:f.taille,nomPack:l,resume:`${s.techniques.length} technique${s.techniques.length>1?`s`:``}${u.length?`, ${u.length} vidéo${u.length>1?`s`:``}`:` (sans vidéo)`} — sans carnet ni favoris${c.length?` ; ${c.length} relation${c.length>1?`s`:``} hors périmètre exclue${c.length>1?`s`:``}`:``}`},e.requestUpdate())}async function Yi(e){let t=e.publicationPrete;if(!t)return;let n=await Ai(e,t.fichier);e.afficherToast(`« ${t.nomPack} » enregistré (${_t(t.taille)}) dans ${n}`),e.publicationPrete=null,e.requestUpdate()}async function Xi(e){let t=e.publicationPrete;t&&await ji(e,t.fichier,t.nomPack,`Pack « ${t.nomPack} » — Movenso`)}function Zi(e){e.publicationPrete=null,e.requestUpdate()}function Qi(e,t,n){try{return n()}catch(n){return e.afficherToast(`${t} impossible : ${n instanceof Error?n.message:`état inattendu`}`,`alerte`),null}}async function $i(e,t){let n=e.bibliotheque,r=n?.techniques.find(e=>e.id===t);if(!n||!r)return;let i;try{({extrait:i}=bi(n,t))}catch{e.partagerTechnique(t);return}let a=await e.stockage.listerVideos(),o=[...Ue(i)].filter(e=>a.has(e));if(o.length===0){e.partagerTechnique(t);return}let s=i.contributions.flatMap(e=>e.medias).filter(e=>e.type===`lien`||e.type===`plateforme`).length,c=await e.stockage.taillesVideos(),l=o.reduce((e,t)=>e+(c.get(t)??0),0);e.partagePreparation={techniqueId:t,nom:r.nom,avecVideos:!0,nbLiens:s,nbLocales:o.length,octetsLocaux:l}}async function ea(e){let t=e.partagePreparation;t&&(e.partagePreparation=null,await e.partagerTechnique(t.techniqueId,t.avecVideos))}async function ta(e,t,n=!0){let r=e.bibliotheque,i=r?.techniques.find(e=>e.id===t);if(!r||!i)return;let a=Qi(e,`Partage`,()=>bi(r,t));if(!a)return;let{extrait:o}=a,s=Ue(o),c=await e.stockage.listerVideos(),l=n?[...s].filter(e=>c.has(e)):[],u=`${Si(i.nom)}.movpack`,d=await Ki(e,o,{id:`technique-${i.id}`,nom:i.nom,portee:`discipline`},l,u,!1);d!==null&&await ji(e,d.fichier,i.nom,`Technique « ${i.nom} » — Movenso`)}async function na(e,t){let n=new Map;for(let e of t.techniques){let t=I(e),r=n.get(t)??{id:t,techniques:0};r.techniques+=1,n.set(t,r)}let r=await e.stockage.listerSauvegardes().catch(()=>[]),i=navigator,a=e.preferences;return{packs:[...n.values()].sort((e,t)=>e.id.localeCompare(t.id)),sauvegardes:{nombre:r.length,derniere:r.length?r[r.length-1]??null:null},relations:t.techniques.reduce((e,t)=>e+t.relations.length,0),compositionsARoles:t.compositions.filter(e=>(e.acteurs?.length??0)>=2).length,capacites:{"stockage OPFS":typeof navigator.storage?.getDirectory==`function`,"stockage persistant accordé":await navigator.storage?.persisted?.().catch(()=>!1)??!1,"verrou d'écran (wake lock)":`wakeLock`in navigator,"partage natif":typeof i.share==`function`,"synthèse vocale web":window.speechSynthesis!==void 0,"requêtes de conteneur CSS":typeof CSS<`u`&&CSS.supports?.(`container-type: inline-size`),langue:navigator.language},reglages:{"mode avancé":a.modeAvance??!1?`oui`:`non`,"bêta Relations":a.vueRelationBeta??!1?`oui`:`non`,"bêta Compositions":a.compositionsBeta??!1?`oui`:`non`,thème:a.theme??`auto`,"écran de démarrage":a.demarrage?.mode??`bibliotheque`,"son des séances":a.sonSeance??`les-deux`}}}async function ra(e){let t=e.bibliotheque;if(!t)return;let n=await e.stockage.listerVideos(),r=Ue(t),i=window.Capacitor,a=Ii({genereLe:new Date().toISOString(),plateforme:i?.getPlatform?.()??`web`,versionApp:`${Li}+${Ri}`,versionSchema:6,versionMovpack:5,disciplines:t.disciplines.length,techniques:t.techniques.length,contributions:t.contributions.length,compositions:t.compositions.length,favoris:t.favoris.length,mediasReferences:r.size,mediasPresents:n.size,mediasManquants:[...r].filter(e=>!n.has(e)).length,dernierEchec:e.dernierEchec,operationLongue:e.operationLongue,orphelins:[...n].filter(e=>!r.has(e)).length,espace:await e.stockage.estimerEspace(),...await na(e,t)}),o=`movenso-diagnostic-${Bi(new Date)}.txt`,s=await Ai(e,new File([`﻿`+a],o,{type:`text/plain;charset=utf-8`}));e.afficherToast(`Diagnostic enregistré dans ${s} — informations techniques uniquement, aucun secret`)}function ia(e){let t=Math.max(0,Math.round(e)),n=Math.floor(t/60),r=t%60;if(n===0)return`${r} seconde${r>1?`s`:``}`;let i=`${n} minute${n>1?`s`:``}`;return r===0?i:`${i} ${r}`}function aa(e,t){return e>=60&&t===Math.round(e/2)?`mi-temps`:e>40&&t===30?`30 secondes`:e>12&&t===10?`10 secondes`:null}function oa(e,t){return e.compositions.filter(e=>e.blocs.some(e=>e.type===`technique`&&e.techniqueId===t))}function sa(e,t=`personnel`,n){return{id:it(),nom:e,provenance:t,creeLe:new Date().toISOString(),...n?{type:n}:{},blocs:[]}}function ca(e,t={}){return{id:it(),type:e,...t.techniqueId===void 0?{}:{techniqueId:t.techniqueId},...t.texte===void 0?{}:{texte:t.texte},...t.consigne===void 0?{}:{consigne:t.consigne},...t.dureeSec===void 0?{}:{dureeSec:t.dureeSec},...t.acteurId===void 0?{}:{acteurId:t.acteurId},...t.lien?{lien:!0}:{},medias:[]}}function la(e,t){if(t.acteurId)return e.acteurs?.find(e=>e.id===t.acteurId)}function ua(e){let t=e.acteurs??[];if(t.length===0)return;let n=[...e.blocs].reverse().find(e=>e.acteurId);if(!n)return t[0].id;let r=t.findIndex(e=>e.id===n.acteurId);return r<0?t[0].id:t[(r+1)%t.length].id}function da(e){return e.lien===!0||e.lien===`simultane`}function fa(e){let t=[];for(let n of e.blocs){if(n.type===`media`)continue;let e=t.at(-1);da(n)&&e?e.blocs.push(n):t.push({numero:t.length+1,blocs:[n]})}return t}function pa(e){let t=!1;for(let n of e.blocs){if(n.type===`media`){delete n.lien;continue}da(n)&&t?n.lien=!0:delete n.lien,t=!0}}function ma(e,t){let n=e.blocs.findIndex(e=>e.id===t);if(n<0)return;let r=e.blocs[n],i=e.blocs[n+1];!da(r)&&i&&da(i)&&delete i.lien,e.blocs.splice(n,1),pa(e)}function ha(e){return(e.acteurs?.length??0)>=2||e.blocs.some(e=>e.lien!==void 0)}function ga(e,t){let n=e.acteurs??[],r=n.map(()=>[]),i=[];for(let e of t.blocs){let t=e.acteurId?n.findIndex(t=>t.id===e.acteurId):-1;t>=0?r[t].push(e):i.push(e)}return{colonnes:r,neutres:i}}function _a(e,t){e.blocs.forEach((e,n)=>{let r=t[n];r===void 0?delete e.lien:e.lien=r}),pa(e)}function va(e,t,n){if(t===n)return;let r=e.blocs.findIndex(e=>e.id===t);if(r<0)return;let i=e.blocs.map(e=>e.lien),[a]=e.blocs.splice(r,1),o=e.blocs.findIndex(e=>e.id===n);if(o<0){e.blocs.splice(r,0,a);return}e.blocs.splice(o,0,a),_a(e,i)}function ya(e){if(e<60)return`${Math.round(e)} s`;let t=Math.round(e/60);if(t<60)return`${t} min`;let n=Math.floor(t/60),r=t%60;return r?`${n} h ${`${r}`.padStart(2,`0`)}`:`${n} h`}function ba(e){return e.blocs.reduce((e,t)=>e+(t.dureeSec??0),0)}function xa(e,t,n=6){let r;for(let n=(t?.blocs.length??0)-1;n>=0&&!r;n--){let i=t.blocs[n].techniqueId;r=i?e.techniques.find(e=>e.id===i)?.disciplineId:void 0}return!r&&e.disciplines.length===1&&(r=e.disciplines[0].id),r?e.techniques.filter(e=>e.disciplineId===r).slice(0,n):[]}function Sa(e){let t=(e.texte??``).trim();return e.type===`etape`&&e.dureeSec===void 0&&/^[—–-].*[—–-]$/.test(t)}function Ca(e){return(e.texte??``).replace(/^[—–-]\s*/,``).replace(/\s*[—–-]$/,``).trim()}function wa(e){return e.blocs.filter(e=>e.type!==`media`&&!Sa(e)).length}var Ta=null;function Ea(e){(!Ta||!Ta.isConnected)&&(Ta=document.createElement(`div`),Ta.className=`annonce-lecteur`,Ta.setAttribute(`role`,`status`),Ta.setAttribute(`aria-live`,`polite`),document.body.append(Ta)),Ta.textContent=``,requestAnimationFrame(()=>{Ta&&(Ta.textContent=e)})}function Da(e,t,n,r){let i=r.ordre(),a=i.indexOf(t);if(a<0)return;let o=a+n;if(o<0||o>=i.length){Ea(`${r.nom(t)} est déjà en ${n<0?`première`:`dernière`} position.`);return}n<0?r.reordonner(t,i[o]):r.reordonner(i[o],t),r.enregistrer(),Ea(`${r.nom(t)}, position ${o+1} sur ${i.length}.`),e.requestUpdate()}function Oa(e,t,n){let r=n.ordre();if(r.length<2)return F;let i=r.indexOf(t),a=n.nom(t);return P`<span class="boutons-reordre">
    <button type="button" class="bouton-icone" aria-label="Monter ${a}" title="Monter"
      ?disabled=${i<=0} @click=${()=>Da(e,t,-1,n)}>▲</button>
    <button type="button" class="bouton-icone" aria-label="Descendre ${a}" title="Descendre"
      ?disabled=${i>=r.length-1} @click=${()=>Da(e,t,1,n)}>▼</button>
  </span>`}var ka={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Aa=e=>(...t)=>({_$litDirective$:e,values:t}),ja=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}},{I:Ma}=Ee,Na=e=>e.strings===void 0,Pa={},Fa=(e,t=Pa)=>e._$AH=t,Ia=Aa(class extends ja{constructor(){super(...arguments),this.key=F}render(e,t){return this.key=e,t}update(e,[t,n]){return t!==this.key&&(Fa(e),this.key=t),n}}),La=(e,t)=>{let n=e._$AN;if(n===void 0)return!1;for(let e of n)e._$AO?.(t,!1),La(e,t);return!0},Ra=e=>{let t,n;do{if((t=e._$AM)===void 0)break;n=t._$AN,n.delete(e),e=t}while(n?.size===0)},za=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(n===void 0)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),Ha(t)}};function Ba(e){this._$AN===void 0?this._$AM=e:(Ra(this),this._$AM=e,za(this))}function Va(e,t=!1,n=0){let r=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(r))for(let e=n;e<r.length;e++)La(r[e],!1),Ra(r[e]);else r!=null&&(La(r,!1),Ra(r));else La(this,e)}var Ha=e=>{e.type==ka.CHILD&&(e._$AP??=Va,e._$AQ??=Ba)},Ua=class extends ja{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,n){super._$AT(e,t,n),za(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(La(this,e),Ra(this))}setValue(e){if(Na(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}},Wa=new WeakMap,Ga=Aa(class extends Ua{render(e){return F}update(e,[t]){let n=t!==this.G;return n&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),F}rt(e){if(this.G!==void 0)if(this.isConnected||(e=void 0),typeof this.G==`function`){let t=this.ht??globalThis,n=Wa.get(t);n===void 0&&(n=new WeakMap,Wa.set(t,n)),n.get(this.G)!==void 0&&this.G.call(this.ht,void 0),n.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G==`function`?Wa.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});function Ka(e,t){return e?.libelle??t}function qa(e,t){return e?e.symetrique?e.libelle:e.libelleInverse??`${e.libelle} (inverse)`:t}function Ja(e,t){let n=e?.role??`peer`;return t?n:n===`after`?`before`:n===`before`?`after`:n}function Ya(e,t){let n=new Map(e.typesRelation.map(e=>[e.id,e])),r=new Set(e.techniques.map(e=>e.id)),i=[],a=new Set,o=(e,t,o,s,c,l)=>{let u=`${e}:${s}`;if(a.has(u))return;a.add(u);let d={libelle:e,typeId:t,directe:o,techniqueId:s,presente:r.has(s),role:Ja(n.get(t),o)};c!==void 0&&(d.note=c),l!==void 0&&(d.priorite=l),i.push(d)},s=e.techniques.find(e=>e.id===t);for(let e of s?.relations??[])o(Ka(n.get(e.type),e.type),e.type,!0,e.cibleId,e.note,e.priorite);for(let r of e.techniques)if(r.id!==t)for(let e of r.relations)e.cibleId===t&&o(qa(n.get(e.type),e.type),e.type,!1,r.id,e.note,e.priorite);return i}var Xa=new Set([`youtube.com`,`www.youtube.com`,`m.youtube.com`,`music.youtube.com`,`www.youtube-nocookie.com`,`youtu.be`]);function Za(e){return/^[A-Za-z0-9_-]{6,20}$/.test(e)}function Qa(e){let t=null;return t=e.hostname===`youtu.be`?e.pathname.slice(1).split(`/`)[0]||null:e.pathname===`/watch`?e.searchParams.get(`v`):e.pathname.match(/^\/(?:shorts|embed|live|v)\/([^/]+)/)?.[1]??null,t&&Za(t)?t:null}function $a(e){let t=e.trim();if(!t)return{ok:!1,raison:`Lien vide.`};let n;try{n=new URL(t)}catch{return{ok:!1,raison:`Ce n'est pas une adresse valide (attendu : https://…).`}}if(n.protocol!==`https:`)return{ok:!1,raison:n.protocol===`http:`?`Seuls les liens https sont acceptés — ce site existe sans doute en https.`:`Protocole refusé (${n.protocol.replace(`:`,``)}) — seuls les liens https sont acceptés.`};if(Xa.has(n.hostname.toLowerCase())){let e=Qa(n);if(e)return{ok:!0,type:`plateforme`,service:`youtube`,ref:e,url:n.toString()}}return{ok:!0,type:`lien`,ref:n.toString(),url:n.toString()}}function eo(e){if(!e)return null;try{let t=new URL(e.trim());return t.protocol===`https:`?t.toString():null}catch{return null}}function to(e){let t=eo(e);if(!t)return null;try{return new URL(t).hostname.replace(/^www\./,``)}catch{return null}}function no(e,t){if(!t.familleId)return null;let n=(e.bibliotheque?.disciplines.find(e=>e.id===t.disciplineId))?.familles.find(e=>e.id===t.familleId)?.couverture;return n?.type===`fichier`?Ye(n.imageId):null}function ro(e,t,n){let r=P`<span class="vignette-initiale">${t.nomTraditionnel?.charAt(0)??t.nom.charAt(0)}</span>`,i=e=>e.target.style.display=`none`,a=t.couverture?.type===`fichier`?Ye(t.couverture.imageId):null;if(a)return P`<span class="vignette">${r}<img loading="lazy" src=${a} alt="" @error=${i}></span>`;let o=no(e,t);if(o)return P`<span class="vignette">${r}<img loading="lazy" src=${o} alt="" @error=${i}></span>`;let s;if(t.couverture?.type===`media`){let n=t.couverture.mediaId;s=e.bibliotheque.contributions.filter(e=>e.techniqueId===t.id).flatMap(e=>e.medias).find(e=>e.id===n)}let c=e.bibliotheque.contributions.filter(e=>e.techniqueId===t.id&&e.provenance!==`personnel`).flatMap(e=>e.medias.map(t=>({media:t,source:I(e)}))).filter(e=>e.media.type===`plateforme`&&e.media.service===`youtube`),l=s??(n?c.find(e=>e.source===n)?.media:void 0)??c[0]?.media;return P`<span class="vignette">
    ${r}
    ${(e.preferences.vignettesDistantes??!1)&&l&&l.type===`plateforme`&&l.service===`youtube`&&Za(l.ref)?P`<img loading="lazy" src="https://img.youtube.com/vi/${l.ref}/mqdefault.jpg" alt="" @error=${i}>`:F}
  </span>`}function io(e){return P`<span class="puce-niveau" style="background:${e.couleur?e.couleur2?`linear-gradient(90deg, ${e.couleur} 50%, ${e.couleur2} 50%)`:e.couleur:`var(--trait)`}" title=${e.nom}></span>`}var W={recherche:``,vue:`liste`,bienvenue:!1,filtre:null,tri:`pertinence`,plein:!1,exIntent:null,exChemin:[],exCompare:null,mmCherche:!1,carteDeplie:new Set,carteMasque:new Set,carteRoleDeplie:new Set},G=[],ao=[];function oo(e,t){let n=G.lastIndexOf(t);G=n>=0?G.slice(0,n+1):[...G,t],ao=[],e.recentrerRelations(t)}function so(e){G.length<=1||(ao=[G[G.length-1],...ao],G=G.slice(0,-1),e.recentrerRelations(G[G.length-1]))}function co(e){let t=ao[0];t&&(ao=ao.slice(1),G=[...G,t],e.recentrerRelations(t))}function lo(e){if(G.length===0){G=[e];return}if(G[G.length-1]===e)return;let t=G.lastIndexOf(e);G=t>=0?G.slice(0,t+1):[...G,e],ao=[]}function uo(e,t){return t.familleId?e.disciplines.find(e=>e.id===t.disciplineId)?.familles.find(e=>e.id===t.familleId)?.nom??``:``}function fo(e){return`role--${e}`}function po(e,t){let n=e.technique(t)?.alertes?.[0];return n?P`<span class="rel-alerte" title=${n.libelle}>⚠️</span>`:F}function mo(e){let t=e=>P`<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">${de`<path d=${e}></path>`}</svg>`;switch(e){case`before`:return t(`M20 12H6M11 6l-6 6 6 6`);case`after`:return t(`M4 12h14M13 6l6 6-6 6`);case`opposition`:return t(`M12 3l7 3v5c0 4.2-2.9 7.7-7 8.9C7.9 18.7 5 15.2 5 11V6z`);case`peer`:return t(`M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 17l-5.2 2.7 1-5.8L3.5 9.7l5.9-.9z`);case`context`:return t(`M4 5h11a3 3 0 013 3v11M4 5v11a3 3 0 003 3h12M4 5l4 3`);default:return t(`M4 12h14M13 6l6 6-6 6`)}}var ho=[`before`,`after`,`opposition`,`peer`,`context`];function go(e){let t=new Map;for(let n of e)t.set(n.libelle,[...t.get(n.libelle)??[],n]);return[...t.entries()].map(([e,t])=>({libelle:e,role:t[0].role,liste:t})).sort((e,t)=>ho.indexOf(e.role)-ho.indexOf(t.role)||e.libelle.localeCompare(t.libelle,`fr`))}function _o(e,t){let n=t=>e.technique(t.techniqueId)?.nom??``;return[...t].map((e,t)=>({l:e,i:t})).sort((e,t)=>W.tri===`alpha`?n(e.l).localeCompare(n(t.l),`fr`)||e.i-t.i:(e.l.priorite??1/0)-(t.l.priorite??1/0)||e.i-t.i).map(e=>e.l)}function vo(e){switch(e){case`before`:return`var(--role-before)`;case`after`:return`var(--role-after)`;case`opposition`:return`var(--role-opposition)`;case`peer`:return`var(--role-peer)`;case`context`:return`var(--role-context)`;default:return`var(--sourdine)`}}var yo=306,bo=276,xo=164,So=196,Co={before:{axe:`v`,ax:-306,ay:0},after:{axe:`v`,ax:yo,ay:0},peer:{axe:`h`,ax:0,ay:-276},opposition:{axe:`h`,ax:0,ay:bo},context:{axe:`v`,ax:-306,ay:bo}};function wo(e,t,n){return e.axe===`v`?{x:e.ax,y:e.ay-(n-1)*xo/2+t*xo}:{x:e.ax-(n-1)*So/2+t*So,y:e.ay}}function To(e,t,n){if(n===`before`||n===`after`){let n=e.x+(t.x<e.x?-e.w/2:e.w/2),r=e.y,i=t.x+(t.x<e.x?t.w/2:-t.w/2),a=t.y,o=(n+i)/2;return`M${n} ${r} C ${o} ${r} ${o} ${a} ${i} ${a}`}let r=e.y+(t.y<e.y?-e.h/2:e.h/2),i=e.x,a=t.y+(t.y<e.y?t.h/2:-t.h/2),o=t.x,s=(r+a)/2;return`M${i} ${r} C ${i} ${s} ${o} ${s} ${o} ${a}`}function Eo(e){return e?150+Math.min(8,Math.ceil(e.length/22))*13:150}function Do(e){for(let t=0;t<120;t++){let t=!1;for(let n=0;n<e.length;n++)for(let r=n+1;r<e.length;r++){let i=e[n],a=e[r],o=a.x-i.x,s=a.y-i.y,c=(i.w+a.w)/2+16-Math.abs(o),l=(i.h+a.h)/2+16-Math.abs(s);if(c<=0||l<=0)continue;let u=c<l,d=Math.sign(u?o||1:s||1),f=u?c:l,p=i.centre?0:a.centre?f:f/2,m=a.centre?0:i.centre?f:f/2;u?(i.x-=d*p,a.x+=d*m):(i.y-=d*p,a.y+=d*m),t=!0}if(!t)break}}var Oo=.3,ko=2.4,Ao={after:`Enchaîne →`,before:`Prépare`,peer:`Voisins`,opposition:`S'oppose`,context:`Appartient à`},jo=.44,Mo=1,No=!1;function Po(e,t,n,r){let i=[],a=new Map,o={x:0,y:0,w:132,h:132,centre:!0,role:null,niveau:0,nom:n.nom,fam:uo(t,n),id:n.id},s=e.technique(n.id)?.alertes?.[0]?.libelle;s&&(o.alerte=s),i.push(o),a.set(n.id,o);let c=new Map;for(let e of r)c.set(e.role,[...c.get(e.role)??[],e]);for(let n of ho){let r=c.get(n);if(!r||r.length===0)continue;let o=_o(e,r),s=W.carteRoleDeplie.has(n)?1/0:3,l=o.length>s?o.slice(0,s-1):o,u=o.length-l.length,d=l.length+ +(u>0),f=Co[n];if(l.forEach((r,o)=>{let s=e.technique(r.techniqueId),c=wo(f,o,d),l={x:c.x,y:c.y,w:176,h:Eo(r.note),role:n,niveau:1,id:r.techniqueId,nom:s?.nom??`(absente)`,fam:s?uo(t,s):``,absente:!r.presente||!s};r.note!==void 0&&(l.note=r.note);let u=s?.alertes?.[0]?.libelle;u&&(l.alerte=u),i.push(l),l.id&&!l.absente&&!a.has(l.id)&&a.set(l.id,l)}),u>0){let e=wo(f,l.length,d);i.push({x:e.x,y:e.y,w:176,h:150,role:n,plus:u,nom:`+${u} autres`,fam:``})}}let l=[];for(let n of W.carteDeplie){let r=a.get(n);if(!r)continue;r.deplie=!0;let o=_o(e,Ya(t,n).filter(e=>e.presente&&!W.carteMasque.has(e.libelle))),s=o.filter(e=>!a.has(e.techniqueId)).slice(0,Math.max(0,Math.min(4,40-i.length))),c=Math.hypot(r.x,r.y)||1,u=r.x/c,d=r.y/c,f=-d,p=u,m=Math.abs(f)*210+Math.abs(p)*190;s.forEach((n,o)=>{let c=e.technique(n.techniqueId);if(!c)return;let h=(o-(s.length-1)/2)*m,g={x:r.x+u*265+f*h,y:r.y+d*265+p*h,w:176,h:Eo(n.note),role:n.role,niveau:(r.niveau??1)+1,id:n.techniqueId,nom:c.nom,fam:uo(t,c)};n.note!==void 0&&(g.note=n.note);let _=c.alertes?.[0]?.libelle;_&&(g.alerte=_),i.push(g),a.set(g.id,g),l.push({de:r,vers:g,role:n.role})});for(let e of o){let t=a.get(e.techniqueId);t&&t!==r&&!s.some(t=>t.techniqueId===e.techniqueId)&&l.push({de:r,vers:t,role:e.role})}}for(let e of i)!e.id||e.absente||e.centre||(e.depl=Ya(t,e.id).filter(e=>e.presente&&!a.has(e.techniqueId)&&!W.carteMasque.has(e.libelle)).length);Do(i);let u=1/0,d=-1/0,f=1/0,p=-1/0;for(let e of i)u=Math.min(u,e.x-e.w/2),d=Math.max(d,e.x+e.w/2),f=Math.min(f,e.y-e.h/2),p=Math.max(p,e.y+e.h/2);let m=48-u,h=48-f,g=new Map,_=i.map(e=>{let t={...e,x:e.x+m,y:e.y+h};return g.set(e,t),t}),v=_[0],y=[];for(let e=1;e<_.length;e++){let t=_[e];(t.role&&(t.niveau??1)===1||t.plus)&&y.push({d:To(v,t,t.role??`peer`),role:t.role??`peer`})}for(let e of l){let t=g.get(e.de),n=g.get(e.vers);y.push({d:To(t,n,e.role),role:e.role})}return{noeuds:_,aretes:y,sceneW:d-u+96,sceneH:p-f+96,hubX:v.x,hubY:v.y}}var K={tx:0,ty:0,k:1,fitId:``},Fo=null,Io=null,Lo={w:1,h:1,hubX:0,hubY:0};function Ro(){Fo&&(Fo.style.transform=`translate(${K.tx}px, ${K.ty}px) scale(${K.k})`)}function zo(){if(!Io)return;let e=Io.getBoundingClientRect();if(!e.width||!e.height)return;let t=Math.max(jo,Math.min(Mo,Math.min(e.width/Lo.w,e.height/Lo.h)));K.k=t,K.tx=e.width/2-Lo.hubX*t,K.ty=e.height/2-Lo.hubY*t,Ro()}function Bo(e,t,n){if(!Io)return;let r=Io.getBoundingClientRect(),i=e-r.left,a=t-r.top,o=Math.max(Oo,Math.min(ko,K.k*n)),s=(i-K.tx)/K.k,c=(a-K.ty)/K.k;K.k=o,K.tx=i-s*o,K.ty=a-c*o,Ro()}function Vo(e){if(!Io)return;let t=Io.getBoundingClientRect();Bo(t.left+t.width/2,t.top+t.height/2,e)}function Ho(e){let[t,n]=[...e.values()];return t&&n?Math.hypot(t.x-n.x,t.y-n.y):0}function Uo(e){let[t,n]=[...e.values()];return t&&n?{x:(t.x+n.x)/2,y:(t.y+n.y)/2}:{x:0,y:0}}function Wo(e){let t=new Map,n=null,r=null,i=0;e.addEventListener(`pointerdown`,i=>{No=!1,t.set(i.pointerId,{x:i.clientX,y:i.clientY}),t.size===1?(n={x:i.clientX,y:i.clientY},r=null):t.size===2&&(n=null,r={dist:Ho(t)}),e.classList.add(`grab`)}),e.addEventListener(`pointermove`,i=>{if(t.has(i.pointerId)){if(t.set(i.pointerId,{x:i.clientX,y:i.clientY}),t.size>=2&&r){let e=Ho(t),n=Uo(t);r.dist>0&&Bo(n.x,n.y,e/r.dist),r.dist=e,No=!0}else if(n){let t=i.clientX-n.x,r=i.clientY-n.y;if(!No&&Math.abs(t)+Math.abs(r)>6){No=!0;try{e.setPointerCapture(i.pointerId)}catch{}}K.tx+=t,K.ty+=r,n={x:i.clientX,y:i.clientY},Ro()}}});let a=i=>{t.delete(i.pointerId);try{e.releasePointerCapture(i.pointerId)}catch{}if(t.size===1){let[e]=[...t.values()];n=e?{x:e.x,y:e.y}:null,r=null}else t.size===0&&(n=null,r=null,e.classList.remove(`grab`))};e.addEventListener(`pointerup`,a),e.addEventListener(`pointercancel`,a),e.addEventListener(`wheel`,e=>{e.preventDefault(),Bo(e.clientX,e.clientY,e.deltaY>0?.9:1.11)},{passive:!1}),e.addEventListener(`dblclick`,()=>zo()),e.addEventListener(`pointerup`,e=>{if(e.pointerType!==`touch`)return;let t=Date.now();t-i<320&&zo(),i=t})}function Go(e,t){let n=`left:${t.x-t.w/2}px; top:${t.y-t.h/2}px; width:${t.w}px; height:${t.h}px`,r=t.alerte?P`<span class="rel-alerte" title=${t.alerte}>⚠️</span>`:F;if(t.centre&&t.id){let i=e.technique(t.id);return P`<button class="rel-carte-carte hub" style=${n}
        @click=${()=>{No||e.ouvrirFiche(t.id)}}
        aria-label=${`Ouvrir la fiche : ${t.nom}`} title=${`Ouvrir la fiche : ${t.nom}`}>
        <span class="rel-carte-media">${i?ro(e,i):F}</span>
      </button><span class="rel-carte-hub-nom" style=${`left:${t.x}px; top:${t.y+t.h/2+6}px`}>${t.nom}${r}</span>`}if(t.plus&&t.role)return P`<button class="rel-carte-carte plus ${fo(t.role)}" style=${n}
      @click=${()=>{!No&&t.role&&(W.carteRoleDeplie.add(t.role),e.requestUpdate())}}>
      <span class="rel-carte-plus-txt">${t.nom}</span>
      <span class="rel-carte-plus-sous">déplier ici ›</span>
    </button>`;let i=t.id?e.technique(t.id):void 0;if(t.absente||!i)return P`<div class="rel-carte-carte absente ${t.role?fo(t.role):``}" style=${n}>
      <span class="rel-carte-nom">${t.nom}</span>
    </div>`;let a=t.deplie||(t.depl??0)>0?P`<button class="rel-carte-depl ${t.deplie?`actif`:``}"
        style=${`left:${t.x+t.w/2-16}px; top:${t.y+t.h/2-13}px`}
        aria-label=${t.deplie?`Replier les liens de ce nœud`:`Déplier ${t.depl} lien${(t.depl??0)>1?`s`:``} de plus`}
        title=${t.deplie?`Replier`:`Déplier ${t.depl} lien${(t.depl??0)>1?`s`:``} de plus`}
        @click=${n=>{n.stopPropagation(),!(No||!t.id)&&(t.deplie?W.carteDeplie.delete(t.id):W.carteDeplie.add(t.id),e.requestUpdate())}}>${t.deplie?`−`:`+${t.depl}`}</button>`:F;return P`<button class="rel-carte-carte ${fo(t.role??`peer`)} ${(t.niveau??1)>=2?`niveau2`:``}" style=${n}
    @click=${()=>{!No&&t.id&&oo(e,t.id)}} title=${t.note??F}>
    <span class="rel-carte-media">${ro(e,i)}</span>
    <span class="rel-carte-nom">${i.nom}${r}</span>
    ${t.note?P`<span class="rel-carte-note">${t.note}</span>`:F}
  </button>${a}`}function Ko(e){let t=new Map;for(let n of e)!n.role||(n.niveau??1)!==1||t.set(n.role,[...t.get(n.role)??[],n]);return[...t].map(([e,t])=>({role:e,x:t.reduce((e,t)=>e+t.x,0)/t.length,y:Math.min(...t.map(e=>e.y-e.h/2))-24}))}function qo(e,t,n,r){let i=go(r);if(K.fitId!==n.id){W.carteDeplie.clear(),W.carteRoleDeplie.clear();for(let e of i)e.role===`context`&&W.carteMasque.add(e.libelle)}let a=r.filter(e=>!W.carteMasque.has(e.libelle)),{noeuds:o,aretes:s,sceneW:c,sceneH:l,hubX:u,hubY:d}=Po(e,t,n,a),f=Ko(o);Lo={w:c,h:l,hubX:u,hubY:d};let p=[...new Set(a.filter(e=>e.presente).map(e=>e.techniqueId))];return P`
    <div class="rel-carte-chips" role="list" aria-label="Familles de liens (légende / filtre)">
      ${i.map(t=>{let n=W.carteMasque.has(t.libelle),r=vo(t.role);return P`<button role="listitem" class="rel-carte-chip ${n?`masque`:``}"
          style=${`color:${r}; background:color-mix(in srgb, ${r} 15%, var(--carte))`}
          @click=${()=>{n?W.carteMasque.delete(t.libelle):W.carteMasque.add(t.libelle),e.requestUpdate()}}
          title=${n?`Afficher « ${t.libelle} »`:`Masquer « ${t.libelle} »`}>
          ${mo(t.role)}<span class="rel-carte-chip-lib">${t.libelle}</span><span class="rel-carte-chip-n">${t.liste.length}</span>
        </button>`})}
    </div>
    <div class="rel-carte ${W.plein?`plein`:``}">
      <div class="rel-carte-outils">
        <button class="rel-carte-bt" @click=${()=>Vo(1.25)} aria-label="Zoom avant" title="Zoom avant">+</button>
        <button class="rel-carte-bt" @click=${()=>Vo(.8)} aria-label="Zoom arrière" title="Zoom arrière">−</button>
        <button class="rel-carte-bt" @click=${()=>zo()} aria-label="Réajuster la carte" title="Réajuster">⊙</button>
        <button class="rel-carte-bt ${W.carteDeplie.size>0||W.carteRoleDeplie.size>0?`actif`:``}" @click=${()=>{if(W.carteDeplie.size>0||W.carteRoleDeplie.size>0)W.carteDeplie.clear(),W.carteRoleDeplie.clear();else{p.forEach(e=>W.carteDeplie.add(e));for(let e of i)W.carteRoleDeplie.add(e.role)}e.requestUpdate()}}
          aria-label=${W.carteDeplie.size>0||W.carteRoleDeplie.size>0?`Replier tout (premier niveau)`:`Tout déplier`}
          title=${W.carteDeplie.size>0||W.carteRoleDeplie.size>0?`Replier tout (premier niveau)`:`Tout déplier`}>${W.carteDeplie.size>0||W.carteRoleDeplie.size>0?`⊟`:`⊞`}</button>
        <button class="rel-carte-bt ${W.plein?`actif`:``}" @click=${()=>{W.plein=!W.plein,K.fitId=``,e.requestUpdate()}}
          aria-label=${W.plein?`Quitter le plein écran`:`Plein écran`} title=${W.plein?`Quitter le plein écran`:`Plein écran`}>⛶</button>
      </div>
      <div class="rel-carte-aide">Glisse pour te déplacer · pince/molette pour zoomer · touche une carte pour recentrer</div>
      <div class="rel-carte-vue" ${Ga(e=>{e&&(Io=e,Io.dataset.carteInstallee||(Io.dataset.carteInstallee=`1`,Wo(Io)))})}>
        <div class="rel-carte-scene" style=${`width:${c}px; height:${l}px`} ${Ga(e=>{if(!e)return;Fo=e;let t=K.fitId!==n.id;K.fitId=n.id,requestAnimationFrame(()=>{t?zo():Ro()})})}>
          <svg class="rel-carte-liens" viewBox=${`0 0 ${c} ${l}`} width=${c} height=${l} aria-hidden="true">
            ${s.map(e=>de`<path d=${e.d} stroke-linecap="round" style=${`stroke:${vo(e.role)}; fill:none; stroke-width:2.6; opacity:.7`}></path>`)}
          </svg>
          ${f.map(e=>P`<span class="rel-carte-zone" aria-hidden="true"
            style=${`left:${e.x}px; top:${e.y}px; color:${vo(e.role)}`}>${Ao[e.role]}</span>`)}
          ${o.map(t=>Go(e,t))}
        </div>
      </div>
    </div>
  `}var Jo={after:`Enchaînement`,before:`Préparation`,peer:`Comparaison`,opposition:`Contre`,context:`Fondamental`};function Yo(e,t){if(!t||t.niveauxIds.length===0)return F;let n=e.disciplines.find(e=>e.id===t.disciplineId),r=t.niveauxIds.map(e=>n?.niveaux.find(t=>t.id===e)).filter(e=>!!e);return r.length===0?F:P`<span class="rel-ex-cand-niv">${r.map(e=>P`<span class="carte-niveau">${io(e)}${e.nom}</span>`)}</span>`}function Xo(e,t,n,r){let i=e.technique(r.techniqueId),a=n=>n?P`<div class="rel-ex-face-col">
        <span class="rel-ex-face-media">${ro(e,n)}</span>
        <span class="rel-ex-face-nom">${n.nom}${po(e,n.id)}</span>
        ${n.nomTraditionnel?P`<span class="rel-ex-face-jp jp">${n.nomTraditionnel}</span>`:F}
        ${uo(t,n)?P`<span class="rel-ex-face-fam">${uo(t,n)}</span>`:F}
        ${Yo(t,n)}
        <button class="rel-ex-ctrl" @click=${()=>e.ouvrirFiche(n.id)}>Ouvrir la fiche</button>
      </div>`:P`<div class="rel-ex-face-col"><span class="rel-ex-face-nom">?</span></div>`;return P`
    <div class="rel-ex-face">
      <span class="rel-ex-face-lien ${fo(r.role)}">${mo(r.role)}${r.libelle}</span>
      <div class="rel-ex-face-cols">${a(n)}${a(i)}</div>
      ${r.note?P`<p class="rel-ex-face-note"><b>Ce qui les distingue :</b> ${r.note}</p>`:P`<p class="rel-ex-face-note vide">Aucune note de distinction sur ce lien — ajoute-la depuis la fiche (feuille « Lien »).</p>`}
      <div class="rel-ex-actions">
        <button class="rel-ex-ctrl" @click=${()=>{W.exCompare=null,e.requestUpdate()}}>← Autres correspondances</button>
        ${i?P`<button class="rel-ex-ctrl principal" @click=${()=>{W.exCompare=null,W.exChemin=[...W.exChemin,r.note===void 0?{id:r.techniqueId,role:r.role}:{id:r.techniqueId,note:r.note,role:r.role}],oo(e,r.techniqueId)}}>Continuer sur ${i.nom}</button>`:F}
      </div>
    </div>
  `}function Zo(e){return e?P`<span class="rel-ex-badge ${fo(e)}" title="Étape atteinte par un lien « ${Jo[e]} »">${mo(e)}</span>`:F}var Qo=[{id:`enchainer`,titre:`Construire un enchaînement`,invite:`Suite après la technique`,garde:e=>e.role===`after`},{id:`preparer`,titre:`Trouver une préparation`,invite:`Ce qui amène à cette technique`,garde:e=>e.role===`before`},{id:`comparer`,titre:`Comparer / ne pas confondre`,invite:`Variantes et distinctions`,garde:e=>e.role===`peer`},{id:`defendre`,titre:`Voir les contres et réactions`,invite:`Ce qui répond à la technique`,garde:e=>e.role===`opposition`}],$o=6;function es(e,t,n,r,i){return Ya(t,n).filter(e=>r.garde(e)&&e.presente&&!i.has(e.techniqueId)).sort((e,t)=>(e.priorite??1/0)-(t.priorite??1/0)).slice(0,$o)}function ts(e,t,n){let r=W.exChemin[W.exChemin.length-1]?.id;(W.exChemin.length===0||r!==n.id&&W.exChemin[0].id!==n.id)&&(W.exChemin=[{id:n.id}],W.exIntent=null,W.exCompare=null);let i=Qo.find(e=>e.id===W.exIntent);if(!i){let r=new Set(W.exChemin.map(e=>e.id)),i=Qo.map(i=>({i,n:es(e,t,n.id,i,r).length})).filter(e=>e.n>0),a=W.exChemin.length>1;return P`
      <div class="rel-ex">
        ${a?P`
          <ol class="rel-ex-chemin">
            ${W.exChemin.map((t,n)=>P`
              ${n>0?P`<li class="rel-ex-pourquoi">${t.note??`—`}</li>`:F}
              <li class="rel-ex-etape ${n===W.exChemin.length-1?`courant`:``}">
                ${Zo(t.role)}
                <button class="rel-ex-nom" @click=${()=>e.ouvrirFiche(t.id)} title="Ouvrir la fiche">${e.technique(t.id)?.nom??`?`}</button>
              </li>
            `)}
          </ol>
          <p class="rel-ex-continue">Ton parcours continue — chaque objectif s'ajoute au chemin, le mélange est permis.</p>`:F}
        <p class="rel-ex-q">${a?P`Et maintenant, que veux-tu faire avec <strong>${n.nom}</strong> ?`:P`Que veux-tu faire avec <strong>${n.nom}</strong> ?`}</p>
        ${i.length===0?P`<p class="fil-vide">Aucun lien exploitable pour l'instant sur cette technique.</p>`:P`<div class="rel-ex-intents">
              ${i.map(({i:t,n:r})=>P`<button class="rel-ex-intent" @click=${()=>{W.exIntent=t.id,W.exChemin[W.exChemin.length-1]?.id!==n.id&&(W.exChemin=[{id:n.id}]),e.requestUpdate()}}>
                <span class="rel-ex-intent-t">${t.titre}</span>
                <span class="rel-ex-intent-s">${t.invite} · ${r}</span>
              </button>`)}
            </div>`}
      </div>
    `}let a=new Set(W.exChemin.map(e=>e.id)),o=W.exChemin[W.exChemin.length-1].id,s=es(e,t,o,i,a);if(i.id===`comparer`&&W.exCompare){let n=s.find(e=>e.techniqueId===W.exCompare),r=e.technique(o);if(n&&r)return P`
        <div class="rel-ex">
          <div class="rel-ex-tete">
            <span class="rel-ex-obj">${i.titre}</span>
            <button class="rel-ex-changer" @click=${()=>{W.exIntent=null,W.exCompare=null,e.requestUpdate()}}>Changer d'objectif</button>
          </div>
          ${Xo(e,t,r,n)}
        </div>
      `;W.exCompare=null}return P`
    <div class="rel-ex">
      <div class="rel-ex-tete">
        <span class="rel-ex-obj">${i.titre}</span>
        <button class="rel-ex-changer" title="Choisir un autre objectif pour la suite — le parcours déjà construit reste" @click=${()=>{W.exIntent=null,W.exCompare=null,e.requestUpdate()}}>Changer d'objectif</button>
      </div>

      <ol class="rel-ex-chemin">
        ${W.exChemin.map((t,n)=>P`
          ${n>0?P`<li class="rel-ex-pourquoi">${t.note??`—`}</li>`:F}
          <li class="rel-ex-etape ${n===W.exChemin.length-1?`courant`:``}">
            ${Zo(t.role)}
            <button class="rel-ex-nom" @click=${()=>e.ouvrirFiche(t.id)} title="Ouvrir la fiche">${e.technique(t.id)?.nom??`?`}</button>
          </li>
        `)}
      </ol>

      <div class="rel-ex-actions">
        ${W.exChemin.length>1?P`<button class="rel-ex-ctrl" @click=${()=>{W.exChemin=W.exChemin.slice(0,-1),oo(e,W.exChemin[W.exChemin.length-1].id)}}>← Revenir</button>`:F}
        <button class="rel-ex-ctrl" @click=${()=>{W.exIntent=null,W.exCompare=null,e.requestUpdate()}}>Changer d'objectif</button>
      </div>

      ${s.length?P`
            <p class="rel-ex-label">Étape suivante</p>
            <div class="rel-ex-suivants">
              ${s.map(n=>{let r=e.technique(n.techniqueId);return P`<button class="rel-ex-cand" @click=${()=>{if(i.id===`comparer`){W.exCompare=n.techniqueId,e.requestUpdate();return}W.exChemin=[...W.exChemin,n.note===void 0?{id:n.techniqueId,role:n.role}:{id:n.techniqueId,note:n.note,role:n.role}],oo(e,n.techniqueId)}}>
                <span class="rel-ex-cand-nom">${r?.nom??`?`}${po(e,n.techniqueId)}</span>
                ${Yo(t,r)}
                ${n.note?P`<span class="rel-ex-cand-note">${n.note}</span>`:F}
              </button>`})}
            </div>`:P`<p class="fil-vide rel-ex-fin">Fin de piste — aucune suite pour cet objectif. Reviens en arrière ou change d'objectif.</p>`}
    </div>
  `}function ns(e,t){W.recherche=``,W.bienvenue=!1,oo(e,t)}function rs(){W.bienvenue=!0}var is=!1;function as(e){is=!0,W.vue=e}function os(e){let t=e.bibliotheque;if(!is){is=!0;let t=e.preferences.relationsVue;(t===`liste`||t===`mindmap`||t===`explorer`)&&(W.vue=t)}let n=e.techniqueCentreRelations(),r=n?e.technique(n):void 0,i=P`
    <header class="rel-tete">
      <div>
        <div class="rel-titre">Relations</div>
        <div class="rel-sous">Navigation par liens techniques</div>
      </div>
      <div class="rel-tete-actions">
        ${r?P`<button class="rel-tete-bt ${W.mmCherche?`actif`:``}" @click=${()=>{W.mmCherche=!W.mmCherche,W.mmCherche||(W.recherche=``),e.requestUpdate()}} aria-label="Rechercher une technique à centrer" title="Rechercher">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.8-3.8"/></svg>
              </button>
              <button class="rel-tete-bt" @click=${()=>fs(e)} aria-label="Centrer au hasard" title="Centrer au hasard">🎲</button>
              <button class="rel-tete-bt" ?disabled=${G.length<=1} @click=${()=>so(e)} aria-label="Technique précédente" title="Précédente">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M19 12H5M11 6l-6 6 6 6"/></svg>
              </button>
              <button class="rel-tete-bt" ?disabled=${ao.length===0} @click=${()=>co(e)} aria-label="Technique suivante" title="Suivante">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
              </button>`:F}
      </div>
    </header>`;if(!r||W.bienvenue)return P`<div class="ecran ecran-relations">
      ${i}
      ${t.techniques.length===0?P`<p class="fil-vide" style="padding-top:10px">Aucune technique pour l'instant — ajoute-en d'abord.</p>`:P`${r?P`<button class="chip-filtre rel-bienvenue-reprendre" style="margin:8px 18px 0"
                @click=${()=>{W.bienvenue=!1,e.requestUpdate()}}>← Reprendre sur ${r.nom}</button>`:F}
          ${ss(e,t)}`}
    </div>`;lo(r.id);let a=Ya(t,r.id);return P`
    <div class="ecran ecran-relations">
      ${i}
      ${ls(e)}
      ${us(e,t,r)}

      ${W.vue===`mindmap`||W.vue===`explorer`?F:hs(e,t,r,a)}
      ${W.vue===`explorer`?ts(e,t,r):a.length===0?P`<div class="rel-vide">
              <p class="fil-vide">Aucun lien pour l'instant.</p>
              <button class="action-douce" @click=${()=>e.ouvrirEditionLien(r.id)}>
                ＋ Créer le premier lien <span>depuis « ${r.nom} »</span>
              </button>
            </div>`:W.vue===`mindmap`?qo(e,t,r,a):gs(e,t,a)}
    </div>
  `}function ss(e,t){let n=W.recherche.trim(),r=n?Nr(t,n,8):[],i=e=>t.techniques.some(t=>t.id===e),a=[...G.slice().reverse(),...e.derniereTechniqueVue?[e.derniereTechniqueVue]:[]].filter((e,t,n)=>i(e)&&n.indexOf(e)===t).slice(0,6),o=t.favoris.filter(i),s=ds(t),c=()=>{if(s.length===0)return;let t=s[Math.floor(Math.random()*s.length)];ns(e,t.id)},l=n=>{let r=e.technique(n);if(!r)return F;let i=uo(t,r);return P`<button class="rel-depart-item" @click=${()=>ns(e,n)}>
      <span class="rel-depart-media">${ro(e,r)}</span>
      <span class="rel-depart-corps">
        <span class="rel-depart-nom">${r.nom}${po(e,r.id)}</span>
        ${i?P`<span class="rel-depart-fam">${i}</span>`:F}
      </span>
    </button>`};return P`
    <div class="rel-depart">
      <!-- D-374 : état SANS centre — simple et invitant (demande porteur), pas la
           longue page « règles du jeu » (déplacée dans l'aide, rubrique Relations).
           Une question, un champ, un dé, quelques récents. -->
      <h2 class="rel-depart-titre">Explore les liens entre tes techniques</h2>
      <p class="rel-depart-sous">Quelle technique veux-tu explorer&nbsp;?</p>

      <h3 class="rel-depart-sec-titre" style="margin-top:14px">Choisis un point de départ</h3>

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
            <div class="rel-depart-chips">${o.map(t=>cs(e,t))}</div>
          </section>`:F}

      ${s.length?P`<button class="rel-depart-hasard" @click=${c}>🎲 Surprends-moi</button>`:F}
    </div>
  `}function cs(e,t){let n=e.technique(t);return n?P`<button class="rel-depart-chip" @click=${()=>ns(e,t)}>${n.nom}${po(e,t)}</button>`:F}function ls(e){return P`
    <div class="rel-vues" role="tablist" aria-label="Vue des relations">
      ${[{id:`liste`,nom:`Liste`},{id:`mindmap`,nom:`Graphe`},{id:`explorer`,nom:`Parcours`}].map(t=>P`<button role="tab" aria-selected=${W.vue===t.id} class="rel-vue-onglet ${W.vue===t.id?`actif`:``}"
          @click=${()=>{W.vue=t.id,W.plein=!1,e.enregistrerVueRelations(t.id),e.requestUpdate()}}>${t.nom}</button>`)}
    </div>
  `}function us(e,t,n){if(!W.mmCherche)return F;let r=W.recherche.trim(),i=r?Nr(t,r,8).filter(e=>e.id!==n.id):[];return P`<div class="rel-mm-cherche">
    <div class="rel-mm-recherche">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.8-3.8"/></svg>
      <input type="search" placeholder="Centrer sur une technique…" .value=${W.recherche} autofocus
             aria-label="Centrer sur une autre technique"
             @input=${t=>{W.recherche=t.target.value,e.requestUpdate()}}>
    </div>
    ${i.length?P`<div class="rel-mm-res">${i.map(t=>P`<button class="chip-filtre" @click=${()=>{W.recherche=``,W.mmCherche=!1,W.filtre=null,oo(e,t.id)}}>${t.nom}</button>`)}</div>`:F}
  </div>`}function ds(e){return e.techniques.filter(t=>t.relations.length>0||e.techniques.some(e=>e.relations.some(e=>e.cibleId===t.id)))}function fs(e){let t=e.bibliotheque;if(!t)return;let n=e.techniqueCentreRelations(),r=ds(t).filter(e=>e.id!==n);r.length!==0&&oo(e,r[Math.floor(Math.random()*r.length)].id)}var ps=!1;function ms(e){if(!e)return;let t=()=>{document.querySelector(`.rel-centre`)?.classList.toggle(`compacte`,window.scrollY>48)};t(),ps||(ps=!0,window.addEventListener(`scroll`,t,{passive:!0}))}function hs(e,t,n,r){let i=uo(t,n),a=new Set(r.map(e=>e.techniqueId)).size;return P`
    <button class="rel-centre" ${Ga(ms)} @click=${()=>e.ouvrirFiche(n.id)} title="Ouvrir la fiche">
      <span class="rel-centre-media">${ro(e,n)}</span>
      <span class="rel-centre-txt">
        <span class="rel-centre-nom">${n.nom}${po(e,n.id)}</span>
        ${i?P`<span class="rel-centre-fam">${i}</span>`:F}
        <span class="rel-centre-compte">${a?`${a} technique${a>1?`s`:``} reliée${a>1?`s`:``}`:`aucun lien`}</span>
        <span class="rel-centre-voir">Ouvrir la fiche ›</span>
      </span>
    </button>
  `}function gs(e,t,n){let r=go(n),i=W.filtre&&r.some(e=>e.libelle===W.filtre)?W.filtre:null,a=i?r.filter(e=>e.libelle===i):r,o=e=>{let t=e;t?.classList.contains(`actif`)&&t.scrollIntoView({inline:`center`,block:`nearest`})};return P`
    <div class="rel-filtres">
      <button class="rel-chip ${i===null?`actif`:``}" ${Ga(o)}
        @click=${()=>{W.filtre=null,e.requestUpdate()}}>
        Toutes <span class="rel-chip-n">${n.length}</span>
      </button>
      ${r.map(t=>P`<button class="rel-chip ${fo(t.role)} ${i===t.libelle?`actif`:``}" ${Ga(o)}
          @click=${()=>{W.filtre=i===t.libelle?null:t.libelle,e.requestUpdate()}}>
          ${t.libelle} <span class="rel-chip-n">${t.liste.length}</span>
        </button>`)}
    </div>

    <div class="rel-tri">
      <!-- D-374 : le tri « pertinence/alphabétique » est retiré (demande porteur) —
           un seul ordre, la PRIORITÉ éditoriale (1 → 5, puis les liens sans
           priorité). Une liste de deux à cinq liens ne se cherche pas par nom. -->
      <span class="rel-tri-label">Tri&nbsp;: <b>Priorité</b></span>
      <button class="rel-tri-ajouter" @click=${()=>{let t=e.techniqueCentreRelations();t&&e.ouvrirEditionLien(t)}}
        title="Créer un lien depuis la technique centrale">＋ Ajouter un lien</button>
    </div>

    <div class="rel-listes">
      ${a.map(n=>P`<section class="rel-groupe ${fo(n.role)}">
          <header class="rel-groupe-tete">${mo(n.role)}<span>${n.libelle}</span><span class="rel-groupe-n">${n.liste.length}</span></header>
          ${_o(e,n.liste).map(n=>xs(e,t,n))}
        </section>`)}
    </div>
  `}var q={hydrate:!1,typeId:``,sourceId:null,sourceRequete:``,cibleId:null,cibleRequete:``,note:``,priorite:void 0};function _s(){q.hydrate=!1}function vs(e){let t=e.bibliotheque,n=e.editionLien,r=n.cibleId!==void 0&&n.typeId!==void 0;if(!q.hydrate){q.hydrate=!0,q.sourceId=n.sourceId,q.sourceRequete=``,q.cibleId=n.cibleId??null,q.cibleRequete=``,q.typeId=n.typeId??n.typePrefere??t.typesRelation[0]?.id??``;let e=r?t.techniques.find(e=>e.id===n.sourceId)?.relations.find(e=>e.type===n.typeId&&e.cibleId===n.cibleId):void 0;q.note=e?.note??``,q.priorite=e?.priorite}let i=()=>{e.editionLien=null,e.requestUpdate()},a=q.sourceId?e.technique(q.sourceId):void 0,o=q.cibleId?e.technique(q.cibleId):void 0,s=!!a&&!!o&&q.typeId!==``&&a.id!==o.id,c=async()=>{if(!s||!a||!o)return;let t=q.note.trim(),c;c=r?await e.modifierRelation(n.sourceId,n.cibleId,n.typeId,{type:q.typeId,note:t===``?null:t,priorite:q.priorite??null}):await e.ajouterRelation(a.id,{type:q.typeId,cibleId:o.id,...t===``?{}:{note:t},...q.priorite===void 0?{}:{priorite:q.priorite}}),c&&i()},l=()=>{e.demanderConfirmation({titre:`Retirer ce lien ?`,corps:`Les deux lectures (directe et inverse) disparaissent.`,bouton:`Retirer le lien`,action:()=>{e.retirerRelation(n.sourceId,n.cibleId,n.typeId).then(()=>i())}})},u=(n,r,i,a,o,s)=>{if(r&&s)return P`<div class="lien-fixe"><b>${r.nom}</b>${uo(t,r)?P` <span class="lien-fixe-fam">· ${uo(t,r)}</span>`:F}</div>`;if(r)return P`<div class="lien-fixe">
        <b>${r.nom}</b>${uo(t,r)?P` <span class="lien-fixe-fam">· ${uo(t,r)}</span>`:F}
        <button class="chip-filtre" style="margin-left:auto" @click=${()=>{o(void 0)}}>changer</button>
      </div>`;let c=i.trim()?Nr(t,i,6).filter(e=>e.id!==(n===`cible`?q.sourceId:q.cibleId)):[];return P`
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
  `}function ys(e,t,n){let r=n.directe?t:n.techniqueId,i=n.directe?n.techniqueId:t;e.ouvrirEditionLien(r,i,n.typeId)}function bs(e,t,n,r,i){let a=e.technique(n.techniqueId);if(!n.presente||!a)return P`<div class="rel-ligne absente"><span class="rel-ligne-nom">absente de la bibliothèque</span></div>`;let o=uo(t,a);return P`
    <div class="rel-ligne-conteneur">
      <button class="rel-ligne" @click=${()=>r(a.id)}>
        <span class="rel-ligne-media">${ro(e,a)}</span>
        <span class="rel-ligne-corps">
          <span class="rel-ligne-nom">${a.nom}${po(e,a.id)}</span>
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
  `}function xs(e,t,n){let r=e.techniqueCentreRelations();return bs(e,t,n,t=>{W.filtre=null,oo(e,t)},r?()=>ys(e,r,n):void 0)}var Ss=2;function Cs(e,t,n){let r=Ya(t,n.id);if(r.length===0)return P`
      <section class="bloc-lecture relations-fiche">
        <h2 class="section-titre">Relations</h2>
        <p class="section-vide">Cette technique n'est liée à aucune autre.</p>
        <button class="action-douce rel-fiche-lien" @click=${()=>e.ouvrirEditionLien(n.id)}>＋ Ajouter un lien <span>relie cette technique à une autre</span></button>
      </section>`;let i=go(r),a=i.filter(e=>e.role!==`context`),o=i.filter(e=>e.role===`context`),s=r=>P`
    <section class="rel-groupe ${fo(r.role)}">
      <header class="rel-groupe-tete">${mo(r.role)}<span>${r.libelle}</span><span class="rel-groupe-n">${r.liste.length}</span></header>
      ${_o(e,r.liste).slice(0,Ss).map(r=>bs(e,t,r,t=>e.ouvrirFiche(t),()=>ys(e,n.id,r)))}
    </section>`;return P`
    <section class="bloc-lecture relations-fiche">
      <h2 class="section-titre">Relations · ${r.length}</h2>
      <div class="rel-fiche-listes">
        ${a.map(s)}
      </div>
      ${o.length?P`<div class="rel-fiche-contexte">
            <!-- Chapeau omis quand l'unique groupe porte déjà ce nom : l'écrire deux fois ne range rien, ça bégaie. -->
            ${o.length===1&&o[0].libelle.toLowerCase()===`présente dans`?F:P`<div class="rel-fiche-contexte-titre">Présente dans</div>`}
            ${o.map(s)}
          </div>`:F}
      <button class="action-douce rel-fiche-lien" @click=${()=>e.ouvrirEditionLien(n.id)}>
        ＋ Ajouter un lien <span>type, technique liée, raison, priorité</span>
      </button>
      <button class="action-douce rel-fiche-toutes" @click=${()=>e.ouvrirRelationsVisuelle(n.id,`liste`)}>
        Voir toutes les relations <span>(${r.length})</span>
      </button>
    </section>
  `}var ws={packOfficiel:`./img/depart-pack-officiel.webp`,fichier:`./img/depart-fichier.webp`,sauvegarde:`./img/depart-sauvegarde.webp`,creer:`./img/depart-creer.webp`,filet:`./img/depart-filet.webp`},Ts=e=>P`<img class="depart-illu" src=${e} alt="" aria-hidden="true" width="192" height="192" decoding="async">`,Es=P`<span class="depart-chevron" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m9.5 5 7 7-7 7"/></svg></span>`;function Ds(e){return P`
    <div class="depart-corps">
      <p class="fil-vide depart-accroche">
        <b>Movenso est ta mémoire du mouvement</b> : tes techniques, tes repères
        et tes séances, dans ta propre bibliothèque.
      </p>
      <p class="fil-vide depart-intro">Elle démarre vide, choisis comment commencer :</p>
      <!-- D-311 : quatre départs NOMMÉS. « Importer un pack » seul cachait les
           deux chemins les plus utiles : le catalogue prêt à installer, et le
           retour d'une sauvegarde quand on change d'appareil.
           D-328 : le premier est RECOMMANDÉ, les trois autres sont des recours. -->
      <button class="action-douce action-depart depart-majeur" @click=${e.installerPackOfficiel}>
        <span class="action-picto" aria-hidden="true">${Ts(ws.packOfficiel)}</span>
        <span class="action-corps">Installer un pack
          <span>Choisis ton ou tes starter packs : le plus rapide, connexion requise pour le téléchargement</span></span>
        ${Es}
      </button>
      <p class="fil-vide depart-mineurs-titre">Autres façons de commencer :</p>
      <button class="action-douce action-depart" @click=${e.importerDepuisFichier}>
        <span class="action-picto" aria-hidden="true">${Ts(ws.fichier)}</span>
        <span class="action-corps">Importer un pack depuis un fichier
          <span>un <code>.movpack</code> qu'on t'a transmis</span></span>
        ${Es}
      </button>
      <button class="action-douce action-depart" @click=${e.restaurerSauvegarde}>
        <span class="action-picto" aria-hidden="true">${Ts(ws.sauvegarde)}</span>
        <span class="action-corps">Restaurer une sauvegarde
          <span>tu changes d'appareil : choisis ta sauvegarde complète</span></span>
        ${Es}
      </button>
      <button class="action-douce action-depart" @click=${e.creerPremiereTechnique}>
        <span class="action-picto" aria-hidden="true">${Ts(ws.creer)}</span>
        <span class="action-corps">Créer ta première technique
          <span>partir d'une bibliothèque vierge : son nom et sa discipline suffisent</span></span>
        ${Es}
      </button>
      <p class="depart-filet">
        <span class="depart-filet-picto">${Ts(ws.filet)}</span>
        <span>Tes données et vidéos restent sur cet appareil. Pense à créer une
        sauvegarde de temps en temps (Plus › Sauvegardes), c'est ton filet.</span>
      </p>
    </div>
  `}function Os(e){return P`<button class="fab fab-fiche" aria-label="Modifier" title="Modifier" @click=${e}>
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true"><path d="M4 20h4L18.5 9.5a2.1 2.1 0 0 0-3-3L5 17v3z"/><path d="M13.5 6.5l3 3"/></svg>
  </button>`}function ks(e,t){return P`<section class="bloc-lecture">
    <h2 class="section-titre">${e}</h2>
    <p class="section-vide">${t}</p>
  </section>`}function As(e){if(e.type===`kata`)return`Kata (formes)`;if(e.type===`seance`)return`Séance`;if(e.type===`enchainement`)return`Enchaînement`;let t=e.blocs.filter(e=>e.type===`technique`).length;return`${t} technique${t>1?`s`:``}`}function js(e,t){return P`<section class="bloc-lecture liaisons-compo">
    <h2 class="section-titre">Compositions${e.length?P` · ${e.length}`:F}</h2>
    ${e.length?e.map(e=>{let n=e.blocs.find(e=>e.type===`technique`)?.techniqueId,r=n?t.technique(n):void 0;return P`<button class="compo-ligne" @click=${()=>t.ouvrir(e.id)}>
            <span class="compo-ligne-media">${r?t.vignette(r):F}</span>
            <span class="compo-ligne-corps">
              <span class="compo-ligne-nom">${e.nom}</span>
              <span class="compo-ligne-quoi">${As(e)}</span>
            </span>
            <span class="compo-ligne-fleche" aria-hidden="true">›</span>
          </button>`}):P`<p class="section-vide">Cette technique n'est utilisée dans aucune composition.</p>`}
  </section>`}var Ms=4,Ns=40,Ps=0,Fs=!1;function Is(){Fs=!1;let e=window.scrollY;e<Ns?document.body.classList.remove(`fab-reduit`):e>Ps+Ms?document.body.classList.add(`fab-reduit`):e<Ps-Ms&&document.body.classList.remove(`fab-reduit`),Ps=e}typeof window<`u`&&window.addEventListener(`scroll`,()=>{Fs||(Fs=!0,requestAnimationFrame(Is))},{passive:!0});var Ls=P`<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.8-3.8"/></svg>`,Rs=P`<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M4 7h9M17 7h3M4 17h3M11 17h9"/><circle cx="15" cy="7" r="2.2"/><circle cx="9" cy="17" r="2.2"/></svg>`,zs={ouvert:!1};function Bs(e,t){let n=()=>{zs.ouvert=!1,e.requestUpdate()};return P`
    <div class="voile" @click=${n}></div>
    <div class="feuille feuille-filtres" role="dialog" aria-label="Filtres">
      <div class="feuille-poignee" aria-hidden="true"></div>
      <div class="feuille-titre">Filtres</div>
      ${t.familles.length>1?P`
        <div class="feuille-groupe">Catégories</div>
        <div class="chips-filtres libre" aria-label="Catégories">
          ${t.familles.map(e=>P`<button class="chip-filtre ${t.f.familleId===e.id?`actif`:``}"
            @click=${()=>t.basculer(`familleId`,e.id)}>${e.nom}</button>`)}
        </div>`:F}
      ${t.niveaux.length?P`
        <div class="feuille-groupe">Niveaux</div>
        <div class="chips-filtres libre" aria-label="Niveaux">
          ${t.niveaux.map(e=>P`<button class="chip-filtre ${t.nomNiveauSel===Ks(e)?`actif`:``}"
            @click=${()=>t.basculerNiveau(e)}>${io(e)}${e.nom}</button>`)}
        </div>`:F}
      <div class="feuille-filtres-actions">
        <button class="bouton" @click=${()=>{t.reinitialiser()}}>Tout effacer</button>
        <button class="bouton principal" @click=${n}>Voir ${t.nombre} technique${t.nombre>1?`s`:``}</button>
      </div>
    </div>`}function Vs(e,t,n){let r=n.value.trim();if(!r)return;let i=Gr(e.bibliotheque,t.id,r).exacte;if(i){e.demanderConfirmation({titre:`« ${i.nom} » existe déjà dans ${t.nom}`,corps:`Créer quand même une technique distincte ?`,bouton:`Créer quand même`,action:()=>{e.creerTechnique(t.id,r),n.value=``}});return}e.creerTechnique(t.id,r),n.value=``}function Hs(){return P`<header class="marque">
    <img class="marque-logo" src="./movenso-mark-sombre.svg" width="40" height="40" alt="" aria-hidden="true">
    <div style="flex:1">
      <div class="nom">Movenso</div>
      <div class="devise">Ta mémoire du mouvement.</div>
    </div>
  </header>`}function Us(e){if(e===`local`)return`Mon contenu`;let t=e.replace(/^pack-/,``).replaceAll(`-`,` `);return t.charAt(0).toUpperCase()+t.slice(1)}function Ws(e){let t=e.attribution?.trim(),n=e.origine?Us(I(e)):void 0,r=n&&/^[0-9A-HJKMNP-TV-Z]{26}$/.test(n)?void 0:n;return t&&r&&r.length>t.length&&r.toLowerCase().includes(t.toLowerCase())?r:t??r??`Moi`}function Gs(e){let t=new Map;for(let n of e)t.has(n.id)||t.set(n.id,n);return[...t.values()]}function Ks(e){return e.nom.trim().toLowerCase().replace(/\s+/g,` `)}function qs(e){let t=new Set;return e.filter(e=>{let n=Ks(e);return t.has(n)?!1:(t.add(n),!0)})}function Js(e){return{familleParId:new Map(e.disciplines.flatMap(e=>e.familles).map(e=>[e.id,e])),niveauParId:new Map(e.disciplines.flatMap(e=>e.niveaux).map(e=>[e.id,e]))}}function Ys(e){return P`<svg width="20" height="20" viewBox="0 0 24 24" fill=${e?`currentColor`:`none`}
    stroke="currentColor" stroke-width="2" aria-hidden="true">
    <path d="M12 20.5s-7.2-4.6-9.6-9C1 8.8 2.4 5.5 5.6 5.5c2 0 3.2 1.1 4.4 2.7 1.2-1.6 2.4-2.7 4.4-2.7 3.2 0 4.6 3.3 3.2 6-2.4 4.4-9.6 9-9.6 9Z"/>
  </svg>`}function Xs(e,t,n,r){let i=I(t),a=e.estFavori(t.id);return P`<div class="carte-technique">
    <button class="carte-ouvrir" @click=${()=>e.ouvrirFiche(t.id)}>
      <span class="carte-media">${ro(e,t,i)}</span>
      <span class="carte-nom">${t.nom}</span>
      ${t.nomTraditionnel?P`<span class="carte-jp jp">${t.nomTraditionnel}</span>`:F}
      ${t.niveauxIds.length?P`<span class="carte-sous">
            ${t.niveauxIds.map(e=>{let t=r.get(e);return t?P`<span class="carte-niveau">${io(t)}${t.nom}</span>`:F})}
          </span>`:F}
    </button>
    <button class="coeur ${a?`actif`:``}" aria-pressed=${a}
      aria-label=${a?`Retirer des favoris`:`Ajouter aux favoris`} title=${a?`Retirer des favoris`:`Ajouter aux favoris`}
      @click=${n=>{n.stopPropagation(),e.basculerFavori(t.id)}}>${Ys(a)}</button>
  </div>`}function Zs(e){let t=e.preferences.densiteBibliotheque;return t?`grid-template-columns:repeat(${t},1fr)`:``}function Qs(e,t){let n=e.bibliotheque,r=e.filtres,{familleParId:i,niveauParId:a}=Js(n),o=t=>e.majFiltres({...r,...t}),s=(e,t)=>o({[e]:r[e]===t?null:t}),c=t=>{let i=t?n.disciplines.filter(e=>e.id===t):n.disciplines,o=new Set(i.flatMap(e=>e.familles.map(e=>e.id))),s=new Set(n.techniques.filter(e=>!t||e.disciplineId===t).map(I)),c=r.niveauId?a.get(r.niveauId):void 0,l=c?Ks(c):null,u=l?i.flatMap(e=>e.niveaux).find(e=>Ks(e)===l)?.id??null:null;e.majFiltres({...r,disciplineId:t,familleId:r.familleId&&o.has(r.familleId)?r.familleId:null,niveauId:u,source:r.source&&s.has(r.source)?r.source:null})},l=t??r.disciplineId??null,u=n.techniques.filter(e=>!l||e.disciplineId===l),d=new Set;for(let e of u)d.add(I(e));let f=l?n.disciplines.filter(e=>e.id===l):n.disciplines,p=Gs(f.flatMap(e=>e.familles)).sort((e,t)=>(e.ordre??0)-(t.ordre??0)),m=qs(f.flatMap(e=>e.niveaux).sort((e,t)=>(e.ordre??0)-(t.ordre??0))),h=r.niveauId?a.get(r.niveauId):void 0,g=h?Ks(h):null,_=g?new Set(f.flatMap(e=>e.niveaux).filter(e=>Ks(e)===g).map(e=>e.id)):null,v=e=>o({niveauId:g===Ks(e)?null:e.id}),y=(r.texte.trim()?Nr({...n,techniques:u},r.texte,999):u).filter(e=>!r.familleId||e.familleId===r.familleId).filter(e=>!_||e.niveauxIds.some(e=>_.has(e))).filter(e=>!r.source||I(e)===r.source).filter(t=>!r.favorisSeuls||e.estFavori(t.id)).sort((e,t)=>e.nom.localeCompare(t.nom,`fr`)),b=!t&&r.disciplineId!==null||r.niveauId!==null||r.familleId!==null||r.source!==null||r.favorisSeuls||r.texte.trim()!==``,x=()=>e.majFiltres({disciplineId:t?r.disciplineId:null,niveauId:null,familleId:null,source:null,favorisSeuls:!1,texte:``}),ee=!t&&n.disciplines.length>=1?P`<div class="chips-filtres defilable" aria-label="Disciplines">
          <button class="chip-filtre ${r.disciplineId===null?`actif`:``}"
            @click=${()=>c(null)}>Toutes</button>
          ${n.disciplines.map(e=>P`<button class="chip-filtre chip-discipline ${r.disciplineId===e.id?`actif`:``}"
              @click=${()=>c(r.disciplineId===e.id?null:e.id)}>${e.nom}</button>`)}
        </div>`:F,S=[],C=r.familleId?p.find(e=>e.id===r.familleId):void 0;return C&&S.push({libelle:C.nom,retirer:()=>o({familleId:null})}),h&&S.push({libelle:P`${io(h)}${h.nom}`,retirer:()=>o({niveauId:null})}),r.source&&S.push({libelle:Us(r.source),retirer:()=>o({source:null})}),{corps:P`
    <div class="recherche-ligne">
      <div class="recherche">
        ${Ls}
        <input type="search" placeholder="Rechercher une technique…" autocomplete="off" .value=${r.texte}
               aria-label="Rechercher une technique"
               @input=${e=>o({texte:e.target.value})}>
      </div>
      <!-- D-336 : les Favoris ne sont plus un onglet mais un INTERRUPTEUR de
           cette grille. Il se combine avec la recherche et les filtres au lieu
           de les remplacer, et il bascule le filtre favorisSeuls, qui existait
           déjà dans le moteur sans que rien ne l'allume. -->
      <button class="btn-coeur ${r.favorisSeuls?`actif`:``}" role="switch"
              aria-checked=${r.favorisSeuls?`true`:`false`}
              aria-label=${r.favorisSeuls?`Afficher toutes les techniques`:`N'afficher que mes favoris`}
              @click=${()=>o({favorisSeuls:!r.favorisSeuls})}>${Ys(r.favorisSeuls)}</button>
    </div>
    ${ee}
    ${p.length>1||m.length||S.length||b?P`<div class="ligne-filtres">
          ${p.length>1||m.length?P`<button class="btn-filtres" @click=${()=>{zs.ouvert=!0,e.requestUpdate()}}>
                ${Rs}Filtres${S.length?P`<span class="pastille-filtres">${S.length}</span>`:F}
              </button>`:F}
          ${S.map(e=>P`<button class="chip-actif" @click=${e.retirer}>${e.libelle}<span aria-hidden="true">✕</span></button>`)}
          ${b?P`<button class="chip-filtre reinitialiser" @click=${x}>Tout effacer</button>`:F}
        </div>`:F}
    ${zs.ouvert?Bs(e,{familles:p,niveaux:m,f:r,nomNiveauSel:g,basculer:s,basculerNiveau:v,reinitialiser:x,nombre:y.length}):F}

    ${y.length?P`<div class="grille" style=${Zs(e)}>${y.map(t=>Xs(e,t,i,a))}</div>`:u.length===0?$s(e,t?n.disciplines.find(e=>e.id===t)?.nom:void 0):P`<p class="fil-vide sans-resultat" style="padding-top:14px">Aucune technique ne correspond à ces filtres.</p>`}
  `,nombre:y.length}}function $s(e,t){return t?P`<div class="discipline-vide">
      <p class="fil-vide" style="padding-top:14px">« ${t} » ne contient encore aucune technique.</p>
      <button class="bouton principal" style="margin:8px 18px 0; align-self:flex-start"
        @click=${e=>{let t=e.target.closest(`.ecran`)?.querySelector(`.actions-bibliotheque .creation-discipline input`);t?.scrollIntoView({block:`center`}),t?.focus()}}>Créer la première technique</button>
      <button class="action-douce" style="margin-top:6px" @click=${()=>e.choisirPackAImporter()}>
        ⤓ Importer un pack <span>(il peut compléter « ${t} » ou en installer d'autres)</span>
      </button>
    </div>`:P`<p class="fil-vide sans-resultat" style="padding-top:14px">Aucune technique pour l'instant — importe un pack ou capture la tienne.</p>`}function ec(e){let t=Ve(e.bibliotheque);return P`
    <div class="ecran ${t?`ecran-vierge`:``}">
      ${Hs()}
      ${t?Ds({installerPackOfficiel:()=>e.ouvrirPlusSection(`packs-officiels`),importerDepuisFichier:()=>e.choisirPackAImporter(),restaurerSauvegarde:()=>e.choisirPackAImporter(),creerPremiereTechnique:()=>{e.ajouter={creation:!0},e.requestUpdate()}}):Qs(e).corps}
    </div>
  `}function tc(e,t){let n=e.bibliotheque.disciplines.find(e=>e.id===t);if(!n)return P`<div class="ecran"><p class="fil-vide">Discipline introuvable.</p></div>`;let{corps:r,nombre:i}=Qs(e,t);return P`
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
                 @keydown=${t=>{t.key===`Enter`&&Vs(e,n,t.target)}}>
          <button class="bouton principal"
            @click=${t=>{let r=t.target.parentElement.querySelector(`input`);Vs(e,n,r)}}>Créer</button>
        </div>
      </div>
    </div>
  `}function nc(e,t){return t?e.bibliotheque.disciplines.flatMap(e=>e.familles).find(e=>e.id===t)?.nom??``:``}function rc(e,t){let n={referentiel:0,enseignement:1,ressource:2,personnel:3};return e.bibliotheque.contributions.filter(e=>e.techniqueId===t.id).sort((e,t)=>(n[e.provenance]??9)-(n[t.provenance]??9)).flatMap(e=>e.medias.map(t=>({media:t,contribution:e})))}function ic(e,t){let n=e.bibliotheque,r=e.technique(t);if(!r)return P`<div class="ecran"><p class="fil-vide">Technique introuvable.</p></div>`;let i=n.disciplines.find(e=>e.id===r.disciplineId),a={referentiel:1,enseignement:2,ressource:3,personnel:4},o=n.contributions.filter(e=>e.techniqueId===r.id&&e.provenance!==`personnel`).sort((e,t)=>(a[e.provenance]??9)-(a[t.provenance]??9)),s=o.find(e=>(e.description??``).trim()||e.pointsCles.length)??o[0],c=n.contributions.filter(e=>e.techniqueId===r.id&&e.provenance===`personnel`&&!e.attribution).sort((e,t)=>t.creeLe.localeCompare(e.creeLe)),l=oa(n,r.id),u=rc(e,r),d=u.find(e=>e.media.id===r.mediaPrincipalId)??u[0],f=u.find(t=>t.media.id===e.mediaAffiche)??d,p=(e,t)=>e.media.label??`Vidéo ${t+1}`,m=e.estFavori(r.id),h=e.editionFiche,g=(s?.pointsCles??[]).join(`
`);return P`
    <div class="ecran">
      <div class="barre fiche-barre">
        ${h?F:P`<button class="bouton-icone" aria-label="Retour" title="Retour" @click=${()=>e.retour()}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg>
            </button>`}
        <span class="contexte">${r.nom}</span>
        <div class="fiche-actions">
          ${h?P`<button class="bouton-icone actif" aria-label="Enregistrer" title="Enregistrer et fermer l'édition"
                @click=${()=>e.validerEditionFiche()}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7"/></svg>
              </button>`:F}
          <button class="bouton-icone etoile-favori ${m?`actif`:``}" aria-pressed=${m}
            aria-label=${m?`Retirer des favoris`:`Ajouter aux favoris`}
            title=${m?`Retirer des favoris`:`Ajouter aux favoris`}
            @click=${()=>void e.basculerFavori(r.id)}>${Ys(m)}</button>
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
              </button>`:F}
        </div>
      </div>

      ${h?sc(e,r):oc(e,r,i)}

      ${h?F:fc(r)}

      ${h?cc(e,r,u):f?P`<div class="media-principal">
              ${pc(e,f.media,f.contribution.attribution)}
              <!-- Choix des médias SOUS l'image, « Ajouter » à côté : le geste le plus fréquent n'attend plus le mode édition. -->
              <div class="chips-filtres media-choix" aria-label="Médias de la technique">
                ${u.map((t,n)=>P`<button class="chip-filtre ${t.media.id===f.media.id?`actif`:``}"
                  @click=${()=>{e.mediaAffiche=t.media.id,e.requestUpdate()}}>${p(t,n)}</button>`)}
                <button class="chip-filtre media-ajout" @click=${()=>e.ajoutMedia={techniqueId:r.id,provenance:`personnel`}}>＋ Ajouter</button>
              </div>
            </div>`:ac(e,r)?P`<div class="media-principal">
                <img class="couverture-fiche" src=${ac(e,r).url} alt="">
                <div class="couverture-fiche-pied">
                  <span>${ac(e,r).propre?`Illustration — aucune vidéo pour l'instant`:`Illustration de la famille — aucune vidéo pour l'instant`}</span>
                  <button class="chip-filtre" @click=${()=>e.ajoutMedia={techniqueId:r.id,provenance:`personnel`}}>🎞 Ajouter un média</button>
                </div>
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
          </section>`:ks(`Description`,`Aucune description pour l'instant. Touche le crayon pour en écrire une.`)}

      ${s&&(s.pointsCles.length||h)?P`<section class="bloc-lecture">
            <h2 class="section-titre">Points clés</h2>
            ${h?P`<textarea class="champ-note" style="min-height:80px" .value=${g}
                  placeholder="Un point clé par ligne" aria-label="Points clés"
                  @change=${t=>void e.amenderContribution(s.id,{pointsCles:t.target.value.split(`
`)})}></textarea>`:P`<ol class="points">${s.pointsCles.map(e=>P`<li>${e}</li>`)}</ol>`}
          </section>`:ks(`Points clés`,`Aucun point clé. Touche le crayon pour en ajouter.`)}

      ${s?.variantes?P`<section class="bloc-lecture"><p><em>${s.variantes}</em></p></section>`:F}

      ${e.preferences.vueRelationBeta?Cs(e,n,r):F}
      ${e.preferences.compositionsBeta?js(l,{technique:t=>e.technique(t),vignette:t=>ro(e,t),ouvrir:t=>e.ouvrirComposition(t)}):F}

      <section class="bloc-lecture commentaire">
        <h2 class="section-titre">Commentaire</h2>
        ${e.pinConfigure?P`<p class="commentaire-zone">${c[0]?.description?P`${c[0].description}`:P`<span class="fil-vide">Aucune note.</span>`}</p>
              <div class="geste" style="padding-top:4px">🔒 Lecture seule — un PIN protège cet appareil.</div>`:Ia(e.generationCarnet,P`<textarea class="champ-note commentaire-zone" style="min-height:72px" .value=${c[0]?.description??``}
              placeholder="Ta note, ton repère, juste pour toi" aria-label="Commentaire"
              @change=${t=>{let n=t.target.value;c[0]?e.majContribution(c[0].id,n):n.trim()&&e.ajouterNote(r.id,n)}}></textarea>`)}
      </section>

      ${h?F:Os(()=>e.autoriser(`modification`,`Saisis le PIN pour modifier « ${r.nom} ».`,()=>e.entrerEditionFiche(r.id)))}
    </div>
  `}function ac(e,t){let n=t.couverture?.type===`fichier`?Ye(t.couverture.imageId):null;if(n)return{url:n,propre:!0};let r=no(e,t);return r?{url:r,propre:!1}:null}function oc(e,t,n){let r=nc(e,t.familleId);return P`
    <div class="fiche-entete">
      ${r?P`<div class="fiche-famille">${r}</div>`:F}
      <h1>${t.nom}</h1>
      ${t.nomTraditionnel?P`<div class="jp">${t.nomTraditionnel}</div>`:F}
    </div>
    ${t.niveauxIds.length?P`<div class="pastilles">
          ${t.niveauxIds.map(e=>{let t=n?.niveaux.find(t=>t.id===e);return t?P`<span class="pastille">${io(t)}${t.nom}</span>`:F})}
        </div>`:F}
  `}function sc(e,t){let n=e.bibliotheque,r=n.disciplines.find(e=>e.id===t.disciplineId);return P`
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
                  ${io(n)}<span>${n.nom}</span>
                </label>`)}
            </div>`:F}

    </div>
  `}function cc(e,t,n){return P`
    <div class="edition edition-medias">
      <div class="etiquette-champ">Médias</div>
      <button class="action-douce" @click=${()=>e.ajoutMedia={techniqueId:t.id,provenance:`personnel`}}>
        🎞 Ajouter un média <span>(filmer, choisir un fichier ou coller un lien)</span>
      </button>
      ${n.length===0?P`<p class="fil-vide" style="padding:6px 0">Aucun média — le geste se filme, se choisit ou se lie.</p>`:n.map(({media:r,contribution:i},a)=>lc(e,t,r,i,a,n.length))}
      ${uc(e,t,n)}
    </div>
  `}function lc(e,t,n,r,i,a){let o=n.id===t.mediaPrincipalId||!t.mediaPrincipalId&&i===0;return P`
    <div class="bloc-media-edition">
      <input class="champ-edition" .value=${n.label??``} placeholder="Titre de la vidéo" aria-label="Titre de la vidéo"
        @change=${t=>void e.majMediaLabel(n.id,t.target.value)}>
      ${pc(e,n,r.attribution)}
      <div class="bloc-media-actions">
        ${a>1?o?P`<span class="badge-principal">✓ Vidéo principale</span>`:P`<button class="chip-filtre"
                @click=${()=>void e.majTechnique(t.id,{mediaPrincipalId:n.id}).then(()=>e.afficherToast(`Vidéo principale mise à jour ✓`))}>
                ★ Définir comme principale</button>`:F}
        <button class="bouton-retrait-media" aria-label="Retirer ce média"
          @click=${()=>void e.retirerMedia(t.id,n.id)}>🗑 Retirer</button>
      </div>
    </div>
  `}function uc(e,t,n){return P`
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
    ${dc(t)}
  `}function dc(e){let t=e.couverture?.type===`fichier`?Ye(e.couverture.imageId):null;return t?P`<div class="couverture-apercu"><img src=${t} alt="Vignette actuelle"></div>`:F}function fc(e){let t=e.alertes??[];return t.length?P`${t.map(e=>P`<div class="alerte alerte--${e.niveau}" role="note">
      <span class="alerte-icone" aria-hidden="true">⚠️</span>
      <div class="alerte-corps">
        <strong>${e.libelle}</strong>
        ${e.detail?P`<span class="alerte-detail">${e.detail}</span>`:F}
        ${e.reference?.url&&eo(e.reference.url)?P`<a class="alerte-ref" href=${eo(e.reference.url)} target="_blank" rel="noopener noreferrer"
              title=${`Quitte Movenso — ${to(e.reference.url)??`lien externe`}`}>${e.reference.organisation??`Référence`}${e.reference.article?` · art. ${e.reference.article}`:``} ↗</a>`:e.reference?P`<span class="alerte-ref">${e.reference.organisation??`Référence`}${e.reference.article?` · art. ${e.reference.article}`:``}</span>`:F}
      </div>
    </div>`)}`:F}function pc(e,t,n){let r=e.mediasDeplies.has(t.id),i=()=>{e.mediasDeplies=new Set([t.id]),document.querySelectorAll(`video`).forEach(e=>e.pause()),e.requestUpdate()};if(t.type===`plateforme`&&t.service===`youtube`)return Za(t.ref)?r?P`<div class="media-video"><iframe
            src="https://www.youtube-nocookie.com/embed/${t.ref}"
            title=${t.label??`Vidéo`} allow="encrypted-media; picture-in-picture" allowfullscreen></iframe></div>`:P`<button class="bouton-video" @click=${i}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="#fff" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>
          <span>${t.label??`Vidéo${n?` (${n})`:``}`} — lecture en ligne</span>
        </button>`:P`<span class="joint" title="Référence vidéo invalide">🔗 vidéo en ligne non vérifiable</span>`;if(t.type===`lien`){let e=eo(t.ref);return e?r?P`<div class="media-video"><video src=${e} controls playsinline
          @play=${e=>{document.querySelectorAll(`video`).forEach(t=>{t!==e.target&&t.pause()})}}></video></div>`:P`<button class="bouton-video" @click=${i}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="#fff" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>
          <span>${t.label??`Vidéo`} — lecture en ligne</span>
        </button>`:P`<span class="joint" title="Lien non https — jamais chargé">🔗 ${t.ref}</span>`}return P`<movenso-video-locale .app=${e} .mediaId=${t.id}></movenso-video-locale>`}var mc=5,hc=new Set;function gc(e,t){return(t.techniqueId?e.technique(t.techniqueId):void 0)?.nom??((t.texte??``).trim()||`Étape`)}function _c(e,t){return[(t.techniqueId?e.technique(t.techniqueId):void 0)?.nomTraditionnel,t.consigne].filter(e=>!!e?.trim()).join(` · `)}function vc(e,t){let n=(e.acteurs??[]).findIndex(e=>e.id===t.acteurId);return n<0?null:{nom:e.acteurs[n].nom,rang:n+1}}function yc(e,t){let n=t.blocs.find(e=>e.type===`technique`&&e.techniqueId),r=n?.techniqueId?e.technique(n.techniqueId):void 0;return r?ro(e,r):F}function bc(e){return e.provenance===`personnel`?null:e.attribution?.trim()||`Pack`}function xc(e,t){let n=bc(t);return P`
    <div class="fiche-compo-tete">
      <div class="fiche-compo-vignette">${yc(e,t)}</div>
      <div class="fiche-compo-identite">
        <h1>${t.nom}</h1>
        ${n?P`<span class="badge-source">${n}</span>`:F}
      </div>
    </div>
    ${t.description?P`<p class="fiche-compo-desc">${t.description}</p>`:F}
    ${Sc(t)}
  `}function Sc(e){let t=wa(e),n=ba(e),r=e.acteurs??[],i=ha(e)?fa(e).length:0;return P`
    <div class="fiche-compo-stats">
      <span><b>${t}</b> étape${t>1?`s`:``}</span>
      ${i>0?P`<span><b>${i}</b> temps</span>`:F}
      ${n>0?P`<span><b>${ya(n)}</b></span>`:F}
      ${r.length>=2?P`<span class="fiche-compo-roles">${r.map((e,t)=>P`<em data-acteur-rang=${t+1}>${e.nom}</em>`)}</span>`:P`<span>Seul</span>`}
    </div>`}function Cc(e,t){let n=hc.has(t.id),r=t.blocs.filter(e=>e.type!==`media`),i=n?r:r.slice(0,mc),a=0;return P`
    <h2 class="fiche-compo-section">Aperçu des étapes</h2>
    <ol class="apercu-etapes">
      ${i.map(n=>{if(Sa(n))return P`<li class="apercu-jalon">${Ca(n)}</li>`;a++;let r=vc(t,n),i=_c(e,n),o=n.techniqueId?e.technique(n.techniqueId):void 0;return P`<li class="apercu-etape">
          <span class="apercu-no">${a}</span>
          <span class="apercu-vignette">${o?ro(e,o):F}</span>
          <span class="apercu-texte">
            <span class="apercu-nom">${gc(e,n)}${r?P`<em class="badge-role" data-acteur-rang=${r.rang}>${r.nom}</em>`:F}</span>
            ${i?P`<span class="apercu-sous">${i}</span>`:F}
          </span>
          ${n.dureeSec?P`<span class="apercu-duree">${ya(n.dureeSec)}</span>`:F}
        </li>`})}
    </ol>
    ${r.length>mc?P`<button class="apercu-suite" @click=${()=>{n?hc.delete(t.id):hc.add(t.id),e.requestUpdate()}}>${n?`Replier l'aperçu`:`Voir les ${r.length} étapes`}</button>`:F}
  `}function wc(e,t){return P`
    <div class="fiche-compo-actions">
      ${t.blocs.length?P`<button class="action-forte" @click=${()=>e.demarrerEntrainement(t.id)}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 5v14l12-7z"/></svg>
            Démarrer</button>`:F}
      <button class="action-seconde" @click=${()=>void e.dupliquerComposition(t.id)}>Dupliquer</button>
      <button class="action-seconde" disabled title="La planification arrive avec l'Agenda">
        Planifier <small>bientôt</small>
      </button>
    </div>
  `}function Tc(e,t,n){let r=e.preferences.derniereLecture;r&&r.compositionId===t&&r.index===n||(e.preferences={...e.preferences,derniereLecture:{compositionId:t,index:n,quand:new Date().toISOString()}},e.stockage.sauvegarderPreferences(e.preferences))}function Ec(e){if(!e.preferences.derniereLecture)return;let{derniereLecture:t,...n}=e.preferences;e.preferences=n,e.stockage.sauvegarderPreferences(e.preferences)}function Dc(e,t){return P`<div class="entrainement-jauge" aria-hidden="true">
    <span style=${`width:${((t>0?Math.min(1,Math.max(0,e/t)):0)*100).toFixed(1)}%`}></span>
  </div>`}function Oc(e,t){let n=la(e,t);return n?P`<em class="badge-role" data-acteur-rang=${(e.acteurs??[]).findIndex(e=>e.id===n.id)+1}>${n.nom}</em>`:F}function kc(e,t,n,r){let i=r.type===`technique`?r.techniqueId&&e.technique(r.techniqueId)?.nom||r.texte||`technique`:r.texte||(r.dureeSec===void 0?`Segment`:ya(r.dureeSec)),a=la(t,n),o=la(t,r);return P`
    <div class="entrainement-suite">
      <span class="suite-libelle">Ensuite</span>
      <span class="suite-corps">
        ${a&&o&&a.id!==o.id?P`<span class="suite-passation">${Oc(t,n)}
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><path d="M4 12h14M13 7l5 5-5 5"/></svg>
              ${Oc(t,r)}</span>`:Oc(t,r)}
        <span class="suite-nom">${i}</span>
        ${r.dureeSec===void 0?F:P`<span class="suite-duree">${ya(r.dureeSec)}</span>`}
      </span>
    </div>`}function Ac(e,t,n){return P`<div class="entrainement-anneau" style=${`--part:${(t>0?Math.min(1,Math.max(0,e/t)):0).toFixed(4)}`} aria-hidden="false">${n}</div>`}var jc=3,Mc={onglet:null,tri:`recent`,deplies:new Set};function Nc(){Mc.onglet=`packs`}function Pc(e){return e.provenance===`personnel`}function Fc(e,t){let n=e.bibliotheque.disciplines.findIndex(e=>e.nom===t);return n<0?0:n%6+1}function Ic(e,t){let n=new Map;for(let r of t.blocs){if(r.type!==`technique`||!r.techniqueId)continue;let t=e.technique(r.techniqueId),i=t&&e.bibliotheque.disciplines.find(e=>e.id===t.disciplineId);i&&n.set(i.nom,(n.get(i.nom)??0)+1)}return[...n].map(([e,t])=>({nom:e,poids:t})).sort((e,t)=>t.poids-e.poids)}function Lc(e,t){let n=Ic(e,t);return n.length===0||n.length>1&&n[1].poids===n[0].poids?null:n[0].nom}var Rc=P`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M8 6h13M8 12h13M8 18h13M3.5 6h.01M3.5 12h.01M3.5 18h.01"/></svg>`,zc=P`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/></svg>`,Bc=P`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="8" r="3.6"/><path d="M5.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6"/></svg>`,Vc=P`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><circle cx="9" cy="8" r="3.4"/><path d="M2.5 20c0-3.5 2.9-5.8 6.5-5.8S15.5 16.5 15.5 20"/><circle cx="17.5" cy="8.5" r="2.8"/><path d="M16 14.4c3 .3 5.5 2.4 5.5 5.6"/></svg>`;function Hc(e){let t=wa(e),n=ba(e),r=e.acteurs??[];return P`
    <span class="meta-ligne">
      <span><span class="meta-ic">${Rc}</span>${t===0?`à construire`:`${t} étape${t>1?`s`:``}`}</span>
      ${n>0?P`<span><span class="meta-ic">${zc}</span>${ya(n)}</span>`:F}
      ${r.length>=2?P`<span><span class="meta-ic">${Vc}</span>${r.length===2?`À deux`:`${r.length} rôles`}</span>`:P`<span><span class="meta-ic">${Bc}</span>Seul</span>`}
    </span>`}function Uc(e,t){let n=t.acteurs??[];if(n.length>=2)return P`<span class="carte-badges">${n.map((e,t)=>P`<em class="badge-role" data-acteur-rang=${t+1}>${e.nom}</em>`)}</span>`;let r=Ic(e,t);return Lc(e,t)===null&&r.length>1?P`<span class="carte-badges"><em class="badge-mixte">Mixte · ${r.map(e=>e.nom).join(` + `)}</em></span>`:F}function Wc(e,t){let n=t.blocs.find(e=>e.type===`technique`&&e.techniqueId),r=n?.techniqueId?e.technique(n.techniqueId):void 0;return r?ro(e,r):F}function Gc(e,t){let n=Lc(e,t),r=n?Fc(e,n):0,i=Pc(t);return P`
    <article class="carte-liste composition-carte" data-acteur-rang=${r}>
      <button class="composition-ouvrir" @click=${()=>e.ouvrirComposition(t.id)}>
        <span class="carte-liste-vignette">${Wc(e,t)}</span>
        <span class="carte-liste-corps">
          <span class="carte-liste-titre">${t.nom}</span>
          ${Hc(t)}
          ${Uc(e,t)}
        </span>
      </button>
      ${t.blocs.length?P`<button class="rond-action plein composition-play" aria-label="Démarrer « ${t.nom} »" title="Passer en revue"
            @click=${()=>e.demarrerEntrainement(t.id)}>
            <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5.5v13l11-6.5z"/></svg>
          </button>`:F}
      ${i?P`<button class="rond-action fantome composition-options" aria-label="Options de « ${t.nom} »" title="Autres actions"
            @click=${()=>{e.menuComposition=t.id,e.requestUpdate()}}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="12" cy="5.5" r="1.7"/><circle cx="12" cy="12" r="1.7"/><circle cx="12" cy="18.5" r="1.7"/></svg>
          </button>`:P`<button class="rond-action fantome composition-dupliquer" aria-label="Dupliquer « ${t.nom} »" title="Dupliquer pour personnaliser"
            @click=${()=>void e.dupliquerComposition(t.id)}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" aria-hidden="true"><rect x="9" y="9" width="11.5" height="11.5" rx="2.5"/><path d="M15 5.5A2 2 0 0 0 13 3.5H6A2.5 2.5 0 0 0 3.5 6v7a2 2 0 0 0 2 2"/></svg>
          </button>`}
    </article>`}function Kc(e,t){let n=[...e];return t===`nom`?n.sort((e,t)=>e.nom.localeCompare(t.nom,`fr`)):t===`duree`?n.sort((e,t)=>ba(t)-ba(e)):n.sort((e,t)=>(t.modifieLe??t.creeLe).localeCompare(e.modifieLe??e.creeLe))}function qc(e,t,n,r){let i=(t,n,i)=>P`
    <button class="segment ${r===t?`actif`:``}" aria-pressed=${r===t}
      @click=${()=>{Mc.onglet=t,e.requestUpdate()}}>
      ${n}<span class="segment-compte">${i}</span>
    </button>`;return P`<div class="segments" role="group" aria-label="Quelles compositions afficher">
    ${i(`mes`,`Mes compositions`,t)}${i(`packs`,`Packs`,n)}
  </div>`}function Jc(e){return P`<label class="tri-compos">Trier par
    <select aria-label="Trier les compositions" .value=${Mc.tri}
      @change=${t=>{Mc.tri=t.target.value,e.requestUpdate()}}>
      <option value="recent">Récent</option>
      <option value="nom">Nom</option>
      <option value="duree">Durée</option>
    </select>
  </label>`}function Yc(e,t){let n=new Map;for(let r of t){let t=Lc(e,r)??`Mixtes`,i=n.get(t);i?i.push(r):n.set(t,[r])}return P`${[...n.keys()].sort((e,t)=>n.get(t).length-n.get(e).length||e.localeCompare(t,`fr`)).map(t=>{let r=Kc(n.get(t),Mc.tri),i=Mc.deplies.has(t),a=i?r:r.slice(0,jc);return P`<section class="groupe-pack" aria-label=${t}>
      <header class="groupe-tete">
        <span class="pastille-disc" data-acteur-rang=${t===`Mixtes`?0:Fc(e,t)} aria-hidden="true"></span>
        <h3>${t}</h3><span class="groupe-compte">${r.length}</span>
      </header>
      ${a.map(t=>Gc(e,t))}
      ${r.length>jc?P`<button class="voir-plus" @click=${()=>{i?Mc.deplies.delete(t):Mc.deplies.add(t),e.requestUpdate()}}>${i?`Replier`:`Voir les ${r.length}`}</button>`:F}
    </section>`})}`}function Xc(e,t){let n=e.preferences.derniereLecture,r=n&&t.find(e=>e.id===n.compositionId);if(!n||!r||n.index>=r.blocs.length)return F;let i=r.blocs[n.index],a=i.techniqueId?e.technique(i.techniqueId)?.nom??i.texte??`étape`:(i.texte??``).trim()||`étape`;return P`
    <section class="reprise" aria-label="Reprendre où tu t'es arrêté">
      <div class="reprise-tete"><span class="reprise-libelle">Continuer</span></div>
      <article class="carte-liste reprise-carte" data-acteur-rang=${(()=>{let t=Lc(e,r);return t?Fc(e,t):0})()}>
        <button class="composition-ouvrir reprise-ouvrir" @click=${()=>e.ouvrirComposition(r.id)}>
          <span class="carte-liste-vignette">${Wc(e,r)}</span>
          <span class="carte-liste-corps">
            <span class="carte-liste-titre">${r.nom}</span>
            <span class="reprise-position">${n.index+1} / ${r.blocs.length} · ${a}</span>
          </span>
        </button>
        <button class="rond-action plein reprise-reprendre" aria-label="Reprendre « ${r.nom} » à l'étape ${n.index+1}"
          title="Reprendre où tu t'es arrêté" @click=${()=>e.demarrerEntrainement(r.id,n.index)}>
          <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5.5v13l11-6.5z"/></svg>
        </button>
      </article>
    </section>`}function Zc(e,t,n,r,i){let a=t.filter(Pc),o=t.filter(e=>!Pc(e)),s=a.length>0||o.length===0?`mes`:`packs`,c=Mc.onglet,l=c&&(e=>e===`mes`?a.length:o.length)(c)>0?c:s,u=n.filter(e=>l===`mes`?Pc(e):!Pc(e));return P`
    <header class="marque"><div style="flex:1"><div class="nom">Compositions</div>
      ${t.length<=3?P`<div class="devise">Assemble tes techniques en enchaînements et en séances.</div>`:F}</div></header>
    ${r}
    ${Xc(e,t)}
    ${qc(e,a.length,o.length,l)}
    ${u.length===0?i:l===`packs`?P`<div class="fil fil-packs">${Yc(e,u)}</div>
            <p class="pied-explicatif"><b>Ces compositions viennent de tes packs.</b>
              Duplique-en une pour la personnaliser : l'originale suit les mises à jour du pack,
              ta copie t'appartient.</p>`:P`<div class="sect-liste"><h3>Mes compositions</h3>${Jc(e)}</div>
            <div class="fil">${Kc(u,Mc.tri).map(t=>Gc(e,t))}</div>`}
  `}var Qc={requete:``,filtre:null};function $c(e){return e.normalize(`NFD`).replace(/[\u0300-\u036f]/g,``).toLowerCase().replace(/[^a-z0-9]/g,``)}function el(e){let t=[...e.bibliotheque.compositions],n=$c(Qc.requete.trim()),r=t=>!n||$c(t.nom).includes(n)?!0:t.blocs.some(t=>{if(t.type!==`technique`||!t.techniqueId)return!1;let r=e.technique(t.techniqueId);return!!r&&($c(r.nom).includes(n)||(r.nomTraditionnel?$c(r.nomTraditionnel).includes(n):!1))}),i=new Map(t.map(t=>[t.id,Ic(e,t).map(e=>e.nom)])),a=e=>{if(!Qc.filtre)return!0;let t=i.get(e.id)??[];return Qc.filtre===`__mixte__`?t.length>1:t.includes(Qc.filtre)},o=t.filter(e=>r(e)&&a(e)),s=[...new Set([...i.values()].flat())].sort((e,t)=>e.localeCompare(t,`fr`)),c=[...i.values()].some(e=>e.length>1),l=P`
    <label class="recherche compositions-recherche">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.8-3.8"/></svg>
      <input type="search" aria-label="Rechercher une composition ou une technique qu'elle contient"
        placeholder="Nom, ou technique contenue…" .value=${Qc.requete}
        @input=${t=>{Qc.requete=t.target.value,e.requestUpdate()}}>
    </label>
    ${s.length>1||c?P`<div class="chips-filtres compositions-chips" aria-label="Filtrer par discipline">
          ${s.map(t=>P`<button class="chip-filtre ${Qc.filtre===t?`actif`:``}"
            @click=${()=>{Qc.filtre=Qc.filtre===t?null:t,e.requestUpdate()}}>${t}</button>`)}
          ${c?P`<button class="chip-filtre ${Qc.filtre===`__mixte__`?`actif`:``}"
            @click=${()=>{Qc.filtre=Qc.filtre===`__mixte__`?null:`__mixte__`,e.requestUpdate()}}>Mixte</button>`:F}
        </div>`:F}`,u=P`<p class="fil-vide" style="padding-top:12px">Aucune composition ici${n?P` pour « ${Qc.requete.trim()} »`:F} —
    <button class="lien-nu" @click=${()=>{Qc.requete=``,Qc.filtre=null,e.requestUpdate()}}>tout réafficher</button>.</p>`;return P`
    <div class="ecran">
      ${t.length===0?P`<header class="marque"><div style="flex:1"><div class="nom">Compositions</div>
              <div class="devise">Tes enchaînements, programmes, séances…</div></div></header>
            <p class="fil-vide" style="padding-top:12px">
              Assemble et ordonne plusieurs techniques pour créer un enchaînement ou une séance.
              Touche <b>＋ Créer</b> en bas pour commencer.
            </p>`:Zc(e,t,o,l,u)}
    </div>
  `}function tl(e,t,n){let r=t??0,i=Math.floor(r/60),a=r%60,o=(e,t)=>Array.from({length:e},(e,n)=>P`<option value=${n} ?selected=${n===t}>${`${n}`.padStart(2,`0`)}</option>`),s=(t,r)=>{let i=t*60+r;n(i<=0?void 0:i),e.requestUpdate()};return P`
    <div class="duree-picker">
      <div class="duree-affiche">${t===void 0?`Aucune durée`:ia(t)}</div>
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
    </div>`}var J={quoi:`technique`,requete:``,techId:void 0,techNom:``,libre:``,dureeSec:void 0,acteurId:void 0,lien:!1};function nl(){Kl=null}function rl(){J.requete=``,J.techId=void 0,J.techNom=``,J.libre=``,J.dureeSec=void 0,J.acteurId=void 0,J.lien=!1}function il(e,t,n,r){return P`
    <button class="chip-filtre bascule-lien ${r} ${t?`actif`:``}"
      role="switch" aria-checked=${t} style="margin-top:10px"
      @click=${()=>{n(!t),e.requestUpdate()}}>
      Rejoint le temps précédent
    </button>`}function al(e,t){return t.type===`technique`?t.techniqueId&&e.technique(t.techniqueId)?.nom||t.texte||`technique`:t.type===`pause`?t.texte||`Pause`:t.texte||(t.dureeSec===void 0?`étape`:ya(t.dureeSec))}function ol(e,t){let n=e.bibliotheque,r=n.compositions.find(e=>e.id===t),i=J.quoi===`technique`,a=i?J.requete.trim()?Nr(n,J.requete,6):xa(n,r):[],o=e=>n.disciplines.find(t=>t.id===e)?.nom??``,s=i?J.techId!==void 0:J.libre.trim()!==``||J.dureeSec!==void 0,c=i?J.techId!==void 0:J.libre.trim()!==``,l=r?.acteurs??[],u=J.acteurId===void 0&&r?ua(r)??null:J.acteurId??null;return P`
    <div class="toggle-quoi">
      <button class="chip-choix ${i?`actif`:``}" @click=${()=>{J.quoi=`technique`,e.requestUpdate()}}>Une technique</button>
      <button class="chip-choix ${i?``:`actif`}" @click=${()=>{J.quoi=`libre`,e.requestUpdate()}}>Une saisie libre</button>
    </div>
    ${i?P`<div class="recherche" style="margin:8px 0 0">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.8-3.8"/></svg>
            <input placeholder="Chercher une technique…" aria-label="Chercher une technique" autocomplete="off" .value=${J.requete}
                   @input=${t=>{J.requete=t.target.value,J.techId=void 0,e.requestUpdate()}}>
          </div>
          ${a.length?P`<div class="resultats" style="padding:6px 0 0">
                ${a.map(t=>P`<button class="resultat ${J.techId===t.id?`actif`:``}"
                    @click=${()=>{J.techId=t.id,J.techNom=t.nom,J.requete=t.nom,e.requestUpdate()}}>
                    <span>${t.nom}</span><span class="jp">${t.nomTraditionnel??``}</span><span class="fam">${o(t.disciplineId)}</span>
                  </button>`)}
              </div>`:F}`:P`<input class="champ-edition" style="margin-top:8px" placeholder="Décris l'étape (échauffement, transition, repère…)"
              .value=${J.libre} aria-label="Saisie libre"
              @input=${t=>{J.libre=t.target.value,e.requestUpdate()}}>`}
    ${l.length&&c?P`<div class="section-titre" style="padding:12px 4px 4px">Qui agit</div>
          <div class="chips-filtres choix-acteur" style="flex-wrap:wrap; padding:0">
            ${l.map((t,n)=>P`<button class="chip-filtre ${u===t.id?`actif`:``}" data-acteur-rang=${n+1}
                @click=${()=>{J.acteurId=t.id,e.requestUpdate()}}>${t.nom}</button>`)}
            <button class="chip-filtre ${u===null?`actif`:``}"
              @click=${()=>{J.acteurId=null,e.requestUpdate()}}>Tous</button>
          </div>`:F}
    ${(r?.blocs.length??0)>0&&c?il(e,J.lien,e=>{J.lien=e},`choix-lien`):F}
    <!-- UI-4 (D-322) : les réglages n'arrivent QU'APRÈS le contenu — la feuille
         s'ouvrait sur deux molettes de durée avant qu'on ait choisi quoi ajouter.
         Exception assumée : en SAISIE LIBRE, une durée seule crée une pause — la
         durée y est un contenu, la masquer aurait retiré le seul chemin vers une
         pause. -->
    ${c||!i?P`<div class="section-titre" style="padding:12px 4px 4px">Durée (facultatif)</div>
          ${tl(e,J.dureeSec,t=>{J.dureeSec=t,e.requestUpdate()})}`:F}
    <button class="bouton principal ajout-valider" ?disabled=${!s} @click=${()=>{let n=J.dureeSec,a=(r?.blocs.length??0)>0&&J.lien,o={...u?{acteurId:u}:{},...a?{lien:!0}:{}};if(i){if(!J.techId)return;let r=J.techId,i=J.techNom;e.modifierComposition(t,e=>e.blocs.push(ca(`technique`,{techniqueId:r,texte:i,...n===void 0?{}:{dureeSec:n},...o})))}else{let r=J.libre.trim();if(!r&&n===void 0)return;let i=!r&&n!==void 0?ca(`pause`,{dureeSec:n,...o}):ca(`etape`,{...r?{texte:r}:{},...n===void 0?{}:{dureeSec:n},...o});e.modifierComposition(t,e=>e.blocs.push(i))}rl(),e.requestUpdate()}}>Ajouter</button>`}function sl(e){let t=e.creationCompo;return P`
    <div class="voile" @click=${()=>{t.etape===`pas`?e.fermerCreationCompo():e.creationCompo=null}}></div>
    <div class="feuille" role="dialog" aria-modal="true" tabindex="-1" aria-label="Créer une composition">
      <div class="prise"></div>
      ${t.etape===`nom`?cl(e,t):t.etape===`roles`?ll(e,t):ul(e,t)}
    </div>`}function cl(e,t){let n=t.nom.trim()!==``,r=()=>{n&&e.creerCompositionFunnel()};return P`
    <h2>Nouvelle composition</h2>
    <div class="geste">Donne-lui un nom — tu pourras tout changer ensuite.</div>
    <div class="creation-discipline" style="margin-top:8px">
      <input .value=${t.nom} aria-label="Nom de la composition"
             @input=${n=>e.creationCompo={...t,nom:n.target.value}}
             @keydown=${e=>{e.key===`Enter`&&r()}}>
      <button class="bouton principal" ?disabled=${!n} @click=${r}>Suivant</button>
    </div>
    <!-- UI-4 (D-322) : « partir d'une composition existante » n'était nommé
         nulle part — il fallait savoir aller sur l'onglet Packs. Aucune fonction
         nouvelle : dupliquer une composition ENTIÈRE existe (arbitrage porteur),
         on la rend trouvable depuis l'endroit où l'on crée. Et on ne l'offre que
         s'il y a vraiment une séance de pack au bout : proposer un chemin vide
         serait pire que de ne rien dire. -->
    ${e.bibliotheque.compositions.some(e=>e.provenance!==`personnel`)?P`<button class="lien-nu depart-pack" @click=${()=>{e.creationCompo=null,Nc(),e.ouvrirCompositions()}}>
          Ou pars d'une séance de tes packs — duplique-la, puis adapte-la.
        </button>`:F}
    <div class="actions"><button class="bouton" @click=${()=>e.creationCompo=null}>Annuler</button></div>`}function ll(e,t){let n=t.roles??[],r=r=>{e.creationCompo={...t,roles:Array.from({length:r},(e,t)=>n[t]??``)}},i=(r,i)=>{let a=[...n];a[r]=i,e.creationCompo={...t,roles:a}},a=n.length===0||n.length>=2&&n.every(e=>e.trim()!==``),o=(t,n,r)=>P`
    <button class="chip-choix ${n?`actif`:``}" @click=${()=>{r(),e.requestUpdate()}}>${t}</button>`;return P`
    <h2>Qui pratique ?</h2>
    <div class="geste">Tu pourras en ajouter ou en retirer plus tard.</div>
    <!-- Deux choix, pas trois (D-232) : « à plusieurs » commence à DEUX et
         « ＋ Ajouter un rôle » fait le reste — la troisième puce « Plus »
         n'ajoutait qu'un palier arbitraire. -->
    <div class="toggle-quoi choix-nombre-roles" style="margin-top:10px">
      ${o(`Seul`,n.length===0,()=>r(0))}
      ${o(`À plusieurs`,n.length>=2,()=>r(Math.max(2,n.length)))}
    </div>
    ${n.length?P`<div class="acteurs-liste" style="margin-top:12px">
            ${n.map((r,a)=>P`
              <div class="acteur-ligne">
                <span class="acteur-puce" data-acteur-rang=${a+1} aria-hidden="true"></span>
                <input class="champ-mini nom-role" .value=${r} placeholder="Nom du rôle" aria-label="Nom du rôle ${a+1}"
                  @input=${e=>i(a,e.target.value)}>
                ${n.length>2?P`<button class="bouton-icone" aria-label="Retirer ce rôle"
                      @click=${()=>{e.creationCompo={...t,roles:n.filter((e,t)=>t!==a)},e.requestUpdate()}}>✕</button>`:F}
              </div>`)}
            ${n.length>=2?P`<button class="chip-filtre acteur-ajouter"
                  @click=${()=>{e.creationCompo={...t,roles:[...n,``]},e.requestUpdate()}}>＋ Ajouter un rôle</button>`:F}
            ${n.length>2?P`<div class="aide-largeur">Sur un écran étroit, la lecture se fait en une colonne — les temps restent.</div>`:F}
          </div>`:F}
    <div class="actions" style="margin-top:14px">
      <button class="bouton principal valider-roles" ?disabled=${!a}
        @click=${()=>void e.poserRolesFunnel(n)}>Suivant</button>
    </div>`}function ul(e,t){let n=e.bibliotheque.compositions.find(e=>e.id===t.compoId),r=n?.blocs??[];return P`
    <h2>${n?.nom??`Composition`}</h2>
    <div class="geste">Ajoute tes éléments dans l'ordre.</div>
    ${r.length?P`<ol class="funnel-pas">${r.map((t,n)=>P`<li>${n+1}. ${al(e,t)}</li>`)}</ol>`:P`<p class="fil-vide" style="padding:6px 2px">Aucun élément pour l'instant.</p>`}
    ${ol(e,t.compoId)}
    <div class="actions" style="margin-top:12px">
      <button class="bouton principal" @click=${()=>e.fermerCreationCompo()}>Terminer</button>
    </div>`}function dl(e){let t=e.ajoutPas;return P`
    <div class="voile" @click=${()=>{e.ajoutPas=null,e.requestUpdate()}}></div>
    <div class="feuille" role="dialog" aria-modal="true" tabindex="-1" aria-label="Ajouter un élément">
      <div class="prise"></div>
      <h2>Ajouter un élément</h2>
      ${ol(e,t)}
      <div class="actions" style="margin-top:12px">
        <button class="bouton" @click=${()=>{e.ajoutPas=null,e.requestUpdate()}}>Terminer</button>
      </div>
    </div>`}function fl(e){let{compoId:t,blocId:n}=e.editionPas,r=e.bibliotheque,i=r.compositions.find(e=>e.id===t)?.blocs.find(e=>e.id===n),a=()=>{e.editionPas=null,e.requestUpdate()};if(!i)return P`<div class="voile" @click=${a}></div>`;let o=r=>void e.modifierComposition(t,e=>{let t=e.blocs.find(e=>e.id===n);t&&r(t)}),s=i.type===`technique`,c=s&&i.techniqueId?e.technique(i.techniqueId):void 0,l=s&&J.requete.trim()?Nr(r,J.requete,6):[],u=e=>r.disciplines.find(t=>t.id===e)?.nom??``;return P`
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
              <input placeholder="Chercher une technique…" aria-label="Chercher une technique" autocomplete="off" .value=${J.requete}
                @input=${t=>{J.requete=t.target.value,e.requestUpdate()}}>
            </div>
            ${l.length?P`<div class="resultats" style="padding:6px 0 0">
                  ${l.map(e=>P`<button class="resultat" @click=${()=>{J.requete=``,o(t=>{t.techniqueId=e.id,t.texte=e.nom})}}>
                    <span>${e.nom}</span><span class="jp">${e.nomTraditionnel??``}</span><span class="fam">${u(e.disciplineId)}</span>
                  </button>`)}
                </div>`:F}`:P`<div class="section-titre" style="padding:4px 4px 2px">Texte</div>
            <input class="champ-edition" placeholder="Décris l'étape…" .value=${i.texte??``} aria-label="Texte du pas"
              @change=${e=>o(t=>{let n=e.target.value.trim();n?t.texte=n:delete t.texte})}>`}
      ${(e.bibliotheque.compositions.find(e=>e.id===t)?.acteurs??[]).length?P`<div class="section-titre" style="padding:10px 4px 2px">Qui agit</div>
            <div class="chips-filtres edition-acteur" style="flex-wrap:wrap; padding:0">
              ${(e.bibliotheque.compositions.find(e=>e.id===t).acteurs??[]).map((e,t)=>P`<button class="chip-filtre ${i.acteurId===e.id?`actif`:``}" data-acteur-rang=${t+1}
                  @click=${()=>o(t=>{t.acteurId=e.id})}>${e.nom}</button>`)}
              <button class="chip-filtre ${i.acteurId?``:`actif`}"
                @click=${()=>o(e=>{delete e.acteurId})}>Tous</button>
            </div>`:F}
      ${(r.compositions.find(e=>e.id===t)?.blocs[0]?.id??n)===n?F:il(e,da(i),e=>o(t=>{e?t.lien=!0:delete t.lien}),`edition-lien`)}
      <div class="section-titre" style="padding:10px 4px 2px">Durée</div>
      ${tl(e,i.dureeSec,e=>o(t=>{e===void 0?delete t.dureeSec:t.dureeSec=e}))}
      <div class="actions" style="margin-top:14px">
        <button class="action-danger" @click=${()=>{a(),e.modifierComposition(t,e=>ma(e,n))}}>Retirer ce pas</button>
        <button class="bouton principal" @click=${a}>Terminer</button>
      </div>
    </div>`}function pl(e,t,n){let r=t.presentation?.medias??[];return r.length?P`
    <div class="composition-presentation">
      <div class="section-titre section-liste-titre" style="padding:8px 4px 2px">Présentation</div>
      <div class="presentation-medias">
        ${r.map(r=>P`<div class="presentation-media">
            ${pc(e,r)}
            ${n?P`<button class="bouton-icone" aria-label="Retirer de la présentation" title="Retirer de la présentation"
                  @click=${()=>void e.retirerMediaPresentation(t.id,r.id)}>✕</button>`:F}
          </div>`)}
      </div>
    </div>`:P``}function ml(e,t){let n=e.bibliotheque.compositions.find(e=>e.id===t);if(!n)return P`<div class="ecran"><p class="fil-vide">Composition introuvable.</p></div>`;Kl&&Kl!==t&&(Kl=null);let r=Kl===t;return P`
    <div class="ecran">
      <div class="barre fiche-barre">
        <button class="bouton-icone" aria-label="Retour" @click=${()=>e.retour()}>
          <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M15 5l-7 7 7 7"/></svg>
        </button>
        <span class="contexte">Composition${bc(n)?` · ${bc(n)}`:``}</span>
        <!-- Actions à DROITE, dans l'ordre d'une fiche technique : options (⋮) · (jouer) · partager.
             D-126 : plus de crayon — tout se modifie en place, le ⋮ ne garde QUE le hors-séquence
             (renommer, présentation d'ensemble, dupliquer, supprimer). -->
        <div class="fiche-actions">
          <!-- D-233 : édition GLOBALE. Le ✎ bascule tout l'écran — les outils
               de chaque pas et ses puces de rôle/lien apparaissent d'un coup,
               plutôt qu'une feuille par pas. En lecture, les cartes sont nues. -->
          <button class="bouton-icone basculer-edition ${r?`actif`:``}"
            aria-label=${r?`Terminer l'édition`:`Modifier la composition`}
            aria-pressed=${r} title=${r?`Terminer l'édition`:`Modifier la composition`}
            @click=${()=>{Kl=r?null:n.id,e.requestUpdate()}}>${r?`✓`:`✎`}</button>
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

      <!-- UI-2 (D-319) : en LECTURE, l'écran est une FICHE — identité, provenance,
           ce que ça dure, qui agit, aperçu des étapes, puis Démarrer / Dupliquer.
           En ÉDITION (✎), il redevient la surface de travail : c'est le geste
           explicite qui distingue consulter de modifier. -->
      ${r?P`
            <div class="fiche-entete composition-titre-lecture"><h1>${n.nom}</h1>
              ${n.description?P`<div class="jp" style="font-family:var(--ui)">${n.description}</div>`:F}
              <!-- UI-3 (D-321) : ce résumé disait « 4 temps · Tori · Uke » juste
                   au-dessus du bandeau qui dit « 3 étapes · Tori · Uke ». Deux
                   lieux pour la même information, et deux chiffres qui se
                   contredisent à l'œil (un jalon fait un temps, pas une étape)
                   — exactement le piège de D-253. Les rôles vivent dans le
                   bandeau ; le nombre de TEMPS, qui n'est pas le nombre
                   d'étapes, le rejoint plutôt que de vivre à côté. -->
            </div>

            ${pl(e,n,!0)}

            <!-- UI-3 (D-321) : le bandeau de statistiques de la fiche, DÉRIVÉ,
                 remplace le solitaire « ⏱ Séance · 20 min » — l'éditeur ne
                 disait ni combien de pas ni qui agit. Même calcul, un seul
                 lieu (D-253), donc jamais deux chiffres qui divergent. -->
            ${Sc(n)}

            ${n.blocs.length===0?P`<p class="fil-vide">Vide pour l'instant — touche <b>＋ Ajouter un élément</b>.</p>`:F}

            ${ha(n)&&n.blocs.length>0?Vl(e,n,r):P`<ol class="blocs blocs-timeline">
                  ${(()=>{let t=0;return n.blocs.map(i=>Gl(e,n,i,i.type===`media`||Sa(i)?0:++t,r))})()}
                </ol>`}

            <button class="bouton ajouter-pas-inline" @click=${()=>{e.ajoutPas=n.id,e.requestUpdate()}}>
              ＋ Ajouter un élément
            </button>`:P`
            ${xc(e,n)}
            ${pl(e,n,!1)}
            ${n.blocs.length===0?P`<p class="fil-vide">Vide pour l'instant — touche <b>✎</b> puis <b>＋ Ajouter un élément</b>.</p>`:ha(n)?P`<h2 class="fiche-compo-section">Le déroulé</h2>${Vl(e,n,!1)}`:Cc(e,n)}
            ${wc(e,n)}`}
    </div>
  `}function hl(e){let t=e.bibliotheque?.compositions.find(t=>t.id===e.menuComposition);if(!t)return P``;let n=()=>{e.menuComposition=null,e.requestUpdate()};return P`
    <div class="voile" @click=${n}></div>
    <div class="feuille" role="dialog" aria-modal="true" tabindex="-1" aria-label="Options de la composition">
      <div class="prise"></div>
      <div class="section-titre" style="padding:4px 4px 2px">Renommer / décrire</div>
      <input class="champ-edition composition-titre" .value=${t.nom} aria-label="Titre de la composition"
        @change=${n=>{let r=n.target.value.trim();r&&e.modifierComposition(t.id,e=>e.nom=r)}}>
      <input class="champ-edition champ-description" .value=${t.description??``}
        placeholder="Description ou objectif (facultatif)" aria-label="Description"
        @change=${n=>{let r=n.target.value.trim();e.modifierComposition(t.id,e=>{r?e.description=r:delete e.description})}}>
      ${_l(e,t)}
      ${pl(e,t,!0)}
      ${vl(e,t)}
      <div class="actions" style="margin-top:14px">
        <button class="bouton" @click=${()=>{e.dupliquerComposition(t.id),n()}}>Dupliquer</button>
        <button class="action-danger supprimer-composition"
          @click=${()=>e.autoriser(`destruction_ou_sensible`,`Saisis le PIN pour supprimer « ${t.nom} ».`,()=>{e.demanderConfirmation({titre:`Supprimer « ${t.nom} » ?`,corps:`Tes techniques restent dans la bibliothèque — un point de restauration est conservé.`,bouton:`Supprimer la composition`,action:()=>{e.supprimerComposition(t.id)}}),n()})}>Supprimer</button>
      </div>
      <button class="bouton principal" style="margin-top:10px" @click=${n}>Terminer</button>
    </div>`}var gl=``;function _l(e,t){let n=t.acteurs??[],r=()=>{let n=gl.trim();n&&(gl=``,e.modifierComposition(t.id,e=>{let t=(e.acteurs??[]).map(e=>Number(e.id.replace(/\D/g,``))||0);(e.acteurs??=[]).push({id:`r${Math.max(0,...t)+1}`,nom:n})}))};return P`
    <div class="section-titre" style="padding:12px 4px 2px">Rôles ${n.length?P`<span class="acteurs-compte">· ${n.length}</span>`:F}</div>
    ${n.length===0?P`<div class="aide" style="font-size:12px; color:var(--sourdine); padding:0 4px 6px">
            Une composition à plusieurs ? Nomme les rôles — chaque pas dira alors qui agit.
          </div>`:F}
      <div class="acteurs-liste">
            ${n.map((n,r)=>P`<div class="acteur-ligne">
                <span class="acteur-puce" data-acteur-rang=${r+1} aria-hidden="true"></span>
                <input class="champ-mini" .value=${n.nom} aria-label="Nom du rôle"
                  @change=${r=>{let i=r.target.value.trim();i&&e.modifierComposition(t.id,e=>{let t=e.acteurs?.find(e=>e.id===n.id);t&&(t.nom=i)})}}>
                <button class="bouton-icone" aria-label="Retirer le rôle ${n.nom}" title="Retirer ce rôle"
                  @click=${()=>e.demanderConfirmation({titre:`Retirer le rôle « ${n.nom} » ?`,corps:`Les pas qui lui étaient attribués redeviennent neutres — aucun pas n'est supprimé.`,bouton:`Retirer le rôle`,action:()=>void e.modifierComposition(t.id,e=>{e.acteurs=(e.acteurs??[]).filter(e=>e.id!==n.id);for(let t of e.blocs)t.acteurId===n.id&&delete t.acteurId;e.acteurs.length===0&&delete e.acteurs})})}>✕</button>
              </div>`)}
        <div class="acteur-ligne acteur-nouveau">
          <span class="acteur-puce" data-acteur-rang=${n.length+1} aria-hidden="true"></span>
          <input class="champ-mini nom-role" .value=${gl} placeholder="Nom du rôle" aria-label="Nom d'un nouveau rôle"
            @input=${t=>{gl=t.target.value,e.requestUpdate()}}
            @keydown=${e=>{e.key===`Enter`&&r()}}>
          <button class="chip-filtre acteur-ajouter" ?disabled=${gl.trim()===``} @click=${r}>＋ Ajouter</button>
        </div>
      </div>`}function vl(e,t){return P`
    <div class="ajout-bloc capture-composition">
      <div class="section-titre" style="padding:12px 4px 2px">Présenter l'ensemble (démo complète, vidéo « moi »)</div>
      <div class="edition-actions">
        <button class="chip-filtre" @click=${()=>{let n=document.createElement(`input`);n.type=`file`,n.accept=`video/*`,n.onchange=()=>{let r=n.files?.[0];r&&e.ajouterMediaPresentation(t.id,{fichier:r})},n.click()}}>Vidéo de présentation</button>
        <button class="chip-filtre" @click=${()=>{let n=prompt(`Coller un lien (YouTube ou autre) qui présente cette composition :`);n?.trim()&&e.ajouterMediaPresentation(t.id,{lien:n})}}>Coller un lien</button>
      </div>
    </div>
  `}function yl(e,t,n){let r=e.bibliotheque.compositions.find(e=>e.id===t);if(!r||r.blocs.length===0)return P`<div class="ecran"><p class="fil-vide">Composition introuvable.</p></div>`;if(X.resume&&X.compositionId===t){let t=X.resume;return P`
      <div class="ecran entrainement entrainement-resume">
        <div class="entrainement-bloc" style="text-align:center">
          <div class="entrainement-prepa">Séance terminée ✓</div>
          <div class="entrainement-nom">${t.nom}</div>
          <div class="details" style="padding-top:8px">${t.blocs} pas parcourus · durée réalisée : ${ya(t.ecouleSec)}</div>
        </div>
        <div class="entrainement-actions" style="justify-content:center">
          <button class="bouton principal" @click=${()=>{X.resume=null,X.compositionId=null,X.debut=null,e.retour()}}>Fermer</button>
        </div>
      </div>`}X.compositionId!==t&&(X.compositionId=t,X.debut=Date.now(),X.resume=null);let i=Math.max(0,Math.min(n,r.blocs.length-1)),a=r.blocs[i],o=r.blocs[i+1],s=a.techniqueId?e.technique(a.techniqueId):void 0,c=ba(r);Tc(e,t,i);let l=n=>{Fl(),e.ecran={type:`entrainement`,compositionId:t,index:n},window.scrollTo({top:0})},u=()=>{Ll(),X.compositionId=null,X.debut=null,e.retour()},d=a.type===`technique`&&a.consigne?P`<div class="entrainement-consigne">↳ ${a.consigne}</div>`:F,f=a.dureeSec!==void 0;f?Rl(e,r,a,i):(Y.blocId!==null&&Fl(),Pl(e,r,a));let p=f&&Y.blocId===a.id&&Y.phase===`prepa`,m=Math.max(0,Math.round(e.preferences.transitionSec??3)),h=Y.blocId===a.id,g=f?p?P`<div class="entrainement-prepa">Préparez-vous</div>
          ${Ac(Y.restant,m,P`<div class="entrainement-chrono ${Y.enMarche?``:`en-pause`}">${Y.restant}</div>`)}`:Ac(h?Y.restant:a.dureeSec,a.dureeSec,P`<div class="entrainement-chrono ${Y.enMarche?``:`en-pause`}">${kl(h?Y.restant:a.dureeSec)}</div>`):F;return Y.mode=e.preferences.sonSeance??`les-deux`,P`
    <div class="ecran entrainement">
      <div class="entrainement-entete">
        <span class="entrainement-titre">${r.nom}</span>
        <span class="entrainement-progression">${i+1} / ${r.blocs.length}${c>0?P` · ⏱ ${ya(c)}`:F}</span>
      </div>
      ${Dc(i+1,r.blocs.length)}
      <div class="entrainement-bloc">
        <!-- D-227/D-229 : au bord du tatami, QUI agit se lit avant quoi. -->
        ${(()=>{let e=la(r,a),t=e?(r.acteurs??[]).findIndex(t=>t.id===e.id)+1:0;return e||da(a)?P`<div class="entrainement-roles">
                ${e?P`<span class="bloc-acteur" data-acteur-rang=${t}>${e.nom}</span>`:F}
                ${da(a)?P`<span class="bloc-lien">en même temps que le pas précédent</span>`:F}
              </div>`:F})()}
        ${a.type===`technique`?s?P`<button class="entrainement-vignette-lien" title="Voir la fiche" @click=${()=>e.ouvrirFiche(s.id)}>
                  <div class="entrainement-vignette">${ro(e,s)}</div>
                </button>
                <div class="entrainement-nom">${s.nom}</div>
                ${s.nomTraditionnel?P`<div class="entrainement-jp">${s.nomTraditionnel}</div>`:F}
                ${d}${g}`:P`<div class="entrainement-nom sourdine">${a.texte??`Technique`} — indisponible</div>${g}`:a.type===`media`?P`<div class="entrainement-media">${a.medias.map(t=>pc(e,t))}</div>`:P`<div class="entrainement-texte">${a.type===`pause`?a.texte||`Pause`:a.texte||`Segment`}</div>${g}`}
      </div>
      ${f&&!Y.enMarche&&Y.pauseAuto&&Y.blocId===a.id?P`<div class="entrainement-pause-auto">Séance mise en pause — l'app est passée en arrière-plan.</div>`:F}
      ${f?P`<div class="entrainement-chrono-controles">
            <button class="bouton" @click=${()=>{Y.enMarche=!Y.enMarche,Y.pauseAuto=!1,e.requestUpdate()}}>
              ${Y.enMarche?`⏸ Pause`:`▶ Reprendre`}
            </button>
            <button class="bouton entrainement-son" title="Retour sonore : voix + bips, voix seule, bips seuls, ou muet"
              @click=${()=>{let t=[`les-deux`,`voix`,`bips`,`muet`];e.definirSonSeance(t[(t.indexOf(Y.mode)+1)%t.length])}}>
              ${Y.mode===`les-deux`?`🔊 Voix + bips`:Y.mode===`voix`?`🗣 Voix`:Y.mode===`bips`?`🔔 Bips`:`🔇 Muet`}
            </button>
            <button class="bouton" title="Transition de préparation avant chaque pas minuté"
              @click=${()=>{let t=[0,3,5,10];e.definirTransition(t[(t.indexOf(m)+1)%t.length])}}>
              ${m>0?`⏳ Prépa ${m}s`:`⏳ Prépa off`}
            </button>
          </div>`:F}
      ${o?kc(e,r,a,o):F}
      <div class="entrainement-actions">
        <button class="bouton" ?disabled=${i===0} @click=${()=>l(i-1)}>← Précédent</button>
        <button class="bouton" @click=${u}>Quitter</button>
        ${i===r.blocs.length-1?P`<button class="bouton principal" @click=${()=>Tl(e,r)}>Terminer</button>`:P`<button class="bouton principal" @click=${()=>l(i+1)}>Suivant →</button>`}
      </div>
    </div>
  `}var Y={blocId:null,phase:`actif`,restant:0,enMarche:!0,pauseAuto:!1,mode:`les-deux`,annonce:null,timer:null};function bl(e){Y.blocId===null||!Y.enMarche||(Y.enMarche=!1,Y.pauseAuto=!0,Il(),e.requestUpdate())}var xl=null;async function Sl(){if(`wakeLock`in navigator&&!(xl&&!xl.released))try{xl=await navigator.wakeLock.request(`screen`)}catch{xl=null}}function Cl(){xl?.release().catch(()=>{}),xl=null}var X={compositionId:null,debut:null,resume:null};function wl(){X.compositionId=null,X.debut=null,X.resume=null}function Tl(e,t){let n=X.debut?Math.max(0,Math.round((Date.now()-X.debut)/1e3)):0;Ll(),Nl(`Séance terminée`),Al(660,380),X.resume={nom:t.nom,blocs:t.blocs.length,ecouleSec:n},Ec(e),e.requestUpdate()}var El=null,Dl=()=>Y.mode===`les-deux`||Y.mode===`voix`,Ol=()=>Y.mode===`les-deux`||Y.mode===`bips`;function kl(e){let t=Math.max(0,Math.round(e));return`${Math.floor(t/60)}:${`${t%60}`.padStart(2,`0`)}`}function Al(e=880,t=120,n=.18){if(Ol())try{let r=window.AudioContext||window.webkitAudioContext;El??=new r,El.resume?.();let i=El.currentTime,a=El.createOscillator(),o=El.createGain();a.type=`sine`,a.frequency.value=e,a.connect(o),o.connect(El.destination),o.gain.setValueAtTime(n,i),o.gain.exponentialRampToValueAtTime(1e-4,i+t/1e3),a.start(i),a.stop(i+t/1e3)}catch{}}function jl(e,t,n){let r=n.type===`technique`?n.techniqueId&&e.technique(n.techniqueId)?.nom||n.texte||`technique`:n.type===`pause`?n.texte?.trim()||`Pause`:n.texte?.trim()||`segment`,i=la(t,n);return[da(n)?`en même temps`:void 0,i?.nom,r].filter(Boolean).join(`, `)}async function Ml(e){try{if(window.Capacitor?.isNativePlatform?.()){let{TextToSpeech:t}=await Oi(async()=>{let{TextToSpeech:e}=await import(`./esm-B9y7kQXZ.js`);return{TextToSpeech:e}},__vite__mapDeps([3,1]),import.meta.url);await t.speak({text:e,lang:`fr-FR`,rate:1});return}}catch{}try{let t=window.speechSynthesis;if(!t)return;t.paused&&t.resume();let n=new SpeechSynthesisUtterance(e);n.lang=`fr-FR`,t.speak(n)}catch{}}function Nl(e){if(!Dl()||!e)return;let t=window;Array.isArray(t.__voix)&&t.__voix.push(e),Ml(e)}function Pl(e,t,n){Y.annonce!==n.id&&(Y.annonce=n.id,Nl(jl(e,t,n)))}function Fl(){Y.timer!==null&&(clearInterval(Y.timer),Y.timer=null),Y.blocId=null}function Il(){try{window.speechSynthesis?.cancel()}catch{}try{window.Capacitor?.isNativePlatform?.()&&Oi(()=>import(`./esm-B9y7kQXZ.js`).then(e=>e.TextToSpeech.stop()),__vite__mapDeps([3,1]),import.meta.url).catch(()=>{})}catch{}}function Ll(){Fl(),Y.annonce=null,Il()}function Rl(e,t,n,r){if(n.dureeSec===void 0||Y.blocId===n.id)return;Fl(),Y.blocId=n.id,Y.annonce=n.id,Y.enMarche=!0,Y.pauseAuto=!1;let i=Math.max(1,Math.round(n.dureeSec)),a=Math.max(0,Math.round(e.preferences.transitionSec??3)),o=jl(e,t,n);a>0?(Y.phase=`prepa`,Y.restant=a,Nl(`Préparez-vous. ${o}`),Al(520,90)):(Y.phase=`actif`,Y.restant=i,Nl(`${o}, ${ia(i)}`)),Y.timer=window.setInterval(()=>{if(e.ecran.type!==`entrainement`||e.ecran.compositionId!==t.id){Ll();return}if(!(Y.blocId!==n.id||!Y.enMarche)){if(--Y.restant,Y.phase===`prepa`){if(Y.restant>0){Al(520,90),e.requestUpdate();return}Y.phase=`actif`,Y.restant=i,Nl(`${o}, ${ia(i)}`),Al(720,160),e.requestUpdate();return}if(Y.restant>0){let t=aa(i,Y.restant);t&&Nl(t),Y.restant<=3&&Al(880,90),e.requestUpdate();return}Al(440,380),Fl(),r+1<t.blocs.length?e.ecran={type:`entrainement`,compositionId:t.id,index:r+1}:Tl(e,t),e.requestUpdate()}},1e3)}function zl(e,t,n){let r=t.blocs.find(e=>e.id===n);return r?r.type===`technique`?(r.techniqueId?e.technique(r.techniqueId)?.nom:void 0)??r.texte??`la technique`:r.type===`pause`?r.texte||`la pause`:r.type===`media`?`le média`:r.texte||`l'étape`:`le pas`}function Bl(e,t){return{reordonner:(n,r)=>{let i=e.bibliotheque?.compositions.find(e=>e.id===t.id);i&&va(i,n,r)},enregistrer:()=>void e.modifierComposition(t.id,()=>{}),ordre:()=>t.blocs.map(e=>e.id),nom:n=>zl(e,t,n)}}function Vl(e,t,n){let r=t.acteurs??[],i=fa(t),a=r.length>6?`max`:String(r.length);return P`
    <div class="dialogue ${n?`edition`:``}" data-roles=${a} style=${`--voies:${Math.max(1,r.length)}`}>
      ${r.length?P`<div class="dialogue-entete">
            <span aria-hidden="true"></span>
            ${r.map((e,t)=>P`<span class="dialogue-role" data-acteur-rang=${t+1}>${e.nom}</span>`)}
          </div>`:F}
      <ol class="dialogue-temps">
        ${i.map(r=>Hl(e,t,r,n))}
      </ol>
    </div>`}function Hl(e,t,n,r){let{colonnes:i,neutres:a}=ga(t,n);return P`
    <li class="temps" data-temps=${n.numero}>
      <div class="temps-grille">
        <span class="temps-numero" aria-label="Temps ${n.numero}">${n.numero}</span>
        ${i.map((n,i)=>P`
          <div class="temps-colonne" data-acteur-rang=${i+1}>
            ${n.map(n=>Ul(e,t,n,i+1,r))}
          </div>`)}
        ${a.length?P`<div class="temps-neutres">${a.map(n=>Ul(e,t,n,0,r))}</div>`:F}
      </div>
    </li>`}function Ul(e,t,n,r,i){let a=n.techniqueId?e.technique(n.techniqueId):void 0,o=la(t,n),s=n.type===`technique`?a?P`<button class="trame-technique" @click=${()=>e.ouvrirFiche(a.id)}>
            ${ro(e,a)}<span class="bloc-nom">${a.nom}</span>
          </button>`:P`<span class="puce-liaison absente">${n.texte??`technique`} — indisponible</span>`:n.type===`media`?P`<span class="bloc-media-corps">${n.medias.map(t=>pc(e,t))}</span>`:P`<span class="bloc-texte">${n.type===`pause`?n.texte||`Pause`:n.texte}</span>`;return P`
    <div class="bloc carte-dialogue ${n.type}" data-bloc-id=${n.id} data-acteur-rang=${r||F}>
      <!-- D-235 : aucun glyphe, aucun mot de liaison. La rangée dit le temps,
           la colonne dit qui. Le nom du rôle reste TOUJOURS dans le DOM. -->
      ${o?P`<span class="carte-entete"><span class="carte-role">${o.nom}</span></span>`:F}
      ${s}
      ${n.consigne?P`<span class="bloc-consigne">↳ ${n.consigne}</span>`:F}
      ${n.dureeSec===void 0?F:P`<span class="bloc-duree">⏱ ${ya(n.dureeSec)}</span>`}
      ${i?Wl(e,t,n):F}
    </div>`}function Wl(e,t,n){let r=t.acteurs??[],i=t.blocs[0]?.id===n.id,a=r=>void e.modifierComposition(t.id,e=>{let t=e.blocs.find(e=>e.id===n.id);t&&r(t)});return P`
    <div class="pas-reglages">
      ${r.length?P`<span class="reglage-champ">
            <select class="reglage-acteur" aria-label="Qui agit"
              @change=${e=>{let t=e.target.value;a(e=>{t?e.acteurId=t:delete e.acteurId})}}>
              <option value="" ?selected=${!n.acteurId}>Tous</option>
              ${r.map(e=>P`<option value=${e.id} ?selected=${n.acteurId===e.id}>${e.nom}</option>`)}
            </select></span>`:F}
      ${i?F:P`<button class="chip-filtre reglage-lien ${da(n)?`actif`:``}"
            role="switch" aria-checked=${da(n)} aria-label="Rejoint le temps précédent"
            title="Rejoint le temps précédent — ce pas se joue en même temps"
            @click=${()=>a(e=>{da(n)?delete e.lien:e.lien=!0})}>
            ${da(n)?`⤿ même temps`:`temps à part`}
          </button>`}
      <span class="pas-outils">
        ${Oa(e,n.id,Bl(e,t))}
        ${n.type===`media`?F:P`<button class="bouton-icone" aria-label="Détails de ce pas" title="Consigne, durée, remplacer la technique"
              @click=${()=>{rl(),e.editionPas={compoId:t.id,blocId:n.id},e.requestUpdate()}}>⋯</button>`}
        <button class="bouton-icone" aria-label="Retirer ce pas" title="Retirer ce pas"
          @click=${()=>void e.modifierComposition(t.id,e=>ma(e,n.id))}>✕</button>
      </span>
    </div>`}function Gl(e,t,n,r,i){let a=n.techniqueId?e.technique(n.techniqueId):void 0,o=n.type===`technique`?a?P`<button class="bloc-technique-lecture" @click=${()=>e.ouvrirFiche(a.id)}>
            ${ro(e,a)}<span class="bloc-nom">${a.nom}</span>
          </button>`:P`<span class="puce-liaison absente">${n.texte??`technique`} — indisponible</span>`:n.type===`media`?P`<span class="bloc-media-corps">${n.medias.map(t=>pc(e,t))}</span>`:P`<span class="bloc-texte">${n.type===`pause`?n.texte||`Pause`:n.texte}</span>`,s=la(t,n),c=s?(t.acteurs??[]).findIndex(e=>e.id===s.id)+1:0,l=s?P`<span class="bloc-roles"><span class="bloc-acteur" data-acteur-rang=${c}>${s.nom}</span></span>`:F,u=n.type===`media`?F:n.consigne||n.dureeSec!==void 0||l!==F?P`<div class="bloc-meta bloc-meta-lecture">
            ${l}
            ${n.type===`technique`&&n.consigne?P`<span class="bloc-consigne">↳ ${n.consigne}</span>`:F}
            ${n.dureeSec===void 0?F:P`<span class="bloc-duree">⏱ ${ya(n.dureeSec)}</span>`}
          </div>`:F;return P`
    <li class="bloc ${n.type} lecture" data-bloc-id=${n.id}>
      <span class="bloc-nature">${r===0?F:`${r}.`}</span>
      ${o}
      ${u}
      <!-- D-233 : les outils n'existent qu'en mode édition (✎ de la barre
           haute) — en lecture, la place revient au contenu. -->
      ${i?Wl(e,t,n):F}
    </li>
  `}var Kl=null;function ql(e){e.garde(`modification`,`Saisis le PIN pour créer une composition.`,()=>e.ouvrirCreationCompo())&&(rl(),e.creationCompo={etape:`nom`,nom:``},e.requestUpdate())}async function Jl(e){let t=e.bibliotheque,n=e.creationCompo?.nom.trim();if(!t||!e.creationCompo||!n)return;let r=sa(n);t.compositions.push(r),await e.persister(t),rl(),e.creationCompo={...e.creationCompo,compoId:r.id,etape:`roles`,roles:[]},e.requestUpdate()}async function Yl(e,t){let n=e.creationCompo;if(!n?.compoId)return;let r=t.map(e=>e.trim()).filter(e=>e!==``);r.length>=2&&await e.modifierComposition(n.compoId,e=>{e.acteurs=r.map((e,t)=>({id:`r${t+1}`,nom:e}))}),e.creationCompo={...n,etape:`pas`},e.requestUpdate()}function Xl(e){let t=e.creationCompo?.compoId;e.creationCompo=null,t&&e.ouvrirComposition(t),e.requestUpdate()}function Zl(e){let t=e.creationCompo;t&&(t.etape===`pas`||t.etape===`roles`?e.fermerCreationCompo():(e.creationCompo=null,e.requestUpdate()))}async function Ql(e,t){if(!e.garde(`modification`,`Saisis le PIN pour créer une composition.`,()=>void e.creerComposition(t)))return;let n=e.bibliotheque,r=t.trim();if(!n||!r)return;let i=sa(r);n.compositions.push(i),await e.persister(n),e.ouvrirComposition(i.id),e.requestUpdate()}async function $l(e,t,n){if(!e.garde(`modification`,`Saisis le PIN pour enregistrer cette composition.`,()=>void e.modifierComposition(t,n)))return!1;let r=e.bibliotheque,i=r?.compositions.find(e=>e.id===t);if(!r||!i)return!1;let a=structuredClone(i);n(i),pa(i),i.modifieLe=new Date().toISOString();try{return await e.persister(r),!0}catch(t){return Object.assign(i,a),e.afficherToast(t instanceof Error?t.message:`Modification refusée`),!1}}async function eu(e,t){if(!e.garde(`modification`,`Saisis le PIN pour dupliquer cette composition.`,()=>void e.dupliquerComposition(t)))return;let n=e.bibliotheque,r=n?.compositions.find(e=>e.id===t);if(!n||!r)return;let i={...structuredClone(r),id:it(),nom:`${r.nom} (copie)`,creeLe:new Date().toISOString(),modifieLe:new Date().toISOString(),blocs:r.blocs.map(e=>({...structuredClone(e),id:it()}))};delete i.origine,i.provenance=`personnel`,delete i.attribution,n.compositions.push(i),await e.persister(n),e.ouvrirComposition(i.id),e.afficherToast(`« ${i.nom} » créée ✓ — l'originale n'a pas bougé`)}async function tu(e,t){if(!e.garde(`destruction_ou_sensible`,`Saisis le PIN pour exporter cette composition.`,()=>void e.exporterComposition(t)))return;let n=e.bibliotheque,r=n?.compositions.find(e=>e.id===t);if(!n||!r)return;let i=new Set(r.blocs.filter(e=>e.type===`technique`&&e.techniqueId).map(e=>e.techniqueId)).size,a=r.blocs.flatMap(e=>e.medias).filter(e=>e.type===`local`).length;if(!confirm(`Exporter « ${r.nom} » (.movpack) ?\n- la composition (${r.blocs.length} bloc${r.blocs.length>1?`s`:``})\n- ${i} technique${i>1?`s`:``} référencée${i>1?`s`:``} (identités seules, sans contenu)\n- ${a?`${a} vidéo(s) de repère incluse(s)`:`aucune vidéo locale`}\n- ton carnet personnel : jamais inclus`))return;let o=Qi(e,`Export`,()=>xi(n,t));if(!o)return;let s=await Gi(e,o);await Ki(e,o,{id:Ci(r.id),nom:r.nom,portee:`composition`},s,`${Si(r.nom)}.movpack`)!==null&&e.afficherToast(`Composition « ${r.nom} » exportée ✓ — s'importe et rejoint la bibliothèque cible`)}async function nu(e,t,n=!0){let r=e.bibliotheque,i=r?.compositions.find(e=>e.id===t);if(!r||!i)return;let a=Qi(e,`Partage`,()=>xi(r,t));if(!a)return;let o=Ue(a),s=await e.stockage.listerVideos(),c=n?[...o].filter(e=>s.has(e)):[],l=`${Si(i.nom)}.movpack`,u=await Ki(e,a,{id:Ci(i.id),nom:i.nom,portee:`composition`},c,l,!1);u!==null&&await ji(e,u.fichier,i.nom,`Composition « ${i.nom} » — Movenso`)}async function ru(e,t,n){await e.modifierComposition(t,e=>{if(!e.presentation)return;let t=e.presentation.medias.filter(e=>e.id!==n);t.length?e.presentation={medias:t}:delete e.presentation})}async function iu(e,t){if(!e.garde(`destruction_ou_sensible`,`Saisis le PIN pour supprimer cette composition.`,()=>void e.supprimerComposition(t)))return;let n=e.bibliotheque,r=n?.compositions.find(e=>e.id===t);!n||!r||(await e.stockage.snapshot(`avant-suppression-de-composition`),n.compositions=n.compositions.filter(e=>e.id!==t),await e.persister(n),e.menuComposition=null,e.retour(),e.afficherToast(`Composition « ${r.nom} » supprimée — point de restauration conservé`))}function au(e,t){let n={...e};if(t.description!==void 0){let e=t.description.trim();e?n.description=e:delete n.description}return t.attribution!==void 0&&t.attribution.trim()&&(n.attribution=t.attribution.trim()),t.pointsCles!==void 0&&(n.pointsCles=t.pointsCles.map(e=>e.trim()).filter(e=>e.length>0)),t.modifiePar!==void 0&&t.modifiePar.trim()&&(n.modifiePar=t.modifiePar.trim()),n}var ou=!1,su=!1;function cu(){return su}function lu(e){su=e}function uu(e){let t=$a(e);return t.ok?{media:t.type===`plateforme`?{id:it(),type:`plateforme`,service:t.service,ref:t.ref}:{id:it(),type:`lien`,ref:t.ref}}:{erreur:t.raison}}async function du(e){let t=URL.createObjectURL(e);try{let e=await new Promise((e,n)=>{let r=new Image;r.onload=()=>e(r),r.onerror=()=>n(Error(`image illisible`)),r.src=t}),n=Math.min(1,480/Math.max(e.naturalWidth,e.naturalHeight||1)),r=Math.max(1,Math.round(e.naturalWidth*n)),i=Math.max(1,Math.round(e.naturalHeight*n)),a=document.createElement(`canvas`);a.width=r,a.height=i;let o=a.getContext(`2d`);if(!o)throw Error(`canvas indisponible`);o.drawImage(e,0,0,r,i);let s=await new Promise(e=>a.toBlob(e,`image/jpeg`,.72));if(!s)throw Error(`encodage impossible`);return new Uint8Array(await s.arrayBuffer())}finally{URL.revokeObjectURL(t)}}async function fu(e,t,n){if(!e.garde(`modification`,`Saisis le PIN pour écrire dans ton carnet.`,()=>void e.ajouterNote(t,n)))return;let r=e.bibliotheque,i=n.trim();!r||!i||(r.contributions.push({id:it(),techniqueId:t,provenance:`personnel`,description:i,pointsCles:[],creeLe:new Date().toISOString(),medias:[]}),await e.persister(r))}async function pu(e,t,n,r){if(!e.garde(`modification`,`Saisis le PIN pour ajouter ce média.`,()=>void e.ajouterMediaFiche(t,n,r)))return;let i=e.bibliotheque;if(i&&!su){su=!0;try{let a=[],o=[];if(n.fichier){let t=pt(n.fichier);if(t){e.afficherToast(t);return}let r=await wu(e,i,n.fichier,`fichier`);if(!r)return;r.ecrit&&o.push(r.media.id),a.push(r.media)}if(n.lien?.trim()){let t=uu(n.lien.trim());if(`erreur`in t){e.afficherToast(t.erreur);return}a.push(t.media)}if(!a.length&&!r?.texte?.trim())return;r?.label&&a[0]&&(a[0].label=r.label);let s=r?.provenance??`personnel`,c={id:it(),techniqueId:t,provenance:s,...r?.texte?.trim()?{description:r.texte.trim()}:{},...s!==`personnel`&&r?.attribution?{attribution:r.attribution}:{},pointsCles:[],creeLe:new Date().toISOString(),medias:a};if(i.contributions.push(c),!await Tu(e,i,o,()=>{i.contributions=i.contributions.filter(e=>e.id!==c.id)}))return;a[0]&&(e.mediaAffiche=a[0].id),e.ajoutMedia=null,e.afficherToast(s===`personnel`?`Ajouté à ton carnet ✓`:a.length?`Média ajouté ✓`:`Contribution ajoutée ✓`)}finally{su=!1}}}async function mu(e,t,n,r){if(!e.garde(`modification`,`Saisis le PIN pour ajouter ce média.`,()=>void e.ajouterMediaPresentation(t,n,r)))return;let i=e.bibliotheque,a=i?.compositions.find(e=>e.id===t);if(!(!i||!a)&&!su){su=!0;try{let t=[],o=[];if(n.fichier){let r=pt(n.fichier);if(r){e.afficherToast(r);return}let a=await wu(e,i,n.fichier,`fichier`);if(!a)return;a.ecrit&&o.push(a.media.id),t.push(a.media)}if(n.lien?.trim()){let r=uu(n.lien.trim());if(`erreur`in r){e.afficherToast(r.erreur);return}t.push(r.media)}if(!t.length)return;r?.trim()&&t[0]&&(t[0].label=r.trim());let s=a.presentation?structuredClone(a.presentation):void 0;if(a.presentation={medias:[...a.presentation?.medias??[],...t]},a.modifieLe=new Date().toISOString(),!await Tu(e,i,o,()=>{s?a.presentation=s:delete a.presentation}))return;e.afficherToast(`Présentation ajoutée ✓`)}finally{su=!1}}}async function hu(e,t,n){if(!e.garde(`modification`,`Saisis le PIN pour modifier cette contribution.`,()=>void e.amenderContribution(t,n)))return;let r=e.bibliotheque,i=r?.contributions.find(e=>e.id===t);if(!r||!i)return;let a=i.origine?{modifiePar:e.preferences.pseudo?.trim()||`moi`}:{};n={...n,...a};let o=au(i,n),s=e=>{let t=r.contributions.findIndex(e=>e.id===i.id);t!==-1&&(r.contributions[t]=e)};s(o);try{await e.persister(r)}catch(t){s(i),e.afficherToast(t instanceof Error?t.message:`Modification refusée`)}}async function gu(e,t,n){if(!e.garde(`modification`,`Saisis le PIN pour renommer ce média.`,()=>void e.majMediaLabel(t,n)))return;let r=e.bibliotheque;if(!r)return;let i=r.contributions.find(e=>e.medias.some(e=>e.id===t)),a=i?.medias.find(e=>e.id===t);if(!i||!a)return;let o=a.label,s=n.trim();s?a.label=s:delete a.label;try{await e.persister(r)}catch(t){o===void 0?delete a.label:a.label=o,e.afficherToast(t instanceof Error?t.message:`Renommage refusé`)}}async function _u(e,t,n){if(!e.garde(`modification`,`Saisis le PIN pour modifier ce lien.`,()=>void e.majMediaLien(t,n)))return;let r=e.bibliotheque;if(!r)return;let i=n.trim();if(!i)return;let a=r.contributions.flatMap(e=>e.medias).filter(e=>e.id===t&&e.type!==`local`);if(a.length===0)return;let o=uu(i);if(`erreur`in o){e.afficherToast(o.erreur);return}let s=o.media,c=a.map(e=>({m:e,type:e.type,service:e.service,ref:e.ref}));for(let e of a)e.type=s.type,e.ref=s.ref,s.service?e.service=s.service:delete e.service;try{await e.persister(r),e.afficherToast(`Lien mis à jour ✓`)}catch(t){for(let e of c)e.m.type=e.type,e.m.ref=e.ref,e.service?e.m.service=e.service:delete e.m.service;e.afficherToast(t instanceof Error?t.message:`Lien refusé`)}}async function vu(e,t,n,r){let i=e.bibliotheque,a=i?.techniques.find(e=>e.id===t);!i||!a||(n?a.couverture=n:delete a.couverture,r&&!(i.images??[]).some(e=>e.id===r.id)&&(i.images=[...i.images??[],r]),i.images=Vr(i),await e.persister(i))}async function yu(e,t,n){if(e.garde(`modification`,`Saisis le PIN pour changer la vignette.`,()=>void e.definirCouvertureImage(t,n)))try{let r=await du(n),i=await e.stockage.ajouterImage(r,`image/jpeg`);await vu(e,t,{type:`fichier`,imageId:i.id},i),e.afficherToast(`Vignette mise à jour ✓`)}catch{e.afficherToast(`Image illisible — choisis une autre photo`,`alerte`)}}async function bu(e,t,n){e.garde(`modification`,`Saisis le PIN pour changer la vignette.`,()=>void e.definirCouvertureMedia(t,n))&&(await vu(e,t,{type:`media`,mediaId:n}),e.afficherToast(`Vignette mise à jour ✓`))}async function xu(e,t){e.garde(`modification`,`Saisis le PIN pour changer la vignette.`,()=>void e.retirerCouverture(t))&&(await vu(e,t,null),e.afficherToast(`Vignette retirée ✓`))}async function Su(e,t,n){if(!e.garde(`destruction_ou_sensible`,`Saisis le PIN pour retirer ce média.`,()=>void e.retirerMedia(t,n)))return;let r=e.bibliotheque,i=r?.techniques.find(e=>e.id===t),a=r?.contributions.find(e=>e.techniqueId===t&&e.medias.some(e=>e.id===n));!r||!i||!a||(await e.stockage.snapshot(`avant-retrait-d-un-media`),a.medias=a.medias.filter(e=>e.id!==n),a.medias.length===0&&!(a.description??``).trim()&&a.pointsCles.length===0&&(r.contributions=r.contributions.filter(e=>e.id!==a.id)),i.mediaPrincipalId===n&&delete i.mediaPrincipalId,i.couverture?.type===`media`&&i.couverture.mediaId===n&&delete i.couverture,e.mediaAffiche===n&&(e.mediaAffiche=null),await e.persister(r),e.afficherToast(`Média retiré — point de restauration conservé dans les sauvegardes`))}function Cu(e){ou=!0}async function wu(e,t,n,r){ou=!1;let i=()=>ou;e.enregistrementMedia={phase:`analyse`,fraction:0,octets:n.size,etaSec:null},e.requestUpdate();try{let{media:a,dejaPresent:o}=await mt(t,n,r,i);if(o)return{media:a,ecrit:!1};if(await wt(e,n))return null;let s=performance.now();e.enregistrementMedia={phase:`ecriture`,fraction:0,octets:n.size,etaSec:null},e.requestUpdate();let c=0;return await e.stockage.ecrireVideo(a.id,n,a.extension,t=>{let r=performance.now();if(t<1&&r-c<100)return;c=r;let i=(r-s)/1e3,a=t>.03?Math.max(0,Math.round(i/t-i)):null;e.enregistrementMedia={phase:`ecriture`,fraction:t,octets:n.size,etaSec:a},e.requestUpdate()},i),{media:a,ecrit:!0}}catch(t){if(t instanceof Error&&t.name===`AnnulationIngestion`)return e.afficherToast(`Ajout annulé — rien n'a été écrit`),null;throw t}finally{e.enregistrementMedia=null,e.requestUpdate()}}async function Tu(e,t,n,r){try{return await e.persister(t),!0}catch(t){r();for(let t of n)await e.stockage.supprimerVideo(t);return e.afficherToast(t instanceof Error?t.message:`Enregistrement refusé`),!1}}function Eu(e){e.capture={etape:`contenu`,note:``,demarreA:Date.now(),...e.ecran.type===`composition`?{compositionCible:e.ecran.compositionId}:{},...e.ecran.type===`discipline`?{disciplineChoisieId:e.ecran.disciplineId}:{}}}async function Du(e){let t=e.capture,n=t?.compositionCible,r=e.bibliotheque;if(!t||!n||!r||!e.garde(`modification`,`Saisis le PIN pour enregistrer ce repère.`,()=>void e.terminerCaptureRepere()))return;let i=r.compositions.find(e=>e.id===n);if(i&&!cu()){lu(!0);try{let n=[],a=[];if(t.video){let i=pt(t.video);if(i){e.afficherToast(i);return}let o=await wu(e,r,t.video,t.camera?`camera`:`fichier`);if(!o)return;o.ecrit&&a.push(o.media.id),n.push(o.media)}if(t.lien?.trim()){let r=uu(t.lien.trim());if(`erreur`in r){e.afficherToast(r.erreur);return}n.push(r.media)}let o=t.note.trim();if(!o&&n.length===0)return;let s=it(),c=i.modifieLe;if(i.blocs.push({id:s,type:`repere`,...o?{texte:o}:{},medias:n}),i.modifieLe=new Date().toISOString(),!await Tu(e,r,a,()=>{i.blocs=i.blocs.filter(e=>e.id!==s),c===void 0?delete i.modifieLe:i.modifieLe=c}))return;e.capture=null,e.afficherToast(`Repère ajouté à la composition ✓`)}finally{lu(!1)}}}function Ou(e,t){e.garde(`modification`,`Saisis le PIN pour reprendre cette capture.`,()=>void e.ouvrirRattachement(t))&&(e.capture={etape:`rattacher`,note:``,demarreA:Date.now(),rattacherSeul:t})}function ku(e){e.capture?.apercuUrl&&URL.revokeObjectURL(e.capture.apercuUrl),e.capture=null}function Au(e){let t=e.capture;if(!t)return;if(t.question){e.capture={...t,question:!1};return}if(t.rattacherSeul){e.fermerCapture();return}let n=t.video!==void 0||(t.lien??``).trim()!==``||t.note.trim()!==``;if(t.etape===`rattacher`){e.capture={...t,etape:`note`};return}if(t.etape===`apercu`||t.etape===`note`){e.capture=n?{...t,question:!0}:{...t,etape:`contenu`};return}if(t.saisieLien){e.capture={...t,saisieLien:!1};return}e.fermerCapture()}async function ju(e,t,n,r){if(!e.garde(`modification`,`Saisis le PIN pour enregistrer cette capture.`,()=>void e.terminerCapture(t,n,r)))return;let i=e.bibliotheque,a=e.capture;if(!i||!a)return;let o=Math.max(1,Math.round((Date.now()-a.demarreA)/1e3));if(n!==void 0){let a=r?.disciplineId??(e.ecran.type===`fiche`?e.technique(e.ecran.techniqueId)?.disciplineId:void 0)??(i.disciplines.length===1?i.disciplines[0].id:void 0);if(!a&&r?.disciplineNom?.trim()&&(a=it(),i.disciplines.push({id:a,nom:r.disciplineNom.trim(),familles:[],niveaux:[]})),!a){e.afficherToast(`Choisis ou nomme une discipline pour cette technique`,`alerte`);return}if(t=e.pousserNouvelleTechnique(i,a,n),!t){e.afficherToast(`Nom de technique vide — précise-le pour rattacher`,`alerte`);return}}if(a.rattacherSeul!==void 0){let n=i.contributions.find(e=>e.id===a.rattacherSeul);n&&t&&(n.techniqueId=t),await e.persister(i),e.capture=null,t&&(e.afficherToast(`Rattaché à ${e.technique(t)?.nom} ✓`),e.ouvrirFiche(t));return}if(cu())return;lu(!0);let s=[],c=[];try{if(a.video){let t=pt(a.video);if(t){e.afficherToast(t);return}let n=await wu(e,i,a.video,a.camera?`camera`:`fichier`);if(!n)return;n.ecrit&&c.push(n.media.id),s.push(n.media)}if(a.lien?.trim()){let t=uu(a.lien.trim());if(`erreur`in t){e.afficherToast(t.erreur);return}s.push(t.media)}let n=a.provenance??`personnel`,r={id:it(),techniqueId:t,provenance:n,...a.note.trim()?{description:a.note.trim()}:{},...n!==`personnel`&&a.attribution?.trim()?{attribution:a.attribution.trim()}:{},pointsCles:[],creeLe:new Date().toISOString(),medias:s};if(i.contributions.push(r),!await Tu(e,i,c,()=>{i.contributions=i.contributions.filter(e=>e.id!==r.id)}))return}finally{lu(!1)}e.capture=null,t?(e.afficherToast(`Capturé ✓ rattaché à ${e.technique(t)?.nom} — ${o} s, hors ligne`),e.ouvrirFiche(t)):(e.afficherToast(`Conservé — à rattacher, dans Plus › À vérifier ✓ — ${o} s, hors ligne`),e.ouvrirPlusSection(`atraiter`))}async function Mu(e,t,n){if(!e.garde(`modification`,`Saisis le PIN pour arbitrer ce conflit.`,()=>void e.arbitrerConflitLiaison(t,n)))return;let r=e.bibliotheque;r&&(Yr(r,t,n),await e.persister(r),e.afficherToast(n===`retirer`?`Lien retiré ✓`:n===`local`?`Ton lien conservé ✓`:n===`pack`?`Version du pack appliquée ✓`:`Les deux raisons conservées ✓`))}async function Nu(e,t,n){if(!e.garde(`modification`,`Saisis le PIN pour arbitrer ce texte.`,()=>void Nu(e,t,n)))return;let r=e.bibliotheque;r&&(Xr(r,t,n),await e.persister(r),e.afficherToast(n===`locale`?`Ton texte conservé ✓`:`Texte du pack appliqué ✓`))}async function Pu(e,t){e.garde(`destruction_ou_sensible`,`Saisis le PIN pour retirer ces liens.`,()=>void e.retirerTousLesLiensProposes(t))&&oi(e,t)}function Fu(e,t,n,r,i){e.garde(`modification`,`Saisis le PIN pour modifier les liens.`,()=>e.ouvrirEditionLien(t,n,r,i))&&(_s(),e.editionLien={sourceId:t,...n===void 0?{}:{cibleId:n},...r===void 0?{}:{typeId:r},...i===void 0?{}:{typePrefere:i}},e.requestUpdate())}async function Iu(e,t,n){if(!e.garde(`modification`,`Saisis le PIN pour créer un lien.`,()=>void e.ajouterRelation(t,n)))return!1;let r=e.bibliotheque,i=r?.techniques.find(e=>e.id===t);return!r||!i?!1:n.cibleId===t?(e.afficherToast(`Une technique ne peut pas être liée à elle-même`,`alerte`),!1):r.techniques.some(e=>e.id===n.cibleId)?i.relations.some(e=>e.type===n.type&&e.cibleId===n.cibleId)?(e.afficherToast(`Ce lien existe déjà`,`alerte`),!1):(i.relations.push({type:n.type,cibleId:n.cibleId,...n.note===void 0?{}:{note:n.note},...n.priorite===void 0?{}:{priorite:n.priorite}}),await e.persister(r),e.afficherToast(`Lien ajouté ✓`),!0):(e.afficherToast(`Technique cible introuvable`,`alerte`),!1)}async function Lu(e,t,n,r,i){if(!e.garde(`modification`,`Saisis le PIN pour modifier ce lien.`,()=>void e.modifierRelation(t,n,r,i)))return!1;let a=e.bibliotheque,o=a?.techniques.find(e=>e.id===t),s=o?.relations.find(e=>e.type===r&&e.cibleId===n);if(!a||!o||!s)return!1;if(i.type!==void 0&&i.type!==s.type){if(o.relations.some(e=>e!==s&&e.type===i.type&&e.cibleId===n))return e.afficherToast(`Un lien de ce type vers cette technique existe déjà`,`alerte`),!1;s.type=i.type}return i.note!==void 0&&(i.note===null||i.note.trim()===``?delete s.note:s.note=i.note.trim()),i.priorite!==void 0&&(i.priorite===null?delete s.priorite:s.priorite=i.priorite),await e.persister(a),e.afficherToast(`Lien modifié ✓`),!0}async function Ru(e,t){if(!e.garde(`destruction_ou_sensible`,`Saisis le PIN pour supprimer ce type de lien.`,()=>void e.supprimerTypeRelation(t)))return;let n=e.bibliotheque,r=n?.typesRelation.find(e=>e.id===t);if(!n||!r)return;let i=e.usagesTypeRelation(t);if(i){e.afficherToast(`« ${r.libelle} » est utilisé par ${i} relation${i>1?`s`:``} — retire-les d'abord des fiches concernées`,`alerte`);return}n.typesRelation=n.typesRelation.filter(e=>e.id!==t),await e.persister(n),e.afficherToast(`Lien « ${r.libelle} » supprimé ✓`)}async function zu(e,t){if(!e.garde(`destruction_ou_sensible`,`Saisis le PIN pour retirer cette technique.`,()=>void e.supprimerTechnique(t)))return;let n=e.bibliotheque,r=n?.techniques.find(e=>e.id===t);if(!n||!r)return;let i=n.contributions.filter(e=>e.techniqueId===t);n.corbeille=[{supprimeeLe:new Date().toISOString(),technique:r,contributions:i,etaitFavori:n.favoris.includes(t)},...n.corbeille??[]],n.techniques=n.techniques.filter(e=>e.id!==t),n.contributions=n.contributions.filter(e=>e.techniqueId!==t),n.favoris=n.favoris.filter(e=>e!==t),await e.persister(n),e.editionFiche=!1,e.ecran.type===`fiche`&&e.ecran.techniqueId===t&&e.retour(),e.afficherToast(`« ${r.nom} » mise en corbeille ✓ — restaurable depuis Plus › Corbeille`)}async function Bu(e,t){if(!e.garde(`modification`,`Saisis le PIN pour restaurer cette fiche.`,()=>void e.restaurerTechnique(t)))return;let n=e.bibliotheque,r=n?.corbeille?.find(e=>e.technique.id===t);!n||!r||(n.corbeille=(n.corbeille??[]).filter(e=>e.technique.id!==t),n.techniques=[...n.techniques,r.technique],n.contributions=[...n.contributions,...r.contributions],r.etaitFavori&&!n.favoris.includes(t)&&(n.favoris=[...n.favoris,t]),await e.persister(n),e.afficherToast(`« ${r.technique.nom} » restaurée ✓`))}async function Vu(e,t,n){let r=new Set(n),i=(t.corbeille??[]).filter(e=>r.has(e.technique.id));if(i.length!==0){for(let e of t.techniques)e.relations=e.relations.filter(e=>!r.has(e.cibleId));for(let e of i){let n=e.contributions.filter(e=>e.provenance===`personnel`).map(e=>({...e,techniqueId:null}));t.contributions=[...t.contributions,...n]}t.corbeille=(t.corbeille??[]).filter(e=>!r.has(e.technique.id)),await e.persister(t)}}async function Hu(e,t){if(!e.garde(`destruction_ou_sensible`,`Saisis le PIN pour supprimer définitivement.`,()=>void e.supprimerDefinitivement(t)))return;let n=e.bibliotheque,r=n?.corbeille?.find(e=>e.technique.id===t);!n||!r||(await e.stockage.snapshot(`avant-purge-${r.technique.nom}`),await Vu(e,n,[t]),e.afficherToast(`« ${r.technique.nom} » supprimée définitivement ✓ — point de restauration conservé`))}async function Uu(e){if(!e.garde(`destruction_ou_sensible`,`Saisis le PIN pour vider la corbeille.`,()=>void e.viderCorbeille()))return;let t=e.bibliotheque;if(!t||!(t.corbeille??[]).length)return;let n=t.corbeille.length;await e.stockage.snapshot(`avant-vidage-corbeille`),await Vu(e,t,t.corbeille.map(e=>e.technique.id)),e.afficherToast(`Corbeille vidée ✓ — ${n} fiche${n>1?`s`:``} supprimée${n>1?`s`:``}, point de restauration conservé`)}async function Wu(e,t){if(!e.garde(`destruction_ou_sensible`,`Saisis le PIN pour retirer cette discipline.`,()=>void e.supprimerDiscipline(t)))return;let n=e.bibliotheque,r=n?.disciplines.find(e=>e.id===t);if(!n||!r)return;let i=n.techniques.filter(e=>e.disciplineId===t).length;if(i){e.afficherToast(`« ${r.nom} » contient encore ${i} technique${i>1?`s`:``} — retire-les d'abord (fiche → crayon → Retirer)`,`alerte`);return}await e.stockage.snapshot(`avant-retrait-${r.nom}`),n.disciplines=n.disciplines.filter(e=>e.id!==t),await e.persister(n),e.afficherToast(`Discipline « ${r.nom} » retirée ✓`)}function Gu(e,t,n){if(!e.garde(`modification`,`Saisis le PIN pour réordonner les disciplines.`,()=>void e.reordonnerDiscipline(t,n)))return;let r=e.bibliotheque;if(!r)return;let i=r.disciplines.findIndex(e=>e.id===t),a=i+n;if(i<0||a<0||a>=r.disciplines.length)return;let[o]=r.disciplines.splice(i,1);r.disciplines.splice(a,0,o),e.persister(r)}function Ku(e,t){let n=e.bibliotheque,r=n?.techniques.find(e=>e.id===t);!n||!r||(e.instantaneEdition={techniqueId:t,technique:structuredClone(r),contributions:n.contributions.filter(e=>e.techniqueId===t).map(e=>structuredClone(e)),favori:n.favoris.includes(t)},e.editionFiche=!0,e.requestUpdate())}function qu(e){e.instantaneEdition=null,e.editionFiche=!1,e.afficherToast(`Modifications enregistrées ✓`),e.requestUpdate()}async function Ju(e){let t=e.instantaneEdition,n=e.bibliotheque;if(e.editionFiche=!1,e.instantaneEdition=null,e.generationCarnet++,!t||!n){e.requestUpdate();return}let r=n.techniques.findIndex(e=>e.id===t.techniqueId);r>=0&&(n.techniques[r]=structuredClone(t.technique)),n.contributions=n.contributions.filter(e=>e.techniqueId!==t.techniqueId),n.contributions.push(...t.contributions.map(e=>structuredClone(e)));let i=n.favoris.includes(t.techniqueId);t.favori&&!i?n.favoris.push(t.techniqueId):!t.favori&&i&&(n.favoris=n.favoris.filter(e=>e!==t.techniqueId)),await e.persister(n),e.afficherToast(`Modifications annulées`),e.requestUpdate()}function Yu(e,t){return[e,t].sort().join(`|`)}function Xu(e,t,n){if(Math.abs(e.length-t.length)>n)return n+1;let r=Array.from({length:t.length+1},(e,t)=>t);for(let i=1;i<=e.length;i++){let a=[i,...Array(t.length).fill(0)],o=a[0];for(let n=1;n<=t.length;n++){let s=e[i-1]===t[n-1]?0:1;a[n]=Math.min(r[n]+1,a[n-1]+1,r[n-1]+s),a[n]<o&&(o=a[n])}if(o>n)return n+1;r=a}return r[t.length]}function Zu(e,t){let n=U(e),r=U(t);if(n===r)return!0;let i=Math.max(n.length,r.length);if(i<4)return!1;let a=Math.min(3,Math.max(1,Math.floor(i*.2)));return Xu(n,r,a)<=a}function Qu(e,t=[]){let n=new Set(t),r=[],i=new Map;for(let t of e.techniques)i.set(t.disciplineId,[...i.get(t.disciplineId)??[],t]);for(let e of i.values())for(let t=0;t<e.length;t++)for(let i=t+1;i<e.length;i++){let a=e[t],o=e[i];I(a)!==I(o)&&Zu(a.nom,o.nom)&&(n.has(Yu(a.id,o.id))||r.push({aId:a.id,bId:o.id}))}return r.sort((e,t)=>Yu(e.aId,e.bId).localeCompare(Yu(t.aId,t.bId))),r}function $u(e,t,n){let r=t=>{let n=e.techniques.find(e=>e.id===t);if(!n)return null;let r=e.contributions.filter(e=>e.techniqueId===t&&e.provenance!==`personnel`);return{technique:n,source:I(n),description:r.map(e=>e.description??``).filter(Boolean).join(`

`),pointsCles:r.flatMap(e=>e.pointsCles),medias:r.flatMap(e=>e.medias),niveaux:n.niveauxIds,relations:n.relations.length}},i=r(t),a=r(n);return!i||!a?null:{a:i,b:a}}function ed(e){return e.sha256?`sha:${e.sha256}`:`${e.type}:${e.ref}`}function td(e,t,n,r){let i=structuredClone(e),a=i.techniques.find(e=>e.id===t),o=i.techniques.find(e=>e.id===n);if(!a||!o)throw Error(`Fusion impossible : identité introuvable`);if(a.disciplineId!==o.disciplineId)throw Error(`Fusion impossible : disciplines différentes`);let s=r.titre===`a`?a:o,c=e=>e===a.id?`a`:`b`,l=i.contributions.filter(e=>e.techniqueId===a.id&&e.provenance!==`personnel`),u=i.contributions.filter(e=>e.techniqueId===o.id&&e.provenance!==`personnel`),d=i.contributions.filter(e=>(e.techniqueId===a.id||e.techniqueId===o.id)&&e.provenance===`personnel`),f=new Set,p=e=>r.medias===`deux`||r.medias===e,m=e=>r.textes===`deux`||r.textes===e,h=[];for(let e of[...l,...u]){let t=c(e.techniqueId),n=p(t)?e.medias.filter(e=>{let t=ed(e);return f.has(t)?!1:(f.add(t),!0)}):[],r=m(t);if(!r&&n.length===0)continue;let i=structuredClone(e);i.techniqueId=a.id,i.medias=n,r||(delete i.description,i.pointsCles=[],delete i.variantes),h.push(i)}if(r.textes===`deux`){let e=h.filter(e=>e.provenance!==`personnel`);if(e.length>1){let t=e[0],n=[],r=[];for(let t of e){let e=(t.description??``).trim();e&&!n.includes(e)&&n.push(e);for(let e of t.pointsCles){let t=e.trim();t&&!r.includes(t)&&r.push(t)}}n.length?t.description=n.join(`

`):delete t.description,t.pointsCles=r;for(let n of e)n!==t&&(delete n.description,n.pointsCles=[],delete n.variantes)}}for(let e of d)e.techniqueId=a.id;a.nom=s.nom,s.nomTraditionnel===void 0?delete a.nomTraditionnel:a.nomTraditionnel=s.nomTraditionnel,s.familleId===void 0?delete a.familleId:a.familleId=s.familleId;let g=new Set;if(r.niveaux!==`b`)for(let e of a.niveauxIds)g.add(e);if(r.niveaux!==`a`)for(let e of o.niveauxIds)g.add(e);a.niveauxIds=[...g];let _=[],v=new Set,y=[...r.relations===`b`?[]:a.relations,...r.relations===`a`?[]:o.relations];for(let e of y){let t=e.cibleId===o.id?a.id:e.cibleId;if(t===a.id)continue;let n=`${e.type}|${t}`;v.has(n)||(v.add(n),_.push({...e,cibleId:t}))}a.relations=_;let b=new Set(h.flatMap(e=>e.medias.map(e=>e.id)));if(!a.mediaPrincipalId||!b.has(a.mediaPrincipalId)){let e=h.flatMap(e=>e.medias)[0];e?a.mediaPrincipalId=e.id:delete a.mediaPrincipalId}i.contributions=[...i.contributions.filter(e=>e.techniqueId!==a.id&&e.techniqueId!==o.id),...h,...d],i.techniques=i.techniques.filter(e=>e.id!==o.id);for(let e of i.techniques){if(e.id===a.id)continue;let t=new Set;e.relations=e.relations.map(e=>({...e,cibleId:e.cibleId===o.id?a.id:e.cibleId})).filter(n=>{if(n.cibleId===e.id)return!1;let r=`${n.type}|${n.cibleId}`;return t.has(r)?!1:(t.add(r),!0)})}i.favoris=[...new Set(i.favoris.map(e=>e===o.id?a.id:e))];for(let e of i.compositions)for(let t of e.blocs)t.type===`technique`&&t.techniqueId===o.id&&(t.techniqueId=a.id);return i.doublonsIgnores&&=i.doublonsIgnores.filter(e=>e!==Yu(t,n)),Mr(i),i}function nd(e,t){let n=structuredClone(e),r=(n.fusions??[]).findIndex(e=>e.fusionneeId===t);if(r<0)throw Error(`Défusion impossible : fusion introuvable`);let i=n.fusions[r],a=i.a.technique.id,o=i.b.technique.id;return n.techniques=n.techniques.filter(e=>e.id!==a),n.contributions=n.contributions.filter(e=>e.techniqueId!==a),n.techniques.push(structuredClone(i.a.technique),structuredClone(i.b.technique)),n.contributions.push(...i.a.contributions.map(e=>structuredClone(e)),...i.b.contributions.map(e=>structuredClone(e))),n.favoris=n.favoris.filter(e=>e!==a&&e!==o),i.a.etaitFavori&&n.favoris.push(a),i.b.etaitFavori&&n.favoris.push(o),n.fusions.splice(r,1),n.fusions.length===0&&delete n.fusions,Mr(n),n}function rd(e,t){return e.bibliotheque?.favoris.includes(t)??!1}async function id(e,t){if(!e.garde(`modification`,`Saisis le PIN pour modifier tes favoris.`,()=>void e.basculerFavori(t)))return;let n=e.bibliotheque;if(!n||!n.techniques.some(e=>e.id===t))return;let r=n.favoris.includes(t);n.favoris=r?n.favoris.filter(e=>e!==t):[...n.favoris,t],await e.persister(n),e.afficherToast(r?`Retiré des favoris`:`Ajouté aux favoris`)}function ad(e){let t=e.bibliotheque;return t?t.favoris.map(e=>t.techniques.find(t=>t.id===e)).filter(e=>e!==void 0):[]}function od(e){let t=e.bibliotheque;return t?Qu(t,t.doublonsIgnores??[]):[]}async function sd(e){let t=e.bibliotheque;!t||!(t.doublonsIgnores??[]).length||(delete t.doublonsIgnores,await e.persister(t),e.doublonOuvert=null,e.requestUpdate(),e.afficherToast(`Rescan effectué — les paires écartées reviennent à l'arbitrage.`))}async function cd(e,t,n,r){let i=e.bibliotheque;i&&(i.doublonsIgnores=[...new Set([...i.doublonsIgnores??[],Yu(t,n)])],await e.persister(i),e.fusionDoublon&&e.fusionDoublon.aId===t&&e.fusionDoublon.bId===n&&(e.fusionDoublon=null),e.afficherToast(r))}async function ld(e,t,n){let r=e.bibliotheque;!r||!r.techniques.some(e=>e.id===t)||await e.supprimerTechnique(n)}async function ud(e,t,n,r){if(!e.garde(`destruction_ou_sensible`,`Saisis le PIN pour fusionner ces fiches.`,()=>void e.fusionnerDoublonAvec(t,n,r)))return;let i=e.bibliotheque;if(!i)return;await e.stockage.snapshot(`avant-fusion-doublon`);let a=e=>{let t=i.techniques.find(t=>t.id===e);return{technique:structuredClone(t),contributions:i.contributions.filter(t=>t.techniqueId===e).map(e=>structuredClone(e)),etaitFavori:i.favoris.includes(e)}},o=a(t),s=a(n),c;try{c=td(i,t,n,r)}catch(t){e.afficherToast(`Fusion impossible : ${t instanceof Error?t.message:`état inattendu`}`,`alerte`);return}c.fusions=[...c.fusions??[],{fusionneeLe:new Date().toISOString(),fusionneeId:t,a:o,b:s}],e.fusionDoublon=null,await e.persister(c),e.afficherToast(`Fusionnées en une seule fiche ✓ — défusionnable depuis « Doublons »`)}async function dd(e,t){if(!e.garde(`destruction_ou_sensible`,`Saisis le PIN pour défusionner ces fiches.`,()=>void e.defusionner(t)))return;let n=e.bibliotheque;if(!n)return;await e.stockage.snapshot(`avant-defusion`);let r;try{r=nd(n,t)}catch(t){e.afficherToast(`Défusion impossible : ${t instanceof Error?t.message:`état inattendu`}`,`alerte`);return}await e.persister(r),e.afficherToast(`Fiches défusionnées ✓ — les deux fiches d'origine sont rétablies`)}async function fd(e,t){if(!e.garde(`modification`,`Saisis le PIN pour créer une adaptation locale.`,()=>void e.creerAdaptationLocale(t)))return;let n=e.bibliotheque,r=n?.contributions.find(e=>e.id===t);if(!n||!r)return;let i={id:it(),techniqueId:r.techniqueId,provenance:`personnel`,...r.description?{description:r.description}:{},pointsCles:[...r.pointsCles],...r.variantes?{variantes:r.variantes}:{},attribution:`Adaptation locale d'après ${Ws(r)}`,creeLe:new Date().toISOString(),medias:[]};n.contributions.push(i),await e.persister(n),e.voixOuverte=i.id,e.afficherToast(`Adaptation locale créée — modifiable librement ✓`)}function pd(e){let t=e.progressionExport,n=t?t.total>0?`Préparation du fichier — ${t.fait} / ${t.total} vidéo${t.total>1?`s`:``}`:`Préparation du fichier…`:e.occupe;return n?P`<div class="voile-occupe" role="status" aria-live="polite">
    <div class="occupe-carte"><span class="occupe-spinner" aria-hidden="true"></span><span>${n}</span>
      ${e.annulationOccupe?P`<button class="chip-filtre" style="margin-left:6px"
            @click=${()=>e.annulationOccupe?.executer()}>${e.annulationOccupe.libelle}</button>`:F}
    </div>
  </div>`:F}function md(e){let t=e.importEnAttente,{rapport:n,manifeste:r,volume:i,medias:a}=t,o=a.length,s=(e,t)=>e?P`<li><b>${e}</b> ${t}</li>`:F,c=i>=1e6?`${(i/1e6).toFixed(1)} Mo`:`${Math.max(1,Math.round(i/1e3))} Ko`,l=n.creees.length,u=n.rejointes.length>0||n.retirees.length>0,d=t.dejaInstalle,f=r?.nom??n.discipline,p=e.bibliotheque?.editionsPacks?.find(e=>e.pack===t.packId)?.versionEditoriale,m=d&&!l&&!n.fichesModifiees&&!n.compositionsModifiees&&!n.imagesAjoutees&&!n.relationsAjoutees&&!n.retirees.length&&!n.conflitsLiaisons&&!n.retraitsProposes&&!n.conflitsContributions;return P`
    <div class="voile" @click=${()=>e.annulerImport()}></div>
    <div class="feuille" role="dialog" aria-modal="true" tabindex="-1" aria-label="Proposition d'import">
      <div class="prise"></div>
      <h2>${d?P`Mettre à jour « ${f} » ?`:P`Installer « ${f} » ?`}</h2>
      <div class="geste manifeste-import">
        ${r?.auteur?P`${r.auteur} · `:F}${o?P`${o} vidéo${o>1?`s`:``} · `:F}${c}${r?.conditions?P`<br>Conditions : ${r.conditions}`:F}${r?.versionEditoriale?P`<br>Édition ${d&&p&&p!==r.versionEditoriale?P`${p} → ${r.versionEditoriale}`:r.versionEditoriale}`:F}
      </div>
      ${d?P`<div class="geste avertissement-import" style="color:var(--attention,#b26b00)">
            ⚠ Ce pack est déjà installé. Le mettre à jour remplace le contenu du pack par cette version.
            Tes vidéos, notes et favoris sont conservés ; un texte de fiche <b>du pack</b> que tu as modifié n'est jamais écrasé — les écarts te seront proposés.</div>`:F}
      ${t.avertissements.length?P`<div class="geste avertissement-import" style="color:var(--attention,#b26b00)">
            ⚠ ${t.avertissements.join(` · `)}</div>`:F}
      <ul class="points" style="margin:8px 0 0; list-style:none; padding:0">
        ${d?P`
            ${s(l,`technique(s) ajoutée(s)`)}
            ${s(n.fichesModifiees,`fiche(s) mise(s) à jour`)}
            ${s(n.compositionsModifiees,`composition(s) mise(s) à jour`)}
            ${s(n.imagesAjoutees,`image(s) ajoutée(s)`)}
            ${s(n.relationsAjoutees,`lien(s) ajouté(s)`)}
            ${s(n.retirees.length,`élément(s) que cette version ne contient plus`)}
            ${m?P`<li>À jour — cette version ne change rien.</li>`:F}`:P`
            <li>${l?P`<b>${l}</b> technique${l>1?`s`:``} ser${l>1?`ont`:`a`} ajoutée${l>1?`s`:``}.`:`Rien de nouveau à ajouter.`}</li>
            <li>${u?`Le contenu du pack déjà installé est mis à jour.`:`Aucune technique existante ne sera modifiée.`}</li>`}
        ${n.conflitsLiaisons?P`<li><b>${n.conflitsLiaisons}</b> liaison${n.conflitsLiaisons>1?`s`:``} diffère${n.conflitsLiaisons>1?`nt`:``} du pack — te ser${n.conflitsLiaisons>1?`ont`:`a`} proposée${n.conflitsLiaisons>1?`s`:``}, rien d'appliqué d'office.</li>`:F}
        ${n.retraitsProposes?P`<li><b>${n.retraitsProposes}</b> lien${n.retraitsProposes>1?`s`:``} que tu as ${n.retraitsProposes>1?`ne sont`:`n'est`} plus déclaré${n.retraitsProposes>1?`s`:``} par cette version — te ser${n.retraitsProposes>1?`ont`:`a`} proposé${n.retraitsProposes>1?`s`:``} au retrait, rien de retiré d'office.</li>`:F}
        ${n.conflitsContributions?P`<li><b>${n.conflitsContributions}</b> texte${n.conflitsContributions>1?`s`:``} que tu as modifié${n.conflitsContributions>1?`s`:``} diffère${n.conflitsContributions>1?`nt`:``} de cette version — te ser${n.conflitsContributions>1?`ont`:`a`} proposé${n.conflitsContributions>1?`s`:``}, rien d'écrasé d'office.</li>`:F}
      </ul>
      ${n.suggestions.length?P`<p class="geste" style="padding:8px 0 0; line-height:1.5">
            <b>${n.suggestions.length}</b> technique${n.suggestions.length>1?`s semblent`:` semble`} déjà présente${n.suggestions.length>1?`s`:``} dans un autre pack.
            Elles resteront séparées et pourront être comparées plus tard dans Plus › Doublons potentiels.</p>`:F}
      <div class="actions">
        <button class="bouton" @click=${()=>e.annulerImport()}>Annuler</button>
        <button class="bouton principal" @click=${()=>void e.confirmerImport()}>${d?`Mettre à jour`:`Installer`}</button>
      </div>
    </div>
  `}function hd(e){let t=e.rapportApresImport,n=(e,t)=>e?P`<li><b>${e}</b> ${t}</li>`:F;return P`
    <div class="voile" @click=${()=>e.fermerRapportImport()}></div>
    <div class="feuille" role="dialog" aria-modal="true" tabindex="-1" aria-label="Rapport d'import">
      <div class="prise"></div>
      <h2>« ${t.discipline} » installé ✓</h2>
      <ul class="points" style="margin:4px 0 0; list-style:none; padding:0">
        ${n(t.creees,`technique(s) ajoutée(s)`)}
        ${n(t.fichesModifiees,`fiche(s) mise(s) à jour`)}
        ${n(t.compositionsModifiees,`composition(s) mise(s) à jour`)}
        ${n(t.imagesAjoutees,`image(s) ajoutée(s)`)}
        ${n(t.relationsAjoutees,`lien(s) ajouté(s)`)}
        ${n(t.videos,`vidéo(s) ajoutée(s)`)}
      </ul>
      ${t.suggestions.length?P`<p class="geste" style="padding:8px 0 0; line-height:1.5">
            <b>${t.suggestions.length}</b> technique${t.suggestions.length>1?`s`:``} à comparer plus tard dans Plus › Doublons potentiels.
          </p>`:F}
      ${t.conflitsLiaisons?P`<p class="geste" style="padding:8px 0 0; line-height:1.5">
            <b>${t.conflitsLiaisons}</b> liaison${t.conflitsLiaisons>1?`s`:``} diffère${t.conflitsLiaisons>1?`nt`:``} du pack —
            <button class="lien-texte" @click=${()=>{e.fermerRapportImport(),e.ouvrirPlusSection(`relations`)}}>à arbitrer dans Plus › Relations</button>.
          </p>`:F}
      <!-- D-243 : la phrase qui manquait. « J'ai mis à jour et rien n'a
           changé » venait de là — un pack qui RETIRE des liens ne disait rien,
           parce que rien n'était retiré. Le nombre est dit, et rien n'a bougé. -->
      ${t.retraitsProposes?P`<p class="geste" style="padding:8px 0 0; line-height:1.5">
            <b>${t.retraitsProposes}</b> lien${t.retraitsProposes>1?`s`:``} que tu as ${t.retraitsProposes>1?`ne sont`:`n'est`} plus déclaré${t.retraitsProposes>1?`s`:``} par ce pack — rien n'a été retiré :
            <button class="lien-texte" @click=${()=>{e.fermerRapportImport(),e.ouvrirPlusSection(`relations`)}}>à décider dans Plus › Relations</button>.
          </p>`:F}
      ${t.conflitsContributions?P`<p class="geste" style="padding:8px 0 0; line-height:1.5">
            <b>${t.conflitsContributions}</b> texte${t.conflitsContributions>1?`s`:``} que tu as modifié${t.conflitsContributions>1?`s`:``} diffère${t.conflitsContributions>1?`nt`:``} de cette version — rien n'a été écrasé :
            <button class="lien-texte" @click=${()=>{e.fermerRapportImport(),e.ouvrirPlusSection(`atraiter`)}}>à arbitrer dans Plus › À vérifier</button>.
          </p>`:F}
      <div class="actions">
        ${t.disciplineId?P`<button class="bouton" @click=${()=>{let n=t.disciplineId;e.fermerRapportImport(),e.ouvrirDiscipline(n)}}>
              Ouvrir la discipline</button>`:F}
        <button class="bouton principal" @click=${()=>e.fermerRapportImport()}>Fermer</button>
      </div>
    </div>
  `}function gd(e){let t=e.restaurationEnAttente,n=t.bibliotheque;return P`
    <div class="voile" @click=${()=>e.annulerRestauration()}></div>
    <div class="feuille" role="dialog" aria-modal="true" tabindex="-1" aria-label="Restauration complète">
      <div class="prise"></div>
      <h2>Restaurer cette sauvegarde complète ?</h2>
      <div class="geste">
        ${t.manifeste.creeLe.slice(0,10)} ·
        ${n.disciplines.length} discipline${n.disciplines.length>1?`s`:``} (${n.disciplines.map(e=>e.nom).join(`, `)}) ·
        ${n.techniques.length} techniques · ${n.contributions.length} contenus ·
        ${n.compositions.length} composition${n.compositions.length>1?`s`:``} ·
        ${n.favoris.length} favori${n.favoris.length>1?`s`:``} ·
        ${t.medias.length} vidéo${t.medias.length>1?`s`:``}
      </div>
      ${t.avertissements.length?P`<div class="geste avertissement-import" style="color:var(--attention,#b26b00)">
            ⚠ ${t.avertissements.join(` · `)}</div>`:F}
      <p class="fil-vide" style="padding:6px 0 0">
        Cette installation est vierge : rien n'est remplacé. Rien n'est
        écrit avant ta confirmation.
      </p>
      <div class="actions">
        <button class="bouton" @click=${()=>e.annulerRestauration()}>Annuler</button>
        <button class="bouton principal" @click=${()=>void e.confirmerRestauration()}>Restaurer</button>
      </div>
    </div>
  `}function _d(e){let t=e.partagePreparation,n=e=>e>=1e6?`${(e/1e6).toFixed(1)} Mo`:`${Math.max(1,Math.round(e/1e3))} Ko`;return P`
    <div class="voile" @click=${()=>e.partagePreparation=null}></div>
    <div class="feuille" role="dialog" aria-modal="true" tabindex="-1" aria-label="Partager la technique">
      <div class="prise"></div>
      <h2>Partager « ${t.nom} »</h2>
      <div class="geste">
        1 technique${t.nbLiens?` · ${t.nbLiens} vidéo${t.nbLiens>1?`s`:``} en lien`:``}
        · ${t.nbLocales} vidéo${t.nbLocales>1?`s`:``} locale${t.nbLocales>1?`s`:``}${t.avecVideos?` (~${n(t.octetsLocaux)})`:``}
      </div>
      <button class="interrupteur ${t.avecVideos?`actif`:``}" role="switch" aria-checked=${t.avecVideos} @click=${()=>{e.partagePreparation={...t,avecVideos:!t.avecVideos},e.requestUpdate()}}>
        <span class="interrupteur-texte">
          <span class="interrupteur-titre">Inclure les vidéos locales</span>
          <span class="interrupteur-aide">${t.avecVideos?`Fichier plus lourd (~${n(t.octetsLocaux)})`:`Fichier léger — les liens restent inclus`}</span>
        </span>
        <span class="interrupteur-piste" aria-hidden="true"><span class="interrupteur-bouton"></span></span>
      </button>
      <p class="fil-vide" style="padding:6px 0 0">Sans tes notes privées ni tes favoris.</p>
      <div class="actions">
        <button class="bouton" @click=${()=>e.partagePreparation=null}>Annuler</button>
        <button class="bouton principal" @click=${()=>void e.confirmerPartage()}>Partager</button>
      </div>
    </div>
  `}function vd(e){let t=e.enregistrementMedia,n=t.octets>=1e6?`${(t.octets/1e6).toFixed(1)} Mo`:`${Math.max(1,Math.round(t.octets/1e3))} Ko`,r=Math.round(t.fraction*100);return P`
    <div class="voile"></div>
    <div class="feuille feuille-progression" role="dialog" aria-modal="true" tabindex="-1" aria-label="Enregistrement en cours" aria-live="polite">
      <div class="prise"></div>
      <h2>${t.phase===`analyse`?`Analyse de la vidéo…`:`Enregistrement…`}</h2>
      <div class="geste">
        ${n}${t.phase===`ecriture`?P` · ${r} %${t.etaSec===null?F:P` · ~${t.etaSec} s restant`}`:``}
      </div>
      <div class="barre-progression">
        <div class="barre-progression-jauge ${t.phase===`analyse`?`indeterminee`:``}"
          style=${t.phase===`ecriture`?`width:${r}%`:``}></div>
      </div>
      <div class="actions" style="padding-top:10px">
        <button class="bouton" @click=${()=>e.annulerIngestionVideo()}>Annuler</button>
      </div>
    </div>
  `}function yd(e){let t=e.confirmation,n=()=>{e.confirmation=null,e.requestUpdate()};return P`
    <div class="voile" @click=${n}></div>
    <div class="feuille feuille-confirmation" role="dialog" aria-modal="true" tabindex="-1" aria-label=${t.titre}>
      <div class="prise"></div>
      <h2>${t.titre}</h2>
      ${t.corps?P`<p class="confirmation-corps">${t.corps}</p>`:F}
      <div class="actions">
        <button class="bouton" @click=${n}>Annuler</button>
        <button class="bouton principal danger" @click=${()=>{let e=t.action;n(),e()}}>${t.bouton}</button>
      </div>
    </div>
  `}async function bd(e,t,n){if(!e.garde(`modification`,`Saisis le PIN pour renommer cette discipline.`,()=>void e.majNomDiscipline(t,n)))return;let r=e.bibliotheque,i=r?.disciplines.find(e=>e.id===t);!r||!i||!n.trim()||(i.nom=n.trim(),await e.persister(r))}async function xd(e,t,n,r){if(!e.garde(`modification`,`Saisis le PIN pour modifier les taxonomies.`,()=>void e.ajouterTaxonomie(t,n,r)))return;let i=e.bibliotheque,a=i?.disciplines.find(e=>e.id===t),o=r.trim();if(!i||!a||!o)return;let s=o.toLowerCase().normalize(`NFD`).replace(/[̀-ͯ]/g,``).replace(/[^a-z0-9]+/g,`-`),c=s;for(let e=2;[...a.familles,...a.niveaux].some(e=>e.id===c);e++)c=`${s}-${e}`;a[n].push({id:c,nom:o,ordre:a[n].length+1}),await e.persister(i)}async function Sd(e,t,n,r,i){if(!e.garde(`modification`,`Saisis le PIN pour modifier les taxonomies.`,()=>void e.majTaxonomie(t,n,r,i)))return;let a=e.bibliotheque,o=(a?.disciplines.find(e=>e.id===t))?.[n].find(e=>e.id===r);if(!(!a||!o)){if(i.nom?.trim()&&(o.nom=i.nom.trim()),n===`niveaux`){let e=o;i.couleur!==void 0&&(i.couleur?e.couleur=i.couleur:delete e.couleur),i.couleur2!==void 0&&(i.couleur2?e.couleur2=i.couleur2:delete e.couleur2)}await e.persister(a)}}function Cd(e,t,n,r){return(e.bibliotheque?.techniques??[]).filter(e=>e.disciplineId===t&&(n===`familles`?e.familleId===r:e.niveauxIds.includes(r)))}function wd(e,t,n,r,i){if(!e.garde(`modification`,`Saisis le PIN pour modifier les taxonomies.`,()=>void e.reordonnerTaxonomie(t,n,r,i)))return;let a=e.bibliotheque,o=a?.disciplines.find(e=>e.id===t);if(!a||!o)return;let s=o[n],c=s.findIndex(e=>e.id===r),l=c+i;if(c<0||l<0||l>=s.length)return;let[u]=s.splice(c,1);s.splice(l,0,u),s.forEach((e,t)=>e.ordre=t+1),e.persister(a)}async function Td(e,t,n,r,i){if(!e.garde(`destruction_ou_sensible`,`Saisis le PIN pour supprimer cette valeur de classification.`,()=>void e.supprimerTaxonomie(t,n,r,i)))return;let a=e.bibliotheque,o=a?.disciplines.find(e=>e.id===t),s=o?.[n].find(e=>e.id===r);if(!a||!o||!s)return;let c=e.usagesTaxonomie(t,n,r);if(c.length&&i===void 0){e.afficherToast(`Utilisé par ${c.length} technique${c.length>1?`s`:``} — choisis « remplacer » ou « retirer la classification »`);return}let l=i?o[n].find(e=>e.id===i)?.nom:null;if(!(i&&!l)){if(c.length){await e.stockage.snapshot(`avant-suppression-taxonomie-${s.nom}`);for(let e of c)n===`familles`?i?e.familleId=i:delete e.familleId:e.niveauxIds=i?[...new Set(e.niveauxIds.map(e=>e===r?i:e))]:e.niveauxIds.filter(e=>e!==r)}o[n]=o[n].filter(e=>e.id!==r),await e.persister(a),c.length&&e.afficherToast(l?`« ${s.nom} » supprimée — ${c.length} technique${c.length>1?`s`:``} reclassée${c.length>1?`s`:``} vers « ${l} » (point de restauration conservé)`:`« ${s.nom} » supprimée — classification retirée de ${c.length} technique${c.length>1?`s`:``} (point de restauration conservé)`)}}async function Ed(e,t,n){if(!e.garde(`modification`,`Saisis le PIN pour modifier les types de lien.`,()=>void e.ajouterTypeRelation(t,n)))return;let r=e.bibliotheque,i=t.trim();if(!r||!i)return;let a=i.toLowerCase().normalize(`NFD`).replace(/[̀-ͯ]/g,``).replace(/[^a-z0-9]+/g,`-`);if(r.typesRelation.some(e=>e.id===a)){e.afficherToast(`Le type « ${i} » existe déjà`);return}let o=n.trim()===``;r.typesRelation.push({id:a,libelle:i,...o?{symetrique:!0}:{libelleInverse:n.trim()}}),await e.persister(r),e.afficherToast(`Type de relation « ${i} » ajouté ✓`)}async function Dd(e,t,n){if(!e.garde(`modification`,`Saisis le PIN pour modifier les types de lien.`,()=>void e.majTypeRelation(t,n)))return;let r=e.bibliotheque,i=r?.typesRelation.find(e=>e.id===t);if(!(!r||!i)){if(n.libelle!==void 0&&n.libelle.trim()&&(i.libelle=n.libelle.trim()),n.libelleInverse!==void 0&&!i.symetrique){let t=n.libelleInverse.trim();if(!t){e.afficherToast(`Un lien orienté garde une lecture inverse — ou passe-le en symétrique d'abord`);return}i.libelleInverse=t}await e.persister(r)}}async function Od(e,t){if(!e.garde(`modification`,`Saisis le PIN pour modifier les types de lien.`,()=>void e.basculerSymetrieTypeRelation(t)))return;let n=e.bibliotheque,r=n?.typesRelation.find(e=>e.id===t);if(!n||!r)return;let i=e.usagesTypeRelation(t);if(i){e.afficherToast(`« ${r.libelle} » relie déjà ${i} paire${i>1?`s`:``} de techniques — sa nature de lecture ne peut plus changer`);return}r.symetrique?(delete r.symetrique,r.libelleInverse=r.libelleInverse??`${r.libelle} (inverse)`):(r.symetrique=!0,delete r.libelleInverse),await e.persister(n)}async function kd(e,t){if(window.Capacitor?.isNativePlatform?.())e.persistanceStockage=`native`;else{let n=await e.stockage.persistanceStockage(t);e.persistanceStockage=n===!0?`accordee`:n===!1?`refusee`:`inconnue`}e.requestUpdate()}async function Ad(e){await kd(e,!0),e.afficherToast(e.persistanceStockage===`accordee`?`Persistance accordée — le navigateur ne purgera pas tes données.`:`Persistance non accordée pour l'instant — le navigateur décide selon l'usage du site. Pense aux sauvegardes régulières.`)}function jd(e,t){return Ue(t)}async function Md(e){let t=e.bibliotheque;if(!t)return;e.taillesVideos=await e.stockage.taillesVideos();let n=new Set(e.taillesVideos.keys());e.mediasManquants=t.contributions.flatMap(t=>t.medias.filter(e=>e.type===`local`&&!n.has(e.id)).map(()=>({techniqueId:t.techniqueId,nom:t.techniqueId?e.technique(t.techniqueId)?.nom??`?`:`capture à rattacher`})));let r=jd(e,t);e.videosOrphelines=[...e.taillesVideos.entries()].filter(([e])=>!r.has(e)).map(([e,t])=>({id:e,taille:t})),e.sauvegardes=await e.stockage.listerSauvegardes(),e.infoEspace=await e.stockage.estimerEspace(),e.requestUpdate()}async function Nd(e,t,n){if(!e.garde(`modification`,`Saisis le PIN pour rattacher ce média.`,()=>void e.rattacherOrphelin(t,n)))return;let r=e.bibliotheque,i=r?.techniques.find(e=>e.id===n);if(!r||!i)return;let a=await e.stockage.fichierVideo(t);if(!a){e.afficherToast(`Fichier introuvable — actualise la liste`,`alerte`);return}let o=await ft(a),s=a.name.includes(`.`)?a.name.slice(a.name.indexOf(`.`)+1):void 0,c={id:it(),techniqueId:n,provenance:`personnel`,description:`Média retrouvé et rattaché depuis la médiathèque`,pointsCles:[],creeLe:new Date().toISOString(),medias:[{id:t,type:`local`,ref:`videos/${t}`,sha256:o,taille:a.size,ajouteLe:new Date().toISOString(),...s?{extension:s}:{}}]};r.contributions.push(c);try{await e.persister(r)}catch(t){r.contributions=r.contributions.filter(e=>e.id!==c.id),e.afficherToast(`Rattachement impossible : ${t instanceof Error?t.message:`écriture refusée`}`,`alerte`);return}e.afficherToast(`Média rattaché à « ${i.nom} » ✓`),await Md(e)}async function Pd(e,t){if(!e.garde(`destruction_ou_sensible`,`Saisis le PIN pour supprimer ce fichier.`,()=>void e.supprimerVideoOrpheline(t)))return;let n=e.bibliotheque;if(n){if(jd(e,n).has(t)){e.afficherToast(`Ce fichier est référencé — il ne sera pas supprimé`,`alerte`);return}await e.stockage.supprimerVideo(t),e.afficherToast(`Fichier inutilisé supprimé ✓`),await Md(e)}}async function Fd(e,t){if(!e.garde(`destruction_ou_sensible`,`Saisis le PIN pour supprimer ces fichiers.`,()=>void e.supprimerOrphelinsVerifies(t)))return;let n=e.bibliotheque;if(!n||t.length===0)return;let r=jd(e,n),i=0,a=0;for(let n of t){if(r.has(n)){a+=1;continue}await e.stockage.supprimerVideo(n),i+=1}e.afficherToast(a?`${i} fichier${i>1?`s`:``} supprimé${i>1?`s`:``} — ${a} redevenu${a>1?`s`:``} référencé${a>1?`s`:``}, conservé${a>1?`s`:``}`:`${i} fichiers inutilisés supprimés ✓`),await Md(e)}async function Id(e,t){if(e.garde(`destruction_ou_sensible`,`Saisis le PIN pour restaurer cet état.`,()=>void e.restaurerSauvegarde(t)))try{e.bibliotheque={...await e.occuperPendant(`Restauration en cours…`,()=>e.stockage.restaurerSauvegarde(t))},e.afficherToast(`Sauvegarde restaurée ✓ — l'état précédent est lui-même sauvegardé`),Md(e)}catch(t){e.consignerEchec(`MOV-E05`,t),e.afficherToast(`Restauration impossible : ${t instanceof Error?t.message:`sauvegarde illisible`}`,`alerte`)}}var Ld=`bibliotheque.json`,Rd=`bibliotheque.json.tmp`,zd=`preferences.json`,Bd=`videos`,Vd=`images`,Hd=`staging`,Ud=`import`,Wd=`sauvegardes`,Gd=10;function Kd(e,t){return t?`${e}.${t}`:e}function qd(e){let t=e.indexOf(`.`);return t===-1?e:e.slice(0,t)}function Jd(){return{version:1,demarrage:{mode:`bibliotheque`}}}function Yd(e){if(typeof e!=`object`||!e)return Jd();let t=e;return t.version!==1||!t.demarrage?.mode?Jd():[`accueil`,`favoris`].includes(t.demarrage.mode)?{...t,demarrage:{mode:`bibliotheque`}}:t}async function Z(){return navigator.storage.getDirectory()}async function Xd(e){try{return await(await(await(await Z()).getFileHandle(e)).getFile()).text()}catch{return null}}async function Zd(e,t){let n=await(await(await Z()).getFileHandle(e,{create:!0})).createWritable();await n.write(t),await n.close()}async function Qd(e){if(!e.length)return[];let t=await(await Z()).getDirectoryHandle(Vd,{create:!0}),n=new Set;for await(let[e]of t)n.add(e);let r=[];for(let i of e){if(ut(i.octets)!==i.id){r.push(i);continue}if(!n.has(i.id))try{let e=await(await t.getFileHandle(i.id,{create:!0})).createWritable();await e.write(i.octets),await e.close()}catch{r.push(i)}}return r}async function $d(e){try{await(await Z()).removeEntry(e)}catch{}}var ef=class{#e=!1;#t=Promise.resolve();async charger(){await this.reprendreTransactionInachevee();let e=await Xd(Ld);if(e===null)return null;let{bibliotheque:t,imagesDetachees:n}=nr(JSON.parse(e));if(Mr(t),n.length)try{await Qd(n),await this.sauvegarder(t)}catch{}return t}async lireImage(e){try{return await(await(await(await Z()).getDirectoryHandle(Vd)).getFileHandle(e)).getFile()}catch{return null}}async poserImagesRecues(e){return(await Qd(e)).length}async ajouterImage(e,t){let n={id:ut(e),mime:t,taille:e.length};if((await Qd([{...n,octets:e}])).length)throw Error(`Impossible d'enregistrer l'image (espace insuffisant ?)`);return n}async octetsImages(e){let t=new Map;for(let n of e.images??[]){let e=await this.lireImage(n.id);e&&t.set(n.id,new Uint8Array(await e.arrayBuffer()))}return t}async balayerImagesOrphelines(e){let t=new Set((e.images??[]).map(e=>e.id)),n=0;try{let e=await(await Z()).getDirectoryHandle(Vd),r=[];for await(let[t]of e)r.push(t);for(let i of r)t.has(i)||(await e.removeEntry(i),n++)}catch{}return n}async reprendreTransactionInachevee(){return await Xd(Rd)===null?!1:(await $d(Rd),!0)}async sauvegarder(e){Mr(e);let t=this.#t,n=(async()=>{await t.catch(()=>{}),this.#e||=(await this.snapshot(`debut-de-session`),!0);let n=JSON.stringify(e);await Zd(Rd,n);let r=await Xd(Rd);if(r!==n)throw Error(`Écriture d'état incohérente — bascule annulée, état courant conservé`);Mr(rr(JSON.parse(r))),await Zd(Ld,r),await $d(Rd)})();this.#t=n,await n}async chargerPreferences(){let e=await Xd(zd);if(e===null)return Jd();try{let t=JSON.parse(e),n=Yd(t);return t?.demarrage?.mode===`accueil`&&await this.sauvegarderPreferences(n),n}catch{return Jd()}}async sauvegarderPreferences(e){await Zd(zd,JSON.stringify(e))}async snapshot(e=`session`){let t=await Xd(Ld);if(t===null)return;let n=await(await Z()).getDirectoryHandle(Wd,{create:!0}),r=e.toLowerCase().normalize(`NFD`).replace(/[\u0300-\u036f]/g,``).replace(/[^a-z0-9]+/g,`-`).slice(0,40),i=new Date().toISOString().replaceAll(`:`,`-`)+`__`+r+`.json`,a=await(await n.getFileHandle(i,{create:!0})).createWritable();await a.write(t),await a.close();let o=[];for await(let[e]of n)o.push(e);for(let e of o.sort().slice(0,Math.max(0,o.length-Gd)))await n.removeEntry(e)}async listerSauvegardes(){try{let e=await(await Z()).getDirectoryHandle(Wd),t=[];for await(let[n]of e)t.push(n);return t.sort().reverse()}catch{return[]}}async restaurerSauvegarde(e){let t=await(await(await(await(await Z()).getDirectoryHandle(Wd)).getFileHandle(e)).getFile()).text(),n=rr(JSON.parse(t));return Mr(n),await this.snapshot(`avant-restauration`),await this.sauvegarder(n),n}async#n(e){try{let t=await(await Z()).getDirectoryHandle(Bd);try{return await t.getFileHandle(e)}catch{for await(let[n,r]of t)if(r.kind===`file`&&n.startsWith(e+`.`))return r;return null}}catch{return null}}async ecrireVideo(e,t,n,r,i){let a=Kd(e,n),o=await(await Z()).getDirectoryHandle(Hd,{create:!0}),s=await o.getFileHandle(a,{create:!0}),c=await s.createWritable(),l=t.size,u=0,d=r&&l>0||i?t.stream().pipeThrough(new TransformStream({transform(e,t){if(i?.())throw new dt;u+=e.byteLength,r&&l>0&&r(Math.min(1,u/l)),t.enqueue(e)}})):t.stream();try{await d.pipeTo(c)}catch(e){try{await c.abort()}catch{}try{await o.removeEntry(a)}catch{}throw e}r&&r(1);let f=await(await Z()).getDirectoryHandle(Bd,{create:!0});try{await s.move(f)}catch{let e=await(await f.getFileHandle(a,{create:!0})).createWritable();await(await s.getFile()).stream().pipeTo(e),await o.removeEntry(a)}}async#r(e=!1){return(await(await Z()).getDirectoryHandle(Hd,{create:e})).getDirectoryHandle(Ud,{create:e})}puitsImport(){let e=this,t=null;return{async ouvrir(n){t=await(await(await e.#r(!0)).getFileHandle(n,{create:!0})).createWritable()},async ecrire(e){await t.write(e)},async fermer(){await t.close(),t=null},async abandonner(){try{t&&await t.close()}catch{}t=null,await e.nettoyerImport()}}}async promouvoirImportMedias(e){if(e.length===0)return[];let t=[],n=await this.#r(!1),r=await(await Z()).getDirectoryHandle(Bd,{create:!0});for(let i of e){let e;try{e=await n.getFileHandle(i)}catch{continue}let a=!1;try{await r.getFileHandle(i),a=!0}catch{}if(a){try{await n.removeEntry(i)}catch{}continue}try{await e.move(r)}catch{let t=await(await r.getFileHandle(i,{create:!0})).createWritable();await(await e.getFile()).stream().pipeTo(t);try{await n.removeEntry(i)}catch{}}t.push(i)}return t}async annulerPromotionMedias(e){if(e.length===0)return;let t=await this.#r(!0),n=await(await Z()).getDirectoryHandle(Bd,{create:!0});for(let r of e){let e;try{e=await n.getFileHandle(r)}catch{continue}try{await e.move(t)}catch{try{let i=await(await t.getFileHandle(r,{create:!0})).createWritable();await(await e.getFile()).stream().pipeTo(i),await n.removeEntry(r)}catch{}}}}async nettoyerImport(){try{await(await(await Z()).getDirectoryHandle(Hd)).removeEntry(Ud,{recursive:!0})}catch{}}async*lireMediaParBlocs(e,t){let n=await this.#n(e);if(!n)return;let r=await n.getFile();for(let e=0;e<r.size;e+=t){let n=r.slice(e,Math.min(e+t,r.size));yield new Uint8Array(await n.arrayBuffer())}}async ouvrirArchiveTemp(e){return(await(await(await Z()).getDirectoryHandle(Hd,{create:!0})).getFileHandle(e,{create:!0})).createWritable()}async fichierArchiveTemp(e){return(await(await(await Z()).getDirectoryHandle(Hd)).getFileHandle(e)).getFile()}async supprimerArchiveTemp(e){try{await(await(await Z()).getDirectoryHandle(Hd)).removeEntry(e)}catch{}}async nettoyerArchivesTemp(){try{let e=await(await Z()).getDirectoryHandle(Hd),t=[];for await(let[n]of e)n.startsWith(`export-`)&&n.endsWith(`.movpack`)&&t.push(n);for(let n of t)await e.removeEntry(n)}catch{}}async nettoyerStaging(){try{await(await Z()).removeEntry(Hd,{recursive:!0})}catch{}}async estimerEspace(){try{let e=await navigator.storage.estimate();return typeof e.usage!=`number`||typeof e.quota!=`number`?null:{usage:e.usage,quota:e.quota}}catch{return null}}async persistanceStockage(e=!1){try{return navigator.storage?.persisted?await navigator.storage.persisted()?!0:e&&navigator.storage.persist?await navigator.storage.persist():!1:null}catch{return null}}async fichierVideo(e){let t=await this.#n(e);if(!t)return null;try{return await t.getFile()}catch{return null}}async urlVideo(e){let t=await this.#n(e);if(!t)return null;try{return URL.createObjectURL(await t.getFile())}catch{return null}}async lireVideo(e){let t=await this.#n(e);if(!t)return null;try{return new Uint8Array(await(await t.getFile()).arrayBuffer())}catch{return null}}async listerVideos(){try{let e=await(await Z()).getDirectoryHandle(Bd),t=new Set;for await(let[n]of e)t.add(qd(n));return t}catch{return new Set}}async taillesVideos(){let e=new Map;try{let t=await(await Z()).getDirectoryHandle(Bd);for await(let[n,r]of t)r.kind===`file`&&e.set(qd(n),(await r.getFile()).size)}catch{}return e}async supprimerVideo(e){let t=await this.#n(e);if(t)try{await(await(await Z()).getDirectoryHandle(Bd)).removeEntry(t.name)}catch{}}async reinitialiser(){let e=await Z();for(let t of[Ld,Rd,zd])try{await e.removeEntry(t)}catch{}for(let t of[Bd,Vd,Hd,Wd])try{await e.removeEntry(t,{recursive:!0})}catch{}}},tf=31e4;function nf(e){if(!/^\d{6,12}$/.test(e))return`Le PIN est une suite de 6 à 12 chiffres`;if(/^(\d)\1+$/.test(e))return`Un même chiffre répété est trop évident`;let t=`01234567890123456789012`,n=[...t].reverse().join(``);return t.includes(e)||n.includes(e)?`Une suite de chiffres est trop évidente`:null}function rf(e){return[...e].map(e=>e.toString(16).padStart(2,`0`)).join(``)}function af(e){let t=new Uint8Array(e.length/2);for(let n=0;n<t.length;n++)t[n]=parseInt(e.slice(n*2,n*2+2),16);return t}async function of(e,t,n){let r=await crypto.subtle.importKey(`raw`,new TextEncoder().encode(e),`PBKDF2`,!1,[`deriveBits`]),i=await crypto.subtle.deriveBits({name:`PBKDF2`,hash:`SHA-256`,salt:af(t),iterations:n},r,256);return rf(new Uint8Array(i))}async function sf(e){let t=nf(e);if(t)throw Error(t);let n=rf(crypto.getRandomValues(new Uint8Array(16)));return{version:1,sel:n,iterations:tf,empreinte:await of(e,n,tf)}}async function cf(e,t){let n=await of(e,t.sel,t.iterations);if(n.length!==t.empreinte.length)return!1;let r=0;for(let e=0;e<n.length;e++)r|=n.charCodeAt(e)^t.empreinte.charCodeAt(e);return r===0}function lf(e){return e<5?0:Math.min(30,2**(e-4))}function uf(e,t,n){return e===`consultation`||!(e===`modification`?t.modifications:t.suppressions)||n?`libre`:`pin_requis`}function df(e,t,n){return e===null?!1:t===`arriere-plan`||n-e<(t===`15min`?15:5)*6e4}var ff=class{#e=null;#t=0;#n=0;#r;constructor(e){this.#r=e}get app(){return this.#r}get reglagesProtections(){let e=this.app.preferences.protections;return{modifications:e?.modifications??!1,suppressions:e?.suppressions??!1}}get pinConfigure(){return this.app.preferences.protections?.verification!==void 0}async#i(e){this.app.preferences={...this.app.preferences,protections:e},await this.app.stockage.sauvegarderPreferences(this.app.preferences),this.app.requestUpdate()}async activerProtection(e,t){let n=this.app.preferences.protections,r=n?.verification;if(!r){if(!t)return`Crée d'abord un PIN`;let e=nf(t.pin);if(e)return e;if(t.pin!==t.confirmation)return`Les deux saisies ne correspondent pas`;r=await sf(t.pin)}return await this.#i({modifications:e===`modifications`?!0:n?.modifications??!1,suppressions:e===`suppressions`?!0:n?.suppressions??!1,verrouillage:n?.verrouillage??`5min`,verification:r}),this.#a(`protection activée`),this.app.afficherToast(`Protection ${e===`modifications`?`des modifications`:`des suppressions et opérations sensibles`} activée ✓`),null}async desactiverProtection(e,t){let n=this.app.preferences.protections;if(!n?.verification)return null;if(!await cf(t,n.verification))return`PIN incorrect`;let r={...n,modifications:e!==`modifications`&&n.modifications,suppressions:e!==`suppressions`&&n.suppressions};return!r.modifications&&!r.suppressions?(await this.#i({modifications:!1,suppressions:!1}),this.#a(`protections désactivées — secret supprimé`),this.app.afficherToast(`Plus aucune action n'est protégée — les données du PIN ont été supprimées`)):(await this.#i(r),this.app.afficherToast(`Protection désactivée ✓ — l'autre reste active`)),null}async choisirVerrouillage(e){let t=this.app.preferences.protections;t&&await this.#i({...t,verrouillage:e})}async changerPin(e,t,n){let r=this.app.preferences.protections;return r?.verification?await cf(e,r.verification)?nf(t)||(t===n?(await this.#i({...r,verification:await sf(t)}),this.#e=null,this.#a(`PIN modifié`),this.app.afficherToast(`PIN changé ✓`),null):`Les deux saisies ne correspondent pas — l'ancien PIN reste valable`):`PIN actuel incorrect`:`Aucun PIN à changer`}oublierSession(){this.#e=null,this.#t=0,this.#n=0}get sessionDeverrouillee(){return df(this.#e,this.app.preferences.protections?.verrouillage??`5min`,Date.now())}garde(e,t,n){return uf(e,this.reglagesProtections,this.sessionDeverrouillee)===`libre`?(this.#e!==null&&this.sessionDeverrouillee&&(this.#e=Date.now()),!0):(this.app.demandePin={raison:t,action:n},this.app.requestUpdate(),!1)}autoriser(e,t,n){this.garde(e,t,n)&&n()}verrouiller(e=!1){this.#e!==null&&this.#a(e?`verrouillé à l'arrière-plan`:`verrouillage manuel`),this.#e=null,e||this.app.afficherToast(`Verrouillé — le PIN sera demandé à la prochaine action protégée`),this.app.requestUpdate()}annulerDemandePin(){this.app.demandePin=null,this.app.requestUpdate()}async validerDemandePin(e){let t=this.app.demandePin,n=this.app.preferences.protections?.verification;if(!t||!n)return;let r=Math.ceil((this.#n-Date.now())/1e3);if(r>0){this.app.demandePin={...t,erreur:`Attends ${r} s avant le prochain essai`},this.app.requestUpdate();return}if(!await cf(e,n)){this.#t++,this.app.echecsCumules++;let e=lf(this.#t);this.#n=Date.now()+e*1e3,this.app.demandePin={...t,erreur:e?`PIN incorrect — prochain essai dans ${e} s`:`PIN incorrect`},this.app.requestUpdate();return}this.#t=0,this.#n=0,this.#e=Date.now(),this.#a(`déverrouillage réussi`),this.app.demandePin=null,this.app.requestUpdate(),await t.action()}feuillePin(){let e=this.app.demandePin;return P`
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
    `}indicateurSession(){let e=this.reglagesProtections;return!(e.modifications||e.suppressions)||!this.sessionDeverrouillee?F:P`<button class="session-curateur" title="Modifications temporairement déverrouillées"
      @click=${()=>this.verrouiller()}>🔓 déverrouillé · <b>Verrouiller</b></button>`}#a(e){this.app.journalSecurite=[...this.app.journalSecurite.slice(-9),`${new Date().toTimeString().slice(0,5)} · ${e}`]}},pf=e=>P`<div class="carte-atelier">${e}</div>`,mf=P`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3v12"/><path d="m7.5 10.5 4.5 4.5 4.5-4.5"/><path d="M4 18v1.5A1.5 1.5 0 0 0 5.5 21h13a1.5 1.5 0 0 0 1.5-1.5V18"/></svg>`;P`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m5 12.5 4.5 4.5L19 7"/></svg>`;var hf=P`
  <section class="pack-avert">
    <img class="pack-avert-ecusson" src="./img/depart-filet.webp" alt="" aria-hidden="true" width="192" height="192" decoding="async">
    <div>
      <h3>Des bases pour commencer</h3>
      <p>Ces starter packs sont des bases non exhaustives et ne remplacent pas
      <b>l'enseignement d'un professeur qualifié</b>.</p>
      <p class="pack-avert-lieu">Pratique dans un <b>cadre adapté</b>, à ton niveau et avec
      un partenaire consentant. Toute pratique physique comporte un risque de blessure.</p>
    </div>
  </section>`;function gf(e,t){let n=e.packId?t.find(t=>t.pack===e.packId):void 0;return n?e.versionEditoriale!==void 0&&e.versionEditoriale>n.versionEditoriale?`retard`:`ajour`:`absent`}function _f(e,t,n){let r=mi(e.icon);return P`
    <article class="pack-officiel ${t===`retard`?`pack-maj`:``}">
      <div class="pack-officiel-entete">
        <span class="pack-rond">${r?P`<img src=${r} alt="" aria-hidden="true" decoding="async">`:F}</span>
        <span class="pack-officiel-titres">
          <span class="pack-officiel-nom">${e.title}</span>
          <span class="pack-officiel-version">v${e.version}${e.updatedAt?` · ${e.updatedAt}`:``}${t===`ajour`?P`<span class="pack-pose">Installé</span>`:F}${t===`retard`?P` · <b>mise à jour disponible</b>`:F}</span>
        </span>
      </div>
      ${e.itemCount?P`<div class="pack-officiel-meta">${e.itemCount}</div>`:F}
      ${e.summary?P`<p class="pack-officiel-resume">${e.summary}</p>`:F}
      ${t===`ajour`?F:P`<button class="pack-officiel-installer" @click=${n}>
            ${mf} ${t===`retard`?`Mettre à jour`:`Télécharger et importer`}
          </button>`}
    </article>`}function vf(e){let t=ui(e);return t.length===0?F:P`
    <h3 class="pack-section-titre">Envie de contribuer ?</h3>
    <p class="details" style="padding:0 2px 4px">Tu pratiques ou enseignes une discipline ?
    Tu peux créer et partager ton propre pack Movenso.</p>
    <p class="details" style="padding:0 2px 8px">Voici quelques idées de contributions :</p>
    <div class="pack-venir">
      ${t.map(e=>{let t=mi(e.icon);return P`<div class="pack-venir-c">
          <span class="pack-rond petit">${t?P`<img src=${t} alt="" aria-hidden="true" decoding="async">`:F}</span>
          <span class="pack-venir-n">${e.nom}</span>
        </div>`})}
    </div>`}function yf(e,t,n=[]){return e===null||e===`chargement`?pf(P`<p class="fil-vide" style="padding:6px 0">Chargement du catalogue…</p>`):e===`indisponible`?pf(P`
      <p class="fil-vide" style="padding:6px 0 10px">
        Catalogue injoignable : il vit sur le site public de Movenso et demande
        une connexion. Tu peux aussi importer un fichier .movpack à la main
        (Plus › Importer un pack).
      </p>
      <button class="action-douce" @click=${t.recharger}>Réessayer</button>
    `):e.length===0?pf(P`<p class="fil-vide" style="padding:6px 0">Aucun pack publié pour l'instant.</p>`):pf(P`
    ${hf}
    <p class="details" style="padding:0 2px 8px">
      Avant installation, Movenso te présente un rapport d'import. Rien ne s'écrit
      sans ton accord et chaque pack peut être retiré.</p>
    ${e.map(e=>_f(e,gf(e,n),()=>t.installer(e)))}
    ${vf(e)}
  `)}var bf=new Set;function xf(e,t,n){let r=bf.has(t);return P`<div class="encart-entete">
    <span class="titre-atelier">${e}</span>
    <button class="bouton-plus ${r?`actif`:``}" aria-label=${r?`Fermer la création dans ${e}`:`Ajouter dans ${e}`} aria-expanded=${r}
      @click=${()=>{r?bf.delete(t):bf.add(t),n.requestUpdate()}}>${r?`−`:`＋`}</button>
  </div>`}function Sf(e,t){return P`<div class="carte-atelier">
    <div class="encart-entete"><span class="titre-atelier">${e}</span></div>
    ${t}
  </div>`}function Cf(e){return e>=1e6?`${(e/1e6).toFixed(1)} Mo`:`${Math.max(1,Math.round(e/1e3))} Ko`}var wf={requete:``,disciplineId:null};function Tf(e){return e.bibliotheque.disciplines.length===0?P`<p class="fil-vide" style="padding-top:10px">Rien à publier pour l'instant — crée ou importe d'abord du contenu.</p>`:P`
    <p class="fil-vide" style="padding:8px 2px 0">Un pack, c'est du contenu <b>à partager</b> — sans ton carnet ni tes favoris. Pour une archive complète <b>pour toi</b>, va dans « Sauvegardes ».</p>
    ${If(e)}
  `}function Ef(e){return Nf(e)}function Df(e){return P`
    ${Sf(`Sauvegarder`,P`
      <p class="fil-vide" style="padding:0 2px 6px">Une sauvegarde, c'est <b>tout, pour toi</b> (avec ton carnet et tes favoris) — pour restaurer ton installation. Pour partager à d'autres, utilise « Créer / exporter un pack ».</p>
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
        passe par « Créer / exporter un pack », qui <b>exclut ton carnet</b>.
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
    ${Sf(`Revenir à un état précédent`,Lf(e))}
    ${Sf(`Restaurer une sauvegarde complète`,P`
      <div class="actions-bibliotheque" style="padding-top:0">
        <button class="action-douce" @click=${()=>e.choisirPackAImporter()}>
          ⤒ Restaurer depuis un fichier <span>importe une sauvegarde complète — sur une installation vierge</span>
        </button>
      </div>
    `)}
  `}function Of(e){return P`${Hf(e)}`}function kf(e){let t=e.preferences.theme??`auto`,n=e.preferences.tonalite??`vermillon`;return P`
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
        ${Rf.map(t=>P`<button class="chip-filtre ${n===t.id?`actif`:``}"
            @click=${()=>e.changerApparence({tonalite:t.id})}>
            <span class="puce-niveau" style="background:${t.couleur}"></span>${t.nom}</button>`)}
      </div>
    </div>

    ${Mf(e)}

    <div class="carte-atelier">
      <div class="encart-entete"><span class="titre-atelier">Au démarrage</span></div>
      ${Kf(e)}
    </div>

    <div class="carte-atelier">
      <div class="encart-entete"><span class="titre-atelier">Ton pseudo</span></div>
      <div class="aide" style="font-size:12px; color:var(--sourdine)">Signe les techniques que tu crées ou modifies (« Modifié par… »).</div>
      <input class="champ-mini" placeholder="Ton nom ou ton pseudo"
             .value=${(e.preferences.pseudo??``).trim()} aria-label="Ton pseudo"
             @change=${t=>e.changerPseudo(t.target.value)}>
    </div>
  `}function Af(e){return P`
    <div class="carte-atelier">
      <div class="encart-entete"><span class="titre-atelier">Outils</span></div>
      ${jf(e,`Mode avancé`,`Affiche les outils de curation dans « Plus » : doublons, médias, relations, diagnostic et maintenance.`,`modeAvance`)}
    </div>

    <div class="carte-atelier">
      <div class="encart-entete"><span class="titre-atelier">Réseau</span></div>
      <div class="aide" style="font-size:12px; color:var(--sourdine); padding:0 0 6px">
        Movenso fonctionne hors ligne. Une vidéo ne se charge qu'au moment où tu
        la lances — ça, ça ne change pas.
      </div>
      ${jf(e,`Vignettes distantes`,`Illustre les fiches sans image locale avec la miniature fournie par YouTube. Désactivé, aucune requête n'est faite sans ton geste.`,`vignettesDistantes`)}
    </div>

    <div class="carte-atelier">
      <div class="encart-entete"><span class="titre-atelier">Fonctions en bêta</span></div>
      <div class="aide" style="font-size:12px; color:var(--sourdine); padding:0 0 6px">
        Des fonctions complètes mais encore en ajustement. Les masquer ne supprime
        jamais rien : les données restent intactes et reviennent avec l'onglet.
      </div>
      ${jf(e,`Relations`,`Les liens entre techniques : sur les fiches, en graphe, et leur édition.`,`vueRelationBeta`)}
      ${jf(e,`Compositions`,`L'onglet Compositions : enchaînements, séances minutées, lecture pas à pas, rôles.`,`compositionsBeta`)}
    </div>
  `}function jf(e,t,n,r){let i=e.preferences[r]??!1;return P`
    <button class="interrupteur ${i?`actif`:``}" role="switch" aria-checked=${i}
      @click=${()=>e.basculerReglage(r)}>
      <span class="interrupteur-texte">
        <span class="interrupteur-titre">${t}</span>
        <span class="interrupteur-aide">${n}</span>
      </span>
      <span class="interrupteur-piste" aria-hidden="true"><span class="interrupteur-bouton"></span></span>
    </button>`}function Mf(e){let t=e.preferences.densiteBibliotheque??0,n=t===0?`Auto — s'adapte à l'écran (2 sur téléphone, plus sur tablette)`:`${t} colonne${t>1?`s`:``}`;return P`
    <div class="carte-atelier">
      <div class="encart-entete"><span class="titre-atelier">Densité de la bibliothèque</span></div>
      <div class="aide" style="font-size:12px; color:var(--sourdine)">Nombre de colonnes de la grille des techniques.</div>
      <div class="densite-reglage">
        <input type="range" min="0" max="6" step="1" .value=${String(t)}
          aria-label="Nombre de colonnes de la bibliothèque"
          @input=${t=>{let n=Number(t.target.value);e.changerDensite(n===0?null:n)}}>
        <span class="densite-valeur">${n}</span>
      </div>
    </div>`}function Nf(e){let t=[200,500,1e3,2e3,5e3,1e4,2e4,0],n=e.preferences.limiteEspaceMo??5e3,r=t.indexOf(n),i=r>=0?r:4,a=e=>e===0?`Illimité`:e>=1e3?`${e/1e3} Go`:`${e} Mo`,o=e.infoEspace;return P`
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
        ${o?P`<br>Utilisé : ${Cf(o.usage)} · max appareil ~${Cf(o.quota)}`:F}
      </div>
      ${n===0?P`<div class="aide" style="font-size:11.5px; color:var(--attention, #b26b00)">⚠ Sans limite, Movenso peut remplir le stockage de l'appareil.</div>`:F}
      ${Pf(e)}
    </div>`}function Pf(e){let t=e.persistanceStockage,n=t===`accordee`?P`✓ Persistance accordée — le navigateur ne purgera pas ces données.`:t===`native`?P`Stockage applicatif natif — géré par le système, pas de purge navigateur.`:t===`refusee`?P`⚠ Persistance non garantie : le navigateur pourrait purger ces données s'il manque de place.
              <button class="lien-texte" @click=${()=>void e.redemanderPersistance()}>Demander la persistance</button>`:P`Persistance : ce navigateur ne sait pas répondre — pense aux sauvegardes régulières.`;return P`<div class="aide persistance-stockage" style="font-size:11.5px; color:${t===`refusee`?`var(--attention, #b26b00)`:`var(--sourdine)`}">${n}</div>`}function Ff(e){return P`
    ${Sf(`Diagnostic`,P`
      <div class="aide" style="font-size:12px; color:var(--sourdine)">Un fichier texte (compteurs, santé des médias, stockage, versions, dernier échec avec son code, opération en cours) pour comprendre un souci d'import, d'export ou de place — sans aucun secret.</div>
      <button class="chip-filtre diagnostic-export" @click=${()=>void e.exporterDiagnostic()}>Exporter le diagnostic</button>
    `)}
    ${Bf(e)}
  `}var Q={disciplineId:null,tout:!0,techniques:new Set,avecVideos:!0,auteur:``,note:``,compositionsPerso:!1};function If(e){let t=e.bibliotheque,n=e.publicationPrete;if(n)return P`
      <div class="carte-atelier">
        <div class="titre-atelier">Pack prêt</div>
        <p class="details" style="line-height:1.5"><b style="color:var(--encre)">${n.nomPack}</b> · ${Cf(n.taille)}<br>${n.resume}</p>
        <div class="edition-actions">
          <button class="bouton principal" @click=${()=>e.enregistrerPublicationLocale()}>⇓ Enregistrer localement</button>
          <button class="bouton" @click=${()=>void e.partagerPublication()}>↗ Partager</button>
        </div>
        <button class="action-douce" style="margin-top:6px" @click=${()=>e.fermerPublication()}>← Préparer un autre pack</button>
      </div>
    `;let r=Q.disciplineId&&t.disciplines.some(e=>e.id===Q.disciplineId)?Q.disciplineId:t.disciplines[0].id;Q.disciplineId=r;let i=t.disciplines.find(e=>e.id===r),a=t.techniques.filter(e=>e.disciplineId===r),o=Q.tout?a.length:a.filter(e=>Q.techniques.has(e.id)).length,s=t=>{Q.disciplineId=t,Q.techniques=new Set,Q.tout=!0,e.requestUpdate()},c=new Set(Q.tout?a.map(e=>e.id):a.filter(e=>Q.techniques.has(e.id)).map(e=>e.id)),l=new Set;for(let e of t.contributions)if(e.techniqueId&&c.has(e.techniqueId)&&e.provenance!==`personnel`)for(let t of e.medias)t.type===`local`&&l.add(t.id);let u=[...l].reduce((t,n)=>t+(e.taillesVideos.get(n)??0),0),d=t.compositions.filter(e=>e.provenance===`personnel`&&e.blocs.some(e=>e.type===`technique`&&e.techniqueId)&&e.blocs.every(e=>e.type!==`technique`||!e.techniqueId||c.has(e.techniqueId)));return P`
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
        <button class="chip-filtre ${Q.tout?`actif`:``}" @click=${()=>{Q.tout=!0,e.requestUpdate()}}>Tout (${a.length})</button>
        <button class="chip-filtre ${Q.tout?``:`actif`}" @click=${()=>{Q.tout=!1,e.requestUpdate()}}>Choix de techniques</button>
      </div>
      ${Q.tout?F:P`<div class="publier-techniques">
            ${a.map(t=>P`<label class="niveau-coche">
                <input type="checkbox" ?checked=${Q.techniques.has(t.id)}
                  @change=${()=>{Q.techniques.has(t.id)?Q.techniques.delete(t.id):Q.techniques.add(t.id),e.requestUpdate()}}>
                <span>${t.nom}</span>
              </label>`)}
            ${a.length===0?P`<p class="fil-vide">Aucune technique dans cette discipline.</p>`:F}
          </div>`}

      <div class="etiquette-champ">Vidéos</div>
      <div class="chips-filtres">
        <button class="chip-filtre ${Q.avecVideos?`actif`:``}" @click=${()=>{Q.avecVideos=!0,e.requestUpdate()}}>Avec les vidéos locales</button>
        <button class="chip-filtre ${Q.avecVideos?``:`actif`}" @click=${()=>{Q.avecVideos=!1,e.requestUpdate()}}>Sans les vidéos</button>
      </div>
      <p class="fil-vide" style="padding:4px 0 0">Les liens (YouTube…) restent inclus dans les deux cas.</p>

      ${d.length?P`<div class="etiquette-champ">Mes séances</div>
            <label class="niveau-coche">
              <input type="checkbox" ?checked=${Q.compositionsPerso}
                @change=${()=>{Q.compositionsPerso=!Q.compositionsPerso,e.requestUpdate()}}>
              <span>Inclure ${d.length} séance${d.length>1?`s`:``} personnelle${d.length>1?`s`:``} (jouable${d.length>1?`s`:``} avec ce pack)</span>
            </label>
            <p class="fil-vide" style="padding:2px 0 0">Par défaut, tes séances perso restent privées.</p>`:F}

      <div class="etiquette-champ">Auteur du pack</div>
      <input class="champ-mini" placeholder="Auteur ou organisation (recommandé)" .value=${Q.auteur}
             aria-label="Auteur du pack" @input=${e=>Q.auteur=e.target.value}>

      <div class="etiquette-champ">Note de diffusion</div>
      <input class="champ-mini" placeholder="Note de diffusion (facultatif)" .value=${Q.note}
             aria-label="Note de diffusion" @input=${e=>Q.note=e.target.value}>

      <div class="details" style="padding-top:4px">${o} technique${o>1?`s`:``}${Q.avecVideos?u?` · ~${Cf(u)} de vidéos`:` · aucune vidéo locale`:` · sans les vidéos`}</div>
      <button class="bouton principal" style="margin-top:8px; align-self:flex-start" ?disabled=${o===0}
        @click=${()=>void e.preparerPublication(r,{...Q.tout?{}:{techniques:Q.techniques},avecVideos:Q.avecVideos,auteur:Q.auteur,note:Q.note,nom:i.nom,compositionsPersonnelles:Q.compositionsPerso})}>Valider</button>
    </div>
  `}function Lf(e){return e.sauvegardes.length===0?P`<p class="fil-vide" style="padding-top:2px">
      Aucun point de restauration pour l'instant — ils se créent seuls avant chaque
      action sensible (import, suppression, restauration).
    </p>`:P`
    <div class="chips-filtres" style="flex-wrap:wrap">
      ${e.sauvegardes.map(t=>{let[n,r]=t.replace(`.json`,``).split(`__`),i=`${(n??``).replace(`T`,` `).slice(0,16)}${r?` · ${r.replaceAll(`-`,` `)}`:``}`;return P`<button class="chip-filtre"
          @click=${()=>e.autoriser(`destruction_ou_sensible`,`Saisis le PIN pour revenir à un état précédent.`,()=>{e.demanderConfirmation({titre:`Revenir à l'état « ${i} » ?`,corps:`— La bibliothèque actuelle (techniques, contributions, compositions, favoris) sera REMPLACÉE par cet état ; tout ce qui a été créé depuis sera retiré.
— Les fichiers vidéo de l'appareil ne bougent PAS (les points de restauration n'incluent pas les vidéos).
— L'état actuel est lui-même sauvegardé d'abord : ce retour est annulable.`,bouton:`Revenir à cet état`,action:()=>{e.restaurerSauvegarde(t)}})})}>↺ ${i}</button>`})}
    </div>
    <p class="fil-vide" style="padding-top:6px">
      Points de restauration automatiques (10 conservés), données seules — pour la vraie
      sauvegarde avec vidéos, utilise « Sauvegarde complète ».
    </p>
  `}var Rf=[{id:`vermillon`,nom:`Vermillon`,couleur:`#B23A26`},{id:`indigo`,nom:`Indigo`,couleur:`#35506F`},{id:`foret`,nom:`Forêt`,couleur:`#2F6B4F`},{id:`ocre`,nom:`Ocre`,couleur:`#96682B`},{id:`prune`,nom:`Prune`,couleur:`#7A3E68`},{id:`acier`,nom:`Acier`,couleur:`#47586B`}],zf=!1;function Bf(e){let t=()=>{zf=!1,e.requestUpdate()};return P`
    ${Sf(`Réinitialisation`,P`
    ${zf?P`<div class="suppression-discipline">
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
              @click=${()=>{e.demanderConfirmation({titre:`Tout supprimer définitivement de cet appareil ?`,corps:`Cette action ne se défait pas.`,bouton:`Tout supprimer définitivement`,action:()=>{t(),e.reinitialiserTout()}})}}>Tout supprimer définitivement</button>
          </div>
        </div>`:P`<div class="ligne-atelier">
          <button class="action-danger reinitialiser"
            @click=${()=>e.autoriser(`destruction_ou_sensible`,`Saisis le PIN pour réinitialiser Movenso.`,()=>{zf=!0,e.requestUpdate()})}>Réinitialiser Movenso…</button>
        </div>`}
    `)}
  `}var $={formulaire:null,desactivation:null,changementPin:!1,erreur:``,reveler:!1},Vf={modifications:`Un PIN sera demandé pour créer, modifier, capturer, importer ou composer — la consultation reste toujours libre.`,suppressions:`Un PIN sera demandé pour supprimer, restaurer, revenir en arrière, publier ou sauvegarder — la consultation reste toujours libre.`};function Hf(e){let t=e.reglagesProtections,n=!!e.preferences.protections?.verification,r=e.preferences.protections?.verrouillage??`5min`,i=()=>{$.formulaire=null,$.desactivation=null,$.changementPin=!1,$.erreur=``,$.reveler=!1,e.requestUpdate()},a=(r,a)=>P`
    <div class="ligne-atelier">
      <span class="details" style="flex:1">${t[r]?`🔒`:`—`} ${a} : <b>${t[r]?`protégée par le PIN`:`libre`}</b></span>
      ${t[r]?P`<button class="chip-filtre" @click=${()=>{$.desactivation=r,$.formulaire=null,$.erreur=``,e.requestUpdate()}}>Désactiver…</button>`:P`<button class="chip-filtre" @click=${()=>{n?e.activerProtection(r):($.formulaire=r,$.desactivation=null,$.erreur=``,e.requestUpdate())}}>Protéger…</button>`}
    </div>
    ${$.desactivation===r?Wf(e,r,i):F}
    ${$.formulaire===r?Uf(e,r,i):F}
  `;return P`
    ${Sf(`Protections`,P`
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
            <button class="chip-filtre" @click=${()=>{$.changementPin=!$.changementPin,$.erreur=``,e.requestUpdate()}}>Changer le PIN…</button>
          </div>
          ${$.changementPin?Gf(e,i):F}
          ${e.journalSecurite.length||e.echecsCumules?P`<p class="details journal-securite" style="padding-top:2px">
                Journal (session) : ${e.journalSecurite.slice(-3).join(` · `)}${e.echecsCumules?` · échecs cumulés : ${e.echecsCumules}`:``}
              </p>`:F}
          <p class="fil-vide" style="padding-top:4px">
            PIN oublié ? Aucune récupération à distance : restaure une sauvegarde,
            ou réinitialise ci-dessous. Le PIN protège les actions dans l'app,
            pas le téléphone.
          </p>`:F}
    `)}
  `}function Uf(e,t,n){let r=$.reveler?`text`:`password`;return P`<div class="suppression-discipline formulaire-pin" style="border-color:var(--trait); background:var(--papier)">
    <p class="details" style="line-height:1.5">${Vf[t]}</p>
    <div class="ligne-atelier" style="flex-wrap:wrap">
      <input class="champ-mini" type=${r} inputmode="numeric" autocomplete="off"
             placeholder="PIN (6 à 12 chiffres)" aria-label="Nouveau PIN">
      <input class="champ-mini" type=${r} inputmode="numeric" autocomplete="off"
             placeholder="Confirme le PIN" aria-label="Confirmation du PIN">
      <button class="chip-filtre" @click=${()=>{$.reveler=!$.reveler,e.requestUpdate()}}>
        ${$.reveler?`Masquer`:`Révéler`}</button>
    </div>
    ${$.erreur?P`<p class="details erreur-pin" role="alert" style="color:var(--accent)">${$.erreur}</p>`:F}
    <div class="chips-filtres" style="padding:4px 0 0">
      <button class="chip-filtre" @click=${n}>Annuler</button>
      <button class="bouton principal" style="padding:7px 12px; font-size:12.5px"
        @click=${async r=>{let i=r.target.closest(`.formulaire-pin`).querySelectorAll(`input`),a={pin:i[0].value,confirmation:i[1].value},o=await e.activerProtection(t,a);o?($.erreur=o,e.requestUpdate()):n()}}>Activer</button>
    </div>
  </div>`}function Wf(e,t,n){return P`<div class="suppression-discipline formulaire-pin">
    <div class="ligne-atelier" style="flex-wrap:wrap">
      <input class="champ-mini" type="password" inputmode="numeric" autocomplete="off"
             placeholder="PIN actuel" aria-label="PIN actuel">
      <button class="chip-filtre" @click=${n}>Annuler</button>
      <button class="action-danger" style="padding:6px 10px; font-size:12px"
        @click=${async r=>{let i=r.target.closest(`.formulaire-pin`).querySelector(`input`),a=await e.desactiverProtection(t,i.value);a?($.erreur=a,i.value=``,e.requestUpdate()):n()}}>Désactiver cette protection</button>
    </div>
    ${$.erreur?P`<p class="details erreur-pin" role="alert" style="color:var(--accent)">${$.erreur}</p>`:F}
  </div>`}function Gf(e,t){return P`<div class="suppression-discipline formulaire-pin" style="border-color:var(--trait); background:var(--papier)">
    <div class="ligne-atelier" style="flex-wrap:wrap">
      <input class="champ-mini" type="password" inputmode="numeric" autocomplete="off" placeholder="PIN actuel" aria-label="PIN actuel">
      <input class="champ-mini" type="password" inputmode="numeric" autocomplete="off" placeholder="Nouveau PIN" aria-label="Nouveau PIN">
      <input class="champ-mini" type="password" inputmode="numeric" autocomplete="off" placeholder="Confirme le nouveau" aria-label="Confirmation du nouveau PIN">
    </div>
    ${$.erreur?P`<p class="details erreur-pin" role="alert" style="color:var(--accent)">${$.erreur}</p>`:F}
    <div class="chips-filtres" style="padding:4px 0 0">
      <button class="chip-filtre" @click=${t}>Annuler</button>
      <button class="bouton principal" style="padding:7px 12px; font-size:12.5px"
        @click=${async n=>{let r=n.target.closest(`.formulaire-pin`).querySelectorAll(`input`),i=await e.changerPin(r[0].value,r[1].value,r[2].value);i?($.erreur=i,e.requestUpdate()):t()}}>Changer le PIN</button>
    </div>
  </div>`}function Kf(e){let t=e.bibliotheque,n=e.preferences.demarrage,r=n.mode===`bibliotheque`||n.mode===`derniere`||n.mode===`discipline`,i=e.preferences.vueRelationBeta??!1,a=e.preferences.compositionsBeta??!1;return P`
    <div class="aide" style="font-size:12px; color:var(--sourdine)">L'écran ouvert au lancement de l'app.</div>
    <div class="chips-filtres" style="flex-wrap:wrap; padding:2px 0 0">
      <button class="chip-filtre ${r?`actif`:``}"
        @click=${()=>e.changerDemarrage(`bibliotheque`)}>Bibliothèque</button>
      ${a?P`<button class="chip-filtre ${n.mode===`compositions`?`actif`:``}"
            @click=${()=>e.changerDemarrage(`compositions`)}>Compositions</button>`:F}
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
  `}var qf=[{cle:`demarrer`,titre:()=>`Bien démarrer`,resume:`Pack, fichier, sauvegarde, ou de zéro.`,illustration:`demarrer`,idee:`Rien ne s’écrit sans ton accord.`,sousIdee:`Avant un import, Movenso te montre ce qui sera ajouté ou mis à jour.`,reponses:()=>[{titre:`Quatre façons de commencer`,corps:P`Installer un <b>starter pack</b> pour partir d’une base déjà structurée, importer un
          <b>.movpack</b> qu’on t’a transmis, <b>restaurer une sauvegarde</b>, ou <b>partir de zéro</b>.`},{titre:`Un pack s’annonce avant de s’installer`,corps:P`Tu vois ce qu’il ajoute et ce qu’il met à jour, puis tu confirmes. Il se retire entièrement.`},{titre:`Partir de zéro`,corps:P`Crée ta discipline, ses catégories et ses niveaux, puis ajoute tes premières techniques
          depuis la Bibliothèque.`}]},{cle:`retrouver`,titre:()=>`Retrouver une technique`,resume:`Rechercher, filtrer, retrouver ses favoris.`,illustration:`retrouver`,idee:`Cherche comme tu prononces.`,sousIdee:`Accents, tirets et majuscules sont ignorés : « o soto » trouve « Ō-soto-gari ».`,reponses:()=>[{titre:`Ce que la recherche regarde`,corps:P`Le <b>nom</b> de la technique, son <b>nom traditionnel</b>, et les <b>notes que tu as
          écrites toi</b>. Elle ne quitte jamais l’appareil.`},{titre:`Le cœur n’affiche que tes favoris`,corps:P`Il est dans la barre de recherche. Le ♥ d’une fiche l’y range.`},{titre:`Les filtres se retirent un par un`,corps:P`Discipline, catégorie et niveau. Les filtres posés reviennent en puces que tu peux retirer.`}]},{cle:`fiche`,titre:()=>`Lire une fiche`,resume:`Image, points clés, relations et alertes.`,illustration:`fiche`,idee:`Une fiche dit ce que fait la technique, et ce qui l’entoure.`,sousIdee:`Chaque section reste visible même vide, avec son invitation.`,reponses:e=>[{titre:`Ce qu’elle rassemble`,corps:P`La <b>description</b>, les <b>points clés</b>, et les <b>relations</b> : ce qui prépare,
          suit, contre ou ressemble, <b>avec la raison du lien</b>.${e.preferences.compositionsBeta??!1?P` Elle indique aussi les <b>compositions</b> qui l’utilisent.`:F}`},{titre:`Ton commentaire est à toi`,corps:P`C’est une note personnelle. Elle ne part <b>ni dans un pack</b>, ni ailleurs.`},{titre:`Modifier`,corps:P`Le bouton flottant en bas à droite passe la fiche en édition. La barre du haut garde le
          retour, le ♥ et le partage.`}],alerte:P`Certaines techniques portent une <b>alerte</b>. Lis-la avant de pratiquer.`},{cle:`medias`,titre:()=>`Ajouter des médias`,resume:`Illustration, vidéo locale ou lien vidéo.`,illustration:`medias`,idee:`Ce que tu filmes reste chez toi.`,sousIdee:`Un lien reste un lien : la vidéo se lit chez son hébergeur, rien n’est copié.`,reponses:()=>[{titre:`Trois sources`,corps:P`Une <b>illustration</b>, une <b>vidéo filmée ou choisie</b> sur l’appareil, ou un
          <b>lien</b> vers une vidéo en ligne.`},{titre:`Changer ce qui représente la technique`,corps:P`Touche l’image de la fiche : tu choisis une image, une vidéo, ou tu la retires.`},{titre:`Filmer fonctionne hors ligne`,corps:P`La vidéo est écrite sur l’appareil et n’est <b>jamais envoyée</b> nulle part.`}]},{cle:`relations`,titre:e=>{let t=e.preferences.compositionsBeta??!1,n=e.preferences.vueRelationBeta??!1;return t&&n?`Relations & compositions`:t?`Compositions`:`Relations`},resume:`Relier des techniques, construire un parcours.`,illustration:`relations`,visible:e=>(e.preferences.compositionsBeta??!1)||(e.preferences.vueRelationBeta??!1),idee:`Une technique n’est jamais seule.`,sousIdee:`Chaque lien porte sa raison, jamais une flèche nue.`,reponses:e=>[...e.preferences.vueRelationBeta??!1?[{titre:`Naviguer de proche en proche`,corps:P`Depuis une technique, tu vois ce qui la prépare, l’enchaîne, la contre ou lui
              ressemble. Toucher une technique liée la place au centre.
              <button class="chip-filtre aide-decouvrir" @click=${()=>e.ouvrirBienvenueRelations()}>
                Découvrir Relations
              </button>`}]:[],...e.preferences.compositionsBeta??!1?[{titre:`Assembler une composition`,corps:P`Une composition met des techniques dans un ordre : séance, kata, progression,
              démonstration.`},{titre:`La lire pas à pas`,corps:P`En lecture, Movenso déroule les étapes une à une, avec le chronomètre quand la
              composition en porte un.`}]:[]]},{cle:`partager`,titre:()=>`Partager ou sauvegarder`,resume:`Un pack transmet, une sauvegarde restitue.`,illustration:`partager`,idee:`Partager n’est pas sauvegarder.`,sousIdee:`Un colis part chez quelqu’un. Un coffre te rend ton contenu.`,reponses:()=>[{titre:`Le pack transmet`,corps:P`Un <b>.movpack</b> emporte une discipline vers quelqu’un d’autre. Tes notes personnelles
          et tes captures vidéo n’y montent pas.`},{titre:`La sauvegarde restitue`,corps:P`<b>Complète</b> : bibliothèque, notes et vidéos locales, de quoi repartir sur un autre
          appareil. <b>Légère</b> : tout sauf les vidéos.`},{titre:`La corbeille ne remplace pas`,corps:P`La corbeille et les points de restauration rattrapent une erreur récente, mais vivent sur
          <b>le même appareil</b> que tes données.`}]},{cle:`donnees`,titre:()=>`Protéger ses données`,resume:`Local, stockage, PIN et restauration.`,illustration:`donnees`,idee:`Tout vit ici, et nulle part ailleurs.`,sousIdee:`Aucun serveur, aucun compte, aucune synchronisation.`,reponses:()=>[{titre:`Où elles vivent`,corps:P`Dans <b>l’espace privé de Movenso</b>, sur cet appareil. L’écran Stockage dit ce qu’elles
          occupent et si le navigateur en garantit la persistance.`},{titre:`Ce qui peut les effacer`,corps:P`Désinstaller l’application, ou effacer les données du site dans le navigateur,
          <b>efface tout</b>. C’est exactement ce contre quoi une sauvegarde protège.`},{titre:`Le PIN est facultatif`,corps:P`Deux protections indépendantes, et la <b>consultation n’est jamais bloquée</b>.
          <b>Modifications</b> — ${Vf.modifications} <b>Suppressions</b> —
          ${Vf.suppressions} Le PIN reste sur cet appareil : il ne part ni dans un pack, ni dans une
          sauvegarde.`}],alerte:P`<b>Un fichier de sauvegarde n’est pas chiffré.</b> Garde-le sur un appareil ou un espace de
      confiance.`},{cle:`securite`,titre:()=>`Sécurité de la pratique`,resume:`Pratiquer avec prudence et repères.`,illustration:`securite`,idee:`Des bases pour commencer, pas un professeur.`,sousIdee:`Les starter packs sont des bases de travail, non exhaustives.`,reponses:()=>[{titre:`Ils ne remplacent pas un enseignement`,corps:P`En cas d’écart, ce que dit <b>ton enseignant</b> prime.`},{titre:`Un cadre adapté`,corps:P`Pratique dans un espace adapté, avec un partenaire consentant, à un niveau qui convient à
          chacun.`},{titre:`Les alertes se lisent avant`,corps:P`Certaines techniques en portent une. Arrête en cas de <b>douleur aiguë</b>, de vertige ou
          de malaise.`}]},{cle:`limites`,titre:()=>`Limites connues`,resume:`Ce que Movenso ne sait pas encore faire.`,illustration:`limites`,idee:`Movenso évolue encore.`,sousIdee:`Trois limites sont connues, et il vaut mieux les savoir.`,reponses:()=>[{titre:`Export volumineux`,corps:P`Au-delà d’environ <b>4 Go</b>, un export complet peut échouer. Préfère une sauvegarde
          légère, ou plusieurs packs.`},{titre:`Version web`,corps:P`Tes données restent locales, mais une connexion peut être nécessaire pour charger ou
          mettre à jour l’application et pour ouvrir une ressource externe.`},{titre:`Lecteur d’écran`,corps:P`La prise en charge continue d’être améliorée. Si un parcours coince, dis-le : les
          remontées font foi.`}]}];function Jf(e){return qf.filter(t=>!t.visible||t.visible(e))}function Yf(e){return qf.find(t=>t.cle===e)}var Xf=null;function Zf(e,t){Xf=t,e.ouvrirPlusSection(`aide-sujet`)}function Qf(){return Xf}function $f(e){let t=Xf?Yf(Xf):void 0;return t?t.titre(e):`Aide`}function ep(e){let t=e.bibliotheque,n=new Set;for(let e of t.contributions)e.techniqueId&&e.medias.length&&n.add(e.techniqueId);return{aRattacher:t.contributions.filter(e=>e.techniqueId===null),sansVideo:t.techniques.filter(e=>!n.has(e.id)),sansClasse:t.techniques.filter(e=>!e.familleId&&e.niveauxIds.length===0),mediasManquants:e.mediasManquants,videosOrphelines:e.videosOrphelines,nbDoublons:e.doublonsPotentiels().length,conflits:t.conflitsContributions??[]}}function tp(e){return e.aRattacher.length+e.sansVideo.length+e.sansClasse.length+e.mediasManquants.length+e.videosOrphelines.length+e.nbDoublons+e.conflits.length}function np(e){let t=[[e.sansVideo.length,`sans vidéo`],[e.sansClasse.length,`à classer`],[e.aRattacher.length,`à rattacher`],[e.nbDoublons,`doublon`],[e.conflits.length,`texte à arbitrer`],[e.mediasManquants.length,`média manquant`],[e.videosOrphelines.length,`vidéo orpheline`]].filter(([e])=>e>0).sort((e,t)=>t[0]-e[0]).slice(0,2);return t.length===0?`Rien à vérifier`:t.map(([e,t])=>`${e} ${t}${e>1&&!t.startsWith(`sans`)&&!t.startsWith(`à `)?`s`:``}`).join(` · `)}var rp=null,ip=null;function ap(e){let t=async t=>{let n=t.value;t.value=``;let r=await e.creerDiscipline(n);bf.delete(`discipline`),r&&(e.disciplineGestion=r),e.requestUpdate()};return P`
    <div class="creation-discipline" style="margin:6px 0 2px">
      <input placeholder="Nom de la discipline…" autofocus aria-label="Nom de la discipline"
             @keydown=${e=>{e.key===`Enter`&&t(e.target)}}>
      <button class="bouton principal"
        @click=${e=>void t(e.target.parentElement.querySelector(`input`))}>Créer</button>
    </div>
  `}var op=new Set;function sp(e,t,n){let r=bf.has(t);return P`<button class="bouton-plus ${r?`actif`:``}" aria-label=${r?`Fermer — ${n}`:n} aria-expanded=${r}
    @click=${n=>{n.preventDefault(),n.stopPropagation();let i=n.target.closest(`details`);i&&!r&&(i.open=!0),r?bf.delete(t):bf.add(t),e.requestUpdate()}}>${r?`−`:`＋`}</button>`}function cp(e,t){e.bibliotheque.techniques.filter(e=>e.disciplineId===t.id).length===0?e.autoriser(`destruction_ou_sensible`,`Saisis le PIN pour retirer « ${t.nom} ».`,()=>{e.demanderConfirmation({titre:`Supprimer la discipline vide « ${t.nom} » ?`,corps:`Un point de restauration sera conservé.`,bouton:`Supprimer la discipline`,action:()=>{e.supprimerDiscipline(t.id)}})}):(e.disciplineGestion=t.id,op.add(t.id),e.requestUpdate())}function lp(e,t){if(!op.has(t.id))return F;let n=e.bibliotheque.techniques.filter(e=>e.disciplineId===t.id);return mp(e,t,n,new Set(n.map(e=>e.id)))}function up(e,t){let n=`${t.id}:familles`,r={reordonner:(n,r)=>e.deplacerTaxonomieVers(t.id,`familles`,n,r),enregistrer:()=>void e.enregistrerReordre(),ordre:()=>t.familles.map(e=>e.id),nom:e=>t.familles.find(t=>t.id===e)?.nom??`la catégorie`},i=r=>{e.ajouterTaxonomie(t.id,`familles`,r.value),r.value=``,bf.delete(n),e.requestUpdate()};return P`
    <details class="carte-atelier sous-volet">
      <summary class="encart-entete"><span class="titre-atelier">Catégories <span class="carnet-compte">${t.familles.length}</span></span>
        ${sp(e,n,`Ajouter une catégorie`)}</summary>
      <div style="padding-top:8px">
      ${bf.has(n)?P`<div class="ligne-atelier">
            <input class="champ-mini" placeholder="Nom de la catégorie" autofocus aria-label="Nouvelle catégorie"
                   @keydown=${e=>{e.key===`Enter`&&i(e.target)}}>
            <button class="bouton" style="flex:none"
              @click=${e=>i(e.target.parentElement.querySelector(`input`))}>Ajouter</button>
          </div>`:F}
      ${t.familles.map(n=>P`
        <div class="ligne-atelier">
          ${Oa(e,n.id,r)}
          <input class="champ-mini" .value=${n.nom} aria-label="Nom de la catégorie"
                 @change=${r=>void e.majTaxonomie(t.id,`familles`,n.id,{nom:r.target.value})}>
          ${hp(e,t,`familles`,n.id,n.nom,`la catégorie`)}
        </div>
        ${gp(e,t,`familles`,n.id,n.nom)}`)}
      ${t.familles.length===0&&!bf.has(n)?P`<p class="fil-vide" style="padding:6px 2px 0">Aucune catégorie — touche ＋.</p>`:F}
      </div>
    </details>
  `}function dp(e,t){let n=`${t.id}:niveaux`,r={reordonner:(n,r)=>e.deplacerTaxonomieVers(t.id,`niveaux`,n,r),enregistrer:()=>void e.enregistrerReordre(),ordre:()=>t.niveaux.map(e=>e.id),nom:e=>t.niveaux.find(t=>t.id===e)?.nom??`le niveau`},i=r=>{e.ajouterTaxonomie(t.id,`niveaux`,r.value),r.value=``,bf.delete(n),e.requestUpdate()};return P`
    <details class="carte-atelier sous-volet">
      <summary class="encart-entete"><span class="titre-atelier">Niveaux <span class="carnet-compte">${t.niveaux.length}</span></span>
        ${sp(e,n,`Ajouter un niveau`)}</summary>
      <div style="padding-top:8px">
      ${bf.has(n)?P`<div class="ligne-atelier">
            <input class="champ-mini" placeholder="Nom du niveau" autofocus aria-label="Nouveau niveau"
                   @keydown=${e=>{e.key===`Enter`&&i(e.target)}}>
            <button class="bouton" style="flex:none"
              @click=${e=>i(e.target.parentElement.querySelector(`input`))}>Ajouter</button>
          </div>`:F}
      ${t.niveaux.length?P`<p class="fil-vide" style="padding:0 2px 4px">Un niveau porte une ou deux couleurs (ceintures bicolores) — le carré ＋ ajoute la seconde.</p>`:F}
      ${t.niveaux.map(n=>P`
        <div class="ligne-atelier">
          ${Oa(e,n.id,r)}
          <input class="champ-mini" .value=${n.nom} aria-label="Nom du niveau"
                 @change=${r=>void e.majTaxonomie(t.id,`niveaux`,n.id,{nom:r.target.value})}>
          ${pp(e,t,n)}
          ${hp(e,t,`niveaux`,n.id,n.nom,`le niveau`)}
        </div>
        ${gp(e,t,`niveaux`,n.id,n.nom)}`)}
      ${t.niveaux.length===0&&!bf.has(n)?P`<p class="fil-vide" style="padding:6px 2px 0">Aucun niveau — touche ＋.</p>`:F}
      </div>
    </details>
  `}var fp=new Set;function pp(e,t,n){let r=fp.has(n.id)||n.couleur2!==void 0;return P`<span class="couleur-niveau">
    <input type="color" class="pastille-couleur" .value=${n.couleur??`#cccccc`} title="Couleur du niveau"
           @change=${r=>void e.majTaxonomie(t.id,`niveaux`,n.id,{couleur:r.target.value})}>
    ${r?P`<input type="color" class="pastille-couleur" .value=${n.couleur2??n.couleur??`#cccccc`} title="Seconde couleur (ceinture bicolore)"
               @change=${r=>void e.majTaxonomie(t.id,`niveaux`,n.id,{couleur2:r.target.value})}>`:P`<button class="pastille-couleur pastille-ajout" aria-label="Ajouter une seconde couleur (ceinture bicolore)" title="Ajouter une seconde couleur (ceinture bicolore)"
               @click=${()=>{fp.add(n.id),e.requestUpdate()}}>＋</button>`}
  </span>`}function mp(e,t,n,r){let i=e.bibliotheque,a=i.contributions.filter(e=>e.techniqueId&&r.has(e.techniqueId)),o=a.filter(e=>e.provenance===`personnel`).length,s=a.flatMap(e=>e.medias).filter(e=>e.type===`local`).length,c=i.compositions.filter(e=>e.blocs.some(e=>e.type===`technique`&&e.techniqueId&&r.has(e.techniqueId))),l=()=>{op.delete(t.id),e.requestUpdate()};return P`<div class="suppression-discipline">
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
        @click=${()=>e.autoriser(`destruction_ou_sensible`,`Saisis le PIN pour supprimer « ${t.nom} » et son contenu.`,()=>{e.demanderConfirmation({titre:`Supprimer définitivement « ${t.nom} » et ses ${n.length} technique${n.length>1?`s`:``} ?`,corps:`Un point de restauration sera créé juste avant.`,bouton:`Supprimer la discipline et son contenu`,action:()=>{l(),e.supprimerDisciplineEtContenu(t.id)}})})}>Supprimer la discipline et son contenu</button>
    </div>
  </div>`}function hp(e,t,n,r,i,a){return P`
    <button class="bouton-icone" aria-label="Retirer ${a}"
      @click=${()=>{e.usagesTaxonomie(t.id,n,r).length?(rp=`${t.id}:${n}:${r}`,e.requestUpdate()):e.demanderConfirmation({titre:`Retirer ${a} « ${i} » ?`,corps:`Inutilisé${n===`familles`?`e`:``} — aucune fiche n'y fait référence.`,bouton:`Retirer`,action:()=>{e.supprimerTaxonomie(t.id,n,r)}})}}>✕</button>
  `}function gp(e,t,n,r,i){if(rp!==`${t.id}:${n}:${r}`)return P``;let a=e.usagesTaxonomie(t.id,n,r),o=t[n].filter(e=>e.id!==r),s=()=>{rp=null,e.requestUpdate()};return P`<div class="suppression-discipline suppression-taxonomie">
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
  </div>`}function _p(e){return P`
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
      ${e.bibliotheque.typesRelation.map(t=>vp===t.id?Sp(e,t):xp(e,t))}
      <div class="ligne-atelier">
        <input class="champ-mini" placeholder="Nouveau lien…" aria-label="Libellé du type">
        <input class="champ-mini" placeholder="Lecture inverse…" aria-label="Libellé inverse">
        <button class="bouton principal" style="flex:none"
          @click=${t=>{let n=t.target.parentElement.querySelectorAll(`input`);e.ajouterTypeRelation(n[0].value,n[1].value),n.forEach(e=>e.value=``)}}>Ajouter</button>
      </div>
    </div>
  `}var vp=null;function yp(e,t,n){let r=e.bibliotheque,i=new Map(r.techniques.map(e=>[e.id,e.nom])),a=[],o=new Set;for(let e of r.techniques)for(let r of e.relations){if(r.type!==t)continue;let s=i.get(r.cibleId);if(s===void 0)continue;let c=n?[e.id,r.cibleId].sort().join(`|`):`${e.id}|${r.cibleId}`;o.has(c)||(o.add(c),a.push({sourceId:e.id,sourceNom:i.get(e.id)??`?`,cibleId:r.cibleId,cibleNom:s}))}return a.sort((e,t)=>e.sourceNom.localeCompare(t.sourceNom))}function bp(e,t){let n=yp(e,t.id,t.symetrique??!1),r=t.symetrique?`⇄`:`→`,i=P`<button class="chip-filtre" style="margin:4px 12px 8px"
    @click=${()=>e.ouvrirEditionLien(null,void 0,void 0,t.id)}>＋ Ajouter un lien de ce type</button>`;return n.length===0?P`<p class="fil-vide" style="padding:4px 12px 2px">Aucun lien de ce type pour l'instant.</p>${i}`:P`<div class="instances-relation">
    ${n.map(n=>P`<div class="ligne-instance">
        <button class="lien-instance" @click=${()=>e.ouvrirFiche(n.sourceId)}
          title="Ouvrir « ${n.sourceNom} »">${n.sourceNom} <span class="fleche-instance">${r}</span> ${n.cibleNom}</button>
        <button class="bouton-icone" aria-label=${`Modifier le lien ${n.sourceNom} ${r} ${n.cibleNom}`} title="Raison, priorité…"
          @click=${()=>e.ouvrirEditionLien(n.sourceId,n.cibleId,t.id)}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>
        </button>
        <button class="bouton-icone danger" aria-label=${`Retirer le lien ${n.sourceNom} ${r} ${n.cibleNom}`} title="Retirer ce lien"
          @click=${()=>e.demanderConfirmation({titre:`Retirer le lien « ${n.sourceNom} ${r} ${n.cibleNom} » ?`,bouton:`Retirer le lien`,action:()=>{e.retirerRelation(n.sourceId,n.cibleId,t.id)}})}>✕</button>
      </div>`)}
  </div>${i}`}function xp(e,t){let n=e.usagesTypeRelation(t.id),r=ip===t.id;return P`<div class="type-relation-bloc">
    <div class="ligne-atelier">
      <button class="details lien-type" style="flex:1;text-align:left" aria-expanded=${r}
        @click=${()=>{ip=r?null:t.id,e.requestUpdate()}}>
        <span class="chevron-type" aria-hidden="true">${r?`▾`:`▸`}</span>
        ${t.libelle}${t.symetrique?` ⇄`:` → ${t.libelleInverse}`}
        ${n?P`<span class="kpi-nombre" style="font-size:10px">${n}</span>`:F}
        ${t.origine?P`<span style="opacity:.7"> · importé</span>`:F}
      </button>
      <button class="bouton-icone" aria-label="Modifier ce lien" title="Renommer / lecture inverse"
        @click=${()=>{vp=t.id,e.requestUpdate()}}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>
      </button>
      <button class="bouton-icone" aria-label="Supprimer ce lien"
        @click=${()=>{n?e.supprimerTypeRelation(t.id):e.demanderConfirmation({titre:`Retirer le lien « ${t.libelle} » ?`,corps:`Inutilisé — aucune relation ne s'en sert.`,bouton:`Retirer le type`,action:()=>{e.supprimerTypeRelation(t.id)}})}}>✕</button>
    </div>
    ${r?bp(e,t):F}
  </div>`}function Sp(e,t){let n=e.usagesTypeRelation(t.id);return P`<div class="ligne-atelier edition-type-relation" style="flex-wrap:wrap">
    <input class="champ-mini" .value=${t.libelle} aria-label="Libellé du lien">
    ${t.symetrique?P`<span class="details">⇄ se lit pareil des deux sens</span>`:P`<input class="champ-mini" .value=${t.libelleInverse??``} aria-label="Lecture inverse">`}
    <button class="chip-filtre" title=${n?`des relations utilisent déjà cette lecture`:`basculer la nature de lecture`}
      @click=${()=>void e.basculerSymetrieTypeRelation(t.id)}>${t.symetrique?`Rendre orienté`:`Rendre symétrique ⇄`}</button>
    <button class="bouton principal" style="flex:none; padding:7px 12px; font-size:12.5px"
      @click=${n=>{let r=n.target.parentElement.querySelectorAll(`input`);vp=null,e.majTypeRelation(t.id,{libelle:r[0].value,...t.symetrique?{}:{libelleInverse:r[1]?.value??``}})}}>OK</button>
  </div>`}function Cp(e,t){e.autoriser(`destruction_ou_sensible`,`Saisis le PIN pour retirer « ${t.nom} ».`,()=>{let n=oa(e.bibliotheque,t.id),r=n.length?`\nUtilisée dans ${n.length} composition${n.length>1?`s`:``} (${n.map(e=>e.nom).join(`, `)}).`:``;e.demanderConfirmation({titre:`Mettre « ${t.nom} » à la corbeille ?`,corps:`${r?r.trim()+`
`:``}Geste réversible : tu pourras la restaurer depuis Plus › Corbeille.`,bouton:`Mettre à la corbeille`,action:()=>{e.supprimerTechnique(t.id)}})})}function wp(e,t){let n=e.bibliotheque;t&&!n.disciplines.some(e=>e.id===t)&&(t=null);let r=new Set(n.techniques.map(e=>e.id)),i=new Set(n.contributions.filter(e=>e.techniqueId).map(e=>e.techniqueId)),a=new Set(n.contributions.filter(e=>e.techniqueId&&e.medias.length).map(e=>e.techniqueId)),o=new Set(e.mediasManquants.filter(e=>e.techniqueId).map(e=>e.techniqueId)),s=e=>n.disciplines.find(t=>t.id===e)?.nom??``,c=e=>e.familleId?n.disciplines.find(t=>t.id===e.disciplineId)?.familles.find(t=>t.id===e.familleId)?.nom??``:``,l=e=>{let t=[];return!e.familleId&&e.niveauxIds.length===0&&t.push(`sans classification`),i.has(e.id)?a.has(e.id)||t.push(`sans média`):t.push(`sans contenu`),e.relations.some(e=>!r.has(e.cibleId))&&t.push(`relation à réparer`),o.has(e.id)&&t.push(`vidéo manquante`),t},u=wf.requete.trim().toLowerCase(),d=n.techniques.filter(e=>!(t&&e.disciplineId!==t||u&&!`${e.nom} ${e.nomTraditionnel??``}`.toLowerCase().includes(u))).sort((e,t)=>e.nom.localeCompare(t.nom,`fr`,{sensitivity:`base`}));return P`
    <div class="carte-atelier" style="margin-top:10px">
      ${n.disciplines.length>1?P`<div class="chips-filtres" style="padding:0 0 4px" aria-label="Filtrer par discipline">
            <button class="chip-filtre ${t?``:`actif`}"
              @click=${()=>{wf.disciplineId=null,e.requestUpdate()}}>Toutes</button>
            ${n.disciplines.map(n=>P`<button class="chip-filtre ${t===n.id?`actif`:``}"
                @click=${()=>{wf.disciplineId=n.id,e.requestUpdate()}}>${n.nom}</button>`)}
          </div>`:F}
      <div class="recherche" style="margin:0">
        <input placeholder="Chercher une technique…" aria-label="Chercher une technique" .value=${wf.requete}
               @input=${t=>{wf.requete=t.target.value,e.requestUpdate()}}>
      </div>
      ${d.map(t=>{let n=c(t);return P`<div class="ligne-gestion ligne-gestion-double">
          <button class="ligne-gestion-ouvrir" @click=${()=>e.ouvrirFiche(t.id)}>
            <span class="ligne-gestion-nom">${t.nom}</span>
            <span class="details">${s(t.disciplineId)}${n?` · ${n}`:``}</span>
            ${l(t).length?P`<span class="etiquettes-gestion">${l(t).map(e=>P`<span class="etiquette-gestion">${e}</span>`)}</span>`:F}
          </button>
          <button class="bouton-icone danger supprimer-technique" aria-label=${`Retirer ${t.nom}`} title="Retirer cette technique"
            @click=${()=>Cp(e,t)}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true"><path d="M4 7h16M9 7V5h6v2M6 7l1 13h10l1-13"/></svg>
          </button>
        </div>`})}
      ${d.length===0?P`<p class="fil-vide" style="padding:8px 0 0">Rien ne correspond.</p>`:F}
    </div>
  `}var Tp=new Set;function Ep(e){let t=[...Kp(e).values()],n=t.filter(e=>e.media.type===`local`),r=t.filter(e=>e.media.type!==`local`);return P`
    <div class="carte-atelier" style="gap:0">
      <div class="encart-entete" style="padding-bottom:4px"><span class="titre-atelier">Médiathèque</span></div>
      ${Yp(e,n.length,`Vidéos locales`,`local`)}
      ${Vp===`local`?Zp(e,n):F}
      ${Yp(e,r.length,`Médias en ligne`,`enligne`)}
      ${Vp===`enligne`?Zp(e,r):F}
      ${t.length===0?P`<p class="fil-vide" style="padding:6px 0 0">Aucun média pour l'instant.</p>`:F}
    </div>
  `}function Dp(e){let t=e.bibliotheque,n=ep(e),{aRattacher:r,sansVideo:i,sansClasse:a,nbDoublons:o,conflits:s}=n;return P`
    ${tp(n)===0?P`<p class="fil-vide" style="padding:10px 2px 0">Rien à vérifier — ta bibliothèque est en ordre. ✓</p>`:F}
    <div class="carte-atelier" style="gap:0">
      <div class="encart-entete" style="padding-bottom:4px"><span class="titre-atelier">À compléter</span></div>
      ${Yp(e,r.length,`Captures à rattacher`,`rattacher`)}
      ${Vp===`rattacher`?kp(e,r):F}
      ${Yp(e,i.length,`Techniques sans vidéo`,`sansvideo`)}
      ${Vp===`sansvideo`?Qp(e,i,`Ajouter une vidéo`,`Toutes tes techniques ont une vidéo ou un lien.`):F}
      ${Yp(e,a.length,`Techniques sans classement`,`aclasser`)}
      ${Vp===`aclasser`?Qp(e,a,`Classer`,`Toutes tes techniques ont une catégorie ou un niveau.`):F}
    </div>
    ${s.length?P`<div class="carte-atelier">
          <div class="ligne-atelier">
            <span class="titre-atelier" style="font-size:14px">Textes de pack à arbitrer</span>
            <span class="kpi-nombre">${s.length}</span>
          </div>
          <p class="fil-vide" style="padding:0 2px 6px">La mise à jour d'un pack voulait remplacer un texte que tu as modifié.
            Ta version reste en place tant que tu n'as pas choisi.</p>
          ${s.map(n=>{let r=t.contributions.find(e=>e.id===n.contributionId);return P`<div class="conflit-liaison">
              <div class="conflit-liaison-titre"><b>${(r?.techniqueId?t.techniques.find(e=>e.id===r.techniqueId):void 0)?.nom??`Technique disparue`}</b>
                ${r?.modifiePar?P`<span class="conflit-liaison-type">modifié par ${r.modifiePar}</span>`:F}</div>
              <div class="conflit-liaison-versions">
                <div class="conflit-version"><div class="conflit-version-tete">La mienne</div>
                  <div class="conflit-version-note">${r?.description??P`<i>sans description</i>`}</div></div>
                <div class="conflit-version"><div class="conflit-version-tete">Celle du pack</div>
                  <div class="conflit-version-note">${n.description??P`<i>sans description</i>`}</div></div>
              </div>
              <div class="conflit-liaison-actions">
                <button class="chip-filtre" @click=${()=>void Nu(e,n,`locale`)}>La mienne</button>
                <button class="chip-filtre" @click=${()=>void Nu(e,n,`pack`)}>Celle du pack</button>
              </div>
            </div>`})}
        </div>`:F}
    <div class="carte-atelier" style="gap:0">
      <div class="encart-entete" style="padding-bottom:4px"><span class="titre-atelier">Intégrité des médias</span></div>
      ${Yp(e,e.mediasManquants.length,`Vidéos manquantes`,`manquantes`,`rouge`)}
      ${Vp===`manquantes`?Op(e):F}
      ${Yp(e,e.videosOrphelines.length,`Fichiers inutilisés`,`inutilises`,`rouge`)}
      ${Vp===`inutilises`?$p(e):F}
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
  `}function Op(e){let t=e.mediasManquants.filter(e=>e.techniqueId).map(e=>({id:e.techniqueId,nom:e.nom})).sort((e,t)=>e.nom.localeCompare(t.nom,`fr`,{sensitivity:`base`}));return P`<div class="mediatheque-liste">
    <p class="details" style="padding:2px 2px 6px">Fichier absent — restaure une sauvegarde, ou retire la note.</p>
    ${t.length?t.map(t=>P`<div class="ligne-atelier ligne-media">
          <span class="details" style="flex:1;min-width:0"><button class="lien-media-fiche" @click=${()=>e.ouvrirFiche(t.id)}>${t.nom}</button></span>
        </div>`):P`<p class="fil-vide" style="padding:6px 0 8px">Aucune vidéo manquante rattachée à une fiche.</p>`}
  </div>`}function kp(e,t){return P`<div class="mediatheque-liste">
    <p class="details" style="padding:2px 2px 6px">Un savoir sans nom s'oublie — donne-lui une technique.</p>
    ${t.length?t.map((t,n)=>P`<div class="ligne-atelier ligne-media">
          <span class="details" style="flex:1;min-width:0">Capture ${n+1}</span>
          <button class="chip-filtre" @click=${()=>e.ouvrirRattachement(t.id)}>Rattacher</button>
        </div>`):P`<p class="fil-vide" style="padding:6px 0 8px">Aucune capture à rattacher.</p>`}
  </div>`}function Ap(e){return P`${Mp(e)}${_p(e)}`}function jp(e,t,n,r){if(t.length===0)return F;let i=new Map;for(let e of t)i.set(e.pack,[...i.get(e.pack)??[],e]);return P`
    <div class="carte-atelier">
      <div class="ligne-atelier">
        <span class="titre-atelier" style="font-size:14px">Liens que le pack ne déclare plus</span>
        <span class="kpi-nombre">${t.length}</span>
      </div>
      <p class="fil-vide" style="padding:0 2px 6px">Une nouvelle version a retiré ces liens de son contenu.
        Les tiens restent en place tant que tu n'as pas choisi.</p>
      ${[...i].map(([t,n])=>P`
        <div class="ligne-atelier" style="padding-top:2px">
          <span class="sous-titre-atelier">${n.length} lien${n.length>1?`s`:``} — pack « ${t} »</span>
          <button class="chip-filtre danger retirer-liens-lot"
            @click=${()=>void e.retirerTousLesLiensProposes(t)}>Tout retirer</button>
        </div>`)}
      ${t.slice(0,40).map(t=>P`
        <div class="conflit-liaison retrait-propose">
          <div class="conflit-liaison-titre"><b>${n(t.sourceId)}</b> <span class="fleche-instance">&#8594;</span> <b>${n(t.cibleId)}</b>
            <span class="conflit-liaison-type">${r(t.type)}</span></div>
          <div class="conflit-liaison-actions">
            <button class="chip-filtre" @click=${()=>void e.arbitrerConflitLiaison(t,`local`)}>Garder</button>
            <button class="chip-filtre danger" @click=${()=>void e.arbitrerConflitLiaison(t,`retirer`)}>Retirer</button>
          </div>
        </div>`)}
      ${t.length>40?P`<p class="fil-vide" style="padding:6px 2px 0">Les ${t.length-40} autres apparaîtront ensuite —
            ou d'un coup avec « Tout retirer ».</p>`:F}
    </div>
  `}function Mp(e){let t=e.bibliotheque,n=(t.conflitsLiaisons??[]).filter(e=>!!t.techniques.find(t=>t.id===e.sourceId)?.relations.some(t=>t.type===e.type&&t.cibleId===e.cibleId)&&t.techniques.some(t=>t.id===e.cibleId)),r=n.filter(e=>e.sens!==`retrait`),i=n.filter(e=>e.sens===`retrait`);if(n.length===0)return F;let a=e=>t.techniques.find(t=>t.id===e)?.nom??`?`,o=e=>t.typesRelation.find(t=>t.id===e)?.libelle??e;return r.length===0?jp(e,i,a,o):P`
    ${i.length?jp(e,i,a,o):F}
    <div class="carte-atelier">
      <div class="ligne-atelier">
        <span class="titre-atelier" style="font-size:14px">Liaisons à arbitrer</span>
        <span class="kpi-nombre">${r.length}</span>
      </div>
      <p class="fil-vide" style="padding:0 2px 6px">Un pack propose une raison ou une priorité différente sur ces liens.
        Ta version reste en place tant que tu n'as pas choisi.</p>
      ${r.map(n=>{let r=t.techniques.find(e=>e.id===n.sourceId).relations.find(e=>e.type===n.type&&e.cibleId===n.cibleId);return P`<div class="conflit-liaison">
          <div class="conflit-liaison-titre"><b>${a(n.sourceId)}</b> <span class="fleche-instance">→</span> <b>${a(n.cibleId)}</b>
            <span class="conflit-liaison-type">${o(n.type)}</span></div>
          <div class="conflit-liaison-versions">
            <div class="conflit-version"><div class="conflit-version-tete">La mienne</div>
              <div class="conflit-version-note">${r.note??P`<i>sans raison</i>`}</div>
              ${r.priorite===void 0?F:P`<div class="conflit-version-prio">priorité ${r.priorite}</div>`}</div>
            <div class="conflit-version"><div class="conflit-version-tete">Celle du pack</div>
              <div class="conflit-version-note">${n.note??P`<i>sans raison</i>`}</div>
              ${n.priorite===void 0?F:P`<div class="conflit-version-prio">priorité ${n.priorite}</div>`}</div>
          </div>
          <div class="conflit-liaison-actions">
            <button class="chip-filtre" @click=${()=>void e.arbitrerConflitLiaison(n,`local`)}>La mienne</button>
            <button class="chip-filtre" @click=${()=>void e.arbitrerConflitLiaison(n,`pack`)}>Celle du pack</button>
            <button class="chip-filtre" @click=${()=>void e.arbitrerConflitLiaison(n,`deux`)} title="Une seule liaison, qui garde les deux textes — la tienne d'abord">Fusionner les deux</button>
          </div>
        </div>`})}
    </div>
  `}function Np(e){let t=e.bibliotheque,n=t.corbeille??[];return n.length===0?P`<p class="fil-vide" style="padding-top:10px">La corbeille est vide. Une fiche mise à la corbeille arrive ici et reste restaurable sans limite de durée — rien n'expire tout seul, tant que tu ne vides pas.</p>`:P`
    <div class="carte-atelier" style="gap:0">
      <div class="ligne-atelier">
        <span class="titre-atelier" style="font-size:14px;flex:1">${n.length} fiche${n.length>1?`s`:``} en corbeille</span>
        <button class="chip-filtre danger"
          @click=${()=>e.demanderConfirmation({titre:`Vider la corbeille (${n.length} fiche${n.length>1?`s`:``}) ?`,corps:`Irréversible — un point de restauration sera conservé.`,bouton:`Vider la corbeille`,action:()=>{e.viderCorbeille()}})}>
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
            @click=${()=>e.demanderConfirmation({titre:`Supprimer définitivement « ${n.technique.nom} » ?`,corps:`Irréversible.`,bouton:`Supprimer définitivement`,action:()=>{e.supprimerDefinitivement(n.technique.id)}})}>✕</button>
        </div>`})}
    </div>
  `}function Pp(e){let t=[...e.doublonsPotentiels()].sort((t,n)=>(e.technique(t.aId)?.nom??``).localeCompare(e.technique(n.aId)?.nom??``,`fr`,{sensitivity:`base`})),n=(e.bibliotheque.doublonsIgnores??[]).length,r=n?P`<button class="chip-filtre rescan-doublons" style="margin:8px 18px 0"
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
    `;let o=e.doublonOuvert?t.find(t=>Yu(t.aId,t.bId)===e.doublonOuvert):void 0;return o?P`
      <div class="actions-bibliotheque" style="padding-top:8px">
        <button class="chip-filtre" @click=${()=>{e.doublonOuvert=null,e.fusionDoublon=null,e.requestUpdate()}}>← Tous les doublons</button>
      </div>
      ${Lp(e,o)}
    `:P`
    <p class="fil-vide" style="padding:8px 2px 6px">
      Deux fiches de nom identique ou proche, venant de sources différentes. Elles
      restent indépendantes tant que tu ne décides rien — choisis-en une pour comparer.
    </p>
    <div class="fil doublons-liste">
      ${t.map(t=>Fp(e,t))}
    </div>
    ${r}
    ${a}
  `}function Fp(e,t){let n=e.technique(t.aId),r=e.technique(t.bId);return!n||!r?P``:P`<button class="ligne-menu ligne-doublon" @click=${()=>{e.doublonOuvert=Yu(t.aId,t.bId),e.requestUpdate()}}>
    <span class="ligne-menu-icone" style="background:#efe3d6" aria-hidden="true">🔀</span>
    <span class="ligne-menu-corps">
      <span class="ligne-menu-titre">${n.nom}</span>
      <span class="ligne-menu-etat">${n.nom===r.nom?`même nom, deux sources`:`≈ « ${r.nom} »`}</span>
    </span>
    <span class="chevron">›</span>
  </button>`}function Ip(e,t,n){return P`<div class="doublon-cote">
    <div class="doublon-apercu">
      ${ro(e,t.technique,t.source)}
    </div>
    <div class="doublon-titre">${n} · ${t.technique.nom}</div>
    ${t.description?P`<div class="doublon-desc">${t.description.slice(0,140)}${t.description.length>140?`…`:``}</div>`:F}
    <div class="doublon-chiffres">
      ${t.medias.length} média${t.medias.length>1?`s`:``} ·
      ${t.pointsCles.length} point${t.pointsCles.length>1?`s`:``} ·
      ${t.niveaux.length} niveau${t.niveaux.length>1?`x`:``} ·
      ${t.relations} relation${t.relations>1?`s`:``}
    </div>
  </div>`}function Lp(e,t){let n=$u(e.bibliotheque,t.aId,t.bId);if(!n)return P``;let r=e.fusionDoublon!==null&&e.fusionDoublon.aId===t.aId&&e.fusionDoublon.bId===t.bId;return P`<div class="doublon">
    <div class="doublon-cotes">
      ${Ip(e,n.a,`A`)}
      ${Ip(e,n.b,`B`)}
    </div>
    ${r?Rp(e,t,n):P`<div class="doublon-decisions">
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
  </div>`}function Rp(e,t,n){let r=e.fusionDoublon,i=r.choix,a=t=>{e.fusionDoublon={...r,choix:{...i,...t}},e.requestUpdate()},o=n.a.technique.nom,s=n.b.technique.nom,c=(e,t,n)=>P`<div class="fusion-ligne">
    <span class="fusion-libelle">${e}</span>
    <div class="chips-filtres" style="padding:0">
      ${n.map(e=>P`<button class="chip-filtre ${i[t]===e.valeur?`actif`:``}"
          @click=${()=>a({[t]:e.valeur})}>${e.texte}</button>`)}
    </div>
  </div>`,l=P``;try{let n=td(e.bibliotheque,t.aId,t.bId,i),r=n.techniques.find(e=>e.id===t.aId),a=n.contributions.filter(e=>e.techniqueId===r.id&&e.provenance!==`personnel`),o=a.reduce((e,t)=>e+t.medias.length,0),s=a.map(e=>e.description??``).filter(Boolean).join(` `).slice(0,120);l=P`<div class="fusion-apercu">
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
  </div>`}var zp=null;function Bp(e,t){let n=Tp.has(t.id);return P`<div class="ligne-atelier ligne-orpheline" style="flex-wrap:wrap">
    <span class="details" style="flex:1">🎞 fichier de ${Cf(t.taille)} — plus rien ne le référence</span>
    <button class="chip-filtre" @click=${()=>{n?Tp.delete(t.id):Tp.add(t.id),e.requestUpdate()}}>
      ${n?`Replier`:`Vérifier`}</button>
    ${n?P`<div style="width:100%">
          <movenso-video-locale .app=${e} .mediaId=${t.id}></movenso-video-locale>
          ${(()=>{let n=zp?.id===t.id,r=n&&zp.texte.trim()?Nr(e.bibliotheque,zp.texte).slice(0,5):[];return P`<div style="margin-top:6px">
              <input class="champ-mini" style="width:100%" placeholder="🔗 Rattacher à une technique (nom)…"
                aria-label="Rattacher ce fichier à une technique"
                .value=${n?zp.texte:``}
                @input=${n=>{zp={id:t.id,texte:n.target.value},e.requestUpdate()}}>
              ${r.length?P`<div class="chips-filtres" style="padding-top:4px">
                    ${r.map(n=>P`<button class="chip-filtre"
                      @click=${()=>{zp=null,e.rattacherOrphelin(t.id,n.id)}}>${n.nom}</button>`)}
                  </div>`:F}
            </div>`})()}
          <button class="action-danger" style="margin-top:6px"
            @click=${()=>{e.demanderConfirmation({titre:`Supprimer définitivement ce fichier inutilisé (${Cf(t.taille)}) ?`,bouton:`Supprimer le fichier`,action:()=>{Tp.delete(t.id),e.supprimerVideoOrpheline(t.id)}})}}>Supprimer ce fichier inutilisé</button>
        </div>`:F}
  </div>`}var Vp=null;function Hp(){Vp=null,Up=null}var Up=null,Wp=new Set,Gp=null;function Kp(e){let t=e.bibliotheque,n=new Map,r=(e,t,r)=>{let i=n.get(e.id);i||(i={media:e,refs:[],disciplines:new Set},n.set(e.id,i)),i.refs.push(t),r&&i.disciplines.add(r)};for(let n of t.contributions){let t=n.techniqueId?e.technique(n.techniqueId):void 0;for(let e of n.medias)r(e,{nom:t?t.nom:`capture à rattacher`,techniqueId:n.techniqueId},t?.disciplineId)}for(let e of t.compositions)for(let t of e.blocs)for(let n of t.medias)r(n,{nom:`composition « ${e.nom} »`,techniqueId:null});return n}function qp(e){return e.label?.trim()?e.label.trim():e.nomOriginal?.trim()?e.nomOriginal.trim():e.type===`local`?`vidéo`:e.type===`plateforme`?e.service??`vidéo en ligne`:`lien`}function Jp(e){return e.type===`plateforme`&&e.service===`youtube`?`https://www.youtube.com/watch?v=${e.ref}`:e.ref}function Yp(e,t,n,r,i=`neutre`){let a=Vp===r;return P`<button class="kpi kpi-filtre ${a?`actif`:``}" aria-expanded=${a}
    @click=${()=>{Vp=a?null:r,e.requestUpdate()}}>
    <span class="voyant ${t?i:`vert`}"></span>
    <span class="kpi-libelle">${n}</span>
    <span class="kpi-nombre">${t}</span>
    <span class="chevron" aria-hidden="true">${a?`▾`:`▸`}</span>
  </button>`}function Xp(e,t){let n=t.media,r=n.type===`local`?`🎞`:n.type===`plateforme`?`▶`:`🔗`,i=n.type===`local`&&e.taillesVideos.has(n.id),a=n.type===`local`?e.taillesVideos.get(n.id)??n.taille:void 0,o=n.type===`local`?i?Cf(a??0):`fichier absent`:`en ligne`,s=t.refs[0]?.nom??`média`,c=t.refs.find(e=>e.techniqueId),l=Wp.has(n.id),u=Gp===n.id;return P`<div class="ligne-atelier ligne-media" style="flex-wrap:wrap">
    <span class="details" style="flex:1;min-width:0">
      <span aria-hidden="true">${r}</span>
      ${c?P`<button class="lien-media-fiche" @click=${()=>e.ouvrirFiche(c.techniqueId)}>${s}</button>`:P`<b>${s}</b>`}
      <span aria-hidden="true"> · </span>
      ${u?P`<input class="champ-mini nom-media-champ" .value=${n.label??``} placeholder=${qp(n)} aria-label="Libellé du média"
            @change=${t=>void e.majMediaLabel(n.id,t.target.value)}>`:P`<span>${qp(n)}</span>`}
      <span style="opacity:.7"> · ${o}</span>
    </span>
    <button class="bouton-icone" aria-label="Modifier ce média" title=${n.type===`local`?`Renommer`:`Modifier le nom et le lien`}
      @click=${()=>{Gp=u?null:n.id,e.requestUpdate()}}>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>
    </button>
    ${n.type===`local`?P`<button class="chip-filtre" ?disabled=${!i}
          @click=${()=>{l?Wp.delete(n.id):Wp.add(n.id),e.requestUpdate()}}>
          ${l?`Replier`:`▶ Aperçu`}</button>`:c?P`<button class="chip-filtre" @click=${()=>e.ouvrirFiche(c.techniqueId)}>Ouvrir la fiche</button>`:eo(n.ref)?P`<a class="chip-filtre" href=${eo(n.ref)} target="_blank" rel="noopener noreferrer"
              title="Quitte Movenso — s'ouvre dans le navigateur">▶ Ouvrir le lien · ${to(n.ref)} ↗</a>`:P`<span class="chip-filtre" title="Lien non https — jamais ouvert" style="opacity:.6">🔗 lien non sûr</span>`}
    ${u&&n.type!==`local`?P`<input class="champ-mini" style="width:100%; margin-top:6px" inputmode="url" aria-label="Lien du média (YouTube ou autre)"
          placeholder="🔗 Lien (YouTube ou autre)" .value=${Jp(n)}
          @change=${t=>void e.majMediaLien(n.id,t.target.value)}>`:F}
    ${l&&i?P`<div style="width:100%"><movenso-video-locale .app=${e} .mediaId=${n.id}></movenso-video-locale></div>`:F}
  </div>`}function Zp(e,t){let n=e.bibliotheque.disciplines,r=Up&&n.some(e=>e.id===Up)?Up:null,i=(r?t.filter(e=>e.disciplines.has(r)):t).slice().sort((e,t)=>(e.refs[0]?.nom??qp(e.media)).localeCompare(t.refs[0]?.nom??qp(t.media),`fr`,{sensitivity:`base`}));return P`<div class="mediatheque-liste">
    ${n.length>=2?P`<div class="chips-filtres" style="padding:2px 0 6px">
          <button class="chip-filtre ${r===null?`actif`:``}" @click=${()=>{Up=null,e.requestUpdate()}}>Toutes</button>
          ${n.map(t=>P`<button class="chip-filtre ${r===t.id?`actif`:``}"
            @click=${()=>{Up=t.id,e.requestUpdate()}}>${t.nom}</button>`)}
        </div>`:F}
    ${i.length?i.map(t=>Xp(e,t)):P`<p class="fil-vide" style="padding:6px 0 8px">${t.length?`Aucun média pour cette discipline.`:`Aucun média de ce type pour l'instant.`}</p>`}
  </div>`}function Qp(e,t,n,r){let i=e.bibliotheque.disciplines,a=Up&&i.some(e=>e.id===Up)?Up:null,o=(a?t.filter(e=>e.disciplineId===a):t).slice().sort((e,t)=>e.nom.localeCompare(t.nom,`fr`,{sensitivity:`base`}));return P`<div class="mediatheque-liste">
    ${i.length>=2?P`<div class="chips-filtres" style="padding:2px 0 6px">
          <button class="chip-filtre ${a===null?`actif`:``}" @click=${()=>{Up=null,e.requestUpdate()}}>Toutes</button>
          ${i.map(t=>P`<button class="chip-filtre ${a===t.id?`actif`:``}"
            @click=${()=>{Up=t.id,e.requestUpdate()}}>${t.nom}</button>`)}
        </div>`:F}
    ${o.length?o.map(t=>{let r=i.find(e=>e.id===t.disciplineId);return P`<div class="ligne-atelier ligne-media">
            <span class="details" style="flex:1;min-width:0">
              <button class="lien-media-fiche" @click=${()=>e.ouvrirFiche(t.id)}>${t.nom}</button>
              ${r?P`<span style="opacity:.7"> · ${r.nom}</span>`:F}
            </span>
            <button class="chip-filtre" @click=${()=>e.ouvrirFiche(t.id)}>${n}</button>
          </div>`}):P`<p class="fil-vide" style="padding:6px 0 8px">${t.length?`Aucune pour cette discipline.`:r}</p>`}
  </div>`}function $p(e){let t=e.videosOrphelines.reduce((e,t)=>e+t.taille,0),n=e.videosOrphelines.filter(e=>Tp.has(e.id)),r=n.reduce((e,t)=>e+t.taille,0);return P`<div class="mediatheque-liste">
    <p class="details" style="padding:2px 2px 6px">Vérifie chaque fichier avant de le supprimer${t?P` · total : ${Cf(t)}`:F}. Un média retrouvé peut aussi être RATTACHÉ à une fiche.</p>
    ${n.length>=2?P`<button class="action-danger suppression-groupe-orphelins" style="margin:2px 0 8px"
          @click=${()=>{e.demanderConfirmation({titre:`Supprimer les ${n.length} fichiers vérifiés — ${Cf(r)} ?`,corps:`Chacun sera revérifié inutilisé à l'instant de supprimer.`,bouton:`Supprimer les ${n.length} fichiers`,action:()=>{n.forEach(e=>Tp.delete(e.id)),e.supprimerOrphelinsVerifies(n.map(e=>e.id))}})}}>Supprimer les ${n.length} fichiers vérifiés — ${Cf(r)}</button>`:F}
    ${e.videosOrphelines.length?e.videosOrphelines.map(t=>Bp(e,t)):P`<p class="fil-vide" style="padding:6px 0 8px">Aucun fichier inutilisé.</p>`}
  </div>`}var em=new Set([`demarrer`,`retrouver`,`fiche`,`medias`,`relations`,`donnees`,`limites`,`licences`,`heros-aide`,`heros-apropos`,`partager`,`porte`]),tm=e=>`./img/aide-${e}.webp`;function nm(e,t=`aide-vignette`){return em.has(e)?P`<img class=${t} src=${tm(e)} alt="" aria-hidden="true" width="192" height="192" decoding="async">`:P`<svg class=${t} viewBox="0 0 120 120" aria-hidden="true"><use href="#ill-${e}"></use></svg>`}function rm(e,t,n=`0 0 120 120`){return em.has(e)?P`<img class=${t} src=${tm(e)} alt="" aria-hidden="true" decoding="async">`:P`<svg class=${t} viewBox=${n} aria-hidden="true"><use href="#ill-${e}"></use></svg>`}var im=P`
<svg class="ill-sprite" width="0" height="0" aria-hidden="true" focusable="false">${de`
<defs>
<style>
  .il-f{fill:#F5F1E8}.il-s{fill:#93A48C}.il-sc{fill:#6E8168}.il-c{fill:#DD6A4E}.il-c2{fill:#C4553F}
  .il-b{fill:#6B5645}.il-bl{fill:#A08A73}.il-k{fill:#E7E0D0}.il-w{fill:#FCFAF6}.il-n{fill:#1C1A18}
  .il-n2{fill:#2A2724}.il-kr{fill:#C09A6B}.il-kr2{fill:#A8814F}.il-kr3{fill:#D9BC94}
  .il-pa{fill:#E6DCC6}.il-pa2{fill:#CFC2A6}.il-g{fill:#8A8378}.il-o{fill:#000;opacity:.26}
</style>








<symbol id="ill-securite" viewBox="0 0 120 120">
  <ellipse class="il-o" cx="60" cy="100" rx="42" ry="7"/>
  <path class="il-s" d="M14 74h84v16a6 6 0 0 1-6 6H20a6 6 0 0 1-6-6Z"/><path class="il-sc" d="M14 74h84v5H14Z"/>
  <path class="il-bl" d="M20 60h72v14H20Z"/><path class="il-kr3" d="M20 60h72v4H20Z"/>
  <path class="il-s" d="M26 46h60v14H26Z"/><path class="il-sc" d="M26 46h60v4H26Z"/>
  <g transform="rotate(7 76 32)"><rect class="il-pa" x="56" y="14" width="40" height="34" rx="4"/>
    <circle class="il-c" cx="76" cy="31" r="12"/>
    <path fill="#E6DCC6" d="M74.6 24h3v9h-3zm0 11.6h3v3h-3z"/></g>
  <path class="il-s" d="M28 42c0-12 6-18 14-18 0 12-6 18-14 18Z"/>
  <path class="il-sc" d="M26 44c-9 0-15-6-15-15 9 0 15 6 15 15Z"/></symbol>





</defs>`}</svg>`,am=P`<svg class="aide-chevron" width="19" height="19" viewBox="0 0 24 24" fill="none"
  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 6 6 6-6 6"/></svg>`;function om(e){return P`
    ${im}
    <div class="aide-page">
      <div class="aide-heros">
        ${rm(`heros-aide`,`aide-heros-art`,`0 0 200 160`)}
        <h2>Besoin d’aide ?</h2>
        <p>Les repères essentiels pour bien démarrer, te servir de l’application et protéger tes données.</p>
      </div>

      ${Jf(e).map(t=>P`
          <button class="aide-rubrique" @click=${()=>Zf(e,t.cle)}>
            ${nm(t.illustration,`aide-vignette`)}
            <span class="aide-rub-corps">
              <b>${t.titre(e)}</b>
              <span>${t.resume}</span>
            </span>
            ${am}
          </button>
        `)}
    </div>
  `}function sm(e){let t=Qf()?Yf(Qf()):void 0;return t?P`
    ${im}
    <div class="aide-page">
      <div class="aide-idee">
        ${rm(t.illustration,`aide-idee-art`)}
        <b>${t.idee}</b>
        <p>${t.sousIdee}</p>
      </div>

      ${t.reponses(e).map(e=>P`
          <div class="aide-reponse">
            <h3>${e.titre}</h3>
            <p>${e.corps}</p>
          </div>
        `)}

      ${t.alerte?P`
            <div class="aide-alerte">
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                   stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M10.3 3.9 1.9 18.4A1.9 1.9 0 0 0 3.6 21.3h16.8a1.9 1.9 0 0 0 1.7-2.9L13.7 3.9a1.9 1.9 0 0 0-3.4 0Z"/>
                <path d="M12 9.5v4.5M12 17.5h.01"/>
              </svg>
              <p>${t.alerte}</p>
            </div>
          `:F}
    </div>
  `:om(e)}var cm=P`<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor"
  stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m5 12.5 4.5 4.5L19 7"/></svg>`,lm=`0.9.0-rc.1`.includes(`dev`)||`0.9.0-rc.1`.includes(`rc`)||`0.9.0-rc.1`.includes(`beta`);function um(e){return P`
    ${im}
    <div class="aide-page">
      <div class="apropos-heros">
        ${rm(`heros-apropos`,`apropos-heros-art`,`0 0 200 160`)}
        <h2>Movenso</h2>
        <p class="apropos-accroche">Ta bibliothèque personnelle de mouvements</p>
        <p>Sans compte, sans cloud imposé. Tes fiches, tes notes et tes médias restent sur cet appareil.</p>
        <p>Une connexion peut être utile pour charger l’application, la mettre à jour ou ouvrir une
          ressource externe.</p>
        <p class="apropos-version">Version <b>${Li}+${Ri}</b></p>
        ${lm?P`<p class="apropos-mention">Exporte une sauvegarde avant chaque mise à jour.</p>`:F}
      </div>

      <div class="apropos-majeure">
        ${rm(`donnees`,`apropos-majeure-art`)}
        <h3>Tes données, ton espace</h3>
        <ul>
          <li>${cm} Rien n’est envoyé</li>
          <li>${cm} Tout reste sur l’appareil</li>
          <li>${cm} Fonctionne hors ligne</li>
        </ul>
      </div>

      <div class="apropos-majeure">
        ${rm(`licences`,`apropos-majeure-art`)}
        <h3>Licences &amp; crédits</h3>
        <ul class="apropos-licences">
          <li>Application : <b>GNU GPL v3</b></li>
          <li>Starter packs : <b>CC BY-NC-SA 4.0</b></li>
          <li>Vidéos liées : à leurs auteurs</li>
        </ul>
      </div>

      <button class="apropos-porte" @click=${()=>e.ouvrirPlusSection(`aide`)}>
        ${rm(`porte`,`apropos-porte-art`)}
        <span class="apropos-porte-corps">
          <b>Besoin d’aide ?</b>
          <span>Les repères essentiels, rubrique par rubrique.</span>
        </span>
        <span class="apropos-rond">
          <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"
               stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h13m-5-6 6 6-6 6"/></svg>
        </span>
      </button>
    </div>
  `}function dm(e){let t=e.bibliotheque;if(t.disciplines.length===0)return P`
      <div class="carte-atelier">
        ${xf(`Disciplines`,`discipline`,e)}
        ${bf.has(`discipline`)?ap(e):F}
        <p class="fil-vide" style="padding:6px 2px 0">Aucune discipline — touche ＋ pour en créer une, ou importe un pack.</p>
      </div>
    `;let n=e.disciplineGestion&&t.disciplines.some(t=>t.id===e.disciplineGestion)?e.disciplineGestion:t.disciplines[0].id,r=t.disciplines.find(e=>e.id===n),i={reordonner:(t,n)=>e.deplacerDisciplineVers(t,n),enregistrer:()=>void e.enregistrerReordre(),ordre:()=>t.disciplines.map(e=>e.id),nom:e=>t.disciplines.find(t=>t.id===e)?.nom??`la discipline`};return P`
    <div class="carte-atelier">
      ${xf(`Disciplines`,`discipline`,e)}
      ${bf.has(`discipline`)?ap(e):F}
      <div class="chips-glissables chips-disciplines" aria-label="Disciplines">
        ${t.disciplines.map(t=>P`<span class="chip-glissable ${t.id===r.id?`actif`:``}">
            ${Oa(e,t.id,i)}
            <input class="champ-mini chip-gestion" .value=${t.nom} title=${t.nom} aria-label="Nom de la discipline « ${t.nom} »"
              @focus=${()=>{e.disciplineGestion!==t.id&&(e.disciplineGestion=t.id,e.requestUpdate())}}
              @change=${n=>void e.majNomDiscipline(t.id,n.target.value)}>
            <button class="bouton-icone" aria-label="Supprimer « ${t.nom} »" title="Supprimer"
              @click=${()=>cp(e,t)}>✕</button>
          </span>
          ${lp(e,t)}`)}
      </div>
    </div>
    ${up(e,r)}
    ${dp(e,r)}
  `}function fm(e){return e.bibliotheque.techniques.length===0?P`<p class="fil-vide" style="padding-top:10px">Aucune technique pour l'instant.</p>`:wp(e,wf.disciplineId)}var pm={packs:`Disciplines & classement`,techniques:`Gérer les techniques`,atraiter:`À vérifier`,doublons:`Doublons potentiels`,medias:`Médias`,relations:`Gérer les relations`,corbeille:`Corbeille`,"packs-officiels":`Starter packs`,publier:`Créer / exporter un pack`,sauvegardes:`Sauvegardes`,stockage:`Stockage`,securite:`Sécurité`,apparence:`Apparence`,avance:`Fonctions avancées`,diagnostic:`Diagnostic et maintenance`,apropos:`Aide & à propos`,aide:`Aide`,"aide-sujet":``};function mm(e,t){switch(t){case`packs`:return dm(e);case`stockage`:return Ef(e);case`aide`:return om(e);case`aide-sujet`:return sm(e);case`techniques`:return fm(e);case`atraiter`:return Dp(e);case`doublons`:return Pp(e);case`medias`:return Ep(e);case`relations`:return Ap(e);case`corbeille`:return Np(e);case`packs-officiels`:return yf(e.catalogueOfficiel,{installer:t=>void e.installerPackOfficiel(t),recharger:()=>e.rechargerCataloguePacks()},e.bibliotheque?.editionsPacks??[]);case`publier`:return Tf(e);case`sauvegardes`:return Df(e);case`securite`:return Of(e);case`apparence`:return kf(e);case`avance`:return Af(e);case`diagnostic`:return Ff(e);case`apropos`:return um(e)}}function hm(e,t){return P`
    <div class="ecran">
      <div class="barre">
        <button class="bouton-icone" aria-label="Retour" @click=${()=>e.retour()}>
          <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M15 5l-7 7 7 7"/></svg>
        </button>
        <span class="contexte">${t===`aide-sujet`?$f(e):pm[t]}</span>
      </div>
      ${mm(e,t)}
    </div>
  `}function gm(e){return P`<img class="ligne-menu-icone" src="./img/plus-${e}.webp" alt="" aria-hidden="true"
    width="192" height="192" decoding="async">`}function _m(e){let t=e.replace(`.json`,``).split(`__`)[0]??``,n=t.replace(/T(\d{2})-(\d{2})-(\d{2})/,`T$1:$2:$3`),r=new Date(n);if(Number.isNaN(r.getTime()))return t.slice(0,10);let i=r.toLocaleTimeString(`fr-FR`,{hour:`2-digit`,minute:`2-digit`}),a=new Date(r);a.setHours(0,0,0,0);let o=new Date;o.setHours(0,0,0,0);let s=Math.round((o.getTime()-a.getTime())/864e5);return s===0?`aujourd’hui, ${i}`:s===1?`hier, ${i}`:`${r.toLocaleDateString(`fr-FR`,{day:`numeric`,month:`long`})}, ${i}`}function vm(e){let t=e.bibliotheque,n=new Set;for(let e of t.techniques)I(e)!==`local`&&n.add(I(e));for(let e of t.contributions)I(e)!==`local`&&n.add(I(e));n.size;let r=t.disciplines.length,i=t.techniques.length,a=t.disciplines.reduce((e,t)=>e+t.familles.length,0),o=t.disciplines.reduce((e,t)=>e+t.niveaux.length,0);e.doublonsPotentiels().length;let s=e.taillesVideos.size,c=ep(e),l=t.techniques.reduce((e,t)=>e+t.relations.length,0),u=(t.corbeille??[]).length,d=e.sauvegardes[0],f=d?_m(d):``,p=e.infoEspace,m=p?p.usage>=1e6?`${(p.usage/1e6).toFixed(1)} Mo utilisés`:`${Math.max(1,Math.round(p.usage/1e3))} Ko utilisés`:``,h=e.preferences.protections,g=h&&(h.modifications||h.suppressions)?`PIN actif · modifications protégées`:`PIN désactivé · modifications libres`,_=e.preferences.theme??`auto`,v=_===`auto`?`Auto · système`:_===`clair`?`Jour`:`Nuit`,y=e.preferences.modeAvance??!1,b=[y?`Mode avancé`:null,e.preferences.vueRelationBeta??!1?`Relations`:null,e.preferences.compositionsBeta??!1?`Compositions`:null].filter(Boolean),x=b.length?b.join(` · `):`Rien d'activé`;return{bibliotheque:[{section:`packs`,icone:`disciplines`,titre:`Disciplines & classement`,etat:`${r} discipline${r>1?`s`:``} · ${a} catégorie${a>1?`s`:``} · ${o} niveau${o>1?`x`:``}`},{section:`techniques`,icone:`techniques`,titre:`Gérer les techniques`,etat:`${i} technique${i>1?`s`:``}`},{section:`relations`,icone:`relations`,titre:`Gérer les relations`,etat:`${l} relation${l>1?`s`:``}`},{section:`atraiter`,icone:`verifier`,titre:`À vérifier`,etat:np(c)},{section:`corbeille`,icone:`corbeille`,titre:`Corbeille`,etat:u?`${u} fiche${u>1?`s`:``} restaurable${u>1?`s`:``}`:`Vide`},...y?[{section:`doublons`,icone:`doublons`,titre:`Doublons potentiels`,etat:c.nbDoublons?`${c.nbDoublons} à examiner`:`Aucun doublon détecté`},{section:`medias`,icone:`medias`,titre:`Médias`,etat:s?`${s} vidéo${s>1?`s`:``} locale${s>1?`s`:``}`:`Parc de médias`}]:[]],partage:[{section:`packs-officiels`,icone:`starter-packs`,titre:`Starter packs`,etat:`Découvrir et installer des packs`},{action:e=>e.choisirPackAImporter(),icone:`importer`,titre:`Importer un pack`,etat:`Depuis un fichier .movpack`},{section:`publier`,icone:`exporter`,titre:`Créer / exporter un pack`,etat:`Créer un fichier à partager`}],donnees:[{section:`sauvegardes`,icone:`sauvegardes`,titre:`Sauvegardes`,etat:f?`Dernière sauvegarde · ${f}`:`Aucune sauvegarde`},{section:`stockage`,icone:`stockage`,titre:`Stockage`,etat:m||`Espace occupé et persistance`},{section:`securite`,icone:`securite`,titre:`Sécurité`,etat:g},...y?[{section:`diagnostic`,icone:`diagnostic`,titre:`Diagnostic et maintenance`,etat:`État technique de l'appareil`}]:[]],preferences:[{section:`apparence`,icone:`apparence`,titre:`Apparence`,etat:v},{section:`avance`,icone:`avance`,titre:`Fonctions avancées`,etat:x}],movenso:[{section:`apropos`,icone:`apropos`,titre:`Aide & à propos`,etat:`Guides · version · licences · crédits`}]}}function ym(e,t){return P`<button class="ligne-menu" @click=${()=>t.section?e.ouvrirPlusSection(t.section):t.action?.(e)}>
    ${gm(t.icone)}
    <span class="ligne-menu-corps">
      <span class="ligne-menu-titre">${t.titre}</span>
      ${t.etat?P`<span class="ligne-menu-etat">${t.etat}</span>`:F}
    </span>
    <span class="chevron" aria-hidden="true">›</span>
  </button>`}function bm(e){let t=vm(e),n=(t,n)=>P`
    <div class="menu-section-titre">${t}</div>
    <div class="menu-groupe">${n.map(t=>ym(e,t))}</div>`;return P`
    <div class="ecran plus">
      <header class="marque"><div style="flex:1"><div class="nom">Plus</div>
        <div class="devise">Gérer ta bibliothèque, tes données et Movenso.</div></div></header>
      ${n(`Ma bibliothèque`,t.bibliotheque)}
      ${n(`Packs & partage`,t.partage)}
      ${n(`Données & sécurité`,t.donnees)}
      ${n(`Préférences`,t.preferences)}
      ${n(`Movenso`,t.movenso)}
    </div>
  `}function xm(e){let t=e.capture,n=t.question?Cm(e):t.etape===`contenu`?Tm(e):t.etape===`apercu`?wm(e):t.etape===`note`?Em(e):Dm(e),r=t.rattacherSeul?`Rattacher`:`Capturer`;return P`
    <div class="voile" @click=${()=>e.fermerCapture()}></div>
    <div class="feuille" role="dialog" aria-modal="true" tabindex="-1" aria-label=${r}>
      <div class="prise"></div>
      <h2>${r}</h2>
      <div class="geste">${t.question?`Que faire de cette capture ?`:t.rattacherSeul?`Un seul geste`:t.etape===`contenu`?`Geste 1 / 3 — le contenu`:t.etape===`apercu`?`Geste 1 / 3 — vérifier le contenu`:t.etape===`note`?`Geste 2 / 3 — la note`:`Geste 3 / 3 — sais-tu où le ranger ?`}</div>
      ${n}
    </div>
  `}function Sm(e,t){let n=document.createElement(`input`);n.type=`file`,n.accept=`video/*`,t&&n.setAttribute(`capture`,`environment`),n.onchange=()=>{let r=n.files?.[0];!r||!e.capture||(e.capture.apercuUrl&&URL.revokeObjectURL(e.capture.apercuUrl),e.capture={...e.capture,video:r,apercuUrl:URL.createObjectURL(r),camera:t,etape:`apercu`})},n.click()}function Cm(e){let t=e.capture,n=(t.provenance??`personnel`)!==`ressource`||(t.attribution??``).trim()!==``;return P`
    <div class="gestes-ajouter">
      <button class="option-ajouter" ?disabled=${!n}
        title=${n?``:`Une ressource a besoin de sa source avant d'être conservée`}
        @click=${()=>void e.terminerCapture(null)}>
        Garder pour plus tard <span>tu la retrouveras dans Plus › À vérifier › Captures à rattacher</span>
      </button>
      <button class="option-ajouter" @click=${()=>e.capture={...t,question:!1}}>
        Continuer <span>revenir où tu en étais</span>
      </button>
      <button class="option-ajouter" @click=${()=>e.fermerCapture()}>
        Abandonner <span>rien ne sera enregistré</span>
      </button>
    </div>
  `}function wm(e){let t=e.capture,n=n=>{t.apercuUrl&&URL.revokeObjectURL(t.apercuUrl),e.capture={...t,apercuUrl:void 0,...n}};return P`
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
      ${t.video?P`<button class="bouton" @click=${()=>Sm(e,t.camera??!1)}>
            ${t.camera?`Refilmer`:`Choisir un autre fichier`}
          </button>`:P`<button class="bouton" @click=${()=>n({saisieLien:!0,etape:`contenu`})}>
            Modifier
          </button>`}
      <button class="bouton principal" @click=${()=>n({etape:`note`})}>Utiliser</button>
    </div>
  `}function Tm(e){let t=e.capture;return P`
    <div class="choix-double">
      <button @click=${()=>Sm(e,!0)}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="6" width="14" height="12" rx="2"/><path d="m16 10 6-3v10l-6-3"/></svg>
        Filmer <span class="indice">caméra, hors ligne</span>
      </button>
      <button @click=${()=>e.capture={...e.capture,etape:`note`}}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>
        Noter <span class="indice">un mot peut suffire</span>
      </button>
    </div>
    <div class="choix-secondaire">
      <button class="action-douce" @click=${()=>Sm(e,!1)}>
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
  `}function Em(e){let t=e.capture,n=n=>{e.capture={...t,note:n.target.value}},r=t.provenance??`personnel`,i=n=>e.capture={...t,provenance:n,...n===`personnel`?{attribution:``}:{}},a=r!==`ressource`||(t.attribution??``).trim()!==``;return P`
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
  `}function Dm(e){let t=e.capture,n=e.bibliotheque,r=!t.rattacherSeul&&e.ecran.type===`fiche`?e.technique(e.ecran.techniqueId):void 0,i=t.rechercheRattache??``,a=t.chercherPartout?void 0:t.disciplineChoisieId,o=i.trim()?Nr(n,i,30).filter(e=>!a||e.disciplineId===a).slice(0,6):[],s=e=>n.disciplines.find(t=>t.id===e)?.nom??``,c=n=>{e.capture={...t,rechercheRattache:n.target.value}},l=t.rattacherSeul?n.contributions.find(e=>e.id===t.rattacherSeul):void 0;return P`
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
            @click=${()=>{e.demanderConfirmation({titre:`Supprimer cette capture ?`,corps:`Réversible — un snapshot est conservé.`,bouton:`Supprimer la capture`,action:()=>{e.supprimerContribution(l.id),e.fermerCapture()}})}}>
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
          ${ro(e,n)}
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
      ${Om(e,i.trim())}
    </div>
    <div class="actions">
      <button class="bouton" @click=${()=>e.fermerCapture()}>Annuler</button>
      ${t.rattacherSeul?F:P`<button class="bouton" title="Tu la retrouveras dans Plus › À vérifier › Captures à rattacher"
            @click=${()=>void e.terminerCapture(null)}>Garder pour plus tard</button>`}
    </div>
  `}function Om(e,t){let n=e.capture,r=e.bibliotheque,i=(n.nouveauNom??t).trim(),a=e.ecran.type===`fiche`?e.technique(e.ecran.techniqueId)?.disciplineId:void 0,o=r.disciplines.length>1&&!a,s=n.disciplineChoisieId??a??r.disciplines[0]?.id;return P`
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
  `}function km(e){let t=e.ajoutMedia;if(t.mode===`contribution`)return P`
      <div class="voile" @click=${()=>e.ajoutMedia=null}></div>
      <div class="feuille" role="dialog" aria-modal="true" tabindex="-1" aria-label="Ajouter du contenu">
        <div class="prise"></div>
        <h2>Ajouter du contenu</h2>
        <div class="geste">De qui vient ce contenu ? — la technique est déjà connue</div>
        ${Am(e)}
      </div>
    `;let n=t.fichier!==void 0||t.lien!==void 0;return P`
    <div class="voile" @click=${()=>e.ajoutMedia=null}></div>
    <div class="feuille" role="dialog" aria-modal="true" tabindex="-1" aria-label="Ajouter un média">
      <div class="prise"></div>
      <h2>Ajouter un média</h2>
      <div class="geste">${n?`Qui a produit ce média ?`:`Le contenu — filmer, choisir ou lier`}</div>
      ${n?Nm(e):Mm(e)}
    </div>
  `}function Am(e){let t=e.ajoutMedia,n=n=>e.ajoutMedia={...t,provenance:n,...n===`personnel`?{attribution:``}:{}},r=((t.texte??``).trim()!==``||t.fichier!==void 0||(t.lien??``).trim()!==``)&&(t.provenance!==`ressource`||(t.attribution??``).trim()!==``);return P`
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
  `}function jm(e,t){let n=document.createElement(`input`);n.type=`file`,n.accept=`video/*`,t&&n.setAttribute(`capture`,`environment`),n.onchange=()=>{let t=n.files?.[0];t&&e.ajoutMedia&&(e.ajoutMedia={...e.ajoutMedia,fichier:t})},n.click()}function Mm(e){let t=e.ajoutMedia;return P`
    <div class="choix-double">
      <button @click=${()=>jm(e,!0)}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="6" width="14" height="12" rx="2"/><path d="m16 10 6-3v10l-6-3"/></svg>
        Filmer maintenant <span class="indice">caméra, hors ligne</span>
      </button>
      <button @click=${()=>jm(e,!1)}>
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
  `}function Nm(e){let t=e.ajoutMedia,n=n=>e.ajoutMedia={...t,provenance:n,...n===`personnel`?{attribution:``}:{}},r=t.provenance!==`ressource`||(t.attribution??``).trim()!==``;return P`
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
  `}function Pm(e){let t=e.ajouter;return P`
    <div class="voile" @click=${()=>e.ajouter=null}></div>
    <div class="feuille" role="dialog" aria-modal="true" tabindex="-1" aria-label="Ajouter">
      <div class="prise"></div>
      <h2>Que veux-tu ajouter ?</h2>
      ${t.creation?P`<div class="geste">Son nom et sa discipline suffisent.</div>`:F}
      ${t.creation?Im(e):Fm(e)}
    </div>
  `}function Fm(e){let t=e.ajouter;return P`
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
  `}function Im(e){let t=e.ajouter,n=e.bibliotheque,r=t.disciplineChoisieId??t.disciplineId??n.disciplines[0]?.id,i=n.disciplines.find(e=>e.id===r),a=(t.nomTechnique??``).trim(),o=a!==``&&(n.disciplines.length>0?r!==void 0:(t.disciplineNom??``).trim()!==``),s=r&&a?Gr(n,r,a):{exacte:null,proches:[]},c=()=>({...t.appellation?.trim()?{nomTraditionnel:t.appellation.trim()}:{},...t.familleId?{familleId:t.familleId}:{},...t.niveauxIds?.length?{niveauxIds:t.niveauxIds}:{}}),l=async()=>{let i=n.disciplines.length?r:void 0;i||=await e.creerDiscipline(t.disciplineNom.trim())??void 0,i&&(e.ajouter=null,await e.creerTechnique(i,a,c()))},u=async()=>{if(o){if(s.exacte){e.demanderConfirmation({titre:`« ${s.exacte.nom} » existe déjà dans ${i?.nom??`cette discipline`}`,corps:`Créer quand même une technique distincte ?`,bouton:`Créer quand même`,action:()=>{l()}});return}await l()}},d=t=>{e.ajouter=null,e.ouvrirFiche(t)},f=n=>{let r=t.niveauxIds??[];e.ajouter={...t,niveauxIds:r.includes(n)?r.filter(e=>e!==n):[...r,n]}},p=(i?.familles.length??0)>0||(i?.niveaux.length??0)>0;return P`
    <div style="padding:2px 0">
      <input class="champ-note champ-nouveau-nom" style="min-height:0" autofocus aria-label="Nom de la technique"
             placeholder="Nom de la technique…"
             .value=${t.nomTechnique??``}
             @input=${n=>e.ajouter={...t,nomTechnique:n.target.value}}
             @keydown=${e=>{e.key===`Enter`&&u()}}>
    </div>
    ${s.exacte||s.proches.length?P`<div class="doublons">
          ${s.exacte?P`<div class="doublon-exacte">« ${s.exacte.nom} » existe déjà dans ${i?.nom??`cette discipline`}.</div>`:P`<div>Technique similaire déjà présente :</div>`}
          <div class="chips-filtres" style="padding:6px 0 0">
            ${[...s.exacte?[s.exacte]:[],...s.proches].map(e=>P`<button class="chip-filtre" @click=${()=>d(e.id)}>Utiliser « ${e.nom} »</button>`)}
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
    ${p?t.classer?P`<div class="classer-maintenant">
            ${i.familles.length?P`<div class="section-titre" style="padding:8px 2px 2px">Famille</div>
                  <div class="chips-filtres">
                    ${i.familles.map(n=>P`<button class="chip-filtre ${t.familleId===n.id?`actif`:``}"
                        @click=${()=>e.ajouter={...t,familleId:t.familleId===n.id?void 0:n.id}}>${n.nom}</button>`)}
                  </div>`:F}
            ${i.niveaux.length?P`<div class="section-titre" style="padding:8px 2px 2px">Niveau</div>
                  <div class="chips-filtres">
                    ${i.niveaux.map(e=>P`<button class="chip-filtre ${t.niveauxIds?.includes(e.id)?`actif`:``}"
                        @click=${()=>f(e.id)}>${e.nom}</button>`)}
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
      <button class="bouton principal" ?disabled=${!o} @click=${()=>void u()}>
        ${s.exacte||s.proches.length?`Créer quand même`:`Créer la technique`}
      </button>
    </div>
  `}var Lm=class extends Ae{static properties={app:{attribute:!1},mediaId:{attribute:!1},url:{state:!0}};constructor(){super(),this.mediaId=``,this.url=void 0}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.app.stockage.urlVideo(this.mediaId).then(e=>this.url=e)}disconnectedCallback(){super.disconnectedCallback(),this.url&&URL.revokeObjectURL(this.url)}render(){return this.url===void 0?F:this.url===null?P`<div class="video-absente" style="font-size:12.5px;color:var(--sourdine)">
        Vidéo introuvable sur cet appareil.
        <button class="action-douce" style="margin-top:4px" @click=${()=>this.app.ouvrirPlusSection(`medias`)}>
          Vérifier <span>(Plus — Médias)</span>
        </button>
      </div>`:P`<div class="media-video"><video src=${this.url} controls playsinline preload="metadata"
      @play=${e=>{document.querySelectorAll(`video`).forEach(t=>{t!==e.target&&t.pause()}),this.app.mediasDeplies.size&&(this.app.mediasDeplies=new Set,this.app.requestUpdate())}}></video></div>`}};customElements.define(`movenso-video-locale`,Lm);var Rm=class extends Ae{static properties={bibliotheque:{state:!0},ecran:{state:!0},capture:{state:!0},ajoutMedia:{state:!0},ajouter:{state:!0},creationCompo:{state:!0},ajoutPas:{state:!0},editionPas:{state:!0},editionLien:{state:!0},menuComposition:{state:!0},partagePreparation:{state:!0},enregistrementMedia:{state:!0},toast:{state:!0},toastAlerte:{state:!0},confirmation:{state:!0},catalogueOfficiel:{state:!0},occupe:{state:!0},preferences:{state:!0},erreurDemarrage:{state:!0}};annulationOccupe=null;rechercheGlobale=``;pratiqueDeplie={reprendre:!1,favoris:!1};mediasDeplies=new Set;creationDiscipline=!1;filtres={disciplineId:null,niveauId:null,familleId:null,source:null,favorisSeuls:!1,texte:``};fusionDoublon=null;doublonOuvert=null;disciplineGestion=null;stockage=new ef;#e;#t=0;constructor(){super(),this.bibliotheque=null,this.ecran={type:`bibliotheques`},this.capture=null,this.ajoutMedia=null,this.ajouter=null,this.creationCompo=null,this.ajoutPas=null,this.editionPas=null,this.editionLien=null,this.menuComposition=null,this.partagePreparation=null,this.enregistrementMedia=null,this.toast=null,this.toastAlerte=!1,this.confirmation=null,this.catalogueOfficiel=null,this.occupe=null,this.preferences=Jd(),this.erreurDemarrage=null}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.#n(),document.addEventListener(`visibilitychange`,()=>{document.visibilityState===`hidden`&&(this.preferences.protections?.verrouillage??`5min`)===`arriere-plan`&&this.verrouiller(!0),this.ecran.type===`entrainement`&&(document.visibilityState===`hidden`?bl(this):Sl())}),document.addEventListener(`keydown`,e=>{if(e.key!==`Escape`)return;let t=document.querySelectorAll(`.voile`),n=t[t.length-1];n&&(e.preventDefault(),n.click())})}async#n(){window.addEventListener(`error`,e=>this.consignerEchec(`MOV-E99`,e.error??e.message)),window.addEventListener(`unhandledrejection`,e=>this.consignerEchec(`MOV-E98`,e.reason)),window.addEventListener(`wheel`,e=>{if(e.ctrlKey||e.shiftKey)return;let t=e.target?.closest?.(`.chips-filtres`);if(!(t instanceof HTMLElement)||t.scrollWidth<=t.clientWidth+1)return;let n=Math.abs(e.deltaY)>Math.abs(e.deltaX)?e.deltaY:e.deltaX;if(n===0)return;let r=t.scrollLeft;t.scrollLeft+=n,t.scrollLeft!==r&&e.preventDefault()},{passive:!1}),kd(this,!0),this.stockage.nettoyerStaging();let e;try{let t=!!navigator.storage?.getDirectory,n=typeof FileSystemFileHandle<`u`&&`createWritable`in FileSystemFileHandle.prototype;if(!t||!n){let e=window.Capacitor;throw Error(e?.isNativePlatform?.()?`Le stockage local n'est pas disponible sur cette version d'Android. Mets à jour Android System WebView (Play Store), puis rouvre Movenso.`:`Le stockage local n'est pas disponible sur ce navigateur. Movenso fonctionne sur Chrome, Edge et Firefox récents (Safari n'est pas encore supporté). Tes données d'un autre appareil restent transportables : une sauvegarde .movpack s'importe sur n'importe quel navigateur supporté.`)}e=await this.stockage.charger(),e===null&&(e=ze(),await this.stockage.sauvegarder(e))}catch(e){this.erreurDemarrage=e instanceof Error&&e.message.startsWith(`Le stockage`)?e.message:`Movenso n'a pas pu lire ses données sur cet appareil. Si tu viens d'installer une version plus ANCIENNE par-dessus une récente, réinstalle la dernière version — tes données ne sont pas perdues.`,this.requestUpdate();return}await Je(this.stockage,e),this.preferences=await this.stockage.chargerPreferences(),this.#i(),this.bibliotheque=e,this.#r(e);let{mode:t,disciplineId:n}=this.preferences.demarrage,r=t===`discipline`?n:t===`derniere`?this.preferences.derniereDisciplineId:void 0;(t===`discipline`||t===`derniere`)&&r&&e.disciplines.some(e=>e.id===r)?this.ecran={type:`discipline`,disciplineId:r}:t===`discipline`&&n?this.afficherToast(`La discipline choisie au démarrage n'existe plus — ouverture sur la Bibliothèque`):t===`compositions`&&(this.preferences.compositionsBeta??!1)?this.ecran={type:`compositions`}:t===`relations`&&this.preferences.vueRelationBeta&&this.ouvrirRelationsVisuelle(),await this.#a()}async#r(e){try{let t=await this.stockage.listerVideos(),n=jd(this,e),r=0;for(let e of t)n.has(e)||r++;r>0&&this.afficherToast(`${r} fichier${r>1?`s`:``} vidéo orphelin${r>1?`s`:``} détecté${r>1?`s`:``} — vérifie et nettoie dans Plus › Médias`)}catch{}}dernierEchec=null;operationLongue=null;consignerEchec(e,t){let n=(t instanceof Error?t.message:String(t)).slice(0,200);this.dernierEchec={quand:new Date().toISOString(),code:e,operation:Pi[e],message:n}}#i(){let e=document.documentElement,t=this.preferences.theme??`auto`;t===`auto`?delete e.dataset.theme:e.dataset.theme=t;let n=this.preferences.tonalite??`vermillon`;n===`vermillon`?delete e.dataset.tonalite:e.dataset.tonalite=n}changerApparence(e){this.preferences={...this.preferences,...e.theme===void 0?{}:{theme:e.theme},...e.tonalite===void 0?{}:{tonalite:e.tonalite}},this.#i(),this.stockage.sauvegarderPreferences(this.preferences)}changerDensite(e){if(e===null){let{densiteBibliotheque:e,...t}=this.preferences;this.preferences=t}else{let t=Math.max(1,Math.min(6,Math.round(e)));this.preferences={...this.preferences,densiteBibliotheque:t}}this.stockage.sauvegarderPreferences(this.preferences),this.requestUpdate()}definirTransition(e){this.preferences={...this.preferences,transitionSec:Math.max(0,Math.round(e))},this.stockage.sauvegarderPreferences(this.preferences),this.requestUpdate()}definirSonSeance(e){this.preferences={...this.preferences,sonSeance:e},this.stockage.sauvegarderPreferences(this.preferences),this.requestUpdate()}basculerReglage(e){this.preferences={...this.preferences,[e]:!this.preferences[e]},this.stockage.sauvegarderPreferences(this.preferences),this.requestUpdate()}changerPseudo(e){let t=e.trim().slice(0,40);this.preferences={...this.preferences,pseudo:t},this.stockage.sauvegarderPreferences(this.preferences),this.requestUpdate()}changerDemarrage(e,t){this.preferences={...this.preferences,demarrage:{mode:e,...t===void 0?{}:{disciplineId:t}}},this.stockage.sauvegarderPreferences(this.preferences)}async#a(){if(!window.Capacitor?.isNativePlatform?.())return;let{App:e}=await Oi(async()=>{let{App:e}=await import(`./esm-CfB9jJEB.js`);return{App:e}},__vite__mapDeps([4,1]),import.meta.url);await e.addListener(`backButton`,()=>{let t=this.ecran.type===`bibliotheques`||this.ecran.type===`compositions`||this.ecran.type===`plus`&&this.ecran.section===null;this.demandePin?this.annulerDemandePin():this.capture?this.reculerCapture():this.ajoutMedia?this.ajoutMedia=null:this.partagePreparation?this.partagePreparation=null:this.ajouter?this.ajouter=null:this.editionPas?this.editionPas=null:this.editionLien?this.editionLien=null:this.ajoutPas?this.ajoutPas=null:this.menuComposition?this.menuComposition=null:this.creationCompo?Zl(this):this.importEnAttente?this.annulerImport():this.rapportApresImport?this.fermerRapportImport():this.restaurationEnAttente?this.annulerRestauration():this.menuFiche?(this.menuFiche=!1,this.requestUpdate()):this.editionFiche?(this.instantaneEdition=null,this.editionFiche=!1,this.requestUpdate()):this.#o.length?this.retour():t?this.ecran.type===`bibliotheques`?e.minimizeApp():this.ouvrirBibliotheque():(this.#h(),this.ecran=this.#u(),window.scrollTo({top:0}))})}technique(e){return this.bibliotheque?.techniques.find(t=>t.id===e)}#o=[];#s={};#c(e){this.#h();let t={zone:this.zoneCourante(),ecran:this.ecran,pile:[...this.#o],defilement:window.scrollY};this.#o.push({ecran:this.ecran,defilement:window.scrollY}),this.#o.length>24&&this.#o.shift(),this.#f(),this.ecran=e,this.zoneCourante()!==t.zone&&(this.#s[t.zone]=t),window.scrollTo({top:0})}#l(e){let t=e.type===`relations`?`relations`:e.type===`compositions`?`compositions`:e.type===`plus`?`plus`:`bibliotheque`,n=this.zoneCourante();if(this.#h(),this.#f(),n===t){this.#o=[],this.ecran=e,window.scrollTo({top:0});return}this.#s[n]={ecran:this.ecran,pile:[...this.#o],defilement:window.scrollY};let r=this.#s[t];r?(this.#o=[...r.pile],this.ecran=r.ecran,this.#p(),this.updateComplete.then(()=>window.scrollTo({top:r.defilement}))):(this.#o=[],this.ecran=e,window.scrollTo({top:0}))}retour(){this.#h(),this.menuFiche=!1,this.#f();let e=this.#o.pop();e?(this.ecran=e.ecran,this.updateComplete.then(()=>window.scrollTo({top:e.defilement}))):(this.ecran=this.#u(),window.scrollTo({top:0})),this.#p()}#u(){let e=this.zoneCourante();return e===`relations`?{type:`relations`}:e===`compositions`?{type:`compositions`}:e===`plus`?{type:`plus`,section:null}:{type:`bibliotheques`}}derniereTechniqueVue=null;relationCentre=null;ouvrirFiche(e){this.editionFiche=!1,this.instantaneEdition=null,this.menuFiche=!1,this.ajoutMedia=null,this.derniereTechniqueVue=e,this.#f(),this.#c({type:`fiche`,techniqueId:e}),this.#p()}ouvrirBienvenueRelations(){rs(),this.#l({type:`relations`})}ouvrirRelationsVisuelle(e,t){e&&(this.relationCentre=e,this.preferences={...this.preferences,relationsCentreId:e},this.stockage.sauvegarderPreferences(this.preferences)),t&&(this.enregistrerVueRelations(t),as(t)),this.#l({type:`relations`})}recentrerRelations(e){this.relationCentre=e,this.preferences={...this.preferences,relationsCentreId:e},this.stockage.sauvegarderPreferences(this.preferences),this.requestUpdate()}enregistrerVueRelations(e){this.preferences={...this.preferences,relationsVue:e},this.stockage.sauvegarderPreferences(this.preferences)}techniqueCentreRelations(){let e=this.bibliotheque;if(!e||e.techniques.length===0)return null;let t=t=>!!t&&e.techniques.some(e=>e.id===t);return t(this.relationCentre)?this.relationCentre:t(this.preferences.relationsCentreId)?this.preferences.relationsCentreId:t(this.derniereTechniqueVue)?this.derniereTechniqueVue:null}#d=new Map;#f(){this.ecran.type===`fiche`&&this.#d.set(this.ecran.techniqueId,{mediaAffiche:this.mediaAffiche,voixOuverte:this.voixOuverte,relationsDepliees:this.relationsDepliees})}#p(){if(this.ecran.type!==`fiche`)return;let e=this.#d.get(this.ecran.techniqueId);this.mediaAffiche=e?.mediaAffiche??null,this.voixOuverte=e?.voixOuverte??null,this.relationsDepliees=e?.relationsDepliees??!1}#m=new Map;majFiltres(e){this.filtres=e,this.ecran.type===`discipline`&&this.#m.set(this.ecran.disciplineId,e),this.requestUpdate()}ouvrirDiscipline(e){this.filtres={disciplineId:e,niveauId:null,familleId:null,source:null,favorisSeuls:!1,texte:``},this.#c({type:`bibliotheques`}),this.preferences.derniereDisciplineId!==e&&(this.preferences={...this.preferences,derniereDisciplineId:e},this.stockage.sauvegarderPreferences(this.preferences))}ouvrirBibliotheque(){this.#l({type:`bibliotheques`})}async majNomDiscipline(e,t){return bd(this,e,t)}async ajouterTaxonomie(...e){return xd(this,...e)}async majTaxonomie(...e){return Sd(this,...e)}usagesTaxonomie(...e){return Cd(this,...e)}reordonnerTaxonomie(...e){return wd(this,...e)}async supprimerTaxonomie(...e){return Td(this,...e)}async ajouterTypeRelation(e,t){return Ed(this,e,t)}async majTypeRelation(...e){return Dd(this,...e)}async basculerSymetrieTypeRelation(e){return Od(this,e)}async redemanderPersistance(){return Ad(this)}async rattacherOrphelin(e,t){return Nd(this,e,t)}async supprimerVideoOrpheline(e){return Pd(this,e)}async supprimerOrphelinsVerifies(e){return Fd(this,e)}async restaurerSauvegarde(e){return Id(this,e)}mediasManquants=[];videosOrphelines=[];taillesVideos=new Map;infoEspace=null;sauvegardes=[];persistanceStockage=`inconnue`;ouvrirPlus(){this.#l({type:`plus`,section:null}),Md(this)}ouvrirPlusSection(e){e===`packs-officiels`&&this.catalogueOfficiel===null&&gi(this),this.doublonOuvert=null,(e===`medias`||e===`atraiter`)&&Hp(),this.zoneCourante()!==`plus`&&this.#l({type:`plus`,section:null}),this.#c({type:`plus`,section:e}),Md(this)}ouvrirCompositions(){this.#l({type:`compositions`})}ouvrirComposition(e){this.menuComposition=null,nl(),this.#c({type:`composition`,compositionId:e})}afficherToast(e,t=`neutre`){this.toast=e,this.toastAlerte=t===`alerte`,this.#t=Date.now()+3400,clearTimeout(this.#e),this.#e=setTimeout(()=>this.toast=null,3400)}demanderConfirmation(e){this.confirmation=e}#h(){clearTimeout(this.#e),this.toast=null}async occuperPendant(e,t){this.occupe=e,this.operationLongue={libelle:e,debut:new Date().toISOString(),fin:null},this.requestUpdate();try{return await t()}finally{this.occupe=null,this.operationLongue&&this.operationLongue.fin===null&&(this.operationLongue={...this.operationLongue,fin:new Date().toISOString()}),this.requestUpdate()}}willUpdate(e){super.willUpdate(e),this.toast&&Date.now()>=this.#t&&this.#h(),e.has(`ecran`)&&this.ecran.type!==`entrainement`&&(Ll(),Cl()),e.has(`ecran`)&&this.ecran.type===`entrainement`&&Sl()}#g=null;#_=!1;updated(){let e=document.querySelector(`.feuille[role="dialog"]`);if(e&&!this.#_){this.#_=!0;let t=document.activeElement;this.#g=t instanceof HTMLElement&&t!==document.body?t:null,e.contains(t)||(e.querySelector(`[autofocus]`)??e).focus()}else!e&&this.#_&&(this.#_=!1,this.#g?.isConnected&&this.#g.focus(),this.#g=null)}protections=new ff(this);demandePin=null;echecsCumules=0;journalSecurite=[];get reglagesProtections(){return this.protections.reglagesProtections}get pinConfigure(){return this.protections.pinConfigure}get sessionDeverrouillee(){return this.protections.sessionDeverrouillee}async activerProtection(e,t){return this.protections.activerProtection(e,t)}async desactiverProtection(e,t){return this.protections.desactiverProtection(e,t)}async choisirVerrouillage(e){return this.protections.choisirVerrouillage(e)}async changerPin(e,t,n){return this.protections.changerPin(e,t,n)}garde(e,t,n){return this.protections.garde(e,t,n)}autoriser(e,t,n){return this.protections.autoriser(e,t,n)}verrouiller(e=!1){return this.protections.verrouiller(e)}annulerDemandePin(){return this.protections.annulerDemandePin()}async validerDemandePin(e){return this.protections.validerDemandePin(e)}async reinitialiserTout(){await this.stockage.reinitialiser(),this.bibliotheque=ze(),await this.stockage.sauvegarder(this.bibliotheque),this.preferences=Jd(),await this.stockage.sauvegarderPreferences(this.preferences),this.protections.oublierSession(),this.journalSecurite=[],this.#i(),this.#o=[],this.#s={},this.ecran={type:`bibliotheques`},this.mediasManquants=[],this.videosOrphelines=[],this.taillesVideos=new Map,this.sauvegardes=[],this.dernierFichier=null,window.scrollTo({top:0}),this.afficherToast(`Movenso réinitialisé — bibliothèque vide, aucune protection, aucun PIN`)}choisirPackAImporter(){return Qr(this)}async importerPack(e){return $r(this,e)}async installerPackOfficiel(e){return _i(this,e)}rechargerCataloguePacks(){gi(this)}async confirmerImport(){return ei(this)}fermerRapportImport(){return ti(this)}async annulerImport(){return ni(this)}async confirmerRestauration(){return ii(this)}async annulerRestauration(){return ai(this)}importEnAttente=null;rapportApresImport=null;async changerLimiteEspace(e){return Ct(this,e)}restaurationEnAttente=null;progressionExport=null;dernierFichier=null;annulerExport(){return Wi(this)}async exporterTout(e=!0){return qi(this,e)}async exporterDiagnostic(){return ra(this)}async preparerPublication(...e){return Ji(this,...e)}async enregistrerPublicationLocale(){return Yi(this)}async partagerPublication(){return Xi(this)}fermerPublication(){return Zi(this)}publicationPrete=null;pousserNouvelleTechnique(e,t,n,r){let i=n.trim();if(!i||!e.disciplines.some(e=>e.id===t))return null;let a=it();return e.techniques.push({id:a,disciplineId:t,nom:i,...r?.nomTraditionnel?.trim()?{nomTraditionnel:r.nomTraditionnel.trim()}:{},...r?.familleId?{familleId:r.familleId}:{},niveauxIds:r?.niveauxIds??[],relations:[]}),a}async creerTechnique(e,t,n){if(!this.garde(`modification`,`Saisis le PIN pour créer une technique.`,()=>void this.creerTechnique(e,t,n)))return;let r=this.bibliotheque;if(!r)return;let i=this.pousserNouvelleTechnique(r,e,t,n);if(!i)return;let a=t.trim();await this.persister(r),this.ouvrirFiche(i),this.editionFiche=!0,this.afficherToast(`« ${a} » créée ✓ — complète-la, ou capture dessus`)}async creerDiscipline(e){if(!this.garde(`modification`,`Saisis le PIN pour créer une discipline.`,()=>void this.creerDiscipline(e)))return null;let t=this.bibliotheque,n=e.trim();if(!t||!n)return null;let r=t.disciplines.find(e=>U(e.nom)===U(n));if(r)return this.afficherToast(`« ${r.nom} » existe déjà`),r.id;let i=it();return t.disciplines.push({id:i,nom:n,familles:[],niveaux:[]}),await this.persister(t),this.afficherToast(`Discipline « ${n} » créée ✓ — capture ou importe, elle se remplira`),i}usagesTypeRelation(e){return(this.bibliotheque?.techniques??[]).reduce((t,n)=>t+n.relations.filter(t=>t.type===e).length,0)}async retirerRelation(e,t,n){if(!this.garde(`modification`,`Saisis le PIN pour retirer ce lien.`,()=>void this.retirerRelation(e,t,n)))return;let r=this.bibliotheque,i=r?.techniques.find(t=>t.id===e);!r||!i||(i.relations=i.relations.filter(e=>!(e.type===n&&e.cibleId===t)),await this.persister(r),this.afficherToast(`Lien retiré ✓`))}async arbitrerConflitLiaison(e,t){return Mu(this,e,t)}async retirerTousLesLiensProposes(e){return Pu(this,e)}ouvrirEditionLien(e,t,n,r){return Fu(this,e,t,n,r)}async ajouterRelation(e,t){return Iu(this,e,t)}async modifierRelation(e,t,n,r){return Lu(this,e,t,n,r)}async supprimerTypeRelation(e){return Ru(this,e)}async supprimerTechnique(e){return zu(this,e)}async restaurerTechnique(e){return Bu(this,e)}async supprimerDefinitivement(e){return Hu(this,e)}async viderCorbeille(){return Uu(this)}async supprimerDiscipline(e){return Wu(this,e)}reordonnerDiscipline(e,t){return Gu(this,e,t)}deplacerDisciplineVers(e,t){let n=this.bibliotheque;if(!n||e===t)return;let r=n.disciplines.findIndex(t=>t.id===e);if(r<0)return;let[i]=n.disciplines.splice(r,1),a=n.disciplines.findIndex(e=>e.id===t);n.disciplines.splice(a<0?r:a,0,i),this.requestUpdate()}deplacerTaxonomieVers(e,t,n,r){let i=this.bibliotheque,a=i?.disciplines.find(t=>t.id===e);if(!i||!a||n===r)return;let o=a[t],s=o.findIndex(e=>e.id===n);if(s<0)return;let[c]=o.splice(s,1),l=o.findIndex(e=>e.id===r);o.splice(l<0?s:l,0,c),o.forEach((e,t)=>e.ordre=t+1),this.requestUpdate()}async enregistrerReordre(){if(!this.garde(`modification`,`Saisis le PIN pour enregistrer l'ordre.`,()=>void this.enregistrerReordre()))return;let e=this.bibliotheque;e&&await this.persister(e)}async supprimerDisciplineEtContenu(e){if(!this.garde(`destruction_ou_sensible`,`Saisis le PIN pour supprimer cette discipline et son contenu.`,()=>void this.supprimerDisciplineEtContenu(e)))return;let t=this.bibliotheque,n=t?.disciplines.find(t=>t.id===e);if(!t||!n)return;await this.stockage.snapshot(`avant-suppression-discipline-${n.nom}`);let r=new Set(t.techniques.filter(t=>t.disciplineId===e).map(e=>e.id));t.techniques=t.techniques.filter(t=>t.disciplineId!==e),t.favoris=t.favoris.filter(e=>!r.has(e)),t.contributions=t.contributions.flatMap(e=>!e.techniqueId||!r.has(e.techniqueId)?[e]:e.provenance===`personnel`?[{...e,techniqueId:null}]:[]),t.disciplines=t.disciplines.filter(t=>t.id!==e),await this.persister(t),this.afficherToast(`Discipline « ${n.nom} » supprimée — tes notes sont revenues « à rattacher », point de restauration conservé`)}editionFiche=!1;instantaneEdition=null;generationCarnet=0;entrerEditionFiche(e){return Ku(this,e)}validerEditionFiche(){return qu(this)}async annulerEditionFiche(){return Ju(this)}menuFiche=!1;mediaAffiche=null;voixOuverte=null;relationsDepliees=!1;async majTechnique(e,t){if(!this.garde(`modification`,`Saisis le PIN pour enregistrer cette modification.`,()=>void this.majTechnique(e,t)))return;let n=this.bibliotheque,r=n?.techniques.find(t=>t.id===e);if(!n||!r)return;let i=structuredClone(r);t.disciplineId&&t.disciplineId!==r.disciplineId&&(delete r.familleId,r.niveauxIds=[]),Object.assign(r,t);for(let e of[`nomTraditionnel`,`familleId`,`mediaPrincipalId`])e in t&&(t[e]===void 0||t[e]===``)&&delete r[e];try{await this.persister(n)}catch(e){Object.assign(r,i),this.afficherToast(e instanceof Error?e.message:`Modification refusée`)}}async majContribution(e,t){if(!this.garde(`modification`,`Saisis le PIN pour modifier cette contribution.`,()=>void this.majContribution(e,t)))return;let n=this.bibliotheque,r=n?.contributions.find(t=>t.id===e);!n||!r||(t.trim()?r.description=t.trim():delete r.description,await this.persister(n))}async supprimerContribution(e){if(!this.garde(`destruction_ou_sensible`,`Saisis le PIN pour supprimer cette contribution.`,()=>void this.supprimerContribution(e)))return;let t=this.bibliotheque,n=t?.contributions.find(t=>t.id===e);!t||!n||(await this.stockage.snapshot(`avant-retrait-d-une-note`),t.contributions=t.contributions.filter(t=>t.id!==e),await this.persister(t),this.afficherToast(`Contribution retirée — point de restauration conservé dans les sauvegardes`))}ouvrirCreationCompo(){return ql(this)}async creerCompositionFunnel(){return Jl(this)}async poserRolesFunnel(e){return Yl(this,e)}fermerCreationCompo(){return Xl(this)}async creerComposition(e){return Ql(this,e)}async modifierComposition(e,t){return $l(this,e,t)}async dupliquerComposition(e){return eu(this,e)}async exporterComposition(e){return tu(this,e)}async partagerComposition(e,t=!0){return nu(this,e,t)}async retirerMediaPresentation(e,t){return ru(this,e,t)}async supprimerComposition(e){return iu(this,e)}demarrerEntrainement(e,t=0){wl(),this.menuComposition=null,this.#c({type:`entrainement`,compositionId:e,index:t})}estFavori(e){return rd(this,e)}async basculerFavori(e){return id(this,e)}techniquesFavorites(){return ad(this)}async demanderPartageTechnique(e){return $i(this,e)}async confirmerPartage(){return ea(this)}async partagerTechnique(e,t=!0){return ta(this,e,t)}doublonsPotentiels(){return od(this)}async rescannerDoublons(){return sd(this)}async classerDoublon(e,t,n){return cd(this,e,t,n)}async resoudreDoublonGarder(e,t){return ld(this,e,t)}async fusionnerDoublonAvec(e,t,n){return ud(this,e,t,n)}async defusionner(e){return dd(this,e)}async creerAdaptationLocale(e){return fd(this,e)}async lireMediaComplet(e){let t=[];for await(let n of this.stockage.lireMediaParBlocs(e,1<<20))t.push(n);let n=t.reduce((e,t)=>e+t.length,0),r=new Uint8Array(n),i=0;for(let e of t)r.set(e,i),i+=e.length;return r}ouvrirCapture(){return Eu(this)}async terminerCaptureRepere(){return Du(this)}ouvrirRattachement(e){return Ou(this,e)}fermerCapture(){return ku(this)}reculerCapture(){return Au(this)}async terminerCapture(...e){return ju(this,...e)}async ajouterNote(e,t){return fu(this,e,t)}async ajouterMediaFiche(...e){return pu(this,...e)}async ajouterMediaPresentation(...e){return mu(this,...e)}async amenderContribution(...e){return hu(this,...e)}async majMediaLabel(e,t){return gu(this,e,t)}async majMediaLien(e,t){return _u(this,e,t)}async definirCouvertureImage(e,t){return yu(this,e,t)}async definirCouvertureMedia(e,t){return bu(this,e,t)}async retirerCouverture(e){return xu(this,e)}async retirerMedia(e,t){return Su(this,e,t)}annulerIngestionVideo(){return Cu(this)}async persister(e){await this.stockage.sauvegarder(e),await Je(this.stockage,e),this.bibliotheque={...e}}render(){if(this.erreurDemarrage)return P`<div class="ecran erreur-demarrage" style="padding:24px 18px"><div class="carte-atelier">
        <div class="encart-entete"><span class="titre-atelier">Movenso n'a pas pu démarrer</span></div>
        <p class="details" style="line-height:1.6">${this.erreurDemarrage}</p>
        <p class="details" style="line-height:1.6; opacity:.75; font-size:12.5px">
          Navigateurs supportés : Chrome, Edge et Firefox récents — sur téléphone,
          tablette et ordinateur. Rien n'a été modifié sur cet appareil.
        </p>
      </div></div>`;if(!this.bibliotheque)return F;let e=this.ecran.type===`fiche`?ic(this,this.ecran.techniqueId):this.ecran.type===`discipline`?tc(this,this.ecran.disciplineId):this.ecran.type===`bibliotheques`?ec(this):this.ecran.type===`plus`?this.ecran.section?hm(this,this.ecran.section):bm(this):this.ecran.type===`relations`?os(this):this.ecran.type===`compositions`?el(this):this.ecran.type===`composition`?ml(this,this.ecran.compositionId):this.ecran.type===`entrainement`?yl(this,this.ecran.compositionId,this.ecran.index):ec(this),t=this.capture!==null||this.importEnAttente!==null||this.rapportApresImport!==null||this.restaurationEnAttente!==null||this.demandePin!==null||this.ajoutMedia!==null||this.ajouter!==null||this.partagePreparation!==null||this.enregistrementMedia!==null||this.ecran.type===`entrainement`;return P`
      ${e}
      ${t?F:this.#v()}
      ${t?F:this.#y()}
      ${t||this.ecran.type===`entrainement`?F:this.protections.indicateurSession()}
      ${this.importEnAttente?md(this):F}
      ${this.rapportApresImport?hd(this):F}
      ${this.restaurationEnAttente?gd(this):F}
      ${this.demandePin?this.protections.feuillePin():F}
      ${this.capture?xm(this):F}
      ${this.ajoutMedia?km(this):F}
      ${this.partagePreparation?_d(this):F}
      ${this.enregistrementMedia?vd(this):F}
      ${this.ajouter?Pm(this):F}
      ${this.creationCompo?sl(this):F}
      ${this.ajoutPas?dl(this):F}
      ${this.editionPas?fl(this):F}
      ${this.editionLien?vs(this):F}
      ${this.menuComposition?hl(this):F}
      ${this.confirmation?yd(this):F}
      ${this.toast&&this.ecran.type!==`entrainement`?P`<div class="toast ${this.toastAlerte?`alerte`:``}" role=${this.toastAlerte?`alert`:`status`}>${this.toast}</div>`:F}
      ${pd(this)}
    `}#v(){let e=e=>this.autoriser(`modification`,`Saisis le PIN pour ajouter ou capturer.`,()=>{this.ajouter=e,this.requestUpdate()}),t=(e,t)=>P`<button class="fab" @click=${t}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M12 5v14M5 12h14"/></svg>
      <span>${e}</span>
    </button>`;if(this.ecran.type===`discipline`){let n=this.ecran.disciplineId;return t(`Ajouter`,()=>e({disciplineId:n}))}return this.ecran.type===`bibliotheques`&&this.bibliotheque&&!Ve(this.bibliotheque)?t(`Ajouter`,()=>e({})):this.ecran.type===`compositions`&&this.bibliotheque?t(`Créer`,()=>this.ouvrirCreationCompo()):F}zoneCourante(){switch(this.ecran.type){case`plus`:return`plus`;case`relations`:return`relations`;case`compositions`:case`composition`:case`entrainement`:return`compositions`;default:return`bibliotheque`}}#y(){let e=this.zoneCourante(),t=(t,n,r,i)=>P`
      <button class="nav-onglet ${e===t?`actif`:``}" @click=${i}
              aria-label=${n} aria-current=${e===t?`page`:F}>
        ${r}<span>${n}</span>
      </button>`;return P`<nav class="barre-nav">
      ${t(`bibliotheque`,`Bibliothèque`,P`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 5a2 2 0 0 1 2-2h13v18H6a2 2 0 0 1-2-2Z"/><path d="M4 17.5A2.5 2.5 0 0 1 6.5 15H19"/></svg>`,()=>this.ouvrirBibliotheque())}
      ${this.preferences.vueRelationBeta?t(`relations`,`Relations`,P`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="6" r="2.4"/><circle cx="5" cy="18" r="2.4"/><circle cx="19" cy="18" r="2.4"/><path d="M12 8.4 6.6 15.8M12 8.4l5.4 7.4M7.4 18h9.2"/></svg>`,()=>this.ouvrirRelationsVisuelle()):F}
      ${this.preferences.compositionsBeta?t(`compositions`,`Compositions`,P`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="5" rx="1.5"/><rect x="4" y="12" width="16" height="5" rx="1.5"/></svg>`,()=>this.ouvrirCompositions()):F}
      ${t(`plus`,`Plus`,P`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="5" cy="12" r="1.6"/><circle cx="12" cy="12" r="1.6"/><circle cx="19" cy="12" r="1.6"/></svg>`,()=>this.ouvrirPlus())}
    </nav>`}};customElements.define(`movenso-app`,Rm);export{Oi as t};