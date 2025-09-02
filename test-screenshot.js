const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:3000');
  
  // Don't wait for canvas, just take screenshot
  await page.waitForTimeout(3000);
  
  await page.screenshot({ path: 'basic-screenshot.png', fullPage: true });
  await browser.close();
})();