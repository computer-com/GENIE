"use client";

import React, { useEffect, useState } from 'react';
import { db } from '@/utils/db';
import { AIOutput } from '@/utils/schema';
import Templates from '@/app/(data)/Templates'
interface Templates{
    name:string,
    desc:string,
    icon:string,
    category:string,
    slug:string,
    aiPrompt:string,
}
interface ChatHistory {
  id: number;
  formData: string;
  aiResponse: string | null;
  templateSlug: string;
  createdBy: string;
  createdAt: string | null;
}

const History = () => {
  const [chatHistory, setChatHistory] = useState<ChatHistory[]>([]);

  useEffect(() => {
    const fetchChatHistory = async () => {
      const historyData: ChatHistory[] = await db.select().from(AIOutput);
      setChatHistory(historyData);
    };
    fetchChatHistory();
  }, []);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard!');
  };

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-5">History</h1>
      <p className="mb-5">Search your previously generated AI content</p>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="w-full border-b">
              <th className="text-left p-4">TEMPLATE</th>
              <th className="text-left p-4">AI RESP</th>
              <th className="text-left p-4">WORDS</th>
              <th className="text-left p-4">COPY</th>
            </tr>
          </thead>
          <tbody>
            {chatHistory.map((chat) => (
              <tr key={chat.id} className="border-b">
                <td className="p-4 flex items-center">
                    <img src={Templates.find((t) => t.slug === chat.templateSlug)?.icon} alt={Templates.find((t) => t.slug === chat.templateSlug)?.name} width="32" height="32" />
                    {Templates.find((t) => t.slug === chat.templateSlug)?.name}
                  {chat.templateSlug}
                </td>
                <td className="p-4 truncate max-w-xs">{chat.aiResponse || 'No response available'}</td>
                <td className="p-4">{chat.aiResponse ? chat.aiResponse.split(' ').length : 0}</td>
                <td className="p-4 text-blue-500 cursor-pointer" onClick={() => copyToClipboard(chat.aiResponse || '')}>Copy</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default History; 