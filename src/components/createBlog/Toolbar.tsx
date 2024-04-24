import { Editor } from "@tiptap/react";
import { Toggle } from "@/components/ui/toggle";
import { Bold, Code, Heading, Italic, List, Strikethrough, Underline } from "lucide-react";

const Toolbar = ({ editor }: { editor: Editor | null }) => {
  return (
    <section className="border flex items-center gap-8">
      <div>
        <Toggle
          aria-label="Toggle Bold"
          pressed={editor?.isActive('bold')}
          onPressedChange={() => editor?.chain().focus().toggleBold().run()}
        >
          <Bold className="h-4 w-4" />
        </Toggle>
        <Toggle
          aria-label="Toggle Italic"
          pressed={editor?.isActive('italic')}
          onPressedChange={() => editor?.chain().focus().toggleItalic().run()}
        >
          <Italic className="h-4 w-4" />
        </Toggle>
        <Toggle
          aria-label="Toggle Underline"
          pressed={editor?.isActive('underline')}
          onPressedChange={() => editor?.chain().focus().toggleUnderline().run()}
        >
          <Underline className="h-4 w-4" />
        </Toggle>
        <Toggle
          aria-label="Toggle Strike"
          pressed={editor?.isActive('strike')}
          onPressedChange={() => editor?.chain().focus().toggleStrike().run()}
        >
          <Strikethrough className="h-4 w-4" />
        </Toggle>
      </div>
      <div>
        <Toggle
          aria-label="Toggle Bullet List"
          pressed={editor?.isActive('bulletList')}
          onPressedChange={() => editor?.chain().focus().toggleBulletList().run()}
        >
          <List className="h-4 w-4" />
        </Toggle>
        <Toggle
          aria-label="Toggle Code"
          pressed={editor?.isActive('code')}
          onPressedChange={() => editor?.chain().focus().toggleCode().run()}
        >
          <Code className="h-4 w-4" />
        </Toggle>
        <Toggle
          aria-label="Toggle Heading"
          pressed={editor?.isActive('headingOne')}
          onPressedChange={() => editor?.chain().focus().toggleHeading({ level: 1 }).run()}
        >
          <Heading className="h-4 w-4" />
        </Toggle>
      </div>
    </section>
  );
};

export default Toolbar;