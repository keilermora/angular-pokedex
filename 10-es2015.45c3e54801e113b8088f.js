(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"8G/N":function(n,e,t){"use strict";t.r(e),t.d(e,"PokemonDetailsModule",(function(){return L}));var o=t("tyNb"),c=t("PCNd");const a={id:0,name:"MissingNo.",sprites:{other:{"official-artwork":{front_default:"/assets/images/missingno.png"}}},height:10,weight:15983,types:[{type:{name:"bird"}},{type:{name:"normal"}}],stats:[{base_stat:33,stat:{name:"hp"}},{base_stat:136,stat:{name:"attack"}},{base_stat:0,stat:{name:"defense"}},{base_stat:6,stat:{name:"special-attack"}},{base_stat:6,stat:{name:"special-defense"}},{base_stat:29,stat:{name:"speed"}}]},g={genus:"Pok\xe9mon ???",language:"es"},s=[{language:"es",version:{name:"green"},flavor_text:"\u3051\u3064\u3070\u3093"},{language:"es",version:{name:"red"},flavor_text:"???"},{language:"es",version:{name:"blue"},flavor_text:"???"},{language:"es",version:{name:"yellow"},flavor_text:""}];var i=t("fXoL"),r=t("Z5pU"),l=t("ofXK"),m=t("yhyU"),p=t("mgId");let M=(()=>{class n{transform(n){return n/10+"m"}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275pipe=i.Gb({name:"pokemonHeight",type:n,pure:!0}),n})(),_=(()=>{class n{transform(n){return n/10+"kg"}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275pipe=i.Gb({name:"pokemonWeight",type:n,pure:!0}),n})(),C=(()=>{class n{transform(n){switch(n){case"bird":return"p\xe1jaro";case"bug":return"bicho";case"dark":return"siniestro";case"dragon":return n;case"electric":return"electrico";case"fairy":return"hada";case"fighting":return"luchador";case"fire":return"fuego";case"flying":return"volador";case"ghost":return"fantasma";case"grass":return"hierba";case"ground":return"tierra";case"ice":return"hielo";case"normal":return n;case"poison":return"veneno";case"psychic":return"ps\xedquico";case"rock":return"roca";case"steel":return"acero";case"water":return"agua";default:return"desconocido"}}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275pipe=i.Gb({name:"pokemonType",type:n,pure:!0}),n})(),P=(()=>{class n{transform(n){switch(n){case"hp":return"ps";case"attack":return"ataque";case"defense":return"defensa";case"special-attack":return"at. esp.";case"special-defense":return"def. esp.";case"speed":return"velocidad";default:return"desconocido"}}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275pipe=i.Gb({name:"pokemonStat",type:n,pure:!0}),n})(),O=(()=>{class n{transform(n){return n.replace(/-/g," ").replace(/lets/g,"let's")}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275pipe=i.Gb({name:"pokedexVersionName",type:n,pure:!0}),n})();function d(n,e){if(1&n&&i.Ib(0,"img",19),2&n){const n=i.Vb(2);i.bc("src",n.pokemon.sprites.other["official-artwork"].front_default,i.hc)("alt",n.pokemon.name)}}function k(n,e){if(1&n&&(i.Mb(0,"a",9),i.kc(1,"<"),i.Lb()),2&n){const n=i.Vb(2);i.bc("routerLink","/pokemon/"+(n.pokemon.id-1))}}function b(n,e){if(1&n&&(i.Kb(0),i.Mb(1,"span",20),i.kc(2),i.Wb(3,"pokemonType"),i.Lb(),i.Jb()),2&n){const n=e.$implicit;i.xb(1),i.bc("ngClass",n.type.name),i.xb(1),i.lc(i.Xb(3,2,n.type.name))}}function u(n,e){if(1&n&&(i.Mb(0,"tr"),i.Mb(1,"td",13),i.kc(2),i.Wb(3,"pokemonStat"),i.Lb(),i.Mb(4,"td",14),i.kc(5),i.Lb(),i.Lb()),2&n){const n=e.$implicit;i.xb(2),i.lc(i.Xb(3,2,n.stat.name)),i.xb(3),i.lc(n.base_stat)}}function f(n,e){1&n&&(i.Mb(0,"h2"),i.kc(1,"Cargando... No apague la consola."),i.Lb())}function h(n,e){if(1&n&&(i.Mb(0,"h2"),i.kc(1),i.Lb()),2&n){const n=i.Vb(2);i.xb(1),i.lc(n.pokemonGenera.genus)}}function y(n,e){if(1&n&&(i.Kb(0),i.Mb(1,"p",21),i.Mb(2,"span",22),i.kc(3),i.Wb(4,"pokedexVersionName"),i.Lb(),i.kc(5),i.Lb(),i.Jb()),2&n){const n=e.$implicit;i.xb(1),i.bc("ngClass",n.version.name),i.xb(2),i.lc(i.Xb(4,3,n.version.name)),i.xb(2),i.mc(": ",n.flavor_text," ")}}const x=function(n){return{busy:n}};function w(n,e){if(1&n&&(i.Mb(0,"div",2),i.Mb(1,"div",3),i.Mb(2,"div",4),i.jc(3,d,1,2,"img",5),i.Lb(),i.Mb(4,"div",6),i.jc(5,k,2,1,"a",7),i.Mb(6,"div",8),i.kc(7),i.Wb(8,"pokemonNumber"),i.Lb(),i.Mb(9,"a",9),i.kc(10,">"),i.Lb(),i.Lb(),i.Lb(),i.Mb(11,"div",10),i.Mb(12,"ul"),i.Mb(13,"li"),i.Mb(14,"span",11),i.kc(15),i.Wb(16,"pokemonName"),i.Lb(),i.Lb(),i.Mb(17,"li"),i.jc(18,b,4,4,"ng-container",12),i.Lb(),i.Lb(),i.Mb(19,"table"),i.Mb(20,"tr"),i.Mb(21,"td",13),i.kc(22,"Altura"),i.Lb(),i.Mb(23,"td",14),i.kc(24),i.Wb(25,"pokemonHeight"),i.Lb(),i.Lb(),i.Mb(26,"tr"),i.Mb(27,"td",13),i.kc(28,"Peso"),i.Lb(),i.Mb(29,"td",14),i.kc(30),i.Wb(31,"pokemonWeight"),i.Lb(),i.Lb(),i.jc(32,u,6,4,"tr",12),i.Lb(),i.Lb(),i.Mb(33,"div",15),i.jc(34,f,2,0,"h2",16),i.jc(35,h,2,1,"h2",16),i.Mb(36,"div",17),i.jc(37,y,6,5,"ng-container",12),i.Mb(38,"a",18),i.kc(39," Inicio "),i.Lb(),i.Lb(),i.Lb(),i.Lb()),2&n){const n=i.Vb();i.xb(3),i.bc("ngIf",!n.busy),i.xb(2),i.bc("ngIf",n.pokemon.id-1>=1),i.xb(2),i.lc(i.Xb(8,13,n.pokemon.id)),i.xb(2),i.bc("routerLink","/pokemon/"+(n.pokemon.id+1)),i.xb(6),i.lc(i.Xb(16,15,n.pokemon.name)),i.xb(3),i.bc("ngForOf",n.pokemon.types),i.xb(6),i.lc(i.Xb(25,17,n.pokemon.height)),i.xb(6),i.lc(i.Xb(31,19,n.pokemon.weight)),i.xb(2),i.bc("ngForOf",n.pokemon.stats),i.xb(2),i.bc("ngIf",n.busyDetails),i.xb(1),i.bc("ngIf",!n.busyDetails&&n.pokemonGenera),i.xb(1),i.bc("ngClass",i.dc(21,x,n.busyDetails)),i.xb(1),i.bc("ngForOf",n.pokemonFlavorTextEntries)}}const v=[{path:"",component:(()=>{class n{constructor(n,e){this.pokemonService=n,this.route=e,this.pokemon=null,this.pokemonGenera=null,this.pokemonFlavorTextEntries=[],this.busy=!1,this.busyDetails=!1,this.error=!1}ngOnInit(){let n;this.route.paramMap.subscribe(e=>{this.busy=!0,this.busyDetails=!0;let t=e.get("id");n=t?parseInt(t):0,this.pokemonService.getPokemon(n).subscribe(n=>{this.pokemon=n,this.busy=!1},n=>{console.log(n),this.pokemon=a,this.busy=!1}),this.pokemonService.getPokemonSpecie(n).subscribe(n=>{const e=n.genera.find(n=>"es"===n.language.name),t=n.flavor_text_entries.filter(n=>"es"===n.language.name).reduce((n,e)=>n.find(n=>n.version.name===e.version.name)?n:n.concat([e]),[]);this.pokemonGenera=e,this.pokemonFlavorTextEntries=t,this.busyDetails=!1},n=>{console.log(n),this.pokemonGenera=g,this.pokemonFlavorTextEntries=s,this.busyDetails=!1})})}}return n.\u0275fac=function(e){return new(e||n)(i.Hb(r.a),i.Hb(o.a))},n.\u0275cmp=i.Bb({type:n,selectors:[["app-pokemon-details"]],decls:2,vars:1,consts:[[1,"pokemon-details"],["class","pokemon",4,"ngIf"],[1,"pokemon"],[1,"image","container-theme","container-theme--large"],[1,"image-container"],["width","250","height","250",3,"src","alt",4,"ngIf"],[1,"buttons-container"],[3,"routerLink",4,"ngIf"],[1,"number","container-theme","container-theme--small"],[3,"routerLink"],[1,"details","container-theme","container-theme--large"],[1,"name"],[4,"ngFor","ngForOf"],[1,"stat-name"],[1,"stat-value"],[1,"more-details","container-theme","container-theme--large"],[4,"ngIf"],[1,"content",3,"ngClass"],["routerLink","/",1,"button-theme","button-theme--black"],["width","250","height","250",3,"src","alt"],[1,"type",3,"ngClass"],[3,"ngClass"],[1,"pokedex-version-name"]],template:function(n,e){1&n&&(i.Mb(0,"section",0),i.jc(1,w,40,23,"div",1),i.Lb()),2&n&&(i.xb(1),i.bc("ngIf",e.pokemon))},directives:[l.j,o.d,l.i,l.h],pipes:[m.a,p.a,M,_,C,P,O],styles:[".pokemon-details[_ngcontent-%COMP%]{display:flex;justify-content:center;padding:25px 0;transition:.75s;max-width:700px;margin:0 auto}@media only screen and (max-width:767.98px){.pokemon-details[_ngcontent-%COMP%]{padding:25px 15px}}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]{display:grid;grid-template-rows:repeat(2,auto);grid-template-columns:1fr 1fr;-moz-column-gap:15px;column-gap:15px;row-gap:15px}@media only screen and (min-width:768px) and (max-width:991.98px){.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}}@media only screen and (max-width:767.98px){.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]{padding:0;grid-template-rows:repeat(3,auto);grid-template-columns:1fr}}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{grid-row-start:1;display:flex;flex-direction:column;align-items:center;justify-content:flex-end}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]{height:250px;width:250px}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   .buttons-container[_ngcontent-%COMP%]{padding:10px 15px 0;width:calc(100% - 44px);line-height:1.1rem;display:grid;grid-template-columns:repeat(3,1fr);grid-template-rows:auto;align-items:center;justify-content:center}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   .buttons-container[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]{grid-column-start:2;justify-self:center}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   .buttons-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;color:#000}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   .buttons-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:last-of-type{grid-column-start:3;justify-self:flex-end}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]{grid-row-start:1;grid-row-end:2}@media only screen and (max-width:767.98px){.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]{grid-row-start:auto;grid-row-end:auto}}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding-left:0;margin:0}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%], .pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .type[_ngcontent-%COMP%]{text-transform:uppercase}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .type[_ngcontent-%COMP%] + .type[_ngcontent-%COMP%]{padding-left:16px}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .type.bug[_ngcontent-%COMP%]{color:#6d7815}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .type.dark[_ngcontent-%COMP%]{color:#49392f}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .type.dragon[_ngcontent-%COMP%]{color:#4924a1}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .type.electric[_ngcontent-%COMP%]{color:#a1871f}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .type.fairy[_ngcontent-%COMP%]{color:#9b6470}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .type.fighting[_ngcontent-%COMP%]{color:#7d1f1a}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .type.fire[_ngcontent-%COMP%]{color:#9c531f}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .type.flying[_ngcontent-%COMP%]{color:#6d5e9c}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .type.ghost[_ngcontent-%COMP%]{color:#493963}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .type.grass[_ngcontent-%COMP%]{color:#4e8234}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .type.ground[_ngcontent-%COMP%]{color:#927d44}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .type.ice[_ngcontent-%COMP%]{color:#638d8d}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .type.normal[_ngcontent-%COMP%]{color:#6d6d4e}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .type.poison[_ngcontent-%COMP%]{color:#682a68}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .type.psychic[_ngcontent-%COMP%]{color:#a13959}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .type.rock[_ngcontent-%COMP%]{color:#786824}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .type.steel[_ngcontent-%COMP%]{color:#787887}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .type.water[_ngcontent-%COMP%]{color:#445e9c}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .type.bird[_ngcontent-%COMP%], .pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .type.unknown[_ngcontent-%COMP%]{color:#44685e}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{margin-top:8px;width:100%}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .stat-name[_ngcontent-%COMP%]{text-transform:uppercase}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%]{text-align:center}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]{padding:16px 24px;grid-column-start:1;grid-column-end:3}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-top:0}@media only screen and (max-width:767.98px){.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]{grid-column-end:2}}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .busy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:transparent!important}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .red[_ngcontent-%COMP%]{color:#a60b0b}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .green[_ngcontent-%COMP%]{color:#0b7a0b}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .blue[_ngcontent-%COMP%]{color:#0b0ba6}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .yellow[_ngcontent-%COMP%]{color:#a68c21}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .gold[_ngcontent-%COMP%]{color:#8e6b15}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .silver[_ngcontent-%COMP%]{color:#7d7d7d}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .crystal[_ngcontent-%COMP%]{color:#338da6}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .ruby[_ngcontent-%COMP%]{color:#680000}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .sapphire[_ngcontent-%COMP%]{color:#000068}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .emerald[_ngcontent-%COMP%]{color:#006800}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .fire-red[_ngcontent-%COMP%]{color:#a64b19}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .leaf-green[_ngcontent-%COMP%]{color:#009000}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .diamond[_ngcontent-%COMP%]{color:#6f6fa6}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .pearl[_ngcontent-%COMP%]{color:#a66f6f}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .platinum[_ngcontent-%COMP%]{color:#646464}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .heart-gold[_ngcontent-%COMP%]{color:#766700}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .soul-silver[_ngcontent-%COMP%]{color:#7d7d92}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .black[_ngcontent-%COMP%]{color:#2c2c2c}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .white[_ngcontent-%COMP%]{color:#929292}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .black-2[_ngcontent-%COMP%]{color:#2b3134}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .white-2[_ngcontent-%COMP%]{color:#948687}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .x[_ngcontent-%COMP%]{color:#013d6c}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .y[_ngcontent-%COMP%]{color:#981128}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .omega-ruby[_ngcontent-%COMP%]{color:#6f1a0c}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .alpha-sapphire[_ngcontent-%COMP%]{color:#194166}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .sun[_ngcontent-%COMP%]{color:#9d5e1c}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .moon[_ngcontent-%COMP%]{color:#376483}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .ultra-sun[_ngcontent-%COMP%]{color:#983b1c}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .ultra-moon[_ngcontent-%COMP%]{color:#164776}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .lets-go-pikachu[_ngcontent-%COMP%]{color:#9f8e19}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .lets-go-eevee[_ngcontent-%COMP%]{color:#8a5f31}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .sword[_ngcontent-%COMP%]{color:#006998}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .shield[_ngcontent-%COMP%]{color:#7c0033}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .pokedex-version-name[_ngcontent-%COMP%]{text-transform:uppercase}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.75rem}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-of-type{padding-bottom:3em}"]}),n})()}];let L=(()=>{class n{}return n.\u0275mod=i.Fb({type:n}),n.\u0275inj=i.Eb({factory:function(e){return new(e||n)},imports:[[o.e.forChild(v),c.a]]}),n})()}}]);