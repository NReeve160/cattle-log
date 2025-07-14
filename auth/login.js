document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginForm');
  const message = document.getElementById('message');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = form.username.value.trim();
    const password = form.password.value;

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });

      const result = await res.json();

      if (res.ok) {
        localStorage.setItem('token', result.token);
        message.textContent = '✅ Login successful! Redirecting...';
        message.style.color = 'green';

        setTimeout(() => {
          window.location.href = '/OLD-HTML/accounting.html';
        }, 1000);
      } else {
        message.textContent = '❌ ' + (result.error || 'Invalid credentials.');
        message.style.color = 'red';
      }
    } catch (err) {
      console.error('Login error:', err);
      message.textContent = '❌ Network error.';
      message.style.color = 'red';
    }
  });
});
