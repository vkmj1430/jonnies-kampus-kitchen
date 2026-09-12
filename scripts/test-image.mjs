import OpenAI from "openai";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";

dotenv.config();

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const prompt = `
Professional restaurant menu food photography of a crispy vegetarian burger.
A golden crispy veg patty inside a soft toasted burger bun, fresh lettuce,
tomato, onion and creamy sauce. Single burger centered on a clean plate.
Appetizing, realistic food texture, premium restaurant photography,
soft studio lighting, dark elegant neutral background.
No people, no hands, no text, no logo, no watermark.
Landscape composition suitable for a modern food ordering website.
`;

const result = await client.images.generate({
  model: "gpt-image-2",
  prompt,
  size: "1536x1024",
});

const imageBase64 = result.data[0].b64_json;
const imageBuffer = Buffer.from(imageBase64, "base64");

const outputDir = path.join(process.cwd(), "public", "food");

fs.mkdirSync(outputDir, { recursive: true });

const outputPath = path.join(outputDir, "veg-burger.jpg");

fs.writeFileSync(outputPath, imageBuffer);

console.log("✅ Image generated successfully!");
console.log(`📁 Saved at: ${outputPath}`);