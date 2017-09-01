interface Cookbook{
  createdate?:{
    __type: string,
    iso: any
  },
  cookingname:string,
  material:string,
  condiment?:string,
  cooktime:number,
  units?:string,
  level?:number
  
}