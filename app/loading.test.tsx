import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Loading from './loading';

describe('Loading Component', () => {
  it('renders loading text', () => {
    render(<Loading />);

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('renders skeleton cards', () => {
    render(<Loading />);

    // Should render 3 skeleton cards
    const cards = screen
      .getAllByRole('generic')
      .filter(
        (el) =>
          el.className.includes('animate-pulse') &&
          el.tagName.toLowerCase() === 'div',
      );

    expect(cards.length).toBeGreaterThan(0);
  });

  it('renders loading spinner', () => {
    render(<Loading />);

    // Check for spinner animation class
    const spinner = document.querySelector('.animate-spin');
    expect(spinner).toBeInTheDocument();
  });

  it('has proper loading skeleton structure', () => {
    render(<Loading />);

    // Check that skeleton elements have the muted background class
    const skeletonElements = document.querySelectorAll('.bg-muted');
    expect(skeletonElements.length).toBeGreaterThan(0);
  });

  it('renders backdrop overlay', () => {
    render(<Loading />);

    // Check for backdrop blur
    const backdrop = document.querySelector('.backdrop-blur-sm');
    expect(backdrop).toBeInTheDocument();
  });

  it('has proper responsive layout classes', () => {
    render(<Loading />);

    // Check for responsive grid classes
    const gridElement = document.querySelector('.lg\\:grid-cols-3');
    expect(gridElement).toBeInTheDocument();
  });

  it('renders with proper accessibility', () => {
    render(<Loading />);

    // Loading text should be visible for screen readers
    const loadingText = screen.getByText('Loading...');
    expect(loadingText).toBeVisible();
  });

  it('has proper animation classes', () => {
    render(<Loading />);

    // Check for pulse animations
    const pulseElements = document.querySelectorAll('.animate-pulse');
    expect(pulseElements.length).toBeGreaterThan(0);

    // Check for spin animation
    const spinElement = document.querySelector('.animate-spin');
    expect(spinElement).toBeInTheDocument();
  });

  it('matches the main page layout structure', () => {
    render(<Loading />);

    // Should have similar structure to main page with header, title, cards, and buttons
    const mainContainer = document.querySelector('.min-h-screen');
    expect(mainContainer).toBeInTheDocument();

    const maxWidthContainer = document.querySelector('.max-w-5xl');
    expect(maxWidthContainer).toBeInTheDocument();
  });
});
