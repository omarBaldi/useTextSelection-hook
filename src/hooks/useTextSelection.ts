import { useEffect, useState } from 'react';

export const useTextSelection = (): string => {
  const [wordSelected, setWordSelected] = useState<string>('');

  useEffect(() => {
    const handleSelectionChange = () => {
      const currentTextSelected: string | undefined = document
        .getSelection()
        ?.toString();

      if (typeof currentTextSelected !== 'undefined') {
        setWordSelected(currentTextSelected);
      }
    };

    document.addEventListener('selectionchange', handleSelectionChange);

    return () => {
      document.removeEventListener('selectionchange', handleSelectionChange);
    };
  }, []);

  return wordSelected;
};
