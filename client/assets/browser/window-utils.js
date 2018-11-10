export function openPopup(url, data) {
  if (!process.browser) {
    return;
  }
  const newwindow = window.open(url, data.windowName, `height=${data.height},width=${data.width}`);
  if (window.focus) {
    newwindow.focus()
  }
  return newwindow;
}
