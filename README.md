# The Seaside Heaven - A Next.js Learning Project

## About the Project

**The Seaside Heaven** is a web application built with **Next.js** and **Supabase** that allows users to book wooden cabins at a hotel. Users can view available cabins, make reservations, and manage their past bookings. This project was created as a learning experience while exploring **Next.js** and its ecosystem.

## Live Demo
🚀 **Project Link**: *[Coming Soon]*

## Features

- **Cabin Booking**: Users can browse available cabins and book them.
- **Reservation Management**: Users can view and manage their past reservations.
- **Authentication**: Secure authentication using **Google OAuth** via **NextAuth**.
- **Calendar & Date Management**: Implemented using **React Day Picker** and **date-fns**, ensuring proper booking date selection.
- **Double Booking Prevention**: Logic in place to prevent duplicate reservations for the same time slot.
- **Routing & Data Fetching**: Leveraged Next.js' built-in **API routes**, **server-side rendering (SSR)**, and **client-side components**.
- **Styling**: Fully responsive UI using **Tailwind CSS**.
- **Mobile Responsiveness**: The application is fully responsive down to a 320px width, ensuring usability on all screen sizes..
- **Icons**: Used **React Hero Icons** for a visually appealing design.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/)
- **Database & Authentication**: [Supabase](https://supabase.com/) + [NextAuth](https://next-auth.js.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Calendar & Date Handling**: [React Day Picker](https://react-day-picker.js.org/) + [date-fns](https://date-fns.org/)
- **Icons**: [Hero Icons](https://heroicons.com/)

---

## What I Learned

During this project, I explored and gained knowledge about:

- **Next.js Routing**: Understanding file-based routing and nested routes.
- **Authentication in Next.js**: Implementing **OAuth authentication** with **NextAuth** and Google.
- **Server-Side & Client-Side Components**: Differentiating between SSR and CSR in Next.js.
- **Suspense and Hydration Issues**: Learning how Next.js handles rendering and debugging common deployment issues.
- **Backend Logic in Next.js**: Using API routes and handling data fetching efficiently.

---

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

### Installation & Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/SK-x7/The-Seaside_Heaven.git
   ```

2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add your Supabase and authentication keys:
   ```sh
   SUPABASE_URL=Your_supabase_project_url
   SUPABASE_KEY=Your_supabase_api_key
   NEXTAUTH_URL=Url_of_your_app
   NEXTAUTH_SECRET=any_random_string
   AUTH_GOOGLE_CLIENT_ID=google_console_client_id
   AUTH_GOOGLE_CLIENT_SECRET=google_console_client_secret
    ```

4. Start the development server:
   ```sh
   npm run dev
   # or
   yarn dev
   ```

5. Open the project in your browser at:
   ```
   http://localhost:3000
   ```

---

## Future Enhancements

🚀 **Planned Features:**
- Integration of **payment gateway** for seamless transactions.
- UI/UX improvements with better animations and accessibility.
- Performance optimizations and SEO enhancements.

---

### Author
👨‍💻 **Satyen Kharadi**  
📧 Contact: *satyenkharadi@gmail.com*

---

Enjoy your stay! 🏡

