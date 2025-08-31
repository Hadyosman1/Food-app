<div align="center">
  <img src="public/logo.png" alt="Food App Logo" width="150" />
  <h1>Food App 🍔🍕</h1>
  <p><b>The modern, full-stack food delivery app built with Next.js, Supabase, and Tailwind CSS.</b></p>
  <p>
    <a href="#features">Features</a> ·
    <a href="#demo">Demo</a> ·
    <a href="#getting-started">Getting Started</a> ·
    <a href="#contributing">Contributing</a> ·
    <a href="#license">License</a>
  </p>
</div>

---

## 🚀 Overview

Food App is a sleek, production-ready food delivery platform. Users can browse menus, add items to their cart, manage profiles and wishlists, and place orders—all in a beautiful, responsive UI. Built with a modern stack, it’s easy to extend, deploy, and maintain.

## ✨ Features

- Works across the entire [Next.js](https://nextjs.org) stack
  - App Router
  - Middleware
  - Client
  - Server
  - It just works!
- supabase-ssr. A package to configure Supabase Auth to use cookies
- Password-based authentication block installed via the [Supabase UI Library](https://supabase.com/ui/docs/nextjs/password-based-auth)
- Styling with [Tailwind CSS](https://tailwindcss.com)
- Components with [shadcn/ui](https://ui.shadcn.com/)
- Optional deployment with [Supabase Vercel Integration and Vercel deploy](#deploy-your-own)
  - Environment variables automatically assigned to Vercel project

## 📦 Installation

1. **Clone the repo**
   ```bash
   git clone https://github.com/your-username/food-app.git
   cd food-app
   ```
2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```
3. **Setup environment variables**
   - Copy `.env.example` to `.env.local` and fill in your Supabase credentials:
     ```env
     NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
     NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
     ```
4. **Run the development server**
   ```bash
   npm run dev
   ```
   The app will be running at [http://localhost:3000](http://localhost:3000)

---

## 🚚 Deployment

- Ready for [Vercel](https://vercel.com/) one-click deployment.
- Configure environment variables in your Vercel dashboard.

---

## 📋 Usage

- Browse the menu, add items to your cart, and checkout securely.
- Manage your wishlist and user profile.
- Admins can extend the app for order management, analytics, and more.

---

## 🧑‍💻 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 🙋 Contact

For support or inquiries, please open an issue or contact the maintainer.

---

## 🗺️ Roadmap

- [x] Product details & variants
- [x] Cart & checkout
- [x] Wishlist
- [x] User authentication
- [ ] Orders page
- [ ] User profile page
- [ ] Search functionality

---

## 🌍 About

We’re passionate about bringing the finest cuisine straight to your doorstep. From gourmet burgers to fresh salads, every meal should be an experience worth savoring.


1. You'll first need a Supabase project which can be made [via the Supabase dashboard](https://database.new)

2. Create a Next.js app using the Supabase Starter template npx command

   ```bash
   npx create-next-app --example with-supabase with-supabase-app
   ```

   ```bash
   yarn create next-app --example with-supabase with-supabase-app
   ```

   ```bash
   pnpm create next-app --example with-supabase with-supabase-app
   ```

3. Use `cd` to change into the app's directory

   ```bash
   cd with-supabase-app
   ```

4. Rename `.env.example` to `.env.local` and update the following:

   ```
   NEXT_PUBLIC_SUPABASE_URL=[INSERT SUPABASE PROJECT URL]
   NEXT_PUBLIC_SUPABASE_ANON_KEY=[INSERT SUPABASE PROJECT API ANON KEY]
   ```

   Both `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` can be found in [your Supabase project's API settings](https://supabase.com/dashboard/project/_?showConnect=true)

5. You can now run the Next.js local development server:

   ```bash
   npm run dev
   ```

   The starter kit should now be running on [localhost:3000](http://localhost:3000/).

6. This template comes with the default shadcn/ui style initialized. If you instead want other ui.shadcn styles, delete `components.json` and [re-install shadcn/ui](https://ui.shadcn.com/docs/installation/next)

> Check out [the docs for Local Development](https://supabase.com/docs/guides/getting-started/local-development) to also run Supabase locally.

## Feedback and issues

Please file feedback and issues over on the [Supabase GitHub org](https://github.com/supabase/supabase/issues/new/choose).

## More Supabase examples

- [Next.js Subscription Payments Starter](https://github.com/vercel/nextjs-subscription-payments)
- [Cookie-based Auth and the Next.js 13 App Router (free course)](https://youtube.com/playlist?list=PL5S4mPUpp4OtMhpnp93EFSo42iQ40XjbF)
- [Supabase Auth and the Next.js App Router](https://github.com/supabase/supabase/tree/master/examples/auth/nextjs)
