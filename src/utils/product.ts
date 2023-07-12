export function selectARandomProduct(products: string[]): string {
  const randonProduct: number = Math.ceil(Math.random() * 4);
  return products[randonProduct];
}
