import { Router } from 'express'
import StrimingView from '../view/StrimingView'

export default class SRouter {
  router: Router

  constructor (private readonly strimingView: StrimingView) {
    this.router = Router()
    this.routes()
  }

  routes = (): void => {
    this.router.post('/validar', this.strimingView.validar)
    this.router.get('/', this.strimingView.index)
  }
}