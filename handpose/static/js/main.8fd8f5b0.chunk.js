(this.webpackJsonphandpose=this.webpackJsonphandpose||[]).push([[0],{260:function(e,r,n){},262:function(e,r,n){},267:function(e,r){},268:function(e,r){},276:function(e,r){},279:function(e,r){},280:function(e,r){},283:function(e,r,n){"use strict";n.r(r);var i=n(84),t=n.n(i),a=n(233),d=n.n(a),o=(n(260),n(19)),c=n(4),l=n.n(c),u=n(11),g=n(6),F=(n.p,n(262),n(282),n(253)),s=n(254),h=n.n(s),C={t:[0,1,2,3,4],i:[0,5,6,7,8],m:[0,9,10,11,12],r:[0,13,14,15,16],p:[0,17,18,19,20]},D=function(e,r){e.length>0&&e.forEach((function(e){for(var n=e.landmarks,i=0;i<Object.keys(C).length;i++)for(var t=Object.keys(C)[i],a=0;a<C[t].length-1;a++){var d=C[t][a],o=C[t][a+1];r.beginPath(),r.moveTo(n[d][0],n[d][1]),r.lineTo(n[o][0],n[o][1]),r.strokeStyle="white",r.lineWidth=2,r.stroke()}for(var c=0;c<n.length;c++){var l=n[c][0],u=n[c][1];r.beginPath(),r.arc(l,u,5,0,3*Math.PI),r.fillStyle="green",r.fill()}}))},f=n(20),p=new f.GestureDescription("thumbs_down");p.addCurl(f.Finger.Thumb,f.FingerCurl.NoCurl,1),p.addDirection(f.Finger.Thumb,f.FingerDirection.VerticalDown,1),p.addDirection(f.Finger.Thumb,f.FingerDirection.DiagonalDownLeft,.5),p.addDirection(f.Finger.Thumb,f.FingerDirection.DiagonalDownRight,.5),p.addCurl(f.Finger.Index,f.FingerCurl.FullCurl,1),p.addDirection(f.Finger.Index,f.FingerDirection.HorizontalLeft,1),p.addDirection(f.Finger.Index,f.FingerDirection.HorizontalRight,1),p.addCurl(f.Finger.Middle,f.FingerCurl.FullCurl,1),p.addDirection(f.Finger.Middle,f.FingerDirection.HorizontalLeft,1),p.addDirection(f.Finger.Middle,f.FingerDirection.HorizontalRight,1),p.addCurl(f.Finger.Ring,f.FingerCurl.FullCurl,1),p.addDirection(f.Finger.Ring,f.FingerDirection.HorizontalLeft,1),p.addDirection(f.Finger.Ring,f.FingerDirection.HorizontalRight,1),p.addCurl(f.Finger.Pinky,f.FingerCurl.FullCurl,1),p.addDirection(f.Finger.Pinky,f.FingerDirection.HorizontalLeft,1),p.addDirection(f.Finger.Pinky,f.FingerDirection.HorizontalRight,1);var b=new f.GestureDescription("raised_hand");b.addCurl(f.Finger.Thumb,f.FingerCurl.NoCurl,1),b.addDirection(f.Finger.Thumb,f.FingerDirection.VerticalUp,1),b.addCurl(f.Finger.Index,f.FingerCurl.NoCurl,1),b.addDirection(f.Finger.Index,f.FingerDirection.VerticalUp,1),b.addCurl(f.Finger.Middle,f.FingerCurl.NoCurl,1),b.addDirection(f.Finger.Middle,f.FingerDirection.VerticalUp,1),b.addCurl(f.Finger.Ring,f.FingerCurl.NoCurl,1),b.addDirection(f.Finger.Ring,f.FingerDirection.VerticalUp,1),b.addCurl(f.Finger.Pinky,f.FingerCurl.NoCurl,1),b.addDirection(f.Finger.Pinky,f.FingerDirection.VerticalUp,1);var m=new f.GestureDescription("metal_hand");m.addCurl(f.Finger.Thumb,f.FingerCurl.NoCurl,1),m.addDirection(f.Finger.Thumb,f.FingerDirection.HorizontalLeft,1),m.addDirection(f.Finger.Thumb,f.FingerDirection.HorizontalRight,1),m.addCurl(f.Finger.Index,f.FingerCurl.NoCurl,1),m.addDirection(f.Finger.Index,f.FingerDirection.VerticalUp,1),m.addCurl(f.Finger.Middle,f.FingerCurl.FullCurl,1),m.addDirection(f.Finger.Middle,f.FingerDirection.VerticalUp,1),m.addCurl(f.Finger.Ring,f.FingerCurl.FullCurl,1),m.addDirection(f.Finger.Ring,f.FingerDirection.VerticalUp,1),m.addCurl(f.Finger.Pinky,f.FingerCurl.NoCurl,1),m.addDirection(f.Finger.Pinky,f.FingerDirection.VerticalUp,1);var j=new f.GestureDescription("horn_hand");j.addCurl(f.Finger.Thumb,f.FingerCurl.FullCurl,5),j.addDirection(f.Finger.Thumb,f.FingerDirection.HorizontalLeft,1),j.addDirection(f.Finger.Thumb,f.FingerDirection.HorizontalRight,1),j.addCurl(f.Finger.Index,f.FingerCurl.NoCurl,1),j.addDirection(f.Finger.Index,f.FingerDirection.VerticalUp,1),j.addCurl(f.Finger.Middle,f.FingerCurl.FullCurl,1),j.addCurl(f.Finger.Ring,f.FingerCurl.FullCurl,1),j.addCurl(f.Finger.Pinky,f.FingerCurl.NoCurl,1),j.addDirection(f.Finger.Pinky,f.FingerDirection.VerticalUp,1);var v=[f.Gestures.VictoryGesture,f.Gestures.ThumbsUpGesture,p,b,m,j],x=n(69);var k=function(){var e=Object(i.useRef)(null),r=Object(i.useRef)(null),n=Object(i.useState)("unknown"),t=Object(g.a)(n,2),a=t[0],d=t[1],c=Object(i.useState)(!1),s=Object(g.a)(c,2),C=s[0],p=s[1],b=function(){var e=Object(u.a)(l.a.mark((function e(){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.a();case 2:r=e.sent,console.log("Handpose model correctly loaded"),p(!0),setInterval((function(){m(r)}),200);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){var n=Object(u.a)(l.a.mark((function n(i){var t,a,c,u,g,F,s,h,C;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if("undefined"===typeof e.current||null==e.current||4!==e.current.video.readyState){n.next=20;break}return t=e.current.video,a=t.videoWidth,c=t.videoHeight,e.current.video.width=a,e.current.video.height=c,r.current.width=a,r.current.height=c,n.next=10,i.estimateHands(t);case 10:if(!((u=n.sent).length>0)){n.next=19;break}return g=new f.GestureEstimator(v),n.next=15,g.estimate(u[0].landmarks,8);case 15:void 0!==(F=n.sent).gestures&&F.gestures.length>0&&(s=F.gestures.map((function(e){return e.confidence})),h=s.indexOf(Math.max.apply(Math,Object(o.a)(s))),d(F.gestures[h].name),C=r.current.getContext("2d"),D(u,C)),n.next=20;break;case 19:d("unknown");case 20:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return b(),Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)("h1",{children:"Detect Hand Emoji"}),!C&&Object(x.jsx)("h2",{children:"Loading model..."}),Object(x.jsx)("p",{children:"Instruction: try some hand gestures, like \ud83d\udc4d \u270c \u270b \ud83e\udd1f \ud83d\udc4e"}),Object(x.jsx)("div",{className:"emoji",children:{thumbs_up:"\ud83d\udc4d",victory:"\u270c",thumbs_down:"\ud83d\udc4e",raised_hand:"\u270b",metal_hand:"\ud83e\udd1f",horn_hand:"\ud83e\udd18",unknown:"\u2753"}[a]}),Object(x.jsxs)("header",{className:"App-headesr",children:[Object(x.jsx)(h.a,{ref:e,className:"camera"}),Object(x.jsx)("canvas",{ref:r,className:"camera"})]})]})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,284)).then((function(r){var n=r.getCLS,i=r.getFID,t=r.getFCP,a=r.getLCP,d=r.getTTFB;n(e),i(e),t(e),a(e),d(e)}))};d.a.render(Object(x.jsx)(t.a.StrictMode,{children:Object(x.jsx)(k,{})}),document.getElementById("root")),y()}},[[283,1,2]]]);
//# sourceMappingURL=main.8fd8f5b0.chunk.js.map