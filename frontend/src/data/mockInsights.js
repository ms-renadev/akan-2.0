export const subjects = [
  {
    code: 'IT312', name: 'Systems Analysis & Design', units: 3,
    radar: { Difficulty:82, Workload:75, Relevance:88, Resources:70, Pacing:65 },
    sentiment: { 'Overall Satisfaction':78, 'Workload Fairness':65, 'Learning Outcome':82, 'Materials Quality':70, 'Would Recommend':74 },
  },
  {
    code: 'IT315', name: 'Network Administration', units: 3,
    radar: { Difficulty:78, Workload:80, Relevance:85, Resources:60, Pacing:72 },
    sentiment: { 'Overall Satisfaction':74, 'Workload Fairness':70, 'Learning Outcome':80, 'Materials Quality':65, 'Would Recommend':72 },
  },
  {
    code: 'MATH211', name: 'Discrete Mathematics', units: 3,
    radar: { Difficulty:90, Workload:85, Relevance:75, Resources:65, Pacing:60 },
    sentiment: { 'Overall Satisfaction':68, 'Workload Fairness':55, 'Learning Outcome':75, 'Materials Quality':60, 'Would Recommend':65 },
  },
  {
    code: 'IT320', name: 'Web Systems & Technologies', units: 3,
    radar: { Difficulty:65, Workload:70, Relevance:92, Resources:80, Pacing:78 },
    sentiment: { 'Overall Satisfaction':88, 'Workload Fairness':82, 'Learning Outcome':90, 'Materials Quality':85, 'Would Recommend':88 },
  },
]

export const professors = [
  {
    id: 1, name: 'Dr. Reyes, Maria', initials: 'DR',
    dept: 'Dept. of Information Technology',
    rating: 4.7, reviewCount: 42,
    tags: ['SAD', 'Capstone'],
    analytics: {
      enrolled: 34,
      bars: { 'Clarity of Discussion':84, 'Accessibility':91, 'Grading Fairness':77, 'Engagement':88 },
    },
    comments: [
      { text:'Very engaging discussions. The use of real-world case studies makes the subject easier to understand.', rating:5 },
      { text:'Activities are sometimes too heavy given the time constraints. Clearer rubrics would help.', rating:4 },
      { text:'One of the best professors I\'ve had. Always opens office hours and no one is left behind.', rating:5 },
      { text:'Lessons are great but pacing can be a bit fast. More recap sessions would be appreciated.', rating:4 },
    ],
  },
  {
    id: 2, name: 'Prof. Lim, Carlo', initials: 'PL',
    dept: 'College of Engineering',
    rating: 4.3, reviewCount: 38,
    tags: ['Networks'],
    analytics: {
      enrolled: 28,
      bars: { 'Clarity of Discussion':78, 'Accessibility':80, 'Grading Fairness':82, 'Engagement':76 },
    },
    comments: [
      { text:'Very technical and knowledgeable. Sometimes the explanations go too deep too fast.', rating:4 },
      { text:'Great professor. Lab sessions are very hands-on which I appreciate.', rating:5 },
      { text:'Quizzes can be tough but it helps with retention.', rating:4 },
    ],
  },
  {
    id: 3, name: 'Ms. Santos, Lara', initials: 'MS',
    dept: 'Dept. of Mathematics',
    rating: 4.5, reviewCount: 55,
    tags: ['Discrete Math', 'Calculus'],
    analytics: {
      enrolled: 40,
      bars: { 'Clarity of Discussion':86, 'Accessibility':88, 'Grading Fairness':84, 'Engagement':82 },
    },
    comments: [
      { text:'Makes abstract math feel approachable. Patient with questions.', rating:5 },
      { text:'Homework load is high but fair. You really learn the material.', rating:4 },
    ],
  },
  {
    id: 4, name: 'Engr. Cruz, Jose', initials: 'EC',
    dept: 'College of Engineering',
    rating: 4.1, reviewCount: 29,
    tags: ['Web Systems'],
    analytics: {
      enrolled: 31,
      bars: { 'Clarity of Discussion':74, 'Accessibility':76, 'Grading Fairness':80, 'Engagement':70 },
    },
    comments: [
      { text:'Good knowledge of the subject but lectures could be more organized.', rating:4 },
      { text:'Projects are very practical and portfolio-worthy.', rating:5 },
    ],
  },
]
