(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{55:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAABkBAMAAACm+cXiAAAAG1BMVEXMzMyWlpacnJzFxcW3t7e+vr6jo6OxsbGqqqqoPjQzAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAA2ElEQVRYhe3SMQ6CQBAF0GGBQCkBrFU0sRziBcR4AJELyA2INpRUyLFdBhIoASuS/6rNL34ms0MEAAAAAACwboqJYrYO11FwO9IomCTRNTmn93AI7CB5jIIpDI/JzvlL5RC4hVMNwSR2yqRSPtGT6E21BOph7ySYMw5TaXBEsd7KJ5RAsbmRYFaNGRnst3XWtpJAP30JZtW4RT+NXvUf0yjPC7pV7PuaRbsxL3HWtB/jnF/deJVTNfN+SlZgdHcTZ92KF9xNXyNHW+svl2DBFQMAAAAAwOr9AMPbIYfChnnxAAAAAElFTkSuQmCC"},56:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAABkBAMAAACm+cXiAAAAG1BMVEXMzMyWlpacnJzFxcW3t7e+vr6jo6OxsbGqqqqoPjQzAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAA2ElEQVRYhe3SMQ6CQBAF0GGBQCkBrFU0sRziBcR4AJELyA2INpRUyLFdBhIoASuS/6rNL34ms0MEAAAAAACwboqJYrYO11FwO9IomCTRNTmn93AI7CB5jIIpDI/JzvlL5RC4hVMNwSR2yqRSPtGT6E21BOph7ySYMw5TaXBEsd7KJ5RAsbmRYFaNGRnst3XWtpJAP30JZtW4RT+NXvUf0yjPC7pV7PuaRbsxL3HWtB/jnF/deJVTNfN+SlZgdHcTZ92KF9xNXyNHW+svl2DBFQMAAAAAwOr9AMPbIYfChnnxAAAAAElFTkSuQmCC"},57:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAABkBAMAAACm+cXiAAAAG1BMVEXMzMyWlpacnJzFxcW3t7e+vr6jo6OxsbGqqqqoPjQzAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAA2ElEQVRYhe3SMQ6CQBAF0GGBQCkBrFU0sRziBcR4AJELyA2INpRUyLFdBhIoASuS/6rNL34ms0MEAAAAAACwboqJYrYO11FwO9IomCTRNTmn93AI7CB5jIIpDI/JzvlL5RC4hVMNwSR2yqRSPtGT6E21BOph7ySYMw5TaXBEsd7KJ5RAsbmRYFaNGRnst3XWtpJAP30JZtW4RT+NXvUf0yjPC7pV7PuaRbsxL3HWtB/jnF/deJVTNfN+SlZgdHcTZ92KF9xNXyNHW+svl2DBFQMAAAAAwOr9AMPbIYfChnnxAAAAAElFTkSuQmCC"},60:function(e,t,a){e.exports=a(92)},65:function(e,t,a){},66:function(e,t,a){},92:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(25),c=a.n(r),i=(a(65),a(7)),s=a(11),m=a(9),o=a(8),A=a(59),u=a(28),d=a(15),h=a(27),E=a(5),b=(a(66),a(23)),p=a(52),f=a.n(p),g=a(14),S=a(54),N=a(17),C=a(19),k=a(53),v=function(e){return l.a.createElement(k.a,{className:"bg-transparent jumbotron-fluid p-0"},l.a.createElement(d.a,{fluid:!0},l.a.createElement(C.a,{className:"justify-content-center py-5"},l.a.createElement(N.a,{md:8,sm:12},e.title&&l.a.createElement("h1",{className:"display-1 font-weight-bolder text-center"},e.title),l.a.createElement("br",null),e.subTitle&&l.a.createElement("h3",{className:"display-4 font-weight-light text-center"},e.subTitle),l.a.createElement("hr",null),e.text&&l.a.createElement("h3",{className:"lead font-weight-light text-center"},e.text)))))},B=function(e){return l.a.createElement(d.a,{fluid:!0},l.a.createElement(C.a,{className:"justify-content-center"},l.a.createElement(N.a,{md:8},e.children)))},w=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleChange=function(e){var t=e.target,a="checkbox"===t.type?t.checked:t.value,l=t.name;n.setState(Object(b.a)({},l,a))},n.handleSubmit=function(e){e.preventDefault(),n.setState({disabled:!0}),f.a.post("http://localhost:3030/api/email",n.state).then((function(e){e.data.success?n.setState({disabled:!1,emailSent:!0}):n.setState({disabled:!1,emailSent:!1})})).catch((function(e){console.log(e),n.setState({disabled:!1,emailSent:!1})}))},n.state={name:"",email:"",message:"",disabled:!1,emailSent:null},n}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(v,{title:this.props.title}),l.a.createElement(B,null,l.a.createElement(g.a,{onSubmit:this.handleSubmit},l.a.createElement(g.a.Group,null,l.a.createElement(g.a.Label,{htmlFor:"full-name"},"Full Name:"),l.a.createElement(g.a.Control,{id:"full-name",name:"name",type:"text",value:this.state.name,onChange:this.handleChange})),l.a.createElement(g.a.Group,null,l.a.createElement(g.a.Label,{htmlFor:"email"},"Email:"),l.a.createElement(g.a.Control,{id:"email",name:"email",type:"email",value:this.state.email,onChange:this.handleChange})),l.a.createElement(g.a.Group,null,l.a.createElement(g.a.Label,{htmlFor:"message"},"Message:"),l.a.createElement(g.a.Control,{id:"message",name:"message",as:"textarea",rows:"3",value:this.state.message,onChange:this.handleChange})),l.a.createElement(S.a,{className:"d-inline-block",variante:"primary",type:"submit",disabled:this.state.disabled},"send"),!0===this.state.emailSent&&l.a.createElement("p",{className:"d-inline success-msg"},"Email Sent"),!1===this.state.emailSent&&l.a.createElement("p",{className:"d-inline err-msg"},"Email Not Sent"))))}}]),a}(l.a.Component),y=function(e){return l.a.createElement("div",null,l.a.createElement(v,{title:e.title}),l.a.createElement(B,null,l.a.createElement("p",null,"content here"),l.a.createElement("p",null,"content here"),l.a.createElement("p",null,"content here"),l.a.createElement("p",null,"content here")))},R=a(24),T=a(55),x=a.n(T),M=a(56),j=a.n(M),O=a(57),F=a.n(O),I=a(40),G=function(e){var t=Object(I.b)({opacity:1,from:{opacity:0}});return l.a.createElement(I.a.div,{className:"g-card-info",style:t},l.a.createElement("p",{className:"g-card-title"},e.title),l.a.createElement("p",{className:"g-card-sub-title"},e.subTitle),l.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},"View"))},J=function(e){return l.a.createElement("div",{className:"d-inline-block g-card",onClick:function(t){return e.click(e.item)}},l.a.createElement("img",{className:"g-card-image",src:e.item.imgSrc,alt:e.item.imgSrc}),e.item.selected&&l.a.createElement(G,{title:e.item.title,subTitle:e.item.subTitle,link:e.item.link}))},X=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleCardClick=function(e,t){var a=Object(R.a)(n.state.items);a[e].selected=!a[e].selected,a.forEach((function(e){e.id&&(e.selected=!1)})),n.setState({items:a})},n.makeItems=function(e){return e.map((function(e){return l.a.createElement(J,{item:e,click:function(t){return n.handleCardClick(e.id,t)},key:e.id})}))},n.state={items:[{id:0,title:"Seth Skinner",subTitle:"Full-Stack Developer",imgSrc:x.a,link:"",selected:!1},{id:1,title:"My GitHub!",subTitle:"@SethSkinner",imgSrc:j.a,link:"https://github.com/SethSkinner",selected:!1},{id:2,title:"My LinkedIn!",subTitle:"sethwskinner",imgSrc:F.a,link:"https://www.linkedin.com/in/sethwskinner/",selected:!1}]},n}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement(d.a,{fluid:!0},l.a.createElement(C.a,{className:"justify-content-around"},this.makeItems(this.state.items)))}}]),a}(l.a.Component),W=function(e){return l.a.createElement("div",null,l.a.createElement(v,{title:e.title,subTitle:e.subTitle,text:e.text}),l.a.createElement(X,null))},V=function(){return l.a.createElement("footer",{className:"mt-5"},l.a.createElement(d.a,{fluid:!0},l.a.createElement(C.a,{className:"border-top justify-content-between p-3"},l.a.createElement(N.a,{className:"p-0",md:3,sm:12},"Seth Skinner"),l.a.createElement(N.a,{className:"p-0 d-flex justify-content-end",md:3},"This site was made by @SethSkinner"))))},Q=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={title:"Seth Skinner",headerLinks:[{title:"Home",path:"/"},{title:"About",path:"/about"},{title:"Contact",path:"/contact"}],home:{title:"Keep Pursuing!",subTitle:"Hard work makes all the difference!",text:"Checkout my projects below"},about:{title:"About Me!"},contact:{title:"I would love to talk!"}},n}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement(h.a,null,l.a.createElement(d.a,{className:"p-0",fluid:!0},l.a.createElement(u.a,{className:"border-bottom",bg:"transparent",expand:"lg"},l.a.createElement(u.a.Brand,null,"Seth Skinner"),l.a.createElement(u.a.Toggle,{className:"border-0","aria-controls":"navbar-toggle"}),l.a.createElement(u.a.Collapse,{id:"navbar-toggle"},l.a.createElement(A.a,{className:"ml-auto"},l.a.createElement(h.b,{className:"nav-link",to:"/"},"Home"),l.a.createElement(h.b,{className:"nav-link",to:"/about"},"About"),l.a.createElement(h.b,{className:"nav-link",to:"/contact"},"Contact")))),l.a.createElement(E.a,{path:"/",exact:!0,render:function(){return l.a.createElement(W,{title:e.state.home.title,subTitle:e.state.home.subTitle,text:e.state.home.text})}}),l.a.createElement(E.a,{path:"/about",render:function(){return l.a.createElement(y,{title:e.state.about.title})}}),l.a.createElement(E.a,{path:"/contact",render:function(){return l.a.createElement(w,{title:e.state.contact.title})}}),l.a.createElement(V,null)))}}]),a}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(89),a(90);c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(Q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[60,1,2]]]);
//# sourceMappingURL=main.c9d75cc5.chunk.js.map