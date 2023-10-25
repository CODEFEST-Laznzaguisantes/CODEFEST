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

  getUsuarioById = async (id: number): Promise<UsuarioInterface> => {
    return await new Promise((resolve, reject) => {
      try {
        const usuario = usuarios.find((usuario) => usuario.id === id)
        if (usuario !== undefined) {
          const p = { ...usuario, ...{ img: `${usuario.id}.jpg` } }
          resolve(p as UsuarioInterface)
        } else {
          reject(new Error('Product not found'))
        }
      } catch (error) {
        reject(error)
      }
    })
  }
}