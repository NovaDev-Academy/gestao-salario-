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
```

### NOSQL ACESS

mongodb+srv://mongoUser:<password>@cluster0.9iihd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
mongodb+srv://<mongoUser>:<password>@cluster0.9iihd.mongodb.net/<myFirstDatabase>?retryWrites=true&w=majority


mongodb+srv://mongoUser:mongo@DATABASE@cluster0.9iihd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
mongodb+srv://mongoUser:mongoDATABASE@cluster0.9iihd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

### Localhost Acess 

mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false



export const SERVER = {
    _mongoURI: 'mongodb://localhost:27017/jobs',
    get mongoURI() {
        return this._mongoURI;
    },
    set mongoURI(value) {
        this._mongoURI = value;
    },
}



// import { JobsController } from './jobs/jobs.controller';
// import { JobsService } from './jobs/jobs.service';
// controllers: [AppController, JobsController],
// providers: [AppService, JobsService],
// MongooseModule.forRoot('mongodb://localhost:27017/jobs'),