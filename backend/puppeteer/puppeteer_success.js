const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({headless:false});
  const page = await browser.newPage();
  await page.goto("http://localhost:3000/");
  await page.type("#email", "test@test.fr")
  await page.type("#password", "Test123.")

  await page.click("#submitbtn")
  // browser.close(); ensuite on peux fermer avec ceci, je l'ai comment que le résultat soit plus visuel.
})();