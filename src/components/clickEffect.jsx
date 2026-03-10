import { useEffect } from 'react';

const ClickEffect = () => {
  useEffect(() => {
    // Injeta CSS uma única vez
    const style = document.createElement('style');
    style.textContent = `
      @keyframes rippleClick {
        0% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
        100% { transform: translate(-50%, -50%) scale(3); opacity: 0; }
      }
      .click-ripple {
        position: fixed;
        width: 15px;
        height: 15px;
        background: rgba(0, 0, 0, 0.3);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999999;
        animation: rippleClick 0.6s ease-out forwards;
      }
    `;
    document.head.appendChild(style);

    const handleClick = (e) => {
      const el = document.createElement('span');
      el.className = 'click-ripple';
      el.style.left = e.clientX + 'px';
      el.style.top = e.clientY + 'px';
      document.body.appendChild(el);
      el.addEventListener('animationend', () => el.remove(), { once: true });
    };

    window.addEventListener('click', handleClick);
    return () => {
      window.removeEventListener('click', handleClick);
      document.head.removeChild(style);
    };
  }, []);

  return null;
};

export default ClickEffect;
