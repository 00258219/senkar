(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,t){},33:function(e,t,a){e.exports=a(63)},45:function(e,t){},51:function(e,t){},56:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var i=a(0),s=a.n(i),n=a(26),u=a.n(n),r=a(8),o=a(9),c=a(12),m=a(10),l=a(13),d=a(18),p=a(11),v=a(1),g={en:{"nav.home":"Home","nav.lang":"Spanish","nav.portfolio":"Portfolio","nav.about_me":"About me","nav.student_life":"Student Life","home.tittle":"SENKAR Project","port.tittle":"Portfolio","port.subT":"This is my Portfolio about all the works and projects that I consider to be outstanding in my learning and work aspects in terms of programming.","about.presentation":"-Informatics Engineering student","sl.tittle":"My Student Life","sl.proyectsP":"Programming Projects:","sl.p1":"Program 01: Exact Date.","sl.p2":"Program 02: ","sl.p3":"Program 03: Rock-paper-scissors"},es:{"nav.home":"Inicio","nav.lang":"Ingl\xe9s","nav.portfolio":"Portafolio","nav.about_me":"Sobre mi","nav.student_life":"Vida Estudiantil","home.tittle":"Proyecto SENKAR","port.tittle":"Portafolio","port.subT":"Esto es mi Portafolio sobre todos los trabajos y proyectos que considero sobresalientes en mis aspectos de aprendisaje y laboral en cuanto a la programaci\xf3n.","about.presentation":"-Estudiante de Ingenier\xeda Inform\xe1tica.","sl.tittle":"Mi vida Estudiantil","sl.proyectsP":"Proyectos de Programaci\xf3n:","sl.p1":"Programa 01: Fecha Exacta.","sl.p2":"Programa 02: ","sl.p3":"Programa 03: Piedra-papel-tijera"}};a(56);var h=function(){return s.a.createElement("div",{className:"home"},s.a.createElement("h1",null,s.a.createElement(v.a,{id:"home.tittle"})))};var b=function(){return s.a.createElement("div",null,s.a.createElement("h1",null,s.a.createElement(v.a,{id:"port.tittle"})),s.a.createElement("p",{className:"p-h3"},s.a.createElement(v.a,{id:"port.subT"})),s.a.createElement("p",null,"1 - FastAudit"),s.a.createElement("p",null,"2 - CrowCodding"),s.a.createElement("p",null,"3 - My First Website"),s.a.createElement("p",null,"4 - Blockchain UNAM"))};var E=function(){return s.a.createElement("div",null,s.a.createElement("h1",{style:{marginBottom:0}},"Oscar Enrique Orellana Monterrosa"),s.a.createElement("p",{className:"p-h3",style:{marginTop:0,marginLeft:10}},s.a.createElement(v.a,{id:"about.presentation"})))},q=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={fullP:null},a}return Object(l.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.props.fullB&&this.setState({fullP:s.a.createElement("p",{style:{textAlign:"right",paddingRight:"4%"}},"*Full Project*")})}},{key:"render",value:function(){return s.a.createElement("div",{style:f.divF},s.a.createElement("p",{className:"p-h3"},s.a.createElement(v.a,{id:this.props.tittle})),s.a.createElement("div",{style:f.div_program},this.props.codeP),s.a.createElement("p",null,"Links: Python, Javascript, C++"),this.state.fullP)}}]),t}(s.a.Component),f={divF:{width:"92%",borderRadius:4,border:"solid 1px #CDCDCD",marginLeft:"2%",marginBottom:20},div_program:{height:200,width:"97%",backgroundColor:"#F0F0F0",marginBottom:12,padding:0}},y=q,k=a(15),w=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).ExactlyDate=function(e,t,a){e=Number(e),t=Number(t),a=Number(a);var i=function(e){return e%400===0||e%4===0&&e%100!==0};if(0===e)return"*El numero del a\xf1o es invalido.";if(0===t)return"*El numero del mes es invalido.";if(0===a)return"*El numero del dia es invalido.";switch(t){case 4:case 6:case 9:case 11:if(a>30)return"*El dia no es valdio acorde al mes.";break;case 2:if(i(e)){if(a>29)return"*El dia no es valdio acorde al mes."}else if(a>28)return"*El dia no es valdio acorde al mes.";break;case 1:case 3:case 5:case 7:case 8:case 10:case 12:0;break;default:return null}for(var s=0,n=1;e-1>=n;n++)i(n)&&s++;for(var u=0,r=0;t-1>=r;r++)switch(r){case 1:u=31;break;case 2:i(e)?u+=29:u+=28;break;case 3:u+=31;break;case 4:u+=30;break;case 5:u+=31;break;case 6:u+=30;break;case 7:case 8:u+=31;break;case 9:u+=30;break;case 10:u+=31;break;case 11:u+=30;break;case 12:u+=31;break;case 0:u=0;break;default:return"*El valor de mes es invalido."}var o=(365*(e-1-s)+366*s+u+a)%7;switch(o){case 1:o="Lunes";break;case 2:o="Martes";break;case 3:o="Miercoles";break;case 4:o="Jueves";break;case 5:o="Viernes";break;case 6:o="Sabado";break;case 0:o="Domingo";break;default:return null}return"".concat(o," ").concat(a," de ").concat(function(e){switch(e){case 1:e="Enero";break;case 2:e="Febrero";break;case 3:e="Marzo";break;case 4:e="Abril";break;case 5:e="Mayo";break;case 6:e="Junio";break;case 7:e="Julio";break;case 8:e="Agosto";break;case 9:e="Septiembre";break;case 10:e="Octubre";break;case 11:e="Noviembre";break;case 12:e="Diciembre";break;default:return"*El valor de mes es invalido."}return e}(t)," del a\xf1o ").concat(e,".")},a.state={year:"",month:"",day:"",date:!1},a.handleChangeYear=a.handleChangeYear.bind(Object(k.a)(a)),a.handleChangeMonth=a.handleChangeMonth.bind(Object(k.a)(a)),a.handleChangeDay=a.handleChangeDay.bind(Object(k.a)(a)),a}return Object(l.a)(t,e),Object(o.a)(t,[{key:"handleChangeYear",value:function(e){isNaN(e.target.value)||this.setState({year:e.target.value})}},{key:"handleChangeMonth",value:function(e){!isNaN(e.target.value)&&e.target.value>=0&&e.target.value<=12&&this.setState({month:e.target.value})}},{key:"handleChangeDay",value:function(e){!isNaN(e.target.value)&&e.target.value>=0&&e.target.value<=31&&this.setState({day:e.target.value})}},{key:"render",value:function(){var e=this,t=null;return t=this.state.date?s.a.createElement("p",{style:{paddingTop:"1%"}}," ",this.ExactlyDate(this.state.year,this.state.month,this.state.day)):null,s.a.createElement("div",{style:{padding:0,paddingLeft:"1%"}},s.a.createElement("p",{style:{margin:0,padding:0,paddingTop:"1%"}},"Ingresa una fecha cualquiera."),s.a.createElement("p",{style:{margin:0,marginBottom:"1%",fontSize:"82%"}},"*Tiene que ser una fecha valida, con el a\xf1o mayor a 0."),s.a.createElement("form",null,s.a.createElement("label",null,"A\xf1o:",s.a.createElement("input",{style:P.inputS,type:"text",placeholder:"year > 0",value:this.state.year,onChange:this.handleChangeYear})),s.a.createElement("label",null,"Mes:",s.a.createElement("input",{style:P.inputS,type:"text",placeholder:"1 - 12",value:this.state.month,onChange:this.handleChangeMonth})),s.a.createElement("label",null,"D\xeda:",s.a.createElement("input",{style:P.inputS,type:"text",placeholder:"1 - 31",value:this.state.day,onChange:this.handleChangeDay}))),s.a.createElement("button",{onClick:function(){e.setState({date:!0})}}," submit "),t)}}]),t}(s.a.Component),P={inputS:{width:50}},M=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={imageP1:3,imageP2:3},a}return Object(l.a)(t,e),Object(o.a)(t,[{key:"nextImage1",value:function(){1===this.state.imageP1?this.setState({imageP1:2}):2===this.state.imageP1?this.setState({imageP1:3}):3===this.state.imageP1&&this.setState({imageP1:1})}},{key:"nextImage2",value:function(){1===this.state.imageP2?this.setState({imageP2:2}):2===this.state.imageP2?this.setState({imageP2:3}):3===this.state.imageP2&&this.setState({imageP2:1})}},{key:"componentDidMount",value:function(){this.nextImage1(),this.nextImage2()}},{key:"render",value:function(){var e=this,t={1:"https://www.pngitem.com/pimgs/m/109-1094400_rock-paper-scissors-png-clipart-rock-paper-scissor.png",2:"https://www.clipartmax.com/png/full/4-40202_drawing-clipart-scissors-scissors-clip-art-black-and-white.png",3:"https://d347awuzx0kdse.cloudfront.net/sydneyartstore/images/resized/f8ecde09099b450b5caac1f962e8e529586a3bdb.jpg"};return s.a.createElement("div",{style:{padding:0,display:"flex",height:"100%",width:"100%"}},s.a.createElement("div",{style:{padding:0,backgroundColor:"red",height:"100%",width:"100%",textAlign:"center"}},s.a.createElement("p",{style:{margin:0,padding:0,paddingTop:"1%",color:"white"}},"Selecciona una."),s.a.createElement("button",{style:{height:"80%",width:"80%",backgroundColor:"white"},onClick:function(){e.nextImage1()}}," ",s.a.createElement("img",{alt:"nop",height:"100%",width:"100%",src:t[this.state.imageP1]})," ")),s.a.createElement("div",{style:{padding:0,backgroundColor:"blue",height:"100%",width:"100%",textAlign:"center"}},s.a.createElement("p",{style:{margin:0,padding:0,paddingTop:"1%",color:"white"}},"Selecciona una."),s.a.createElement("button",{style:{height:"80%",width:"80%",backgroundColor:"white"},onClick:function(){e.nextImage2()}}," ",s.a.createElement("img",{alt:"nop",height:"100%",width:"100%",src:t[this.state.imageP2]})," ")))}}]),t}(s.a.Component),S=[{tittle:"sl.p1",code:s.a.createElement(w,null),fullB:!1},{tittle:"sl.p2",code:s.a.createElement("div",null,s.a.createElement("h3",null,"p2")),fullB:!0},{tittle:"sl.p3",code:s.a.createElement(M,null),fullB:!1}];var C=function(){return s.a.createElement("div",null,s.a.createElement("h1",null,s.a.createElement(v.a,{id:"sl.tittle"})),s.a.createElement("p",{className:"p-h3"},s.a.createElement(v.a,{id:"sl.proyectsP"})),S.map(function(e,t){return s.a.createElement(y,{tittle:e.tittle,codeP:e.code,fullB:e.fullB,key:t})}),s.a.createElement("p",null,"Morbi quis commodo odio aenean. Tempor orci eu lobortis elementum nibh tellus molestie. Ornare arcu odio ut sem. Malesuada nunc vel risus commodo viverra maecenas accumsan. Eros in cursus turpis massa tincidunt dui ut ornare. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Sit amet massa vitae tortor condimentum lacinia. Tristique et egestas quis ipsum suspendisse ultrices gravida dictum. Pretium quam vulputate dignissim suspendisse in est. Consequat mauris nunc congue nisi vitae. Luctus accumsan tortor posuere ac ut. Eget lorem dolor sed viverra ipsum. Etiam erat velit scelerisque in dictum non consectetur. Vestibulum lectus mauris ultrices eros in cursus turpis massa."),s.a.createElement("p",null,"Morbi quis commodo odio aenean. Tempor orci eu lobortis elementum nibh tellus molestie. Ornare arcu odio ut sem. Malesuada nunc vel risus commodo viverra maecenas accumsan. Eros in cursus turpis massa tincidunt dui ut ornare. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Sit amet massa vitae tortor condimentum lacinia. Tristique et egestas quis ipsum suspendisse ultrices gravida dictum. Pretium quam vulputate dignissim suspendisse in est. Consequat mauris nunc congue nisi vitae. Luctus accumsan tortor posuere ac ut. Eget lorem dolor sed viverra ipsum. Etiam erat velit scelerisque in dictum non consectetur. Vestibulum lectus mauris ultrices eros in cursus turpis massa."),s.a.createElement("p",null,"Morbi quis commodo odio aenean. Tempor orci eu lobortis elementum nibh tellus molestie. Ornare arcu odio ut sem. Malesuada nunc vel risus commodo viverra maecenas accumsan. Eros in cursus turpis massa tincidunt dui ut ornare. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Sit amet massa vitae tortor condimentum lacinia. Tristique et egestas quis ipsum suspendisse ultrices gravida dictum. Pretium quam vulputate dignissim suspendisse in est. Consequat mauris nunc congue nisi vitae. Luctus accumsan tortor posuere ac ut. Eget lorem dolor sed viverra ipsum. Etiam erat velit scelerisque in dictum non consectetur. Vestibulum lectus mauris ultrices eros in cursus turpis massa."),s.a.createElement("p",null,"Morbi quis commodo odio aenean. Tempor orci eu lobortis elementum nibh tellus molestie. Ornare arcu odio ut sem. Malesuada nunc vel risus commodo viverra maecenas accumsan. Eros in cursus turpis massa tincidunt dui ut ornare. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Sit amet massa vitae tortor condimentum lacinia. Tristique et egestas quis ipsum suspendisse ultrices gravida dictum. Pretium quam vulputate dignissim suspendisse in est. Consequat mauris nunc congue nisi vitae. Luctus accumsan tortor posuere ac ut. Eget lorem dolor sed viverra ipsum. Etiam erat velit scelerisque in dictum non consectetur. Vestibulum lectus mauris ultrices eros in cursus turpis massa."),s.a.createElement("p",null,"Morbi quis commodo odio aenean. Tempor orci eu lobortis elementum nibh tellus molestie. Ornare arcu odio ut sem. Malesuada nunc vel risus commodo viverra maecenas accumsan. Eros in cursus turpis massa tincidunt dui ut ornare. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Sit amet massa vitae tortor condimentum lacinia. Tristique et egestas quis ipsum suspendisse ultrices gravida dictum. Pretium quam vulputate dignissim suspendisse in est. Consequat mauris nunc congue nisi vitae. Luctus accumsan tortor posuere ac ut. Eget lorem dolor sed viverra ipsum. Etiam erat velit scelerisque in dictum non consectetur. Vestibulum lectus mauris ultrices eros in cursus turpis massa."),s.a.createElement("p",null,"Morbi quis commodo odio aenean. Tempor orci eu lobortis elementum nibh tellus molestie. Ornare arcu odio ut sem. Malesuada nunc vel risus commodo viverra maecenas accumsan. Eros in cursus turpis massa tincidunt dui ut ornare. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Sit amet massa vitae tortor condimentum lacinia. Tristique et egestas quis ipsum suspendisse ultrices gravida dictum. Pretium quam vulputate dignissim suspendisse in est. Consequat mauris nunc congue nisi vitae. Luctus accumsan tortor posuere ac ut. Eget lorem dolor sed viverra ipsum. Etiam erat velit scelerisque in dictum non consectetur. Vestibulum lectus mauris ultrices eros in cursus turpis massa."),s.a.createElement("p",null,"Morbi quis commodo odio aenean. Tempor orci eu lobortis elementum nibh tellus molestie. Ornare arcu odio ut sem. Malesuada nunc vel risus commodo viverra maecenas accumsan. Eros in cursus turpis massa tincidunt dui ut ornare. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Sit amet massa vitae tortor condimentum lacinia. Tristique et egestas quis ipsum suspendisse ultrices gravida dictum. Pretium quam vulputate dignissim suspendisse in est. Consequat mauris nunc congue nisi vitae. Luctus accumsan tortor posuere ac ut. Eget lorem dolor sed viverra ipsum. Etiam erat velit scelerisque in dictum non consectetur. Vestibulum lectus mauris ultrices eros in cursus turpis massa."),s.a.createElement("p",null,"Morbi quis commodo odio aenean. Tempor orci eu lobortis elementum nibh tellus molestie. Ornare arcu odio ut sem. Malesuada nunc vel risus commodo viverra maecenas accumsan. Eros in cursus turpis massa tincidunt dui ut ornare. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Sit amet massa vitae tortor condimentum lacinia. Tristique et egestas quis ipsum suspendisse ultrices gravida dictum. Pretium quam vulputate dignissim suspendisse in est. Consequat mauris nunc congue nisi vitae. Luctus accumsan tortor posuere ac ut. Eget lorem dolor sed viverra ipsum. Etiam erat velit scelerisque in dictum non consectetur. Vestibulum lectus mauris ultrices eros in cursus turpis massa."),s.a.createElement("p",null,"Morbi quis commodo odio aenean. Tempor orci eu lobortis elementum nibh tellus molestie. Ornare arcu odio ut sem. Malesuada nunc vel risus commodo viverra maecenas accumsan. Eros in cursus turpis massa tincidunt dui ut ornare. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Sit amet massa vitae tortor condimentum lacinia. Tristique et egestas quis ipsum suspendisse ultrices gravida dictum. Pretium quam vulputate dignissim suspendisse in est. Consequat mauris nunc congue nisi vitae. Luctus accumsan tortor posuere ac ut. Eget lorem dolor sed viverra ipsum. Etiam erat velit scelerisque in dictum non consectetur. Vestibulum lectus mauris ultrices eros in cursus turpis massa."),s.a.createElement("p",null,"Morbi quis commodo odio aenean. Tempor orci eu lobortis elementum nibh tellus molestie. Ornare arcu odio ut sem. Malesuada nunc vel risus commodo viverra maecenas accumsan. Eros in cursus turpis massa tincidunt dui ut ornare. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Sit amet massa vitae tortor condimentum lacinia. Tristique et egestas quis ipsum suspendisse ultrices gravida dictum. Pretium quam vulputate dignissim suspendisse in est. Consequat mauris nunc congue nisi vitae. Luctus accumsan tortor posuere ac ut. Eget lorem dolor sed viverra ipsum. Etiam erat velit scelerisque in dictum non consectetur. Vestibulum lectus mauris ultrices eros in cursus turpis massa."),s.a.createElement("p",null,"Morbi quis commodo odio aenean. Tempor orci eu lobortis elementum nibh tellus molestie. Ornare arcu odio ut sem. Malesuada nunc vel risus commodo viverra maecenas accumsan. Eros in cursus turpis massa tincidunt dui ut ornare. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Sit amet massa vitae tortor condimentum lacinia. Tristique et egestas quis ipsum suspendisse ultrices gravida dictum. Pretium quam vulputate dignissim suspendisse in est. Consequat mauris nunc congue nisi vitae. Luctus accumsan tortor posuere ac ut. Eget lorem dolor sed viverra ipsum. Etiam erat velit scelerisque in dictum non consectetur. Vestibulum lectus mauris ultrices eros in cursus turpis massa."),s.a.createElement("p",null,"Morbi quis commodo odio aenean. Tempor orci eu lobortis elementum nibh tellus molestie. Ornare arcu odio ut sem. Malesuada nunc vel risus commodo viverra maecenas accumsan. Eros in cursus turpis massa tincidunt dui ut ornare. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Sit amet massa vitae tortor condimentum lacinia. Tristique et egestas quis ipsum suspendisse ultrices gravida dictum. Pretium quam vulputate dignissim suspendisse in est. Consequat mauris nunc congue nisi vitae. Luctus accumsan tortor posuere ac ut. Eget lorem dolor sed viverra ipsum. Etiam erat velit scelerisque in dictum non consectetur. Vestibulum lectus mauris ultrices eros in cursus turpis massa."),s.a.createElement("p",null,"Morbi quis commodo odio aenean. Tempor orci eu lobortis elementum nibh tellus molestie. Ornare arcu odio ut sem. Malesuada nunc vel risus commodo viverra maecenas accumsan. Eros in cursus turpis massa tincidunt dui ut ornare. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Sit amet massa vitae tortor condimentum lacinia. Tristique et egestas quis ipsum suspendisse ultrices gravida dictum. Pretium quam vulputate dignissim suspendisse in est. Consequat mauris nunc congue nisi vitae. Luctus accumsan tortor posuere ac ut. Eget lorem dolor sed viverra ipsum. Etiam erat velit scelerisque in dictum non consectetur. Vestibulum lectus mauris ultrices eros in cursus turpis massa."),s.a.createElement("p",null,"Morbi quis commodo odio aenean. Tempor orci eu lobortis elementum nibh tellus molestie. Ornare arcu odio ut sem. Malesuada nunc vel risus commodo viverra maecenas accumsan. Eros in cursus turpis massa tincidunt dui ut ornare. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Sit amet massa vitae tortor condimentum lacinia. Tristique et egestas quis ipsum suspendisse ultrices gravida dictum. Pretium quam vulputate dignissim suspendisse in est. Consequat mauris nunc congue nisi vitae. Luctus accumsan tortor posuere ac ut. Eget lorem dolor sed viverra ipsum. Etiam erat velit scelerisque in dictum non consectetur. Vestibulum lectus mauris ultrices eros in cursus turpis massa."),s.a.createElement("p",null,"Morbi quis commodo odio aenean. Tempor orci eu lobortis elementum nibh tellus molestie. Ornare arcu odio ut sem. Malesuada nunc vel risus commodo viverra maecenas accumsan. Eros in cursus turpis massa tincidunt dui ut ornare. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Sit amet massa vitae tortor condimentum lacinia. Tristique et egestas quis ipsum suspendisse ultrices gravida dictum. Pretium quam vulputate dignissim suspendisse in est. Consequat mauris nunc congue nisi vitae. Luctus accumsan tortor posuere ac ut. Eget lorem dolor sed viverra ipsum. Etiam erat velit scelerisque in dictum non consectetur. Vestibulum lectus mauris ultrices eros in cursus turpis massa."),s.a.createElement("p",null,"Morbi quis commodo odio aenean. Tempor orci eu lobortis elementum nibh tellus molestie. Ornare arcu odio ut sem. Malesuada nunc vel risus commodo viverra maecenas accumsan. Eros in cursus turpis massa tincidunt dui ut ornare. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Sit amet massa vitae tortor condimentum lacinia. Tristique et egestas quis ipsum suspendisse ultrices gravida dictum. Pretium quam vulputate dignissim suspendisse in est. Consequat mauris nunc congue nisi vitae. Luctus accumsan tortor posuere ac ut. Eget lorem dolor sed viverra ipsum. Etiam erat velit scelerisque in dictum non consectetur. Vestibulum lectus mauris ultrices eros in cursus turpis massa."))},O=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).changeLang=function(){"es"===localStorage.getItem("lang")?(localStorage.setItem("lang","en"),a.setState({lang:"en"})):(localStorage.setItem("lang","es"),a.setState({lang:"es"}))},a.updateDimensions=function(){a.setState({width:window.innerWidth,height:window.innerHeight})},a.state={lang:localStorage.getItem("lang")},a}return Object(l.a)(t,e),Object(o.a)(t,[{key:"componentWillMount",value:function(){this.updateDimensions()}},{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updateDimensions)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateDimensions)}},{key:"render",value:function(){var e=this,t=function(t){return 1===t?6.2+Math.round(parseInt(e.state.width)/200):2===t?3.6+Math.round(parseInt(e.state.width)/200):3===t?1.4+Math.round(parseInt(e.state.width)/200):4===t?7+Math.round(parseInt(e.state.width)/200):void 0};return s.a.createElement(v.b,{locale:this.state.lang,messages:g[this.state.lang]},s.a.createElement("div",null,s.a.createElement(d.a,null,s.a.createElement("div",{className:"navBar",style:{height:this.state.height/15}},s.a.createElement("div",{className:"nav-ul"},s.a.createElement("div",{style:{width:this.state.width/t(1)}},s.a.createElement(d.b,{to:"/senkar"},s.a.createElement(v.a,{id:"nav.home"}))),s.a.createElement("div",{style:{width:this.state.width/t(2)}},s.a.createElement(d.b,{to:"/portfolio"},s.a.createElement(v.a,{id:"nav.portfolio"}))),s.a.createElement("div",{style:{width:this.state.width/t(2)}},s.a.createElement(d.b,{to:"/about-me"},s.a.createElement(v.a,{id:"nav.about_me"}))),s.a.createElement("div",{style:{width:this.state.width/t(3)}},s.a.createElement(d.b,{to:"/student-life"},s.a.createElement(v.a,{id:"nav.student_life"}))),s.a.createElement("div",{style:{width:this.state.width/t(4)},className:"p-mini",id:"d-lang"},s.a.createElement("div",{onClick:this.changeLang},s.a.createElement(v.a,{id:"nav.lang"}))))),s.a.createElement("div",{className:"mainR"},s.a.createElement(p.c,null,"\xa0\xa0",s.a.createElement(p.a,{exact:!0,path:"/senkar",component:h}),s.a.createElement(p.a,{path:"/portfolio",component:b}),s.a.createElement(p.a,{path:"/about-me",component:E}),s.a.createElement(p.a,{path:"/student-life",component:C}))))))}}]),t}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var T=a(31),j=a.n(T),A=a(32),L=a.n(A);Object(v.c)(j.a),Object(v.c)(L.a),null===localStorage.getItem("lang")&&localStorage.setItem("lang","en"),u.a.render(s.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[33,1,2]]]);
//# sourceMappingURL=main.ef653043.chunk.js.map