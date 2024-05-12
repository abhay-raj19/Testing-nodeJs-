import {z} from "zod";
import express from "express";

export const app = express();
app.use(express.json());

const sumInput = z.object({
    a:z.number(),
    b:z.number()
})

app.post("/sum", (req, res) => {
    const a = req.body.a;
    const b = req.body.b;
    const parsedData = sumInput.safeParse(req.body);
    if(!parsedData.success){
        return res.status(411).json({
            message:'incorrect inputs'
        })
    }
    const answer = a + b;

    res.json({
        answer
    })
});