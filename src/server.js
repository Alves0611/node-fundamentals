import http from 'node:http'

// GET => Buscar um recurso no back-end
// POST => Criar um recurso no back-end
// PUT => Atualizar um recurso no back-end
// PATCH => Atualizar um informação específica de um recurso no back-end
// DELETE => Deletar um recurso do back-end

const users = []

const server = http.createServer((req, res) => {
    const { method, url} = req 

    if(method === 'GET' && url === '/users') {
        return res
        .setHeader('Content-Type', 'application/json')
        .end(JSON.stringify(users));
    }

    if(method === 'POST' && url === '/users') {
        users.push({
            id: 1,
            name: 'Gabriel',
            email: 'gabriel@example.com'
        })

        return res.writeHead(201).end()
    }

    return res.writeHead(404).end()
})

server.listen(3333)