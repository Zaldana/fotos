# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

A modern photography portfolio built with Next.js 15, TypeScript, and Tailwind CSS 4. Features a file-based CMS for simple image management and two main galleries: Nature and Travel photography.

## Essential Commands

### Development
```bash
npm run dev          # Start development server with turbopack
npm run build        # Build for production with turbopack  
npm start            # Start production server
npm run lint         # Run ESLint
```

### Testing
No test framework is currently configured. When adding tests, update this section with the appropriate commands.

## Architecture Overview

### File-Based CMS System
- **No authentication required** - simple file-system based management
- Images stored in `public/gallery/nature/` and `public/gallery/travel/` folders
- Optional metadata via markdown files with frontmatter
- Automatic image scanning and processing at build time

### App Structure (Next.js 15 App Router)
```
src/app/
├── layout.tsx           # Root layout with Navigation and Providers
├── page.tsx            # Homepage with hero section and gallery links  
├── nature/page.tsx     # Nature photography gallery (dynamic from files)
└── travel/page.tsx     # Travel photography gallery (dynamic from files)
```

### Component Architecture
- **Navigation.tsx**: Simple navigation menu (no auth)
- **Providers.tsx**: Minimal provider wrapper (no auth needed)

### Key Design Patterns

#### File-Based Content Management
- Images loaded from file system at build time
- Metadata parsed from optional `.md` files using gray-matter
- No client-side state management needed for content

#### Image Handling
- Next.js Image component for optimization
- Real images served from `public/gallery/` folders
- Automatic image discovery and metadata parsing

#### Styling
- Tailwind CSS 4 with inline theme configuration
- Responsive design with mobile-first approach
- Geist font family (Sans and Mono variants)

## Environment Variables

No environment variables are required for the file-based CMS system.

## Development Notes

### File-Based CMS
The project uses a simple file-based content management system:
- Images stored in `public/gallery/nature/` and `public/gallery/travel/`
- Optional metadata files (`.md`) with frontmatter for titles, descriptions, tags
- Automatic scanning and processing at build time using `src/lib/gallery.ts`

### Path Aliases
- `@/*` maps to `./src/*` for clean imports

### Key Technical Decisions
- **Turbopack**: Enabled for faster development builds
- **Tailwind 4**: Uses new inline theme syntax and @import
- **File-based galleries**: Nature and Travel pages render images from file system
- **Build-time processing**: Images and metadata processed during build

### Content Management Structure
```
public/gallery/
├── nature/
│   ├── image.jpg           # Image file
│   └── image.md           # Optional metadata
└── travel/
    ├── photo.jpg
    └── photo.md
```

Metadata format (frontmatter):
```yaml
---
title: "Photo Title"
description: "Photo description"
date: "2024-03-15"
tags: ["tag1", "tag2"]
featured: true
---
```

## Common Workflows

### Adding New Images to Galleries
1. Add image files to `public/gallery/nature/` or `public/gallery/travel/`
2. Optionally create matching `.md` files for metadata
3. Commit and deploy - images automatically appear

### Key Files
- `src/lib/gallery.ts` - Image scanning and metadata parsing utilities
- `src/types/gallery.ts` - TypeScript interfaces for gallery data
- `FILE_BASED_CMS.md` - Complete usage guide

### Dependencies
- `gray-matter` - Parses markdown frontmatter for metadata
- `@types/node` - Node.js types for file system operations
