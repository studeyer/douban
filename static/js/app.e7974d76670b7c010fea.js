webpackJsonp([1],[,,,,,,function(t,e,i){"use strict";i.d(e,"h",function(){return s}),i.d(e,"g",function(){return r}),i.d(e,"f",function(){return l}),i.d(e,"a",function(){return c}),i.d(e,"b",function(){return u}),i.d(e,"c",function(){return m}),i.d(e,"d",function(){return d}),i.d(e,"o",function(){return v}),i.d(e,"e",function(){return g}),i.d(e,"n",function(){return h}),i.d(e,"i",function(){return f}),i.d(e,"j",function(){return p}),i.d(e,"k",function(){return _}),i.d(e,"l",function(){return C}),i.d(e,"m",function(){return I});var n=i(64),a=i.n(n),o="http://vue.wclimb.site/vi/",s=function(){return fetch(o+"list").then(function(t){return t.json()})},r=function(){return fetch(o+"yzm/img").then(function(t){return t.text()})},l=function(t,e){return fetch(o+"signin",{method:"POST",body:a()({userName:t,password:e}),mode:"cors"}).then(function(t){return t.text()})},c=function(t){return fetch(o+"comment/user?name="+t).then(function(t){return t.json()})},u=function(t){return fetch(o+"like/list?name="+t).then(function(t){return t.json()})},m=function(t){return fetch(o+"delete/comment/"+t,{method:"POST",mode:"cors"}).then(function(t){return t.text()})},d=function(t,e){return fetch(o+"avator?name="+t,{method:"POST",body:a()({avator:e}),mode:"cors"}).then(function(t){return t.text()})},v=function(t){return fetch(o+"avator/list?name="+t,{}).then(function(t){return t.json()})},g=function(t,e){return fetch(o+"edit/user?name="+t,{method:"POST",body:a()({newName:e}),mode:"cors"}).then(function(t){return t.text()})},h=function(t){return fetch(o+"search/result?val="+t).then(function(t){return t.json()})},f=function(t){return fetch(o+""+t).then(function(t){return t.json()})},p=function(t){return fetch(o+""+t+"/comment").then(function(t){return t.json()})},_=function(t,e){return fetch(o+""+t+"/like?name="+e).then(function(t){return t.text()})},C=function(t,e,i,n,s,r){return fetch(o+""+t+"/like",{method:"POST",body:a()({like:e,userName:i,videoName:n,videoImg:s,star:r}),mode:"cors"}).then(function(t){return t.text()})},I=function(t,e,i,n,s,r){return fetch(o+""+t+"/comment",{method:"POST",body:a()({userName:e,date:i,content:n,videoName:s,avator:r}),mode:"cors"}).then(function(t){return t.text()})}},,,,,function(t,e,i){function n(t){i(115)}var a=i(3)(i(59),i(132),n,"data-v-71620aa2",null);t.exports=a.exports},,,,,,,,function(t,e){t.exports="data:image/svg+xml;base64,DQo8c3ZnIHdpZHRoPSI1NSIgaGVpZ2h0PSI4MCIgdmlld0JveD0iMCAwIDU1IDgwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNGRkYiPg0KICAgIDxnIHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDAgODApIj4NCiAgICAgICAgPHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjIwIiByeD0iMyI+DQogICAgICAgICAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJoZWlnaHQiDQogICAgICAgICAgICAgICAgIGJlZ2luPSIwcyIgZHVyPSI0LjNzIg0KICAgICAgICAgICAgICAgICB2YWx1ZXM9IjIwOzQ1OzU3OzgwOzY0OzMyOzY2OzQ1OzY0OzIzOzY2OzEzOzY0OzU2OzM0OzM0OzI7MjM7NzY7Nzk7MjAiIGNhbGNNb2RlPSJsaW5lYXIiDQogICAgICAgICAgICAgICAgIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPg0KICAgICAgICA8L3JlY3Q+DQogICAgICAgIDxyZWN0IHg9IjE1IiB3aWR0aD0iMTAiIGhlaWdodD0iODAiIHJ4PSIzIj4NCiAgICAgICAgICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImhlaWdodCINCiAgICAgICAgICAgICAgICAgYmVnaW49IjBzIiBkdXI9IjJzIg0KICAgICAgICAgICAgICAgICB2YWx1ZXM9IjgwOzU1OzMzOzU7NzU7MjM7NzM7MzM7MTI7MTQ7NjA7ODAiIGNhbGNNb2RlPSJsaW5lYXIiDQogICAgICAgICAgICAgICAgIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPg0KICAgICAgICA8L3JlY3Q+DQogICAgICAgIDxyZWN0IHg9IjMwIiB3aWR0aD0iMTAiIGhlaWdodD0iNTAiIHJ4PSIzIj4NCiAgICAgICAgICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImhlaWdodCINCiAgICAgICAgICAgICAgICAgYmVnaW49IjBzIiBkdXI9IjEuNHMiDQogICAgICAgICAgICAgICAgIHZhbHVlcz0iNTA7MzQ7Nzg7MjM7NTY7MjM7MzQ7NzY7ODA7NTQ7MjE7NTAiIGNhbGNNb2RlPSJsaW5lYXIiDQogICAgICAgICAgICAgICAgIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPg0KICAgICAgICA8L3JlY3Q+DQogICAgICAgIDxyZWN0IHg9IjQ1IiB3aWR0aD0iMTAiIGhlaWdodD0iMzAiIHJ4PSIzIj4NCiAgICAgICAgICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImhlaWdodCINCiAgICAgICAgICAgICAgICAgYmVnaW49IjBzIiBkdXI9IjJzIg0KICAgICAgICAgICAgICAgICB2YWx1ZXM9IjMwOzQ1OzEzOzgwOzU2OzcyOzQ1Ozc2OzM0OzIzOzY3OzMwIiBjYWxjTW9kZT0ibGluZWFyIg0KICAgICAgICAgICAgICAgICByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4NCiAgICAgICAgPC9yZWN0Pg0KICAgIDwvZz4NCjwvc3ZnPg0KDQo="},function(t,e,i){function n(t){i(111)}var a=i(3)(i(58),i(128),n,"data-v-1b558cd5",null);t.exports=a.exports},,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){document.documentElement.style.fontSize=document.documentElement.clientWidth/7.5+"px",document.body.addEventListener("touchstart",function(){},!1)},function(t,e,i){"use strict";var n=i(21),a=i(136),o=i(126),s=i.n(o),r=i(122),l=i.n(r),c=i(125),u=i.n(c),m=i(124),d=i.n(m),v=i(123),g=i.n(v),h=i(121),f=i.n(h);n.a.use(a.a),e.a=new a.a({mode:"history",routes:[{path:"*",redirect:"/"},{path:"/",name:"home",component:l.a,children:[{name:"search",path:"/home/search",component:s.a}],meta:{keepAlive:!0}},{path:"/video/:id",name:"video",component:f.a},{path:"/all",name:"all",component:u.a},{path:"/movie",name:"movie",component:u.a},{path:"/tv",name:"tv",component:u.a},{path:"/zy",name:"zy",component:u.a},{path:"/login",name:"login",component:g.a},{path:"/me",name:"me",component:d.a}],scrollBehavior:function(t,e,i){return{x:0,y:0}}})},function(t,e,i){"use strict";var n=i(21),a=i(5),o=i(61),s=i(63);n.a.use(a.a);var r={userInfo:"",videoData:null,meCommentDatas:null};e.a=new a.a.Store({state:r,actions:o.a,mutations:s.a})},,function(t,e,i){function n(t){i(114)}var a=i(3)(i(51),i(131),n,null,null);t.exports=a.exports},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app"}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(7),a=i.n(n),o=i(11),s=i.n(o),r=i(20),l=i.n(r),c=i(5),u=i(6);e.default={name:"detail",components:{vfooter:s.a,alertDialog:l.a},data:function(){return{lists:"",comments:"",likes:"",star:"",baseUrl:"http://vue.wclimb.site/images/",likeTotalLength:0,loading:!1,comment:"",dialogShow:!1,dialogTxt:"",tips:!0,aniDialog:"",likeActive:"like_active",likeCls:"like",likeDisable:"likeDisable",scrollTop:200}},computed:a()({},i.i(c.b)(["userInfo","meCommentDatas"]),{comment_allow:function(){return!!localStorage.getItem("token")},tipsImg:function(){return this.tips?"icon-chenggong":"icon-shibai"},userName:function(){return localStorage.getItem("token")},avator:function(){return localStorage.getItem("avator")}}),mounted:function(){this.initData(),this.scroll()},watch:{$route:"initData"},methods:a()({dialogChange:function(t,e){var i=this;this.aniDialog="aniDialog",this.dialogShow=!0,this.tips=t,this.dialogTxt=e,setTimeout(function(){i.dialogShow=!1},1500)}},i.i(c.c)(["initMeCommentData"]),{initData:function(){var t=this;this.loading=!0;var e=this.$route.params.id;i.i(u.i)(e).then(function(e){t.lists=e[0][0];var i=e[1].length,n=e[2].length;t.likeTotalLength=n,n>0&&i>=0&&(t.star=i/n*10)}).catch(function(t){return console.log("error",t)}),i.i(u.j)(e).then(function(e){t.comments=e}).catch(function(t){return console.log("error",t)}),i.i(u.k)(e,this.userName).then(function(e){setTimeout(function(){t.loading=!1},500);var i=JSON.parse(e)[0].iLike;t.likes=i}).catch(function(e){t.likes=!1})},like:function(t){var e=this;i.i(u.l)(this.$route.params.id,t,localStorage.getItem("token"),this.lists.name,this.lists.img,this.lists.star).then(function(i){1==t&&(e.likes=1,e.dialogChange(!0,"标记为喜欢")),2==t&&(e.likes=2,e.dialogChange(!0,"标记为不喜欢"))})},scroll:function(){window.onscroll=function(){this.scrollTop=document.body.scrollTop||document.documentElement.scrollTop},this.scrollTop=document.body.scrollTop||document.documentElement.scrollTop},scrollToBottom:function(){var t=document.querySelector("#video"),e=t.scrollHeight,i=null,n=30;i=setInterval(function(){n+=30,(document.body.scrollTop=document.documentElement.scrollTop=this.scrollTop+n)>=e-687&&(clearInterval(i),document.body.scrollTop=document.documentElement.scrollTop=e)})},resetScrollTop:function(){document.body.scrollTop=document.documentElement.scrollTop=document.body.scrollHeight+600},report:function(){var t=this,e=(new Date).toLocaleDateString()+" "+(new Date).toLocaleTimeString();if(""==this.comment)return this.dialogChange(!1,"请输入评论内容"),void(this.comment="");var n=null==this.avator?"":this.avator;i.i(u.m)(this.$route.params.id,this.userName,e,this.comment,this.lists.name,n).then(function(i){"success"==i?(t.comments.push({userName:localStorage.getItem("token"),date:e,content:t.comment,avator:n}),t.dialogChange(!0,"评论成功"),t.comment="",t.$nextTick(function(){t.scrollToBottom()})):(t.dialogChange(!1,"评论失败"),t.comment="")})}})}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(7),a=i.n(n),o=i(11),s=i.n(o),r=i(6),l=i(20),c=i.n(l),u=i(5);e.default={name:"home",components:{vfooter:s.a,alertDialog:c.a},data:function(){return{lists:"",loading:!0,baseUrl:"http://vue.wclimb.site/images/",dialogShow:!1,dialogTxt:"",tips:!0,aniDialog:""}},computed:{tipsImg:function(){return this.tips?"icon-chenggong":"icon-shibai"},allLength:function(){return this.getJsonLength(this.lists[3])},movieLength:function(){return this.getJsonLength(this.lists[0])},tvLength:function(){return this.getJsonLength(this.lists[1])},zyLength:function(){return this.getJsonLength(this.lists[2])}},created:function(){this.initData()},watch:{$route:"initData"},methods:a()({initData:function(){var t=this;if(this.loading=!0,i.i(r.h)().then(function(e){setTimeout(function(){t.loading=!1},500),t.lists=e,t.initVideoData(e)}).catch(function(t){return console.log("error",t)}),null!==localStorage.getItem("token")&&null!==localStorage.getItem("avator")){var e=localStorage.getItem("token");i.i(r.o)(e).then(function(t){localStorage.setItem("avator",t[0].avator)}).catch(function(e){localStorage.removeItem("token"),t.dialogChange(!1,"用户信息变化,请重新登陆"),setTimeout(function(){t.$router.push({path:"/login"})},2e3)})}},dialogChange:function(t,e){var i=this;this.aniDialog="aniDialog",this.dialogShow=!0,this.tips=t,this.dialogTxt=e,setTimeout(function(){i.dialogShow=!1},1500)}},i.i(u.c)(["initVideoData"]),{getJsonLength:function(t){var e=0;for(var i in t)e++;return e}})}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(7),a=i.n(n),o=i(11),s=i.n(o),r=i(20),l=i.n(r),c=i(5),u=i(6);e.default={name:"login",components:{vfooter:s.a,alertDialog:l.a},data:function(){return{lists:"",loading:!1,userName:"",password:"",yzm:"",dialogShow:!1,dialogTxt:"",tips:!0,aniDialog:"",yzmTest:"",url:""}},computed:a()({},i.i(c.b)(["userInfo"]),{tipsImg:function(){return this.tips?"icon-chenggong":"icon-shibai"}}),mounted:function(){localStorage.getItem("token")&&this.$router.push({path:"/me"}),this.url="http://vue.wclimb.site/images/yzm.jpg",this.changYzm()},methods:{dialogChange:function(t,e){var i=this;this.aniDialog="aniDialog",this.dialogShow=!0,this.tips=t,this.dialogTxt=e,setTimeout(function(){i.dialogShow=!1},1500)},signin:function(){var t=this;return""===this.userName||""===this.password?void this.dialogChange(!1,"用户名/密码不能为空"):this.yzm!=this.yzmTest?void this.dialogChange(!1,"验证码错误"):void i.i(u.f)(this.userName,this.password).then(function(e){if("allTrue"==e.split(",")[0]){t.dialogChange(!0,"登录成功"),t.$store.dispatch("createUser",{userName:t.userName}),window.localStorage.setItem("token",t.userName),window.localStorage.setItem("avator",e.split(",")[1]);var i=t;setTimeout(function(){i.$router.push({path:"/me"})},1e3)}else if("passwordFalse"==e)t.dialogChange(!1,"密码错误");else if("newUser"==e){t.dialogChange(!0,"注册成功"),window.localStorage.setItem("token",t.userName);var i=t;setTimeout(function(){i.$router.push({path:"/me"})},1e3)}})},changYzm:function(){var t=this;new Date;this.url="http://vue.wclimb.site/images/yzm.jpg?v="+(new Date).getTime(),i.i(u.g)().then(function(e){t.yzmTest=e,console.log("验证码",t.yzmTest)})}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(7),a=i.n(n),o=i(11),s=i.n(o),r=i(20),l=i.n(r),c=i(5),u=i(6);e.default={name:"me",components:{vfooter:s.a,alertDialog:l.a},data:function(){return{likeLists:"",comments:"",loading:!1,likeLengthOne:"",likeLengthTwo:"",start:"",scroll:"",dialogShow:!1,dialogTxt:"",tips:!0,aniDialog:"",nowUploadAvator:"",defaultName:!0,userNameModel:"",userName:"",baseUrl:"http://vue.wclimb.site/images/"}},computed:a()({},i.i(c.b)(["meCommentDatas"]),{avator:function(){return localStorage.getItem("avator")?localStorage.getItem("avator"):""},tipsImg:function(){return this.tips?"icon-chenggong":"icon-shibai"}}),mounted:function(){this.userName=localStorage.getItem("token"),this.initData()},watch:{$route:"initData"},directives:{focus:{inserted:function(t){t.focus()}}},methods:a()({dialogChange:function(t,e){var i=this;this.aniDialog="aniDialog",this.dialogShow=!0,this.tips=t,this.dialogTxt=e,setTimeout(function(){i.dialogShow=!1},1500)}},i.i(c.c)(["initMeCommentData"]),{initData:function(){var t=this;this.loading=!0,null===localStorage.getItem("token")&&this.$router.push({path:"/login"}),i.i(u.a)(this.userName).then(function(e){t.initMeCommentData(e),t.comments=e}).catch(function(t){return console.log("error",t)}),i.i(u.b)(this.userName).then(function(e){setTimeout(function(){t.loading=!1},500),t.likeLists=e,t.likeLengthOne=e[0].length,t.likeLengthTwo=e[1].length}).catch(function(t){return console.log("error",t)})},logout:function(){var t=this;this.dialogChange(!0,"登出成功"),setTimeout(function(){t.dialogShow=!1,t.$router.push({path:"/"})},1500),localStorage.removeItem("token"),localStorage.removeItem("avator")},deleteComment:function(t,e){var n=this,a=e.currentTarget;i.i(u.c)(t).then(function(t){"success"==t&&(n.dialogChange(!0,"删除成功"),a.parentNode.style.height=0,a.parentNode.style.borderTop="none",n.$nextTick(function(){n.comments.length--}))})},touchStart:function(t){for(var e=document.querySelectorAll(".commentWrap"),i=0;i<e.length;i++)e[i].style.transform="translate(0rem)",e[i].style.webkitTransform="translate(0rem)";var n=t.touches[0].pageX/100;this.start=n},touchStartHideAll:function(t){if("delete"!==t.target.className)for(var e=document.querySelectorAll(".commentWrap"),i=0;i<e.length;i++)e[i].style.transform="translate(0rem)",e[i].style.webkitTransform="translate(0rem)"},touchMove:function(t){var e=t.touches[0].pageX/100-this.start;this.scroll=e,e<-1.5?e=-1.5:e>0&&(e=0);var i=t.currentTarget;i.style.transform="translate("+e+"rem)",i.style.webkitTransform="translate("+e+"rem)"},touchEnd:function(t){var e=t.currentTarget;this.scroll<0&&this.scroll>=-1&&(e.style.transform="translate(0rem)",e.style.webkitTransform="translate(0rem)"),this.scroll<-1&&(e.style.transform="translate(-1.5rem)",e.style.webkitTransform="translate(-1.5rem)"),this.scroll=0},upload:function(){var t=document.querySelector("#upload"),e=this;t.addEventListener("change",function(){if(0!=this.files.length){var t=this.files[0],n=new FileReader;if(!n)return void(this.value="");if(t.size>=524288)return void e.dialogChange(!1,"超过512Kb了哟!");n.onload=function(t){this.value="",i.i(u.d)(e.userName,t.target.result).then(function(t){e.dialogChange(!0,"上传成功"),window.localStorage.setItem("avator",t),e.nowUploadAvator=t}).catch(function(t){e.dialogChange(!1,"上传失败")})},n.readAsDataURL(t)}},!1)},editUserName:function(){this.defaultName=!1,this.userNameModel=this.userName},submitEditName:function(){var t=this,e=this.userNameModel;if(e==this.userName)return this.dialogChange(!1,"请修改名称！"),void(this.defaultName=!0);i.i(u.e)(this.userName,e).then(function(i){"editSuccess"==i?(t.dialogChange(!0,"修改成功"),localStorage.setItem("token",e),t.userName=e,t.defaultName=!0):"repeatName"==i?(t.dialogChange(!1,"用户已存在"),t.defaultName=!0):(t.dialogChange(!1,"修改失败"),t.defaultName=!0)})},showDefaultName:function(){this.defaultName=!0}})}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(70),a=i.n(n),o=i(68),s=i.n(o),r=i(7),l=i.n(r),c=i(11),u=i.n(c),m=i(5),d=i(6);e.default={name:"more",components:{vfooter:u.a},data:function(){return{lists:"",icon:"iconfont",iconStyle:"icon-wjx",iconStyleCopy:"icon-wjx-copy",loading:!1,videoCls:"",baseUrl:"http://vue.wclimb.site/images/"}},computed:l()({},i.i(m.b)(["videoData"])),created:function(){this.initData()},methods:{initData:function(){var t=this;return s()(a.a.mark(function e(){var n;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.$route.path,t.loading=!0,null!=t.videoData){e.next=5;break}return e.next=5,i.i(d.h)().then(function(e){t.$store.dispatch("initVideoData",e)});case 5:t.loading=!1,"/all"===n?(t.lists=t.videoData[3],t.videoCls="全部"):"/movie"===n?(t.lists=t.videoData[0],t.videoCls="电影"):"/tv"===n?(t.lists=t.videoData[1],t.videoCls="电视剧"):"/zy"===n&&(t.lists=t.videoData[2],t.videoCls="综艺");case 7:case"end":return e.stop()}},e,t)}))()}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(11),a=i.n(n),o=(i(5),i(6));e.default={name:"search",components:{vfooter:a.a},data:function(){return{search:"",results:"",baseUrl:"http://vue.wclimb.site/images/"}},computed:{},directives:{focus:{inserted:function(t){t.focus()}}},created:function(){},methods:{searchResult:function(){var t=this;""!=this.search?i.i(o.n)(this.search).then(function(e){t.results=e}):this.results=""}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"dialog",components:{},data:function(){return{}},props:["dialogTxt","icon","aniDialog"],computed:{},mounted:function(){},methods:{}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"vfooter",data:function(){return{msg:""}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(21),a=i(50),o=i.n(a),s=i(47),r=i(48),l=i(46),c=(i.n(l),i(49)),u=i.n(c);n.a.use(u.a,{loading:"http://www.wclimb.site/images/imgLoading.svg"}),n.a.config.productionTip=!1,new n.a({el:"#app",router:s.a,store:r.a,template:"<App/>",components:{App:o.a}})},function(t,e,i){"use strict";e.a={createUser:function(t,e){(0,t.commit)("ADD_USER",e)},initVideoData:function(t,e){(0,t.commit)("INIT_VDIEO_DATA",e)},initMeCommentData:function(t,e){(0,t.commit)("INIT_COMMENT_DATA",e)}}},function(t,e,i){"use strict";i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a}),i.d(e,"c",function(){return o});var n="ADD_USER",a="INIT_VDIEO_DATA",o="INIT_COMMENT_DATA"},function(t,e,i){"use strict";var n,a=i(69),o=i.n(a),s=i(7),r=i.n(s),l=i(62);e.a=(n={},o()(n,l.a,function(t,e){t.userInfo=e.userName}),o()(n,l.b,function(t,e){t.videoData=e}),o()(n,l.c,function(t,e){t.meCommentDatas=r()({},t.meCommentDatas,e)}),n)},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,function(t,e,i){function n(t){i(118)}var a=i(3)(i(52),i(135),n,"data-v-f407eeb4",null);t.exports=a.exports},function(t,e,i){function n(t){i(112)}var a=i(3)(i(53),i(129),n,"data-v-1c6e5974",null);t.exports=a.exports},function(t,e,i){function n(t){i(117)}var a=i(3)(i(54),i(134),n,"data-v-e17c88b8",null);t.exports=a.exports},function(t,e,i){function n(t){i(110)}var a=i(3)(i(55),i(127),n,"data-v-186aa8ed",null);t.exports=a.exports},function(t,e,i){function n(t){i(113)}var a=i(3)(i(56),i(130),n,"data-v-2c5c74ea",null);t.exports=a.exports},function(t,e,i){function n(t){i(116)}var a=i(3)(i(57),i(133),n,"data-v-cd305b06",null);t.exports=a.exports},function(t,e,i){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"me",on:{touchstart:t.touchStartHideAll}},[n("vfooter"),t._v(" "),t.loading?n("div",{staticClass:"loading"},[n("img",{attrs:{src:i(19),alt:""}})]):t._e(),t._v(" "),n("section",{staticClass:"me_deatil",on:{click:t.showDefaultName}},[n("section",{staticClass:"avator"},[""!=t.nowUploadAvator?[n("input",{attrs:{id:"upload",type:"file"},on:{click:t.upload}}),t._v(" "),n("div",{staticClass:"avator_border"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.baseUrl+"/avator/"+t.nowUploadAvator+".png",expression:"baseUrl+'/avator/'+ nowUploadAvator +'.png' "}],attrs:{alt:""}})])]:""==t.avator?[n("input",{attrs:{id:"upload",type:"file"},on:{click:t.upload}}),t._v(" "),n("div",{staticClass:"avator_border"},[t._v("上传头像")])]:[n("input",{attrs:{id:"upload",type:"file"},on:{click:t.upload}}),t._v(" "),n("div",{staticClass:"avator_border"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.baseUrl+"/avator/"+t.avator+".png",expression:"baseUrl+'/avator/'+ avator +'.png' "}],attrs:{alt:""}})])],t._v(" "),n("div",{staticClass:"name",on:{click:function(e){e.stopPropagation(),t.editUserName(e)}}},[t.defaultName?[t._v("\n                  "+t._s(t.userName)+" "),n("i",{staticClass:"iconfont icon-bianji"})]:[n("input",{directives:[{name:"focus",rawName:"v-focus"},{name:"model",rawName:"v-model",value:t.userNameModel,expression:"userNameModel"}],attrs:{type:"text"},domProps:{value:t.userName,value:t.userNameModel},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13))return null;t.submitEditName(e)},input:function(e){e.target.composing||(t.userNameModel=e.target.value)}}}),t._v(" "),n("i",{staticClass:"iconfont icon-submit",on:{click:function(e){e.stopPropagation(),t.submitEditName(e)}}})]],2),t._v(" "),n("div",{staticClass:"logout",on:{click:t.logout}},[n("i",{staticClass:"iconfont icon-logout23"}),t._v("\n             退出\n          ")])],2),t._v(" "),n("section",{staticClass:"like_list list"},[n("h3",[n("i",{staticClass:"iconfont icon-msnui-love"}),t._v("\n              喜欢"),n("span",[t._v("("+t._s(t.likeLengthOne)+")")])]),t._v(" "),n("ul",t._l(t.likeLists[0],function(e){return n("li",[n("router-link",{attrs:{to:"/video/"+e.uid}},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.baseUrl+e.videoImg,expression:"baseUrl+likeList.videoImg"}],attrs:{alt:""}}),t._v(" "),n("h4",[t._v(t._s(e.videoName))]),t._v(" "),n("div",[n("div",{staticClass:"starList",style:{"background-position-y":-15*(10-e.star).toFixed(0)+"px"}}),t._v(" "),n("span",[t._v(t._s(e.star))])])])],1)}))]),t._v(" "),n("section",{staticClass:"dislike_list list"},[n("h3",[n("i",{staticClass:"iconfont icon-buxihuan"}),t._v("\n              不喜欢"),n("span",[t._v("("+t._s(t.likeLengthTwo)+")")])]),t._v(" "),n("ul",t._l(t.likeLists[1],function(e){return n("li",[n("router-link",{attrs:{to:"/video/"+e.uid}},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.baseUrl+e.videoImg,expression:"baseUrl+likeList.videoImg"}],attrs:{alt:""}}),t._v(" "),n("h4",[t._v(t._s(e.videoName))]),t._v(" "),n("div",[n("div",{staticClass:"starList",style:{"background-position-y":-15*(10-e.star).toFixed(0)+"px"}}),t._v(" "),n("span",[t._v(t._s(e.star))])])])],1)}))]),t._v(" "),n("section",{staticClass:"comment list"},[n("h3",[n("i",{staticClass:"iconfont icon-pinglun1"}),t._v("\n              评论"),n("span",[t._v("("+t._s(t.comments.length)+")")])]),t._v(" "),n("ul",t._l(t.comments,function(e){return n("li",[n("section",{staticClass:"commentWrap",on:{touchstart:function(e){e.stopPropagation(),e.preventDefault(),t.touchStart(e)},touchmove:function(e){e.stopPropagation(),e.preventDefault(),t.touchMove(e)},touchend:function(e){e.stopPropagation(),e.preventDefault(),t.touchEnd(e)}}},[n("h5",[t._v("影片："+t._s(e.videoName))]),t._v(" "),n("section",[n("span",[t._v("评论：")]),t._v(" "),n("p",[t._v(t._s(e.content))])])]),t._v(" "),n("div",{staticClass:"delete",on:{click:function(i){t.deleteComment(e.id,i)}}},[t._v("删除")])])}))])]),t._v(" "),t.dialogShow?n("alert-dialog",{attrs:{icon:t.tipsImg,aniDialog:t.aniDialog,dialogTxt:t.dialogTxt}}):t._e()],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"dialog"},[i("div",{staticClass:"dialog_wrap",class:t.aniDialog},[i("i",{staticClass:"iconfont",class:t.icon}),t._v(" "),i("p",[t._v(t._s(t.dialogTxt))])])])},staticRenderFns:[]}},function(t,e,i){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"home"},[n("vfooter"),t._v(" "),t.loading?n("div",{staticClass:"loading"},[n("img",{attrs:{src:i(19),alt:""}})]):t._e(),t._v(" "),n("div",{attrs:{id:"search"}},[n("router-link",{attrs:{to:"/home/search"}},[n("div",{staticClass:"search_input"},[n("i",{staticClass:"iconfont icon-sousuo1"}),t._v("搜索\n            ")])])],1),t._v(" "),n("section",{staticClass:"video_list"},[n("div",{staticClass:"video_list_header"},[n("h3",[t._v("全部"),n("span",[t._v("("+t._s(t.allLength)+")")])]),t._v(" "),n("router-link",{attrs:{to:"/all"}},[t._v("更多 "),n("i",{staticClass:"iconfont icon-jiantouyou"})])],1),t._v(" "),n("ul",t._l(t.lists[3],function(e,i){return i<10?n("li",[n("router-link",{attrs:{to:"/video/"+e.id}},[n("div",[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.baseUrl+e.img,expression:"baseUrl+list.img"}],attrs:{alt:""}})]),t._v(" "),n("h3",[t._v(t._s(e.name))]),t._v(" "),n("div",[n("div",{staticClass:"starList",style:{"background-position-y":-15*(10-e.star).toFixed(0)+"px"}}),t._v(" "),n("span",[t._v(t._s(e.star))])])])],1):t._e()}))]),t._v(" "),n("section",{staticClass:"video_list"},[n("div",{staticClass:"video_list_header"},[n("h3",[t._v("电影"),n("span",[t._v("("+t._s(t.movieLength)+")")])]),t._v(" "),n("router-link",{attrs:{to:"/movie"}},[t._v("更多 "),n("i",{staticClass:"iconfont icon-jiantouyou"})])],1),t._v(" "),n("ul",t._l(t.lists[0],function(e,i){return i<10?n("li",[n("router-link",{attrs:{to:"/video/"+e.id}},[n("div",[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.baseUrl+e.img,expression:"baseUrl+list.img"}],attrs:{alt:""}})]),t._v(" "),n("h3",[t._v(t._s(e.name))]),t._v(" "),n("div",[n("div",{staticClass:"starList",style:{"background-position-y":-15*(10-e.star).toFixed(0)+"px"}}),t._v(" "),n("span",[t._v(t._s(e.star))])])])],1):t._e()}))]),t._v(" "),n("section",{staticClass:"video_list"},[n("div",{staticClass:"video_list_header"},[n("h3",[t._v("电视剧"),n("span",[t._v("("+t._s(t.tvLength)+")")])]),t._v(" "),n("router-link",{attrs:{to:"/tv"}},[t._v("更多 "),n("i",{staticClass:"iconfont icon-jiantouyou"})])],1),t._v(" "),n("ul",t._l(t.lists[1],function(e,i){return i<10?n("li",[n("router-link",{attrs:{to:"/video/"+e.id}},[n("div",[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.baseUrl+e.img,expression:"baseUrl+list.img"}],attrs:{alt:""}})]),t._v(" "),n("h3",[t._v(t._s(e.name))]),t._v(" "),n("div",[n("div",{staticClass:"starList",style:{"background-position-y":-15*(10-e.star).toFixed(0)+"px"}}),t._v(" "),n("span",[t._v(t._s(e.star))])])])],1):t._e()}))]),t._v(" "),n("section",{staticClass:"video_list"},[n("div",{staticClass:"video_list_header"},[n("h3",[t._v("综艺"),n("span",[t._v("("+t._s(t.zyLength)+")")])]),t._v(" "),n("router-link",{attrs:{to:"/zy"}},[t._v("更多 "),n("i",{staticClass:"iconfont icon-jiantouyou"})])],1),t._v(" "),n("ul",t._l(t.lists[2],function(e,i){return i<10?n("li",[n("router-link",{attrs:{to:"/video/"+e.id}},[n("div",[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.baseUrl+e.img,expression:"baseUrl+list.img"}],attrs:{alt:""}})]),t._v(" "),n("h3",[t._v(t._s(e.name))]),t._v(" "),n("div",[n("div",{staticClass:"starList",style:{"background-position-y":-15*(10-e.star).toFixed(0)+"px"}}),t._v(" "),n("span",[t._v(t._s(e.star))])])])],1):t._e()}))]),t._v(" "),n("transition",{attrs:{name:"router-in"}},[n("router-view")],1),t._v(" "),t.dialogShow?n("alert-dialog",{attrs:{icon:t.tipsImg,aniDialog:t.aniDialog,dialogTxt:t.dialogTxt}}):t._e()],1)},staticRenderFns:[]}},function(t,e,i){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"video"},[n("vfooter"),t._v(" "),t.loading?n("div",{staticClass:"loading"},[n("img",{attrs:{src:i(19),alt:""}})]):t._e(),t._v(" "),n("section",{staticClass:"video_list"},[n("h1",[t._v(t._s(t.videoCls))]),t._v(" "),n("ul",t._l(t.lists,function(e){return n("li",[n("router-link",{attrs:{to:"video/"+e.id}},[n("div",[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.baseUrl+e.img,expression:"baseUrl+list.img"}],attrs:{alt:""}})]),t._v(" "),n("h3",[t._v(t._s(e.name))]),t._v(" "),n("div",[n("div",{staticClass:"starList",style:{"background-position-y":-15*(10-e.star).toFixed(0)+"px"}}),t._v(" "),n("span",[t._v(t._s(e.star))])])])],1)}))])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"video"}},[i("transition",{attrs:{name:"router-fd"}},[i("keep-alive",{attrs:{include:"home"}},[i("router-view")],1)],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"footer"},[i("router-link",{attrs:{to:"/"}},[i("i",{staticClass:"iconfont icon-dianying"}),t._v(" "),i("span",[t._v("主页")])]),t._v(" "),i("router-link",{attrs:{to:"/me"}},[i("i",{staticClass:"iconfont icon-my1"}),t._v(" "),i("span",[t._v("我")])])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{attrs:{id:"search_main"}},[i("vfooter"),t._v(" "),i("div",{attrs:{id:"search"}},[i("input",{directives:[{name:"focus",rawName:"v-focus"},{name:"model",rawName:"v-model.trim",value:t.search,expression:"search",modifiers:{trim:!0}}],attrs:{type:"text"},domProps:{value:t.search},on:{input:[function(e){e.target.composing||(t.search=e.target.value.trim())},t.searchResult],blur:function(e){t.$forceUpdate()}}}),t._v(" "),i("i",{staticClass:"iconfont icon-sousuo1"}),t._v(" "),i("router-link",{attrs:{to:"/"}},[i("span",[t._v("取消")])])],1),t._v(" "),i("div",{staticClass:"search_title"},[t._v("\n        搜索结果\n    ")]),t._v(" "),0==t.results.length&&""!=t.search?[i("div",{staticClass:"not_find"},[t._v("没有相关影片")])]:[i("ul",t._l(t.results,function(e){return i("li",[i("router-link",{attrs:{to:"/video/"+e.id}},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.baseUrl+e.img,expression:"baseUrl+result.img"}],attrs:{alt:""}}),t._v(" "),i("div",{staticClass:"result_name"},[i("p",[t._v(t._s(e.name))]),t._v(" "),i("p",[t._v(t._s(e.star)+"分/"+t._s(e.time1)+"  ")])])])],1)}))]],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("main",[i("vfooter"),t._v(" "),t.dialogShow?i("alert-dialog",{attrs:{icon:t.tipsImg,aniDialog:t.aniDialog,dialogTxt:t.dialogTxt}}):t._e(),t._v(" "),i("section",{staticClass:"main_wrap"},[t._m(0),t._v(" "),i("section",{staticClass:"user"},[i("form",{attrs:{enctype:"multipart/form-data"}},[i("div",{staticClass:"input"},[i("div",{staticClass:"input_wrap"},[i("i",{staticClass:"iconfont icon-name"}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.userName,expression:"userName",modifiers:{trim:!0}}],attrs:{type:"text",name:"userName",placeholder:"用户名"},domProps:{value:t.userName},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13))return null;t.signin(e)},input:function(e){e.target.composing||(t.userName=e.target.value.trim())},blur:function(e){t.$forceUpdate()}}})]),t._v(" "),i("div",{staticClass:"input_wrap"},[i("i",{staticClass:"iconfont icon-mima1"}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",name:"password",placeholder:"密码"},domProps:{value:t.password},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13))return null;t.signin(e)},input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),i("div",{staticClass:"input_wrap"},[i("i",{staticClass:"iconfont icon-yanzhengma1"}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.yzm,expression:"yzm"}],attrs:{type:"text",name:"yzm",placeholder:"验证码"},domProps:{value:t.yzm},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13))return null;t.signin(e)},input:function(e){e.target.composing||(t.yzm=e.target.value)}}}),t._v(" "),i("img",{attrs:{src:t.url,alt:""},on:{click:t.changYzm}}),t._v(" "),i("p",[t._v("点击更换")])])]),t._v(" "),i("div",{staticClass:"submit",on:{click:t.signin}},[t._v("立即注册")])])])])],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"user_title"},[i("i",{staticClass:"iconfont icon-denglu"}),t._v(" "),i("h3",[t._v("注册/登录")])])}]}},function(t,e,i){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"detail",on:{touchmove:t.scroll}},[t.loading?n("div",{staticClass:"loading"},[n("img",{attrs:{src:i(19),alt:""}})]):t._e(),t._v(" "),n("header",[n("div",{staticClass:"wrap"},[t.lists.img?[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.baseUrl+t.lists.img,expression:"baseUrl+lists.img"}],attrs:{alt:""}})]:t._e(),t._v(" "),n("div",{staticClass:"video_name"},[n("h3",[t._v(t._s(t.lists.name))]),t._v(" "),n("div",{staticClass:"score_wrap"},[n("strong",[t._v(t._s(t.lists.star))]),t._v(" "),n("div",{staticClass:"score"},[n("div",{staticClass:"starList",style:{"background-position-y":-15*(10-t.lists.star).toFixed(0)+"px"}}),t._v(" "),n("p",[t._v(t._s(t.likeTotalLength)+"人评分/"+t._s(t.comments.length)+"条评论")])])])])],2)]),t._v(" "),n("section",{staticClass:"video_txt"},[n("div",{staticClass:"video_txt_wrap"},[n("p",[t.lists.timelong>90?[t._v("\n                  "+t._s(t.lists.timelong)+"分钟\n                ")]:[t._v("\n                 "+t._s(t.lists.timelong)+"季\n                ")],t._v("\n                "+t._s(t.lists.type)+"\n            ")],2),t._v(" "),n("p",[t._v(t._s(t.lists.time1)+"( "+t._s(t.lists.country)+" )上映 "+t._s(t.lists.country))]),t._v(" "),n("p",[t._v(t._s(t.lists.actors))])])]),t._v(" "),n("section",{staticClass:"like_list"},[null==t.userName?[n("div",{staticClass:"like likeDisable"},[t._v("喜欢")]),t._v(" "),n("div",{staticClass:"like likeDisable"},[t._v("不喜欢")]),t._v(" "),n("p",[t._v("登录后才可选择哟！")])]:t.likes?[n("div",{class:[1==t.likes?t.likeActive:t.likeDisable,t.likeCls]},[t._v("喜欢")]),t._v(" "),n("div",{class:[2==t.likes?t.likeActive:t.likeDisable,t.likeCls]},[t._v("不喜欢")])]:[n("div",{staticClass:"like",on:{click:function(e){t.like(1)}}},[t._v("喜欢")]),t._v(" "),n("div",{staticClass:"like",on:{click:function(e){t.like(2)}}},[t._v("不喜欢")])]],2),t._v(" "),n("section",{staticClass:"video_about"},[n("h3",[t._v(t._s(t.lists.name)+"的剧情简介")]),t._v(" "),n("p",[t._v("\n            "+t._s(t.lists.detail)+"\n        ")])]),t._v(" "),n("section",{staticClass:"fixed_comment"},[t.comment_allow?[n("input",{directives:[{name:"model",rawName:"v-model",value:t.comment,expression:"comment"}],attrs:{type:"text",name:"comment",placeholder:"评论"},domProps:{value:t.comment},on:{click:t.resetScrollTop,keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13))return null;t.report(e)},input:function(e){e.target.composing||(t.comment=e.target.value)}}}),t._v(" "),n("button",{on:{click:t.report}},[t._v("评论")])]:[n("input",{directives:[{name:"model",rawName:"v-model",value:t.comment,expression:"comment"}],attrs:{type:"text",name:"comment",placeholder:"登陆后才可以评论哟！",readonly:""},domProps:{value:t.comment},on:{input:function(e){e.target.composing||(t.comment=e.target.value)}}}),t._v(" "),n("button",{staticClass:"disabled"},[t._v("评论")])]],2),t._v(" "),n("section",{staticClass:"video_comments"},[n("h3",[t._v("评论("+t._s(t.comments.length)+")")]),t._v(" "),n("ul",{attrs:{id:"ul"}},t._l(t.comments,function(e){return n("li",[""!=e.avator?[n("div",{staticClass:"avator"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.baseUrl+"/avator/"+e.avator+".png",expression:"baseUrl+'/avator/'+ comment.avator +'.png' "}],attrs:{alt:""}})])]:[n("div",{staticClass:"avator"},[t._v("\n                        "+t._s(e.userName.charAt(0))+"\n                    ")])],t._v(" "),n("div",{staticClass:"comments_detail"},[n("h4",[t._v(" "+t._s(e.userName))]),t._v(" "),n("p",[t._v(" "+t._s(e.date))]),t._v(" "),n("div",[t._v(t._s(e.content))])])],2)}))]),t._v(" "),t.dialogShow?n("alert-dialog",{attrs:{icon:t.tipsImg,aniDialog:t.aniDialog,dialogTxt:t.dialogTxt}}):t._e()],1)},staticRenderFns:[]}}],[60]);
//# sourceMappingURL=app.e7974d76670b7c010fea.js.map