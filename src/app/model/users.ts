export interface Users{
  name: string
  id:string
  photoUrl:string
  message:Message[]
}

export interface Message {
  text:string
  id:string
}
