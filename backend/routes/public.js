import express from 'express'
import bcrypt from 'bcrypt'

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const router = express.Router()

//Cadastro
router.post('/cadastro', async (req, res) => {
    
    try{
        const user = req.body

        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(user.password, salt)

        const userDB = await prisma.user.create({ //retirar depois
            data: {
                email: user.email,
                name: user.name,
                cpf: user.cpf,
                password: hashPassword,
            },
        })

        res.status(201).json(user)

    } catch(err){
        res.status(500).json({message: "Erro no servidor, tente novamente."})
    }
})

export default router

//Usuario: luizzeduardo40
//Senha: zHielLgj2XOXZ6f4