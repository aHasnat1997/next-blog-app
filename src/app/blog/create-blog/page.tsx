"use client";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod";
import TextEditor from "@/components/createBlog/TextEditor";
import { TBlog } from "@/types";
import { useToast } from "@/components/ui/use-toast";
import DOMPurify from "isomorphic-dompurify";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import createBlog from "@/actions/createBlog";
import { Category } from "@prisma/client";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  title: z.string().min(2),
  imageUrl: z.string().min(2),
  summary: z.string().min(2),
  category: z.string().min(1),
  content: z.string().min(2),
});

const CreateBlog = () => {
  type TUserStatus = 'loading' | 'unauthenticated' | 'authenticated';
  const categoriesList: Category[] = ["Art", "Business", "DIY", "Education", "Entertainment", "Fashion", "Gaming", "Health", "History", "Lifestyle", "Marketing", "Music", "Photography", "Programming", "Science", "Sports", "Tech", "Travel"];
  const session = useSession();
  const [userStatus, setUserStatus] = useState<TUserStatus>('loading');
  const { toast } = useToast();
  const router = useRouter();

  useEffect(() => {
    if (session.status === 'loading') setUserStatus('loading');
    else if (session.status === 'unauthenticated') setUserStatus('unauthenticated');
    else if (session.status === 'authenticated') setUserStatus('authenticated');
  }, [userStatus, session.status]);

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      imageUrl: '',
      summary: '',
      category: '',
      content: ''
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // console.log(values);
    const cleanContent = DOMPurify.sanitize(values.content);
    const blogData: TBlog = {
      title: values.title,
      imageUrl: values.imageUrl,
      content: cleanContent,
      summary: values.summary,
      category: values.category,
      userEmail: session.data?.user?.email!,
    };

    const cerated = await createBlog(blogData);
    if (cerated.success) {
      router.push(`/blog/${cerated?.data?.id}`);
      toast({
        title: "Blog Successfully Post...",
      });
    }
    else if (!cerated.success) {
      toast({
        title: "Blog Post failed...",
      })
    }
  };

  if (userStatus === 'unauthenticated') {
    throw new Error('Unauthorize...');
  }
  else if (userStatus === 'authenticated') {
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
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Category</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder='Select Your blog Category' />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {
                          categoriesList.map(category => <SelectItem
                            key={category}
                            value={category}
                          >
                            {category}
                          </SelectItem>)
                        }
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="summary"
              render={({ field }) => (<FormItem className="w-full">
                <div className="flex items-center justify-between">
                  <FormLabel>
                    Blog Summary
                  </FormLabel>
                  <p className="text-muted-foreground">
                    {field.value.length} / 250
                  </p>
                </div>
                <FormControl>
                  <Textarea
                    rows={2}
                    placeholder="Your blog short summary under 250 letters"
                    className="resize-none no-scrollbar"
                    maxLength={250}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>)}
            />
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Blog Content</FormLabel>
                  <FormControl>
                    <TextEditor
                      blogContent={field.value}
                      onChange={field.onChange}
                    />
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
  }
};

export default CreateBlog;