(self.webpackChunkpokedex_angular=self.webpackChunkpokedex_angular||[]).push([[373],{8373:(C,_,m)=>{"use strict";m.r(_),m.d(_,{HomeModule:()=>ye});var y=m(7374),v=m(4466),c=m(9646),g=m(3900),e=m(1571),I=m(7579),F=m(6063);class V extends I.x{constructor(i=1/0,n=1/0,o=F.l){super(),this._bufferSize=i,this._windowTime=n,this._timestampProvider=o,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=n===1/0,this._bufferSize=Math.max(1,i),this._windowTime=Math.max(1,n)}next(i){const{isStopped:n,_buffer:o,_infiniteTimeWindow:a,_timestampProvider:s,_windowTime:r}=this;n||(o.push(i),!a&&o.push(s.now()+r)),this._trimBuffer(),super.next(i)}_subscribe(i){this._throwIfClosed(),this._trimBuffer();const n=this._innerSubscribe(i),{_infiniteTimeWindow:o,_buffer:a}=this,s=a.slice();for(let r=0;r<s.length&&!i.closed;r+=o?1:2)i.next(s[r]);return this._checkFinalizedStatuses(i),n}_trimBuffer(){const{_bufferSize:i,_timestampProvider:n,_buffer:o,_infiniteTimeWindow:a}=this,s=(a?1:2)*i;if(i<1/0&&s<o.length&&o.splice(0,o.length-s),!a){const r=n.now();let l=0;for(let u=1;u<o.length&&o[u]<=r;u+=2)l=u;l&&o.splice(0,l+1)}}}var x=(()=>{return(t=x||(x={})).HEIGHT_ASC="height-asc",t.NAME_ASC="name-asc",t.NUMBER_ASC="number-asc",t.WEIGHT_ASC="weight-asc",t.HEIGHT_DSC="height-dsc",t.NAME_DSC="name-dsc",t.NUMBER_DSC="number-dsc",t.WEIGHT_DSC="weight-dsc",x;var t})();const p=x;let P=(()=>{class t{constructor(n,o){this.activatedRoute=n,this.router=o,this.filter={},this.filterSubject=new V(1),this.activatedRoute.queryParams.subscribe(({pokemon:a,sortBy:s,type:r,version:l})=>{this.filter={pokedexVersionId:l?parseInt(l):1,pokemonName:a||"",pokemonSortBy:s||p.NUMBER_ASC,pokemonTypeId:r?parseInt(r):0},this.refresh()})}filterPokemons(n){const{pokemonName:o,pokemonTypeId:a}=this.filter;let s=[...n];if(o){const r=new RegExp(o);s=s.filter(l=>r.test(l.name))}return a&&(s=s.filter(r=>r.types?.some(l=>l.id===a))),s}getFilter(){return this.filterSubject.asObservable()}setPokedexVersionId(n){this.filter.pokedexVersionId=n,this.updateQueryParams({version:n}),this.refresh()}setPokemonName(n){const o=n?n.toLowerCase().trim():"";this.filter.pokemonName=o,this.updateQueryParams({pokemon:o||null}),this.refresh()}setPokemonTypeId(n){this.filter.pokemonTypeId=parseInt(n),this.updateQueryParams({type:n}),this.refresh()}setPokemonSortBy(n){this.updateQueryParams({sortBy:n}),this.filter.pokemonSortBy=n,this.refresh()}sortPokemons(n){const{pokemonSortBy:o}=this.filter;let a=[...n];return o===p.NAME_ASC?a.sort((s,r)=>s.name>r.name?1:-1):o===p.WEIGHT_ASC?a.sort((s,r)=>s.weight>r.weight?1:-1):o===p.HEIGHT_ASC?a.sort((s,r)=>s.height>r.height?1:-1):o===p.NUMBER_DSC?a.sort((s,r)=>s.id<r.id?1:-1):o===p.NAME_DSC?a.sort((s,r)=>s.name<r.name?1:-1):o===p.WEIGHT_DSC?a.sort((s,r)=>s.weight<r.weight?1:-1):o===p.HEIGHT_DSC&&a.sort((s,r)=>s.height<r.height?1:-1),a}refresh(){this.filterSubject.next(this.filter)}updateQueryParams(n){this.router.navigate([],{queryParams:n,queryParamsHandling:"merge"})}}return t.\u0275fac=function(n){return new(n||t)(e.LFG(y.gz),e.LFG(y.F0))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var S=m(2340);const{imagesPath:h}=S.N,J=[{id:1,name:"Green",sprites:{url:`${h}/pokemon-green.png`,width:56,height:56,animated:!1},limit:151,releasedYear:1996},{id:2,name:"Red & Blue",sprites:{url:`${h}/pokemon-red-and-blue.png`,width:56,height:56,animated:!1},limit:151,releasedYear:1998},{id:3,name:"Yellow",sprites:{url:`${h}/pokemon-yellow.png`,width:56,height:56,animated:!1},limit:151,releasedYear:1999},{id:4,name:"Gold",sprites:{url:`${h}/pokemon-gold.png`,width:56,height:56,animated:!1},limit:251,releasedYear:2e3},{id:5,name:"Silver",sprites:{url:`${h}/pokemon-silver.png`,width:56,height:56,animated:!1},limit:251,releasedYear:2e3},{id:6,name:"Crystal",sprites:{url:`${h}/pokemon-crystal`,width:56,height:56,animated:!0},limit:251,releasedYear:2001},{id:7,name:"Ruby & Sapphire",sprites:{url:`${h}/pokemon-ruby-and-sapphire.png`,width:64,height:64,animated:!1},limit:386,releasedYear:2003},{id:8,name:"FireRed & LeafGreen",sprites:{url:`${h}/pokemon-firered-and-leafgreen.png`,width:64,height:64,animated:!1},limit:386,releasedYear:2004},{id:9,name:"Emerald",sprites:{url:`${h}/pokemon-emerald`,width:64,height:64,animated:!0},limit:386,releasedYear:2005}];let T=(()=>{class t{constructor(){this.pokedexVersions=J}getAllPokedexVersions(){return this.pokedexVersions}getPokedexVersionById(n){return this.pokedexVersions.find(o=>o.id===n)||this.pokedexVersions[0]}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var M=m(4004),N=m(8505),B=m(9173),Q=m.n(B);const U=[{id:7,color:{light:"#c6d16e",dark:"#6d7815"}},{id:17,color:{light:"#a29288",dark:"#49392f"}},{id:16,color:{light:"#a27dfa",dark:"#4924a1"}},{id:13,color:{light:"#fae078",dark:"#a1871f"}},{id:18,color:{light:"#f4bdc9",dark:"#9b6470"}},{id:2,color:{light:"#d67873",dark:"#7d1f1a"}},{id:10,color:{light:"#f5ac78",dark:"#9c531f"}},{id:3,color:{light:"#c6b7f5",dark:"#6d5e9c"}},{id:8,color:{light:"#a292bc",dark:"#493963"}},{id:12,color:{light:"#a7db8d",dark:"#4e8234"}},{id:5,color:{light:"#ebd69d",dark:"#927d44"}},{id:15,color:{light:"#bce6e6",dark:"#638d8d"}},{id:1,color:{light:"#c6c6a7",dark:"#6d6d4e"}},{id:4,color:{light:"#c183c1",dark:"#682a68"}},{id:14,color:{light:"#fa92b2",dark:"#a13959"}},{id:6,color:{light:"#d1c17d",dark:"#786824"}},{id:10002,color:{light:"#9dc1b7",dark:"#44685e"}},{id:9,color:{light:"#d1d1e0",dark:"#787887"}},{id:10001,color:{light:"#9dc1b7",dark:"#44685e"}},{id:11,color:{light:"#9db7f5",dark:"#445e9c"}}],O_mapFrom=t=>{const{id:i,name:n}=t,o=U.find(a=>a.id===i);return{id:i,name:n,color:o?.color}},Y_mapFrom=t=>{const{height:i,id:n,name:o,pokemon_v2_pokemontypes:a,sprites:s,weight:r}=t;let l=[];return a?.length&&(l=a.map(f=>f.pokemon_v2_type).map(O_mapFrom).map(f=>({id:f.id,name:f.name,color:f.color}))),{id:n,name:o,sprite:s?.other["official-artwork"].front_default,height:i,weight:r,types:l}};var w=m(3595);let D=(()=>{class t{constructor(n){this.apollo=n,this.fetchingPokemons=!1;const o=localStorage.getItem(S.N.pokemonsKey);this.pokemons=o?JSON.parse(o):[]}getAllPokemonsByLimit(n){return this.pokemons.length>=n?(0,c.of)(this.pokemons.slice(0,n)):(this.fetchingPokemons||(this.fetchingPokemons=!0,this.pokemons$=this.apollo.query({query:Q(),variables:{limit:n}}).pipe((0,M.U)(({data:o})=>o.pokemon_v2_pokemon.map(Y_mapFrom)),(0,N.b)(o=>{localStorage.setItem(S.N.pokemonsKey,JSON.stringify(o)),this.pokemons=o,this.fetchingPokemons=!1}))),this.pokemons$)}}return t.\u0275fac=function(n){return new(n||t)(e.LFG(w._M))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var b=m(9123),Z=m(801),H=m(8688),E=m.n(H);let L=(()=>{class t{constructor(n){this.apollo=n,this.fetchingPokemonTypes=!1;const o=localStorage.getItem(S.N.pokemonTypesKey);this.pokemonTypes=o?JSON.parse(o):[]}getAllPokemonTypes(){return this.pokemonTypes.length?(0,c.of)(this.pokemonTypes):(this.fetchingPokemonTypes||(this.fetchingPokemonTypes=!0,this.pokemonTypes$=this.apollo.query({query:E()}).pipe((0,M.U)(({data:n})=>n.pokemon_v2_type.map(O_mapFrom)),(0,N.b)(n=>{localStorage.setItem(S.N.pokemonTypesKey,JSON.stringify(n)),this.pokemonTypes=n,this.fetchingPokemonTypes=!1}))),this.pokemonTypes$)}getPokemonTypeByName(n){return this.pokemonTypes.find(o=>o.name===n)||this.pokemonTypes[0]}}return t.\u0275fac=function(n){return new(n||t)(e.LFG(w._M))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var k=m(6895),q=m(3868),d=m(433);function $(t,i){if(1&t&&e._UZ(0,"fa-icon",14),2&t){const n=e.oxw();e.Q6J("icon",n.iconTimes)}}function z(t,i){if(1&t&&e._UZ(0,"fa-icon",14),2&t){const n=e.oxw();e.Q6J("icon",n.iconSearch)}}function G(t,i){if(1&t&&(e.TgZ(0,"option",15),e._uU(1),e.qZA()),2&t){const n=i.$implicit;e.Q6J("value",n.id),e.xp6(1),e.hij(" ",n.name," ")}}function j(t,i){if(1&t&&(e.TgZ(0,"option",15),e._uU(1),e.qZA()),2&t){const n=i.$implicit;e.Q6J("value",n.id),e.xp6(1),e.hij(" ",n.name," ")}}const R=function(t){return{closed:t}};let W=(()=>{class t{constructor(n,o,a){this.filterService=n,this.pokemonTypeService=o,this.pokedexVersionService=a,this.iconSearch=Z.wn1,this.iconTimes=Z.NBC,this.showNav=!0,this.pokedexVersions=[],this.pokemonTypes=[],this.filterService.getFilter().subscribe(s=>{this.currentVersionId=s.pokedexVersionId,this.currentPokemonName=s.pokemonName,this.currentPokemonTypeId=s.pokemonTypeId}),this.pokedexVersions=this.pokedexVersionService.getAllPokedexVersions(),this.pokemonTypeService.getAllPokemonTypes().subscribe(s=>{this.pokemonTypes=s})}changePokemonName(n){this.filterService.setPokemonName(n)}changePokemonType(n){this.filterService.setPokemonTypeId(n)}changeVersion(n){this.filterService.setPokedexVersionId(n)}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(P),e.Y36(L),e.Y36(T))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-sidebar"]],decls:22,vars:11,consts:[[1,"sidebar",3,"ngClass"],["size","small"],[1,"filter"],[1,"toggle-nav-btn",3,"click"],[3,"icon",4,"ngIf"],[1,"form-group"],["for","field-version",1,"label"],["name","field-version","id","field-version",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["for","field-name",1,"label"],["id","field-name","type","text",3,"ngModel","maxlength","ngModelChange"],["for","field-type",1,"label"],["name","field-type","id","field-type",3,"ngModel","ngModelChange"],["value","0"],[3,"icon"],[3,"value"]],template:function(n,o){1&n&&(e.TgZ(0,"aside",0)(1,"app-dialog-box",1)(2,"div",2)(3,"button",3),e.NdJ("click",function(){return o.showNav=!o.showNav}),e.YNc(4,$,1,1,"fa-icon",4),e.YNc(5,z,1,1,"fa-icon",4),e.qZA(),e.TgZ(6,"div",5)(7,"label",6),e._uU(8,"Version:"),e.qZA(),e.TgZ(9,"select",7),e.NdJ("ngModelChange",function(s){return o.changeVersion(s)}),e.YNc(10,G,2,2,"option",8),e.qZA()(),e.TgZ(11,"div",5)(12,"label",9),e._uU(13,"PKMN Name:"),e.qZA(),e.TgZ(14,"input",10),e.NdJ("ngModelChange",function(s){return o.changePokemonName(s)}),e.qZA()(),e.TgZ(15,"div",5)(16,"label",11),e._uU(17,"PKMN Type:"),e.qZA(),e.TgZ(18,"select",12),e.NdJ("ngModelChange",function(s){return o.changePokemonType(s)}),e.TgZ(19,"option",13),e._uU(20,"All"),e.qZA(),e.YNc(21,j,2,2,"option",8),e.qZA()()()()()),2&n&&(e.Q6J("ngClass",e.VKq(9,R,!o.showNav)),e.xp6(4),e.Q6J("ngIf",o.showNav),e.xp6(1),e.Q6J("ngIf",!o.showNav),e.xp6(4),e.Q6J("ngModel",o.currentVersionId),e.xp6(1),e.Q6J("ngForOf",o.pokedexVersions),e.xp6(4),e.Q6J("ngModel",o.currentPokemonName)("maxlength",10),e.xp6(4),e.Q6J("ngModel",o.currentPokemonTypeId),e.xp6(3),e.Q6J("ngForOf",o.pokemonTypes))},dependencies:[k.mk,k.sg,k.O5,b.y,q.BN,d.YN,d.Kr,d.Fj,d.EJ,d.JJ,d.nD,d.On],styles:['@charset "UTF-8";.sidebar[_ngcontent-%COMP%]{overflow:hidden;max-width:100%;position:sticky;top:75px}@media only screen and (max-width: 575.98px){.sidebar[_ngcontent-%COMP%]{width:auto;margin-top:1em}}.sidebar[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]{padding:14px;white-space:nowrap;display:grid;grid-template-rows:repeat(2,auto);grid-template-columns:auto;max-height:500px;width:188px;transition:max-height .5s,width .5s;position:relative}@media only screen and (max-width:767.98px){.sidebar[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]{margin:0 auto;width:100%}}.sidebar[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .toggle-nav-btn[_ngcontent-%COMP%]{z-index:1;cursor:pointer;background-color:#0000;border:none;position:absolute;right:4px;top:4px;transition:color .25s,all .25s}.sidebar[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .toggle-nav-btn[_ngcontent-%COMP%]:hover{color:#ee1515}.sidebar[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]{opacity:1;transition:opacity ease-in .75s}.sidebar.closed[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]{max-height:42px;width:42px}.sidebar.closed[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .toggle-nav-btn[_ngcontent-%COMP%]{background-color:#0000;font-size:1.125rem;line-height:0;padding:0;position:absolute;right:12px;top:12px}.sidebar.closed[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]{pointer-events:none;transition:opacity .25s;opacity:0}']}),t})(),K=(()=>{class t{constructor({nativeElement:n}){"loading"in HTMLImageElement.prototype&&n.setAttribute("loading","lazy")}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(e.SBq))},t.\u0275dir=e.lG2({type:t,selectors:[["","appLazyImg",""]]}),t})();var X=m(9480);let ee=(()=>{class t{transform(n,o){return`${o.sprites.url}/${n}.gif`}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275pipe=e.Yjl({name:"pokemonImageUrl",type:t,pure:!0}),t})();var ne=m(3497),te=m(3708);let oe=(()=>{class t{transform(n,o){const{sprites:{height:a,width:s,url:r}}=o,u=parseFloat(((n-1)/10).toString()).toFixed(1);return{backgroundImage:`url(${r})`,backgroundPosition:`-${parseInt(u.substring(u.toString().length-1),10)*s}px -${Math.floor(parseFloat(u))*a}px`,height:`${a}px`,width:`${s}px`}}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275pipe=e.Yjl({name:"pokemonSpritePosition",type:t,pure:!0}),t})();function ie(t,i){if(1&t&&(e._UZ(0,"div",8),e.ALo(1,"pokemonSpritePosition")),2&t){const n=e.oxw(2);e.Q6J("ngStyle",e.xi3(1,1,n.id,n._pokedexVersion))}}const se=function(t,i){return{"width.px":t,"height.px":i}};function re(t,i){if(1&t&&(e.TgZ(0,"div",9),e._UZ(1,"img",10),e.ALo(2,"pokemonImageUrl"),e.qZA()),2&t){const n=e.oxw(2);e.Q6J("ngStyle",e.WLB(6,se,n.width,n.height)),e.xp6(1),e.Q6J("src",e.xi3(2,3,n.id,n._pokedexVersion),e.LSH)("alt",n.name)}}function ae(t,i){if(1&t&&(e.ynx(0),e.TgZ(1,"a",3)(2,"span",4),e._uU(3),e.ALo(4,"pokemonNumber"),e.qZA(),e.YNc(5,ie,2,4,"div",5),e.YNc(6,re,3,9,"div",6),e.TgZ(7,"span",7),e._uU(8),e.ALo(9,"pokemonName"),e.qZA()(),e.BQk()),2&t){const n=e.oxw();e.xp6(1),e.MGl("routerLink","pokemon/",n.id,""),e.xp6(2),e.Oqu(e.lcZ(4,5,n.id)),e.xp6(2),e.Q6J("ngIf",!n.animated),e.xp6(1),e.Q6J("ngIf",n.animated),e.xp6(2),e.Oqu(e.lcZ(9,7,n.name))}}let me=(()=>{class t{constructor(){this.id=0,this.name="",this.types=[],this.animated=!1,this.width=0,this.height=0,this._pokedexVersion={},this.background={}}set pokemon(n){const{id:o,name:a,types:s}=n;this.id=o,this.name=a,this.types=s}set pokedexVersion(n){const{sprites:o}=n,{animated:a,height:s,width:r}=o;this._pokedexVersion=n,this.animated=a,this.height=s,this.width=r}ngOnChanges(){this.setStyles()}setStyles(){const n=this.types[0].color?.light,o=this.types[1]?.color?.light||"#ffffff";this.background={background:`linear-gradient(45deg, ${o}, ${n}, ${o})`}}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-pokemon-card"]],inputs:{pokemon:"pokemon",pokedexVersion:"pokedexVersion"},features:[e.TTD],decls:3,vars:3,consts:[[1,"pokemon-card"],["size","small",3,"hoverable","backgroundStyles"],[4,"ngIf"],[1,"pokemon-card__content",3,"routerLink"],[1,"number"],["class","image",3,"ngStyle",4,"ngIf"],["class","image-animated",3,"ngStyle",4,"ngIf"],[1,"name"],[1,"image",3,"ngStyle"],[1,"image-animated",3,"ngStyle"],["appLazyImg","",3,"src","alt"]],template:function(n,o){1&n&&(e.TgZ(0,"div",0)(1,"app-dialog-box",1),e.YNc(2,ae,10,9,"ng-container",2),e.qZA()()),2&n&&(e.xp6(1),e.Q6J("hoverable",!0)("backgroundStyles",o.background),e.xp6(1),e.Q6J("ngIf",o.id))},dependencies:[y.yS,k.O5,k.PC,b.y,K,X.Q,ee,ne.o,te.p,oe],styles:[".pokemon-card[_ngcontent-%COMP%]{transition:.25s}.pokemon-card__content[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;align-items:center;color:#000;text-decoration:none;cursor:pointer;padding:4px;margin:4px auto;height:122px}.pokemon-card__content[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{background-repeat:no-repeat;transition:scale .25s;transform-origin:bottom}.pokemon-card__content[_ngcontent-%COMP%]   .image-animated[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;transition:scale .25s}.pokemon-card__content[_ngcontent-%COMP%]   .image-animated[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:relative;z-index:1}.pokemon-card[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]{font-size:.75rem;display:block}.pokemon-card[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{text-transform:uppercase;font-size:.75rem}.pokemon-card[_ngcontent-%COMP%]:hover{scale:1.3;position:relative;z-index:1}"]}),t})();function pe(t,i){1&t&&(e.ynx(0),e.TgZ(1,"div",3),e._uU(2,"Loading... Don't turn off the power"),e.qZA(),e.BQk())}function le(t,i){if(1&t&&(e.TgZ(0,"div",6),e._UZ(1,"app-pokemon-card",7),e.qZA()),2&t){const n=i.$implicit,o=e.oxw(4);e.xp6(1),e.Q6J("pokemon",n)("pokedexVersion",o._pokedexVersion)}}function de(t,i){if(1&t&&(e.ynx(0),e.YNc(1,le,2,2,"div",5),e.BQk()),2&t){const n=e.oxw(3);e.xp6(1),e.Q6J("ngForOf",n._pokemons)}}function ce(t,i){1&t&&(e.ynx(0),e._UZ(1,"img",8),e.BQk())}function ge(t,i){if(1&t&&(e.ynx(0),e.TgZ(1,"div",4),e.YNc(2,de,2,1,"ng-container",2),e.YNc(3,ce,2,0,"ng-container",2),e.qZA(),e.BQk()),2&t){const n=e.oxw(2);e.xp6(2),e.Q6J("ngIf",n._pokemons.length),e.xp6(1),e.Q6J("ngIf",!n._pokemons.length)}}function he(t,i){if(1&t&&(e.TgZ(0,"div",1),e.YNc(1,pe,3,0,"ng-container",2),e.YNc(2,ge,4,2,"ng-container",2),e.qZA()),2&t){const n=e.oxw();e.xp6(1),e.Q6J("ngIf",n._busy),e.xp6(1),e.Q6J("ngIf",!n._busy)}}let ue=(()=>{class t{constructor(){this._busy=!0,this._pokedexVersion={},this._pokemons=[]}set busy(n){this._busy=n}set pokedexVersion(n){this._pokedexVersion=n}set pokemons(n){this._pokemons=n}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-pokemon-list"]],inputs:{busy:"busy",pokedexVersion:"pokedexVersion",pokemons:"pokemons"},decls:1,vars:1,consts:[["class","pokemon-list",4,"ngIf"],[1,"pokemon-list"],[4,"ngIf"],[1,"message"],[1,"pokemons-container"],["class","pokemon-card",4,"ngFor","ngForOf"],[1,"pokemon-card"],[3,"pokemon","pokedexVersion"],["src","./assets/images/sleeping-pikachu.gif","alt","","height","54","width","54"]],template:function(n,o){1&n&&e.YNc(0,he,3,2,"div",0),2&n&&e.Q6J("ngIf",o._pokedexVersion)},dependencies:[k.sg,k.O5,me],styles:[".pokemon-list[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]{padding:0 1em}.pokemon-list[_ngcontent-%COMP%]   .pokemons-container[_ngcontent-%COMP%]{position:relative;margin:0 1em;display:grid;gap:4px;grid-template-columns:repeat(auto-fill,minmax(160px,1fr))}@media only screen and (max-width:767.98px){.pokemon-list[_ngcontent-%COMP%]   .pokemons-container[_ngcontent-%COMP%]{justify-content:center;margin:1em 0 0}}"]}),t})(),ke=(()=>{class t{transform(n){let o=n?n.toString():"No";return o=`${o} result`,1!==n&&(o=`${o}s`),o}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275pipe=e.Yjl({name:"searchResultsMessage",type:t,pure:!0}),t})(),fe=(()=>{class t{constructor(n){this.filterService=n,this.pokemonSortByNameASC=p.NAME_ASC,this.pokemonSortByNumberASC=p.NUMBER_ASC,this.pokemonSortByHeightASC=p.HEIGHT_ASC,this.pokemonSortByWeightASC=p.WEIGHT_ASC,this.pokemonSortByNameDSC=p.NAME_DSC,this.pokemonSortByNumberDSC=p.NUMBER_DSC,this.pokemonSortByHeightDSC=p.HEIGHT_DSC,this.pokemonSortByWeightDSC=p.WEIGHT_DSC,this._pokemons=[],this.filterService.getFilter().subscribe(o=>{this.currentPokemonSortBy=o.pokemonSortBy})}set pokemons(n){this._pokemons=n}changePokemonSortBy(n){this.filterService.setPokemonSortBy(n)}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(P))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-status-bar"]],inputs:{pokemons:"pokemons"},decls:24,vars:12,consts:[[1,"status-bar"],[1,"message"],[1,"sort-by"],["for","field-sort-by"],["name","field-sort-by","id","field-sort-by",3,"ngModel","ngModelChange"],[3,"value"]],template:function(n,o){1&n&&(e.TgZ(0,"div",0)(1,"div",1),e._uU(2),e.ALo(3,"searchResultsMessage"),e.qZA(),e.TgZ(4,"div",2)(5,"label",3),e._uU(6,"Order by:"),e.qZA(),e.TgZ(7,"select",4),e.NdJ("ngModelChange",function(s){return o.changePokemonSortBy(s)}),e.TgZ(8,"option",5),e._uU(9,"Height \u2191"),e.qZA(),e.TgZ(10,"option",5),e._uU(11,"Height \u2193"),e.qZA(),e.TgZ(12,"option",5),e._uU(13,"Name (A-Z)"),e.qZA(),e.TgZ(14,"option",5),e._uU(15,"Name (Z-A)"),e.qZA(),e.TgZ(16,"option",5),e._uU(17,"Number \u2191"),e.qZA(),e.TgZ(18,"option",5),e._uU(19,"Number \u2193"),e.qZA(),e.TgZ(20,"option",5),e._uU(21,"Weight \u2191"),e.qZA(),e.TgZ(22,"option",5),e._uU(23,"Weight \u2193"),e.qZA()()()()),2&n&&(e.xp6(2),e.Oqu(e.lcZ(3,10,o._pokemons.length)),e.xp6(5),e.Q6J("ngModel",o.currentPokemonSortBy),e.xp6(1),e.Q6J("value",o.pokemonSortByHeightASC),e.xp6(2),e.Q6J("value",o.pokemonSortByHeightDSC),e.xp6(2),e.Q6J("value",o.pokemonSortByNameASC),e.xp6(2),e.Q6J("value",o.pokemonSortByNameDSC),e.xp6(2),e.Q6J("value",o.pokemonSortByNumberASC),e.xp6(2),e.Q6J("value",o.pokemonSortByNumberDSC),e.xp6(2),e.Q6J("value",o.pokemonSortByWeightASC),e.xp6(2),e.Q6J("value",o.pokemonSortByWeightDSC))},dependencies:[d.YN,d.Kr,d.EJ,d.JJ,d.On,ke],styles:[".status-bar[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:0 1em;height:50px}@media only screen and (max-width: 575.98px){.status-bar[_ngcontent-%COMP%]{flex-direction:column;height:auto}}.status-bar[_ngcontent-%COMP%]   .sort-by[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{margin-right:1em}"]}),t})();const _e=[{path:"",component:(()=>{class t{constructor(n,o,a){this.filterService=n,this.pokedexVersionService=o,this.pokemonService=a,this.busy=!0,this.filter={},this.pokedexVersion={},this.pokemons=[],this.pokemonTypes=[],this.since=0,this.until=0,this.filterService.getFilter().pipe((0,g.w)(r=>(this.busy=!0,this.filter=r,(0,c.of)(this.pokedexVersionService.getPokedexVersionById(r.pokedexVersionId)))),(0,g.w)(r=>(this.pokedexVersion=r,this.pokemonService.getAllPokemonsByLimit(r.limit))),(0,g.w)(r=>(0,c.of)(this.filterService.filterPokemons(r))),(0,g.w)(r=>(0,c.of)(this.filterService.sortPokemons(r)))).subscribe(r=>{this.pokemons=r,this.busy=!1});const s=this.pokedexVersionService.getAllPokedexVersions();this.since=s[0].releasedYear,this.until=s[s.length-1].releasedYear}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(P),e.Y36(T),e.Y36(D))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-home"]],decls:17,vars:6,consts:[[1,"home"],[1,"home__header"],["size","large"],[1,"since-until-years"],["src","./assets/images/red-walking-old.gif","alt","","width","24","height","24"],["src","./assets/images/red-walking-new.gif","alt","","width","24","height","31.5"],[1,"home__content"],[1,"home__status-bar"],[3,"pokemons"],[1,"home__sidebar"],[1,"home__pokemon-list"],[3,"busy","pokedexVersion","pokemons"]],template:function(n,o){1&n&&(e.TgZ(0,"main",0)(1,"div",1)(2,"app-dialog-box",2)(3,"h1"),e._uU(4,"POK\xc9DEX"),e.qZA(),e.TgZ(5,"div",3),e._UZ(6,"img",4),e.TgZ(7,"span"),e._uU(8),e.qZA(),e._UZ(9,"img",5),e.qZA()()(),e.TgZ(10,"div",6)(11,"div",7),e._UZ(12,"app-status-bar",8),e.qZA(),e.TgZ(13,"div",9),e._UZ(14,"app-sidebar"),e.qZA(),e.TgZ(15,"div",10),e._UZ(16,"app-pokemon-list",11),e.qZA()()()),2&n&&(e.xp6(8),e.AsE("",o.since," - ",o.until,""),e.xp6(4),e.Q6J("pokemons",o.pokemons),e.xp6(4),e.Q6J("busy",o.busy)("pokedexVersion",o.pokedexVersion)("pokemons",o.pokemons))},dependencies:[b.y,W,ue,fe],styles:['.home__header[_ngcontent-%COMP%]{display:flex;align-items:center;height:154px;width:254px;margin:32px auto 0;text-align:center}@media only screen and (max-width: 575.98px){.home__header[_ngcontent-%COMP%]{display:block;width:auto;margin:2em 1em 0}}.home__header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0}.home__header[_ngcontent-%COMP%]   .since-until-years[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.home__header[_ngcontent-%COMP%]   .since-until-years[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:.5rem;padding:0 1em}.home__content[_ngcontent-%COMP%]{display:grid;grid-template-rows:min-content auto;grid-template-columns:min-content 1fr;min-height:calc(100vh - 125px);max-width:85em;margin:0 auto;padding:1.5em 4em 4em;grid-template-areas:". statusbar" "sidebar  pokemon-list"}@media only screen and (min-width: 768px) and (max-width: 991.98px){.home__content[_ngcontent-%COMP%]{grid-template-areas:"statusbar statusbar" "sidebar  pokemon-list"}}@media only screen and (max-width:767.98px){.home__content[_ngcontent-%COMP%]{grid-template-areas:"statusbar" "sidebar" "pokemon-list";grid-template-columns:1fr;justify-content:center;padding:4em 1em}}.home__status-bar[_ngcontent-%COMP%]{grid-area:statusbar}.home__sidebar[_ngcontent-%COMP%]{grid-area:sidebar}.home__pokemon-list[_ngcontent-%COMP%]{grid-area:pokemon-list}']}),t})()}];let ye=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[y.Bz.forChild(_e),v.m]}),t})()},8688:C=>{C.exports={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"GetPokemonTypes"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"pokemon_v2_type"},arguments:[{kind:"Argument",name:{kind:"Name",value:"order_by"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"name"},value:{kind:"EnumValue",value:"asc"}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]}]}}]}}]}},9173:C=>{C.exports={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"GetPokemons"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"limit"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"pokemon_v2_pokemon"},arguments:[{kind:"Argument",name:{kind:"Name",value:"limit"},value:{kind:"Variable",name:{kind:"Name",value:"limit"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"weight"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"height"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"pokemon_v2_pokemontypes"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"pokemon_v2_type"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]}]}}]}}]}}]}}]}}}]);