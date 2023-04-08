// サーバー
if (typeof window === 'undefined') {
  const { server } = require('./server')
  server.listen()
} else {
  // ブラウザー
  const { worker } = require('./browser')
  worker.start()
}

export {}
