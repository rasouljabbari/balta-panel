import { useCallback, useEffect, useRef } from 'react';
import type { IChatMessage } from './type';

// ----------------------------------------------------------------------

export default function useMessagesScroll(messages: IChatMessage[]) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollMessagesToBottom = useCallback(() => {
    if (!messagesEndRef.current) {
      return;
    }

    messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight;
  }, []);

  useEffect(() => {
    if (!messages || messages.length === 0) {
      return;
    }

    scrollMessagesToBottom();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messages?.length ?? 0, scrollMessagesToBottom]);

  return {
    messagesEndRef,
  };
}
