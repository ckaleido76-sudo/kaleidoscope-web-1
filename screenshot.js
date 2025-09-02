const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:3000');
  
  // Wait for the canvas element to be present
  await page.waitForSelector('canvas');
  
  // Wait a bit more for the animation to start
  await page.waitForTimeout(2000);
  
  await page.screenshot({ path: 'updated-website.png', fullPage: true });
  await browser.close();
})();