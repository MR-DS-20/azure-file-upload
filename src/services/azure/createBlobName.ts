export function createBlobName(orginal: string): string {
    return `${Date.now()}-${orginal}`;
}