#!/bin/bash

# Generate placeholder SVGs for all project images
PROJECTS=("meridian" "aura" "vertex" "atelier" "flux")
SUFFIXES=("hero" "thumb" "1" "2" "3" "concept-1" "approach-1" "design-1" "design-2" "final-1")

mkdir -p public/images/projects

for project in "${PROJECTS[@]}"; do
  for suffix in "${SUFFIXES[@]}"; do
    cat > "public/images/projects/${project}-${suffix}.svg" << SVGEOF
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" fill="none">
  <rect width="800" height="600" fill="#1a1a1a"/>
  <text x="400" y="280" font-family="system-ui, sans-serif" font-weight="300" font-size="32" fill="#F5F3EF" text-anchor="middle" opacity="0.4">${project^} ${suffix}</text>
  <text x="400" y="330" font-family="system-ui, sans-serif" font-weight="300" font-size="18" fill="#3B82F6" text-anchor="middle" opacity="0.6">Placeholder Image</text>
</svg>
SVGEOF
  done
done

# Create OG image
cat > public/images/og-default.svg << SVGEOF
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" fill="none">
  <rect width="1200" height="630" fill="#0A0A0A"/>
  <text x="600" y="280" font-family="system-ui, sans-serif" font-weight="700" font-size="64" fill="#F5F3EF" text-anchor="middle" letter-spacing="-2">ROQUACE</text>
  <text x="880" y="280" font-family="system-ui, sans-serif" font-weight="700" font-size="64" fill="#3B82F6" text-anchor="middle" letter-spacing="-2">.</text>
  <text x="600" y="360" font-family="system-ui, sans-serif" font-weight="300" font-size="28" fill="#A7A39E" text-anchor="middle">Digital</text>
  <text x="600" y="440" font-family="system-ui, sans-serif" font-weight="300" font-size="20" fill="#A7A39E" text-anchor="middle" opacity="0.7">Built for what's next.</text>
</svg>
SVGEOF

echo "Placeholders generated!"
