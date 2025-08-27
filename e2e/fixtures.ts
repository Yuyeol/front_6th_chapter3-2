/* eslint-disable react-hooks/rules-of-hooks */
import { test as base, expect } from '@playwright/test';

// Extend the default Playwright test to inject MSW Service Worker in the browser context
export const test = base.extend({
  async page({ page }, use) {
    // Inject script that registers MSW worker inside the browser before any app code runs
    await page.addInitScript({
      content: `
        (async () => {
          const { setupWorker } = await import('https://cdn.jsdelivr.net/npm/msw@2.10.3/browser/esm/index.js');
          const mod = await import('/src/__mocks__/handlers.ts');
          const worker = setupWorker(...mod.handlers);
          await worker.start({ onUnhandledRequest: 'error', quiet: true });
        })();
      `,
    });

    await use(page);
  },
});

export { expect };
