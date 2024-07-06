const express = require('express');
const app = express();
// added this comment only
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Listening on port " + PORT))
app.use(express.json());
app.get("/getname", (request, response) => {
    response.status(200).json({
        statusCode: 1,
        statusMessage: "SUCCESS",
        data: {
            Name: "Sumit Soni"
        }
    });
})

app.post("/updatename", (request, response) => {
    try {
        const lastName = request.body.lastName;
        console.log(lastName);
        if (!lastName) throw new Error("Last Name not found.");
        response.status(200).json({
					statusCode: 1,
					statusMessage: "SUCCESS",
					data: {
						Name: "Sumit "+lastName,
					},
				});
        
    } catch (error) {
        response.status(400).json({
            statusCode: 0,
            statusMessage: "ERROR",
            ErrorMessage : error.message

        })
    }
})