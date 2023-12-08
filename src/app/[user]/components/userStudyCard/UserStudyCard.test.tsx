import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Study } from '../../user'
import { UserStudyCard } from '.'

const studies: Study[] = [{
  id: 1,
  degree: 'Architect',
  school: {
    id: 1,
    name: 'UCAB'
  },
  start: new Date(),
  end: new Date(),
  schoolId: 1,
  userId: 1
}]

describe('<UserStudyCard/>', () => {
  it('Should render an element with the text "Architect"', () => {
    render(<UserStudyCard studies={ studies }/>)
    const study = screen.getByText('Architect')
    expect(study).toHaveTextContent('Architect')
  })
})