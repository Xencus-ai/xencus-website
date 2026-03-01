#!/bin/bash
set -e

echo ""
echo "  Xencus Lighthouse Audit"
echo ""

# Build if needed
if [ ! -d ".next" ]; then
  echo "  Building production..."
  npm run build
fi

# Start production server in background
npm run start &
SERVER_PID=$!

# Wait until server responds (poll up to 30s)
echo "  Starting server (PID $SERVER_PID)..."
ATTEMPTS=0
until curl -s http://localhost:3000 > /dev/null 2>&1; do
  ATTEMPTS=$((ATTEMPTS + 1))
  if [ $ATTEMPTS -ge 30 ]; then
    echo "  ERROR: Server did not start within 30 seconds."
    kill $SERVER_PID 2>/dev/null
    exit 1
  fi
  sleep 1
done

echo "  Server ready. Running Lighthouse..."
echo ""

# Run Lighthouse
npx lighthouse http://localhost:3000 \
  --preset=desktop \
  --only-categories=performance,accessibility,best-practices,seo \
  --output=html \
  --output-path=.lighthouse-report.html \
  --chrome-flags="--headless --no-sandbox" \
  --quiet

# Kill server
kill $SERVER_PID 2>/dev/null

echo ""
echo "  Report saved → .lighthouse-report.html"
echo "  Open with: open .lighthouse-report.html"
echo ""
