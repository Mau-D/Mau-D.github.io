(function(e){function t(t){for(var r,a,s=t[0],l=t[1],u=t[2],p=0,d=[];p<s.length;p++)a=s[p],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&d.push(i[a][0]),i[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);c&&c(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,s=1;s<n.length;s++){var l=n[s];0!==i[l]&&(r=!1)}r&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},i={app:0},o=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var c=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"002e":function(e,t,n){},"03b5":function(e,t,n){},"03e8":function(e,t,n){e.exports=n.p+"img/prog2_tp1.6f9380fb.jpg"},"351a":function(e,t,n){},4308:function(e,t,n){"use strict";n("002e")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("header",[n("en-tete")],1),n("main",[n("router-view")],1),n("footer",[n("pied-de-page")],1)])},o=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"nav"}},e._l(e.menu,(function(t){return n("router-link",{key:t.titre,attrs:{to:t.path}},[e._v(e._s(t.titre))])})),1)},s=[],l={name:"en-tete",data:function(){return{menu:[{titre:"Accueil",path:"/"},{titre:"Contact",path:"/contact"},{titre:"Projets",path:"/projets"},{titre:"Connexion",path:"/connexion"}]}}},u=l,c=(n("675d"),n("2877")),p=Object(c["a"])(u,a,s,!1,null,"752aa7b3",null),d=p.exports,m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",{directives:[{name:"footerdirective",rawName:"v-footerdirective",value:new Intl.DateTimeFormat("fr-Ca",{dateStyle:"full"}).format(),expression:"new Intl.DateTimeFormat('fr-Ca', { dateStyle: 'full'}).format()"}]})])},f=[];r["a"].directive("footerdirective",{bind:function(e,t){console.log("hello"),e.innerHTML="Copyright Maud Harvey,  "+t.value}});var g={name:"pied-de-page",directives:void 0},v=g,h=(n("c7aa"),Object(c["a"])(v,m,f,!1,null,"0720d7e0",null)),_=h.exports,b={name:"App",data:function(){return{loggedIn:!1,displayedComponent:""}},components:{EnTete:d,PiedDePage:_},created:function(){this.loggedIn?this.$router.push("/connexion"):this.$router.push("/")}},C=b,y=Object(c["a"])(C,i,o,!1,null,null,null),x=y.exports,j=n("8c4f"),q=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},E=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"pageAccueil"}},[n("div",{attrs:{id:"banniere"}},[n("div",{staticClass:"centre"},[n("h1",[e._v("Regroupement de Dévelloppeur Front-End")]),n("p",[e._v("L’objectif général de l’AEC Développement Web vise à former des développeurs « Front-end » aptes à programmer des applications Web « responsive », destinées aux utilisateurs de nouvelles technologies telles que les montres intelligentes, les tablettes, les téléphones intelligents, le commerce électronique, les objets connectés, les interfaces riches, l’intelligence artificielle, etc. Ces technologies génèrent de nouveaux procédés et nécessitent une main-d’œuvre spécialisée et polyvalente. ")]),n("p",[e._v(" À la fin de son programme d’études, l’étudiant sera en mesure de procéder à l’intégration des interfaces, programmer des interactions, coder pour le Web et communiquer avec les services Web. Les principaux langages et « frameworks » enseignés dans le cadre de ce programme sont : HTML5, CSS3, BOOTSTRAP, JAVASCRIPT, JQUERY, ANGULAR, REACT et VUE.JS. ")])])])])}],w={name:"page-accueil"},P=w,S=(n("4308"),Object(c["a"])(P,q,E,!1,null,"587aec2e",null)),T=S.exports,A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v(e._s(e.informations.contact.nom))]),n("div",{attrs:{id:"logged"}},[n("div",{staticClass:"flex"},[n("h1",[e._v("Votre profil")]),n("h2",[e._v(e._s(e.informations.profil.titre))]),n("h3",[e._v(e._s(e.informations.profil.region))]),n("h2",[e._v(e._s(e.informations.profil.emploi))])]),n("div",{staticClass:"flex"},[n("h1",[e._v("Langages de programmation")]),n("ul",e._l(e.informations.langages,(function(t){return n("li",{key:t},[e._v(e._s(t))])})),0)]),n("div",{staticClass:"flex"},[n("h1",[e._v("Formations")]),e._l(e.informations.formations,(function(t){return n("div",{key:t.diplome},[n("h2",[e._v(e._s(t.diplome))]),n("h4",[e._v(e._s(t.etablissement))])])}))],2),n("div",{staticClass:"flex"},[n("h1",[e._v("Contact")]),n("h3",[e._v(e._s(e.informations.contact.nom))]),n("h2",[e._v(e._s(e.informations.contact.courriel))])]),n("div",{staticClass:"flex"},[n("h1",[e._v("Expériences professionnelles")]),n("table",[e._m(0),n("tbody",e._l(e.informations.experiences,(function(t){return n("tr",{key:t.annee},[n("td",[e._v(e._s(t.annee))]),n("td",[e._v(e._s(t.description))]),n("td",[e._v(e._s(t.employeur))])])})),0)])])])])},O=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("thead",[n("tr",[n("th",[e._v("Années")]),n("th",[e._v("Description")]),n("th",[e._v("Employeur")])])])}],k={name:"user-logged",data:function(){return{informations:{id:"user1",profil:{titre:"Développeur Front-End Junior",region:"Région du Saguenay-Lac-St-Jean",emploi:"Travailleur autonome, pigiste"},langages:["HTML5","CSS3","Javascript"],formations:[{diplome:"Attestation d'études collégiales en développement Front-End",etablissement:"Cégep de Trois-Rivières"},{diplome:"Diplôme collégial en technologie physique",etablissement:"Cégep André-Laurendeau"}],contact:{nom:"Maud Harvey",courriel:"harveymaud@gmail.com"},experiences:[{annee:"2006-2019",description:"Technicienne en travaux pratiques",employeur:"Commission scolaire de l'Énergie"},{annee:"2004-2006",description:"Technicienne en travaux pratiques",employeur:"Cégep André-Laurendeau"}]}}}},L=k,F=(n("6c32"),Object(c["a"])(L,A,O,!1,null,"120b5af1",null)),R=F.exports,D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"projets"}},[n("ul",e._l(e.projets,(function(t){return n("li",{key:t.id},[n("div",[n("h1",[e._v(e._s(t.nom))]),n("h3",[e._v(e._s(t.cours))])]),n("div",{staticClass:"enligne"},[n("img",{attrs:{src:t.image,title:t.nom,alt:t.nom}})]),n("div",{staticClass:"enligne"},[n("p",[e._v(e._s(t.description))])])])})),0)])},U=[],$={name:"projets-liste",data:function(){return{projets:[{id:1,nom:"Intégration d'un premier site en bootstrap responsive",cours:"Techniques d'intégration des interfaces WEB 1",description:"Ce projet, en sujet libre, de trois pages contient 4 sections responsives en utilisant bootstrap, les medias queries et les polices inclusives (REM). Ce projet comprend plusieurs éléments, tel que des bannières, un formulaire, une section jumbotron, une card, un modal avec carousel et des sections en parallax.",image:n("8ba0")},{id:2,nom:"Photociti en JQuery",cours:"Techniques de programmation WEB 1",description:"Ce projet reproduit le site ''http://www.photociti.ca/'' en utilisant JQuery, il comprend trois parties: le choix du mot, le choix des lettres et le choix du fond. Pour le choix du mot, les erreurs de longueur, les accents et les caractères spéciaux sont gérés. Pour le choix des lettres, un carousel Bootstrap permet de changer l'image. Pour le choix du fond, l'usager sélectionne la couleur et l'étape 4 offre l'impression du cadre seulement.",image:n("601e")},{id:3,nom:"Spotify québécois en REACT",cours:"Techniques de programmation WEB 2",description:"Ce projet affiche un catalogue d'album, avec une page de connexion. Une barre de recherche sélectionne les albums par leur nom ou celui de l'artiste. Un clic sur l'album amène à la liste des chansons et celui sur une chanson à ses paroles.",image:n("03e8")},{id:4,nom:"Gestionnaire de nouvelles",cours:"Infrastructure WEB",description:"Ce projet par la gestion de nouvelles démontre la capacité à manipuler une base de données avec le langage PHP. Les categories sont affichés dans le menu, les nouvelles récentes sont affichées sur la page d'accueil. L'affichage par catégorie des nouvelles est accessible par le menu et l'affichage d'une nouvelle détaillée par un lien. Les opérations CRUD sont diponibles par la connexion qui donne accès au menu d'administration. Des ajouts pour la sécurité sont ajoutés et le déploiement est effectué.",image:n("aa35")},{id:5,nom:"La trotteuse en REACT",cours:"Techniques de programmation WEB 2",description:"Ce projet, en sujet libre, est un site qui comporte les exigences d'une PWA. L'intégration est fait en SASS et comporte des animations de librairies JavaScript. Une API web est utilisé avec le service ''https://crudcrud.com/'', car des formulaires d'ajout et d'édition sont accessibles par un bouton ou de lien sur les titres. Ce projet est programmé avec des composants utilisant soit des classes ou des hooks.",image:n("6307")}]}}},J=$,W=(n("b379"),Object(c["a"])(J,D,U,!1,null,"5d4f0fab",null)),I=W.exports,M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container-fluid",attrs:{id:"pageContact"}},[n("fieldset",[n("legend",[n("h1",[e._v(e._s(e._f("languageFilter")("title",e.languageChoosen)))])]),n("div",{staticClass:"dropdown"},[n("button",{staticClass:"dropbtn"},[e._v(e._s(e.languageChoosen))]),n("div",{staticClass:"dropdown-content"},e._l(e.languages,(function(t){return n("a",{key:t,on:{click:function(n){return e.toggleLanguage(t)}}},[e._v(e._s(t))])})),0)]),e.erreurs.length?n("div",[n("b",[e._v("Corriger les erreurs suivantes:")]),n("ul",e._l(e.erreurs,(function(t){return n("li",{key:t},[e._v(" "+e._s(t)+" ")])})),0)]):e._e(),n("form",{attrs:{id:"formContact",novalidate:"true"},on:{submit:e.checkForm}},[n("div",{staticClass:"form-group enligne"},[n("label",{attrs:{for:"nom"}},[e._v(e._s(e._f("languageFilter")("name",e.languageChoosen)))]),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.nom,expression:"nom"}],attrs:{required:"",type:"text",id:"nom","aria-describedby":"nom"},domProps:{value:e.nom},on:{input:function(t){t.target.composing||(e.nom=t.target.value)}}})]),n("div",{staticClass:"form-group enligne"},[n("label",{attrs:{for:"prenom"}},[e._v(e._s(e._f("languageFilter")("firstname",e.languageChoosen)))]),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.prenom,expression:"prenom"}],attrs:{required:"",type:"text",id:"prenom","aria-describedby":"prenom"},domProps:{value:e.prenom},on:{input:function(t){t.target.composing||(e.prenom=t.target.value)}}})]),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"courriel"}},[e._v(e._s(e._f("languageFilter")("email",e.languageChoosen)))]),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.courriel,expression:"courriel"}],attrs:{required:"",type:"email",id:"courriel",name:"courriel","aria-describedby":"email"},domProps:{value:e.courriel},on:{input:function(t){t.target.composing||(e.courriel=t.target.value)}}}),n("br"),n("small",{attrs:{id:"emailHelp"}},[e._v("Le courriel doit être valide")])]),n("div",{staticClass:"form-group"},[n("label",{staticClass:"my-1 mr-2",attrs:{for:"subjects"}},[e._v(e._s(e._f("languageFilter")("category",e.languageChoosen)))]),n("br"),n("select",{directives:[{name:"model",rawName:"v-model",value:e.sujetChoisi,expression:"sujetChoisi"}],attrs:{required:"",id:"subjects"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.sujetChoisi=t.target.multiple?n:n[0]}}},e._l(e.sujets,(function(t){return n("option",{key:t},[e._v(e._s(t))])})),0)]),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"question"}},[e._v(e._s(e._f("languageFilter")("question",e.languageChoosen)))]),n("br"),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.question,expression:"question"}],attrs:{id:"question",rows:"3"},domProps:{value:e.question},on:{input:function(t){t.target.composing||(e.question=t.target.value)}}}),n("br"),n("small",[e._v("facultatif")])]),n("button",{attrs:{type:"submit"}},[e._v("Soumettre")])])])])},N=[],B=(n("b0c0"),{en:{title:"Information request",name:"Last name",firstname:"First name",email:"E-mail",category:"Category",question:"Write your question"},fr:{title:"Demande d'informations",name:"Nom",firstname:"Prénom",email:"Courriel",category:"Catégorie",question:"Écrire votre question"}}),H={data:function(){return{languages:["en","fr"],languageChoosen:"fr"}},methods:{toggleLanguage:function(e){this.languageChoosen=e,console.log("method "+this.languageChoosen)}},filters:{languageFilter:function(e,t){if("fr"===t){if("title"===e)return B.fr.title;if("name"===e)return B.fr.name;if("firstname"===e)return B.fr.firstname;if("email"===e)return B.fr.email;if("category"===e)return B.fr.category;if("question"===e)return B.fr.question}else if("en"===t){if("title"===e)return B.en.title;if("name"===e)return B.en.name;if("firstname"===e)return B.en.firstname;if("email"===e)return B.en.email;if("category"===e)return B.en.category;if("question"===e)return B.en.question}}}},Q={mixins:[H],name:"contact-formulaire",data:function(){return{erreurs:[],sujets:["Offre d'emploi","Recherche d'emploi","Soumission de contrat","Questions de programmation","Autres"],courriel:null,nom:null,prenom:null,sujetChoisi:null,question:null}},methods:{checkForm:function(e){if(this.erreurs=[],this.nom||this.erreurs.push("Un nom est requis"),this.prenom||this.erreurs.push("Un prénom est requis"),this.courriel?this.checkEmail(this.courriel)||this.erreurs.push("Un courriel valide est requis"):this.erreurs.push("Un courriel est requis"),this.sujetChoisi||this.erreurs.push("Une catégorie est requise"),!this.erreurs.length)return!0;e.preventDefault()},checkEmail:function(e){var t=/[a-z]@[a-z].[a-z]/;return t.test(e)}}},z=Q,V=(n("a089"),Object(c["a"])(z,M,N,!1,null,"5ac6fc64",null)),G=V.exports;r["a"].use(j["a"]);var Y=[{path:"/",name:"Accueil",component:T},{path:"/connexion",name:"Connexion",component:R},{path:"/projets",name:"Projets",component:I},{path:"/contact",name:"Contact",component:G}],K=new j["a"]({mode:"history",base:"/",routes:Y}),X=K;r["a"].config.productionTip=!1,new r["a"]({router:X,render:function(e){return e(x)}}).$mount("#app")},"601e":function(e,t,n){e.exports=n.p+"img/prog1_final.13e769c3.jpg"},6307:function(e,t,n){e.exports=n.p+"img/prog2_final.5fae506a.jpg"},"675d":function(e,t,n){"use strict";n("03b5")},"6c32":function(e,t,n){"use strict";n("e968")},"8b30":function(e,t,n){},"8ba0":function(e,t,n){e.exports=n.p+"img/Integration1_final.d5dadeee.jpg"},"9c22":function(e,t,n){},a089:function(e,t,n){"use strict";n("8b30")},aa35:function(e,t,n){e.exports=n.p+"img/infrastructure_final.21acf206.jpg"},b379:function(e,t,n){"use strict";n("9c22")},c7aa:function(e,t,n){"use strict";n("351a")},e968:function(e,t,n){}});
//# sourceMappingURL=app.643d71ae.js.map