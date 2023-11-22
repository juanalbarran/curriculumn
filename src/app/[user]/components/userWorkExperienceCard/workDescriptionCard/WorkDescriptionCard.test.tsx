import { describe, expect, it } from 'vitest'
import {render, screen} from '@testing-library/react'
import { WorkDescriptionCard } from '.'

const description: string = 'Responsible for the design, development ' +
  'and completion of all the projects of the Systems department. ' +
  'Project Name: PMiS (POS Management and information System)'

describe('<WorkDescritionCard/>', () => {
  it('should render a component with the text ' + description, () => {
      render(<WorkDescriptionCard description={description}/>)
      const renderedDescription = screen.getByText(description)
      expect(renderedDescription).toHaveTextContent(description)
  })
})