import usuarios from '../database/usuarios.json'
import UsuarioInterface from '../types/UsuarioInterface'

export default class StrimingsModel {
  getUsuarios = async (): Promise<UsuarioInterface[]> => {
    return await new Promise((resolve, reject) => {
      try {
        resolve(usuarios)
      } catch (error) {
        reject(error)
      }
    })
  }

}