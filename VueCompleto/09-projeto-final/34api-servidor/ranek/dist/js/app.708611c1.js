(function(){"use strict";var t={6654:function(t,o,e){var r=e(8935),a=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{attrs:{id:"app"}},[e("TheHeader"),e("main",{attrs:{id:"main"}},[e("transition",{attrs:{mode:"out-in"}},[e("router-view")],1)],1),e("TheFooter")],1)},s=[],n=function(){var t=this,o=t.$createElement,r=t._self._c||o;return r("header",[r("nav",[r("router-link",{staticClass:"logo",attrs:{to:"/"}},[r("img",{attrs:{src:e(8699),alt:"Ranek"}})]),t.$store.state.login?r("router-link",{staticClass:"btn",attrs:{to:"/usuario"}},[t._v(t._s(t.nome))]):r("router-link",{staticClass:"btn",attrs:{to:"/login"}},[t._v("Vender / Login")])],1)])},i=[],u={name:"TheHeader",computed:{nome(){return this.$store.state.usuario.nome.replace(/ .*/,"")}}},l=u,c=e(1001),d=(0,c.Z)(l,n,i,!1,null,"fe37ce5a",null),p=d.exports,m=function(){var t=this,o=t.$createElement;t._self._c;return t._m(0)},h=[function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("footer",[e("p",[t._v("Ranek. Alguns direitos reservados.")])])}],v={name:"TheFooter"},f=v,g=(0,c.Z)(f,m,h,!1,null,"b74681a4",null),_=g.exports,P=e(6166),b=e.n(P);const C="http://apiranek.kinghost.net/wp-json",$=b().create({baseURL:C+"/api"});$.interceptors.request.use((function(t){const o=window.localStorage.token;return o&&(t.headers.Authorization=o),t}),(function(t){return Promise.reject(t)}));const w={get(t){return $.get(t)},post(t,o){return $.post(t,o)},put(t,o){return $.put(t,o)},delete(t){return $.delete(t)},login(t){return b().post(C+"/jwt-auth/v1/token",t)},validateToken(){return $.post(C+"/jwt-auth/v1/token/validate")}};function U(t){return b().get(`https://viacep.com.br/ws/${t}/json/`)}var y={components:{TheHeader:p,TheFooter:_},created(){window.localStorage.token&&w.validateToken().then((t=>{this.$store.dispatch("getUsuario",t)})).catch((t=>{window.localStorage.removeItem("token",t)}))}},k=y,E=(0,c.Z)(k,a,s,!1,null,null,null),x=E.exports,T=e(2809),N=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("section",[e("h1",[t._v("👍 Compre ou Venda 👎")]),e("ProdutosBuscar"),e("ProdutosLista")],1)},A=[],Z=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("form",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.busca,expression:"busca"}],attrs:{name:"busca",id:"busca",type:"text",placeholder:"Buscar..."},domProps:{value:t.busca},on:{input:function(o){o.target.composing||(t.busca=o.target.value)}}}),e("input",{attrs:{type:"submit",id:"lupa",value:"Buscar"},on:{click:function(o){return o.preventDefault(),t.buscarProdutos.apply(null,arguments)}}})])},D=[],O={data(){return{busca:""}},methods:{buscarProdutos(){this.$router.push({query:{q:this.busca}})}}},S=O,I=(0,c.Z)(S,Z,D,!1,null,"f77de65a",null),L=I.exports,R=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("section",{staticClass:"produtos-container"},[e("transition",{attrs:{mode:"out-in"}},[t.produtos&&t.produtos.length?e("div",{key:"produtos",staticClass:"produtos"},[t._l(t.produtos,(function(o,r){return e("div",{key:r,staticClass:"produto"},[e("router-link",{attrs:{to:{name:"produto",params:{id:o.id}}}},[o.fotos?e("img",{attrs:{src:o.fotos[0].src,alt:o.fotos[0].titulo}}):t._e(),e("p",{staticClass:"preco"},[t._v(t._s(t._f("numeroPreco")(o.preco)))]),e("h2",{staticClass:"titulo"},[t._v(t._s(o.nome))]),e("p",[t._v(t._s(o.descricao))])])],1)})),e("ProdutosPaginar",{attrs:{produtosTotal:t.produtosTotal,produtosPorPagina:t.produtosPorPagina}})],2):t.produtos&&0===t.produtos.length?e("div",{key:"sem-resultados"},[e("p",{staticClass:"sem-resultados"},[t._v(" Busca sem resultados. Tente buscar outro termo. ")])]):e("PaginaCarregando",{key:"carregando"})],1)],1)},F=[],V=function(){var t=this,o=t.$createElement,e=t._self._c||o;return t.paginasTotal>1?e("ul",t._l(t.paginas,(function(o){return e("li",{key:o},[e("router-link",{attrs:{to:{query:t.query(o)}}},[t._v(t._s(o))])],1)})),0):t._e()},j=[],z={props:{produtosPorPagina:{type:Number,default:1},produtosTotal:{type:Number,default:1}},methods:{query(t){return{...this.$route.query,_page:t}}},computed:{paginas(){const t=Number(this.$route.query._page),o=9,e=Math.ceil(o/2),r=this.paginasTotal,a=[];for(let s=1;s<=r;s++)a.push(s);return a.splice(0,t-e),a.splice(o,r),a},paginasTotal(){const t=this.produtosTotal/this.produtosPorPagina;return t!==1/0?Math.ceil(t):0}}},q=z,B=(0,c.Z)(q,V,j,!1,null,"ca785e96",null),H=B.exports;function M(t){let o="";for(let e in t)o+=`&${e}=${t[e]}`;return o}function G(t){const o={};for(let e=0;e<t.fields.length;e++){const r=[t.fields[e]];o[r]={get(){return this.$store.state[t.base][r]},set(o){this.$store.commit(t.mutation,{[r]:o})}}}return o}var J={name:"ProdutosLista",components:{ProdutosPaginar:H},data(){return{produtos:null,produtosPorPagina:9,produtosTotal:0}},computed:{url(){const t=M(this.$route.query);return`/produto?_limit=${this.produtosPorPagina}${t}`}},methods:{getProdutos(){this.produtos=null,w.get(this.url).then((t=>{this.produtosTotal=Number(t.headers["x-total-count"]),this.produtos=t.data}))}},watch:{url(){this.getProdutos()}},created(){this.getProdutos()}},K=J,Q=(0,c.Z)(K,R,F,!1,null,"ba099c34",null),W=Q.exports,X={name:"homeView",components:{ProdutosBuscar:L,ProdutosLista:W}},Y=X,tt=(0,c.Z)(Y,N,A,!1,null,"311306e6",null),ot=tt.exports,et=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("section",[t.produto?e("div",{staticClass:"produto"},[t.produto.fotos?e("ul",{staticClass:"fotos"},t._l(t.produto.fotos,(function(t,o){return e("li",{key:o},[e("img",{attrs:{src:t.src,alt:t.titulo}})])})),0):t._e(),e("div",{staticClass:"info"},[e("h1",[t._v(t._s(t.produto.nome))]),e("p",{staticClass:"preco"},[t._v(t._s(t._f("numeroPreco")(t.produto.preco)))]),e("p",{staticClass:"descricao"},[t._v(t._s(t.produto.descricao))]),"false"===t.produto.vendido?e("transition",{attrs:{mode:"out-in"}},[t.finalizar?e("FinalizarCompra",{attrs:{produto:t.produto}}):e("button",{staticClass:"btn",on:{click:function(o){t.finalizar=!0}}},[t._v(" Comprar ")])],1):e("button",{staticClass:"btn btn-disabled",attrs:{disabled:""}},[t._v(" Produto Vendido ")])],1)]):e("PaginaCarregando")],1)},rt=[],at=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("section",[e("ErroNotificacao",{attrs:{erros:t.erros}}),e("h2",[t._v("Endereço de Envio")]),e("UsuarioForm",[e("button",{staticClass:"btn",on:{click:function(o){return o.preventDefault(),t.finalizarCompra.apply(null,arguments)}}},[t._v(" Finalizar Compra ")])])],1)},st=[],nt=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("form",[t.mostrarDadosLogin?e("div",{staticClass:"usuario"},[e("label",{attrs:{for:"nome"}},[t._v("Nome")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.nome,expression:"nome"}],attrs:{id:"nome",name:"nome",type:"text"},domProps:{value:t.nome},on:{input:function(o){o.target.composing||(t.nome=o.target.value)}}}),e("label",{attrs:{for:"email"}},[t._v("Email")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{id:"email",name:"email",type:"email"},domProps:{value:t.email},on:{input:function(o){o.target.composing||(t.email=o.target.value)}}}),e("label",{attrs:{for:"senha"}},[t._v("Senha")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.senha,expression:"senha"}],attrs:{id:"senha",name:"senha",type:"password"},domProps:{value:t.senha},on:{input:function(o){o.target.composing||(t.senha=o.target.value)}}})]):t._e(),e("label",{attrs:{for:"cep"}},[t._v("Cep")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.cep,expression:"cep"}],attrs:{id:"cep",name:"cep",type:"text"},domProps:{value:t.cep},on:{keyup:t.preencherCep,input:function(o){o.target.composing||(t.cep=o.target.value)}}}),e("label",{attrs:{for:"rua"}},[t._v("Rua")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.rua,expression:"rua"}],attrs:{id:"rua",name:"rua",type:"text"},domProps:{value:t.rua},on:{input:function(o){o.target.composing||(t.rua=o.target.value)}}}),e("label",{attrs:{for:"numero"}},[t._v("Numero")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.numero,expression:"numero"}],attrs:{id:"numero",name:"numero",type:"text"},domProps:{value:t.numero},on:{input:function(o){o.target.composing||(t.numero=o.target.value)}}}),e("label",{attrs:{for:"bairro"}},[t._v("Bairro")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.bairro,expression:"bairro"}],attrs:{id:"bairro",name:"bairro",type:"text"},domProps:{value:t.bairro},on:{input:function(o){o.target.composing||(t.bairro=o.target.value)}}}),e("label",{attrs:{for:"cidade"}},[t._v("Cidade")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.cidade,expression:"cidade"}],attrs:{id:"cidade",name:"cidade",type:"text"},domProps:{value:t.cidade},on:{input:function(o){o.target.composing||(t.cidade=o.target.value)}}}),e("label",{attrs:{for:"estado"}},[t._v("Estado")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.estado,expression:"estado"}],attrs:{id:"estado",name:"estado",type:"text"},domProps:{value:t.estado},on:{input:function(o){o.target.composing||(t.estado=o.target.value)}}}),e("div",{staticClass:"button"},[t._t("default")],2)])},it=[],ut={computed:{...G({fields:["nome","email","senha","rua","cep","numero","bairro","cidade","estado"],base:"usuario",mutation:"UPDATE_USUARIO"}),mostrarDadosLogin(){return!this.$store.state.login||"usuario-editar"===this.$route.name}},methods:{preencherCep(){const t=this.cep.replace(/\D/g,"");8===t.length&&U(t).then((t=>{this.rua=t.data.logradouro,this.bairro=t.data.bairro,this.estado=t.data.uf,this.cidade=t.data.localidade}))}}},lt=ut,ct=(0,c.Z)(lt,nt,it,!1,null,"1e996f56",null),dt=ct.exports,pt=e(4665),mt=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("transition",[t.erros.length>0?e("ul",{staticClass:"erro"},t._l(t.erros,(function(o,r){return e("li",{key:r,domProps:{innerHTML:t._s(o)}})})),0):t._e()])},ht=[],vt={name:"ErroNotificacao",props:{erros:Array}},ft=vt,gt=(0,c.Z)(ft,mt,ht,!1,null,"5126af35",null),_t=gt.exports,Pt={name:"FinalizarCompra",data(){return{erros:[]}},components:{UsuarioForm:dt,ErroNotificacao:_t},props:["produto"],computed:{...(0,pt.rn)(["usuario"]),compra(){return{comprador_id:this.usuario.email,vendedor_id:this.produto.usuario_id,produto:this.produto,endereco:{cep:this.usuario.cep,rua:this.usuario.rua,numero:this.usuario.numero,bairro:this.usuario.bairro,cidade:this.usuario.cidade,estado:this.usuario.estado}}}},methods:{criarTransacao(){return w.post("/transacao",this.compra).then((()=>{this.$router.push({name:"compras"})}))},async criarUsuario(){try{await this.$store.dispatch("criarUsuario",this.$store.state.usuario),await this.$store.dispatch("logarUsuario",this.$store.state.usuario),await this.$store.dispatch("getUsuario"),await this.criarTransacao()}catch(t){this.erros.push(t.response.data.message)}},finalizarCompra(){this.erros=[],this.$store.state.login?this.criarTransacao():this.criarUsuario()}}},bt=Pt,Ct=(0,c.Z)(bt,at,st,!1,null,"6f89f64b",null),$t=Ct.exports,wt={name:"ProdutosView",props:["id"],components:{FinalizarCompra:$t},data(){return{produto:null,finalizar:!1}},methods:{getProduto(){w.get(`/produto/${this.id}`).then((t=>{this.produto=t.data}))}},created(){this.getProduto()}},Ut=wt,yt=(0,c.Z)(Ut,et,rt,!1,null,"3c435bc8",null),kt=yt.exports,Et=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("section",{staticClass:"login"},[e("h1",[t._v("Login")]),e("form",[e("label",{attrs:{for:"email"}},[t._v("Email")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.login.email,expression:"login.email"}],attrs:{type:"email",name:"email",id:"email"},domProps:{value:t.login.email},on:{input:function(o){o.target.composing||t.$set(t.login,"email",o.target.value)}}}),e("label",{attrs:{for:"senha"}},[t._v("Senha")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.login.senha,expression:"login.senha"}],attrs:{type:"password",name:"senha",id:"senha"},domProps:{value:t.login.senha},on:{input:function(o){o.target.composing||t.$set(t.login,"senha",o.target.value)}}}),e("button",{staticClass:"btn",on:{click:function(o){return o.preventDefault(),t.logar.apply(null,arguments)}}},[t._v("Logar")]),e("ErroNotificacao",{attrs:{erros:t.erros}})],1),t._m(0),e("LoginCriar")],1)},xt=[function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("p",{staticClass:"perdeu"},[e("a",{attrs:{href:"http://ranekapilocal.local/wp-login.php?action=lostpassword",target:"_blank"}},[t._v("Perdeu a senha? Clique aqui.")])])}],Tt=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("section",[e("h2",[t._v("Crie a Sua Conta")]),e("ErroNotificacao",{attrs:{erros:t.erros}}),e("transition",{attrs:{mode:"out-in"}},[t.criar?e("UsuarioForm",[e("button",{staticClass:"btn btn-form",on:{click:function(o){return o.preventDefault(),t.criarUsuario.apply(null,arguments)}}},[t._v(" Criar Usuário ")])]):e("button",{staticClass:"btn",on:{click:function(o){t.criar=!0}}},[t._v(" Criar Conta ")])],1)],1)},Nt=[],At={name:"LoginCriar",components:{UsuarioForm:dt,ErroNotificacao:_t},data(){return{criar:!1,erros:[]}},methods:{async criarUsuario(){this.erros=[];try{await this.$store.dispatch("criarUsuario",this.$store.state.usuario),await this.$store.dispatch("logarUsuario",this.$store.state.usuario),await this.$store.dispatch("getUsuario"),this.$router.push({name:"usuario"})}catch(t){this.erros.push(t.response.data.message)}}}},Zt=At,Dt=(0,c.Z)(Zt,Tt,Nt,!1,null,"87885934",null),Ot=Dt.exports,St={name:"LoginView",components:{LoginCriar:Ot,ErroNotificacao:_t},data(){return{login:{email:"",senha:""},erros:[]}},methods:{logar(){this.erros=[],this.$store.dispatch("logarUsuario",this.login).then((t=>{this.$store.dispatch("getUsuario",t),this.$router.push({name:"usuario"})})).catch((t=>{this.erros.push(t.response.data.message)}))}}},It=St,Lt=(0,c.Z)(It,Et,xt,!1,null,"787b7396",null),Rt=Lt.exports,Ft=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("section",{staticClass:"usuario"},[e("nav",{staticClass:"sidenav"},[e("ul",[e("li",[e("router-link",{attrs:{to:{name:"usuario"}}},[t._v("Produtos")])],1),e("li",[e("router-link",{attrs:{to:{name:"compras"}}},[t._v("Compras")])],1),e("li",[e("router-link",{attrs:{to:{name:"vendas"}}},[t._v("Vendas")])],1),e("li",[e("router-link",{attrs:{to:{name:"usuario-editar"}}},[t._v("Editar Usuário")])],1),e("li",[e("button",{on:{click:t.deslogar}},[t._v("Deslogar")])])])]),e("transition",{attrs:{mode:"out-in"}},[e("router-view")],1)],1)},Vt=[],jt={name:"UsuarioView",methods:{deslogar(){this.$store.dispatch("deslogarUsuario"),this.$router.push("/login")}}},zt=jt,qt=(0,c.Z)(zt,Ft,Vt,!1,null,"3bbe4fd2",null),Bt=qt.exports,Ht=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("section",[e("h2",[t._v("Adicionar Produto")]),e("ProdutoAdicionar"),e("h2",[t._v("Seus Produtos")]),t.usuario_produtos?e("transition-group",{attrs:{name:"list",tag:"ul"}},t._l(t.usuario_produtos,(function(o,r){return e("li",{key:r},[e("ProdutoItem",{attrs:{produto:o}},[e("p",[t._v(t._s(o.descricao))]),e("button",{staticClass:"deletar",on:{click:function(e){return t.deletarProduto(o.id)}}},[t._v("Deletar")])])],1)})),0):t._e()],1)},Mt=[],Gt=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("form",{staticClass:"adicionar-produto"},[e("label",{attrs:{for:"nome"}},[t._v("Nome")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.produto.nome,expression:"produto.nome"}],attrs:{id:"nome",name:"nome",type:"text"},domProps:{value:t.produto.nome},on:{input:function(o){o.target.composing||t.$set(t.produto,"nome",o.target.value)}}}),e("label",{attrs:{for:"preco"}},[t._v("Preço (R$)")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.produto.preco,expression:"produto.preco"}],attrs:{id:"preco",name:"preco",type:"number"},domProps:{value:t.produto.preco},on:{input:function(o){o.target.composing||t.$set(t.produto,"preco",o.target.value)}}}),e("label",{attrs:{for:"fotos"}},[t._v("Fotos")]),e("input",{ref:"fotos",attrs:{id:"fotos",name:"fotos",type:"file",multiple:""}}),e("label",{attrs:{for:"preco"}},[t._v("Descrição")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.produto.descricao,expression:"produto.descricao"}],attrs:{id:"preco",name:"preco"},domProps:{value:t.produto.descricao},on:{input:function(o){o.target.composing||t.$set(t.produto,"descricao",o.target.value)}}}),e("input",{staticClass:"btn",attrs:{type:"button",value:"Adicionar Produto"},on:{click:function(o){return o.preventDefault(),t.adicionarProduto.apply(null,arguments)}}})])},Jt=[],Kt={name:"ProdutoAdicionar",data(){return{produto:{nome:"",preco:"",descricao:"",fotos:null,vendido:"false"}}},methods:{formatarProduto(){const t=new FormData,o=this.$refs.fotos.files;for(let e=0;e<o.length;e++)t.append(o[e].name,o[e]);return t.append("nome",this.produto.nome),t.append("preco",this.produto.preco),t.append("descricao",this.produto.descricao),t.append("vendido",this.produto.vendido),t.append("usuario_id",this.$store.state.usuario.id),t},async adicionarProduto(t){const o=this.formatarProduto(),e=t.currentTarget;e.value="Adicionando...",e.setAttribute("disabled",""),await w.post("/produto",o),await this.$store.dispatch("getUsuarioProdutos"),e.removeAttribute("disabled"),e.value="Adicionar Produto"}}},Qt=Kt,Wt=(0,c.Z)(Qt,Gt,Jt,!1,null,"873e58a0",null),Xt=Wt.exports,Yt=function(){var t=this,o=t.$createElement,e=t._self._c||o;return t.produto?e("div",{staticClass:"produto"},[e("router-link",{staticClass:"produto-img",attrs:{to:{name:"produto",params:{id:t.produto.id}}}},[t.produto.fotos?e("img",{attrs:{src:t.produto.fotos[0].src,alt:t.produto.fotos[0].titulo}}):t._e(),e("p",[t._v("Ver Produto")])]),e("div",{staticClass:"info"},[e("p",{staticClass:"preco"},[t._v(t._s(t._f("numeroPreco")(t.produto.preco)))]),e("h2",{staticClass:"titulo"},[t._v(t._s(t.produto.nome))]),t._t("default")],2)],1):t._e()},to=[],oo={name:"ProdutoItem",props:["produto"]},eo=oo,ro=(0,c.Z)(eo,Yt,to,!1,null,"1ad3ee94",null),ao=ro.exports,so={name:"UsuarioProdutos",components:{ProdutoAdicionar:Xt,ProdutoItem:ao},computed:{...(0,pt.rn)(["login","usuario","usuario_produtos"])},methods:{...(0,pt.nv)(["getUsuarioProdutos"]),deletarProduto(t){const o=window.confirm("Deseja remover este produto?");o&&w["delete"](`/produto/${t}`).then((()=>{this.getUsuarioProdutos()})).catch((t=>{console.log(t.reponse)}))}},watch:{login(){this.getUsuarioProdutos()}},created(){this.login&&this.getUsuarioProdutos()}},no=so,io=(0,c.Z)(no,Ht,Mt,!1,null,"4f61000e",null),uo=io.exports,lo=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("section",[t.vendas?e("div",[e("h2",[t._v("Vendas")]),t._l(t.vendas,(function(o,r){return e("div",{key:r,staticClass:"produtos-wrapper"},[o.produto?e("ProdutoItem",{attrs:{produto:o.produto}},[e("p",{staticClass:"vendedor"},[e("span",[t._v("Comprador:")]),t._v(" "+t._s(o.comprador_id)+" ")])]):t._e(),e("div",{staticClass:"entrega"},[e("h3",[t._v("Entrega:")]),o.endereco?e("ul",t._l(o.endereco,(function(o,r){return e("li",{key:r},[t._v(" "+t._s(r)+": "+t._s(o)+" ")])})),0):t._e()])],1)}))],2):e("PaginaCarregando")],1)},co=[],po=function(){var t=this,o=t.$createElement;t._self._c;return t._m(0)},mo=[function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"loading"},[e("span"),e("span"),e("span"),e("span")])}],ho={name:"PaginaCarregando"},vo=ho,fo=(0,c.Z)(vo,po,mo,!1,null,"ee2a55d0",null),go=fo.exports,_o={components:{ProdutoItem:ao,PaginaCarregando:go},data(){return{vendas:null}},computed:{...(0,pt.rn)(["usuario","login"])},methods:{getVendas(){w.get("/transacao?tipo=vendedor_id").then((t=>{this.vendas=t.data}))}},watch:{login(){this.getVendas()}},created(){this.login&&this.getVendas()}},Po=_o,bo=(0,c.Z)(Po,lo,co,!1,null,"fe44fbde",null),Co=bo.exports,$o=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("section",[t.compras?e("div",[e("h2",[t._v("Compras")]),t._l(t.compras,(function(o,r){return e("div",{key:r,staticClass:"produtos-wrapper"},[o.produto?e("ProdutoItem",{attrs:{produto:o.produto}},[e("p",{staticClass:"vendedor"},[e("span",[t._v("Vendedor:")]),t._v(" "+t._s(o.vendedor_id)+" ")])]):t._e()],1)}))],2):e("PaginaCarregando")],1)},wo=[],Uo={components:{ProdutoItem:ao,PaginaCarregando:go},data(){return{compras:null}},computed:{...(0,pt.rn)(["usuario","login"])},methods:{getCompras(){w.get("/transacao?tipo=comprador_id").then((t=>{this.compras=t.data}))}},watch:{login(){this.getCompras()}},created(){this.login&&this.getCompras()}},yo=Uo,ko=(0,c.Z)(yo,$o,wo,!1,null,"ed9f571a",null),Eo=ko.exports,xo=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("section",[e("UsuarioForm",[e("button",{staticClass:"btn",on:{click:function(o){return o.preventDefault(),t.atualizarUsuario.apply(null,arguments)}}},[t._v(" Atualizar Usuário ")])]),e("ErroNotificacao",{attrs:{erros:t.erros}})],1)},To=[],No={name:"UsuarioEditar",components:{UsuarioForm:dt,ErroNotificacao:_t},data(){return{erros:[]}},methods:{atualizarUsuario(){this.erros=[],w.put("/usuario",this.$store.state.usuario).then((()=>{this.$store.dispatch("getUsuario"),this.$router.push({name:"usuario"})})).catch((t=>{this.erros.push(t.response.data.message)}))}}},Ao=No,Zo=(0,c.Z)(Ao,xo,To,!1,null,null,null),Do=Zo.exports;r.Z.use(T.Z);const Oo=new T.Z({mode:"history",base:"/",routes:[{path:"/",name:"home",component:ot},{path:"/produto/:id",name:"produto",component:kt,props:!0},{path:"/login",name:"login",component:Rt},{path:"/usuario",component:Bt,meta:{login:!0},children:[{path:"",name:"usuario",component:uo},{path:"compras",name:"compras",component:Eo},{path:"vendas",name:"vendas",component:Co},{path:"editar",name:"usuario-editar",component:Do}]}],scrollBehavior(){return window.scrollTo({top:0,behavior:"smooth"})}});Oo.beforeEach(((t,o,e)=>{t.matched.some((t=>t.meta.login))?window.localStorage.token?e():e("/login"):e()}));var So=Oo;r.Z.use(pt.ZP);var Io=new pt.ZP.Store({strict:!0,state:{login:!1,usuario:{id:"",nome:"",email:"",senha:"",cep:"",rua:"",numero:"",bairro:"",cidade:"",estado:""},usuario_produtos:null},mutations:{UPDATE_LOGIN(t,o){t.login=o},UPDATE_USUARIO(t,o){t.usuario=Object.assign(t.usuario,o)},UPDATE_USUARIO_PRODUTOS(t,o){t.usuario_produtos=o},ADD_USUARIO_PRODUTOS(t,o){t.usuario_produtos.unshit(o)}},actions:{getUsuarioProdutos(t){return w.get(`/produto?usuario_id=${t.state.usuario.id}`).then((o=>{t.commit("UPDATE_USUARIO_PRODUTOS",o.data)}))},getUsuario(t){return w.get("/usuario").then((o=>{t.commit("UPDATE_USUARIO",o.data),t.commit("UPDATE_LOGIN",!0)}))},criarUsuario(t,o){return t.commit("UPDATE_USUARIO",{id:o.email}),w.post("/usuario",o)},logarUsuario(t,o){return w.login({username:o.email,password:o.senha}).then((t=>{window.localStorage.token=`Bearer ${t.data.token}`}))},deslogarUsuario(t){t.commit("UPDATE_USUARIO",{id:"",nome:"",email:"",senha:"",cep:"",rua:"",numero:"",bairro:"",cidade:"",estado:""}),window.localStorage.removeItem("token"),t.commit("UPDATE_LOGIN",!1)}}});r.Z.config.productionTip=!1,r.Z.component("PaginaCarregando",go),r.Z.component("ErroNotificacao",_t),r.Z.filter("numeroPreco",(t=>(t=Number(t),isNaN(t)?"":t.toLocaleString("pt-BR",{style:"currency",currency:"BRL"})))),new r.Z({router:So,store:Io,render:t=>t(x)}).$mount("#app")},8699:function(t,o,e){t.exports=e.p+"img/ranek.31a789c6.svg"}},o={};function e(r){var a=o[r];if(void 0!==a)return a.exports;var s=o[r]={exports:{}};return t[r](s,s.exports,e),s.exports}e.m=t,function(){var t=[];e.O=function(o,r,a,s){if(!r){var n=1/0;for(c=0;c<t.length;c++){r=t[c][0],a=t[c][1],s=t[c][2];for(var i=!0,u=0;u<r.length;u++)(!1&s||n>=s)&&Object.keys(e.O).every((function(t){return e.O[t](r[u])}))?r.splice(u--,1):(i=!1,s<n&&(n=s));if(i){t.splice(c--,1);var l=a();void 0!==l&&(o=l)}}return o}s=s||0;for(var c=t.length;c>0&&t[c-1][2]>s;c--)t[c]=t[c-1];t[c]=[r,a,s]}}(),function(){e.n=function(t){var o=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(o,{a:o}),o}}(),function(){e.d=function(t,o){for(var r in o)e.o(o,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:o[r]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)}}(),function(){e.p="/"}(),function(){var t={143:0};e.O.j=function(o){return 0===t[o]};var o=function(o,r){var a,s,n=r[0],i=r[1],u=r[2],l=0;if(n.some((function(o){return 0!==t[o]}))){for(a in i)e.o(i,a)&&(e.m[a]=i[a]);if(u)var c=u(e)}for(o&&o(r);l<n.length;l++)s=n[l],e.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return e.O(c)},r=self["webpackChunkranek"]=self["webpackChunkranek"]||[];r.forEach(o.bind(null,0)),r.push=o.bind(null,r.push.bind(r))}();var r=e.O(void 0,[998],(function(){return e(6654)}));r=e.O(r)})();
//# sourceMappingURL=app.708611c1.js.map