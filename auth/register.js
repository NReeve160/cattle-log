const form = document.getElementById('registerForm');
const message = document.getElementById('message');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = form.username.value.trim();
  const password = form.password.value;
  const confirmPassword = form.confirmPassword.value;

  // ✅ Validate password strength
  const isSecure = password.length >= 12 &&
                   /[0-9]/.test(password) &&
                   /[^A-Za-z0-9]/.test(password);

  if (!isSecure) {
    message.textContent = '❌ Password must be at least 12 characters long and include a number and special character.';
    message.style.color = 'red';
    return;
  }

  // ✅ Match passwords
  if (password !== confirmPassword) {
    message.textContent = '❌ Passwords do not match.';
    message.style.color = 'red';
    return;
  }

  try {
    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: email, password })
    });

    const result = await res.json();

if (res.ok) {
  message.textContent = '✅ Registration successful! Redirecting to login...';
  message.style.color = 'green';

  setTimeout(() => {
    window.location.href = '/OLD-HTML/login.html';
  }, 1000);
}
  } catch (err) {
    console.error(err);
    message.textContent = '❌ Network error.';
    message.style.color = 'red';
  }
});
