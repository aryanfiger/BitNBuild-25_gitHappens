document.getElementById("analyze").addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  const url = tab.url || "";
  const target = "http://localhost:8501/?target=" + encodeURIComponent(url) + "&auto=1";
  chrome.tabs.create({ url: target });
});