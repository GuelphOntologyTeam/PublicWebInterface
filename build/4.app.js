webpackJsonp([4],{140:function(e,t,l){e.exports=l.p+"6b4fa695dcbaaf96c928f31474d03150.jpeg"},430:function(e,t,l){try{(function(){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function n(){var e,t,l,a,n=document.cookie.split(";");for(l=0;l<n.length;l++)e=n[l],t=e.split("=")," email"==t[0]&&(a=t[1]),"email"==t[0]&&(a=t[1]);return a}Object.defineProperty(t,"__esModule",{value:!0});var r=l(1),o=a(r),d=(l(16),l(18)),s=l(36),i=a(s),c=l(22),u=(a(c),o.default.createClass({displayName:"CatProfile",getInitialState:function(){return{name:"",weight:"",height:"",length:"",breed:"",gender:"",bday:"",declawed:!1,fixed:!1,outdoor:!1,showModal:!1}},componentWillMount:function(){var e=this;i.default.ajax({method:"GET",url:"https://cat.ddns.net/Backend/api.php/pet/view/36",xhrFields:{withCredentials:!0},success:function(t){console.log(t),1==t.success?(e.setName(t.pet.name),e.setWeight(t.pet.weight),e.setHeight(t.pet.height),e.setLength(t.pet.length),e.setBreed(t.pet.breed),e.setGender(t.pet.gender),e.setBday(t.pet.dateofbirth),null!=t.pet.declawed&&e.setDeclawed(t.pet.declawed),null!=t.pet.fixed&&e.setFixed(t.pet.fixed),null!=t.pet.outdoor&&e.setDeclawed(t.pet.outdoor),console.log("Got Cats")):console.log("Cant Get Cats")},error:function(e){console.log("Server Error")}})},close:function(){this.setState({showModal:!1})},open:function(){this.setState({showModal:!0})},render:function(){return o.default.createElement("div",{className:"container"},o.default.createElement("div",{className:"row"},o.default.createElement("div",{className:"col-lg-12"},o.default.createElement("div",{className:"panel panel-info"},o.default.createElement("div",{className:"panel-heading"},o.default.createElement("h3",{className:"panel-title "},this.state.name),o.default.createElement("p",{className:" text-info"},"Last Edited: November 30, 2016, 03:16 pm ")),o.default.createElement("div",{className:"panel-body"},o.default.createElement("div",{className:"row"},o.default.createElement("div",{className:"col-md-3 col-lg-3 ",align:"center"}," ",o.default.createElement("img",{alt:"User Pic",src:l(140),className:"img-circle img-responsive"})," "),o.default.createElement("div",{className:" col-md-9 col-lg-9 "},o.default.createElement("table",{className:"table table-user-information"},o.default.createElement("tbody",null,o.default.createElement("tr",null,o.default.createElement("td",null,"Breed:"),o.default.createElement("td",null,this.state.breed)),o.default.createElement("tr",null,o.default.createElement("td",null,"Date of Birth"),o.default.createElement("td",null,this.state.bday)),o.default.createElement("tr",null),o.default.createElement("tr",null,o.default.createElement("td",null,"Gender:"),o.default.createElement("td",null,this.state.gender)),o.default.createElement("tr",null,o.default.createElement("td",null,"Weight:"),o.default.createElement("td",null,this.state.weight)),o.default.createElement("tr",null,o.default.createElement("td",null,"Height:"),o.default.createElement("td",null,this.state.height)),o.default.createElement("tr",null,o.default.createElement("td",null,"Length:"),o.default.createElement("td",null,this.state.length)),o.default.createElement("tr",null,o.default.createElement("td",null,"Declawed:"),o.default.createElement("td",null,this.state.declawed)),o.default.createElement("tr",null,o.default.createElement("td",null,"Outdoor:"),o.default.createElement("td",null,this.state.outdoor)),o.default.createElement("tr",null,o.default.createElement("td",null,"Fixed:"),o.default.createElement("td",null,this.state.fixed)))),o.default.createElement(d.Button,{bsStyle:"primary",bsSize:"large",onClick:this.open},"Share Ownership of Cat")))),o.default.createElement("div",{className:"panel-footer"},o.default.createElement("a",{"data-original-title":"Broadcast Message","data-toggle":"tooltip",type:"button",className:"btn btn-sm btn-primary"},o.default.createElement("i",{className:"glyphicon glyphicon-envelope"})),o.default.createElement("span",{className:"pull-right"},o.default.createElement("a",{href:"edit.html","data-original-title":"Edit this user","data-toggle":"tooltip",type:"button",className:"btn btn-sm btn-warning"},o.default.createElement("i",{className:"glyphicon glyphicon-edit"})),o.default.createElement("a",{"data-original-title":"Remove this user","data-toggle":"tooltip",type:"button",className:"btn btn-sm btn-danger"},o.default.createElement("i",{className:"glyphicon glyphicon-remove"}))))))),o.default.createElement("div",{className:"row"},o.default.createElement(d.Modal,{show:this.state.showModal,onHide:this.close},o.default.createElement(d.Modal.Header,{closeButton:!0},o.default.createElement(d.Modal.Title,null,"Sharing a Cat")),o.default.createElement(d.Modal.Body,null,o.default.createElement("h4",null,"Enter the email of the user you want to share your cat with: "),o.default.createElement("p",null,"Email of user:",o.default.createElement("textarea",{class:"form-control col-xs-12"}))),o.default.createElement(d.Modal.Footer,null,o.default.createElement(d.Button,{onClick:this.handleShare},"Share"),o.default.createElement(d.Button,{onClick:this.close},"Close")))))},handleShare:function(e){var t=n(),l=36,a="write",r={email:t,petID:l,access:a};i.default.ajax({method:"POST",dataType:"json",data:r,url:"https://cat.ddns.net/Backend/api.php/pet/accessibility",xhrFields:{withCredentials:!0},success:function(e){console.log(e),1==e.success?console.log("Shared"):console.log("Cant Share")},error:function(e){console.log("Server Error")}})},setName:function(e){this.setState({name:e,loginError:""})},setBreed:function(e){this.setState({breed:e,loginError:""})},setBday:function(e){this.setState({bday:e,loginError:""})},setWeight:function(e){this.setState({weight:e,loginError:""})},setHeight:function(e){this.setState({height:e,loginError:""})},setLength:function(e){this.setState({length:e,loginError:""})},setGender:function(e){this.setState({gender:e,loginError:""})},setDeclawed:function(e){"true"==e?this.setState({declawed:!0,loginError:""}):this.setState({declawed:!1,loginError:""})},setOutdoor:function(e){"true"==e?this.setState({outdoor:!0,loginError:""}):this.setState({outdoor:!1,loginError:""})},setFixed:function(e){"true"==e?this.setState({fixed:!0,loginError:""}):this.setState({fixed:!1,loginError:""})}}));t.default=u,e.exports=t.default}).call(this)}finally{}}});