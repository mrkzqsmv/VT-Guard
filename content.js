chrome.storage.sync.get(["isActive"], ({ isActive }) => {
  if (!isActive) return;

  const url = window.location.href;
  chrome.runtime.sendMessage({ type: "checkUrl", url });
});

chrome.runtime.onMessage.addListener((msg) => {
  if (msg.type === "maliciousWarning") {
    const warning = document.createElement("div");
    warning.textContent = "⚠️ Warning: This site has been flagged as malicious by VirusTotal!";
    warning.style.position = "fixed";
    warning.style.top = "0";
    warning.style.left = "0";
    warning.style.right = "0";
    warning.style.backgroundColor = "red";
    warning.style.color = "white";
    warning.style.padding = "10px";
    warning.style.zIndex = "9999";
    warning.style.textAlign = "center";
    document.body.appendChild(warning);
  }
});
