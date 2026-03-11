'use client';

import { useTextSelection } from '@/hooks/use-text-selection';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Sparkles, X } from 'lucide-react';
import { useState } from 'react';

export function TextSelectionExplainer() {
  const { selectedText, position } = useTextSelection();
  const [explanation, setExplanation] = useState('');
  const [loading, setLoading] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleExplain = async () => {
    setLoading(true);
    setShowExplanation(true);
    
    try {
      const response = await fetch('/api/explain', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: selectedText }),
      });
      
      const data = await response.json();
      setExplanation(data.explanation || 'Không thể giải thích.');
    } catch (error) {
      setExplanation('Có lỗi xảy ra. Vui lòng thử lại.');
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setShowExplanation(false);
    setExplanation('');
    window.getSelection()?.removeAllRanges();
  };

  if (!selectedText || !position) return null;

  return (
    <>
      {/* Quick Action Button */}
      {!showExplanation && (
        <div
          className="fixed z-50 animate-in fade-in zoom-in duration-200"
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            transform: 'translate(-50%, -100%)',
          }}
        >
          <Button
            size="sm"
            onClick={handleExplain}
            className="shadow-2xl bg-gradient-to-r from-secondary to-amber-500 text-white font-bold border-2 border-white hover:scale-105 transition-transform"
            data-ai-explainer="true"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Giải thích bằng AI
          </Button>
        </div>
      )}

      {/* Explanation Card */}
      {showExplanation && (
        <div
          className="fixed z-50 animate-in fade-in slide-in-from-top-5 duration-300"
          style={{
            left: '50%',
            top: '20%',
            transform: 'translateX(-50%)',
            maxWidth: '600px',
            width: '90%',
          }}
        >
          <Card className="p-6 shadow-2xl border-2">
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-bold text-lg flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary" />
                Giải thích AI
              </h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleClose}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
            
            <div className="mb-4 p-3 bg-gray-100 rounded-md">
              <p className="text-sm text-gray-700 italic">"{selectedText}"</p>
            </div>
            
            {loading ? (
              <div className="flex items-center gap-2 text-gray-600">
                <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                Đang phân tích...
              </div>
            ) : (
              <div className="prose prose-sm">
                <p className="text-gray-800 whitespace-pre-wrap">{explanation}</p>
              </div>
            )}
          </Card>
        </div>
      )}
    </>
  );
}