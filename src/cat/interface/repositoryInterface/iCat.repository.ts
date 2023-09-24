export interface ICatRepository {
  findAllCats: () => Promise<String[]>;
}
