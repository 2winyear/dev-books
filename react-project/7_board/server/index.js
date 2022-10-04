const express = require('express');
const app = express();
const PORT = precess.env.port || 8000;

app.listen(PORT, ()=>{
    console.log(`running on port ${PORT}`);
});