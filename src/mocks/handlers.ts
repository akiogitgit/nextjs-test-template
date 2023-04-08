import { rest } from 'msw'

export const handlers = [
  // req, res: レスポンス生成関数, ctx: ステータスコード、ヘッダ、ボディなど
  rest.get('https://jsonplaceholder.typicode.com/users', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        { id: 1, name: 'mock1' },
        { id: 2, name: 'mock2' },
      ]),
    )
  }),
]
