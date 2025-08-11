'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { locales, localeNames, type Locale, getLocalizedPathname } from '../i18n';

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, right: 0 });
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  // Get current locale from pathname
  const currentLocale = pathname.startsWith('/zh') ? 'zh' : 
                       pathname.startsWith('/ja') ? 'ja' : 'en';

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const menuEl = dropdownRef.current;
      if (!menuEl) return;
      if (!menuEl.contains(event.target as Node) && !buttonRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    function handleResizeOrScroll() {
      if (isOpen) calculateDropdownPosition();
    }

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('resize', handleResizeOrScroll);
    window.addEventListener('scroll', handleResizeOrScroll, true);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('resize', handleResizeOrScroll);
      window.removeEventListener('scroll', handleResizeOrScroll, true);
    };
  }, [isOpen]);

  const calculateDropdownPosition = () => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setDropdownPosition({
        top: rect.bottom + 4,
        right: window.innerWidth - rect.right
      });
    }
  };

  const handleLanguageChange = (locale: Locale) => {
    const newPath = getLocalizedPathname(pathname, locale);
    router.push(newPath);
    setIsOpen(false);
  };

  const handleToggle = () => {
    if (!isOpen) {
      calculateDropdownPosition();
    }
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative z-[9998]" ref={dropdownRef}>
      <button
        ref={buttonRef}
        onClick={handleToggle}
        className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors rounded-lg hover:bg-foreground/5 nav-link"
        aria-label="Select language"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="m4.93 4.93 4.24 4.24"></path>
          <path d="m14.83 9.17 4.24-4.24"></path>
          <path d="m14.83 14.83 4.24 4.24"></path>
          <path d="m9.17 14.83-4.24 4.24"></path>
        </svg>
        <span className="hidden sm:inline">{localeNames[currentLocale]}</span>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="12" 
          height="12" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>

      {isOpen && typeof window !== 'undefined' && createPortal(
        <div 
          ref={dropdownRef}
          className="fixed w-36 bg-background/95 backdrop-blur-lg border border-border rounded-lg shadow-lg z-[99999]"
          style={{
            top: `${dropdownPosition.top}px`,
            right: `${dropdownPosition.right}px`
          }}
        >
          {locales.map((locale) => (
            <button
              key={locale}
              onClick={() => handleLanguageChange(locale)}
              className={`w-full px-3 py-2 text-left text-sm hover:bg-foreground/5 transition-colors first:rounded-t-lg last:rounded-b-lg ${
                currentLocale === locale ? 'bg-primary/10 text-primary' : 'text-foreground/80'
              }`}
            >
              {localeNames[locale]}
            </button>
          ))}
        </div>,
        document.body
      )}
    </div>
  );
} 