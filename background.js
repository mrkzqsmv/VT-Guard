chrome.runtime.onMessage.addListener((message, sender) => {
  if (message.type === "checkUrl") {
    chrome.storage.sync.get("vtApiKey", async ({ vtApiKey }) => {
      if (!vtApiKey) return;

      try {
        const url = message.url;
        const encodedUrl = btoa(url).replace(/=+$/, '');

        const response = await fetch(`https://www.virustotal.com/api/v3/urls/${encodedUrl}`, {
          headers: {
            "x-apikey": vtApiKey
          }
        });

        const data = await response.json();
        const stats = data.data.attributes.last_analysis_stats;

        if (stats.malicious > 0) {
          chrome.tabs.sendMessage(sender.tab.id, { type: "maliciousWarning" });
        }
      } catch (err) {
        console.error("VirusTotal error:", err);
      }
    });
  }
});
