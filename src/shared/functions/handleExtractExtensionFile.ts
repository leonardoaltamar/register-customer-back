export const handleExtractExtensionFile = (filename:string) => {
    const arrayLetter: string[] = filename.split('.');
    return arrayLetter[arrayLetter.length - 1];
}