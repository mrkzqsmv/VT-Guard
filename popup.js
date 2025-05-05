document.addEventListener("DOMContentLoaded", () => {
  const apiKeyInput = document.getElementById("apiKeyInput");
  const saveBtn = document.getElementById("saveBtn");
  const toggleBtn = document.getElementById("toggleBtn");
  const controlSection = document.getElementById("controlSection");
  const apiSection = document.getElementById("apiSection");

  let isActive = false;

  // Storage-dan oxu
  chrome.storage.sync.get(["vtApiKey", "isActive"], (data) => {
    if (data.vtApiKey) {
      apiKeyInput.value = data.vtApiKey;
      apiSection.style.display = "none";
      controlSection.style.display = "block";
    }

    isActive = data.isActive || false;
    toggleBtn.textContent = isActive ? "Turn Off" : "Turn On";
  });

  // API key yadda saxla
  saveBtn.addEventListener("click", () => {
    const apiKey = apiKeyInput.value.trim();
    if (apiKey) {
      chrome.storage.sync.set({ vtApiKey: apiKey }, () => {
        apiSection.style.display = "none";
        controlSection.style.display = "block";
      });
    }
  });

  // Aktiv / Passiv dəyiş
  toggleBtn.addEventListener("click", () => {
    isActive = !isActive;
    chrome.storage.sync.set({ isActive }, () => {
      toggleBtn.textContent = isActive ? "Turn Off" : "Turn On";
    });
  });
});
