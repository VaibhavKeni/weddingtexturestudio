import { useState } from 'react'
import './ApiTest.css'

export default function ApiTest() {
  const [response, setResponse] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const hitApi = async () => {
    setLoading(true)
    setError(null)
    setResponse(null)
    try {
      const res = await fetch('http://localhost:3001/api/test')
      const data = await res.json()
      setResponse(data)
    } catch (err) {
      setError('❌ Could not reach the API. Make sure the server is running.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main>
      <section className="api-test-page">
        <div className="api-box">
          <p className="label">Developer Tool</p>
          <h1>API Test</h1>
          <div className="divider" style={{ margin: '16px auto 28px' }} />

          <div className="endpoint-row">
            <span className="method">GET</span>
            <span className="url">http://localhost:3001/api/test</span>
          </div>

          <button className="btn-primary hit-btn" onClick={hitApi} disabled={loading}>
            {loading ? 'Calling API...' : 'Hit the API'}
          </button>

          {response && (
            <div className="api-response success">
              <p className="res-label">✅ Response</p>
              <pre>{JSON.stringify(response, null, 2)}</pre>
            </div>
          )}

          {error && (
            <div className="api-response error">
              <p className="res-label">{error}</p>
              <p className="res-hint">Run <code>node server.js</code> in your terminal first.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
