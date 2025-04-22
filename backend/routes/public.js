import express from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const router = express.Router()

const JWT_SECRET = process.env.JWT_SECRET

//Cadastro
router.post('/cadastro', async (req, res) => {
    console.log('Chegou no backend', req.body)

    try{
        const user = req.body

        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(user.password, salt)

        const userDB = await prisma.user.create({ //retirar depois
            data: {
                email: user.email,
                telefone: user.telefone,
                cpf: user.cpf,
                password: hashPassword,
            },
        })

        res.status(201).json(user)

    } catch(err){
        console.log(err)
        res.status(500).json({ message: "Erro no servidor, tente novamente." })
    }
})

//Login
router.post('/login', async (req, res) => {

    try{
        const userInfo = req.body

        // Busca o usuario no banco de dados
        const user = await prisma.user.findUnique({ 
            where: { email: userInfo.email },
        })

        // Verifica se o usuario existe no banco de dados
        if(!user){
            return res.status(404).json({ message: "Usuário não encontrado." })
        }

        // Compara a senha do banco de dados com a que o usuario digitou
        const isMatch = await bcrypt.compare(userInfo.password, user.password)

        // Verifica se a senha esta correta
        if(!isMatch){
            return res.status(400).json({ message: "Senha inválida." })
        }

        // Gerar o token JWT
        const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '7d' })

        res.status(200).json(token)

    } catch(err){
        res.status(500).json({ message: "Erro no servidor, tente novamente." })
    }
})

export default router

//Usuario: luizzeduardo40
//Senha: zHielLgj2XOXZ6f4