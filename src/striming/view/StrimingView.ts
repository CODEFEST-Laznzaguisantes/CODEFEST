import { Request, Response } from 'express'
import StrimingsModel from '../model/StrimingModel'

export default class ProductsView {
  constructor (private readonly strimingsModel: StrimingsModel) { }

  index = (_: Request, res: Response): void => {
    this.strimingsModel.getUsuarios().then((usuario) => {
      res.render('StrimingTemplate', { usuario })
    }).catch((err) => {
      console.log(err)
      res.render('StrimingTemplate', { usuario: null })
    })
  }

  validar = (req: Request, res: Response): void => {
    const usuario = req.body.usuario; // Obteniendo el valor del campo 'email' del formulario
    const pasword = req.body.password; // Obteniendo el valor del campo 'password' del formulario
    const usuarios = require('../database/usuarios.json');

    let usuarioValido = false

    for (const user of usuarios) {
      if (usuario === user.usuario && pasword === user.pasword) {
        usuarioValido = true
        break; // Sale del bucle si encuentra una coincidencia
      }
      else{
        usuarioValido = false
      }
    }
  
    if (usuarioValido) {
      res.render('StrimingTemplate');
    } else {
      res.redirect('http://localhost:5000/');
    }
  }
  
}