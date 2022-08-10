(self.webpackChunkpokedex_angular=self.webpackChunkpokedex_angular||[]).push([[486],{1486:(P,_,a)=>{"use strict";a.r(_),a.d(_,{HomeModule:()=>_e});var v=a(4553),y=a(4466),g=a(9646),u=a(3900),e=a(8256),A=a(7579),Z=a(6063);class I extends A.x{constructor(i=1/0,n=1/0,o=Z.l){super(),this._bufferSize=i,this._windowTime=n,this._timestampProvider=o,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=n===1/0,this._bufferSize=Math.max(1,i),this._windowTime=Math.max(1,n)}next(i){const{isStopped:n,_buffer:o,_infiniteTimeWindow:l,_timestampProvider:s,_windowTime:r}=this;n||(o.push(i),!l&&o.push(s.now()+r)),this._trimBuffer(),super.next(i)}_subscribe(i){this._throwIfClosed(),this._trimBuffer();const n=this._innerSubscribe(i),{_infiniteTimeWindow:o,_buffer:l}=this,s=l.slice();for(let r=0;r<s.length&&!i.closed;r+=o?1:2)i.next(s[r]);return this._checkFinalizedStatuses(i),n}_trimBuffer(){const{_bufferSize:i,_timestampProvider:n,_buffer:o,_infiniteTimeWindow:l}=this,s=(l?1:2)*i;if(i<1/0&&s<o.length&&o.splice(0,o.length-s),!l){const r=n.now();let m=0;for(let p=1;p<o.length&&o[p]<=r;p+=2)m=p;m&&o.splice(0,m+1)}}}var x=(()=>{return(t=x||(x={})).HEIGHT_ASC="height-asc",t.NAME_ASC="name-asc",t.NUMBER_ASC="number-asc",t.WEIGHT_ASC="weight-asc",t.HEIGHT_DSC="height-dsc",t.NAME_DSC="name-dsc",t.NUMBER_DSC="number-dsc",t.WEIGHT_DSC="weight-dsc",x;var t})();const c=x;let S=(()=>{class t{constructor(n,o){this.activatedRoute=n,this.router=o,this.filter={},this.filterSubject=new I(1),this.activatedRoute.queryParams.subscribe(({pokemon:l,sortBy:s,type:r,version:m})=>{this.filter={pokedexVersionId:m?parseInt(m):1,pokemonName:l||"",pokemonSortBy:s||c.NUMBER_ASC,pokemonTypeId:r?parseInt(r):0},this.refresh()})}filterPokemons(n){const{pokemonName:o,pokemonTypeId:l,pokemonSortBy:s}=this.filter;let r=[...n];if(o){const m=new RegExp(o);r=r.filter(p=>m.test(p.name))}return l&&(r=r.filter(m=>m.types?.some(p=>p.id===l))),s===c.NAME_ASC?r.sort((m,p)=>m.name>p.name?1:-1):s===c.WEIGHT_ASC?r.sort((m,p)=>m.weight>p.weight?1:-1):s===c.HEIGHT_ASC?r.sort((m,p)=>m.height>p.height?1:-1):s===c.NUMBER_DSC?r.sort((m,p)=>m.id<p.id?1:-1):s===c.NAME_DSC?r.sort((m,p)=>m.name<p.name?1:-1):s===c.WEIGHT_DSC?r.sort((m,p)=>m.weight<p.weight?1:-1):s===c.HEIGHT_DSC&&r.sort((m,p)=>m.height<p.height?1:-1),r}getFilter(){return this.filterSubject.asObservable()}setPokedexVersionId(n){this.filter.pokedexVersionId=n,this.updateQueryParams({version:n}),this.refresh()}setPokemonName(n){const o=n?n.toLowerCase().trim():"";this.filter.pokemonName=o,this.updateQueryParams({pokemon:o||null}),this.refresh()}setPokemonTypeId(n){this.filter.pokemonTypeId=parseInt(n),this.updateQueryParams({type:n}),this.refresh()}setPokemonSortBy(n){this.updateQueryParams({sortBy:n}),this.filter.pokemonSortBy=n,this.refresh()}refresh(){this.filterSubject.next(this.filter)}updateQueryParams(n){this.router.navigate([],{queryParams:n,queryParamsHandling:"merge"})}}return t.\u0275fac=function(n){return new(n||t)(e.LFG(v.gz),e.LFG(v.F0))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const h=a(2340).N.imagesPath,F=[{id:1,name:"Green",sprites:{url:`${h}/pokemon-green.png`,width:56,height:56,animated:!1},limit:151,releasedYear:1996},{id:2,name:"Red & Blue",sprites:{url:`${h}/pokemon-red-and-blue.png`,width:56,height:56,animated:!1},limit:151,releasedYear:1998},{id:3,name:"Yellow",sprites:{url:`${h}/pokemon-yellow.png`,width:56,height:56,animated:!1},limit:151,releasedYear:1999},{id:4,name:"Gold",sprites:{url:`${h}/pokemon-gold.png`,width:56,height:56,animated:!1},limit:251,releasedYear:2e3},{id:5,name:"Silver",sprites:{url:`${h}/pokemon-silver.png`,width:56,height:56,animated:!1},limit:251,releasedYear:2e3},{id:6,name:"Crystal",sprites:{url:`${h}/pokemon-crystal`,width:56,height:56,animated:!0},limit:251,releasedYear:2001},{id:7,name:"Ruby & Sapphire",sprites:{url:`${h}/pokemon-ruby-and-sapphire.png`,width:64,height:64,animated:!1},limit:386,releasedYear:2003},{id:8,name:"FireRed & LeafGreen",sprites:{url:`${h}/pokemon-firered-and-leafgreen.png`,width:64,height:64,animated:!1},limit:386,releasedYear:2004},{id:9,name:"Emerald",sprites:{url:`${h}/pokemon-emerald`,width:64,height:64,animated:!0},limit:386,releasedYear:2005}];let T=(()=>{class t{constructor(){this.pokedexVersions=F}getAllPokedexVersions(){return this.pokedexVersions}getPokedexVersionById(n){return this.pokedexVersions.find(o=>o.id===n)||this.pokedexVersions[0]}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var N=a(4004),O=a(8505),J=a(9173),B=a.n(J);const Q_mapFrom=t=>{const{height:i,id:n,name:o,pokemon_v2_pokemontypes:l,sprites:s,stats:r,types:m,weight:p}=t;let C=[];return m?.length?C=m.map(({type:k})=>({id:0,name:k.name})):l?.length&&(C=l.map(({pokemon_v2_type:k})=>({id:k.id,name:k.name}))),{id:n,name:o,sprite:s?.other["official-artwork"].front_default,height:i,weight:p,stats:r?.map(({base_stat:k,stat:ve})=>({name:ve.name,value:k})),types:C}};var b=a(754);let U=(()=>{class t{constructor(n){this.apollo=n,this.fetchingPokemons=!1;const o=localStorage.getItem("pokemons-v4");this.pokemons=o?JSON.parse(o):[]}getAllPokemonsByLimit(n){return this.pokemons.length>=n?(0,g.of)(this.pokemons.slice(0,n)):(this.fetchingPokemons||(this.fetchingPokemons=!0,this.pokemons$=this.apollo.query({query:B(),variables:{limit:n}}).pipe((0,N.U)(({data:o})=>o.pokemon_v2_pokemon.map(Q_mapFrom)),(0,O.b)(o=>{localStorage.setItem("pokemons-v4",JSON.stringify(o)),this.pokemons=o,this.fetchingPokemons=!1}))),this.pokemons$)}}return t.\u0275fac=function(n){return new(n||t)(e.LFG(b._M))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var M=a(9123),w=a(801);const Y_mapFrom=t=>({id:t.id,name:t.name});var D=a(8688),H=a.n(D);let L=(()=>{class t{constructor(n){this.apollo=n,this.fetchingPokemonTypes=!1;const o=localStorage.getItem("pokemon-types");this.pokemonTypes=o?JSON.parse(o):[]}getAllPokemonTypes(){return this.pokemonTypes.length?(0,g.of)(this.pokemonTypes):(this.fetchingPokemonTypes||(this.fetchingPokemonTypes=!0,this.pokemonTypes$=this.apollo.query({query:H()}).pipe((0,N.U)(({data:n})=>n.pokemon_v2_type.map(Y_mapFrom)),(0,O.b)(n=>{localStorage.setItem("pokemons-types",JSON.stringify(n)),this.pokemonTypes=n,this.fetchingPokemonTypes=!1}))),this.pokemonTypes$)}getPokemonTypeByName(n){return this.pokemonTypes.find(o=>o.name===n)||this.pokemonTypes[0]}}return t.\u0275fac=function(n){return new(n||t)(e.LFG(b._M))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var f=a(6895),E=a(3868),d=a(433);function q(t,i){if(1&t&&e._UZ(0,"fa-icon",14),2&t){const n=e.oxw();e.Q6J("icon",n.iconTimes)}}function z(t,i){if(1&t&&e._UZ(0,"fa-icon",14),2&t){const n=e.oxw();e.Q6J("icon",n.iconSearch)}}function $(t,i){if(1&t&&(e.TgZ(0,"option",15),e._uU(1),e.qZA()),2&t){const n=i.$implicit;e.Q6J("value",n.id),e.xp6(1),e.hij(" ",n.name," ")}}function G(t,i){if(1&t&&(e.TgZ(0,"option",15),e._uU(1),e.qZA()),2&t){const n=i.$implicit;e.Q6J("value",n.id),e.xp6(1),e.hij(" ",n.name," ")}}const j=function(t){return{closed:t}};let R=(()=>{class t{constructor(n,o,l){this.filterService=n,this.pokemonTypeService=o,this.pokedexVersionService=l,this.iconSearch=w.wn1,this.iconTimes=w.NBC,this.showNav=!0,this.pokedexVersions=[],this.pokemonTypes=[],this.filterService.getFilter().subscribe(s=>{this.currentVersionId=s.pokedexVersionId,this.currentPokemonName=s.pokemonName,this.currentPokemonTypeId=s.pokemonTypeId}),this.pokedexVersions=this.pokedexVersionService.getAllPokedexVersions(),this.pokemonTypeService.getAllPokemonTypes().subscribe(s=>{this.pokemonTypes=s})}changePokemonName(n){this.filterService.setPokemonName(n)}changePokemonType(n){this.filterService.setPokemonTypeId(n)}changeVersion(n){this.filterService.setPokedexVersionId(n)}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(S),e.Y36(L),e.Y36(T))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-sidenav"]],decls:22,vars:11,consts:[[1,"sidenav",3,"ngClass"],["size","small"],[1,"filter"],[1,"toggle-nav-btn",3,"click"],[3,"icon",4,"ngIf"],[1,"form-group-theme"],["for","field-version",1,"label"],["name","field-version","id","field-version",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["for","field-name",1,"label"],["id","field-name","type","text",3,"ngModel","maxlength","ngModelChange"],["for","field-type",1,"label"],["name","field-type","id","field-type",3,"ngModel","ngModelChange"],["value","0"],[3,"icon"],[3,"value"]],template:function(n,o){1&n&&(e.TgZ(0,"aside",0)(1,"app-dialog-box",1)(2,"div",2)(3,"button",3),e.NdJ("click",function(){return o.showNav=!o.showNav}),e.YNc(4,q,1,1,"fa-icon",4),e.YNc(5,z,1,1,"fa-icon",4),e.qZA(),e.TgZ(6,"div",5)(7,"label",6),e._uU(8,"Version:"),e.qZA(),e.TgZ(9,"select",7),e.NdJ("ngModelChange",function(s){return o.changeVersion(s)}),e.YNc(10,$,2,2,"option",8),e.qZA()(),e.TgZ(11,"div",5)(12,"label",9),e._uU(13,"PKMN Name:"),e.qZA(),e.TgZ(14,"input",10),e.NdJ("ngModelChange",function(s){return o.changePokemonName(s)}),e.qZA()(),e.TgZ(15,"div",5)(16,"label",11),e._uU(17,"PKMN Type:"),e.qZA(),e.TgZ(18,"select",12),e.NdJ("ngModelChange",function(s){return o.changePokemonType(s)}),e.TgZ(19,"option",13),e._uU(20,"All"),e.qZA(),e.YNc(21,G,2,2,"option",8),e.qZA()()()()()),2&n&&(e.Q6J("ngClass",e.VKq(9,j,!o.showNav)),e.xp6(4),e.Q6J("ngIf",o.showNav),e.xp6(1),e.Q6J("ngIf",!o.showNav),e.xp6(4),e.Q6J("ngModel",o.currentVersionId),e.xp6(1),e.Q6J("ngForOf",o.pokedexVersions),e.xp6(4),e.Q6J("ngModel",o.currentPokemonName)("maxlength",10),e.xp6(4),e.Q6J("ngModel",o.currentPokemonTypeId),e.xp6(3),e.Q6J("ngForOf",o.pokemonTypes))},dependencies:[f.mk,f.sg,f.O5,M.y,E.BN,d.YN,d.Kr,d.Fj,d.EJ,d.JJ,d.nD,d.On],styles:['@charset "UTF-8";.sidenav[_ngcontent-%COMP%]{overflow:hidden;max-width:100%;position:sticky;top:75px}@media only screen and (max-width:767.98px){.sidenav[_ngcontent-%COMP%]{width:auto;margin-top:1em}}.sidenav[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]{padding:14px;white-space:nowrap;display:grid;grid-template-rows:repeat(2,auto);grid-template-columns:auto;max-height:500px;width:188px;transition:max-height .75s,width .75s;position:relative}@media only screen and (max-width:767.98px){.sidenav[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]{margin:0 auto;width:100%}}.sidenav[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .toggle-nav-btn[_ngcontent-%COMP%]{z-index:1;cursor:pointer;background-color:#0000;border:none;position:absolute;right:4px;top:4px;transition:color .25s,all .75s}.sidenav[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .toggle-nav-btn[_ngcontent-%COMP%]:hover{color:#ee1515}.sidenav[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .form-group-theme[_ngcontent-%COMP%]{opacity:1;transition:opacity .75s}.sidenav.closed[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]{max-height:42px;width:42px}.sidenav.closed[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .toggle-nav-btn[_ngcontent-%COMP%]{background-color:#0000;font-size:1.125rem;line-height:0;padding:0;position:absolute;right:12px;top:12px}.sidenav.closed[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .form-group-theme[_ngcontent-%COMP%]{opacity:0}']}),t})(),W=(()=>{class t{constructor({nativeElement:n}){"loading"in HTMLImageElement.prototype&&n.setAttribute("loading","lazy")}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(e.SBq))},t.\u0275dir=e.lG2({type:t,selectors:[["","appLazyImg",""]]}),t})();var X=a(9480);let K=(()=>{class t{transform(n,o){return`${o.sprites.url}/${n}.gif`}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275pipe=e.Yjl({name:"pokemonImageUrl",type:t,pure:!0}),t})();var ee=a(9651),ne=a(6515);let te=(()=>{class t{transform(n,o){const{sprites:{height:l,width:s,url:r}}=o,p=parseFloat(((n-1)/10).toString()).toFixed(1);return{backgroundImage:`url(${r})`,backgroundPosition:`-${parseInt(p.substring(p.toString().length-1),10)*s}px -${Math.floor(parseFloat(p))*l}px`,height:`${l}px`,width:`${s}px`}}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275pipe=e.Yjl({name:"pokemonSpritePosition",type:t,pure:!0}),t})();function oe(t,i){if(1&t&&(e._UZ(0,"div",7),e.ALo(1,"pokemonSpritePosition")),2&t){const n=e.oxw();e.Q6J("ngStyle",e.xi3(1,1,n._pokemon.id,n._pokedexVersion))}}function ie(t,i){if(1&t&&(e._UZ(0,"img",10),e.ALo(1,"pokemonImageUrl")),2&t){const n=e.oxw(2);e.Q6J("src",e.xi3(1,2,n._pokemon.id,n._pokedexVersion),e.LSH)("alt",n._pokemon.name)}}const se=function(t,i){return{"width.px":t,"height.px":i}};function re(t,i){if(1&t&&(e.TgZ(0,"div",8),e.YNc(1,ie,2,5,"img",9),e.qZA()),2&t){const n=e.oxw();e.Q6J("ngStyle",e.WLB(2,se,n._pokedexVersion.sprites.width,n._pokedexVersion.sprites.height)),e.xp6(1),e.Q6J("ngIf",n._pokedexVersion.sprites.animated)}}let ae=(()=>{class t{constructor(){this._pokemon={},this._pokedexVersion={}}set pokemon(n){this._pokemon=n}set pokedexVersion(n){this._pokedexVersion=n}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-pokemon-card"]],inputs:{pokemon:"pokemon",pokedexVersion:"pokedexVersion"},decls:11,vars:10,consts:[[1,"pokemon-card"],["size","small",3,"hoverable"],[1,"pokemon-info",3,"routerLink"],["class","image",3,"ngStyle",4,"ngIf"],["class","image-animated",3,"ngStyle",4,"ngIf"],[1,"number"],[1,"name"],[1,"image",3,"ngStyle"],[1,"image-animated",3,"ngStyle"],["appLazyImg","",3,"src","alt",4,"ngIf"],["appLazyImg","",3,"src","alt"]],template:function(n,o){1&n&&(e.TgZ(0,"div",0)(1,"app-dialog-box",1)(2,"a",2),e.YNc(3,oe,2,4,"div",3),e.YNc(4,re,2,5,"div",4),e.TgZ(5,"span",5),e._uU(6),e.ALo(7,"pokemonNumber"),e.qZA(),e.TgZ(8,"span",6),e._uU(9),e.ALo(10,"pokemonName"),e.qZA()()()()),2&n&&(e.xp6(1),e.Q6J("hoverable",!0),e.xp6(1),e.MGl("routerLink","pokemon/",o._pokemon.id,""),e.xp6(1),e.Q6J("ngIf",!o._pokedexVersion.sprites.animated),e.xp6(1),e.Q6J("ngIf",o._pokedexVersion.sprites.animated),e.xp6(2),e.Oqu(e.lcZ(7,6,o._pokemon.id)),e.xp6(3),e.Oqu(e.lcZ(10,8,o._pokemon.name)))},dependencies:[v.yS,f.O5,f.PC,M.y,W,X.Q,K,ee.o,ne.p,te],styles:[".pokemon-card[_ngcontent-%COMP%]   .pokemon-info[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:flex-end;align-items:center;color:#000;text-decoration:none;cursor:pointer;width:160px;padding:4px;margin:4px auto;height:122px;transition:.25s}.pokemon-card[_ngcontent-%COMP%]   .pokemon-info[_ngcontent-%COMP%]:hover, .pokemon-card[_ngcontent-%COMP%]   .pokemon-info[_ngcontent-%COMP%]:focus{color:#ee1515}.pokemon-card[_ngcontent-%COMP%]   .pokemon-info[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{background-repeat:no-repeat}.pokemon-card[_ngcontent-%COMP%]   .pokemon-info[_ngcontent-%COMP%]   .image-animated[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.pokemon-card[_ngcontent-%COMP%]   .pokemon-info[_ngcontent-%COMP%]   .image-animated[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:relative;z-index:1}.pokemon-card[_ngcontent-%COMP%]   .pokemon-info[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]{font-size:.75rem}.pokemon-card[_ngcontent-%COMP%]   .pokemon-info[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{text-transform:uppercase;font-size:.75rem}"]}),t})();function me(t,i){1&t&&(e.ynx(0),e.TgZ(1,"div",3),e._uU(2,"Loading... Don't turn off the power"),e.qZA(),e.BQk())}function pe(t,i){if(1&t&&(e.TgZ(0,"div",6),e._UZ(1,"app-pokemon-card",7),e.qZA()),2&t){const n=i.$implicit,o=e.oxw(4);e.xp6(1),e.Q6J("pokemon",n)("pokedexVersion",o._pokedexVersion)}}function le(t,i){if(1&t&&(e.ynx(0),e.YNc(1,pe,2,2,"div",5),e.BQk()),2&t){const n=e.oxw(3);e.xp6(1),e.Q6J("ngForOf",n._pokemons)}}function ce(t,i){1&t&&(e.ynx(0),e._UZ(1,"img",8),e.BQk())}function de(t,i){if(1&t&&(e.ynx(0),e.TgZ(1,"div",4),e.YNc(2,le,2,1,"ng-container",2),e.YNc(3,ce,2,0,"ng-container",2),e.qZA(),e.BQk()),2&t){const n=e.oxw(2);e.xp6(2),e.Q6J("ngIf",n._pokemons.length),e.xp6(1),e.Q6J("ngIf",!n._pokemons.length)}}function ge(t,i){if(1&t&&(e.TgZ(0,"div",1),e.YNc(1,me,3,0,"ng-container",2),e.YNc(2,de,4,2,"ng-container",2),e.qZA()),2&t){const n=e.oxw();e.xp6(1),e.Q6J("ngIf",n._busy),e.xp6(1),e.Q6J("ngIf",!n._busy)}}let ue=(()=>{class t{constructor(){this._busy=!0,this._pokedexVersion={},this._pokemons=[]}set busy(n){this._busy=n}set pokedexVersion(n){this._pokedexVersion=n}set pokemons(n){this._pokemons=n}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-pokemon-list"]],inputs:{busy:"busy",pokedexVersion:"pokedexVersion",pokemons:"pokemons"},decls:1,vars:1,consts:[["class","pokemon-list",4,"ngIf"],[1,"pokemon-list"],[4,"ngIf"],[1,"message"],[1,"pokemons-container"],["class","pokemon-card",4,"ngFor","ngForOf"],[1,"pokemon-card"],[3,"pokemon","pokedexVersion"],["src","./assets/images/sleeping-pikachu.gif","alt","","height","54","width","54"]],template:function(n,o){1&n&&e.YNc(0,ge,3,2,"div",0),2&n&&e.Q6J("ngIf",o._pokedexVersion)},dependencies:[f.sg,f.O5,ae],styles:[".pokemon-list[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]{padding:0 1em}.pokemon-list[_ngcontent-%COMP%]   .pokemons-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;position:relative;justify-content:flex-start;margin:0 14px}@media only screen and (max-width:767.98px){.pokemon-list[_ngcontent-%COMP%]   .pokemons-container[_ngcontent-%COMP%]{justify-content:center;margin:1em 0 0}}.pokemon-list[_ngcontent-%COMP%]   .pokemons-container[_ngcontent-%COMP%]   .pokemon-card[_ngcontent-%COMP%]{flex-grow:1;margin-right:4px;margin-bottom:4px}"]}),t})(),he=(()=>{class t{transform(n){let o=n?n.toString():"No";return o=`${o} result`,1!==n&&(o=`${o}s`),o}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275pipe=e.Yjl({name:"searchResultsMessage",type:t,pure:!0}),t})(),ke=(()=>{class t{constructor(n){this.filterService=n,this.pokemonSortByNameASC=c.NAME_ASC,this.pokemonSortByNumberASC=c.NUMBER_ASC,this.pokemonSortByHeightASC=c.HEIGHT_ASC,this.pokemonSortByWeightASC=c.WEIGHT_ASC,this.pokemonSortByNameDSC=c.NAME_DSC,this.pokemonSortByNumberDSC=c.NUMBER_DSC,this.pokemonSortByHeightDSC=c.HEIGHT_DSC,this.pokemonSortByWeightDSC=c.WEIGHT_DSC,this._pokemons=[],this.filterService.getFilter().subscribe(o=>{this.currentPokemonSortBy=o.pokemonSortBy})}set pokemons(n){this._pokemons=n}changePokemonSortBy(n){this.filterService.setPokemonSortBy(n)}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(S))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-status-bar"]],inputs:{pokemons:"pokemons"},decls:24,vars:12,consts:[[1,"status-bar"],[1,"message"],[1,"sort-by"],["for","field-sort-by"],["name","field-sort-by","id","field-sort-by",3,"ngModel","ngModelChange"],[3,"value"]],template:function(n,o){1&n&&(e.TgZ(0,"div",0)(1,"div",1),e._uU(2),e.ALo(3,"searchResultsMessage"),e.qZA(),e.TgZ(4,"div",2)(5,"label",3),e._uU(6,"Order by:"),e.qZA(),e.TgZ(7,"select",4),e.NdJ("ngModelChange",function(s){return o.changePokemonSortBy(s)}),e.TgZ(8,"option",5),e._uU(9,"Height \u2197"),e.qZA(),e.TgZ(10,"option",5),e._uU(11,"Height \u2198"),e.qZA(),e.TgZ(12,"option",5),e._uU(13,"Name (A-Z)"),e.qZA(),e.TgZ(14,"option",5),e._uU(15,"Name (Z-A)"),e.qZA(),e.TgZ(16,"option",5),e._uU(17,"Number \u2197"),e.qZA(),e.TgZ(18,"option",5),e._uU(19,"Number \u2198"),e.qZA(),e.TgZ(20,"option",5),e._uU(21,"Weight \u2197"),e.qZA(),e.TgZ(22,"option",5),e._uU(23,"Weight \u2198"),e.qZA()()()()),2&n&&(e.xp6(2),e.Oqu(e.lcZ(3,10,o._pokemons.length)),e.xp6(5),e.Q6J("ngModel",o.currentPokemonSortBy),e.xp6(1),e.Q6J("value",o.pokemonSortByHeightASC),e.xp6(2),e.Q6J("value",o.pokemonSortByHeightDSC),e.xp6(2),e.Q6J("value",o.pokemonSortByNameASC),e.xp6(2),e.Q6J("value",o.pokemonSortByNameDSC),e.xp6(2),e.Q6J("value",o.pokemonSortByNumberASC),e.xp6(2),e.Q6J("value",o.pokemonSortByNumberDSC),e.xp6(2),e.Q6J("value",o.pokemonSortByWeightASC),e.xp6(2),e.Q6J("value",o.pokemonSortByWeightDSC))},dependencies:[d.YN,d.Kr,d.EJ,d.JJ,d.On,he],styles:[".status-bar[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:0 1em;height:50px}@media only screen and (max-width: 575.98px){.status-bar[_ngcontent-%COMP%]{flex-direction:column;height:auto}}.status-bar[_ngcontent-%COMP%]   .sort-by[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{margin-right:1em}"]}),t})();const fe=[{path:"",component:(()=>{class t{constructor(n,o,l){this.filterService=n,this.pokedexVersionService=o,this.pokemonService=l,this.busy=!0,this.filter={},this.pokedexVersion={},this.pokemons=[],this.pokemonTypes=[],this.since=0,this.until=0,this.filterService.getFilter().pipe((0,u.w)(r=>(this.busy=!0,this.filter=r,(0,g.of)(this.pokedexVersionService.getPokedexVersionById(r.pokedexVersionId)))),(0,u.w)(r=>(this.pokedexVersion=r,this.pokemonService.getAllPokemonsByLimit(r.limit))),(0,u.w)(r=>(0,g.of)(this.filterService.filterPokemons(r)))).subscribe(r=>{this.pokemons=r,this.busy=!1});const s=this.pokedexVersionService.getAllPokedexVersions();this.since=s[0].releasedYear,this.until=s[s.length-1].releasedYear}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(S),e.Y36(T),e.Y36(U))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-home"]],decls:15,vars:6,consts:[[1,"home"],[1,"home__header"],["size","large"],[1,"since-until-years"],["src","./assets/images/red-walking-old.gif","alt","","width","24","height","24"],["src","./assets/images/red-walking-new.gif","alt","","width","24","height","31.5"],[1,"home__content"],[3,"pokemons"],[3,"busy","pokedexVersion","pokemons"]],template:function(n,o){1&n&&(e.TgZ(0,"main",0)(1,"div",1)(2,"app-dialog-box",2)(3,"h1"),e._uU(4,"POK\xc9DEX"),e.qZA(),e.TgZ(5,"div",3),e._UZ(6,"img",4),e.TgZ(7,"span"),e._uU(8),e.qZA(),e._UZ(9,"img",5),e.qZA()()(),e.TgZ(10,"div",6),e._UZ(11,"div")(12,"app-status-bar",7)(13,"app-sidenav")(14,"app-pokemon-list",8),e.qZA()()),2&n&&(e.xp6(8),e.AsE("",o.since," - ",o.until,""),e.xp6(4),e.Q6J("pokemons",o.pokemons),e.xp6(2),e.Q6J("busy",o.busy)("pokedexVersion",o.pokedexVersion)("pokemons",o.pokemons))},dependencies:[M.y,R,ue,ke],styles:[".home__header[_ngcontent-%COMP%]{display:flex;align-items:center;height:154px;width:254px;margin:0 auto;text-align:center}.home__header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0}.home__header[_ngcontent-%COMP%]   .since-until-years[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.home__header[_ngcontent-%COMP%]   .since-until-years[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:.5rem;padding:0 1em}.home__content[_ngcontent-%COMP%]{display:grid;grid-template-rows:min-content auto;grid-template-columns:min-content 1fr;min-height:calc(100vh - 125px);max-width:1366px;margin:0 auto;padding:25px 4em 4em}@media only screen and (max-width:767.98px){.home__content[_ngcontent-%COMP%]{grid-template-columns:1fr;grid-template-rows:repeat(2,auto);justify-content:center;padding:4em 1em}}"]}),t})()}];let _e=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[v.Bz.forChild(fe),y.m]}),t})()},8688:P=>{P.exports={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"GetPokemonTypes"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"pokemon_v2_type"},arguments:[{kind:"Argument",name:{kind:"Name",value:"order_by"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"name"},value:{kind:"EnumValue",value:"asc"}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]}]}}]}}]}},9173:P=>{P.exports={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"GetPokemons"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"limit"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"pokemon_v2_pokemon"},arguments:[{kind:"Argument",name:{kind:"Name",value:"limit"},value:{kind:"Variable",name:{kind:"Name",value:"limit"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"weight"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"height"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"pokemon_v2_pokemontypes"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"pokemon_v2_type"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]}]}}]}}]}}]}}]}}}]);