(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7c69a0c8"],{"29d7":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page about-section white-bg p-65px-t"},[i("div",{staticClass:"container-fluid p-0"},[i("div",{staticClass:"row no-gutters"},[i("div",{staticClass:"col-lg-2 col-xl-3 page-title bg-contact-us-image"},[i("div",{staticClass:"v-center-box d-flex align-items-end"},[i("h2",[t._v(t._s(t.header))])])]),i("div",{staticClass:"col-lg-10 col-xl-9"},[i("div",{staticClass:"page-scroll"},[i("div",{staticClass:"page-content"},[i("div",{staticClass:"section-titel"},[i("div",{staticClass:"st-title"},[i("h2",{staticClass:"theme-after dark-color"},[t._v(t._s(t.header))])])]),i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-12"},[i("div",{staticClass:"about-text"},[i("section",{domProps:{innerHTML:t._s(t.body)}})])])])])])])])])])},a=[],n=(i("ac6a"),i("2e8c")),c={data:function(){return{lang:{en:{},fr:{}}}},created:function(t){var e=this;n.db.collection("languages").get().then(function(t){t.forEach(function(t){e.lang=t.data().configs})})},computed:{header:function(){return this.lang[this.$i18n.locale].objectivesHeader},body:function(){return this.lang[this.$i18n.locale].objectivesPage}},methods:{}},l=c,o=i("2877"),r=Object(o["a"])(l,s,a,!1,null,null,null);e["default"]=r.exports},ac6a:function(t,e,i){for(var s=i("cadf"),a=i("0d58"),n=i("2aba"),c=i("7726"),l=i("32e9"),o=i("84f2"),r=i("2b4c"),d=r("iterator"),u=r("toStringTag"),g=o.Array,L={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},f=a(L),h=0;h<f.length;h++){var v,C=f[h],S=L[C],p=c[C],b=p&&p.prototype;if(b&&(b[d]||l(b,d,g),b[u]||l(b,u,C),o[C]=g,S))for(v in s)b[v]||n(b,v,s[v],!0)}}}]);
//# sourceMappingURL=chunk-7c69a0c8.17be18f8.js.map