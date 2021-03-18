
// Class 02
import { functionAddition, functionSubs } from './class-02-typescript/functions'
import ClassExample from './class-02-typescript/classes'

import Excercise1 from './class-02-typescript/exercises/group-01'
import Excercise2 from './class-02-typescript/exercises/grupo-02'

const print = (data: any) => {
  console.log(data);
}

const class02 = async () => {
  functionAddition(2, 3)
  functionSubs(8, 2)

  const example = new ClassExample()
  example.main('Juan Perez')

  const exercise1 = new Excercise1()
  const responseExcercise1 = await exercise1.main('coldplay')
  print(responseExcercise1)
  
  const exercise2 = new Excercise2()  
  const responseExcercise2 = await exercise2.main('infojasyrc')  
  print(responseExcercise2)
}

const app = async () => {
  console.log('Hola Mundo')
  await class02()
}

app()
