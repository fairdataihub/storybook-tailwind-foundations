import ColorsFoundation from '../components/ColorsFoundation.vue';
import { getTheme } from "storybook-tailwind-foundations";

export default {
  title: 'Design System',
  component: ColorsFoundation,
};

const Template = (args) => ({
  components: { ColorsFoundation },
  setup() {
    return { args };
  },
  template: '<ColorsFoundation v-bind="args" />',
});

export const Colors = Template.bind({});
Colors.args = {
  colors: getTheme('colors'),
}
