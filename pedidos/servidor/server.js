//importando o express para o projeto

const express = require("express");

const pedidos = require("../dados.json")

//criar uma função para mostrar os dados 
const mostrarpedidos = (req, res) => {
    calcularSubtotais();
    res.send(pedidos);
}

const novopedido = (req, res) =>{
    //corpo da requisição HTTP
        if(req.body){
            res.send("pedido recebido, em analise");
            pedidos.push(req.body)
        }else{
            res.send("erro ao receber pedido");
        }
}
const calcularSubtotais = () => {
    pedidos.forEach(p=>{
        p.subtotal = p.precoUnitario * p.quantidade
    })
}

//criando um servidor EXPRESS
const app = express();

//faz o EXPRESS entender dados enviados por formulario HTML
app.use(express.urlencoded({extended:true}));

const porta = 3000;

app.get("/", mostrarpedidos)
app.post("/", novopedido)

//aqui vamos mandar o express COMEÇA  A ESCUTAR AS REQUISIÇÕES 

    app.listen(porta, () => {
     console.log(`Cliente: http://127.0.0.1:5500/cliente/`)
     console.log(`servidor :http://localhost:${porta}`)

});
