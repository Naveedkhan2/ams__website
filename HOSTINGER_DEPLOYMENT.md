# Hostinger Deployment Guide

## Files Ready for Upload

All production files are in the `dist` folder. Upload everything from the `dist` folder to your Hostinger hosting.

## Upload Instructions

### Option 1: Using File Manager (Recommended)

1. **Login to Hostinger hPanel**
2. Go to **File Manager**
3. Navigate to **public_html** (or **www** folder, depending on your Hostinger setup)
4. **Delete all existing files** (if any)
5. **Upload all files from the `dist` folder**:
   - index.html
   - .htaccess
   - assets/ folder (with all CSS and JS files)
   - images/ folder (with all image files)

### Option 2: Using FTP

1. Use an FTP client (FileZilla, WinSCP, etc.)
2. Connect to your Hostinger FTP server
3. Navigate to **public_html** or **www** folder
4. Upload all contents from the `dist` folder

## Important Notes

- **Base Path**: The site is configured for root domain hosting. If hosting in a subdirectory, update `vite.config.js` base path.
- **.htaccess**: Already included for proper React Router routing
- **Images**: All images are in the `images` folder and should work automatically

## After Upload

1. Clear your browser cache
2. Visit your domain
3. The site should load correctly

## If You Need to Rebuild

Run this command to rebuild:
```bash
npm run build
```

Then upload the new `dist` folder contents again.

