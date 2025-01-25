import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "devgarg";
const yourPassword = "soneKichidia1234";
const yourAPIKey = "54ad6083-df12-4f84-9534-a1374201c919";
const yourBearerToken = "554bf0d6-b785-4338-95c5-6d17f2b09cf9";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  try {
    const response = await axios.get(`${API_URL}random`);
    const result = JSON.stringify(response.data);
    res.render("index.ejs", {
      content: result,
    });
  } catch (error) {
    res.status(404).send(error.message);
  }
});
app.get("/basicAuth", async (req, res) => {
  try {
    const response = await axios.get(`${API_URL}all?page=2`, {
      auth: {
        username: yourUsername,
        password: yourPassword,
      },
    });
    res.render("index.ejs", {
      content: JSON.stringify(response.data),
    });
  } catch (error) {
    res.status(404).send(error.message);
  }
});

app.get("/apiKey", async (req, res) => {
  try {
    const response = await axios.get(
      `${API_URL}filter?score=5&apiKey=${yourAPIKey}`
    );
    res.render("index.ejs", {
      content: JSON.stringify(response.data),
    });
  } catch (err) {
    res.status(404).send(err.message);
  }
});

app.get("/bearerToken", async (req, res) => {
  try {
    const response = await axios.get(`${API_URL}secrets/2`, {
      headers: { Authorization: `Bearer ${yourBearerToken}` },
    });
    res.render("index.ejs", {
      content: JSON.stringify(response.data),
    });
  } catch (error) {
    res.status(404).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
