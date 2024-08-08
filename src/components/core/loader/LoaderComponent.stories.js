
import { LoaderComponent } from './index';
/* import storybook-vue3-router */
import { vueRouter } from 'storybook-vue3-router'

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Components/Core/LoaderComponent',
  component: LoaderComponent,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
   
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { LoaderComponent },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<LoaderComponent v-bind="args" @click.capture="onClick" />',
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {

};

/* adding storybook-vue3-router decorator */
Primary.decorators = [
  /* this is the basic setup with no params passed to the decorator */
  vueRouter()
]
