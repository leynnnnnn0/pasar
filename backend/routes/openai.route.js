import express from 'express';
import {generateExam} from "../controllers/openai.controller.js";
const router = express.Router();

router.post('/generate-questions', generateExam);

router.post('/test', async (req, res) => {
    res.json([
        {
            "question": "What is the primary principle of HCI?",
            "options": ["Knowing the User", "Understanding the Task", "Reduce Memory Load", "Strive for Consistency"],
            "answer": "Knowing the User"
        },
        {
            "question": "Which principle refers to the reflection of various actions and processes in human’s daily life?",
            "options": ["Reduce Memory Load", "Strive for Consistency", "Remind Users", "Natural Interaction and Interface"],
            "answer": "Natural Interaction and Interface"
        },
        {
            "question": "How many specific information can a human's short term memory hold?",
            "options": ["Three", "Five", "Seven", "Nine"],
            "answer": "Nine"
        },
        {
            "question": "Which principle involves employing interfaces that provide constant reminders about important information or actions to be performed?",
            "options": ["Reduce Memory Load", "Strive for Consistency", "Remind Users", "Prevent Errors/Reversal of Action"],
            "answer": "Remind Users"
        },
        {
            "question": "What does HCI stand for?",
            "options": ["Human-Computer Interface", "Human-Centered Interaction", "Human-Computer Interaction", "Human-Centered Interface"],
            "answer": "Human-Computer Interaction"
        },
        {
            "question": "What is a key factor in designing user-friendly interfaces?",
            "options": ["User Feedback", "Complexity", "Unpredictability", "Lack of Training"],
            "answer": "User Feedback"
        },
        {
            "question": "Which method is commonly used to test usability in HCI?",
            "options": ["User Testing", "Code Review", "Performance Metrics", "A/B Testing"],
            "answer": "User Testing"
        },
        {
            "question": "What does the principle of 'Consistency' focus on in HCI?",
            "options": ["Uniformity across interfaces", "Variability in design", "Randomized layouts", "Frequent changes"],
            "answer": "Uniformity across interfaces"
        },
        {
            "question": "Which HCI principle aims to make interfaces easier to learn and use?",
            "options": ["Minimize Cognitive Load", "Increase Complexity", "Introduce Redundancy", "Limit Feedback"],
            "answer": "Minimize Cognitive Load"
        },
        {
            "question": "What is the goal of 'Error Prevention' in HCI?",
            "options": ["Reduce mistakes users can make", "Encourage errors for learning", "Ignore user errors", "Create complex workflows"],
            "answer": "Reduce mistakes users can make"
        },
        {
            "question": "How can 'Feedback' improve user experience in HCI?",
            "options": ["Provides confirmation of actions", "Delays user responses", "Increases confusion", "Reduces clarity"],
            "answer": "Provides confirmation of actions"
        },
        {
            "question": "Which principle emphasizes designing interfaces that are easy to navigate?",
            "options": ["Simplicity", "Complexity", "Obscurity", "Randomness"],
            "answer": "Simplicity"
        },
        {
            "question": "What role does 'Visibility' play in HCI?",
            "options": ["Ensures users can find and access features", "Hides important functions", "Confuses users", "Requires extensive training"],
            "answer": "Ensures users can find and access features"
        },
        {
            "question": "What does 'Learnability' refer to in the context of HCI?",
            "options": ["How easy it is for users to learn to use the system", "The complexity of the system", "The frequency of errors", "The aesthetic appeal of the interface"],
            "answer": "How easy it is for users to learn to use the system"
        },
        {
            "question": "Which aspect of HCI design focuses on reducing user errors?",
            "options": ["Error Prevention", "Aesthetic Design", "Feature Richness", "Customization"],
            "answer": "Error Prevention"
        },
        {
            "question": "What does 'Accessibility' ensure in HCI design?",
            "options": ["That all users, including those with disabilities, can use the system", "That the system is only usable by advanced users", "That design is only aesthetically pleasing", "That interfaces are complex and challenging"],
            "answer": "That all users, including those with disabilities, can use the system"
        }
    ]);
})

export default router;

