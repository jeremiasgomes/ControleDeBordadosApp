export class ApiException extends Error{
    constructor(){
    super()
    this.message = message
  }
}