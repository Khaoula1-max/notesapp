const express = require('express');
const app = express();
const port = process.env.PORT || 7856;
app .use(express.json());
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
    
}   );