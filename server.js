const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Backend server running');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
<<<<<<< HEAD

=======
>>>>>>> 29d9ffc35fbf07ab5cb71d9b2beb83409680406b
