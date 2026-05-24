# User Agency Card UI

A responsive React app that displays user cards with profile information and action buttons.

## Components

### Navbar (`Navbar.jsx`)
Navigation bar with search and filter options. No props required.

### Card (`Card.jsx`)
Displays individual user profile cards.

**Props:**
- `id` - User ID (number)
- `name` - User name (string)
- `post` - Job title (string)
- `status` - Status: "active" or "inactive" (string)
- `image` - user image (string)

**Example:**
```jsx
<Card id={1} name="John Carter" post="Senior Agent" status="active" />
```

### App (`App.jsx`)
Main component that renders Navbar and Card components with sample user data.

## Getting Started

```bash
npm install
npm run dev
```

## Technologies

- React
- Vite
- CSS3 (Responsive Design)
- Remixicon (Icons)


