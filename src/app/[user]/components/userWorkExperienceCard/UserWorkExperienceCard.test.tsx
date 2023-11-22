import {render} from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { WorkExperience } from '../../user'
import { UserWorkExperienceCard } from './UserWorkExperienceCard'

const workExperiences: WorkExperience[] = [
  {
    id: 1,
    userId: 1,
    companyId: 1,
    title: 'Lead Developer / Solution Architect',
    description: 'Responsible for the design, development and completion of all the projects of the Systems department. Project Name: PMiS (POS Management and information System)',
    company: {
      id: 1,
      logo: "",
      name: "Pos Managed Services",
    },
    startDate: new Date('2010-04-01'),
    endDate: new Date('2014-04-01'),
    technologies: [
      {
        id: 1,
        name:'java'
      },
      {
        id: 1,
        name: 'javaScript'
      },
    ],
    workActivity: [
      { 
        id: 1, 
        activity: 'Automatize the operation of the company.',
        workExperienceId: 1
      },
      { 
        id: 2,
        activity: 'Lead a team of 5 developers.',
        workExperienceId: 1 
      },
    ]
  }
]
describe('<UserWorkExperienceCard/>', () => {
  it('should render an element with the test "Pos Managed Services"', () => {
    const companyName = render(<UserWorkExperienceCard workExperiences={workExperiences}/>)
      .getByText('Pos Managed Services');
    expect(companyName).toHaveTextContent('Pos Managed Services')
  })
})