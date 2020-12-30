!function(){function n(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function e(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function t(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"8G/N":function(e,o,c){"use strict";c.r(o),c.d(o,"PokemonDetailsModule",function(){return T});var a,i,r,g,s,l=c("tyNb"),m=c("PCNd"),p={id:0,name:"MissingNo.",sprites:{other:{"official-artwork":{front_default:"./assets/images/missingno.png"}}},height:10,weight:15983,types:[{type:{name:"bird"}},{type:{name:"normal"}}],stats:[{base_stat:33,stat:{name:"hp"}},{base_stat:136,stat:{name:"attack"}},{base_stat:0,stat:{name:"defense"}},{base_stat:6,stat:{name:"special-attack"}},{base_stat:6,stat:{name:"special-defense"}},{base_stat:29,stat:{name:"speed"}}]},_={genus:"Pok\xe9mon ???",language:"es"},C=[{language:"es",version:{name:"green"},flavor_text:"\u3051\u3064\u3070\u3093"},{language:"es",version:{name:"red"},flavor_text:"???"},{language:"es",version:{name:"blue"},flavor_text:"???"},{language:"es",version:{name:"yellow"},flavor_text:""}],P=c("fXoL"),O=c("Z5pU"),M=c("ofXK"),d=c("yhyU"),k=c("mgId"),u=((s=function(){function e(){n(this,e)}return t(e,[{key:"transform",value:function(n){return n/10+"m"}}]),e}()).\u0275fac=function(n){return new(n||s)},s.\u0275pipe=P.Fb({name:"pokemonHeight",type:s,pure:!0}),s),b=((g=function(){function e(){n(this,e)}return t(e,[{key:"transform",value:function(n){return n/10+"kg"}}]),e}()).\u0275fac=function(n){return new(n||g)},g.\u0275pipe=P.Fb({name:"pokemonWeight",type:g,pure:!0}),g),f=((r=function(){function e(){n(this,e)}return t(e,[{key:"transform",value:function(n){switch(n){case"bird":return"p\xe1jaro";case"bug":return"bicho";case"dark":return"siniestro";case"dragon":return n;case"electric":return"electrico";case"fairy":return"hada";case"fighting":return"luchador";case"fire":return"fuego";case"flying":return"volador";case"ghost":return"fantasma";case"grass":return"hierba";case"ground":return"tierra";case"ice":return"hielo";case"normal":return n;case"poison":return"veneno";case"psychic":return"ps\xedquico";case"rock":return"roca";case"steel":return"acero";case"water":return"agua";default:return"desconocido"}}}]),e}()).\u0275fac=function(n){return new(n||r)},r.\u0275pipe=P.Fb({name:"pokemonType",type:r,pure:!0}),r),y=((i=function(){function e(){n(this,e)}return t(e,[{key:"transform",value:function(n){switch(n){case"hp":return"ps";case"attack":return"ataque";case"defense":return"defensa";case"special-attack":return"at. esp.";case"special-defense":return"def. esp.";case"speed":return"velocidad";default:return"desconocido"}}}]),e}()).\u0275fac=function(n){return new(n||i)},i.\u0275pipe=P.Fb({name:"pokemonStat",type:i,pure:!0}),i),h=((a=function(){function e(){n(this,e)}return t(e,[{key:"transform",value:function(n){return n.replace(/-/g," ").replace(/lets/g,"let's")}}]),e}()).\u0275fac=function(n){return new(n||a)},a.\u0275pipe=P.Fb({name:"pokedexVersionName",type:a,pure:!0}),a);function v(n,e){if(1&n&&P.Hb(0,"img",19),2&n){var t=P.Ub(2);P.ac("src",t.pokemon.sprites.other["official-artwork"].front_default,P.gc)("alt",t.pokemon.name)}}function w(n,e){if(1&n&&(P.Lb(0,"a",9),P.jc(1,"<"),P.Kb()),2&n){var t=P.Ub(2);P.ac("routerLink","/pokemon/"+(t.pokemon.id-1))}}function x(n,e){if(1&n&&(P.Jb(0),P.Lb(1,"span",20),P.jc(2),P.Vb(3,"pokemonType"),P.Kb(),P.Ib()),2&n){var t=e.$implicit;P.wb(1),P.ac("ngClass",t.type.name),P.wb(1),P.kc(P.Wb(3,2,t.type.name))}}function L(n,e){if(1&n&&(P.Lb(0,"tr"),P.Lb(1,"td",13),P.jc(2),P.Vb(3,"pokemonStat"),P.Kb(),P.Lb(4,"td",14),P.jc(5),P.Kb(),P.Kb()),2&n){var t=e.$implicit;P.wb(2),P.kc(P.Wb(3,2,t.stat.name)),P.wb(3),P.kc(t.base_stat)}}function K(n,e){1&n&&(P.Lb(0,"h2"),P.jc(1,"Cargando... No apague la consola."),P.Kb())}function j(n,e){if(1&n&&(P.Lb(0,"h2"),P.jc(1),P.Kb()),2&n){var t=P.Ub(2);P.wb(1),P.kc(t.pokemonGenera.genus)}}function I(n,e){if(1&n&&(P.Lb(0,"p"),P.jc(1),P.Kb()),2&n){var t=P.Ub().$implicit;P.wb(1),P.lc(" ",t.flavor_text," ")}}function F(n,e){if(1&n&&(P.Jb(0),P.Lb(1,"h3",21),P.jc(2),P.Vb(3,"pokedexVersionName"),P.Kb(),P.ic(4,I,2,1,"p",16),P.Ib()),2&n){var t=e.$implicit;P.wb(1),P.ac("ngClass",t.version.name),P.wb(1),P.kc(P.Wb(3,3,t.version.name)),P.wb(2),P.ac("ngIf",t.flavor_text)}}var D=function(n){return{busy:n}};function N(n,e){if(1&n&&(P.Lb(0,"div",2),P.Lb(1,"div",3),P.Lb(2,"div",4),P.ic(3,v,1,2,"img",5),P.Kb(),P.Lb(4,"div",6),P.ic(5,w,2,1,"a",7),P.Lb(6,"div",8),P.jc(7),P.Vb(8,"pokemonNumber"),P.Kb(),P.Lb(9,"a",9),P.jc(10,">"),P.Kb(),P.Kb(),P.Kb(),P.Lb(11,"div",10),P.Lb(12,"ul"),P.Lb(13,"li"),P.Lb(14,"span",11),P.jc(15),P.Vb(16,"pokemonName"),P.Kb(),P.Kb(),P.Lb(17,"li"),P.ic(18,x,4,4,"ng-container",12),P.Kb(),P.Kb(),P.Lb(19,"table"),P.Lb(20,"tr"),P.Lb(21,"td",13),P.jc(22,"Altura"),P.Kb(),P.Lb(23,"td",14),P.jc(24),P.Vb(25,"pokemonHeight"),P.Kb(),P.Kb(),P.Lb(26,"tr"),P.Lb(27,"td",13),P.jc(28,"Peso"),P.Kb(),P.Lb(29,"td",14),P.jc(30),P.Vb(31,"pokemonWeight"),P.Kb(),P.Kb(),P.ic(32,L,6,4,"tr",12),P.Kb(),P.Kb(),P.Lb(33,"div",15),P.ic(34,K,2,0,"h2",16),P.ic(35,j,2,1,"h2",16),P.Lb(36,"div",17),P.ic(37,F,5,5,"ng-container",12),P.Lb(38,"a",18),P.jc(39," Inicio "),P.Kb(),P.Kb(),P.Kb(),P.Kb()),2&n){var t=P.Ub();P.wb(3),P.ac("ngIf",!t.busy),P.wb(2),P.ac("ngIf",t.pokemon.id-1>=1),P.wb(2),P.kc(P.Wb(8,13,t.pokemon.id)),P.wb(2),P.ac("routerLink","/pokemon/"+(t.pokemon.id+1)),P.wb(6),P.kc(P.Wb(16,15,t.pokemon.name)),P.wb(3),P.ac("ngForOf",t.pokemon.types),P.wb(6),P.kc(P.Wb(25,17,t.pokemon.height)),P.wb(6),P.kc(P.Wb(31,19,t.pokemon.weight)),P.wb(2),P.ac("ngForOf",t.pokemon.stats),P.wb(2),P.ac("ngIf",t.busyDetails),P.wb(1),P.ac("ngIf",!t.busyDetails&&t.pokemonGenera),P.wb(1),P.ac("ngClass",P.cc(21,D,t.busyDetails)),P.wb(1),P.ac("ngForOf",t.pokemonFlavorTextEntries)}}var V,W,G=[{path:"",component:(V=function(){function e(t,o){n(this,e),this.pokemonService=t,this.route=o,this.pokemon=null,this.pokemonGenera=null,this.pokemonFlavorTextEntries=[],this.busy=!1,this.busyDetails=!1,this.error=!1}return t(e,[{key:"ngOnInit",value:function(){var n,e=this;this.route.paramMap.subscribe(function(t){e.busy=!0,e.busyDetails=!0;var o=t.get("id");n=o?parseInt(o):0,e.pokemonService.getPokemon(n).subscribe(function(n){e.pokemon=n,e.busy=!1},function(n){console.log(n),e.pokemon=p,e.busy=!1}),e.pokemonService.getPokemonSpecie(n).subscribe(function(n){var t=n.genera.find(function(n){return"es"===n.language.name}),o=n.flavor_text_entries.filter(function(n){return"es"===n.language.name});o=(o=o.reduce(function(n,e){return n.find(function(n){return n.version.name===e.version.name})?n:n.concat([e])},[])).reduce(function(n,e){var t=n.find(function(n){return n.flavor_text===e.flavor_text});return t&&(t.flavor_text=""),n.concat([e])},[]),e.pokemonGenera=t,e.pokemonFlavorTextEntries=o,e.busyDetails=!1},function(n){console.log(n),e.pokemonGenera=_,e.pokemonFlavorTextEntries=C,e.busyDetails=!1})})}}]),e}(),V.\u0275fac=function(n){return new(n||V)(P.Gb(O.a),P.Gb(l.a))},V.\u0275cmp=P.Ab({type:V,selectors:[["app-pokemon-details"]],decls:2,vars:1,consts:[[1,"pokemon-details"],["class","pokemon",4,"ngIf"],[1,"pokemon"],[1,"image","container-theme","container-theme--large"],[1,"image-container"],["width","250","height","250",3,"src","alt",4,"ngIf"],[1,"buttons-container"],[3,"routerLink",4,"ngIf"],[1,"number","container-theme","container-theme--small"],[3,"routerLink"],[1,"details","container-theme","container-theme--large"],[1,"name"],[4,"ngFor","ngForOf"],[1,"stat-name"],[1,"stat-value"],[1,"more-details","container-theme","container-theme--large"],[4,"ngIf"],[1,"content",3,"ngClass"],["routerLink","/",1,"button-theme","button-theme--black"],["width","250","height","250",3,"src","alt"],[1,"type",3,"ngClass"],[1,"pokedex-version-name",3,"ngClass"]],template:function(n,e){1&n&&(P.Lb(0,"section",0),P.ic(1,N,40,23,"div",1),P.Kb()),2&n&&(P.wb(1),P.ac("ngIf",e.pokemon))},directives:[M.j,l.d,M.i,M.h],pipes:[d.a,k.a,u,b,f,y,h],styles:[".pokemon-details[_ngcontent-%COMP%]{display:flex;justify-content:center;padding:25px 0;transition:.75s;max-width:700px;margin:0 auto}@media only screen and (max-width:767.98px){.pokemon-details[_ngcontent-%COMP%]{padding:25px 15px}}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]{display:grid;grid-template-rows:repeat(2,auto);grid-template-columns:1fr 1fr;-moz-column-gap:15px;column-gap:15px;row-gap:15px}@media only screen and (min-width:768px) and (max-width:991.98px){.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}}@media only screen and (max-width:767.98px){.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]{padding:0;grid-template-rows:repeat(3,auto);grid-template-columns:1fr}}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{grid-row-start:1;display:flex;flex-direction:column;align-items:center;justify-content:flex-end}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]{height:250px;width:250px}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   .buttons-container[_ngcontent-%COMP%]{padding:10px 15px 0;width:calc(100% - 44px);line-height:1.1rem;display:grid;grid-template-columns:repeat(3,1fr);grid-template-rows:auto;align-items:center;justify-content:center}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   .buttons-container[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]{grid-column-start:2;justify-self:center}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   .buttons-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;color:#000}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   .buttons-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#ee1515}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   .buttons-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:last-of-type{grid-column-start:3;justify-self:flex-end}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]{grid-row-start:1;grid-row-end:2}@media only screen and (max-width:767.98px){.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]{grid-row-start:auto;grid-row-end:auto}}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding-left:0;margin:0}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%], .pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .type[_ngcontent-%COMP%]{text-transform:uppercase}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .type[_ngcontent-%COMP%] + .type[_ngcontent-%COMP%]{padding-left:16px}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .type.bug[_ngcontent-%COMP%]{color:#6d7815}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .type.dark[_ngcontent-%COMP%]{color:#49392f}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .type.dragon[_ngcontent-%COMP%]{color:#4924a1}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .type.electric[_ngcontent-%COMP%]{color:#a1871f}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .type.fairy[_ngcontent-%COMP%]{color:#9b6470}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .type.fighting[_ngcontent-%COMP%]{color:#7d1f1a}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .type.fire[_ngcontent-%COMP%]{color:#9c531f}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .type.flying[_ngcontent-%COMP%]{color:#6d5e9c}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .type.ghost[_ngcontent-%COMP%]{color:#493963}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .type.grass[_ngcontent-%COMP%]{color:#4e8234}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .type.ground[_ngcontent-%COMP%]{color:#927d44}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .type.ice[_ngcontent-%COMP%]{color:#638d8d}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .type.normal[_ngcontent-%COMP%]{color:#6d6d4e}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .type.poison[_ngcontent-%COMP%]{color:#682a68}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .type.psychic[_ngcontent-%COMP%]{color:#a13959}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .type.rock[_ngcontent-%COMP%]{color:#786824}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .type.steel[_ngcontent-%COMP%]{color:#787887}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .type.water[_ngcontent-%COMP%]{color:#445e9c}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .type.bird[_ngcontent-%COMP%], .pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .type.unknown[_ngcontent-%COMP%]{color:#44685e}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{margin-top:8px;width:100%}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .stat-name[_ngcontent-%COMP%]{text-transform:uppercase}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%]{text-align:center}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]{padding:16px 24px;grid-column-start:1;grid-column-end:3}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-top:0}@media only screen and (max-width:767.98px){.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]{grid-column-end:2}}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .busy[_ngcontent-%COMP%]{visibility:hidden}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .red[_ngcontent-%COMP%]{color:#a60b0b}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .green[_ngcontent-%COMP%]{color:#0b7a0b}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .blue[_ngcontent-%COMP%]{color:#0b0ba6}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .yellow[_ngcontent-%COMP%]{color:#a68c21}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .gold[_ngcontent-%COMP%]{color:#8e6b15}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .silver[_ngcontent-%COMP%]{color:#7d7d7d}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .crystal[_ngcontent-%COMP%]{color:#338da6}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .ruby[_ngcontent-%COMP%]{color:#680000}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .sapphire[_ngcontent-%COMP%]{color:#000068}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .emerald[_ngcontent-%COMP%]{color:#006800}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .fire-red[_ngcontent-%COMP%]{color:#a64b19}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .leaf-green[_ngcontent-%COMP%]{color:#009000}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .diamond[_ngcontent-%COMP%]{color:#6f6fa6}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .pearl[_ngcontent-%COMP%]{color:#a66f6f}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .platinum[_ngcontent-%COMP%]{color:#646464}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .heart-gold[_ngcontent-%COMP%]{color:#766700}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .soul-silver[_ngcontent-%COMP%]{color:#7d7d92}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .black[_ngcontent-%COMP%]{color:#2c2c2c}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .white[_ngcontent-%COMP%]{color:#929292}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .black-2[_ngcontent-%COMP%]{color:#2b3134}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .white-2[_ngcontent-%COMP%]{color:#948687}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .x[_ngcontent-%COMP%]{color:#013d6c}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .y[_ngcontent-%COMP%]{color:#981128}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .omega-ruby[_ngcontent-%COMP%]{color:#6f1a0c}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .alpha-sapphire[_ngcontent-%COMP%]{color:#194166}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .sun[_ngcontent-%COMP%]{color:#9d5e1c}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .moon[_ngcontent-%COMP%]{color:#376483}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .ultra-sun[_ngcontent-%COMP%]{color:#983b1c}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .ultra-moon[_ngcontent-%COMP%]{color:#164776}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .lets-go-pikachu[_ngcontent-%COMP%]{color:#9f8e19}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .lets-go-eevee[_ngcontent-%COMP%]{color:#8a5f31}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .sword[_ngcontent-%COMP%]{color:#006998}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .shield[_ngcontent-%COMP%]{color:#7c0033}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .pokedex-version-name[_ngcontent-%COMP%]{text-transform:uppercase;margin-bottom:0}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .pokedex-version-name[_ngcontent-%COMP%] + .pokedex-version-name[_ngcontent-%COMP%]{margin-top:0}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.75rem;margin-top:0}.pokemon-details[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-of-type{padding-bottom:3em}"]}),V)}],T=((W=function e(){n(this,e)}).\u0275mod=P.Eb({type:W}),W.\u0275inj=P.Db({factory:function(n){return new(n||W)},imports:[[l.e.forChild(G),m.a]]}),W)}}])}();