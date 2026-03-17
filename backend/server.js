import express from 'express';
import cors from 'cors';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const ai = new GoogleGenAI({ 
  apiKey: process.env.GEMINI_API_KEY 
});

app.post('/api/review', async (req, res) => {
  try {
    const { code } = req.body;
    
    const prompt = `You are an expert code reviewer. Analyze the following code for security vulnerabilities, performance bottlenecks, and best practices. Provide a concise, actionable audit.\n\nCode to analyze:\n${code}`;

    // Send the payload to Gemini
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    res.json({ review: response.text }); 
  } catch (error) {
    console.error("Error analyzing code:", error);
    res.status(500).json({ error: "Failed to generate code review." });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));