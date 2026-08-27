const fs = require('fs');
const path = require('path');
const https = require('https');

const API_KEY = '56493429-3d05b69e21dedd1162077edd5';

const imageRequests = [
  { name: 'blog1.jpg', query: 'business meeting' },
  { name: 'shoot_guide.jpg', query: 'camera operator' },
  { name: 'news.jpg', query: 'news update' },
  { name: 'economic.jpg', query: 'economy chart' },
  { name: 'workforce.jpg', query: 'team work' },
  { name: 'women_entrepreneurs.jpg', query: 'businesswoman' },
  { name: 'product_hook.jpg', query: 'product design' },
  { name: 'kc_restaurant.jpg', query: 'restaurant food' },
  { name: 'kc_corporate.jpg', query: 'corporate office' },
  { name: 'kc_real_estate.jpg', query: 'luxury house' },
  { name: 'avatar_andrea.jpg', query: 'woman portrait professional' },
  { name: 'happy_dog.jpg', query: 'happy dog' },
  { name: 'new_era.jpg', query: 'modern city' },
  { name: 'negotiation.jpg', query: 'handshake' },
  { name: 'money.jpg', query: 'money' },
  { name: 'blog_thumb_1.jpg', query: 'office work' },
  { name: 'blog_thumb_2.jpg', query: 'camera lens' },
  { name: 'blog_thumb_3.jpg', query: 'lighting setup' },
  { name: 'blog_thumb_4.jpg', query: 'storyteller' },
  { name: 'blog_thumb_5.jpg', query: 'wedding ceremony' },
  { name: 'blog_thumb_6.jpg', query: 'event photography' },
  { name: 'home_studio.jpg', query: 'filmmaking studio' },
  { name: 'home_event.jpg', query: 'outdoor concert' },
  { name: 'home_corporate.jpg', query: 'corporate team' },
  { name: 'home_lighting.jpg', query: 'cinematic lighting' },
  { name: 'home_priya.jpg', query: 'creator studio' },
  { name: 'home_ngo.jpg', query: 'charity event' },
  { name: 'home_creator.jpg', query: 'vlogger' }
];

async function downloadImage(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => reject(err));
    });
  });
}

async function run() {
  for (const req of imageRequests) {
    const url = `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(req.query)}&image_type=photo&orientation=horizontal&per_page=3`;
    console.log(`Fetching: ${req.query}`);
    
    try {
      const res = await fetch(url);
      const text = await res.text();
      
      if (!res.ok) {
        console.error(`Failed: ${res.status} ${text}`);
        continue;
      }
      
      const data = JSON.parse(text);
      if (data.hits && data.hits.length > 0) {
        const imgUrl = data.hits[0].largeImageURL;
        const dest = path.join(__dirname, 'public', 'images', req.name);
        await downloadImage(imgUrl, dest);
        console.log(`Saved ${req.name}`);
      } else {
        console.log(`No results for ${req.query}`);
      }
    } catch (e) {
      console.error(`Error fetching ${req.name}:`, e.message);
    }
    
    // wait 1.5 seconds between requests
    await new Promise(r => setTimeout(r, 1500));
  }
}

run().then(() => console.log('Done!'));
