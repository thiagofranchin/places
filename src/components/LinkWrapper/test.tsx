import { render, screen } from '@testing-library/react'

import LinkWrapper from '.'

describe('<LinkWrapper />', () => {
  it('should render link and children', () => {
    render(<LinkWrapper href="/link-test">Text test</LinkWrapper>)

    const children = screen.getByRole('link', { name: /text test/i })

    expect(children).toBeInTheDocument()
    expect(children).toHaveAttribute('href', '/link-test')

    screen.logTestingPlaygroundURL()
  })
})
