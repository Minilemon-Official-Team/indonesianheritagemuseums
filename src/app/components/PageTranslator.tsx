import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslationContext } from '../context/TranslationContext';
import { translateMany } from '../utils/autoTranslate';

const SKIP_TAGS = new Set([
  'SCRIPT',
  'STYLE',
  'NOSCRIPT',
  'TEXTAREA',
  'CODE',
  'PRE',
]);

const HAS_LETTER = /[A-Za-zÀ-ɏ一-鿿]/;

export default function PageTranslator() {
  const { currentLang } = useTranslationContext();
  const location = useLocation();
  const originals = useRef(new WeakMap<Text, string>());

  useEffect(() => {
    let cancelled = false;
    let debounceTimer: ReturnType<typeof setTimeout> | undefined;

    if (typeof document !== 'undefined') {
      document.documentElement.lang = currentLang === 'zh' ? 'zh-CN' : currentLang;
    }

    const observer = new MutationObserver((mutations) => {
      const hasContentChange = mutations.some(
        (mutation) =>
          (mutation.type === 'childList' && mutation.addedNodes.length > 0) ||
          mutation.type === 'characterData',
      );
      if (!hasContentChange) return;
      if (debounceTimer) clearTimeout(debounceTimer);
      debounceTimer = setTimeout(run, 350);
    });

    function collectTextNodes(): Text[] {
      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
        acceptNode(node) {
          const text = node.nodeValue ?? '';
          if (!text.trim() || !HAS_LETTER.test(text)) {
            return NodeFilter.FILTER_REJECT;
          }
          const parent = (node as Text).parentElement;
          if (!parent || SKIP_TAGS.has(parent.tagName)) {
            return NodeFilter.FILTER_REJECT;
          }
          if (parent.closest('.notranslate')) return NodeFilter.FILTER_REJECT;
          return NodeFilter.FILTER_ACCEPT;
        },
      });
      const nodes: Text[] = [];
      let current: Node | null;
      while ((current = walker.nextNode())) nodes.push(current as Text);
      return nodes;
    }

    async function run() {
      const nodes = collectTextNodes();
      const items = nodes.map((node) => {
        let original = originals.current.get(node);
        if (original === undefined) {
          original = node.nodeValue ?? '';
          originals.current.set(node, original);
        }
        return { node, original };
      });
      const texts = items
        .map(({ original }) => original.trim())
        .filter(Boolean);
      if (texts.length === 0) return;

      const translations = await translateMany(texts, currentLang);
      if (cancelled) return;

      observer.disconnect();
      for (const { node, original } of items) {
        const translated = translations.get(original.trim());
        if (!translated) continue;
        const lead = original.match(/^\s*/)?.[0] ?? '';
        const trail = original.match(/\s*$/)?.[0] ?? '';
        const next = lead + translated + trail;
        if (node.nodeValue !== next) node.nodeValue = next;
      }
      if (!cancelled) {
        setTimeout(() => {
          if (!cancelled) {
            observer.observe(document.body, {
              childList: true,
              subtree: true,
              characterData: true,
            });
          }
        }, 0);
      }
    }

    run();
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true,
    });

    return () => {
      cancelled = true;
      if (debounceTimer) clearTimeout(debounceTimer);
      observer.disconnect();
    };
  }, [currentLang, location.pathname]);

  return null;
}
