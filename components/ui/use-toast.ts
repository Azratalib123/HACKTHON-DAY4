// components/ui/use-toast.ts
import { useState } from 'react';

export const useToast = () => {
  const [message, setMessage] = useState<string>('');

  const toast = ({ title, description }: { title: string, description: string }) => {
    setMessage(`${title}: ${description}`);
    // You could expand this to display toast notifications.
    console.log(message);  // For now, just log the toast message
  };

  return { toast };
};
