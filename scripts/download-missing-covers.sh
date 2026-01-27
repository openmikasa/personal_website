#!/bin/bash

# Download Devin Townsend - Infinity (1998 original)
wget -q -O public/images/recommendations/music/infinity.jpg "https://i.discogs.com/Dtu8Aev0Kkq6KZtLpZ5iH5eo-LoHy6T0wOWwaBcjPGc/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTY4MDMx/MjUtMTQyODc3MTM0/NC04MDEzLmpwZWc.jpeg" && echo "✅ Infinity" || echo "❌ Infinity"

# Download Oro - Cizia Zykë
wget -q -O public/images/recommendations/books/oro.jpg "https://images-na.ssl-images-amazon.com/images/P/2266192426.01.LZZZZZZZ.jpg" && echo "✅ Oro" || echo "❌ Oro"

# Download Don Rosa - Uncle Scrooge
wget -q -O public/images/recommendations/mangas/scrooge-mcduck.jpg "https://upload.wikimedia.org/wikipedia/en/9/91/Life_and_Times_of_Scrooge_McDuck.jpg" && echo "✅ Scrooge McDuck" || echo "❌ Scrooge"

# Download Man Seeking Woman
wget -q -O public/images/recommendations/tv-shows/man-seeking-woman.jpg "https://m.media-amazon.com/images/M/MV5BMTc5MDYxODk2Ml5BMl5BanBnXkFtZTgwODI3MTQ1NzE@._V1_.jpg" && echo "✅ Man Seeking Woman" || echo "❌ Man Seeking Woman"

echo "Download complete!"
