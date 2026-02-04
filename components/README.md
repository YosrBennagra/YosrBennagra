# 🧩 SVG Components

This folder contains modular SVG components that make up the profile banner.

## 📁 Structure

```
components/
├── defs.svg          # Gradients, filters, and styles
├── background.svg    # Background, particles, and network
├── header.svg        # Name, title, monogram, and tags
├── about.svg         # About section with info badges
├── tech-stack.svg    # Technical expertise cards
└── connect.svg       # Social links and footer
```

## 🔧 How It Works

Each component is a separate SVG fragment that:
- Can be edited independently
- Has clear section boundaries
- Uses shared definitions from `defs.svg`
- Is combined into the final `profile-banner.svg`

## 🚀 Building the Banner

### Option 1: Using Node.js (Automated)
```bash
node build-banner.js
```

### Option 2: Manual Combination
Copy the content of each file in order and wrap in:
```xml
<svg viewBox="0 0 1200 850" width="100%" xmlns="http://www.w3.org/2000/svg">
  <!-- paste component contents here -->
</svg>
```

## 📝 Editing Components

### Update Personal Information
- **Name/Title**: Edit `header.svg`
- **About Text**: Edit `about.svg`
- **Tech Stack**: Edit `tech-stack.svg`
- **Social Links**: Edit `connect.svg` (update href attributes)

### Styling Changes
- **Colors**: Edit gradients in `defs.svg`
- **Fonts**: Edit styles in `defs.svg`
- **Effects**: Edit filters in `defs.svg`

### Layout Changes
- **Spacing**: Adjust `transform="translate(0, Y)"` values
- **Card Sizes**: Modify width/height in component files
- **Positioning**: Change x/y coordinates in elements

## 🎨 Component Details

### 1. defs.svg (Definitions)
- **Gradients**: `accent`, `bgRadial`, `glass`, `neonGlow`
- **Filters**: `neon`, `glow`, `shadow`, `grain`, `glass-blur`
- **Styles**: All CSS classes for typography

### 2. background.svg
- Deep space radial gradient background
- Animated grain texture overlay
- Particle constellation network (10 particles)
- Connection lines with animations

### 3. header.svg (0-280px)
- Glassmorphism card with neon border
- Animated monogram with rotating effect
- Name in gradient with neon glow
- Role/title in uppercase
- Animated underline
- Skill tags

### 4. about.svg (280-450px)
- Section divider with glow
- Section title
- Two-line description
- Five glassmorphic info badges:
  - Location
  - Availability (pulsing indicator)
  - Work preferences
  - Languages

### 5. tech-stack.svg (450-680px)
- Section divider
- Section title
- Four tech category cards:
  - **Frontend**: React, Next.js, Angular, TypeScript
  - **Backend**: .NET, Spring Boot, NestJS, Node.js
  - **Database**: MongoDB, PostgreSQL, MySQL, Redis
  - **DevOps**: Docker, Git, Vercel

### 6. connect.svg (680-850px)
- Section divider
- Background glow orb
- Section title
- Four social link buttons:
  - Email
  - LinkedIn
  - Portfolio
  - GitHub
- Footer tagline

## 🎯 Benefits of Modular Structure

✅ **Easy Maintenance**: Edit one section without affecting others
✅ **Version Control**: Track changes per component
✅ **Collaboration**: Multiple people can work on different sections
✅ **Reusability**: Use components in other projects
✅ **Testing**: Test each component independently
✅ **Organization**: Clear separation of concerns

## 📊 Total Size
- Individual components: ~2-3 KB each
- Combined banner: ~15 KB
- Highly optimized for web use

## 🔄 Update Workflow

1. Edit the relevant component file
2. Run `node build-banner.js` to rebuild
3. Preview the updated banner
4. Commit changes to git

## 💡 Tips

- Keep component files focused on their section
- Use comments to mark subsections
- Maintain consistent indentation (2 spaces)
- Test animations after changes
- Verify all IDs are unique across components
