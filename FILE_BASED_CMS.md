# File-Based CMS Guide

Your photography portfolio now uses a simple file-based content management system instead of a database and admin interface.

## How to Add New Images

### 1. Add Image Files
Place your images in the appropriate gallery folder:
- **Nature photos**: `public/gallery/nature/`
- **Travel photos**: `public/gallery/travel/`

Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`

### 2. Add Metadata (Optional)
For each image, you can create a corresponding `.md` file with the same name to add metadata:

**Example**: For `sunset.jpg`, create `sunset.md`:

```markdown
---
title: "Golden Hour Sunset"
description: "Beautiful sunset captured at the beach during golden hour"
date: "2024-03-15"
tags: ["landscape", "sunset", "beach"]
featured: true
---

Optional longer description that appears in detailed views.
This supports full markdown formatting if needed.
```

### 3. Metadata Fields

| Field | Type | Description |
|-------|------|-------------|
| `title` | string | Display title (defaults to filename if not provided) |
| `description` | string | Short description shown in gallery |
| `date` | string | Date in YYYY-MM-DD format (used for sorting) |
| `tags` | array | List of tags displayed as colored badges |
| `featured` | boolean | Whether to highlight this image |

## Workflow Examples

### Quick Add (No Metadata)
1. Drop `mountain.jpg` into `public/gallery/nature/`
2. Commit and deploy
3. Image appears with filename as title

### Complete Add (With Metadata)
1. Add `paris-tower.jpg` to `public/gallery/travel/`
2. Create `paris-tower.md`:
   ```markdown
   ---
   title: "Eiffel Tower at Night"
   description: "The iconic tower illuminated against the night sky"
   date: "2024-06-20"
   tags: ["architecture", "night", "paris", "landmark"]
   featured: true
   ---
   ```
3. Commit and deploy

### Batch Upload
1. Add multiple images to a folder
2. Optionally create metadata files for some or all
3. Single commit adds all images

## File Organization Tips

### Folder Structure
```
public/gallery/
├── nature/
│   ├── mountain-lake.jpg
│   ├── mountain-lake.md
│   ├── forest-path.jpg
│   └── sunset-beach.jpg
└── travel/
    ├── paris-tower.jpg
    ├── paris-tower.md
    └── tokyo-street.jpg
```

### Naming Conventions
- Use descriptive, kebab-case filenames: `golden-gate-bridge.jpg`
- Avoid spaces and special characters
- Keep names concise but meaningful

### Image Optimization
- Recommended size: 1200-2000px width
- Keep file sizes reasonable (< 2MB per image)
- Next.js will automatically optimize images for web display

## Benefits of This System

✅ **Simple**: Just add files to folders  
✅ **Version Controlled**: Images are part of your Git repository  
✅ **No Database**: No backend complexity or hosting costs  
✅ **Fast**: Images served statically with Next.js optimization  
✅ **Flexible**: Add metadata only when needed  
✅ **Backup Friendly**: Everything in one repository  

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Deployment

Your images will be automatically included in deployments. The system works with any static hosting platform (Vercel, Netlify, GitHub Pages, etc.).

Simply commit your changes and push to deploy:

```bash
git add .
git commit -m "Add new nature photos"
git push
```