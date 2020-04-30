import { IObserver } from './IObserver '

export class Client implements IObserver {
  name: string
  email: string

  constructor(name: string, email: string) {
    this.name = name
    this.email = email
  }

  sendEmail(): void {
    console.log(`Sending a mail to ${this.name}`)
    // Code to send a mail for the client, informing there's a sale going on
  }

}