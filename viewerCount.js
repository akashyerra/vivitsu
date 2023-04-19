// get the current viewer count from local storage or set it to 0 if it doesn't exist
let count = parseInt(localStorage.getItem("viewerCount")) || 0;

// check if the visitor's IP address has already been recorded in local storage
let ipAddress = '';
fetch('https://api.ipify.org?format=json')
  .then(response => response.json())
  .then(data => ipAddress = data.ip)
  .then(() => {
    let uniqueVisitors = JSON.parse(localStorage.getItem("uniqueVisitors")) || [];
    if (!uniqueVisitors.includes(ipAddress)) {
      // increment the count and add the current IP address to the list of unique visitors
      count++;
      uniqueVisitors.push(ipAddress);
      localStorage.setItem("viewerCount", count);
      localStorage.setItem("uniqueVisitors", JSON.stringify(uniqueVisitors));
    }
    // update the count on the webpage
    document.getElementById("viewer-count").textContent = count;
  });
