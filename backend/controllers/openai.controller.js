import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});
export const generateExam = async (req, res) => {
    const topic = req.body.topic;
    if (!topic) {
        return res.status(400).json({ success: false, message: 'Topic is required' });
    }
    try {
        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo-1106', // This model is better at following instructions for structured output
            messages: [{
                "role": "user",
                "content": `Generate 5 multiple-choice question in JSON format about the topic: ${topic}. Use this structure:

                [
                  {
                    "question": "What is ...?",
                    "options": ["Option 1", "Option 2", "Option 3", "Option 4"],
                    "answer": "Correct option"
                  }
                ]

                Ensure the question is relevant, the options are plausible, and the answer is correct.`
            }],
            max_tokens: 1000,
        });

        const completion = response.choices[0].message.content;
        console.log('Raw API response:', response.choices[0].message.content);
        let parsedCompletion;
        try {
            parsedCompletion = JSON.parse(completion);
        } catch (parseError) {
            console.error('Failed to parse API response:', completion);
            return res.status(500).json({ success: false, message: 'Failed to generate a valid question' });
        }

        res.json(parsedCompletion);
    } catch (error) {
        console.error('OpenAI API error:', error);
        res.status(500).json({ success: false, message: 'Failed to generate question', error: error.message });
    }
}