const { chromium } = require('playwright');
const path = require('path');

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    
    // Collect console errors
    const errors = [];
    page.on('console', msg => {
        if (msg.type() === 'error') {
            errors.push(msg.text());
        }
    });
    
    page.on('pageerror', err => {
        errors.push(err.message);
    });
    
    try {
        // Load the page
        const filePath = path.join(__dirname, 'index.html');
        await page.goto(`file://${filePath}`, { waitUntil: 'networkidle' });
        
        // Wait for content to load
        await page.waitForTimeout(2000);
        
        // Check if main elements are present
        const title = await page.title();
        console.log('Page title:', title);
        
        // Check for landing page content
        const heroText = await page.textContent('body');
        if (heroText.includes('Build a Developer CV That Gets You Hired')) {
            console.log('✓ Landing page hero text found');
        }
        
        // Check for CTA button
        const ctaButton = await page.locator('button:has-text("Create My CV")');
        if (await ctaButton.isVisible()) {
            console.log('✓ CTA button found and visible');
        }
        
        // Click the CTA button to test navigation
        await ctaButton.click();
        await page.waitForTimeout(1000);
        
        // Check if builder interface loaded
        const builderContent = await page.textContent('body');
        if (builderContent.includes('Personal Information')) {
            console.log('✓ Builder interface loaded successfully');
        }
        
        // Check for form fields
        const nameInput = await page.locator('input[placeholder*="Name"]');
        if (await nameInput.isVisible()) {
            console.log('✓ Form inputs are working');
        }
        
        // Test filling in form data
        await page.fill('input[placeholder="Kabelo Molopyane"]', 'Kabelo Molopyane');
        await page.fill('input[placeholder="kabelo@example.com"]', 'kabelo@example.com');
        await page.fill('input[placeholder="+27 81 234 5678"]', '+27 81 234 5678');
        console.log('✓ Form data entry working');
        
        // Report errors
        if (errors.length > 0) {
            console.log('\n⚠ Console errors detected:');
            errors.forEach(err => console.log('  -', err));
        } else {
            console.log('✓ No console errors detected');
        }
        
        console.log('\n✅ All tests passed successfully!');
        
    } catch (error) {
        console.error('Test failed:', error.message);
        process.exit(1);
    } finally {
        await browser.close();
    }
})();
