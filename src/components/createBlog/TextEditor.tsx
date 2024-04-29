"use client";

import Toolbar from './Toolbar';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Heading from '@tiptap/extension-heading';
import BulletList from '@tiptap/extension-bullet-list';
import Underline from '@tiptap/extension-underline';
import Strike from '@tiptap/extension-strike';

const TextEditor = (
  { blogContent, onChange }:
    { blogContent: string, onChange: (richText: string) => void }
) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure(),
      Heading.configure({
        HTMLAttributes: {
          class: 'font-bold text-4xl'
        },
        levels: [1]
      }),
      BulletList.configure({
        HTMLAttributes: {
          class: 'ml-4 my-2 list-disc'
        }
      }),
      Underline.configure(),
      Strike.configure()
    ],
    content: blogContent,
    editorProps: {
      attributes: {
        class: 'border focus:rounded-none h-[40rem] p-4 overflow-y-scroll no-scrollbar',
      }
    },
    onUpdate({ editor }) {
      onChange(editor.getHTML())
      // console.log(editor.getHTML());
    },
  })

  return (
    <div className='w-full'>
      <Toolbar editor={editor} />
      <div className='h-[40rem]'>
        <EditorContent editor={editor} />
      </div>
    </div>
  )
};

export default TextEditor;