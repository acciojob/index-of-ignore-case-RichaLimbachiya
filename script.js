function indexOfIgnoreCase(str, subStr) {
  if (!str || !subStr) {
    return -1;
  }
  const lowerStr = str.toLowerCase();
  const lowerSubStr = subStr.toLowerCase();
  return lowerStr.indexOf(lowerSubStr);
}