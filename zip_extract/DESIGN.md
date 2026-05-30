---
name: Sovereign Fiscal
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#44474f'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#747780'
  outline-variant: '#c4c6d0'
  surface-tint: '#465e8f'
  primary: '#000a23'
  on-primary: '#ffffff'
  primary-container: '#00204e'
  on-primary-container: '#7189bc'
  inverse-primary: '#aec6fe'
  secondary: '#bb001a'
  on-secondary: '#ffffff'
  secondary-container: '#e51929'
  on-secondary-container: '#fffbff'
  tertiary: '#1c0500'
  on-tertiary: '#ffffff'
  tertiary-container: '#411300'
  on-tertiary-container: '#c07758'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#aec6fe'
  on-primary-fixed: '#001a42'
  on-primary-fixed-variant: '#2e4675'
  secondary-fixed: '#ffdad7'
  secondary-fixed-dim: '#ffb3ad'
  on-secondary-fixed: '#410004'
  on-secondary-fixed-variant: '#930012'
  tertiary-fixed: '#ffdbcd'
  tertiary-fixed-dim: '#ffb597'
  on-tertiary-fixed: '#360f00'
  on-tertiary-fixed-variant: '#70371d'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
  leaf-red: '#D80621'
  midnight-navy: '#00204E'
  slate-surface: '#F1F5F9'
  border-subtle: '#E2E8F0'
typography:
  display-lg:
    fontFamily: Public Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Public Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Public Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  headline-md:
    fontFamily: Public Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
---

## Brand & Style

This design system embodies the intersection of institutional stability and modern computational intelligence. Designed for the Canadian fintech landscape, the aesthetic balances the "accountant-level trust" of a traditional firm with the friction-free "AI efficiency" of a contemporary SaaS platform.

The style is **Modern Corporate**, leaning heavily on high-contrast clarity, expansive whitespace, and a disciplined use of patriotic accents. It prioritizes legibility and a sense of architectural order to reassure users handling complex financial data. Visual elements are substantial and deliberate, avoiding unnecessary ornamentation to maintain a focus on precision and reliability.

## Colors

The palette is rooted in a deep "Midnight Navy" (#00204E) to convey authority and heritage. "Leaf Red" (#D80621) is utilized as a high-intent accent color, reserved exclusively for primary calls to action, critical alerts, and subtle brand-reinforcing iconography.

The background strategy employs a "Clean White" (#FFFFFF) base for primary content areas, contrasted against "Slate Surface" (#F8FAFC) for sidebars and background grounding. This creates a clear visual distinction between the workspace and the application shell.

## Typography

The system utilizes **Public Sans** for headings to provide a sturdy, institutional feel that is highly legible at large scales. **Inter** is used for body copy and UI labels to ensure maximum clarity in data-dense environments.

A strict hierarchy is maintained through bold weights in headings. To optimize for professional workflows, body text is never smaller than 14px for general information, and 12px is reserved strictly for secondary labels and metadata.

## Layout & Spacing

The layout follows a **fixed grid** model for content-heavy pages to ensure data remains structured and predictable, while employing fluid containers for dashboard views. A 12-column grid is standard for desktop, collapsing to 4 columns on mobile.

Spacing follows an 8px linear scale. Generous internal padding within cards and wide margins between sections are used to prevent "financial clutter," allowing the AI-driven insights to breathe and be processed easily by the user.

## Elevation & Depth

The system uses **Ambient Shadows** to create a sense of physical layering without appearing heavy. Surfaces are categorized into three levels:
1. **Base (Level 0):** The primary background surface (#F8FAFC).
2. **Card (Level 1):** White surfaces (#FFFFFF) with a soft 4px blur shadow, used for primary data containers.
3. **Overlay (Level 2):** Modals and dropdowns with a 12px blur shadow and 10% opacity Midnight Navy tint to provide depth and focus.

Borders are kept low-contrast (#E2E8F0) to define edges without adding visual noise.

## Shapes

The design system uses a **Rounded** corner language (12px standard) to soften the professional aesthetic, making the technology feel more approachable and modern. 

- **Standard Elements:** 12px radius (buttons, input fields, small cards).
- **Large Containers:** 16px radius (primary dashboard widgets, main content cards).
- **Interactive Highlights:** Subtle 4px radius for small chips and tags.

## Components

### Buttons & CTAs
Primary buttons use the Leaf Red (#D80621) with white text to signify high-importance actions like "Submit Return" or "Calculate." Secondary buttons use Midnight Navy outlines for administrative tasks.

### Data Cards
Cards are the primary vehicle for AI insights. They feature a white background, 16px corner radius, and a subtle Slate-colored top border or a small Maple Leaf icon in the top-right corner when highlighting a specific Canadian tax optimization.

### Inputs & Form Fields
Fields use a 12px radius with a 1px border. On focus, the border transitions to Midnight Navy with a subtle 2px outer glow. Labels are always positioned above the field for maximum readability in tax forms.

### Professional Icons
Icons are refined, thin-to-medium stroke weights (2px), using the Midnight Navy color. Key metrics may use a dual-tone style with Leaf Red accents for symbolic emphasis.

### Chips & Status Indicators
Status indicators (e.g., "Pending," "Filed," "Reviewed") use low-saturation background tints of their respective semantic colors with bold text to ensure accessibility and high scannability.