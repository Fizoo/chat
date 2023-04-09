export interface User {
  name: string
  id:number
  photoUrl:string
  message:Message[],
}

export interface Message {
  text:string
  id:number
  time:number
}
