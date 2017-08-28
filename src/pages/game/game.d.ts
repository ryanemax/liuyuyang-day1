interface Game{
    id: number,
    type:string,
    gameName:string,
    gameImage:string,
    updateDate:Date,
    downloads:number,
    price:number,
    random?:number
  }