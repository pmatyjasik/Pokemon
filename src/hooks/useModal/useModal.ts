import { useState, useCallback } from 'react';

export const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = useCallback(() => setIsModalOpen(true), []);
  const closeModal = useCallback((callback?: () => void) => {
    setIsModalOpen(false);
    if (callback) {
      callback();
    }
  }, []);

  return { isModalOpen, openModal, closeModal };
};