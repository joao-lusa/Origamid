(function(){"use strict";var t={6654:function(t,o,e){e(6992),e(8674),e(9601),e(7727),e(7327),e(1539),e(9653);var r=e(8935),a=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{attrs:{id:"app"}},[e("TheHeader"),e("main",{attrs:{id:"main"}},[e("transition",{attrs:{mode:"out-in"}},[e("router-view")],1)],1),e("TheFooter")],1)},n=[],s=function(){var t=this,o=t.$createElement,r=t._self._c||o;return r("header",[r("nav",[r("router-link",{staticClass:"logo",attrs:{to:"/"}},[r("img",{attrs:{src:e(8699),alt:"Ranek"}})]),t.$store.state.login?r("router-link",{staticClass:"btn",attrs:{to:"/usuario"}},[t._v(t._s(t.nome))]):r("router-link",{staticClass:"btn",attrs:{to:"/login"}},[t._v("Vender / Login")])],1)])},i=[],u=(e(4916),e(5306),{name:"TheHeader",computed:{nome:function(){return this.$store.state.usuario.nome.replace(/ .*/,"")}}}),c=u,l=e(1001),d=(0,l.Z)(c,s,i,!1,null,"fe37ce5a",null),p=d.exports,m=function(){var t=this,o=t.$createElement;t._self._c;return t._m(0)},f=[function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("footer",[e("p",[t._v("Ranek. Alguns direitos reservados.")])])}],v={name:"TheFooter"},h=v,g=(0,l.Z)(h,m,f,!1,null,"b74681a4",null),_=g.exports,b=e(6166),P=e.n(b),C="http://apiranek.kinghost.net/wp-json",w=P().create({baseURL:C+"/api"});w.interceptors.request.use((function(t){var o=window.localStorage.token;return o&&(t.headers.Authorization=o),t}),(function(t){return Promise.reject(t)}));var U={get:function(t){return w.get(t)},post:function(t,o){return w.post(t,o)},put:function(t,o){return w.put(t,o)},delete:function(t){return w.delete(t)},login:function(t){return P().post(C+"/jwt-auth/v1/token",t)},validateToken:function(){return w.post(C+"/jwt-auth/v1/token/validate")}};function x(t){return P().get("https://viacep.com.br/ws/".concat(t,"/json/"))}var $={components:{TheHeader:p,TheFooter:_},created:function(){var t=this;window.localStorage.token&&U.validateToken().then((function(o){t.$store.dispatch("getUsuario",o)})).catch((function(t){window.localStorage.removeItem("token",t)}))}},k=$,y=(0,l.Z)(k,a,n,!1,null,null,null),E=y.exports,Z=e(2809),T=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("section",[e("h1",[t._v("👍 Compre ou Venda 👎")]),e("ProdutosBuscar"),e("ProdutosLista")],1)},N=[],A=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("form",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.busca,expression:"busca"}],attrs:{name:"busca",id:"busca",type:"text",placeholder:"Buscar..."},domProps:{value:t.busca},on:{input:function(o){o.target.composing||(t.busca=o.target.value)}}}),e("input",{attrs:{type:"submit",id:"lupa",value:"Buscar"},on:{click:function(o){return o.preventDefault(),t.buscarProdutos.apply(null,arguments)}}})])},D=[],O={data:function(){return{busca:""}},methods:{buscarProdutos:function(){this.$router.push({query:{q:this.busca}})}}},S=O,I=(0,l.Z)(S,A,D,!1,null,"f77de65a",null),L=I.exports,R=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("section",{staticClass:"produtos-container"},[e("transition",{attrs:{mode:"out-in"}},[t.produtos&&t.produtos.length?e("div",{key:"produtos",staticClass:"produtos"},[t._l(t.produtos,(function(o,r){return e("div",{key:r,staticClass:"produto"},[e("router-link",{attrs:{to:{name:"produto",params:{id:o.id}}}},[o.fotos?e("img",{attrs:{src:o.fotos[0].src,alt:o.fotos[0].titulo}}):t._e(),e("p",{staticClass:"preco"},[t._v(t._s(t._f("numeroPreco")(o.preco)))]),e("h2",{staticClass:"titulo"},[t._v(t._s(o.nome))]),e("p",[t._v(t._s(o.descricao))])])],1)})),e("ProdutosPaginar",{attrs:{produtosTotal:t.produtosTotal,produtosPorPagina:t.produtosPorPagina}})],2):t.produtos&&0===t.produtos.length?e("div",{key:"sem-resultados"},[e("p",{staticClass:"sem-resultados"},[t._v(" Busca sem resultados. Tente buscar outro termo. ")])]):e("PaginaCarregando",{key:"carregando"})],1)],1)},F=[],V=(e(2222),function(){var t=this,o=t.$createElement,e=t._self._c||o;return t.paginasTotal>1?e("ul",t._l(t.paginas,(function(o){return e("li",{key:o},[e("router-link",{attrs:{to:{query:t.query(o)}}},[t._v(t._s(o))])],1)})),0):t._e()}),j=[],z=e(4367),q=(e(561),{props:{produtosPorPagina:{type:Number,default:1},produtosTotal:{type:Number,default:1}},methods:{query:function(t){return(0,z.Z)((0,z.Z)({},this.$route.query),{},{_page:t})}},computed:{paginas:function(){for(var t=Number(this.$route.query._page),o=9,e=Math.ceil(o/2),r=this.paginasTotal,a=[],n=1;n<=r;n++)a.push(n);return a.splice(0,t-e),a.splice(o,r),a},paginasTotal:function(){var t=this.produtosTotal/this.produtosPorPagina;return t!==1/0?Math.ceil(t):0}}}),B=q,H=(0,l.Z)(B,V,j,!1,null,"ca785e96",null),M=H.exports,G=e(3796);function J(t){var o="";for(var e in t)o+="&".concat(e,"=").concat(t[e]);return o}function K(t){for(var o={},e=function(e){var r=[t.fields[e]];o[r]={get:function(){return this.$store.state[t.base][r]},set:function(o){this.$store.commit(t.mutation,(0,G.Z)({},r,o))}}},r=0;r<t.fields.length;r++)e(r);return o}var Q={name:"ProdutosLista",components:{ProdutosPaginar:M},data:function(){return{produtos:null,produtosPorPagina:9,produtosTotal:0}},computed:{url:function(){var t=J(this.$route.query);return"/produto?_limit=".concat(this.produtosPorPagina).concat(t)}},methods:{getProdutos:function(){var t=this;this.produtos=null,U.get(this.url).then((function(o){t.produtosTotal=Number(o.headers["x-total-count"]),t.produtos=o.data}))}},watch:{url:function(){this.getProdutos()}},created:function(){this.getProdutos()}},W=Q,X=(0,l.Z)(W,R,F,!1,null,"ba099c34",null),Y=X.exports,tt={name:"homeView",components:{ProdutosBuscar:L,ProdutosLista:Y}},ot=tt,et=(0,l.Z)(ot,T,N,!1,null,"311306e6",null),rt=et.exports,at=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("section",[t.produto?e("div",{staticClass:"produto"},[t.produto.fotos?e("ul",{staticClass:"fotos"},t._l(t.produto.fotos,(function(t,o){return e("li",{key:o},[e("img",{attrs:{src:t.src,alt:t.titulo}})])})),0):t._e(),e("div",{staticClass:"info"},[e("h1",[t._v(t._s(t.produto.nome))]),e("p",{staticClass:"preco"},[t._v(t._s(t._f("numeroPreco")(t.produto.preco)))]),e("p",{staticClass:"descricao"},[t._v(t._s(t.produto.descricao))]),"false"===t.produto.vendido?e("transition",{attrs:{mode:"out-in"}},[t.finalizar?e("FinalizarCompra",{attrs:{produto:t.produto}}):e("button",{staticClass:"btn",on:{click:function(o){t.finalizar=!0}}},[t._v(" Comprar ")])],1):e("button",{staticClass:"btn btn-disabled",attrs:{disabled:""}},[t._v(" Produto Vendido ")])],1)]):e("PaginaCarregando")],1)},nt=[],st=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("section",[e("ErroNotificacao",{attrs:{erros:t.erros}}),e("h2",[t._v("Endereço de Envio")]),e("UsuarioForm",[e("button",{staticClass:"btn",on:{click:function(o){return o.preventDefault(),t.finalizarCompra.apply(null,arguments)}}},[t._v(" Finalizar Compra ")])])],1)},it=[],ut=e(7906),ct=e(6198),lt=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("form",[t.mostrarDadosLogin?e("div",{staticClass:"usuario"},[e("label",{attrs:{for:"nome"}},[t._v("Nome")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.nome,expression:"nome"}],attrs:{id:"nome",name:"nome",type:"text"},domProps:{value:t.nome},on:{input:function(o){o.target.composing||(t.nome=o.target.value)}}}),e("label",{attrs:{for:"email"}},[t._v("Email")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{id:"email",name:"email",type:"email"},domProps:{value:t.email},on:{input:function(o){o.target.composing||(t.email=o.target.value)}}}),e("label",{attrs:{for:"senha"}},[t._v("Senha")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.senha,expression:"senha"}],attrs:{id:"senha",name:"senha",type:"password"},domProps:{value:t.senha},on:{input:function(o){o.target.composing||(t.senha=o.target.value)}}})]):t._e(),e("label",{attrs:{for:"cep"}},[t._v("Cep")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.cep,expression:"cep"}],attrs:{id:"cep",name:"cep",type:"text"},domProps:{value:t.cep},on:{keyup:t.preencherCep,input:function(o){o.target.composing||(t.cep=o.target.value)}}}),e("label",{attrs:{for:"rua"}},[t._v("Rua")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.rua,expression:"rua"}],attrs:{id:"rua",name:"rua",type:"text"},domProps:{value:t.rua},on:{input:function(o){o.target.composing||(t.rua=o.target.value)}}}),e("label",{attrs:{for:"numero"}},[t._v("Numero")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.numero,expression:"numero"}],attrs:{id:"numero",name:"numero",type:"text"},domProps:{value:t.numero},on:{input:function(o){o.target.composing||(t.numero=o.target.value)}}}),e("label",{attrs:{for:"bairro"}},[t._v("Bairro")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.bairro,expression:"bairro"}],attrs:{id:"bairro",name:"bairro",type:"text"},domProps:{value:t.bairro},on:{input:function(o){o.target.composing||(t.bairro=o.target.value)}}}),e("label",{attrs:{for:"cidade"}},[t._v("Cidade")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.cidade,expression:"cidade"}],attrs:{id:"cidade",name:"cidade",type:"text"},domProps:{value:t.cidade},on:{input:function(o){o.target.composing||(t.cidade=o.target.value)}}}),e("label",{attrs:{for:"estado"}},[t._v("Estado")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.estado,expression:"estado"}],attrs:{id:"estado",name:"estado",type:"text"},domProps:{value:t.estado},on:{input:function(o){o.target.composing||(t.estado=o.target.value)}}}),e("div",{staticClass:"button"},[t._t("default")],2)])},dt=[],pt=(e(8309),{computed:(0,z.Z)((0,z.Z)({},K({fields:["nome","email","senha","rua","cep","numero","bairro","cidade","estado"],base:"usuario",mutation:"UPDATE_USUARIO"})),{},{mostrarDadosLogin:function(){return!this.$store.state.login||"usuario-editar"===this.$route.name}}),methods:{preencherCep:function(){var t=this,o=this.cep.replace(/\D/g,"");8===o.length&&x(o).then((function(o){t.rua=o.data.logradouro,t.bairro=o.data.bairro,t.estado=o.data.uf,t.cidade=o.data.localidade}))}}}),mt=pt,ft=(0,l.Z)(mt,lt,dt,!1,null,"1e996f56",null),vt=ft.exports,ht=e(4665),gt=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("transition",[t.erros.length>0?e("ul",{staticClass:"erro"},t._l(t.erros,(function(o,r){return e("li",{key:r,domProps:{innerHTML:t._s(o)}})})),0):t._e()])},_t=[],bt={name:"ErroNotificacao",props:{erros:Array}},Pt=bt,Ct=(0,l.Z)(Pt,gt,_t,!1,null,"5126af35",null),wt=Ct.exports,Ut={name:"FinalizarCompra",data:function(){return{erros:[]}},components:{UsuarioForm:vt,ErroNotificacao:wt},props:["produto"],computed:(0,z.Z)((0,z.Z)({},(0,ht.rn)(["usuario"])),{},{compra:function(){return{comprador_id:this.usuario.email,vendedor_id:this.produto.usuario_id,produto:this.produto,endereco:{cep:this.usuario.cep,rua:this.usuario.rua,numero:this.usuario.numero,bairro:this.usuario.bairro,cidade:this.usuario.cidade,estado:this.usuario.estado}}}}),methods:{criarTransacao:function(){var t=this;return U.post("/transacao",this.compra).then((function(){t.$router.push({name:"compras"})}))},criarUsuario:function(){var t=this;return(0,ct.Z)((0,ut.Z)().mark((function o(){return(0,ut.Z)().wrap((function(o){while(1)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,t.$store.dispatch("criarUsuario",t.$store.state.usuario);case 3:return o.next=5,t.$store.dispatch("logarUsuario",t.$store.state.usuario);case 5:return o.next=7,t.$store.dispatch("getUsuario");case 7:return o.next=9,t.criarTransacao();case 9:o.next=14;break;case 11:o.prev=11,o.t0=o["catch"](0),t.erros.push(o.t0.response.data.message);case 14:case"end":return o.stop()}}),o,null,[[0,11]])})))()},finalizarCompra:function(){this.erros=[],this.$store.state.login?this.criarTransacao():this.criarUsuario()}}},xt=Ut,$t=(0,l.Z)(xt,st,it,!1,null,"6f89f64b",null),kt=$t.exports,yt={name:"ProdutosView",props:["id"],components:{FinalizarCompra:kt},data:function(){return{produto:null,finalizar:!1}},methods:{getProduto:function(){var t=this;U.get("/produto/".concat(this.id)).then((function(o){t.produto=o.data}))}},created:function(){this.getProduto()}},Et=yt,Zt=(0,l.Z)(Et,at,nt,!1,null,"3c435bc8",null),Tt=Zt.exports,Nt=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("section",{staticClass:"login"},[e("h1",[t._v("Login")]),e("form",[e("label",{attrs:{for:"email"}},[t._v("Email")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.login.email,expression:"login.email"}],attrs:{type:"email",name:"email",id:"email"},domProps:{value:t.login.email},on:{input:function(o){o.target.composing||t.$set(t.login,"email",o.target.value)}}}),e("label",{attrs:{for:"senha"}},[t._v("Senha")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.login.senha,expression:"login.senha"}],attrs:{type:"password",name:"senha",id:"senha"},domProps:{value:t.login.senha},on:{input:function(o){o.target.composing||t.$set(t.login,"senha",o.target.value)}}}),e("button",{staticClass:"btn",on:{click:function(o){return o.preventDefault(),t.logar.apply(null,arguments)}}},[t._v("Logar")]),e("ErroNotificacao",{attrs:{erros:t.erros}})],1),t._m(0),e("LoginCriar")],1)},At=[function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("p",{staticClass:"perdeu"},[e("a",{attrs:{href:"http://ranekapilocal.local/wp-login.php?action=lostpassword",target:"_blank"}},[t._v("Perdeu a senha? Clique aqui.")])])}],Dt=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("section",[e("h2",[t._v("Crie a Sua Conta")]),e("ErroNotificacao",{attrs:{erros:t.erros}}),e("transition",{attrs:{mode:"out-in"}},[t.criar?e("UsuarioForm",[e("button",{staticClass:"btn btn-form",on:{click:function(o){return o.preventDefault(),t.criarUsuario.apply(null,arguments)}}},[t._v(" Criar Usuário ")])]):e("button",{staticClass:"btn",on:{click:function(o){t.criar=!0}}},[t._v(" Criar Conta ")])],1)],1)},Ot=[],St={name:"LoginCriar",components:{UsuarioForm:vt,ErroNotificacao:wt},data:function(){return{criar:!1,erros:[]}},methods:{criarUsuario:function(){var t=this;return(0,ct.Z)((0,ut.Z)().mark((function o(){return(0,ut.Z)().wrap((function(o){while(1)switch(o.prev=o.next){case 0:return t.erros=[],o.prev=1,o.next=4,t.$store.dispatch("criarUsuario",t.$store.state.usuario);case 4:return o.next=6,t.$store.dispatch("logarUsuario",t.$store.state.usuario);case 6:return o.next=8,t.$store.dispatch("getUsuario");case 8:t.$router.push({name:"usuario"}),o.next=14;break;case 11:o.prev=11,o.t0=o["catch"](1),t.erros.push(o.t0.response.data.message);case 14:case"end":return o.stop()}}),o,null,[[1,11]])})))()}}},It=St,Lt=(0,l.Z)(It,Dt,Ot,!1,null,"87885934",null),Rt=Lt.exports,Ft={name:"LoginView",components:{LoginCriar:Rt,ErroNotificacao:wt},data:function(){return{login:{email:"",senha:""},erros:[]}},methods:{logar:function(){var t=this;this.erros=[],this.$store.dispatch("logarUsuario",this.login).then((function(o){t.$store.dispatch("getUsuario",o),t.$router.push({name:"usuario"})})).catch((function(o){t.erros.push(o.response.data.message)}))}}},Vt=Ft,jt=(0,l.Z)(Vt,Nt,At,!1,null,"787b7396",null),zt=jt.exports,qt=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("section",{staticClass:"usuario"},[e("nav",{staticClass:"sidenav"},[e("ul",[e("li",[e("router-link",{attrs:{to:{name:"usuario"}}},[t._v("Produtos")])],1),e("li",[e("router-link",{attrs:{to:{name:"compras"}}},[t._v("Compras")])],1),e("li",[e("router-link",{attrs:{to:{name:"vendas"}}},[t._v("Vendas")])],1),e("li",[e("router-link",{attrs:{to:{name:"usuario-editar"}}},[t._v("Editar Usuário")])],1),e("li",[e("button",{on:{click:t.deslogar}},[t._v("Deslogar")])])])]),e("transition",{attrs:{mode:"out-in"}},[e("router-view")],1)],1)},Bt=[],Ht={name:"UsuarioView",methods:{deslogar:function(){this.$store.dispatch("deslogarUsuario"),this.$router.push("/login")}}},Mt=Ht,Gt=(0,l.Z)(Mt,qt,Bt,!1,null,"3bbe4fd2",null),Jt=Gt.exports,Kt=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("section",[e("h2",[t._v("Adicionar Produto")]),e("ProdutoAdicionar"),e("h2",[t._v("Seus Produtos")]),t.usuario_produtos?e("transition-group",{attrs:{name:"list",tag:"ul"}},t._l(t.usuario_produtos,(function(o,r){return e("li",{key:r},[e("ProdutoItem",{attrs:{produto:o}},[e("p",[t._v(t._s(o.descricao))]),e("button",{staticClass:"deletar",on:{click:function(e){return t.deletarProduto(o.id)}}},[t._v("Deletar")])])],1)})),0):t._e()],1)},Qt=[],Wt=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("form",{staticClass:"adicionar-produto"},[e("label",{attrs:{for:"nome"}},[t._v("Nome")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.produto.nome,expression:"produto.nome"}],attrs:{id:"nome",name:"nome",type:"text"},domProps:{value:t.produto.nome},on:{input:function(o){o.target.composing||t.$set(t.produto,"nome",o.target.value)}}}),e("label",{attrs:{for:"preco"}},[t._v("Preço (R$)")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.produto.preco,expression:"produto.preco"}],attrs:{id:"preco",name:"preco",type:"number"},domProps:{value:t.produto.preco},on:{input:function(o){o.target.composing||t.$set(t.produto,"preco",o.target.value)}}}),e("label",{attrs:{for:"fotos"}},[t._v("Fotos")]),e("input",{ref:"fotos",attrs:{id:"fotos",name:"fotos",type:"file",multiple:""}}),e("label",{attrs:{for:"preco"}},[t._v("Descrição")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.produto.descricao,expression:"produto.descricao"}],attrs:{id:"preco",name:"preco"},domProps:{value:t.produto.descricao},on:{input:function(o){o.target.composing||t.$set(t.produto,"descricao",o.target.value)}}}),e("input",{staticClass:"btn",attrs:{type:"button",value:"Adicionar Produto"},on:{click:function(o){return o.preventDefault(),t.adicionarProduto.apply(null,arguments)}}})])},Xt=[],Yt={name:"ProdutoAdicionar",data:function(){return{produto:{nome:"",preco:"",descricao:"",fotos:null,vendido:"false"}}},methods:{formatarProduto:function(){for(var t=new FormData,o=this.$refs.fotos.files,e=0;e<o.length;e++)t.append(o[e].name,o[e]);return t.append("nome",this.produto.nome),t.append("preco",this.produto.preco),t.append("descricao",this.produto.descricao),t.append("vendido",this.produto.vendido),t.append("usuario_id",this.$store.state.usuario.id),t},adicionarProduto:function(t){var o=this;return(0,ct.Z)((0,ut.Z)().mark((function e(){var r,a;return(0,ut.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=o.formatarProduto(),a=t.currentTarget,a.value="Adicionando...",a.setAttribute("disabled",""),e.next=6,U.post("/produto",r);case 6:return e.next=8,o.$store.dispatch("getUsuarioProdutos");case 8:a.removeAttribute("disabled"),a.value="Adicionar Produto";case 10:case"end":return e.stop()}}),e)})))()}}},to=Yt,oo=(0,l.Z)(to,Wt,Xt,!1,null,"873e58a0",null),eo=oo.exports,ro=function(){var t=this,o=t.$createElement,e=t._self._c||o;return t.produto?e("div",{staticClass:"produto"},[e("router-link",{staticClass:"produto-img",attrs:{to:{name:"produto",params:{id:t.produto.id}}}},[t.produto.fotos?e("img",{attrs:{src:t.produto.fotos[0].src,alt:t.produto.fotos[0].titulo}}):t._e(),e("p",[t._v("Ver Produto")])]),e("div",{staticClass:"info"},[e("p",{staticClass:"preco"},[t._v(t._s(t._f("numeroPreco")(t.produto.preco)))]),e("h2",{staticClass:"titulo"},[t._v(t._s(t.produto.nome))]),t._t("default")],2)],1):t._e()},ao=[],no={name:"ProdutoItem",props:["produto"]},so=no,io=(0,l.Z)(so,ro,ao,!1,null,"1ad3ee94",null),uo=io.exports,co={name:"UsuarioProdutos",components:{ProdutoAdicionar:eo,ProdutoItem:uo},computed:(0,z.Z)({},(0,ht.rn)(["login","usuario","usuario_produtos"])),methods:(0,z.Z)((0,z.Z)({},(0,ht.nv)(["getUsuarioProdutos"])),{},{deletarProduto:function(t){var o=this,e=window.confirm("Deseja remover este produto?");e&&U["delete"]("/produto/".concat(t)).then((function(){o.getUsuarioProdutos()})).catch((function(t){console.log(t.reponse)}))}}),watch:{login:function(){this.getUsuarioProdutos()}},created:function(){this.login&&this.getUsuarioProdutos()}},lo=co,po=(0,l.Z)(lo,Kt,Qt,!1,null,"4f61000e",null),mo=po.exports,fo=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("section",[t.vendas?e("div",[e("h2",[t._v("Vendas")]),t._l(t.vendas,(function(o,r){return e("div",{key:r,staticClass:"produtos-wrapper"},[o.produto?e("ProdutoItem",{attrs:{produto:o.produto}},[e("p",{staticClass:"vendedor"},[e("span",[t._v("Comprador:")]),t._v(" "+t._s(o.comprador_id)+" ")])]):t._e(),e("div",{staticClass:"entrega"},[e("h3",[t._v("Entrega:")]),o.endereco?e("ul",t._l(o.endereco,(function(o,r){return e("li",{key:r},[t._v(" "+t._s(r)+": "+t._s(o)+" ")])})),0):t._e()])],1)}))],2):e("PaginaCarregando")],1)},vo=[],ho=function(){var t=this,o=t.$createElement;t._self._c;return t._m(0)},go=[function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"loading"},[e("span"),e("span"),e("span"),e("span")])}],_o={name:"PaginaCarregando"},bo=_o,Po=(0,l.Z)(bo,ho,go,!1,null,"ee2a55d0",null),Co=Po.exports,wo={components:{ProdutoItem:uo,PaginaCarregando:Co},data:function(){return{vendas:null}},computed:(0,z.Z)({},(0,ht.rn)(["usuario","login"])),methods:{getVendas:function(){var t=this;U.get("/transacao?tipo=vendedor_id").then((function(o){t.vendas=o.data}))}},watch:{login:function(){this.getVendas()}},created:function(){this.login&&this.getVendas()}},Uo=wo,xo=(0,l.Z)(Uo,fo,vo,!1,null,"fe44fbde",null),$o=xo.exports,ko=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("section",[t.compras?e("div",[e("h2",[t._v("Compras")]),t._l(t.compras,(function(o,r){return e("div",{key:r,staticClass:"produtos-wrapper"},[o.produto?e("ProdutoItem",{attrs:{produto:o.produto}},[e("p",{staticClass:"vendedor"},[e("span",[t._v("Vendedor:")]),t._v(" "+t._s(o.vendedor_id)+" ")])]):t._e()],1)}))],2):e("PaginaCarregando")],1)},yo=[],Eo={components:{ProdutoItem:uo,PaginaCarregando:Co},data:function(){return{compras:null}},computed:(0,z.Z)({},(0,ht.rn)(["usuario","login"])),methods:{getCompras:function(){var t=this;U.get("/transacao?tipo=comprador_id").then((function(o){t.compras=o.data}))}},watch:{login:function(){this.getCompras()}},created:function(){this.login&&this.getCompras()}},Zo=Eo,To=(0,l.Z)(Zo,ko,yo,!1,null,"ed9f571a",null),No=To.exports,Ao=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("section",[e("UsuarioForm",[e("button",{staticClass:"btn",on:{click:function(o){return o.preventDefault(),t.atualizarUsuario.apply(null,arguments)}}},[t._v(" Atualizar Usuário ")])]),e("ErroNotificacao",{attrs:{erros:t.erros}})],1)},Do=[],Oo={name:"UsuarioEditar",components:{UsuarioForm:vt,ErroNotificacao:wt},data:function(){return{erros:[]}},methods:{atualizarUsuario:function(){var t=this;this.erros=[],U.put("/usuario",this.$store.state.usuario).then((function(){t.$store.dispatch("getUsuario"),t.$router.push({name:"usuario"})})).catch((function(o){t.erros.push(o.response.data.message)}))}}},So=Oo,Io=(0,l.Z)(So,Ao,Do,!1,null,null,null),Lo=Io.exports;r.Z.use(Z.Z);var Ro=new Z.Z({mode:"history",base:"/",routes:[{path:"/",name:"home",component:rt},{path:"/produto/:id",name:"produto",component:Tt,props:!0},{path:"/login",name:"login",component:zt},{path:"/usuario",component:Jt,meta:{login:!0},children:[{path:"",name:"usuario",component:mo},{path:"compras",name:"compras",component:No},{path:"vendas",name:"vendas",component:$o},{path:"editar",name:"usuario-editar",component:Lo}]}],scrollBehavior:function(){return window.scrollTo({top:0,behavior:"smooth"})}});Ro.beforeEach((function(t,o,e){t.matched.some((function(t){return t.meta.login}))?window.localStorage.token?e():e("/login"):e()}));var Fo=Ro;r.Z.use(ht.ZP);var Vo=new ht.ZP.Store({strict:!0,state:{login:!1,usuario:{id:"",nome:"",email:"",senha:"",cep:"",rua:"",numero:"",bairro:"",cidade:"",estado:""},usuario_produtos:null},mutations:{UPDATE_LOGIN:function(t,o){t.login=o},UPDATE_USUARIO:function(t,o){t.usuario=Object.assign(t.usuario,o)},UPDATE_USUARIO_PRODUTOS:function(t,o){t.usuario_produtos=o},ADD_USUARIO_PRODUTOS:function(t,o){t.usuario_produtos.unshit(o)}},actions:{getUsuarioProdutos:function(t){return U.get("/produto?usuario_id=".concat(t.state.usuario.id)).then((function(o){t.commit("UPDATE_USUARIO_PRODUTOS",o.data)}))},getUsuario:function(t){return U.get("/usuario").then((function(o){t.commit("UPDATE_USUARIO",o.data),t.commit("UPDATE_LOGIN",!0)}))},criarUsuario:function(t,o){return t.commit("UPDATE_USUARIO",{id:o.email}),U.post("/usuario",o)},logarUsuario:function(t,o){return U.login({username:o.email,password:o.senha}).then((function(t){window.localStorage.token="Bearer ".concat(t.data.token)}))},deslogarUsuario:function(t){t.commit("UPDATE_USUARIO",{id:"",nome:"",email:"",senha:"",cep:"",rua:"",numero:"",bairro:"",cidade:"",estado:""}),window.localStorage.removeItem("token"),t.commit("UPDATE_LOGIN",!1)}}});r.Z.config.productionTip=!1,r.Z.component("PaginaCarregando",Co),r.Z.component("ErroNotificacao",wt),r.Z.filter("numeroPreco",(function(t){return t=Number(t),isNaN(t)?"":t.toLocaleString("pt-BR",{style:"currency",currency:"BRL"})})),new r.Z({router:Fo,store:Vo,render:function(t){return t(E)}}).$mount("#app")},8699:function(t,o,e){t.exports=e.p+"img/ranek.31a789c6.svg"}},o={};function e(r){var a=o[r];if(void 0!==a)return a.exports;var n=o[r]={exports:{}};return t[r](n,n.exports,e),n.exports}e.m=t,function(){var t=[];e.O=function(o,r,a,n){if(!r){var s=1/0;for(l=0;l<t.length;l++){r=t[l][0],a=t[l][1],n=t[l][2];for(var i=!0,u=0;u<r.length;u++)(!1&n||s>=n)&&Object.keys(e.O).every((function(t){return e.O[t](r[u])}))?r.splice(u--,1):(i=!1,n<s&&(s=n));if(i){t.splice(l--,1);var c=a();void 0!==c&&(o=c)}}return o}n=n||0;for(var l=t.length;l>0&&t[l-1][2]>n;l--)t[l]=t[l-1];t[l]=[r,a,n]}}(),function(){e.n=function(t){var o=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(o,{a:o}),o}}(),function(){e.d=function(t,o){for(var r in o)e.o(o,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:o[r]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)}}(),function(){e.p="/"}(),function(){var t={143:0};e.O.j=function(o){return 0===t[o]};var o=function(o,r){var a,n,s=r[0],i=r[1],u=r[2],c=0;if(s.some((function(o){return 0!==t[o]}))){for(a in i)e.o(i,a)&&(e.m[a]=i[a]);if(u)var l=u(e)}for(o&&o(r);c<s.length;c++)n=s[c],e.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return e.O(l)},r=self["webpackChunkranek"]=self["webpackChunkranek"]||[];r.forEach(o.bind(null,0)),r.push=o.bind(null,r.push.bind(r))}();var r=e.O(void 0,[998],(function(){return e(6654)}));r=e.O(r)})();
//# sourceMappingURL=app-legacy.a73bc348.js.map