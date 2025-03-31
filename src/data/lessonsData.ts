
// Define the types for our lessons data
export interface QuizType {
  questions: {
    question: string;
    answers: string[];
    correctAnswer: number; // Index of the correct answer
  }[];
}

export interface LessonResource {
  title: string;
  url: string;
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  videoUrl?: string;
  content?: string;
  quiz?: QuizType;
  resources?: LessonResource[];
}

export interface LessonGroup {
  topicId: string;
  topicName: string;
  lessons: Lesson[];
}

// Sample lesson data
export const lessonsData: LessonGroup[] = [
  {
    topicId: 'core-concepts',
    topicName: 'Core Concepts',
    lessons: [
      {
        id: 'dharma-intro',
        title: 'Introduction to Dharma',
        description: 'Learn about the foundational concept of dharma in Hindu philosophy',
        videoUrl: 'https://www.youtube.com/embed/lFiNGO0joPk',
        quiz: {
          questions: [
            {
              question: 'What is the best translation of the word Dharma?',
              answers: [
                'Duty',
                'Religion',
                'Righteousness',
                'There is no exact translation'
              ],
              correctAnswer: 3
            },
            {
              question: 'Which of the following is NOT a form of dharma?',
              answers: [
                'Sanatana Dharma',
                'Sva-dharma (personal duty)',
                'Maya Dharma',
                'Raja Dharma (duty of kings)'
              ],
              correctAnswer: 2
            },
            {
              question: 'Who is considered the guardian of dharma in Hindu tradition?',
              answers: [
                'Brahma',
                'Vishnu',
                'Shiva',
                'Indra'
              ],
              correctAnswer: 1
            }
          ]
        },
        resources: [
          {
            title: 'The Concept of Dharma in Hinduism',
            url: 'https://www.hinduwebsite.com/hinduism/dharma.asp'
          },
          {
            title: 'Dharma in the Bhagavad Gita',
            url: 'https://www.holy-bhagavad-gita.org/chapter/1'
          }
        ]
      },
      {
        id: 'karma-principle',
        title: 'The Principle of Karma',
        description: 'Understand the law of cause and effect in Hindu philosophy',
        videoUrl: 'https://www.youtube.com/embed/Upc42sImAJM',
        quiz: {
          questions: [
            {
              question: 'What does the word "karma" literally mean?',
              answers: [
                'Destiny',
                'Fate',
                'Action',
                'Reaction'
              ],
              correctAnswer: 2
            },
            {
              question: 'According to the law of karma, what determines a person\'s future?',
              answers: [
                'Divine will',
                'Random chance',
                'Past actions',
                'Social status'
              ],
              correctAnswer: 2
            },
            {
              question: 'Which type of karma is created by actions in the current life?',
              answers: [
                'Sanchita Karma',
                'Prarabdha Karma',
                'Agami Karma',
                'Kriyamana Karma'
              ],
              correctAnswer: 3
            }
          ]
        }
      }
    ]
  },
  {
    topicId: 'deities',
    topicName: 'Hindu Deities',
    lessons: [
      {
        id: 'trimurti-concept',
        title: 'The Trimurti Concept',
        description: 'Explore the trinity of Brahma, Vishnu, and Shiva',
        videoUrl: 'https://www.youtube.com/embed/8F9NtIFoQmk',
        quiz: {
          questions: [
            {
              question: 'Which deity is known as the creator in the Trimurti?',
              answers: [
                'Vishnu',
                'Shiva',
                'Brahma',
                'Indra'
              ],
              correctAnswer: 2
            },
            {
              question: 'Which deity is associated with preservation?',
              answers: [
                'Brahma',
                'Vishnu',
                'Shiva',
                'Ganesha'
              ],
              correctAnswer: 1
            }
          ]
        }
      }
    ]
  }
];
