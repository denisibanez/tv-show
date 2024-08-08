
import { ButtonsBar } from './index';
// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Components/Buttons/ButtonsBar',
  component: ButtonsBar,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
   
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { ButtonsBar },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<ButtonsBar v-bind="args" @click.capture="onClick" />',
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  buttonType: 'primary',
  label: 'Primary Button',
  icon: 'home',
  loader: false,
};
