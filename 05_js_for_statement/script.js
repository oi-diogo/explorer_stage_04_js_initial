const items = [];

for(let item = 0; item < 10; item++){
    const itemName = prompt("Digite um produto da lista de compras");

    items[item] = itemName;
}

alert("Seus itens são: " + items);