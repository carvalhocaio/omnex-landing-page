#!/bin/bash

# Minify CSS and JS locally
# Usage: ./minify.sh

set -e

echo "Installing dependencies..."
npm install -g csso-cli terser 2>/dev/null || true

echo ""
echo "Minifying CSS..."
ORIGINAL_CSS_SIZE=$(wc -c < css/style.css)
csso css/style.css -o css/style.min.css
MINIFIED_CSS_SIZE=$(wc -c < css/style.min.css)
CSS_SAVINGS=$((ORIGINAL_CSS_SIZE - MINIFIED_CSS_SIZE))
CSS_PERCENT=$((CSS_SAVINGS * 100 / ORIGINAL_CSS_SIZE))

echo "Original: ${ORIGINAL_CSS_SIZE} bytes"
echo "Minified: ${MINIFIED_CSS_SIZE} bytes"
echo "Saved: ${CSS_SAVINGS} bytes (${CSS_PERCENT}%)"

echo ""
echo "Minifying JavaScript..."
ORIGINAL_JS_SIZE=$(wc -c < js/main.js)
terser js/main.js -o js/main.min.js --compress --mangle --comments false
MINIFIED_JS_SIZE=$(wc -c < js/main.min.js)
JS_SAVINGS=$((ORIGINAL_JS_SIZE - MINIFIED_JS_SIZE))
JS_PERCENT=$((JS_SAVINGS * 100 / ORIGINAL_JS_SIZE))

echo "Original: ${ORIGINAL_JS_SIZE} bytes"
echo "Minified: ${MINIFIED_JS_SIZE} bytes"
echo "Saved: ${JS_SAVINGS} bytes (${JS_PERCENT}%)"

echo ""
echo "Minification complete!"
echo ""
echo "To use minified files in production:"
echo "1. Update index.html to reference .min.css and .min.js"
echo "2. Or use GitHub Actions to auto-minify on push"
