export interface IProduct {
  _id: number | string,
  name: string,
  price: number | string,
  imgUrl :string,
  description? :string,
  createdAt? : string,
  updatedAt? : string
}
