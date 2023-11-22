import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Header } from "./Header";

describe('<Header/>', () => {
  it('should render an element with the text curriculumn', () => {
    render(<Header/>)
    const header = screen.getByText('Curriculumn')
    expect(header).toHaveTextContent('Curriculumn')
  })
})