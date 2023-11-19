import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { UserDataCard } from './UserDataCard'
import { User } from '../../user'

const user: User = {
  id: 1,
  name: 'Juan Jesus',
  lastName: 'Albarran Rodriguez',
  userName: 'juanalbarran',
  email: 'juanjesusalbarran@gmail.com',
  birthDate: new Date('1983-09-11'),
  birthPlace: 'Caracas',
  nationality: 'Venezuelan',
  createdAt: new Date(),
  updatedAt: new Date(),
  userAddressId: 1,
  userPhoneId: 1,
  address: {
    id: 1,
    city: 'Budapest',
    code: 1115,
    country: 'Hungary',
    street: 'Bank ban utca 9',
  },
  phone: {
    id: 1,
    countryCode: 36,
    phoneNumber: 706601399,
  },
  workExperience: [],
}

describe('<UserDataCard/>', () => {
  it('should render an element with the text Albarran Rodriguez, Juan Jesus', async () => {
    render(<UserDataCard user={user}/>)
    const userDataCard = screen.getByText('Albarran Rodriguez, Juan Jesus')
    expect(userDataCard).toBeDefined()
  })
})