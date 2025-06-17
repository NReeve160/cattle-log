const express = require('express');

const router = express.Router()

// Forgot password
router.post('/forgot-password', (request, response) => {
    if (!request.body || !request.body.refreshToken) {
        if (!request.body) {
            response.status(400).json({ message: 'invalid body', status: 400});
        } else {
        const { email } = request.body;
        response.status(200).json({ message: `Forgot password requested for email: ${email}`, status: 200});
        }
    }
});

// Reset password
router.post('/reset-password', (request, response) => {
    if (!request.body || !request.body.refreshToken) {
        if (!request.body) {
            response.status(400).json({ message: 'invalid body', status: 400});
        } else {
        const { email } = request.body;
        response.status(200).json({ message: `Password reset requested for: ${email}`, status: 200});
        }
    }
});

module.exports = router;