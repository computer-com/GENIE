import React, { useRef } from 'react'
import '@toast-ui/editor/dist/toastui-editor.css';

import { Editor } from '@toast-ui/react-editor';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';
import { log } from 'console';
function OutputSection() {
  const editorRef: React.MutableRefObject<Editor | null> = useRef(null);
  return (
    <div className='bg-white p-5 rounded-md shadow-lg'>
      <div className='flex justify-between items-center mb-5 p-5'>
        <h2 className='font-bold text-2xl mb-2 text-primary'>Output</h2>
        <Button className='bg-primary text-white'><Copy/>Copy</Button>
      </div>
      <Editor
        ref={editorRef}
        initialValue="hello react editor world!"
        initialEditType="wysiwyg"
        height="500px"
        useCommandShortcut={true}
        onChange={() => console.log(editorRef.current?.getInstance().getMarkedUp())}
      />
    </div>
  )
}
export default OutputSection
