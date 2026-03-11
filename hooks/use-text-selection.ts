'use client';

import { useState, useEffect } from 'react';

export function useTextSelection() {
  const [selectedText, setSelectedText] = useState('');
  const [position, setPosition] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const handleSelection = () => {
      // Delay nhỏ để đảm bảo selection đã hoàn tất
      setTimeout(() => {
        const selection = window.getSelection();
        const text = selection?.toString().trim() || '';
        
        if (text && text.length > 0) {
          const range = selection!.getRangeAt(0);
          const rect = range.getBoundingClientRect();
          
          setSelectedText(text);
          setPosition({
            x: rect.left + rect.width / 2,
            y: rect.top - 10,
          });
        }
        // ✅ QUAN TRỌNG: Không reset ngay khi text rỗng
        // Chỉ reset khi user click ra ngoài (được handle ở dưới)
      }, 10);
    };

    const handleClickOutside = (e: MouseEvent) => {
      // Nếu click vào button "Giải thích bằng AI", không reset
      const target = e.target as HTMLElement;
      if (target.closest('[data-ai-explainer]')) {
        return;
      }
      
      // Reset khi click ra ngoài
      const selection = window.getSelection();
      if (!selection?.toString().trim()) {
        setSelectedText('');
        setPosition(null);
      }
    };

    // CHỈ dùng mouseup, KHÔNG dùng selectionchange
    document.addEventListener('mouseup', handleSelection);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mouseup', handleSelection);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return { selectedText, position };
}