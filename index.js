import express from 'express'

import path from 'path';

const porta = 3000;
const host = '0.0.0.0';

var listarPacientes = [];


const app = express();
    
app.use('/cadastroPacientes', (req,resp)=>{

    const nome = req.query.nome;
    const sobrenome = req.query.sobrenome;
    const sexo = req.query.sexo;
    const cidade = req.query.cidade;
    const estado = req.query.estado;
    const cep = req.query.cep;

    listarPacientes.push({
        nome: nome,
        sobrenome: sobrenome,
        sexo: sexo,
        cidade: cidade,
        estado: estado,
        cep: cep
    });
    resp.write('<html>');
    resp.write('<head>');
    resp.write('<title>Cadastro</title>');
    resp.write('<meta charset="utf-8">');
    resp.write('</head>');
    resp.write('<body>');
    resp.write(`<h1>Paciente ${nome} ${sobrenome} cadastrado com sucesso!</h1>`);
    resp.write('<a href="/cadastroPacientes.html">Continuar cadastrando....</a>');
    resp.write("<br/>");
    resp.write('<a href="/listarPacientes">Lista de Pacientes cadastrados</a>');
    resp.write("</body>");
    resp.write('</html>')
    resp.end();
});

app.use('/listarPacientes', (req,resp)=>{
    resp.write('<html>');
    resp.write('<head>');
    resp.write('<title>Cadastro</title>');
    resp.write('<meta charset="utf-8">');
    resp.write('<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">')
    resp.write('</head>');
    resp.write('<body>');
    resp.write('<h1>Lista de Pacientes</h1>');
    resp.write('<table class="table table-striped">');
    resp.write('<tr>');
    resp.write('<th>Nome</th>');
    resp.write('<th>Sobrenome</th>');
    resp.write('<th>Sexo</th>');
    resp.write('<th>Cidade</th>');
    resp.write('<th>Estado</th>');
    resp.write('<th>CEP</th>');
    resp.write('</tr>');
    for (let i=0; i<listarPacientes.length; i++){
        resp.write('<tr>');
        resp.write(`<td>${listarPacientes[i].nome}`);
        resp.write(`<td>${listarPacientes[i].sobrenome}`);
        resp.write(`<td>${listarPacientes[i].sexo}`);
        resp.write(`<td>${listarPacientes[i].cidade}`);
        resp.write(`<td>${listarPacientes[i].estado}`);
        resp.write(`<td>${listarPacientes[i].cep}`);
        resp.write('</tr>');
    }
    resp.write('</table>');
    resp.write('<a href="/">Voltar</a>');
    resp.write('</body>');
    resp.write('<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>')
    resp.write('</html>');
    resp.end();
});



app.use(express.static('./publico'))

app.listen(porta, host, () => {
    console.log(`Servidor executando na porta http://${host}:${porta}`);
})