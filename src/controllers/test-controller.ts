import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/test', async (req: Request, res: Response) => {

    try {

        console.log("Test request received.");
    
        res.status(200).send({});   

    } catch (error) {
        console.log("Error occurred while processing test request %s", error);
        res.status(500).send();  
    }

});

export { router as testController };