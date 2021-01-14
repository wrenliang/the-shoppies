(this["webpackJsonpthe-shoppies"]=this["webpackJsonpthe-shoppies"]||[]).push([[0],{37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},43:function(e,t,n){},47:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var i=n(1),s=n(0),a=n.n(s),o=n(15),c=n.n(o),r=(n(37),n(7)),h=n(8),l=n(6),d=n(10),u=n(9),m=n(54),j=n(56),b=n(52),p=n(55),v=n(25),g=(n(38),function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var i;return Object(r.a)(this,n),(i=t.call(this,e)).state={isHovered:!1},i.toggleHover=i.toggleHover.bind(Object(l.a)(i)),i.nominateClicked=i.nominateClicked.bind(Object(l.a)(i)),i}return Object(h.a)(n,[{key:"toggleHover",value:function(e){this.setState({isHovered:e})}},{key:"nominateClicked",value:function(){console.log("Movie: ".concat(this.props.movie.imdbID," clicked")),this.props.addNominationHandler(this.props.movie.imdbID,this.props.movie),this.forceUpdate()}},{key:"render",value:function(){var e=this;if(this.state.isHovered||"N/A"===this.props.movie.Poster){var t={position:"absolute",left:"0",right:"0",zIndex:"1",width:"300px",height:"468px",backgroundImage:"N/A"===this.props.movie.Poster?null:"url(".concat(this.props.movie.Poster,")"),backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center center",filter:"blur(3px) brightness(20%)"};return Object(i.jsxs)("div",{className:"ResultItem",style:{position:"relative",width:"300px",height:"468px",backgroundColor:"black"},onMouseEnter:function(){return e.toggleHover(!0)},onMouseLeave:function(){return e.toggleHover(!1)},children:[Object(i.jsx)("div",{className:"ResultItemBackgroundImage",style:t}),Object(i.jsxs)("div",{className:"ResultItemInfo",style:{position:"relative",height:"100%",width:"100%",zIndex:"2",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",color:"#f2eee4"},children:[Object(i.jsx)("h1",{children:"".concat(this.props.movie.Title," (").concat(this.props.movie.Year,")")}),Object(i.jsx)(j.a,{variant:"light",type:"submit",onClick:function(){return e.nominateClicked()},disabled:this.props.nominationList.includes(this.props.movie.imdbID),children:this.props.nominationList.includes(this.props.movie.imdbID)?"Nominated":"Nominate"})]})]})}var n={width:"300px",height:"468px",backgroundImage:"N/A"===this.props.movie.Poster?null:"url(".concat(this.props.movie.Poster,")"),backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center center"};return Object(i.jsx)("div",{className:"ResultItem",style:n,onMouseEnter:function(){return e.toggleHover(!0)},onMouseLeave:function(){return e.toggleHover(!1)}})}}]),n}(a.a.Component)),O=(n(39),function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var s;return Object(r.a)(this,n),(s=t.call(this,e)).searchResults=function(){if(null!=s.props.searchResults)return s.props.searchResults.map((function(e,t){return Object(i.jsx)(g,{movie:e,addNominationHandler:s.props.addNominationHandler,nominationList:s.props.nominationList},t)}))},s}return Object(h.a)(n,[{key:"render",value:function(){return null==this.props.searchTerm||""===this.props.searchTerm?Object(i.jsxs)("div",{className:"ResultsList",children:[Object(i.jsx)("h1",{className:"ResultsListTitle",children:"Search results"}),Object(i.jsx)("p",{className:"ResultsListSubtitle",children:" To browse for movies, please provide a query in the search bar above"})]}):Object(i.jsxs)("div",{className:"ResultsList",children:[Object(i.jsx)("h1",{className:"ResultsListTitle",children:"Results from '".concat(this.props.searchTerm,"'")}),Object(i.jsx)("div",{className:"GridContainer",children:this.searchResults()})]})}}]),n}(a.a.Component)),f=(n(40),function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var s;return Object(r.a)(this,n),(s=t.call(this,e)).nominationItems=function(){return s.props.nominationMovies.map((function(e,t){return Object(i.jsxs)("div",{className:"NominationsListItem",children:[Object(i.jsx)("img",{className:"NominationsListImage",src:e.Poster,alt:"Movie Poster"}),Object(i.jsx)("div",{className:"NominationsListInfo",children:Object(i.jsxs)("h4",{children:["".concat(e.Title," (").concat(e.Year,")")," ",Object(i.jsx)(j.a,{variant:"danger",onClick:function(){return s.props.removeNominationHandler(e.imdbID,e)},children:"Remove"})]})})]},t)}))},s}return Object(h.a)(n,[{key:"render",value:function(){return!0===this.props.showNominations?Object(i.jsxs)("div",{className:"NominatedList",children:[Object(i.jsx)("h1",{className:"NominatedListTitle",children:" \ud83c\udfc6 Your Nominees \ud83c\udfc6 "}),Object(i.jsx)("div",{className:"NominationsListContainer",children:this.nominationItems()})]}):null}}]),n}(a.a.Component)),x=(n(41),function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var s;return Object(r.a)(this,n),(s=t.call(this,e)).nominatedMovies=function(){return s.props.nominationMovies.map((function(e,t){return Object(i.jsxs)("div",{className:"FinishedScreenMovieItem",children:[Object(i.jsx)("img",{className:"FinishedScreenMovieItemImage",src:e.Poster,alt:"Movie Poster"}),Object(i.jsx)("h4",{className:"FinishedScreenMovieItemText",children:"".concat(e.Title," (").concat(e.Year,")")})]},t)}))},s}return Object(h.a)(n,[{key:"render",value:function(){var e=this;return!0===this.props.showFinishedScreen?Object(i.jsxs)("div",{className:"FinishedScreen",children:[Object(i.jsx)("h1",{className:"FinishedScreenTitle",children:"Your Nominees for the Shoppies Movie Awards are..."}),Object(i.jsx)("div",{className:"FinishedScreenMovieList",children:this.nominatedMovies()}),Object(i.jsx)(j.a,{variant:"secondary",onClick:function(){return e.props.dismissScreenHandler()},children:" Continue Browsing "})]}):null}}]),n}(a.a.Component)),T=n(26),N=n.n(T),S=n(28),y=n(53),w=(n(43),function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var i;return Object(r.a)(this,n),(i=t.call(this,e)).debounce=i.debounce.bind(Object(l.a)(i)),i.searchTextDidChange=i.searchTextDidChange.bind(Object(l.a)(i)),i.makeAPICall=i.makeAPICall.bind(Object(l.a)(i)),i.debouncedSearchTextDidChange=i.debounce(i.searchTextDidChange,200),i}return Object(h.a)(n,[{key:"debounce",value:function(e,t){var n;return function(){for(var i=arguments.length,s=new Array(i),a=0;a<i;a++)s[a]=arguments[a];var o=function(){clearTimeout(n),console.log("calling debounced function now!"),e.apply(void 0,s)};clearTimeout(n),n=setTimeout(o,t)}}},{key:"searchTextDidChange",value:function(e){this.makeAPICall("9f05da9b",e.target.value)}},{key:"makeAPICall",value:function(){var e=Object(S.a)(N.a.mark((function e(t,n){var i,s,a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i="http://www.omdbapi.com/?apikey=".concat(t,"&s=").concat(n),e.next=3,fetch(i,{method:"GET"});case 3:return s=e.sent,e.next=6,s.json();case 6:return a=e.sent,this.props.updateListHandler(n,a.Search),e.abrupt("return");case 9:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(i.jsx)("div",{className:"SearchBar",children:Object(i.jsx)(y.a,{children:Object(i.jsx)(y.a.Group,{controlId:"formSearchMovies",children:Object(i.jsx)(y.a.Control,{size:"lg",placeholder:"\ud83d\udd0e  Search for Movies",onChange:this.debouncedSearchTextDidChange})})})})}}]),n}(a.a.Component)),C=(n(47),n.p+"static/media/oscar-statuette.43227f87.jpg"),L=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(i.jsxs)("div",{className:"LandingScreen",children:[Object(i.jsx)("div",{className:"LandingScreenLeft",children:Object(i.jsxs)("div",{className:"LandingScreenLeftInfo",children:[Object(i.jsx)("h1",{className:"LandingScreenLeftTitle",children:" The Shoppies Movie Awards are here... Choose your 5 nominees! "}),Object(i.jsx)(w,{updateListHandler:this.props.updateListHandler})]})}),Object(i.jsx)("img",{className:"LandingScreenImage",src:C,alt:"Oscars Award Show"})]})}}]),n}(a.a.Component),k=(n(48),n(49),n.p+"static/media/shopify-logo.ccfafe16.png"),M=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var i;return Object(r.a)(this,n),(i=t.call(this,e)).state={searchTerm:null,searchResults:null,nominationList:[],nominationMovies:[],showNominations:!1,showFinishedScreen:!1,showToggleToast:!1,showMaximumToast:!1,showCacheToast:!1},i.updateListHandler=i.updateListHandler.bind(Object(l.a)(i)),i.addNominationHandler=i.addNominationHandler.bind(Object(l.a)(i)),i.removeNominationHandler=i.removeNominationHandler.bind(Object(l.a)(i)),i.toggleShowNominations=i.toggleShowNominations.bind(Object(l.a)(i)),i.showFinishedScreenSetup=i.showFinishedScreenSetup.bind(Object(l.a)(i)),i.hideFinishedScreenSetup=i.hideFinishedScreenSetup.bind(Object(l.a)(i)),i.displayToggleToast=i.displayToggleToast.bind(Object(l.a)(i)),i.hideToggleToast=i.hideToggleToast.bind(Object(l.a)(i)),i.displayMaximumToast=i.displayMaximumToast.bind(Object(l.a)(i)),i.hideMaximumToast=i.hideMaximumToast.bind(Object(l.a)(i)),i.displayCacheToast=i.displayCacheToast.bind(Object(l.a)(i)),i.hideCacheToast=i.hideCacheToast.bind(Object(l.a)(i)),i}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.hideFinishedScreenSetup();var e=localStorage.getItem("nominationCache");if(null!=e){var t=JSON.parse(e);this.setState({nominationList:t.nominationList,nominationMovies:t.nominationMovies}),t.nominationList.length>0&&this.displayCacheToast()}}},{key:"addNominationHandler",value:function(e,t){this.state.nominationList.length>=5?this.displayMaximumToast():this.state.nominationList.includes(e)||(this.state.nominationList.push(e),this.state.nominationMovies.push(t),localStorage.setItem("nominationCache",JSON.stringify({nominationList:this.state.nominationList,nominationMovies:this.state.nominationMovies})),this.displayToggleToast(),this.forceUpdate(),5===this.state.nominationList.length&&this.showFinishedScreenSetup())}},{key:"removeNominationHandler",value:function(e,t){var n=this.state.nominationList.indexOf(e),i=this.state.nominationMovies.indexOf(t);-1!==n&&this.state.nominationList.splice(n,1),-1!==i&&this.state.nominationMovies.splice(i,1),localStorage.setItem("nominationCache",JSON.stringify({nominationList:this.state.nominationList,nominationMovies:this.state.nominationMovies})),this.forceUpdate()}},{key:"updateListHandler",value:function(e,t){this.setState({searchTerm:e,searchResults:t})}},{key:"toggleShowNominations",value:function(){this.setState({showNominations:!this.state.showNominations})}},{key:"showFinishedScreenSetup",value:function(){this.setState({showFinishedScreen:!0}),window.scrollTo(0,0),v.a.on()}},{key:"hideFinishedScreenSetup",value:function(){this.setState({showFinishedScreen:!1}),window.scrollTo(0,0),v.a.off()}},{key:"displayToggleToast",value:function(){this.setState({showToggleToast:!0})}},{key:"hideToggleToast",value:function(){this.setState({showToggleToast:!1})}},{key:"displayMaximumToast",value:function(){this.setState({showMaximumToast:!0})}},{key:"hideMaximumToast",value:function(){this.setState({showMaximumToast:!1})}},{key:"displayCacheToast",value:function(){this.setState({showCacheToast:!0})}},{key:"hideCacheToast",value:function(){this.setState({showCacheToast:!1})}},{key:"render",value:function(){var e=this;return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsxs)(m.a,{fixed:"top",variant:"light",children:[Object(i.jsxs)(m.a.Brand,{children:[" ",Object(i.jsx)("img",{src:k,alt:"Shopify Logo",width:"30",height:"30",className:"d-inline-block align-top"})," ",Object(i.jsx)("strong",{children:"The Shoppies"})," "]}),Object(i.jsx)(m.a.Collapse,{className:"justify-content-end",children:Object(i.jsxs)(j.a,{variant:"success",onClick:function(){return e.toggleShowNominations()},children:[Object(i.jsxs)(b.a,{variant:this.state.nominationList.length>=5?"danger":"light",children:[" ",this.state.nominationList.length," "]}),"\ud83c\udfc6"]})})]}),Object(i.jsxs)("div",{className:"ToastContainer",children:[Object(i.jsx)("div",{className:"ToastContainerNavbarSpacer"}),Object(i.jsxs)(p.a,{show:this.state.showToggleToast,onClose:function(){return e.hideToggleToast()},delay:3e3,autohide:!0,children:[Object(i.jsxs)(p.a.Header,{children:[Object(i.jsx)("strong",{className:"mr-auto",children:"\u2705 Nominated!"}),Object(i.jsx)("small",{children:"now"})]}),Object(i.jsx)(p.a.Body,{children:"Click the \ud83c\udfc6 button to toggle Nominations View"})]}),Object(i.jsxs)(p.a,{show:this.state.showMaximumToast,onClose:function(){return e.hideMaximumToast()},delay:3e3,autohide:!0,children:[Object(i.jsxs)(p.a.Header,{children:[Object(i.jsx)("strong",{className:"mr-auto",children:"\u26a0\ufe0f Limit Exceeded!"}),Object(i.jsx)("small",{children:"now"})]}),Object(i.jsx)(p.a.Body,{children:"You already have 5 nominations!"})]}),Object(i.jsxs)(p.a,{show:this.state.showCacheToast,onClose:function(){return e.hideCacheToast()},delay:3e3,autohide:!0,children:[Object(i.jsxs)(p.a.Header,{children:[Object(i.jsx)("strong",{className:"mr-auto",children:"\ud83d\udcbe Restored from Cache!"}),Object(i.jsx)("small",{children:"now"})]}),Object(i.jsx)(p.a.Body,{children:"Your nominations were restored from your browser's cache"})]})]}),Object(i.jsx)(L,{updateListHandler:this.updateListHandler}),Object(i.jsxs)("div",{className:"ResultsNominationsContainer",children:[Object(i.jsx)(O,{searchTerm:this.state.searchTerm,searchResults:this.state.searchResults,nominationList:this.state.nominationList,addNominationHandler:this.addNominationHandler}),Object(i.jsx)(f,{showNominations:this.state.showNominations,removeNominationHandler:this.removeNominationHandler,nominationMovies:this.state.nominationMovies}),Object(i.jsx)(x,{showFinishedScreen:this.state.showFinishedScreen,dismissScreenHandler:this.hideFinishedScreenSetup,nominationMovies:this.state.nominationMovies})]})]})}}]),n}(a.a.Component),H=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,57)).then((function(t){var n=t.getCLS,i=t.getFID,s=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),i(e),s(e),a(e),o(e)}))};c.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(M,{})}),document.getElementById("root")),H()}},[[50,1,2]]]);
//# sourceMappingURL=main.dced5545.chunk.js.map