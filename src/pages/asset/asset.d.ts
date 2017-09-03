

interface Asset {
  no: number,
  name: string,
  classification?: string,// ?表示非必填，可为空
  brand: string
  price: number
  addTime: {
    __type: string,
    iso: any
  },
  img: string
}