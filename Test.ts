import { Sale } from './Sale'
import { Client } from './Client'

// Creates a new Sale on the store
const blackFriday = new Sale()

// Creates our clients
const clientA = new Client('John', 'john@email.com')
const clientB = new Client('Jessica', 'jessica@email.com')
const clientC = new Client('George', 'george@email.com')

// Add our clients to the observers list
blackFriday.addObserver(clientA)
blackFriday.addObserver(clientB)
blackFriday.addObserver(clientC)

// Notify all of our clients about Black Friday
blackFriday.notifyObservers()