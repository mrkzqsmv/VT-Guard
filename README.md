# VT Guard Checker - Browser Extension

**VT Guard Checker** is a browser extension that checks websites using [VirusTotal](https://www.virustotal.com/) API and alerts you if the URL is flagged as malicious.

## 🌐 Features

- Real-time URL scanning via VirusTotal API
- Visual warning page for unsafe websites
- Easy-to-use interface for entering your VirusTotal API key
- No user data is collected or stored

## 📸 Screenshots

### Entering Your API Key

When the extension is first installed, you will be prompted to enter your VirusTotal API key.

![API Key Input](screen3.png)

### Warning Page

If the site is marked as malicious by VirusTotal, a warning screen will appear.

![Warning Page](screen2.png)

---

To use VT Guard as a local web extension (without publishing it to the Chrome Web Store), follow these steps:

### ✅ Step-by-Step Guide (For Chrome or Chromium-based Browsers)

1. **Open Extensions Page**  
   Open your browser and go to:

   chrome://extensions/

2. **Enable Developer Mode**  
In the top-right corner of the page, toggle the **Developer mode** switch to **ON**.

3. **Click "Load unpacked"**  
A new set of buttons will appear. Click the **Load unpacked** button.

4. **Select the Extension Folder**  
Navigate to the folder where you:
- Cloned the repository with Git, or
- Extracted the ZIP file you downloaded from GitHub.

Select the main folder (e.g., `VT-Guard/`) that contains the `manifest.json` file.

5. **Extension is Now Installed**  
You should now see the VT Guard icon in your browser’s toolbar.  
Click it to open the popup and enter your VirusTotal API key.

---

### 🔁 Updating the Extension Later

If you make changes to the code, return to `chrome://extensions/` and click the **Reload** (🔄) button on the VT Guard card to apply updates.

---

### 🧪 Test Before Use

Make sure to:
- Enter a valid VirusTotal API key
- Try visiting a test malicious URL (like `http://malware.testing.google.test/testing/malware/`) to verify the warning page appears


