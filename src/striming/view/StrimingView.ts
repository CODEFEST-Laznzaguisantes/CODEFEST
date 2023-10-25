import { Request, Response } from 'express'
import StrimingsModel from '../model/StrimingModel'

export default class ProductsView {
  constructor (private readonly strimingsModel: StrimingsModel) { }

  index = (_: Request, res: Response): void => {
    this.strimingsModel.getUsuarioById(1).then((usuario) => {
      res.render('StrimingTemplate', { usuario })
    }).catch((err) => {
      console.log(err)
      res.render('StrimingTemplate', { usuario: null })
    })
  }

  
}