import { Router } from "express";
const router = Router();

const users = [
    { id: '1', full_name: 'user example 1', email: 'user1@gmail.com' },
    { id: '2', full_name: 'user example 2', email: 'user2@gmail.com' },
    { id: '3', full_name: 'user example 3', email: 'user3@gmail.com' },
]

router.get('/', (req, res) => {
    const userLogin = {
        full_name: 'Gonzalito',
        role: 'admin'
    }

    res.render('index', {
        user: userLogin,
        isAdmin: userLogin.role === 'admin',
        users,
        title: 'Paykuna',
        styles: "styles.css",
        isMenu: true
    })
})

router.get('/products', (req, res) => {
    const userLogin = {
        full_name: 'Gonzalito',
        role: 'admin'
    }
    
    res.render('products', {
        user: userLogin,
        isAdmin: userLogin.role === 'admin',
        users,
        title: 'Paykuna',
        styles: "styles.css",
        isMenu: false
    })
})

export default router;