import {render, screen} from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { WorkTechnologiesCard, WorkTechnology } from '.'

const technologies: WorkTechnology[] = [
  { id: 1, name: 'java'},
  { id: 2, name: 'javascript' },
  { id: 3, name: 'postgresql'},
]

describe('<WorkTechnologiesCard/>', () => {
  it('should contain several technologies', () => {
    render(<WorkTechnologiesCard workTechnologies={technologies}/>)
    const java = screen.getByText('java')
    const javascript = screen.getByText('javascript')
    const postgres = screen.getByText('postgresql')
    expect(java).toHaveTextContent('java')
    expect(javascript).toHaveTextContent('javascript')
    expect(postgres).toHaveTextContent('postgresql')
  })
})