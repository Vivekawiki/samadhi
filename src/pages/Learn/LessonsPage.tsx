
import React from 'react';
import PageLayout from '../../components/layout/PageLayout';
import PageHeader from '../../components/shared/PageHeader';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Card, CardContent } from '../../components/ui/card';
import { lessonsData } from '../../data/lessonsData';

const LessonsPage = () => {
  return (
    <PageLayout title="Lessons">
      <PageHeader 
        title="Learning Lessons" 
        subtitle="Structured content to deepen your understanding"
        backgroundImage="https://images.unsplash.com/photo-1590012314707-68e797908069?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80"
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <Link to="/learn/community" className="inline-flex items-center text-spiritual-500 hover:text-spiritual-600 mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Learning Community
          </Link>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {lessonsData.map((lessonGroup) => (
              <div key={lessonGroup.topicId} className="space-y-4">
                <h2 className="text-2xl font-heading font-semibold">{lessonGroup.topicName}</h2>
                
                {lessonGroup.lessons.map((lesson) => (
                  <Card key={lesson.id} className="hover:shadow-md transition-shadow cursor-pointer">
                    <Link to={`/learn/lessons/${lessonGroup.topicId}/${lesson.id}`}>
                      <CardContent className="p-4">
                        <div className="font-medium">{lesson.title}</div>
                        <p className="text-sm text-muted-foreground mt-1">{lesson.description}</p>
                      </CardContent>
                    </Link>
                  </Card>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default LessonsPage;
