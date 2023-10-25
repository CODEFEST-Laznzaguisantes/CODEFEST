import express, { Application } from 'express'
import path from 'path'
import dotenv from 'dotenv'
import StrimingsRouter from './router/StrimingRouter'
import StrimingsModel from './model/StrimingModel'
import StrimingsView from './view/StrimingView'
import morgan from 'morgan'

class Server {
  strimings: Application

  constructor (private readonly strimingsRouter: StrimingsRouter) {
    this.strimings = express()
    this.config()
    this.route()
  }

  config = (): void => {
    dotenv.config({
      path: path.join(__dirname, '../../config/.env.development')
    })
    this.strimings.set('view engine', 'ejs')
    this.strimings.set('views', path.join(__dirname, './template'))
    this.strimings.use(express.static(path.join(__dirname, './public')))
    this.strimings.use(express.urlencoded({ extended: false }))
    this.strimings.use(morgan('tiny'))
  }

  route = (): void => {
    this.strimings.use('/', this.strimingsRouter.router)
  }

  start = (): void => {
    const PORT = process.env.PORT ?? 3000
    const HOST = process.env.HOST ?? 'localhost'
    this.strimings.listen(PORT, () => {
      console.info(`SERVER: http://${HOST}:${PORT}`)
    })
  }
}

const server = new Server(new StrimingsRouter(new StrimingsView(new StrimingsModel())))
server.start()