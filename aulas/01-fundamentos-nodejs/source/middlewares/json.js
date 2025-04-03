export async function json(req, res) {
    const buffers = [];

    // Captura os dados do corpo da requisição
    for await (const chunk of req) {
        buffers.push(chunk);
    }

    try {
        req.body = JSON.parse(Buffer.concat(buffers).toString()); // Transforma em JSON
    } catch {
        req.body = {}; // Evita erro de desestruturação
    }

    res.setHeader('Content-Type', 'application/json'); // Define o tipo de resposta como JSON
}