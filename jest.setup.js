// Optional: configure or set up a testing framework before each test.
// If you delete this file, remove `setupFilesAfterEnv` from `jest.config.js`

// Used for __tests__/testing-library.js
// Learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect'

import { TextEncoder, TextDecoder } from 'util';
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

global.fetch = jest.fn(() => Promise.resolve({
  // TODO: Need refactor.
  json: () => Promise.resolve(null)
}));

jest.mock('framer-motion', () => {
  const actual = jest.requireActual('framer-motion');

  return {
    __esModule: true,
    ...actual,
    AnimatePresence: ({ children, initial, ...props }) => (
      <div {...props} className='mocked-framer-motion-AnimatePresence'>
        { children }
      </div>
    ),
    motion: {
      ...actual.motion,
      div: ({ children, ...props }) => (
        <div {...props} className='mocked-framer-motion-div'>
          { children }
        </div>
      ),
    },
  };
});

