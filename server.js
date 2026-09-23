const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware untuk membaca form data
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Simulasi Proses Login sederhana
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'standard_user' && password === 'secret_sauce') {
    res.redirect('/dashboard.html');
  } else {
    res.send('<script>alert("Login Gagal!"); window.location.href="/";</script>');
  }
});

app.listen(PORT, () => {
  console.log(`Demo app berjalan di http://localhost:${PORT}`);
});