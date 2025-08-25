const express = require('express')
const userRoutes = require('./routes/userRoutes')
const app = express()

app.use(express.json())
app.use('/api/users', userRoutes)

// Para rodar localmente
const PORT = process.env.PORT || 3001
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })
}

// Exporta o handler para Vercel
module.exports = app
