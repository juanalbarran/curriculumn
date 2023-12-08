import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { WorkActivity, WorkActivityCard } from '.'

const workActivities: WorkActivity[] = [
  { id: 1, activity: 'Automatize the operation of the company.' },
  { id: 2, activity: 'Lead a team of 5 developers.' },
]

describe('<WorkActivityCard/>', () => {
  it('should render a component with the text "Automatize the operation of the company."', () => {
    const activity = render(<WorkActivityCard workActivities={workActivities}/>)
      .getByText('Automatize the operation of the company.')
    expect(activity).toHaveTextContent('Automatize the operation of the company.')
  })
  it('should render a component with the text "Lead a team of 5 developers."', () => {
    const activity = render(<WorkActivityCard workActivities={workActivities}/>)
      .getByText('Lead a team of 5 developers.')
    expect(activity).toHaveTextContent('Lead a team of 5 developers.')
  })
})