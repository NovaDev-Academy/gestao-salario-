### start projects nestjs

npm install -g @nestjs/cli
nest new my-nest-project

nest g module users
nest g service users
nest g controller users
nest g class users/user.entity

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# production mode
$ npm run start:prod
```

```bash
# watch mode
$ npm run start:dev
```

### start projects nestjs

```bash
npm install --save mongoose
```
```bash
npm install --save @nestjs/mongoose mongoose

$ npm i --save class-validator class-transformer
```

### NOSQL ACESS

mongodb+srv://mongoUser:<password>@cluster0.9iihd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
mongodb+srv://<mongoUser>:<password>@cluster0.9iihd.mongodb.net/<myFirstDatabase>?retryWrites=true&w=majority


mongodb+srv://mongoUser:mongo@DATABASE@cluster0.9iihd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
mongodb+srv://mongoUser:mongoDATABASE@cluster0.9iihd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

### Localhost Acess 

mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false

//mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false
//mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false


export const SERVER = {
    _mongoURI: 'mongodb://localhost:27017/jobs',
    get mongoURI() {
        return this._mongoURI;
    },
    set mongoURI(value) {
        this._mongoURI = value;
    },
}


imports: [
    MongooseModule.forRoot({
       uri: 'mongodb://admin:admin@localhost:30000',
       dbName: 'data'
    }),
  ]


// import { JobsController } from './jobs/jobs.controller';
// import { JobsService } from './jobs/jobs.service';
// controllers: [AppController, JobsController],
// providers: [AppService, JobsService],
// MongooseModule.forRoot('mongodb://localhost:27017/jobs'),



DTOS-




### Filter Exceptions (filtors de exceptios por requeste http)

/**
 * Exeption Filter em Express vs Nestjs  
 *  Podem ser usados a nivel de metodos InJECTR dEP, controller InJECTR dEP , global CRIANDO NOVA ISNTANCIA
 *  
 * 
  @Get(':id')
  findOneById(@Param('id') id): Promise<Job> {
    return this.jobservice.find(id);
  }

@Get(':id')
findOneById(@Param('id') id): Promise<Job> {
  return this.jobservice
    .find(id)
    .then((result) => {
    if (result) return result;
      throw new HttpException('job not found', HttpStatus.NOT_FOUND);
    })
    .catch(() => {
      throw new HttpException('job not found', HttpStatus.NOT_FOUND);
  });
}

// NO MAIN.TS

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './filters/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(3000);
}
bootstrap();
 */
 #### Validation PIPES
  
4 escopos  (param, metodo, controller, global)

### Custom decorators etc ...  , 

- passar dados de user a muitos endpoints



export const BOOKS = [
  { id: 1, title: 'First book', description: "This is the description for the first book", author: 'Olususi Oluyemi' },
  { id: 2, title: 'Second book', description: "This is the description for the second book", author: 'John Barry' },
  { id: 3, title: 'Third book', description: "This is the description for the third book", author: 'Clement Wilfred' },
  { id: 4, title: 'Fourth book', description: "This is the description for the fourth book", author: 'Christian nwamba' },
  { id: 5, title: 'Fifth book', description: "This is the description for the fifth book", author: 'Chris anderson' },
  { id: 6, title: 'Sixth book', description: "This is the description for the sixth book", author: 'Olususi Oluyemi' },
];