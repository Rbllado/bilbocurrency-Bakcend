(this["webpackJsonpreact-auth-client-done-v2"]=this["webpackJsonpreact-auth-client-done-v2"]||[]).push([[0],{241:function(e,t,a){e.exports=a(605)},245:function(e,t,a){},586:function(e,t){},588:function(e,t){},605:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(21),r=a.n(l),c=a(8),s=a(9),i=a(12),m=a(11),u=a(13),p=a(39);a(245),a(128),a(246);var h,d,g=function(){return o.a.createElement("div",{className:"background-index"},o.a.createElement("img",{src:"https://image.freepik.com/foto-gratis/moneda-oro-bitcoin-mano_99433-2915.jpg",alt:""}))},b=a(30),f=a(58),v=a(14),E=a.n(v),y=a(15),N=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={name:"",listOfCoins:[],copyListOfCoins:[]},a.getAllCoins=function(){E.a.get("".concat("https://bilbocurrency.herokuapp.com","/coins")).then((function(e){for(var t=e.data,n=(e.data[0].price.toFixed(2),0);n<t.length;n++)t[n].price=t[n].price.toFixed(4);var o=Object(f.a)(t);a.setState({listOfCoins:t,copyListOfCoins:o.slice(0,20)})})).catch((function(e){return console.log(e)}))},a.handleInput=function(e){var t=e.target,n=t.name,o=t.value;a.setState(Object(b.a)({},n,o));var l=a.state.listOfCoins.filter((function(t){return t.name.toLowerCase().includes(e.target.value)}));a.setState({copyListOfCoins:l})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getAllCoins()}},{key:"render",value:function(){return o.a.createElement("div",{className:"coin-container "},o.a.createElement("div",{className:"col-lg-8 search-bar"},o.a.createElement("input",{className:"form-control",type:"text",name:"name",value:this.state.name,onChange:this.handleInput,placeholder:"coin to search"})),o.a.createElement("div",{className:"row list-coins"},this.state.copyListOfCoins.map((function(e){return o.a.createElement("div",{className:"col-lg-3 col-md-6 col-sm 12"},o.a.createElement("div",{className:"card coins",key:e._id},o.a.createElement("img",{className:"card-img-top coinlist-logo",src:e.img,alt:"Card"}),o.a.createElement("div",{className:"card-body"},o.a.createElement("h5",{className:"card-title"},e.name)),o.a.createElement("ul",{className:"list-group list-group-flush"},o.a.createElement("li",{className:"list-group-item"},"$",e.price),o.a.createElement("li",{className:"list-group-item"},"Tag: ",e.tags),o.a.createElement("li",{className:"list-group-item"},e.symbol)),o.a.createElement("div",{className:"card-body"},o.a.createElement(y.b,{to:"/coins/detail/".concat(e._id),key:e._id,className:"card-link"},"Details"))))}))))}}]),t}(n.Component),w=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={historyCoins:[]},a.getRefreshHistory=function(){E.a.get("".concat("https://bilbocurrency.herokuapp.com","/coins/updatehistory")).then((function(e){console.log(e);var t=e.data;console.log("History",t),a.setState({historyCoins:t})})).catch((function(e){return console.log(e)}))},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getRefreshHistory()}},{key:"render",value:function(){return o.a.createElement("div",null,this.state.historyCoins.map((function(e){return o.a.createElement("div",{key:e._id,className:"History"},o.a.createElement("h1",null,e.symbol),o.a.createElement("h2",null,parseInt(e.value[0])))})))}}]),t}(n.Component),O=a(35),C=(a(448),document.getElementsByClassName("btn-favorite"),!1),j=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={coin:{},historyCoin:[],arrMinMax:[],isInFavorites:!1},a.getMinMax=function(){var e=Object(f.a)(h),t=Math.min.apply(Math,Object(f.a)(e)),n=Math.max.apply(Math,Object(f.a)(e)),o=[];o.push(t+t/2,n+2*n),a.setState({arrMinMax:o})},a.getCoin=function(){console.log("Heyyy",a.props.match.params);var e=a.props.match.params.id;console.log(e),E.a.post("".concat("https://bilbocurrency.herokuapp.com","/coins/detail/").concat(e)).then((function(e){var t=e.data;console.log("coin",t.name),a.setState({coin:t})})).catch((function(e){return console.log(e)}))},a.getHistory=function(){var e=a.state.coin.symbol;E.a.post("".concat("https://bilbocurrency.herokuapp.com","/coins/history/").concat(e)).then((function(e){console.log("coin",e.symbol);var t=e.symbol;a.setState({historyCoin:t})})).catch((function(e){return console.log(e)}))},a.sendFavorite=function(){var e=a.props.match.params.id;console.log("id de la moneda a a\xf1adir favoritos:",e),E.a.post("".concat("https://bilbocurrency.herokuapp.com","/favorites/").concat(e),null,{withCredentials:!0}).then((function(e){console.log("resultado",e),a.setState({isInFavorites:!0}),console.log("Boolean",a.state.isInFavorites)})).catch((function(e){return console.log(e)}))},a.pressButton=function(){var e=a.state.coin.symbol;E.a.post("".concat("https://bilbocurrency.herokuapp.com","/history/").concat(e)).then((function(e){h=e.data,console.log(h),a.getMinMax();var t=e.data.map((function(e,t){return{value:e,time:t}}));a.setState({historyCoin:t})})).catch((function(e){return console.log(e)})),C=!0,console.log(a.historyCoin),console.log("Apretado")},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getCoin()}},{key:"render",value:function(){return console.log("idsfhghfjkd",this.state.historyCoin),o.a.createElement("div",{className:"detail-container"},o.a.createElement("div",{className:"detail-coin"},o.a.createElement("div",null,o.a.createElement("img",{src:this.state.coin.img,alt:""}),!0===C?o.a.createElement(O.d,{width:500,height:300,data:this.state.historyCoin,margin:{top:5,right:30,left:20,bottom:5}},o.a.createElement(O.a,{strokeDasharray:"3 3"}),o.a.createElement(O.f,{dataKey:"time"}),o.a.createElement(O.g,{type:"number",domain:[this.state.arrMinMax]}),o.a.createElement(O.e,null),o.a.createElement(O.b,null),o.a.createElement(O.c,{type:"monotone",dataKey:"value",stroke:"#8884d8"}),o.a.createElement(O.c,{type:"monotone",dataKey:"value",stroke:"#82ca9d"})):null,o.a.createElement("button",{onClick:this.pressButton,className:"chart-btn btn btn-success"},"Show Chart")),o.a.createElement("h2",{className:"name-detail"},this.state.coin.name),o.a.createElement("p",{className:"description-detail"},this.state.coin.description),o.a.createElement("h3",{className:"price-detail"},"$",this.state.coin.price),o.a.createElement("h4",{className:"symbol-detail"},"Symbol: ",this.state.coin.symbol),o.a.createElement("a",{href:this.state.coin.web,className:"web-detail"},"Link to the webpage"),o.a.createElement("h4",{className:"tags-detail"},this.state.coin.tags),this.state.isInFavorites?o.a.createElement("button",{disabled:!0,className:"btn btn-secondary"},"Already favourites"):o.a.createElement("button",{onClick:this.sendFavorite,className:"btn btn-primary"},"Add to favorites")))}}]),t}(n.Component),k=(a(449),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={allFavorites:[]},a.getFavorites=function(){E.a.get("".concat("https://bilbocurrency.herokuapp.com","/favorites/"),{withCredentials:!0}).then((function(e){console.log(e);var t=e.data.favorites;a.setState({allFavorites:t})})).catch((function(e){return console.log(e)}))},a.removeFavorite=function(e){console.log(e),E.a.post("http://localhost:5000/favorites/remove/".concat(e),null,{withCredentials:!0}),a.setState({allFavorites:a.state.allFavorites.filter((function(t){return t._id!==e}))})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getFavorites()}},{key:"render",value:function(){var e=this,t=this.state.allFavorites;return o.a.createElement("div",null,o.a.createElement("br",null),t.length?t.map((function(t){return o.a.createElement("div",{className:"card  favorites-cards col-md-8 col-lg-8 col-sm-12"},o.a.createElement("br",null),o.a.createElement("img",{className:"card-img-top favorite-logo",src:t.img,alt:"Card"}),o.a.createElement("div",{className:"card-body"},o.a.createElement("h5",{className:"card-title"},t.name),o.a.createElement("h5",{className:"card-title"},t.symbol),o.a.createElement("h5",{className:"card-title"},"Euros: ",t.price),o.a.createElement("p",{className:"card-text description-detail"},t.description),o.a.createElement("p",{className:"card-text"},o.a.createElement("button",{onClick:function(){e.removeFavorite(t._id)},key:t._id,className:"btn btn-danger"},"Eliminar"))))})):o.a.createElement("h2",null,"Not favorites coins"))}}]),t}(n.Component)),L=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={name:"",price:"",type:"",id:0,symbol:"",img:"",description:"",web:""},a.handleInput=function(e){var t=e.target,n=t.name,o=t.value;console.log("name :",n,"name :",o),a.setState(Object(b.a)({},n,o))},a.handleSubmit=function(e){e.preventDefault(),console.log("estado :",a.state),E.a.post("".concat("https://bilbocurrency.herokuapp.com","/owncoins/add"),a.state,{withCredentials:!0}).then((function(e){console.log("Answer post in add coins: ",e)})).catch((function(e){return console.log(e)})),a.setState({name:"",price:"",type:"",id:0,symbol:"",img:"",description:"",web:""})},a.uploadImg=function(e){var t=e.target.files[0];console.log(t),t&&((d=new FormData).append("img",t),console.log("Form Data:",d)),E.a.post("".concat("https://bilbocurrency.herokuapp.com","/owncoins/image"),d).then((function(e){console.log("kjvsnsdf",e.data),a.setState({img:e.data})})).catch((function(e){return console.log(e)}))},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"backkground-container"},o.a.createElement("br",null),o.a.createElement("div",{className:"form-owncoin"},o.a.createElement("br",null),o.a.createElement("div",{className:"col-lg-6 push-lg-4 personal-info edit-profile"},o.a.createElement("h2",null,"Add your own coin"),o.a.createElement("br",null),o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("div",{className:"form-group row"},o.a.createElement("label",{className:"col-lg-3 col-form-label form-control-label"},"Name of the coin"),o.a.createElement("div",{className:"col-lg-8"},o.a.createElement("input",{className:"form-control",type:"text",name:"name",value:this.state.name,onChange:this.handleInput,placeholder:"name of your new coin"}))),o.a.createElement("div",{className:"form-group row"},o.a.createElement("label",{className:"col-lg-3 col-form-label form-control-label"},"Price of the coin"),o.a.createElement("div",{className:"col-lg-8"},o.a.createElement("input",{className:"form-control",type:"text",name:"price",value:this.state.price,onChange:this.handleInput,placeholder:"Type the price of your coin"}))),o.a.createElement("div",{className:"form-group row"},o.a.createElement("label",{className:"col-lg-3 col-form-label form-control-label"},"Is it minable?"),o.a.createElement("div",{className:"col-lg-8"},o.a.createElement("select",{className:"form-control",name:"type",value:this.state.type,onChange:this.handleInput,id:"exampleFormControlSelect2"},o.a.createElement("option",null,"-"),o.a.createElement("option",null,"Minable"),o.a.createElement("option",null,"Not minable")))),o.a.createElement("div",{className:"form-group row"},o.a.createElement("label",{className:"col-lg-3 col-form-label form-control-label"},"Put an id for your coin"),o.a.createElement("div",{className:"col-lg-8"},o.a.createElement("input",{className:"form-control",type:"number",name:"id",value:this.state.id,onChange:this.handleInput}))),o.a.createElement("div",{className:"form-group row"},o.a.createElement("label",{className:"col-lg-3 col-form-label form-control-label"},"Which is your symbol?"),o.a.createElement("div",{className:"col-lg-8"},o.a.createElement("input",{className:"form-control",type:"text",name:"symbol",value:this.state.symbol,onChange:this.handleInput}))),o.a.createElement("div",{className:"form-group row"},o.a.createElement("label",{className:"col-lg-3 col-form-label form-control-label"},"Choose your image for your Image"),o.a.createElement("div",{className:"col-lg-8"},o.a.createElement("input",{className:"form-control-file",type:"file",name:"img",onChange:this.uploadImg}))),o.a.createElement("div",{className:"form-group row"},o.a.createElement("label",{className:"col-lg-3 col-form-label form-control-label"},"Write your website"),o.a.createElement("div",{className:"col-lg-8"},o.a.createElement("input",{className:"form-control",type:"text",name:"web",value:this.state.web,onChange:this.handleInput,placeholder:"http://wwww.example.com"}))),o.a.createElement("div",{className:"form-group row"},o.a.createElement("label",{className:"col-lg-3 col-form-label form-control-label"},"Description of the coin"),o.a.createElement("div",{className:"col-lg-8"},o.a.createElement("textarea",{className:"form-control",name:"description",value:this.state.description,onChange:this.handleInput,rows:"3"}))),o.a.createElement("label",{className:"col-lg-3 col-form-label form-control-label"}),o.a.createElement("div",{className:"col-lg-9"},o.a.createElement("button",{type:"submit",className:"btn btn-primary"}," Submit "))))))}}]),t}(n.Component),S=(a(580),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={allOwnCoin:[]},a.getAllOwnCoins=function(){E.a.get("http://localhost:5000/owncoins/",{withCredentials:!0}).then((function(e){console.log("result: ",e.data.owncoins);var t=e.data.owncoins;a.setState({allOwnCoin:t})})).catch((function(e){return console.log(e)}))},a.removeOwnCoin=function(e){console.log("nada ahora"),console.log(e),E.a.post("http://localhost:5000/owncoins/remove/".concat(e),null,{withCredentials:!0}),a.setState({allOwnCoin:a.state.allOwnCoin.filter((function(t){return t._id!==e}))})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getAllOwnCoins()}},{key:"render",value:function(){var e=this,t=this.state.allOwnCoin;return o.a.createElement("div",null,o.a.createElement("br",null),t.length?t.map((function(t){return o.a.createElement("div",{className:"card  owncoins-cards col-md-8 col-lg-8 col-sm-12"},o.a.createElement("br",null),o.a.createElement("img",{className:"card-img-top owncoin-logo",src:t.img,alt:"Card"}),o.a.createElement("div",{className:"card-body"},o.a.createElement("h5",{className:"card-title"},"Name: ",t.name),o.a.createElement("h5",{className:"card-title"},"Symbol: ",t.symbol),o.a.createElement("h5",{className:"card-title"},"Euros: ",t.price),o.a.createElement("p",{className:"card-text owncoin-descriptoin-detail"},t.description),o.a.createElement("p",{className:"card-text"},o.a.createElement("button",{onClick:function(){e.removeOwnCoin(t._id)},key:t._id,className:"btn btn-danger"},"Eliminar"))))})):o.a.createElement("h2",null,"You don\xb4t have own coins"))}}]),t}(n.Component)),x=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={username:"",password:"",newpassword:""},a.handleInput=function(e){var t=e.target,n=t.name,o=t.value;a.setState(Object(b.a)({},n,o))},a.handleSubmit=function(e){e.preventDefault(),console.log("estado :",a.state),E.a.post("".concat("https://bilbocurrency.herokuapp.com","/editprofile"),a.state,{withCredentials:!0}).then((function(e){console.log("Respuesta del backend:",e)})).catch((function(e){return console.log(e)})),a.setState({username:"",password:"",newpassword:""})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"container-profile"},o.a.createElement("div",{className:"col-lg-12 text-lg-center"},o.a.createElement("h2",null,"Edit Profile"),o.a.createElement("br",null),o.a.createElement("br",null)),o.a.createElement("div",{className:"col-lg-6 push-lg-4 personal-info edit-profile"},o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("div",{className:"form-group row"},o.a.createElement("label",{className:"col-lg-3 col-form-label form-control-label"},"Username"),o.a.createElement("div",{className:"col-lg-9"},o.a.createElement("input",{className:"form-control",type:"text",name:"username",value:this.state.username,onChange:this.handleInput}))),o.a.createElement("div",{className:"form-group row"},o.a.createElement("label",{className:"col-lg-3 col-form-label form-control-label"},"Password"),o.a.createElement("div",{className:"col-lg-9"},o.a.createElement("input",{className:"form-control",type:"password",name:"password",value:this.state.password,onChange:this.handleInput}))),o.a.createElement("div",{className:"form-group row"},o.a.createElement("label",{className:"col-lg-3 col-form-label form-control-label"},"New password"),o.a.createElement("div",{className:"col-lg-9"},o.a.createElement("input",{className:"form-control",type:"password",name:"newpassword",value:this.state.newpassword,onChange:this.handleInput}))),o.a.createElement("div",{className:"form-group row"},o.a.createElement("label",{className:"col-lg-3 col-form-label form-control-label"}),o.a.createElement("div",{className:"col-lg-9"},o.a.createElement("button",{className:"btn btn-primary",value:"Save Changes"},"Save Changes")))))))}}]),t}(n.Component);var I=function(e){return o.a.createElement("div",null,o.a.createElement("h1",null,"I am sorry the url ",e.location.pathname," is not found "))},F=new(function(){function e(){Object(c.a)(this,e),this.auth=E.a.create({baseURL:"https://bilbocurrency.herokuapp.com",withCredentials:!0})}return Object(s.a)(e,[{key:"signup",value:function(e){var t=e.username,a=e.password;return this.auth.post("/auth/signup",{username:t,password:a}).then((function(e){return e.data}))}},{key:"login",value:function(e){var t=e.username,a=e.password;return this.auth.post("/auth/login",{username:t,password:a}).then((function(e){return e.data}))}},{key:"logout",value:function(){return this.auth.post("/auth/logout",{}).then((function(e){return e.data}))}},{key:"me",value:function(){return this.auth.get("/auth/me").then((function(e){return e.data}))}}]),e}()),A=o.a.createContext(),M=A.Consumer,D=A.Provider,_=function(e){return function(t){function a(){return Object(c.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,t),Object(s.a)(a,[{key:"render",value:function(){var t=this;return o.a.createElement(M,null,(function(a){var n=a.login,l=a.signup,r=a.user,c=a.logout,s=a.isLoggedin,i=a.isLoading;return o.a.createElement(e,Object.assign({login:n,signup:l,user:r,logout:c,isLoggedin:s,isLoading:i},t.props))}))}}]),a}(o.a.Component)},H=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={isLoggedin:!1,user:null,isLoading:!0},a.signup=function(e){var t=e.username,n=e.password;F.signup({username:t,password:n}).then((function(e){return a.setState({isLoggedin:!0,user:e})})).catch((function(e){return console.log(e)}))},a.login=function(e){var t=e.username,n=e.password;F.login({username:t,password:n}).then((function(e){return a.setState({isLoggedin:!0,user:e})})).catch((function(e){return console.log(e)}))},a.logout=function(){F.logout().then((function(){return a.setState({isLoggedin:!1,user:null})})).catch((function(e){return console.log(e)}))},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;F.me().then((function(t){return e.setState({isLoggedin:!0,user:t,isLoading:!1})})).catch((function(t){return e.setState({isLoggedin:!1,user:null,isLoading:!1})}))}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.isLoggedin,n=e.user,l=this.login,r=this.logout,c=this.signup;return o.a.createElement(D,{value:{isLoading:t,isLoggedin:a,user:n,login:l,logout:r,signup:c}},this.props.children)}}]),t}(o.a.Component),P=_(function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={username:"",password:""},a.handleFormSubmit=function(e){e.preventDefault();var t=a.state,n=t.username,o=t.password;a.props.signup({username:n,password:o})},a.handleChange=function(e){var t=e.target,n=t.name,o=t.value;a.setState(Object(b.a)({},n,o))},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.username,a=e.password;return o.a.createElement("div",null,o.a.createElement("h1",null,"Sign Up"),o.a.createElement("form",{onSubmit:this.handleFormSubmit},o.a.createElement("label",null,"Username:"),o.a.createElement("input",{type:"text",name:"username",value:t,onChange:this.handleChange}),o.a.createElement("label",null,"Password:"),o.a.createElement("input",{type:"password",name:"password",value:a,onChange:this.handleChange}),o.a.createElement("input",{type:"submit",value:"Signup"})),o.a.createElement("p",null,"Already have account?"),o.a.createElement(y.b,{to:"/login"}," Login"))}}]),t}(n.Component)),B=_(function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={username:"",password:""},a.handleFormSubmit=function(e){e.preventDefault();var t=a.state,n=t.username,o=t.password;a.props.login({username:n,password:o})},a.handleChange=function(e){var t=e.target,n=t.name,o=t.value;a.setState(Object(b.a)({},n,o))},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.username,a=e.password;return o.a.createElement("div",null,o.a.createElement("h1",null,"Login"),o.a.createElement("form",{onSubmit:this.handleFormSubmit},o.a.createElement("label",null,"Username:"),o.a.createElement("input",{type:"text",name:"username",value:t,onChange:this.handleChange}),o.a.createElement("label",null,"Password:"),o.a.createElement("input",{type:"password",name:"password",value:a,onChange:this.handleChange}),o.a.createElement("input",{type:"submit",value:"Login"})))}}]),t}(n.Component)),U=(n.Component,a(608)),R=a(609),K=(document.getElementById("navbarNavDropdown"),_(function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.user,a=e.logout,n=e.isLoggedin;return o.a.createElement("div",null,o.a.createElement(U.a,{bg:"light",expand:"lg"},o.a.createElement(U.a.Toggle,{"aria-controls":"basic-navbar-nav"}),o.a.createElement(U.a.Collapse,{id:"basic-navbar-nav"},n?o.a.createElement(R.a,{className:"mr-auto"},o.a.createElement(R.a.Link,{href:"#home"}," ",o.a.createElement("a",{className:"nav-link"},"  Welcome : ",t.username)),o.a.createElement(R.a.Link,null,o.a.createElement("a",{className:"nav-link",onClick:a},"Logout")),o.a.createElement(R.a.Link,null,o.a.createElement(y.b,{to:"/coins"},o.a.createElement("a",{className:"nav-link"},"Coin List"))),o.a.createElement(R.a.Link,null,o.a.createElement(y.b,{className:"nav-item",to:"/owncoins/add"}," ",o.a.createElement("a",{className:"nav-link"}," Add Own Coin"))),o.a.createElement(R.a.Link,null,o.a.createElement(y.b,{to:"/favorites"}," ",o.a.createElement("a",{className:"nav-link"},"Favorites")," ")),o.a.createElement(R.a.Link,null,o.a.createElement(y.b,{to:"/owncoins/"}," ",o.a.createElement("a",{className:"nav-link"},"Own Coin List")," ")),o.a.createElement(R.a.Link,null,o.a.createElement(y.b,{to:"/editprofile/"}," ",o.a.createElement("a",{className:"nav-link"},"Edit profile")," "))):o.a.createElement(R.a,{className:"mr-auto"},o.a.createElement(R.a.Link,null,o.a.createElement(y.b,{to:"/login"}," ",o.a.createElement("a",{className:"nav-link"},"Login")," ")),o.a.createElement(R.a.Link,null,o.a.createElement(y.b,{to:"/signup"}," ",o.a.createElement("a",{className:"nav-link"},"Signup")," ")),o.a.createElement(R.a.Link,null,o.a.createElement(y.b,{to:"/coins"}," ",o.a.createElement("a",{className:"nav-link"},"CoinList")," ")),o.a.createElement(R.a.Link,null,o.a.createElement(y.b,{to:"/coins/updatehistory"}," ",o.a.createElement("a",{className:"nav-link"},"Update Hisotry")," "))))))}}]),t}(n.Component))),T=a(86);var W=_((function(e){var t=e.component,a=e.isLoggedin,n=e.isLoading,l=Object(T.a)(e,["component","isLoggedin","isLoading"]);return n?o.a.createElement("h1",null,"Loading"):o.a.createElement(p.b,Object.assign({},l,{render:function(e){return a?o.a.createElement(p.a,{to:"/coins"}):o.a.createElement(t,e)}}))}));var J=_((function(e){var t=e.component,a=e.isLoggedin,n=e.isLoading,l=Object(T.a)(e,["component","isLoggedin","isLoading"]);return n?o.a.createElement("h1",null,"Loading"):o.a.createElement(p.b,Object.assign({},l,{render:function(e){return a?o.a.createElement(t,e):o.a.createElement(p.a,{to:"/login"})}}))})),$=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(K,null),o.a.createElement(p.d,null,o.a.createElement(W,{exact:!0,path:"/",component:g}),o.a.createElement(W,{exact:!0,path:"/signup",component:P}),o.a.createElement(W,{exact:!0,path:"/login",component:B}),o.a.createElement(J,{path:"/editprofile",component:x}),o.a.createElement(p.b,{exact:!0,path:"/coins",component:N}),o.a.createElement(J,{path:"/coins/detail/:id",component:j}),o.a.createElement(J,{exact:!0,path:"/owncoins/add",component:L}),o.a.createElement(J,{exact:!0,path:"/owncoins/",component:S}),o.a.createElement(w,{path:"/coins/updatehistory"}),o.a.createElement(J,{path:"/favorites",component:k}),o.a.createElement(p.b,{component:I})))}}]),t}(n.Component);r.a.render(o.a.createElement(y.a,null,o.a.createElement(H,null,o.a.createElement($,null))),document.getElementById("root"))}},[[241,1,2]]]);
//# sourceMappingURL=main.06b48849.chunk.js.map