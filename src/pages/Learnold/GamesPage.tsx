import { useEffect } from 'react';
import PageHeader from '../../components/shared/PageHeader';
import SectionHeader from '../../components/shared/SectionHeader';
import Button from '../../components/shared/Button';
import { Card, CardContent } from '../../components/ui/card';
import { Gamepad2, Brain, Puzzle, Trophy, Quote } from 'lucide-react'; // Added Quote icon

const GamesPage = () => {
  useEffect(() => {
    document.title = "Learning Games | Ramakrishna Centre of South Africa, Johannesburg";
  }, []);

  return (
    <div className="container mx-auto px-4 py-12 pt-20">
      <PageHeader
        title="Learning Games"
        subtitle="Fun and interactive games to learn about Hindu philosophy and practices"
        backgroundImage="/lovable-uploads/learn.png"
      />

      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-indian-cream to-white border border-indian-saffron p-6 rounded-lg mb-6 pop-shadow-card">
          <h2 className="text-2xl font-heading font-semibold mb-4">Learning Through Play</h2>
          <p className="text-gray-700">
            Games are a powerful way to learn and retain knowledge. Our interactive games are designed to make learning about
            Hindu philosophy, mythology, and practices fun and engaging for children of all ages. Through play, complex concepts
            become more accessible and memorable.
          </p>
        </div>

        <SectionHeader
          title="Available Games"
          subtitle="Explore our collection of educational games"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <Card className="border-spiritual-200 bg-gradient-to-br from-spiritual-50 to-white pop-shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-center w-12 h-12 bg-spiritual-100 rounded-full mb-4">
                <Puzzle className="w-6 h-6 text-spiritual-500" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Hindu Mythology Matching</h3>
              <p className="text-gray-600 mb-4">
                Match deities with their symbols, stories, and attributes in this memory-building game.
                Learn about the major gods and goddesses of Hinduism while having fun.
              </p>
              <Button href="/learn/games/matching" variant="outline" size="sm">
                Play Game
              </Button>
            </CardContent>
          </Card>

          <Card className="border-spiritual-200 bg-gradient-to-br from-spiritual-50 to-white pop-shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-center w-12 h-12 bg-spiritual-100 rounded-full mb-4">
                <Brain className="w-6 h-6 text-spiritual-500" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Vedic Wisdom Quiz</h3>
              <p className="text-gray-600 mb-4">
                Test your knowledge of Vedic concepts, teachings, and stories in this interactive quiz game.
                Multiple difficulty levels make it suitable for beginners and advanced learners.
              </p>
              <Button href="/learn/games/quiz" variant="outline" size="sm">
                Play Game
              </Button>
            </CardContent>
          </Card>

          <Card className="border-spiritual-200 bg-gradient-to-br from-spiritual-50 to-white pop-shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-center w-12 h-12 bg-spiritual-100 rounded-full mb-4">
                <Gamepad2 className="w-6 h-6 text-spiritual-500" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Dharma Adventure</h3>
              <p className="text-gray-600 mb-4">
                Navigate through challenges and make choices based on dharmic principles in this adventure game.
                Learn about right action, duty, and moral decision-making.
              </p>
              <Button href="/learn/games/adventure" variant="outline" size="sm">
                Play Game
              </Button>
            </CardContent>
          </Card>

          <Card className="border-spiritual-200 bg-gradient-to-br from-spiritual-50 to-white pop-shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-center w-12 h-12 bg-spiritual-100 rounded-full mb-4">
                <Trophy className="w-6 h-6 text-spiritual-500" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Sanskrit Word Scramble</h3>
              <p className="text-gray-600 mb-4">
                Unscramble Sanskrit words and learn their meanings in this vocabulary-building game.
                A fun way to become familiar with important terms in Hindu philosophy.
              </p>
              <Button href="/learn/games/word-scramble" variant="outline" size="sm">
                Play Game
              </Button>
            </CardContent>
          </Card>


          {/* New Wisdom Words Game Card */}
          <Card className="border-spiritual-200 bg-gradient-to-br from-spiritual-50 to-white pop-shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-center w-12 h-12 bg-spiritual-100 rounded-full mb-4">
                <Quote className="w-6 h-6 text-spiritual-500" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Wisdom Words</h3>
              <p className="text-gray-600 mb-4">
                Rearrange the words to form wisdom sayings from great spiritual teachers. Test your knowledge and speed!
              </p>
              <Button href="/learn/games/wisdom-words" variant="outline" size="sm">
                Play Game
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16">
          <SectionHeader
            title="Benefits of Game-Based Learning"
            subtitle="Why games are effective educational tools"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="p-6 border border-indian-saffron rounded-lg bg-gradient-to-br from-indian-cream to-white pop-shadow-card">
              <h3 className="text-lg font-heading font-semibold mb-2">Active Engagement</h3>
              <p className="text-gray-600 text-sm">
                Games require active participation, keeping children engaged and focused on the learning material.
              </p>
            </div>

            <div className="p-6 border border-indian-saffron rounded-lg bg-gradient-to-br from-indian-cream to-white pop-shadow-card">
              <h3 className="text-lg font-heading font-semibold mb-2">Immediate Feedback</h3>
              <p className="text-gray-600 text-sm">
                Games provide instant feedback, helping children understand concepts and correct misconceptions.
              </p>
            </div>

            <div className="p-6 border border-indian-saffron rounded-lg bg-gradient-to-br from-indian-cream to-white pop-shadow-card">
              <h3 className="text-lg font-heading font-semibold mb-2">Intrinsic Motivation</h3>
              <p className="text-gray-600 text-sm">
                The fun and challenge of games create intrinsic motivation to learn and master the material.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamesPage;
