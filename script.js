function indexOfIgnoreCase(str: string, subStr: string): number {
    // Convert both strings to lowercase to ensure case-insensitive comparison
    return str.toLowerCase().indexOf(subStr.toLowerCase());
}
