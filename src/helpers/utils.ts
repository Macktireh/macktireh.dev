export function getTotalPages(length: number, pageSize: number) {
  return Math.ceil(length / pageSize);
}