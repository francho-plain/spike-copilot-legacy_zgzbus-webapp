
# zgzbus-webapp

Modern Angular 18+ web application for displaying Zaragoza (Spain) bus times.

## Overview
This project provides real-time bus stop and arrival information for Zaragoza, Spain. It is a complete migration from a legacy AngularJS app to a modern Angular 18+ codebase.

## Features
- Real-time Zaragoza bus stop and arrival times
- Modern Angular 18+ architecture (standalone components, signals, RxJS)
- Responsive and accessible UI
- Legacy icon and asset URL support (`/img/zgzbus-*.png`)
- PWA-ready (manifest, robots.txt, favicon)

## Requirements
- Node.js 18+
- pnpm (recommended)

## Installation
```sh
pnpm install
```

## Development
```sh
pnpm start
```
App will be available at http://localhost:4200

## Build
```sh
pnpm run build
```
Output in `dist/zgzbus-webapp/`

## Assets
- Static icons: `src/img/zgzbus-*.png` (served at `/img/...`)
- Favicon: `src/favicon.ico`
- Manifest: `src/manifest.webapp`
- Robots: `src/robots.txt`
- Fonts: `src/assets/fonts/`

## License
MIT
