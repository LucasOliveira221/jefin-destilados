// Carrossel automático
let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');

function showSlides() {
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });
  slideIndex = (slideIndex + 1) % slides.length;
  slides[slideIndex].classList.add('active');
}

if (slides.length > 0) {
  slides[0].classList.add('active');
  setInterval(showSlides, 5000);
}

// Lista completa de produtos da loja Jefin Destilados (com caminhos corrigidos)
const products = [
  // Combos de Whisky
  { nome: "Combo Jack Daniel's Maçã Verde 1L", preco: "R$ 139,99", imagem: "images/produtos/combos-de-whisky/JACK-MACA-VERDE/JackDaniels_MacaVerde_Combo_1.png" },
  { nome: "Combo Jack Daniel's Mel 1L", preco: "R$ 129,99", imagem: "images/produtos/combos-de-whisky/JACK-DANIELS-MEL/JackDaniels_Mel_Combo_1.png" },
  { nome: "Combo Johnnie Walker Red Label 1L", preco: "R$ 109,98", imagem: "images/produtos/combos-de-whisky/RED-LABEL/RedLabel_Combo_1.png" },
  { nome: "Combo White Horse 1L", preco: "R$ 99,98", imagem: "images/produtos/combos-de-whisky/WHITE-HORSE/WhiteHorse_Combo_1.png" },
  { nome: "Combo Jack Daniel's Original 1L", preco: "R$ 119,90", imagem: "images/produtos/combos-de-whisky/JACK-DANIELS-ORIGINAL/JackDaniels_Combo_1.png" },
  { nome: "Combo Jack Daniel's Canela 1L", preco: "R$ 129,99", imagem: "images/produtos/combos-de-whisky/JACK-DANIELS-CANELA/JackDaniels_Canela_Combo_1.png" },
  { nome: "Combo Johnnie Walker Gold Label 1L", preco: "R$ 209,98", imagem: "images/produtos/combos-de-whisky/GOLD-LABEL/GoldLabel_Combo_1.png" },
  { nome: "Combo Ballantine's Finest 1L", preco: "R$ 109,98", imagem: "images/produtos/combos-de-whisky/BALLANTINES/Ballantines_Combo_1.png" },
  { nome: "Combo Ballantine's 12 Anos 1L", preco: "R$ 129,99", imagem: "images/produtos/combos-de-whisky/BALLANTINES-12-ANOS/Ballantines_12Anos_Combo_1.png" },
  { nome: "Combo Chivas Regal 12 Anos 1L", preco: "R$ 129,99", imagem: "images/produtos/combos-de-whisky/CHIVAS/Chivas_Combo_1.png" },
  { nome: "Combo Johnnie Walker Black Label 1L", preco: "R$ 129,99", imagem: "images/produtos/combos-de-whisky/BLACK-LABEL/BlackLabel_Combo_1.png" },
  { nome: "Combo Buchanan's Deluxe 12 Anos 1L", preco: "R$ 129,99", imagem: "images/produtos/combos-de-whisky/BUCHANANS/Buchanans_Combo_1.png" },

  // Combo Whisky Menor
  { nome: "Combo Black Joker 900ml", preco: "R$ 49,99", imagem: "images/produtos/combo-whisky-menor/BLACK-JOKER/BlackJoker_ComboMenor_1.png" },

  // Combos de Gin
  { nome: "Combo Tanqueray London Dry 750ml", preco: "R$ 129,99", imagem: "images/produtos/combos-de-gin/TANQUERAY/Tanqueray_Combo_1.png" },
  { nome: "Combo Beefeater London Dry 750ml", preco: "R$ 109,98", imagem: "images/produtos/combos-de-gin/BEEFEATER/Beefeater_Combo_1.png" },
  { nome: "Combo Intencion Gin 1L", preco: "R$ 69,99", imagem: "images/produtos/combos-de-gin/INTENCION/GinIntencion_Combo_1.png" },
  { nome: "Combo Gordon's London Dry 750ml", preco: "R$ 123,50", imagem: "images/produtos/combos-de-gin/GORDONS/Gordons_Combo_1.png" },
  { nome: "Combo Rock's Gin 1L", preco: "R$ 86,50", imagem: "images/produtos/combos-de-gin/ROCKS/Rocks_Combo_1.png" },

  // Garrafas
  { nome: "Tanqueray London Dry 1L", preco: "R$ 79,99", imagem: "images/produtos/garrafas/Tanqueray_1L.png" },
  { nome: "Intencion Gin 1L", preco: "R$ 29,99", imagem: "images/produtos/garrafas/GinIntencion_1L.png" },
  { nome: "Gordon's London Dry 1L", preco: "R$ 84,50", imagem: "images/produtos/garrafas/Gordons_1L.png" },
  { nome: "Rock's Gin 1L", preco: "R$ 86,50", imagem: "images/produtos/garrafas/Rocks_1L.png" },
  { nome: "Licor 43 700ml", preco: "R$ 159,99", imagem: "images/produtos/garrafas/Licor43.png" },
  { nome: "Ballena Tequila 750ml", preco: "R$ 195,00", imagem: "images/produtos/garrafas/Ballena.png" },
  { nome: "Mansão Maromba Licor 900ml", preco: "R$ 24,99", imagem: "images/produtos/garrafas/MansaoMaromba.png" },
  { nome: "Jack Daniel's Maçã Verde 1L", preco: "R$ 99,90", imagem: "images/produtos/garrafas/JackDaniels_MacaVerde_1L.png" },
  { nome: "Jack Daniel's Mel 1L", preco: "R$ 89,99", imagem: "images/produtos/garrafas/JackDaniels_Mel_1L.png" },
  { nome: "Whisky White Horse 1L (Cavalinho Branco)", preco: "R$ 60,00", imagem: "images/produtos/garrafas/WhiteHorse_1L.png" },
  { nome: "Johnnie Walker Red Label 1L", preco: "R$ 69,99", imagem: "images/produtos/garrafas/RedLabel_1L.png" },
  { nome: "Jack Daniel's Original 1L", preco: "R$ 85,00", imagem: "images/produtos/garrafas/JackDaniels_1L.png" },
  { nome: "Buchanan's Deluxe 12 Anos 1L", preco: "R$ 89,99", imagem: "images/produtos/garrafas/Buchanans_1L.png" },
  { nome: "Johnnie Walker Gold Label 1L", preco: "R$ 170,00", imagem: "images/produtos/garrafas/GoldLabel_1L.png" },
  { nome: "Chivas Regal 12 Anos 1L", preco: "R$ 79,99", imagem: "images/produtos/garrafas/Chivas_1L.png" },
  { nome: "Johnnie Walker Black Label 1L", preco: "R$ 85,00", imagem: "images/produtos/garrafas/BlackLabel_1L.png" },
  { nome: "Bem Casado Licor 900ml", preco: "R$ 64,99", imagem: "images/produtos/garrafas/BemCasado.png" },
  { nome: "Black Joker Whisky 1L", preco: "R$ 34,98", imagem: "images/produtos/garrafas/BlackJoker_1L.png" },
  { nome: "Jack Daniel's Canela 1L", preco: "R$ 89,99", imagem: "images/produtos/garrafas/JackDaniels_Canela_1L.png" },
  { nome: "Beefeater London Dry 750ml", preco: "R$ 69,99", imagem: "images/produtos/garrafas/Beefeater_1L.png" },

  // Cervejas
  { nome: "Heineken 600ml", preco: "R$ 12,99", imagem: "images/produtos/cervejas/Heineken_600ml.png" },
  { nome: "Spaten 600ml", preco: "R$ 11,99", imagem: "images/produtos/cervejas/Spaten_600ml.png" },
  { nome: "Antarctica Original 600ml", preco: "R$ 10,00", imagem: "images/produtos/cervejas/Original_600ml.png" },
  { nome: "Brahma 600ml", preco: "R$ 8,99", imagem: "images/produtos/cervejas/Brahma_600ml.png" },
  { nome: "Brahma Lata 473ml (Latão)", preco: "R$ 5,50", imagem: "images/produtos/cervejas/Brahma_Latao.png" },
  { nome: "Heineken Lata 473ml (Latão)", preco: "R$ 7,99", imagem: "images/produtos/cervejas/Heineken_Latao.png" },
  { nome: "Antarctica Original Lata 473ml (Latão)", preco: "R$ 6,50", imagem: "images/produtos/cervejas/Original_Latao.png" },
  { nome: "Spaten Lata 473ml (Latão)", preco: "R$ 6,99", imagem: "images/produtos/cervejas/Spaten_Latao.png" },
  { nome: "Fardo Brahma 12 Unidades (Latão)", preco: "R$ 57,99", imagem: "images/produtos/cervejas/Brahma_Fardo.png" },
  { nome: "Fardo Antarctica Original 12 Unidades (Latão)", preco: "R$ 71,98", imagem: "images/produtos/cervejas/Original_Fardo.png" },
  { nome: "Fardo Heineken 12 Unidades (Latão)", preco: "R$ 81,90", imagem: "images/produtos/cervejas/Heineken_Fardo.png" },
  { nome: "Antarctica Original 300ml (Litrinho)", preco: "R$ 3,99", imagem: "images/produtos/cervejas/Original_Litrin.png" },
  { nome: "Brahma 300ml (Litrinho)", preco: "R$ 3,50", imagem: "images/produtos/cervejas/Brahma_Litrin.png" },
  { nome: "Caixa Antarctica Original 24 x 300ml (Litrinho)", preco: "R$ 83,90", imagem: "images/produtos/cervejas/Original_CaixaLitrin_24Unidades.png" },
  { nome: "Caixa Brahma 24 x 300ml (Litrinho)", preco: "R$ 73,90", imagem: "images/produtos/cervejas/Brahma_CaixaLitrin_24Unidades.png" },

  // Refrigerantes
  { nome: "Coca-Cola Original 2L", preco: "R$ 12,99", imagem: "images/produtos/refrigerantes/CocaCola_2L.png" },
  { nome: "Coca-Cola Retornável 2L", preco: "R$ 8,99", imagem: "images/produtos/refrigerantes/CocaCola_Retornavel.png" },
  { nome: "Sukita Laranja 2L", preco: "R$ 7,99", imagem: "images/produtos/refrigerantes/Sukita_Laranja_2L.png" },
  { nome: "Refrigerante Guarapan Tradicional 2L", preco: "R$ 7,99", imagem: "images/produtos/refrigerantes/Guarapan_2L.png" },

  // Diversos
  { nome: "Red Bull Energy Drink 250ml", preco: "R$ 9,99", imagem: "images/produtos/diversos/RedBull.png" },
  { nome: "Monster Energy 473ml", preco: "R$ 9,49", imagem: "images/produtos/diversos/Monster.png" },
  { nome: "Energético Mano's 2L", preco: "R$ 9,99", imagem: "images/produtos/diversos/Energetico_Manos_2L.png" },
  { nome: "Energético Jack Power 2L", preco: "R$ 9,99", imagem: "images/produtos/diversos/Energetico_jackpower_2L.png" },
  { nome: "Fardo Energético 2L (6 Unidades)", preco: "R$ 38,49", imagem: "images/produtos/diversos/FardoEnergetico_2L.png" },
  { nome: "Gelinho Unidade", preco: "R$ 2,99", imagem: "images/produtos/diversos/Gelinho_Unidade.png" },
  { nome: "Caixa de Gelinho C/ 30 Unidades", preco: "R$ 59,99", imagem: "images/produtos/diversos/CaixaGelinho_30Unidades.png" },
  { nome: "Gatorade Uva 500ml", preco: "R$ 7,99", imagem: "images/produtos/diversos/Gatorade_Uva.png" },
  { nome: "Gatorade Laranja 500ml", preco: "R$ 7,99", imagem: "images/produtos/diversos/Gatorade_Laranja.png" },
  { nome: "Gatorade Limão 500ml", preco: "R$ 7,99", imagem: "images/produtos/diversos/Gatorade_Limao.png" },
];


const productList = document.getElementById('product-list');
if (productList) {
  products.forEach(prod => {
    const div = document.createElement('div');
    div.className = 'produto';
    div.innerHTML = `
  <a href="${location.pathname.includes('index') ? 'pages' : '..'}/produto.html?id=${encodeURIComponent(prod.nome)}">
    <img src="${prod.imagem}" alt="${prod.nome}">
    <h3>${prod.nome}</h3>
    <p>${prod.preco}</p>
  </a>
  <div class="botoes">
    <button class="btn-add" 
      data-nome="${prod.nome}" 
      data-preco="${prod.preco}" 
      data-img="${prod.imagem}">
      Adicionar ao Carrinho
    </button>
    <button class="btn-buy" 
      data-nome="${prod.nome}" 
      data-preco="${prod.preco}" 
      data-img="${prod.imagem}">
      Comprar Agora
    </button>
  </div>
`;

    productList.appendChild(div);
  });
}

let cart = JSON.parse(localStorage.getItem('cart')) || [];
const cartCount = document.getElementById('cart-count');

function updateCartCount() {
  if (cartCount) {
    cartCount.textContent = cart.reduce((acc, item) => acc + item.qtd, 0);
  }
}

function addToCart(nome, preco, imagem) {
  const index = cart.findIndex(p => p.nome === nome);
  if (index > -1) {
    cart[index].qtd += 1;
  } else {
    cart.push({ nome, preco, imagem, qtd: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  alert(`${nome} adicionado ao carrinho!`);
}

function comprarAgora(nome, preco, imagem) {
  cart = [{ nome, preco, imagem, qtd: 1 }];
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  window.location.href = "/pages/carrinho.html";
}


updateCartCount();

// Usando delegation para garantir que os botões funcionem mesmo após o DOM ser renderizado dinamicamente
document.addEventListener('click', function (e) {
  if (e.target.classList.contains('btn-add')) {
    const btn = e.target;
    const nome = btn.dataset.nome;
    const preco = btn.dataset.preco;
    const imagem = btn.dataset.img;
    addToCart(nome, preco, imagem);
  }

  if (e.target.classList.contains('btn-buy')) {
    const btn = e.target;
    const nome = btn.dataset.nome;
    const preco = btn.dataset.preco;
    const imagem = btn.dataset.img;
    comprarAgora(nome, preco, imagem);
  }
});



// =======================
// FUNCIONALIDADE DO CARRINHO DE COMPRAS
// =======================

if (location.pathname.includes("carrinho.html")) {
  const carrinhoContainer = document.getElementById("carrinho-lista");
  const totalContainer = document.getElementById("total");
  const btnFinalizar = document.getElementById("btn-finalizar");
  let carrinho = JSON.parse(localStorage.getItem("cart")) || [];

  function obterDescricaoProduto(nome) {
    nome = nome.toLowerCase();
    if (nome.includes("combo") && nome.includes("menor")) {
      return "Garrafa 1L • Energético 2L • 4 Gelinhos • 1 Copo";
    }
    if (nome.includes("combo")) {
      return "Garrafa 1L • 8 Gelinhos • Energético 2L • 2 Copos";
    }
    return "";
  }

  function renderizarCarrinho() {
    carrinhoContainer.innerHTML = "";
    let total = 0;

    if (carrinho.length === 0) {
      carrinhoContainer.innerHTML = "<p>Seu carrinho está vazio.</p>";
      totalContainer.textContent = "Total: R$ 0,00";
      btnFinalizar.style.display = "none";
      return;
    }

    carrinho.forEach((item, index) => {
      const preco = parseFloat(item.preco.replace('R$', '').replace(',', '.'));
      const subtotal = preco * item.qtd;
      total += subtotal;

      const descricao = obterDescricaoProduto(item.nome);

      const div = document.createElement("div");
      div.className = "item-carrinho";
      div.innerHTML = `
        <img src="../${item.imagem}" alt="${item.nome}" 
             onerror="this.onerror=null;this.src='../images/produtos/sem-imagem.png';">
        <div class="item-info">
          <h3>${item.nome}</h3>
          ${descricao ? `<p class="descricao-produto">${descricao}</p>` : ""}
          <p>Preço: ${item.preco}</p>
          <p>Quantidade: 
            <button onclick="alterarQtd(${index}, -1)">-</button>
            ${item.qtd}
            <button onclick="alterarQtd(${index}, 1)">+</button>
          </p>
          <p>Subtotal: R$ ${subtotal.toFixed(2).replace('.', ',')}</p>
          <button onclick="removerItem(${index})">Remover</button>
        </div>
      `;
      carrinhoContainer.appendChild(div);
    });

    totalContainer.textContent = "R$ " + total.toFixed(2).replace('.', ',');
    btnFinalizar.style.display = "inline-block";
  }

  window.alterarQtd = function(index, delta) {
    carrinho[index].qtd += delta;
    if (carrinho[index].qtd <= 0) {
      carrinho.splice(index, 1);
    }
    localStorage.setItem("cart", JSON.stringify(carrinho));
    renderizarCarrinho();
  };

  window.removerItem = function(index) {
    carrinho.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(carrinho));
    renderizarCarrinho();
  };

  btnFinalizar.addEventListener('click', () => {
    if (carrinho.length === 0) return;

    let mensagem = "*Pedido Jefin Destilados*%0A";
    let total = 0;

    carrinho.forEach(item => {
      const preco = parseFloat(item.preco.replace('R$', '').replace(',', '.'));
      const subtotal = preco * item.qtd;
      total += subtotal;
      mensagem += `• ${item.qtd}x ${item.nome} - ${item.preco}%0A`;
    });

    mensagem += `%0ATotal: R$ ${total.toFixed(2).replace('.', ',')}`;
    const zapURL = `https://wa.me/5531988515508?text=${mensagem}`;
    window.open(zapURL, '_blank');
  });

  renderizarCarrinho();
}

const btnEsvaziar = document.getElementById("btn-esvaziar");
if (btnEsvaziar) {
  btnEsvaziar.addEventListener("click", () => {
    if (confirm("Tem certeza que deseja esvaziar seu carrinho?")) {
      localStorage.removeItem("cart");
      location.reload();
    }
  });
}


// SCRIPT DA PÁGINA DO PRODUTO
// ===============================
if (window.location.pathname.includes("produto.html")) {
  const urlParams = new URLSearchParams(window.location.search);
  const nomeProduto = urlParams.get("id");

  const produto = products.find(p => p.nome === decodeURIComponent(nomeProduto));

  if (produto) {
    const nomeElem = document.getElementById("produto-nome");
    const precoElem = document.getElementById("produto-preco");
    const descElem = document.getElementById("produto-descricao");
    const galeriaElem = document.getElementById("produto-imagem");
    const miniaturasElem = document.getElementById("produto-miniaturas");
    const btnAdd = document.getElementById("btn-add-carrinho");
    const btnBuy = document.getElementById("btn-comprar-agora");
    const relacionadosElem = document.getElementById("produtos-relacionados");

    nomeElem.textContent = produto.nome;
    precoElem.textContent = produto.preco;
    descElem.textContent = gerarDescricao(produto.nome);

    // Imagem principal
    galeriaElem.src = "/" + produto.imagem; // Caminho absoluto
    galeriaElem.alt = produto.nome;

    // Miniaturas
    miniaturasElem.innerHTML = "";
    const basePath = produto.imagem.substring(0, produto.imagem.lastIndexOf("_") + 1);
    for (let i = 1; i <= 4; i++) {
      const thumb = document.createElement("img");
      thumb.src = `/${basePath}${i}.png`; // Caminho absoluto
      thumb.alt = `Imagem ${i}`;
      thumb.onerror = () => thumb.style.display = "none";
      thumb.addEventListener("click", () => {
        galeriaElem.src = thumb.src;
      });
      miniaturasElem.appendChild(thumb);
    }

    // Botões
    btnAdd.onclick = () => addToCart(produto.nome, produto.preco, produto.imagem);
    btnBuy.onclick = () => comprarAgora(produto.nome, produto.preco, produto.imagem);

    // Produtos relacionados
    const relacionados = products.filter(p => p !== produto).slice(0, 4);
    relacionadosElem.innerHTML = "";
    relacionados.forEach(p => {
      const div = document.createElement("div");
      div.className = "produto";
      div.innerHTML = `
        <a href="/pages/produto.html?id=${encodeURIComponent(p.nome)}"> <!-- Caminho absoluto -->
          <img src="/${p.imagem}" alt="${p.nome}">
          <h3>${p.nome}</h3>
          <p>${p.preco}</p>
        </a>
      `;
      relacionadosElem.appendChild(div);
    });
  } else {
    document.querySelector("main").innerHTML = "<p>Produto não encontrado.</p>";
  }
}

// ===============================
// GERADOR DE DESCRIÇÃO PADRÃO
// ===============================

function gerarDescricao(nome) {
  nome = nome.toLowerCase();

  if (nome.includes("combo")) {
    return `Este combo exclusivo inclui uma garrafa de 1L, 8 gelinhos, energético 2L e copos personalizados. Ideal para animar qualquer festa!`;
  }
  if (nome.includes("gin")) {
    return `Garrafa de gin premium com 1L. Ideal para drinks sofisticados e momentos especiais.`;
  }
  if (nome.includes("whisky") || nome.includes("label") || nome.includes("jack")) {
    return `Whisky de alta qualidade em garrafa de 1L. Combina sabor encorpado com tradição.`;
  }
  if (nome.includes("lata") || nome.includes("600ml")) {
    return `Cerveja gelada no formato ideal para dividir com amigos. Refrescante e com sabor incomparável.`;
  }
  if (nome.includes("gatorade")) {
    return `Reidrate-se com Gatorade sabor ${nome.split(" ")[1]}. Ideal para quem quer repor os eletrólitos após curtir muito.`;
  }
  if (nome.includes("energ")) {
    return `Energético potente para manter sua noite no ritmo certo. Disponível em versões de 2L ou fardo.`;
  }
  if (nome.includes("gelinho")) {
    return `Gelinho gourmet, vários sabores, perfeito para drinks ou consumo direto. Caixa com 30 ou unidade.`;
  }

  return `Produto premium selecionado para você curtir com qualidade e segurança.`;
}

// FUNCIONALIDADE DO MENU MOBILE
const btnMenu = document.querySelector('.btn-menu');
const menuMobile = document.querySelector('.menu-mobile');

if (btnMenu && menuMobile) {
  btnMenu.addEventListener('click', () => {
    menuMobile.classList.toggle('ativo');
  });
}

// ==== CARROSSEL DE PRODUTOS NA PÁGINA INICIAL ====

function renderCarrosselProdutosPersonalizado(filtro, idCarrossel, idDots, opcoes = {}) {
  const container = document.getElementById(`carrossel-${idCarrossel}`);
  const dotsContainer = document.getElementById(`dots-${idCarrossel}`);
  if (!container || !dotsContainer) return;

  const produtos = products
    .filter(p => {
      if (Array.isArray(filtro)) {
        return filtro.some(f => p.nome.toLowerCase().includes(f.toLowerCase()));
      } else {
        return p.nome.toLowerCase().includes(filtro.toLowerCase());
      }
    })
    .sort(() => 0.5 - Math.random()) // embaralha os resultados
    .slice(0, 43); // exibe até 43 produtos

  container.innerHTML = "";
  dotsContainer.innerHTML = "";

  produtos.forEach((prod, i) => {
    const precoOriginal = prod.preco;
    let precoAntigo = "";

    if (opcoes.promocao) {
      const precoNumerico = parseFloat(precoOriginal.replace("R$", "").replace(",", "."));
      const precoFalso = (precoNumerico + 20).toFixed(2).replace(".", ",");
      precoAntigo = `<span class="preco-antigo">R$ ${precoFalso}</span>`;
    }

    const div = document.createElement("div");
    div.className = "produto";
    div.innerHTML = `
      <a href="pages/produto.html?id=${encodeURIComponent(prod.nome)}">
        <img src="${prod.imagem}" alt="${prod.nome}">
        <h3>${prod.nome}</h3>
        <p>${precoAntigo}<span class="preco-final">${precoOriginal}</span></p>
      </a>
      <div class="botoes">
        <button class="btn-add" data-nome="${prod.nome}" data-preco="${prod.preco}" data-img="${prod.imagem}">Adicionar</button>
        <button class="btn-buy" data-nome="${prod.nome}" data-preco="${prod.preco}" data-img="${prod.imagem}">Comprar</button>
      </div>
    `;
    container.appendChild(div);
  });

  // === ALTERAÇÃO: gerar bolinha por TELA, não por produto ===
  const cardWidth = 240;
  const cardsPorTela = Math.floor(container.offsetWidth / cardWidth) || 1;
  const totalPaginas = Math.ceil(produtos.length / cardsPorTela);

  for (let i = 0; i < totalPaginas; i++) {
    const dot = document.createElement("span");
    if (i === 0) dot.classList.add("active");
    dot.addEventListener("click", () => {
      container.scrollTo({ left: i * cardsPorTela * cardWidth, behavior: "smooth" });
      dotsContainer.querySelectorAll("span").forEach(d => d.classList.remove("active"));
      dot.classList.add("active");
    });
    dotsContainer.appendChild(dot);
  }
}

// ================== CHAMADAS ==================

// 🔥 Destaques da Semana → só combos
renderCarrosselProdutosPersonalizado("Combo", "destaques", "dots-destaques");

// ⚡ Promoções Relâmpago → combos + garrafas + diversos
renderCarrosselProdutosPersonalizado(
  [
    "BlackJoker_ComboMenor_1", "FardoEnergetico_2L.jpg",
    "1L",
    "Bem Casado", "Ballena", "Mansão Maromba", "Licor 43","combo",
    "Gatorade", "Energetico", "Monster", "Red Bull", "Gelinho", "Caixa de Gelinho"
  ],
  "promocoes",
  "dots-promocoes",
  { promocao: true }
);

// 🎉 Top do Fim de Semana → todas as cervejas
renderCarrosselProdutosPersonalizado(
  [
    "Heineken", "Spaten", "Brahma", "Original", "Gelinho", "Fardo"
  ],
  "tops",
  "dots-tops"
);

// ================== BOTÕES DE NAVEGAÇÃO ==================
document.querySelectorAll(".btn-carrossel").forEach(btn => {
  btn.addEventListener("click", () => {
    const id = btn.dataset.target;
    const carrossel = document.getElementById(`carrossel-${id}`);
    if (!carrossel) return;
    carrossel.scrollBy({
      left: btn.classList.contains("next") ? 240 : -240,
      behavior: "smooth"
    });
  });
});

// ================== AUTO CARROSSEL (destaques) ==================
setInterval(() => {
  const carrossel = document.getElementById("carrossel-destaques");
  const dots = document.querySelectorAll("#dots-destaques span");
  if (!carrossel || dots.length === 0) return;

  const cardWidth = 240;
  const cardsPorTela = Math.floor(carrossel.offsetWidth / cardWidth) || 1;
  const maxScroll = carrossel.scrollWidth - carrossel.clientWidth;
  const atEnd = carrossel.scrollLeft + cardWidth >= maxScroll;

  const nextIndex = atEnd ? 0 : Math.floor(carrossel.scrollLeft / (cardsPorTela * cardWidth)) + 1;
  carrossel.scrollTo({
    left: nextIndex * cardsPorTela * cardWidth,
    behavior: "smooth"
  });

  dots.forEach((dot, i) => dot.classList.toggle("active", i === nextIndex));
}, 4000);



// ================== PAGINAS CATEGORIAS ==================

function carregarProdutosPorCaminho(pasta) {
  const lista = document.getElementById("product-list");
  if (!lista) return;

  const produtosFiltrados = products.filter(p => p.imagem.toLowerCase().includes(pasta.toLowerCase()));
  lista.innerHTML = "";

  produtosFiltrados.forEach(prod => {
    const div = document.createElement("div");
    div.className = "produto";
    div.innerHTML = `
      <a href="../produto.html?id=${encodeURIComponent(prod.nome)}">
        <img src="../../${prod.imagem}" alt="${prod.nome}">
        <h3>${prod.nome}</h3>
        <p>${prod.preco}</p>
      </a>
      <div class="botoes">
        <button class="btn-add" 
          data-nome="${prod.nome}" 
          data-preco="${prod.preco}" 
          data-img="${prod.imagem}">
          Adicionar
        </button>
        <button class="btn-buy" 
          data-nome="${prod.nome}" 
          data-preco="${prod.preco}" 
          data-img="${prod.imagem}">
          Comprar
        </button>
      </div>
    `;
    lista.appendChild(div);
  });
}



// EXEMPLO DE USO AUTOMÁTICO POR PÁGINA

if (window.location.pathname.includes("combos-de-whisky.html")) {
  carregarProdutosPorCaminho("images/produtos/combos-de-whisky");
}
if (window.location.pathname.includes("combo-whisky-menor.html")) {
  carregarProdutosPorCaminho("images/produtos/combo-whisky-menor");
}
if (window.location.pathname.includes("combos-de-gin.html")) {
  carregarProdutosPorCaminho("images/produtos/combos-de-gin");
}
if (window.location.pathname.includes("garrafas.html")) {
  carregarProdutosPorCaminho("images/produtos/garrafas");
}
if (window.location.pathname.includes("cervejas.html")) {
  carregarProdutosPorCaminho("images/produtos/cervejas");
}
if (window.location.pathname.includes("refrigerantes.html")) {
  carregarProdutosPorCaminho("images/produtos/refrigerantes");
}
if (window.location.pathname.includes("diversos.html")) {
  carregarProdutosPorCaminho("images/produtos/diversos");
}


// ================== PÁGINA DE PRODUTO INDIVIDUAL ==================
if (window.location.pathname.includes("produto.html")) {
  window.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const nomeProduto = params.get("id");
    const produto = products.find(p => decodeURIComponent(p.nome) === decodeURIComponent(nomeProduto));

    if (!produto) {
      document.getElementById("produto-nome").textContent = "Produto não encontrado";
      return;
    }

    // Atualiza campos principais
    const imgPrincipal = document.getElementById("produto-imagem");
    const nomeEl = document.getElementById("produto-nome");
    const precoEl = document.getElementById("produto-preco");
    const descricao = document.getElementById("produto-descricao");
    const descTecnica = document.getElementById("descricao-tecnica");
    const btnAdd = document.getElementById("btn-add-carrinho");
    const btnComprar = document.getElementById("btn-comprar-agora");
    const miniaturas = document.getElementById("produto-miniaturas");

    imgPrincipal.src = "../" + produto.imagem;
    imgPrincipal.alt = produto.nome;
    nomeEl.textContent = produto.nome;
    precoEl.textContent = produto.preco;

    
    // =================== DESCRIÇÕES PERSONALIZADAS ===================

const descricoesPersonalizadas = {
  // Combos de Whisky
  "Combo Jack Daniel's Maçã Verde 1L": {
    resumo: "Combo ideal com Jack Daniel's Maçã Verde, energético e acessórios para sua festa.",
    tecnica: [
      "Garrafa: Jack Daniel's Apple (Maçã Verde) 1L",
      "Energético: 2L",
      "Gelinhos: 8 unidades",
      "Copos: 2 unidades"
    ]
  },
  "Combo Jack Daniel's Mel 1L": {
    resumo: "Doçura e refrescância com Combo Jack Daniel's Mel em um combo completo.",
    tecnica: [
      "Garrafa: Jack Daniel's Honey (Mel) 1L",
      "Energético: 2L",
      "Gelinhos: 8 unidades",
      "Copos: 2 unidades"
    ]
  },
  "Combo Johnnie Walker Red Label 1L": {
    resumo: "Clássico combo com Red Label para momentos de confraternização.",
    tecnica: [
      "Garrafa: Johnnie Walker Red Label 1L",
      "Energético: 2L",
      "Gelinhos: 8 unidades",
      "Copos: 2 unidades"
    ]
  },
  "Combo White Horse 1L": {
    resumo: "Combo com White Horse, perfeito para quem busca custo-benefício.",
    tecnica: [
      "Garrafa: White Horse 1L",
      "Energético: 2L",
      "Gelinhos: 8 unidades",
      "Copos: 2 unidades"
    ]
  },
  "Combo Jack Daniel's Original 1L": {
    resumo: "Sabor autêntico do Jack Daniel's em um combo completo.",
    tecnica: [
      "Garrafa: Jack Daniel's Original 1L",
      "Energético: 2L",
      "Gelinhos: 8 unidades",
      "Copos: 2 unidades"
    ]
  },
  "Combo Jack Daniel's Canela 1L": {
    resumo: "Combo ardente com Jack Daniel's Canela para momentos intensos.",
    tecnica: [
      "Garrafa: Jack Daniel's Fire (Canela) 1L",
      "Energético: 2L",
      "Gelinhos: 8 unidades",
      "Copos: 2 unidades"
    ]
  },
  "Combo Johnnie Walker Gold Label 1L": {
    resumo: "Luxo premium com Gold Label em um combo sofisticado.",
    tecnica: [
      "Garrafa: Johnnie Walker Gold Label 1L",
      "Energético: 2L",
      "Gelinhos: 8 unidades",
      "Copos: 2 unidades"
    ]
  },
  "Combo Ballantine's Finest 1L": {
    resumo: "Combo suave e equilibrado com Ballantine's Finest.",
    tecnica: [
      "Garrafa: Ballantine's Finest 1L",
      "Energético: 2L",
      "Gelinhos: 8 unidades",
      "Copos: 2 unidades"
    ]
  },
  "Combo Ballantine's 12 Anos 1L": {
    resumo: "Sabor refinado do Ballantine's 12 Anos em um combo especial.",
    tecnica: [
      "Garrafa: Ballantine's 12 Anos 1L",
      "Energético: 2L",
      "Gelinhos: 8 unidades",
      "Copos: 2 unidades"
    ]
  },
  "Combo Chivas Regal 12 Anos 1L": {
    resumo: "Elegância escocesa com Chivas Regal em um combo premium.",
    tecnica: [
      "Garrafa: Chivas Regal 12 Anos 1L",
      "Energético: 2L",
      "Gelinhos: 8 unidades",
      "Copos: 2 unidades"
    ]
  },
  "Combo Johnnie Walker Black Label 1L": {
    resumo: "Combo sofisticado com Black Label para ocasiões especiais.",
    tecnica: [
      "Garrafa: Johnnie Walker Black Label 1L",
      "Energético: 2L",
      "Gelinhos: 8 unidades",
      "Copos: 2 unidades"
    ]
  },
  "Combo Buchanan's Deluxe 12 Anos 1L": {
    resumo: "Sabor suave com Buchanan's Deluxe em um combo completo.",
    tecnica: [
      "Garrafa: Buchanan's Deluxe 12 Anos 1L",
      "Energético: 2L",
      "Gelinhos: 8 unidades",
      "Copos: 2 unidades"
    ]
  },

  // Combo Whisky Menor
  "Combo Black Joker 900ml": {
    resumo: "Combo compacto com Black Joker, ideal para pequenas reuniões.",
    tecnica: [
      "Garrafa: Black Joker 900ml",
      "Gelinhos: 4 unidades"
    ]
  },

  // Combos de Gin
  "Combo Tanqueray London Dry 750ml": {
    resumo: "Combo sofisticado com Tanqueray para drinks refrescantes.",
    tecnica: [
      "Garrafa: Tanqueray London Dry 750ml",
      "Energético: 2L",
      "Gelinhos: 8 unidades",
      "Copos: 2 unidades"
    ]
  },
  "Combo Beefeater London Dry 750ml": {
    resumo: "Clássico gin londrino em um combo perfeito para coquetéis.",
    tecnica: [
      "Garrafa: Beefeater London Dry 750ml",
      "Energético: 2L",
      "Gelinhos: 8 unidades",
      "Copos: 2 unidades"
    ]
  },
  "Combo Intencion Gin 1L": {
    resumo: "Combo acessível com Intencion Gin para momentos descontraídos.",
    tecnica: [
      "Garrafa: Intencion Gin 1L",
      "Energético: 2L",
      "Gelinhos: 8 unidades",
      "Copos: 2 unidades"
    ]
  },
  "Combo Gordon's London Dry 750ml": {
    resumo: "Tradição do gin Gordon's em um combo para todas as ocasiões.",
    tecnica: [
      "Garrafa: Gordon's London Dry 750ml",
      "Energético: 2L",
      "Gelinhos: 8 unidades",
      "Copos: 2 unidades"
    ]
  },
  "Combo Rock's Gin 1L": {
    resumo: "Combo vibrante com Rock's Gin para animar suas festas.",
    tecnica: [
      "Garrafa: Rock's Gin 1L",
      "Energético: 750ml",
      "Gelinhos: 8 unidades",
      "Copos: 2 unidades"
    ]
  },

  // Garrafas
  "Tanqueray London Dry 1L": {
    resumo: "Gin premium para coquetéis sofisticados e refrescantes.",
    tecnica: [
      "Volume: 1L",
      "Graduação alcoólica: 47.3%",
      "Origem: Inglaterra",
      "Tipo: Gin London Dry"
    ]
  },
  "Intencion Gin 1L": {
    resumo: "Gin nacional acessível para drinks variados.",
    tecnica: [
      "Volume: 1L",
      "Graduação alcoólica: 40%",
      "Origem: Brasil",
      "Tipo: Gin"
    ]
  },
  "Gordon's London Dry 1L": {
    resumo: "Clássico gin britânico, ideal para gin tônica.",
    tecnica: [
      "Volume: 1L",
      "Graduação alcoólica: 37.5%",
      "Origem: Inglaterra",
      "Tipo: Gin London Dry"
    ]
  },
  "Rock's Gin 1L": {
    resumo: "Gin vibrante para coquetéis criativos.",
    tecnica: [
      "Volume: 1L",
      "Graduação alcoólica: 40%",
      "Origem: Brasil",
      "Tipo: Gin"
    ]
  },
  "Licor 43 700ml": {
    resumo: "Licor espanhol com notas cítricas e baunilha.",
    tecnica: [
      "Volume: 700ml",
      "Graduação alcoólica: 31%",
      "Origem: Espanha",
      "Tipo: Licor"
    ]
  },
  "Ballena Tequila 750ml": {
    resumo: "Tequila premium para shots e coquetéis.",
    tecnica: [
      "Volume: 750ml",
      "Graduação alcoólica: 40%",
      "Origem: México",
      "Tipo: Tequila"
    ]
  },
  "Mansão Maromba Licor 900ml": {
    resumo: "Licor nacional doce, ideal para sobremesas.",
    tecnica: [
      "Volume: 900ml",
      "Graduação alcoólica: 17%",
      "Origem: Brasil",
      "Tipo: Licor"
    ]
  },
  "Jack Daniel's Maçã Verde 1L": {
    resumo: "Whisky com sabor de maçã verde, suave e refrescante.",
    tecnica: [
      "Volume: 1L",
      "Graduação alcoólica: 35%",
      "Origem: Estados Unidos",
      "Tipo: Whisky",
      "Nome original: Jack Daniel's Apple 1L"
    ]
  },
  "Jack Daniel's Mel 1L": {
    resumo: "Whisky com toque de mel, doce e equilibrado.",
    tecnica: [
      "Volume: 1L",
      "Graduação alcoólica: 35%",
      "Origem: Estados Unidos",
      "Tipo: Whisky",
      "Nome original: Jack Daniel's Honey 1L"
    ]
  },
  "Whisky White Horse 1L (Cavalinho Branco)": {
    resumo: "Whisky escocês clássico e acessível.",
    tecnica: [
      "Volume: 1L",
      "Graduação alcoólica: 40%",
      "Origem: Escócia",
      "Tipo: Whisky"
    ]
  },
  "Johnnie Walker Red Label 1L": {
    resumo: "Whisky escocês vibrante, ideal para misturas.",
    tecnica: [
      "Volume: 1L",
      "Graduação alcoólica: 40%",
      "Origem: Escócia",
      "Tipo: Whisky"
    ]
  },
  "Jack Daniel's Original 1L": {
    resumo: "Clássico whisky americano com sabor marcante.",
    tecnica: [
      "Volume: 1L",
      "Graduação alcoólica: 40%",
      "Origem: Estados Unidos",
      "Tipo: Whisky"
    ]
  },
  "Buchanan's Deluxe 12 Anos 1L": {
    resumo: "Whisky escocês suave e sofisticado.",
    tecnica: [
      "Volume: 1L",
      "Graduação alcoólica: 40%",
      "Origem: Escócia",
      "Tipo: Whisky"
    ]
  },
  "Johnnie Walker Gold Label 1L": {
    resumo: "Whisky premium com notas de mel e especiarias.",
    tecnica: [
      "Volume: 1L",
      "Graduação alcoólica: 40%",
      "Origem: Escócia",
      "Tipo: Whisky"
    ]
  },
  "Chivas Regal 12 Anos 1L": {
    resumo: "Whisky escocês elegante e equilibrado.",
    tecnica: [
      "Volume: 1L",
      "Graduação alcoólica: 40%",
      "Origem: Escócia",
      "Tipo: Whisky"
    ]
  },
  "Johnnie Walker Black Label 1L": {
    resumo: "Whisky escocês intenso e complexo.",
    tecnica: [
      "Volume: Volume 1L",
      "Graduação alcoólica: 40%",
      "Origem: Escócia",
      "Tipo: Whisky"
    ]
  },
  "Bem Casado Licor 900ml": {
    resumo: "Licor doce brasileiro, ideal para sobremesas.",
    tecnica: [
      "Volume: 900ml",
      "Graduação alcoólica: 18%",
      "Origem: Brasil",
      "Tipo: Licor"
    ]
  },
  "Black Joker Whisky 1L": {
    resumo: "Whisky nacional acessível para todas as ocasiões.",
    tecnica: [
      "Volume: 1L",
      "Graduação alcoólica: 40%",
      "Origem: Brasil",
      "Tipo: Whisky"
    ]
  },
  "Jack Daniel's Canela 1L": {
    resumo: "Whisky com toque de canela, intenso e marcante.",
    tecnica: [
      "Volume: 1L",
      "Graduação alcoólica: 35%",
      "Origem: Estados Unidos",
      "Tipo: Whisky",
      "Nome original: Jack Daniel's Fire 1L"
    ]
  },
  "Beefeater London Dry 750ml": {
    resumo: "Gin clássico com 9 botânicos, ideal para drinks sofisticados.",
    tecnica: [
      "Volume: 750ml",
      "Graduação alcoólica: 40%",
      "Origem: Inglaterra",
      "Tipo: Gin London Dry"
    ]
  },

  // Cervejas
  "Heineken_600ml": {
    resumo: "Cerveja premium com sabor suave e refrescante.",
    tecnica: [
      "Volume: 600ml",
      "Graduação alcoólica: 5%",
      "Origem: Holanda",
      "Tipo: Pilsen Premium"
    ]
  },
  "Spaten 600ml": {
    resumo: "Cerveja alemã com tradição e sabor marcante.",
    tecnica: [
      "Volume: 600ml",
      "Graduação alcoólica: 5.2%",
      "Origem: Alemanha",
      "Tipo: Munich Helles"
    ]
  },
  "Antarctica Original 600ml": {
    resumo: "Cerveja brasileira leve e clássica.",
    tecnica: [
      "Volume: 600ml",
      "Graduação alcoólica: 5%",
      "Origem: Brasil",
      "Tipo: Pilsen"
    ]
  },
  "Brahma 600ml": {
    resumo: "Cerveja refrescante para qualquer ocasião.",
    tecnica: [
      "Volume: 600ml",
      "Graduação alcoólica: 4.8%",
      "Origem: Brasil",
      "Tipo: Pilsen"
    ]
  },
  "Brahma Lata 473ml (Latão)": {
    resumo: "Cerveja prática e refrescante em lata grande.",
    tecnica: [
      "Volume: 473ml",
      "Graduação alcoólica: 4.8%",
      "Origem: Brasil",
      "Tipo: Pilsen",
      "Embalagem: Lata"
    ]
  },
  "Heineken Lata 473ml (Latão)": {
    resumo: "Cerveja premium em lata para maior conveniência.",
    tecnica: [
      "Volume: 473ml",
      "Graduação alcoólica: 5%",
      "Origem: Brasil",
      "Tipo: Pilsen Premium",
      "Embalagem: Lata"
    ]
  },
  "Antarctica Original Lata 473ml (Latão)": {
    resumo: "Cerveja clássica em lata, ideal para churrascos.",
    tecnica: [
      "Volume: 473ml",
      "Graduação alcoólica: 5%",
      "Origem: Brasil",
      "Tipo: Pilsen",
      "Embalagem: Lata"
    ]
  },
  "Spaten Lata 473ml (Latão)": {
    resumo: "Cerveja alemã em lata com sabor marcante.",
    tecnica: [
      "Volume: 473ml",
      "Graduação alcoólica: 5.2%",
      "Origem: Alemanha",
      "Tipo: Munich Helles",
      "Embalagem: Lata"
    ]
  },
  "Fardo Brahma 12 Unidades (Latão)": {
    resumo: "Fardo de Brahma para animar suas reuniões.",
    tecnica: [
      "Volume: 12 x 473ml",
      "Graduação alcoólica: 4.8%",
      "Origem: Brasil",
      "Tipo: Pilsen",
      "Embalagem: Lata"
    ]
  },
  "Fardo Antarctica Original 12 Unidades (Latão)": {
    resumo: "Fardo de Original para momentos descontraídos.",
    tecnica: [
      "Volume: 12 x 473ml",
      "Graduação alcoólica: 5%",
      "Origem: Brasil",
      "Tipo: Pilsen",
      "Embalagem: Lata"
    ]
  },
  "Fardo Heineken 12 Unidades (Latão)": {
    resumo: "Fardo de Heineken para eventos premium.",
    tecnica: [
      "Volume: 12 x 473ml",
      "Graduação alcoólica: 5%",
      "Origem: Brasil",
      "Tipo: Pilsen Premium",
      "Embalagem: Lata"
    ]
  },
  "Antarctica Original 300ml (Litrinho)": {
    resumo: "Cerveja leve em garrafa pequena, ideal para consumo individual.",
    tecnica: [
      "Volume: 300ml",
      "Graduação alcoólica: 5%",
      "Origem: Brasil",
      "Tipo: Pilsen",
      "Embalagem: Garrafa"
    ]
  },
  "Brahma 300ml (Litrinho)": {
    resumo: "Cerveja refrescante em garrafa compacta.",
    tecnica: [
      "Volume: 300ml",
      "Graduação alcoólica: 4.8%",
      "Origem: Brasil",
      "Tipo: Pilsen",
      "Embalagem: Garrafa"
    ]
  },
  "Caixa Antarctica Original 24 x 300ml (Litrinho)": {
    resumo: "Caixa de Original para grandes eventos.",
    tecnica: [
      "Volume: 24 x 300ml",
      "Graduação alcoólica: 5%",
      "Origem: Brasil",
      "Tipo: Pilsen",
      "Embalagem: Garrafa"
    ]
  },
  "Caixa Brahma 24 x 300ml (Litrinho)": {
    resumo: "Caixa de Brahma para festas e churrascos.",
    tecnica: [
      "Volume: 24 x 300ml",
      "Graduação alcoólica: 4.8%",
      "Origem: Brasil",
      "Tipo: Pilsen",
      "Embalagem: Garrafa"
    ]
  },

  // Refrigerantes
  "Coca-Cola Original 2L": {
    resumo: "Refrigerante clássico de cola, perfeito para acompanhar refeições.",
    tecnica: [
      "Volume: 2L",
      "Marca: Coca-Cola",
      "Tipo: Refrigerante",
      "Embalagem: PET"
    ]
  },
  "Coca-Cola Retornável 2L": {
    resumo: "Coca-Cola em embalagem retornável, prática e econômica.",
    tecnica: [
      "Volume: 2L",
      "Marca: Coca-Cola",
      "Tipo: Refrigerante",
      "Embalagem: Vidro Retornável"
    ]
  },
  "Sukita Laranja 2L": {
    resumo: "Refrigerante cítrico de laranja, refrescante e saboroso.",
    tecnica: [
      "Volume: 2L",
      "Marca: Sukita",
      "Tipo: Refrigerante",
      "Embalagem: PET"
    ]
  },
  "Refrigerante Guarapan Tradicional 2L": {
    resumo: "Sabor único de maçã com um toque mineiro, perfeito para refrescar momentos especiais.",
    tecnica: [
      "Volume: 2L",
      "Marca: Guarapan",
      "Tipo: Refrigerante",
      "Sabor: Maçã com notas de tutti-frutti",
      "Embalagem: PET",
      "Origem: Minas Gerais, Brasil"
    ]
  },

  // Diversos
  "Red Bull Energy Drink 250ml": {
    resumo: "Energético para boost de energia em qualquer momento.",
    tecnica: [
      "Volume: 250ml",
      "Marca: Red Bull",
      "Tipo: Energético",
      "Embalagem: Lata"
    ]
  },
  "Monster Energy 473ml": {
    resumo: "Energético potente para quem busca desempenho.",
    tecnica: [
      "Volume: 473ml",
      "Marca: Monster",
      "Tipo: Energético",
      "Embalagem: Lata"
    ]
  },
  "Energético Mano's 2L": {
    resumo: "Energético nacional para animar suas noites.",
    tecnica: [
      "Volume: 2 Litros",
      "Marca: Mano's",
      "Tipo: Energético",
      "Embalagem: PET"
    ]
  },
  "Energético Jack Power 2L": {
    resumo: "Energético com sabor marcante para momentos intensos.",
    tecnica: [
      "Volume: 2 Litros",
      "Marca: Jack",
      "Tipo: Energético",
      "Embalagem: PET"
    ]
  },
  "Fardo Energético 2L (6 Unidades)": {
    resumo: "Fardo de energéticos para eventos e festas.",
    tecnica: [
      "Volume: 6 x 2L",
      "Marca: Variada",
      "Tipo: Energético",
      "Embalagem: Lata"
    ]
  },
  "Gelinho Unidade": {
    resumo: "Gelinho individual para drinks gelados.",
    tecnica: [
      "Volume: 200ml",
      "Embalagem: Unidade Individual",
      "Tipo: Complemento para Bebidas"
    ]
  },
  "Caixa de Gelinho C/ 30 Unidades": {
    resumo: "Caixa de gelinhos para manter suas bebidas geladas.",
    tecnica: [
      "Volume: 200ml cada unidade",
      "Quantidade: 30 unidades",
      "Tipo: Complemento para Bebidas"
    ]
  },
  "Gatorade Uva 500ml": {
    resumo: "Isotônico sabor uva para reidratação.",
    tecnica: [
      "Volume: 350ml",
      "Marca: Gatorade",
      "Tipo: Isotônico",
      "Embalagem: PET"
    ]
  },
  "Gatorade Laranja 500ml": {
    resumo: "Isotônico sabor laranja para energia e hidratação.",
    tecnica: [
      "Volume: 350ml",
      "Marca: Gatorade",
      "Tipo: Isotônico",
      "Embalagem: PET"
    ]
  },
  "Gatorade Limão 500ml": {
    resumo: "Isotônico sabor limão para refrescar e hidratar.",
    tecnica: [
      "Volume: 350ml",
      "Marca: Gatorade",
      "Tipo: Isotônico",
      "Embalagem: PET"
    ]
  }
};


    const descricaoBase = descricoesPersonalizadas[produto.nome];

    // Descrição visual personalizada
    if (descricaoBase) {
      descricao.innerHTML = `<strong>${produto.nome}</strong><br>${descricaoBase.resumo}`;
    } else if (produto.nome.toLowerCase().includes("combo")) {
      descricao.innerHTML = `<strong>Combo Padrão:</strong><br>Garrafa 1L, Energético 2L, 8 gelinhos, 2 copos.`;
    } else {
      descricao.innerHTML = `Produto individual. Veja abaixo a descrição técnica.`;
    }

    // Descrição técnica personalizada
    if (descTecnica && descricaoBase) {
      descTecnica.innerHTML = `
        <h3>Descrição Técnica</h3>
        <ul>
          ${descricaoBase.tecnica.map(item => `<li>${item}</li>`).join("")}
        </ul>
      `;
    } else if (descTecnica && produto.nome.toLowerCase().includes("combo")) {
      descTecnica.innerHTML = `
        <h3>Descrição Técnica</h3>
        <ul>
          <li>Garrafa: 1L</li>
          <li>Energético: 2L</li>
          <li>Gelinhos: 8 unidades</li>
          <li>Copos: 2 unidades</li>
        </ul>
      `;
    }

    // Botões
    btnAdd.onclick = () => adicionarAoCarrinho(produto.nome, produto.preco, produto.imagem);
    btnComprar.onclick = () => comprarAgora(produto.nome, produto.preco, produto.imagem);

    // Miniaturas (evitar imagem quebrada)
    miniaturas.innerHTML = "";
    const isCombo = produto.nome.toLowerCase().includes("combo");
    const tentativas = isCombo ? [1, 2, 3, 4] : [1];
    tentativas.forEach(i => {
      const path = "../" + produto.imagem.replace("_1", `_${i}`);
      const thumb = document.createElement("img");
      thumb.src = path;
      thumb.alt = `${produto.nome} ${i}`;
      thumb.classList.add("miniatura");
      thumb.onload = () => {
        thumb.onclick = () => {
          imgPrincipal.src = thumb.src;
        };
        miniaturas.appendChild(thumb);
      };
    });

    // Produtos relacionados
    const relacionadosContainer = document.getElementById("produtos-relacionados");
    if (relacionadosContainer) {
      relacionadosContainer.innerHTML = "";
      const outros = products.filter(p => p.nome !== produto.nome);
      const embaralhado = outros.sort(() => 0.5 - Math.random()).slice(0, 4);
      embaralhado.forEach(prod => {
        const div = document.createElement("div");
        div.className = "produto";
        div.innerHTML = `
          <a href="produto.html?id=${encodeURIComponent(prod.nome)}">
            <img src="../${prod.imagem}" alt="${prod.nome}">
            <h3>${prod.nome}</h3>
            <p>${prod.preco}</p>
          </a>
          <div class="botoes">
            <button class="btn-add" 
              data-nome="${prod.nome}" 
              data-preco="${prod.preco}" 
              data-img="${prod.imagem}">
              Adicionar
            </button>
            <button class="btn-buy" 
              data-nome="${prod.nome}" 
              data-preco="${prod.preco}" 
              data-img="${prod.imagem}">
              Comprar
            </button>
          </div>
        `;
        relacionadosContainer.appendChild(div);
      });
    }
  });
}

// ======================
// ======================
// ============== BUSCA COM MINIATURAS AO VIVO - PREMIUM UNIVERSAL ==============

document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search");
  const resultadosDiv = document.createElement("div");
  resultadosDiv.classList.add("resultados-busca");
  document.body.appendChild(resultadosDiv);

  const style = document.createElement("style");
  style.innerHTML = `
    .resultados-busca {
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background: #fff;
      border: 1px solid #ddd;
      border-radius: 12px;
      box-shadow: 0 6px 24px rgba(0,0,0,0.2);
      z-index: 9999;
      max-height: 400px;
      overflow-y: auto;
      display: none;
      padding: 10px 0;
    }
    .resultados-busca .item {
      display: flex;
      align-items: center;
      padding: 12px 20px;
      gap: 16px;
      cursor: pointer;
      transition: background 0.25s;
      text-decoration: none;
      color: #222;
      font-family: 'Segoe UI', sans-serif;
      border-bottom: 1px solid #f0f0f0;
    }
    .resultados-busca .item:last-child {
      border-bottom: none;
    }
    .resultados-busca .item:hover {
      background-color: #f1f1f1;
    }
    .resultados-busca .item img {
      width: 60px;
      height: 60px;
      object-fit: contain;
      border-radius: 10px;
      border: 1px solid #eee;
      background: #fafafa;
    }
    .resultados-busca .item span {
      font-size: 16px;
      font-weight: 600;
      flex: 1;
      color: #111;
    }
    .resultados-busca .sem-resultado {
      padding: 14px;
      text-align: center;
      color: #c62828;
      font-weight: bold;
      font-size: 15px;
      font-family: 'Segoe UI', sans-serif;
    }
  `;
  document.head.appendChild(style);

  if (!searchInput) return;

  searchInput.addEventListener("input", () => {
    const termo = searchInput.value.trim().toLowerCase();
    resultadosDiv.innerHTML = "";

    if (termo.length < 2) {
      resultadosDiv.style.display = "none";
      return;
    }

    // Detecta onde está a página
    const base = location.pathname.includes("categorias") ? "../../" :
                 location.pathname.includes("pages") ? "../" : "";

    const resultados = products.filter(p =>
      p.nome.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(
        termo.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      )
    ).slice(0, 10);

    if (resultados.length === 0) {
      resultadosDiv.innerHTML = "<div class='sem-resultado'>❌ Nenhum produto encontrado.</div>";
      resultadosDiv.style.display = "block";
      return;
    }

    resultados.forEach(prod => {
      const link = document.createElement("a");
      link.className = "item";
      link.href = base + `pages/produto.html?id=${encodeURIComponent(prod.nome)}`;
      link.innerHTML = `
        <img src="${base + prod.imagem}" alt="${prod.nome}">
        <span>${prod.nome}</span>
      `;
      resultadosDiv.appendChild(link);
    });

    const rect = searchInput.getBoundingClientRect();
    resultadosDiv.style.top = `${window.scrollY + rect.bottom}px`;
    resultadosDiv.style.left = `${rect.left}px`;
    resultadosDiv.style.width = `${rect.width}px`;
    resultadosDiv.style.display = "block";
  });

  document.addEventListener("click", (e) => {
    if (!resultadosDiv.contains(e.target) && e.target !== searchInput) {
      resultadosDiv.style.display = "none";
    }
  });
});

// ==== BANNER ROTATIVO COM TRANSIÇÃO SUAVE ====

document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.getElementById("banner-carousel");
  const slides = document.querySelectorAll(".carousel-slide");
  const dotsContainer = document.getElementById("banner-dots");
  let currentIndex = 0;

  if (!carousel || slides.length === 0) return;

  function showSlide(index) {
    if (index >= slides.length) index = 0;
    if (index < 0) index = slides.length - 1;
    carousel.style.transform = `translateX(-${index * 33.33}%)`; /* 33.33% por slide */
    dotsContainer.querySelectorAll("button").forEach((btn, i) => {
      btn.classList.toggle("active", i === index);
    });
    currentIndex = index;
  }

  // Criar botões de navegação (dots)
  slides.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.addEventListener("click", () => showSlide(i));
    if (i === 0) dot.classList.add("active"); // Primeiro dot ativo no início
    dotsContainer.appendChild(dot);
  });

  // Automação do carrossel
  setInterval(() => {
    showSlide(currentIndex + 1);
  }, 5000); // Troca a cada 5 segundos
});





