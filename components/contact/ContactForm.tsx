// components/ContactForm.tsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm({ isSmall = false }) {
  return (
    <div className="space-y-6 text-center bg-[#f3f3f3] py-16 md:py-24">
      <h3 className="text-4xl font-bold text-gray-800">Leave us your info</h3>
      <p className="text-lg text-gray-600">and we will get back to you.</p>
      <div className="w-10 h-0.5 bg-gray-800 mx-auto mb-6" />
      <form className="space-y-4 max-w-3xl mx-auto">
        <div className={`grid ${isSmall ? 'grid-cols-1' : 'grid-cols-2'} gap-4`}>
          <div>
            <Label htmlFor="name" className="sr-only">Full Name*</Label>
            <Input id="name" placeholder="Full Name*" className="rounded-none h-12 bg-white" />
          </div>
          <div>
            <Label htmlFor="email" className="sr-only">Email*</Label>
            <Input id="email" type="email" placeholder="Email*" className="rounded-none h-12 bg-white" />
          </div>
        </div>
        <div>
          <Label htmlFor="subject" className="sr-only">Subject*</Label>
          <Input id="subject" placeholder="Subject*" className="rounded-none h-12 bg-white" />
        </div>
        <div>
          <Label htmlFor="message" className="sr-only">Message*</Label>
          <Textarea id="message" placeholder="Message*" className="min-h-[200px] rounded-none bg-white" />
        </div>
        <Button type="submit" className="bg-[#254099] hover:bg-[#254099] text-white w-full h-12 rounded-none">Submit Now</Button>
      </form>
    </div>
  );
}