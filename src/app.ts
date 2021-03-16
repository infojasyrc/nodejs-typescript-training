import Excercise2 from './grupo-02'
import Excercise1 from './group-01'

export {}

const print = (data: any) => {
  console.log(data);
}

const app = async () => {
  console.log('Hola Mundo')
  const exercise1 = new Excercise1()
  const exercise2 = new Excercise2()
  const responseExcercise1 = await exercise1.main()
  const responseExcercise2 = await exercise2.main()
  print(responseExcercise1)
  print(responseExcercise2)
}

app()
