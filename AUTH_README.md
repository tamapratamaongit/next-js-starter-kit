# Authentication System Documentation

Sistem autentikasi lengkap menggunakan **better-auth** dan **shadcn/ui** components.

## 📋 Fitur

- ✅ **Login** - Halaman login dengan email & password
- ✅ **Register** - Halaman registrasi dengan validasi password
- ✅ **Dashboard** - Halaman dashboard dengan sidebar yang protected
- ✅ **Logout** - Fungsi logout terintegrasi di sidebar
- ✅ **Middleware** - Route protection otomatis
- ✅ **Session Management** - Session handling dengan better-auth

## 🎨 Halaman yang Tersedia

### 1. Login (`/login`)
- Email & password authentication
- Password visibility toggle
- Error handling
- Social login placeholders (Google, GitHub)
- Link ke halaman register

### 2. Register (`/register`)
- Full name, email, password, confirm password
- Real-time password strength validation
- Terms & conditions checkbox
- Social signup placeholders
- Link ke halaman login

### 3. Dashboard (`/dashboard`)
- Protected route (requires authentication)
- Sidebar dengan navigasi lengkap
- User info dengan avatar & dropdown menu
- Logout functionality
- Stats cards, recent orders, top products
- Revenue chart visualization

## 🔐 Cara Kerja Autentikasi

### Login Flow
1. User mengisi email & password di `/login`
2. Data dikirim ke better-auth via `authClient.signIn.email()`
3. Jika berhasil, redirect ke `/dashboard`
4. Session disimpan otomatis oleh better-auth

### Register Flow
1. User mengisi form di `/register`
2. Password divalidasi (min 8 karakter, uppercase, lowercase, number)
3. Data dikirim ke better-auth via `authClient.signUp.email()`
4. Jika berhasil, redirect ke `/dashboard`

### Logout Flow
1. User klik "Log out" di dropdown menu sidebar
2. `authClient.signOut()` dipanggil
3. Session dihapus
4. Redirect ke `/login`

### Route Protection
Middleware di `src/middleware.ts` melindungi routes:
- `/dashboard/*` - Hanya bisa diakses jika sudah login
- `/login`, `/register` - Redirect ke `/dashboard` jika sudah login

## 🛠️ Komponen yang Digunakan

### Shadcn UI Components
- `Card`, `CardContent` - Container untuk form
- `Input` - Text input fields
- `Label` - Form labels
- `Button` - Action buttons
- `Separator` - Visual dividers
- `Avatar`, `AvatarFallback`, `AvatarImage` - User avatars
- `DropdownMenu` - User menu di sidebar
- `Sidebar` components - Sidebar navigation

### Custom Components
- `AppSidebar` - Main sidebar dengan navigasi
- `NavUser` - User info & dropdown menu
- `NavMain` - Main navigation menu
- `NavProjects` - Projects navigation
- `TeamSwitcher` - Team/workspace switcher

## 📁 Struktur File

```
src/
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   │   └── page.tsx          # Halaman login
│   │   └── register/
│   │       └── page.tsx          # Halaman register
│   ├── dashboard/
│   │   ├── layout.tsx            # Dashboard layout dengan sidebar
│   │   └── page.tsx              # Dashboard content
│   └── api/
│       └── auth/
│           └── [...all]/
│               └── route.ts      # Better-auth API routes
├── components/
│   ├── app-sidebar.tsx           # Sidebar component
│   ├── nav-user.tsx              # User navigation dengan logout
│   ├── nav-main.tsx              # Main navigation
│   ├── nav-projects.tsx          # Projects navigation
│   ├── team-switcher.tsx         # Team switcher
│   └── ui/                       # Shadcn UI components
├── lib/
│   ├── auth.ts                   # Better-auth server config
│   ├── auth-client.ts            # Better-auth client config
│   └── session.ts                # Session utilities
├── db/
│   └── schema/
│       └── auth/
│           └── auth-schema.ts    # Database schema untuk auth
└── middleware.ts                 # Route protection middleware
```

## 🚀 Cara Menggunakan

### 1. Setup Database
Pastikan database sudah di-push dengan schema yang benar:
```bash
npm run db:push
```

### 2. Environment Variables
Pastikan `.env` sudah diisi dengan benar (DATABASE_URL, dll)

### 3. Jalankan Development Server
```bash
npm run dev
```

### 4. Akses Halaman
- Login: http://localhost:3000/login
- Register: http://localhost:3000/register
- Dashboard: http://localhost:3000/dashboard (requires auth)

## 🔧 Kustomisasi

### Mengubah Redirect Setelah Login
Edit di `src/app/(auth)/login/page.tsx`:
```tsx
router.push("/dashboard") // Ubah ke route yang diinginkan
```

### Menambah Field di Register
1. Update form di `src/app/(auth)/register/page.tsx`
2. Update `authClient.signUp.email()` call
3. Update database schema jika perlu

### Mengubah Menu Sidebar
Edit data di `src/components/app-sidebar.tsx`:
```tsx
const data = {
  navMain: [
    // Tambah/ubah menu items di sini
  ]
}
```

## 📝 Notes

- Semua halaman auth menggunakan gradient background yang menarik
- Password requirements ditampilkan real-time saat user mengetik
- Avatar menggunakan initials jika tidak ada image
- Logout button ada di dropdown menu user di sidebar
- Middleware otomatis protect routes yang memerlukan autentikasi

## 🎨 Design Features

- Modern gradient backgrounds
- Smooth transitions & hover effects
- Responsive design
- Loading states pada semua actions
- Error handling yang user-friendly
- Password visibility toggle
- Real-time validation feedback
