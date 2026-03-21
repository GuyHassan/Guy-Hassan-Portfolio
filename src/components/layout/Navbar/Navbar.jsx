import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useThemeToggle } from '../../../context/ThemeContext';
import {
  Nav, Logo, NavLinks, NavItem, RightGroup, ThemeToggle,
  CVLink, MobileCVLink, CTABtn, HamburgerBtn, MobileMenu, MobileNavItem, MobileCTA,
} from './Navbar.styled';

const navItems = [
  { label: 'About', to: 'about' },
  { label: 'Journey', to: 'timeline' },
  { label: 'Skills', to: 'skills' },
  { label: 'Projects', to: 'projects' },
  { label: 'Contact', to: 'contact' },
];

const WA_LINK = 'https://wa.me/972524899286';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { isDark, toggle } = useThemeToggle();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on scroll
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <Nav
        $scrolled={scrolled}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
      >
        <Logo>GH.</Logo>

        <NavLinks>
          {navItems.map((item) => (
            <NavItem key={item.to}>
              <Link to={item.to} smooth duration={600} offset={-64}>
                {item.label}
              </Link>
            </NavItem>
          ))}
        </NavLinks>

        <RightGroup>
          <CVLink href="/GuyHassanCV2026.pdf" download="GuyHassanCV2026.pdf">
            Download CV
          </CVLink>
          <ThemeToggle onClick={toggle} aria-label="Toggle theme" title="Toggle theme">
            <FontAwesomeIcon icon={isDark ? faSun : faMoon} />
          </ThemeToggle>
          <CTABtn href={WA_LINK} target="_blank" rel="noopener noreferrer">
            Let's Talk
          </CTABtn>
          <HamburgerBtn
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Menu"
          >
            <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
          </HamburgerBtn>
        </RightGroup>
      </Nav>

      <AnimatePresence>
        {menuOpen && (
          <MobileMenu
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
          >
            {navItems.map((item) => (
              <MobileNavItem key={item.to}>
                <Link
                  to={item.to}
                  smooth
                  duration={600}
                  offset={-64}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </MobileNavItem>
            ))}
            <MobileCTA
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
            >
              Let's Talk
            </MobileCTA>
            <MobileCVLink
              href="/GuyHassanCV2026.pdf"
              download="GuyHassanCV2026.pdf"
              onClick={() => setMenuOpen(false)}
            >
              Download CV
            </MobileCVLink>
          </MobileMenu>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

