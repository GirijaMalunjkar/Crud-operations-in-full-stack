const app = required('express') ();
const PORT = 3000;

app.listen(
    PORT,
    () => {console.log('Server running on port :' + PORT);
});

app.get('/fruits', (req, res) => {
    res.send("Banana And Mango")
});