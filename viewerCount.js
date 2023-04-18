// Initialize the viewer count
let viewerCount = 0;

// Check if the viewer count cookie exists
if (document.cookie.split(';').some((item) => item.trim().startsWith('viewerCount='))) {
  // Retrieve the viewer count from the cookie
  viewerCount = parseInt(document.cookie.replace(/(?:(?:^|.*;\s*)viewerCount\s*\=\s*([^;]*).*$)|^.*$/, '$1'));
}

// Increment the viewer count
viewerCount++;
document.cookie = `viewerCount=${viewerCount}`;

// Display the viewer count
document.getElementById('viewer-count').textContent = viewerCount;
