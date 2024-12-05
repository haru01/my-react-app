import React from 'react'
import {http, HttpResponse} from 'msw'
import {setupServer} from 'msw/node'
import {render, fireEvent, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import { FetchTake2 }  from './FetchTake2'
import { describe } from 'vitest'


// const server = setupServer(
//   http.get('/greeting', () => {
//     return HttpResponse.json({greeting: 'hi'})
//   }),
// )

// beforeAll(() => server.listen())
// afterEach(() => server.resetHandlers())
// afterAll(() => server.close())

// 今日ば、ベイビーステップ（仮実装を経て本実装へ）もデモンストレーション
// 歩幅の調整は皆さんの力量に合わせて。
describe('FetchTake2', () => {
  it('とくになにもせず「こんにちは」が即表示されること（後で消す。）', async () => {
    render(<FetchTake2 url="/greeting" />)

    // expect(screen.getByRole('heading')).toHaveTextContent('こんにちは')
  })
  it.skip('Fetch通信なしに「あいさつする」ボタンをクリックすると「こんにちは」が表示されること（後で消す。）')
  it.skip('「あいさつする」ボタンをクリックするとFetch結果をもとに「こんにちは」が表示されること')
  it.skip('異常系「あいさつする」ボタンをクリックする通信エラーしたことのメッセージ「Wo!」がエラー表示されること')
})
