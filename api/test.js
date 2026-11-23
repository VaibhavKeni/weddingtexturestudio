export default function handler(req, res) {
  res.status(200).json({
    status: 'success',
    message: '✅ API is working!',
    project: 'Wedding Texture Studio',
    timestamp: new Date().toISOString(),
  })
}
