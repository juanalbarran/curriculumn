import {render} from '@testing-library/react'
import { expect, test } from 'vitest'
import { Footer } from '.'

test('<Footer/> should be rendered with a text', () => {
  const footer = render(<Footer/>).findByText('Made by Juan Jesus :)')
  expect(footer)
})