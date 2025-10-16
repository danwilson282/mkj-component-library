import type { Preview } from '@storybook/react-vite'
import '../src/styles/globals.css'
import { withTests } from '@storybook/addon-jest';
import results from '../.jest-test-results.json' with { type: 'json' };; 
import {HeroUIProvider} from "@heroui/react";
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
  decorators: [
    withTests({
      results: results,
      filesExt: '.test.tsx',
    }),
    // Wrap all stories with HeroUIProvider
    (Story) => (
      <HeroUIProvider>
        <Story />
      </HeroUIProvider>
    ),
  ],
};
// module.exports = preview;
export default preview;