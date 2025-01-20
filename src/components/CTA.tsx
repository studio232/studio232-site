import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from '@emailjs/browser';
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "./ui/use-toast";

type FormData = {
  name: string;
  email: string;
  message: string;
};

export const CTA = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const result = await emailjs.send(
        'service_4w3pi2n',
        'template_ge1fs2n',
        {
          name: data.name,
          email: data.email,
          message: data.message,
        },
        'tQTs4Dq1pjfhlAckd'
      );

      if (result.text === 'OK') {
        toast({
          title: "Thanks for your message!",
          description: "You will hear from us very soon.",
        });
        reset();
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-secondary to-accent">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-white mb-6"
        >
          Ready to Grow Your Business with AI?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-white/90 mb-12"
        >
          Contact us today and discover how our custom AI solutions can propel your business forward.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-md mx-auto"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <Input
                placeholder="Your Name"
                {...register("name", { required: "Name is required" })}
                className="bg-white/90"
              />
              {errors.name && (
                <p className="text-red-200 text-sm mt-1">{errors.name.message}</p>
              )}
            </div>
            
            <div>
              <Input
                type="email"
                placeholder="Your Email"
                {...register("email", { 
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address"
                  }
                })}
                className="bg-white/90"
              />
              {errors.email && (
                <p className="text-red-200 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>
            
            <div>
              <Textarea
                placeholder="Tell us about your business or challenges"
                {...register("message", { required: "Message is required" })}
                className="bg-white/90 min-h-[120px]"
              />
              {errors.message && (
                <p className="text-red-200 text-sm mt-1">{errors.message.message}</p>
              )}
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-white text-secondary hover:bg-white/90 font-semibold py-6 text-lg transition-colors"
            >
              {isSubmitting ? "Sending..." : "Submit"}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};