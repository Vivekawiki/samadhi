
import React, { useState } from 'react';
import PageLayout from '@/components/layout/PageLayout';
import PageHeader from '@/components/shared/PageHeader';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, CreditCard } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

const donationSchema = z.object({
  firstName: z.string().min(2, { message: "First name must be at least 2 characters." }),
  lastName: z.string().min(2, { message: "Last name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  mobile: z.string().min(10, { message: "Please enter a valid mobile number." }),
  amount: z.number().min(10, { message: "Minimum donation amount is R10." }),
  purpose: z.string().min(1, { message: "Please select a purpose for your donation." })
});

type DonationFormValues = z.infer<typeof donationSchema>;

const DonatePage = () => {
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);
  
  const presetAmounts = [100, 250, 500, 1000];
  
  const donationPurposes = [
    "General Donation",
    "Nutrition Programme",
    "Women Empowerment",
    "Children's Value Education",
    "Temple Maintenance",
    "New Ashram Project"
  ];

  const form = useForm<DonationFormValues>({
    resolver: zodResolver(donationSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      amount: 100,
      purpose: "General Donation"
    }
  });

  const handleDonate = (values: DonationFormValues) => {
    setIsProcessing(true);
    
    // Redirect to PayFast with required parameters
    // Note: This is a simplified version. In production, a proper hash should be calculated server-side.
    const merchantId = '10000100'; // Replace with your actual PayFast Merchant ID
    const merchantKey = 'q1cd2rdny4a53'; // Replace with your actual PayFast Merchant Key
    const returnUrl = `${window.location.origin}/donate/thank-you`;
    const cancelUrl = `${window.location.origin}/donate`;
    const notifyUrl = `${window.location.origin}/api/payfast-notification`; // This would need a backend handler
    
    const paymentData = {
      merchant_id: merchantId,
      merchant_key: merchantKey,
      return_url: returnUrl,
      cancel_url: cancelUrl,
      notify_url: notifyUrl,
      name_first: values.firstName,
      name_last: values.lastName,
      email_address: values.email,
      cell_number: values.mobile,
      amount: values.amount.toFixed(2),
      item_name: `Donation to Ramakrishna Centre - ${values.purpose}`,
    };
    
    // Create a form and submit it to PayFast
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = 'https://sandbox.payfast.co.za/eng/process'; // Use 'https://www.payfast.co.za/eng/process' for production
    
    Object.entries(paymentData).forEach(([key, value]) => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = String(value);
      form.appendChild(input);
    });
    
    document.body.appendChild(form);
    form.submit();
  };

  return (
    <PageLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <PageHeader 
          title="Support Our Mission"
          subtitle="Your generosity helps us serve the community and spread the teachings of Sri Ramakrishna, Sri Sarada Devi, and Swami Vivekananda."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="space-y-6">
            <h2 className="text-2xl font-heading font-semibold">Why Donate?</h2>
            <p>Your donations support our various spiritual and humanitarian services including:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Spiritual gatherings and educational programs</li>
              <li>Nutrition Programme for underprivileged communities</li>
              <li>Women Empowerment Programme</li>
              <li>Children's value education classes</li>
              <li>Maintenance of our temple and facilities</li>
              <li>New Ashram Project development</li>
            </ul>
            
            <div className="p-4 bg-spiritual-50 border-l-4 border-spiritual-500 rounded">
              <p className="italic">"The best form of worship is service to mankind." - Swami Vivekananda</p>
            </div>
          </div>
          
          <Card className="p-6 shadow-lg">
            <h2 className="text-2xl font-heading font-semibold mb-4 flex items-center">
              <Heart className="mr-2 text-red-500" />
              Make a Donation
            </h2>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleDonate)} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your first name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your last name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="your.email@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="mobile"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mobile Number</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="Your mobile number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="purpose"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Purpose of Donation</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select purpose" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {donationPurposes.map((purpose) => (
                            <SelectItem key={purpose} value={purpose}>{purpose}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="amount"
                  render={({ field: { onChange, value } }) => (
                    <FormItem>
                      <FormLabel>Donation Amount (ZAR)</FormLabel>
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        {presetAmounts.map((preset) => (
                          <button
                            key={preset}
                            type="button"
                            onClick={() => onChange(preset)}
                            className={`py-2 px-4 border rounded-md ${
                              value === preset 
                                ? 'bg-spiritual-100 border-spiritual-500 text-spiritual-700' 
                                : 'border-gray-300 hover:bg-gray-50'
                            }`}
                          >
                            R{preset}
                          </button>
                        ))}
                      </div>
                      <FormLabel className="mt-4">Or enter a custom amount</FormLabel>
                      <div className="relative rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <span className="text-gray-500">R</span>
                        </div>
                        <Input
                          type="number"
                          min="10"
                          value={value}
                          onChange={(e) => onChange(Number(e.target.value))}
                          className="pl-8"
                        />
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit"
                  disabled={isProcessing}
                  className="w-full bg-spiritual-600 hover:bg-spiritual-700 text-white py-3 flex items-center justify-center space-x-2"
                >
                  <CreditCard className="h-5 w-5" />
                  <span>{isProcessing ? 'Processing...' : `Donate`}</span>
                </Button>
              </form>
            </Form>
            
            <p className="text-xs text-gray-500 text-center mt-4">
              Secure payment processing provided by PayFast.
              <br />
              The Ramakrishna Centre is a registered Non-Profit Organization.
            </p>
          </Card>
        </div>
        
        <div className="mt-12 p-6 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-heading font-semibold mb-4">Other Ways to Donate</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h3 className="font-semibold">Direct Bank Transfer</h3>
              <p>You can make a direct donation to our bank account:</p>
              <p>Bank: Standard Bank</p>
              <p>Account Name: Ramakrishna Centre of South Africa</p>
              <p>Account Number: 1234567890</p>
              <p>Branch Code: 12345</p>
              <p>Reference: Your Name + Donation</p>
            </div>
            
            <div className="space-y-2">
              <h3 className="font-semibold">In-Person Donations</h3>
              <p>Visit our centre to make a donation in person:</p>
              <p>Ramakrishna Centre of South Africa</p>
              <p>8 Flanders Road, Avoca</p>
              <p>Durban North, 4051</p>
              <p>Monday to Friday: 9:00 AM - 4:00 PM</p>
              <p>Weekends: 9:00 AM - 1:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default DonatePage;
