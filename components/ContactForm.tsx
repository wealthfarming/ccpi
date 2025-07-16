// components/ContactForm.tsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm({ isSmall = false }) {
  return (
    <form className="space-y-4">
      <div className={`grid ${isSmall ? 'grid-cols-1' : 'grid-cols-2'} gap-4`}>
        <div>
          <Label htmlFor="name">Full Name*</Label>
          <Input id="name" placeholder="Full Name*" />
        </div>
        <div>
          <Label htmlFor="email">Email*</Label>
          <Input id="email" type="email" placeholder="Email*" />
        </div>
      </div>
      {!isSmall && (
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="subject">Subject*</Label>
            <Input id="subject" placeholder="Subject*" />
          </div>
          <div>
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" placeholder="Phone Number" />
          </div>
        </div>
      )}
      <div>
        <Label htmlFor="message">Message*</Label>
        <Textarea id="message" placeholder="Message*" />
      </div>
      <Button type="submit">Submit Now</Button>
    </form>
  );
}