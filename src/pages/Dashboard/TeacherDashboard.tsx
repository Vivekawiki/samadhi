import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import PageLayout from '@/components/layout/PageLayout';
import { Users, Calendar, BookOpen, MessageSquare } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

const TeacherDashboard = () => {
  // Sample courses that the teacher manages
  const courses = [
    { id: 1, title: 'Introduction to Vedanta', students: 24, nextSession: 'Today, 2:00 PM', status: 'Active' },
    { id: 2, title: 'Sanskrit Fundamentals', students: 18, nextSession: 'Tomorrow, 10:00 AM', status: 'Active' },
    { id: 3, title: 'History of Hinduism', students: 32, nextSession: 'Friday, 4:00 PM', status: 'Active' },
  ];

  // Sample recent activity
  const recentActivity = [
    { id: 1, student: 'Ananya Patel', action: 'Submitted assignment', course: 'Introduction to Vedanta', time: '2 hours ago' },
    { id: 2, student: 'Rahul Sharma', action: 'Asked a question', course: 'Sanskrit Fundamentals', time: '5 hours ago' },
    { id: 3, student: 'Priya Singh', action: 'Completed quiz', course: 'History of Hinduism', time: '1 day ago' },
  ];

  return (
    <PageLayout title="Teacher Dashboard">
      <div className="container max-w-6xl py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Teacher Dashboard</h1>
            <p className="text-muted-foreground">Manage your courses and students</p>
          </div>
          <div className="flex gap-2 mt-4 md:mt-0">
            <Button variant="outline">Schedule Session</Button>
            <Button className="bg-indian-saffron hover:bg-indian-saffron/90">Create Course</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl">3</CardTitle>
              <CardDescription>Active Courses</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center text-muted-foreground">
                <BookOpen className="mr-2 h-4 w-4" />
                <span className="text-sm">View all courses</span>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl">74</CardTitle>
              <CardDescription>Total Students</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center text-muted-foreground">
                <Users className="mr-2 h-4 w-4" />
                <span className="text-sm">Across all courses</span>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl">12</CardTitle>
              <CardDescription>Pending Reviews</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center text-muted-foreground">
                <MessageSquare className="mr-2 h-4 w-4" />
                <span className="text-sm">Assignments & questions</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="courses" className="space-y-4">
          <TabsList>
            <TabsTrigger value="courses">My Courses</TabsTrigger>
            <TabsTrigger value="schedule">Teaching Schedule</TabsTrigger>
            <TabsTrigger value="activity">Recent Activity</TabsTrigger>
          </TabsList>
          
          <TabsContent value="courses">
            <Card>
              <CardHeader>
                <CardTitle>Your Courses</CardTitle>
                <CardDescription>Manage your current teaching assignments</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Course</TableHead>
                      <TableHead>Students</TableHead>
                      <TableHead>Next Session</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {courses.map(course => (
                      <TableRow key={course.id}>
                        <TableCell className="font-medium">{course.title}</TableCell>
                        <TableCell>{course.students}</TableCell>
                        <TableCell>{course.nextSession}</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                            {course.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">View</Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="schedule">
            <Card>
              <CardHeader>
                <CardTitle>Teaching Schedule</CardTitle>
                <CardDescription>Upcoming classes and sessions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 border rounded-lg">
                    <div className="bg-muted p-3 rounded-full">
                      <Calendar className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">Introduction to Vedanta</h4>
                      <p className="text-sm text-muted-foreground">Today, 2:00 PM - 4:00 PM • Main Hall</p>
                    </div>
                    <Button variant="outline" size="sm">View Details</Button>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 border rounded-lg">
                    <div className="bg-muted p-3 rounded-full">
                      <Calendar className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">Sanskrit Fundamentals</h4>
                      <p className="text-sm text-muted-foreground">Tomorrow, 10:00 AM - 12:00 PM • Room 203</p>
                    </div>
                    <Button variant="outline" size="sm">View Details</Button>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 border rounded-lg">
                    <div className="bg-muted p-3 rounded-full">
                      <Calendar className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">History of Hinduism</h4>
                      <p className="text-sm text-muted-foreground">Friday, 4:00 PM - 6:00 PM • Lecture Hall</p>
                    </div>
                    <Button variant="outline" size="sm">View Details</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="activity">
            <Card>
              <CardHeader>
                <CardTitle>Recent Student Activity</CardTitle>
                <CardDescription>Latest actions from your students</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Student</TableHead>
                      <TableHead>Action</TableHead>
                      <TableHead>Course</TableHead>
                      <TableHead>Time</TableHead>
                      <TableHead className="text-right">Respond</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentActivity.map(activity => (
                      <TableRow key={activity.id}>
                        <TableCell className="font-medium">{activity.student}</TableCell>
                        <TableCell>{activity.action}</TableCell>
                        <TableCell>{activity.course}</TableCell>
                        <TableCell>{activity.time}</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">View</Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </PageLayout>
  );
};

export default TeacherDashboard;
