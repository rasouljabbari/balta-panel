import { useEffect, type RefObject } from 'react';
import type { ProductGroup } from '@/features/order/types';

export function useActiveScrollSection(
  containerRef: RefObject<HTMLDivElement | null>,
  productGroups: ProductGroup[],
  setActiveSection: (updater: (prev: string) => string) => void
) {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const containerTop = container.getBoundingClientRect().top;

      let closestSectionId: string | null = null;
      let minDistance = Infinity;

      productGroups.forEach(group => {
        const sectionEl = document.getElementById(`section-${group.id}`);
        if (!sectionEl) return;

        const rect = sectionEl.getBoundingClientRect();
        const distance = Math.abs(rect.top - containerTop);

        if (distance < minDistance) {
          minDistance = distance;
          closestSectionId = group.id;
        }
      });

      if (closestSectionId) {
        const id = closestSectionId;
        setActiveSection(prev => (prev === id ? prev : id));
      }
    };

    container.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, [containerRef, productGroups, setActiveSection]);
}


