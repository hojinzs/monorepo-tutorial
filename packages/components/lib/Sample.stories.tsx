import {ComponentMeta, ComponentStory} from "@storybook/react"
import Sample from "./Sample";
export default {
  title: "Sample",
  component: Sample,
  args: {
    text: "sample text"
  }
} as ComponentMeta<typeof Sample>

const Template: ComponentStory<typeof Sample> = args => <Sample {...args} />

export const Primary = Template.bind({})