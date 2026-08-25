const fs = require('fs');

let tsx = fs.readFileSync('caas-nextjs/app/page.tsx', 'utf8');

// 1. Rename shoot to services
tsx = tsx.replace('id="shoot"', 'id="services"');

// 2. Change Stories text
tsx = tsx.replace('Real Life <span className="u-gold">Stories</span> on Set', 'The <span className="u-gold">Knowledge</span> Centre');
tsx = tsx.replace('id="stories"', 'id="knowledge-centre"');

// 4. Move Knowledge Centre section
const storiesStart = tsx.indexOf('<section className="section dark" id="knowledge-centre">');
const storiesEnd = tsx.indexOf('{/* FUN FACT */}');

if (storiesStart !== -1 && storiesEnd !== -1) {
    const storiesBlock = tsx.substring(storiesStart, storiesEnd);
    
    // Remove it from original position
    tsx = tsx.substring(0, storiesStart) + tsx.substring(storiesEnd);
    
    // Insert before FINAL CTA
    const finalCtaStart = tsx.indexOf('<section className="section final wrap">');
    if (finalCtaStart !== -1) {
        tsx = tsx.substring(0, finalCtaStart) + storiesBlock + tsx.substring(finalCtaStart);
    }
}

fs.writeFileSync('caas-nextjs/app/page.tsx', tsx);
console.log('Reordered page.tsx successfully!');
