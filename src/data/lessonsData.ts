
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
    topicId: 'hindu-philosophy',
    topicName: 'Hindu Philosophy',
    lessons: [
      {
        id: 'dharma-intro',
        title: 'Introduction to Dharma',
        description: 'Learn about the foundational concept of dharma in Hindu philosophy',
        videoUrl: 'https://www.youtube.com/embed/lFiNGO0joPk',
        content: `
          <h2>Understanding Dharma</h2>
          <p>Dharma is one of the most complex and profound concepts in Hindu philosophy. The term comes from the Sanskrit root "dhṛ," which means "to sustain, support, or uphold." While there is no exact English translation, dharma encompasses righteousness, duty, cosmic order, and the path of right living.</p>

          <h3>Multiple Dimensions of Dharma</h3>
          <p>Dharma operates on multiple levels:</p>
          <ul>
            <li><strong>Cosmic Dharma (Rita):</strong> The natural order and rhythm of the universe</li>
            <li><strong>Social Dharma (Varnashrama Dharma):</strong> One's duties based on social position and stage of life</li>
            <li><strong>Personal Dharma (Sva-dharma):</strong> One's individual purpose and path</li>
          </ul>

          <p>According to Hindu belief, following one's dharma leads to harmony, balance, and eventually, spiritual liberation (moksha). Acting against one's dharma creates disorder (adharma) and negative karma.</p>

          <h3>Dharma in Sacred Texts</h3>
          <p>The concept of dharma is extensively explored in Hindu scriptures:</p>
          <ul>
            <li>The Bhagavad Gita presents the dilemma of conflicting dharmas through Arjuna's crisis</li>
            <li>The Dharma Shastras provide specific guidelines for social and personal conduct</li>
            <li>The Upanishads connect dharma to the ultimate reality (Brahman)</li>
          </ul>

          <p>Lord Vishnu is revered as the protector of dharma, appearing as various avatars throughout cosmic cycles when dharma declines and adharma increases.</p>

          <h3>Dharma in Daily Life</h3>
          <p>In practice, dharma guides ethical decision-making and provides a framework for living a meaningful life. It encourages individuals to fulfill their responsibilities while maintaining spiritual awareness.</p>
        `,
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
        videoUrl: 'https://www.youtube.com/embed/yJMqULiDtOM?si=2AgJOdBvcEIUMI5b',
        content: `
          <h2>The Law of Karma</h2>
          <p>Karma, literally meaning "action," is a fundamental concept in Hindu philosophy that describes the principle of cause and effect. According to this law, every action (karma) generates a force of energy that returns to us in kind—good or bad, immediately or at some point in the future.</p>

          <h3>Types of Karma</h3>
          <p>Hindu texts describe several types of karma:</p>
          <ul>
            <li><strong>Sanchita Karma:</strong> The accumulated karma from all past lives, stored until it can be resolved</li>
            <li><strong>Prarabdha Karma:</strong> The portion of Sanchita Karma scheduled to be experienced in this lifetime</li>
            <li><strong>Kriyamana/Agami Karma:</strong> The karma being created in the present life that will bear fruit in the future</li>
          </ul>

          <p>Karma is not simply a system of punishment and reward but rather a natural law of the universe—like gravity—that functions regardless of awareness or intention.</p>

          <h3>Karma and Reincarnation</h3>
          <p>In Hindu thought, karma is intimately connected with the cycle of rebirth (samsara). The soul (atman) carries the karmic impressions (samskaras) from one life to the next. The quality and nature of these impressions determine the circumstances of the next birth.</p>

          <h3>Transcending Karma</h3>
          <p>While karma binds one to the cycle of birth and death, Hindu philosophy offers paths to transcend it:</p>
          <ul>
            <li>Through selfless action (Karma Yoga)</li>
            <li>Through devotion to God (Bhakti Yoga)</li>
            <li>Through spiritual knowledge (Jnana Yoga)</li>
          </ul>

          <p>The ultimate goal is to achieve moksha (liberation), a state where one is freed from the cycle of karma and rebirth.</p>
        `,
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
        content: `
          <h2>The Hindu Trinity: Trimurti</h2>
          <p>The Trimurti, or "three forms," represents the cosmic functions of creation, preservation, and destruction in Hindu philosophy. This concept unifies three of the main deities in Hinduism: Brahma (the creator), Vishnu (the preserver), and Shiva (the destroyer).</p>

          <h3>Brahma: The Creator</h3>
          <p>Brahma is depicted with four heads, representing the four Vedas, and four arms. He is often shown sitting on a lotus that emerges from the navel of Vishnu. Despite his important role as the creator of the universe, Brahma is not widely worshipped in modern Hinduism, with only a handful of temples dedicated solely to him.</p>

          <h3>Vishnu: The Preserver</h3>
          <p>Vishnu is responsible for maintaining cosmic order and dharma. He is shown with four arms holding a conch (symbolizing the primeval sound), a chakra (the wheel of time), a lotus (representing purity and creation), and a mace (embodying mental and physical strength). Vishnu is known for his ten avatars (incarnations), including Rama and Krishna, who descend to Earth in times of great disorder.</p>

          <h3>Shiva: The Destroyer</h3>
          <p>Shiva's role as the destroyer is often misunderstood—he destroys not out of malice but to make way for new creation and positive transformation. He is typically depicted with a third eye (representing wisdom), a crescent moon (showing his control over time), the Ganges river flowing from his hair (symbolizing purification), and a snake around his neck (representing kundalini energy).</p>

          <h3>Unity in Trinity</h3>
          <p>The Trimurti represents the cyclical nature of the universe—creation leads to maintenance, which eventually leads to dissolution, followed by new creation. This eternal cycle reflects the Hindu understanding of time as cyclical rather than linear.</p>

          <p>While the Trimurti concept emphasizes the complementary functions of these deities, devotees often focus their worship on one aspect or form of the divine according to their personal preferences and traditions.</p>
        `,
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
