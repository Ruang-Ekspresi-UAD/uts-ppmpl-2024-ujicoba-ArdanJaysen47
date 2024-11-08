const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Sample data
let hobbies = [
    { id: 1, name: 'Cozinhar gandas cenas' },
    { id: 2, name: 'Correr' },
    { id: 3, name: 'Jogar PC 24/7' }
];

// Endpoint to get hobbies
app.get('/api/hobbies', (req, res) => {
    res.json(hobbies);
});

// Endpoint to add a hobby
app.post('/api/hobbies', (req, res) => {
    const newHobby = {
        id: hobbies.length + 1,
        name: req.body.name
    };
    hobbies.push(newHobby);
    res.status(201).json(newHobby);
});

// Endpoint to delete a hobby
app.delete('/api/hobbies/:id', (req, res) => {
    const hobbyId = parseInt(req.params.id);
    hobbies = hobbies.filter(hobby => hobby.id !== hobbyId);
    res.status(204).send();
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});