
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import PageLayout from '@/components/layout/PageLayout';
import { Calendar, BookOpen, Users, Award } from 'lucide-react';

const StudentDashboard = () => {
  // Sample course data - would typically come from an API
  const courses = [
    { id: 1, title: 'Introduction to Vedanta', progress: 65, nextLesson: 'The Four Paths of Yoga' },
    { id: 2, title: 'Sanskrit Fundamentals', progress: 30, nextLesson: 'Basic Grammar Rules' },
    { id: 3, title: 'History of Hinduism', progress: 85, nextLesson: 'Modern Hindu Movements' },
  ];

  // Sample upcoming events
  const events = [
    { id: 1, title: 'Weekly Satsang', date: 'Sun, 9:00 AM', location: 'Main Temple Hall' },
    { id: 2, title: 'Q&A with Swami Vivekananda', date: 'Wed, 6:00 PM', location: 'Online Zoom' },
    { id: 3, title: 'Group Study Session', date: 'Fri, 4:00 PM', location: 'Library' },
  ];

  return (
    <PageLayout title="Student Dashboard">
      {/* Added pt-20 here to account for fixed navbar */}
      <div className="container max-w-6xl py-8 pt-20"> 
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Student Dashboard</h1>
            <p className="text-muted-foreground">Welcome back to your learning journey.</p>
          </div>
          <Button className="mt-4 md:mt-0 bg-indian-saffron hover:bg-indian-saffron/90">
            Resume Learning
          </Button>
        </div>

        <Tabs defaultValue="courses" className="space-y-4">
          <TabsList>
            <TabsTrigger value="courses">My Courses</TabsTrigger>
            <TabsTrigger value="schedule">Schedule</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
          </TabsList>
          
          <TabsContent value="courses" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {courses.map(course => (
                <Card key={course.id} className="overflow-hidden">
                  <CardHeader className="pb-2">
                    <CardTitle>{course.title}</CardTitle>
                    <CardDescription>Next: {course.nextLesson}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span className="font-medium">{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} className="h-2" />
                      <div className="flex justify-end mt-4">
                        <Button size="sm" variant="outline" className="mr-2">
                          View Content
                        </Button>
                        <Button size="sm" className="bg-indian-saffron hover:bg-indian-saffron/90">
                          Continue
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              
              <Card className="border-dashed border-2 flex flex-col items-center justify-center p-6">
                <BookOpen className="h-10 w-10 text-muted-foreground mb-2" />
                <h3 className="font-medium text-lg">Discover New Courses</h3>
                <p className="text-sm text-muted-foreground text-center mt-1">
                  Explore our catalog of spiritual and educational courses
                </p>
                <Button variant="outline" className="mt-4">Browse Courses</Button>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="schedule" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Events</CardTitle>
                <CardDescription>Your scheduled classes and events</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {events.map(event => (
                    <div key={event.id} className="flex items-start space-x-4">
                      <div className="bg-muted p-2 rounded-md">
                        <Calendar className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium">{event.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          {event.date} • {event.location}
                        </p>
                      </div>
                      <Button variant="outline" size="sm">Add to Calendar</Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="resources" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BookOpen className="mr-2 h-5 w-5" />
                    Learning Materials
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button variant="ghost" className="w-full justify-start">Course Textbooks</Button>
                  <Button variant="ghost" className="w-full justify-start">Video Lectures</Button>
                  <Button variant="ghost" className="w-full justify-start">Audio Recordings</Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="mr-2 h-5 w-5" />
                    Community
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button variant="ghost" className="w-full justify-start">Discussion Forums</Button>
                  <Button variant="ghost" className="w-full justify-start">Study Groups</Button>
                  <Button variant="ghost" className="w-full justify-start">Connect with Teachers</Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Award className="mr-2 h-5 w-5" />
                    Achievements
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button variant="ghost" className="w-full justify-start">Course Certificates</Button>
                  <Button variant="ghost" className="w-full justify-start">Badges Earned</Button>
                  <Button variant="ghost" className="w-full justify-start">Learning Milestones</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </PageLayout>
  );
};

export default StudentDashboard;
