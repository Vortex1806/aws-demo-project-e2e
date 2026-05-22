const { test, expect } = require('@playwright/test');

test('verify homepage title and heading', async ({ page }) => {

    await page.goto('file://' + process.cwd() + '/index.html');

    await expect(page).toHaveTitle(/Learn AWS/);

    const heading = page.locator('h1');
    await expect(heading).toHaveText('Learn AWS Cloud');

});

test('verify start learning button visible', async ({ page }) => {

    await page.goto('file://' + process.cwd() + '/index.html');

    const button = page.getByRole('link', { name: 'Start Learning' });

    await expect(button).toBeVisible();

});

test('verify roadmap section exists', async ({ page }) => {

    await page.goto('file://' + process.cwd() + '/index.html');

    const roadmap = page.locator('#roadmap');

    await expect(roadmap).toBeVisible();

});

test('verify AWS roadmap contains CI/CD text', async ({ page }) => {

    await page.goto('file://' + process.cwd() + '/index.html');

    const content = page.locator('body');

    await expect(content).toContainText('CI/CD Pipelines');

});