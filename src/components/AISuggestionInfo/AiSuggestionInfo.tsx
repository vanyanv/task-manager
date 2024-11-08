// AISuggestionsInfo.tsx
import React from 'react';
import styles from './AiSuggestionInfo.module.css';

const AISuggestionsInfo = () => {
  return (
    <div className={styles.infoText}>
      <svg
        className={styles.icon}
        fill='none'
        strokeWidth='2'
        stroke='currentColor'
        viewBox='0 0 24 24'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z'
        />
      </svg>
      <span>Click + for AI-powered task suggestions</span>
    </div>
  );
};

export default AISuggestionsInfo;
