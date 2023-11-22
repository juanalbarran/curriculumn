import {render, screen} from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { UserReferenceCard } from './UserReferenceCard'
import { Reference } from '../../user'

const references: Reference[] = [
  { 
    id: 1,
    lastName: 'Fuentes',
    name: 'Gustavo',
    description: 'El papa de los helados',
    phone: {
      id: 1,
      countryCode: 58,
      phoneNumber: BigInt(2124828421),
    },
    phoneId: 1,
    userId: 1,
  }
]

describe('<UserReferenceCard/>', () => {
  it('should render a component with the text "Fuentes, Gustavo"', () => {
    render(<UserReferenceCard references={references}/>)
    const reference = screen.getByText('Fuentes, Gustavo')
    expect(reference).toHaveTextContent('Fuentes, Gustavo')
  })
})