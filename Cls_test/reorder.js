const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// 1. Rename #shoot to #services
html = html.replace('id="shoot"', 'id="services"');

// 2. Rename #stories to #knowledge-centre
html = html.replace('id="stories"', 'id="knowledge-centre"');

// 3. Change Stories text to Knowledge Centre
html = html.replace('Real Life <span class="u-cyan">Stories</span> on Set', 'The <span class="u-cyan">Knowledge</span> Centre');
html = html.replace('<!-- ============ STORIES (dark) ============ -->', '<!-- ============ KNOWLEDGE CENTRE ============ -->');

// 4. Move Knowledge Centre section
const storiesStart = html.indexOf('<!-- ============ KNOWLEDGE CENTRE ============ -->');
const storiesEnd = html.indexOf('<!-- ============ FUN FACT ============ -->');

if (storiesStart !== -1 && storiesEnd !== -1) {
    const storiesBlock = html.substring(storiesStart, storiesEnd);
    
    // Remove it from original position
    html = html.substring(0, storiesStart) + html.substring(storiesEnd);
    
    // Insert before FINAL CTA
    const finalCtaStart = html.indexOf('<!-- ============ FINAL CTA ============ -->');
    if (finalCtaStart !== -1) {
        html = html.substring(0, finalCtaStart) + storiesBlock + html.substring(finalCtaStart);
    }
}

fs.writeFileSync('index.html', html);
console.log('Reordered successfully!');
