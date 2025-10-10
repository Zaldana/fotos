# Photography Portfolio

A modern photography portfolio built with Next.js, TypeScript, and Tailwind CSS. Features OAuth authentication for admin management and two main galleries: Nature and Travel photography.

## Features

- **Responsive Design**: Beautiful, mobile-first design with Tailwind CSS
- **Two Galleries**: Separate pages for Nature and Travel photography
- **Admin Dashboard**: OAuth-protected admin panel for image management
- **Image Upload**: Upload and manage images with categories
- **Authentication**: Google OAuth integration for admin access

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Google OAuth credentials

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory with:
   ```
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your-secret-key-here
   GOOGLE_CLIENT_ID=your-google-client-id
   GOOGLE_CLIENT_SECRET=your-google-client-secret
   ADMIN_EMAILS=admin@example.com
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Google OAuth Setup

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Google+ API
4. Create OAuth 2.0 credentials
5. Add `http://localhost:3000/api/auth/callback/google` to authorized redirect URIs
6. Copy the Client ID and Client Secret to your `.env.local` file

## Admin Access

- Navigate to `/auth/signin` to access the admin login
- Only emails listed in `ADMIN_EMAILS` environment variable can sign in
- Once authenticated, access the admin dashboard at `/admin`

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── admin/             # Admin dashboard
│   ├── auth/              # Authentication pages
│   ├── nature/            # Nature gallery page
│   ├── travel/            # Travel gallery page
│   └── api/               # API routes
├── components/            # Reusable components
│   ├── ImageGallery.tsx   # Gallery component
│   ├── ImageUpload.tsx    # Upload component
│   ├── Navigation.tsx     # Navigation bar
│   └── Providers.tsx      # NextAuth provider
└── lib/                   # Utility functions
    └── auth.ts            # NextAuth configuration
```

## Technologies Used

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **NextAuth.js** - Authentication
- **Google OAuth** - Authentication provider

## Future Enhancements

- Database integration for persistent image storage
- Image optimization and CDN
- Advanced gallery features (lightbox, filters)
- SEO optimization
- Contact form
- Blog integration