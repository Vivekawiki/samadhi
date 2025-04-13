
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import PageLayout from '@/components/layout/PageLayout';
import { Users, Settings, BookOpen, ChevronDown } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const AdminDashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Sample users data
  const users = [
    { id: 1, name: 'Ananya Patel', email: 'ananya@example.com', role: 'student', status: 'active' },
    { id: 2, name: 'Dr. Suresh Gupta', email: 'suresh@example.com', role: 'teacher', status: 'active' },
    { id: 3, name: 'Rahul Sharma', email: 'rahul@example.com', role: 'student', status: 'inactive' },
    { id: 4, name: 'Priya Singh', email: 'priya@example.com', role: 'student', status: 'active' },
    { id: 5, name: 'Dr. Meena Verma', email: 'meena@example.com', role: 'teacher', status: 'active' },
  ];

  // Sample courses data
  const courses = [
    { id: 1, title: 'Introduction to Vedanta', instructor: 'Dr. Suresh Gupta', students: 24, status: 'Active' },
    { id: 2, title: 'Sanskrit Fundamentals', instructor: 'Dr. Meena Verma', students: 18, status: 'Active' },
    { id: 3, title: 'History of Hinduism', instructor: 'Dr. Suresh Gupta', students: 32, status: 'Active' },
    { id: 4, title: 'Bhagavad Gita Studies', instructor: 'Dr. Meena Verma', students: 15, status: 'Draft' },
  ];

  return (
    <PageLayout title="Admin Dashboard">
      {/* Added pt-20 here to account for fixed navbar */}
      <div className="container max-w-6xl py-8 pt-20"> 
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
            <p className="text-muted-foreground">Manage users, courses, and system settings</p>
          </div>
          <Button className="mt-4 md:mt-0" variant="outline">
            <Settings className="mr-2 h-4 w-4" />
            System Settings
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl">74</CardTitle>
              <CardDescription>Total Users</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-sm text-muted-foreground">
                  <span className="font-medium">60</span> Students, <span className="font-medium">8</span> Teachers, <span className="font-medium">6</span> Admins
                </div>
                <Users className="h-4 w-4 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl">12</CardTitle>
              <CardDescription>Active Courses</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-sm text-muted-foreground">
                  <span className="font-medium">3</span> New this month
                </div>
                <BookOpen className="h-4 w-4 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl">85%</CardTitle>
              <CardDescription>System Utilization</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-sm text-muted-foreground">
                  Server performance optimal
                </div>
                <Settings className="h-4 w-4 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="users" className="space-y-4">
          <TabsList>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="settings">System Settings</TabsTrigger>
          </TabsList>
          
          <TabsContent value="users">
            <Card>
              <CardHeader>
                <CardTitle>User Management</CardTitle>
                <CardDescription>Manage all users in the system</CardDescription>
                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                  <Input 
                    placeholder="Search users..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="max-w-sm"
                  />
                  <div className="flex gap-2">
                    <Select defaultValue="all">
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Filter by role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Roles</SelectItem>
                        <SelectItem value="student">Students</SelectItem>
                        <SelectItem value="teacher">Teachers</SelectItem>
                        <SelectItem value="admin">Admins</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button variant="outline">
                      <ChevronDown className="mr-2 h-4 w-4" />
                      Export
                    </Button>
                    <Button className="bg-indian-saffron hover:bg-indian-saffron/90">Add User</Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {users.map(user => (
                      <TableRow key={user.id}>
                        <TableCell className="font-medium">{user.name}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>
                          <Badge variant="outline" className={
                            user.role === 'teacher' 
                              ? 'bg-blue-100 text-blue-800 border-blue-200' 
                              : user.role === 'admin'
                                ? 'bg-purple-100 text-purple-800 border-purple-200'
                                : 'bg-gray-100 text-gray-800 border-gray-200'
                          }>
                            {user.role}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline" className={
                            user.status === 'active' 
                              ? 'bg-green-100 text-green-800 border-green-200' 
                              : 'bg-red-100 text-red-800 border-red-200'
                          }>
                            {user.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">Edit</Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="courses">
            <Card>
              <CardHeader>
                <CardTitle>Course Management</CardTitle>
                <CardDescription>Manage all courses in the system</CardDescription>
                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                  <Input 
                    placeholder="Search courses..." 
                    className="max-w-sm"
                  />
                  <div className="flex gap-2">
                    <Select defaultValue="all">
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Filter by status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Status</SelectItem>
                        <SelectItem value="active">Active</SelectItem>
                        <SelectItem value="draft">Draft</SelectItem>
                        <SelectItem value="archived">Archived</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button className="bg-indian-saffron hover:bg-indian-saffron/90">Add Course</Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Course Title</TableHead>
                      <TableHead>Instructor</TableHead>
                      <TableHead>Students</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {courses.map(course => (
                      <TableRow key={course.id}>
                        <TableCell className="font-medium">{course.title}</TableCell>
                        <TableCell>{course.instructor}</TableCell>
                        <TableCell>{course.students}</TableCell>
                        <TableCell>
                          <Badge variant="outline" className={
                            course.status === 'Active' 
                              ? 'bg-green-100 text-green-800 border-green-200' 
                              : 'bg-yellow-100 text-yellow-800 border-yellow-200'
                          }>
                            {course.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">Edit</Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="settings">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>General Settings</CardTitle>
                  <CardDescription>Configure system parameters</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="font-medium">Site Title</div>
                    <Input defaultValue="Ramakrishna Centre of South Africa, Johannesburg" />
                  </div>
                  <div className="space-y-2">
                    <div className="font-medium">Contact Email</div>
                    <Input defaultValue="admin@example.com" />
                  </div>
                  <div className="space-y-2">
                    <div className="font-medium">Time Zone</div>
                    <Select defaultValue="africa-johannesburg">
                      <SelectTrigger>
                        <SelectValue placeholder="Select time zone" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="africa-johannesburg">Africa/Johannesburg</SelectItem>
                        <SelectItem value="utc">UTC</SelectItem>
                        <SelectItem value="europe-london">Europe/London</SelectItem>
                        <SelectItem value="america-newyork">America/New York</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button className="mt-2 bg-indian-saffron hover:bg-indian-saffron/90">
                    Save Settings
                  </Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Security Settings</CardTitle>
                  <CardDescription>Configure security options</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="font-medium">Session Timeout (minutes)</div>
                    <Input type="number" defaultValue="60" />
                  </div>
                  <div className="space-y-2">
                    <div className="font-medium">Password Policy</div>
                    <Select defaultValue="strong">
                      <SelectTrigger>
                        <SelectValue placeholder="Select password policy" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="basic">Basic</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="strong">Strong</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <div className="font-medium">Two-Factor Authentication</div>
                    <Select defaultValue="optional">
                      <SelectTrigger>
                        <SelectValue placeholder="Select 2FA policy" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="disabled">Disabled</SelectItem>
                        <SelectItem value="optional">Optional</SelectItem>
                        <SelectItem value="required">Required</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button className="mt-2 bg-indian-saffron hover:bg-indian-saffron/90">
                    Update Security
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </PageLayout>
  );
};

export default AdminDashboard;
