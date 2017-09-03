interface ProductShop{
  addDate?:{
      __type:string,
      iso: any
  },
  product_code:string,
  product_description:string,
  shop_code:string,
  dataset_code:string,
  imgfiles:string,
  quantities:number,
  ramdom?:number
}