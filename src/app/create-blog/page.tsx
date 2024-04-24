"use client";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod";
import TextEditor from "@/components/createBlog/TextEditor";
import { TBlog } from "@/types";
import { useToast } from "@/components/ui/use-toast";
import DOMPurify from "isomorphic-dompurify";

const formSchema = z.object({
  title: z.string().min(2),
  imageUrl: z.string().min(2),
  content: z.string().min(2),
});

const CreateBlog = () => {
  const { toast } = useToast();

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      imageUrl: '',
      content: ''
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    const cleanContent = DOMPurify.sanitize(values.content);
    const blogData: TBlog = {
      title: values.title,
      imageUrl: values.imageUrl,
      content: cleanContent,
      author: 'Jane Doe',
      authorImage: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    };
    fetch(`http://localhost:3000/api/blog`, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blogData)
    })
      .then((response) => {
        // console.log(response);
        toast({
          title: "Blog Successfully Post...",
        })
      })
      .catch((error) => {
        console.error(error)
        toast({
          title: "Something went wrong. Blog Not Post...",
        })
      });
  };

  return (
    <section className="max-section py-12">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="flex items-center gap-8">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Blog Title</FormLabel>
                  <FormControl>
                    <Input placeholder="The Power of Positive Thinking" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="imageUrl"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Banner Image URL</FormLabel>
                  <FormControl>
                    <Input placeholder="https://example.com/images/positive_thinking.jpg" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Blog Content</FormLabel>
                <FormControl>
                  <TextEditor blogContent={field.value} onChange={field.onChange} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </section>
  );
};

export default CreateBlog;