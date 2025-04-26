const cafes = {
    caseiro: {
      nome: "Café Caseiro",
      descricao: "Feito com grãos selecionados da serra, traz um sabor suave e acolhedor, ideal para qualquer momento do dia.",
      preco: "R$ 6,00",
      imagem: "images/caseiro.png"
    },
    italiano: {
      nome: "Café Italiano",
      descricao: "Café forte, com torra escura e aroma intenso. Perfeito para os amantes do espresso tradicional.",
      preco: "R$ 8,00",
      imagem: "images/italiano.jpg"
    },
    cappuccino: {
      nome: "Cappuccino",
      descricao: "Mistura cremosa de café, leite e um toque de chocolate, finalizado com canela opcional.",
      preco: "R$ 9,00",
      imagem: "images/Cappucino.jpg"
    },
    extraForte: {
      nome: "Café Extra-Forte",
      descricao: "Com alta concentração de cafeína e sabor marcante, é ideal para quem precisa de energia extra.",
      preco: "R$ 7,00",
      imagem: "images/cafe-extra.jpg"
    }
  };

  function mostrarCafe(tipo) {
    const coffee = cafes[tipo];
    document.getElementById('cafeImg').src = coffee.imagem;
    document.getElementById('cafeNome').innerText = coffee.nome;
    document.getElementById('cafeDesc').innerText = coffee.descricao;
    document.getElementById('cafePreco').innerText = coffee.preco;
  
    document.getElementById('menu').style.display = 'none';
    document.getElementById('cafePage').style.display = 'block';
  }
  
  function voltar() {
    document.getElementById('cafePage').style.display = 'none';
    document.getElementById('menu').style.display = '';
  }
  