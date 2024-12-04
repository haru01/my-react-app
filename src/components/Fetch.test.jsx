import React from 'react'
import {http, HttpResponse} from 'msw'
import {setupServer} from 'msw/node'
import {render, fireEvent, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import { Fetch }  from './Fetch'


const server = setupServer(
  http.get('/greeting', () => {
    return HttpResponse.json({greeting: 'hello there'})
  }),
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('loads and displays greeting', async () => {
  render(<Fetch url="/greeting" />)

  fireEvent.click(screen.getByText('Load Greeting'))
  expect(screen.getByRole('button')).toBeDisabled()

  await screen.findByRole('heading')

  expect(screen.getByRole('heading')).toHaveTextContent('hello there')
  expect(screen.getByRole('button')).toBeEnabled()
})

test('handles server error', async () => {
  server.use(
    http.get('/greeting', () => {
      return new HttpResponse(null, {status: 500})
    }),
  )

  render(<Fetch url="/greeting" />)

  fireEvent.click(screen.getByText('Load Greeting'))

  await screen.findByRole('alert')

  expect(screen.getByRole('alert')).toHaveTextContent('Oops, failed to fetch!')

})

test('TODO')