/**
 * Tooltips will be skipped for touch devices. Because they're forcing users
 * to double click the buttons. They also working unstable and won't fit to
 * screen sometimes. I'm planning to deal with them later on next versions.
 * https://stackoverflow.com/a/24647710/12866913
 */
export default function touchDevice() {
  return true == ('ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch);
}
