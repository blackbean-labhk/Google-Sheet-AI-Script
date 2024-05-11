function GPT(inputArray) {
  const GPT_API = "Your_API_KEY";
  const BASE_URL = "https://api.openai.com/v1/chat/completions";

  const headers = {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${GPT_API}`
  };

  // Concatenate all input strings
  const inputString = inputArray.join(" ");

  const options = {
    headers,
    method: "POST",
    muteHttpExceptions: true,
    payload: JSON.stringify({
      "model": "gpt-4",
      "messages": [{
          "role": "system",
          "content": ""
        },
        {
          "role": "user",
          "content": inputString
        }
      ],
      "temperature": 0.5
    })
  };

  const response = JSON.parse(UrlFetchApp.fetch(BASE_URL, options));
  console.log(response.choices[0].message.content);
  return response.choices[0].message.content;
}
