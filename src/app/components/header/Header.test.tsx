import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Header } from "./Header";

describe('<Header/>', () => {
  it('should render an element with the text curriculumn', () => {
    expect(render(<Header/>).findByText('Curriculumn'))
  })
})