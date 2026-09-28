#!/bin/bash

PROJECT="solaris"
SUFFIXES=("hero" "thumb" "1" "2" "3" "concept-1" "approach-1" "design-1" "design-2" "final-1")

mkdir -p public/images/projects

for suffix in "${SUFFIXES[@]}"; do
  cat > "public/images/projects/${PROJECT}-${suffix}.svg" << SVGEOF
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" fill="none">
  <rect width="800" height="600" fill="#1a1a1a"/>
  <text x="400" y="280" font-family="system-ui, sans-serif" font-weight="300" font-size="32" fill="#F5F3EF" text-anchor="middle" opacity="0.4">${PROJECT^} ${suffix}</text>
  <text x="400" y="330" font-family="system-ui, sans-serif" font-weight="300" font-size="18" fill="#3B82F6" text-anchor="middle" opacity="0.6">Placeholder Image</text>
</svg>
SVGEOF
done

echo "Solaris placeholders generated!"
