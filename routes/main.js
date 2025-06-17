const express = require('express');

const router = express.Router()

// Sign up
router.post('/signup', (request, response) => {
    console.log(request.body);
    if (!request.body) {
        response.status(400).json({ message: 'invalid body', status: 400});
    } else {
    response.status(200).json({ message: 'Active', status: 200});
    }
});

// Log in
router.post('/login', (request, response) => {
    if (!request.body) {
        response.status(400).json({ message: 'invalid body', status: 400});
    } else {
    response.status(200).json({ message: 'Active', status: 200});
    }
});

// Log out
router.post('/logout', (request, response) => {
    if (!request.body) {
        response.status(400).json({ message: 'invalid body', status: 400});
    } else {
    response.status(200).json({ message: 'Active', status: 200});
    }
});

// Session token
router.post('/token', (request, response) => {
    if (!request.body || !request.body.refreshToken) {
        if (!request.body) {
            response.status(400).json({ message: 'invalid body', status: 400});
        } else {
        const { refreshToken } = request.body;
        response.status(200).json({ message: `Refresh token requested for token: ${refreshToken}`, status: 200});
        }
    }
});

module.exports = router;