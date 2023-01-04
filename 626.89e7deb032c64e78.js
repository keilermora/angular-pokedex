(self.webpackChunkpokedex_angular=self.webpackChunkpokedex_angular||[]).push([[626],{626:(N,S,i)=>{"use strict";i.r(S),i.d(S,{PokemonDetailsModule:()=>m});var l=i(7374),O=i(4466);const d={id:0,name:"MissingNo.",genus:"Pok\xe9mon ???",sprite:"./assets/images/missingno.png",height:10,weight:15983,types:[{name:"bird"},{name:"normal"}],stats:[{name:"hp",value:33},{name:"attack",value:136},{name:"defense",value:0},{name:"special-attack",value:6},{name:"special-defense",value:6},{name:"speed",value:29}],flavorTexts:[{versionNames:["green"],text:"\u3051\u3064\u3070\u3093"},{versionNames:["red"],text:"???"},{versionNames:["blue"],text:"\u30b3\u30e1\u30f3\u30c8 \u3055\u304f\u305b\u3044\u3061\u3085\u3046"},{versionNames:["yellow"],text:"..."}]};var s=i(7340);const I=(0,s.X$)("fadeIn",[(0,s.eR)(":enter",[(0,s.oB)({opacity:0}),(0,s.jt)(250,(0,s.oB)({opacity:1}))])]);var e=i(4650),q=i(4004),Q=i(3258),J=i.n(Q);const E_mapFrom=n=>{const{id:t,name:o,pokemon_v2_pokemonspeciesflavortexts:a,pokemon_v2_pokemonspeciesnames:F,pokemon_v2_pokemons:h}=n;let M=[];return a.forEach(r=>{const C=M.find(ce=>ce.text===r.flavor_text.replace(/\f/g," "));C?C.versionNames.push(r.pokemon_v2_version.name):M.push({text:r.flavor_text.replace(/\f/g," "),versionNames:[r.pokemon_v2_version.name]})}),{id:t,name:o,genus:F[0].genus,weight:h[0].weight,height:h[0].height,sprite:`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${t.toString().padStart(3,"0")}.png`,flavorTexts:M,types:h[0].pokemon_v2_pokemontypes.map(({pokemon_v2_type:r})=>({name:r.name})),stats:h[0].pokemon_v2_pokemonstats.map(({base_stat:r,pokemon_v2_stat:C})=>({name:C.name,value:r}))}};var B=i(3595),U=i(1685);class c{constructor(t,o){this.apollo=t,this.languageService=o}getPokemonSpecieByPokemonId(t){const o=this.languageService.getCurrentLanguage();return this.apollo.query({query:J(),variables:{pokemonId:t,languageId:o.id}}).pipe((0,q.U)(({data:a})=>a.pokemon_v2_pokemonspecies.map(E_mapFrom)[0]))}}c.\u0275fac=function(t){return new(t||c)(e.LFG(B._M),e.LFG(U.T))},c.\u0275prov=e.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"});var P=i(3416),p=i(6895),Z=i(9123),T=i(2898);function L(n,t){1&n&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&n&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"LOADING_MESSAGE")))}function Y(n,t){1&n&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&n&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"POKEDEX_ENTRIES")))}function H(n,t){if(1&n&&(e.ynx(0),e.TgZ(1,"span",8),e._uU(2),e.ALo(3,"translate"),e.ALo(4,"i18nKey"),e.qZA(),e._UZ(5,"br"),e.BQk()),2&n){const o=t.$implicit;e.xp6(1),e.Q6J("ngClass",o),e.xp6(1),e.hij(" ",e.lcZ(3,2,e.lcZ(4,4,o))," ")}}const j=function(n){return{"pokedex-entries__version-names--odd":n}},D=function(n){return{"pokedex-entries__flavor-text--odd":n}};function V(n,t){if(1&n&&(e.ynx(0),e.TgZ(1,"div",6),e.YNc(2,H,6,6,"ng-container",5),e.qZA(),e.TgZ(3,"p",7),e._uU(4),e.qZA(),e.BQk()),2&n){const o=t.$implicit,a=t.odd;e.xp6(1),e.Q6J("ngClass",e.VKq(4,j,a)),e.xp6(1),e.Q6J("ngForOf",o.versionNames),e.xp6(1),e.Q6J("ngClass",e.VKq(6,D,a)),e.xp6(1),e.hij(" ",o.text," ")}}function R(n,t){if(1&n&&(e.ynx(0),e.YNc(1,V,5,8,"ng-container",5),e.BQk()),2&n){const o=e.oxw();e.xp6(1),e.Q6J("ngForOf",o.pokemonSpecie.flavorTexts)}}class g{constructor(){this.busy=!0,this.pokemonSpecie=null}}g.\u0275fac=function(t){return new(t||g)},g.\u0275cmp=e.Xpm({type:g,selectors:[["app-pokedex-entries"]],inputs:{busy:"busy",pokemonSpecie:"pokemonSpecie"},decls:7,vars:3,consts:[["size","large"],[1,"pokedex-entries"],[1,"pokedex-entries__title"],[4,"ngIf"],[1,"pokedex-entries__entries"],[4,"ngFor","ngForOf"],[1,"pokedex-entries__version-names",3,"ngClass"],[1,"pokedex-entries__flavor-text",3,"ngClass"],[1,"pokedex-entries__version-name",3,"ngClass"]],template:function(t,o){1&t&&(e.TgZ(0,"app-dialog-box",0)(1,"div",1)(2,"span",2),e.YNc(3,L,3,3,"span",3),e.YNc(4,Y,3,3,"span",3),e.qZA(),e.TgZ(5,"div",4),e.YNc(6,R,2,1,"ng-container",3),e.qZA()()()),2&t&&(e.xp6(3),e.Q6J("ngIf",o.busy),e.xp6(1),e.Q6J("ngIf",!o.busy),e.xp6(2),e.Q6J("ngIf",!o.busy&&o.pokemonSpecie))},dependencies:[p.mk,p.sg,p.O5,Z.y,T.c,P.X$],styles:['@import"https://fonts.googleapis.com/css2?family=Roboto&display=swap";@font-face{font-family:pokemon-gb;src:url(pokemon-gb.d3cbb610bbe0be9f.ttf) format("embedded-opentype"),url(pokemon-gb.d3cbb610bbe0be9f.ttf) format("woff2"),url(pokemon-gb.d3cbb610bbe0be9f.ttf) format("woff"),url(pokemon-gb.d3cbb610bbe0be9f.ttf) format("truetype"),url(pokemon-gb.d3cbb610bbe0be9f.ttf) format("svg")}.pokedex-entries__title[_ngcontent-%COMP%]{margin-top:0;font-weight:700}.pokedex-entries__entries[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,auto)}.pokedex-entries__version-names[_ngcontent-%COMP%]{padding:1em}.pokedex-entries__version-names--odd[_ngcontent-%COMP%]{background-color:#f7f5fa}.pokedex-entries__version-name[_ngcontent-%COMP%]{text-transform:uppercase;margin-bottom:0;font-size:.875rem;font-weight:700;margin-top:0}.pokedex-entries__flavor-text[_ngcontent-%COMP%]{margin:0;padding:1em;font-family:Roboto,sans-serif}.pokedex-entries__flavor-text--odd[_ngcontent-%COMP%]{background-color:#f7f5fa;height:100%}.red[_ngcontent-%COMP%]{color:#a60b0b}.green[_ngcontent-%COMP%]{color:#0b7a0b}.blue[_ngcontent-%COMP%]{color:#0b0ba6}.yellow[_ngcontent-%COMP%]{color:#a68c21}.gold[_ngcontent-%COMP%]{color:#8e6b15}.silver[_ngcontent-%COMP%]{color:#7d7d7d}.crystal[_ngcontent-%COMP%]{color:#338da6}.ruby[_ngcontent-%COMP%]{color:#680000}.sapphire[_ngcontent-%COMP%]{color:#000068}.emerald[_ngcontent-%COMP%]{color:#006800}.firered[_ngcontent-%COMP%]{color:#a64b19}.leafgreen[_ngcontent-%COMP%]{color:#009000}.diamond[_ngcontent-%COMP%]{color:#6f6fa6}.pearl[_ngcontent-%COMP%]{color:#a66f6f}.platinum[_ngcontent-%COMP%]{color:#646464}.heartgold[_ngcontent-%COMP%]{color:#766700}.soulsilver[_ngcontent-%COMP%]{color:#7d7d92}.black[_ngcontent-%COMP%]{color:#2c2c2c}.white[_ngcontent-%COMP%]{color:#929292}.black-2[_ngcontent-%COMP%]{color:#2b3134}.white-2[_ngcontent-%COMP%]{color:#948687}.x[_ngcontent-%COMP%]{color:#013d6c}.y[_ngcontent-%COMP%]{color:#981128}.omega-ruby[_ngcontent-%COMP%]{color:#6f1a0c}.alpha-sapphire[_ngcontent-%COMP%]{color:#194166}.sun[_ngcontent-%COMP%]{color:#9d5e1c}.moon[_ngcontent-%COMP%]{color:#376483}.ultra-sun[_ngcontent-%COMP%]{color:#983b1c}.ultra-moon[_ngcontent-%COMP%]{color:#164776}.lets-go-pikachu[_ngcontent-%COMP%]{color:#9f8e19}.lets-go-eevee[_ngcontent-%COMP%]{color:#8a5f31}.sword[_ngcontent-%COMP%]{color:#006998}.shield[_ngcontent-%COMP%]{color:#7c0033}']});class u{transform(t){return t/10+"m"}}u.\u0275fac=function(t){return new(t||u)},u.\u0275pipe=e.Yjl({name:"pokemonHeight",type:u,pure:!0});class k{transform(t){return t/10+"kg"}}function X(n,t){if(1&n&&(e.TgZ(0,"td",8),e._uU(1),e.ALo(2,"pokemonHeight"),e.qZA()),2&n){const o=e.oxw(3);e.xp6(1),e.Oqu(e.lcZ(2,1,o.pokemonSpecie.height))}}function $(n,t){if(1&n&&(e.TgZ(0,"tr")(1,"td",6),e._uU(2),e.ALo(3,"translate"),e.qZA(),e.YNc(4,X,3,3,"td",7),e.qZA()),2&n){const o=e.oxw(2);e.xp6(2),e.Oqu(e.lcZ(3,2,"HEIGHT")),e.xp6(2),e.Q6J("ngIf",!o.busy)}}function G(n,t){if(1&n&&(e.TgZ(0,"td",8),e._uU(1),e.ALo(2,"pokemonWeight"),e.qZA()),2&n){const o=e.oxw(3);e.xp6(1),e.Oqu(e.lcZ(2,1,o.pokemonSpecie.weight))}}function z(n,t){if(1&n&&(e.TgZ(0,"tr")(1,"td",6),e._uU(2),e.ALo(3,"translate"),e.qZA(),e.YNc(4,G,3,3,"td",7),e.qZA()),2&n){const o=e.oxw(2);e.xp6(2),e.Oqu(e.lcZ(3,2,"WEIGHT")),e.xp6(2),e.Q6J("ngIf",!o.busy)}}function K(n,t){if(1&n&&(e.TgZ(0,"td",8),e._uU(1),e.qZA()),2&n){const o=e.oxw().$implicit;e.xp6(1),e.Oqu(o.value)}}function W(n,t){if(1&n&&(e.TgZ(0,"tr")(1,"td",6),e._uU(2),e.ALo(3,"translate"),e.ALo(4,"i18nKey"),e.qZA(),e.YNc(5,K,2,1,"td",7),e.qZA()),2&n){const o=t.$implicit,a=e.oxw(2);e.xp6(2),e.Oqu(e.lcZ(3,2,e.lcZ(4,4,o.name))),e.xp6(3),e.Q6J("ngIf",!a.busy)}}function ee(n,t){if(1&n&&(e.ynx(0),e.TgZ(1,"div",2)(2,"span",3),e._uU(3),e.ALo(4,"translate"),e.qZA(),e.TgZ(5,"table",4),e.YNc(6,$,5,4,"tr",1),e.YNc(7,z,5,4,"tr",1),e.YNc(8,W,6,6,"tr",5),e.qZA()(),e.BQk()),2&n){const o=e.oxw();e.xp6(3),e.Oqu(e.lcZ(4,4,"ATTRIBUTES")),e.xp6(3),e.Q6J("ngIf",!!o.pokemonSpecie.height),e.xp6(1),e.Q6J("ngIf",!!o.pokemonSpecie.weight),e.xp6(1),e.Q6J("ngForOf",o.pokemonSpecie.stats)}}k.\u0275fac=function(t){return new(t||k)},k.\u0275pipe=e.Yjl({name:"pokemonWeight",type:k,pure:!0});class f{constructor(){this.busy=!0,this.pokemonSpecie=null}}f.\u0275fac=function(t){return new(t||f)},f.\u0275cmp=e.Xpm({type:f,selectors:[["app-battle-stats"]],inputs:{busy:"busy",pokemonSpecie:"pokemonSpecie"},decls:2,vars:1,consts:[["size","large"],[4,"ngIf"],[1,"battle-stats"],[1,"battle-stats__title"],[1,"stats"],[4,"ngFor","ngForOf"],[1,"stats__name"],["class","stats__value",4,"ngIf"],[1,"stats__value"]],template:function(t,o){1&t&&(e.TgZ(0,"app-dialog-box",0),e.YNc(1,ee,9,6,"ng-container",1),e.qZA()),2&t&&(e.xp6(1),e.Q6J("ngIf",o.pokemonSpecie))},dependencies:[p.sg,p.O5,Z.y,T.c,u,k,P.X$],styles:[".battle-stats__title[_ngcontent-%COMP%]{font-weight:700}.battle-stats__list[_ngcontent-%COMP%]{list-style:none;padding-left:0;margin:0}.battle-stats__type[_ngcontent-%COMP%]{text-transform:uppercase}.battle-stats__type[_ngcontent-%COMP%] + .battle-stats__type[_ngcontent-%COMP%]{padding-left:1em}.battle-stats[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]{margin-top:.5em;width:100%}.battle-stats[_ngcontent-%COMP%]   .stats__name[_ngcontent-%COMP%]{text-transform:uppercase;white-space:nowrap}.battle-stats[_ngcontent-%COMP%]   .stats__value[_ngcontent-%COMP%]{text-align:center}"]});var w=i(9480),ne=i(3708);function te(n,t){if(1&n&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"pokemonNumber"),e.qZA()),2&n){const o=e.oxw();e.xp6(1),e.Oqu(e.lcZ(2,1,o.pokemonSpecie.id))}}class _{constructor(){this.busy=!0}}_.\u0275fac=function(t){return new(t||_)},_.\u0275cmp=e.Xpm({type:_,selectors:[["app-breadcrumb"]],inputs:{busy:"busy",pokemonSpecie:"pokemonSpecie"},decls:6,vars:4,consts:[[1,"breadcrumb"],["routerLink","/"],[4,"ngIf"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"a",1),e._uU(2),e.ALo(3,"translate"),e.qZA(),e._uU(4,"\xa0>\xa0 "),e.YNc(5,te,3,3,"span",2),e.qZA()),2&t&&(e.xp6(2),e.Oqu(e.lcZ(3,2,"HOME")),e.xp6(3),e.Q6J("ngIf",!o.busy))},dependencies:[l.rH,p.O5,w.Q,ne.p,P.X$],styles:[".breadcrumb[_ngcontent-%COMP%]{display:flex;align-items:center;height:50px}"]});var A=i(801),oe=i(3868);class b{constructor(t){this.el=t,this.appHideElement=!1}ngOnChanges(){this.el.nativeElement.style.visibility=this.appHideElement?"hidden":"visible"}}b.\u0275fac=function(t){return new(t||b)(e.Y36(e.SBq))},b.\u0275dir=e.lG2({type:b,selectors:[["","appHideElement",""]],inputs:{appHideElement:"appHideElement"},features:[e.TTD]});var ie=i(3497);function ae(n,t){if(1&n&&e._UZ(0,"fa-icon",6),2&n){const o=e.oxw();e.Q6J("icon",o.iconLeft)}}class v{constructor(){this.iconLeft=A.acZ,this.iconRight=A.eFW,this.busy=!0,this.pokemonSpecie={}}}function se(n,t){if(1&n&&e._UZ(0,"img",6),2&n){const o=e.oxw(2);e.Q6J("src",o.pokemonSpecie.sprite,e.LSH)("alt",o.pokemonSpecie.name)}}function pe(n,t){if(1&n&&(e.ynx(0),e.YNc(1,se,1,2,"img",4),e._UZ(2,"app-paginator",5),e.BQk()),2&n){const o=e.oxw();e.xp6(1),e.Q6J("ngIf",!o.busy),e.xp6(1),e.Q6J("busy",o.busy)("pokemonSpecie",o.pokemonSpecie)}}v.\u0275fac=function(t){return new(t||v)},v.\u0275cmp=e.Xpm({type:v,selectors:[["app-paginator"]],inputs:{busy:"busy",pokemonSpecie:"pokemonSpecie"},decls:11,vars:11,consts:[[1,"paginator",3,"appHideElement"],[3,"routerLink"],[3,"icon",4,"ngIf"],[1,"paginator__current-pokemon"],[1,"paginator__pokemon-name"],[1,"paginator__pokemon-genus"],[3,"icon"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"a",1),e.YNc(2,ae,1,1,"fa-icon",2),e.qZA(),e.TgZ(3,"div",3)(4,"span",4),e._uU(5),e.ALo(6,"pokemonName"),e.qZA(),e.TgZ(7,"span",5),e._uU(8),e.qZA()(),e.TgZ(9,"a",1),e._UZ(10,"fa-icon",6),e.qZA()()),2&t&&(e.Q6J("appHideElement",o.busy),e.xp6(1),e.Udp("pointer-events",o.pokemonSpecie.id>=0?"auto":"none"),e.Q6J("routerLink","/pokemon/"+(o.pokemonSpecie.id-1)),e.xp6(1),e.Q6J("ngIf",o.pokemonSpecie.id-1>=0),e.xp6(3),e.Oqu(e.lcZ(6,9,o.pokemonSpecie.name)),e.xp6(3),e.Oqu(o.pokemonSpecie.genus),e.xp6(1),e.Q6J("routerLink","/pokemon/"+(o.pokemonSpecie.id+1)),e.xp6(1),e.Q6J("icon",o.iconRight))},dependencies:[l.rH,p.O5,oe.BN,b,w.Q,ie.o],styles:['@import"https://fonts.googleapis.com/css2?family=Roboto&display=swap";@font-face{font-family:pokemon-gb;src:url(pokemon-gb.d3cbb610bbe0be9f.ttf) format("embedded-opentype"),url(pokemon-gb.d3cbb610bbe0be9f.ttf) format("woff2"),url(pokemon-gb.d3cbb610bbe0be9f.ttf) format("woff"),url(pokemon-gb.d3cbb610bbe0be9f.ttf) format("truetype"),url(pokemon-gb.d3cbb610bbe0be9f.ttf) format("svg")}.paginator[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.paginator__current-pokemon[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.paginator__pokemon-name[_ngcontent-%COMP%]{text-transform:uppercase;font-weight:700}.paginator__pokemon-genus[_ngcontent-%COMP%]{font-family:Roboto,sans-serif}']});class y{constructor(){this.busy=!0}}y.\u0275fac=function(t){return new(t||y)},y.\u0275cmp=e.Xpm({type:y,selectors:[["app-pokemon-profile"]],inputs:{busy:"busy",pokemonSpecie:"pokemonSpecie"},decls:4,vars:1,consts:[["size","large"],[1,"pokemon-artwork"],[1,"pokemon-artwork__image-placeholder"],[4,"ngIf"],["width","240","height","240",3,"src","alt",4,"ngIf"],[3,"busy","pokemonSpecie"],["width","240","height","240",3,"src","alt"]],template:function(t,o){1&t&&(e.TgZ(0,"app-dialog-box",0)(1,"div",1)(2,"div",2),e.YNc(3,pe,3,3,"ng-container",3),e.qZA()()()),2&t&&(e.xp6(3),e.Q6J("ngIf",!o.busy))},dependencies:[p.O5,Z.y,v],styles:['@import"https://fonts.googleapis.com/css2?family=Roboto&display=swap";@font-face{font-family:pokemon-gb;src:url(pokemon-gb.d3cbb610bbe0be9f.ttf) format("embedded-opentype"),url(pokemon-gb.d3cbb610bbe0be9f.ttf) format("woff2"),url(pokemon-gb.d3cbb610bbe0be9f.ttf) format("woff"),url(pokemon-gb.d3cbb610bbe0be9f.ttf) format("truetype"),url(pokemon-gb.d3cbb610bbe0be9f.ttf) format("svg")}.pokemon-artwork__image-placeholder[_ngcontent-%COMP%]{height:298px;width:250px;margin:0 auto;text-align:center}.pokemon-artwork__name[_ngcontent-%COMP%]{text-transform:uppercase;font-weight:700}.pokemon-artwork__genus[_ngcontent-%COMP%]{font-family:Roboto,sans-serif}']});class x{constructor(t,o,a){this.route=t,this.pokemonSpecieService=o,this.translate=a,this.pokemon={},this.pokemonSpecie={},this.busy=!0,this.error=!1}ngOnInit(){let t;this.route.params.subscribe(({id:o})=>{t=o?parseInt(o):0,this.pokemon.id=t,this.getPokemonSpecie(t)}),this.translate.onLangChange.subscribe(()=>{this.getPokemonSpecie(this.pokemon.id)})}getPokemonSpecie(t){this.busy=!0,this.pokemonSpecieService.getPokemonSpecieByPokemonId(t).subscribe({next:o=>{this.pokemonSpecie=o||d},error:o=>{console.error(o),this.pokemonSpecie=d}}).add(()=>{this.busy=!1})}}x.\u0275fac=function(t){return new(t||x)(e.Y36(l.gz),e.Y36(c),e.Y36(P.sK))},x.\u0275cmp=e.Xpm({type:x,selectors:[["app-pokemon-details"]],decls:9,vars:8,consts:[[1,"pokemon-details"],[1,"pokemon-details__breadcrumb"],[3,"busy","pokemonSpecie"],[1,"pokemon-details__artwork"],[1,"pokemon-details__attributes"],[1,"pokemon-details__description"]],template:function(t,o){1&t&&(e.TgZ(0,"section",0)(1,"div",1),e._UZ(2,"app-breadcrumb",2),e.qZA(),e.TgZ(3,"div",3),e._UZ(4,"app-pokemon-profile",2),e.qZA(),e.TgZ(5,"div",4),e._UZ(6,"app-battle-stats",2),e.qZA(),e.TgZ(7,"div",5),e._UZ(8,"app-pokedex-entries",2),e.qZA()()),2&t&&(e.xp6(2),e.Q6J("busy",o.busy)("pokemonSpecie",o.pokemonSpecie),e.xp6(2),e.Q6J("busy",o.busy)("pokemonSpecie",o.pokemonSpecie),e.xp6(2),e.Q6J("busy",o.busy)("pokemonSpecie",o.pokemonSpecie),e.xp6(2),e.Q6J("busy",o.busy)("pokemonSpecie",o.pokemonSpecie))},dependencies:[g,f,_,y],styles:['@import"https://fonts.googleapis.com/css2?family=Roboto&display=swap";@font-face{font-family:pokemon-gb;src:url(pokemon-gb.d3cbb610bbe0be9f.ttf) format("embedded-opentype"),url(pokemon-gb.d3cbb610bbe0be9f.ttf) format("woff2"),url(pokemon-gb.d3cbb610bbe0be9f.ttf) format("woff"),url(pokemon-gb.d3cbb610bbe0be9f.ttf) format("truetype"),url(pokemon-gb.d3cbb610bbe0be9f.ttf) format("svg")}.pokemon-details[_ngcontent-%COMP%]{max-width:700px;margin:0 auto;min-height:calc(100vh - 50px);padding:0 0 2em;display:grid;grid-gap:1em;grid-template-rows:auto auto 1fr;grid-template-columns:repeat(2,1fr);grid-template-areas:"breadcrumb breadcrumb" "artwork attributes" "description description"}@media only screen and (max-width:767.98px){.pokemon-details[_ngcontent-%COMP%]{grid-template-rows:repeat(4,auto);grid-template-columns:1fr;grid-template-areas:"breadcrumb" "artwork" "attributes" "description"}}.pokemon-details__breadcrumb[_ngcontent-%COMP%]{grid-area:breadcrumb}.pokemon-details__artwork[_ngcontent-%COMP%]{grid-area:artwork}.pokemon-details__attributes[_ngcontent-%COMP%]{grid-area:attributes}.pokemon-details__description[_ngcontent-%COMP%]{grid-area:description}'],data:{animation:[I]}});const re=[{path:"",component:x}];class m{}m.\u0275fac=function(t){return new(t||m)},m.\u0275mod=e.oAB({type:m}),m.\u0275inj=e.cJS({imports:[l.Bz.forChild(re),O.m]})},3258:N=>{N.exports={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"GetPokemonSpecie"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"pokemonId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"languageId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"pokemon_v2_pokemonspecies"},arguments:[{kind:"Argument",name:{kind:"Name",value:"where"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"id"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"_eq"},value:{kind:"Variable",name:{kind:"Name",value:"pokemonId"}}}]}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"pokemon_v2_pokemonspeciesnames"},arguments:[{kind:"Argument",name:{kind:"Name",value:"where"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"language_id"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"_eq"},value:{kind:"Variable",name:{kind:"Name",value:"languageId"}}}]}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"genus"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"pokemon_v2_pokemonspeciesflavortexts"},arguments:[{kind:"Argument",name:{kind:"Name",value:"where"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"language_id"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"_eq"},value:{kind:"Variable",name:{kind:"Name",value:"languageId"}}}]}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"pokemon_v2_version"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"flavor_text"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"pokemon_v2_pokemons"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"weight"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"height"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"pokemon_v2_pokemonsprites"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"sprites"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"pokemon_v2_pokemontypes"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"pokemon_v2_type"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"pokemon_v2_pokemonstats"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"pokemon_v2_stat"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"base_stat"},arguments:[],directives:[]}]}}]}}]}}]}}]}}}]);