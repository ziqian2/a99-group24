
import express from 'express';
import minimist from 'minimist';
// import functions
import { add, subtract, multiply, divide, getSin, getCos, getTanFromRadians, getTanFromDegrees, exponentiation, getLog, getLogFromDifferentBase, getSqaureRoot, getCubeRoot, deriv, nthDeriv} from './lib/calculator.js';

//add database

const args = minimist(process.argv.slice(2));
const app = express();
app.use(express.urlencoded({ extended: true }))

const port = args.port || 5000;

app.get('/app/', (req, res) => {
  res.send('200 OK');
});

  app.get('/app/add/', (req,res)=>{
    const n1 = args.n1
    const n2 = args.n2
    if (isNaN(n1) && isNaN(n2)){
        res.status(500)
        res.send('There is an error occured when intering numbers')
    } else {
      if (Number.MIN_SAFE_INTEGER <= n1 <= Number.MAX_SAFE_INTEGER && Number.MIN_SAFE_INTEGER <= n2 <= Number.MAX_SAFE_INTEGER){
      res.send(add(n1,n2).toString());
      }
    }
  })

  app.get('/app/subtract', (req,res)=>{
    const n1 = args.n1
    const n2 = args.n2
    if (isNaN(n1) && isNaN(n2)){
        res.status(500)
        res.send('There is an error occured when intering numbers')
    } else {
      if (Number.MIN_SAFE_INTEGER <= n1 <= Number.MAX_SAFE_INTEGER && Number.MIN_SAFE_INTEGER <= n2 <= Number.MAX_SAFE_INTEGER){
      res.send(subtract(n1,n2).toString());
      }
    }
  })

  app.get('/app/multiply', (req,res)=>{
    const n1 = args.n1
    const n2 = args.n2
    if (isNaN(n1) && isNaN(n2)){
        res.status(500)
        res.send('There is an error occured when intering numbers')
    } else {
      if (Number.MIN_SAFE_INTEGER <= n1 <= Number.MAX_SAFE_INTEGER && Number.MIN_SAFE_INTEGER <= n2 <= Number.MAX_SAFE_INTEGER){
      res.send(multiply(n1,n2).toString());
      }
    }
  })

  app.get('/app/divide', (req,res)=>{
    const n1 = args.n1
    const n2 = args.n2
    if (isNaN(n1) && isNaN(n2)){
        res.status(500)
        res.send('There is an error occured when intering numbers')
    } else {
      if (Number.MIN_SAFE_INTEGER <= n1 <= Number.MAX_SAFE_INTEGER && Number.MIN_SAFE_INTEGER <= n2 <= Number.MAX_SAFE_INTEGER){
      res.send(divide(n1,n2).toString());
      }
    }
  })

  app.get('/app/getSin/', (req,res)=>{
    const radians = args.radians
    const radius = args.radius
    if (isNaN(radians) && isNaN(radius)){
        res.status(500)
        res.send('There is an error occured when intering numbers')
    } else {
      if (-1 <= radians <= 1 && Number.MIN_SAFE_INTEGER <= radius <= Number.MAX_SAFE_INTEGER){
      res.send(getSin(radians,radius).toString());
      }
    }
  })

  app.get('/app/getCos/', (req,res)=>{
    const radians = args.radians
    const radius = args.randius
    if (isNaN(radians) && isNaN(radius)){
        res.status(500)
        res.send('There is an error occured when intering numbers')
    } else {
      if (-1 <= radians <= 1 && Number.MIN_SAFE_INTEGER <= radius <= Number.MAX_SAFE_INTEGER){
      res.send(getCos(radians,radius).toString());
      }
    }
  })

  app.get('/app/getTanFromRadians/', (req,res)=>{
    const radians = args.radians
    if (isNaN(radians)){
        res.status(500)
        res.send('There is an error occured when intering numbers')
    } else {
      res.send(getTanFromRadians(radians).toString());
    }
  })

  app.get('/app/getTanFromDegrees/', (req,res)=>{
    const degree = args.degree
    if (isNaN(degree)){
        res.status(500)
        res.send('There is an error occured when intering numbers')
    } else {
      if (-360 <= degree <= 360){
      res.send(getTanFromDegrees(degree).toString());
      }
    }
  })

  app.get('/app/exponentiation/', (req,res)=>{
    const n1 = args.n1
    const n2 = args.n2
    if (isNaN(n1) && isNaN(n2)){
        res.status(500)
        res.send('There is an error occured when intering numbers')
    } else {
      if (Number.MIN_SAFE_INTEGER <= n1 <= Number.MAX_SAFE_INTEGER && Number.MIN_SAFE_INTEGER <= n2 <= Number.MAX_SAFE_INTEGER){
      res.send(exponentiation(n1,n2).toString());
      }
    }
  })

  app.get('/app/getLog/', (req,res)=>{
    const log = args.n1
    if (isNaN(log)){
        res.status(500)
        res.send('There is an error occured when intering numbers')
    } else {
      if(log == 0){
        res.send('Negative Infinity');
      } else if (log > 0){
        res.send(getLog(log).toString());
      }
    }
  })

  app.get('/app/getLogFromDifferentBase/', (req,res)=>{
    const log = args.n1
    const base = args.n2
    if (isNaN(log) && isNaN(base)){
        res.status(500)
        res.send('There is an error occured when intering numbers')
    } else {
      if(log == 0){
        res.send('Negative Infinity');
      } else if (log > 0){
        res.send(getLogFromDifferentBase(log, base).toString());
      }
    }
  })

  app.get('/app/getSqaureRoot/', (req,res)=>{
    const n1 = args.n1
    if (isNaN(n1)){
        res.status(500)
        res.send('There is an error occured when intering numbers')
    } else {
      if (Number.MIN_SAFE_INTEGER <= n1 <= Number.MAX_SAFE_INTEGER){
        res.send(getSqaureRoot(n1).toString());
        }
    }
  })

  app.get('/app/getCubeRoot/', (req,res)=>{
    const n1 = args.n1
    if (isNaN(n1)){
        res.status(500)
        res.send('There is an error occured when intering numbers')
    } else {
      if (Number.MIN_SAFE_INTEGER <= n1 <= Number.MAX_SAFE_INTEGER){          
        res.send(getCubeRoot(n1).toString());
      }
    }
  })

  app.get('/app/deriv/', (req,res)=>{
    const n1 = args.n1
    const power = args.power
    if (isNaN(n1) && isNaN(power)){
      res.status(500)
      res.send('There is an error occured when intering numbers')
  } else {
      res.send(deriv(n1, power).toString());
    }
  })

  app.get('/app/nthDeriv/', (req,res)=>{
    const n1 = args.n1
    const x1 = args.x1
    const func = args.func
    if (isNaN(n1) && isNaN(x1)){
      res.status(500)
      res.send('There is an error occured when intering numbers')
  } else {
      res.send(nthDeriv(n1, x1, func).toString());
    }
  })


  app.get("*", (req, res) => {
    res.status(404).send("404 NOT FOUND");
  });

  app.listen(port);

