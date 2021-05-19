const jwt = require('jsonwebtoken');

function verifyToken(request, response, next) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(400).json({ error: 'Token não encontrado' });
  }

  const parts = authHeader.split(' ');

  if (!parts.lenght == 2) {
    return response.status(401).json({ error: 'Erro no token' });
  }

  const [scheme, token] = parts;

  if (!/^Bearer$/i.test(scheme)) {
    return response.status(401).json({ error: 'Token mal formatado' });
  }

  jwt.verify(token, process.env.SECRET, (err, decoded) => {
    if (err) {
      return response.status(401).json({ error: 'Token inválido' });
    }

    request.useremail = decoded.useremail;
    return next();
  });
}

module.exports = verifyToken;
