export interface ICatProvider {
  findAllCats: () => Promise<String[]>;
}
