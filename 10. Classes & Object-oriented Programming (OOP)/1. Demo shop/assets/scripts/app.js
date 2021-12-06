const productsList = {
  products: [
    {
      title: 'A Pillow',
      imageUrl:
        'https://images.unsplash.com/photo-1584100931218-4c2a2986c251?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      price: 19.99,
      description: 'A super soft pillow!'
    },

    {
      title: 'A Carpet',
      imageUrl:
        'https://images.unsplash.com/photo-1600166898405-da9535204843?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FycGV0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      price: 79.99,
      description: 'A super soft carpet you might like!'
    }
  ],
  render() {
    const renderHook = document.getElementById('app');
    const prodList = document.createElement('ul');
    prodList.classList = 'product-list';
    for (const prod of this.products) {
      const prodEL = document.createElement('li');
      prodEL.classList = 'product-item';
      prodEL.innerHTML = `
      <div>
        <img src="${prod.imageUrl}" alt="${prod.title}">
        <div class="product-item__content">
            <h2>${prod.title}</h2>
            <h3>\$${prod.price}</h3>
            <p>${prod.description}</p>
            <button>Add to Cart</button>
        </div>
        </div>
      `;
      prodList.append(prodEL);
    }
    renderHook.append(prodList);
  }
};

productsList.render();
