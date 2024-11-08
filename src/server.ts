import express, { Request, Response } from "express";  // Import 'express', Request, and Response types

const port = process.env.PORT || 5000;

const app = express();  // Use lowercase 'express' to initialize the app.

app.get('/', (req: Request, res: Response) => {  // Fix the type definition of 'req' and 'res'
  res.send('API is running......');
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
