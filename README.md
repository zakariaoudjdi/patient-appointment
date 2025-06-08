# Patient Appointment Booking App

A modern web application for booking patient appointments, built with React, Vite, Tailwind CSS, Supabase, React Query, and react-hot-toast. The app provides a seamless experience for patients to schedule appointments, with real-time feedback, validation, and a clean, responsive UI.

## Features

- **Book Appointments:** Patients can fill out a form to book appointments, selecting date and time slots (morning/evening).
- **Form Validation:** Uses `react-hook-form` for robust validation and error handling.
- **Date & Time Selection:** Modular components for date picking and time slot selection.
- **Supabase Integration:** Stores appointment data securely in a Supabase backend.
- **React Query:** Handles remote state management, caching, and background updates.
- **Toast Notifications:** Provides instant feedback for success and error states.
- **Loading Spinner:** Displays a spinner during async operations for better UX.
- **Reusable Components & Hooks:** Clean, maintainable code with modular UI and custom hooks (e.g., `useNavigateMutation`).
- **Responsive Design:** Built with Tailwind CSS for mobile-first, adaptive layouts.
- **Dev Tools:** Includes React Query Devtools and global Toaster for debugging and notifications.

## Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Supabase](https://supabase.com/)
- [React Query](https://tanstack.com/query/latest)
- [react-hot-toast](https://react-hot-toast.com/)

## Project Structure

```
src/
  api/                # Supabase client & API functions
  hooks/              # Custom React hooks
  pages/              # Page-level components
  ui/                 # Reusable UI components
  App.jsx             # App root with providers
  main.jsx            # Entry point
```

## Getting Started

1. **Clone the repository:**
   ```sh
   git clone https://github.com/<your-username>/patient-appointment.git
   cd patient-appointment
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Set up Supabase:**
   - Create a project at [Supabase](https://supabase.com/).
   - Copy your Supabase URL and anon key into `src/api/supabase.js`.
4. **Run the app locally:**
   ```sh
   npm run dev
   ```
5. **Open in browser:**
   Visit `http://localhost:5173` (or the port shown in your terminal).

## Development Workflow

- **Branching:**
  - Use feature branches for new features (e.g., `change-layout`).
  - Merge to `main` after review and testing.
- **GitHub:**
  - Push changes to your fork or main repo as needed.
- **Testing:**
  - Manual testing via the UI; add automated tests as needed.

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License

MIT
