import{t as e}from"./rolldown-runtime.CZoGl-k8.mjs";import{H as t,N as n,O as r,P as i,T as a,U as o,V as s,b as c,f as l,g as u,j as d,l as f,s as p,u as m,y as h,z as ee}from"./react.qgYY9ddI.mjs";import{D as te,P as ne,c as g,nt as re}from"./framer.DEbhP_F0.mjs";function ie(e,t,{reverse:n=!1}={}){let r=e.length;for(let i=n?r-1:0;n?i>=0:i<r;n?i--:i++)t(e[i],i)}var _,v,ae,oe,y,b,se,x,S=e((()=>{s(),_=o!==void 0,v=(e,t,n)=>{let r=document.createElement(e),[i,a]=Array.isArray(t)?[void 0,t]:[t,n];return i&&Object.assign(r,i),a?.forEach(e=>r.appendChild(e)),r},ae=(e,t)=>t===`left`?e.offsetLeft:((e.offsetParent instanceof HTMLElement?e.offsetParent:null)?.offsetWidth??0)-e.offsetWidth-e.offsetLeft,oe=e=>e.offsetWidth>0&&e.offsetHeight>0,y=(e,t)=>{_&&customElements.get(e)!==t&&customElements.define(e,t)},b=(e,t)=>e==null?t:t==null?e:Math.max(e,t),se=String.raw,x=String.raw})),ce,le,ue,C,w,T,E,de,D,O,k,A,j,M,fe,N,pe=e((()=>{S(),ce=_&&typeof CSS<`u`&&CSS.supports&&CSS.supports(`animation-timing-function`,`linear(1,2)`),le=_&&typeof CSS<`u`&&CSS.supports&&CSS.supports(`line-height`,`mod(1,1)`),ue=_&&typeof matchMedia<`u`?matchMedia(`(prefers-reduced-motion: reduce)`):null,C=`--_number-flow-d-opacity`,w=`--_number-flow-d-width`,T=`--_number-flow-dx`,E=`--_number-flow-d`,de=(()=>{try{return CSS.registerProperty({name:C,syntax:`<number>`,inherits:!1,initialValue:`0`}),CSS.registerProperty({name:T,syntax:`<length>`,inherits:!0,initialValue:`0px`}),CSS.registerProperty({name:w,syntax:`<number>`,inherits:!1,initialValue:`0`}),CSS.registerProperty({name:E,syntax:`<number>`,inherits:!0,initialValue:`0`}),!0}catch{return!1}})(),D=`var(--number-flow-char-height, 1em)`,O=`var(--number-flow-mask-height, 0.25em)`,k=`calc(${O} / 2)`,A=`var(--number-flow-mask-width, 0.5em)`,j=`calc(${A} / var(--scale-x))`,M=`#000 0, transparent 71%`,fe=x`
	:host {
		display: inline-block;
		direction: ltr;
		white-space: nowrap;
		isolation: isolate; /* for .number z-index */
		/* Technically this is only needed on the .number, but applying it here makes the ::selection the same height for the whole element: */
		line-height: ${D} !important;
	}

	.number,
	.number__inner {
		display: inline-block;
		transform-origin: left top;
	}

	:host([data-will-change]) :is(.number, .number__inner, .section, .digit, .digit__num, .symbol) {
		will-change: transform;
	}

	.number {
		--scale-x: calc(1 + var(${w}) / var(--width));
		transform: translateX(var(${T})) scaleX(var(--scale-x));

		margin: 0 calc(-1 * ${A});
		position: relative; /* for z-index */

		/* overflow: clip; /* helpful to not affect page layout, but breaks baseline alignment in Safari :/ */
		/* -webkit- prefixed properties have better support than unprefixed ones: */
		-webkit-mask-image:
			/* Horizontal: */
			linear-gradient(
				to right,
				transparent 0,
				#000 ${j},
				#000 calc(100% - ${j}),
				transparent
			),
			/* Vertical: */
				linear-gradient(
					to bottom,
					transparent 0,
					#000 ${O},
					#000 calc(100% - ${O}),
					transparent 100%
				),
			/* TL corner */ radial-gradient(at bottom right, ${M}),
			/* TR corner */ radial-gradient(at bottom left, ${M}),
			/* BR corner */ radial-gradient(at top left, ${M}),
			/* BL corner */ radial-gradient(at top right, ${M});
		-webkit-mask-size:
			100% calc(100% - ${O} * 2),
			calc(100% - ${j} * 2) 100%,
			${j} ${O},
			${j} ${O},
			${j} ${O},
			${j} ${O};
		-webkit-mask-position:
			center,
			center,
			top left,
			top right,
			bottom right,
			bottom left;
		-webkit-mask-repeat: no-repeat;
	}

	.number__inner {
		padding: ${k} ${A};
		/* invert parent's: */
		transform: scaleX(calc(1 / var(--scale-x))) translateX(calc(-1 * var(${T})));
	}

	/* Put number underneath other sections. Negative z-index messed up text cursor and selection, weirdly: */
	:host > :not(.number) {
		z-index: 5;
	}

	.section,
	.symbol {
		display: inline-block;
		/* for __exiting: */
		position: relative;
		isolation: isolate; /* also helpful for mix-blend-mode in symbol__value */
	}

	.section::after {
		/*
		 * We seem to need some type of character to ensure baseline alignment continues working
		 * even when empty
		 */
		content: '\200b'; /* zero-width space */
		display: inline-block;
	}

	.section--justify-left {
		transform-origin: center left;
	}

	.section--justify-right {
		transform-origin: center right;
	}

	.section__exiting,
	.symbol__exiting {
		margin: 0 !important;
		position: absolute !important;
		z-index: -1;
	}

	.digit {
		display: inline-block;
		position: relative;
		--c: var(--current) + var(${E});
	}

	.digit__num,
	.number .section::after {
		padding: ${k} 0;
	}

	.digit__num {
		display: inline-block;
		/* Claude + https://buildui.com/recipes/animated-counter */
		--offset-raw: mod(var(--length) + var(--n) - mod(var(--c), var(--length)), var(--length));
		--offset: calc(
			var(--offset-raw) - var(--length) * round(down, var(--offset-raw) / (var(--length) / 2), 1)
		);
		/* Technically we just need var(--offset)*100%, but clamping should reduce the layer size: */
		--y: clamp(-100%, var(--offset) * 100%, 100%);
		transform: translateY(var(--y));
	}

	.digit__num:not(.is-current) {
		position: absolute;
		top: 0;
		left: 50%;
		transform: translateX(-50%) translateY(var(--y));
	}

	.digit:not(.is-spinning) .digit__num:not(.is-current) {
		display: none;
	}

	.symbol__value {
		display: inline-block;
		mix-blend-mode: plus-lighter; /* better crossfades e.g. + <-> - */
		white-space: pre; /* some symbols are spaces or thin spaces */
	}

	.section--justify-left .symbol__exiting {
		left: 0;
	}

	.section--justify-right .symbol__exiting {
		right: 0;
	}

	.animate-presence {
		opacity: calc(1 + var(${C}));
	}
`,N=fe})),P,F,I,L,R,me=e((()=>{S(),pe(),P=_?HTMLElement:class{},F=x`
	:host {
		display: inline-block;
		direction: ltr;
		white-space: nowrap;
		line-height: ${D} !important;
	}

	span {
		display: inline-block;
	}

	:host([data-will-change]) span {
		will-change: transform;
	}

	.number,
	.digit {
		padding: ${k} 0;
	}

	.symbol {
		white-space: pre; /* some symbols are spaces or thin spaces */
	}
`,I=e=>`<span class="${e.type===`integer`||e.type===`fraction`?`digit`:`symbol`}" part="${e.type===`integer`||e.type===`fraction`?`digit ${e.type}-digit`:e.type}">${e.value}</span>`,L=(e,t)=>`<span part="${t}">${e.reduce((e,t)=>e+I(t),``)}</span>`,R=e=>se`<template shadowroot="open" shadowrootmode="open"
			><style>
				${F}</style
			>${L(e.pre,`left`)}<span part="number" class="number"
				>${L(e.integer,`integer`)}${L(e.fraction,`fraction`)}</span
			>${L(e.post,`right`)}</template
		><span
			style="font-kerning: none; display: inline-block; line-height: ${D} !important; padding: ${O} 0;"
			>${e.valueAsString}</span
		>`}));function he(e,t,n,r){let i=t.formatToParts(e);n&&i.unshift({type:`prefix`,value:n}),r&&i.push({type:`suffix`,value:r}),console.log(n,r);let a=[],o=[],s=[],c=[],l={},u=e=>`${e}:${l[e]=(l[e]??-1)+1}`,d=``,f=!1,p=!1;for(let e of i){d+=e.value;let t=e.type===`minusSign`||e.type===`plusSign`?`sign`:e.type;t===`integer`?(f=!0,o.push(...e.value.split(``).map(e=>({type:t,value:parseInt(e)})))):t===`group`?o.push({type:t,value:e.value}):t===`decimal`?(p=!0,s.push({type:t,value:e.value,key:u(t)})):t===`fraction`?s.push(...e.value.split(``).map(e=>({type:t,value:parseInt(e),key:u(t),pos:-1-l[t]}))):(f||p?c:a).push({type:t,value:e.value,key:u(t)})}let m=[];for(let e=o.length-1;e>=0;e--){let t=o[e];m.unshift(t.type===`integer`?{...t,key:u(t.type),pos:l[t.type]}:{...t,key:u(t.type)})}return{pre:a,integer:m,fraction:s,post:c,valueAsString:d,value:typeof e==`string`?parseFloat(e):e}}var ge=e((()=>{}));function z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var B,V,H,_e,U,W,G,K,q,J,ve,ye=e((()=>{S(),me(),pe(),ge(),B=le&&ce&&de,H=class extends P{get animated(){return this._animated}set animated(e){var t;this.animated!==e&&(this._animated=e,(t=this.shadowRoot)==null||t.getAnimations().forEach(e=>e.finish()))}set data(e){if(e==null)return;let{pre:t,integer:n,fraction:r,post:i,value:a}=e;if(this.created){let o=this._data;if(this._data=e,this.computedTrend=typeof this.trend==`function`?this.trend(o.value,a):this.trend,this.startingPos=void 0,this.computedTrend&&this.continuous){let t=o.integer.concat(o.fraction).filter(e=>e.type===`integer`||e.type===`fraction`),n=e.integer.concat(e.fraction).filter(e=>e.type===`integer`||e.type===`fraction`),r=t.find(e=>!n.find(t=>t.pos===e.pos&&t.value===e.value)),i=n.find(e=>!t.find(t=>e.pos===t.pos&&e.value===t.value));this.startingPos=b(r?.pos,i?.pos)}this.computedAnimated=B&&this._animated&&(!this.respectMotionPreference||!ue?.matches)&&oe(this),this.manual||this.willUpdate(),this._pre.update(t),this._num.update({integer:n,fraction:r}),this._post.update(i),this.manual||this.didUpdate()}else{if(this._data=e,this.attachShadow({mode:`open`}),typeof CSSStyleSheet<`u`&&this.shadowRoot.adoptedStyleSheets)V||(V=new CSSStyleSheet,V.replaceSync(N)),this.shadowRoot.adoptedStyleSheets=[V];else{let e=document.createElement(`style`);e.textContent=N,this.shadowRoot.appendChild(e)}this._pre=new G(this,t,{justify:`right`,part:`left`}),this.shadowRoot.appendChild(this._pre.el),this._num=new _e(this,n,r),this.shadowRoot.appendChild(this._num.el),this._post=new G(this,i,{justify:`left`,part:`right`}),this.shadowRoot.appendChild(this._post.el)}this.created=!0}willUpdate(){this._pre.willUpdate(),this._num.willUpdate(),this._post.willUpdate()}didUpdate(){if(!this.computedAnimated)return;this._abortAnimationsFinish?this._abortAnimationsFinish.abort():this.dispatchEvent(new Event(`animationsstart`)),this._pre.didUpdate(),this._num.didUpdate(),this._post.didUpdate();let e=new AbortController;Promise.all(this.shadowRoot.getAnimations().map(e=>e.finished)).then(()=>{e.signal.aborted||(this.dispatchEvent(new Event(`animationsfinish`)),this._abortAnimationsFinish=void 0)}),this._abortAnimationsFinish=e}constructor(){super(),z(this,`_animated`,void 0),z(this,`created`,!1),z(this,`_pre`,void 0),z(this,`_num`,void 0),z(this,`_post`,void 0),z(this,`computedTrend`,void 0),z(this,`startingPos`,void 0),z(this,`computedAnimated`,void 0),z(this,`_data`,void 0),z(this,`manual`,!1),z(this,`_abortAnimationsFinish`,void 0);let{animated:e,...t}=this.constructor.defaultProps;this._animated=this.computedAnimated=e,Object.assign(this,t)}},z(H,`defaultProps`,{transformTiming:{duration:900,easing:`linear(0,.005,.019,.039,.066,.096,.129,.165,.202,.24,.278,.316,.354,.39,.426,.461,.494,.526,.557,.586,.614,.64,.665,.689,.711,.731,.751,.769,.786,.802,.817,.831,.844,.856,.867,.877,.887,.896,.904,.912,.919,.925,.931,.937,.942,.947,.951,.955,.959,.962,.965,.968,.971,.973,.976,.978,.98,.981,.983,.984,.986,.987,.988,.989,.99,.991,.992,.992,.993,.994,.994,.995,.995,.996,.996,.9963,.9967,.9969,.9972,.9975,.9977,.9979,.9981,.9982,.9984,.9985,.9987,.9988,.9989,1)`},spinTiming:void 0,opacityTiming:{duration:450,easing:`ease-out`},animated:!0,trend:(e,t)=>Math.sign(t-e),continuous:!1,respectMotionPreference:!0,digits:void 0}),_e=class{willUpdate(){this._prevWidth=this.el.offsetWidth,this._prevLeft=this.el.getBoundingClientRect().left,this._integer.willUpdate(),this._fraction.willUpdate()}update({integer:e,fraction:t}){this._integer.update(e),this._fraction.update(t)}didUpdate(){let e=this.el.getBoundingClientRect();this._integer.didUpdate(),this._fraction.didUpdate();let t=this._prevLeft-e.left,n=this.el.offsetWidth,r=this._prevWidth-n;this.el.style.setProperty(`--width`,String(n)),this.el.animate({[T]:[`${t}px`,`0px`],[w]:[r,0]},{...this.flow.transformTiming,composite:`accumulate`})}constructor(e,t,n,{className:r,...i}={}){z(this,`flow`,void 0),z(this,`el`,void 0),z(this,`_inner`,void 0),z(this,`_integer`,void 0),z(this,`_fraction`,void 0),z(this,`_prevWidth`,void 0),z(this,`_prevLeft`,void 0),this.flow=e,this._integer=new W(e,t,{justify:`right`,part:`integer`}),this._fraction=new W(e,n,{justify:`left`,part:`fraction`}),this._inner=v(`span`,{className:`number__inner`},[this._integer.el,this._fraction.el]),this.el=v(`span`,{...i,part:`number`,className:`number ${r??``}`},[this._inner])}},U=class{addChar(e,{startDigitsAtZero:t=!1,...n}={}){let r=e.type===`integer`||e.type===`fraction`?new J(this,e.type,t?0:e.value,e.pos,{...n,onRemove:this.onCharRemove(e.key)}):new ve(this,e.type,e.value,{...n,onRemove:this.onCharRemove(e.key)});return this.children.set(e.key,r),r}unpop(e){e.el.classList.remove(`section__exiting`),e.el.style.top=``,e.el.style[this.justify]=``}pop(e){e.forEach(e=>{e.el.style.top=`${e.el.offsetTop}px`,e.el.style[this.justify]=`${ae(e.el,this.justify)}px`}),e.forEach(e=>{e.el.classList.add(`section__exiting`),e.present=!1})}addNewAndUpdateExisting(e){let t=new Map,n=new Map,r=this.justify===`left`,i=r?`prepend`:`append`;if(ie(e,e=>{let r;this.children.has(e.key)?(r=this.children.get(e.key),n.set(e,r),this.unpop(r),r.present=!0):(r=this.addChar(e,{startDigitsAtZero:!0,animateIn:!0}),t.set(e,r)),this.el[i](r.el)},{reverse:r}),this.flow.computedAnimated){let e=this.el.getBoundingClientRect();t.forEach(t=>{t.willUpdate(e)})}t.forEach((e,t)=>{e.update(t.value)}),n.forEach((e,t)=>{e.update(t.value)})}willUpdate(){let e=this.el.getBoundingClientRect();this._prevOffset=e[this.justify],this.children.forEach(t=>t.willUpdate(e))}didUpdate(){let e=this.el.getBoundingClientRect();this.children.forEach(t=>t.didUpdate(e));let t=e[this.justify],n=this._prevOffset-t;n&&this.children.size&&this.el.animate({transform:[`translateX(${n}px)`,`none`]},{...this.flow.transformTiming,composite:`accumulate`})}constructor(e,t,{justify:n,className:r,...i},a){z(this,`flow`,void 0),z(this,`el`,void 0),z(this,`justify`,void 0),z(this,`children`,void 0),z(this,`onCharRemove`,void 0),z(this,`_prevOffset`,void 0),this.flow=e,this.children=new Map,this.onCharRemove=e=>()=>{this.children.delete(e)},this.justify=n;let o=t.map(e=>this.addChar(e).el);this.el=v(`span`,{...i,className:`section section--justify-${n} ${r??``}`},a?a(o):o)}},W=class extends U{update(e){let t=new Map;this.children.forEach((n,r)=>{e.find(e=>e.key===r)||t.set(r,n),this.unpop(n)}),this.addNewAndUpdateExisting(e),t.forEach(e=>{e instanceof J&&e.update(0)}),this.pop(t)}},G=class extends U{update(e){let t=new Map;this.children.forEach((n,r)=>{e.find(e=>e.key===r)||t.set(r,n)}),this.pop(t),this.addNewAndUpdateExisting(e)}},K=class{get present(){return this._present}set present(e){if(this._present!==e){if(this._present=e,!this.flow.computedAnimated){e||this._remove();return}this.el.style.setProperty(`--_number-flow-d-opacity`,e?`0`:`-.999`),this.el.animate({[C]:e?[-.9999,0]:[.999,0]},{...this.flow.opacityTiming,composite:`accumulate`}),e?this.flow.removeEventListener(`animationsfinish`,this._remove):this.flow.addEventListener(`animationsfinish`,this._remove,{once:!0})}}constructor(e,t,{onRemove:n,animateIn:r=!1}={}){z(this,`flow`,void 0),z(this,`el`,void 0),z(this,`_present`,void 0),z(this,`_onRemove`,void 0),z(this,`_remove`,void 0),this.flow=e,this.el=t,this._present=!0,this._remove=()=>{var e,t;this.el.remove(),(e=(t=this)._onRemove)==null||e.call(t)},this.el.classList.add(`animate-presence`),this.flow.computedAnimated&&r&&this.el.animate({[C]:[-.9999,0]},{...this.flow.opacityTiming,composite:`accumulate`}),this._onRemove=n}},q=class extends K{constructor(e,t,n,r){super(e.flow,n,r),z(this,`section`,void 0),z(this,`value`,void 0),z(this,`el`,void 0),this.section=e,this.value=t,this.el=n}},J=class extends q{willUpdate(e){let t=this.el.getBoundingClientRect();this._prevValue=this.value;let n=t[this.section.justify]-e[this.section.justify],r=t.width/2;this._prevCenter=this.section.justify===`left`?n+r:n-r}update(e){var t,n;(t=this._numbers[this.value])==null||t.classList.remove(`is-current`),this.el.style.setProperty(`--current`,String(e)),(n=this._numbers[e])==null||n.classList.add(`is-current`),this.value=e}didUpdate(e){let t=this.el.getBoundingClientRect(),n=t[this.section.justify]-e[this.section.justify],r=t.width/2,i=this.section.justify===`left`?n+r:n-r,a=this._prevCenter-i;a&&this.el.animate({transform:[`translateX(${a}px)`,`none`]},{...this.flow.transformTiming,composite:`accumulate`});let o=this.diff;o&&(this.el.classList.add(`is-spinning`),this.el.animate({[E]:[-o,0]},{...this.flow.spinTiming??this.flow.transformTiming,composite:`accumulate`}),this.flow.addEventListener(`animationsfinish`,this._onAnimationsFinish,{once:!0}))}get diff(){let e=this.flow.computedTrend,t=this.value-this._prevValue;return!t&&this.flow.startingPos!=null&&this.flow.startingPos>=this.pos?this._length*e:(e||=Math.sign(t),e<0&&this.value>this._prevValue?this.value-this._length-this._prevValue:e>0&&this.value<this._prevValue?this._length-this._prevValue+this.value:t)}constructor(e,t,n,r,i){let a=(e.flow.digits?.[r]?.max??9)+1,o=Array.from({length:a}).map((e,t)=>{let r=v(`span`,{className:`digit__num${t===n?` is-current`:``}`},[document.createTextNode(String(t))]);return r.style.setProperty(`--n`,String(t)),r}),s=v(`span`,{part:`digit ${t}-digit`,className:`digit`},o);s.style.setProperty(`--current`,String(n)),s.style.setProperty(`--length`,String(a)),super(e,n,s,i),z(this,`pos`,void 0),z(this,`_numbers`,void 0),z(this,`_length`,void 0),z(this,`_prevValue`,void 0),z(this,`_prevCenter`,void 0),z(this,`_onAnimationsFinish`,void 0),this.pos=r,this._onAnimationsFinish=()=>{this.el.classList.remove(`is-spinning`)},this._numbers=o,this._length=a}},ve=class extends q{willUpdate(e){this.type!==`decimal`&&(this._prevOffset=this.el.getBoundingClientRect()[this.section.justify]-e[this.section.justify])}update(e){if(this.value!==e){let t=this._children.get(this.value);if(t.present=!1,t.el.classList.add(`symbol__exiting`),this._children.has(e)){let t=this._children.get(e);t.present=!0,t.el.classList.remove(`symbol__exiting`)}else{let t=v(`span`,{className:`symbol__value`,textContent:e});this.el.appendChild(t),this._children.set(e,new K(this.flow,t,{animateIn:!0,onRemove:this._onChildRemove(e)}))}}this.value=e}didUpdate(e){if(this.type===`decimal`)return;let t=this.el.getBoundingClientRect()[this.section.justify]-e[this.section.justify],n=this._prevOffset-t;n&&this.el.animate({transform:[`translateX(${n}px)`,`none`]},{...this.flow.transformTiming,composite:`accumulate`})}constructor(e,t,n,r){let i=v(`span`,{className:`symbol__value`,textContent:n});super(e,n,v(`span`,{part:`symbol ${t}`,className:`symbol`},[i]),r),z(this,`type`,void 0),z(this,`_children`,void 0),z(this,`_prevOffset`,void 0),z(this,`_onChildRemove`,void 0),this.type=t,this._children=new Map,this._onChildRemove=e=>()=>{this._children.delete(e)},this._children.set(n,new K(this.flow,i,{onRemove:this._onChildRemove(n)}))}}}));function be(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function xe(e){let{transformTiming:t,spinTiming:n,opacityTiming:r,animated:i,respectMotionPreference:a,trend:o,continuous:s,...c}=e;return[{transformTiming:t,spinTiming:n,opacityTiming:r,animated:i,respectMotionPreference:a,trend:o,continuous:s},c]}var Y,Se,X,Ce,Z,we,Te,Ee,De,Q=e((()=>{p(),a(),ye(),Y=parseInt(r.match(/^(\d+)\./)?.[1])>=19,Se=[`data`,`digits`],X=class extends H{attributeChangedCallback(e,t,n){this[e]=JSON.parse(n)}},be(X,`observedAttributes`,Y?[]:Se),y(`number-flow-react`,X),Ce={},Z=Y?e=>e:JSON.stringify,we=class extends l{updateProperties(e){if(!this.el)return;this.el.manual=!this.props.isolate;let[t]=xe(this.props);Object.entries(t).forEach(([e,t])=>{this.el[e]=t??X.defaultProps[e]}),e?.onAnimationsStart&&this.el.removeEventListener(`animationsstart`,e.onAnimationsStart),this.props.onAnimationsStart&&this.el.addEventListener(`animationsstart`,this.props.onAnimationsStart),e?.onAnimationsFinish&&this.el.removeEventListener(`animationsfinish`,e.onAnimationsFinish),this.props.onAnimationsFinish&&this.el.addEventListener(`animationsfinish`,this.props.onAnimationsFinish)}componentDidMount(){this.updateProperties(),Y&&this.el&&(this.el.digits=this.props.digits,this.el.data=this.props.data)}getSnapshotBeforeUpdate(e){if(this.updateProperties(e),e.data!==this.props.data){if(this.props.group)return this.props.group.willUpdate(),()=>this.props.group?.didUpdate();if(!this.props.isolate){var t,n;return(n=this.el)==null||(t=n.willUpdate)==null||t.call(n),()=>this.el?.didUpdate()}}return null}componentDidUpdate(e,t,n){n?.()}handleRef(e){this.props.innerRef&&(this.props.innerRef.current=e),this.el=e}render(){let[e,{innerRef:t,className:n,data:r,willChange:i,isolate:a,group:o,digits:s,onAnimationsStart:c,onAnimationsFinish:l,...u}]=xe(this.props);return f(`number-flow-react`,{ref:this.handleRef,"data-will-change":i?``:void 0,class:n,"aria-label":r.valueAsString,...u,role:`img`,dangerouslySetInnerHTML:{__html:_?``:R(r)},suppressHydrationWarning:!0,digits:Z(s),data:Z(r)})}constructor(e){super(e),be(this,`el`,void 0),this.handleRef=this.handleRef.bind(this)}},Te=u(function({value:e,locales:t,format:r,prefix:a,suffix:o,...s},l){c(l,()=>u.current,[]);let u=d(),p=n(De);p?.useRegister(u);let m=i(()=>t?JSON.stringify(t):``,[t]),h=i(()=>r?JSON.stringify(r):``,[r]),ee=i(()=>{var n,i;return he(e,(n=Ce)[i=`${m}:${h}`]??(n[i]=new Intl.NumberFormat(t,r)),a,o)},[e,m,h,a,o]);return f(we,{...s,group:p,data:ee,innerRef:u})}),Ee=Te,De=ee(void 0)})),Oe=e((()=>{Q(),Q()}));function $(e){let{value:t,format:n,gradientHeight:r}=e,i=te.current()===te.canvas,a=je(),o={userSelect:e.userSelect?`auto`:`none`,fontVariantNumeric:e.monospace?`tabular-nums`:void 0,margin:0,color:e.color,...e.font,...e.style},s={notation:n.style===`compact`?`compact`:`standard`,signDisplay:n.plusSign?`exceptZero`:`auto`,useGrouping:n.separators};return i?m(`div`,{style:{...e.style,...o,whiteSpace:`pre`},children:[e.prefix,Intl.NumberFormat(n.locale||void 0,s).format(t),e.suffix]}):m(`div`,{id:a,style:{...e.style,whiteSpace:`pre`,marginTop:-r,marginBottom:-r},children:[f(Ee,{value:t,trend:ke[e.direction],continuous:e.continuous,format:s,locales:n.locale||void 0,prefix:e.prefix,suffix:e.suffix,transformTiming:{easing:Ae[e.transition.easing],duration:e.transition.duration*1e3},opacityTiming:{easing:`ease-out`,duration:e.transition.duration*1e3/2},isolate:!0,willChange:!0,style:o}),f(`style`,{dangerouslySetInnerHTML:{__html:`#${a} { --number-flow-mask-height: ${r}px }`}})]})}var ke,Ae,je,Me=e((()=>{s(),p(),re(),a(),Oe(),ke={nearest:(e,t)=>Math.sign(t-e),individual:0,up:1,down:-1},Ae={smooth:`linear(0,.005,.019,.039,.066,.096,.129,.165,.202,.24,.278,.316,.354,.39,.426,.461,.494,.526,.557,.586,.614,.64,.665,.689,.711,.731,.751,.769,.786,.802,.817,.831,.844,.856,.867,.877,.887,.896,.904,.912,.919,.925,.931,.937,.942,.947,.951,.955,.959,.962,.965,.968,.971,.973,.976,.978,.98,.981,.983,.984,.986,.987,.988,.989,.99,.991,.992,.992,.993,.994,.994,.995,.995,.996,.996,.9963,.9967,.9969,.9972,.9975,.9977,.9979,.9981,.9982,.9984,.9985,.9987,.9988,.9989,1)`,linear:`linear`,ease:`ease`,easeIn:`ease-in`,easeOut:`ease-out`,easeInOut:`ease-in-out`},$.displayName=`NumberFlow`,ne($,{value:{type:g.Number,defaultValue:0},format:{type:g.Object,controls:{style:{type:g.Enum,defaultValue:`default`,options:[`default`,`compact`],optionTitles:[`Default (1,000)`,`Compact (1K)`],displaySegmentedControl:!0,segmentedControlDirection:`vertical`},separators:{type:g.Boolean,defaultValue:!0},plusSign:{type:g.Boolean,defaultValue:!1},locale:{type:g.String,placeholder:`Auto${t===void 0?``:` (${t.language})`}`}}},direction:{type:g.Enum,defaultValue:`nearest`,options:[`nearest`,`individual`,`up`,`down`],optionTitles:[`Nearest (All)`,`Nearest (Per-Character)`,`Up ↑`,`Down ↓`]},continuous:{type:g.Boolean,defaultValue:!0,hidden:e=>e.direction===`individual`},gradientHeight:{type:g.Number,defaultValue:10,min:0,step:1,title:`Gradient`},font:{type:`font`,controls:`extended`,defaultFontType:`sans-serif`,defaultValue:{fontSize:16,lineHeight:1}},color:{type:g.Color,defaultValue:`#000`},prefix:{type:g.String,placeholder:`Prefix`},suffix:{type:g.String,placeholder:`Suffix`},userSelect:{type:g.Boolean,defaultValue:!1},transition:{type:g.Object,controls:{easing:{type:g.Enum,defaultValue:`smooth`,options:[`smooth`,`linear`,`ease`,`easeIn`,`easeOut`,`easeInOut`],optionTitles:[`Smooth`,`Linear`,`Ease`,`Ease In`,`Ease Out`,`Ease In Out`]},duration:{type:g.Number,defaultValue:.75,min:0,step:.01}},description:`More components at [Framer University](https://frameruni.link/cc).`}}),je=()=>`frameruni-${h().replace(/:/g,``)}`}));export{Me as n,$ as t};
//# sourceMappingURL=NumberFlow_Prod.BV1x6ULA.mjs.map