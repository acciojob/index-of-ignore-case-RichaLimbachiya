function indexOfIgnoreCase(str: string, subStr: string): number {
    // Convert both strings to lowercase for case-insensitive comparison
    return str.toLowerCase().indexOf(subStr.toLowerCase());
}
