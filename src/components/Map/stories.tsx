import { Story, Meta } from '@storybook/react/types-6-0'
import Map from '.'

export default {
  title: 'Map',
  component: Map,
  args: {
    title: `Map`,
  },
} as Meta

export const Basic: Story = (args) => <Map {...args} />

export const Default: Story = (args) => <Map {...args} />

Default.args = {
  title: `Map Storybook`,
}
