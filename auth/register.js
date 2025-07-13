const form = document.getElementById('registerForm');
const message = document.getElementById('message');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const username = form.username.value;
  const password = form.password.value;

  try {
    const res = await fetch('http://localhost:3000/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    });

    const data = await res.json();

    if (res.ok) {
      message.textContent = "✅ Registered successfully!";
      message.style.color = 'green';
      form.reset();
    } else {
      message.textContent = "❌ " + (data.error || 'Registration failed.');
      message.style.color = 'red';
    }
  } catch (err) {
    message.textContent = "❌ Server error.";
    message.style.color = 'red';
    console.error(err);
  }
});