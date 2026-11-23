import express from 'express'
import cors from 'cors'

const app = express()
const PORT = 3001

app.use(cors())
app.use(express.json())

// Test API endpoint
app.get('/api/test', (req, res) => {
  res.json({
    status: 'success',
    message: '✅ API is working!',
    project: 'Wedding Texture Studio',
    timestamp: new Date().toISOString(),
  })
})

app.listen(PORT, () => {
  console.log(`✅ API server running at http://localhost:${PORT}`)
  console.log(`   Hit: http://localhost:${PORT}/api/test`)
})
