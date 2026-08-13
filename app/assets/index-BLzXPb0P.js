const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./esm-DoVs6Nl1.js","./dist-sZ8V2geg.js","./esm-DPan9_Gj.js","./esm-2KWAG5BN.js","./esm-BHDM9dlt.js"])))=>i.map(i=>d[i]);
(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=globalThis,t=e.ShadowRoot&&(e.ShadyCSS===void 0||e.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,n=Symbol(),r=new WeakMap,i=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,n=this.t;if(t&&e===void 0){let t=n!==void 0&&n.length===1;t&&(e=r.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&r.set(n,e))}return e}toString(){return this.cssText}},a=e=>new i(typeof e==`string`?e:e+``,void 0,n),o=(n,r)=>{if(t)n.adoptedStyleSheets=r.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let t of r){let r=document.createElement(`style`),i=e.litNonce;i!==void 0&&r.setAttribute(`nonce`,i),r.textContent=t.cssText,n.appendChild(r)}},s=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return a(t)})(e):e,{is:c,defineProperty:l,getOwnPropertyDescriptor:u,getOwnPropertyNames:d,getOwnPropertySymbols:f,getPrototypeOf:p}=Object,m=globalThis,h=m.trustedTypes,g=h?h.emptyScript:``,_=m.reactiveElementPolyfillSupport,v=(e,t)=>e,y={toAttribute(e,t){switch(t){case Boolean:e=e?g:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},b=(e,t)=>!c(e,t),x={attribute:!0,type:String,converter:y,reflect:!1,useDefault:!1,hasChanged:b};Symbol.metadata??=Symbol(`metadata`),m.litPropertyMetadata??=new WeakMap;var S=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=x){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&l(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=u(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??x}static _$Ei(){if(this.hasOwnProperty(v(`elementProperties`)))return;let e=p(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(v(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v(`properties`))){let e=this.properties,t=[...d(e),...f(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(s(e))}else e!==void 0&&t.push(s(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return o(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?y:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?y:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??b)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};S.elementStyles=[],S.shadowRootOptions={mode:`open`},S[v(`elementProperties`)]=new Map,S[v(`finalized`)]=new Map,_?.({ReactiveElement:S}),(m.reactiveElementVersions??=[]).push(`2.1.2`);var C=globalThis,w=e=>e,T=C.trustedTypes,E=T?T.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,D=`$lit$`,O=`lit$${Math.random().toFixed(9).slice(2)}$`,ee=`?`+O,te=`<${ee}>`,k=document,A=()=>k.createComment(``),j=e=>e===null||typeof e!=`object`&&typeof e!=`function`,ne=Array.isArray,re=e=>ne(e)||typeof e?.[Symbol.iterator]==`function`,ie=`[ 	
\f\r]`,ae=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,oe=/-->/g,se=/>/g,ce=RegExp(`>|${ie}(?:([^\\s"'>=/]+)(${ie}*=${ie}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),M=/'/g,le=/"/g,ue=/^(?:script|style|textarea|title)$/i,de=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),N=de(1),fe=de(2),pe=Symbol.for(`lit-noChange`),P=Symbol.for(`lit-nothing`),me=new WeakMap,he=k.createTreeWalker(k,129);function ge(e,t){if(!ne(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return E===void 0?t:E.createHTML(t)}var _e=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=ae;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===ae?c[1]===`!--`?o=oe:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=ce):(ue.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=ce):o=se:o===ce?c[0]===`>`?(o=i??ae,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?ce:c[3]===`"`?le:M):o===le||o===M?o=ce:o===oe||o===se?o=ae:(o=ce,i=void 0);let d=o===ce&&e[t+1].startsWith(`/>`)?` `:``;a+=o===ae?n+te:l>=0?(r.push(s),n.slice(0,l)+D+n.slice(l)+O+d):n+O+(l===-2?t:d)}return[ge(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]},ve=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=_e(t,n);if(this.el=e.createElement(l,r),he.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=he.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(D)){let t=u[o++],n=i.getAttribute(e).split(O),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?Ce:r[1]===`?`?we:r[1]===`@`?Te:Se}),i.removeAttribute(e)}else e.startsWith(O)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(ue.test(i.tagName)){let e=i.textContent.split(O),t=e.length-1;if(t>0){i.textContent=T?T.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],A()),he.nextNode(),c.push({type:2,index:++a});i.append(e[t],A())}}}else if(i.nodeType===8)if(i.data===ee)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(O,e+1))!==-1;)c.push({type:7,index:a}),e+=O.length-1}a++}}static createElement(e,t){let n=k.createElement(`template`);return n.innerHTML=e,n}};function ye(e,t,n=e,r){if(t===pe)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=j(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=ye(e,i._$AS(e,t.values),i,r)),t}var be=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??k).importNode(t,!0);he.currentNode=r;let i=he.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new xe(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new Ee(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=he.nextNode(),a++)}return he.currentNode=k,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},xe=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=P,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=ye(this,e,t),j(e)?e===P||e==null||e===``?(this._$AH!==P&&this._$AR(),this._$AH=P):e!==this._$AH&&e!==pe&&this._(e):e._$litType$===void 0?e.nodeType===void 0?re(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==P&&j(this._$AH)?this._$AA.nextSibling.data=e:this.T(k.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=ve.createElement(ge(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new be(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=me.get(e.strings);return t===void 0&&me.set(e.strings,t=new ve(e)),t}k(t){ne(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(A()),this.O(A()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=w(e).nextSibling;w(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Se=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=P,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=P}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=ye(this,e,t,0),a=!j(e)||e!==this._$AH&&e!==pe,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=ye(this,r[n+o],t,o),s===pe&&(s=this._$AH[o]),a||=!j(s)||s!==this._$AH[o],s===P?e=P:e!==P&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===P?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},Ce=class extends Se{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===P?void 0:e}},we=class extends Se{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==P)}},Te=class extends Se{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=ye(this,e,t,0)??P)===pe)return;let n=this._$AH,r=e===P&&n!==P||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==P&&(n===P||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Ee=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){ye(this,e)}},De={M:D,P:O,A:ee,C:1,L:_e,R:be,D:re,V:ye,I:xe,H:Se,N:we,U:Te,B:Ce,F:Ee},Oe=C.litHtmlPolyfillSupport;Oe?.(ve,xe),(C.litHtmlVersions??=[]).push(`3.3.3`);var ke=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new xe(t.insertBefore(A(),e),e,void 0,n??{})}return i._$AI(e),i},Ae=globalThis,je=class extends S{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ke(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return pe}};je._$litElement$=!0,je.finalized=!0,Ae.litElementHydrateSupport?.({LitElement:je});var Me=Ae.litElementPolyfillSupport;Me?.({LitElement:je}),(Ae.litElementVersions??=[]).push(`4.2.2`);var Ne=[`referentiel`,`enseignement`,`ressource`,`personnel`],Pe=[{id:`prepare`,libelle:`Prépare`,libelleInverse:`Préparée par`,role:`before`},{id:`enchaine`,libelle:`Enchaîne vers`,libelleInverse:`Enchaînée depuis`,role:`after`},{id:`contre`,libelle:`Contre`,libelleInverse:`Contrée par`,role:`opposition`},{id:`similaire`,libelle:`Similaire à`,symetrique:!0,role:`peer`}],Fe=[`local`,`lien`,`plateforme`],Ie=[`youtube`];function F(e){return e.origine?.pack??`local`}var Le=[`camera`,`fichier`,`import`],Re=[`technique`,`etape`,`transition`,`consigne`,`objectif`,`duree`,`media`,`repere`,`pause`],ze=[`simultane`,`reaction`,`puis`];function Be(){return{versionSchema:6,typesRelation:Pe.map(e=>({...e})),disciplines:[],techniques:[],contributions:[],compositions:[],favoris:[],doublonsIgnores:[],images:[]}}function Ve(e){let t=new Map,n=new Map(e.techniques.map(e=>[e.id,e.nom])),r=(e,n)=>{let r=t.get(e.id);r?r.references.push(n):t.set(e.id,{media:e,references:[n]})};for(let t of e.contributions)for(let e of t.medias)r(e,{ou:`contribution`,conteneurId:t.id,techniqueId:t.techniqueId,nom:t.techniqueId?n.get(t.techniqueId)??`?`:`capture à rattacher`});for(let t of e.compositions)for(let e of t.blocs)for(let n of e.medias)r(n,{ou:`bloc`,conteneurId:t.id,techniqueId:null,nom:`composition « ${t.nom} »`});for(let n of e.techniques){if(!n.mediaPrincipalId)continue;let e=t.get(n.mediaPrincipalId);e&&e.references.push({ou:`media-principal`,conteneurId:n.id,techniqueId:n.id,nom:n.nom})}return t}function He(e){let t=new Set;for(let[n,r]of Ve(e))r.media.type===`local`&&t.add(n);for(let n of e.corbeille??[])for(let e of n.contributions)for(let n of e.medias)n.type===`local`&&t.add(n.id);return t}var Ue={"video/webm":`webm`,"video/mp4":`mp4`,"video/quicktime":`mov`,"video/x-matroska":`mkv`,"video/3gpp":`3gp`,"video/ogg":`ogv`,"video/x-msvideo":`avi`};function We(e,t){let n=Ue[e?.split(`;`)[0]?.trim().toLowerCase()??``];if(n)return n;let r=t?.match(/\.([a-z0-9]{1,5})$/i)?.[1];return r?r.toLowerCase():void 0}function Ge(e,t,n){if(n){for(let{media:r}of Ve(e).values())if(r.type===`local`&&r.sha256===n&&r.taille===t)return r}}var Ke=new Map;async function qe(e,t){let n=new Set((t.images??[]).map(e=>e.id));for(let[e,t]of[...Ke])n.has(e)||(URL.revokeObjectURL(t),Ke.delete(e));for(let t of n){if(Ke.has(t))continue;let n=await e.lireImage(t);n&&Ke.set(t,URL.createObjectURL(n))}}function Je(e){return Ke.get(e)??null}var Ye=`0123456789ABCDEFGHJKMNPQRSTVWXYZ`,Xe=10,Ze=16,Qe=-1,$e=[];function et(e){let t=``;for(let n=Xe-1;n>=0;n--)t=Ye[e%32]+t,e=Math.floor(e/32);return t}function tt(){let e=new Uint8Array(Ze);return globalThis.crypto.getRandomValues(e),Array.from(e,e=>e%32)}function nt(e){let t=e.slice();for(let e=t.length-1;e>=0;e--){let n=t[e]??0;if(n<31)return t[e]=n+1,t;t[e]=0}return t}function rt(e=Date.now()){let t;return e===Qe?t=nt($e):(t=tt(),Qe=e),$e=t,et(e)+t.map(e=>Ye[e]).join(``)}var it=/^[0-9A-HJKMNP-TV-Z]{26}$/;function at(e){return it.test(e)}var ot=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),st=(e,t)=>e>>>t|e<<32-t,ct=class{#e=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]);#t=new Uint8Array(64);#n=0;#r=0;#i=new Uint32Array(64);#a=!1;update(e){if(this.#a)throw Error(`Sha256 : digest() déjà appelé`);this.#r+=e.length;let t=0;if(this.#n>0){for(;t<e.length&&this.#n<64;)this.#t[this.#n++]=e[t++];this.#n===64&&(this.#o(this.#t,0),this.#n=0)}for(;t+64<=e.length;t+=64)this.#o(e,t);for(;t<e.length;)this.#t[this.#n++]=e[t++];return this}digestHex(){if(this.#a)throw Error(`Sha256 : digest() déjà appelé`);this.#a=!0;let e=this.#r*8,t=this.#n,n=new Uint8Array(t<56?64:128);n.set(this.#t.subarray(0,t)),n[t]=128;let r=new DataView(n.buffer);r.setUint32(n.length-8,Math.floor(e/4294967296)),r.setUint32(n.length-4,e>>>0);for(let e=0;e<n.length;e+=64)this.#o(n,e);let i=``;for(let e=0;e<8;e++)i+=this.#e[e].toString(16).padStart(8,`0`);return i}#o(e,t){let n=this.#i;for(let r=0;r<16;r++){let i=t+r*4;n[r]=(e[i]<<24|e[i+1]<<16|e[i+2]<<8|e[i+3])>>>0}for(let e=16;e<64;e++){let t=st(n[e-15],7)^st(n[e-15],18)^n[e-15]>>>3,r=st(n[e-2],17)^st(n[e-2],19)^n[e-2]>>>10;n[e]=n[e-16]+t+n[e-7]+r>>>0}let[r,i,a,o,s,c,l,u]=this.#e;for(let e=0;e<64;e++){let t=st(s,6)^st(s,11)^st(s,25),d=s&c^~s&l,f=u+t+d+ot[e]+n[e]>>>0,p=(st(r,2)^st(r,13)^st(r,22))+(r&i^r&a^i&a)>>>0;u=l,l=c,c=s,s=o+f>>>0,o=a,a=i,i=r,r=f+p>>>0}let d=this.#e;d[0]=d[0]+r>>>0,d[1]=d[1]+i>>>0,d[2]=d[2]+a>>>0,d[3]=d[3]+o>>>0,d[4]=d[4]+s>>>0,d[5]=d[5]+c>>>0,d[6]=d[6]+l>>>0,d[7]=d[7]+u>>>0}};function lt(e){return new ct().update(e).digestHex()}var ut=class extends Error{constructor(){super(`Ajout annulé`),this.name=`AnnulationIngestion`}};async function dt(e,t){if(typeof e.stream!=`function`){let t=await e.arrayBuffer(),n=await crypto.subtle.digest(`SHA-256`,t);return[...new Uint8Array(n)].map(e=>e.toString(16).padStart(2,`0`)).join(``)}let n=new ct,r=e.stream().getReader();for(;;){if(t?.())throw await r.cancel(),new ut;let{done:e,value:i}=await r.read();if(e)break;i&&n.update(i)}return n.digestHex()}function ft(e){return e.size===0?`Fichier vide — rien à enregistrer`:e.type&&!e.type.toLowerCase().startsWith(`video/`)?`Ce fichier n'est pas une vidéo — seules les vidéos s'ajoutent ici`:null}async function pt(e,t,n,r){let i=await dt(t,r),a=Ge(e,t.size,i);if(a)return{media:{...a},dejaPresent:!0};let o=rt(),s=We(t.type,t.name);return{media:{id:o,type:`local`,ref:`videos/${o}`,sha256:i,taille:t.size,ajouteLe:new Date().toISOString(),origineMedia:n,...t.type?{mime:t.type}:{},...s?{extension:s}:{},...t.name?{nomOriginal:t.name}:{}},dejaPresent:!1}}function mt(e){return Math.max(16e6,Math.round(e*.1))}function ht(e,t){if(t===null)return{suffisant:!0,fiable:!1,requis:e,disponible:null};let n=Math.max(0,t.quota-t.usage);return{suffisant:e+mt(e)<=n,fiable:!0,requis:e,disponible:n}}function gt(e){return e>=1e9?`${(e/1e9).toFixed(1)} Go`:e>=1e6?`${(e/1e6).toFixed(1)} Mo`:`${Math.max(1,Math.round(e/1e3))} Ko`}function _t(e,t,n){let r=ht(t,n);return r.suffisant?!0:(vt(e,r),!1)}function vt(e,t){e.afficherToast(`Espace insuffisant : ${gt(t.requis)} à écrire, environ ${gt(t.disponible??0)} disponibles — libère de l'espace d'abord, rien n'a été écrit`,`alerte`)}function yt(e){return e.reduce((e,t)=>e+t.taille,0)}function bt(e){let t=e.preferences.limiteEspaceMo??5e3;return t<=0?null:t*1e6}async function xt(e){let t=await e.stockage.estimerEspace();if(t===null)return null;let n=bt(e);return n===null?t:{usage:t.usage,quota:Math.min(t.quota,n)}}async function St(e,t){let n=t<=0?0:Math.max(200,Math.round(t));e.preferences={...e.preferences,limiteEspaceMo:n},e.stockage.sauvegarderPreferences(e.preferences),e.requestUpdate()}async function Ct(e,t){let n=ht(t.size,await xt(e));return n.suffisant?!1:(vt(e,n),!0)}var I=Uint8Array,wt=Uint16Array,Tt=Int32Array,Et=new I([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Dt=new I([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Ot=new I([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),kt=function(e,t){for(var n=new wt(31),r=0;r<31;++r)n[r]=t+=1<<e[r-1];for(var i=new Tt(n[30]),r=1;r<30;++r)for(var a=n[r];a<n[r+1];++a)i[a]=a-n[r]<<5|r;return{b:n,r:i}},At=kt(Et,2),jt=At.b,Mt=At.r;jt[28]=258,Mt[258]=28;for(var Nt=kt(Dt,0),Pt=Nt.b,Ft=Nt.r,It=new wt(32768),L=0;L<32768;++L){var Lt=(L&43690)>>1|(L&21845)<<1;Lt=(Lt&52428)>>2|(Lt&13107)<<2,Lt=(Lt&61680)>>4|(Lt&3855)<<4,It[L]=((Lt&65280)>>8|(Lt&255)<<8)>>1}for(var Rt=(function(e,t,n){for(var r=e.length,i=0,a=new wt(t);i<r;++i)e[i]&&++a[e[i]-1];var o=new wt(t);for(i=1;i<t;++i)o[i]=o[i-1]+a[i-1]<<1;var s;if(n){s=new wt(1<<t);var c=15-t;for(i=0;i<r;++i)if(e[i])for(var l=i<<4|e[i],u=t-e[i],d=o[e[i]-1]++<<u,f=d|(1<<u)-1;d<=f;++d)s[It[d]>>c]=l}else for(s=new wt(r),i=0;i<r;++i)e[i]&&(s[i]=It[o[e[i]-1]++]>>15-e[i]);return s}),zt=new I(288),L=0;L<144;++L)zt[L]=8;for(var L=144;L<256;++L)zt[L]=9;for(var L=256;L<280;++L)zt[L]=7;for(var L=280;L<288;++L)zt[L]=8;for(var Bt=new I(32),L=0;L<32;++L)Bt[L]=5;var Vt=Rt(zt,9,0),Ht=Rt(zt,9,1),Ut=Rt(Bt,5,0),Wt=Rt(Bt,5,1),Gt=function(e){for(var t=e[0],n=1;n<e.length;++n)e[n]>t&&(t=e[n]);return t},Kt=function(e,t,n){var r=t/8|0;return(e[r]|e[r+1]<<8)>>(t&7)&n},qt=function(e,t){var n=t/8|0;return(e[n]|e[n+1]<<8|e[n+2]<<16)>>(t&7)},Jt=function(e){return(e+7)/8|0},Yt=function(e,t,n){return(t==null||t<0)&&(t=0),(n==null||n>e.length)&&(n=e.length),new I(e.subarray(t,n))},Xt=[`unexpected EOF`,`invalid block type`,`invalid length/literal`,`invalid distance`,`stream finished`,`no stream handler`,,`no callback`,`invalid UTF-8 data`,`extra field too long`,`date not in range 1980-2099`,`filename too long`,`stream finishing`,`invalid zip data`],R=function(e,t,n){var r=Error(t||Xt[e]);if(r.code=e,Error.captureStackTrace&&Error.captureStackTrace(r,R),!n)throw r;return r},Zt=function(e,t,n,r){var i=e.length,a=r?r.length:0;if(!i||t.f&&!t.l)return n||new I(0);var o=!n,s=o||t.i!=2,c=t.i;o&&(n=new I(i*3));var l=function(e){var t=n.length;if(e>t){var r=new I(Math.max(t*2,e));r.set(n),n=r}},u=t.f||0,d=t.p||0,f=t.b||0,p=t.l,m=t.d,h=t.m,g=t.n,_=i*8;do{if(!p){u=Kt(e,d,1);var v=Kt(e,d+1,3);if(d+=3,!v){var y=Jt(d)+4,b=e[y-4]|e[y-3]<<8,x=y+b;if(x>i){c&&R(0);break}s&&l(f+b),n.set(e.subarray(y,x),f),t.b=f+=b,t.p=d=x*8,t.f=u;continue}else if(v==1)p=Ht,m=Wt,h=9,g=5;else if(v==2){var S=Kt(e,d,31)+257,C=Kt(e,d+10,15)+4,w=S+Kt(e,d+5,31)+1;d+=14;for(var T=new I(w),E=new I(19),D=0;D<C;++D)E[Ot[D]]=Kt(e,d+D*3,7);d+=C*3;for(var O=Gt(E),ee=(1<<O)-1,te=Rt(E,O,1),D=0;D<w;){var k=te[Kt(e,d,ee)];d+=k&15;var y=k>>4;if(y<16)T[D++]=y;else{var A=0,j=0;for(y==16?(j=3+Kt(e,d,3),d+=2,A=T[D-1]):y==17?(j=3+Kt(e,d,7),d+=3):y==18&&(j=11+Kt(e,d,127),d+=7);j--;)T[D++]=A}}var ne=T.subarray(0,S),re=T.subarray(S);h=Gt(ne),g=Gt(re),p=Rt(ne,h,1),m=Rt(re,g,1)}else R(1);if(d>_){c&&R(0);break}}s&&l(f+131072);for(var ie=(1<<h)-1,ae=(1<<g)-1,oe=d;;oe=d){var A=p[qt(e,d)&ie],se=A>>4;if(d+=A&15,d>_){c&&R(0);break}if(A||R(2),se<256)n[f++]=se;else if(se==256){oe=d,p=null;break}else{var ce=se-254;if(se>264){var D=se-257,M=Et[D];ce=Kt(e,d,(1<<M)-1)+jt[D],d+=M}var le=m[qt(e,d)&ae],ue=le>>4;le||R(3),d+=le&15;var re=Pt[ue];if(ue>3){var M=Dt[ue];re+=qt(e,d)&(1<<M)-1,d+=M}if(d>_){c&&R(0);break}s&&l(f+131072);var de=f+ce;if(f<re){var N=a-re,fe=Math.min(re,de);for(N+f<0&&R(3);f<fe;++f)n[f]=r[N+f]}for(;f<de;++f)n[f]=n[f-re]}}t.l=p,t.p=oe,t.b=f,t.f=u,p&&(u=1,t.m=h,t.d=m,t.n=g)}while(!u);return f!=n.length&&o?Yt(n,0,f):n.subarray(0,f)},Qt=function(e,t,n){n<<=t&7;var r=t/8|0;e[r]|=n,e[r+1]|=n>>8},$t=function(e,t,n){n<<=t&7;var r=t/8|0;e[r]|=n,e[r+1]|=n>>8,e[r+2]|=n>>16},en=function(e,t){for(var n=[],r=0;r<e.length;++r)e[r]&&n.push({s:r,f:e[r]});var i=n.length,a=n.slice();if(!i)return{t:cn,l:0};if(i==1){var o=new I(n[0].s+1);return o[n[0].s]=1,{t:o,l:1}}n.sort(function(e,t){return e.f-t.f}),n.push({s:-1,f:25001});var s=n[0],c=n[1],l=0,u=1,d=2;for(n[0]={s:-1,f:s.f+c.f,l:s,r:c};u!=i-1;)s=n[n[l].f<n[d].f?l++:d++],c=n[l!=u&&n[l].f<n[d].f?l++:d++],n[u++]={s:-1,f:s.f+c.f,l:s,r:c};for(var f=a[0].s,r=1;r<i;++r)a[r].s>f&&(f=a[r].s);var p=new wt(f+1),m=tn(n[u-1],p,0);if(m>t){var r=0,h=0,g=m-t,_=1<<g;for(a.sort(function(e,t){return p[t.s]-p[e.s]||e.f-t.f});r<i;++r){var v=a[r].s;if(p[v]>t)h+=_-(1<<m-p[v]),p[v]=t;else break}for(h>>=g;h>0;){var y=a[r].s;p[y]<t?h-=1<<t-p[y]++-1:++r}for(;r>=0&&h;--r){var b=a[r].s;p[b]==t&&(--p[b],++h)}m=t}return{t:new I(p),l:m}},tn=function(e,t,n){return e.s==-1?Math.max(tn(e.l,t,n+1),tn(e.r,t,n+1)):t[e.s]=n},nn=function(e){for(var t=e.length;t&&!e[--t];);for(var n=new wt(++t),r=0,i=e[0],a=1,o=function(e){n[r++]=e},s=1;s<=t;++s)if(e[s]==i&&s!=t)++a;else{if(!i&&a>2){for(;a>138;a-=138)o(32754);a>2&&(o(a>10?a-11<<5|28690:a-3<<5|12305),a=0)}else if(a>3){for(o(i),--a;a>6;a-=6)o(8304);a>2&&(o(a-3<<5|8208),a=0)}for(;a--;)o(i);a=1,i=e[s]}return{c:n.subarray(0,r),n:t}},rn=function(e,t){for(var n=0,r=0;r<t.length;++r)n+=e[r]*t[r];return n},an=function(e,t,n){var r=n.length,i=Jt(t+2);e[i]=r&255,e[i+1]=r>>8,e[i+2]=e[i]^255,e[i+3]=e[i+1]^255;for(var a=0;a<r;++a)e[i+a+4]=n[a];return(i+4+r)*8},on=function(e,t,n,r,i,a,o,s,c,l,u){Qt(t,u++,n),++i[256];for(var d=en(i,15),f=d.t,p=d.l,m=en(a,15),h=m.t,g=m.l,_=nn(f),v=_.c,y=_.n,b=nn(h),x=b.c,S=b.n,C=new wt(19),w=0;w<v.length;++w)++C[v[w]&31];for(var w=0;w<x.length;++w)++C[x[w]&31];for(var T=en(C,7),E=T.t,D=T.l,O=19;O>4&&!E[Ot[O-1]];--O);var ee=l+5<<3,te=rn(i,zt)+rn(a,Bt)+o,k=rn(i,f)+rn(a,h)+o+14+3*O+rn(C,E)+2*C[16]+3*C[17]+7*C[18];if(c>=0&&ee<=te&&ee<=k)return an(t,u,e.subarray(c,c+l));var A,j,ne,re;if(Qt(t,u,1+(k<te)),u+=2,k<te){A=Rt(f,p,0),j=f,ne=Rt(h,g,0),re=h;var ie=Rt(E,D,0);Qt(t,u,y-257),Qt(t,u+5,S-1),Qt(t,u+10,O-4),u+=14;for(var w=0;w<O;++w)Qt(t,u+3*w,E[Ot[w]]);u+=3*O;for(var ae=[v,x],oe=0;oe<2;++oe)for(var se=ae[oe],w=0;w<se.length;++w){var ce=se[w]&31;Qt(t,u,ie[ce]),u+=E[ce],ce>15&&(Qt(t,u,se[w]>>5&127),u+=se[w]>>12)}}else A=Vt,j=zt,ne=Ut,re=Bt;for(var w=0;w<s;++w){var M=r[w];if(M>255){var ce=M>>18&31;$t(t,u,A[ce+257]),u+=j[ce+257],ce>7&&(Qt(t,u,M>>23&31),u+=Et[ce]);var le=M&31;$t(t,u,ne[le]),u+=re[le],le>3&&($t(t,u,M>>5&8191),u+=Dt[le])}else $t(t,u,A[M]),u+=j[M]}return $t(t,u,A[256]),u+j[256]},sn=new Tt([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),cn=new I(0),ln=function(e,t,n,r,i,a){var o=a.z||e.length,s=new I(r+o+5*(1+Math.ceil(o/7e3))+i),c=s.subarray(r,s.length-i),l=a.l,u=(a.r||0)&7;if(t){u&&(c[0]=a.r>>3);for(var d=sn[t-1],f=d>>13,p=d&8191,m=(1<<n)-1,h=a.p||new wt(32768),g=a.h||new wt(m+1),_=Math.ceil(n/3),v=2*_,y=function(t){return(e[t]^e[t+1]<<_^e[t+2]<<v)&m},b=new Tt(25e3),x=new wt(288),S=new wt(32),C=0,w=0,T=a.i||0,E=0,D=a.w||0,O=0;T+2<o;++T){var ee=y(T),te=T&32767,k=g[ee];if(h[te]=k,g[ee]=te,D<=T){var A=o-T;if((C>7e3||E>24576)&&(A>423||!l)){u=on(e,c,0,b,x,S,w,E,O,T-O,u),E=C=w=0,O=T;for(var j=0;j<286;++j)x[j]=0;for(var j=0;j<30;++j)S[j]=0}var ne=2,re=0,ie=p,ae=te-k&32767;if(A>2&&ee==y(T-ae))for(var oe=Math.min(f,A)-1,se=Math.min(32767,T),ce=Math.min(258,A);ae<=se&&--ie&&te!=k;){if(e[T+ne]==e[T+ne-ae]){for(var M=0;M<ce&&e[T+M]==e[T+M-ae];++M);if(M>ne){if(ne=M,re=ae,M>oe)break;for(var le=Math.min(ae,M-2),ue=0,j=0;j<le;++j){var de=T-ae+j&32767,N=de-h[de]&32767;N>ue&&(ue=N,k=de)}}}te=k,k=h[te],ae+=te-k&32767}if(re){b[E++]=268435456|Mt[ne]<<18|Ft[re];var fe=Mt[ne]&31,pe=Ft[re]&31;w+=Et[fe]+Dt[pe],++x[257+fe],++S[pe],D=T+ne,++C}else b[E++]=e[T],++x[e[T]]}}for(T=Math.max(T,D);T<o;++T)b[E++]=e[T],++x[e[T]];u=on(e,c,l,b,x,S,w,E,O,T-O,u),l||(a.r=u&7|c[u/8|0]<<3,u-=7,a.h=g,a.p=h,a.i=T,a.w=D)}else{for(var T=a.w||0;T<o+l;T+=65535){var P=T+65535;P>=o&&(c[u/8|0]=l,P=o),u=an(c,u+1,e.subarray(T,P))}a.i=o}return Yt(s,0,r+Jt(u)+i)},un=(function(){for(var e=new Int32Array(256),t=0;t<256;++t){for(var n=t,r=9;--r;)n=(n&1&&-306674912)^n>>>1;e[t]=n}return e})(),dn=function(){var e=-1;return{p:function(t){for(var n=e,r=0;r<t.length;++r)n=un[n&255^t[r]]^n>>>8;e=n},d:function(){return~e}}},fn=function(e,t,n,r,i){if(!i&&(i={l:1},t.dictionary)){var a=t.dictionary.subarray(-32768),o=new I(a.length+e.length);o.set(a),o.set(e,a.length),e=o,i.w=a.length}return ln(e,t.level==null?6:t.level,t.mem==null?i.l?Math.ceil(Math.max(8,Math.min(13,Math.log(e.length)))*1.5):20:12+t.mem,n,r,i)},pn=function(e,t){var n={};for(var r in e)n[r]=e[r];for(var r in t)n[r]=t[r];return n},mn=function(e,t){return e[t]|e[t+1]<<8},hn=function(e,t){return(e[t]|e[t+1]<<8|e[t+2]<<16|e[t+3]<<24)>>>0},gn=function(e,t){return hn(e,t)+hn(e,t+4)*4294967296},z=function(e,t,n){for(;n;++t)e[t]=n,n>>>=8},_n=function(){function e(e,t){if(typeof e==`function`&&(t=e,e={}),this.ondata=t,this.o=e||{},this.s={l:0,i:32768,w:32768,z:32768},this.b=new I(98304),this.o.dictionary){var n=this.o.dictionary.subarray(-32768);this.b.set(n,32768-n.length),this.s.i=32768-n.length}}return e.prototype.p=function(e,t){this.ondata(fn(e,this.o,0,0,this.s),t)},e.prototype.push=function(e,t){this.ondata||R(5),this.s.l&&R(4);var n=e.length+this.s.z;if(n>this.b.length){if(n>2*this.b.length-32768){var r=new I(n&-32768);r.set(this.b.subarray(0,this.s.z)),this.b=r}var i=this.b.length-this.s.z;this.b.set(e.subarray(0,i),this.s.z),this.s.z=this.b.length,this.p(this.b,!1),this.b.set(this.b.subarray(-32768)),this.b.set(e.subarray(i),32768),this.s.z=e.length-i+32768,this.s.i=32766,this.s.w=32768}else this.b.set(e,this.s.z),this.s.z+=e.length;this.s.l=t&1,(this.s.z>this.s.w+8191||t)&&(this.p(this.b,t||!1),this.s.w=this.s.i,this.s.i-=2),t&&(this.s=this.o={},this.b=cn)},e.prototype.flush=function(e){if(this.ondata||R(5),this.s.l&&R(4),this.p(this.b,!1),this.s.w=this.s.i,this.s.i-=2,e){var t=new I(6);t[0]=this.s.r>>3;var n=an(t,this.s.r,cn);this.s.r=0,this.ondata(t.subarray(0,n>>3),!1)}},e}(),vn=function(){function e(e,t){typeof e==`function`&&(t=e,e={}),this.ondata=t;var n=e&&e.dictionary&&e.dictionary.subarray(-32768);this.s={i:0,b:n?n.length:0},this.o=new I(32768),this.p=new I(0),n&&this.o.set(n)}return e.prototype.e=function(e){if(this.ondata||R(5),this.d&&R(4),!this.p.length)this.p=e;else if(e.length){var t=new I(this.p.length+e.length);t.set(this.p),t.set(e,this.p.length),this.p=t}},e.prototype.c=function(e){this.s.i=+(this.d=e||!1);var t=this.s.b,n=Zt(this.p,this.s,this.o);this.ondata(Yt(n,t,this.s.b),this.d),this.o=Yt(n,this.s.b-32768),this.s.b=this.o.length,this.p=Yt(this.p,this.s.p/8|0),this.s.p&=7},e.prototype.push=function(e,t){this.e(e),this.c(t)},e}(),yn=typeof TextEncoder<`u`&&new TextEncoder,bn=typeof TextDecoder<`u`&&new TextDecoder;try{bn.decode(cn,{stream:!0})}catch{}var xn=function(e){for(var t=``,n=0;;){var r=e[n++],i=(r>127)+(r>223)+(r>239);if(n+i>e.length)return{s:t,r:Yt(e,n-1)};i?i==3?(r=((r&15)<<18|(e[n++]&63)<<12|(e[n++]&63)<<6|e[n++]&63)-65536,t+=String.fromCharCode(55296|r>>10,56320|r&1023)):i&1?t+=String.fromCharCode((r&31)<<6|e[n++]&63):t+=String.fromCharCode((r&15)<<12|(e[n++]&63)<<6|e[n++]&63):t+=String.fromCharCode(r)}};function Sn(e,t){if(t){for(var n=new I(e.length),r=0;r<e.length;++r)n[r]=e.charCodeAt(r);return n}if(yn)return yn.encode(e);for(var i=e.length,a=new I(e.length+(e.length>>1)),o=0,s=function(e){a[o++]=e},r=0;r<i;++r){if(o+5>a.length){var c=new I(o+8+(i-r<<1));c.set(a),a=c}var l=e.charCodeAt(r);l<128||t?s(l):l<2048?(s(192|l>>6),s(128|l&63)):l>55295&&l<57344?(l=65536+(l&1047552)|e.charCodeAt(++r)&1023,s(240|l>>18),s(128|l>>12&63),s(128|l>>6&63),s(128|l&63)):(s(224|l>>12),s(128|l>>6&63),s(128|l&63))}return Yt(a,0,o)}function Cn(e,t){if(t){for(var n=``,r=0;r<e.length;r+=16384)n+=String.fromCharCode.apply(null,e.subarray(r,r+16384));return n}else if(bn)return bn.decode(e);else{var i=xn(e),a=i.s,n=i.r;return n.length&&R(8),a}}var wn=function(e){return e==1?3:e<6?2:+(e==9)},Tn=function(e,t,n,r,i,a,o){var s=i==4294967295,c=a==4294967295,l=o==4294967295,u=t+n,d=s+c+l;if(r&&d){for(;t+4<u;t+=4+mn(e,t+2))if(mn(e,t)==1)return[s?gn(e,t+4+8*c):i,c?gn(e,t+4):a,l?gn(e,t+4+8*(c+s)):o,1];r<2&&R(13)}return[i,a,o,0]},En=function(e){var t=0;if(e)for(var n in e){var r=e[n].length;r>65535&&R(9),t+=r+4}return t},Dn=function(e,t,n,r,i,a,o,s){var c=r.length,l=n.extra,u=s&&s.length,d=En(l);z(e,t,o==null?67324752:33639248),t+=4,o!=null&&(e[t++]=20,e[t++]=n.os),e[t]=20,t+=2,e[t++]=n.flag<<1|(a<0&&8),e[t++]=i&&8,e[t++]=n.compression&255,e[t++]=n.compression>>8;var f=new Date(n.mtime==null?Date.now():n.mtime),p=f.getFullYear()-1980;if((p<0||p>119)&&R(10),z(e,t,p<<25|f.getMonth()+1<<21|f.getDate()<<16|f.getHours()<<11|f.getMinutes()<<5|f.getSeconds()>>1),t+=4,a!=-1&&(z(e,t,n.crc),z(e,t+4,a<0?-a-2:a),z(e,t+8,n.size)),z(e,t+12,c),z(e,t+14,d),t+=16,o!=null&&(z(e,t,u),z(e,t+6,n.attrs),z(e,t+10,o),t+=14),e.set(r,t),t+=c,d)for(var m in l){var h=l[m],g=h.length;z(e,t,+m),z(e,t+2,g),e.set(h,t+4),t+=4+g}return u&&(e.set(s,t),t+=u),t},On=function(e,t,n,r,i){z(e,t,101010256),z(e,t+8,n),z(e,t+10,n),z(e,t+12,r),z(e,t+16,i)},kn=function(){function e(e){this.filename=e,this.c=dn(),this.size=0,this.compression=0}return e.prototype.process=function(e,t){this.ondata(null,e,t)},e.prototype.push=function(e,t){this.ondata||R(5),this.c.p(e),this.size+=e.length,t&&(this.crc=this.c.d()),this.process(e,t||!1)},e}(),An=function(){function e(e,t){var n=this;t||={},kn.call(this,e),this.d=new _n(t,function(e,t){n.ondata(null,e,t)}),this.compression=8,this.flag=wn(t.level)}return e.prototype.process=function(e,t){try{this.d.push(e,t)}catch(e){this.ondata(e,null,t)}},e.prototype.push=function(e,t){kn.prototype.push.call(this,e,t)},e}(),jn=function(){function e(e){this.ondata=e,this.u=[],this.d=1}return e.prototype.add=function(e){var t=this;if(this.ondata||R(5),this.d&2)this.ondata(R(4+(this.d&1)*8,0,1),null,!1);else{var n=Sn(e.filename),r=n.length,i=e.comment,a=i&&Sn(i),o=r!=e.filename.length||a&&i.length!=a.length,s=r+En(e.extra)+30;r>65535&&this.ondata(R(11,0,1),null,!1);var c=new I(s);Dn(c,0,e,n,o,-1);var l=[c],u=function(){for(var e=0,n=l;e<n.length;e++){var r=n[e];t.ondata(null,r,!1)}l=[]},d=this.d;this.d=0;var f=this.u.length,p=pn(e,{f:n,u:o,o:a,t:function(){e.terminate&&e.terminate()},r:function(){if(u(),d){var e=t.u[f+1];e?e.r():t.d=1}d=1}}),m=0;e.ondata=function(n,r,i){if(n)t.ondata(n,r,i),t.terminate();else if(m+=r.length,l.push(r),i){var a=new I(16);z(a,0,134695760),z(a,4,e.crc),z(a,8,m),z(a,12,e.size),l.push(a),p.c=m,p.b=s+m+16,p.crc=e.crc,p.size=e.size,d&&p.r(),d=1}else d&&u()},this.u.push(p)}},e.prototype.end=function(){var e=this;if(this.d&2){this.ondata(R(4+(this.d&1)*8,0,1),null,!0);return}this.d?this.e():this.u.push({r:function(){e.d&1&&(e.u.splice(-1,1),e.e())},t:function(){}}),this.d=3},e.prototype.e=function(){for(var e=0,t=0,n=0,r=0,i=this.u;r<i.length;r++){var a=i[r];n+=46+a.f.length+En(a.extra)+(a.o?a.o.length:0)}for(var o=new I(n+22),s=0,c=this.u;s<c.length;s++){var a=c[s];Dn(o,e,a,a.f,a.u,-a.c-2,t,a.o),e+=46+a.f.length+En(a.extra)+(a.o?a.o.length:0),t+=a.b}On(o,e,this.u.length,n,t),this.ondata(null,o,!0),this.d=2},e.prototype.terminate=function(){for(var e=0,t=this.u;e<t.length;e++)t[e].t();this.d=2},e}(),Mn=function(){function e(){}return e.prototype.push=function(e,t){this.ondata(null,e,t)},e.compression=0,e}(),Nn=function(){function e(){var e=this;this.i=new vn(function(t,n){e.ondata(null,t,n)})}return e.prototype.push=function(e,t){try{this.i.push(e,t)}catch(e){this.ondata(e,null,t)}},e.compression=8,e}(),Pn=function(){function e(e){this.onfile=e,this.k=[],this.o={0:Mn},this.p=cn}return e.prototype.push=function(e,t){var n=this;if(this.onfile||R(5),this.p||R(4),this.c>0){var r=Math.min(this.c,e.length),i=e.subarray(0,r);if(this.c-=r,this.d?this.d.push(i,!this.c):this.k[0].push(i),e=e.subarray(r),e.length)return this.push(e,t)}else{var a=0,o=0,s=void 0,c=void 0;this.p.length?e.length?(c=new I(this.p.length+e.length),c.set(this.p),c.set(e,this.p.length)):c=this.p:c=e;for(var l=c.length,u=this.c,d=u&&this.d,f=function(){var e=hn(c,o);if(e==67324752){a=1,s=o,p.d=null,p.c=0;var t=mn(c,o+6),r=mn(c,o+8),i=t&2048,d=t&8,f=mn(c,o+26),m=mn(c,o+28);if(l>o+30+f+m){var h=[];p.k.unshift(h),a=2;var g=hn(c,o+18),_=hn(c,o+22),v=Cn(c.subarray(o+30,o+=30+f),!i),y=Tn(c,o,m,2,g,_,0),b=y[0],x=y[1],S=y[3];d&&(b=-1-S),o+=m,p.c=b;var C,w={name:v,compression:r,start:function(){if(w.ondata||R(5),!b)w.ondata(null,cn,!0);else{var e=n.o[r];e||w.ondata(R(14,`unknown compression type `+r,1),null,!1),C=b<0?new e(v):new e(v,b,x),C.ondata=function(e,t,n){w.ondata(e,t,n)};for(var t=0,i=h;t<i.length;t++){var a=i[t];C.push(a,!1)}n.k[0]==h&&n.c?n.d=C:C.push(cn,!0)}},terminate:function(){C&&C.terminate&&C.terminate()}};b>=0&&(w.size=b,w.originalSize=x),p.onfile(w)}return`break`}else if(u){if(e==134695760)return s=o+=12+(u==-2&&8),a=3,p.c=0,`break`;if(e==33639248)return s=o-=4,a=3,p.c=0,`break`}},p=this;o<l-4&&f()!==`break`;++o);if(this.p=cn,u<0){var m=a?c.subarray(0,s-12-(u==-2&&8)-(hn(c,s-16)==134695760&&4)):c.subarray(0,o);d?d.push(m,!!a):this.k[+(a==2)].push(m)}if(a&2)return this.push(c.subarray(o),t);this.p=c.subarray(o)}t&&(this.c&&R(13),this.p=null)},e.prototype.register=function(e){this.o[e.compression]=e},e}(),B=class extends Error{constructor(e){super(e),this.name=`ErreurMovpack`}};function Fn(e){return e.length>3&&e[0]===80&&e[1]===75}function In(e){return(e.startsWith(`medias/`)||e.startsWith(`videos/`))&&e.length>7}function Ln(e){return/^images\/[0-9a-f]{64}$/.test(e)}function Rn(e,t){let n=e.slice(7),r=lt(t);if(r!==n)throw new B(`Image falsifiée : ${e} contient des octets d'empreinte ${r.slice(0,12)}… — le nom d'une image EST son contenu, il ne peut pas désigner autre chose`)}function zn(e,t){let n=(e.images??[]).filter(e=>!t.has(e.id));if(n.length)throw new B(`Conteneur incomplet : ${n.length} image(s) déclarée(s) dont les octets n'ont pas été fournis (première : ${n[0].id.slice(0,12)}…)`)}function Bn(e){let t=e.slice(e.indexOf(`/`)+1),n=t.indexOf(`.`);return n===-1?t:t.slice(0,n)}var Vn=[`complet`,`discipline`,`composition`];function Hn(e){return typeof e==`string`}function Un(e){let t=e=>{throw new B(`Manifeste invalide : ${e}`)};(typeof e!=`object`||!e||Array.isArray(e))&&t(`un objet est attendu`);let n=e;if(n.format!==`movpack`)throw new B(`Manifeste inconnu : pas un .movpack`);(typeof n.version!=`number`||!Number.isInteger(n.version)||n.version<1)&&t(`version de conteneur « ${String(n.version)} » invalide`),(!Hn(n.id)||n.id.trim()===``)&&t(`identité du pack manquante — c'est la clé qui distingue une mise à jour d'une installation neuve`),(!Hn(n.nom)||n.nom.trim()===``)&&t(`nom manquant`),(!Hn(n.portee)||!Vn.includes(n.portee))&&t(`portée « ${String(n.portee)} » inconnue (${Vn.join(`, `)}) — c'est elle qui décide entre importer un pack et REMPLACER la bibliothèque`),(!Hn(n.creeLe)||Number.isNaN(Date.parse(n.creeLe)))&&t(`date de création « ${String(n.creeLe)} » illisible`),(typeof n.versionSchema!=`number`||!Number.isInteger(n.versionSchema))&&t(`version de schéma « ${String(n.versionSchema)} » invalide`),Hn(n.empreinte)||t(`empreinte manquante`),(!Array.isArray(n.videos)||n.videos.some(e=>!Hn(e)))&&t(`« videos » : une liste d'identifiants est attendue`);for(let[e,r]of[[`auteur`,n.auteur],[`conditions`,n.conditions],[`algorithme`,n.algorithme]])r!==void 0&&!Hn(r)&&t(`« ${e} » : texte attendu`);if(n.versionEditoriale!==void 0&&(typeof n.versionEditoriale!=`number`||!Number.isInteger(n.versionEditoriale)||n.versionEditoriale<1)&&t(`version éditoriale « ${String(n.versionEditoriale)} » invalide`),n.inclusions!==void 0){let e=n.inclusions;(typeof e!=`object`||!e||typeof e.medias!=`boolean`||typeof e.contenuPersonnel!=`boolean`)&&t(`« inclusions » : { medias: booléen, contenuPersonnel: booléen } attendu — c'est ce que le conteneur DIT emporter`)}return n.fichiers!==void 0&&!Array.isArray(n.fichiers)&&t(`« fichiers » : une liste est attendue`),n}function Wn(e){let t=Array.isArray(e.fichiers)&&e.fichiers.length>0;if(e.version>=4){if(!t)throw new B(`Conteneur v4 incomplet : l'inventaire d'intégrité « fichiers » est obligatoire à partir de la version 4 — un conteneur ne choisit pas la rigueur qu'on lui applique`);if(e.algorithme!==void 0&&e.algorithme!==`SHA-256`)throw new B(`Algorithme d'intégrité « ${e.algorithme} » non supporté (SHA-256 attendu)`);for(let[t,n]of e.fichiers.entries()){let e=`Inventaire, entrée ${t+1}`;if(!n||typeof n!=`object`)throw new B(`${e} : objet attendu`);if(typeof n.chemin!=`string`||n.chemin.trim()===``)throw new B(`${e} : chemin manquant`);if(!Number.isInteger(n.taille)||n.taille<0)throw new B(`${e} (${n.chemin}) : taille invalide`);if(typeof n.sha256!=`string`||!/^[0-9a-f]{64}$/.test(n.sha256))throw new B(`${e} (${n.chemin}) : empreinte SHA-256 mal formée`)}return e.fichiers}if(t)return e.fichiers;if(typeof e.empreinte!=`string`||!/^[0-9a-f]{64}$/.test(e.empreinte))throw new B(`Manifeste incomplet : empreinte de bibliotheque.json manquante ou mal formée`);return null}var Gn={octetsPetitFichier:64e6,entreesMax:4096,octetsTotal:8e9,octetsImage:4e6,octetsImagesTotal:32e6},Kn=new Set([`webm`,`mp4`,`mov`,`mkv`,`3gp`,`ogv`,`avi`]);function qn(e){return e.length>=2&&e[0]===77&&e[1]===90?`exécutable Windows (MZ)`:e.length>=4&&e[0]===127&&e[1]===69&&e[2]===76&&e[3]===70?`exécutable ELF`:e.length>=2&&e[0]===35&&e[1]===33?`script exécutable (#!)`:null}function Jn(e){return!e||e.length>512||/[\u0000-\u001f\\]/.test(e)||e.startsWith(`/`)||/^[a-z]:/i.test(e)?!1:e.split(`/`).every(e=>e.length>0&&e!==`.`&&e!==`..`)}var Yn={1:e=>({...e,versionSchema:2,typesRelation:Pe.map(e=>({...e})),compositions:[]}),2:e=>({...e,versionSchema:3,favoris:[]}),3:e=>({...e,versionSchema:4,typesRelation:$n(e.typesRelation)}),4:e=>({...e,versionSchema:5,...Qn(e)}),5:(e,t)=>({...e,...Zn(e,t),versionSchema:6})},Xn=/^data:([a-z]+\/[a-z0-9.+-]+);base64,/i;function Zn(e,t){let n=new Map,r=new Map,i=e=>{let i=r.get(e);if(i!==void 0)return i;let a=Xn.exec(e),o=null;if(a)try{let r=atob(e.slice(a[0].length)),i=new Uint8Array(r.length);for(let e=0;e<r.length;e++)i[e]=r.charCodeAt(e);if(o=lt(i),!n.has(o)){let e={id:o,mime:a[1].toLowerCase(),taille:i.length};n.set(o,e),t.push({...e,octets:i})}}catch{o=null}return r.set(e,o),o},a=e=>{if(Array.isArray(e))return e.map(a);if(!e||typeof e!=`object`)return e;let t=e;if(t.type===`image`&&typeof t.dataUrl==`string`){let e=i(t.dataUrl);return e===null?void 0:{type:`fichier`,imageId:e}}let n={};for(let[e,r]of Object.entries(t)){let t=a(r);t!==void 0&&(n[e]=t)}return n},o=a(e),s=Array.isArray(e.images)?e.images:[],c=new Map(s.filter(e=>e&&typeof e.id==`string`).map(e=>[e.id,e]));for(let[e,t]of n)c.has(e)||c.set(e,t);return{...o,images:[...c.values()]}}function Qn(e){let t=e.disciplines,n=e.techniques;if(!Array.isArray(t)||!Array.isArray(n))return{};let r=e=>typeof e==`object`&&!!e&&!Array.isArray(e),i=e=>{let t=e.couverture;return r(t)&&t.type===`image`&&typeof t.dataUrl==`string`?t.dataUrl:null},a=new Map;for(let e of n){if(!r(e))continue;let t=e.familleId,n=i(e);if(typeof t!=`string`||!n)continue;a.has(t)||a.set(t,new Map);let o=a.get(t);o.set(n,(o.get(n)??0)+1)}let o=new Map;for(let[e,t]of a){let n=null,r=1;for(let[e,i]of t)i>r&&(r=i,n=e);n&&o.set(e,n)}return o.size===0?{}:{disciplines:t.map(e=>!r(e)||!Array.isArray(e.familles)?e:{...e,familles:e.familles.map(e=>{if(!r(e)||typeof e.id!=`string`)return e;let t=o.get(e.id);return!t||e.couverture!==void 0?e:{...e,couverture:{type:`image`,dataUrl:t}}})}),techniques:n.map(e=>{if(!r(e))return e;let t=e.familleId,n=i(e);if(typeof t!=`string`||!n||o.get(t)!==n)return e;let{couverture:a,...s}=e;return s})}}function $n(e){if(!Array.isArray(e))return e;let t=new Map(Pe.map(e=>[e.id,e]));return e.map(e=>{if(!e||typeof e!=`object`||Array.isArray(e))return e;let n=e,r=t.get(n.id);return!r||n.role!==void 0?e:r.ordre===void 0?{...n,role:r.role}:{...n,role:r.role,ordre:r.ordre}})}var er=class extends Error{constructor(e){super(e),this.name=`ErreurMigration`}};function tr(e,t=6){let n=[];return{bibliotheque:rr(e,t,n),imagesDetachees:n}}function nr(e,t=6){return rr(e,t,[])}function rr(e,t,n){if(typeof e!=`object`||!e)throw new er(`Données illisibles : la bibliothèque n'est pas un objet`);let r=e,i=r.versionSchema;if(typeof i!=`number`||!Number.isInteger(i)||i<1)throw new er(`Version de schéma absente ou invalide : ${String(i)}`);let a=i;if(a>t)throw new er(`Bibliothèque en version ${a}, plus récente que l'application (${t}) — mettre à jour l'application plutôt que risquer une perte`);for(;a<t;){let e=Yn[a];if(!e)throw new er(`Aucune migration enregistrée depuis la version ${a}`);r=e(r,n);let t=r.versionSchema;if(typeof t!=`number`||t!==a+1)throw new er(`La migration ${a} → ${a+1} n'a pas incrémenté la version`);a=t}return r}var ir=class extends Error{constructor(e){super(e),this.name=`ErreurValidation`}};function V(e,t){if(!e)throw new ir(t)}function ar(e){return typeof e==`object`&&!!e&&!Array.isArray(e)}function or(e,t){V(Array.isArray(e),`${t} : un tableau est attendu`)}function sr(e,t){V(typeof e==`string`&&e.trim()!==``,`${t} : texte non vide attendu`)}function cr(e,t){e!==void 0&&V(typeof e==`string`,`${t} : texte attendu`)}function lr(e,t,n=0){e!==void 0&&V(typeof e==`number`&&Number.isInteger(e)&&e>=n,`${t} : entier ≥ ${n} attendu, reçu « ${String(e)} »`)}function ur(e,t,n){e!==void 0&&V(typeof e==`string`&&t.includes(e),`${n} : valeur « ${String(e)} » inconnue (${t.join(`, `)})`)}var dr=[`info`,`warning`,`danger`];function fr(e,t){if(e!==void 0){or(e,`${t}, alertes`);for(let[n,r]of e.entries()){let e=`${t}, alerte ${n+1}`;if(V(ar(r),`${e} : objet attendu`),sr(r.type,`${e}, type`),sr(r.libelle,`${e}, libellé`),V(typeof r.niveau==`string`&&dr.includes(r.niveau),`${e} : niveau « ${String(r.niveau)} » inconnu (${dr.join(`, `)})`),cr(r.icone,`${e}, icône`),cr(r.detail,`${e}, détail`),r.bloquante!==void 0&&V(typeof r.bloquante==`boolean`,`${e} : « bloquante » booléen attendu`),r.reference!==void 0){V(ar(r.reference),`${e}, référence : objet attendu`);for(let t of[`organisation`,`article`,`url`,`verifieLe`])cr(r.reference[t],`${e}, référence ${t}`)}}}}function pr(e){return typeof e==`string`&&/^[0-9a-f]{64}$/.test(e)}function mr(e,t){e!==void 0&&(V(ar(e),`${t}, couverture : objet attendu`),e.type===`fichier`?V(pr(e.imageId),`${t}, couverture : image « ${String(e.imageId)} » mal formée (empreinte SHA-256 attendue)`):e.type===`media`?V(at(e.mediaId),`${t}, couverture : média « ${String(e.mediaId)} » mal formé`):V(!1,`${t}, couverture : type « ${String(e.type)} » inconnu (fichier, media)`))}function hr(e,t){if(e===void 0)return;or(e,t);let n=new Set;for(let r of e){V(ar(r),`${t} : objet attendu`);let e=r;V(pr(e.id),`${t} : identité « ${String(e.id)} » mal formée (empreinte SHA-256 attendue)`),V(!n.has(e.id),`${t} : l'image « ${String(e.id)} » est déclarée deux fois`),n.add(e.id),V(typeof e.mime==`string`&&e.mime.startsWith(`image/`),`${t} « ${String(e.id)} » : MIME d'image attendu, reçu « ${String(e.mime)} »`),V(typeof e.taille==`number`&&Number.isInteger(e.taille)&&e.taille>0,`${t} « ${String(e.id)} » : taille en octets attendue`)}}function gr(e,t){e!==void 0&&(V(ar(e),`${t}, origine : objet attendu ({ pack, element })`),sr(e.pack,`${t}, origine.pack`),sr(e.element,`${t}, origine.element`))}function _r(e,t){let n=new Set;for(let r of e)V(at(r),`${t} : id « ${r} » n'est pas un ULID valide`),V(!n.has(r),`${t} : id « ${r} » en double`),n.add(r)}function vr(e){return e===``||e.startsWith(`/`)||e.includes(`\\`)||/^[a-zA-Z]:/.test(e)?!1:!e.split(`/`).some(e=>e===`..`||e===``)}function yr(e){let t=new Set;for(let n of e)V(n.id.trim()!==``,`Type de relation : id vide`),V(!t.has(n.id),`Type de relation « ${n.id} » en double`),t.add(n.id),V(n.libelle.trim()!==``,`Type de relation « ${n.id} » : libellé vide`),V(n.symetrique===!0||(n.libelleInverse??``).trim()!==``,`Type de relation « ${n.id} » : un type orienté déclare son libellé inverse (ou sa symétrie)`)}function br(e){sr(e.nom,`Discipline ${e.id}, nom`),or(e.familles,`Discipline « ${e.nom} », familles`);for(let t of e.familles)mr(t.couverture,`Discipline « ${e.nom} », famille « ${t.nom} »`);or(e.niveaux,`Discipline « ${e.nom} », niveaux`);let t=[...e.familles.map(e=>e.id),...e.niveaux.map(e=>e.id)],n=new Set;for(let r of t)V(r.trim()!==``,`Discipline « ${e.nom} » : id de taxonomie vide`),V(!n.has(r),`Discipline « ${e.nom} » : id de taxonomie « ${r} » en double`),n.add(r)}function xr(e,t,n){sr(e.nom,`Technique ${e.id}, nom`);let r=t.get(e.disciplineId);V(r!==void 0,`Technique « ${e.nom} » : discipline ${e.disciplineId} inconnue`),cr(e.nomTraditionnel,`Technique « ${e.nom} », appellation`),or(e.niveauxIds,`Technique « ${e.nom} », niveaux`),or(e.relations,`Technique « ${e.nom} », relations`),fr(e.alertes,`Technique « ${e.nom} »`),mr(e.couverture,`Technique « ${e.nom} »`),gr(e.origine,`Technique « ${e.nom} »`),e.familleId!==void 0&&V(r.familles.some(t=>t.id===e.familleId),`Technique « ${e.nom} » : famille « ${e.familleId} » absente de la discipline « ${r.nom} »`);for(let t of e.niveauxIds)V(r.niveaux.some(e=>e.id===t),`Technique « ${e.nom} » : niveau « ${t} » absent de la discipline « ${r.nom} »`);for(let t of e.relations)V(ar(t),`Technique « ${e.nom} » : relation — objet attendu`),V(n.has(t.type),`Technique « ${e.nom} » : type de relation « ${t.type} » non déclaré`),V(at(t.cibleId),`Technique « ${e.nom} » : cible de relation « ${t.cibleId} » mal formée`),cr(t.note,`Technique « ${e.nom} », note de relation`),lr(t.priorite,`Technique « ${e.nom} », priorité de relation`,1);e.mediaPrincipalId!==void 0&&V(at(e.mediaPrincipalId),`Technique « ${e.nom} » : média principal « ${e.mediaPrincipalId} » mal formé`)}function Sr(e,t){_r(e.map(e=>e.id),`${t}, médias`);for(let t of e)V(Fe.includes(t.type),`Média ${t.id} : type « ${t.type} » inconnu`),V(t.ref.trim()!==``,`Média ${t.id} : référence vide`),t.type===`local`&&V(vr(t.ref),`Média ${t.id} : chemin local « ${t.ref} » non relatif ou dangereux`),t.type===`plateforme`&&V(t.service!==void 0&&Ie.includes(t.service),`Média ${t.id} : un média de plateforme déclare son service (${Ie.join(`, `)})`),cr(t.label,`Média ${t.id}, libellé`),cr(t.mime,`Média ${t.id}, MIME`),cr(t.nomOriginal,`Média ${t.id}, nom d'origine`),cr(t.ajouteLe,`Média ${t.id}, date d'ajout`),lr(t.taille,`Média ${t.id}, taille`),ur(t.origineMedia,Le,`Média ${t.id}, origine`),t.extension!==void 0&&V(typeof t.extension==`string`&&/^[a-z0-9]{1,5}$/i.test(t.extension),`Média ${t.id} : extension « ${String(t.extension)} » mal formée — elle compose le nom du fichier`),t.sha256!==void 0&&V(pr(t.sha256),`Média ${t.id} : empreinte « ${String(t.sha256)} » mal formée`)}function Cr(e){if(e===void 0)return;or(e,`Bibliothèque, typesAlerte`);let t=new Set;for(let[n,r]of e.entries()){let e=`Bibliothèque, type d'alerte ${n+1}`;V(ar(r),`${e} : objet attendu`),sr(r.id,`${e}, id`),V(!t.has(r.id),`${e} : id « ${String(r.id)} » en double`),t.add(r.id),sr(r.libelle,`${e}, libellé`),V(typeof r.niveau==`string`&&dr.includes(r.niveau),`${e} : niveau « ${String(r.niveau)} » inconnu (${dr.join(`, `)})`),cr(r.icone,`${e}, icône`)}}function wr(e){if(e!==void 0){or(e,`Bibliothèque, conflitsLiaisons`);for(let[t,n]of e.entries()){let e=`Bibliothèque, conflit de liaison ${t+1}`;V(ar(n),`${e} : objet attendu`);for(let t of[`pack`,`sourceId`,`cibleId`,`type`,`detecteLe`])sr(n[t],`${e}, ${t}`);ur(n.sens,[`contenu`,`retrait`],`${e}, sens`),cr(n.note,`${e}, note`),lr(n.priorite,`${e}, priorité`,1)}}}function Tr(e){if(e===void 0)return;or(e,`Bibliothèque, editionsPacks`);let t=new Set;for(let[n,r]of e.entries()){let e=`Bibliothèque, édition de pack ${n+1}`;V(ar(r),`${e} : objet attendu`),sr(r.pack,`${e}, pack`),V(!t.has(r.pack),`${e} : le pack « ${String(r.pack)} » a deux éditions — une seule entrée par pack`),t.add(r.pack),V(typeof r.versionEditoriale==`number`&&Number.isInteger(r.versionEditoriale)&&r.versionEditoriale>=1,`${e} : versionEditoriale entière ≥ 1 attendue`),sr(r.majLe,`${e}, majLe`)}}function Er(e){if(e!==void 0){or(e,`Bibliothèque, conflitsContributions`);for(let[t,n]of e.entries()){let e=`Bibliothèque, conflit de contribution ${t+1}`;V(ar(n),`${e} : objet attendu`);for(let t of[`pack`,`element`,`contributionId`,`detecteLe`])sr(n[t],`${e}, ${t}`);or(n.pointsCles,`${e}, pointsCles`);for(let t of n.pointsCles)V(typeof t==`string`,`${e} : point clé texte attendu`);cr(n.description,`${e}, description`),cr(n.variantes,`${e}, variantes`),cr(n.attribution,`${e}, attribution`)}}}function Dr(e,t,n){V(Ne.includes(e),`${n} : provenance « ${e} » inconnue`),(e===`referentiel`||e===`ressource`)&&V((t??``).trim()!==``,`${n} : une provenance « ${e} » exige une attribution (savoir sourcé)`)}function Or(e,t){Dr(e.provenance,e.attribution,`Contribution ${e.id}`),or(e.pointsCles,`Contribution ${e.id}, points clés`),or(e.medias,`Contribution ${e.id}, médias`),cr(e.description,`Contribution ${e.id}, description`),gr(e.origine,`Contribution ${e.id}`),e.techniqueId!==null&&V(t.has(e.techniqueId),`Contribution ${e.id} : technique ${e.techniqueId} inconnue`),V(!Number.isNaN(Date.parse(e.creeLe)),`Contribution ${e.id} : date « ${e.creeLe} » invalide`),Sr(e.medias,`Contribution ${e.id}`)}function kr(e){if(sr(e.nom,`Composition ${e.id}, nom`),or(e.blocs,`Composition « ${e.nom} », blocs`),gr(e.origine,`Composition « ${e.nom} »`),Dr(e.provenance,e.attribution,`Composition « ${e.nom} »`),V(!Number.isNaN(Date.parse(e.creeLe)),`Composition « ${e.nom} » : date « ${e.creeLe} » invalide`),_r(e.blocs.map(e=>e.id),`Composition « ${e.nom} », blocs`),e.acteurs?.length){let t=new Set;for(let n of e.acteurs)V(n.id.trim()!==``,`Composition « ${e.nom} » : un acteur porte un identifiant`),V(!t.has(n.id),`Composition « ${e.nom} » : acteur « ${n.id} » en double`),t.add(n.id),V(n.nom.trim()!==``,`Composition « ${e.nom} » : un acteur porte un nom`)}for(let t of e.blocs)V(Re.includes(t.type),`Composition « ${e.nom} » : bloc de type « ${t.type} » inconnu`),t.lien!==void 0&&V(typeof t.lien==`boolean`||ze.includes(t.lien),`Composition « ${e.nom} » : lien « ${String(t.lien)} » inconnu`),t.type===`technique`?V(t.techniqueId!==void 0&&at(t.techniqueId),`Composition « ${e.nom} » : un bloc technique référence une identité`):V((t.texte??``).trim()!==``||t.medias.length>0||t.dureeSec!==void 0,`Composition « ${e.nom} » : un bloc « ${t.type} » porte un texte, un média ou une durée`),t.dureeSec!==void 0&&V(Number.isFinite(t.dureeSec)&&t.dureeSec>=0,`Composition « ${e.nom} » : durée « ${t.dureeSec} » invalide`),Sr(t.medias,`Composition « ${e.nom} », bloc ${t.id}`);e.presentation&&Sr(e.presentation.medias,`Composition « ${e.nom} », présentation`)}function Ar(e){V(e.versionSchema===6,`Version de schéma ${e.versionSchema} inattendue (courante : 6) — passer par les migrations avant validation`);for(let[t,n]of[[`typesRelation`,e.typesRelation],[`disciplines`,e.disciplines],[`techniques`,e.techniques],[`contributions`,e.contributions],[`compositions`,e.compositions],[`favoris`,e.favoris]])or(n,`Bibliothèque, ${t}`);yr(e.typesRelation),Cr(e.typesAlerte),wr(e.conflitsLiaisons),Er(e.conflitsContributions),Tr(e.editionsPacks),_r(e.disciplines.map(e=>e.id),`Disciplines`),_r(e.techniques.map(e=>e.id),`Techniques`),_r(e.contributions.map(e=>e.id),`Contributions`),_r(e.compositions.map(e=>e.id),`Compositions`);let t=new Map(e.disciplines.map(e=>[e.id,e])),n=new Set(e.techniques.map(e=>e.id)),r=new Set(e.typesRelation.map(e=>e.id));e.disciplines.forEach(br),e.techniques.forEach(e=>xr(e,t,r)),e.contributions.forEach(e=>Or(e,n)),e.compositions.forEach(kr),hr(e.images,`Bibliothèque, images`);let i=new Set((e.images??[]).map(e=>e.id)),a=(e,t)=>{e?.type===`fichier`&&V(i.has(e.imageId),`${t} : l'image « ${e.imageId} » n'est déclarée nulle part dans l'inventaire`)};for(let t of e.disciplines)for(let e of t.familles)a(e.couverture,`Discipline « ${t.nom} », famille « ${e.nom} »`);for(let t of e.techniques)a(t.couverture,`Technique « ${t.nom} »`);for(let t of e.corbeille??[])a(t.technique?.couverture,`Corbeille, « ${t.technique?.nom} »`);_r(e.favoris,`Favoris`);for(let t of e.favoris)V(at(t),`Favori « ${t} » mal formé`)}function H(e){return e.toLowerCase().normalize(`NFD`).replace(/[̀-ͯ]/g,``).replace(/[\s\-'’]/g,``)}function jr(e,t,n=20){let r=H(t);if(r===``)return[];let i=new Map;for(let t of e.contributions)t.provenance!==`personnel`||!t.techniqueId||!t.description||i.set(t.techniqueId,(i.get(t.techniqueId)??``)+` `+H(t.description));let a=new Map,o=[];for(let t of e.techniques){let e=H(t.nom),n=H(t.nomTraditionnel??``),s=null;e.startsWith(r)?s=0:e.includes(r)?s=1:n!==``&&n.includes(r)?s=2:i.get(t.id)?.includes(r)&&(s=3),s!==null&&(a.set(t.id,s),o.push(t))}return o.sort((e,t)=>a.get(e.id)-a.get(t.id)||e.nom.localeCompare(t.nom,`fr`)).slice(0,n)}function Mr(e,t){let n=e.get(t)?.media.extension;return n?`medias/${t}.${n}`:`medias/${t}`}function Nr(e,t,n,r,i,a,o){return{format:`movpack`,version:5,id:t.id,nom:t.nom,portee:t.portee,...t.auteur?{auteur:t.auteur}:{},...t.conditions?{conditions:t.conditions}:{},creeLe:o,versionSchema:e.versionSchema,empreinte:i,videos:n,versionEditoriale:t.versionEditoriale??1,algorithme:`SHA-256`,inclusions:{medias:a,contenuPersonnel:t.portee===`complet`},fichiers:r}}async function Pr(e,t,n,r,i,a){Ar(e);let o=a.images??new Map;zn(e,o);let s=Ve(e),c=new TextEncoder().encode(JSON.stringify(e)),l=[{chemin:`bibliotheque.json`,taille:c.length,sha256:lt(c)}],u=[],d=null,f=new jn((e,t)=>{e?d=e:t&&t.length&&u.push(t)}),p=async()=>{if(d)throw new B(`Compression du conteneur échouée : ${d.message}`);let e=u;u=[];for(let t of e)await i.ecrire(t)},m=()=>{if(a.estAnnule?.())throw new B(`Export annulé`)},h=new An(`bibliotheque.json`,{level:6});f.add(h),h.push(c,!0),await p();for(let e of n){m();let t=Mr(s,e),i=new kn(t);f.add(i);let o=new ct,c=0,u=null;for await(let t of r(e))u&&(i.push(u,!1),o.update(u),c+=u.length,await p(),m()),u=t;u?(i.push(u,!0),o.update(u),c+=u.length):i.push(new Uint8Array,!0),await p(),l.push({chemin:t,taille:c,sha256:o.digestHex()}),a.surProgression?.(l.length-1,n.length)}for(let t of e.images??[]){m();let e=`images/${t.id}`,n=new kn(e);f.add(n),n.push(o.get(t.id),!0),await p(),l.push({chemin:e,taille:t.taille,sha256:t.id})}let g=Nr(e,t,n,l,l[0].sha256,n.length>0,a.creeLe),_=new An(`manifeste.json`,{level:6});return f.add(_),_.push(new TextEncoder().encode(JSON.stringify(g,null,2)),!0),await p(),f.end(),await p(),g}function Fr(e,t,n){let r=new Map(t.map(e=>[e.id,e]));for(let t of e.images??[]){if(r.has(t.id))continue;let e=n.get(t.id);e&&r.set(t.id,{...t,octets:e})}return[...r.values()]}function Ir(e){if(e.length===1)return e[0];let t=0;for(let n of e)t+=n.length;let n=new Uint8Array(t),r=0;for(let t of e)n.set(t,r),r+=t.length;return n}async function Lr(e,t,n={}){let r={...Gn,...n.limites},i=0,a=0,o=null,s=null,c=new Map,l=new Map,u=0,d=new Set,f=[],p=null,m=new Pn;m.register(Nn),m.onfile=e=>{f.push({t:`debut`,nom:e.name}),e.ondata=(t,n,r)=>{t?p=t:f.push({t:`donnee`,nom:e.name,bloc:n,final:r})},e.start()};let h=null,g=null,_=async()=>{for(;f.length;){let e=f.shift();if(e.t===`debut`){if(++i>r.entreesMax)throw new B(`Archive refusée : plus de ${r.entreesMax} entrées`);if(!Jn(e.nom))throw new B(`Archive refusée : chemin dangereux (${e.nom})`);if(d.has(e.nom))throw new B(`Archive refusée : chemin en double (${e.nom})`);if(d.add(e.nom),In(e.nom)){let n=e.nom.slice(e.nom.indexOf(`/`)+1),r=n.match(/\.([a-z0-9]{1,5})$/i)?.[1]?.toLowerCase();if(r!==void 0&&!Kn.has(r))throw new B(`Archive refusée : type de média inattendu (${e.nom})`);h={chemin:e.nom,id:Bn(e.nom),nomPhysique:n,hacheur:new ct,taille:0},await t.ouvrir(n)}else g={nom:e.nom,garder:e.nom===`manifeste.json`||e.nom===`bibliotheque.json`||Ln(e.nom),morceaux:[],taille:0}}else if(h&&e.nom===h.chemin){if(e.bloc.length){if(h.taille===0){let t=qn(e.bloc);if(t)throw new B(`Archive refusée : ${h.chemin} est un ${t}, pas une vidéo`)}if(a+=e.bloc.length,a>r.octetsTotal)throw new B(`Archive refusée : volume décompressé au-delà de ${Math.round(r.octetsTotal/1e6)} Mo`);h.hacheur.update(e.bloc),h.taille+=e.bloc.length,await t.ecrire(e.bloc)}e.final&&(await t.fermer(),c.set(h.chemin,{id:h.id,nomPhysique:h.nomPhysique,taille:h.taille,sha256:h.hacheur.digestHex()}),h=null)}else if(g&&e.nom===g.nom){if(e.bloc.length){if(a+=e.bloc.length,g.taille+=e.bloc.length,a>r.octetsTotal)throw new B(`Archive refusée : volume décompressé au-delà de ${Math.round(r.octetsTotal/1e6)} Mo`);let t=Ln(g.nom)?r.octetsImage:r.octetsPetitFichier;if(g.taille>t)throw new B(`Archive refusée : ${g.nom} dépasse ${Math.round(t/1e6)} Mo`);if(Ln(g.nom)&&(u+=e.bloc.length,u>r.octetsImagesTotal))throw new B(`Archive refusée : ses images dépassent ${Math.round(r.octetsImagesTotal/1e6)} Mo cumulés — elles sont lues en mémoire, un appareil modeste n'y survivrait pas`);g.garder&&g.morceaux.push(e.bloc.slice())}if(e.final){if(g.garder){let e=Ir(g.morceaux);g.nom===`manifeste.json`?o=e:g.nom===`bibliotheque.json`?s=e:l.set(g.nom.slice(7),e)}g=null}}}},v=()=>new B(`Fichier illisible : pas une archive .movpack valide`);try{let t=e.getReader();for(;;){if(n.estAnnule?.())throw new B(`Import annulé`);let{done:e,value:r}=await t.read();try{m.push(r??new Uint8Array,e)}catch{throw v()}if(p)throw v();if(await _(),e)break}let r=o,i=s;if(!r||!i)throw new B(`Archive incomplète : manifeste.json et bibliotheque.json attendus`);let a=Un(JSON.parse(new TextDecoder().decode(r)));if(a.version>5)throw new B(`Conteneur .movpack v${a.version}, plus récent que l'application (v5) — mettre à jour l'application`);let u=[],f,h=Wn(a);if(h){let e=new Set([`manifeste.json`]),t=!1;f=[];for(let n of h)if(e.add(n.chemin),n.chemin===`bibliotheque.json`){if(i.length!==n.taille)throw new B(`Taille inattendue : bibliotheque.json (${i.length} octets, ${n.taille} attendus)`);if(lt(i)!==n.sha256)throw new B(`Intégrité en échec : bibliotheque.json ne correspond pas à son empreinte`);t=!0}else if(Ln(n.chemin)){let e=l.get(n.chemin.slice(7));if(!e)throw new B(`Fichier manquant : ${n.chemin} est déclaré mais absent de l'archive`);if(e.length!==n.taille)throw new B(`Taille inattendue : ${n.chemin} (${e.length} octets, ${n.taille} attendus)`);if(lt(e)!==n.sha256)throw new B(`Intégrité en échec : ${n.chemin} ne correspond pas à son empreinte`);Rn(n.chemin,e)}else{let e=c.get(n.chemin);if(!e)throw new B(`Fichier manquant : ${n.chemin} est déclaré mais absent de l'archive`);if(e.taille!==n.taille)throw new B(`Taille inattendue : ${n.chemin} (${e.taille} octets, ${n.taille} attendus)`);if(e.sha256!==n.sha256)throw new B(`Intégrité en échec : ${n.chemin} ne correspond pas à son empreinte`);f.push(e)}if(!t)throw new B(`Manifeste incomplet : bibliotheque.json absent de l'inventaire d'intégrité`);for(let t of d)e.has(t)||(u.push(`Fichier inattendu ignoré : ${t}`),Ln(t)&&l.delete(t.slice(7)))}else{if(lt(i)!==a.empreinte)throw new B(`Intégrité en échec : le contenu ne correspond pas à l'empreinte du manifeste`);f=[...c.values()];for(let e of l.keys())u.push(`Fichier inattendu ignoré : images/${e}`);l.clear()}let{bibliotheque:g,imagesDetachees:y}=tr(JSON.parse(new TextDecoder().decode(i)));return Ar(g),{manifeste:a,bibliotheque:g,medias:f,images:Fr(g,y,l),avertissements:u}}catch(e){throw await t.abandonner(),e instanceof B?e:v()}}function Rr(e){let t=new Set,n=e=>{if(Array.isArray(e))return e.forEach(n);if(!e||typeof e!=`object`)return;let r=e;if(r.type===`fichier`&&typeof r.imageId==`string`){t.add(r.imageId);return}for(let e of Object.values(r))n(e)},{images:r,...i}=e;return n(i),t}function zr(e){let t=Rr(e);return(e.images??[]).filter(e=>t.has(e.id))}var Br=class extends Error{constructor(e){super(e),this.name=`ErreurRapprochement`}};function Vr(e,t,n){if(Math.abs(e.length-t.length)>n)return n+1;let r=Array.from({length:t.length+1},(e,t)=>t);for(let n=1;n<=e.length;n++){let i=[n];for(let a=1;a<=t.length;a++)i[a]=Math.min((r[a]??0)+1,(i[a-1]??0)+1,(r[a-1]??0)+(e[n-1]===t[a-1]?0:1));r=i}return r[t.length]??n+1}function Hr(e,t,n){let r=H(n);if(r.length<3)return{exacte:null,proches:[]};let i=e.techniques.filter(e=>e.disciplineId===t),a=i.filter(e=>H(e.nom)===r);return{exacte:a.length===1?a[0]:null,proches:[...a.length>1?a:[],...i.filter(e=>{let t=H(e.nom);return t!==r&&(Vr(t,r,2)<=2||t.includes(r)||r.includes(t))})].slice(0,4)}}function Ur(e,t,n){let r=new Map;for(let i of t){let t=e.find(e=>H(e.nom)===H(i.nom));if(t)r.set(i.id,t.id);else{let t=e.some(e=>e.id===i.id)?`${n}-${i.id}`:i.id;e.push({...i,id:t}),r.set(i.id,t)}}return r}function Wr(e,t,n){if(t.disciplines.length===0)throw new Br(`Un pack importable contient au moins une discipline`);let r=structuredClone(e),i=n.packId,a=new Map((n.regles??[]).map(e=>[H(e.de),H(e.vers)])),o={discipline:t.disciplines.map(e=>e.nom).join(` + `),rejointes:[],creees:[],retirees:[],suggestions:[],conflitsLiaisons:0,conflitsContributions:0,retraitsProposes:0,fichesModifiees:0,compositionsModifiees:0,imagesAjoutees:0,relationsAjoutees:0},s=new Set;for(let e of t.typesRelation??[]){let t=r.typesRelation.find(t=>t.id===e.id);t?(t.role===void 0&&e.role!==void 0&&(t.role=e.role),t.ordre===void 0&&e.ordre!==void 0&&(t.ordre=e.ordre)):r.typesRelation.push({...structuredClone(e),origine:{pack:i,element:e.id}})}if(t.typesAlerte?.length){r.typesAlerte??=[];for(let e of t.typesAlerte)r.typesAlerte.some(t=>t.id===e.id)||r.typesAlerte.push(structuredClone(e))}let c=new Map,l=new Set,u=new Map(r.techniques.filter(e=>e.origine?.pack===i).map(e=>[e.origine.element,e]));for(let e of t.disciplines){let n=r.disciplines.find(t=>H(t.nom)===H(e.nom))??r.disciplines.find(t=>t.id===e.id);n||(n=structuredClone(e),r.disciplines.push(n));let d=n,f=Ur(d.familles,e.familles,i),p=Ur(d.niveaux,e.niveaux,i),m=()=>r.techniques.filter(e=>e.disciplineId===d.id),h=new Map;for(let e of m()){let t=H(e.nom);h.set(t,[...h.get(t)??[],e])}for(let n of t.techniques.filter(t=>t.disciplineId===e.id)){let e=n.origine?.element??n.id;l.add(e);let t=u.get(e);if(t){c.set(n.id,t.id),(t.nom!==n.nom||n.nomTraditionnel&&t.nomTraditionnel!==n.nomTraditionnel||n.couverture&&JSON.stringify(t.couverture??null)!==JSON.stringify(n.couverture))&&s.add(t.id),Gr(t,n,f,p),t.nom=n.nom,n.nomTraditionnel&&(t.nomTraditionnel=n.nomTraditionnel),n.couverture&&(t.couverture=structuredClone(n.couverture)),o.rejointes.push(n.nom);continue}let g=r.techniques.find(e=>e.id===n.id);if(g){c.set(n.id,g.id),Gr(g,n,f,p),o.rejointes.push(n.nom);continue}let _=a.has(H(n.nom)),v=a.get(H(n.nom))??H(n.nom),y=(h.get(v)??[]).filter(e=>e.origine?.pack!==i);if(_){if(y.length===0)throw new Br(`Règle « ${n.nom} » → « ${v} » : aucune identité cible dans « ${d.nom} »`);if(y.length===1){let e=y[0];c.set(n.id,e.id),Gr(e,n,f,p),o.rejointes.push(n.nom);continue}o.suggestions.push({nom:n.nom,candidats:y.map(e=>e.nom),motif:`ambigu`})}else if(y.length>1)o.suggestions.push({nom:n.nom,candidats:y.map(e=>e.nom),motif:`ambigu`});else if(y.length===0){let e=m().filter(e=>e.origine?.pack!==i&&Vr(H(e.nom),H(n.nom),2)<=2).map(e=>e.nom);e.length&&o.suggestions.push({nom:n.nom,candidats:e,motif:`quasi-correspondance`})}let b={...structuredClone(n),disciplineId:d.id,niveauxIds:n.niveauxIds.map(e=>p.get(e)??e),relations:[],origine:{pack:i,element:e}};n.familleId?b.familleId=f.get(n.familleId)??n.familleId:delete b.familleId,r.techniques.push(b),h.set(H(b.nom),[...h.get(H(b.nom))??[],b]),c.set(n.id,b.id),o.creees.push(n.nom)}}for(let[e,t]of u)l.has(e)||(r.contributions=r.contributions.filter(t=>!(t.origine?.pack===i&&t.origine.element===e)),r.contributions.some(e=>e.techniqueId===t.id)||(r.techniques=r.techniques.filter(e=>e.id!==t.id),o.retirees.push(t.nom)));let d=new Map((r.conflitsContributions??[]).map(e=>[`${e.pack}\u0000${e.element}`,e]));for(let e of t.contributions){let t=e.origine?.element??e.id;d.delete(`${i}\u0000${t}`);let n=e.techniqueId?c.get(e.techniqueId)??null:null,a=r.contributions.find(n=>n.origine?.pack===i&&n.origine.element===t||n.id===e.id);if(a){let r=(a.description??``)===(e.description??``)&&(a.variantes??``)===(e.variantes??``)&&(a.attribution??``)===(e.attribution??``)&&a.pointsCles.join(`
`)===e.pointsCles.join(`
`);if(a.modifiePar&&!r){a.techniqueId=n,a.origine={pack:i,element:t},d.set(`${i}\u0000${t}`,{pack:i,element:t,contributionId:a.id,...e.description===void 0?{}:{description:e.description},pointsCles:[...e.pointsCles],...e.variantes===void 0?{}:{variantes:e.variantes},...e.attribution===void 0?{}:{attribution:e.attribution},detecteLe:new Date().toISOString()}),o.conflitsContributions++;continue}!r&&n&&s.add(n),Object.assign(a,structuredClone(e),{id:a.id,techniqueId:n,origine:{pack:i,element:t}}),a.modifiePar&&delete a.modifiePar}else r.contributions.push({...structuredClone(e),techniqueId:n,origine:{pack:i,element:t}})}let f=[...d.values()].filter(e=>r.contributions.some(t=>t.id===e.contributionId));f.length>0?r.conflitsContributions=f:delete r.conflitsContributions;let p=new Map(r.compositions.filter(e=>e.origine?.pack===i).map(e=>[e.origine.element,e])),m=new Set;for(let e of t.compositions??[]){let t=e.origine?.element??e.id;m.add(t);let n=e.blocs.map(e=>e.type===`technique`&&e.techniqueId?{...structuredClone(e),techniqueId:c.get(e.techniqueId)??e.techniqueId}:structuredClone(e)),a=p.get(t)??r.compositions.find(t=>t.id===e.id);if(a){let r=(e,t)=>JSON.stringify([e.nom,e.description,e.type,e.provenance,e.attribution,e.acteurs,e.presentation,t]),s=r(a,a.blocs);Object.assign(a,structuredClone(e),{id:a.id,blocs:n,origine:{pack:i,element:t}}),r(a,a.blocs)!==s&&o.compositionsModifiees++}else r.compositions.push({...structuredClone(e),blocs:n,origine:{pack:i,element:t}})}for(let[e,t]of p)m.has(e)||(r.compositions=r.compositions.filter(e=>e.id!==t.id));let h=e=>`${e.pack}|${e.sourceId}|${e.cibleId}|${e.type}`,g=new Map((r.conflitsLiaisons??[]).map(e=>[h(e),e]));for(let e of t.techniques){let t=c.get(e.id),n=r.techniques.find(e=>e.id===t);for(let t of e.relations){let e={type:t.type,cibleId:c.get(t.cibleId)??t.cibleId};if(t.note!==void 0&&(e.note=t.note),t.priorite!==void 0&&(e.priorite=t.priorite),e.cibleId===n.id)continue;let r=n.relations.find(t=>t.type===e.type&&t.cibleId===e.cibleId);if(!r){n.relations.push(e),o.relationsAjoutees++;continue}let a=h({pack:i,sourceId:n.id,cibleId:e.cibleId,type:e.type});(e.note!==void 0||e.priorite!==void 0)&&(e.note!==r.note||e.priorite!==r.priorite)?g.set(a,{pack:i,sourceId:n.id,cibleId:e.cibleId,type:e.type,...e.note===void 0?{}:{note:e.note},...e.priorite===void 0?{}:{priorite:e.priorite},detecteLe:new Date().toISOString()}):g.delete(a)}}let _=new Set(r.techniques.filter(e=>e.origine?.pack===i).map(e=>e.id)),v=new Set;for(let e of t.techniques){let t=c.get(e.id);for(let n of e.relations){let e=c.get(n.cibleId)??n.cibleId;t&&v.add(`${t}|${e}|${n.type}`)}}for(let e of r.techniques)if(_.has(e.id))for(let t of e.relations)_.has(t.cibleId)&&(v.has(`${e.id}|${t.cibleId}|${t.type}`)||g.set(h({pack:i,sourceId:e.id,cibleId:t.cibleId,type:t.type}),{pack:i,sourceId:e.id,cibleId:t.cibleId,type:t.type,sens:`retrait`,detecteLe:new Date().toISOString()}));for(let[e,t]of g)t.sens!==`retrait`||t.pack!==i||(!r.techniques.find(e=>e.id===t.sourceId)?.relations.some(e=>e.type===t.type&&e.cibleId===t.cibleId)||v.has(`${t.sourceId}|${t.cibleId}|${t.type}`))&&g.delete(e);g.size>0?r.conflitsLiaisons=[...g.values()]:delete r.conflitsLiaisons;let y=[...g.values()];o.conflitsLiaisons=y.filter(e=>e.pack===i&&e.sens!==`retrait`).length,o.retraitsProposes=y.filter(e=>e.pack===i&&e.sens===`retrait`).length;let b=new Map((r.images??[]).map(e=>[e.id,e]));for(let e of t.images??[])b.has(e.id)||(b.set(e.id,structuredClone(e)),o.imagesAjoutees++);return r.images=b.size?[...b.values()]:[],r.images=zr(r),o.fichesModifiees=s.size,n.versionEditoriale!==void 0&&(r.editionsPacks=[...(r.editionsPacks??[]).filter(e=>e.pack!==i),{pack:i,versionEditoriale:n.versionEditoriale,majLe:new Date().toISOString()}]),Ar(r),{bibliotheque:r,rapport:o}}function Gr(e,t,n,r){!e.nomTraditionnel&&t.nomTraditionnel&&(e.nomTraditionnel=t.nomTraditionnel),!e.couverture&&t.couverture&&(e.couverture=structuredClone(t.couverture)),!e.mediaPrincipalId&&t.mediaPrincipalId&&(e.mediaPrincipalId=t.mediaPrincipalId),!e.familleId&&t.familleId&&(e.familleId=n.get(t.familleId)??t.familleId);for(let n of t.niveauxIds){let t=r.get(n)??n;e.niveauxIds.includes(t)||e.niveauxIds.push(t)}}function Kr(e,t,n){let r=e=>e.pack===t.pack&&e.sourceId===t.sourceId&&e.cibleId===t.cibleId&&e.type===t.type,i=(e.conflitsLiaisons??[]).filter(e=>!r(e));if(i.length>0?e.conflitsLiaisons=i:delete e.conflitsLiaisons,n===`retirer`){let n=e.techniques.find(e=>e.id===t.sourceId);n&&(n.relations=n.relations.filter(e=>!(e.type===t.type&&e.cibleId===t.cibleId)));return}if(n===`local`)return;let a=e.techniques.find(e=>e.id===t.sourceId)?.relations.find(e=>e.type===t.type&&e.cibleId===t.cibleId);if(!a)return;if(n===`pack`){t.note===void 0?delete a.note:a.note=t.note,t.priorite===void 0?delete a.priorite:a.priorite=t.priorite;return}let o=[a.note,t.note].filter(e=>e!==void 0&&e.trim()!==``),s=[...new Set(o)].join(`

`);s===``?delete a.note:a.note=s,a.priorite===void 0&&t.priorite!==void 0&&(a.priorite=t.priorite)}function qr(e,t,n){let r=(e.conflitsContributions??[]).filter(e=>!(e.pack===t.pack&&e.element===t.element));if(r.length>0?e.conflitsContributions=r:delete e.conflitsContributions,n===`locale`)return;let i=e.contributions.find(e=>e.id===t.contributionId);i&&(t.description===void 0?delete i.description:i.description=t.description,i.pointsCles=[...t.pointsCles],t.variantes===void 0?delete i.variantes:i.variantes=t.variantes,t.attribution===void 0?delete i.attribution:i.attribution=t.attribution,delete i.modifiePar)}var Jr=!1;function Yr(e){if(!e.garde(`modification`,`Saisis le PIN pour importer un pack.`,()=>void e.choisirPackAImporter()))return;let t=document.createElement(`input`);t.type=`file`,t.accept=`.movpack`,t.onchange=()=>{let n=t.files?.[0];n&&e.importerPack(n)},t.click()}async function Xr(e,t){let n=e.bibliotheque;if(n){e.importEnAttente=null,e.restaurationEnAttente=null,await e.stockage.nettoyerImport();try{let r=new Uint8Array(await t.slice(0,4).arrayBuffer()),i,a,o,s=[],c=[],l=[];if(Fn(r)){if(!_t(e,t.size,await e.stockage.estimerEspace()))return;Jr=!1,e.annulationOccupe={libelle:`Annuler`,executer:()=>{Jr=!0}};let n;try{n=await e.occuperPendant(`Lecture du pack…`,()=>Lr(t.stream(),e.stockage.puitsImport(),{estAnnule:()=>Jr}))}finally{e.annulationOccupe=null}if(n.manifeste.portee===`complet`){await ei(e,n);return}s=n.medias,c=n.images,i=n.bibliotheque,a=n.manifeste.id,o=n.manifeste,l=n.avertissements}else{let e=new Uint8Array(await t.arrayBuffer());i=nr(JSON.parse(new TextDecoder().decode(e))),Ar(i),a=i.contributions[0]?.origine?.pack??t.name.replace(/\.(json|movpack)$/i,``),l=[`Fichier JSON historique : ni manifeste ni intégrité de conteneur — analysé et validé, mais non vérifié par empreinte.`]}let u=n.techniques.some(e=>e.origine?.pack===a)||n.contributions.some(e=>e.origine?.pack===a);e.importEnAttente={...Wr(n,i,{packId:a,...o?.versionEditoriale===void 0?{}:{versionEditoriale:o.versionEditoriale}}),packId:a,medias:s,images:c,dejaInstalle:u,...o?{manifeste:o}:{},volume:t.size,contenus:{techniques:i.techniques.length,contributions:i.contributions.length},avertissements:l},e.requestUpdate()}catch(t){if(await e.stockage.nettoyerImport(),t instanceof Error&&t.message===`Import annulé`){e.afficherToast(`Import annulé — rien n'a été écrit`);return}e.consignerEchec(`MOV-E02`,t),e.afficherToast(`Import impossible : ${t instanceof Error?t.message:`fichier illisible`}`,`alerte`)}}}async function Zr(e){let t=e.importEnAttente;if(!t||!_t(e,yt(t.medias),await xt(e)))return;await e.stockage.snapshot(`avant-import-${t.packId}`);try{await e.occuperPendant(`Installation du pack…`,async()=>{let n=await e.stockage.promouvoirImportMedias(t.medias.map(e=>e.nomPhysique));await e.stockage.poserImagesRecues(t.images);try{await e.persister(t.bibliotheque)}catch(t){throw await e.stockage.annulerPromotionMedias(n),t}})}catch(t){e.consignerEchec(`MOV-E03`,t),e.afficherToast(`Import impossible : ${t instanceof Error?t.message:`écriture refusée`}`,`alerte`);return}await e.stockage.nettoyerImport();let n=t.rapport;e.importEnAttente=null,e.rapportApresImport={discipline:n.discipline,disciplineId:t.bibliotheque.disciplines.find(e=>e.nom===n.discipline)?.id??null,rejointes:n.rejointes.length,creees:n.creees.length,suggestions:n.suggestions,videos:t.medias.length,conflitsLiaisons:n.conflitsLiaisons,conflitsContributions:n.conflitsContributions,retraitsProposes:n.retraitsProposes,fichesModifiees:n.fichesModifiees,compositionsModifiees:n.compositionsModifiees,imagesAjoutees:n.imagesAjoutees},e.requestUpdate()}function Qr(e){e.rapportApresImport=null,e.requestUpdate()}async function $r(e){e.importEnAttente=null,await e.stockage.nettoyerImport(),e.requestUpdate(),e.afficherToast(`Import annulé — rien n'a été écrit`)}async function ei(e,t){let n=e.bibliotheque;if(!(n.disciplines.length===0&&n.techniques.length===0&&n.contributions.length===0&&n.compositions.length===0)){await e.stockage.nettoyerImport(),e.afficherToast(`Cet export complet se restaure sur une installation vierge — ici, importe plutôt un pack de discipline (Plus › Créer ou exporter un pack)`);return}e.restaurationEnAttente=t,e.requestUpdate()}async function ti(e){if(!e.garde(`destruction_ou_sensible`,`Saisis le PIN pour restaurer cette sauvegarde.`,()=>void e.confirmerRestauration()))return;let t=e.restaurationEnAttente;if(t&&_t(e,yt(t.medias),await xt(e))){try{await e.occuperPendant(`Restauration en cours…`,async()=>{let n=await e.stockage.promouvoirImportMedias(t.medias.map(e=>e.nomPhysique));await e.stockage.poserImagesRecues(t.images);try{await e.persister(t.bibliotheque)}catch(t){throw await e.stockage.annulerPromotionMedias(n),t}})}catch(t){e.consignerEchec(`MOV-E04`,t),e.afficherToast(`Restauration impossible : ${t instanceof Error?t.message:`écriture refusée`}`,`alerte`);return}await e.stockage.nettoyerImport(),e.restaurationEnAttente=null,e.afficherToast(`Bibliothèque restaurée ✓ ${t.bibliotheque.techniques.length} techniques, ${t.medias.length} vidéo${t.medias.length>1?`s`:``} — réglages d'appareil (thème, démarrage, protections) à reconfigurer`)}}async function ni(e){e.restaurationEnAttente=null,await e.stockage.nettoyerImport(),e.requestUpdate(),e.afficherToast(`Restauration annulée — rien n'a été écrit`)}function ri(e,t){let n=e.bibliotheque;if(!n)return;let r=(n.conflitsLiaisons??[]).filter(e=>e.sens===`retrait`&&e.pack===t);if(r.length===0)return;let i=r.length>1?`s`:``;e.demanderConfirmation({titre:`Retirer ${r.length} lien${i} ?`,corps:`Ce pack ne les déclare plus. Un lien que tu as tracé toi-même entre deux de ses techniques peut se trouver dans le lot — rien ne les distingue. Un point de restauration est pris avant.`,bouton:`Retirer`,action:()=>void ii(e,r)})}async function ii(e,t){let n=e.bibliotheque;if(!n)return;await e.stockage.snapshot(`avant-retrait-liens-${t[0].pack}`);for(let e of t)Kr(n,e,`retirer`);await e.persister(n);let r=t.length>1?`s`:``;e.afficherToast(`${t.length} lien${r} retiré${r} — point de restauration conservé`)}var ai=`https://prettozm.github.io/movenso-public/`;function oi(e){return(window.Capacitor?.getPlatform?.()??`web`)===`web`?new URL(`../${e}`,location.href).toString():new URL(e,ai).toString()}async function si(e){e.catalogueOfficiel=`chargement`,e.requestUpdate();try{let t=await fetch(oi(`packs/index.json`),{cache:`no-cache`});if(!t.ok)throw Error(`HTTP ${t.status}`);let n=await t.json();if(!Array.isArray(n))throw Error(`catalogue illisible`);e.catalogueOfficiel=n.filter(e=>!!e&&typeof e==`object`&&typeof e.id==`string`&&typeof e.title==`string`&&typeof e.href==`string`&&typeof e.downloadName==`string`&&typeof e.version==`string`)}catch{e.catalogueOfficiel=`indisponible`}e.requestUpdate()}async function ci(e,t){try{let n=await e.occuperPendant(`Téléchargement de « ${t.title} »…`,async()=>{let e=await fetch(oi(t.href),{cache:`no-cache`});if(!e.ok)throw Error(`HTTP ${e.status}`);let n=await e.blob();return new File([n],t.downloadName,{type:`application/octet-stream`})});await e.importerPack(n)}catch(t){e.consignerEchec(`MOV-E06`,t),e.afficherToast(`Téléchargement impossible : ${t instanceof Error?t.message:`réseau indisponible`}`,`alerte`)}}function li(e,t,n=new Set([`local`]),r,i={}){let a=e.disciplines.find(e=>e.id===t);if(!a)throw new B(`Discipline introuvable`);let o=e=>!r||r.has(e),s=e.contributions.filter(e=>e.provenance!==`personnel`&&e.techniqueId!==null&&o(e.techniqueId)&&n.has(F(e))),c=new Set(s.map(e=>e.techniqueId)),l=e.techniques.filter(e=>e.disciplineId===t&&o(e.id)&&(n.has(F(e))||c.has(e.id))),u=new Set(l.map(e=>e.id)),d=[],f=l.map(e=>{let t=structuredClone(e);return t.relations=e.relations.filter(t=>u.has(t.cibleId)?!0:(d.push({techniqueId:e.id,techniqueNom:e.nom,type:t.type,cibleId:t.cibleId}),!1)),t}),p={versionSchema:e.versionSchema,typesRelation:structuredClone(e.typesRelation),...e.typesAlerte?{typesAlerte:structuredClone(e.typesAlerte)}:{},disciplines:[structuredClone(a)],techniques:f,contributions:structuredClone(s.filter(e=>u.has(e.techniqueId))),compositions:structuredClone(e.compositions.filter(e=>{let t=e.blocs.filter(e=>e.type===`technique`&&e.techniqueId),r=t.length>0&&t.every(e=>u.has(e.techniqueId));return e.provenance===`personnel`?(i.compositionsPersonnelles??!1)&&r:r||n.has(F(e))})),favoris:[]};return Ar(p),{extrait:p,relationsExclues:d}}function ui(e,t){let n=e.techniques.find(e=>e.id===t);if(!n)throw new B(`Technique introuvable`);let r=e.disciplines.find(e=>e.id===n.disciplineId);if(!r)throw new B(`Discipline introuvable`);let i=e.contributions.filter(e=>e.techniqueId===n.id&&e.provenance!==`personnel`),a=[],o=structuredClone(n);o.relations=n.relations.filter(e=>e.cibleId===n.id?!0:(a.push({techniqueId:n.id,techniqueNom:n.nom,type:e.type,cibleId:e.cibleId}),!1));let s={versionSchema:e.versionSchema,typesRelation:structuredClone(e.typesRelation),...e.typesAlerte?{typesAlerte:structuredClone(e.typesAlerte)}:{},disciplines:[structuredClone(r)],techniques:[o],contributions:structuredClone(i),compositions:[],favoris:[]};return Ar(s),{extrait:s,relationsExclues:a}}function di(e,t){let n=e.compositions.find(e=>e.id===t);if(!n)throw new B(`Composition introuvable`);let r=new Set(n.blocs.filter(e=>e.type===`technique`&&e.techniqueId).map(e=>e.techniqueId)),i=e.techniques.filter(e=>r.has(e.id)),a=new Set(i.map(e=>e.disciplineId)),o={versionSchema:e.versionSchema,typesRelation:structuredClone(e.typesRelation),disciplines:structuredClone(e.disciplines.filter(e=>a.has(e.id))),techniques:structuredClone(i),contributions:[],compositions:[structuredClone(n)],favoris:[]};return Ar(o),o}function fi(e){return`pack-${H(e)}`}function pi(e){return`pack-${e}`}function mi(e){let{avecVideos:t,nbManquants:n}=e,r=t&&n===0,i=[];return t?n>0&&i.push(`${n} vidéo${n>1?`s`:``} absente${n>1?`s`:``} du stockage`):i.push(`toutes les vidéos (fichier léger)`),i.push(`les réglages d'appareil (thème, démarrage, protections — se reconfigurent après restauration)`),{complete:r,role:r?`Sauvegarde complète de cette installation`:`Sauvegarde PARTIELLE de cette installation`,exclusions:i}}var hi=`modulepreload`,gi=function(e,t){return new URL(e,t).href},_i={},vi=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=gi(t,n),t=s(t),t in _i)return;_i[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:hi,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})};function yi(e,t){let n=URL.createObjectURL(e),r=document.createElement(`a`);r.href=n,r.download=t,r.click(),setTimeout(()=>URL.revokeObjectURL(n),6e4)}async function bi(e,t){let n=!1;try{let{Capacitor:e}=await vi(async()=>{let{Capacitor:e}=await import(`./dist-sZ8V2geg.js`);return{Capacitor:e}},[],import.meta.url);if(n=!!e?.isNativePlatform?.(),n)return await Ci(t,`documents`,`Movenso/${t.name}`),`Documents/Movenso/${t.name}`}catch{if(n)return await xi(e,t,t.name,`Movenso — ${t.name}`),`le partage — choisis « Enregistrer dans Fichiers »`}return yi(t,t.name),`tes téléchargements`}async function xi(e,t,n,r){try{let{Capacitor:i}=await vi(async()=>{let{Capacitor:e}=await import(`./dist-sZ8V2geg.js`);return{Capacitor:e}},[],import.meta.url);if(i?.isNativePlatform?.()){let{Filesystem:i,Directory:a}=await vi(async()=>{let{Filesystem:e,Directory:t}=await import(`./esm-DoVs6Nl1.js`);return{Filesystem:e,Directory:t}},__vite__mapDeps([0,1]),import.meta.url),{Share:o}=await vi(async()=>{let{Share:e}=await import(`./esm-DPan9_Gj.js`);return{Share:e}},__vite__mapDeps([2,1]),import.meta.url);await Ci(t,`cache`,t.name);let{uri:s}=await i.getUri({path:t.name,directory:a.Cache});await o.share({title:n,text:r,url:s}),e.afficherToast(`Partagé ✓`);return}}catch(e){if(e instanceof Error&&/cancel/i.test(e.message))return}let i=navigator;if(i.share&&i.canShare?.({files:[t]}))try{await i.share({files:[t],title:n,text:r}),e.afficherToast(`Partagé ✓`);return}catch(e){if(e instanceof DOMException&&e.name===`AbortError`)return}yi(t,t.name),e.afficherToast(`Fichier .movpack enregistré dans tes téléchargements — joins-le depuis WhatsApp, Drive ou un mail.`)}async function Si(e){let t=new Uint8Array(await e.arrayBuffer()),n=``,r=32768;for(let e=0;e<t.length;e+=r)n+=String.fromCharCode(...t.subarray(e,e+r));return btoa(n)}async function Ci(e,t,n){let{Filesystem:r,Directory:i}=await vi(async()=>{let{Filesystem:e,Directory:t}=await import(`./esm-DoVs6Nl1.js`);return{Filesystem:e,Directory:t}},__vite__mapDeps([0,1]),import.meta.url),a=t===`documents`?i.Documents:i.Cache,o=3*1024*1024;if(e.size===0){await r.writeFile({path:n,data:``,directory:a,recursive:!0});return}let s=!0;for(let t=0;t<e.size;t+=o){let i=await Si(e.slice(t,t+o));s?(await r.writeFile({path:n,data:i,directory:a,recursive:!0}),s=!1):await r.appendFile({path:n,data:i,directory:a})}}var wi={"MOV-E01":`export .movpack`,"MOV-E02":`lecture d'un pack`,"MOV-E03":`installation d'un pack`,"MOV-E04":`restauration complète`,"MOV-E05":`restauration de sauvegarde interne`,"MOV-E06":`téléchargement de pack officiel`,"MOV-E98":`promesse non gérée`,"MOV-E99":`erreur non gérée`};function Ti(e){return`${(e/(1<<20)).toFixed(1)} Mo`}function Ei(e){return[`Movenso — diagnostic technique`,`généré : ${e.genereLe}`,`plateforme : ${e.plateforme}`,`version de l'application : ${e.versionApp}`,`version du schéma : ${e.versionSchema}`,`version du conteneur .movpack : ${e.versionMovpack}`,``,`Contenu :`,`  disciplines : ${e.disciplines}`,`  techniques : ${e.techniques}`,`  contributions : ${e.contributions}`,`  compositions : ${e.compositions}${e.compositionsARoles?` (dont ${e.compositionsARoles} à plusieurs rôles)`:``}`,`  favoris : ${e.favoris}`,...e.relations===void 0?[]:[`  relations entre techniques : ${e.relations}`],``,`Médias :`,`  références locales : ${e.mediasReferences}`,`  fichiers présents : ${e.mediasPresents}`,`  vidéos manquantes (référencées, fichier absent) : ${e.mediasManquants}`,`  fichiers orphelins (présents, plus référencés) : ${e.orphelins}`,``,`Stockage :`,e.espace?`  utilisé : ${Ti(e.espace.usage)} / quota estimé : ${Ti(e.espace.quota)}`:`  estimation indisponible sur cet appareil`,...e.sauvegardes?[`  sauvegardes internes : ${e.sauvegardes.nombre}${e.sauvegardes.derniere?` (dernière : ${e.sauvegardes.derniere})`:``}`]:[],``,...e.packs?[`Sources du contenu (« local » = créé sur l'appareil) :`,...e.packs.length?e.packs.map(e=>`  ${e.id} : ${e.techniques} technique${e.techniques>1?`s`:``}`):[`  aucune`],``]:[],...e.capacites?[`Capacités de la plateforme :`,...Object.entries(e.capacites).map(([e,t])=>`  ${e} : ${typeof t==`boolean`?t?`oui`:`non`:t}`),``]:[],...e.reglages?[`Réglages actifs (hors protections) :`,...Object.entries(e.reglages).map(([e,t])=>`  ${e} : ${t}`),``]:[],`Opération longue :`,e.operationLongue?e.operationLongue.fin?`  ${e.operationLongue.libelle} — terminée (${e.operationLongue.debut} → ${e.operationLongue.fin})`:`  ${e.operationLongue.libelle} — ENCORE EN COURS au moment du diagnostic (démarrée ${e.operationLongue.debut})`:`  aucune depuis le démarrage`,``,`Dernier échec :`,e.dernierEchec?`  [${e.dernierEchec.code}] ${e.dernierEchec.operation} — ${e.dernierEchec.message} (${e.dernierEchec.quand})`:`  aucun depuis le démarrage`,``,`Ce diagnostic ne rapporte que des informations techniques agrégées et les`,`identifiants éditoriaux des packs installés : aucune donnée personnelle,`,`aucun réglage de protection, aucun nom de technique ou de composition,`,`aucun contenu de média, aucune adresse privée.`].join(`
`)}var Di=`0.9.0-rc.1`,Oi=`a95c1f4`,ki=e=>String(e).padStart(2,`0`);function Ai(e){return`${e.getFullYear()}-${ki(e.getMonth()+1)}-${ki(e.getDate())}-${ki(e.getHours())}h${ki(e.getMinutes())}`}function ji(e,t){return`movenso-${e?`complet`:`partiel`}-${Ai(t)}.movpack`}var Mi=!1,Ni=1<<20;function Pi(e){Mi=!0}async function Fi(e,t){let n=await e.stockage.listerVideos();return[...He(t)].filter(e=>n.has(e))}async function Ii(e,t,n,r,i,a=!0){await e.stockage.nettoyerArchivesTemp();let o=await e.stockage.taillesVideos();if(!_t(e,r.reduce((e,t)=>e+(o.get(t)??0),0),await e.stockage.estimerEspace()))return null;let s=`export-${Date.now()}.movpack`,c;try{c=await e.stockage.ouvrirArchiveTemp(s)}catch{return e.afficherToast(`Export impossible : stockage temporaire indisponible sur cet appareil`,`alerte`),null}Mi=!1,e.progressionExport={fait:0,total:r.length},e.annulationOccupe={libelle:`Annuler`,executer:()=>e.annulerExport()},e.operationLongue={libelle:`Export de ${i}`,debut:new Date().toISOString(),fin:null},e.requestUpdate();try{await Pr(t,n,r,t=>e.stockage.lireMediaParBlocs(t,Ni),{ecrire:e=>c.write(e)},{creeLe:new Date().toISOString(),images:await e.stockage.octetsImages(t),estAnnule:()=>Mi,surProgression:(t,n)=>{e.progressionExport={fait:t,total:n},e.requestUpdate()}}),await c.close()}catch(t){try{await c.close()}catch{}return await e.stockage.supprimerArchiveTemp(s),e.progressionExport=null,e.annulationOccupe=null,e.operationLongue&&e.operationLongue.fin===null&&(e.operationLongue={...e.operationLongue,fin:new Date().toISOString()}),e.requestUpdate(),Mi||e.consignerEchec(`MOV-E01`,t),Mi?e.afficherToast(`Export annulé — rien n'a été téléchargé`):e.afficherToast(t instanceof Error?t.message:`Export échoué`,`alerte`),null}let l=await e.stockage.fichierArchiveTemp(s),u=l.size;return a&&yi(l,i),e.progressionExport=null,e.annulationOccupe=null,e.operationLongue&&e.operationLongue.fin===null&&(e.operationLongue={...e.operationLongue,fin:new Date().toISOString()}),e.requestUpdate(),{taille:u,fichier:new File([l],i,{type:`application/octet-stream`})}}async function Li(e,t=!0){if(!e.garde(`destruction_ou_sensible`,`Saisis le PIN pour créer une sauvegarde.`,()=>void e.exporterTout(t)))return;let n=e.bibliotheque;if(!n)return;let r=He(n),i=await e.stockage.listerVideos(),a=[...r].filter(e=>!i.has(e)),o=t?[...r].filter(e=>i.has(e)):[],s=mi({avecVideos:t,nbManquants:a.length}),c=ji(s.complete,new Date),l=await Ii(e,n,{id:`movenso-export-complet`,nom:s.complete?`Sauvegarde complète Movenso`:`Sauvegarde partielle Movenso`,portee:`complet`},o,c,!1);if(l===null)return;let u=l.taille,d=await bi(e,l.fichier),f=`${n.disciplines.length} discipline${n.disciplines.length>1?`s`:``}, ${n.techniques.length} techniques, ${n.contributions.length} contenus, ${n.compositions.length} composition${n.compositions.length>1?`s`:``}, ${n.favoris.length} favori${n.favoris.length>1?`s`:``}, ${o.length} vidéo${o.length>1?`s`:``}`;e.dernierFichier={role:s.role,nom:c,taille:u,resume:`${f} — EXCLUS : ${s.exclusions.join(` ; `)}`},e.afficherToast(s.complete?`Sauvegarde complète ✓ — enregistrée dans ${d}`:`Sauvegarde PARTIELLE ✓ (exclut ${s.exclusions[0]}) — dans ${d}`)}async function Ri(e,t){let n=new Map;for(let e of t.techniques){let t=F(e),r=n.get(t)??{id:t,techniques:0};r.techniques+=1,n.set(t,r)}let r=await e.stockage.listerSauvegardes().catch(()=>[]),i=navigator,a=e.preferences;return{packs:[...n.values()].sort((e,t)=>e.id.localeCompare(t.id)),sauvegardes:{nombre:r.length,derniere:r.length?r[r.length-1]??null:null},relations:t.techniques.reduce((e,t)=>e+t.relations.length,0),compositionsARoles:t.compositions.filter(e=>(e.acteurs?.length??0)>=2).length,capacites:{"stockage OPFS":typeof navigator.storage?.getDirectory==`function`,"stockage persistant accordé":await navigator.storage?.persisted?.().catch(()=>!1)??!1,"verrou d'écran (wake lock)":`wakeLock`in navigator,"partage natif":typeof i.share==`function`,"synthèse vocale web":window.speechSynthesis!==void 0,"requêtes de conteneur CSS":typeof CSS<`u`&&CSS.supports?.(`container-type: inline-size`),langue:navigator.language},reglages:{"mode avancé":a.modeAvance??!1?`oui`:`non`,"bêta Relations":a.vueRelationBeta??!1?`oui`:`non`,"bêta Compositions":a.compositionsBeta??!1?`oui`:`non`,thème:a.theme??`auto`,"écran de démarrage":a.demarrage?.mode??`bibliotheque`,"son des séances":a.sonSeance??`les-deux`}}}async function zi(e){let t=e.bibliotheque;if(!t)return;let n=await e.stockage.listerVideos(),r=He(t),i=window.Capacitor,a=Ei({genereLe:new Date().toISOString(),plateforme:i?.getPlatform?.()??`web`,versionApp:`${Di}+${Oi}`,versionSchema:6,versionMovpack:5,disciplines:t.disciplines.length,techniques:t.techniques.length,contributions:t.contributions.length,compositions:t.compositions.length,favoris:t.favoris.length,mediasReferences:r.size,mediasPresents:n.size,mediasManquants:[...r].filter(e=>!n.has(e)).length,dernierEchec:e.dernierEchec,operationLongue:e.operationLongue,orphelins:[...n].filter(e=>!r.has(e)).length,espace:await e.stockage.estimerEspace(),...await Ri(e,t)}),o=`movenso-diagnostic-${Ai(new Date)}.txt`,s=await bi(e,new File([`﻿`+a],o,{type:`text/plain;charset=utf-8`}));e.afficherToast(`Diagnostic enregistré dans ${s} — informations techniques uniquement, aucun secret`)}async function Bi(e,t,n){if(!e.garde(`destruction_ou_sensible`,`Saisis le PIN pour préparer ce pack.`,()=>void e.preparerPublication(t,n)))return;let r=e.bibliotheque,i=r?.disciplines.find(e=>e.id===t);if(!r||!i)return;let a=new Set([`local`]);for(let e of r.techniques)e.disciplineId===t&&e.origine&&a.add(e.origine.pack);for(let e of r.contributions)(e.techniqueId?r.techniques.find(t=>t.id===e.techniqueId):void 0)?.disciplineId===t&&e.origine&&a.add(e.origine.pack);let o,s=[];try{({extrait:o,relationsExclues:s}=li(r,t,a,n.techniques,{compositionsPersonnelles:n.compositionsPersonnelles??!1}))}catch(t){e.afficherToast(`Publication impossible : ${t instanceof Error?t.message:`état inattendu`}`,`alerte`);return}if(o.techniques.length===0){e.afficherToast(`Rien à publier — sélectionne au moins une technique`,`alerte`);return}let c=n.nom?.trim()||i.nom,l=n.avecVideos?await Fi(e,o):[],u=`${fi(c)}.movpack`,d=await Ii(e,o,{id:pi(i.id),nom:c,portee:`discipline`,...n.auteur?.trim()?{auteur:n.auteur.trim()}:{},...n.note?.trim()?{conditions:n.note.trim()}:{}},l,u,!1);d!==null&&(e.publicationPrete={fichier:d.fichier,nomFichier:u,taille:d.taille,nomPack:c,resume:`${o.techniques.length} technique${o.techniques.length>1?`s`:``}${l.length?`, ${l.length} vidéo${l.length>1?`s`:``}`:` (sans vidéo)`} — sans carnet ni favoris${s.length?` ; ${s.length} relation${s.length>1?`s`:``} hors périmètre exclue${s.length>1?`s`:``}`:``}`},e.requestUpdate())}async function Vi(e){let t=e.publicationPrete;if(!t)return;let n=await bi(e,t.fichier);e.afficherToast(`« ${t.nomPack} » enregistré (${gt(t.taille)}) dans ${n}`),e.publicationPrete=null,e.requestUpdate()}async function Hi(e){let t=e.publicationPrete;t&&await xi(e,t.fichier,t.nomPack,`Pack « ${t.nomPack} » — Movenso`)}function Ui(e){e.publicationPrete=null,e.requestUpdate()}async function Wi(e,t){let n=e.bibliotheque,r=n?.techniques.find(e=>e.id===t);if(!n||!r)return;let i;try{({extrait:i}=ui(n,t))}catch{e.partagerTechnique(t);return}let a=await e.stockage.listerVideos(),o=[...He(i)].filter(e=>a.has(e));if(o.length===0){e.partagerTechnique(t);return}let s=i.contributions.flatMap(e=>e.medias).filter(e=>e.type===`lien`||e.type===`plateforme`).length,c=await e.stockage.taillesVideos(),l=o.reduce((e,t)=>e+(c.get(t)??0),0);e.partagePreparation={techniqueId:t,nom:r.nom,avecVideos:!0,nbLiens:s,nbLocales:o.length,octetsLocaux:l}}async function Gi(e){let t=e.partagePreparation;t&&(e.partagePreparation=null,await e.partagerTechnique(t.techniqueId,t.avecVideos))}async function Ki(e,t,n=!0){let r=e.bibliotheque,i=r?.techniques.find(e=>e.id===t);if(!r||!i)return;let a;try{({extrait:a}=ui(r,t))}catch(t){e.afficherToast(`Partage impossible : ${t instanceof Error?t.message:`fiche illisible`}`,`alerte`);return}let o=He(a),s=await e.stockage.listerVideos(),c=n?[...o].filter(e=>s.has(e)):[],l=`${fi(i.nom)}.movpack`,u=await Ii(e,a,{id:`technique-${i.id}`,nom:i.nom,portee:`discipline`},c,l,!1);u!==null&&await xi(e,u.fichier,i.nom,`Technique « ${i.nom} » — Movenso`)}function qi(e){let t=Math.max(0,Math.round(e)),n=Math.floor(t/60),r=t%60;if(n===0)return`${r} seconde${r>1?`s`:``}`;let i=`${n} minute${n>1?`s`:``}`;return r===0?i:`${i} ${r}`}function Ji(e,t){return e>=60&&t===Math.round(e/2)?`mi-temps`:e>40&&t===30?`30 secondes`:e>12&&t===10?`10 secondes`:null}function Yi(e,t){return e.compositions.filter(e=>e.blocs.some(e=>e.type===`technique`&&e.techniqueId===t))}function Xi(e,t=`personnel`,n){return{id:rt(),nom:e,provenance:t,creeLe:new Date().toISOString(),...n?{type:n}:{},blocs:[]}}function Zi(e,t={}){return{id:rt(),type:e,...t.techniqueId===void 0?{}:{techniqueId:t.techniqueId},...t.texte===void 0?{}:{texte:t.texte},...t.consigne===void 0?{}:{consigne:t.consigne},...t.dureeSec===void 0?{}:{dureeSec:t.dureeSec},...t.acteurId===void 0?{}:{acteurId:t.acteurId},...t.lien?{lien:!0}:{},medias:[]}}function Qi(e,t){if(t.acteurId)return e.acteurs?.find(e=>e.id===t.acteurId)}function $i(e){let t=e.acteurs??[];if(t.length===0)return;let n=[...e.blocs].reverse().find(e=>e.acteurId);if(!n)return t[0].id;let r=t.findIndex(e=>e.id===n.acteurId);return r<0?t[0].id:t[(r+1)%t.length].id}function ea(e){return e.lien===!0||e.lien===`simultane`}function ta(e){let t=[];for(let n of e.blocs){if(n.type===`media`)continue;let e=t.at(-1);ea(n)&&e?e.blocs.push(n):t.push({numero:t.length+1,blocs:[n]})}return t}function na(e){let t=!1;for(let n of e.blocs){if(n.type===`media`){delete n.lien;continue}ea(n)&&t?n.lien=!0:delete n.lien,t=!0}}function ra(e,t){let n=e.blocs.findIndex(e=>e.id===t);if(n<0)return;let r=e.blocs[n],i=e.blocs[n+1];!ea(r)&&i&&ea(i)&&delete i.lien,e.blocs.splice(n,1),na(e)}function ia(e){return(e.acteurs?.length??0)>=2||e.blocs.some(e=>e.lien!==void 0)}function aa(e,t){let n=e.acteurs??[],r=n.map(()=>[]),i=[];for(let e of t.blocs){let t=e.acteurId?n.findIndex(t=>t.id===e.acteurId):-1;t>=0?r[t].push(e):i.push(e)}return{colonnes:r,neutres:i}}function oa(e,t){e.blocs.forEach((e,n)=>{let r=t[n];r===void 0?delete e.lien:e.lien=r}),na(e)}function sa(e,t,n){if(t===n)return;let r=e.blocs.findIndex(e=>e.id===t);if(r<0)return;let i=e.blocs.map(e=>e.lien),[a]=e.blocs.splice(r,1),o=e.blocs.findIndex(e=>e.id===n);if(o<0){e.blocs.splice(r,0,a);return}e.blocs.splice(o,0,a),oa(e,i)}function ca(e){if(e<60)return`${Math.round(e)} s`;let t=Math.round(e/60);if(t<60)return`${t} min`;let n=Math.floor(t/60),r=t%60;return r?`${n} h ${`${r}`.padStart(2,`0`)}`:`${n} h`}function la(e){return e.blocs.reduce((e,t)=>e+(t.dureeSec??0),0)}function ua(e,t,n=6){let r;for(let n=(t?.blocs.length??0)-1;n>=0&&!r;n--){let i=t.blocs[n].techniqueId;r=i?e.techniques.find(e=>e.id===i)?.disciplineId:void 0}return!r&&e.disciplines.length===1&&(r=e.disciplines[0].id),r?e.techniques.filter(e=>e.disciplineId===r).slice(0,n):[]}function da(e){let t=(e.texte??``).trim();return e.type===`etape`&&e.dureeSec===void 0&&/^[—–-].*[—–-]$/.test(t)}function fa(e){return(e.texte??``).replace(/^[—–-]\s*/,``).replace(/\s*[—–-]$/,``).trim()}function pa(e){return e.blocs.filter(e=>e.type!==`media`&&!da(e)).length}var ma=null;function ha(e){(!ma||!ma.isConnected)&&(ma=document.createElement(`div`),ma.className=`annonce-lecteur`,ma.setAttribute(`role`,`status`),ma.setAttribute(`aria-live`,`polite`),document.body.append(ma)),ma.textContent=``,requestAnimationFrame(()=>{ma&&(ma.textContent=e)})}function ga(e,t,n,r){let i=r.ordre(),a=i.indexOf(t);if(a<0)return;let o=a+n;if(o<0||o>=i.length){ha(`${r.nom(t)} est déjà en ${n<0?`première`:`dernière`} position.`);return}n<0?r.reordonner(t,i[o]):r.reordonner(i[o],t),r.enregistrer(),ha(`${r.nom(t)}, position ${o+1} sur ${i.length}.`),e.requestUpdate()}function _a(e,t,n){let r=n.ordre();if(r.length<2)return P;let i=r.indexOf(t),a=n.nom(t);return N`<span class="boutons-reordre">
    <button type="button" class="bouton-icone" aria-label="Monter ${a}" title="Monter"
      ?disabled=${i<=0} @click=${()=>ga(e,t,-1,n)}>▲</button>
    <button type="button" class="bouton-icone" aria-label="Descendre ${a}" title="Descendre"
      ?disabled=${i>=r.length-1} @click=${()=>ga(e,t,1,n)}>▼</button>
  </span>`}var va={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},ya=e=>(...t)=>({_$litDirective$:e,values:t}),ba=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}},{I:xa}=De,Sa=e=>e.strings===void 0,Ca={},wa=(e,t=Ca)=>e._$AH=t,Ta=ya(class extends ba{constructor(){super(...arguments),this.key=P}render(e,t){return this.key=e,t}update(e,[t,n]){return t!==this.key&&(wa(e),this.key=t),n}}),Ea=(e,t)=>{let n=e._$AN;if(n===void 0)return!1;for(let e of n)e._$AO?.(t,!1),Ea(e,t);return!0},Da=e=>{let t,n;do{if((t=e._$AM)===void 0)break;n=t._$AN,n.delete(e),e=t}while(n?.size===0)},Oa=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(n===void 0)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),ja(t)}};function ka(e){this._$AN===void 0?this._$AM=e:(Da(this),this._$AM=e,Oa(this))}function Aa(e,t=!1,n=0){let r=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(r))for(let e=n;e<r.length;e++)Ea(r[e],!1),Da(r[e]);else r!=null&&(Ea(r,!1),Da(r));else Ea(this,e)}var ja=e=>{e.type==va.CHILD&&(e._$AP??=Aa,e._$AQ??=ka)},Ma=class extends ba{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,n){super._$AT(e,t,n),Oa(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(Ea(this,e),Da(this))}setValue(e){if(Sa(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}},Na=new WeakMap,Pa=ya(class extends Ma{render(e){return P}update(e,[t]){let n=t!==this.G;return n&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),P}rt(e){if(this.G!==void 0)if(this.isConnected||(e=void 0),typeof this.G==`function`){let t=this.ht??globalThis,n=Na.get(t);n===void 0&&(n=new WeakMap,Na.set(t,n)),n.get(this.G)!==void 0&&this.G.call(this.ht,void 0),n.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G==`function`?Na.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});function Fa(e,t){return e?.libelle??t}function Ia(e,t){return e?e.symetrique?e.libelle:e.libelleInverse??`${e.libelle} (inverse)`:t}function La(e,t){let n=e?.role??`peer`;return t?n:n===`after`?`before`:n===`before`?`after`:n}function Ra(e,t){let n=new Map(e.typesRelation.map(e=>[e.id,e])),r=new Set(e.techniques.map(e=>e.id)),i=[],a=new Set,o=(e,t,o,s,c,l)=>{let u=`${e}:${s}`;if(a.has(u))return;a.add(u);let d={libelle:e,typeId:t,directe:o,techniqueId:s,presente:r.has(s),role:La(n.get(t),o)};c!==void 0&&(d.note=c),l!==void 0&&(d.priorite=l),i.push(d)},s=e.techniques.find(e=>e.id===t);for(let e of s?.relations??[])o(Fa(n.get(e.type),e.type),e.type,!0,e.cibleId,e.note,e.priorite);for(let r of e.techniques)if(r.id!==t)for(let e of r.relations)e.cibleId===t&&o(Ia(n.get(e.type),e.type),e.type,!1,r.id,e.note,e.priorite);return i}var za=new Set([`youtube.com`,`www.youtube.com`,`m.youtube.com`,`music.youtube.com`,`www.youtube-nocookie.com`,`youtu.be`]);function Ba(e){return/^[A-Za-z0-9_-]{6,20}$/.test(e)}function Va(e){let t=null;return t=e.hostname===`youtu.be`?e.pathname.slice(1).split(`/`)[0]||null:e.pathname===`/watch`?e.searchParams.get(`v`):e.pathname.match(/^\/(?:shorts|embed|live|v)\/([^/]+)/)?.[1]??null,t&&Ba(t)?t:null}function Ha(e){let t=e.trim();if(!t)return{ok:!1,raison:`Lien vide.`};let n;try{n=new URL(t)}catch{return{ok:!1,raison:`Ce n'est pas une adresse valide (attendu : https://…).`}}if(n.protocol!==`https:`)return{ok:!1,raison:n.protocol===`http:`?`Seuls les liens https sont acceptés — ce site existe sans doute en https.`:`Protocole refusé (${n.protocol.replace(`:`,``)}) — seuls les liens https sont acceptés.`};if(za.has(n.hostname.toLowerCase())){let e=Va(n);if(e)return{ok:!0,type:`plateforme`,service:`youtube`,ref:e,url:n.toString()}}return{ok:!0,type:`lien`,ref:n.toString(),url:n.toString()}}function Ua(e){if(!e)return null;try{let t=new URL(e.trim());return t.protocol===`https:`?t.toString():null}catch{return null}}function Wa(e){let t=Ua(e);if(!t)return null;try{return new URL(t).hostname.replace(/^www\./,``)}catch{return null}}function Ga(e,t){if(!t.familleId)return null;let n=(e.bibliotheque?.disciplines.find(e=>e.id===t.disciplineId))?.familles.find(e=>e.id===t.familleId)?.couverture;return n?.type===`fichier`?Je(n.imageId):null}function U(e,t,n){let r=N`<span class="vignette-initiale">${t.nomTraditionnel?.charAt(0)??t.nom.charAt(0)}</span>`,i=e=>e.target.style.display=`none`,a=t.couverture?.type===`fichier`?Je(t.couverture.imageId):null;if(a)return N`<span class="vignette">${r}<img loading="lazy" src=${a} alt="" @error=${i}></span>`;let o=Ga(e,t);if(o)return N`<span class="vignette">${r}<img loading="lazy" src=${o} alt="" @error=${i}></span>`;let s;if(t.couverture?.type===`media`){let n=t.couverture.mediaId;s=e.bibliotheque.contributions.filter(e=>e.techniqueId===t.id).flatMap(e=>e.medias).find(e=>e.id===n)}let c=e.bibliotheque.contributions.filter(e=>e.techniqueId===t.id&&e.provenance!==`personnel`).flatMap(e=>e.medias.map(t=>({media:t,source:F(e)}))).filter(e=>e.media.type===`plateforme`&&e.media.service===`youtube`),l=s??(n?c.find(e=>e.source===n)?.media:void 0)??c[0]?.media;return N`<span class="vignette">
    ${r}
    ${(e.preferences.vignettesDistantes??!1)&&l&&l.type===`plateforme`&&l.service===`youtube`&&Ba(l.ref)?N`<img loading="lazy" src="https://img.youtube.com/vi/${l.ref}/mqdefault.jpg" alt="" @error=${i}>`:P}
  </span>`}function Ka(e){return N`<span class="puce-niveau" style="background:${e.couleur?e.couleur2?`linear-gradient(90deg, ${e.couleur} 50%, ${e.couleur2} 50%)`:e.couleur:`var(--trait)`}" title=${e.nom}></span>`}var W={recherche:``,vue:`liste`,bienvenue:!1,filtre:null,tri:`pertinence`,plein:!1,exIntent:null,exChemin:[],exCompare:null,mmDeplie:new Set,mmMasque:new Set,mmCherche:!1,carteDeplie:new Set,carteMasque:new Set,carteRoleDeplie:new Set},G=[],qa=[];function Ja(e,t){let n=G.lastIndexOf(t);G=n>=0?G.slice(0,n+1):[...G,t],qa=[],e.recentrerRelations(t)}function Ya(e){G.length<=1||(qa=[G[G.length-1],...qa],G=G.slice(0,-1),e.recentrerRelations(G[G.length-1]))}function Xa(e){let t=qa[0];t&&(qa=qa.slice(1),G=[...G,t],e.recentrerRelations(t))}function Za(e){if(G.length===0){G=[e];return}if(G[G.length-1]===e)return;let t=G.lastIndexOf(e);G=t>=0?G.slice(0,t+1):[...G,e],qa=[]}function Qa(e,t){return t.familleId?e.disciplines.find(e=>e.id===t.disciplineId)?.familles.find(e=>e.id===t.familleId)?.nom??``:``}function $a(e){return`role--${e}`}function eo(e,t){let n=e.technique(t)?.alertes?.[0];return n?N`<span class="rel-alerte" title=${n.libelle}>⚠️</span>`:P}function to(e){let t=e=>N`<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">${fe`<path d=${e}></path>`}</svg>`;switch(e){case`before`:return t(`M20 12H6M11 6l-6 6 6 6`);case`after`:return t(`M4 12h14M13 6l6 6-6 6`);case`opposition`:return t(`M12 3l7 3v5c0 4.2-2.9 7.7-7 8.9C7.9 18.7 5 15.2 5 11V6z`);case`peer`:return t(`M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 17l-5.2 2.7 1-5.8L3.5 9.7l5.9-.9z`);case`context`:return t(`M4 5h11a3 3 0 013 3v11M4 5v11a3 3 0 003 3h12M4 5l4 3`);default:return t(`M4 12h14M13 6l6 6-6 6`)}}var no=[`before`,`after`,`opposition`,`peer`,`context`];function ro(e){let t=new Map;for(let n of e)t.set(n.libelle,[...t.get(n.libelle)??[],n]);return[...t.entries()].map(([e,t])=>({libelle:e,role:t[0].role,liste:t})).sort((e,t)=>no.indexOf(e.role)-no.indexOf(t.role)||e.libelle.localeCompare(t.libelle,`fr`))}function io(e,t){let n=t=>e.technique(t.techniqueId)?.nom??``;return[...t].map((e,t)=>({l:e,i:t})).sort((e,t)=>W.tri===`alpha`?n(e.l).localeCompare(n(t.l),`fr`)||e.i-t.i:(e.l.priorite??1/0)-(t.l.priorite??1/0)||e.i-t.i).map(e=>e.l)}function ao(e){switch(e){case`before`:return`var(--state-success)`;case`after`:return`var(--state-info)`;case`opposition`:return`#9B72D0`;case`peer`:return`var(--accent)`;case`context`:return`#C9971E`;default:return`var(--sourdine)`}}var oo=176,so=150,co=208,lo=168,uo=360,fo=330,po=168,mo=210,ho=4,go=48,_o=.3,vo=2.4,yo={before:{axe:`v`,ax:-360,ay:0},after:{axe:`v`,ax:uo,ay:0},peer:{axe:`h`,ax:0,ay:-330},opposition:{axe:`h`,ax:0,ay:fo},context:{axe:`v`,ax:-360,ay:fo}},bo=4,xo=265,So=40,Co=.6,wo=1,To=!1;function Eo(e,t,n){return e.axe===`v`?{x:e.ax,y:e.ay-(n-1)*po/2+t*po}:{x:e.ax-(n-1)*mo/2+t*mo,y:e.ay}}function Do(e,t,n){if(n===`before`||n===`after`){let n=e.x+(t.x<e.x?-e.w/2:e.w/2),r=e.y,i=t.x+(t.x<e.x?t.w/2:-t.w/2),a=t.y,o=(n+i)/2;return`M${n} ${r} C ${o} ${r} ${o} ${a} ${i} ${a}`}let r=e.y+(t.y<e.y?-e.h/2:e.h/2),i=e.x,a=t.y+(t.y<e.y?t.h/2:-t.h/2),o=t.x,s=(r+a)/2;return`M${i} ${r} C ${i} ${s} ${o} ${s} ${o} ${a}`}function Oo(e){return e?so+Math.min(8,Math.ceil(e.length/22))*13:so}function ko(e){for(let t=0;t<120;t++){let t=!1;for(let n=0;n<e.length;n++)for(let r=n+1;r<e.length;r++){let i=e[n],a=e[r],o=a.x-i.x,s=a.y-i.y,c=(i.w+a.w)/2+16-Math.abs(o),l=(i.h+a.h)/2+16-Math.abs(s);if(c<=0||l<=0)continue;let u=c<l,d=Math.sign(u?o||1:s||1),f=u?c:l,p=i.centre?0:a.centre?f:f/2,m=a.centre?0:i.centre?f:f/2;u?(i.x-=d*p,a.x+=d*m):(i.y-=d*p,a.y+=d*m),t=!0}if(!t)break}}function Ao(e,t,n,r){let i=[],a=new Map,o={x:0,y:0,w:co,h:lo,centre:!0,role:null,niveau:0,nom:n.nom,fam:Qa(t,n),id:n.id},s=e.technique(n.id)?.alertes?.[0]?.libelle;s&&(o.alerte=s),i.push(o),a.set(n.id,o);let c=new Map;for(let e of r)c.set(e.role,[...c.get(e.role)??[],e]);for(let n of no){let r=c.get(n);if(!r||r.length===0)continue;let o=io(e,r),s=W.carteRoleDeplie.has(n)?1/0:ho,l=o.length>s?o.slice(0,s-1):o,u=o.length-l.length,d=l.length+ +(u>0),f=yo[n];if(l.forEach((r,o)=>{let s=e.technique(r.techniqueId),c=Eo(f,o,d),l={x:c.x,y:c.y,w:oo,h:Oo(r.note),role:n,niveau:1,id:r.techniqueId,nom:s?.nom??`(absente)`,fam:s?Qa(t,s):``,absente:!r.presente||!s};r.note!==void 0&&(l.note=r.note);let u=s?.alertes?.[0]?.libelle;u&&(l.alerte=u),i.push(l),l.id&&!l.absente&&!a.has(l.id)&&a.set(l.id,l)}),u>0){let e=Eo(f,l.length,d);i.push({x:e.x,y:e.y,w:oo,h:so,role:n,plus:u,nom:`+${u} autres`,fam:``})}}let l=[];for(let n of W.carteDeplie){let r=a.get(n);if(!r)continue;r.deplie=!0;let o=io(e,Ra(t,n).filter(e=>e.presente&&!W.carteMasque.has(e.libelle))),s=o.filter(e=>!a.has(e.techniqueId)).slice(0,Math.max(0,Math.min(bo,So-i.length))),c=Math.hypot(r.x,r.y)||1,u=r.x/c,d=r.y/c,f=-d,p=u,m=Math.abs(f)*210+Math.abs(p)*190;s.forEach((n,o)=>{let c=e.technique(n.techniqueId);if(!c)return;let h=(o-(s.length-1)/2)*m,g={x:r.x+u*xo+f*h,y:r.y+d*xo+p*h,w:oo,h:Oo(n.note),role:n.role,niveau:(r.niveau??1)+1,id:n.techniqueId,nom:c.nom,fam:Qa(t,c)};n.note!==void 0&&(g.note=n.note);let _=c.alertes?.[0]?.libelle;_&&(g.alerte=_),i.push(g),a.set(g.id,g),l.push({de:r,vers:g,role:n.role})});for(let e of o){let t=a.get(e.techniqueId);t&&t!==r&&!s.some(t=>t.techniqueId===e.techniqueId)&&l.push({de:r,vers:t,role:e.role})}}for(let e of i)!e.id||e.absente||e.centre||(e.depl=Ra(t,e.id).filter(e=>e.presente&&!a.has(e.techniqueId)&&!W.carteMasque.has(e.libelle)).length);ko(i);let u=1/0,d=-1/0,f=1/0,p=-1/0;for(let e of i)u=Math.min(u,e.x-e.w/2),d=Math.max(d,e.x+e.w/2),f=Math.min(f,e.y-e.h/2),p=Math.max(p,e.y+e.h/2);let m=go-u,h=go-f,g=new Map,_=i.map(e=>{let t={...e,x:e.x+m,y:e.y+h};return g.set(e,t),t}),v=_[0],y=[];for(let e=1;e<_.length;e++){let t=_[e];(t.role&&(t.niveau??1)===1||t.plus)&&y.push({d:Do(v,t,t.role??`peer`),role:t.role??`peer`})}for(let e of l){let t=g.get(e.de),n=g.get(e.vers);y.push({d:Do(t,n,e.role),role:e.role})}return{noeuds:_,aretes:y,sceneW:d-u+2*go,sceneH:p-f+2*go,hubX:v.x,hubY:v.y}}var K={tx:0,ty:0,k:1,fitId:``},jo=null,Mo=null,No={w:1,h:1,hubX:0,hubY:0};function Po(){jo&&(jo.style.transform=`translate(${K.tx}px, ${K.ty}px) scale(${K.k})`)}function Fo(){if(!Mo)return;let e=Mo.getBoundingClientRect();if(!e.width||!e.height)return;let t=Math.max(Co,Math.min(wo,Math.min(e.width/No.w,e.height/No.h)));K.k=t,K.tx=e.width/2-No.hubX*t,K.ty=e.height/2-No.hubY*t,Po()}function Io(e,t,n){if(!Mo)return;let r=Mo.getBoundingClientRect(),i=e-r.left,a=t-r.top,o=Math.max(_o,Math.min(vo,K.k*n)),s=(i-K.tx)/K.k,c=(a-K.ty)/K.k;K.k=o,K.tx=i-s*o,K.ty=a-c*o,Po()}function Lo(e){if(!Mo)return;let t=Mo.getBoundingClientRect();Io(t.left+t.width/2,t.top+t.height/2,e)}function Ro(e){let[t,n]=[...e.values()];return t&&n?Math.hypot(t.x-n.x,t.y-n.y):0}function zo(e){let[t,n]=[...e.values()];return t&&n?{x:(t.x+n.x)/2,y:(t.y+n.y)/2}:{x:0,y:0}}function Bo(e){let t=new Map,n=null,r=null,i=0;e.addEventListener(`pointerdown`,i=>{To=!1,t.set(i.pointerId,{x:i.clientX,y:i.clientY}),t.size===1?(n={x:i.clientX,y:i.clientY},r=null):t.size===2&&(n=null,r={dist:Ro(t)}),e.classList.add(`grab`)}),e.addEventListener(`pointermove`,i=>{if(t.has(i.pointerId)){if(t.set(i.pointerId,{x:i.clientX,y:i.clientY}),t.size>=2&&r){let e=Ro(t),n=zo(t);r.dist>0&&Io(n.x,n.y,e/r.dist),r.dist=e,To=!0}else if(n){let t=i.clientX-n.x,r=i.clientY-n.y;if(!To&&Math.abs(t)+Math.abs(r)>6){To=!0;try{e.setPointerCapture(i.pointerId)}catch{}}K.tx+=t,K.ty+=r,n={x:i.clientX,y:i.clientY},Po()}}});let a=i=>{t.delete(i.pointerId);try{e.releasePointerCapture(i.pointerId)}catch{}if(t.size===1){let[e]=[...t.values()];n=e?{x:e.x,y:e.y}:null,r=null}else t.size===0&&(n=null,r=null,e.classList.remove(`grab`))};e.addEventListener(`pointerup`,a),e.addEventListener(`pointercancel`,a),e.addEventListener(`wheel`,e=>{e.preventDefault(),Io(e.clientX,e.clientY,e.deltaY>0?.9:1.11)},{passive:!1}),e.addEventListener(`dblclick`,()=>Fo()),e.addEventListener(`pointerup`,e=>{if(e.pointerType!==`touch`)return;let t=Date.now();t-i<320&&Fo(),i=t})}function Vo(e,t){let n=`left:${t.x-t.w/2}px; top:${t.y-t.h/2}px; width:${t.w}px; height:${t.h}px`,r=t.alerte?N`<span class="rel-alerte" title=${t.alerte}>⚠️</span>`:P;if(t.centre&&t.id){let i=e.technique(t.id);return N`<button class="rel-carte-carte hub" style=${n} @click=${()=>{To||e.ouvrirFiche(t.id)}} title="Ouvrir la fiche">
      <span class="rel-carte-media">${i?U(e,i):P}</span>
      <span class="rel-carte-nom">${t.nom}${r}</span>
      <span class="rel-carte-voir">Ouvrir la fiche ›</span>
    </button>`}if(t.plus&&t.role)return N`<button class="rel-carte-carte plus ${$a(t.role)}" style=${n}
      @click=${()=>{!To&&t.role&&(W.carteRoleDeplie.add(t.role),e.requestUpdate())}}>
      <span class="rel-carte-plus-txt">${t.nom}</span>
      <span class="rel-carte-plus-sous">déplier ici ›</span>
    </button>`;let i=t.id?e.technique(t.id):void 0;if(t.absente||!i)return N`<div class="rel-carte-carte absente ${t.role?$a(t.role):``}" style=${n}>
      <span class="rel-carte-nom">${t.nom}</span>
    </div>`;let a=t.deplie||(t.depl??0)>0?N`<button class="rel-carte-depl ${t.deplie?`actif`:``}"
        style=${`left:${t.x+t.w/2-16}px; top:${t.y+t.h/2-13}px`}
        aria-label=${t.deplie?`Replier les liens de ce nœud`:`Déplier ${t.depl} lien${(t.depl??0)>1?`s`:``} de plus`}
        title=${t.deplie?`Replier`:`Déplier ${t.depl} lien${(t.depl??0)>1?`s`:``} de plus`}
        @click=${n=>{n.stopPropagation(),!(To||!t.id)&&(t.deplie?W.carteDeplie.delete(t.id):W.carteDeplie.add(t.id),e.requestUpdate())}}>${t.deplie?`−`:`+${t.depl}`}</button>`:P;return N`<button class="rel-carte-carte ${$a(t.role??`peer`)} ${(t.niveau??1)>=2?`niveau2`:``}" style=${n}
    @click=${()=>{!To&&t.id&&Ja(e,t.id)}} title=${t.note??P}>
    <span class="rel-carte-media">${U(e,i)}</span>
    <span class="rel-carte-nom">${i.nom}${r}</span>
    ${t.note?N`<span class="rel-carte-note">${t.note}</span>`:P}
  </button>${a}`}function Ho(e,t,n,r){K.fitId!==n.id&&(W.carteDeplie.clear(),W.carteRoleDeplie.clear());let i=ro(r),a=r.filter(e=>!W.carteMasque.has(e.libelle)),{noeuds:o,aretes:s,sceneW:c,sceneH:l,hubX:u,hubY:d}=Ao(e,t,n,a);No={w:c,h:l,hubX:u,hubY:d};let f=[...new Set(a.filter(e=>e.presente).map(e=>e.techniqueId))];return N`
    <div class="rel-carte-chips" role="list" aria-label="Familles de liens (légende / filtre)">
      ${i.map(t=>{let n=W.carteMasque.has(t.libelle),r=ao(t.role);return N`<button role="listitem" class="rel-carte-chip ${n?`masque`:``}"
          style=${`color:${r}; background:color-mix(in srgb, ${r} 15%, var(--carte))`}
          @click=${()=>{n?W.carteMasque.delete(t.libelle):W.carteMasque.add(t.libelle),e.requestUpdate()}}
          title=${n?`Afficher « ${t.libelle} »`:`Masquer « ${t.libelle} »`}>
          ${to(t.role)}<span class="rel-carte-chip-lib">${t.libelle}</span><span class="rel-carte-chip-n">${t.liste.length}</span>
        </button>`})}
    </div>
    <div class="rel-carte ${W.plein?`plein`:``}">
      <div class="rel-carte-outils">
        <button class="rel-carte-bt" @click=${()=>Lo(1.25)} aria-label="Zoom avant" title="Zoom avant">+</button>
        <button class="rel-carte-bt" @click=${()=>Lo(.8)} aria-label="Zoom arrière" title="Zoom arrière">−</button>
        <button class="rel-carte-bt" @click=${()=>Fo()} aria-label="Réajuster la carte" title="Réajuster">⊙</button>
        <button class="rel-carte-bt ${W.carteDeplie.size>0||W.carteRoleDeplie.size>0?`actif`:``}" @click=${()=>{if(W.carteDeplie.size>0||W.carteRoleDeplie.size>0)W.carteDeplie.clear(),W.carteRoleDeplie.clear();else{f.forEach(e=>W.carteDeplie.add(e));for(let e of i)W.carteRoleDeplie.add(e.role)}e.requestUpdate()}}
          aria-label=${W.carteDeplie.size>0||W.carteRoleDeplie.size>0?`Replier tout (premier niveau)`:`Tout déplier`}
          title=${W.carteDeplie.size>0||W.carteRoleDeplie.size>0?`Replier tout (premier niveau)`:`Tout déplier`}>${W.carteDeplie.size>0||W.carteRoleDeplie.size>0?`⊟`:`⊞`}</button>
        <button class="rel-carte-bt ${W.plein?`actif`:``}" @click=${()=>{W.plein=!W.plein,K.fitId=``,e.requestUpdate()}}
          aria-label=${W.plein?`Quitter le plein écran`:`Plein écran`} title=${W.plein?`Quitter le plein écran`:`Plein écran`}>⛶</button>
      </div>
      <div class="rel-carte-aide">Glisse pour te déplacer · pince/molette pour zoomer · touche une carte pour recentrer</div>
      <div class="rel-carte-vue" ${Pa(e=>{e&&(Mo=e,Mo.dataset.carteInstallee||(Mo.dataset.carteInstallee=`1`,Bo(Mo)))})}>
        <div class="rel-carte-scene" style=${`width:${c}px; height:${l}px`} ${Pa(e=>{if(!e)return;jo=e;let t=K.fitId!==n.id;K.fitId=n.id,requestAnimationFrame(()=>{t?Fo():Po()})})}>
          <svg class="rel-carte-liens" viewBox=${`0 0 ${c} ${l}`} width=${c} height=${l} aria-hidden="true">
            ${s.map(e=>fe`<path d=${e.d} stroke-linecap="round" style=${`stroke:${ao(e.role)}; fill:none; stroke-width:2.6; opacity:.7`}></path>`)}
          </svg>
          ${o.map(t=>Vo(e,t))}
        </div>
      </div>
    </div>
  `}var Uo=2,Wo={peer:`top`,before:`left`,after:`right`,context:`bottom`,opposition:`second`},Go={top:`peer`,left:`after`,right:`after`,bottom:`context`,second:`opposition`,autres:`context`};function Ko(e){switch(e){case`top`:return`var(--accent)`;case`left`:return`var(--state-success)`;case`right`:return`var(--state-info)`;case`bottom`:return`#C9971E`;case`second`:return`#9B72D0`;default:return`var(--sourdine)`}}var qo=[`top`,`left`,`right`,`bottom`,`second`,`autres`],Jo=new Set([`top`,`bottom`,`second`,`autres`]),Yo={top:`Similaires`,left:`Enchaînée depuis`,right:`Enchaîne vers`,bottom:`Fondamentaux requis`,second:`Contre`,autres:`Autres liens`};function Xo(e,t){let n=e.typesRelation.find(e=>e.id===t.typeId)?.role;if(n===void 0){let e=`${t.typeId} ${t.libelle}`.toLowerCase();return/kata|fondament|prerequis|prérequis|prealable|préalable|requis|kihon|principe|\bbase\b/.test(e)?`bottom`:(typeof console<`u`&&console.warn(`[mindmap] relation de type sans rôle « ${t.typeId} » (${t.libelle}) → Autres`),`autres`)}return t.directe||(n===`after`?n=`before`:n===`before`&&(n=`after`)),Wo[n]}function Zo(e){return[...e].map((e,t)=>({l:e,i:t})).sort((e,t)=>(e.l.priorite??1/0)-(t.l.priorite??1/0)||e.i-t.i).map(e=>e.l)}function Qo(e){try{let t=e.querySelector(`.rel-mm-monde`)??e,n=t.querySelector(`.rel-mm-liens`),r=t.querySelector(`.rel-mm-hub`);if(!n||!r)return;let i=t.getBoundingClientRect();if(i.width===0)return;n.setAttribute(`viewBox`,`0 0 ${i.width} ${i.height}`);let a=e=>({l:e.left-i.left,t:e.top-i.top,r:e.right-i.left,b:e.bottom-i.top,cx:(e.left+e.right)/2-i.left,cy:(e.top+e.bottom)/2-i.top}),o=a(r.getBoundingClientRect()),s=[];Array.from(t.querySelectorAll(`.rel-mm-branche`)).forEach(e=>{let t=e,n=t.dataset.slot??``,r=t.dataset.couleur??`var(--sourdine)`,i=Array.from(t.querySelectorAll(`.rel-mm-carte`)).map(e=>a(e.getBoundingClientRect()));if(i.length===0)return;let c=e=>{let t=document.createElementNS(`http://www.w3.org/2000/svg`,`path`);t.setAttribute(`d`,e),t.setAttribute(`style`,`stroke:${r};fill:none;stroke-width:2;opacity:.9`),t.setAttribute(`stroke-linecap`,`round`),s.push(t)},l=(e,t,n,r)=>c(`M${e} ${t} L${n} ${r}`),u=(e,t,n,r)=>c(`M${e} ${t} C ${e} ${(t+r)/2} ${n} ${(t+r)/2} ${n} ${r}`),d=(e,t,n,r)=>c(`M${e} ${t} C ${(e+n)/2} ${t} ${(e+n)/2} ${r} ${n} ${r}`);if(n===`top`){let e=o.t-11;l(o.cx,o.t,o.cx,e),i.forEach(t=>u(o.cx,e,t.cx,t.b-2))}else if(n===`left`){let e=o.l-11;l(o.l,o.cy,e,o.cy),i.forEach(t=>d(e,o.cy,t.r-2,t.cy))}else if(n===`right`){let e=o.r+11;l(o.r,o.cy,e,o.cy),i.forEach(t=>d(e,o.cy,t.l+2,t.cy))}else if(n===`bottom`){let e=a(t.getBoundingClientRect()),n=Math.max(o.b+12,e.t-4);i.slice(0,3).forEach(e=>{let t=Math.max(o.l+14,Math.min(o.r-14,e.cx));l(t,o.b,t,n)})}else if(n===`second`){let e=a(t.getBoundingClientRect());i.slice(0,1).forEach(t=>l(o.cx,o.b,t.cx,Math.max(o.b+12,e.t-4)))}else{let e=a(t.getBoundingClientRect());i.slice(0,1).forEach(t=>u(o.cx,o.b,t.cx,Math.max(o.b+12,e.t-4)))}}),n.replaceChildren(...s)}catch{}}function $o(e,t,n,r){let i=new Map;for(let e of r){let n=Xo(t,e);i.set(n,[...i.get(n)??[],e])}let a=qo.filter(e=>(i.get(e)?.length??0)>0).map(e=>{let t=i.get(e),n=[...new Set(t.map(e=>e.libelle))];return{slot:e,label:n.length===1?n[0]:Yo[e],liste:Zo(t),total:t.length,filtre:n.length===1?n[0]:null}}),o=a.filter(e=>!W.mmMasque.has(e.slot)),s=W.mmDeplie.size>0,c=e=>{e&&requestAnimationFrame(()=>{let t=e.querySelector(`.rel-mm-scene`);if(t&&(t.style.transform=``,!s)){let n=Math.min(1,e.clientHeight/Math.max(1,t.scrollHeight),e.clientWidth/Math.max(1,t.scrollWidth));n<.999&&(t.style.transform=`scale(${n})`)}requestAnimationFrame(()=>Qo(e))})},l=Qa(t,n);return N`
    <div class="rel-mm-chips" role="list" aria-label="Familles de relations (légende / filtre)">
      ${a.map(t=>{let n=W.mmMasque.has(t.slot);return N`<button role="listitem" class="rel-mm-chip slot--${t.slot} ${n?`masque`:``}"
          @click=${()=>{n?W.mmMasque.delete(t.slot):W.mmMasque.add(t.slot),e.requestUpdate()}}
          title=${n?`Afficher « ${t.label} »`:`Masquer « ${t.label} »`}>
          ${to(Go[t.slot])}<span class="rel-mm-chip-lib">${t.label}</span><span class="rel-mm-chip-n">${t.total}</span>
        </button>`})}
    </div>
    <div class="rel-mm-radial ${s?`defile`:``}" ${Pa(c)}>
      <div class="rel-mm-monde">
        <svg class="rel-mm-liens" aria-hidden="true"></svg>
        <div class="rel-mm-scene">
          <button class="rel-mm-hub" @click=${()=>e.ouvrirFiche(n.id)} title="Ouvrir la fiche">
            <span class="rel-mm-hub-media">${U(e,n)}</span>
            <span class="rel-mm-hub-nom">${n.nom}${eo(e,n.id)}</span>
            ${l?N`<span class="rel-mm-hub-sous">${l}</span>`:P}
            <span class="rel-mm-hub-badge">${r.length} relation${r.length>1?`s`:``}</span>
          </button>
          ${o.map(n=>es(e,t,n))}
        </div>
      </div>
    </div>
  `}function es(e,t,n){let r=Go[n.slot],i=Jo.has(n.slot)?`rangee`:`colonne`,a=W.mmDeplie.has(n.slot),o=a?n.liste:n.liste.slice(0,Uo),s=n.total-o.length,c=()=>{W.vue=`liste`,W.filtre=n.filtre,e.requestUpdate()},l=()=>{a?W.mmDeplie.delete(n.slot):W.mmDeplie.add(n.slot),e.requestUpdate()};return N`
    <section class="rel-mm-branche slot--${n.slot} ${i} ${a?`depliee`:``}" style="grid-area:${n.slot}" data-slot=${n.slot} data-couleur=${Ko(n.slot)}>
      <button class="rel-mm-label" @click=${c} title="Voir « ${n.label} » dans la Liste">
        ${Jo.has(n.slot)?to(r):P}<span class="rel-mm-label-txt">${n.label}</span>
      </button>
      <div class="rel-mm-cartes">
        ${o.map(r=>ts(e,t,r,n.slot))}
        ${s>0?N`<button class="rel-mm-plus" @click=${l} title="Déplier les ${s} autres ici">+${s}</button>`:P}
        ${a?N`<button class="rel-mm-plus" @click=${l} title="Revenir à la vue synthétique">réduire</button>`:P}
      </div>
    </section>
  `}function ts(e,t,n,r){let i=e.technique(n.techniqueId);if(!n.presente||!i)return N`<div class="rel-mm-carte slot--${r} absente" title="Absente de la bibliothèque">absente</div>`;let a=Qa(t,i);return N`
    <button class="rel-mm-carte slot--${r}" title=${n.note??P} @click=${()=>Ja(e,i.id)}>
      <span class="rel-mm-carte-media">${U(e,i)}<span class="rel-mm-carte-badge">${to(Go[r])}</span></span>
      <span class="rel-mm-carte-nom">${i.nom}${eo(e,i.id)}</span>
      ${a?N`<span class="rel-mm-carte-fam">${a}</span>`:P}
    </button>
  `}var ns={after:`Enchaînement`,before:`Préparation`,peer:`Comparaison`,opposition:`Contre`,context:`Fondamental`};function rs(e,t){if(!t||t.niveauxIds.length===0)return P;let n=e.disciplines.find(e=>e.id===t.disciplineId),r=t.niveauxIds.map(e=>n?.niveaux.find(t=>t.id===e)).filter(e=>!!e);return r.length===0?P:N`<span class="rel-ex-cand-niv">${r.map(e=>N`<span class="carte-niveau">${Ka(e)}${e.nom}</span>`)}</span>`}function is(e,t,n,r){let i=e.technique(r.techniqueId),a=n=>n?N`<div class="rel-ex-face-col">
        <span class="rel-ex-face-media">${U(e,n)}</span>
        <span class="rel-ex-face-nom">${n.nom}${eo(e,n.id)}</span>
        ${n.nomTraditionnel?N`<span class="rel-ex-face-jp jp">${n.nomTraditionnel}</span>`:P}
        ${Qa(t,n)?N`<span class="rel-ex-face-fam">${Qa(t,n)}</span>`:P}
        ${rs(t,n)}
        <button class="rel-ex-ctrl" @click=${()=>e.ouvrirFiche(n.id)}>Ouvrir la fiche</button>
      </div>`:N`<div class="rel-ex-face-col"><span class="rel-ex-face-nom">?</span></div>`;return N`
    <div class="rel-ex-face">
      <span class="rel-ex-face-lien ${$a(r.role)}">${to(r.role)}${r.libelle}</span>
      <div class="rel-ex-face-cols">${a(n)}${a(i)}</div>
      ${r.note?N`<p class="rel-ex-face-note"><b>Ce qui les distingue :</b> ${r.note}</p>`:N`<p class="rel-ex-face-note vide">Aucune note de distinction sur ce lien — ajoute-la depuis la fiche (feuille « Lien »).</p>`}
      <div class="rel-ex-actions">
        <button class="rel-ex-ctrl" @click=${()=>{W.exCompare=null,e.requestUpdate()}}>← Autres correspondances</button>
        ${i?N`<button class="rel-ex-ctrl principal" @click=${()=>{W.exCompare=null,W.exChemin=[...W.exChemin,r.note===void 0?{id:r.techniqueId,role:r.role}:{id:r.techniqueId,note:r.note,role:r.role}],Ja(e,r.techniqueId)}}>Continuer sur ${i.nom}</button>`:P}
      </div>
    </div>
  `}function as(e){return e?N`<span class="rel-ex-badge ${$a(e)}" title="Étape atteinte par un lien « ${ns[e]} »">${to(e)}</span>`:P}var os=[{id:`enchainer`,titre:`Construire un enchaînement`,invite:`Suite après la technique`,garde:e=>e.role===`after`},{id:`preparer`,titre:`Trouver une préparation`,invite:`Ce qui amène à cette technique`,garde:e=>e.role===`before`},{id:`comparer`,titre:`Comparer / ne pas confondre`,invite:`Variantes et distinctions`,garde:e=>e.role===`peer`},{id:`defendre`,titre:`Voir les contres et réactions`,invite:`Ce qui répond à la technique`,garde:e=>e.role===`opposition`}],ss=6;function cs(e,t,n,r,i){return Ra(t,n).filter(e=>r.garde(e)&&e.presente&&!i.has(e.techniqueId)).sort((e,t)=>(e.priorite??1/0)-(t.priorite??1/0)).slice(0,ss)}function ls(e,t,n){let r=W.exChemin[W.exChemin.length-1]?.id;(W.exChemin.length===0||r!==n.id&&W.exChemin[0].id!==n.id)&&(W.exChemin=[{id:n.id}],W.exIntent=null,W.exCompare=null);let i=os.find(e=>e.id===W.exIntent);if(!i){let r=new Set(W.exChemin.map(e=>e.id)),i=os.map(i=>({i,n:cs(e,t,n.id,i,r).length})).filter(e=>e.n>0),a=W.exChemin.length>1;return N`
      <div class="rel-ex">
        ${a?N`
          <ol class="rel-ex-chemin">
            ${W.exChemin.map((t,n)=>N`
              ${n>0?N`<li class="rel-ex-pourquoi">${t.note??`—`}</li>`:P}
              <li class="rel-ex-etape ${n===W.exChemin.length-1?`courant`:``}">
                ${as(t.role)}
                <button class="rel-ex-nom" @click=${()=>e.ouvrirFiche(t.id)} title="Ouvrir la fiche">${e.technique(t.id)?.nom??`?`}</button>
              </li>
            `)}
          </ol>
          <p class="rel-ex-continue">Ton parcours continue — chaque objectif s'ajoute au chemin, le mélange est permis.</p>`:P}
        <p class="rel-ex-q">${a?N`Et maintenant, que veux-tu faire avec <strong>${n.nom}</strong> ?`:N`Que veux-tu faire avec <strong>${n.nom}</strong> ?`}</p>
        ${i.length===0?N`<p class="fil-vide">Aucun lien exploitable pour l'instant sur cette technique.</p>`:N`<div class="rel-ex-intents">
              ${i.map(({i:t,n:r})=>N`<button class="rel-ex-intent" @click=${()=>{W.exIntent=t.id,W.exChemin[W.exChemin.length-1]?.id!==n.id&&(W.exChemin=[{id:n.id}]),e.requestUpdate()}}>
                <span class="rel-ex-intent-t">${t.titre}</span>
                <span class="rel-ex-intent-s">${t.invite} · ${r}</span>
              </button>`)}
            </div>`}
      </div>
    `}let a=new Set(W.exChemin.map(e=>e.id)),o=W.exChemin[W.exChemin.length-1].id,s=cs(e,t,o,i,a);if(i.id===`comparer`&&W.exCompare){let n=s.find(e=>e.techniqueId===W.exCompare),r=e.technique(o);if(n&&r)return N`
        <div class="rel-ex">
          <div class="rel-ex-tete">
            <span class="rel-ex-obj">${i.titre}</span>
            <button class="rel-ex-changer" @click=${()=>{W.exIntent=null,W.exCompare=null,e.requestUpdate()}}>Changer d'objectif</button>
          </div>
          ${is(e,t,r,n)}
        </div>
      `;W.exCompare=null}return N`
    <div class="rel-ex">
      <div class="rel-ex-tete">
        <span class="rel-ex-obj">${i.titre}</span>
        <button class="rel-ex-changer" title="Choisir un autre objectif pour la suite — le parcours déjà construit reste" @click=${()=>{W.exIntent=null,W.exCompare=null,e.requestUpdate()}}>Changer d'objectif</button>
      </div>

      <ol class="rel-ex-chemin">
        ${W.exChemin.map((t,n)=>N`
          ${n>0?N`<li class="rel-ex-pourquoi">${t.note??`—`}</li>`:P}
          <li class="rel-ex-etape ${n===W.exChemin.length-1?`courant`:``}">
            ${as(t.role)}
            <button class="rel-ex-nom" @click=${()=>e.ouvrirFiche(t.id)} title="Ouvrir la fiche">${e.technique(t.id)?.nom??`?`}</button>
          </li>
        `)}
      </ol>

      <div class="rel-ex-actions">
        ${W.exChemin.length>1?N`<button class="rel-ex-ctrl" @click=${()=>{W.exChemin=W.exChemin.slice(0,-1),Ja(e,W.exChemin[W.exChemin.length-1].id)}}>← Revenir</button>`:P}
        ${W.exChemin.length>=2&&e.preferences.compositionsBeta?N`<button class="rel-ex-ctrl principal" @click=${()=>us(e)}>Enregistrer comme composition</button>`:P}
      </div>

      ${s.length?N`
            <p class="rel-ex-label">Étape suivante</p>
            <div class="rel-ex-suivants">
              ${s.map(n=>{let r=e.technique(n.techniqueId);return N`<button class="rel-ex-cand" @click=${()=>{if(i.id===`comparer`){W.exCompare=n.techniqueId,e.requestUpdate();return}W.exChemin=[...W.exChemin,n.note===void 0?{id:n.techniqueId,role:n.role}:{id:n.techniqueId,note:n.note,role:n.role}],Ja(e,n.techniqueId)}}>
                <span class="rel-ex-cand-nom">${r?.nom??`?`}${eo(e,n.techniqueId)}</span>
                ${rs(t,r)}
                ${n.note?N`<span class="rel-ex-cand-note">${n.note}</span>`:P}
              </button>`})}
            </div>`:N`<p class="fil-vide rel-ex-fin">Fin de piste — aucune suite pour cet objectif. Reviens en arrière ou change d'objectif.</p>`}
    </div>
  `}function us(e){let t=W.exChemin.map(t=>e.technique(t.id)?.nom??`?`).join(` → `),n=W.exChemin.map(e=>e.note===void 0?{techniqueId:e.id}:{techniqueId:e.id,consigne:e.note});e.creerCompositionDepuisEtapes(t,n)}function ds(e,t){W.recherche=``,W.bienvenue=!1,Ja(e,t)}function fs(){W.bienvenue=!0}var ps=!1;function ms(e){ps=!0,W.vue=e}function hs(e){let t=e.bibliotheque;if(!ps){ps=!0;let t=e.preferences.relationsVue;t&&(W.vue=t)}let n=e.techniqueCentreRelations(),r=n?e.technique(n):void 0,i=N`
    <header class="rel-tete">
      <div>
        <div class="rel-titre">Relations</div>
        <div class="rel-sous">Navigation par liens techniques</div>
      </div>
      <div class="rel-tete-actions">
        ${r?N`<button class="rel-tete-bt ${W.mmCherche?`actif`:``}" @click=${()=>{W.mmCherche=!W.mmCherche,W.mmCherche||(W.recherche=``),e.requestUpdate()}} aria-label="Rechercher une technique à centrer" title="Rechercher">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.8-3.8"/></svg>
              </button>
              <button class="rel-tete-bt" @click=${()=>xs(e)} aria-label="Centrer au hasard" title="Centrer au hasard">🎲</button>
              <button class="rel-tete-bt" ?disabled=${G.length<=1} @click=${()=>Ya(e)} aria-label="Technique précédente" title="Précédente">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M19 12H5M11 6l-6 6 6 6"/></svg>
              </button>
              <button class="rel-tete-bt" ?disabled=${qa.length===0} @click=${()=>Xa(e)} aria-label="Technique suivante" title="Suivante">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
              </button>`:P}
      </div>
    </header>`;if(!r||W.bienvenue)return N`<div class="ecran ecran-relations">
      ${i}
      ${t.techniques.length===0?N`<p class="fil-vide" style="padding-top:10px">Aucune technique pour l'instant — ajoute-en d'abord.</p>`:N`${r?N`<button class="chip-filtre rel-bienvenue-reprendre" style="margin:8px 18px 0"
                @click=${()=>{W.bienvenue=!1,e.requestUpdate()}}>← Reprendre sur ${r.nom}</button>`:P}
          ${gs(e,t)}`}
    </div>`;Za(r.id);let a=Ra(t,r.id);return N`
    <div class="ecran ecran-relations ${W.vue===`classique`?`mm-plein`:``}">
      ${i}
      ${vs(e)}
      ${ys(e,t,r)}

      ${W.vue===`mindmap`||W.vue===`classique`?P:ws(e,t,r,a)}
      ${a.length===0?N`<div class="rel-vide">
            <p class="fil-vide">Aucun lien pour l'instant.</p>
            <button class="action-douce" @click=${()=>e.ouvrirEditionLien(r.id)}>
              ＋ Créer un lien <span>depuis « ${r.nom} »</span>
            </button>
          </div>`:W.vue===`mindmap`?Ho(e,t,r,a):W.vue===`classique`?$o(e,t,r,a):W.vue===`explorer`?ls(e,t,r):Ts(e,t,a)}
    </div>
  `}function gs(e,t){let n=W.recherche.trim(),r=n?jr(t,n,8):[],i=e=>t.techniques.some(t=>t.id===e),a=[...G.slice().reverse(),...e.derniereTechniqueVue?[e.derniereTechniqueVue]:[]].filter((e,t,n)=>i(e)&&n.indexOf(e)===t).slice(0,6),o=t.favoris.filter(i),s=bs(t),c=()=>{if(s.length===0)return;let t=s[Math.floor(Math.random()*s.length)];ds(e,t.id)},l=n=>{let r=e.technique(n);if(!r)return P;let i=Qa(t,r);return N`<button class="rel-depart-item" @click=${()=>ds(e,n)}>
      <span class="rel-depart-media">${U(e,r)}</span>
      <span class="rel-depart-corps">
        <span class="rel-depart-nom">${r.nom}${eo(e,r.id)}</span>
        ${i?N`<span class="rel-depart-fam">${i}</span>`:P}
      </span>
    </button>`};return N`
    <div class="rel-depart">
      <h2 class="rel-depart-titre">Bienvenue dans Relations</h2>
      <p class="rel-depart-sous">Ici, ton savoir se navigue par les <b>liens</b> : chaque technique
        est reliée à celles qui la préparent, la suivent, la contrent ou lui ressemblent.</p>

      <!-- Les règles du jeu (D-180) : simple et ludique — une ligne par vue,
           une pour les outils d'en-tête. Réinvocable depuis Plus › À propos. -->
      <div class="rel-regles">
        <div class="rel-regle"><span class="rel-regle-ico">🧭</span><span><b>Le centre</b> — tu pars d'une technique ; tout s'organise autour d'elle. Toucher une technique reliée la met au centre.</span></div>
        <div class="rel-regle"><span class="rel-regle-ico">📜</span><span><b>Liste</b> — tous les liens du centre, groupés par rôle, avec la <i>raison</i> de chaque lien.</span></div>
        <div class="rel-regle"><span class="rel-regle-ico">🗺</span><span><b>Carte</b> — explore autour du centre : déplace, zoome, déplie les « +n » ; toucher une carte recentre.</span></div>
        <div class="rel-regle"><span class="rel-regle-ico">🧠</span><span><b>Mindmap</b> — la synthèse d'un coup d'œil : ce qui vient <i>avant</i> à gauche, <i>après</i> à droite, les contres dessous.</span></div>
        <div class="rel-regle"><span class="rel-regle-ico">🥾</span><span><b>Explorer</b> — choisis un objectif, on te propose un chemin réel — enregistrable en composition.</span></div>
        <div class="rel-regle"><span class="rel-regle-ico">🔍</span><span><b>En haut, partout</b> — la loupe centre sur la technique de ton choix, le 🎲 en tire une au sort, ← et → rejouent ton parcours.</span></div>
      </div>
      <p class="rel-depart-sous" style="opacity:.75">Tu retrouveras cet écran dans Plus › À propos et aide.</p>

      <h3 class="rel-depart-sec-titre" style="margin-top:14px">Choisis un point de départ</h3>

      <div class="recherche" style="margin:12px 0 0">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.8-3.8"/></svg>
        <input type="search" placeholder="Chercher une technique…" .value=${W.recherche}
               aria-label="Chercher une technique de départ"
               @input=${t=>{W.recherche=t.target.value,e.requestUpdate()}}>
      </div>
      ${n?r.length?N`<div class="rel-depart-liste">${r.map(e=>l(e.id))}</div>`:N`<p class="fil-vide" style="padding-top:10px">Aucune technique ne correspond.</p>`:P}

      ${!n&&a.length?N`<section class="rel-depart-sec">
            <h3 class="rel-depart-sec-titre">Récemment consultées</h3>
            <div class="rel-depart-liste">${a.map(e=>l(e))}</div>
          </section>`:P}

      ${!n&&o.length?N`<section class="rel-depart-sec">
            <h3 class="rel-depart-sec-titre">Favoris</h3>
            <div class="rel-depart-chips">${o.map(t=>_s(e,t))}</div>
          </section>`:P}

      ${s.length?N`<button class="rel-depart-hasard" @click=${c}>🎲 Explorer au hasard</button>`:P}
    </div>
  `}function _s(e,t){let n=e.technique(t);return n?N`<button class="rel-depart-chip" @click=${()=>ds(e,t)}>${n.nom}${eo(e,t)}</button>`:P}function vs(e){return N`
    <div class="rel-vues" role="tablist" aria-label="Vue des relations">
      ${[{id:`liste`,nom:`Liste`},{id:`mindmap`,nom:`Carte`},{id:`classique`,nom:`Mindmap`},{id:`explorer`,nom:`Explorer`}].map(t=>N`<button role="tab" aria-selected=${W.vue===t.id} class="rel-vue-onglet ${W.vue===t.id?`actif`:``}"
          @click=${()=>{W.vue=t.id,W.plein=!1,e.enregistrerVueRelations(t.id),e.requestUpdate()}}>${t.nom}</button>`)}
    </div>
  `}function ys(e,t,n){if(!W.mmCherche)return P;let r=W.recherche.trim(),i=r?jr(t,r,8).filter(e=>e.id!==n.id):[];return N`<div class="rel-mm-cherche">
    <div class="rel-mm-recherche">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.8-3.8"/></svg>
      <input type="search" placeholder="Centrer sur une technique…" .value=${W.recherche} autofocus
             aria-label="Centrer sur une autre technique"
             @input=${t=>{W.recherche=t.target.value,e.requestUpdate()}}>
    </div>
    ${i.length?N`<div class="rel-mm-res">${i.map(t=>N`<button class="chip-filtre" @click=${()=>{W.recherche=``,W.mmCherche=!1,W.filtre=null,Ja(e,t.id)}}>${t.nom}</button>`)}</div>`:P}
  </div>`}function bs(e){return e.techniques.filter(t=>t.relations.length>0||e.techniques.some(e=>e.relations.some(e=>e.cibleId===t.id)))}function xs(e){let t=e.bibliotheque;if(!t)return;let n=e.techniqueCentreRelations(),r=bs(t).filter(e=>e.id!==n);r.length!==0&&Ja(e,r[Math.floor(Math.random()*r.length)].id)}var Ss=!1;function Cs(e){if(!e)return;let t=()=>{document.querySelector(`.rel-centre`)?.classList.toggle(`compacte`,window.scrollY>48)};t(),Ss||(Ss=!0,window.addEventListener(`scroll`,t,{passive:!0}))}function ws(e,t,n,r){let i=Qa(t,n),a=new Set(r.map(e=>e.techniqueId)).size;return N`
    <button class="rel-centre" ${Pa(Cs)} @click=${()=>e.ouvrirFiche(n.id)} title="Ouvrir la fiche">
      <span class="rel-centre-media">${U(e,n)}</span>
      <span class="rel-centre-txt">
        <span class="rel-centre-nom">${n.nom}${eo(e,n.id)}</span>
        ${i?N`<span class="rel-centre-fam">${i}</span>`:P}
        <span class="rel-centre-compte">${a?`${a} technique${a>1?`s`:``} reliée${a>1?`s`:``}`:`aucun lien`}</span>
        <span class="rel-centre-voir">Ouvrir la fiche ›</span>
      </span>
    </button>
  `}function Ts(e,t,n){let r=ro(n),i=W.filtre&&r.some(e=>e.libelle===W.filtre)?W.filtre:null,a=i?r.filter(e=>e.libelle===i):r,o=e=>{let t=e;t?.classList.contains(`actif`)&&t.scrollIntoView({inline:`center`,block:`nearest`})};return N`
    <div class="rel-filtres">
      <button class="rel-chip ${i===null?`actif`:``}" ${Pa(o)}
        @click=${()=>{W.filtre=null,e.requestUpdate()}}>
        Toutes <span class="rel-chip-n">${n.length}</span>
      </button>
      ${r.map(t=>N`<button class="rel-chip ${$a(t.role)} ${i===t.libelle?`actif`:``}" ${Pa(o)}
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
      ${a.map(n=>N`<section class="rel-groupe ${$a(n.role)}">
          <header class="rel-groupe-tete">${to(n.role)}<span>${n.libelle}</span><span class="rel-groupe-n">${n.liste.length}</span></header>
          ${io(e,n.liste).map(n=>As(e,t,n))}
        </section>`)}
    </div>
  `}var q={hydrate:!1,typeId:``,sourceId:null,sourceRequete:``,cibleId:null,cibleRequete:``,note:``,priorite:void 0};function Es(){q.hydrate=!1}function Ds(e){let t=e.bibliotheque,n=e.editionLien,r=n.cibleId!==void 0&&n.typeId!==void 0;if(!q.hydrate){q.hydrate=!0,q.sourceId=n.sourceId,q.sourceRequete=``,q.cibleId=n.cibleId??null,q.cibleRequete=``,q.typeId=n.typeId??n.typePrefere??t.typesRelation[0]?.id??``;let e=r?t.techniques.find(e=>e.id===n.sourceId)?.relations.find(e=>e.type===n.typeId&&e.cibleId===n.cibleId):void 0;q.note=e?.note??``,q.priorite=e?.priorite}let i=()=>{e.editionLien=null,e.requestUpdate()},a=q.sourceId?e.technique(q.sourceId):void 0,o=q.cibleId?e.technique(q.cibleId):void 0,s=!!a&&!!o&&q.typeId!==``&&a.id!==o.id,c=async()=>{if(!s||!a||!o)return;let t=q.note.trim(),c;c=r?await e.modifierRelation(n.sourceId,n.cibleId,n.typeId,{type:q.typeId,note:t===``?null:t,priorite:q.priorite??null}):await e.ajouterRelation(a.id,{type:q.typeId,cibleId:o.id,...t===``?{}:{note:t},...q.priorite===void 0?{}:{priorite:q.priorite}}),c&&i()},l=()=>{e.demanderConfirmation({titre:`Retirer ce lien ?`,corps:`Les deux lectures (directe et inverse) disparaissent.`,bouton:`Retirer le lien`,action:()=>{e.retirerRelation(n.sourceId,n.cibleId,n.typeId).then(()=>i())}})},u=(n,r,i,a,o,s)=>{if(r&&s)return N`<div class="lien-fixe"><b>${r.nom}</b>${Qa(t,r)?N` <span class="lien-fixe-fam">· ${Qa(t,r)}</span>`:P}</div>`;if(r)return N`<div class="lien-fixe">
        <b>${r.nom}</b>${Qa(t,r)?N` <span class="lien-fixe-fam">· ${Qa(t,r)}</span>`:P}
        <button class="chip-filtre" style="margin-left:auto" @click=${()=>{o(void 0)}}>changer</button>
      </div>`;let c=i.trim()?jr(t,i,6).filter(e=>e.id!==(n===`cible`?q.sourceId:q.cibleId)):[];return N`
      <div class="recherche" style="margin:4px 0 0">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.8-3.8"/></svg>
        <input type="search" placeholder=${n===`source`?`Technique de départ…`:`Technique liée…`} .value=${i}
               aria-label=${n===`source`?`Chercher la technique de départ`:`Chercher la technique liée`}
               @input=${t=>{a(t.target.value),e.requestUpdate()}}>
      </div>
      ${c.length?N`<div class="chips-filtres" style="padding:6px 0 0">
            ${c.map(t=>N`<button class="chip-filtre" @click=${()=>{o(t),e.requestUpdate()}}>${t.nom}</button>`)}
          </div>`:P}
    `};return N`
    <div class="voile" @click=${i}></div>
    <div class="feuille" role="dialog" aria-modal="true" tabindex="-1" aria-label=${r?`Modifier le lien`:`Nouveau lien`}>
      <div class="prise"></div>
      <h2>${r?`Modifier le lien`:`Nouveau lien`}</h2>
      <div class="geste">La lecture inverse est automatique — la raison décrit le lien, elle s'affiche dans les deux sens.</div>

      <div class="section-titre" style="padding:10px 0 4px">Depuis</div>
      ${u(`source`,a,q.sourceRequete,e=>{q.sourceRequete=e},e=>{q.sourceId=e?e.id:null,q.sourceRequete=``},r||n.sourceId!==null)}

      <div class="section-titre" style="padding:12px 0 4px">Type de lien</div>
      <div class="chips-filtres" style="padding:0">
        ${t.typesRelation.map(t=>N`<button class="chip-filtre ${q.typeId===t.id?`actif`:``}"
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
        ${[1,2,3,4,5].map(t=>N`<button class="chip-filtre ${q.priorite===t?`actif`:``}"
          @click=${()=>{q.priorite=q.priorite===t?void 0:t,e.requestUpdate()}}>${t}</button>`)}
        <button class="chip-filtre ${q.priorite===void 0?`actif`:``}"
          @click=${()=>{q.priorite=void 0,e.requestUpdate()}}>aucune</button>
      </div>

      <div class="actions" style="margin-top:14px">
        ${r?N`<button class="bouton danger-lien" @click=${l}>Retirer ce lien</button>`:P}
        <button class="bouton" @click=${i}>Annuler</button>
        <button class="bouton principal" ?disabled=${!s} @click=${()=>void c()}>${r?`Enregistrer`:`Ajouter`}</button>
      </div>
    </div>
  `}function Os(e,t,n){let r=n.directe?t:n.techniqueId,i=n.directe?n.techniqueId:t;e.ouvrirEditionLien(r,i,n.typeId)}function ks(e,t,n,r,i){let a=e.technique(n.techniqueId);if(!n.presente||!a)return N`<div class="rel-ligne absente"><span class="rel-ligne-nom">absente de la bibliothèque</span></div>`;let o=Qa(t,a);return N`
    <div class="rel-ligne-conteneur">
      <button class="rel-ligne" @click=${()=>r(a.id)}>
        <span class="rel-ligne-media">${U(e,a)}</span>
        <span class="rel-ligne-corps">
          <span class="rel-ligne-nom">${a.nom}${eo(e,a.id)}</span>
          ${o?N`<span class="rel-ligne-fam">${o}</span>`:P}
        </span>
        ${n.note?N`<span class="rel-ligne-note">${n.note}</span>`:P}
        <span class="rel-ligne-fleche">›</span>
      </button>
      ${i?N`<button class="rel-ligne-editer" aria-label="Modifier ce lien" title="Modifier ce lien"
            @click=${e=>{e.stopPropagation(),i()}}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>
          </button>`:P}
    </div>
  `}function As(e,t,n){let r=e.techniqueCentreRelations();return ks(e,t,n,t=>{W.filtre=null,Ja(e,t)},r?()=>Os(e,r,n):void 0)}var js=2;function Ms(e,t,n){let r=Ra(t,n.id);if(r.length===0)return N`
      <div class="liaisons relations">
        <h2 class="section-titre" style="padding:12px 0 6px">Relations</h2>
        <button class="action-douce rel-fiche-lien" @click=${()=>e.ouvrirEditionLien(n.id)}>
          ＋ Ajouter un lien <span>relie cette technique à une autre</span>
        </button>
      </div>`;let i=ro(r),a=i.filter(e=>e.role!==`context`),o=i.filter(e=>e.role===`context`),s=r=>N`
    <section class="rel-groupe ${$a(r.role)}">
      <header class="rel-groupe-tete">${to(r.role)}<span>${r.libelle}</span><span class="rel-groupe-n">${r.liste.length}</span></header>
      ${io(e,r.liste).slice(0,js).map(r=>ks(e,t,r,t=>e.ouvrirFiche(t),()=>Os(e,n.id,r)))}
    </section>`;return N`
    <div class="liaisons relations">
      <h2 class="section-titre" style="padding:12px 0 6px">Relations · ${r.length}</h2>
      <div class="rel-fiche-listes">
        ${a.map(s)}
      </div>
      ${o.length?N`<div class="rel-fiche-contexte">
            <div class="rel-fiche-contexte-titre">Présente dans</div>
            ${o.map(s)}
          </div>`:P}
      <button class="action-douce rel-fiche-lien" @click=${()=>e.ouvrirEditionLien(n.id)}>
        ＋ Ajouter un lien <span>type, technique liée, raison, priorité</span>
      </button>
      <button class="action-douce rel-fiche-toutes" @click=${()=>e.ouvrirRelationsVisuelle(n.id,`liste`)}>
        Voir toutes les relations <span>(${r.length})</span>
      </button>
    </div>
  `}var Ns=N`<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.8-3.8"/></svg>`;function Ps(e,t,n){let r=n.value.trim();if(!r)return;let i=Hr(e.bibliotheque,t.id,r).exacte;if(i){e.demanderConfirmation({titre:`« ${i.nom} » existe déjà dans ${t.nom}`,corps:`Créer quand même une technique distincte ?`,bouton:`Créer quand même`,action:()=>{e.creerTechnique(t.id,r),n.value=``}});return}e.creerTechnique(t.id,r),n.value=``}function Fs(){return N`<header class="marque">
    <img class="marque-logo" src="./movenso-mark-sombre.svg" width="40" height="40" alt="" aria-hidden="true">
    <div style="flex:1">
      <div class="nom">Movenso</div>
      <div class="devise">Ta mémoire du mouvement.</div>
    </div>
  </header>`}function Is(e){if(e===`local`)return`Mon contenu`;let t=e.replace(/^pack-/,``).replaceAll(`-`,` `);return t.charAt(0).toUpperCase()+t.slice(1)}function Ls(e){let t=e.attribution?.trim(),n=e.origine?Is(F(e)):void 0,r=n&&/^[0-9A-HJKMNP-TV-Z]{26}$/.test(n)?void 0:n;return t&&r&&r.length>t.length&&r.toLowerCase().includes(t.toLowerCase())?r:t??r??`Moi`}function Rs(e){let t=new Map;for(let n of e)t.has(n.id)||t.set(n.id,n);return[...t.values()]}function zs(e){return e.nom.trim().toLowerCase().replace(/\s+/g,` `)}function Bs(e){let t=new Set;return e.filter(e=>{let n=zs(e);return t.has(n)?!1:(t.add(n),!0)})}function Vs(e){return{familleParId:new Map(e.disciplines.flatMap(e=>e.familles).map(e=>[e.id,e])),niveauParId:new Map(e.disciplines.flatMap(e=>e.niveaux).map(e=>[e.id,e]))}}function Hs(e){return N`<svg width="20" height="20" viewBox="0 0 24 24" fill=${e?`currentColor`:`none`}
    stroke="currentColor" stroke-width="2" aria-hidden="true">
    <path d="M12 20.5s-7.2-4.6-9.6-9C1 8.8 2.4 5.5 5.6 5.5c2 0 3.2 1.1 4.4 2.7 1.2-1.6 2.4-2.7 4.4-2.7 3.2 0 4.6 3.3 3.2 6-2.4 4.4-9.6 9-9.6 9Z"/>
  </svg>`}function Us(e,t,n,r){let i=F(t),a=e.estFavori(t.id);return N`<div class="carte-technique">
    <button class="carte-ouvrir" @click=${()=>e.ouvrirFiche(t.id)}>
      <span class="carte-media">${U(e,t,i)}</span>
      <span class="carte-nom">${t.nom}</span>
      ${t.nomTraditionnel?N`<span class="carte-jp jp">${t.nomTraditionnel}</span>`:P}
      ${t.niveauxIds.length?N`<span class="carte-sous">
            ${t.niveauxIds.map(e=>{let t=r.get(e);return t?N`<span class="carte-niveau">${Ka(t)}${t.nom}</span>`:P})}
          </span>`:P}
    </button>
    <button class="coeur ${a?`actif`:``}" aria-pressed=${a}
      aria-label=${a?`Retirer des favoris`:`Ajouter aux favoris`} title=${a?`Retirer des favoris`:`Ajouter aux favoris`}
      @click=${n=>{n.stopPropagation(),e.basculerFavori(t.id)}}>${Hs(a)}</button>
  </div>`}function Ws(e){let t=e.preferences.densiteBibliotheque;return t?`grid-template-columns:repeat(${t},1fr)`:``}function Gs(e,t){let n=e.bibliotheque,r=e.filtres,{familleParId:i,niveauParId:a}=Vs(n),o=t=>e.majFiltres({...r,...t}),s=(e,t)=>o({[e]:r[e]===t?null:t}),c=t=>{let i=t?n.disciplines.filter(e=>e.id===t):n.disciplines,o=new Set(i.flatMap(e=>e.familles.map(e=>e.id))),s=new Set(n.techniques.filter(e=>!t||e.disciplineId===t).map(F)),c=r.niveauId?a.get(r.niveauId):void 0,l=c?zs(c):null,u=l?i.flatMap(e=>e.niveaux).find(e=>zs(e)===l)?.id??null:null;e.majFiltres({...r,disciplineId:t,familleId:r.familleId&&o.has(r.familleId)?r.familleId:null,niveauId:u,source:r.source&&s.has(r.source)?r.source:null})},l=t??r.disciplineId??null,u=n.techniques.filter(e=>!l||e.disciplineId===l),d=new Set;for(let e of u)d.add(F(e));let f=l?n.disciplines.filter(e=>e.id===l):n.disciplines,p=Rs(f.flatMap(e=>e.familles)).sort((e,t)=>(e.ordre??0)-(t.ordre??0)),m=Bs(f.flatMap(e=>e.niveaux).sort((e,t)=>(e.ordre??0)-(t.ordre??0))),h=r.niveauId?a.get(r.niveauId):void 0,g=h?zs(h):null,_=g?new Set(f.flatMap(e=>e.niveaux).filter(e=>zs(e)===g).map(e=>e.id)):null,v=e=>o({niveauId:g===zs(e)?null:e.id}),y=(r.texte.trim()?jr({...n,techniques:u},r.texte,999):u).filter(e=>!r.familleId||e.familleId===r.familleId).filter(e=>!_||e.niveauxIds.some(e=>_.has(e))).filter(e=>!r.source||F(e)===r.source).filter(t=>!r.favorisSeuls||e.estFavori(t.id)).sort((e,t)=>e.nom.localeCompare(t.nom,`fr`)),b=!t&&r.disciplineId!==null||r.niveauId!==null||r.familleId!==null||r.source!==null||r.favorisSeuls||r.texte.trim()!==``,x=()=>e.majFiltres({disciplineId:t?r.disciplineId:null,niveauId:null,familleId:null,source:null,favorisSeuls:!1,texte:``}),S=!t&&n.disciplines.length>=1?N`<div class="chips-filtres defilable" aria-label="Disciplines">
          <button class="chip-filtre ${r.disciplineId===null?`actif`:``}"
            @click=${()=>c(null)}>Toutes</button>
          ${n.disciplines.map(e=>N`<button class="chip-filtre chip-discipline ${r.disciplineId===e.id?`actif`:``}"
              @click=${()=>c(r.disciplineId===e.id?null:e.id)}>${e.nom}</button>`)}
        </div>`:P;return{corps:N`
    <div class="recherche-ligne">
      <div class="recherche">
        ${Ns}
        <input type="search" placeholder="Rechercher une technique…" autocomplete="off" .value=${r.texte}
               aria-label="Rechercher une technique"
               @input=${e=>o({texte:e.target.value})}>
      </div>
    </div>
    ${S}
    ${p.length>1?N`<div class="chips-filtres defilable" aria-label="Catégories">
          ${p.map(e=>N`<button class="chip-filtre ${r.familleId===e.id?`actif`:``}"
              @click=${()=>s(`familleId`,e.id)}>${e.nom}</button>`)}
        </div>`:P}
    ${m.length?N`<div class="chips-filtres defilable" aria-label="Niveaux">
          ${m.map(e=>N`<button class="chip-filtre ${g===zs(e)?`actif`:``}"
              @click=${()=>v(e)}>${Ka(e)}${e.nom}</button>`)}
        </div>`:P}
    ${b?N`<div class="chips-filtres">
          <button class="chip-filtre reinitialiser" @click=${x}>✕ Réinitialiser les filtres</button>
        </div>`:P}

    ${y.length?N`<div class="grille" style=${Ws(e)}>${y.map(t=>Us(e,t,i,a))}</div>`:u.length===0?Ks(e,t?n.disciplines.find(e=>e.id===t)?.nom:void 0):N`<p class="fil-vide sans-resultat" style="padding-top:14px">Aucune technique ne correspond à ces filtres.</p>`}
  `,nombre:y.length}}function Ks(e,t){return t?N`<div class="discipline-vide">
      <p class="fil-vide" style="padding-top:14px">« ${t} » ne contient encore aucune technique.</p>
      <button class="bouton principal" style="margin:8px 18px 0; align-self:flex-start"
        @click=${e=>{let t=e.target.closest(`.ecran`)?.querySelector(`.actions-bibliotheque .creation-discipline input`);t?.scrollIntoView({block:`center`}),t?.focus()}}>Créer la première technique</button>
      <button class="action-douce" style="margin-top:6px" @click=${()=>e.choisirPackAImporter()}>
        ⤓ Importer un pack <span>(il peut compléter « ${t} » ou en installer d'autres)</span>
      </button>
    </div>`:N`<p class="fil-vide sans-resultat" style="padding-top:14px">Aucune technique pour l'instant — importe un pack ou capture la tienne.</p>`}function qs(e){let t=e.bibliotheque,n=t.disciplines.length===0&&t.techniques.length===0;return N`
    <div class="ecran">
      ${Fs()}
      ${n?N`
            <p class="fil-vide" style="padding:4px 0 2px">
              <b>Movenso est ta mémoire du mouvement</b> : tes techniques, tes repères
              et tes séances, dans une bibliothèque à toi.
            </p>
            <p class="fil-vide" style="padding:0 0 10px">
              Elle démarre vide, par choix. Quatre façons de commencer — la tienne :
            </p>
            <!-- D-311 : quatre départs NOMMÉS. « Importer un pack » seul cachait les
                 deux chemins les plus utiles : le catalogue prêt à installer, et le
                 retour d'une sauvegarde quand on change d'appareil. Les pictos sont
                 ceux du menu Plus — même objet, même image. -->
            <button class="action-douce action-depart" @click=${()=>e.ouvrirPlusSection(`packs-officiels`)}>
              <span class="action-picto" aria-hidden="true">🧳</span>
              <span class="action-corps">Installer un pack officiel
                <span>judo, karaté, jujitsu, JJB, taïso, yoga — le plus rapide, connexion requise</span></span>
            </button>
            <button class="action-douce action-depart" @click=${()=>e.choisirPackAImporter()}>
              <span class="action-picto" aria-hidden="true">📂</span>
              <span class="action-corps">Importer un pack depuis un fichier
                <span>un <code>.movpack</code> qu'on t'a transmis</span></span>
            </button>
            <button class="action-douce action-depart" @click=${()=>e.choisirPackAImporter()}>
              <span class="action-picto" aria-hidden="true">💾</span>
              <span class="action-corps">Restaurer une sauvegarde
                <span>tu changes d'appareil — choisis ta sauvegarde complète</span></span>
            </button>
            <button class="action-douce action-depart" @click=${()=>{e.ajouter={creation:!0},e.requestUpdate()}}>
              <span class="action-picto" aria-hidden="true">＋</span>
              <span class="action-corps">Créer ta première technique
                <span>partir d'une bibliothèque vierge — son nom et sa discipline suffisent</span></span>
            </button>
            <p class="fil-vide" style="padding:10px 0 0; font-size:12px; opacity:.8">
              Tes données et vidéos restent sur cet appareil — pense à créer une
              sauvegarde de temps en temps (Plus › Sauvegardes), c'est ton filet.
            </p>
          `:Gs(e).corps}
    </div>
  `}var Js={texte:``,disciplineId:null,familleId:null,niveauId:null};function Ys(e){let t=e.bibliotheque,{familleParId:n,niveauParId:r}=Vs(t),i=e.techniquesFavorites(),a=N`<header class="marque"><div style="flex:1"><div class="nom">Favoris</div>
    <div class="devise">Tes techniques marquées, à portée de main.</div></div></header>`;if(i.length===0)return N`<div class="ecran">${a}
      <p class="fil-vide" style="padding:10px 18px">Aucun favori pour le moment. Ajoute-en depuis la Bibliothèque.</p></div>`;let o=Js,s=t=>{Object.assign(Js,t),e.requestUpdate()},c=(e,t)=>s({[e]:o[e]===t?null:t}),l=t.disciplines.filter(e=>i.some(t=>t.disciplineId===e.id)),u=[...new Set(i.map(e=>e.familleId).filter(Boolean))].map(e=>n.get(e)).filter(e=>!!e),d=new Set(i.flatMap(e=>e.niveauxIds)),f=Bs([...d].map(e=>r.get(e)).filter(e=>!!e)),p=o.niveauId?r.get(o.niveauId):void 0,m=p?zs(p):null,h=m?new Set([...d].filter(e=>{let t=r.get(e);return t?zs(t)===m:!1})):null,g=e=>s({niveauId:m===zs(e)?null:e.id}),_=(o.texte.trim()?jr({...t,techniques:i},o.texte,999):i).filter(e=>!o.disciplineId||e.disciplineId===o.disciplineId).filter(e=>!o.familleId||e.familleId===o.familleId).filter(e=>!h||e.niveauxIds.some(e=>h.has(e))).sort((e,t)=>e.nom.localeCompare(t.nom,`fr`)),v=o.texte.trim()!==``||o.disciplineId||o.familleId||o.niveauId;return N`
    <div class="ecran">
      ${a}
      <div class="recherche-ligne">
        <div class="recherche">${Ns}
          <input type="search" placeholder="Rechercher dans mes favoris…" autocomplete="off" .value=${o.texte}
                 aria-label="Rechercher dans les favoris"
                 @input=${e=>s({texte:e.target.value})}></div>
      </div>
      ${l.length>1?N`<div class="chips-filtres" aria-label="Disciplines">
            ${l.map(e=>N`<button class="chip-filtre ${o.disciplineId===e.id?`actif`:``}"
              @click=${()=>c(`disciplineId`,e.id)}>${e.nom}</button>`)}
          </div>`:P}
      ${u.length>1?N`<div class="chips-filtres" aria-label="Catégories">
            ${u.map(e=>N`<button class="chip-filtre ${o.familleId===e.id?`actif`:``}"
              @click=${()=>c(`familleId`,e.id)}>${e.nom}</button>`)}
          </div>`:P}
      ${f.length>1?N`<div class="chips-filtres" aria-label="Niveaux">
            ${f.map(e=>N`<button class="chip-filtre ${m===zs(e)?`actif`:``}"
              @click=${()=>g(e)}>${Ka(e)}${e.nom}</button>`)}
          </div>`:P}
      ${v?N`<div class="chips-filtres"><button class="chip-filtre reinitialiser"
            @click=${()=>s({texte:``,disciplineId:null,familleId:null,niveauId:null})}>✕ Réinitialiser</button></div>`:P}
      ${_.length?N`<div class="grille">${_.map(t=>Us(e,t,n,r))}</div>`:N`<p class="fil-vide sans-resultat" style="padding-top:14px">Aucun favori ne correspond à ces filtres.</p>`}
    </div>
  `}function Xs(e,t){let n=e.bibliotheque.disciplines.find(e=>e.id===t);if(!n)return N`<div class="ecran"><p class="fil-vide">Discipline introuvable.</p></div>`;let{corps:r,nombre:i}=Gs(e,t);return N`
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
                 @keydown=${t=>{t.key===`Enter`&&Ps(e,n,t.target)}}>
          <button class="bouton principal"
            @click=${t=>{let r=t.target.parentElement.querySelector(`input`);Ps(e,n,r)}}>Créer</button>
        </div>
      </div>
    </div>
  `}function Zs(e,t){return t?e.bibliotheque.disciplines.flatMap(e=>e.familles).find(e=>e.id===t)?.nom??``:``}function Qs(e,t){let n={referentiel:0,enseignement:1,ressource:2,personnel:3};return e.bibliotheque.contributions.filter(e=>e.techniqueId===t.id).sort((e,t)=>(n[e.provenance]??9)-(n[t.provenance]??9)).flatMap(e=>e.medias.map(t=>({media:t,contribution:e})))}function $s(e,t){let n=e.bibliotheque,r=e.technique(t);if(!r)return N`<div class="ecran"><p class="fil-vide">Technique introuvable.</p></div>`;let i=n.disciplines.find(e=>e.id===r.disciplineId),a={referentiel:1,enseignement:2,ressource:3,personnel:4},o=n.contributions.filter(e=>e.techniqueId===r.id&&e.provenance!==`personnel`).sort((e,t)=>(a[e.provenance]??9)-(a[t.provenance]??9)),s=o.find(e=>(e.description??``).trim()||e.pointsCles.length)??o[0],c=n.contributions.filter(e=>e.techniqueId===r.id&&e.provenance===`personnel`&&!e.attribution).sort((e,t)=>t.creeLe.localeCompare(e.creeLe)),l=Yi(n,r.id),u=Qs(e,r),d=u.find(e=>e.media.id===r.mediaPrincipalId)??u[0],f=u.find(t=>t.media.id===e.mediaAffiche)??d,p=(e,t)=>e.media.label??`Vidéo ${t+1}`,m=e.estFavori(r.id),h=e.editionFiche,g=(s?.pointsCles??[]).join(`
`);return N`
    <div class="ecran">
      <div class="barre fiche-barre">
        <span class="contexte">${r.nom}</span>
        <div class="fiche-actions">
          ${h?N`<button class="bouton-icone actif" aria-label="Enregistrer" title="Enregistrer et fermer l'édition"
                @click=${()=>e.validerEditionFiche()}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7"/></svg>
              </button>`:N`<button class="bouton-icone" aria-label="Modifier" title="Modifier"
                @click=${()=>e.autoriser(`modification`,`Saisis le PIN pour modifier « ${r.nom} ».`,()=>{e.entrerEditionFiche(r.id)})}>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true"><path d="M4 20h4L18.5 9.5a2.1 2.1 0 0 0-3-3L5 17v3z"/><path d="M13.5 6.5l3 3"/></svg>
              </button>`}
          <button class="bouton-icone etoile-favori ${m?`actif`:``}" aria-pressed=${m}
            aria-label=${m?`Retirer des favoris`:`Ajouter aux favoris`}
            title=${m?`Retirer des favoris`:`Ajouter aux favoris`}
            @click=${()=>void e.basculerFavori(r.id)}>${Hs(m)}</button>
          ${h||!e.preferences.vueRelationBeta?P:N`<button class="bouton-icone" aria-label="Voir en graphe" title="Voir les relations dans la Carte (bêta)"
                @click=${()=>e.ouvrirRelationsVisuelle(r.id,`mindmap`)}>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true"><circle cx="12" cy="5" r="2.3"/><circle cx="5" cy="18" r="2.3"/><circle cx="19" cy="18" r="2.3"/><path d="M12 7.3 6 16M12 7.3 18 16M6.5 18h11"/></svg>
              </button>`}
          ${h?P:N`<button class="bouton-icone" aria-label="Partager" title="Partager"
                @click=${()=>void e.demanderPartageTechnique(r.id)}>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true"><circle cx="18" cy="5" r="2.6"/><circle cx="6" cy="12" r="2.6"/><circle cx="18" cy="19" r="2.6"/><path d="M8.3 10.7l7.4-4.3M8.3 13.3l7.4 4.3"/></svg>
              </button>`}
          ${h?N`<button class="bouton-icone" aria-label="Annuler l'édition" title="Annuler l'édition (défait les modifications)"
                @click=${()=>void e.annulerEditionFiche()}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>
              </button>`:N`<button class="bouton-icone" aria-label="Fermer" title="Fermer" @click=${()=>e.retour()}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>
              </button>`}
        </div>
      </div>

      ${h?nc(e,r):tc(e,r,i)}

      ${h?P:sc(r)}

      ${h?rc(e,r,u):f?N`<div class="media-principal">
              ${u.length>1?N`<div class="chips-filtres media-choix" aria-label="Médias de la technique">
                    ${u.map((t,n)=>N`<button class="chip-filtre ${t.media.id===f.media.id?`actif`:``}"
                        @click=${()=>{e.mediaAffiche=t.media.id,e.requestUpdate()}}>${p(t,n)}</button>`)}
                  </div>`:P}
              ${cc(e,f.media,f.contribution.attribution)}
            </div>`:ec(e,r)?N`<div class="media-principal">
                <img class="couverture-fiche" src=${ec(e,r).url} alt="">
                <div class="couverture-fiche-pied">
                  <span>${ec(e,r).propre?`Illustration — aucune vidéo pour l'instant`:`Illustration de la famille — aucune vidéo pour l'instant`}</span>
                  <button class="chip-filtre" @click=${()=>e.ajoutMedia={techniqueId:r.id,provenance:`personnel`}}>🎞 Ajouter un média</button>
                </div>
              </div>`:N`<div class="media-principal media-absent">
              <div class="fil-vide" style="padding:0 0 8px">Aucun média pour l'instant — le geste se filme, se choisit ou se lie.</div>
              <button class="action-douce" @click=${()=>e.ajoutMedia={techniqueId:r.id,provenance:`personnel`}}>
                🎞 Ajouter un média <span>(filmer, choisir un fichier ou coller un lien)</span>
              </button>
            </div>`}

      ${s&&((s.description??``).trim()||h)?N`<section class="bloc-lecture">
            <h2 class="section-titre">Description</h2>
            ${h?N`<textarea class="champ-note" style="min-height:80px" .value=${s.description??``}
                  placeholder="Décris la technique…" aria-label="Description"
                  @change=${t=>void e.amenderContribution(s.id,{description:t.target.value})}></textarea>`:N`<p>${s.description}</p>`}
            ${s.modifiePar&&s.modifiePar!==`moi`?N`<div class="geste modifie-par" style="padding-top:4px">Modifié par ${s.modifiePar}</div>`:P}
          </section>`:P}

      ${s&&(s.pointsCles.length||h)?N`<section class="bloc-lecture">
            <h2 class="section-titre">Points clés</h2>
            ${h?N`<textarea class="champ-note" style="min-height:80px" .value=${g}
                  placeholder="Un point clé par ligne" aria-label="Points clés"
                  @change=${t=>void e.amenderContribution(s.id,{pointsCles:t.target.value.split(`
`)})}></textarea>`:N`<ol class="points">${s.pointsCles.map(e=>N`<li>${e}</li>`)}</ol>`}
          </section>`:P}

      ${s?.variantes?N`<section class="bloc-lecture"><p><em>${s.variantes}</em></p></section>`:P}

      ${e.preferences.vueRelationBeta?Ms(e,n,r):P}
      ${l.length&&e.preferences.compositionsBeta?N`<div class="liaisons">
            <h2 class="section-titre" style="padding:12px 0 0">Utilisée dans · ${l.length} composition${l.length>1?`s`:``}</h2>
            <div class="liaison-groupe">
              ${l.map(t=>N`<button class="puce-liaison" @click=${()=>e.ouvrirComposition(t.id)}>${t.nom}</button>`)}
            </div>
          </div>`:P}

      <section class="bloc-lecture commentaire">
        <h2 class="section-titre">Commentaire</h2>
        ${e.pinConfigure?N`<p class="commentaire-zone">${c[0]?.description?N`${c[0].description}`:N`<span class="fil-vide">Aucune note.</span>`}</p>
              <div class="geste" style="padding-top:4px">🔒 Lecture seule — un PIN protège cet appareil.</div>`:Ta(e.generationCarnet,N`<textarea class="champ-note commentaire-zone" style="min-height:72px" .value=${c[0]?.description??``}
              placeholder="Ta note, ton repère — juste pour toi" aria-label="Commentaire"
              @change=${t=>{let n=t.target.value;c[0]?e.majContribution(c[0].id,n):n.trim()&&e.ajouterNote(r.id,n)}}></textarea>`)}
      </section>
    </div>
  `}function ec(e,t){let n=t.couverture?.type===`fichier`?Je(t.couverture.imageId):null;if(n)return{url:n,propre:!0};let r=Ga(e,t);return r?{url:r,propre:!1}:null}function tc(e,t,n){let r=Zs(e,t.familleId);return N`
    <div class="fiche-entete">
      ${r?N`<div class="fiche-famille">${r}</div>`:P}
      <h1>${t.nom}</h1>
      ${t.nomTraditionnel?N`<div class="jp">${t.nomTraditionnel}</div>`:P}
    </div>
    ${t.niveauxIds.length?N`<div class="pastilles">
          ${t.niveauxIds.map(e=>{let t=n?.niveaux.find(t=>t.id===e);return t?N`<span class="pastille">${Ka(t)}${t.nom}</span>`:P})}
        </div>`:P}
  `}function nc(e,t){let n=e.bibliotheque,r=n.disciplines.find(e=>e.id===t.disciplineId);return N`
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
        ${n.disciplines.map(e=>N`<option value=${e.id} ?selected=${e.id===t.disciplineId}>${e.nom}</option>`)}
      </select>

      ${r?.familles.length?N`<label class="etiquette-champ" for="champ-categorie">Catégorie</label>
            <select id="champ-categorie" class="champ-edition"
              @change=${n=>{let r=n.target.value;e.majTechnique(t.id,{familleId:r||void 0})}}>
              <option value="" ?selected=${!t.familleId}>— aucune —</option>
              ${r.familles.map(e=>N`<option value=${e.id} ?selected=${e.id===t.familleId}>${e.nom}</option>`)}
            </select>`:P}

      ${r?.niveaux.length?N`<div class="etiquette-champ">Niveaux</div>
            <div class="niveaux-coches">
              ${r.niveaux.map(n=>N`<label class="niveau-coche">
                  <input type="checkbox" ?checked=${t.niveauxIds.includes(n.id)}
                    @change=${()=>void e.majTechnique(t.id,{niveauxIds:t.niveauxIds.includes(n.id)?t.niveauxIds.filter(e=>e!==n.id):[...t.niveauxIds,n.id]})}>
                  ${Ka(n)}<span>${n.nom}</span>
                </label>`)}
            </div>`:P}

    </div>
  `}function rc(e,t,n){return N`
    <div class="edition edition-medias">
      <div class="etiquette-champ">Médias</div>
      <button class="action-douce" @click=${()=>e.ajoutMedia={techniqueId:t.id,provenance:`personnel`}}>
        🎞 Ajouter un média <span>(filmer, choisir un fichier ou coller un lien)</span>
      </button>
      ${n.length===0?N`<p class="fil-vide" style="padding:6px 0">Aucun média — le geste se filme, se choisit ou se lie.</p>`:n.map(({media:r,contribution:i},a)=>ic(e,t,r,i,a,n.length))}
      ${ac(e,t,n)}
    </div>
  `}function ic(e,t,n,r,i,a){let o=n.id===t.mediaPrincipalId||!t.mediaPrincipalId&&i===0;return N`
    <div class="bloc-media-edition">
      <input class="champ-edition" .value=${n.label??``} placeholder="Titre de la vidéo" aria-label="Titre de la vidéo"
        @change=${t=>void e.majMediaLabel(n.id,t.target.value)}>
      ${cc(e,n,r.attribution)}
      <div class="bloc-media-actions">
        ${a>1?o?N`<span class="badge-principal">✓ Vidéo principale</span>`:N`<button class="chip-filtre"
                @click=${()=>void e.majTechnique(t.id,{mediaPrincipalId:n.id}).then(()=>e.afficherToast(`Vidéo principale mise à jour ✓`))}>
                ★ Définir comme principale</button>`:P}
        <button class="bouton-retrait-media" aria-label="Retirer ce média"
          @click=${()=>void e.retirerMedia(t.id,n.id)}>🗑 Retirer</button>
      </div>
    </div>
  `}function ac(e,t,n){return N`
    <div class="etiquette-champ">Vignette</div>
    <div class="couverture-edition chips-filtres">
      <label class="chip-filtre couverture-import">
        🖼 Importer une image
        <input type="file" accept="image/*" hidden
          @change=${n=>{let r=n.target,i=r.files?.[0];r.value=``,i&&e.definirCouvertureImage(t.id,i)}}>
      </label>
      ${n.filter(({media:e})=>e.type===`plateforme`&&e.service===`youtube`).map(({media:n},r)=>N`<button class="chip-filtre ${t.couverture?.type===`media`&&t.couverture.mediaId===n.id?`actif`:``}"
          @click=${()=>void e.definirCouvertureMedia(t.id,n.id)}>Miniature ${n.label??`vidéo ${r+1}`}</button>`)}
      ${t.couverture?N`<button class="chip-filtre danger" @click=${()=>void e.retirerCouverture(t.id)}>Retirer la vignette</button>`:P}
    </div>
    ${oc(t)}
  `}function oc(e){let t=e.couverture?.type===`fichier`?Je(e.couverture.imageId):null;return t?N`<div class="couverture-apercu"><img src=${t} alt="Vignette actuelle"></div>`:P}function sc(e){let t=e.alertes??[];return t.length?N`${t.map(e=>N`<div class="alerte alerte--${e.niveau}" role="note">
      <span class="alerte-icone" aria-hidden="true">⚠️</span>
      <div class="alerte-corps">
        <strong>${e.libelle}</strong>
        ${e.detail?N`<span class="alerte-detail">${e.detail}</span>`:P}
        ${e.reference?.url&&Ua(e.reference.url)?N`<a class="alerte-ref" href=${Ua(e.reference.url)} target="_blank" rel="noopener noreferrer"
              title=${`Quitte Movenso — ${Wa(e.reference.url)??`lien externe`}`}>${e.reference.organisation??`Référence`}${e.reference.article?` · art. ${e.reference.article}`:``} ↗</a>`:e.reference?N`<span class="alerte-ref">${e.reference.organisation??`Référence`}${e.reference.article?` · art. ${e.reference.article}`:``}</span>`:P}
      </div>
    </div>`)}`:P}function cc(e,t,n){let r=e.mediasDeplies.has(t.id),i=()=>{e.mediasDeplies=new Set([t.id]),document.querySelectorAll(`video`).forEach(e=>e.pause()),e.requestUpdate()};if(t.type===`plateforme`&&t.service===`youtube`)return Ba(t.ref)?r?N`<div class="media-video"><iframe
            src="https://www.youtube-nocookie.com/embed/${t.ref}"
            title=${t.label??`Vidéo`} allow="encrypted-media; picture-in-picture" allowfullscreen></iframe></div>`:N`<button class="bouton-video" @click=${i}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="#fff" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>
          <span>${t.label??`Vidéo${n?` (${n})`:``}`} — lecture en ligne</span>
        </button>`:N`<span class="joint" title="Référence vidéo invalide">🔗 vidéo en ligne non vérifiable</span>`;if(t.type===`lien`){let e=Ua(t.ref);return e?r?N`<div class="media-video"><video src=${e} controls playsinline
          @play=${e=>{document.querySelectorAll(`video`).forEach(t=>{t!==e.target&&t.pause()})}}></video></div>`:N`<button class="bouton-video" @click=${i}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="#fff" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>
          <span>${t.label??`Vidéo`} — lecture en ligne</span>
        </button>`:N`<span class="joint" title="Lien non https — jamais chargé">🔗 ${t.ref}</span>`}return N`<movenso-video-locale .app=${e} .mediaId=${t.id}></movenso-video-locale>`}var lc=5,uc=new Set;function dc(e,t){return(t.techniqueId?e.technique(t.techniqueId):void 0)?.nom??((t.texte??``).trim()||`Étape`)}function fc(e,t){return[(t.techniqueId?e.technique(t.techniqueId):void 0)?.nomTraditionnel,t.consigne].filter(e=>!!e?.trim()).join(` · `)}function pc(e,t){let n=(e.acteurs??[]).findIndex(e=>e.id===t.acteurId);return n<0?null:{nom:e.acteurs[n].nom,rang:n+1}}function mc(e,t){let n=t.blocs.find(e=>e.type===`technique`&&e.techniqueId),r=n?.techniqueId?e.technique(n.techniqueId):void 0;return r?U(e,r):P}function hc(e){return e.provenance===`personnel`?null:e.attribution?.trim()||`Pack`}function gc(e,t){let n=hc(t);return N`
    <div class="fiche-compo-tete">
      <div class="fiche-compo-vignette">${mc(e,t)}</div>
      <div class="fiche-compo-identite">
        <h1>${t.nom}</h1>
        ${n?N`<span class="badge-source">${n}</span>`:P}
      </div>
    </div>
    ${t.description?N`<p class="fiche-compo-desc">${t.description}</p>`:P}
    ${_c(t)}
  `}function _c(e){let t=pa(e),n=la(e),r=e.acteurs??[],i=ia(e)?ta(e).length:0;return N`
    <div class="fiche-compo-stats">
      <span><b>${t}</b> étape${t>1?`s`:``}</span>
      ${i>0?N`<span><b>${i}</b> temps</span>`:P}
      ${n>0?N`<span><b>${ca(n)}</b></span>`:P}
      ${r.length>=2?N`<span class="fiche-compo-roles">${r.map((e,t)=>N`<em data-acteur-rang=${t+1}>${e.nom}</em>`)}</span>`:N`<span>Seul</span>`}
    </div>`}function vc(e,t){let n=uc.has(t.id),r=t.blocs.filter(e=>e.type!==`media`),i=n?r:r.slice(0,lc),a=0;return N`
    <h2 class="fiche-compo-section">Aperçu des étapes</h2>
    <ol class="apercu-etapes">
      ${i.map(n=>{if(da(n))return N`<li class="apercu-jalon">${fa(n)}</li>`;a++;let r=pc(t,n),i=fc(e,n),o=n.techniqueId?e.technique(n.techniqueId):void 0;return N`<li class="apercu-etape">
          <span class="apercu-no">${a}</span>
          <span class="apercu-vignette">${o?U(e,o):P}</span>
          <span class="apercu-texte">
            <span class="apercu-nom">${dc(e,n)}${r?N`<em class="badge-role" data-acteur-rang=${r.rang}>${r.nom}</em>`:P}</span>
            ${i?N`<span class="apercu-sous">${i}</span>`:P}
          </span>
          ${n.dureeSec?N`<span class="apercu-duree">${ca(n.dureeSec)}</span>`:P}
        </li>`})}
    </ol>
    ${r.length>lc?N`<button class="apercu-suite" @click=${()=>{n?uc.delete(t.id):uc.add(t.id),e.requestUpdate()}}>${n?`Replier l'aperçu`:`Voir les ${r.length} étapes`}</button>`:P}
  `}function yc(e,t){return N`
    <div class="fiche-compo-actions">
      ${t.blocs.length?N`<button class="action-forte" @click=${()=>e.demarrerEntrainement(t.id)}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 5v14l12-7z"/></svg>
            Démarrer</button>`:P}
      <button class="action-seconde" @click=${()=>void e.dupliquerComposition(t.id)}>Dupliquer</button>
      <button class="action-seconde" disabled title="La planification arrive avec l'Agenda">
        Planifier <small>bientôt</small>
      </button>
    </div>
  `}function bc(e,t,n){let r=e.preferences.derniereLecture;r&&r.compositionId===t&&r.index===n||(e.preferences={...e.preferences,derniereLecture:{compositionId:t,index:n,quand:new Date().toISOString()}},e.stockage.sauvegarderPreferences(e.preferences))}function xc(e){if(!e.preferences.derniereLecture)return;let{derniereLecture:t,...n}=e.preferences;e.preferences=n,e.stockage.sauvegarderPreferences(e.preferences)}function Sc(e,t){return N`<div class="entrainement-jauge" aria-hidden="true">
    <span style=${`width:${((t>0?Math.min(1,Math.max(0,e/t)):0)*100).toFixed(1)}%`}></span>
  </div>`}function Cc(e,t){let n=Qi(e,t);return n?N`<em class="badge-role" data-acteur-rang=${(e.acteurs??[]).findIndex(e=>e.id===n.id)+1}>${n.nom}</em>`:P}function wc(e,t,n,r){let i=r.type===`technique`?r.techniqueId&&e.technique(r.techniqueId)?.nom||r.texte||`technique`:r.texte||(r.dureeSec===void 0?`Segment`:ca(r.dureeSec)),a=Qi(t,n),o=Qi(t,r);return N`
    <div class="entrainement-suite">
      <span class="suite-libelle">Ensuite</span>
      <span class="suite-corps">
        ${a&&o&&a.id!==o.id?N`<span class="suite-passation">${Cc(t,n)}
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><path d="M4 12h14M13 7l5 5-5 5"/></svg>
              ${Cc(t,r)}</span>`:Cc(t,r)}
        <span class="suite-nom">${i}</span>
        ${r.dureeSec===void 0?P:N`<span class="suite-duree">${ca(r.dureeSec)}</span>`}
      </span>
    </div>`}function Tc(e,t,n){return N`<div class="entrainement-anneau" style=${`--part:${(t>0?Math.min(1,Math.max(0,e/t)):0).toFixed(4)}`} aria-hidden="false">${n}</div>`}var Ec=3,Dc={onglet:null,tri:`recent`,deplies:new Set};function Oc(){Dc.onglet=`packs`}function kc(e){return e.provenance===`personnel`}function Ac(e,t){let n=e.bibliotheque.disciplines.findIndex(e=>e.nom===t);return n<0?0:n%6+1}function jc(e,t){let n=new Map;for(let r of t.blocs){if(r.type!==`technique`||!r.techniqueId)continue;let t=e.technique(r.techniqueId),i=t&&e.bibliotheque.disciplines.find(e=>e.id===t.disciplineId);i&&n.set(i.nom,(n.get(i.nom)??0)+1)}return[...n].map(([e,t])=>({nom:e,poids:t})).sort((e,t)=>t.poids-e.poids)}function Mc(e,t){let n=jc(e,t);return n.length===0||n.length>1&&n[1].poids===n[0].poids?null:n[0].nom}var Nc=N`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M8 6h13M8 12h13M8 18h13M3.5 6h.01M3.5 12h.01M3.5 18h.01"/></svg>`,Pc=N`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/></svg>`,Fc=N`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="8" r="3.6"/><path d="M5.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6"/></svg>`,Ic=N`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><circle cx="9" cy="8" r="3.4"/><path d="M2.5 20c0-3.5 2.9-5.8 6.5-5.8S15.5 16.5 15.5 20"/><circle cx="17.5" cy="8.5" r="2.8"/><path d="M16 14.4c3 .3 5.5 2.4 5.5 5.6"/></svg>`;function Lc(e){let t=pa(e),n=la(e),r=e.acteurs??[];return N`
    <span class="meta-ligne">
      <span><span class="meta-ic">${Nc}</span>${t===0?`à construire`:`${t} étape${t>1?`s`:``}`}</span>
      ${n>0?N`<span><span class="meta-ic">${Pc}</span>${ca(n)}</span>`:P}
      ${r.length>=2?N`<span><span class="meta-ic">${Ic}</span>${r.length===2?`À deux`:`${r.length} rôles`}</span>`:N`<span><span class="meta-ic">${Fc}</span>Seul</span>`}
    </span>`}function Rc(e,t){let n=t.acteurs??[];if(n.length>=2)return N`<span class="carte-badges">${n.map((e,t)=>N`<em class="badge-role" data-acteur-rang=${t+1}>${e.nom}</em>`)}</span>`;let r=jc(e,t);return Mc(e,t)===null&&r.length>1?N`<span class="carte-badges"><em class="badge-mixte">Mixte · ${r.map(e=>e.nom).join(` + `)}</em></span>`:P}function zc(e,t){let n=t.blocs.find(e=>e.type===`technique`&&e.techniqueId),r=n?.techniqueId?e.technique(n.techniqueId):void 0;return r?U(e,r):P}function Bc(e,t){let n=Mc(e,t),r=n?Ac(e,n):0,i=kc(t);return N`
    <article class="carte-liste composition-carte" data-acteur-rang=${r}>
      <button class="composition-ouvrir" @click=${()=>e.ouvrirComposition(t.id)}>
        <span class="carte-liste-vignette">${zc(e,t)}</span>
        <span class="carte-liste-corps">
          <span class="carte-liste-titre">${t.nom}</span>
          ${Lc(t)}
          ${Rc(e,t)}
        </span>
      </button>
      ${t.blocs.length?N`<button class="rond-action plein composition-play" aria-label="Démarrer « ${t.nom} »" title="Passer en revue"
            @click=${()=>e.demarrerEntrainement(t.id)}>
            <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5.5v13l11-6.5z"/></svg>
          </button>`:P}
      ${i?N`<button class="rond-action fantome composition-options" aria-label="Options de « ${t.nom} »" title="Autres actions"
            @click=${()=>{e.menuComposition=t.id,e.requestUpdate()}}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="12" cy="5.5" r="1.7"/><circle cx="12" cy="12" r="1.7"/><circle cx="12" cy="18.5" r="1.7"/></svg>
          </button>`:N`<button class="rond-action fantome composition-dupliquer" aria-label="Dupliquer « ${t.nom} »" title="Dupliquer pour personnaliser"
            @click=${()=>void e.dupliquerComposition(t.id)}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" aria-hidden="true"><rect x="9" y="9" width="11.5" height="11.5" rx="2.5"/><path d="M15 5.5A2 2 0 0 0 13 3.5H6A2.5 2.5 0 0 0 3.5 6v7a2 2 0 0 0 2 2"/></svg>
          </button>`}
    </article>`}function Vc(e,t){let n=[...e];return t===`nom`?n.sort((e,t)=>e.nom.localeCompare(t.nom,`fr`)):t===`duree`?n.sort((e,t)=>la(t)-la(e)):n.sort((e,t)=>(t.modifieLe??t.creeLe).localeCompare(e.modifieLe??e.creeLe))}function Hc(e,t,n,r){let i=(t,n,i)=>N`
    <button class="segment ${r===t?`actif`:``}" aria-pressed=${r===t}
      @click=${()=>{Dc.onglet=t,e.requestUpdate()}}>
      ${n}<span class="segment-compte">${i}</span>
    </button>`;return N`<div class="segments" role="group" aria-label="Quelles compositions afficher">
    ${i(`mes`,`Mes compositions`,t)}${i(`packs`,`Packs`,n)}
  </div>`}function Uc(e){return N`<label class="tri-compos">Trier par
    <select aria-label="Trier les compositions" .value=${Dc.tri}
      @change=${t=>{Dc.tri=t.target.value,e.requestUpdate()}}>
      <option value="recent">Récent</option>
      <option value="nom">Nom</option>
      <option value="duree">Durée</option>
    </select>
  </label>`}function Wc(e,t){let n=new Map;for(let r of t){let t=Mc(e,r)??`Mixtes`,i=n.get(t);i?i.push(r):n.set(t,[r])}return N`${[...n.keys()].sort((e,t)=>n.get(t).length-n.get(e).length||e.localeCompare(t,`fr`)).map(t=>{let r=Vc(n.get(t),Dc.tri),i=Dc.deplies.has(t),a=i?r:r.slice(0,Ec);return N`<section class="groupe-pack" aria-label=${t}>
      <header class="groupe-tete">
        <span class="pastille-disc" data-acteur-rang=${t===`Mixtes`?0:Ac(e,t)} aria-hidden="true"></span>
        <h3>${t}</h3><span class="groupe-compte">${r.length}</span>
      </header>
      ${a.map(t=>Bc(e,t))}
      ${r.length>Ec?N`<button class="voir-plus" @click=${()=>{i?Dc.deplies.delete(t):Dc.deplies.add(t),e.requestUpdate()}}>${i?`Replier`:`Voir les ${r.length}`}</button>`:P}
    </section>`})}`}function Gc(e,t){let n=e.preferences.derniereLecture,r=n&&t.find(e=>e.id===n.compositionId);if(!n||!r||n.index>=r.blocs.length)return P;let i=r.blocs[n.index],a=i.techniqueId?e.technique(i.techniqueId)?.nom??i.texte??`étape`:(i.texte??``).trim()||`étape`;return N`
    <section class="reprise" aria-label="Reprendre où tu t'es arrêté">
      <div class="reprise-tete"><span class="reprise-libelle">Continuer</span></div>
      <article class="carte-liste reprise-carte" data-acteur-rang=${(()=>{let t=Mc(e,r);return t?Ac(e,t):0})()}>
        <button class="composition-ouvrir reprise-ouvrir" @click=${()=>e.ouvrirComposition(r.id)}>
          <span class="carte-liste-vignette">${zc(e,r)}</span>
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
    </section>`}function Kc(e,t,n,r,i){let a=t.filter(kc),o=t.filter(e=>!kc(e)),s=a.length>0||o.length===0?`mes`:`packs`,c=Dc.onglet,l=c&&(e=>e===`mes`?a.length:o.length)(c)>0?c:s,u=n.filter(e=>l===`mes`?kc(e):!kc(e));return N`
    <header class="marque"><div style="flex:1"><div class="nom">Compositions</div>
      ${t.length<=3?N`<div class="devise">Assemble tes techniques en enchaînements et en séances.</div>`:P}</div></header>
    ${r}
    ${Gc(e,t)}
    ${Hc(e,a.length,o.length,l)}
    ${u.length===0?i:l===`packs`?N`<div class="fil fil-packs">${Wc(e,u)}</div>
            <p class="pied-explicatif"><b>Ces compositions viennent de tes packs.</b>
              Duplique-en une pour la personnaliser : l'originale suit les mises à jour du pack,
              ta copie t'appartient.</p>`:N`<div class="sect-liste"><h3>Mes compositions</h3>${Uc(e)}</div>
            <div class="fil">${Vc(u,Dc.tri).map(t=>Bc(e,t))}</div>`}
  `}var qc={requete:``,filtre:null};function Jc(e){return e.normalize(`NFD`).replace(/[\u0300-\u036f]/g,``).toLowerCase().replace(/[^a-z0-9]/g,``)}function Yc(e){let t=[...e.bibliotheque.compositions],n=Jc(qc.requete.trim()),r=t=>!n||Jc(t.nom).includes(n)?!0:t.blocs.some(t=>{if(t.type!==`technique`||!t.techniqueId)return!1;let r=e.technique(t.techniqueId);return!!r&&(Jc(r.nom).includes(n)||(r.nomTraditionnel?Jc(r.nomTraditionnel).includes(n):!1))}),i=new Map(t.map(t=>[t.id,jc(e,t).map(e=>e.nom)])),a=e=>{if(!qc.filtre)return!0;let t=i.get(e.id)??[];return qc.filtre===`__mixte__`?t.length>1:t.includes(qc.filtre)},o=t.filter(e=>r(e)&&a(e)),s=[...new Set([...i.values()].flat())].sort((e,t)=>e.localeCompare(t,`fr`)),c=[...i.values()].some(e=>e.length>1),l=N`
    <label class="recherche compositions-recherche">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.8-3.8"/></svg>
      <input type="search" aria-label="Rechercher une composition ou une technique qu'elle contient"
        placeholder="Nom, ou technique contenue…" .value=${qc.requete}
        @input=${t=>{qc.requete=t.target.value,e.requestUpdate()}}>
    </label>
    ${s.length>1||c?N`<div class="chips-filtres compositions-chips" aria-label="Filtrer par discipline">
          ${s.map(t=>N`<button class="chip-filtre ${qc.filtre===t?`actif`:``}"
            @click=${()=>{qc.filtre=qc.filtre===t?null:t,e.requestUpdate()}}>${t}</button>`)}
          ${c?N`<button class="chip-filtre ${qc.filtre===`__mixte__`?`actif`:``}"
            @click=${()=>{qc.filtre=qc.filtre===`__mixte__`?null:`__mixte__`,e.requestUpdate()}}>Mixte</button>`:P}
        </div>`:P}`,u=N`<p class="fil-vide" style="padding-top:12px">Aucune composition ici${n?N` pour « ${qc.requete.trim()} »`:P} —
    <button class="lien-nu" @click=${()=>{qc.requete=``,qc.filtre=null,e.requestUpdate()}}>tout réafficher</button>.</p>`;return N`
    <div class="ecran">
      ${t.length===0?N`<header class="marque"><div style="flex:1"><div class="nom">Compositions</div>
              <div class="devise">Tes enchaînements, programmes, séances…</div></div></header>
            <p class="fil-vide" style="padding-top:12px">
              Assemble et ordonne plusieurs techniques pour créer un enchaînement ou une séance.
              Touche <b>＋ Créer</b> en bas pour commencer.
            </p>`:Kc(e,t,o,l,u)}
    </div>
  `}function Xc(e,t,n){let r=t??0,i=Math.floor(r/60),a=r%60,o=(e,t)=>Array.from({length:e},(e,n)=>N`<option value=${n} ?selected=${n===t}>${`${n}`.padStart(2,`0`)}</option>`),s=(t,r)=>{let i=t*60+r;n(i<=0?void 0:i),e.requestUpdate()};return N`
    <div class="duree-picker">
      <div class="duree-affiche">${t===void 0?`Aucune durée`:qi(t)}</div>
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
    </div>`}var J={quoi:`technique`,requete:``,techId:void 0,techNom:``,libre:``,dureeSec:void 0,acteurId:void 0,lien:!1};function Zc(){Vl=null}function Qc(){J.requete=``,J.techId=void 0,J.techNom=``,J.libre=``,J.dureeSec=void 0,J.acteurId=void 0,J.lien=!1}function $c(e,t,n,r){return N`
    <button class="chip-filtre bascule-lien ${r} ${t?`actif`:``}"
      role="switch" aria-checked=${t} style="margin-top:10px"
      @click=${()=>{n(!t),e.requestUpdate()}}>
      Rejoint le temps précédent
    </button>`}function el(e,t){return t.type===`technique`?t.techniqueId&&e.technique(t.techniqueId)?.nom||t.texte||`technique`:t.type===`pause`?t.texte||`Pause`:t.texte||(t.dureeSec===void 0?`étape`:ca(t.dureeSec))}function tl(e,t){let n=e.bibliotheque,r=n.compositions.find(e=>e.id===t),i=J.quoi===`technique`,a=i?J.requete.trim()?jr(n,J.requete,6):ua(n,r):[],o=e=>n.disciplines.find(t=>t.id===e)?.nom??``,s=i?J.techId!==void 0:J.libre.trim()!==``||J.dureeSec!==void 0,c=i?J.techId!==void 0:J.libre.trim()!==``,l=r?.acteurs??[],u=J.acteurId===void 0&&r?$i(r)??null:J.acteurId??null;return N`
    <div class="toggle-quoi">
      <button class="chip-choix ${i?`actif`:``}" @click=${()=>{J.quoi=`technique`,e.requestUpdate()}}>Une technique</button>
      <button class="chip-choix ${i?``:`actif`}" @click=${()=>{J.quoi=`libre`,e.requestUpdate()}}>Une saisie libre</button>
    </div>
    ${i?N`<div class="recherche" style="margin:8px 0 0">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.8-3.8"/></svg>
            <input placeholder="Chercher une technique…" aria-label="Chercher une technique" autocomplete="off" .value=${J.requete}
                   @input=${t=>{J.requete=t.target.value,J.techId=void 0,e.requestUpdate()}}>
          </div>
          ${a.length?N`<div class="resultats" style="padding:6px 0 0">
                ${a.map(t=>N`<button class="resultat ${J.techId===t.id?`actif`:``}"
                    @click=${()=>{J.techId=t.id,J.techNom=t.nom,J.requete=t.nom,e.requestUpdate()}}>
                    <span>${t.nom}</span><span class="jp">${t.nomTraditionnel??``}</span><span class="fam">${o(t.disciplineId)}</span>
                  </button>`)}
              </div>`:P}`:N`<input class="champ-edition" style="margin-top:8px" placeholder="Décris l'étape (échauffement, transition, repère…)"
              .value=${J.libre} aria-label="Saisie libre"
              @input=${t=>{J.libre=t.target.value,e.requestUpdate()}}>`}
    ${l.length&&c?N`<div class="section-titre" style="padding:12px 4px 4px">Qui agit</div>
          <div class="chips-filtres choix-acteur" style="flex-wrap:wrap; padding:0">
            ${l.map((t,n)=>N`<button class="chip-filtre ${u===t.id?`actif`:``}" data-acteur-rang=${n+1}
                @click=${()=>{J.acteurId=t.id,e.requestUpdate()}}>${t.nom}</button>`)}
            <button class="chip-filtre ${u===null?`actif`:``}"
              @click=${()=>{J.acteurId=null,e.requestUpdate()}}>Tous</button>
          </div>`:P}
    ${(r?.blocs.length??0)>0&&c?$c(e,J.lien,e=>{J.lien=e},`choix-lien`):P}
    <!-- UI-4 (D-322) : les réglages n'arrivent QU'APRÈS le contenu — la feuille
         s'ouvrait sur deux molettes de durée avant qu'on ait choisi quoi ajouter.
         Exception assumée : en SAISIE LIBRE, une durée seule crée une pause — la
         durée y est un contenu, la masquer aurait retiré le seul chemin vers une
         pause. -->
    ${c||!i?N`<div class="section-titre" style="padding:12px 4px 4px">Durée (facultatif)</div>
          ${Xc(e,J.dureeSec,t=>{J.dureeSec=t,e.requestUpdate()})}`:P}
    <button class="bouton principal ajout-valider" ?disabled=${!s} @click=${()=>{let n=J.dureeSec,a=(r?.blocs.length??0)>0&&J.lien,o={...u?{acteurId:u}:{},...a?{lien:!0}:{}};if(i){if(!J.techId)return;let r=J.techId,i=J.techNom;e.modifierComposition(t,e=>e.blocs.push(Zi(`technique`,{techniqueId:r,texte:i,...n===void 0?{}:{dureeSec:n},...o})))}else{let r=J.libre.trim();if(!r&&n===void 0)return;let i=!r&&n!==void 0?Zi(`pause`,{dureeSec:n,...o}):Zi(`etape`,{...r?{texte:r}:{},...n===void 0?{}:{dureeSec:n},...o});e.modifierComposition(t,e=>e.blocs.push(i))}Qc(),e.requestUpdate()}}>Ajouter</button>`}function nl(e){let t=e.creationCompo;return N`
    <div class="voile" @click=${()=>{t.etape===`pas`?e.fermerCreationCompo():e.creationCompo=null}}></div>
    <div class="feuille" role="dialog" aria-modal="true" tabindex="-1" aria-label="Créer une composition">
      <div class="prise"></div>
      ${t.etape===`nom`?rl(e,t):t.etape===`roles`?il(e,t):al(e,t)}
    </div>`}function rl(e,t){let n=t.nom.trim()!==``,r=()=>{n&&e.creerCompositionFunnel()};return N`
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
    ${e.bibliotheque.compositions.some(e=>e.provenance!==`personnel`)?N`<button class="lien-nu depart-pack" @click=${()=>{e.creationCompo=null,Oc(),e.ouvrirCompositions()}}>
          Ou pars d'une séance de tes packs — duplique-la, puis adapte-la.
        </button>`:P}
    <div class="actions"><button class="bouton" @click=${()=>e.creationCompo=null}>Annuler</button></div>`}function il(e,t){let n=t.roles??[],r=r=>{e.creationCompo={...t,roles:Array.from({length:r},(e,t)=>n[t]??``)}},i=(r,i)=>{let a=[...n];a[r]=i,e.creationCompo={...t,roles:a}},a=n.length===0||n.length>=2&&n.every(e=>e.trim()!==``),o=(t,n,r)=>N`
    <button class="chip-choix ${n?`actif`:``}" @click=${()=>{r(),e.requestUpdate()}}>${t}</button>`;return N`
    <h2>Qui pratique ?</h2>
    <div class="geste">Tu pourras en ajouter ou en retirer plus tard.</div>
    <!-- Deux choix, pas trois (D-232) : « à plusieurs » commence à DEUX et
         « ＋ Ajouter un rôle » fait le reste — la troisième puce « Plus »
         n'ajoutait qu'un palier arbitraire. -->
    <div class="toggle-quoi choix-nombre-roles" style="margin-top:10px">
      ${o(`Seul`,n.length===0,()=>r(0))}
      ${o(`À plusieurs`,n.length>=2,()=>r(Math.max(2,n.length)))}
    </div>
    ${n.length?N`<div class="acteurs-liste" style="margin-top:12px">
            ${n.map((r,a)=>N`
              <div class="acteur-ligne">
                <span class="acteur-puce" data-acteur-rang=${a+1} aria-hidden="true"></span>
                <input class="champ-mini nom-role" .value=${r} placeholder="Nom du rôle" aria-label="Nom du rôle ${a+1}"
                  @input=${e=>i(a,e.target.value)}>
                ${n.length>2?N`<button class="bouton-icone" aria-label="Retirer ce rôle"
                      @click=${()=>{e.creationCompo={...t,roles:n.filter((e,t)=>t!==a)},e.requestUpdate()}}>✕</button>`:P}
              </div>`)}
            ${n.length>=2?N`<button class="chip-filtre acteur-ajouter"
                  @click=${()=>{e.creationCompo={...t,roles:[...n,``]},e.requestUpdate()}}>＋ Ajouter un rôle</button>`:P}
            ${n.length>2?N`<div class="aide-largeur">Sur un écran étroit, la lecture se fait en une colonne — les temps restent.</div>`:P}
          </div>`:P}
    <div class="actions" style="margin-top:14px">
      <button class="bouton principal valider-roles" ?disabled=${!a}
        @click=${()=>void e.poserRolesFunnel(n)}>Suivant</button>
    </div>`}function al(e,t){let n=e.bibliotheque.compositions.find(e=>e.id===t.compoId),r=n?.blocs??[];return N`
    <h2>${n?.nom??`Composition`}</h2>
    <div class="geste">Ajoute tes éléments dans l'ordre.</div>
    ${r.length?N`<ol class="funnel-pas">${r.map((t,n)=>N`<li>${n+1}. ${el(e,t)}</li>`)}</ol>`:N`<p class="fil-vide" style="padding:6px 2px">Aucun élément pour l'instant.</p>`}
    ${tl(e,t.compoId)}
    <div class="actions" style="margin-top:12px">
      <button class="bouton principal" @click=${()=>e.fermerCreationCompo()}>Terminer</button>
    </div>`}function ol(e){let t=e.ajoutPas;return N`
    <div class="voile" @click=${()=>{e.ajoutPas=null,e.requestUpdate()}}></div>
    <div class="feuille" role="dialog" aria-modal="true" tabindex="-1" aria-label="Ajouter un élément">
      <div class="prise"></div>
      <h2>Ajouter un élément</h2>
      ${tl(e,t)}
      <div class="actions" style="margin-top:12px">
        <button class="bouton" @click=${()=>{e.ajoutPas=null,e.requestUpdate()}}>Terminer</button>
      </div>
    </div>`}function sl(e){let{compoId:t,blocId:n}=e.editionPas,r=e.bibliotheque,i=r.compositions.find(e=>e.id===t)?.blocs.find(e=>e.id===n),a=()=>{e.editionPas=null,e.requestUpdate()};if(!i)return N`<div class="voile" @click=${a}></div>`;let o=r=>void e.modifierComposition(t,e=>{let t=e.blocs.find(e=>e.id===n);t&&r(t)}),s=i.type===`technique`,c=s&&i.techniqueId?e.technique(i.techniqueId):void 0,l=s&&J.requete.trim()?jr(r,J.requete,6):[],u=e=>r.disciplines.find(t=>t.id===e)?.nom??``;return N`
    <div class="voile" @click=${a}></div>
    <div class="feuille" role="dialog" aria-modal="true" tabindex="-1" aria-label="Modifier le pas">
      <div class="prise"></div>
      <h2>${s?c?.nom??`Technique`:i.type===`pause`?`Pause`:`Étape`}</h2>
      ${s?N`<div class="section-titre" style="padding:4px 4px 2px">Consigne</div>
            <input class="champ-edition" placeholder="gauche et droite, sur le contre…" .value=${i.consigne??``} aria-label="Consigne du pas"
              @change=${e=>o(t=>{let n=e.target.value.trim();n?t.consigne=n:delete t.consigne})}>
            <div class="section-titre" style="padding:10px 4px 2px">Remplacer la technique</div>
            <div class="recherche" style="margin:0">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.8-3.8"/></svg>
              <input placeholder="Chercher une technique…" aria-label="Chercher une technique" autocomplete="off" .value=${J.requete}
                @input=${t=>{J.requete=t.target.value,e.requestUpdate()}}>
            </div>
            ${l.length?N`<div class="resultats" style="padding:6px 0 0">
                  ${l.map(e=>N`<button class="resultat" @click=${()=>{J.requete=``,o(t=>{t.techniqueId=e.id,t.texte=e.nom})}}>
                    <span>${e.nom}</span><span class="jp">${e.nomTraditionnel??``}</span><span class="fam">${u(e.disciplineId)}</span>
                  </button>`)}
                </div>`:P}`:N`<div class="section-titre" style="padding:4px 4px 2px">Texte</div>
            <input class="champ-edition" placeholder="Décris l'étape…" .value=${i.texte??``} aria-label="Texte du pas"
              @change=${e=>o(t=>{let n=e.target.value.trim();n?t.texte=n:delete t.texte})}>`}
      ${(e.bibliotheque.compositions.find(e=>e.id===t)?.acteurs??[]).length?N`<div class="section-titre" style="padding:10px 4px 2px">Qui agit</div>
            <div class="chips-filtres edition-acteur" style="flex-wrap:wrap; padding:0">
              ${(e.bibliotheque.compositions.find(e=>e.id===t).acteurs??[]).map((e,t)=>N`<button class="chip-filtre ${i.acteurId===e.id?`actif`:``}" data-acteur-rang=${t+1}
                  @click=${()=>o(t=>{t.acteurId=e.id})}>${e.nom}</button>`)}
              <button class="chip-filtre ${i.acteurId?``:`actif`}"
                @click=${()=>o(e=>{delete e.acteurId})}>Tous</button>
            </div>`:P}
      ${(r.compositions.find(e=>e.id===t)?.blocs[0]?.id??n)===n?P:$c(e,ea(i),e=>o(t=>{e?t.lien=!0:delete t.lien}),`edition-lien`)}
      <div class="section-titre" style="padding:10px 4px 2px">Durée</div>
      ${Xc(e,i.dureeSec,e=>o(t=>{e===void 0?delete t.dureeSec:t.dureeSec=e}))}
      <div class="actions" style="margin-top:14px">
        <button class="action-danger" @click=${()=>{a(),e.modifierComposition(t,e=>ra(e,n))}}>Retirer ce pas</button>
        <button class="bouton principal" @click=${a}>Terminer</button>
      </div>
    </div>`}function cl(e,t,n){let r=t.presentation?.medias??[];return r.length?N`
    <div class="composition-presentation">
      <div class="section-titre section-liste-titre" style="padding:8px 4px 2px">Présentation</div>
      <div class="presentation-medias">
        ${r.map(r=>N`<div class="presentation-media">
            ${cc(e,r)}
            ${n?N`<button class="bouton-icone" aria-label="Retirer de la présentation" title="Retirer de la présentation"
                  @click=${()=>void e.retirerMediaPresentation(t.id,r.id)}>✕</button>`:P}
          </div>`)}
      </div>
    </div>`:N``}function ll(e,t){let n=e.bibliotheque.compositions.find(e=>e.id===t);if(!n)return N`<div class="ecran"><p class="fil-vide">Composition introuvable.</p></div>`;Vl&&Vl!==t&&(Vl=null);let r=Vl===t;return N`
    <div class="ecran">
      <div class="barre fiche-barre">
        <button class="bouton-icone" aria-label="Retour" @click=${()=>e.retour()}>
          <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M15 5l-7 7 7 7"/></svg>
        </button>
        <span class="contexte">Composition${hc(n)?` · ${hc(n)}`:``}</span>
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
            @click=${()=>{Vl=r?null:n.id,e.requestUpdate()}}>${r?`✓`:`✎`}</button>
          <button class="bouton-icone menu-composition" aria-label="Options" title="Options de la composition"
            @click=${()=>{e.menuComposition=n.id,e.requestUpdate()}}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="12" cy="5" r="1.9"/><circle cx="12" cy="12" r="1.9"/><circle cx="12" cy="19" r="1.9"/></svg>
          </button>
          <!-- Mode pas-à-pas (D-093) : lance le déroulé plein écran dès qu'il y a des blocs. -->
          ${n.blocs.length>0?N`<button class="bouton-icone passer-en-revue" aria-label="Passer en revue" title="Passer en revue, pas à pas"
                @click=${()=>e.demarrerEntrainement(n.id)}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 5v14l12-7z"/></svg>
              </button>`:P}
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
      ${r?N`
            <div class="fiche-entete composition-titre-lecture"><h1>${n.nom}</h1>
              ${n.description?N`<div class="jp" style="font-family:var(--ui)">${n.description}</div>`:P}
              <!-- UI-3 (D-321) : ce résumé disait « 4 temps · Tori · Uke » juste
                   au-dessus du bandeau qui dit « 3 étapes · Tori · Uke ». Deux
                   lieux pour la même information, et deux chiffres qui se
                   contredisent à l'œil (un jalon fait un temps, pas une étape)
                   — exactement le piège de D-253. Les rôles vivent dans le
                   bandeau ; le nombre de TEMPS, qui n'est pas le nombre
                   d'étapes, le rejoint plutôt que de vivre à côté. -->
            </div>

            ${cl(e,n,!0)}

            <!-- UI-3 (D-321) : le bandeau de statistiques de la fiche, DÉRIVÉ,
                 remplace le solitaire « ⏱ Séance · 20 min » — l'éditeur ne
                 disait ni combien de pas ni qui agit. Même calcul, un seul
                 lieu (D-253), donc jamais deux chiffres qui divergent. -->
            ${_c(n)}

            ${n.blocs.length===0?N`<p class="fil-vide">Vide pour l'instant — touche <b>＋ Ajouter un élément</b>.</p>`:P}

            ${ia(n)&&n.blocs.length>0?Il(e,n,r):N`<ol class="blocs blocs-timeline">
                  ${(()=>{let t=0;return n.blocs.map(i=>Bl(e,n,i,i.type===`media`||da(i)?0:++t,r))})()}
                </ol>`}

            <button class="bouton ajouter-pas-inline" @click=${()=>{e.ajoutPas=n.id,e.requestUpdate()}}>
              ＋ Ajouter un élément
            </button>`:N`
            ${gc(e,n)}
            ${cl(e,n,!1)}
            ${n.blocs.length===0?N`<p class="fil-vide">Vide pour l'instant — touche <b>✎</b> puis <b>＋ Ajouter un élément</b>.</p>`:ia(n)?N`<h2 class="fiche-compo-section">Le déroulé</h2>${Il(e,n,!1)}`:vc(e,n)}
            ${yc(e,n)}`}
    </div>
  `}function ul(e){let t=e.bibliotheque?.compositions.find(t=>t.id===e.menuComposition);if(!t)return N``;let n=()=>{e.menuComposition=null,e.requestUpdate()};return N`
    <div class="voile" @click=${n}></div>
    <div class="feuille" role="dialog" aria-modal="true" tabindex="-1" aria-label="Options de la composition">
      <div class="prise"></div>
      <div class="section-titre" style="padding:4px 4px 2px">Renommer / décrire</div>
      <input class="champ-edition composition-titre" .value=${t.nom} aria-label="Titre de la composition"
        @change=${n=>{let r=n.target.value.trim();r&&e.modifierComposition(t.id,e=>e.nom=r)}}>
      <input class="champ-edition champ-description" .value=${t.description??``}
        placeholder="Description ou objectif (facultatif)" aria-label="Description"
        @change=${n=>{let r=n.target.value.trim();e.modifierComposition(t.id,e=>{r?e.description=r:delete e.description})}}>
      ${fl(e,t)}
      ${cl(e,t,!0)}
      ${pl(e,t)}
      <div class="actions" style="margin-top:14px">
        <button class="bouton" @click=${()=>{e.dupliquerComposition(t.id),n()}}>Dupliquer</button>
        <button class="action-danger supprimer-composition"
          @click=${()=>e.autoriser(`destruction_ou_sensible`,`Saisis le PIN pour supprimer « ${t.nom} ».`,()=>{e.demanderConfirmation({titre:`Supprimer « ${t.nom} » ?`,corps:`Tes techniques restent dans la bibliothèque — un point de restauration est conservé.`,bouton:`Supprimer la composition`,action:()=>{e.supprimerComposition(t.id)}}),n()})}>Supprimer</button>
      </div>
      <button class="bouton principal" style="margin-top:10px" @click=${n}>Terminer</button>
    </div>`}var dl=``;function fl(e,t){let n=t.acteurs??[],r=()=>{let n=dl.trim();n&&(dl=``,e.modifierComposition(t.id,e=>{let t=(e.acteurs??[]).map(e=>Number(e.id.replace(/\D/g,``))||0);(e.acteurs??=[]).push({id:`r${Math.max(0,...t)+1}`,nom:n})}))};return N`
    <div class="section-titre" style="padding:12px 4px 2px">Rôles ${n.length?N`<span class="acteurs-compte">· ${n.length}</span>`:P}</div>
    ${n.length===0?N`<div class="aide" style="font-size:12px; color:var(--sourdine); padding:0 4px 6px">
            Une composition à plusieurs ? Nomme les rôles — chaque pas dira alors qui agit.
          </div>`:P}
      <div class="acteurs-liste">
            ${n.map((n,r)=>N`<div class="acteur-ligne">
                <span class="acteur-puce" data-acteur-rang=${r+1} aria-hidden="true"></span>
                <input class="champ-mini" .value=${n.nom} aria-label="Nom du rôle"
                  @change=${r=>{let i=r.target.value.trim();i&&e.modifierComposition(t.id,e=>{let t=e.acteurs?.find(e=>e.id===n.id);t&&(t.nom=i)})}}>
                <button class="bouton-icone" aria-label="Retirer le rôle ${n.nom}" title="Retirer ce rôle"
                  @click=${()=>e.demanderConfirmation({titre:`Retirer le rôle « ${n.nom} » ?`,corps:`Les pas qui lui étaient attribués redeviennent neutres — aucun pas n'est supprimé.`,bouton:`Retirer le rôle`,action:()=>void e.modifierComposition(t.id,e=>{e.acteurs=(e.acteurs??[]).filter(e=>e.id!==n.id);for(let t of e.blocs)t.acteurId===n.id&&delete t.acteurId;e.acteurs.length===0&&delete e.acteurs})})}>✕</button>
              </div>`)}
        <div class="acteur-ligne acteur-nouveau">
          <span class="acteur-puce" data-acteur-rang=${n.length+1} aria-hidden="true"></span>
          <input class="champ-mini nom-role" .value=${dl} placeholder="Nom du rôle" aria-label="Nom d'un nouveau rôle"
            @input=${t=>{dl=t.target.value,e.requestUpdate()}}
            @keydown=${e=>{e.key===`Enter`&&r()}}>
          <button class="chip-filtre acteur-ajouter" ?disabled=${dl.trim()===``} @click=${r}>＋ Ajouter</button>
        </div>
      </div>`}function pl(e,t){return N`
    <div class="ajout-bloc capture-composition">
      <div class="section-titre" style="padding:12px 4px 2px">Présenter l'ensemble (démo complète, vidéo « moi »)</div>
      <div class="edition-actions">
        <button class="chip-filtre" @click=${()=>{let n=document.createElement(`input`);n.type=`file`,n.accept=`video/*`,n.onchange=()=>{let r=n.files?.[0];r&&e.ajouterMediaPresentation(t.id,{fichier:r})},n.click()}}>Vidéo de présentation</button>
        <button class="chip-filtre" @click=${()=>{let n=prompt(`Coller un lien (YouTube ou autre) qui présente cette composition :`);n?.trim()&&e.ajouterMediaPresentation(t.id,{lien:n})}}>Coller un lien</button>
      </div>
    </div>
  `}function ml(e,t,n){let r=e.bibliotheque.compositions.find(e=>e.id===t);if(!r||r.blocs.length===0)return N`<div class="ecran"><p class="fil-vide">Composition introuvable.</p></div>`;if(X.resume&&X.compositionId===t){let t=X.resume;return N`
      <div class="ecran entrainement entrainement-resume">
        <div class="entrainement-bloc" style="text-align:center">
          <div class="entrainement-prepa">Séance terminée ✓</div>
          <div class="entrainement-nom">${t.nom}</div>
          <div class="details" style="padding-top:8px">${t.blocs} pas parcourus · durée réalisée : ${ca(t.ecouleSec)}</div>
        </div>
        <div class="entrainement-actions" style="justify-content:center">
          <button class="bouton principal" @click=${()=>{X.resume=null,X.compositionId=null,X.debut=null,e.retour()}}>Fermer</button>
        </div>
      </div>`}X.compositionId!==t&&(X.compositionId=t,X.debut=Date.now(),X.resume=null);let i=Math.max(0,Math.min(n,r.blocs.length-1)),a=r.blocs[i],o=r.blocs[i+1],s=a.techniqueId?e.technique(a.techniqueId):void 0,c=la(r);bc(e,t,i);let l=n=>{Al(),e.ecran={type:`entrainement`,compositionId:t,index:n},window.scrollTo({top:0})},u=()=>{Ml(),X.compositionId=null,X.debut=null,e.retour()},d=a.type===`technique`&&a.consigne?N`<div class="entrainement-consigne">↳ ${a.consigne}</div>`:P,f=a.dureeSec!==void 0;f?Nl(e,r,a,i):(Y.blocId!==null&&Al(),kl(e,r,a));let p=f&&Y.blocId===a.id&&Y.phase===`prepa`,m=Math.max(0,Math.round(e.preferences.transitionSec??3)),h=Y.blocId===a.id,g=f?p?N`<div class="entrainement-prepa">Préparez-vous</div>
          ${Tc(Y.restant,m,N`<div class="entrainement-chrono ${Y.enMarche?``:`en-pause`}">${Y.restant}</div>`)}`:Tc(h?Y.restant:a.dureeSec,a.dureeSec,N`<div class="entrainement-chrono ${Y.enMarche?``:`en-pause`}">${wl(h?Y.restant:a.dureeSec)}</div>`):P;return Y.mode=e.preferences.sonSeance??`les-deux`,N`
    <div class="ecran entrainement">
      <div class="entrainement-entete">
        <span class="entrainement-titre">${r.nom}</span>
        <span class="entrainement-progression">${i+1} / ${r.blocs.length}${c>0?N` · ⏱ ${ca(c)}`:P}</span>
      </div>
      ${Sc(i+1,r.blocs.length)}
      <div class="entrainement-bloc">
        <!-- D-227/D-229 : au bord du tatami, QUI agit se lit avant quoi. -->
        ${(()=>{let e=Qi(r,a),t=e?(r.acteurs??[]).findIndex(t=>t.id===e.id)+1:0;return e||ea(a)?N`<div class="entrainement-roles">
                ${e?N`<span class="bloc-acteur" data-acteur-rang=${t}>${e.nom}</span>`:P}
                ${ea(a)?N`<span class="bloc-lien">en même temps que le pas précédent</span>`:P}
              </div>`:P})()}
        ${a.type===`technique`?s?N`<button class="entrainement-vignette-lien" title="Voir la fiche" @click=${()=>e.ouvrirFiche(s.id)}>
                  <div class="entrainement-vignette">${U(e,s)}</div>
                </button>
                <div class="entrainement-nom">${s.nom}</div>
                ${s.nomTraditionnel?N`<div class="entrainement-jp">${s.nomTraditionnel}</div>`:P}
                ${d}${g}`:N`<div class="entrainement-nom sourdine">${a.texte??`Technique`} — indisponible</div>${g}`:a.type===`media`?N`<div class="entrainement-media">${a.medias.map(t=>cc(e,t))}</div>`:N`<div class="entrainement-texte">${a.type===`pause`?a.texte||`Pause`:a.texte||`Segment`}</div>${g}`}
      </div>
      ${f&&!Y.enMarche&&Y.pauseAuto&&Y.blocId===a.id?N`<div class="entrainement-pause-auto">Séance mise en pause — l'app est passée en arrière-plan.</div>`:P}
      ${f?N`<div class="entrainement-chrono-controles">
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
          </div>`:P}
      ${o?wc(e,r,a,o):P}
      <div class="entrainement-actions">
        <button class="bouton" ?disabled=${i===0} @click=${()=>l(i-1)}>← Précédent</button>
        <button class="bouton" @click=${u}>Quitter</button>
        ${i===r.blocs.length-1?N`<button class="bouton principal" @click=${()=>bl(e,r)}>Terminer</button>`:N`<button class="bouton principal" @click=${()=>l(i+1)}>Suivant →</button>`}
      </div>
    </div>
  `}var Y={blocId:null,phase:`actif`,restant:0,enMarche:!0,pauseAuto:!1,mode:`les-deux`,annonce:null,timer:null};function hl(e){Y.blocId===null||!Y.enMarche||(Y.enMarche=!1,Y.pauseAuto=!0,jl(),e.requestUpdate())}var gl=null;async function _l(){if(`wakeLock`in navigator&&!(gl&&!gl.released))try{gl=await navigator.wakeLock.request(`screen`)}catch{gl=null}}function vl(){gl?.release().catch(()=>{}),gl=null}var X={compositionId:null,debut:null,resume:null};function yl(){X.compositionId=null,X.debut=null,X.resume=null}function bl(e,t){let n=X.debut?Math.max(0,Math.round((Date.now()-X.debut)/1e3)):0;Ml(),Ol(`Séance terminée`),Tl(660,380),X.resume={nom:t.nom,blocs:t.blocs.length,ecouleSec:n},xc(e),e.requestUpdate()}var xl=null,Sl=()=>Y.mode===`les-deux`||Y.mode===`voix`,Cl=()=>Y.mode===`les-deux`||Y.mode===`bips`;function wl(e){let t=Math.max(0,Math.round(e));return`${Math.floor(t/60)}:${`${t%60}`.padStart(2,`0`)}`}function Tl(e=880,t=120,n=.18){if(Cl())try{let r=window.AudioContext||window.webkitAudioContext;xl??=new r,xl.resume?.();let i=xl.currentTime,a=xl.createOscillator(),o=xl.createGain();a.type=`sine`,a.frequency.value=e,a.connect(o),o.connect(xl.destination),o.gain.setValueAtTime(n,i),o.gain.exponentialRampToValueAtTime(1e-4,i+t/1e3),a.start(i),a.stop(i+t/1e3)}catch{}}function El(e,t,n){let r=n.type===`technique`?n.techniqueId&&e.technique(n.techniqueId)?.nom||n.texte||`technique`:n.type===`pause`?n.texte?.trim()||`Pause`:n.texte?.trim()||`segment`,i=Qi(t,n);return[ea(n)?`en même temps`:void 0,i?.nom,r].filter(Boolean).join(`, `)}async function Dl(e){try{if(window.Capacitor?.isNativePlatform?.()){let{TextToSpeech:t}=await vi(async()=>{let{TextToSpeech:e}=await import(`./esm-2KWAG5BN.js`);return{TextToSpeech:e}},__vite__mapDeps([3,1]),import.meta.url);await t.speak({text:e,lang:`fr-FR`,rate:1});return}}catch{}try{let t=window.speechSynthesis;if(!t)return;t.paused&&t.resume();let n=new SpeechSynthesisUtterance(e);n.lang=`fr-FR`,t.speak(n)}catch{}}function Ol(e){if(!Sl()||!e)return;let t=window;Array.isArray(t.__voix)&&t.__voix.push(e),Dl(e)}function kl(e,t,n){Y.annonce!==n.id&&(Y.annonce=n.id,Ol(El(e,t,n)))}function Al(){Y.timer!==null&&(clearInterval(Y.timer),Y.timer=null),Y.blocId=null}function jl(){try{window.speechSynthesis?.cancel()}catch{}try{window.Capacitor?.isNativePlatform?.()&&vi(()=>import(`./esm-2KWAG5BN.js`).then(e=>e.TextToSpeech.stop()),__vite__mapDeps([3,1]),import.meta.url).catch(()=>{})}catch{}}function Ml(){Al(),Y.annonce=null,jl()}function Nl(e,t,n,r){if(n.dureeSec===void 0||Y.blocId===n.id)return;Al(),Y.blocId=n.id,Y.annonce=n.id,Y.enMarche=!0,Y.pauseAuto=!1;let i=Math.max(1,Math.round(n.dureeSec)),a=Math.max(0,Math.round(e.preferences.transitionSec??3)),o=El(e,t,n);a>0?(Y.phase=`prepa`,Y.restant=a,Ol(`Préparez-vous. ${o}`),Tl(520,90)):(Y.phase=`actif`,Y.restant=i,Ol(`${o}, ${qi(i)}`)),Y.timer=window.setInterval(()=>{if(e.ecran.type!==`entrainement`||e.ecran.compositionId!==t.id){Ml();return}if(!(Y.blocId!==n.id||!Y.enMarche)){if(--Y.restant,Y.phase===`prepa`){if(Y.restant>0){Tl(520,90),e.requestUpdate();return}Y.phase=`actif`,Y.restant=i,Ol(`${o}, ${qi(i)}`),Tl(720,160),e.requestUpdate();return}if(Y.restant>0){let t=Ji(i,Y.restant);t&&Ol(t),Y.restant<=3&&Tl(880,90),e.requestUpdate();return}Tl(440,380),Al(),r+1<t.blocs.length?e.ecran={type:`entrainement`,compositionId:t.id,index:r+1}:bl(e,t),e.requestUpdate()}},1e3)}function Pl(e,t,n){let r=t.blocs.find(e=>e.id===n);return r?r.type===`technique`?(r.techniqueId?e.technique(r.techniqueId)?.nom:void 0)??r.texte??`la technique`:r.type===`pause`?r.texte||`la pause`:r.type===`media`?`le média`:r.texte||`l'étape`:`le pas`}function Fl(e,t){return{reordonner:(n,r)=>{let i=e.bibliotheque?.compositions.find(e=>e.id===t.id);i&&sa(i,n,r)},enregistrer:()=>void e.modifierComposition(t.id,()=>{}),ordre:()=>t.blocs.map(e=>e.id),nom:n=>Pl(e,t,n)}}function Il(e,t,n){let r=t.acteurs??[],i=ta(t),a=r.length>6?`max`:String(r.length);return N`
    <div class="dialogue ${n?`edition`:``}" data-roles=${a} style=${`--voies:${Math.max(1,r.length)}`}>
      ${r.length?N`<div class="dialogue-entete">
            <span aria-hidden="true"></span>
            ${r.map((e,t)=>N`<span class="dialogue-role" data-acteur-rang=${t+1}>${e.nom}</span>`)}
          </div>`:P}
      <ol class="dialogue-temps">
        ${i.map(r=>Ll(e,t,r,n))}
      </ol>
    </div>`}function Ll(e,t,n,r){let{colonnes:i,neutres:a}=aa(t,n);return N`
    <li class="temps" data-temps=${n.numero}>
      <div class="temps-grille">
        <span class="temps-numero" aria-label="Temps ${n.numero}">${n.numero}</span>
        ${i.map((n,i)=>N`
          <div class="temps-colonne" data-acteur-rang=${i+1}>
            ${n.map(n=>Rl(e,t,n,i+1,r))}
          </div>`)}
        ${a.length?N`<div class="temps-neutres">${a.map(n=>Rl(e,t,n,0,r))}</div>`:P}
      </div>
    </li>`}function Rl(e,t,n,r,i){let a=n.techniqueId?e.technique(n.techniqueId):void 0,o=Qi(t,n),s=n.type===`technique`?a?N`<button class="trame-technique" @click=${()=>e.ouvrirFiche(a.id)}>
            ${U(e,a)}<span class="bloc-nom">${a.nom}</span>
          </button>`:N`<span class="puce-liaison absente">${n.texte??`technique`} — indisponible</span>`:n.type===`media`?N`<span class="bloc-media-corps">${n.medias.map(t=>cc(e,t))}</span>`:N`<span class="bloc-texte">${n.type===`pause`?n.texte||`Pause`:n.texte}</span>`;return N`
    <div class="bloc carte-dialogue ${n.type}" data-bloc-id=${n.id} data-acteur-rang=${r||P}>
      <!-- D-235 : aucun glyphe, aucun mot de liaison. La rangée dit le temps,
           la colonne dit qui. Le nom du rôle reste TOUJOURS dans le DOM. -->
      ${o?N`<span class="carte-entete"><span class="carte-role">${o.nom}</span></span>`:P}
      ${s}
      ${n.consigne?N`<span class="bloc-consigne">↳ ${n.consigne}</span>`:P}
      ${n.dureeSec===void 0?P:N`<span class="bloc-duree">⏱ ${ca(n.dureeSec)}</span>`}
      ${i?zl(e,t,n):P}
    </div>`}function zl(e,t,n){let r=t.acteurs??[],i=t.blocs[0]?.id===n.id,a=r=>void e.modifierComposition(t.id,e=>{let t=e.blocs.find(e=>e.id===n.id);t&&r(t)});return N`
    <div class="pas-reglages">
      ${r.length?N`<span class="reglage-champ">
            <select class="reglage-acteur" aria-label="Qui agit"
              @change=${e=>{let t=e.target.value;a(e=>{t?e.acteurId=t:delete e.acteurId})}}>
              <option value="" ?selected=${!n.acteurId}>Tous</option>
              ${r.map(e=>N`<option value=${e.id} ?selected=${n.acteurId===e.id}>${e.nom}</option>`)}
            </select></span>`:P}
      ${i?P:N`<button class="chip-filtre reglage-lien ${ea(n)?`actif`:``}"
            role="switch" aria-checked=${ea(n)} aria-label="Rejoint le temps précédent"
            title="Rejoint le temps précédent — ce pas se joue en même temps"
            @click=${()=>a(e=>{ea(n)?delete e.lien:e.lien=!0})}>
            ${ea(n)?`⤿ même temps`:`temps à part`}
          </button>`}
      <span class="pas-outils">
        ${_a(e,n.id,Fl(e,t))}
        ${n.type===`media`?P:N`<button class="bouton-icone" aria-label="Détails de ce pas" title="Consigne, durée, remplacer la technique"
              @click=${()=>{Qc(),e.editionPas={compoId:t.id,blocId:n.id},e.requestUpdate()}}>⋯</button>`}
        <button class="bouton-icone" aria-label="Retirer ce pas" title="Retirer ce pas"
          @click=${()=>void e.modifierComposition(t.id,e=>ra(e,n.id))}>✕</button>
      </span>
    </div>`}function Bl(e,t,n,r,i){let a=n.techniqueId?e.technique(n.techniqueId):void 0,o=n.type===`technique`?a?N`<button class="bloc-technique-lecture" @click=${()=>e.ouvrirFiche(a.id)}>
            ${U(e,a)}<span class="bloc-nom">${a.nom}</span>
          </button>`:N`<span class="puce-liaison absente">${n.texte??`technique`} — indisponible</span>`:n.type===`media`?N`<span class="bloc-media-corps">${n.medias.map(t=>cc(e,t))}</span>`:N`<span class="bloc-texte">${n.type===`pause`?n.texte||`Pause`:n.texte}</span>`,s=Qi(t,n),c=s?(t.acteurs??[]).findIndex(e=>e.id===s.id)+1:0,l=s?N`<span class="bloc-roles"><span class="bloc-acteur" data-acteur-rang=${c}>${s.nom}</span></span>`:P,u=n.type===`media`?P:n.consigne||n.dureeSec!==void 0||l!==P?N`<div class="bloc-meta bloc-meta-lecture">
            ${l}
            ${n.type===`technique`&&n.consigne?N`<span class="bloc-consigne">↳ ${n.consigne}</span>`:P}
            ${n.dureeSec===void 0?P:N`<span class="bloc-duree">⏱ ${ca(n.dureeSec)}</span>`}
          </div>`:P;return N`
    <li class="bloc ${n.type} lecture" data-bloc-id=${n.id}>
      <span class="bloc-nature">${r===0?P:`${r}.`}</span>
      ${o}
      ${u}
      <!-- D-233 : les outils n'existent qu'en mode édition (✎ de la barre
           haute) — en lecture, la place revient au contenu. -->
      ${i?zl(e,t,n):P}
    </li>
  `}var Vl=null;function Hl(e){e.garde(`modification`,`Saisis le PIN pour créer une composition.`,()=>e.ouvrirCreationCompo())&&(Qc(),e.creationCompo={etape:`nom`,nom:``},e.requestUpdate())}async function Ul(e){let t=e.bibliotheque,n=e.creationCompo?.nom.trim();if(!t||!e.creationCompo||!n)return;let r=Xi(n);t.compositions.push(r),await e.persister(t),Qc(),e.creationCompo={...e.creationCompo,compoId:r.id,etape:`roles`,roles:[]},e.requestUpdate()}async function Wl(e,t){let n=e.creationCompo;if(!n?.compoId)return;let r=t.map(e=>e.trim()).filter(e=>e!==``);r.length>=2&&await e.modifierComposition(n.compoId,e=>{e.acteurs=r.map((e,t)=>({id:`r${t+1}`,nom:e}))}),e.creationCompo={...n,etape:`pas`},e.requestUpdate()}function Gl(e){let t=e.creationCompo?.compoId;e.creationCompo=null,t&&e.ouvrirComposition(t),e.requestUpdate()}function Kl(e){let t=e.creationCompo;t&&(t.etape===`pas`||t.etape===`roles`?e.fermerCreationCompo():(e.creationCompo=null,e.requestUpdate()))}async function ql(e,t){if(!e.garde(`modification`,`Saisis le PIN pour créer une composition.`,()=>void e.creerComposition(t)))return;let n=e.bibliotheque,r=t.trim();if(!n||!r)return;let i=Xi(r);n.compositions.push(i),await e.persister(n),e.ouvrirComposition(i.id),e.requestUpdate()}async function Jl(e,t,n){if(!e.garde(`modification`,`Saisis le PIN pour enregistrer ce parcours.`,()=>void e.creerCompositionDepuisEtapes(t,n)))return;let r=e.bibliotheque,i=t.trim();if(!r||!i||n.length===0)return;let a=Xi(i,`personnel`,`enchainement`);for(let e of n)a.blocs.push(Zi(`technique`,{techniqueId:e.techniqueId,...e.consigne?{consigne:e.consigne}:{}}));r.compositions.push(a),await e.persister(r),e.ouvrirComposition(a.id),e.requestUpdate()}async function Yl(e,t,n){if(!e.garde(`modification`,`Saisis le PIN pour enregistrer cette composition.`,()=>void e.modifierComposition(t,n)))return!1;let r=e.bibliotheque,i=r?.compositions.find(e=>e.id===t);if(!r||!i)return!1;let a=structuredClone(i);n(i),na(i),i.modifieLe=new Date().toISOString();try{return await e.persister(r),!0}catch(t){return Object.assign(i,a),e.afficherToast(t instanceof Error?t.message:`Modification refusée`),!1}}async function Xl(e,t){if(!e.garde(`modification`,`Saisis le PIN pour dupliquer cette composition.`,()=>void e.dupliquerComposition(t)))return;let n=e.bibliotheque,r=n?.compositions.find(e=>e.id===t);if(!n||!r)return;let i={...structuredClone(r),id:rt(),nom:`${r.nom} (copie)`,creeLe:new Date().toISOString(),modifieLe:new Date().toISOString(),blocs:r.blocs.map(e=>({...structuredClone(e),id:rt()}))};delete i.origine,i.provenance=`personnel`,delete i.attribution,n.compositions.push(i),await e.persister(n),e.ouvrirComposition(i.id),e.afficherToast(`« ${i.nom} » créée ✓ — l'originale n'a pas bougé`)}async function Zl(e,t){if(!e.garde(`destruction_ou_sensible`,`Saisis le PIN pour exporter cette composition.`,()=>void e.exporterComposition(t)))return;let n=e.bibliotheque,r=n?.compositions.find(e=>e.id===t);if(!n||!r)return;let i=new Set(r.blocs.filter(e=>e.type===`technique`&&e.techniqueId).map(e=>e.techniqueId)).size,a=r.blocs.flatMap(e=>e.medias).filter(e=>e.type===`local`).length;if(!confirm(`Exporter « ${r.nom} » (.movpack) ?\n- la composition (${r.blocs.length} bloc${r.blocs.length>1?`s`:``})\n- ${i} technique${i>1?`s`:``} référencée${i>1?`s`:``} (identités seules, sans contenu)\n- ${a?`${a} vidéo(s) de repère incluse(s)`:`aucune vidéo locale`}\n- ton carnet personnel : jamais inclus`))return;let o=di(n,t),s=await Fi(e,o);await Ii(e,o,{id:pi(r.id),nom:r.nom,portee:`composition`},s,`${fi(r.nom)}.movpack`)!==null&&e.afficherToast(`Composition « ${r.nom} » exportée ✓ — s'importe et rejoint la bibliothèque cible`)}async function Ql(e,t,n=!0){let r=e.bibliotheque,i=r?.compositions.find(e=>e.id===t);if(!r||!i)return;let a=di(r,t),o=He(a),s=await e.stockage.listerVideos(),c=n?[...o].filter(e=>s.has(e)):[],l=`${fi(i.nom)}.movpack`,u=await Ii(e,a,{id:pi(i.id),nom:i.nom,portee:`composition`},c,l,!1);u!==null&&await xi(e,u.fichier,i.nom,`Composition « ${i.nom} » — Movenso`)}async function $l(e,t,n){await e.modifierComposition(t,e=>{if(!e.presentation)return;let t=e.presentation.medias.filter(e=>e.id!==n);t.length?e.presentation={medias:t}:delete e.presentation})}async function eu(e,t){if(!e.garde(`destruction_ou_sensible`,`Saisis le PIN pour supprimer cette composition.`,()=>void e.supprimerComposition(t)))return;let n=e.bibliotheque,r=n?.compositions.find(e=>e.id===t);!n||!r||(await e.stockage.snapshot(`avant-suppression-de-composition`),n.compositions=n.compositions.filter(e=>e.id!==t),await e.persister(n),e.menuComposition=null,e.retour(),e.afficherToast(`Composition « ${r.nom} » supprimée — point de restauration conservé`))}function tu(e,t){let n={...e};if(t.description!==void 0){let e=t.description.trim();e?n.description=e:delete n.description}return t.attribution!==void 0&&t.attribution.trim()&&(n.attribution=t.attribution.trim()),t.pointsCles!==void 0&&(n.pointsCles=t.pointsCles.map(e=>e.trim()).filter(e=>e.length>0)),t.modifiePar!==void 0&&t.modifiePar.trim()&&(n.modifiePar=t.modifiePar.trim()),n}var nu=!1,ru=!1;function iu(){return ru}function au(e){ru=e}function ou(e){let t=Ha(e);return t.ok?{media:t.type===`plateforme`?{id:rt(),type:`plateforme`,service:t.service,ref:t.ref}:{id:rt(),type:`lien`,ref:t.ref}}:{erreur:t.raison}}async function su(e){let t=URL.createObjectURL(e);try{let e=await new Promise((e,n)=>{let r=new Image;r.onload=()=>e(r),r.onerror=()=>n(Error(`image illisible`)),r.src=t}),n=Math.min(1,480/Math.max(e.naturalWidth,e.naturalHeight||1)),r=Math.max(1,Math.round(e.naturalWidth*n)),i=Math.max(1,Math.round(e.naturalHeight*n)),a=document.createElement(`canvas`);a.width=r,a.height=i;let o=a.getContext(`2d`);if(!o)throw Error(`canvas indisponible`);o.drawImage(e,0,0,r,i);let s=await new Promise(e=>a.toBlob(e,`image/jpeg`,.72));if(!s)throw Error(`encodage impossible`);return new Uint8Array(await s.arrayBuffer())}finally{URL.revokeObjectURL(t)}}async function cu(e,t,n){if(!e.garde(`modification`,`Saisis le PIN pour écrire dans ton carnet.`,()=>void e.ajouterNote(t,n)))return;let r=e.bibliotheque,i=n.trim();!r||!i||(r.contributions.push({id:rt(),techniqueId:t,provenance:`personnel`,description:i,pointsCles:[],creeLe:new Date().toISOString(),medias:[]}),await e.persister(r))}async function lu(e,t,n,r){if(!e.garde(`modification`,`Saisis le PIN pour ajouter ce média.`,()=>void e.ajouterMediaFiche(t,n,r)))return;let i=e.bibliotheque;if(i&&!ru){ru=!0;try{let a=[],o=[];if(n.fichier){let t=ft(n.fichier);if(t){e.afficherToast(t);return}let r=await bu(e,i,n.fichier,`fichier`);if(!r)return;r.ecrit&&o.push(r.media.id),a.push(r.media)}if(n.lien?.trim()){let t=ou(n.lien.trim());if(`erreur`in t){e.afficherToast(t.erreur);return}a.push(t.media)}if(!a.length&&!r?.texte?.trim())return;r?.label&&a[0]&&(a[0].label=r.label);let s=r?.provenance??`personnel`,c={id:rt(),techniqueId:t,provenance:s,...r?.texte?.trim()?{description:r.texte.trim()}:{},...s!==`personnel`&&r?.attribution?{attribution:r.attribution}:{},pointsCles:[],creeLe:new Date().toISOString(),medias:a};if(i.contributions.push(c),!await xu(e,i,o,()=>{i.contributions=i.contributions.filter(e=>e.id!==c.id)}))return;a[0]&&(e.mediaAffiche=a[0].id),e.ajoutMedia=null,e.afficherToast(s===`personnel`?`Ajouté à ton carnet ✓`:a.length?`Média ajouté ✓`:`Contribution ajoutée ✓`)}finally{ru=!1}}}async function uu(e,t,n,r){if(!e.garde(`modification`,`Saisis le PIN pour ajouter ce média.`,()=>void e.ajouterMediaPresentation(t,n,r)))return;let i=e.bibliotheque,a=i?.compositions.find(e=>e.id===t);if(!(!i||!a)&&!ru){ru=!0;try{let t=[],o=[];if(n.fichier){let r=ft(n.fichier);if(r){e.afficherToast(r);return}let a=await bu(e,i,n.fichier,`fichier`);if(!a)return;a.ecrit&&o.push(a.media.id),t.push(a.media)}if(n.lien?.trim()){let r=ou(n.lien.trim());if(`erreur`in r){e.afficherToast(r.erreur);return}t.push(r.media)}if(!t.length)return;r?.trim()&&t[0]&&(t[0].label=r.trim());let s=a.presentation?structuredClone(a.presentation):void 0;if(a.presentation={medias:[...a.presentation?.medias??[],...t]},a.modifieLe=new Date().toISOString(),!await xu(e,i,o,()=>{s?a.presentation=s:delete a.presentation}))return;e.afficherToast(`Présentation ajoutée ✓`)}finally{ru=!1}}}async function du(e,t,n){if(!e.garde(`modification`,`Saisis le PIN pour modifier cette contribution.`,()=>void e.amenderContribution(t,n)))return;let r=e.bibliotheque,i=r?.contributions.find(e=>e.id===t);if(!r||!i)return;let a=i.origine?{modifiePar:e.preferences.pseudo?.trim()||`moi`}:{};n={...n,...a};let o=tu(i,n),s=e=>{let t=r.contributions.findIndex(e=>e.id===i.id);t!==-1&&(r.contributions[t]=e)};s(o);try{await e.persister(r)}catch(t){s(i),e.afficherToast(t instanceof Error?t.message:`Modification refusée`)}}async function fu(e,t,n){if(!e.garde(`modification`,`Saisis le PIN pour renommer ce média.`,()=>void e.majMediaLabel(t,n)))return;let r=e.bibliotheque;if(!r)return;let i=r.contributions.find(e=>e.medias.some(e=>e.id===t)),a=i?.medias.find(e=>e.id===t);if(!i||!a)return;let o=a.label,s=n.trim();s?a.label=s:delete a.label;try{await e.persister(r)}catch(t){o===void 0?delete a.label:a.label=o,e.afficherToast(t instanceof Error?t.message:`Renommage refusé`)}}async function pu(e,t,n){if(!e.garde(`modification`,`Saisis le PIN pour modifier ce lien.`,()=>void e.majMediaLien(t,n)))return;let r=e.bibliotheque;if(!r)return;let i=n.trim();if(!i)return;let a=r.contributions.flatMap(e=>e.medias).filter(e=>e.id===t&&e.type!==`local`);if(a.length===0)return;let o=ou(i);if(`erreur`in o){e.afficherToast(o.erreur);return}let s=o.media,c=a.map(e=>({m:e,type:e.type,service:e.service,ref:e.ref}));for(let e of a)e.type=s.type,e.ref=s.ref,s.service?e.service=s.service:delete e.service;try{await e.persister(r),e.afficherToast(`Lien mis à jour ✓`)}catch(t){for(let e of c)e.m.type=e.type,e.m.ref=e.ref,e.service?e.m.service=e.service:delete e.m.service;e.afficherToast(t instanceof Error?t.message:`Lien refusé`)}}async function mu(e,t,n,r){let i=e.bibliotheque,a=i?.techniques.find(e=>e.id===t);!i||!a||(n?a.couverture=n:delete a.couverture,r&&!(i.images??[]).some(e=>e.id===r.id)&&(i.images=[...i.images??[],r]),i.images=zr(i),await e.persister(i))}async function hu(e,t,n){if(e.garde(`modification`,`Saisis le PIN pour changer la vignette.`,()=>void e.definirCouvertureImage(t,n)))try{let r=await su(n),i=await e.stockage.ajouterImage(r,`image/jpeg`);await mu(e,t,{type:`fichier`,imageId:i.id},i),e.afficherToast(`Vignette mise à jour ✓`)}catch{e.afficherToast(`Image illisible — choisis une autre photo`,`alerte`)}}async function gu(e,t,n){e.garde(`modification`,`Saisis le PIN pour changer la vignette.`,()=>void e.definirCouvertureMedia(t,n))&&(await mu(e,t,{type:`media`,mediaId:n}),e.afficherToast(`Vignette mise à jour ✓`))}async function _u(e,t){e.garde(`modification`,`Saisis le PIN pour changer la vignette.`,()=>void e.retirerCouverture(t))&&(await mu(e,t,null),e.afficherToast(`Vignette retirée ✓`))}async function vu(e,t,n){if(!e.garde(`destruction_ou_sensible`,`Saisis le PIN pour retirer ce média.`,()=>void e.retirerMedia(t,n)))return;let r=e.bibliotheque,i=r?.techniques.find(e=>e.id===t),a=r?.contributions.find(e=>e.techniqueId===t&&e.medias.some(e=>e.id===n));!r||!i||!a||(await e.stockage.snapshot(`avant-retrait-d-un-media`),a.medias=a.medias.filter(e=>e.id!==n),a.medias.length===0&&!(a.description??``).trim()&&a.pointsCles.length===0&&(r.contributions=r.contributions.filter(e=>e.id!==a.id)),i.mediaPrincipalId===n&&delete i.mediaPrincipalId,i.couverture?.type===`media`&&i.couverture.mediaId===n&&delete i.couverture,e.mediaAffiche===n&&(e.mediaAffiche=null),await e.persister(r),e.afficherToast(`Média retiré — point de restauration conservé dans les sauvegardes`))}function yu(e){nu=!0}async function bu(e,t,n,r){nu=!1;let i=()=>nu;e.enregistrementMedia={phase:`analyse`,fraction:0,octets:n.size,etaSec:null},e.requestUpdate();try{let{media:a,dejaPresent:o}=await pt(t,n,r,i);if(o)return{media:a,ecrit:!1};if(await Ct(e,n))return null;let s=performance.now();e.enregistrementMedia={phase:`ecriture`,fraction:0,octets:n.size,etaSec:null},e.requestUpdate();let c=0;return await e.stockage.ecrireVideo(a.id,n,a.extension,t=>{let r=performance.now();if(t<1&&r-c<100)return;c=r;let i=(r-s)/1e3,a=t>.03?Math.max(0,Math.round(i/t-i)):null;e.enregistrementMedia={phase:`ecriture`,fraction:t,octets:n.size,etaSec:a},e.requestUpdate()},i),{media:a,ecrit:!0}}catch(t){if(t instanceof Error&&t.name===`AnnulationIngestion`)return e.afficherToast(`Ajout annulé — rien n'a été écrit`),null;throw t}finally{e.enregistrementMedia=null,e.requestUpdate()}}async function xu(e,t,n,r){try{return await e.persister(t),!0}catch(t){r();for(let t of n)await e.stockage.supprimerVideo(t);return e.afficherToast(t instanceof Error?t.message:`Enregistrement refusé`),!1}}function Su(e){e.capture={etape:`contenu`,note:``,demarreA:Date.now(),...e.ecran.type===`composition`?{compositionCible:e.ecran.compositionId}:{},...e.ecran.type===`discipline`?{disciplineChoisieId:e.ecran.disciplineId}:{}}}async function Cu(e){let t=e.capture,n=t?.compositionCible,r=e.bibliotheque;if(!t||!n||!r||!e.garde(`modification`,`Saisis le PIN pour enregistrer ce repère.`,()=>void e.terminerCaptureRepere()))return;let i=r.compositions.find(e=>e.id===n);if(i&&!iu()){au(!0);try{let n=[],a=[];if(t.video){let i=ft(t.video);if(i){e.afficherToast(i);return}let o=await bu(e,r,t.video,t.camera?`camera`:`fichier`);if(!o)return;o.ecrit&&a.push(o.media.id),n.push(o.media)}if(t.lien?.trim()){let r=ou(t.lien.trim());if(`erreur`in r){e.afficherToast(r.erreur);return}n.push(r.media)}let o=t.note.trim();if(!o&&n.length===0)return;let s=rt(),c=i.modifieLe;if(i.blocs.push({id:s,type:`repere`,...o?{texte:o}:{},medias:n}),i.modifieLe=new Date().toISOString(),!await xu(e,r,a,()=>{i.blocs=i.blocs.filter(e=>e.id!==s),c===void 0?delete i.modifieLe:i.modifieLe=c}))return;e.capture=null,e.afficherToast(`Repère ajouté à la composition ✓`)}finally{au(!1)}}}function wu(e,t){e.garde(`modification`,`Saisis le PIN pour reprendre cette capture.`,()=>void e.ouvrirRattachement(t))&&(e.capture={etape:`rattacher`,note:``,demarreA:Date.now(),rattacherSeul:t})}function Tu(e){e.capture?.apercuUrl&&URL.revokeObjectURL(e.capture.apercuUrl),e.capture=null}function Eu(e){let t=e.capture;if(!t)return;if(t.question){e.capture={...t,question:!1};return}if(t.rattacherSeul){e.fermerCapture();return}let n=t.video!==void 0||(t.lien??``).trim()!==``||t.note.trim()!==``;if(t.etape===`rattacher`){e.capture={...t,etape:`note`};return}if(t.etape===`apercu`||t.etape===`note`){e.capture=n?{...t,question:!0}:{...t,etape:`contenu`};return}if(t.saisieLien){e.capture={...t,saisieLien:!1};return}e.fermerCapture()}async function Du(e,t,n,r){if(!e.garde(`modification`,`Saisis le PIN pour enregistrer cette capture.`,()=>void e.terminerCapture(t,n,r)))return;let i=e.bibliotheque,a=e.capture;if(!i||!a)return;let o=Math.max(1,Math.round((Date.now()-a.demarreA)/1e3));if(n!==void 0){let a=r?.disciplineId??(e.ecran.type===`fiche`?e.technique(e.ecran.techniqueId)?.disciplineId:void 0)??(i.disciplines.length===1?i.disciplines[0].id:void 0);if(!a&&r?.disciplineNom?.trim()&&(a=rt(),i.disciplines.push({id:a,nom:r.disciplineNom.trim(),familles:[],niveaux:[]})),!a){e.afficherToast(`Choisis ou nomme une discipline pour cette technique`,`alerte`);return}if(t=e.pousserNouvelleTechnique(i,a,n),!t){e.afficherToast(`Nom de technique vide — précise-le pour rattacher`,`alerte`);return}}if(a.rattacherSeul!==void 0){let n=i.contributions.find(e=>e.id===a.rattacherSeul);n&&t&&(n.techniqueId=t),await e.persister(i),e.capture=null,t&&(e.afficherToast(`Rattaché à ${e.technique(t)?.nom} ✓`),e.ouvrirFiche(t));return}if(iu())return;au(!0);let s=[],c=[];try{if(a.video){let t=ft(a.video);if(t){e.afficherToast(t);return}let n=await bu(e,i,a.video,a.camera?`camera`:`fichier`);if(!n)return;n.ecrit&&c.push(n.media.id),s.push(n.media)}if(a.lien?.trim()){let t=ou(a.lien.trim());if(`erreur`in t){e.afficherToast(t.erreur);return}s.push(t.media)}let n=a.provenance??`personnel`,r={id:rt(),techniqueId:t,provenance:n,...a.note.trim()?{description:a.note.trim()}:{},...n!==`personnel`&&a.attribution?.trim()?{attribution:a.attribution.trim()}:{},pointsCles:[],creeLe:new Date().toISOString(),medias:s};if(i.contributions.push(r),!await xu(e,i,c,()=>{i.contributions=i.contributions.filter(e=>e.id!==r.id)}))return}finally{au(!1)}e.capture=null,t?(e.afficherToast(`Capturé ✓ rattaché à ${e.technique(t)?.nom} — ${o} s, hors ligne`),e.ouvrirFiche(t)):(e.afficherToast(`Conservé — à rattacher, dans Plus › À traiter ✓ — ${o} s, hors ligne`),e.ouvrirPlusSection(`atraiter`))}async function Ou(e,t,n){if(!e.garde(`modification`,`Saisis le PIN pour arbitrer ce conflit.`,()=>void e.arbitrerConflitLiaison(t,n)))return;let r=e.bibliotheque;r&&(Kr(r,t,n),await e.persister(r),e.afficherToast(n===`retirer`?`Lien retiré ✓`:n===`local`?`Ton lien conservé ✓`:n===`pack`?`Version du pack appliquée ✓`:`Les deux raisons conservées ✓`))}async function ku(e,t,n){if(!e.garde(`modification`,`Saisis le PIN pour arbitrer ce texte.`,()=>void ku(e,t,n)))return;let r=e.bibliotheque;r&&(qr(r,t,n),await e.persister(r),e.afficherToast(n===`locale`?`Ton texte conservé ✓`:`Texte du pack appliqué ✓`))}async function Au(e,t){e.garde(`destruction_ou_sensible`,`Saisis le PIN pour retirer ces liens.`,()=>void e.retirerTousLesLiensProposes(t))&&ri(e,t)}function ju(e,t,n,r,i){e.garde(`modification`,`Saisis le PIN pour modifier les liens.`,()=>e.ouvrirEditionLien(t,n,r,i))&&(Es(),e.editionLien={sourceId:t,...n===void 0?{}:{cibleId:n},...r===void 0?{}:{typeId:r},...i===void 0?{}:{typePrefere:i}},e.requestUpdate())}async function Mu(e,t,n){if(!e.garde(`modification`,`Saisis le PIN pour créer un lien.`,()=>void e.ajouterRelation(t,n)))return!1;let r=e.bibliotheque,i=r?.techniques.find(e=>e.id===t);return!r||!i?!1:n.cibleId===t?(e.afficherToast(`Une technique ne peut pas être liée à elle-même`,`alerte`),!1):r.techniques.some(e=>e.id===n.cibleId)?i.relations.some(e=>e.type===n.type&&e.cibleId===n.cibleId)?(e.afficherToast(`Ce lien existe déjà`,`alerte`),!1):(i.relations.push({type:n.type,cibleId:n.cibleId,...n.note===void 0?{}:{note:n.note},...n.priorite===void 0?{}:{priorite:n.priorite}}),await e.persister(r),e.afficherToast(`Lien ajouté ✓`),!0):(e.afficherToast(`Technique cible introuvable`,`alerte`),!1)}async function Nu(e,t,n,r,i){if(!e.garde(`modification`,`Saisis le PIN pour modifier ce lien.`,()=>void e.modifierRelation(t,n,r,i)))return!1;let a=e.bibliotheque,o=a?.techniques.find(e=>e.id===t),s=o?.relations.find(e=>e.type===r&&e.cibleId===n);if(!a||!o||!s)return!1;if(i.type!==void 0&&i.type!==s.type){if(o.relations.some(e=>e!==s&&e.type===i.type&&e.cibleId===n))return e.afficherToast(`Un lien de ce type vers cette technique existe déjà`,`alerte`),!1;s.type=i.type}return i.note!==void 0&&(i.note===null||i.note.trim()===``?delete s.note:s.note=i.note.trim()),i.priorite!==void 0&&(i.priorite===null?delete s.priorite:s.priorite=i.priorite),await e.persister(a),e.afficherToast(`Lien modifié ✓`),!0}async function Pu(e,t){if(!e.garde(`destruction_ou_sensible`,`Saisis le PIN pour supprimer ce type de lien.`,()=>void e.supprimerTypeRelation(t)))return;let n=e.bibliotheque,r=n?.typesRelation.find(e=>e.id===t);if(!n||!r)return;let i=e.usagesTypeRelation(t);if(i){e.afficherToast(`« ${r.libelle} » est utilisé par ${i} relation${i>1?`s`:``} — retire-les d'abord des fiches concernées`,`alerte`);return}n.typesRelation=n.typesRelation.filter(e=>e.id!==t),await e.persister(n),e.afficherToast(`Lien « ${r.libelle} » supprimé ✓`)}async function Fu(e,t){if(!e.garde(`destruction_ou_sensible`,`Saisis le PIN pour retirer cette technique.`,()=>void e.supprimerTechnique(t)))return;let n=e.bibliotheque,r=n?.techniques.find(e=>e.id===t);if(!n||!r)return;let i=n.contributions.filter(e=>e.techniqueId===t);n.corbeille=[{supprimeeLe:new Date().toISOString(),technique:r,contributions:i,etaitFavori:n.favoris.includes(t)},...n.corbeille??[]],n.techniques=n.techniques.filter(e=>e.id!==t),n.contributions=n.contributions.filter(e=>e.techniqueId!==t),n.favoris=n.favoris.filter(e=>e!==t),await e.persister(n),e.editionFiche=!1,e.ecran.type===`fiche`&&e.ecran.techniqueId===t&&e.retour(),e.afficherToast(`« ${r.nom} » mise en corbeille ✓ — restaurable depuis Plus › Corbeille`)}async function Iu(e,t){if(!e.garde(`modification`,`Saisis le PIN pour restaurer cette fiche.`,()=>void e.restaurerTechnique(t)))return;let n=e.bibliotheque,r=n?.corbeille?.find(e=>e.technique.id===t);!n||!r||(n.corbeille=(n.corbeille??[]).filter(e=>e.technique.id!==t),n.techniques=[...n.techniques,r.technique],n.contributions=[...n.contributions,...r.contributions],r.etaitFavori&&!n.favoris.includes(t)&&(n.favoris=[...n.favoris,t]),await e.persister(n),e.afficherToast(`« ${r.technique.nom} » restaurée ✓`))}async function Lu(e,t,n){let r=new Set(n),i=(t.corbeille??[]).filter(e=>r.has(e.technique.id));if(i.length!==0){for(let e of t.techniques)e.relations=e.relations.filter(e=>!r.has(e.cibleId));for(let e of i){let n=e.contributions.filter(e=>e.provenance===`personnel`).map(e=>({...e,techniqueId:null}));t.contributions=[...t.contributions,...n]}t.corbeille=(t.corbeille??[]).filter(e=>!r.has(e.technique.id)),await e.persister(t)}}async function Ru(e,t){if(!e.garde(`destruction_ou_sensible`,`Saisis le PIN pour supprimer définitivement.`,()=>void e.supprimerDefinitivement(t)))return;let n=e.bibliotheque,r=n?.corbeille?.find(e=>e.technique.id===t);!n||!r||(await e.stockage.snapshot(`avant-purge-${r.technique.nom}`),await Lu(e,n,[t]),e.afficherToast(`« ${r.technique.nom} » supprimée définitivement ✓ — point de restauration conservé`))}async function zu(e){if(!e.garde(`destruction_ou_sensible`,`Saisis le PIN pour vider la corbeille.`,()=>void e.viderCorbeille()))return;let t=e.bibliotheque;if(!t||!(t.corbeille??[]).length)return;let n=t.corbeille.length;await e.stockage.snapshot(`avant-vidage-corbeille`),await Lu(e,t,t.corbeille.map(e=>e.technique.id)),e.afficherToast(`Corbeille vidée ✓ — ${n} fiche${n>1?`s`:``} supprimée${n>1?`s`:``}, point de restauration conservé`)}async function Bu(e,t){if(!e.garde(`destruction_ou_sensible`,`Saisis le PIN pour retirer cette discipline.`,()=>void e.supprimerDiscipline(t)))return;let n=e.bibliotheque,r=n?.disciplines.find(e=>e.id===t);if(!n||!r)return;let i=n.techniques.filter(e=>e.disciplineId===t).length;if(i){e.afficherToast(`« ${r.nom} » contient encore ${i} technique${i>1?`s`:``} — retire-les d'abord (fiche → crayon → Retirer)`,`alerte`);return}await e.stockage.snapshot(`avant-retrait-${r.nom}`),n.disciplines=n.disciplines.filter(e=>e.id!==t),await e.persister(n),e.afficherToast(`Discipline « ${r.nom} » retirée ✓`)}function Vu(e,t,n){if(!e.garde(`modification`,`Saisis le PIN pour réordonner les disciplines.`,()=>void e.reordonnerDiscipline(t,n)))return;let r=e.bibliotheque;if(!r)return;let i=r.disciplines.findIndex(e=>e.id===t),a=i+n;if(i<0||a<0||a>=r.disciplines.length)return;let[o]=r.disciplines.splice(i,1);r.disciplines.splice(a,0,o),e.persister(r)}function Hu(e,t){let n=e.bibliotheque,r=n?.techniques.find(e=>e.id===t);!n||!r||(e.instantaneEdition={techniqueId:t,technique:structuredClone(r),contributions:n.contributions.filter(e=>e.techniqueId===t).map(e=>structuredClone(e)),favori:n.favoris.includes(t)},e.editionFiche=!0,e.requestUpdate())}function Uu(e){e.instantaneEdition=null,e.editionFiche=!1,e.afficherToast(`Modifications enregistrées ✓`),e.requestUpdate()}async function Wu(e){let t=e.instantaneEdition,n=e.bibliotheque;if(e.editionFiche=!1,e.instantaneEdition=null,e.generationCarnet++,!t||!n){e.requestUpdate();return}let r=n.techniques.findIndex(e=>e.id===t.techniqueId);r>=0&&(n.techniques[r]=structuredClone(t.technique)),n.contributions=n.contributions.filter(e=>e.techniqueId!==t.techniqueId),n.contributions.push(...t.contributions.map(e=>structuredClone(e)));let i=n.favoris.includes(t.techniqueId);t.favori&&!i?n.favoris.push(t.techniqueId):!t.favori&&i&&(n.favoris=n.favoris.filter(e=>e!==t.techniqueId)),await e.persister(n),e.afficherToast(`Modifications annulées`),e.requestUpdate()}function Gu(e,t){return[e,t].sort().join(`|`)}function Ku(e,t,n){if(Math.abs(e.length-t.length)>n)return n+1;let r=Array.from({length:t.length+1},(e,t)=>t);for(let i=1;i<=e.length;i++){let a=[i,...Array(t.length).fill(0)],o=a[0];for(let n=1;n<=t.length;n++){let s=e[i-1]===t[n-1]?0:1;a[n]=Math.min(r[n]+1,a[n-1]+1,r[n-1]+s),a[n]<o&&(o=a[n])}if(o>n)return n+1;r=a}return r[t.length]}function qu(e,t){let n=H(e),r=H(t);if(n===r)return!0;let i=Math.max(n.length,r.length);if(i<4)return!1;let a=Math.min(3,Math.max(1,Math.floor(i*.2)));return Ku(n,r,a)<=a}function Ju(e,t=[]){let n=new Set(t),r=[],i=new Map;for(let t of e.techniques)i.set(t.disciplineId,[...i.get(t.disciplineId)??[],t]);for(let e of i.values())for(let t=0;t<e.length;t++)for(let i=t+1;i<e.length;i++){let a=e[t],o=e[i];F(a)!==F(o)&&qu(a.nom,o.nom)&&(n.has(Gu(a.id,o.id))||r.push({aId:a.id,bId:o.id}))}return r.sort((e,t)=>Gu(e.aId,e.bId).localeCompare(Gu(t.aId,t.bId))),r}function Yu(e,t,n){let r=t=>{let n=e.techniques.find(e=>e.id===t);if(!n)return null;let r=e.contributions.filter(e=>e.techniqueId===t&&e.provenance!==`personnel`);return{technique:n,source:F(n),description:r.map(e=>e.description??``).filter(Boolean).join(`

`),pointsCles:r.flatMap(e=>e.pointsCles),medias:r.flatMap(e=>e.medias),niveaux:n.niveauxIds,relations:n.relations.length}},i=r(t),a=r(n);return!i||!a?null:{a:i,b:a}}function Xu(e){return e.sha256?`sha:${e.sha256}`:`${e.type}:${e.ref}`}function Zu(e,t,n,r){let i=structuredClone(e),a=i.techniques.find(e=>e.id===t),o=i.techniques.find(e=>e.id===n);if(!a||!o)throw Error(`Fusion impossible : identité introuvable`);if(a.disciplineId!==o.disciplineId)throw Error(`Fusion impossible : disciplines différentes`);let s=r.titre===`a`?a:o,c=e=>e===a.id?`a`:`b`,l=i.contributions.filter(e=>e.techniqueId===a.id&&e.provenance!==`personnel`),u=i.contributions.filter(e=>e.techniqueId===o.id&&e.provenance!==`personnel`),d=i.contributions.filter(e=>(e.techniqueId===a.id||e.techniqueId===o.id)&&e.provenance===`personnel`),f=new Set,p=e=>r.medias===`deux`||r.medias===e,m=e=>r.textes===`deux`||r.textes===e,h=[];for(let e of[...l,...u]){let t=c(e.techniqueId),n=p(t)?e.medias.filter(e=>{let t=Xu(e);return f.has(t)?!1:(f.add(t),!0)}):[],r=m(t);if(!r&&n.length===0)continue;let i=structuredClone(e);i.techniqueId=a.id,i.medias=n,r||(delete i.description,i.pointsCles=[],delete i.variantes),h.push(i)}if(r.textes===`deux`){let e=h.filter(e=>e.provenance!==`personnel`);if(e.length>1){let t=e[0],n=[],r=[];for(let t of e){let e=(t.description??``).trim();e&&!n.includes(e)&&n.push(e);for(let e of t.pointsCles){let t=e.trim();t&&!r.includes(t)&&r.push(t)}}n.length?t.description=n.join(`

`):delete t.description,t.pointsCles=r;for(let n of e)n!==t&&(delete n.description,n.pointsCles=[],delete n.variantes)}}for(let e of d)e.techniqueId=a.id;a.nom=s.nom,s.nomTraditionnel===void 0?delete a.nomTraditionnel:a.nomTraditionnel=s.nomTraditionnel,s.familleId===void 0?delete a.familleId:a.familleId=s.familleId;let g=new Set;if(r.niveaux!==`b`)for(let e of a.niveauxIds)g.add(e);if(r.niveaux!==`a`)for(let e of o.niveauxIds)g.add(e);a.niveauxIds=[...g];let _=[],v=new Set,y=[...r.relations===`b`?[]:a.relations,...r.relations===`a`?[]:o.relations];for(let e of y){let t=e.cibleId===o.id?a.id:e.cibleId;if(t===a.id)continue;let n=`${e.type}|${t}`;v.has(n)||(v.add(n),_.push({...e,cibleId:t}))}a.relations=_;let b=new Set(h.flatMap(e=>e.medias.map(e=>e.id)));if(!a.mediaPrincipalId||!b.has(a.mediaPrincipalId)){let e=h.flatMap(e=>e.medias)[0];e?a.mediaPrincipalId=e.id:delete a.mediaPrincipalId}i.contributions=[...i.contributions.filter(e=>e.techniqueId!==a.id&&e.techniqueId!==o.id),...h,...d],i.techniques=i.techniques.filter(e=>e.id!==o.id);for(let e of i.techniques){if(e.id===a.id)continue;let t=new Set;e.relations=e.relations.map(e=>({...e,cibleId:e.cibleId===o.id?a.id:e.cibleId})).filter(n=>{if(n.cibleId===e.id)return!1;let r=`${n.type}|${n.cibleId}`;return t.has(r)?!1:(t.add(r),!0)})}i.favoris=[...new Set(i.favoris.map(e=>e===o.id?a.id:e))];for(let e of i.compositions)for(let t of e.blocs)t.type===`technique`&&t.techniqueId===o.id&&(t.techniqueId=a.id);return i.doublonsIgnores&&=i.doublonsIgnores.filter(e=>e!==Gu(t,n)),Ar(i),i}function Qu(e,t){let n=structuredClone(e),r=(n.fusions??[]).findIndex(e=>e.fusionneeId===t);if(r<0)throw Error(`Défusion impossible : fusion introuvable`);let i=n.fusions[r],a=i.a.technique.id,o=i.b.technique.id;return n.techniques=n.techniques.filter(e=>e.id!==a),n.contributions=n.contributions.filter(e=>e.techniqueId!==a),n.techniques.push(structuredClone(i.a.technique),structuredClone(i.b.technique)),n.contributions.push(...i.a.contributions.map(e=>structuredClone(e)),...i.b.contributions.map(e=>structuredClone(e))),n.favoris=n.favoris.filter(e=>e!==a&&e!==o),i.a.etaitFavori&&n.favoris.push(a),i.b.etaitFavori&&n.favoris.push(o),n.fusions.splice(r,1),n.fusions.length===0&&delete n.fusions,Ar(n),n}function $u(e,t){return e.bibliotheque?.favoris.includes(t)??!1}async function ed(e,t){if(!e.garde(`modification`,`Saisis le PIN pour modifier tes favoris.`,()=>void e.basculerFavori(t)))return;let n=e.bibliotheque;if(!n||!n.techniques.some(e=>e.id===t))return;let r=n.favoris.includes(t);n.favoris=r?n.favoris.filter(e=>e!==t):[...n.favoris,t],await e.persister(n),e.afficherToast(r?`Retiré des favoris`:`Ajouté aux favoris`)}function td(e){let t=e.bibliotheque;return t?t.favoris.map(e=>t.techniques.find(t=>t.id===e)).filter(e=>e!==void 0):[]}function nd(e){let t=e.bibliotheque;return t?Ju(t,t.doublonsIgnores??[]):[]}async function rd(e){let t=e.bibliotheque;!t||!(t.doublonsIgnores??[]).length||(delete t.doublonsIgnores,await e.persister(t),e.doublonOuvert=null,e.requestUpdate(),e.afficherToast(`Rescan effectué — les paires écartées reviennent à l'arbitrage.`))}async function id(e,t,n,r){let i=e.bibliotheque;i&&(i.doublonsIgnores=[...new Set([...i.doublonsIgnores??[],Gu(t,n)])],await e.persister(i),e.fusionDoublon&&e.fusionDoublon.aId===t&&e.fusionDoublon.bId===n&&(e.fusionDoublon=null),e.afficherToast(r))}async function ad(e,t,n){let r=e.bibliotheque;!r||!r.techniques.some(e=>e.id===t)||await e.supprimerTechnique(n)}async function od(e,t,n,r){if(!e.garde(`destruction_ou_sensible`,`Saisis le PIN pour fusionner ces fiches.`,()=>void e.fusionnerDoublonAvec(t,n,r)))return;let i=e.bibliotheque;if(!i)return;await e.stockage.snapshot(`avant-fusion-doublon`);let a=e=>{let t=i.techniques.find(t=>t.id===e);return{technique:structuredClone(t),contributions:i.contributions.filter(t=>t.techniqueId===e).map(e=>structuredClone(e)),etaitFavori:i.favoris.includes(e)}},o=a(t),s=a(n),c;try{c=Zu(i,t,n,r)}catch(t){e.afficherToast(`Fusion impossible : ${t instanceof Error?t.message:`état inattendu`}`,`alerte`);return}c.fusions=[...c.fusions??[],{fusionneeLe:new Date().toISOString(),fusionneeId:t,a:o,b:s}],e.fusionDoublon=null,await e.persister(c),e.afficherToast(`Fusionnées en une seule fiche ✓ — défusionnable depuis « Doublons »`)}async function sd(e,t){if(!e.garde(`destruction_ou_sensible`,`Saisis le PIN pour défusionner ces fiches.`,()=>void e.defusionner(t)))return;let n=e.bibliotheque;if(!n)return;await e.stockage.snapshot(`avant-defusion`);let r;try{r=Qu(n,t)}catch(t){e.afficherToast(`Défusion impossible : ${t instanceof Error?t.message:`état inattendu`}`,`alerte`);return}await e.persister(r),e.afficherToast(`Fiches défusionnées ✓ — les deux fiches d'origine sont rétablies`)}async function cd(e,t){if(!e.garde(`modification`,`Saisis le PIN pour créer une adaptation locale.`,()=>void e.creerAdaptationLocale(t)))return;let n=e.bibliotheque,r=n?.contributions.find(e=>e.id===t);if(!n||!r)return;let i={id:rt(),techniqueId:r.techniqueId,provenance:`personnel`,...r.description?{description:r.description}:{},pointsCles:[...r.pointsCles],...r.variantes?{variantes:r.variantes}:{},attribution:`Adaptation locale d'après ${Ls(r)}`,creeLe:new Date().toISOString(),medias:[]};n.contributions.push(i),await e.persister(n),e.voixOuverte=i.id,e.afficherToast(`Adaptation locale créée — modifiable librement ✓`)}function ld(e){let t=e.progressionExport,n=t?t.total>0?`Préparation du fichier — ${t.fait} / ${t.total} vidéo${t.total>1?`s`:``}`:`Préparation du fichier…`:e.occupe;return n?N`<div class="voile-occupe" role="status" aria-live="polite">
    <div class="occupe-carte"><span class="occupe-spinner" aria-hidden="true"></span><span>${n}</span>
      ${e.annulationOccupe?N`<button class="chip-filtre" style="margin-left:6px"
            @click=${()=>e.annulationOccupe?.executer()}>${e.annulationOccupe.libelle}</button>`:P}
    </div>
  </div>`:P}function ud(e){let t=e.importEnAttente,{rapport:n,manifeste:r,volume:i,medias:a}=t,o=a.length,s=(e,t)=>e?N`<li><b>${e}</b> ${t}</li>`:P,c=i>=1e6?`${(i/1e6).toFixed(1)} Mo`:`${Math.max(1,Math.round(i/1e3))} Ko`,l=n.creees.length,u=n.rejointes.length>0||n.retirees.length>0,d=t.dejaInstalle,f=r?.nom??n.discipline,p=e.bibliotheque?.editionsPacks?.find(e=>e.pack===t.packId)?.versionEditoriale,m=d&&!l&&!n.fichesModifiees&&!n.compositionsModifiees&&!n.imagesAjoutees&&!n.relationsAjoutees&&!n.retirees.length&&!n.conflitsLiaisons&&!n.retraitsProposes&&!n.conflitsContributions;return N`
    <div class="voile" @click=${()=>e.annulerImport()}></div>
    <div class="feuille" role="dialog" aria-modal="true" tabindex="-1" aria-label="Proposition d'import">
      <div class="prise"></div>
      <h2>${d?N`Mettre à jour « ${f} » ?`:N`Installer « ${f} » ?`}</h2>
      <div class="geste manifeste-import">
        ${r?.auteur?N`${r.auteur} · `:P}${o?N`${o} vidéo${o>1?`s`:``} · `:P}${c}${r?.conditions?N`<br>Conditions : ${r.conditions}`:P}${r?.versionEditoriale?N`<br>Édition ${d&&p&&p!==r.versionEditoriale?N`${p} → ${r.versionEditoriale}`:r.versionEditoriale}`:P}
      </div>
      ${d?N`<div class="geste avertissement-import" style="color:var(--attention,#b26b00)">
            ⚠ Ce pack est déjà installé. Le mettre à jour remplace le contenu du pack par cette version.
            Tes vidéos, notes et favoris sont conservés ; un texte de fiche <b>du pack</b> que tu as modifié n'est jamais écrasé — les écarts te seront proposés.</div>`:P}
      ${t.avertissements.length?N`<div class="geste avertissement-import" style="color:var(--attention,#b26b00)">
            ⚠ ${t.avertissements.join(` · `)}</div>`:P}
      <ul class="points" style="margin:8px 0 0; list-style:none; padding:0">
        ${d?N`
            ${s(l,`technique(s) ajoutée(s)`)}
            ${s(n.fichesModifiees,`fiche(s) mise(s) à jour`)}
            ${s(n.compositionsModifiees,`composition(s) mise(s) à jour`)}
            ${s(n.imagesAjoutees,`image(s) ajoutée(s)`)}
            ${s(n.relationsAjoutees,`lien(s) ajouté(s)`)}
            ${s(n.retirees.length,`élément(s) que cette version ne contient plus`)}
            ${m?N`<li>À jour — cette version ne change rien.</li>`:P}`:N`
            <li>${l?N`<b>${l}</b> technique${l>1?`s`:``} ser${l>1?`ont`:`a`} ajoutée${l>1?`s`:``}.`:`Rien de nouveau à ajouter.`}</li>
            <li>${u?`Le contenu du pack déjà installé est mis à jour.`:`Aucune technique existante ne sera modifiée.`}</li>`}
        ${n.conflitsLiaisons?N`<li><b>${n.conflitsLiaisons}</b> liaison${n.conflitsLiaisons>1?`s`:``} diffère${n.conflitsLiaisons>1?`nt`:``} du pack — te ser${n.conflitsLiaisons>1?`ont`:`a`} proposée${n.conflitsLiaisons>1?`s`:``}, rien d'appliqué d'office.</li>`:P}
        ${n.retraitsProposes?N`<li><b>${n.retraitsProposes}</b> lien${n.retraitsProposes>1?`s`:``} que tu as ${n.retraitsProposes>1?`ne sont`:`n'est`} plus déclaré${n.retraitsProposes>1?`s`:``} par cette version — te ser${n.retraitsProposes>1?`ont`:`a`} proposé${n.retraitsProposes>1?`s`:``} au retrait, rien de retiré d'office.</li>`:P}
        ${n.conflitsContributions?N`<li><b>${n.conflitsContributions}</b> texte${n.conflitsContributions>1?`s`:``} que tu as modifié${n.conflitsContributions>1?`s`:``} diffère${n.conflitsContributions>1?`nt`:``} de cette version — te ser${n.conflitsContributions>1?`ont`:`a`} proposé${n.conflitsContributions>1?`s`:``}, rien d'écrasé d'office.</li>`:P}
      </ul>
      ${n.suggestions.length?N`<p class="geste" style="padding:8px 0 0; line-height:1.5">
            <b>${n.suggestions.length}</b> technique${n.suggestions.length>1?`s semblent`:` semble`} déjà présente${n.suggestions.length>1?`s`:``} dans un autre pack.
            Elles resteront séparées et pourront être comparées plus tard dans Plus › Doublons potentiels.</p>`:P}
      <div class="actions">
        <button class="bouton" @click=${()=>e.annulerImport()}>Annuler</button>
        <button class="bouton principal" @click=${()=>void e.confirmerImport()}>${d?`Mettre à jour`:`Installer`}</button>
      </div>
    </div>
  `}function dd(e){let t=e.rapportApresImport,n=(e,t)=>e?N`<li><b>${e}</b> ${t}</li>`:P;return N`
    <div class="voile" @click=${()=>e.fermerRapportImport()}></div>
    <div class="feuille" role="dialog" aria-modal="true" tabindex="-1" aria-label="Rapport d'import">
      <div class="prise"></div>
      <h2>« ${t.discipline} » installé ✓</h2>
      <ul class="points" style="margin:4px 0 0; list-style:none; padding:0">
        ${n(t.creees,`technique(s) ajoutée(s)`)}
        ${n(t.fichesModifiees,`fiche(s) mise(s) à jour`)}
        ${n(t.compositionsModifiees,`composition(s) mise(s) à jour`)}
        ${n(t.imagesAjoutees,`image(s) ajoutée(s)`)}
        ${n(t.videos,`vidéo(s) ajoutée(s)`)}
      </ul>
      ${t.suggestions.length?N`<p class="geste" style="padding:8px 0 0; line-height:1.5">
            <b>${t.suggestions.length}</b> technique${t.suggestions.length>1?`s`:``} à comparer plus tard dans Plus › Doublons potentiels.
          </p>`:P}
      ${t.conflitsLiaisons?N`<p class="geste" style="padding:8px 0 0; line-height:1.5">
            <b>${t.conflitsLiaisons}</b> liaison${t.conflitsLiaisons>1?`s`:``} diffère${t.conflitsLiaisons>1?`nt`:``} du pack —
            <button class="lien-texte" @click=${()=>{e.fermerRapportImport(),e.ouvrirPlusSection(`relations`)}}>à arbitrer dans Plus › Relations</button>.
          </p>`:P}
      <!-- D-243 : la phrase qui manquait. « J'ai mis à jour et rien n'a
           changé » venait de là — un pack qui RETIRE des liens ne disait rien,
           parce que rien n'était retiré. Le nombre est dit, et rien n'a bougé. -->
      ${t.retraitsProposes?N`<p class="geste" style="padding:8px 0 0; line-height:1.5">
            <b>${t.retraitsProposes}</b> lien${t.retraitsProposes>1?`s`:``} que tu as ${t.retraitsProposes>1?`ne sont`:`n'est`} plus déclaré${t.retraitsProposes>1?`s`:``} par ce pack — rien n'a été retiré :
            <button class="lien-texte" @click=${()=>{e.fermerRapportImport(),e.ouvrirPlusSection(`relations`)}}>à décider dans Plus › Relations</button>.
          </p>`:P}
      ${t.conflitsContributions?N`<p class="geste" style="padding:8px 0 0; line-height:1.5">
            <b>${t.conflitsContributions}</b> texte${t.conflitsContributions>1?`s`:``} que tu as modifié${t.conflitsContributions>1?`s`:``} diffère${t.conflitsContributions>1?`nt`:``} de cette version — rien n'a été écrasé :
            <button class="lien-texte" @click=${()=>{e.fermerRapportImport(),e.ouvrirPlusSection(`atraiter`)}}>à arbitrer dans Plus › À traiter</button>.
          </p>`:P}
      <div class="actions">
        ${t.disciplineId?N`<button class="bouton" @click=${()=>{let n=t.disciplineId;e.fermerRapportImport(),e.ouvrirDiscipline(n)}}>
              Ouvrir la discipline</button>`:P}
        <button class="bouton principal" @click=${()=>e.fermerRapportImport()}>Fermer</button>
      </div>
    </div>
  `}function fd(e){let t=e.restaurationEnAttente,n=t.bibliotheque;return N`
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
      ${t.avertissements.length?N`<div class="geste avertissement-import" style="color:var(--attention,#b26b00)">
            ⚠ ${t.avertissements.join(` · `)}</div>`:P}
      <p class="fil-vide" style="padding:6px 0 0">
        Cette installation est vierge : rien n'est remplacé. Rien n'est
        écrit avant ta confirmation.
      </p>
      <div class="actions">
        <button class="bouton" @click=${()=>e.annulerRestauration()}>Annuler</button>
        <button class="bouton principal" @click=${()=>void e.confirmerRestauration()}>Restaurer</button>
      </div>
    </div>
  `}function pd(e){let t=e.partagePreparation,n=e=>e>=1e6?`${(e/1e6).toFixed(1)} Mo`:`${Math.max(1,Math.round(e/1e3))} Ko`;return N`
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
  `}function md(e){let t=e.enregistrementMedia,n=t.octets>=1e6?`${(t.octets/1e6).toFixed(1)} Mo`:`${Math.max(1,Math.round(t.octets/1e3))} Ko`,r=Math.round(t.fraction*100);return N`
    <div class="voile"></div>
    <div class="feuille feuille-progression" role="dialog" aria-modal="true" tabindex="-1" aria-label="Enregistrement en cours" aria-live="polite">
      <div class="prise"></div>
      <h2>${t.phase===`analyse`?`Analyse de la vidéo…`:`Enregistrement…`}</h2>
      <div class="geste">
        ${n}${t.phase===`ecriture`?N` · ${r} %${t.etaSec===null?P:N` · ~${t.etaSec} s restant`}`:``}
      </div>
      <div class="barre-progression">
        <div class="barre-progression-jauge ${t.phase===`analyse`?`indeterminee`:``}"
          style=${t.phase===`ecriture`?`width:${r}%`:``}></div>
      </div>
      <div class="actions" style="padding-top:10px">
        <button class="bouton" @click=${()=>e.annulerIngestionVideo()}>Annuler</button>
      </div>
    </div>
  `}function hd(e){let t=e.confirmation,n=()=>{e.confirmation=null,e.requestUpdate()};return N`
    <div class="voile" @click=${n}></div>
    <div class="feuille feuille-confirmation" role="dialog" aria-modal="true" tabindex="-1" aria-label=${t.titre}>
      <div class="prise"></div>
      <h2>${t.titre}</h2>
      ${t.corps?N`<p class="confirmation-corps">${t.corps}</p>`:P}
      <div class="actions">
        <button class="bouton" @click=${n}>Annuler</button>
        <button class="bouton principal danger" @click=${()=>{let e=t.action;n(),e()}}>${t.bouton}</button>
      </div>
    </div>
  `}async function gd(e,t,n){if(!e.garde(`modification`,`Saisis le PIN pour renommer cette discipline.`,()=>void e.majNomDiscipline(t,n)))return;let r=e.bibliotheque,i=r?.disciplines.find(e=>e.id===t);!r||!i||!n.trim()||(i.nom=n.trim(),await e.persister(r))}async function _d(e,t,n,r){if(!e.garde(`modification`,`Saisis le PIN pour modifier les taxonomies.`,()=>void e.ajouterTaxonomie(t,n,r)))return;let i=e.bibliotheque,a=i?.disciplines.find(e=>e.id===t),o=r.trim();if(!i||!a||!o)return;let s=o.toLowerCase().normalize(`NFD`).replace(/[̀-ͯ]/g,``).replace(/[^a-z0-9]+/g,`-`),c=s;for(let e=2;[...a.familles,...a.niveaux].some(e=>e.id===c);e++)c=`${s}-${e}`;a[n].push({id:c,nom:o,ordre:a[n].length+1}),await e.persister(i)}async function vd(e,t,n,r,i){if(!e.garde(`modification`,`Saisis le PIN pour modifier les taxonomies.`,()=>void e.majTaxonomie(t,n,r,i)))return;let a=e.bibliotheque,o=(a?.disciplines.find(e=>e.id===t))?.[n].find(e=>e.id===r);if(!(!a||!o)){if(i.nom?.trim()&&(o.nom=i.nom.trim()),n===`niveaux`){let e=o;i.couleur!==void 0&&(i.couleur?e.couleur=i.couleur:delete e.couleur),i.couleur2!==void 0&&(i.couleur2?e.couleur2=i.couleur2:delete e.couleur2)}await e.persister(a)}}function yd(e,t,n,r){return(e.bibliotheque?.techniques??[]).filter(e=>e.disciplineId===t&&(n===`familles`?e.familleId===r:e.niveauxIds.includes(r)))}function bd(e,t,n,r,i){if(!e.garde(`modification`,`Saisis le PIN pour modifier les taxonomies.`,()=>void e.reordonnerTaxonomie(t,n,r,i)))return;let a=e.bibliotheque,o=a?.disciplines.find(e=>e.id===t);if(!a||!o)return;let s=o[n],c=s.findIndex(e=>e.id===r),l=c+i;if(c<0||l<0||l>=s.length)return;let[u]=s.splice(c,1);s.splice(l,0,u),s.forEach((e,t)=>e.ordre=t+1),e.persister(a)}async function xd(e,t,n,r,i){if(!e.garde(`destruction_ou_sensible`,`Saisis le PIN pour supprimer cette valeur de classification.`,()=>void e.supprimerTaxonomie(t,n,r,i)))return;let a=e.bibliotheque,o=a?.disciplines.find(e=>e.id===t),s=o?.[n].find(e=>e.id===r);if(!a||!o||!s)return;let c=e.usagesTaxonomie(t,n,r);if(c.length&&i===void 0){e.afficherToast(`Utilisé par ${c.length} technique${c.length>1?`s`:``} — choisis « remplacer » ou « retirer la classification »`);return}let l=i?o[n].find(e=>e.id===i)?.nom:null;if(!(i&&!l)){if(c.length){await e.stockage.snapshot(`avant-suppression-taxonomie-${s.nom}`);for(let e of c)n===`familles`?i?e.familleId=i:delete e.familleId:e.niveauxIds=i?[...new Set(e.niveauxIds.map(e=>e===r?i:e))]:e.niveauxIds.filter(e=>e!==r)}o[n]=o[n].filter(e=>e.id!==r),await e.persister(a),c.length&&e.afficherToast(l?`« ${s.nom} » supprimée — ${c.length} technique${c.length>1?`s`:``} reclassée${c.length>1?`s`:``} vers « ${l} » (point de restauration conservé)`:`« ${s.nom} » supprimée — classification retirée de ${c.length} technique${c.length>1?`s`:``} (point de restauration conservé)`)}}async function Sd(e,t,n){if(!e.garde(`modification`,`Saisis le PIN pour modifier les types de lien.`,()=>void e.ajouterTypeRelation(t,n)))return;let r=e.bibliotheque,i=t.trim();if(!r||!i)return;let a=i.toLowerCase().normalize(`NFD`).replace(/[̀-ͯ]/g,``).replace(/[^a-z0-9]+/g,`-`);if(r.typesRelation.some(e=>e.id===a)){e.afficherToast(`Le type « ${i} » existe déjà`);return}let o=n.trim()===``;r.typesRelation.push({id:a,libelle:i,...o?{symetrique:!0}:{libelleInverse:n.trim()}}),await e.persister(r),e.afficherToast(`Type de relation « ${i} » ajouté ✓`)}async function Cd(e,t,n){if(!e.garde(`modification`,`Saisis le PIN pour modifier les types de lien.`,()=>void e.majTypeRelation(t,n)))return;let r=e.bibliotheque,i=r?.typesRelation.find(e=>e.id===t);if(!(!r||!i)){if(n.libelle!==void 0&&n.libelle.trim()&&(i.libelle=n.libelle.trim()),n.libelleInverse!==void 0&&!i.symetrique){let t=n.libelleInverse.trim();if(!t){e.afficherToast(`Un lien orienté garde une lecture inverse — ou passe-le en symétrique d'abord`);return}i.libelleInverse=t}await e.persister(r)}}async function wd(e,t){if(!e.garde(`modification`,`Saisis le PIN pour modifier les types de lien.`,()=>void e.basculerSymetrieTypeRelation(t)))return;let n=e.bibliotheque,r=n?.typesRelation.find(e=>e.id===t);if(!n||!r)return;let i=e.usagesTypeRelation(t);if(i){e.afficherToast(`« ${r.libelle} » relie déjà ${i} paire${i>1?`s`:``} de techniques — sa nature de lecture ne peut plus changer`);return}r.symetrique?(delete r.symetrique,r.libelleInverse=r.libelleInverse??`${r.libelle} (inverse)`):(r.symetrique=!0,delete r.libelleInverse),await e.persister(n)}async function Td(e,t){if(window.Capacitor?.isNativePlatform?.())e.persistanceStockage=`native`;else{let n=await e.stockage.persistanceStockage(t);e.persistanceStockage=n===!0?`accordee`:n===!1?`refusee`:`inconnue`}e.requestUpdate()}async function Ed(e){await Td(e,!0),e.afficherToast(e.persistanceStockage===`accordee`?`Persistance accordée — le navigateur ne purgera pas tes données.`:`Persistance non accordée pour l'instant — le navigateur décide selon l'usage du site. Pense aux sauvegardes régulières.`)}function Dd(e,t){return He(t)}async function Od(e){let t=e.bibliotheque;if(!t)return;e.taillesVideos=await e.stockage.taillesVideos();let n=new Set(e.taillesVideos.keys());e.mediasManquants=t.contributions.flatMap(t=>t.medias.filter(e=>e.type===`local`&&!n.has(e.id)).map(()=>({techniqueId:t.techniqueId,nom:t.techniqueId?e.technique(t.techniqueId)?.nom??`?`:`capture à rattacher`})));let r=Dd(e,t);e.videosOrphelines=[...e.taillesVideos.entries()].filter(([e])=>!r.has(e)).map(([e,t])=>({id:e,taille:t})),e.sauvegardes=await e.stockage.listerSauvegardes(),e.infoEspace=await e.stockage.estimerEspace(),e.requestUpdate()}async function kd(e,t,n){if(!e.garde(`modification`,`Saisis le PIN pour rattacher ce média.`,()=>void e.rattacherOrphelin(t,n)))return;let r=e.bibliotheque,i=r?.techniques.find(e=>e.id===n);if(!r||!i)return;let a=await e.stockage.fichierVideo(t);if(!a){e.afficherToast(`Fichier introuvable — actualise la liste`,`alerte`);return}let o=await dt(a),s=a.name.includes(`.`)?a.name.slice(a.name.indexOf(`.`)+1):void 0,c={id:rt(),techniqueId:n,provenance:`personnel`,description:`Média retrouvé et rattaché depuis la médiathèque`,pointsCles:[],creeLe:new Date().toISOString(),medias:[{id:t,type:`local`,ref:`videos/${t}`,sha256:o,taille:a.size,ajouteLe:new Date().toISOString(),...s?{extension:s}:{}}]};r.contributions.push(c);try{await e.persister(r)}catch(t){r.contributions=r.contributions.filter(e=>e.id!==c.id),e.afficherToast(`Rattachement impossible : ${t instanceof Error?t.message:`écriture refusée`}`,`alerte`);return}e.afficherToast(`Média rattaché à « ${i.nom} » ✓`),await Od(e)}async function Ad(e,t){if(!e.garde(`destruction_ou_sensible`,`Saisis le PIN pour supprimer ce fichier.`,()=>void e.supprimerVideoOrpheline(t)))return;let n=e.bibliotheque;if(n){if(Dd(e,n).has(t)){e.afficherToast(`Ce fichier est référencé — il ne sera pas supprimé`,`alerte`);return}await e.stockage.supprimerVideo(t),e.afficherToast(`Fichier inutilisé supprimé ✓`),await Od(e)}}async function jd(e,t){if(!e.garde(`destruction_ou_sensible`,`Saisis le PIN pour supprimer ces fichiers.`,()=>void e.supprimerOrphelinsVerifies(t)))return;let n=e.bibliotheque;if(!n||t.length===0)return;let r=Dd(e,n),i=0,a=0;for(let n of t){if(r.has(n)){a+=1;continue}await e.stockage.supprimerVideo(n),i+=1}e.afficherToast(a?`${i} fichier${i>1?`s`:``} supprimé${i>1?`s`:``} — ${a} redevenu${a>1?`s`:``} référencé${a>1?`s`:``}, conservé${a>1?`s`:``}`:`${i} fichiers inutilisés supprimés ✓`),await Od(e)}async function Md(e,t){if(e.garde(`destruction_ou_sensible`,`Saisis le PIN pour restaurer cet état.`,()=>void e.restaurerSauvegarde(t)))try{e.bibliotheque={...await e.occuperPendant(`Restauration en cours…`,()=>e.stockage.restaurerSauvegarde(t))},e.afficherToast(`Sauvegarde restaurée ✓ — l'état précédent est lui-même sauvegardé`),Od(e)}catch(t){e.consignerEchec(`MOV-E05`,t),e.afficherToast(`Restauration impossible : ${t instanceof Error?t.message:`sauvegarde illisible`}`,`alerte`)}}var Nd=`bibliotheque.json`,Pd=`bibliotheque.json.tmp`,Fd=`preferences.json`,Id=`videos`,Ld=`images`,Rd=`staging`,zd=`import`,Bd=`sauvegardes`,Vd=10;function Hd(e,t){return t?`${e}.${t}`:e}function Ud(e){let t=e.indexOf(`.`);return t===-1?e:e.slice(0,t)}function Wd(){return{version:1,demarrage:{mode:`bibliotheque`}}}function Gd(e){if(typeof e!=`object`||!e)return Wd();let t=e;return t.version!==1||!t.demarrage?.mode?Wd():t.demarrage.mode===`accueil`?{...t,demarrage:{mode:`bibliotheque`}}:t}async function Z(){return navigator.storage.getDirectory()}async function Kd(e){try{return await(await(await(await Z()).getFileHandle(e)).getFile()).text()}catch{return null}}async function qd(e,t){let n=await(await(await Z()).getFileHandle(e,{create:!0})).createWritable();await n.write(t),await n.close()}async function Jd(e){if(!e.length)return[];let t=await(await Z()).getDirectoryHandle(Ld,{create:!0}),n=new Set;for await(let[e]of t)n.add(e);let r=[];for(let i of e){if(lt(i.octets)!==i.id){r.push(i);continue}if(!n.has(i.id))try{let e=await(await t.getFileHandle(i.id,{create:!0})).createWritable();await e.write(i.octets),await e.close()}catch{r.push(i)}}return r}async function Yd(e){try{await(await Z()).removeEntry(e)}catch{}}var Xd=class{#e=!1;#t=Promise.resolve();async charger(){await this.reprendreTransactionInachevee();let e=await Kd(Nd);if(e===null)return null;let{bibliotheque:t,imagesDetachees:n}=tr(JSON.parse(e));if(Ar(t),n.length)try{await Jd(n),await this.sauvegarder(t)}catch{}return t}async lireImage(e){try{return await(await(await(await Z()).getDirectoryHandle(Ld)).getFileHandle(e)).getFile()}catch{return null}}async poserImagesRecues(e){return(await Jd(e)).length}async ajouterImage(e,t){let n={id:lt(e),mime:t,taille:e.length};if((await Jd([{...n,octets:e}])).length)throw Error(`Impossible d'enregistrer l'image (espace insuffisant ?)`);return n}async octetsImages(e){let t=new Map;for(let n of e.images??[]){let e=await this.lireImage(n.id);e&&t.set(n.id,new Uint8Array(await e.arrayBuffer()))}return t}async balayerImagesOrphelines(e){let t=new Set((e.images??[]).map(e=>e.id)),n=0;try{let e=await(await Z()).getDirectoryHandle(Ld),r=[];for await(let[t]of e)r.push(t);for(let i of r)t.has(i)||(await e.removeEntry(i),n++)}catch{}return n}async reprendreTransactionInachevee(){return await Kd(Pd)===null?!1:(await Yd(Pd),!0)}async sauvegarder(e){Ar(e);let t=this.#t,n=(async()=>{await t.catch(()=>{}),this.#e||=(await this.snapshot(`debut-de-session`),!0);let n=JSON.stringify(e);await qd(Pd,n);let r=await Kd(Pd);if(r!==n)throw Error(`Écriture d'état incohérente — bascule annulée, état courant conservé`);Ar(nr(JSON.parse(r))),await qd(Nd,r),await Yd(Pd)})();this.#t=n,await n}async chargerPreferences(){let e=await Kd(Fd);if(e===null)return Wd();try{let t=JSON.parse(e),n=Gd(t);return t?.demarrage?.mode===`accueil`&&await this.sauvegarderPreferences(n),n}catch{return Wd()}}async sauvegarderPreferences(e){await qd(Fd,JSON.stringify(e))}async snapshot(e=`session`){let t=await Kd(Nd);if(t===null)return;let n=await(await Z()).getDirectoryHandle(Bd,{create:!0}),r=e.toLowerCase().normalize(`NFD`).replace(/[\u0300-\u036f]/g,``).replace(/[^a-z0-9]+/g,`-`).slice(0,40),i=new Date().toISOString().replaceAll(`:`,`-`)+`__`+r+`.json`,a=await(await n.getFileHandle(i,{create:!0})).createWritable();await a.write(t),await a.close();let o=[];for await(let[e]of n)o.push(e);for(let e of o.sort().slice(0,Math.max(0,o.length-Vd)))await n.removeEntry(e)}async listerSauvegardes(){try{let e=await(await Z()).getDirectoryHandle(Bd),t=[];for await(let[n]of e)t.push(n);return t.sort().reverse()}catch{return[]}}async restaurerSauvegarde(e){let t=await(await(await(await(await Z()).getDirectoryHandle(Bd)).getFileHandle(e)).getFile()).text(),n=nr(JSON.parse(t));return Ar(n),await this.snapshot(`avant-restauration`),await this.sauvegarder(n),n}async#n(e){try{let t=await(await Z()).getDirectoryHandle(Id);try{return await t.getFileHandle(e)}catch{for await(let[n,r]of t)if(r.kind===`file`&&n.startsWith(e+`.`))return r;return null}}catch{return null}}async ecrireVideo(e,t,n,r,i){let a=Hd(e,n),o=await(await Z()).getDirectoryHandle(Rd,{create:!0}),s=await o.getFileHandle(a,{create:!0}),c=await s.createWritable(),l=t.size,u=0,d=r&&l>0||i?t.stream().pipeThrough(new TransformStream({transform(e,t){if(i?.())throw new ut;u+=e.byteLength,r&&l>0&&r(Math.min(1,u/l)),t.enqueue(e)}})):t.stream();try{await d.pipeTo(c)}catch(e){try{await c.abort()}catch{}try{await o.removeEntry(a)}catch{}throw e}r&&r(1);let f=await(await Z()).getDirectoryHandle(Id,{create:!0});try{await s.move(f)}catch{let e=await(await f.getFileHandle(a,{create:!0})).createWritable();await(await s.getFile()).stream().pipeTo(e),await o.removeEntry(a)}}async#r(e=!1){return(await(await Z()).getDirectoryHandle(Rd,{create:e})).getDirectoryHandle(zd,{create:e})}puitsImport(){let e=this,t=null;return{async ouvrir(n){t=await(await(await e.#r(!0)).getFileHandle(n,{create:!0})).createWritable()},async ecrire(e){await t.write(e)},async fermer(){await t.close(),t=null},async abandonner(){try{t&&await t.close()}catch{}t=null,await e.nettoyerImport()}}}async promouvoirImportMedias(e){if(e.length===0)return[];let t=[],n=await this.#r(!1),r=await(await Z()).getDirectoryHandle(Id,{create:!0});for(let i of e){let e;try{e=await n.getFileHandle(i)}catch{continue}let a=!1;try{await r.getFileHandle(i),a=!0}catch{}if(a){try{await n.removeEntry(i)}catch{}continue}try{await e.move(r)}catch{let t=await(await r.getFileHandle(i,{create:!0})).createWritable();await(await e.getFile()).stream().pipeTo(t);try{await n.removeEntry(i)}catch{}}t.push(i)}return t}async annulerPromotionMedias(e){if(e.length===0)return;let t=await this.#r(!0),n=await(await Z()).getDirectoryHandle(Id,{create:!0});for(let r of e){let e;try{e=await n.getFileHandle(r)}catch{continue}try{await e.move(t)}catch{try{let i=await(await t.getFileHandle(r,{create:!0})).createWritable();await(await e.getFile()).stream().pipeTo(i),await n.removeEntry(r)}catch{}}}}async nettoyerImport(){try{await(await(await Z()).getDirectoryHandle(Rd)).removeEntry(zd,{recursive:!0})}catch{}}async*lireMediaParBlocs(e,t){let n=await this.#n(e);if(!n)return;let r=await n.getFile();for(let e=0;e<r.size;e+=t){let n=r.slice(e,Math.min(e+t,r.size));yield new Uint8Array(await n.arrayBuffer())}}async ouvrirArchiveTemp(e){return(await(await(await Z()).getDirectoryHandle(Rd,{create:!0})).getFileHandle(e,{create:!0})).createWritable()}async fichierArchiveTemp(e){return(await(await(await Z()).getDirectoryHandle(Rd)).getFileHandle(e)).getFile()}async supprimerArchiveTemp(e){try{await(await(await Z()).getDirectoryHandle(Rd)).removeEntry(e)}catch{}}async nettoyerArchivesTemp(){try{let e=await(await Z()).getDirectoryHandle(Rd),t=[];for await(let[n]of e)n.startsWith(`export-`)&&n.endsWith(`.movpack`)&&t.push(n);for(let n of t)await e.removeEntry(n)}catch{}}async nettoyerStaging(){try{await(await Z()).removeEntry(Rd,{recursive:!0})}catch{}}async estimerEspace(){try{let e=await navigator.storage.estimate();return typeof e.usage!=`number`||typeof e.quota!=`number`?null:{usage:e.usage,quota:e.quota}}catch{return null}}async persistanceStockage(e=!1){try{return navigator.storage?.persisted?await navigator.storage.persisted()?!0:e&&navigator.storage.persist?await navigator.storage.persist():!1:null}catch{return null}}async fichierVideo(e){let t=await this.#n(e);if(!t)return null;try{return await t.getFile()}catch{return null}}async urlVideo(e){let t=await this.#n(e);if(!t)return null;try{return URL.createObjectURL(await t.getFile())}catch{return null}}async lireVideo(e){let t=await this.#n(e);if(!t)return null;try{return new Uint8Array(await(await t.getFile()).arrayBuffer())}catch{return null}}async listerVideos(){try{let e=await(await Z()).getDirectoryHandle(Id),t=new Set;for await(let[n]of e)t.add(Ud(n));return t}catch{return new Set}}async taillesVideos(){let e=new Map;try{let t=await(await Z()).getDirectoryHandle(Id);for await(let[n,r]of t)r.kind===`file`&&e.set(Ud(n),(await r.getFile()).size)}catch{}return e}async supprimerVideo(e){let t=await this.#n(e);if(t)try{await(await(await Z()).getDirectoryHandle(Id)).removeEntry(t.name)}catch{}}async reinitialiser(){let e=await Z();for(let t of[Nd,Pd,Fd])try{await e.removeEntry(t)}catch{}for(let t of[Id,Rd,Bd])try{await e.removeEntry(t,{recursive:!0})}catch{}}},Zd=31e4;function Qd(e){if(!/^\d{6,12}$/.test(e))return`Le PIN est une suite de 6 à 12 chiffres`;if(/^(\d)\1+$/.test(e))return`Un même chiffre répété est trop évident`;let t=`01234567890123456789012`,n=[...t].reverse().join(``);return t.includes(e)||n.includes(e)?`Une suite de chiffres est trop évidente`:null}function $d(e){return[...e].map(e=>e.toString(16).padStart(2,`0`)).join(``)}function ef(e){let t=new Uint8Array(e.length/2);for(let n=0;n<t.length;n++)t[n]=parseInt(e.slice(n*2,n*2+2),16);return t}async function tf(e,t,n){let r=await crypto.subtle.importKey(`raw`,new TextEncoder().encode(e),`PBKDF2`,!1,[`deriveBits`]),i=await crypto.subtle.deriveBits({name:`PBKDF2`,hash:`SHA-256`,salt:ef(t),iterations:n},r,256);return $d(new Uint8Array(i))}async function nf(e){let t=Qd(e);if(t)throw Error(t);let n=$d(crypto.getRandomValues(new Uint8Array(16)));return{version:1,sel:n,iterations:Zd,empreinte:await tf(e,n,Zd)}}async function rf(e,t){let n=await tf(e,t.sel,t.iterations);if(n.length!==t.empreinte.length)return!1;let r=0;for(let e=0;e<n.length;e++)r|=n.charCodeAt(e)^t.empreinte.charCodeAt(e);return r===0}function af(e){return e<5?0:Math.min(30,2**(e-4))}function of(e,t,n){return e===`consultation`||!(e===`modification`?t.modifications:t.suppressions)||n?`libre`:`pin_requis`}function sf(e,t,n){return e===null?!1:t===`arriere-plan`||n-e<(t===`15min`?15:5)*6e4}var cf=class{#e=null;#t=0;#n=0;#r;constructor(e){this.#r=e}get app(){return this.#r}get reglagesProtections(){let e=this.app.preferences.protections;return{modifications:e?.modifications??!1,suppressions:e?.suppressions??!1}}get pinConfigure(){return this.app.preferences.protections?.verification!==void 0}async#i(e){this.app.preferences={...this.app.preferences,protections:e},await this.app.stockage.sauvegarderPreferences(this.app.preferences),this.app.requestUpdate()}async activerProtection(e,t){let n=this.app.preferences.protections,r=n?.verification;if(!r){if(!t)return`Crée d'abord un PIN`;let e=Qd(t.pin);if(e)return e;if(t.pin!==t.confirmation)return`Les deux saisies ne correspondent pas`;r=await nf(t.pin)}return await this.#i({modifications:e===`modifications`?!0:n?.modifications??!1,suppressions:e===`suppressions`?!0:n?.suppressions??!1,verrouillage:n?.verrouillage??`5min`,verification:r}),this.#a(`protection activée`),this.app.afficherToast(`Protection ${e===`modifications`?`des modifications`:`des suppressions et opérations sensibles`} activée ✓`),null}async desactiverProtection(e,t){let n=this.app.preferences.protections;if(!n?.verification)return null;if(!await rf(t,n.verification))return`PIN incorrect`;let r={...n,modifications:e!==`modifications`&&n.modifications,suppressions:e!==`suppressions`&&n.suppressions};return!r.modifications&&!r.suppressions?(await this.#i({modifications:!1,suppressions:!1}),this.#a(`protections désactivées — secret supprimé`),this.app.afficherToast(`Plus aucune action n'est protégée — les données du PIN ont été supprimées`)):(await this.#i(r),this.app.afficherToast(`Protection désactivée ✓ — l'autre reste active`)),null}async choisirVerrouillage(e){let t=this.app.preferences.protections;t&&await this.#i({...t,verrouillage:e})}async changerPin(e,t,n){let r=this.app.preferences.protections;return r?.verification?await rf(e,r.verification)?Qd(t)||(t===n?(await this.#i({...r,verification:await nf(t)}),this.#e=null,this.#a(`PIN modifié`),this.app.afficherToast(`PIN changé ✓`),null):`Les deux saisies ne correspondent pas — l'ancien PIN reste valable`):`PIN actuel incorrect`:`Aucun PIN à changer`}oublierSession(){this.#e=null,this.#t=0,this.#n=0}get sessionDeverrouillee(){return sf(this.#e,this.app.preferences.protections?.verrouillage??`5min`,Date.now())}garde(e,t,n){return of(e,this.reglagesProtections,this.sessionDeverrouillee)===`libre`?(this.#e!==null&&this.sessionDeverrouillee&&(this.#e=Date.now()),!0):(this.app.demandePin={raison:t,action:n},this.app.requestUpdate(),!1)}autoriser(e,t,n){this.garde(e,t,n)&&n()}verrouiller(e=!1){this.#e!==null&&this.#a(e?`verrouillé à l'arrière-plan`:`verrouillage manuel`),this.#e=null,e||this.app.afficherToast(`Verrouillé — le PIN sera demandé à la prochaine action protégée`),this.app.requestUpdate()}annulerDemandePin(){this.app.demandePin=null,this.app.requestUpdate()}async validerDemandePin(e){let t=this.app.demandePin,n=this.app.preferences.protections?.verification;if(!t||!n)return;let r=Math.ceil((this.#n-Date.now())/1e3);if(r>0){this.app.demandePin={...t,erreur:`Attends ${r} s avant le prochain essai`},this.app.requestUpdate();return}if(!await rf(e,n)){this.#t++,this.app.echecsCumules++;let e=af(this.#t);this.#n=Date.now()+e*1e3,this.app.demandePin={...t,erreur:e?`PIN incorrect — prochain essai dans ${e} s`:`PIN incorrect`},this.app.requestUpdate();return}this.#t=0,this.#n=0,this.#e=Date.now(),this.#a(`déverrouillage réussi`),this.app.demandePin=null,this.app.requestUpdate(),await t.action()}feuillePin(){let e=this.app.demandePin;return N`
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
        ${e.erreur?N`<p class="details erreur-pin" role="alert" style="color:var(--accent); padding-top:6px">${e.erreur}</p>`:P}
        <div class="actions">
          <button class="bouton" @click=${()=>this.annulerDemandePin()}>Annuler</button>
        </div>
      </div>
    `}indicateurSession(){let e=this.reglagesProtections;return!(e.modifications||e.suppressions)||!this.sessionDeverrouillee?P:N`<button class="session-curateur" title="Modifications temporairement déverrouillées"
      @click=${()=>this.verrouiller()}>🔓 déverrouillé · <b>Verrouiller</b></button>`}#a(e){this.app.journalSecurite=[...this.app.journalSecurite.slice(-9),`${new Date().toTimeString().slice(0,5)} · ${e}`]}},lf=new Set;function uf(e,t,n){let r=lf.has(t);return N`<div class="encart-entete">
    <span class="titre-atelier">${e}</span>
    <button class="bouton-plus ${r?`actif`:``}" aria-label=${r?`Fermer la création dans ${e}`:`Ajouter dans ${e}`} aria-expanded=${r}
      @click=${()=>{r?lf.delete(t):lf.add(t),n.requestUpdate()}}>${r?`−`:`＋`}</button>
  </div>`}function df(e,t){return N`<div class="carte-atelier">
    <div class="encart-entete"><span class="titre-atelier">${e}</span></div>
    ${t}
  </div>`}function ff(e){return e>=1e6?`${(e/1e6).toFixed(1)} Mo`:`${Math.max(1,Math.round(e/1e3))} Ko`}var pf={requete:``,disciplineId:null};function mf(e,t){return e===null||e===`chargement`?df(`Packs officiels`,N`<p class="fil-vide" style="padding:6px 0">Chargement du catalogue…</p>`):e===`indisponible`?df(`Packs officiels`,N`
      <p class="fil-vide" style="padding:6px 0 10px">
        Catalogue injoignable — il vit sur le site public de Movenso et demande
        une connexion. Tu peux aussi importer un fichier .movpack à la main
        (Plus › Importer un pack).
      </p>
      <button class="action-douce" @click=${t.recharger}>Réessayer</button>
    `):e.length===0?df(`Packs officiels`,N`<p class="fil-vide" style="padding:6px 0">Aucun pack publié pour l'instant.</p>`):df(`Packs officiels`,N`
    <p class="details" style="padding:0 2px 8px">Chaque pack s'installe après un
      rapport d'import — rien ne s'écrit sans ton accord, et tout se retire.</p>
    ${e.map(e=>N`
      <div class="pack-officiel">
        <div class="pack-officiel-entete">
          <span class="pack-officiel-nom">${e.title}</span>
          <span class="pack-officiel-version">v${e.version}</span>
        </div>
        ${e.itemCount?N`<div class="pack-officiel-meta">${e.itemCount}</div>`:``}
        ${e.summary?N`<p class="pack-officiel-resume">${e.summary}</p>`:``}
        <button class="chip-filtre pack-officiel-installer" @click=${()=>t.installer(e)}>⤓ Télécharger et importer</button>
      </div>
    `)}
  `)}var hf=null,gf=null;function _f(e){let t=async t=>{let n=t.value;t.value=``;let r=await e.creerDiscipline(n);lf.delete(`discipline`),r&&(e.disciplineGestion=r),e.requestUpdate()};return N`
    <div class="creation-discipline" style="margin:6px 0 2px">
      <input placeholder="Nom de la discipline…" autofocus aria-label="Nom de la discipline"
             @keydown=${e=>{e.key===`Enter`&&t(e.target)}}>
      <button class="bouton principal"
        @click=${e=>void t(e.target.parentElement.querySelector(`input`))}>Créer</button>
    </div>
  `}var vf=new Set;function yf(e,t,n){let r=lf.has(t);return N`<button class="bouton-plus ${r?`actif`:``}" aria-label=${r?`Fermer — ${n}`:n} aria-expanded=${r}
    @click=${n=>{n.preventDefault(),n.stopPropagation();let i=n.target.closest(`details`);i&&!r&&(i.open=!0),r?lf.delete(t):lf.add(t),e.requestUpdate()}}>${r?`−`:`＋`}</button>`}function bf(e,t){e.bibliotheque.techniques.filter(e=>e.disciplineId===t.id).length===0?e.autoriser(`destruction_ou_sensible`,`Saisis le PIN pour retirer « ${t.nom} ».`,()=>{e.demanderConfirmation({titre:`Supprimer la discipline vide « ${t.nom} » ?`,corps:`Un point de restauration sera conservé.`,bouton:`Supprimer la discipline`,action:()=>{e.supprimerDiscipline(t.id)}})}):(e.disciplineGestion=t.id,vf.add(t.id),e.requestUpdate())}function xf(e,t){if(!vf.has(t.id))return P;let n=e.bibliotheque.techniques.filter(e=>e.disciplineId===t.id);return Ef(e,t,n,new Set(n.map(e=>e.id)))}function Sf(e,t){let n=`${t.id}:familles`,r={reordonner:(n,r)=>e.deplacerTaxonomieVers(t.id,`familles`,n,r),enregistrer:()=>void e.enregistrerReordre(),ordre:()=>t.familles.map(e=>e.id),nom:e=>t.familles.find(t=>t.id===e)?.nom??`la catégorie`},i=r=>{e.ajouterTaxonomie(t.id,`familles`,r.value),r.value=``,lf.delete(n),e.requestUpdate()};return N`
    <details class="carte-atelier sous-volet">
      <summary class="encart-entete"><span class="titre-atelier">Catégories <span class="carnet-compte">${t.familles.length}</span></span>
        ${yf(e,n,`Ajouter une catégorie`)}</summary>
      <div style="padding-top:8px">
      ${lf.has(n)?N`<div class="ligne-atelier">
            <input class="champ-mini" placeholder="Nom de la catégorie" autofocus aria-label="Nouvelle catégorie"
                   @keydown=${e=>{e.key===`Enter`&&i(e.target)}}>
            <button class="bouton" style="flex:none"
              @click=${e=>i(e.target.parentElement.querySelector(`input`))}>Ajouter</button>
          </div>`:P}
      ${t.familles.map(n=>N`
        <div class="ligne-atelier">
          ${_a(e,n.id,r)}
          <input class="champ-mini" .value=${n.nom} aria-label="Nom de la catégorie"
                 @change=${r=>void e.majTaxonomie(t.id,`familles`,n.id,{nom:r.target.value})}>
          ${Df(e,t,`familles`,n.id,n.nom,`la catégorie`)}
        </div>
        ${Of(e,t,`familles`,n.id,n.nom)}`)}
      ${t.familles.length===0&&!lf.has(n)?N`<p class="fil-vide" style="padding:6px 2px 0">Aucune catégorie — touche ＋.</p>`:P}
      </div>
    </details>
  `}function Cf(e,t){let n=`${t.id}:niveaux`,r={reordonner:(n,r)=>e.deplacerTaxonomieVers(t.id,`niveaux`,n,r),enregistrer:()=>void e.enregistrerReordre(),ordre:()=>t.niveaux.map(e=>e.id),nom:e=>t.niveaux.find(t=>t.id===e)?.nom??`le niveau`},i=r=>{e.ajouterTaxonomie(t.id,`niveaux`,r.value),r.value=``,lf.delete(n),e.requestUpdate()};return N`
    <details class="carte-atelier sous-volet">
      <summary class="encart-entete"><span class="titre-atelier">Niveaux <span class="carnet-compte">${t.niveaux.length}</span></span>
        ${yf(e,n,`Ajouter un niveau`)}</summary>
      <div style="padding-top:8px">
      ${lf.has(n)?N`<div class="ligne-atelier">
            <input class="champ-mini" placeholder="Nom du niveau" autofocus aria-label="Nouveau niveau"
                   @keydown=${e=>{e.key===`Enter`&&i(e.target)}}>
            <button class="bouton" style="flex:none"
              @click=${e=>i(e.target.parentElement.querySelector(`input`))}>Ajouter</button>
          </div>`:P}
      ${t.niveaux.length?N`<p class="fil-vide" style="padding:0 2px 4px">Un niveau porte une ou deux couleurs (ceintures bicolores) — le carré ＋ ajoute la seconde.</p>`:P}
      ${t.niveaux.map(n=>N`
        <div class="ligne-atelier">
          ${_a(e,n.id,r)}
          <input class="champ-mini" .value=${n.nom} aria-label="Nom du niveau"
                 @change=${r=>void e.majTaxonomie(t.id,`niveaux`,n.id,{nom:r.target.value})}>
          ${Tf(e,t,n)}
          ${Df(e,t,`niveaux`,n.id,n.nom,`le niveau`)}
        </div>
        ${Of(e,t,`niveaux`,n.id,n.nom)}`)}
      ${t.niveaux.length===0&&!lf.has(n)?N`<p class="fil-vide" style="padding:6px 2px 0">Aucun niveau — touche ＋.</p>`:P}
      </div>
    </details>
  `}var wf=new Set;function Tf(e,t,n){let r=wf.has(n.id)||n.couleur2!==void 0;return N`<span class="couleur-niveau">
    <input type="color" class="pastille-couleur" .value=${n.couleur??`#cccccc`} title="Couleur du niveau"
           @change=${r=>void e.majTaxonomie(t.id,`niveaux`,n.id,{couleur:r.target.value})}>
    ${r?N`<input type="color" class="pastille-couleur" .value=${n.couleur2??n.couleur??`#cccccc`} title="Seconde couleur (ceinture bicolore)"
               @change=${r=>void e.majTaxonomie(t.id,`niveaux`,n.id,{couleur2:r.target.value})}>`:N`<button class="pastille-couleur pastille-ajout" aria-label="Ajouter une seconde couleur (ceinture bicolore)" title="Ajouter une seconde couleur (ceinture bicolore)"
               @click=${()=>{wf.add(n.id),e.requestUpdate()}}>＋</button>`}
  </span>`}function Ef(e,t,n,r){let i=e.bibliotheque,a=i.contributions.filter(e=>e.techniqueId&&r.has(e.techniqueId)),o=a.filter(e=>e.provenance===`personnel`).length,s=a.flatMap(e=>e.medias).filter(e=>e.type===`local`).length,c=i.compositions.filter(e=>e.blocs.some(e=>e.type===`technique`&&e.techniqueId&&r.has(e.techniqueId))),l=()=>{vf.delete(t.id),e.requestUpdate()};return N`<div class="suppression-discipline">
    <p class="details" style="line-height:1.5">
      Supprimer « ${t.nom} » retirera <b>${n.length} technique${n.length>1?`s`:``}</b>
      (${s?`${s} vidéo${s>1?`s`:``} locale${s>1?`s`:``}`:`aucune vidéo locale`}).
      ${o?N`${o>1?`Tes ${o} notes personnelles reviendront`:`Ta note personnelle reviendra`}
            « à rattacher » — rien de personnel n'est perdu.`:P}
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
  </div>`}function Df(e,t,n,r,i,a){return N`
    <button class="bouton-icone" aria-label="Retirer ${a}"
      @click=${()=>{e.usagesTaxonomie(t.id,n,r).length?(hf=`${t.id}:${n}:${r}`,e.requestUpdate()):e.demanderConfirmation({titre:`Retirer ${a} « ${i} » ?`,corps:`Inutilisé${n===`familles`?`e`:``} — aucune fiche n'y fait référence.`,bouton:`Retirer`,action:()=>{e.supprimerTaxonomie(t.id,n,r)}})}}>✕</button>
  `}function Of(e,t,n,r,i){if(hf!==`${t.id}:${n}:${r}`)return N``;let a=e.usagesTaxonomie(t.id,n,r),o=t[n].filter(e=>e.id!==r),s=()=>{hf=null,e.requestUpdate()};return N`<div class="suppression-discipline suppression-taxonomie">
    <p class="details" style="line-height:1.5">
      « ${i} » est utilisée par <b>${a.length} technique${a.length>1?`s`:``}</b> :
    </p>
    <div class="chips-filtres" style="flex-wrap:wrap; padding:2px 0 0">
      ${a.slice(0,8).map(t=>N`<button class="chip-filtre" @click=${()=>e.ouvrirFiche(t.id)}>${t.nom}</button>`)}
      ${a.length>8?N`<span class="chip-filtre" style="cursor:default">… ${a.length-8} de plus</span>`:P}
    </div>
    <div class="chips-filtres" style="flex-wrap:wrap; padding:6px 0 0">
      <button class="chip-filtre" @click=${s}>Annuler</button>
      ${o.map(i=>N`<button class="chip-filtre" @click=${()=>{s(),e.supprimerTaxonomie(t.id,n,r,i.id)}}>
          Remplacer par « ${i.nom} »</button>`)}
      <button class="action-danger" style="padding:6px 10px; font-size:12px"
        @click=${()=>{s(),e.supprimerTaxonomie(t.id,n,r,null)}}>
        Retirer la classification</button>
    </div>
  </div>`}function kf(e){return N`
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
      ${e.bibliotheque.typesRelation.map(t=>Af===t.id?Pf(e,t):Nf(e,t))}
      <div class="ligne-atelier">
        <input class="champ-mini" placeholder="Nouveau lien…" aria-label="Libellé du type">
        <input class="champ-mini" placeholder="Lecture inverse…" aria-label="Libellé inverse">
        <button class="bouton principal" style="flex:none"
          @click=${t=>{let n=t.target.parentElement.querySelectorAll(`input`);e.ajouterTypeRelation(n[0].value,n[1].value),n.forEach(e=>e.value=``)}}>Ajouter</button>
      </div>
    </div>
  `}var Af=null;function jf(e,t,n){let r=e.bibliotheque,i=new Map(r.techniques.map(e=>[e.id,e.nom])),a=[],o=new Set;for(let e of r.techniques)for(let r of e.relations){if(r.type!==t)continue;let s=i.get(r.cibleId);if(s===void 0)continue;let c=n?[e.id,r.cibleId].sort().join(`|`):`${e.id}|${r.cibleId}`;o.has(c)||(o.add(c),a.push({sourceId:e.id,sourceNom:i.get(e.id)??`?`,cibleId:r.cibleId,cibleNom:s}))}return a.sort((e,t)=>e.sourceNom.localeCompare(t.sourceNom))}function Mf(e,t){let n=jf(e,t.id,t.symetrique??!1),r=t.symetrique?`⇄`:`→`,i=N`<button class="chip-filtre" style="margin:4px 12px 8px"
    @click=${()=>e.ouvrirEditionLien(null,void 0,void 0,t.id)}>＋ Ajouter un lien de ce type</button>`;return n.length===0?N`<p class="fil-vide" style="padding:4px 12px 2px">Aucun lien de ce type pour l'instant.</p>${i}`:N`<div class="instances-relation">
    ${n.map(n=>N`<div class="ligne-instance">
        <button class="lien-instance" @click=${()=>e.ouvrirFiche(n.sourceId)}
          title="Ouvrir « ${n.sourceNom} »">${n.sourceNom} <span class="fleche-instance">${r}</span> ${n.cibleNom}</button>
        <button class="bouton-icone" aria-label=${`Modifier le lien ${n.sourceNom} ${r} ${n.cibleNom}`} title="Raison, priorité…"
          @click=${()=>e.ouvrirEditionLien(n.sourceId,n.cibleId,t.id)}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>
        </button>
        <button class="bouton-icone danger" aria-label=${`Retirer le lien ${n.sourceNom} ${r} ${n.cibleNom}`} title="Retirer ce lien"
          @click=${()=>e.demanderConfirmation({titre:`Retirer le lien « ${n.sourceNom} ${r} ${n.cibleNom} » ?`,bouton:`Retirer le lien`,action:()=>{e.retirerRelation(n.sourceId,n.cibleId,t.id)}})}>✕</button>
      </div>`)}
  </div>${i}`}function Nf(e,t){let n=e.usagesTypeRelation(t.id),r=gf===t.id;return N`<div class="type-relation-bloc">
    <div class="ligne-atelier">
      <button class="details lien-type" style="flex:1;text-align:left" aria-expanded=${r}
        @click=${()=>{gf=r?null:t.id,e.requestUpdate()}}>
        <span class="chevron-type" aria-hidden="true">${r?`▾`:`▸`}</span>
        ${t.libelle}${t.symetrique?` ⇄`:` → ${t.libelleInverse}`}
        ${n?N`<span class="kpi-nombre" style="font-size:10px">${n}</span>`:P}
        ${t.origine?N`<span style="opacity:.7"> · importé</span>`:P}
      </button>
      <button class="bouton-icone" aria-label="Modifier ce lien" title="Renommer / lecture inverse"
        @click=${()=>{Af=t.id,e.requestUpdate()}}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>
      </button>
      <button class="bouton-icone" aria-label="Supprimer ce lien"
        @click=${()=>{n?e.supprimerTypeRelation(t.id):e.demanderConfirmation({titre:`Retirer le lien « ${t.libelle} » ?`,corps:`Inutilisé — aucune relation ne s'en sert.`,bouton:`Retirer le type`,action:()=>{e.supprimerTypeRelation(t.id)}})}}>✕</button>
    </div>
    ${r?Mf(e,t):P}
  </div>`}function Pf(e,t){let n=e.usagesTypeRelation(t.id);return N`<div class="ligne-atelier edition-type-relation" style="flex-wrap:wrap">
    <input class="champ-mini" .value=${t.libelle} aria-label="Libellé du lien">
    ${t.symetrique?N`<span class="details">⇄ se lit pareil des deux sens</span>`:N`<input class="champ-mini" .value=${t.libelleInverse??``} aria-label="Lecture inverse">`}
    <button class="chip-filtre" title=${n?`des relations utilisent déjà cette lecture`:`basculer la nature de lecture`}
      @click=${()=>void e.basculerSymetrieTypeRelation(t.id)}>${t.symetrique?`Rendre orienté`:`Rendre symétrique ⇄`}</button>
    <button class="bouton principal" style="flex:none; padding:7px 12px; font-size:12.5px"
      @click=${n=>{let r=n.target.parentElement.querySelectorAll(`input`);Af=null,e.majTypeRelation(t.id,{libelle:r[0].value,...t.symetrique?{}:{libelleInverse:r[1]?.value??``}})}}>OK</button>
  </div>`}function Ff(e,t){e.autoriser(`destruction_ou_sensible`,`Saisis le PIN pour retirer « ${t.nom} ».`,()=>{let n=Yi(e.bibliotheque,t.id),r=n.length?`\nUtilisée dans ${n.length} composition${n.length>1?`s`:``} (${n.map(e=>e.nom).join(`, `)}).`:``;e.demanderConfirmation({titre:`Mettre « ${t.nom} » à la corbeille ?`,corps:`${r?r.trim()+`
`:``}Geste réversible : tu pourras la restaurer depuis Plus › Corbeille.`,bouton:`Mettre à la corbeille`,action:()=>{e.supprimerTechnique(t.id)}})})}function If(e,t){let n=e.bibliotheque;t&&!n.disciplines.some(e=>e.id===t)&&(t=null);let r=new Set(n.techniques.map(e=>e.id)),i=new Set(n.contributions.filter(e=>e.techniqueId).map(e=>e.techniqueId)),a=new Set(n.contributions.filter(e=>e.techniqueId&&e.medias.length).map(e=>e.techniqueId)),o=new Set(e.mediasManquants.filter(e=>e.techniqueId).map(e=>e.techniqueId)),s=e=>n.disciplines.find(t=>t.id===e)?.nom??``,c=e=>e.familleId?n.disciplines.find(t=>t.id===e.disciplineId)?.familles.find(t=>t.id===e.familleId)?.nom??``:``,l=e=>{let t=[];return!e.familleId&&e.niveauxIds.length===0&&t.push(`sans classification`),i.has(e.id)?a.has(e.id)||t.push(`sans média`):t.push(`sans contenu`),e.relations.some(e=>!r.has(e.cibleId))&&t.push(`relation à réparer`),o.has(e.id)&&t.push(`vidéo manquante`),t},u=pf.requete.trim().toLowerCase(),d=n.techniques.filter(e=>!(t&&e.disciplineId!==t||u&&!`${e.nom} ${e.nomTraditionnel??``}`.toLowerCase().includes(u))).sort((e,t)=>e.nom.localeCompare(t.nom,`fr`,{sensitivity:`base`}));return N`
    <div class="carte-atelier" style="margin-top:10px">
      ${n.disciplines.length>1?N`<div class="chips-filtres" style="padding:0 0 4px" aria-label="Filtrer par discipline">
            <button class="chip-filtre ${t?``:`actif`}"
              @click=${()=>{pf.disciplineId=null,e.requestUpdate()}}>Toutes</button>
            ${n.disciplines.map(n=>N`<button class="chip-filtre ${t===n.id?`actif`:``}"
                @click=${()=>{pf.disciplineId=n.id,e.requestUpdate()}}>${n.nom}</button>`)}
          </div>`:P}
      <div class="recherche" style="margin:0">
        <input placeholder="Chercher une technique…" aria-label="Chercher une technique" .value=${pf.requete}
               @input=${t=>{pf.requete=t.target.value,e.requestUpdate()}}>
      </div>
      ${d.map(t=>{let n=c(t);return N`<div class="ligne-gestion ligne-gestion-double">
          <button class="ligne-gestion-ouvrir" @click=${()=>e.ouvrirFiche(t.id)}>
            <span class="ligne-gestion-nom">${t.nom}</span>
            <span class="details">${s(t.disciplineId)}${n?` · ${n}`:``}</span>
            ${l(t).length?N`<span class="etiquettes-gestion">${l(t).map(e=>N`<span class="etiquette-gestion">${e}</span>`)}</span>`:P}
          </button>
          <button class="bouton-icone danger supprimer-technique" aria-label=${`Retirer ${t.nom}`} title="Retirer cette technique"
            @click=${()=>Ff(e,t)}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true"><path d="M4 7h16M9 7V5h6v2M6 7l1 13h10l1-13"/></svg>
          </button>
        </div>`})}
      ${d.length===0?N`<p class="fil-vide" style="padding:8px 0 0">Rien ne correspond.</p>`:P}
    </div>
  `}var Lf=new Set;function Rf(e){let t=[...ip(e).values()],n=t.filter(e=>e.media.type===`local`),r=t.filter(e=>e.media.type!==`local`);return N`
    <div class="carte-atelier" style="gap:0">
      <div class="encart-entete" style="padding-bottom:4px"><span class="titre-atelier">Médiathèque</span></div>
      ${sp(e,n.length,`Vidéos locales`,`local`)}
      ${$f===`local`?lp(e,n):P}
      ${sp(e,r.length,`Médias en ligne`,`enligne`)}
      ${$f===`enligne`?lp(e,r):P}
      ${t.length===0?N`<p class="fil-vide" style="padding:6px 0 0">Aucun média pour l'instant.</p>`:P}
    </div>
  `}function zf(e){let t=e.bibliotheque,n=t.contributions.filter(e=>e.techniqueId===null),r=new Set;for(let e of t.contributions)e.techniqueId&&e.medias.length&&r.add(e.techniqueId);let i=t.techniques.filter(e=>!r.has(e.id)),a=t.techniques.filter(e=>!e.familleId&&e.niveauxIds.length===0),o=e.doublonsPotentiels().length,s=t.conflitsContributions??[];return N`
    ${n.length+i.length+a.length+e.mediasManquants.length+e.videosOrphelines.length+o+s.length===0?N`<p class="fil-vide" style="padding:10px 2px 0">Rien à traiter — ta bibliothèque est en ordre. ✓</p>`:P}
    <div class="carte-atelier" style="gap:0">
      <div class="encart-entete" style="padding-bottom:4px"><span class="titre-atelier">À compléter</span></div>
      ${sp(e,n.length,`Captures à rattacher`,`rattacher`)}
      ${$f===`rattacher`?Vf(e,n):P}
      ${sp(e,i.length,`Techniques sans vidéo`,`sansvideo`)}
      ${$f===`sansvideo`?up(e,i,`Ajouter une vidéo`,`Toutes tes techniques ont une vidéo ou un lien.`):P}
      ${sp(e,a.length,`Techniques sans classement`,`aclasser`)}
      ${$f===`aclasser`?up(e,a,`Classer`,`Toutes tes techniques ont une catégorie ou un niveau.`):P}
    </div>
    ${s.length?N`<div class="carte-atelier">
          <div class="ligne-atelier">
            <span class="titre-atelier" style="font-size:14px">Textes de pack à arbitrer</span>
            <span class="kpi-nombre">${s.length}</span>
          </div>
          <p class="fil-vide" style="padding:0 2px 6px">La mise à jour d'un pack voulait remplacer un texte que tu as modifié.
            Ta version reste en place tant que tu n'as pas choisi.</p>
          ${s.map(n=>{let r=t.contributions.find(e=>e.id===n.contributionId);return N`<div class="conflit-liaison">
              <div class="conflit-liaison-titre"><b>${(r?.techniqueId?t.techniques.find(e=>e.id===r.techniqueId):void 0)?.nom??`Technique disparue`}</b>
                ${r?.modifiePar?N`<span class="conflit-liaison-type">modifié par ${r.modifiePar}</span>`:P}</div>
              <div class="conflit-liaison-versions">
                <div class="conflit-version"><div class="conflit-version-tete">La mienne</div>
                  <div class="conflit-version-note">${r?.description??N`<i>sans description</i>`}</div></div>
                <div class="conflit-version"><div class="conflit-version-tete">Celle du pack</div>
                  <div class="conflit-version-note">${n.description??N`<i>sans description</i>`}</div></div>
              </div>
              <div class="conflit-liaison-actions">
                <button class="chip-filtre" @click=${()=>void ku(e,n,`locale`)}>La mienne</button>
                <button class="chip-filtre" @click=${()=>void ku(e,n,`pack`)}>Celle du pack</button>
              </div>
            </div>`})}
        </div>`:P}
    <div class="carte-atelier" style="gap:0">
      <div class="encart-entete" style="padding-bottom:4px"><span class="titre-atelier">Intégrité des médias</span></div>
      ${sp(e,e.mediasManquants.length,`Vidéos manquantes`,`manquantes`,`rouge`)}
      ${$f===`manquantes`?Bf(e):P}
      ${sp(e,e.videosOrphelines.length,`Fichiers inutilisés`,`inutilises`,`rouge`)}
      ${$f===`inutilises`?dp(e):P}
    </div>
    ${o?N`<div class="carte-atelier" style="gap:0">
          <div class="encart-entete" style="padding-bottom:4px"><span class="titre-atelier">À examiner</span></div>
          <button class="kpi kpi-filtre" @click=${()=>e.ouvrirPlusSection(`doublons`)}>
            <span class="voyant neutre"></span>
            <span class="kpi-libelle">Doublons potentiels</span>
            <span class="kpi-nombre">${o}</span>
            <span class="chevron" aria-hidden="true">›</span>
          </button>
        </div>`:P}
  `}function Bf(e){let t=e.mediasManquants.filter(e=>e.techniqueId).map(e=>({id:e.techniqueId,nom:e.nom})).sort((e,t)=>e.nom.localeCompare(t.nom,`fr`,{sensitivity:`base`}));return N`<div class="mediatheque-liste">
    <p class="details" style="padding:2px 2px 6px">Fichier absent — restaure une sauvegarde, ou retire la note.</p>
    ${t.length?t.map(t=>N`<div class="ligne-atelier ligne-media">
          <span class="details" style="flex:1;min-width:0"><button class="lien-media-fiche" @click=${()=>e.ouvrirFiche(t.id)}>${t.nom}</button></span>
        </div>`):N`<p class="fil-vide" style="padding:6px 0 8px">Aucune vidéo manquante rattachée à une fiche.</p>`}
  </div>`}function Vf(e,t){return N`<div class="mediatheque-liste">
    <p class="details" style="padding:2px 2px 6px">Un savoir sans nom s'oublie — donne-lui une technique.</p>
    ${t.length?t.map((t,n)=>N`<div class="ligne-atelier ligne-media">
          <span class="details" style="flex:1;min-width:0">Capture ${n+1}</span>
          <button class="chip-filtre" @click=${()=>e.ouvrirRattachement(t.id)}>Rattacher</button>
        </div>`):N`<p class="fil-vide" style="padding:6px 0 8px">Aucune capture à rattacher.</p>`}
  </div>`}function Hf(e){return N`${Wf(e)}${kf(e)}`}function Uf(e,t,n,r){if(t.length===0)return P;let i=new Map;for(let e of t)i.set(e.pack,[...i.get(e.pack)??[],e]);return N`
    <div class="carte-atelier">
      <div class="ligne-atelier">
        <span class="titre-atelier" style="font-size:14px">Liens que le pack ne déclare plus</span>
        <span class="kpi-nombre">${t.length}</span>
      </div>
      <p class="fil-vide" style="padding:0 2px 6px">Une nouvelle version a retiré ces liens de son contenu.
        Les tiens restent en place tant que tu n'as pas choisi.</p>
      ${[...i].map(([t,n])=>N`
        <div class="ligne-atelier" style="padding-top:2px">
          <span class="sous-titre-atelier">${n.length} lien${n.length>1?`s`:``} — pack « ${t} »</span>
          <button class="chip-filtre danger retirer-liens-lot"
            @click=${()=>void e.retirerTousLesLiensProposes(t)}>Tout retirer</button>
        </div>`)}
      ${t.slice(0,40).map(t=>N`
        <div class="conflit-liaison retrait-propose">
          <div class="conflit-liaison-titre"><b>${n(t.sourceId)}</b> <span class="fleche-instance">&#8594;</span> <b>${n(t.cibleId)}</b>
            <span class="conflit-liaison-type">${r(t.type)}</span></div>
          <div class="conflit-liaison-actions">
            <button class="chip-filtre" @click=${()=>void e.arbitrerConflitLiaison(t,`local`)}>Garder</button>
            <button class="chip-filtre danger" @click=${()=>void e.arbitrerConflitLiaison(t,`retirer`)}>Retirer</button>
          </div>
        </div>`)}
      ${t.length>40?N`<p class="fil-vide" style="padding:6px 2px 0">Les ${t.length-40} autres apparaîtront ensuite —
            ou d'un coup avec « Tout retirer ».</p>`:P}
    </div>
  `}function Wf(e){let t=e.bibliotheque,n=(t.conflitsLiaisons??[]).filter(e=>!!t.techniques.find(t=>t.id===e.sourceId)?.relations.some(t=>t.type===e.type&&t.cibleId===e.cibleId)&&t.techniques.some(t=>t.id===e.cibleId)),r=n.filter(e=>e.sens!==`retrait`),i=n.filter(e=>e.sens===`retrait`);if(n.length===0)return P;let a=e=>t.techniques.find(t=>t.id===e)?.nom??`?`,o=e=>t.typesRelation.find(t=>t.id===e)?.libelle??e;return r.length===0?Uf(e,i,a,o):N`
    ${i.length?Uf(e,i,a,o):P}
    <div class="carte-atelier">
      <div class="ligne-atelier">
        <span class="titre-atelier" style="font-size:14px">Liaisons à arbitrer</span>
        <span class="kpi-nombre">${r.length}</span>
      </div>
      <p class="fil-vide" style="padding:0 2px 6px">Un pack propose une raison ou une priorité différente sur ces liens.
        Ta version reste en place tant que tu n'as pas choisi.</p>
      ${r.map(n=>{let r=t.techniques.find(e=>e.id===n.sourceId).relations.find(e=>e.type===n.type&&e.cibleId===n.cibleId);return N`<div class="conflit-liaison">
          <div class="conflit-liaison-titre"><b>${a(n.sourceId)}</b> <span class="fleche-instance">→</span> <b>${a(n.cibleId)}</b>
            <span class="conflit-liaison-type">${o(n.type)}</span></div>
          <div class="conflit-liaison-versions">
            <div class="conflit-version"><div class="conflit-version-tete">La mienne</div>
              <div class="conflit-version-note">${r.note??N`<i>sans raison</i>`}</div>
              ${r.priorite===void 0?P:N`<div class="conflit-version-prio">priorité ${r.priorite}</div>`}</div>
            <div class="conflit-version"><div class="conflit-version-tete">Celle du pack</div>
              <div class="conflit-version-note">${n.note??N`<i>sans raison</i>`}</div>
              ${n.priorite===void 0?P:N`<div class="conflit-version-prio">priorité ${n.priorite}</div>`}</div>
          </div>
          <div class="conflit-liaison-actions">
            <button class="chip-filtre" @click=${()=>void e.arbitrerConflitLiaison(n,`local`)}>La mienne</button>
            <button class="chip-filtre" @click=${()=>void e.arbitrerConflitLiaison(n,`pack`)}>Celle du pack</button>
            <button class="chip-filtre" @click=${()=>void e.arbitrerConflitLiaison(n,`deux`)} title="Une seule liaison, qui garde les deux textes — la tienne d'abord">Fusionner les deux</button>
          </div>
        </div>`})}
    </div>
  `}function Gf(e){let t=e.bibliotheque,n=t.corbeille??[];return n.length===0?N`<p class="fil-vide" style="padding-top:10px">La corbeille est vide. Une fiche mise à la corbeille arrive ici et reste restaurable sans limite de durée — rien n'expire tout seul, tant que tu ne vides pas.</p>`:N`
    <div class="carte-atelier" style="gap:0">
      <div class="ligne-atelier">
        <span class="titre-atelier" style="font-size:14px;flex:1">${n.length} fiche${n.length>1?`s`:``} en corbeille</span>
        <button class="chip-filtre danger"
          @click=${()=>e.demanderConfirmation({titre:`Vider la corbeille (${n.length} fiche${n.length>1?`s`:``}) ?`,corps:`Irréversible — un point de restauration sera conservé.`,bouton:`Vider la corbeille`,action:()=>{e.viderCorbeille()}})}>
          Vider la corbeille</button>
      </div>
      <p class="fil-vide" style="padding:2px 2px 8px">Restaurer une fiche la remet à l'identique (notes, favori, liens). Le vidage nettoie les liens qui pointaient vers elle.</p>
      ${n.map(n=>{let r=t.disciplines.find(e=>e.id===n.technique.disciplineId),i=n.contributions.reduce((e,t)=>e+t.medias.length,0),a=n.supprimeeLe.slice(0,10);return N`<div class="ligne-atelier ligne-corbeille" style="flex-wrap:wrap">
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
  `}function Kf(e){let t=[...e.doublonsPotentiels()].sort((t,n)=>(e.technique(t.aId)?.nom??``).localeCompare(e.technique(n.aId)?.nom??``,`fr`,{sensitivity:`base`})),n=(e.bibliotheque.doublonsIgnores??[]).length,r=n?N`<button class="chip-filtre rescan-doublons" style="margin:8px 18px 0"
        @click=${()=>void e.rescannerDoublons()}>
        ↻ Rescanner <span>retrouve les ${n} paire${n>1?`s`:``} déjà écartée${n>1?`s`:``}</span>
      </button>`:P,i=e.bibliotheque.fusions??[],a=i.length?N`<div class="carte-atelier" style="margin-top:10px">
        <div class="titre-atelier" style="font-size:14px">Fusions réversibles</div>
        <p class="fil-vide" style="padding:2px 0 6px">Défusionner rétablit les deux fiches d'origine (les liens entrants restent sur la fiche fusionnée).</p>
        ${i.map(t=>N`<div class="ligne-atelier">
            <span class="details" style="flex:1">🔀 « ${t.a.technique.nom} » + « ${t.b.technique.nom} »</span>
            <button class="chip-filtre" @click=${()=>void e.defusionner(t.fusionneeId)}>Défuser</button>
          </div>`)}
      </div>`:P;if(t.length===0)return N`
      <p class="fil-vide" style="padding-top:10px">Aucun doublon détecté. Deux fiches de nom identique ou proche, venant de sources différentes, s'afficheraient ici.</p>
      ${r}
      ${a}
    `;let o=e.doublonOuvert?t.find(t=>Gu(t.aId,t.bId)===e.doublonOuvert):void 0;return o?N`
      <div class="actions-bibliotheque" style="padding-top:8px">
        <button class="chip-filtre" @click=${()=>{e.doublonOuvert=null,e.fusionDoublon=null,e.requestUpdate()}}>← Tous les doublons</button>
      </div>
      ${Yf(e,o)}
    `:N`
    <p class="fil-vide" style="padding:8px 2px 6px">
      Deux fiches de nom identique ou proche, venant de sources différentes. Elles
      restent indépendantes tant que tu ne décides rien — choisis-en une pour comparer.
    </p>
    <div class="fil doublons-liste">
      ${t.map(t=>qf(e,t))}
    </div>
    ${r}
    ${a}
  `}function qf(e,t){let n=e.technique(t.aId),r=e.technique(t.bId);return!n||!r?N``:N`<button class="ligne-menu ligne-doublon" @click=${()=>{e.doublonOuvert=Gu(t.aId,t.bId),e.requestUpdate()}}>
    <span class="ligne-menu-icone" style="background:#efe3d6" aria-hidden="true">🔀</span>
    <span class="ligne-menu-corps">
      <span class="ligne-menu-titre">${n.nom}</span>
      <span class="ligne-menu-etat">${n.nom===r.nom?`même nom, deux sources`:`≈ « ${r.nom} »`}</span>
    </span>
    <span class="chevron">›</span>
  </button>`}function Jf(e,t,n){return N`<div class="doublon-cote">
    <div class="doublon-apercu">
      ${U(e,t.technique,t.source)}
    </div>
    <div class="doublon-titre">${n} · ${t.technique.nom}</div>
    ${t.description?N`<div class="doublon-desc">${t.description.slice(0,140)}${t.description.length>140?`…`:``}</div>`:P}
    <div class="doublon-chiffres">
      ${t.medias.length} média${t.medias.length>1?`s`:``} ·
      ${t.pointsCles.length} point${t.pointsCles.length>1?`s`:``} ·
      ${t.niveaux.length} niveau${t.niveaux.length>1?`x`:``} ·
      ${t.relations} relation${t.relations>1?`s`:``}
    </div>
  </div>`}function Yf(e,t){let n=Yu(e.bibliotheque,t.aId,t.bId);if(!n)return N``;let r=e.fusionDoublon!==null&&e.fusionDoublon.aId===t.aId&&e.fusionDoublon.bId===t.bId;return N`<div class="doublon">
    <div class="doublon-cotes">
      ${Jf(e,n.a,`A`)}
      ${Jf(e,n.b,`B`)}
    </div>
    ${r?Xf(e,t,n):N`<div class="doublon-decisions">
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
  </div>`}function Xf(e,t,n){let r=e.fusionDoublon,i=r.choix,a=t=>{e.fusionDoublon={...r,choix:{...i,...t}},e.requestUpdate()},o=n.a.technique.nom,s=n.b.technique.nom,c=(e,t,n)=>N`<div class="fusion-ligne">
    <span class="fusion-libelle">${e}</span>
    <div class="chips-filtres" style="padding:0">
      ${n.map(e=>N`<button class="chip-filtre ${i[t]===e.valeur?`actif`:``}"
          @click=${()=>a({[t]:e.valeur})}>${e.texte}</button>`)}
    </div>
  </div>`,l=N``;try{let n=Zu(e.bibliotheque,t.aId,t.bId,i),r=n.techniques.find(e=>e.id===t.aId),a=n.contributions.filter(e=>e.techniqueId===r.id&&e.provenance!==`personnel`),o=a.reduce((e,t)=>e+t.medias.length,0),s=a.map(e=>e.description??``).filter(Boolean).join(` `).slice(0,120);l=N`<div class="fusion-apercu">
      <div class="fusion-apercu-titre">Aperçu : « ${r.nom} »</div>
      <div class="doublon-chiffres">${o} média${o>1?`s`:``} · ${r.niveauxIds.length} niveau${r.niveauxIds.length>1?`x`:``} · ${r.relations.length} relation${r.relations.length>1?`s`:``}</div>
      ${s?N`<div class="doublon-desc">${s}${s.length>=120?`…`:``}</div>`:P}
    </div>`}catch{l=N`<p class="fil-vide">Aperçu indisponible pour ce choix.</p>`}return N`<div class="fusion-panneau">
    ${c(`Titre et famille`,`titre`,[{valeur:`a`,texte:`A (${o})`},{valeur:`b`,texte:`B (${s})`}])}
    ${c(`Textes`,`textes`,[{valeur:`a`,texte:`A`},{valeur:`b`,texte:`B`},{valeur:`deux`,texte:`Les deux`}])}
    ${c(`Médias`,`medias`,[{valeur:`a`,texte:`A`},{valeur:`b`,texte:`B`},{valeur:`deux`,texte:`Les deux`}])}
    ${c(`Niveaux`,`niveaux`,[{valeur:`a`,texte:`A`},{valeur:`b`,texte:`B`},{valeur:`deux`,texte:`Les deux`}])}
    ${c(`Relations`,`relations`,[{valeur:`a`,texte:`A`},{valeur:`b`,texte:`B`},{valeur:`deux`,texte:`Les deux`}])}
    ${l}
    ${(()=>{let n=e.bibliotheque,r=n.techniques.reduce((e,n)=>e+(n.id===t.bId?0:n.relations.filter(e=>e.cibleId===t.bId).length),0),i=n.compositions.reduce((e,n)=>e+n.blocs.filter(e=>e.type===`technique`&&e.techniqueId===t.bId).length,0),a=n.favoris.includes(t.bId),o=[r?`${r} lien${r>1?`s`:``} entrant${r>1?`s`:``} redirigé${r>1?`s`:``}`:null,i?`${i} pas de composition redirigé${i>1?`s`:``}`:null,a?`le favori suit`:null].filter(Boolean);return N`<p class="fil-vide fusion-impacts" style="padding:4px 2px 0">
        ${o.length?N`Ce qui pointait « B » suivra la fiche fusionnée : ${o.join(` · `)}.<br>`:P}
        Un point de restauration est créé avant la fusion — et la fusion reste défusionnable depuis « Doublons ».
      </p>`})()}
    <div class="doublon-decisions">
      <button class="bouton principal" @click=${()=>void e.fusionnerDoublonAvec(t.aId,t.bId,i)}>Fusionner en une fiche</button>
      <button class="chip-filtre" @click=${()=>{e.fusionDoublon=null,e.requestUpdate()}}>Annuler</button>
    </div>
  </div>`}var Zf=null;function Qf(e,t){let n=Lf.has(t.id);return N`<div class="ligne-atelier ligne-orpheline" style="flex-wrap:wrap">
    <span class="details" style="flex:1">🎞 fichier de ${ff(t.taille)} — plus rien ne le référence</span>
    <button class="chip-filtre" @click=${()=>{n?Lf.delete(t.id):Lf.add(t.id),e.requestUpdate()}}>
      ${n?`Replier`:`Vérifier`}</button>
    ${n?N`<div style="width:100%">
          <movenso-video-locale .app=${e} .mediaId=${t.id}></movenso-video-locale>
          ${(()=>{let n=Zf?.id===t.id,r=n&&Zf.texte.trim()?jr(e.bibliotheque,Zf.texte).slice(0,5):[];return N`<div style="margin-top:6px">
              <input class="champ-mini" style="width:100%" placeholder="🔗 Rattacher à une technique (nom)…"
                aria-label="Rattacher ce fichier à une technique"
                .value=${n?Zf.texte:``}
                @input=${n=>{Zf={id:t.id,texte:n.target.value},e.requestUpdate()}}>
              ${r.length?N`<div class="chips-filtres" style="padding-top:4px">
                    ${r.map(n=>N`<button class="chip-filtre"
                      @click=${()=>{Zf=null,e.rattacherOrphelin(t.id,n.id)}}>${n.nom}</button>`)}
                  </div>`:P}
            </div>`})()}
          <button class="action-danger" style="margin-top:6px"
            @click=${()=>{e.demanderConfirmation({titre:`Supprimer définitivement ce fichier inutilisé (${ff(t.taille)}) ?`,bouton:`Supprimer le fichier`,action:()=>{Lf.delete(t.id),e.supprimerVideoOrpheline(t.id)}})}}>Supprimer ce fichier inutilisé</button>
        </div>`:P}
  </div>`}var $f=null;function ep(){$f=null,tp=null}var tp=null,np=new Set,rp=null;function ip(e){let t=e.bibliotheque,n=new Map,r=(e,t,r)=>{let i=n.get(e.id);i||(i={media:e,refs:[],disciplines:new Set},n.set(e.id,i)),i.refs.push(t),r&&i.disciplines.add(r)};for(let n of t.contributions){let t=n.techniqueId?e.technique(n.techniqueId):void 0;for(let e of n.medias)r(e,{nom:t?t.nom:`capture à rattacher`,techniqueId:n.techniqueId},t?.disciplineId)}for(let e of t.compositions)for(let t of e.blocs)for(let n of t.medias)r(n,{nom:`composition « ${e.nom} »`,techniqueId:null});return n}function ap(e){return e.label?.trim()?e.label.trim():e.nomOriginal?.trim()?e.nomOriginal.trim():e.type===`local`?`vidéo`:e.type===`plateforme`?e.service??`vidéo en ligne`:`lien`}function op(e){return e.type===`plateforme`&&e.service===`youtube`?`https://www.youtube.com/watch?v=${e.ref}`:e.ref}function sp(e,t,n,r,i=`neutre`){let a=$f===r;return N`<button class="kpi kpi-filtre ${a?`actif`:``}" aria-expanded=${a}
    @click=${()=>{$f=a?null:r,e.requestUpdate()}}>
    <span class="voyant ${t?i:`vert`}"></span>
    <span class="kpi-libelle">${n}</span>
    <span class="kpi-nombre">${t}</span>
    <span class="chevron" aria-hidden="true">${a?`▾`:`▸`}</span>
  </button>`}function cp(e,t){let n=t.media,r=n.type===`local`?`🎞`:n.type===`plateforme`?`▶`:`🔗`,i=n.type===`local`&&e.taillesVideos.has(n.id),a=n.type===`local`?e.taillesVideos.get(n.id)??n.taille:void 0,o=n.type===`local`?i?ff(a??0):`fichier absent`:`en ligne`,s=t.refs[0]?.nom??`média`,c=t.refs.find(e=>e.techniqueId),l=np.has(n.id),u=rp===n.id;return N`<div class="ligne-atelier ligne-media" style="flex-wrap:wrap">
    <span class="details" style="flex:1;min-width:0">
      <span aria-hidden="true">${r}</span>
      ${c?N`<button class="lien-media-fiche" @click=${()=>e.ouvrirFiche(c.techniqueId)}>${s}</button>`:N`<b>${s}</b>`}
      <span aria-hidden="true"> · </span>
      ${u?N`<input class="champ-mini nom-media-champ" .value=${n.label??``} placeholder=${ap(n)} aria-label="Libellé du média"
            @change=${t=>void e.majMediaLabel(n.id,t.target.value)}>`:N`<span>${ap(n)}</span>`}
      <span style="opacity:.7"> · ${o}</span>
    </span>
    <button class="bouton-icone" aria-label="Modifier ce média" title=${n.type===`local`?`Renommer`:`Modifier le nom et le lien`}
      @click=${()=>{rp=u?null:n.id,e.requestUpdate()}}>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>
    </button>
    ${n.type===`local`?N`<button class="chip-filtre" ?disabled=${!i}
          @click=${()=>{l?np.delete(n.id):np.add(n.id),e.requestUpdate()}}>
          ${l?`Replier`:`▶ Aperçu`}</button>`:c?N`<button class="chip-filtre" @click=${()=>e.ouvrirFiche(c.techniqueId)}>Ouvrir la fiche</button>`:Ua(n.ref)?N`<a class="chip-filtre" href=${Ua(n.ref)} target="_blank" rel="noopener noreferrer"
              title="Quitte Movenso — s'ouvre dans le navigateur">▶ Ouvrir le lien · ${Wa(n.ref)} ↗</a>`:N`<span class="chip-filtre" title="Lien non https — jamais ouvert" style="opacity:.6">🔗 lien non sûr</span>`}
    ${u&&n.type!==`local`?N`<input class="champ-mini" style="width:100%; margin-top:6px" inputmode="url" aria-label="Lien du média (YouTube ou autre)"
          placeholder="🔗 Lien (YouTube ou autre)" .value=${op(n)}
          @change=${t=>void e.majMediaLien(n.id,t.target.value)}>`:P}
    ${l&&i?N`<div style="width:100%"><movenso-video-locale .app=${e} .mediaId=${n.id}></movenso-video-locale></div>`:P}
  </div>`}function lp(e,t){let n=e.bibliotheque.disciplines,r=tp&&n.some(e=>e.id===tp)?tp:null,i=(r?t.filter(e=>e.disciplines.has(r)):t).slice().sort((e,t)=>(e.refs[0]?.nom??ap(e.media)).localeCompare(t.refs[0]?.nom??ap(t.media),`fr`,{sensitivity:`base`}));return N`<div class="mediatheque-liste">
    ${n.length>=2?N`<div class="chips-filtres" style="padding:2px 0 6px">
          <button class="chip-filtre ${r===null?`actif`:``}" @click=${()=>{tp=null,e.requestUpdate()}}>Toutes</button>
          ${n.map(t=>N`<button class="chip-filtre ${r===t.id?`actif`:``}"
            @click=${()=>{tp=t.id,e.requestUpdate()}}>${t.nom}</button>`)}
        </div>`:P}
    ${i.length?i.map(t=>cp(e,t)):N`<p class="fil-vide" style="padding:6px 0 8px">${t.length?`Aucun média pour cette discipline.`:`Aucun média de ce type pour l'instant.`}</p>`}
  </div>`}function up(e,t,n,r){let i=e.bibliotheque.disciplines,a=tp&&i.some(e=>e.id===tp)?tp:null,o=(a?t.filter(e=>e.disciplineId===a):t).slice().sort((e,t)=>e.nom.localeCompare(t.nom,`fr`,{sensitivity:`base`}));return N`<div class="mediatheque-liste">
    ${i.length>=2?N`<div class="chips-filtres" style="padding:2px 0 6px">
          <button class="chip-filtre ${a===null?`actif`:``}" @click=${()=>{tp=null,e.requestUpdate()}}>Toutes</button>
          ${i.map(t=>N`<button class="chip-filtre ${a===t.id?`actif`:``}"
            @click=${()=>{tp=t.id,e.requestUpdate()}}>${t.nom}</button>`)}
        </div>`:P}
    ${o.length?o.map(t=>{let r=i.find(e=>e.id===t.disciplineId);return N`<div class="ligne-atelier ligne-media">
            <span class="details" style="flex:1;min-width:0">
              <button class="lien-media-fiche" @click=${()=>e.ouvrirFiche(t.id)}>${t.nom}</button>
              ${r?N`<span style="opacity:.7"> · ${r.nom}</span>`:P}
            </span>
            <button class="chip-filtre" @click=${()=>e.ouvrirFiche(t.id)}>${n}</button>
          </div>`}):N`<p class="fil-vide" style="padding:6px 0 8px">${t.length?`Aucune pour cette discipline.`:r}</p>`}
  </div>`}function dp(e){let t=e.videosOrphelines.reduce((e,t)=>e+t.taille,0),n=e.videosOrphelines.filter(e=>Lf.has(e.id)),r=n.reduce((e,t)=>e+t.taille,0);return N`<div class="mediatheque-liste">
    <p class="details" style="padding:2px 2px 6px">Vérifie chaque fichier avant de le supprimer${t?N` · total : ${ff(t)}`:P}. Un média retrouvé peut aussi être RATTACHÉ à une fiche.</p>
    ${n.length>=2?N`<button class="action-danger suppression-groupe-orphelins" style="margin:2px 0 8px"
          @click=${()=>{e.demanderConfirmation({titre:`Supprimer les ${n.length} fichiers vérifiés — ${ff(r)} ?`,corps:`Chacun sera revérifié inutilisé à l'instant de supprimer.`,bouton:`Supprimer les ${n.length} fichiers`,action:()=>{n.forEach(e=>Lf.delete(e.id)),e.supprimerOrphelinsVerifies(n.map(e=>e.id))}})}}>Supprimer les ${n.length} fichiers vérifiés — ${ff(r)}</button>`:P}
    ${e.videosOrphelines.length?e.videosOrphelines.map(t=>Qf(e,t)):N`<p class="fil-vide" style="padding:6px 0 8px">Aucun fichier inutilisé.</p>`}
  </div>`}function fp(e){return e.bibliotheque.disciplines.length===0?N`<p class="fil-vide" style="padding-top:10px">Rien à publier pour l'instant — crée ou importe d'abord du contenu.</p>`:N`
    <p class="fil-vide" style="padding:8px 2px 0">Un pack, c'est du contenu <b>à partager</b> — sans ton carnet ni tes favoris. Pour une archive complète <b>pour toi</b>, va dans « Sauvegardes ».</p>
    ${wp(e)}
  `}function pp(e){return bp(e)}function mp(e){return N`
    ${df(`Sauvegarder`,N`
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
      ${e.dernierFichier?N`<div class="suppression-discipline" style="border-color:var(--trait); background:var(--papier)">
            <p class="details fichier-produit" style="line-height:1.5">
              <b style="color:var(--encre)">${e.dernierFichier.role}</b><br>
              ${e.dernierFichier.nom} · ${e.dernierFichier.taille>=1e6?`${(e.dernierFichier.taille/1e6).toFixed(1)} Mo`:`${Math.max(1,Math.round(e.dernierFichier.taille/1e3))} Ko`}<br>
              ${e.dernierFichier.resume}<br>
              L'emplacement du fichier est indiqué dans la confirmation à l'enregistrement.
            </p>
          </div>`:P}
    `)}
    ${df(`Revenir à un état précédent`,Tp(e))}
    ${df(`Restaurer une sauvegarde complète`,N`
      <div class="actions-bibliotheque" style="padding-top:0">
        <button class="action-douce" @click=${()=>e.choisirPackAImporter()}>
          ⤒ Restaurer depuis un fichier <span>importe une sauvegarde complète — sur une installation vierge</span>
        </button>
      </div>
    `)}
  `}function hp(e){return N`${Ap(e)}`}function gp(e){let t=e.preferences.theme??`auto`,n=e.preferences.tonalite??`vermillon`;return N`
    <div class="carte-atelier">
      <div class="encart-entete"><span class="titre-atelier">Thème</span></div>
      <div class="chips-filtres" style="padding:2px 0 0">
        ${[`auto`,`clair`,`sombre`].map(n=>N`<button class="chip-filtre ${t===n?`actif`:``}"
            @click=${()=>e.changerApparence({theme:n})}>${n===`auto`?`Auto (système)`:n===`clair`?`Jour`:`Nuit`}</button>`)}
      </div>
    </div>

    <div class="carte-atelier">
      <div class="encart-entete"><span class="titre-atelier">Tonalité</span></div>
      <div class="chips-filtres" style="flex-wrap:wrap; padding:2px 0 0">
        ${Ep.map(t=>N`<button class="chip-filtre ${n===t.id?`actif`:``}"
            @click=${()=>e.changerApparence({tonalite:t.id})}>
            <span class="puce-niveau" style="background:${t.couleur}"></span>${t.nom}</button>`)}
      </div>
    </div>

    ${yp(e)}

    <div class="carte-atelier">
      <div class="encart-entete"><span class="titre-atelier">Au démarrage</span></div>
      ${Pp(e)}
    </div>

    <div class="carte-atelier">
      <div class="encart-entete"><span class="titre-atelier">Ton pseudo</span></div>
      <div class="aide" style="font-size:12px; color:var(--sourdine)">Signe les techniques que tu crées ou modifies (« Modifié par… »).</div>
      <input class="champ-mini" placeholder="Ton nom ou ton pseudo"
             .value=${(e.preferences.pseudo??``).trim()} aria-label="Ton pseudo"
             @change=${t=>e.changerPseudo(t.target.value)}>
    </div>
  `}function _p(e){return N`
    <div class="carte-atelier">
      <div class="encart-entete"><span class="titre-atelier">Outils</span></div>
      ${vp(e,`Mode avancé`,`Affiche les outils de curation dans « Plus » : doublons, médias, relations, diagnostic et maintenance.`,`modeAvance`)}
    </div>

    <div class="carte-atelier">
      <div class="encart-entete"><span class="titre-atelier">Réseau</span></div>
      <div class="aide" style="font-size:12px; color:var(--sourdine); padding:0 0 6px">
        Movenso fonctionne hors ligne. Une vidéo ne se charge qu'au moment où tu
        la lances — ça, ça ne change pas.
      </div>
      ${vp(e,`Vignettes distantes`,`Illustre les fiches sans image locale avec la miniature fournie par YouTube. Désactivé, aucune requête n'est faite sans ton geste.`,`vignettesDistantes`)}
    </div>

    <div class="carte-atelier">
      <div class="encart-entete"><span class="titre-atelier">Fonctions en bêta</span></div>
      <div class="aide" style="font-size:12px; color:var(--sourdine); padding:0 0 6px">
        Des fonctions complètes mais encore en ajustement. Les masquer ne supprime
        jamais rien : les données restent intactes et reviennent avec l'onglet.
      </div>
      ${vp(e,`Relations`,`Les liens entre techniques : sur les fiches, en graphe, et leur édition.`,`vueRelationBeta`)}
      ${vp(e,`Compositions`,`L'onglet Compositions : enchaînements, séances minutées, lecture pas à pas, rôles.`,`compositionsBeta`)}
    </div>
  `}function vp(e,t,n,r){let i=e.preferences[r]??!1;return N`
    <button class="interrupteur ${i?`actif`:``}" role="switch" aria-checked=${i}
      @click=${()=>e.basculerReglage(r)}>
      <span class="interrupteur-texte">
        <span class="interrupteur-titre">${t}</span>
        <span class="interrupteur-aide">${n}</span>
      </span>
      <span class="interrupteur-piste" aria-hidden="true"><span class="interrupteur-bouton"></span></span>
    </button>`}function yp(e){let t=e.preferences.densiteBibliotheque??0,n=t===0?`Auto — s'adapte à l'écran (2 sur téléphone, plus sur tablette)`:`${t} colonne${t>1?`s`:``}`;return N`
    <div class="carte-atelier">
      <div class="encart-entete"><span class="titre-atelier">Densité de la bibliothèque</span></div>
      <div class="aide" style="font-size:12px; color:var(--sourdine)">Nombre de colonnes de la grille des techniques.</div>
      <div class="densite-reglage">
        <input type="range" min="0" max="6" step="1" .value=${String(t)}
          aria-label="Nombre de colonnes de la bibliothèque"
          @input=${t=>{let n=Number(t.target.value);e.changerDensite(n===0?null:n)}}>
        <span class="densite-valeur">${n}</span>
      </div>
    </div>`}function bp(e){let t=[200,500,1e3,2e3,5e3,1e4,2e4,0],n=e.preferences.limiteEspaceMo??5e3,r=t.indexOf(n),i=r>=0?r:4,a=e=>e===0?`Illimité`:e>=1e3?`${e/1e3} Go`:`${e} Mo`,o=e.infoEspace;return N`
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
        ${o?N`<br>Utilisé : ${ff(o.usage)} · max appareil ~${ff(o.quota)}`:P}
      </div>
      ${n===0?N`<div class="aide" style="font-size:11.5px; color:var(--attention, #b26b00)">⚠ Sans limite, Movenso peut remplir le stockage de l'appareil.</div>`:P}
      ${xp(e)}
    </div>`}function xp(e){let t=e.persistanceStockage,n=t===`accordee`?N`✓ Persistance accordée — le navigateur ne purgera pas ces données.`:t===`native`?N`Stockage applicatif natif — géré par le système, pas de purge navigateur.`:t===`refusee`?N`⚠ Persistance non garantie : le navigateur pourrait purger ces données s'il manque de place.
              <button class="lien-texte" @click=${()=>void e.redemanderPersistance()}>Demander la persistance</button>`:N`Persistance : ce navigateur ne sait pas répondre — pense aux sauvegardes régulières.`;return N`<div class="aide persistance-stockage" style="font-size:11.5px; color:${t===`refusee`?`var(--attention, #b26b00)`:`var(--sourdine)`}">${n}</div>`}function Sp(e){return N`
    ${df(`Movenso`,N`
      <div class="apropos-version">
        <div><strong>Version</strong> ${Di}+${Oi}</div>
        <div class="aide" style="font-size:12px; color:var(--sourdine)">
          Bibliothèque personnelle de vos disciplines du mouvement — sans compte ni
          cloud. Les données et vidéos restent sur cet appareil ; une connexion peut
          être nécessaire pour charger ou mettre à jour l'application web et
          consulter les ressources externes.
        </div>
        ${`0.9.0-rc.1`.includes(`dev`)||`0.9.0-rc.1`.includes(`rc`)||`0.9.0-rc.1`.includes(`beta`)?N`<div class="aide" style="font-size:12px; color:var(--state-warning, #9a6a00)">
              Version d'évaluation : build de test possiblement non signée —
              pense à exporter une sauvegarde avant chaque mise à jour.
            </div>`:P}
      </div>
    `)}
    ${df(`Limites connues`,N`
      <ul class="apropos-liste">
        <li><strong>Export volumineux</strong> : un fichier d'export (sauvegarde ou pack)
          qui dépasserait ~4 Go n'est pas garanti — préfère la sauvegarde légère
          ou plusieurs packs si ta vidéothèque est très lourde.</li>
        <li><strong>Hors ligne</strong> : tes données restent sur l'appareil, mais
          l'application web peut demander une connexion pour se charger ; les
          vignettes en ligne laissent place à l'initiale de la technique.</li>
        <li><strong>Lecteur d'écran</strong> : le socle est en place ; si un parcours
          TalkBack coince, dis-le — les remontées font foi.</li>
      </ul>
    `)}
    ${df(`Licences`,N`
      <ul class="apropos-liste apropos-licences">
        <li><strong>Application</strong> : logiciel libre, licence
          <strong>GNU GPL v3</strong> — le code est public et le restera
          (fichier <code>LICENSE</code> du dépôt).</li>
        <li><strong>Packs officiels</strong> (noms, classifications, niveaux, notes,
          liens) : <strong>CC BY-NC-SA 4.0</strong> — réutilisables avec attribution
          « Movenso », SANS usage commercial, à repartager sous la même licence.</li>
        <li><strong>Vidéos liées</strong> : elles restent la propriété de leurs
          auteurs et de leurs chaînes — l'application n'en fait que des
          <em>liens</em> (lecture chez l'hébergeur), jamais de copie.</li>
      </ul>
    `)}
  `}function Cp(e){return N`
    ${df(`Diagnostic`,N`
      <div class="aide" style="font-size:12px; color:var(--sourdine)">Un fichier texte (compteurs, santé des médias, stockage, versions, dernier échec avec son code, opération en cours) pour comprendre un souci d'import, d'export ou de place — sans aucun secret.</div>
      <button class="chip-filtre diagnostic-export" @click=${()=>void e.exporterDiagnostic()}>Exporter le diagnostic</button>
    `)}
    ${Op(e)}
  `}var Q={disciplineId:null,tout:!0,techniques:new Set,avecVideos:!0,auteur:``,note:``,compositionsPerso:!1};function wp(e){let t=e.bibliotheque,n=e.publicationPrete;if(n)return N`
      <div class="carte-atelier">
        <div class="titre-atelier">Pack prêt</div>
        <p class="details" style="line-height:1.5"><b style="color:var(--encre)">${n.nomPack}</b> · ${ff(n.taille)}<br>${n.resume}</p>
        <div class="edition-actions">
          <button class="bouton principal" @click=${()=>e.enregistrerPublicationLocale()}>⇓ Enregistrer localement</button>
          <button class="bouton" @click=${()=>void e.partagerPublication()}>↗ Partager</button>
        </div>
        <button class="action-douce" style="margin-top:6px" @click=${()=>e.fermerPublication()}>← Préparer un autre pack</button>
      </div>
    `;let r=Q.disciplineId&&t.disciplines.some(e=>e.id===Q.disciplineId)?Q.disciplineId:t.disciplines[0].id;Q.disciplineId=r;let i=t.disciplines.find(e=>e.id===r),a=t.techniques.filter(e=>e.disciplineId===r),o=Q.tout?a.length:a.filter(e=>Q.techniques.has(e.id)).length,s=t=>{Q.disciplineId=t,Q.techniques=new Set,Q.tout=!0,e.requestUpdate()},c=new Set(Q.tout?a.map(e=>e.id):a.filter(e=>Q.techniques.has(e.id)).map(e=>e.id)),l=new Set;for(let e of t.contributions)if(e.techniqueId&&c.has(e.techniqueId)&&e.provenance!==`personnel`)for(let t of e.medias)t.type===`local`&&l.add(t.id);let u=[...l].reduce((t,n)=>t+(e.taillesVideos.get(n)??0),0),d=t.compositions.filter(e=>e.provenance===`personnel`&&e.blocs.some(e=>e.type===`technique`&&e.techniqueId)&&e.blocs.every(e=>e.type!==`technique`||!e.techniqueId||c.has(e.techniqueId)));return N`
    <p class="fil-vide" style="padding-top:0">
      Produire un fichier <b>à partager</b> — pas une sauvegarde. Ton carnet, tes
      favoris et tes captures à reprendre ne partent jamais.
    </p>
    <div class="carte-atelier">
      <div class="etiquette-champ">Discipline</div>
      <div class="chips-filtres">
        ${t.disciplines.map(e=>N`<button class="chip-filtre ${e.id===r?`actif`:``}" @click=${()=>s(e.id)}>${e.nom}</button>`)}
      </div>

      <div class="etiquette-champ">Contenu</div>
      <div class="chips-filtres">
        <button class="chip-filtre ${Q.tout?`actif`:``}" @click=${()=>{Q.tout=!0,e.requestUpdate()}}>Tout (${a.length})</button>
        <button class="chip-filtre ${Q.tout?``:`actif`}" @click=${()=>{Q.tout=!1,e.requestUpdate()}}>Choix de techniques</button>
      </div>
      ${Q.tout?P:N`<div class="publier-techniques">
            ${a.map(t=>N`<label class="niveau-coche">
                <input type="checkbox" ?checked=${Q.techniques.has(t.id)}
                  @change=${()=>{Q.techniques.has(t.id)?Q.techniques.delete(t.id):Q.techniques.add(t.id),e.requestUpdate()}}>
                <span>${t.nom}</span>
              </label>`)}
            ${a.length===0?N`<p class="fil-vide">Aucune technique dans cette discipline.</p>`:P}
          </div>`}

      <div class="etiquette-champ">Vidéos</div>
      <div class="chips-filtres">
        <button class="chip-filtre ${Q.avecVideos?`actif`:``}" @click=${()=>{Q.avecVideos=!0,e.requestUpdate()}}>Avec les vidéos locales</button>
        <button class="chip-filtre ${Q.avecVideos?``:`actif`}" @click=${()=>{Q.avecVideos=!1,e.requestUpdate()}}>Sans les vidéos</button>
      </div>
      <p class="fil-vide" style="padding:4px 0 0">Les liens (YouTube…) restent inclus dans les deux cas.</p>

      ${d.length?N`<div class="etiquette-champ">Mes séances</div>
            <label class="niveau-coche">
              <input type="checkbox" ?checked=${Q.compositionsPerso}
                @change=${()=>{Q.compositionsPerso=!Q.compositionsPerso,e.requestUpdate()}}>
              <span>Inclure ${d.length} séance${d.length>1?`s`:``} personnelle${d.length>1?`s`:``} (jouable${d.length>1?`s`:``} avec ce pack)</span>
            </label>
            <p class="fil-vide" style="padding:2px 0 0">Par défaut, tes séances perso restent privées.</p>`:P}

      <div class="etiquette-champ">Auteur du pack</div>
      <input class="champ-mini" placeholder="Auteur ou organisation (recommandé)" .value=${Q.auteur}
             aria-label="Auteur du pack" @input=${e=>Q.auteur=e.target.value}>

      <div class="etiquette-champ">Note de diffusion</div>
      <input class="champ-mini" placeholder="Note de diffusion (facultatif)" .value=${Q.note}
             aria-label="Note de diffusion" @input=${e=>Q.note=e.target.value}>

      <div class="details" style="padding-top:4px">${o} technique${o>1?`s`:``}${Q.avecVideos?u?` · ~${ff(u)} de vidéos`:` · aucune vidéo locale`:` · sans les vidéos`}</div>
      <button class="bouton principal" style="margin-top:8px; align-self:flex-start" ?disabled=${o===0}
        @click=${()=>void e.preparerPublication(r,{...Q.tout?{}:{techniques:Q.techniques},avecVideos:Q.avecVideos,auteur:Q.auteur,note:Q.note,nom:i.nom,compositionsPersonnelles:Q.compositionsPerso})}>Valider</button>
    </div>
  `}function Tp(e){return e.sauvegardes.length===0?N`<p class="fil-vide" style="padding-top:2px">
      Aucun point de restauration pour l'instant — ils se créent seuls avant chaque
      action sensible (import, suppression, restauration).
    </p>`:N`
    <div class="chips-filtres" style="flex-wrap:wrap">
      ${e.sauvegardes.map(t=>{let[n,r]=t.replace(`.json`,``).split(`__`),i=`${(n??``).replace(`T`,` `).slice(0,16)}${r?` · ${r.replaceAll(`-`,` `)}`:``}`;return N`<button class="chip-filtre"
          @click=${()=>e.autoriser(`destruction_ou_sensible`,`Saisis le PIN pour revenir à un état précédent.`,()=>{e.demanderConfirmation({titre:`Revenir à l'état « ${i} » ?`,corps:`— La bibliothèque actuelle (techniques, contributions, compositions, favoris) sera REMPLACÉE par cet état ; tout ce qui a été créé depuis sera retiré.
— Les fichiers vidéo de l'appareil ne bougent PAS (les points de restauration n'incluent pas les vidéos).
— L'état actuel est lui-même sauvegardé d'abord : ce retour est annulable.`,bouton:`Revenir à cet état`,action:()=>{e.restaurerSauvegarde(t)}})})}>↺ ${i}</button>`})}
    </div>
    <p class="fil-vide" style="padding-top:6px">
      Points de restauration automatiques (10 conservés), données seules — pour la vraie
      sauvegarde avec vidéos, utilise « Sauvegarde complète ».
    </p>
  `}var Ep=[{id:`vermillon`,nom:`Vermillon`,couleur:`#B23A26`},{id:`indigo`,nom:`Indigo`,couleur:`#35506F`},{id:`foret`,nom:`Forêt`,couleur:`#2F6B4F`},{id:`ocre`,nom:`Ocre`,couleur:`#96682B`},{id:`prune`,nom:`Prune`,couleur:`#7A3E68`},{id:`acier`,nom:`Acier`,couleur:`#47586B`}],Dp=!1;function Op(e){let t=()=>{Dp=!1,e.requestUpdate()};return N`
    ${df(`Réinitialisation`,N`
    ${Dp?N`<div class="suppression-discipline">
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
        </div>`:N`<div class="ligne-atelier">
          <button class="action-danger reinitialiser"
            @click=${()=>e.autoriser(`destruction_ou_sensible`,`Saisis le PIN pour réinitialiser Movenso.`,()=>{Dp=!0,e.requestUpdate()})}>Réinitialiser Movenso…</button>
        </div>`}
    `)}
  `}var $={formulaire:null,desactivation:null,changementPin:!1,erreur:``,reveler:!1},kp={modifications:`Un PIN sera demandé pour créer, modifier, capturer, importer ou composer — la consultation reste toujours libre.`,suppressions:`Un PIN sera demandé pour supprimer, restaurer, revenir en arrière, publier ou sauvegarder — la consultation reste toujours libre.`};function Ap(e){let t=e.reglagesProtections,n=!!e.preferences.protections?.verification,r=e.preferences.protections?.verrouillage??`5min`,i=()=>{$.formulaire=null,$.desactivation=null,$.changementPin=!1,$.erreur=``,$.reveler=!1,e.requestUpdate()},a=(r,a)=>N`
    <div class="ligne-atelier">
      <span class="details" style="flex:1">${t[r]?`🔒`:`—`} ${a} : <b>${t[r]?`protégée par le PIN`:`libre`}</b></span>
      ${t[r]?N`<button class="chip-filtre" @click=${()=>{$.desactivation=r,$.formulaire=null,$.erreur=``,e.requestUpdate()}}>Désactiver…</button>`:N`<button class="chip-filtre" @click=${()=>{n?e.activerProtection(r):($.formulaire=r,$.desactivation=null,$.erreur=``,e.requestUpdate())}}>Protéger…</button>`}
    </div>
    ${$.desactivation===r?Mp(e,r,i):P}
    ${$.formulaire===r?jp(e,r,i):P}
  `;return N`
    ${df(`Protections`,N`
    ${!t.modifications&&!t.suppressions?N`<p class="fil-vide etat-protections" style="padding-top:2px">
          Aucune protection active : tout est libre sur cet appareil. Tu peux
          demander un PIN local avant certaines actions (aucun compte, aucun serveur).
        </p>`:P}
    ${a(`modifications`,`Modifications`)}
    ${a(`suppressions`,`Suppressions et opérations sensibles`)}
    ${t.modifications||t.suppressions?N`<div class="reglage-session">
            <span class="details" style="display:block;padding-bottom:4px">Garder la session déverrouillée :</span>
            <div class="chips-filtres">
              ${[[`5min`,`5 min`],[`15min`,`15 min`],[`arriere-plan`,`jusqu'à l'arrière-plan`]].map(([t,n])=>N`<button class="chip-filtre ${r===t?`actif`:``}"
                  @click=${()=>void e.choisirVerrouillage(t)}>${n}</button>`)}
            </div>
          </div>
          <div class="ligne-atelier">
            <button class="chip-filtre" @click=${()=>{$.changementPin=!$.changementPin,$.erreur=``,e.requestUpdate()}}>Changer le PIN…</button>
          </div>
          ${$.changementPin?Np(e,i):P}
          ${e.journalSecurite.length||e.echecsCumules?N`<p class="details journal-securite" style="padding-top:2px">
                Journal (session) : ${e.journalSecurite.slice(-3).join(` · `)}${e.echecsCumules?` · échecs cumulés : ${e.echecsCumules}`:``}
              </p>`:P}
          <p class="fil-vide" style="padding-top:4px">
            PIN oublié ? Aucune récupération à distance : restaure une sauvegarde,
            ou réinitialise ci-dessous. Le PIN protège les actions dans l'app,
            pas le téléphone.
          </p>`:P}
    `)}
  `}function jp(e,t,n){let r=$.reveler?`text`:`password`;return N`<div class="suppression-discipline formulaire-pin" style="border-color:var(--trait); background:var(--papier)">
    <p class="details" style="line-height:1.5">${kp[t]}</p>
    <div class="ligne-atelier" style="flex-wrap:wrap">
      <input class="champ-mini" type=${r} inputmode="numeric" autocomplete="off"
             placeholder="PIN (6 à 12 chiffres)" aria-label="Nouveau PIN">
      <input class="champ-mini" type=${r} inputmode="numeric" autocomplete="off"
             placeholder="Confirme le PIN" aria-label="Confirmation du PIN">
      <button class="chip-filtre" @click=${()=>{$.reveler=!$.reveler,e.requestUpdate()}}>
        ${$.reveler?`Masquer`:`Révéler`}</button>
    </div>
    ${$.erreur?N`<p class="details erreur-pin" role="alert" style="color:var(--accent)">${$.erreur}</p>`:P}
    <div class="chips-filtres" style="padding:4px 0 0">
      <button class="chip-filtre" @click=${n}>Annuler</button>
      <button class="bouton principal" style="padding:7px 12px; font-size:12.5px"
        @click=${async r=>{let i=r.target.closest(`.formulaire-pin`).querySelectorAll(`input`),a={pin:i[0].value,confirmation:i[1].value},o=await e.activerProtection(t,a);o?($.erreur=o,e.requestUpdate()):n()}}>Activer</button>
    </div>
  </div>`}function Mp(e,t,n){return N`<div class="suppression-discipline formulaire-pin">
    <div class="ligne-atelier" style="flex-wrap:wrap">
      <input class="champ-mini" type="password" inputmode="numeric" autocomplete="off"
             placeholder="PIN actuel" aria-label="PIN actuel">
      <button class="chip-filtre" @click=${n}>Annuler</button>
      <button class="action-danger" style="padding:6px 10px; font-size:12px"
        @click=${async r=>{let i=r.target.closest(`.formulaire-pin`).querySelector(`input`),a=await e.desactiverProtection(t,i.value);a?($.erreur=a,i.value=``,e.requestUpdate()):n()}}>Désactiver cette protection</button>
    </div>
    ${$.erreur?N`<p class="details erreur-pin" role="alert" style="color:var(--accent)">${$.erreur}</p>`:P}
  </div>`}function Np(e,t){return N`<div class="suppression-discipline formulaire-pin" style="border-color:var(--trait); background:var(--papier)">
    <div class="ligne-atelier" style="flex-wrap:wrap">
      <input class="champ-mini" type="password" inputmode="numeric" autocomplete="off" placeholder="PIN actuel" aria-label="PIN actuel">
      <input class="champ-mini" type="password" inputmode="numeric" autocomplete="off" placeholder="Nouveau PIN" aria-label="Nouveau PIN">
      <input class="champ-mini" type="password" inputmode="numeric" autocomplete="off" placeholder="Confirme le nouveau" aria-label="Confirmation du nouveau PIN">
    </div>
    ${$.erreur?N`<p class="details erreur-pin" role="alert" style="color:var(--accent)">${$.erreur}</p>`:P}
    <div class="chips-filtres" style="padding:4px 0 0">
      <button class="chip-filtre" @click=${t}>Annuler</button>
      <button class="bouton principal" style="padding:7px 12px; font-size:12.5px"
        @click=${async n=>{let r=n.target.closest(`.formulaire-pin`).querySelectorAll(`input`),i=await e.changerPin(r[0].value,r[1].value,r[2].value);i?($.erreur=i,e.requestUpdate()):t()}}>Changer le PIN</button>
    </div>
  </div>`}function Pp(e){let t=e.bibliotheque,n=e.preferences.demarrage,r=n.mode===`bibliotheque`||n.mode===`derniere`||n.mode===`discipline`,i=e.preferences.vueRelationBeta??!1,a=e.preferences.compositionsBeta??!1;return N`
    <div class="aide" style="font-size:12px; color:var(--sourdine)">L'écran ouvert au lancement de l'app.</div>
    <div class="chips-filtres" style="flex-wrap:wrap; padding:2px 0 0">
      <button class="chip-filtre ${r?`actif`:``}"
        @click=${()=>e.changerDemarrage(`bibliotheque`)}>Bibliothèque</button>
      <button class="chip-filtre ${n.mode===`favoris`?`actif`:``}"
        @click=${()=>e.changerDemarrage(`favoris`)}>Favoris</button>
      ${a?N`<button class="chip-filtre ${n.mode===`compositions`?`actif`:``}"
            @click=${()=>e.changerDemarrage(`compositions`)}>Compositions</button>`:P}
      ${i?N`<button class="chip-filtre ${n.mode===`relations`?`actif`:``}"
            @click=${()=>e.changerDemarrage(`relations`)}>Relations</button>`:P}
    </div>
    ${r?N`<div class="aide" style="font-size:12px; color:var(--sourdine); padding-top:6px">Ouvrir la Bibliothèque sur :</div>
          <div class="chips-filtres" style="flex-wrap:wrap; padding:2px 0 0">
            <button class="chip-filtre ${n.mode===`bibliotheque`?`actif`:``}"
              @click=${()=>e.changerDemarrage(`bibliotheque`)}>Toutes</button>
            <button class="chip-filtre ${n.mode===`derniere`?`actif`:``}"
              @click=${()=>e.changerDemarrage(`derniere`)}>Dernière consultée</button>
            ${t.disciplines.map(t=>N`<button class="chip-filtre ${n.mode===`discipline`&&n.disciplineId===t.id?`actif`:``}"
                @click=${()=>e.changerDemarrage(`discipline`,t.id)}>${t.nom}</button>`)}
          </div>`:P}
  `}function Fp(e,t,n){return N`
    <details class="carte-atelier sous-volet">
      <summary class="encart-entete">
        <span class="titre-atelier">${e}</span>
        ${t?N`<span class="aide-repere-pin">PIN</span>`:P}
        <span class="chevron" aria-hidden="true">▸</span>
      </summary>
      <div class="aide-volet-corps">${n}</div>
    </details>
  `}function Ip(e){let t=e.preferences.compositionsBeta||(e.preferences.vueRelationBeta??!1);return N`
    <div class="carte-atelier aide-intro">
      <p>Movenso est ta <b>bibliothèque de techniques</b>. Elle fonctionne
        <b>entièrement hors ligne</b> : pas de compte, pas de connexion obligatoire,
        et tes contenus restent sur cet appareil. Movenso s'utilise sur téléphone
        (application Android) et dans un navigateur.</p>
      <p class="details">Les volets marqués <span class="aide-repere-pin">PIN</span> demandent un code
        <b>seulement si tu as activé les protections</b> (Plus › Sécurité) — elles sont
        désactivées par défaut, et la lecture n'est jamais bloquée.</p>
    </div>

    ${Fp(`Premier démarrage`,!1,N`
      <p>Deux façons de commencer, au choix :</p>
      <ul class="apropos-liste">
        <li><b>Installer un pack</b> — Plus › <em>Packs officiels</em> : judo, karaté,
          jujitsu, JJB, taïso, yoga. Chaque pack s'annonce avant de s'installer
          (ce qu'il ajoute, ce qu'il met à jour) et se retire entièrement.</li>
        <li><b>Partir de zéro</b> — Plus › <em>Disciplines et classement</em> › ＋ :
          crée ta discipline, tes catégories et tes niveaux, puis ajoute tes
          techniques depuis la Bibliothèque.</li>
      </ul>
      <p class="details">Rien ne s'écrit sans ton accord : un import est toujours
        <b>proposé</b>, jamais appliqué d'office.</p>
    `)}

    ${Fp(`Naviguer et retrouver une technique`,!1,N`
      <ul class="apropos-liste">
        <li><b>Bibliothèque</b> : toutes tes techniques en grille. Les puces du haut
          filtrent par discipline, puis par catégorie et par niveau.</li>
        <li><b>Recherche</b> : le champ cherche dans le titre et le sous-titre, sans
          accent ni casse — « uki goshi » trouve « Uki-goshi ».</li>
        <li><b>Favoris</b> : le ♥ d'une fiche la range dans l'onglet Favoris, avec sa
          propre recherche.</li>
        <li><b>Densité</b> : le nombre de colonnes se règle dans Plus › Apparence.</li>
      </ul>
    `)}

    ${Fp(`Lire une fiche`,!1,N`
      <ul class="apropos-liste">
        <li><b>En tête</b> : l'image ou la vidéo principale, le titre et le sous-titre
          (ce que fait la technique, en français).</li>
        <li><b>Les voix</b> : chaque bloc de texte dit <em>qui parle</em> — le pack, ou
          toi. Ton carnet personnel ne part jamais dans un pack partagé.</li>
        <li><b>Points clés et variantes</b> : l'essentiel du geste, replié par défaut.</li>
        <li><b>Liens</b> : ce qui prépare, enchaîne, contre ou ressemble — avec la
          raison du lien, jamais une flèche nue.</li>
        <li><b>Alertes</b> : certaines techniques portent un repère (information,
          prudence, danger) posé par le pack.</li>
      </ul>
    `)}

    ${Fp(`Vidéos et images`,!0,N`
      <ul class="apropos-liste">
        <li><b>Filmer</b> : la caméra fonctionne hors ligne, la vidéo est écrite sur
          l'appareil et n'est <b>jamais envoyée</b> nulle part.</li>
        <li><b>Choisir un fichier</b> déjà présent, ou <b>coller un lien YouTube</b> —
          un lien reste un lien : la vidéo se lit chez l'hébergeur, rien n'est copié.</li>
        <li><b>Vignette</b> : touche l'image d'une fiche pour choisir une image, une
          vidéo, ou la retirer.</li>
        <li><b>Parc de médias</b> : Plus › Médias liste les vidéos locales, leur poids,
          et les fichiers que plus aucune fiche n'utilise.</li>
      </ul>
    `)}

    ${Fp(`Protéger l'application (PIN)`,!0,N`
      <p>Le PIN est <b>facultatif</b> et se règle dans Plus › <em>Sécurité</em>. Deux
        protections indépendantes :</p>
      <ul class="apropos-liste">
        <li><b>Modifications</b> — éditer une fiche, ajouter un média, renommer.</li>
        <li><b>Suppressions et opérations sensibles</b> — retirer, vider la corbeille,
          exporter, restaurer.</li>
      </ul>
      <p class="details">La <b>consultation n'est jamais bloquée</b>. Une fois le code
        saisi, la session reste ouverte 5 ou 15 minutes, ou jusqu'à la mise en
        arrière-plan — au choix. Le PIN vit sur cet appareil : il ne part
        <b>ni dans une sauvegarde, ni dans un pack</b>.</p>
    `)}

    ${Fp(`Partager & exporter`,!0,N`
      <p>Plus › <em>Créer ou exporter un pack</em> produit un fichier
        <code>.movpack</code> que tu peux transmettre : une discipline entière, ou une
        composition.</p>
      <p><b>Partager n'est pas sauvegarder.</b> Un pack partagé exclut par principe ton
        <b>carnet personnel</b> et tes <b>captures vidéo</b> — ce qui est à toi reste
        à toi.</p>
    `)}

    ${Fp(`Sauvegardes & historique`,!0,N`
      <ul class="apropos-liste">
        <li><b>Sauvegarde complète</b> (Plus › Sauvegardes) : bibliothèque, carnet
          personnel, favoris <b>et vidéos</b> dans un fichier — de quoi repartir sur un
          appareil vierge.</li>
        <li><b>Sauvegarde légère</b> : tout sauf les vidéos. Ce n'est
          <b>pas</b> une sauvegarde complète — les vidéos restent ici.</li>
        <li><b>Points de restauration</b> : l'application en crée un toute seule avant
          chaque geste risqué (import, suppression de discipline) — pour revenir en
          arrière sans avoir rien préparé.</li>
        <li><b>Corbeille</b> : une fiche retirée y reste restaurable tant que tu ne la
          vides pas.</li>
      </ul>
      <p class="details">⚠️ Une sauvegarde n'est pas chiffrée : elle contient ton contenu
        privé en clair. À garder pour toi ou un appareil de confiance. Les réglages
        d'appareil et le PIN ne voyagent pas — à reconfigurer après restauration.</p>
    `)}

    ${Fp(`Où sont mes données ?`,!1,N`
      <p>Dans le <b>stockage privé de l'application, sur cet appareil</b>. Aucun serveur,
        aucun compte, aucune synchronisation : personne d'autre n'y accède, et Movenso
        n'envoie rien sans un geste de ta part (les vignettes distantes sont même
        désactivées par défaut).</p>
      <p>Plus › <em>Stockage</em> dit ce que l'application occupe et si le navigateur
        garantit la <b>persistance</b> de ces données.</p>
      <p class="details">La contrepartie est réelle : <b>désinstaller l'application</b>, ou
        <b>effacer les données du site</b> dans le navigateur, efface tout. C'est
        exactement ce contre quoi une sauvegarde protège.</p>
    `)}

    ${Fp(`Sécurité de la pratique`,!1,N`
      <ul class="apropos-liste">
        <li>Les packs sont une <b>base de travail</b>, pas une référence officielle : à
          vérifier et à enrichir selon ta pratique.</li>
        <li>Ils ne remplacent pas <b>l'enseignement d'un professeur</b> — en cas
          d'écart, ce que dit ton enseignant prime.</li>
        <li>Certaines techniques portent une <b>alerte</b> : lis-la avant d'essayer.</li>
        <li>Adapte à ton niveau et à celui de ton partenaire ; arrête en cas de douleur
          aiguë, de vertige ou de malaise.</li>
      </ul>
    `)}

    ${t?Fp(`Compositions et relations`,!1,N`
          <ul class="apropos-liste">
            ${e.preferences.compositionsBeta?N`<li><b>Composer une séance</b> : onglet Compositions › Créer. En lecture,
                  ▶ déroule le pas-à-pas avec le chrono (voix et bips optionnels).</li>`:P}
            ${e.preferences.vueRelationBeta??!1?N`<li><b>Naviguer par les liens</b> : quatre vues d'un même graphe.
                  <button class="chip-filtre" style="vertical-align:1px" @click=${()=>e.ouvrirBienvenueRelations()}>🔗 Découvrir Relations</button></li>`:P}
          </ul>
          <p class="details">Ces deux espaces sont en bêta : ils s'activent dans
            Plus › Réglages avancés.</p>
        `):P}
  `}function Lp(e){let t=e.bibliotheque;if(t.disciplines.length===0)return N`
      <div class="carte-atelier">
        ${uf(`Disciplines`,`discipline`,e)}
        ${lf.has(`discipline`)?_f(e):P}
        <p class="fil-vide" style="padding:6px 2px 0">Aucune discipline — touche ＋ pour en créer une, ou importe un pack.</p>
      </div>
    `;let n=e.disciplineGestion&&t.disciplines.some(t=>t.id===e.disciplineGestion)?e.disciplineGestion:t.disciplines[0].id,r=t.disciplines.find(e=>e.id===n),i={reordonner:(t,n)=>e.deplacerDisciplineVers(t,n),enregistrer:()=>void e.enregistrerReordre(),ordre:()=>t.disciplines.map(e=>e.id),nom:e=>t.disciplines.find(t=>t.id===e)?.nom??`la discipline`};return N`
    <div class="carte-atelier">
      ${uf(`Disciplines`,`discipline`,e)}
      ${lf.has(`discipline`)?_f(e):P}
      <div class="chips-glissables chips-disciplines" aria-label="Disciplines">
        ${t.disciplines.map(t=>N`<span class="chip-glissable ${t.id===r.id?`actif`:``}">
            ${_a(e,t.id,i)}
            <input class="champ-mini chip-gestion" .value=${t.nom} title=${t.nom} aria-label="Nom de la discipline « ${t.nom} »"
              @focus=${()=>{e.disciplineGestion!==t.id&&(e.disciplineGestion=t.id,e.requestUpdate())}}
              @change=${n=>void e.majNomDiscipline(t.id,n.target.value)}>
            <button class="bouton-icone" aria-label="Supprimer « ${t.nom} »" title="Supprimer"
              @click=${()=>bf(e,t)}>✕</button>
          </span>
          ${xf(e,t)}`)}
      </div>
    </div>
    ${Sf(e,r)}
    ${Cf(e,r)}
  `}function Rp(e){return e.bibliotheque.techniques.length===0?N`<p class="fil-vide" style="padding-top:10px">Aucune technique pour l'instant.</p>`:If(e,pf.disciplineId)}var zp={packs:`Disciplines et classement`,techniques:`Gestion des techniques`,atraiter:`À traiter`,doublons:`Doublons potentiels`,medias:`Médias`,relations:`Relations entre techniques`,corbeille:`Corbeille`,"packs-officiels":`Packs officiels`,publier:`Créer ou exporter un pack`,sauvegardes:`Sauvegardes`,stockage:`Stockage`,securite:`Sécurité`,apparence:`Apparence`,avance:`Réglages avancés`,diagnostic:`Diagnostic et maintenance`,apropos:`À propos`,aide:`Aide`};function Bp(e,t){switch(t){case`packs`:return Lp(e);case`stockage`:return pp(e);case`aide`:return Ip(e);case`techniques`:return Rp(e);case`atraiter`:return zf(e);case`doublons`:return Kf(e);case`medias`:return Rf(e);case`relations`:return Hf(e);case`corbeille`:return Gf(e);case`packs-officiels`:return mf(e.catalogueOfficiel,{installer:t=>void e.installerPackOfficiel(t),recharger:()=>e.rechargerCataloguePacks()});case`publier`:return fp(e);case`sauvegardes`:return mp(e);case`securite`:return hp(e);case`apparence`:return gp(e);case`avance`:return _p(e);case`diagnostic`:return Cp(e);case`apropos`:return Sp(e)}}function Vp(e,t){return N`
    <div class="ecran">
      <div class="barre">
        <button class="bouton-icone" aria-label="Retour" @click=${()=>e.retour()}>
          <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M15 5l-7 7 7 7"/></svg>
        </button>
        <span class="contexte">${zp[t]}</span>
      </div>
      ${Bp(e,t)}
    </div>
  `}function Hp(e){let t=e.bibliotheque,n=new Set;for(let e of t.techniques)F(e)!==`local`&&n.add(F(e));for(let e of t.contributions)F(e)!==`local`&&n.add(F(e));n.size;let r=t.disciplines.length,i=t.techniques.length,a=t.disciplines.reduce((e,t)=>e+t.familles.length,0),o=t.disciplines.reduce((e,t)=>e+t.niveaux.length,0),s=e.doublonsPotentiels().length,c=e.taillesVideos.size,l=new Set(t.contributions.filter(e=>e.techniqueId&&e.medias.length).map(e=>e.techniqueId)),u=t.contributions.filter(e=>e.techniqueId===null).length,d=t.techniques.filter(e=>!l.has(e.id)).length,f=t.techniques.filter(e=>!e.familleId&&e.niveauxIds.length===0).length,p=u+d+f+e.mediasManquants.length+e.videosOrphelines.length+s+(t.conflitsContributions??[]).length,m=t.techniques.reduce((e,t)=>e+t.relations.length,0),h=(t.corbeille??[]).length,g=e.sauvegardes[0],_=g?(g.replace(`.json`,``).split(`__`)[0]??``).slice(0,10):``,v=e.infoEspace,y=v?v.usage>=1e6?`${(v.usage/1e6).toFixed(1)} Mo utilisés`:`${Math.max(1,Math.round(v.usage/1e3))} Ko utilisés`:``,b=e.preferences.protections,x=b&&(b.modifications||b.suppressions)?`PIN actif`:`Modification libre`,S=e.preferences.theme??`auto`,C=S===`auto`?`Auto (système)`:S===`clair`?`Jour`:`Nuit`,w=e.preferences.modeAvance??!1,T=[w?`mode avancé`:null,e.preferences.vueRelationBeta??!1?`Relations`:null,e.preferences.compositionsBeta??!1?`Compositions`:null].filter(Boolean),E=T.length?`Actifs : ${T.join(` · `)}`:`Rien d'activé`;return{bibliotheque:[{section:`packs`,icone:`📚`,fond:`var(--indigo-doux, #e7ecf3)`,titre:`Disciplines et classement`,etat:`${r} discipline${r>1?`s`:``} · ${a} catégorie${a>1?`s`:``} · ${o} niveau${o>1?`x`:``}`},{section:`techniques`,icone:`🥋`,fond:`#e5ece6`,titre:`Gestion des techniques`,etat:`${i} technique${i>1?`s`:``}`},{section:`atraiter`,icone:`🩹`,fond:`#efe3d6`,titre:`À traiter`,etat:p?`${p} à traiter`:`Rien à traiter`},{section:`corbeille`,icone:`🗑`,fond:`#efe3d6`,titre:`Corbeille`,etat:h?`${h} fiche${h>1?`s`:``} restaurable${h>1?`s`:``}`:`Vide`},...w?[{section:`doublons`,icone:`🔀`,fond:`#efe3d6`,titre:`Doublons potentiels`,etat:s?`${s} à examiner`:`Aucun doublon détecté`},{section:`medias`,icone:`🎞`,fond:`#e5ece6`,titre:`Médias`,etat:c?`${c} vidéo${c>1?`s`:``} locale${c>1?`s`:``}`:`Parc de médias`}]:[],{section:`relations`,icone:`🔗`,fond:`#e8e4ef`,titre:`Relations entre techniques`,etat:`${m} relation${m>1?`s`:``}`}],echange:[{section:`packs-officiels`,icone:`🧳`,fond:`#e5ece6`,titre:`Packs officiels`,etat:`Découvrir et installer les packs publiés`},{action:e=>e.choisirPackAImporter(),icone:`📂`,fond:`#e5ece6`,titre:`Importer un pack`,etat:`Depuis un fichier .movpack reçu`},{section:`publier`,icone:`📤`,fond:`#efe3d6`,titre:`Créer ou exporter un pack`,etat:`Produire un fichier partageable`},{section:`stockage`,icone:`📦`,fond:`#e5ece6`,titre:`Stockage`,etat:y||`Espace occupé et persistance`},{section:`sauvegardes`,icone:`💾`,fond:`var(--indigo-doux, #e7ecf3)`,titre:`Sauvegardes`,etat:_?`dernière sauvegarde ${_}`:`aucune sauvegarde`}],preferences:[{section:`securite`,icone:`🔒`,fond:`#e8e4ef`,titre:`Sécurité`,etat:x},{section:`apparence`,icone:`🎨`,fond:`#efe3d6`,titre:`Apparence`,etat:C},{section:`avance`,icone:`🧪`,fond:`#e8e4ef`,titre:`Réglages avancés`,etat:E},...w?[{section:`diagnostic`,icone:`🩺`,fond:`#e5ece6`,titre:`Diagnostic et maintenance`}]:[],{section:`aide`,icone:`❓`,fond:`#e5ece6`,titre:`Aide`,etat:`Prise en main et gestes qui sauvent`},{section:`apropos`,icone:`ℹ️`,fond:`var(--indigo-doux, #e7ecf3)`,titre:`À propos`,etat:`Movenso · v${Di}`}]}}function Up(e,t){return N`<button class="ligne-menu" @click=${()=>t.section?e.ouvrirPlusSection(t.section):t.action?.(e)}>
    <span class="ligne-menu-icone" style="background:${t.fond}" aria-hidden="true">${t.icone}</span>
    <span class="ligne-menu-corps">
      <span class="ligne-menu-titre">${t.titre}</span>
      ${t.etat?N`<span class="ligne-menu-etat">${t.etat}</span>`:P}
    </span>
    <span class="chevron" aria-hidden="true">›</span>
  </button>`}function Wp(e){let t=Hp(e),n=(t,n)=>N`
    <div class="menu-section-titre">${t}</div>
    <div class="menu-groupe">${n.map(t=>Up(e,t))}</div>`;return N`
    <div class="ecran plus">
      <header class="marque"><div style="flex:1"><div class="nom">Plus</div>
        <div class="devise">Gérer, importer, sauvegarder, régler.</div></div></header>
      ${n(`Ma bibliothèque`,t.bibliotheque)}
      ${n(`Importer, exporter et sauvegarder`,t.echange)}
      ${n(`Préférences`,t.preferences)}
    </div>
  `}function Gp(e){let t=e.capture,n=t.question?qp(e):t.etape===`contenu`?Yp(e):t.etape===`apercu`?Jp(e):t.etape===`note`?Xp(e):Zp(e),r=t.rattacherSeul?`Rattacher`:`Capturer`;return N`
    <div class="voile" @click=${()=>e.fermerCapture()}></div>
    <div class="feuille" role="dialog" aria-modal="true" tabindex="-1" aria-label=${r}>
      <div class="prise"></div>
      <h2>${r}</h2>
      <div class="geste">${t.question?`Que faire de cette capture ?`:t.rattacherSeul?`Un seul geste`:t.etape===`contenu`?`Geste 1 / 3 — le contenu`:t.etape===`apercu`?`Geste 1 / 3 — vérifier le contenu`:t.etape===`note`?`Geste 2 / 3 — la note`:`Geste 3 / 3 — sais-tu où le ranger ?`}</div>
      ${n}
    </div>
  `}function Kp(e,t){let n=document.createElement(`input`);n.type=`file`,n.accept=`video/*`,t&&n.setAttribute(`capture`,`environment`),n.onchange=()=>{let r=n.files?.[0];!r||!e.capture||(e.capture.apercuUrl&&URL.revokeObjectURL(e.capture.apercuUrl),e.capture={...e.capture,video:r,apercuUrl:URL.createObjectURL(r),camera:t,etape:`apercu`})},n.click()}function qp(e){let t=e.capture,n=(t.provenance??`personnel`)!==`ressource`||(t.attribution??``).trim()!==``;return N`
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
  `}function Jp(e){let t=e.capture,n=n=>{t.apercuUrl&&URL.revokeObjectURL(t.apercuUrl),e.capture={...t,apercuUrl:void 0,...n}};return N`
    ${t.video&&t.apercuUrl?N`<div class="media-video"><video src=${t.apercuUrl} controls playsinline autoplay muted></video></div>
          <div class="apercu-infos">${(t.video.size/1e6).toFixed(1)} Mo — rien n'est encore enregistré</div>`:P}
    ${t.lien?N`<div class="apercu-lien">
            <span class="joint">🔗 ${t.lien}</span>
            <div class="apercu-infos">${(e=>{if(/youtube\.com|youtu\.be/.test(e))return`YouTube — lecture en ligne`;try{return`${new URL(e).hostname} — lecture en ligne`}catch{return`lien — lecture en ligne`}})(t.lien)} — l'URL est conservée telle quelle</div>
          </div>`:P}
    <div class="actions">
      <button class="bouton" @click=${()=>n({video:void 0,lien:void 0,etape:`contenu`})}>
        Abandonner
      </button>
      ${t.video?N`<button class="bouton" @click=${()=>Kp(e,t.camera??!1)}>
            ${t.camera?`Refilmer`:`Choisir un autre fichier`}
          </button>`:N`<button class="bouton" @click=${()=>n({saisieLien:!0,etape:`contenu`})}>
            Modifier
          </button>`}
      <button class="bouton principal" @click=${()=>n({etape:`note`})}>Utiliser</button>
    </div>
  `}function Yp(e){let t=e.capture;return N`
    <div class="choix-double">
      <button @click=${()=>Kp(e,!0)}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="6" width="14" height="12" rx="2"/><path d="m16 10 6-3v10l-6-3"/></svg>
        Filmer <span class="indice">caméra, hors ligne</span>
      </button>
      <button @click=${()=>e.capture={...e.capture,etape:`note`}}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>
        Noter <span class="indice">un mot peut suffire</span>
      </button>
    </div>
    <div class="choix-secondaire">
      <button class="action-douce" @click=${()=>Kp(e,!1)}>
        ⤒ Ajouter une vidéo existante <span>(depuis l'appareil, stockée hors ligne)</span>
      </button>
      ${t.saisieLien?N`<div class="creation-discipline" style="margin-top:6px">
            <input placeholder="Coller un lien (YouTube ou autre)…" aria-label="Lien de la vidéo" autofocus .value=${t.lien??``}
                   @keydown=${n=>{if(n.key===`Enter`){let r=n.target.value.trim();r&&(e.capture={...t,lien:r,etape:`apercu`})}}}>
            <button class="bouton principal"
              @click=${n=>{let r=n.target.parentElement.querySelector(`input`).value.trim();r&&(e.capture={...t,lien:r,etape:`apercu`})}}>OK</button>
          </div>`:N`<button class="action-douce" @click=${()=>e.capture={...t,saisieLien:!0}}>
            🔗 Coller un lien <span>(YouTube ou autre — lecture en ligne)</span>
          </button>`}
    </div>
  `}function Xp(e){let t=e.capture,n=n=>{e.capture={...t,note:n.target.value}},r=t.provenance??`personnel`,i=n=>e.capture={...t,provenance:n,...n===`personnel`?{attribution:``}:{}},a=r!==`ressource`||(t.attribution??``).trim()!==``;return N`
    ${t.video?N`<span class="joint">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
          vidéo jointe (${(t.video.size/1e6).toFixed(1)} Mo)
        </span><div style="height:10px"></div>`:P}
    ${t.lien?N`<span class="joint">🔗 ${t.lien}</span><div style="height:10px"></div>`:P}
    <textarea class="champ-note"
              placeholder="Un mot peut suffire (« la banane »). Une vidéo peut suffire. Développe si tu veux."
              .value=${t.note} @input=${n} autofocus></textarea>
    ${t.autreProvenance?N`<div class="chips-filtres" style="padding:10px 0 0" aria-label="Qui affirme ceci ?">
            <button class="chip-filtre ${r===`personnel`?`actif`:``}" @click=${()=>i(`personnel`)}>Moi</button>
            <button class="chip-filtre ${r===`enseignement`?`actif`:``}" @click=${()=>i(`enseignement`)}>Mon prof / club</button>
            <button class="chip-filtre ${r===`ressource`?`actif`:``}" @click=${()=>i(`ressource`)}>Une ressource</button>
          </div>
          ${r===`personnel`?P:N`<div style="margin-top:8px">
                <input class="champ-note" style="min-height:0" aria-label=${r===`enseignement`?`Qui l'enseigne ?`:`Source`}
                       placeholder=${r===`enseignement`?`Qui l'enseigne ? (ex. Club, Sensei Dupont)`:`Source (obligatoire — ex. chaîne, livre)`}
                       .value=${t.attribution??``}
                       @input=${t=>e.capture={...e.capture,attribution:t.target.value}}>
              </div>`}`:N`<button class="action-douce autre-provenance" style="margin-top:10px"
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
  `}function Zp(e){let t=e.capture,n=e.bibliotheque,r=!t.rattacherSeul&&e.ecran.type===`fiche`?e.technique(e.ecran.techniqueId):void 0,i=t.rechercheRattache??``,a=t.chercherPartout?void 0:t.disciplineChoisieId,o=i.trim()?jr(n,i,30).filter(e=>!a||e.disciplineId===a).slice(0,6):[],s=e=>n.disciplines.find(t=>t.id===e)?.nom??``,c=n=>{e.capture={...t,rechercheRattache:n.target.value}},l=t.rattacherSeul?n.contributions.find(e=>e.id===t.rattacherSeul):void 0;return N`
    ${l?N`<div class="reprise-contenu">
          <textarea class="champ-note" style="min-height:52px" .value=${l.description??``}
            placeholder="Ton mot, ton libellé — modifiable ici"
            @change=${t=>void e.majContribution(l.id,t.target.value)}></textarea>
          ${l.medias.map(t=>t.type===`local`?N`<movenso-video-locale .app=${e} .mediaId=${t.id}></movenso-video-locale>`:N`<span class="joint" style="margin-top:6px">🔗 ${t.ref}</span>`)}
          ${l.provenance===`personnel`?P:N`<div class="apercu-infos">
                ${l.provenance===`enseignement`?`Enseignement`:`Ressource`}${l.attribution?` · ${l.attribution}`:``}
                — la provenance choisie est conservée
              </div>`}
          <button class="action-douce" style="margin:8px 0"
            @click=${()=>{e.demanderConfirmation({titre:`Supprimer cette capture ?`,corps:`Réversible — un snapshot est conservé.`,bouton:`Supprimer la capture`,action:()=>{e.supprimerContribution(l.id),e.fermerCapture()}})}}>
            ✕ Supprimer cette capture <span>réversible — snapshot conservé</span>
          </button>
        </div>`:P}
    ${r?N`<span class="joint">Suggestion : ${r.nom} (fiche ouverte)</span><div style="height:8px"></div>`:P}
    ${t.compositionCible&&!t.rattacherSeul?N`<button class="action-douce" style="width:100%; margin-bottom:8px"
          @click=${()=>void e.terminerCaptureRepere()}>
          ⧉ Ajouter comme repère à « ${e.bibliotheque.compositions.find(e=>e.id===t.compositionCible)?.nom??`la composition`} »
          <span>le mot et la vidéo rejoignent la composition, pas une fiche</span>
        </button>`:P}
    <div class="recherche" style="margin:0">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.8-3.8"/></svg>
      <input placeholder="À quelle technique ?" aria-label="Chercher la technique à rattacher" autocomplete="off" .value=${i} @input=${c}>
    </div>
    <div class="resultats" style="padding:6px 0 0">
      ${r&&!i.trim()?N`<button class="resultat" @click=${()=>void e.terminerCapture(r.id)}>
            <span>${r.nom}</span><span class="jp">${r.nomTraditionnel??``}</span><span class="fam">suggérée</span>
          </button>`:P}
      ${o.map(n=>N`<button class="resultat" @click=${()=>void e.terminerCapture(n.id)}>
          ${U(e,n)}
          <span class="resultat-nom">${n.nom}</span><span class="jp">${n.nomTraditionnel??``}</span>
          ${t.chercherPartout?N`<span class="fam">${s(n.disciplineId)}</span>`:P}
        </button>`)}
      ${i.trim()&&o.length===0?N`<p class="fil-vide" style="padding:6px 0 0">
            Rien de ce nom${a?` dans ${s(a)}`:``} — crée-la ci-dessous.
          </p>`:P}
      ${a&&i.trim()?N`<button class="action-douce" style="margin-top:6px"
            @click=${()=>e.capture={...t,chercherPartout:!0}}>
            Chercher dans toutes les disciplines <span>(au-delà de ${s(a)})</span>
          </button>`:P}
      ${Qp(e,i.trim())}
    </div>
    <div class="actions">
      <button class="bouton" @click=${()=>e.fermerCapture()}>Annuler</button>
      ${t.rattacherSeul?P:N`<button class="bouton" title="Tu la retrouveras dans Plus › À traiter › Captures à rattacher"
            @click=${()=>void e.terminerCapture(null)}>Garder pour plus tard</button>`}
    </div>
  `}function Qp(e,t){let n=e.capture,r=e.bibliotheque,i=(n.nouveauNom??t).trim(),a=e.ecran.type===`fiche`?e.technique(e.ecran.techniqueId)?.disciplineId:void 0,o=r.disciplines.length>1&&!a,s=n.disciplineChoisieId??a??r.disciplines[0]?.id;return N`
    <div class="section-titre" style="padding:12px 4px 2px">Ou créer une nouvelle technique</div>
    <div style="padding:2px 0">
      <input class="champ-note champ-nouveau-nom" style="min-height:0" aria-label="Nom de la nouvelle technique"
             placeholder="Nom de la nouvelle technique…"
             .value=${n.nouveauNom??t}
             @input=${t=>e.capture={...n,nouveauNom:t.target.value}}>
    </div>
    ${r.disciplines.length===0?N`<div style="padding:6px 0 2px">
          <input class="champ-note champ-discipline" style="min-height:0" aria-label="Discipline" placeholder="Dans quelle discipline ? (ex. Judo, Boxe…)"
                 .value=${n.disciplineNom??``}
                 @input=${t=>e.capture={...n,disciplineNom:t.target.value}}>
        </div>`:P}
    ${o?N`<div class="chips-filtres" style="padding:8px 0 2px">
          ${r.disciplines.map(t=>N`<button class="chip-filtre ${s===t.id?`actif`:``}"
              @click=${()=>e.capture={...n,disciplineChoisieId:t.id}}>${t.nom}</button>`)}
        </div>`:P}
    <button class="resultat creer" ?disabled=${!i} @click=${()=>{i&&e.terminerCapture(null,i,{...s?{disciplineId:s}:{},...n.disciplineNom?{disciplineNom:n.disciplineNom}:{}})}}>
      <span>＋ Créer ${i?`« ${i} »`:`cette technique`}</span><span class="fam">et y rattacher la capture</span>
    </button>
  `}function $p(e){let t=e.ajoutMedia;if(t.mode===`contribution`)return N`
      <div class="voile" @click=${()=>e.ajoutMedia=null}></div>
      <div class="feuille" role="dialog" aria-modal="true" tabindex="-1" aria-label="Ajouter du contenu">
        <div class="prise"></div>
        <h2>Ajouter du contenu</h2>
        <div class="geste">De qui vient ce contenu ? — la technique est déjà connue</div>
        ${em(e)}
      </div>
    `;let n=t.fichier!==void 0||t.lien!==void 0;return N`
    <div class="voile" @click=${()=>e.ajoutMedia=null}></div>
    <div class="feuille" role="dialog" aria-modal="true" tabindex="-1" aria-label="Ajouter un média">
      <div class="prise"></div>
      <h2>Ajouter un média</h2>
      <div class="geste">${n?`Qui a produit ce média ?`:`Le contenu — filmer, choisir ou lier`}</div>
      ${n?rm(e):nm(e)}
    </div>
  `}function em(e){let t=e.ajoutMedia,n=n=>e.ajoutMedia={...t,provenance:n,...n===`personnel`?{attribution:``}:{}},r=((t.texte??``).trim()!==``||t.fichier!==void 0||(t.lien??``).trim()!==``)&&(t.provenance!==`ressource`||(t.attribution??``).trim()!==``);return N`
    <div class="chips-filtres" style="padding:4px 0 0" aria-label="De qui vient ce contenu ?">
      <button class="chip-filtre ${t.provenance===`personnel`?`actif`:``}" @click=${()=>n(`personnel`)}>Moi</button>
      <button class="chip-filtre ${t.provenance===`enseignement`?`actif`:``}" @click=${()=>n(`enseignement`)}>Mon prof / club</button>
      <button class="chip-filtre ${t.provenance===`ressource`?`actif`:``}" @click=${()=>n(`ressource`)}>Une ressource</button>
    </div>
    ${t.provenance===`personnel`?P:N`<div style="margin-top:8px">
          <input class="champ-note" style="min-height:0" aria-label=${t.provenance===`enseignement`?`Qui l'enseigne ?`:`Source`}
                 placeholder=${t.provenance===`enseignement`?`Qui l'enseigne ? (ex. Club, Sensei Dupont)`:`Source (obligatoire — ex. chaîne, livre)`}
                 .value=${t.attribution??``}
                 @input=${t=>e.ajoutMedia={...e.ajoutMedia,attribution:t.target.value}}>
        </div>`}
    <textarea class="champ-note" style="margin-top:8px; min-height:72px"
              placeholder="Texte — explication, points d'attention… (un média peut suffire)"
              .value=${t.texte??``}
              @input=${t=>e.ajoutMedia={...e.ajoutMedia,texte:t.target.value}}></textarea>
    ${t.fichier?N`<span class="joint" style="margin-top:6px">🎞 vidéo jointe (${(t.fichier.size/1e6).toFixed(1)} Mo)</span>`:P}
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
  `}function tm(e,t){let n=document.createElement(`input`);n.type=`file`,n.accept=`video/*`,t&&n.setAttribute(`capture`,`environment`),n.onchange=()=>{let t=n.files?.[0];t&&e.ajoutMedia&&(e.ajoutMedia={...e.ajoutMedia,fichier:t})},n.click()}function nm(e){let t=e.ajoutMedia;return N`
    <div class="choix-double">
      <button @click=${()=>tm(e,!0)}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="6" width="14" height="12" rx="2"/><path d="m16 10 6-3v10l-6-3"/></svg>
        Filmer maintenant <span class="indice">caméra, hors ligne</span>
      </button>
      <button @click=${()=>tm(e,!1)}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3v12"/><path d="m7 8 5-5 5 5"/><rect x="4" y="15" width="16" height="6" rx="2"/></svg>
        Une vidéo de l'appareil <span class="indice">stockée hors ligne</span>
      </button>
    </div>
    <div class="choix-secondaire">
      ${t.saisieLien?N`<div class="creation-discipline" style="margin-top:6px">
            <input placeholder="Coller un lien (YouTube ou autre)…" aria-label="Lien de la vidéo" autofocus
                   @keydown=${n=>{if(n.key===`Enter`){let r=n.target.value.trim();r&&(e.ajoutMedia={...t,lien:r})}}}>
            <button class="bouton principal"
              @click=${n=>{let r=n.target.parentElement.querySelector(`input`).value.trim();r&&(e.ajoutMedia={...t,lien:r})}}>OK</button>
          </div>`:N`<button class="action-douce" @click=${()=>e.ajoutMedia={...t,saisieLien:!0}}>
            🔗 Coller un lien <span>(YouTube ou autre — lecture en ligne)</span>
          </button>`}
    </div>
    <div class="actions">
      <button class="bouton" @click=${()=>e.ajoutMedia=null}>Annuler</button>
    </div>
  `}function rm(e){let t=e.ajoutMedia,n=n=>e.ajoutMedia={...t,provenance:n,...n===`personnel`?{attribution:``}:{}},r=t.provenance!==`ressource`||(t.attribution??``).trim()!==``;return N`
    ${t.fichier?N`<span class="joint">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
          vidéo jointe (${(t.fichier.size/1e6).toFixed(1)} Mo)
        </span><div style="height:10px"></div>`:P}
    ${t.lien?N`<span class="joint">🔗 ${t.lien}</span><div style="height:10px"></div>`:P}
    <div class="chips-filtres" style="padding:4px 0 0" aria-label="Qui a produit ce média ?">
      <button class="chip-filtre ${t.provenance===`personnel`?`actif`:``}" @click=${()=>n(`personnel`)}>Moi</button>
      <button class="chip-filtre ${t.provenance===`enseignement`?`actif`:``}" @click=${()=>n(`enseignement`)}>Mon prof / club</button>
      <button class="chip-filtre ${t.provenance===`ressource`?`actif`:``}" @click=${()=>n(`ressource`)}>Une ressource</button>
    </div>
    ${t.provenance===`personnel`?P:N`<div style="margin-top:8px">
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
  `}function im(e){let t=e.ajouter;return N`
    <div class="voile" @click=${()=>e.ajouter=null}></div>
    <div class="feuille" role="dialog" aria-modal="true" tabindex="-1" aria-label="Ajouter">
      <div class="prise"></div>
      <h2>Que veux-tu ajouter ?</h2>
      ${t.creation?N`<div class="geste">Son nom et sa discipline suffisent.</div>`:P}
      ${t.creation?om(e):am(e)}
    </div>
  `}function am(e){let t=e.ajouter;return N`
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
  `}function om(e){let t=e.ajouter,n=e.bibliotheque,r=t.disciplineChoisieId??t.disciplineId??n.disciplines[0]?.id,i=n.disciplines.find(e=>e.id===r),a=(t.nomTechnique??``).trim(),o=a!==``&&(n.disciplines.length>0?r!==void 0:(t.disciplineNom??``).trim()!==``),s=r&&a?Hr(n,r,a):{exacte:null,proches:[]},c=()=>({...t.appellation?.trim()?{nomTraditionnel:t.appellation.trim()}:{},...t.familleId?{familleId:t.familleId}:{},...t.niveauxIds?.length?{niveauxIds:t.niveauxIds}:{}}),l=async()=>{let i=n.disciplines.length?r:void 0;i||=await e.creerDiscipline(t.disciplineNom.trim())??void 0,i&&(e.ajouter=null,await e.creerTechnique(i,a,c()))},u=async()=>{if(o){if(s.exacte){e.demanderConfirmation({titre:`« ${s.exacte.nom} » existe déjà dans ${i?.nom??`cette discipline`}`,corps:`Créer quand même une technique distincte ?`,bouton:`Créer quand même`,action:()=>{l()}});return}await l()}},d=t=>{e.ajouter=null,e.ouvrirFiche(t)},f=n=>{let r=t.niveauxIds??[];e.ajouter={...t,niveauxIds:r.includes(n)?r.filter(e=>e!==n):[...r,n]}},p=(i?.familles.length??0)>0||(i?.niveaux.length??0)>0;return N`
    <div style="padding:2px 0">
      <input class="champ-note champ-nouveau-nom" style="min-height:0" autofocus aria-label="Nom de la technique"
             placeholder="Nom de la technique…"
             .value=${t.nomTechnique??``}
             @input=${n=>e.ajouter={...t,nomTechnique:n.target.value}}
             @keydown=${e=>{e.key===`Enter`&&u()}}>
    </div>
    ${s.exacte||s.proches.length?N`<div class="doublons">
          ${s.exacte?N`<div class="doublon-exacte">« ${s.exacte.nom} » existe déjà dans ${i?.nom??`cette discipline`}.</div>`:N`<div>Technique similaire déjà présente :</div>`}
          <div class="chips-filtres" style="padding:6px 0 0">
            ${[...s.exacte?[s.exacte]:[],...s.proches].map(e=>N`<button class="chip-filtre" @click=${()=>d(e.id)}>Utiliser « ${e.nom} »</button>`)}
          </div>
        </div>`:P}
    ${t.disciplineId===void 0&&n.disciplines.length>0?N`<div class="chips-filtres" style="padding:8px 0 2px" aria-label="Dans quelle discipline ?">
          ${n.disciplines.map(n=>N`<button class="chip-filtre ${r===n.id?`actif`:``}"
              @click=${()=>e.ajouter={...t,disciplineChoisieId:n.id,familleId:void 0,niveauxIds:[]}}>${n.nom}</button>`)}
        </div>`:P}
    ${n.disciplines.length===0?N`<div style="padding:6px 0 2px">
          <input class="champ-note champ-discipline" style="min-height:0" aria-label="Discipline"
                 placeholder="Dans quelle discipline ? (ex. Judo, Boxe…)"
                 .value=${t.disciplineNom??``}
                 @input=${n=>e.ajouter={...t,disciplineNom:n.target.value}}>
        </div>`:P}
    ${p?t.classer?N`<div class="classer-maintenant">
            ${i.familles.length?N`<div class="section-titre" style="padding:8px 2px 2px">Famille</div>
                  <div class="chips-filtres">
                    ${i.familles.map(n=>N`<button class="chip-filtre ${t.familleId===n.id?`actif`:``}"
                        @click=${()=>e.ajouter={...t,familleId:t.familleId===n.id?void 0:n.id}}>${n.nom}</button>`)}
                  </div>`:P}
            ${i.niveaux.length?N`<div class="section-titre" style="padding:8px 2px 2px">Niveau</div>
                  <div class="chips-filtres">
                    ${i.niveaux.map(e=>N`<button class="chip-filtre ${t.niveauxIds?.includes(e.id)?`actif`:``}"
                        @click=${()=>f(e.id)}>${e.nom}</button>`)}
                  </div>`:P}
            <button class="action-douce" style="margin-top:8px"
              @click=${()=>e.ajouter={...t,classer:!1,familleId:void 0,niveauxIds:[]}}>
              Je le ferai plus tard <span>la technique se crée sans classement</span>
            </button>
          </div>`:N`<button class="action-douce" style="margin-top:8px" @click=${()=>e.ajouter={...t,classer:!0}}>
            Classer maintenant <span>(facultatif — famille, niveau)</span>
          </button>`:P}
    <div class="actions">
      <button class="bouton" @click=${()=>e.ajouter={...t,creation:!1}}>← Retour</button>
      <button class="bouton principal" ?disabled=${!o} @click=${()=>void u()}>
        ${s.exacte||s.proches.length?`Créer quand même`:`Créer la technique`}
      </button>
    </div>
  `}var sm=class extends je{static properties={app:{attribute:!1},mediaId:{attribute:!1},url:{state:!0}};constructor(){super(),this.mediaId=``,this.url=void 0}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.app.stockage.urlVideo(this.mediaId).then(e=>this.url=e)}disconnectedCallback(){super.disconnectedCallback(),this.url&&URL.revokeObjectURL(this.url)}render(){return this.url===void 0?P:this.url===null?N`<div class="video-absente" style="font-size:12.5px;color:var(--sourdine)">
        Vidéo introuvable sur cet appareil.
        <button class="action-douce" style="margin-top:4px" @click=${()=>this.app.ouvrirPlusSection(`medias`)}>
          Vérifier <span>(Plus — Médias)</span>
        </button>
      </div>`:N`<div class="media-video"><video src=${this.url} controls playsinline preload="metadata"
      @play=${e=>{document.querySelectorAll(`video`).forEach(t=>{t!==e.target&&t.pause()}),this.app.mediasDeplies.size&&(this.app.mediasDeplies=new Set,this.app.requestUpdate())}}></video></div>`}};customElements.define(`movenso-video-locale`,sm);var cm=class extends je{static properties={bibliotheque:{state:!0},ecran:{state:!0},capture:{state:!0},ajoutMedia:{state:!0},ajouter:{state:!0},creationCompo:{state:!0},ajoutPas:{state:!0},editionPas:{state:!0},editionLien:{state:!0},menuComposition:{state:!0},partagePreparation:{state:!0},enregistrementMedia:{state:!0},toast:{state:!0},toastAlerte:{state:!0},confirmation:{state:!0},catalogueOfficiel:{state:!0},occupe:{state:!0},preferences:{state:!0},erreurDemarrage:{state:!0}};annulationOccupe=null;rechercheGlobale=``;pratiqueDeplie={reprendre:!1,favoris:!1};mediasDeplies=new Set;creationDiscipline=!1;filtres={disciplineId:null,niveauId:null,familleId:null,source:null,favorisSeuls:!1,texte:``};fusionDoublon=null;doublonOuvert=null;disciplineGestion=null;stockage=new Xd;#e;#t=0;constructor(){super(),this.bibliotheque=null,this.ecran={type:`bibliotheques`},this.capture=null,this.ajoutMedia=null,this.ajouter=null,this.creationCompo=null,this.ajoutPas=null,this.editionPas=null,this.editionLien=null,this.menuComposition=null,this.partagePreparation=null,this.enregistrementMedia=null,this.toast=null,this.toastAlerte=!1,this.confirmation=null,this.catalogueOfficiel=null,this.occupe=null,this.preferences=Wd(),this.erreurDemarrage=null}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.#n(),document.addEventListener(`visibilitychange`,()=>{document.visibilityState===`hidden`&&(this.preferences.protections?.verrouillage??`5min`)===`arriere-plan`&&this.verrouiller(!0),this.ecran.type===`entrainement`&&(document.visibilityState===`hidden`?hl(this):_l())}),document.addEventListener(`keydown`,e=>{if(e.key!==`Escape`)return;let t=document.querySelectorAll(`.voile`),n=t[t.length-1];n&&(e.preventDefault(),n.click())})}async#n(){window.addEventListener(`error`,e=>this.consignerEchec(`MOV-E99`,e.error??e.message)),window.addEventListener(`unhandledrejection`,e=>this.consignerEchec(`MOV-E98`,e.reason)),window.addEventListener(`wheel`,e=>{if(e.ctrlKey||e.shiftKey)return;let t=e.target?.closest?.(`.chips-filtres`);if(!(t instanceof HTMLElement)||t.scrollWidth<=t.clientWidth+1)return;let n=Math.abs(e.deltaY)>Math.abs(e.deltaX)?e.deltaY:e.deltaX;if(n===0)return;let r=t.scrollLeft;t.scrollLeft+=n,t.scrollLeft!==r&&e.preventDefault()},{passive:!1}),Td(this,!0),this.stockage.nettoyerStaging();let e;try{let t=!!navigator.storage?.getDirectory,n=typeof FileSystemFileHandle<`u`&&`createWritable`in FileSystemFileHandle.prototype;if(!t||!n){let e=window.Capacitor;throw Error(e?.isNativePlatform?.()?`Le stockage local n'est pas disponible sur cette version d'Android. Mets à jour Android System WebView (Play Store), puis rouvre Movenso.`:`Le stockage local n'est pas disponible sur ce navigateur. Movenso fonctionne sur Chrome, Edge et Firefox récents (Safari n'est pas encore supporté). Tes données d'un autre appareil restent transportables : une sauvegarde .movpack s'importe sur n'importe quel navigateur supporté.`)}e=await this.stockage.charger(),e===null&&(e=Be(),await this.stockage.sauvegarder(e))}catch(e){this.erreurDemarrage=e instanceof Error&&e.message.startsWith(`Le stockage`)?e.message:`Movenso n'a pas pu lire ses données sur cet appareil. Si tu viens d'installer une version plus ANCIENNE par-dessus une récente, réinstalle la dernière version — tes données ne sont pas perdues.`,this.requestUpdate();return}await qe(this.stockage,e),this.preferences=await this.stockage.chargerPreferences(),this.#i(),this.bibliotheque=e,this.#r(e);let{mode:t,disciplineId:n}=this.preferences.demarrage,r=t===`discipline`?n:t===`derniere`?this.preferences.derniereDisciplineId:void 0;(t===`discipline`||t===`derniere`)&&r&&e.disciplines.some(e=>e.id===r)?this.ecran={type:`discipline`,disciplineId:r}:t===`discipline`&&n?this.afficherToast(`La discipline choisie au démarrage n'existe plus — ouverture sur la Bibliothèque`):t===`favoris`?this.ecran={type:`favoris`}:t===`compositions`&&(this.preferences.compositionsBeta??!1)?this.ecran={type:`compositions`}:t===`relations`&&this.preferences.vueRelationBeta&&this.ouvrirRelationsVisuelle(),await this.#a()}async#r(e){try{let t=await this.stockage.listerVideos(),n=Dd(this,e),r=0;for(let e of t)n.has(e)||r++;r>0&&this.afficherToast(`${r} fichier${r>1?`s`:``} vidéo orphelin${r>1?`s`:``} détecté${r>1?`s`:``} — vérifie et nettoie dans Plus › Médias`)}catch{}}dernierEchec=null;operationLongue=null;consignerEchec(e,t){let n=(t instanceof Error?t.message:String(t)).slice(0,200);this.dernierEchec={quand:new Date().toISOString(),code:e,operation:wi[e],message:n}}#i(){let e=document.documentElement,t=this.preferences.theme??`auto`;t===`auto`?delete e.dataset.theme:e.dataset.theme=t;let n=this.preferences.tonalite??`vermillon`;n===`vermillon`?delete e.dataset.tonalite:e.dataset.tonalite=n}changerApparence(e){this.preferences={...this.preferences,...e.theme===void 0?{}:{theme:e.theme},...e.tonalite===void 0?{}:{tonalite:e.tonalite}},this.#i(),this.stockage.sauvegarderPreferences(this.preferences)}changerDensite(e){if(e===null){let{densiteBibliotheque:e,...t}=this.preferences;this.preferences=t}else{let t=Math.max(1,Math.min(6,Math.round(e)));this.preferences={...this.preferences,densiteBibliotheque:t}}this.stockage.sauvegarderPreferences(this.preferences),this.requestUpdate()}definirTransition(e){this.preferences={...this.preferences,transitionSec:Math.max(0,Math.round(e))},this.stockage.sauvegarderPreferences(this.preferences),this.requestUpdate()}definirSonSeance(e){this.preferences={...this.preferences,sonSeance:e},this.stockage.sauvegarderPreferences(this.preferences),this.requestUpdate()}basculerReglage(e){this.preferences={...this.preferences,[e]:!this.preferences[e]},this.stockage.sauvegarderPreferences(this.preferences),this.requestUpdate()}changerPseudo(e){let t=e.trim().slice(0,40);this.preferences={...this.preferences,pseudo:t},this.stockage.sauvegarderPreferences(this.preferences),this.requestUpdate()}changerDemarrage(e,t){this.preferences={...this.preferences,demarrage:{mode:e,...t===void 0?{}:{disciplineId:t}}},this.stockage.sauvegarderPreferences(this.preferences)}async#a(){if(!window.Capacitor?.isNativePlatform?.())return;let{App:e}=await vi(async()=>{let{App:e}=await import(`./esm-BHDM9dlt.js`);return{App:e}},__vite__mapDeps([4,1]),import.meta.url);await e.addListener(`backButton`,()=>{let t=this.ecran.type===`bibliotheques`||this.ecran.type===`favoris`||this.ecran.type===`compositions`||this.ecran.type===`plus`&&this.ecran.section===null;this.demandePin?this.annulerDemandePin():this.capture?this.reculerCapture():this.ajoutMedia?this.ajoutMedia=null:this.partagePreparation?this.partagePreparation=null:this.ajouter?this.ajouter=null:this.editionPas?this.editionPas=null:this.editionLien?this.editionLien=null:this.ajoutPas?this.ajoutPas=null:this.menuComposition?this.menuComposition=null:this.creationCompo?Kl(this):this.importEnAttente?this.annulerImport():this.rapportApresImport?this.fermerRapportImport():this.restaurationEnAttente?this.annulerRestauration():this.menuFiche?(this.menuFiche=!1,this.requestUpdate()):this.editionFiche?(this.instantaneEdition=null,this.editionFiche=!1,this.requestUpdate()):this.#o.length?this.retour():t?this.ecran.type===`bibliotheques`?e.minimizeApp():this.ouvrirBibliotheque():(this.#h(),this.ecran=this.#u(),window.scrollTo({top:0}))})}technique(e){return this.bibliotheque?.techniques.find(t=>t.id===e)}#o=[];#s={};#c(e){this.#h();let t={zone:this.zoneCourante(),ecran:this.ecran,pile:[...this.#o],defilement:window.scrollY};this.#o.push({ecran:this.ecran,defilement:window.scrollY}),this.#o.length>24&&this.#o.shift(),this.ecran=e,this.zoneCourante()!==t.zone&&(this.#s[t.zone]=t),window.scrollTo({top:0})}#l(e){let t=e.type===`favoris`?`favoris`:e.type===`relations`?`relations`:e.type===`compositions`?`compositions`:e.type===`plus`?`plus`:`bibliotheque`,n=this.zoneCourante();if(this.#h(),this.#f(),n===t){this.#o=[],this.ecran=e,window.scrollTo({top:0});return}this.#s[n]={ecran:this.ecran,pile:[...this.#o],defilement:window.scrollY};let r=this.#s[t];r?(this.#o=[...r.pile],this.ecran=r.ecran,this.#p(),this.updateComplete.then(()=>window.scrollTo({top:r.defilement}))):(this.#o=[],this.ecran=e,window.scrollTo({top:0}))}retour(){this.#h(),this.menuFiche=!1,this.#f();let e=this.#o.pop();e?(this.ecran=e.ecran,this.updateComplete.then(()=>window.scrollTo({top:e.defilement}))):(this.ecran=this.#u(),window.scrollTo({top:0})),this.#p()}#u(){let e=this.zoneCourante();return e===`favoris`?{type:`favoris`}:e===`relations`?{type:`relations`}:e===`compositions`?{type:`compositions`}:e===`plus`?{type:`plus`,section:null}:{type:`bibliotheques`}}derniereTechniqueVue=null;relationCentre=null;ouvrirFiche(e){this.editionFiche=!1,this.instantaneEdition=null,this.menuFiche=!1,this.ajoutMedia=null,this.derniereTechniqueVue=e,this.#f(),this.#c({type:`fiche`,techniqueId:e}),this.#p()}ouvrirBienvenueRelations(){fs(),this.#l({type:`relations`})}ouvrirRelationsVisuelle(e,t){e&&(this.relationCentre=e,this.preferences={...this.preferences,relationsCentreId:e},this.stockage.sauvegarderPreferences(this.preferences)),t&&(this.enregistrerVueRelations(t),ms(t)),this.#l({type:`relations`})}recentrerRelations(e){this.relationCentre=e,this.preferences={...this.preferences,relationsCentreId:e},this.stockage.sauvegarderPreferences(this.preferences),this.requestUpdate()}enregistrerVueRelations(e){this.preferences={...this.preferences,relationsVue:e},this.stockage.sauvegarderPreferences(this.preferences)}techniqueCentreRelations(){let e=this.bibliotheque;if(!e||e.techniques.length===0)return null;let t=t=>!!t&&e.techniques.some(e=>e.id===t);return t(this.relationCentre)?this.relationCentre:t(this.preferences.relationsCentreId)?this.preferences.relationsCentreId:t(this.derniereTechniqueVue)?this.derniereTechniqueVue:null}#d=new Map;#f(){this.ecran.type===`fiche`&&this.#d.set(this.ecran.techniqueId,{mediaAffiche:this.mediaAffiche,voixOuverte:this.voixOuverte,relationsDepliees:this.relationsDepliees})}#p(){if(this.ecran.type!==`fiche`)return;let e=this.#d.get(this.ecran.techniqueId);this.mediaAffiche=e?.mediaAffiche??null,this.voixOuverte=e?.voixOuverte??null,this.relationsDepliees=e?.relationsDepliees??!1}#m=new Map;majFiltres(e){this.filtres=e,this.ecran.type===`discipline`&&this.#m.set(this.ecran.disciplineId,e),this.requestUpdate()}ouvrirDiscipline(e){this.filtres={disciplineId:e,niveauId:null,familleId:null,source:null,favorisSeuls:!1,texte:``},this.#c({type:`bibliotheques`}),this.preferences.derniereDisciplineId!==e&&(this.preferences={...this.preferences,derniereDisciplineId:e},this.stockage.sauvegarderPreferences(this.preferences))}ouvrirBibliotheque(){this.#l({type:`bibliotheques`})}async majNomDiscipline(e,t){return gd(this,e,t)}async ajouterTaxonomie(...e){return _d(this,...e)}async majTaxonomie(...e){return vd(this,...e)}usagesTaxonomie(...e){return yd(this,...e)}reordonnerTaxonomie(...e){return bd(this,...e)}async supprimerTaxonomie(...e){return xd(this,...e)}async ajouterTypeRelation(e,t){return Sd(this,e,t)}async majTypeRelation(...e){return Cd(this,...e)}async basculerSymetrieTypeRelation(e){return wd(this,e)}async redemanderPersistance(){return Ed(this)}async rattacherOrphelin(e,t){return kd(this,e,t)}async supprimerVideoOrpheline(e){return Ad(this,e)}async supprimerOrphelinsVerifies(e){return jd(this,e)}async restaurerSauvegarde(e){return Md(this,e)}mediasManquants=[];videosOrphelines=[];taillesVideos=new Map;infoEspace=null;sauvegardes=[];persistanceStockage=`inconnue`;ouvrirPlus(){this.#l({type:`plus`,section:null}),Od(this)}ouvrirPlusSection(e){e===`packs-officiels`&&this.catalogueOfficiel===null&&si(this),this.doublonOuvert=null,(e===`medias`||e===`atraiter`)&&ep(),this.zoneCourante()!==`plus`&&this.#l({type:`plus`,section:null}),this.#c({type:`plus`,section:e}),Od(this)}ouvrirFavoris(){this.#l({type:`favoris`})}ouvrirCompositions(){this.#l({type:`compositions`})}ouvrirComposition(e){this.menuComposition=null,Zc(),this.#c({type:`composition`,compositionId:e})}afficherToast(e,t=`neutre`){this.toast=e,this.toastAlerte=t===`alerte`,this.#t=Date.now()+3400,clearTimeout(this.#e),this.#e=setTimeout(()=>this.toast=null,3400)}demanderConfirmation(e){this.confirmation=e}#h(){clearTimeout(this.#e),this.toast=null}async occuperPendant(e,t){this.occupe=e,this.operationLongue={libelle:e,debut:new Date().toISOString(),fin:null},this.requestUpdate();try{return await t()}finally{this.occupe=null,this.operationLongue&&this.operationLongue.fin===null&&(this.operationLongue={...this.operationLongue,fin:new Date().toISOString()}),this.requestUpdate()}}willUpdate(e){super.willUpdate(e),this.toast&&Date.now()>=this.#t&&this.#h(),e.has(`ecran`)&&this.ecran.type!==`entrainement`&&(Ml(),vl()),e.has(`ecran`)&&this.ecran.type===`entrainement`&&_l()}#g=null;#_=!1;updated(){let e=document.querySelector(`.feuille[role="dialog"]`);if(e&&!this.#_){this.#_=!0;let t=document.activeElement;this.#g=t instanceof HTMLElement&&t!==document.body?t:null,e.contains(t)||(e.querySelector(`[autofocus]`)??e).focus()}else!e&&this.#_&&(this.#_=!1,this.#g?.isConnected&&this.#g.focus(),this.#g=null)}protections=new cf(this);demandePin=null;echecsCumules=0;journalSecurite=[];get reglagesProtections(){return this.protections.reglagesProtections}get pinConfigure(){return this.protections.pinConfigure}get sessionDeverrouillee(){return this.protections.sessionDeverrouillee}async activerProtection(e,t){return this.protections.activerProtection(e,t)}async desactiverProtection(e,t){return this.protections.desactiverProtection(e,t)}async choisirVerrouillage(e){return this.protections.choisirVerrouillage(e)}async changerPin(e,t,n){return this.protections.changerPin(e,t,n)}garde(e,t,n){return this.protections.garde(e,t,n)}autoriser(e,t,n){return this.protections.autoriser(e,t,n)}verrouiller(e=!1){return this.protections.verrouiller(e)}annulerDemandePin(){return this.protections.annulerDemandePin()}async validerDemandePin(e){return this.protections.validerDemandePin(e)}async reinitialiserTout(){await this.stockage.reinitialiser(),this.bibliotheque=Be(),await this.stockage.sauvegarder(this.bibliotheque),this.preferences=Wd(),await this.stockage.sauvegarderPreferences(this.preferences),this.protections.oublierSession(),this.journalSecurite=[],this.#i(),this.#o=[],this.#s={},this.ecran={type:`bibliotheques`},this.mediasManquants=[],this.videosOrphelines=[],this.taillesVideos=new Map,this.sauvegardes=[],this.dernierFichier=null,window.scrollTo({top:0}),this.afficherToast(`Movenso réinitialisé — bibliothèque vide, aucune protection, aucun PIN`)}choisirPackAImporter(){return Yr(this)}async importerPack(e){return Xr(this,e)}async installerPackOfficiel(e){return ci(this,e)}rechargerCataloguePacks(){si(this)}async confirmerImport(){return Zr(this)}fermerRapportImport(){return Qr(this)}async annulerImport(){return $r(this)}async confirmerRestauration(){return ti(this)}async annulerRestauration(){return ni(this)}importEnAttente=null;rapportApresImport=null;async changerLimiteEspace(e){return St(this,e)}restaurationEnAttente=null;progressionExport=null;dernierFichier=null;annulerExport(){return Pi(this)}async exporterTout(e=!0){return Li(this,e)}async exporterDiagnostic(){return zi(this)}async preparerPublication(...e){return Bi(this,...e)}async enregistrerPublicationLocale(){return Vi(this)}async partagerPublication(){return Hi(this)}fermerPublication(){return Ui(this)}publicationPrete=null;pousserNouvelleTechnique(e,t,n,r){let i=n.trim();if(!i||!e.disciplines.some(e=>e.id===t))return null;let a=rt();return e.techniques.push({id:a,disciplineId:t,nom:i,...r?.nomTraditionnel?.trim()?{nomTraditionnel:r.nomTraditionnel.trim()}:{},...r?.familleId?{familleId:r.familleId}:{},niveauxIds:r?.niveauxIds??[],relations:[]}),a}async creerTechnique(e,t,n){if(!this.garde(`modification`,`Saisis le PIN pour créer une technique.`,()=>void this.creerTechnique(e,t,n)))return;let r=this.bibliotheque;if(!r)return;let i=this.pousserNouvelleTechnique(r,e,t,n);if(!i)return;let a=t.trim();await this.persister(r),this.ouvrirFiche(i),this.editionFiche=!0,this.afficherToast(`« ${a} » créée ✓ — complète-la, ou capture dessus`)}async creerDiscipline(e){if(!this.garde(`modification`,`Saisis le PIN pour créer une discipline.`,()=>void this.creerDiscipline(e)))return null;let t=this.bibliotheque,n=e.trim();if(!t||!n)return null;let r=t.disciplines.find(e=>H(e.nom)===H(n));if(r)return this.afficherToast(`« ${r.nom} » existe déjà`),r.id;let i=rt();return t.disciplines.push({id:i,nom:n,familles:[],niveaux:[]}),await this.persister(t),this.afficherToast(`Discipline « ${n} » créée ✓ — capture ou importe, elle se remplira`),i}usagesTypeRelation(e){return(this.bibliotheque?.techniques??[]).reduce((t,n)=>t+n.relations.filter(t=>t.type===e).length,0)}async retirerRelation(e,t,n){if(!this.garde(`modification`,`Saisis le PIN pour retirer ce lien.`,()=>void this.retirerRelation(e,t,n)))return;let r=this.bibliotheque,i=r?.techniques.find(t=>t.id===e);!r||!i||(i.relations=i.relations.filter(e=>!(e.type===n&&e.cibleId===t)),await this.persister(r),this.afficherToast(`Lien retiré ✓`))}async arbitrerConflitLiaison(e,t){return Ou(this,e,t)}async retirerTousLesLiensProposes(e){return Au(this,e)}ouvrirEditionLien(e,t,n,r){return ju(this,e,t,n,r)}async ajouterRelation(e,t){return Mu(this,e,t)}async modifierRelation(e,t,n,r){return Nu(this,e,t,n,r)}async supprimerTypeRelation(e){return Pu(this,e)}async supprimerTechnique(e){return Fu(this,e)}async restaurerTechnique(e){return Iu(this,e)}async supprimerDefinitivement(e){return Ru(this,e)}async viderCorbeille(){return zu(this)}async supprimerDiscipline(e){return Bu(this,e)}reordonnerDiscipline(e,t){return Vu(this,e,t)}deplacerDisciplineVers(e,t){let n=this.bibliotheque;if(!n||e===t)return;let r=n.disciplines.findIndex(t=>t.id===e);if(r<0)return;let[i]=n.disciplines.splice(r,1),a=n.disciplines.findIndex(e=>e.id===t);n.disciplines.splice(a<0?r:a,0,i),this.requestUpdate()}deplacerTaxonomieVers(e,t,n,r){let i=this.bibliotheque,a=i?.disciplines.find(t=>t.id===e);if(!i||!a||n===r)return;let o=a[t],s=o.findIndex(e=>e.id===n);if(s<0)return;let[c]=o.splice(s,1),l=o.findIndex(e=>e.id===r);o.splice(l<0?s:l,0,c),o.forEach((e,t)=>e.ordre=t+1),this.requestUpdate()}async enregistrerReordre(){if(!this.garde(`modification`,`Saisis le PIN pour enregistrer l'ordre.`,()=>void this.enregistrerReordre()))return;let e=this.bibliotheque;e&&await this.persister(e)}async supprimerDisciplineEtContenu(e){if(!this.garde(`destruction_ou_sensible`,`Saisis le PIN pour supprimer cette discipline et son contenu.`,()=>void this.supprimerDisciplineEtContenu(e)))return;let t=this.bibliotheque,n=t?.disciplines.find(t=>t.id===e);if(!t||!n)return;await this.stockage.snapshot(`avant-suppression-discipline-${n.nom}`);let r=new Set(t.techniques.filter(t=>t.disciplineId===e).map(e=>e.id));t.techniques=t.techniques.filter(t=>t.disciplineId!==e),t.favoris=t.favoris.filter(e=>!r.has(e)),t.contributions=t.contributions.flatMap(e=>!e.techniqueId||!r.has(e.techniqueId)?[e]:e.provenance===`personnel`?[{...e,techniqueId:null}]:[]),t.disciplines=t.disciplines.filter(t=>t.id!==e),await this.persister(t),this.afficherToast(`Discipline « ${n.nom} » supprimée — tes notes sont revenues « à rattacher », point de restauration conservé`)}editionFiche=!1;instantaneEdition=null;generationCarnet=0;entrerEditionFiche(e){return Hu(this,e)}validerEditionFiche(){return Uu(this)}async annulerEditionFiche(){return Wu(this)}menuFiche=!1;mediaAffiche=null;voixOuverte=null;relationsDepliees=!1;async majTechnique(e,t){if(!this.garde(`modification`,`Saisis le PIN pour enregistrer cette modification.`,()=>void this.majTechnique(e,t)))return;let n=this.bibliotheque,r=n?.techniques.find(t=>t.id===e);if(!n||!r)return;let i=structuredClone(r);t.disciplineId&&t.disciplineId!==r.disciplineId&&(delete r.familleId,r.niveauxIds=[]),Object.assign(r,t);for(let e of[`nomTraditionnel`,`familleId`,`mediaPrincipalId`])e in t&&(t[e]===void 0||t[e]===``)&&delete r[e];try{await this.persister(n)}catch(e){Object.assign(r,i),this.afficherToast(e instanceof Error?e.message:`Modification refusée`)}}async majContribution(e,t){if(!this.garde(`modification`,`Saisis le PIN pour modifier cette contribution.`,()=>void this.majContribution(e,t)))return;let n=this.bibliotheque,r=n?.contributions.find(t=>t.id===e);!n||!r||(t.trim()?r.description=t.trim():delete r.description,await this.persister(n))}async supprimerContribution(e){if(!this.garde(`destruction_ou_sensible`,`Saisis le PIN pour supprimer cette contribution.`,()=>void this.supprimerContribution(e)))return;let t=this.bibliotheque,n=t?.contributions.find(t=>t.id===e);!t||!n||(await this.stockage.snapshot(`avant-retrait-d-une-note`),t.contributions=t.contributions.filter(t=>t.id!==e),await this.persister(t),this.afficherToast(`Contribution retirée — point de restauration conservé dans les sauvegardes`))}ouvrirCreationCompo(){return Hl(this)}async creerCompositionFunnel(){return Ul(this)}async poserRolesFunnel(e){return Wl(this,e)}fermerCreationCompo(){return Gl(this)}async creerComposition(e){return ql(this,e)}async creerCompositionDepuisEtapes(...e){return Jl(this,...e)}async modifierComposition(e,t){return Yl(this,e,t)}async dupliquerComposition(e){return Xl(this,e)}async exporterComposition(e){return Zl(this,e)}async partagerComposition(e,t=!0){return Ql(this,e,t)}async retirerMediaPresentation(e,t){return $l(this,e,t)}async supprimerComposition(e){return eu(this,e)}demarrerEntrainement(e,t=0){yl(),this.menuComposition=null,this.#c({type:`entrainement`,compositionId:e,index:t})}estFavori(e){return $u(this,e)}async basculerFavori(e){return ed(this,e)}techniquesFavorites(){return td(this)}async demanderPartageTechnique(e){return Wi(this,e)}async confirmerPartage(){return Gi(this)}async partagerTechnique(e,t=!0){return Ki(this,e,t)}doublonsPotentiels(){return nd(this)}async rescannerDoublons(){return rd(this)}async classerDoublon(e,t,n){return id(this,e,t,n)}async resoudreDoublonGarder(e,t){return ad(this,e,t)}async fusionnerDoublonAvec(e,t,n){return od(this,e,t,n)}async defusionner(e){return sd(this,e)}async creerAdaptationLocale(e){return cd(this,e)}async lireMediaComplet(e){let t=[];for await(let n of this.stockage.lireMediaParBlocs(e,1<<20))t.push(n);let n=t.reduce((e,t)=>e+t.length,0),r=new Uint8Array(n),i=0;for(let e of t)r.set(e,i),i+=e.length;return r}ouvrirCapture(){return Su(this)}async terminerCaptureRepere(){return Cu(this)}ouvrirRattachement(e){return wu(this,e)}fermerCapture(){return Tu(this)}reculerCapture(){return Eu(this)}async terminerCapture(...e){return Du(this,...e)}async ajouterNote(e,t){return cu(this,e,t)}async ajouterMediaFiche(...e){return lu(this,...e)}async ajouterMediaPresentation(...e){return uu(this,...e)}async amenderContribution(...e){return du(this,...e)}async majMediaLabel(e,t){return fu(this,e,t)}async majMediaLien(e,t){return pu(this,e,t)}async definirCouvertureImage(e,t){return hu(this,e,t)}async definirCouvertureMedia(e,t){return gu(this,e,t)}async retirerCouverture(e){return _u(this,e)}async retirerMedia(e,t){return vu(this,e,t)}annulerIngestionVideo(){return yu(this)}async persister(e){await this.stockage.sauvegarder(e),await qe(this.stockage,e),this.bibliotheque={...e}}render(){if(this.erreurDemarrage)return N`<div class="ecran erreur-demarrage" style="padding:24px 18px"><div class="carte-atelier">
        <div class="encart-entete"><span class="titre-atelier">Movenso n'a pas pu démarrer</span></div>
        <p class="details" style="line-height:1.6">${this.erreurDemarrage}</p>
        <p class="details" style="line-height:1.6; opacity:.75; font-size:12.5px">
          Navigateurs supportés : Chrome, Edge et Firefox récents — sur téléphone,
          tablette et ordinateur. Rien n'a été modifié sur cet appareil.
        </p>
      </div></div>`;if(!this.bibliotheque)return P;let e=this.ecran.type===`fiche`?$s(this,this.ecran.techniqueId):this.ecran.type===`discipline`?Xs(this,this.ecran.disciplineId):this.ecran.type===`bibliotheques`?qs(this):this.ecran.type===`plus`?this.ecran.section?Vp(this,this.ecran.section):Wp(this):this.ecran.type===`relations`?hs(this):this.ecran.type===`favoris`?Ys(this):this.ecran.type===`compositions`?Yc(this):this.ecran.type===`composition`?ll(this,this.ecran.compositionId):this.ecran.type===`entrainement`?ml(this,this.ecran.compositionId,this.ecran.index):qs(this),t=this.capture!==null||this.importEnAttente!==null||this.rapportApresImport!==null||this.restaurationEnAttente!==null||this.demandePin!==null||this.ajoutMedia!==null||this.ajouter!==null||this.partagePreparation!==null||this.enregistrementMedia!==null||this.ecran.type===`entrainement`;return N`
      ${e}
      ${t?P:this.#v()}
      ${t?P:this.#y()}
      ${t||this.ecran.type===`entrainement`?P:this.protections.indicateurSession()}
      ${this.importEnAttente?ud(this):P}
      ${this.rapportApresImport?dd(this):P}
      ${this.restaurationEnAttente?fd(this):P}
      ${this.demandePin?this.protections.feuillePin():P}
      ${this.capture?Gp(this):P}
      ${this.ajoutMedia?$p(this):P}
      ${this.partagePreparation?pd(this):P}
      ${this.enregistrementMedia?md(this):P}
      ${this.ajouter?im(this):P}
      ${this.creationCompo?nl(this):P}
      ${this.ajoutPas?ol(this):P}
      ${this.editionPas?sl(this):P}
      ${this.editionLien?Ds(this):P}
      ${this.menuComposition?ul(this):P}
      ${this.confirmation?hd(this):P}
      ${this.toast&&this.ecran.type!==`entrainement`?N`<div class="toast ${this.toastAlerte?`alerte`:``}" role=${this.toastAlerte?`alert`:`status`}>${this.toast}</div>`:P}
      ${ld(this)}
    `}#v(){let e=e=>this.autoriser(`modification`,`Saisis le PIN pour ajouter ou capturer.`,()=>{this.ajouter=e,this.requestUpdate()});if(this.ecran.type===`discipline`){let t=this.ecran.disciplineId;return N`<button class="fab" @click=${()=>e({disciplineId:t})}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M12 5v14M5 12h14"/></svg>
        Ajouter
      </button>`}return this.ecran.type===`bibliotheques`&&this.bibliotheque?N`<button class="fab" @click=${()=>e({})}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M12 5v14M5 12h14"/></svg>
        Ajouter
      </button>`:this.ecran.type===`compositions`&&this.bibliotheque?N`<button class="fab" @click=${()=>this.ouvrirCreationCompo()}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M12 5v14M5 12h14"/></svg>
        Créer
      </button>`:P}zoneCourante(){switch(this.ecran.type){case`plus`:return`plus`;case`relations`:return`relations`;case`favoris`:return`favoris`;case`compositions`:case`composition`:case`entrainement`:return`compositions`;default:return`bibliotheque`}}#y(){let e=this.zoneCourante(),t=(t,n,r,i)=>N`
      <button class="nav-onglet ${e===t?`actif`:``}" @click=${i}
              aria-label=${n} aria-current=${e===t?`page`:P}>
        ${r}<span>${n}</span>
      </button>`;return N`<nav class="barre-nav">
      ${t(`bibliotheque`,`Bibliothèque`,N`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 5a2 2 0 0 1 2-2h13v18H6a2 2 0 0 1-2-2Z"/><path d="M4 17.5A2.5 2.5 0 0 1 6.5 15H19"/></svg>`,()=>this.ouvrirBibliotheque())}
      ${t(`favoris`,`Favoris`,N`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20s-7-4.35-9.3-8.5C1.2 8.7 2.6 5.5 5.7 5.5c1.9 0 3.1 1 4.3 2.5 1.2-1.5 2.4-2.5 4.3-2.5 3.1 0 4.5 3.2 3 6-2.3 4.15-9.3 8.5-9.3 8.5Z"/></svg>`,()=>this.ouvrirFavoris())}
      ${this.preferences.vueRelationBeta?t(`relations`,`Relations`,N`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="6" r="2.4"/><circle cx="5" cy="18" r="2.4"/><circle cx="19" cy="18" r="2.4"/><path d="M12 8.4 6.6 15.8M12 8.4l5.4 7.4M7.4 18h9.2"/></svg>`,()=>this.ouvrirRelationsVisuelle()):P}
      ${this.preferences.compositionsBeta?t(`compositions`,`Compositions`,N`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="5" rx="1.5"/><rect x="4" y="12" width="16" height="5" rx="1.5"/></svg>`,()=>this.ouvrirCompositions()):P}
      ${t(`plus`,`Plus`,N`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="5" cy="12" r="1.6"/><circle cx="12" cy="12" r="1.6"/><circle cx="19" cy="12" r="1.6"/></svg>`,()=>this.ouvrirPlus())}
    </nav>`}};customElements.define(`movenso-app`,cm);export{vi as t};