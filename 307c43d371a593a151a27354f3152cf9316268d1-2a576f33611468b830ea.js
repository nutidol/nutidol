"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[344],{6270:function(e,n,t){t.d(n,{Z:function(){return P}});var r=t(7462),o=t(3366),a=t(5655),u=t(7294);var c=function(e,n){var t=(0,u.useRef)(!0);(0,u.useEffect)((function(){if(!t.current)return e();t.current=!1}),n)},i=t(9424);function l(e){var n,t,r=(n=e,(t=(0,u.useRef)(n)).current=n,t);(0,u.useEffect)((function(){return function(){return r.current()}}),[])}var s=Math.pow(2,31)-1;function f(e,n,t){var r=t-Date.now();e.current=r<=s?setTimeout(n,r):setTimeout((function(){return f(e,n,t)}),s)}function d(){var e=function(){var e=(0,u.useRef)(!0),n=(0,u.useRef)((function(){return e.current}));return(0,u.useEffect)((function(){return function(){e.current=!1}}),[]),n.current}(),n=(0,u.useRef)();return l((function(){return clearTimeout(n.current)})),(0,u.useMemo)((function(){var t=function(){return clearTimeout(n.current)};return{set:function(r,o){void 0===o&&(o=0),e()&&(t(),o<=s?n.current=setTimeout(r,o):f(n,r,Date.now()+o))},clear:t}}),[])}var v=t(5900),m=t.n(v),p=t(5160),h=t(5697),b=t.n(h),E=t(5513),x=(0,t(8870).Z)("carousel-caption"),y=t(9541),N=["as","bsPrefix","children","className"],k=u.forwardRef((function(e,n){var t=e.as,a=void 0===t?"div":t,c=e.bsPrefix,i=e.children,l=e.className,s=(0,o.Z)(e,N),f=m()(l,(0,y.vE)(c,"carousel-item"));return u.createElement(a,(0,r.Z)({ref:n},s,{className:f}),i)}));k.displayName="CarouselItem";var C=k;function S(e,n){var t=0;return u.Children.map(e,(function(e){return u.isValidElement(e)?n(e,t++):e}))}var w=t(6306),I=t(1714),g=t(9059),T=["as","bsPrefix","slide","fade","controls","indicators","activeIndex","onSelect","onSlide","onSlid","interval","keyboard","onKeyDown","pause","onMouseOver","onMouseOut","wrap","touch","onTouchStart","onTouchMove","onTouchEnd","prevIcon","prevLabel","nextIcon","nextLabel","className","children"],Z={bsPrefix:b().string,as:b().elementType,slide:b().bool,fade:b().bool,controls:b().bool,indicators:b().bool,activeIndex:b().number,onSelect:b().func,onSlide:b().func,onSlid:b().func,interval:b().number,keyboard:b().bool,pause:b().oneOf(["hover",!1]),wrap:b().bool,touch:b().bool,prevIcon:b().node,prevLabel:b().string,nextIcon:b().node,nextLabel:b().string},M={slide:!0,fade:!1,controls:!0,indicators:!0,defaultActiveIndex:0,interval:5e3,keyboard:!0,pause:"hover",wrap:!0,touch:!0,prevIcon:u.createElement("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:"Previous",nextIcon:u.createElement("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:"Next"};function R(e,n){var t=(0,E.Ch)(e,{activeIndex:"onSelect"}),l=t.as,s=void 0===l?"div":l,f=t.bsPrefix,v=t.slide,h=t.fade,b=t.controls,x=t.indicators,N=t.activeIndex,k=t.onSelect,C=t.onSlide,Z=t.onSlid,M=t.interval,R=t.keyboard,L=t.onKeyDown,P=t.pause,D=t.onMouseOver,O=t.onMouseOut,A=t.wrap,_=t.touch,K=t.onTouchStart,V=t.onTouchMove,X=t.onTouchEnd,F=t.prevIcon,H=t.prevLabel,j=t.nextIcon,q=t.nextLabel,z=t.className,B=t.children,G=(0,o.Z)(t,T),J=(0,y.vE)(f,"carousel"),Q=(0,u.useRef)(null),U=(0,u.useState)("next"),W=U[0],Y=U[1],$=(0,u.useState)(!1),ee=$[0],ne=$[1],te=(0,u.useState)(!1),re=te[0],oe=te[1],ae=(0,u.useState)(N||0),ue=ae[0],ce=ae[1];re||N===ue||(Q.current?Y(Q.current):Y((N||0)>ue?"next":"prev"),v&&oe(!0),ce(N||0)),(0,u.useEffect)((function(){Q.current&&(Q.current=null)}));var ie,le=0;!function(e,n){var t=0;u.Children.forEach(e,(function(e){u.isValidElement(e)&&n(e,t++)}))}(B,(function(e,n){++le,n===N&&(ie=e.props.interval)}));var se=(0,i.Z)(ie),fe=(0,u.useCallback)((function(e){if(!re){var n=ue-1;if(n<0){if(!A)return;n=le-1}Q.current="prev",k&&k(n,e)}}),[re,ue,k,A,le]),de=(0,a.Z)((function(e){if(!re){var n=ue+1;if(n>=le){if(!A)return;n=0}Q.current="next",k&&k(n,e)}})),ve=(0,u.useRef)();(0,u.useImperativeHandle)(n,(function(){return{element:ve.current,prev:fe,next:de}}));var me=(0,a.Z)((function(){!document.hidden&&function(e){if(!(e&&e.style&&e.parentNode&&e.parentNode.style))return!1;var n=getComputedStyle(e);return"none"!==n.display&&"hidden"!==n.visibility&&"none"!==getComputedStyle(e.parentNode).display}(ve.current)&&de()})),pe="next"===W?"left":"right";c((function(){v||(C&&C(ue,pe),Z&&Z(ue,pe))}),[ue]);var he=J+"-item-"+W,be=J+"-item-"+pe,Ee=(0,u.useCallback)((function(e){(0,g.Z)(e),C&&C(ue,pe)}),[C,ue,pe]),xe=(0,u.useCallback)((function(){oe(!1),Z&&Z(ue,pe)}),[Z,ue,pe]),ye=(0,u.useCallback)((function(e){if(R&&!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":return e.preventDefault(),void fe(e);case"ArrowRight":return e.preventDefault(),void de(e)}L&&L(e)}),[R,L,fe,de]),Ne=(0,u.useCallback)((function(e){"hover"===P&&ne(!0),D&&D(e)}),[P,D]),ke=(0,u.useCallback)((function(e){ne(!1),O&&O(e)}),[O]),Ce=(0,u.useRef)(0),Se=(0,u.useRef)(0),we=d(),Ie=(0,u.useCallback)((function(e){Ce.current=e.touches[0].clientX,Se.current=0,"hover"===P&&ne(!0),K&&K(e)}),[P,K]),ge=(0,u.useCallback)((function(e){e.touches&&e.touches.length>1?Se.current=0:Se.current=e.touches[0].clientX-Ce.current,V&&V(e)}),[V]),Te=(0,u.useCallback)((function(e){if(_){var n=Se.current;Math.abs(n)>40&&(n>0?fe(e):de(e))}"hover"===P&&we.set((function(){ne(!1)}),M||void 0),X&&X(e)}),[_,P,fe,de,we,M,X]),Ze=null!=M&&!ee&&!re,Me=(0,u.useRef)();(0,u.useEffect)((function(){var e,n;if(Ze)return Me.current=window.setInterval(document.visibilityState?me:de,null!=(e=null!=(n=se.current)?n:M)?e:void 0),function(){null!==Me.current&&clearInterval(Me.current)}}),[Ze,de,se,M,me]);var Re=(0,u.useMemo)((function(){return x&&Array.from({length:le},(function(e,n){return function(e){k&&k(n,e)}}))}),[x,le,k]);return u.createElement(s,(0,r.Z)({ref:ve},G,{onKeyDown:ye,onMouseOver:Ne,onMouseOut:ke,onTouchStart:Ie,onTouchMove:ge,onTouchEnd:Te,className:m()(z,J,v&&"slide",h&&J+"-fade")}),x&&u.createElement("ol",{className:J+"-indicators"},S(B,(function(e,n){return u.createElement("li",{key:n,className:n===ue?"active":void 0,onClick:Re?Re[n]:void 0})}))),u.createElement("div",{className:J+"-inner"},S(B,(function(e,n){var t=n===ue;return v?u.createElement(p.ZP,{in:t,onEnter:t?Ee:void 0,onEntered:t?xe:void 0,addEndListener:I.Z},(function(n){return u.cloneElement(e,{className:m()(e.props.className,t&&"entered"!==n&&he,("entered"===n||"exiting"===n)&&"active",("entering"===n||"exiting"===n)&&be)})})):u.cloneElement(e,{className:m()(e.props.className,t&&"active")})}))),b&&u.createElement(u.Fragment,null,(A||0!==N)&&u.createElement(w.Z,{className:J+"-control-prev",onClick:fe},F,H&&u.createElement("span",{className:"sr-only"},H)),(A||N!==le-1)&&u.createElement(w.Z,{className:J+"-control-next",onClick:de},j,q&&u.createElement("span",{className:"sr-only"},q))))}var L=u.forwardRef(R);L.displayName="Carousel",L.propTypes=Z,L.defaultProps=M,L.Caption=x,L.Item=C;var P=L}}]);
//# sourceMappingURL=307c43d371a593a151a27354f3152cf9316268d1-2a576f33611468b830ea.js.map