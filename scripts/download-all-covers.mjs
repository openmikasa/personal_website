import fs from 'fs';
import https from 'https';
import { pipeline } from 'stream/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_DIR = path.join(__dirname, '..', 'public', 'images', 'recommendations');

// All cover image URLs
const covers = {
  books: [
    { name: 'the-stranger.jpg', url: 'https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1738704267i/49552.jpg' },
    { name: 'stranger-than-fiction.jpg', url: 'https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1429328877i/3718.jpg' },
    { name: 'american-psycho.jpg', url: 'https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1436934349i/28676.jpg' },
    { name: 'lord-of-the-flies.jpg', url: 'https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1327869409i/7624.jpg' },
    { name: 'oro.jpg', url: 'https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1344463695i/1848300.jpg' },
    { name: '1984.jpg', url: 'https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1657781256i/61439040.jpg' },
    { name: 'deaths-end.jpg', url: 'https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1430330507i/25451264.jpg' },
    { name: 'ubik.jpg', url: 'https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1327995569i/22590.jpg' },
    { name: 'les-thanatonautes.jpg', url: 'https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1387347452i/122372.jpg' },
    { name: 'bel-ami.jpg', url: 'https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1657539241i/780581.jpg' },
  ],
  mangas: [
    { name: 'berserk.jpg', url: 'https://d29xot63vimef3.cloudfront.net/image/berserk/1-1.jpg' },
    { name: 'injustice.jpg', url: 'https://static.dc.com/dc/files/default_images/injustice_gau_vol1_5b04570647ef69.78676676.jpg' },
    { name: 'watchmen.jpg', url: 'https://d29xot63vimef3.cloudfront.net/image/watchmen/1-1.jpg' },
    { name: 'death-note.jpg', url: 'https://covers.openlibrary.org/b/id/6390630-L.jpg' },
    { name: 'hunter-x-hunter.jpg', url: 'https://covers.openlibrary.org/b/id/863552-L.jpg' },
    { name: 'real.jpg', url: 'https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1392112292i/2425297.jpg' },
    { name: 'gto.jpg', url: 'https://covers.openlibrary.org/b/id/957030-L.jpg' },
    { name: 'beck.jpg', url: 'https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1266525781i/329088.jpg' },
    { name: 'gantz.jpg', url: 'https://covers.openlibrary.org/b/id/8022360-L.jpg' },
    { name: 'scrooge-mcduck.jpg', url: 'https://covers.openlibrary.org/b/id/14356986-L.jpg' },
  ],
  music: [
    { name: 'california.jpg', url: 'https://i.scdn.co/image/ab67616d00001e02c383eff4368b19f5f05b3108' },
    { name: 'the-seer.jpg', url: 'https://i.scdn.co/image/ab67616d00001e02e721e0f37e8b68203a2a3480' },
    { name: 'mtv-unplugged.jpg', url: 'https://i.scdn.co/image/ab67616d00001e0236c5417732e53e23cb219246' },
    { name: 'dark-side-moon.jpg', url: 'https://i.scdn.co/image/ab67616d00001e02db216ca805faf5fe35df4ee6' },
    { name: 'infinity.jpg', url: 'https://i.scdn.co/image/ab67616d00001e0286a643caf15e2d5ae1eb09a3' },
    { name: 'veteran.jpg', url: 'https://f4.bcbits.com/img/a3240105575_10.jpg' },
    { name: 'insurgentes.jpg', url: 'https://i.scdn.co/image/ab67616d00001e0228b55b7357517954b4d91f3d' },
    { name: 'mezzanine.jpg', url: 'https://i.scdn.co/image/ab67616d00001e022fcb0a3c7a66e516b11cd26e' },
    { name: 'la-fin-de-lespece.jpg', url: 'https://i.scdn.co/image/ab67616d00001e02e00d963c3eb8b930d8e32d5f' },
    { name: 'social-network.jpg', url: 'https://i.scdn.co/image/ab67616d00001e02897cd4eeff3174110aa6230b' },
  ],
  movies: [
    { name: 'whiplash.jpg', url: 'https://image.tmdb.org/t/p/original/7fn624j5lj3xTme2SgiLCeuedmO.jpg' },
    { name: 'american-beauty.jpg', url: 'https://image.tmdb.org/t/p/original/wby9315QzVKdW9BonAefg8jGTTb.jpg' },
    { name: '99-francs.jpg', url: 'https://image.tmdb.org/t/p/original/8yj6tkyp7dvdzkkIasX2SUmZd81.jpg' },
    { name: 'soul.jpg', url: 'https://image.tmdb.org/t/p/original/6jmppcaubzLF8wkXM36ganVISCo.jpg' },
    { name: 'wrong.jpg', url: 'https://image.tmdb.org/t/p/original/k6IvmVvfsoIL8HNVusb4oAQr6Rk.jpg' },
    { name: 'grave.jpg', url: 'https://image.tmdb.org/t/p/original/kc8jT1MAiKM0iwdjAwC5lQrTNry.jpg' },
    { name: 'birdman.jpg', url: 'https://image.tmdb.org/t/p/original/rHUg2AuIuLSIYMYFgavVwqt1jtc.jpg' },
    { name: 'captain-fantastic.jpg', url: 'https://image.tmdb.org/t/p/original/fJENYePXSQqFXjW3w1u03PrwETa.jpg' },
    { name: 'spring-breakers.jpg', url: 'https://image.tmdb.org/t/p/original/9tyPnyEkL44qbAliM9jMRWc6bjg.jpg' },
    { name: 'battle-royale.jpg', url: 'https://image.tmdb.org/t/p/original/gFX7NuBUeKysOB9nEzRqVpHNT32.jpg' },
  ],
  'tv-shows': [
    { name: 'the-leftovers.jpg', url: 'https://media.themoviedb.org/t/p/w300_and_h450_face/ri8xr223xBb2TeHX3GKypvQPV2B.jpg' },
    { name: 'halt-and-catch-fire.jpg', url: 'https://media.themoviedb.org/t/p/w300_and_h450_face/AtKo2gANo2QBgZN9ebTAa8hXnvv.jpg' },
    { name: 'bref.jpg', url: 'https://media.themoviedb.org/t/p/w300_and_h450_face/ddCxr3JOEh8tTebrHlXv31wY37r.jpg' },
    { name: 'utopia.jpg', url: 'https://media.themoviedb.org/t/p/w300_and_h450_face/snOU6W5CU7aGVSVu29wBWzdzNzi.jpg' },
    { name: 'avatar.jpg', url: 'https://media.themoviedb.org/t/p/w300_and_h450_face/v2vn1coUMPKw0GI1KGC5J4IXtqp.jpg' },
    { name: 'the-young-pope.jpg', url: 'https://media.themoviedb.org/t/p/w300_and_h450_face/pH3u38DXGoeGUU86ZwJrFGBEPiQ.jpg' },
    { name: 'marble-hornets.jpg', url: 'https://media.themoviedb.org/t/p/w94_and_h141_face/z7ubox5cI4KGkiHOxBrA20upDaU.jpg' },
    { name: 'american-vandal.jpg', url: 'https://media.themoviedb.org/t/p/w300_and_h450_face/hMbVY6f4zfUcX0xf2jo3xZFdrMp.jpg' },
    { name: 'the-rehearsal.jpg', url: 'https://media.themoviedb.org/t/p/w300_and_h450_face/mIevNYxovnH4sR22qkUmAgS5vdv.jpg' },
    { name: 'mysterious-cities-gold.jpg', url: 'https://media.themoviedb.org/t/p/w300_and_h450_face/fodyzO7msj5M7f8JdkGGdnL9OxU.jpg' },
  ],
};

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : https;

    protocol.get(url, (response) => {
      if (response.statusCode === 302 || response.statusCode === 301) {
        // Follow redirect
        downloadImage(response.headers.location, filepath)
          .then(resolve)
          .catch(reject);
        return;
      }

      if (response.statusCode !== 200) {
        reject(new Error(`Failed: ${response.statusCode} - ${url}`));
        return;
      }

      const fileStream = fs.createWriteStream(filepath);
      response.pipe(fileStream);

      fileStream.on('finish', () => {
        fileStream.close();
        resolve();
      });

      fileStream.on('error', (err) => {
        fs.unlink(filepath, () => {});
        reject(err);
      });
    }).on('error', reject);
  });
}

async function downloadAll() {
  console.log('Starting download of all cover images...\n');

  let totalDownloaded = 0;
  let totalFailed = 0;

  for (const [category, items] of Object.entries(covers)) {
    console.log(`\n📚 ${category.toUpperCase()}`);
    const categoryDir = path.join(BASE_DIR, category);

    for (const item of items) {
      const filepath = path.join(categoryDir, item.name);

      // Skip if already exists
      if (fs.existsSync(filepath)) {
        console.log(`  ✓ ${item.name} (already exists)`);
        totalDownloaded++;
        continue;
      }

      try {
        console.log(`  ⬇  Downloading ${item.name}...`);
        await downloadImage(item.url, filepath);
        console.log(`  ✅ ${item.name}`);
        totalDownloaded++;

        // Small delay to avoid rate limiting
        await new Promise(resolve => setTimeout(resolve, 300));
      } catch (error) {
        console.error(`  ❌ ${item.name}: ${error.message}`);
        totalFailed++;
      }
    }
  }

  console.log(`\n\n📊 Summary:`);
  console.log(`   ✅ Downloaded: ${totalDownloaded}`);
  console.log(`   ❌ Failed: ${totalFailed}`);
  console.log(`   📦 Total: ${totalDownloaded + totalFailed}`);
}

downloadAll().catch(console.error);
