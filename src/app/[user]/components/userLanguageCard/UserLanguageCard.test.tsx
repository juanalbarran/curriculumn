import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { UserLanguageCard } from './UserLanguageCard'
import { Language } from '../../user'


const languages: Language[] = 
  [
    {
      id: 1,
      name: 'Spanish',
      languageLevel: {
        id: 1,
        name: 'Native'
      },
      languageLevelId: 1,
    },
    {
      id: 2,
      name: 'English',
      languageLevel: {
        id: 2,
        name: 'Professional',
      },
      languageLevelId: 2
    }
  ];

describe('<UserLanguageCard/>', () => {
  it('should render an element with the text "Spanish" and "Native"', async () => {
    render(<UserLanguageCard languages={languages}/>)
    const spanish = screen.getByText('Spanish')
    const english = screen.getByText('English')
    const native = screen.getByText('- Native')
    const professional = screen.getByText('- Professional')
    expect(spanish).toHaveTextContent('Spanish')
    expect(native).toHaveTextContent('- Native')
    expect(english).toHaveTextContent('English')
    expect(professional).toHaveTextContent('- Professional')
  })
})