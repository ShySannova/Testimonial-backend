const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

// Define your list of testimonials
const testimonialData = [
    {
      name: 'Ted Kulakevich',
      designation: 'Illustrator',
      text: 'Dear diary, today i posted my fire icons and got 100ml views. The way i look at life has changed forever. Fire is litty just like the city.',
    },
    {
      name: 'Victor Korchuk',
      designation: 'Illustrator',
      text: `Someday i'm going to build a halfpipe and skate at my house anytime I want. Skating in the rain sucks so maybe I'll buid a roof on top of it.`,
    },
    {
      name: 'Alice Johnson',
      designation: 'Developer',
      text: 'Incredible product! It saved us a lot of time.',
    },
    {
      name: 'Bob Williams',
      designation: 'Marketing Manager',
      text: 'Excellent customer support and quick response.',
    },
    {
        name: 'Ted Kulakevich',
        designation: 'Illustrator',
        text: 'Dear diary, today i posted my fire icons and got 100ml views. The way i look at life has changed forever. Fire is litty just like the city.',
      },
      {
        name: 'Victor Korchuk',
        designation: 'Illustrator',
        text: `Someday i'm going to build a halfpipe and skate at my house anytime I want. Skating in the rain sucks so maybe I'll buid a roof on top of it.`,
      },
      {
        name: 'Alice Johnson',
        designation: 'Developer',
        text: 'Incredible product! It saved us a lot of time.',
      },
      {
        name: 'Bob Williams',
        designation: 'Marketing Manager',
        text: 'Excellent customer support and quick response.',
      }
    // Add more testimonials here
  ];

app.get('/testimonials', (req, res) => {
  res.json(testimonialData);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
