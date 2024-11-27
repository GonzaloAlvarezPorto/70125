import { Router } from 'express';

const router = Router();

router.use('/', (req, res) => {
    res.render('chat', {
        isMenu: true
    })
})

const users = [
    { id: '1', full_name: 'user example 1', email: 'user1@gmail.com' },
    { id: '2', full_name: 'user example 2', email: 'user2@gmail.com' },
    { id: '3', full_name: 'user example 3', email: 'user3@gmail.com' },
]


router.get('/users', (req, res) => {
    const userLogin = {
        full_name: 'Gonzalito',
        role: 'admin'
    }

    res.render('users', {
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