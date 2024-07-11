const express = require('express');
const app = express();

const PORT = process.env.PORT || 3001;
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

app.post("/api/book-appointment", (request, response) => {
	try {
		const body = request.body;
		console.log(body,body.length); 
		if (!body || Object.keys(body).length == 0)
			throw new Error("Please provide data to book an appointment.");
		response.status(200).json({
			statusCode: 1,
			statusMessage: "SUCCESS",
			data: {
                Message: "Appointment has been Scheduled.",
                createdTime: new Date().toISOString()
			},
		});
	} catch (error) {
		response.status(400).json({
			statusCode: 0,
			statusMessage: "ERROR",
			ErrorMessage: error.message,
		});
	}
});