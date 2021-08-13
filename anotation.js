/**
 * yarn init -y -> esse comando cria o package.json
 * yarn add express -> instalando o pacote express no node modules
 * yarn add nodemon -D -> instalando o lib nodemon em modo dev
 * **/

//como acessar essa rota -> http://localhost:3000/hello?nome=Airton&idade=32
server.get("/hello", (req, res) => {
    //const nome = req.query.nome;
    const { nome, idade } = req.query;

    return res.json({
        title: "Hello World",
        message: `Ola ${nome} tudo bem?`,
        iade: idade
    });
})

server.get("/hello/:nome/:idade", (req, res) => {
    //const nome = req.query.nome;
    const { nome } = req.query;
    return res.json({
        title: "Hello World",
        message: `Ola ${nome} tudo bem?`
    });
})