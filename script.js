document.addEventListener("DOMContentLoaded", () => {
  const generateBtn = document.getElementById("generateBtn");
  const userInput = document.getElementById("userInput");
  const output = document.getElementById("output");

  generateBtn.addEventListener("click", async () => {
    const userText = userInput.value.trim();
    if (userText === "") return;

    const apiKey = "3fb20e8d30msha90c0addaf4ffcfp18d730jsn0aa0470d5e34"; // Replace with your RapidAPI API Key
    const apiUrl = "https://robomatic-ai.p.rapidapi.com/api"; // Replace with the API endpoint provided by RapidAPI

    const options = {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Key": apiKey,
        "X-RapidAPI-Host": "robomatic-ai.p.rapidapi.com",
      },
      body: new URLSearchParams({
        in: userText,
        op: "in",
        cbot: "1",
        SessionID: "RapidAPI1",
        cbid: "1",
        key: "RHMN5hnQ4wTYZBGCF3dfxzypt68rVP",
        ChatSource: "RapidAPI",
        duration: "1",
      }),
    };

    try {
      const response = await fetch(apiUrl, options);
      if (response.ok) {
        const data = await response.json();
        const generatedText = data.out; // Extract the generated text

        output.innerHTML = `<p>${generatedText}</p>`;
      } else {
        output.innerHTML = "<p>Error generating text. Please try again later.</p>";
      }
    } catch (error) {
      console.error(error);
      output.innerHTML = "<p>An error occurred. Please check the console.</p>";
    }
  });
});
