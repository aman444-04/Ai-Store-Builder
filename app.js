const apiKey = 'your-api-key'; // You will replace this with your OpenAI API key
const generateDescriptionButton = document.getElementById('generate-description-button');
const descriptionOutput = document.getElementById('description-output');

generateDescriptionButton.addEventListener('click', async () => {
    const product = document.getElementById('product-input').value;
    
    if (!product) {
        alert('Please enter a product name');
        return;
    }

    const response = await fetch('https://api.openai.com/v1/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': Bearer ${apiKey},
        },
        body: JSON.stringify({
            model: 'text-davinci-003',
            prompt: Write a product description for: ${product},
            max_tokens: 100,
        }),
    });
    
    const data = await response.json();
    descriptionOutput.innerText = data.choices[0].text.trim();
});