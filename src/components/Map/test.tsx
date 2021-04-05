import { render, screen } from '@testing-library/react'

import Map from '.'

describe('<Map />', () => {
  it('should render without any marker', () => {
    render(<Map />)

    expect(
      screen.getByRole('link', { name: /a js library for interactive maps/i })
    ).toBeInTheDocument()
  })

  it('should render with the marker in correct place', () => {
    const place = {
      id: '1',
      name: 'Campinas',
      slug: 'campinas',
      location: {
        latitude: -22.9064,
        longitude: -47.0616,
      },
    }

    const placeTwo = {
      id: '2',
      name: 'Rio Claro',
      slug: 'rio-claro',
      location: {
        latitude: -22.4134,
        longitude: -47.5696,
      },
    }
    render(<Map places={[place, placeTwo]} />)

    expect(screen.getByTitle(/campinas/i)).toBeInTheDocument()
    expect(screen.getByTitle(/rio claro/i)).toBeInTheDocument()
  })
})
