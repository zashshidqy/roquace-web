# Hero Video Placeholder

Replace these files with your actual showreel video:

1. `hero-showreel.mp4` - H.264 encoded MP4 (primary)
2. `hero-showreel.webm` - VP9 encoded WebM (fallback)

## Recommended Specs
- Duration: 15-30 seconds, seamless loop
- Resolution: 1920x1080 (Full HD)
- Frame rate: 30fps
- Bitrate: 5-8 Mbps for MP4, 3-5 Mbps for WebM
- No audio (muted by default)
- Content: Coding/design workspace, UI animations, final results

## Free Video Sources
- Pexels: https://www.pexels.com/search/coding%20workspace/
- Coverr: https://coverr.co/search?q=coding
- Mixkit: https://mixkit.co/free-stock-video/coding/

## Compression
Use HandBrake or FFmpeg:
```bash
# MP4
ffmpeg -i input.mp4 -c:v libx264 -crf 23 -preset medium -vf "scale=1920:1080" -an hero-showreel.mp4

# WebM
ffmpeg -i input.mp4 -c:v libvpx-vp9 -crf 30 -b:v 5M -vf "scale=1920:1080" -an hero-showreel.webm
```
