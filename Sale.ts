import { IObserver } from './IObserver '

export class Sale {
  private observers: IObserver[]

  constructor() {
    this.observers = []
  }

  addObserver(ob: IObserver) {
    this.observers.push(ob)
  }

  notifyObservers() {
    console.log('Notifying clients:')
    this.observers.map((observer) => observer.sendEmail())
  }

}