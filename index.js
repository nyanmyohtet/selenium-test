const { Builder, By, Key, until } = require("selenium-webdriver");

(async function example() {
  let driver = await new Builder().forBrowser("chrome").build();
  try {
    // Navigate to Url
    await driver.get("https://www.github.com");

    // Enter text "selenium" and perform keyboard action "Enter"
    await driver.findElement(By.name("q")).sendKeys("selenium", Key.ENTER);
  } finally {
    driver.quit();
  }
})();
