const name = String(prompt("Olá, insira o seu nome para iniciar a lista"));

let option = 0;
let welcome = "";
let isFirstInput = true;
const items = [];
let quantities = 0;

while(option != 3){
    while(option < 1 || option > 3){
        if(isFirstInput){
            welcome = `Olá ${name}, vamos começar a lista.`
            isFirstInput = false;
        }
        else{
            welcome = `Opção inexistente.`
        }
        option = Number(prompt(
            `${welcome}
            Digite a opção que deseja:
            
            1. Cadastrar novo item na lista
            2. Ver itens cadastrados
            3. Sair da aplicação`
        ));
    
        option = Math.floor(option);
    }

    switch(option){
        case 1:
            items[quantities] = prompt("Digite o item que deseja inserir:");
            quantities++;
            option = 0;
            break;
        case 2:
            if(quantities === 0){
                alert("Não existem itens cadastrados");
            }else{
                alert(`Seus itens cadastrados são: ${items}`)
            }
            option = 0;
            break;
        case 3:
            if(quantities === 0){
                alert("Não existem itens cadastrados");
            }else{
                alert(`A aplicação está sendo encerrada, você registrou ${quantities} itens`);
            }
            option = 3;
            break;
        default:
            alert("Opção inexistente.");
    }

    
}
