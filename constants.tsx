
import { Question } from './types';

export const QUESTIONS: Question[] = [
  // 10 HTML Questions
  { id: 1, category: 'html', text: 'What does HTML stand for?', options: ['Hyper Text Markup Language', 'Home Tool Markup Language', 'Hyperlinks and Text Markup Language', 'Hyper Tool Multi Language'], correctAnswer: 0 },
  { id: 2, category: 'html', text: 'Who is making the Web standards?', options: ['Google', 'Microsoft', 'The World Wide Web Consortium', 'Mozilla'], correctAnswer: 2 },
  { id: 3, category: 'html', text: 'Choose the correct HTML element for the largest heading:', options: ['<heading>', '<h6>', '<h1>', '<head>'], correctAnswer: 2 },
  { id: 4, category: 'html', text: 'What is the correct HTML element for inserting a line break?', options: ['<break>', '<br>', '<lb>', '<next>'], correctAnswer: 1 },
  { id: 5, category: 'html', text: 'What is the correct HTML for adding a background color?', options: ['<body bg="yellow">', '<background>yellow</background>', '<body style="background-color:yellow;">', '<color>yellow</color>'], correctAnswer: 2 },
  { id: 6, category: 'html', text: 'Choose the correct HTML element to define important text:', options: ['<i>', '<important>', '<strong>', '<b>'], correctAnswer: 2 },
  { id: 7, category: 'html', text: 'Choose the correct HTML element to define emphasized text:', options: ['<i>', '<em>', '<italic>', '<emphasize>'], correctAnswer: 1 },
  { id: 8, category: 'html', text: 'What is the correct HTML for creating a hyperlink?', options: ['<a href="url">Name</a>', '<a>url</a>', '<a url="url">Name</a>', '<link src="url">Name</link>'], correctAnswer: 0 },
  { id: 9, category: 'html', text: 'Which character is used to indicate an end tag?', options: ['^', '<', '*', '/'], correctAnswer: 3 },
  { id: 10, category: 'html', text: 'How can you make a numbered list?', options: ['<ul>', '<list>', '<ol>', '<dl>'], correctAnswer: 2 },
  
  // 10 CSS Questions
  { id: 11, category: 'css', text: 'What does CSS stand for?', options: ['Colorful Style Sheets', 'Creative Style Sheets', 'Computer Style Sheets', 'Cascading Style Sheets'], correctAnswer: 3 },
  { id: 12, category: 'css', text: 'Which HTML attribute is used to define inline styles?', options: ['font', 'class', 'styles', 'style'], correctAnswer: 3 },
  { id: 13, category: 'css', text: 'Which is the correct CSS syntax?', options: ['{body:color=black;}', 'body:color=black;', 'body {color: black;}', '{body;color:black;}'], correctAnswer: 2 },
  { id: 14, category: 'css', text: 'How do you insert a comment in a CSS file?', options: ['// this is a comment', '/* this is a comment */', "' this is a comment", '// this is a comment //'], correctAnswer: 1 },
  { id: 15, category: 'css', text: 'Which property is used to change the background color?', options: ['color', 'bgcolor', 'background-color', 'bg-color'], correctAnswer: 2 },
  { id: 16, category: 'css', text: 'Which CSS property is used to change the text color of an element?', options: ['text-color', 'color', 'fgcolor', 'font-color'], correctAnswer: 1 },
  { id: 17, category: 'css', text: 'Which CSS property controls the text size?', options: ['font-style', 'text-size', 'font-size', 'text-style'], correctAnswer: 2 },
  { id: 18, category: 'css', text: 'What is the correct CSS syntax for making all the <p> elements bold?', options: ['p {font-weight:bold;}', 'p {text-size:bold;}', '<p style="text-size:bold;">', 'p {style:bold;}'], correctAnswer: 0 },
  { id: 19, category: 'css', text: 'How do you display hyperlinks without an underline?', options: ['a {text-decoration:none;}', 'a {underline:none;}', 'a {decoration:no-underline;}', 'a {text-style:no-underline;}'], correctAnswer: 0 },
  { id: 20, category: 'css', text: 'Which property is used to change the left margin of an element?', options: ['padding-left', 'margin-left', 'indent', 'left-margin'], correctAnswer: 1 },
];

export const STORAGE_KEY = 'webmaster_quiz_data';
