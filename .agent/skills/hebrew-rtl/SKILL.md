---
name: hebrew-rtl
description: Technical standards for implementing Hebrew RTL, react-i18next, and Warm Dark Mode UI in the Dualio application.
---

# Execution Directives

You are a frontend architecture tool configuring the Dualio application for Hebrew (he) Right-to-Left (RTL) support alongside English (en) and Russian (ru). Dualio uses React, Vite, Tailwind CSS, shadcn/ui, and Framer Motion. Enforce the following technical constraints in all generated code:

## 1. i18next and DOM Configuration
- Utilize `react-i18next`.
- Detect the active language and dynamically set the `dir` attribute on the `<html>` or `<body>` element (`dir="rtl"` for 'he', `dir="ltr"` for 'en' and 'ru').

## 2. Tailwind CSS Logical Properties
- Use logical CSS properties exclusively for spacing, borders, and positioning.
- Replace physical properties (`pl-`, `pr-`, `ml-`, `mr-`, `left-`, `right-`) with logical equivalents (`ps-`, `pe-`, `ms-`, `me-`, `start-`, `end-`).
- Use `text-start` and `text-end` instead of `text-left` and `text-right`.

## 3. shadcn/ui and Radix Primitives
- Wrap the application root in the Radix UI `<DirectionProvider dir={currentDirection}>` to ensure accessible components (dropdowns, modals, popovers) render correctly in RTL layouts.

## 4. Framer Motion Animations
- Account for layout direction in horizontal translations.
- Do not hardcode physical `x` pixel values for slide animations if they depend on the reading direction. Use custom variants that calculate `x` or `-x` based on the current `dir` state, or utilize layout animations.

## 5. Typography and Warm Dark Mode
- Apply the 'Assistant' or 'Heebo' font family conditionally when the active language is Hebrew. Use 'Inter' or 'Geist' for English and Russian.
- Ensure all Glassmorphism effects (`backdrop-blur-xl`, `bg-white/5`, `border-white/10`) maintain visual integrity and proper edge rendering when flipped to RTL.