export class Contact {

  constructor(
    public name: string,
    public email: string,
    public message: string,
    public uxRating: string,
    public feeQuote?: string
  ) {  }

}