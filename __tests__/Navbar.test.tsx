import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event' // ユーザーにクリックさせる
import { getPage } from 'next-page-tester'
import { initTestHelpers } from 'next-page-tester/dist/testHelpers'
import 'cross-fetch/polyfill'

initTestHelpers()

describe('Navigation by Link', () => {
  // next-page-tester使うときは、async
  it('Should render index page', async () => {
    const { page } = await getPage({ route: '/' })
    render(page) // HTMLの構造を取得

    expect(screen.getByText('Welcome to Next.js')).toBeInTheDocument()
  })

  it('Should render blog page', async () => {
    const { page } = await getPage({ route: '/blog' })
    render(page) // HTMLの構造を取得

    expect(screen.getByText('blog page')).toBeInTheDocument()
  })

  it('Should route to selected blog-page', async () => {
    const { page } = await getPage({ route: '/blog' })
    render(page)
    // Linkのdata-testid='blog-nav'を指定して、クリックする
    userEvent.click(screen.getByTestId('blog-nav'))
    // blog pageが見つかるまで待つ。非同期の時はfindByTextを使う
    expect(await screen.findByText('blog page')).toBeInTheDocument()
  })
})
