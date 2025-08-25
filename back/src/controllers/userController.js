const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

exports.register = async (req, res) => {
  const { nome, email, nDni, senha } = req.body
  try {
    const exists = await prisma.user.findUnique({ where: { email } })
    if (exists) return res.status(400).json({ error: 'Email já cadastrado' })

    const user = await prisma.user.create({
      data: { nome, email, nDni, senha }
    })
    res.status(201).json({ user })
  } catch (err) {
    res.status(500).json({ error: 'Erro ao cadastrar usuário' })
  }
}

exports.login = async (req, res) => {
  const { email, password } = req.body
  try {
    const user = await prisma.user.findUnique({ where: { email } })
    if (!user || user.senha !== password) {
      return res.status(401).json({ error: 'Email ou senha inválidos!' })
    }
    // Aqui você pode retornar dados do usuário ou um token JWT futuramente
    res.status(200).json({ message: 'Login realizado com sucesso', user: { id: user.id, nome: user.nome, email: user.email, nDni: user.nDni } })
  } catch (err) {
    res.status(500).json({ error: 'Erro ao realizar login' })
  }
}
