export function openPopup(url, data) {
  if (!process.browser) {
    return;
  }
  return window.open(url, data.windowName, `height=${data.height},width=${data.width}`);
}
