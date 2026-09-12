
import codecs

with open("components/site-shell.tsx", "r", encoding="utf-8") as f:
    content = f.read()

target_search = """export function Header() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState<DropdownName | null>(null);
  const [isFixed, setIsFixed] = useState(false);
  const [isOverDark, setIsOverDark] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const fixedRef = useRef(false);
  const darkRef = useRef(false);

  useEffect(() => {
    document.body.classList.toggle("ge-menu-open", open);
    return () => document.body.classList.remove("ge-menu-open");
  }, [open]);

  useEffect(() => {
    let frame = 0;
    const updateHeader = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const fixed = window.scrollY > 80;
        if (fixedRef.current !== fixed) {
          fixedRef.current = fixed;
          setIsFixed(fixed);
        }
        if (!fixed || !headerRef.current) {
          if (darkRef.current) {
            darkRef.current = false;
            setIsOverDark(false);
          }
          return;
        }
        const headerRect = headerRef.current.getBoundingClientRect();
        const overDark = Array.from(document.querySelectorAll(".ge-industries, .ge-cta, .ge-footer, .ge-inner-cta, .ge-contact-note")).some((section) => {
          const rect = section.getBoundingClientRect();
          return rect.top <= headerRect.bottom && rect.bottom >= headerRect.top;
        });
        if (darkRef.current !== overDark) {
          darkRef.current = overDark;
          setIsOverDark(overDark);
        }
      });
    };"""

replacement = """export function Header() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState<DropdownName | null>(null);
  const [isFixed, setIsFixed] = useState(false);
  const [isOverDark, setIsOverDark] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  
  const headerRef = useRef<HTMLElement>(null);
  const fixedRef = useRef(false);
  const darkRef = useRef(false);
  const hiddenRef = useRef(false);
  const lastScrollY = useRef(0);
  const openRef = useRef(false);

  useEffect(() => {
    openRef.current = open;
    document.body.classList.toggle("ge-menu-open", open);
    return () => document.body.classList.remove("ge-menu-open");
  }, [open]);

  useEffect(() => {
    let frame = 0;
    const updateHeader = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const currentScrollY = window.scrollY;
        const fixed = currentScrollY > 80;
        
        if (fixedRef.current !== fixed) {
          fixedRef.current = fixed;
          setIsFixed(fixed);
        }

        if (fixed && !openRef.current) {
          if (currentScrollY > lastScrollY.current && currentScrollY > 200) {
            if (!hiddenRef.current) {
              hiddenRef.current = true;
              setIsHidden(true);
            }
          } else if (currentScrollY < lastScrollY.current) {
            if (hiddenRef.current) {
              hiddenRef.current = false;
              setIsHidden(false);
            }
          }
        } else {
          if (hiddenRef.current) {
            hiddenRef.current = false;
            setIsHidden(false);
          }
        }
        lastScrollY.current = currentScrollY;

        if (!fixed || !headerRef.current) {
          if (darkRef.current) {
            darkRef.current = false;
            setIsOverDark(false);
          }
          return;
        }
        
        const headerRect = headerRef.current.getBoundingClientRect();
        const overDark = Array.from(document.querySelectorAll(".ge-industries, .ge-cta, .ge-footer, .ge-inner-cta, .ge-contact-note")).some((section) => {
          const rect = section.getBoundingClientRect();
          return rect.top <= headerRect.bottom && rect.bottom >= headerRect.top;
        });
        if (darkRef.current !== overDark) {
          darkRef.current = overDark;
          setIsOverDark(overDark);
        }
      });
    };"""

if target_search in content:
    content = content.replace(target_search, replacement)
    
    # We also need to add is-hidden class to the header!
    # target: <header ref={headerRef} className={`ge-header${isFixed ? " is-fixed" : ""}${isOverDark ? " is-over-dark" : ""}`}>
    old_header_tag = "<header ref={headerRef} className={`ge-header${isFixed ? \" is-fixed\" : \"\"}${isOverDark ? \" is-over-dark\" : \"\"}`}>"
    new_header_tag = "<header ref={headerRef} className={`ge-header${isFixed ? \" is-fixed\" : \"\"}${isOverDark ? \" is-over-dark\" : \"\"}${isHidden ? \" is-hidden\" : \"\"}`}>"
    content = content.replace(old_header_tag, new_header_tag)

    with open("components/site-shell.tsx", "w", encoding="utf-8") as f:
        f.write(content)
    print("Success")
else:
    print("Target not found")

