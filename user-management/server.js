const express = require('express');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');
const knex = require('knex')(require('./knexfile').development);

knex.migrate.latest()
  .then(() => console.log('Migraciones ejecutadas exitosamente'))
  .catch((error) => console.error('Error al ejecutar migraciones:', error));

require('dotenv').config();

const app = express();
app.use(express.json());

app.use(cors());

app.use('/api', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

