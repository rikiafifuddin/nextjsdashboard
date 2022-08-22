import db from '../../../../libs/db'
import bcrypt from 'bcryptjs'

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()

  const { employeeID, password } = req.body

  const salt = bcrypt.genSaltSync(10)
  const passwordHash = bcrypt.hashSync(password, salt)

  const register = await db('users').insert({
    employeeID,
    password: passwordHash
  })

  const registeredUser = await db('users').where({ id: register }).first()

  res.status(200)
  res.json({
    message: 'User registered successfully',
    data: registeredUser
  })
}
