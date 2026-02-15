import type { CSSProperties, MutableRefObject, ReactNode } from 'react';
import { useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';

interface UsePortalDropdownParams {
  anchorRef: MutableRefObject<HTMLElement | null>;
  enabled?: boolean;
  offset?: number;
  zIndex?: number;
  container?: HTMLElement | null;
}

interface UsePortalDropdownResult {
  dropdownStyle?: CSSProperties;
  renderDropdown: (node: ReactNode) => ReactNode;
}

/**
 * Positions dropdown content relative to an anchor element and renders it
 * into a portal (e.g. document.body) to avoid clipping inside parents/modals.
 */
export function usePortalDropdown({
  anchorRef,
  enabled = true,
  offset = 8,
  zIndex = 50,
  container,
}: UsePortalDropdownParams): UsePortalDropdownResult {
  const [style, setStyle] = useState<CSSProperties>();

  const portalContainer = useMemo(() => {
    if (!enabled) return null;
    if (container) return container;
    if (typeof document !== 'undefined') return document.body;
    return null;
  }, [container, enabled]);

  useEffect(() => {
    if (!enabled || !portalContainer) return;

    const updatePosition = () => {
      const anchor = anchorRef.current;
      if (!anchor) return;
      const rect = anchor.getBoundingClientRect();
      setStyle({
        position: 'fixed',
        top: rect.bottom + offset,
        left: rect.left,
        width: rect.width,
        zIndex,
      });
    };

    updatePosition();
    window.addEventListener('resize', updatePosition);
    window.addEventListener('scroll', updatePosition, true);

    return () => {
      window.removeEventListener('resize', updatePosition);
      window.removeEventListener('scroll', updatePosition, true);
    };
  }, [anchorRef, enabled, offset, portalContainer, zIndex]);

  const renderDropdown = (node: ReactNode) => {
    if (!enabled || !portalContainer) return node;
    return createPortal(node, portalContainer);
  };

  return {
    dropdownStyle: enabled ? style : undefined,
    renderDropdown,
  };
}
