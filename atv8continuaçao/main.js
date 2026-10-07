const dados = require('./dados.json');

const busca = dados.find((e) => e.id == 2);
const alteracao ={
    telefone: "9999-8419",
    email: "mariaaaaa@gmail.com" 
};

const chave = Object.keys(alteracao);

chave.forEach((chave) => {
    console.log(chave);
    console.log(busca[chave]);
    busca[chave] = alteracao[chave];
    console.log(busca[chave]);
});

console.log(busca);

const alterar = (req, res) => {
    const id = req.params.id;
    const info = req.body;

    const busca = dados.find((dados) => dados.id == id); 

    Object.keys(info).forEach((i) => {
        busca[i] = info[i];
   })

   res.send("atualizado com sucesso");
}