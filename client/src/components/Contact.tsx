import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertMessageSchema } from "@shared/schema";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import SocialLinks from "./SocialLinks";

const formVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 }
};

export default function Contact() {
  const { toast } = useToast();
  const form = useForm({
    resolver: zodResolver(insertMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  const mutation = useMutation({
    mutationFn: async (data) => {
      const response = await apiRequest("POST", "/api/contact", data);
      const result = await response.json();
      return result;
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
      });
    }
  });

  return (
    <section id="contact" className="py-20 px-4 bg-[#0A192F]">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-[#CCD6F6] mb-12 text-center"
        >
          Get In Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#112240] p-8 rounded-lg border border-[#233554]
                     hover:border-[#64FFDA] transition-colors duration-300"
          >
            <h3 className="text-xl font-semibold text-[#CCD6F6] mb-4">
              Let's Connect
            </h3>
            <p className="text-[#8892B0] mb-8 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            <SocialLinks className="flex-col items-start gap-4" />
          </motion.div>

          <motion.div
            variants={formVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-[#112240] p-8 rounded-lg border border-[#233554]
                     hover:border-[#64FFDA] transition-colors duration-300"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit((data) => mutation.mutate(data))} className="space-y-6">
                <motion.div variants={itemVariants}>
                  <Input 
                    placeholder="Your Name"
                    {...form.register("name")}
                    className="bg-[#0A192F] border-[#233554] text-[#CCD6F6]
                             focus:border-[#64FFDA] transition-colors"
                  />
                  {form.formState.errors.name && (
                    <span className="text-red-500 text-sm mt-1">
                      {form.formState.errors.name.message}
                    </span>
                  )}
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Input 
                    type="email"
                    placeholder="Your Email"
                    {...form.register("email")}
                    className="bg-[#0A192F] border-[#233554] text-[#CCD6F6]
                             focus:border-[#64FFDA] transition-colors"
                  />
                  {form.formState.errors.email && (
                    <span className="text-red-500 text-sm mt-1">
                      {form.formState.errors.email.message}
                    </span>
                  )}
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Textarea 
                    placeholder="Your Message"
                    {...form.register("message")}
                    className="bg-[#0A192F] border-[#233554] text-[#CCD6F6]
                             focus:border-[#64FFDA] transition-colors"
                    rows={5}
                  />
                  {form.formState.errors.message && (
                    <span className="text-red-500 text-sm mt-1">
                      {form.formState.errors.message.message}
                    </span>
                  )}
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Button 
                    type="submit"
                    disabled={mutation.isPending}
                    className="w-full bg-transparent border-2 border-[#64FFDA] text-[#64FFDA] 
                             hover:bg-[#64FFDA]/10 transition-all duration-300
                             disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {mutation.isPending ? "Sending..." : "Send Message"}
                  </Button>
                </motion.div>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}