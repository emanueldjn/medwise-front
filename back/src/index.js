const express = require('express')
const userRoutes = require('./routes/userRoutes')
const app = express()

app.use(express.json())
app.use('/api/users', userRoutes)

// Só roda localmente
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 3001
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })
}

// Exporta o app para Vercel
module.exports = app
