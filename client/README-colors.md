# Color Scheme Usage in WorkWise SA Client

This project uses a custom color palette defined in `src/styles/colors.css` and integrated with Tailwind CSS via `tailwind.config.js`.

## Color Variables (from `src/styles/colors.css`)

- `--primary`: #63B3ED (light blue)
- `--primary-foreground`: #ffffff
- `--secondary`: #E2E8F0 (light gray)
- `--secondary-foreground`: #1A202C
- `--accent`: #ECC94B (yellow/gold)
- `--accent-foreground`: #1A202C
- `--destructive`: #E53E3E (red)
- `--destructive-foreground`: #ffffff
- `--muted`: #F7FAFC
- `--muted-foreground`: #718096
- `--card`, `--popover`, `--background`, `--foreground`, `--border`, `--input`, `--ring`, `--radius`: see `colors.css`

## How to Use Colors in Components

### Tailwind Classes

You can use these colors in your components with Tailwind utility classes:

- `bg-primary`, `bg-secondary`, `bg-accent`, `bg-muted`, `bg-card`, `bg-popover`, `bg-background`
- `text-primary`, `text-secondary`, `text-accent`, `text-muted`, `text-card`, `text-popover`, `text-foreground`
- `border-primary`, `border-secondary`, `border-accent`, `border-muted`, `border-card`, `border-popover`, `border-background`, `border-border`
- `ring-primary`, `ring-accent`, etc.

### Example Usage

```jsx
<div className="bg-primary text-primary-foreground p-4 rounded-lg">
  Primary background with white text
</div>

<button className="bg-accent text-accent-foreground hover:bg-primary hover:text-white">
  Accent Button
</button>

<div className="border border-muted bg-card text-card-foreground">
  Card content
</div>
```

### In CSS

You can also use the CSS variables directly:

```css
.my-custom-class {
  background: var(--primary);
  color: var(--primary-foreground);
}
```

## Where Colors Are Used

- **Hero Section:** Uses `bg-[#2A4365]` (custom blue), `text-yellow-300`, `text-white`, and Tailwind color classes for backgrounds and text.
- **Buttons, Cards, Badges:** Use `bg-primary`, `bg-accent`, `bg-secondary`, etc.
- **Borders and Inputs:** Use `border-border`, `border-muted`, `ring-primary`, etc.
- **Text:** Use `text-primary`, `text-muted`, `text-accent`, etc.

## Customization

To change the color scheme, edit `src/styles/colors.css` and rebuild the project.

---

For more details, see `tailwind.config.js` and `src/styles/colors.css`.
