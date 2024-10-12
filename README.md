**Overview**
This project is built using Next.js and Material UI (MUI), incorporating a responsive table that lists invoices with search, sorting, filtering, and pagination functionality. The project also features a light/dark theme toggle, with the theme preference stored in the browser’s local storage, ensuring it persists across sessions.

**Key Features**
Dynamic Invoice Table with:
Search
Sorting
Filtering
Pagination
Theme Toggle between light and dark modes, saved in localStorage
Custom Fonts loaded locally
Built with Next.js and styled using Material UI

**Main Files:**
src/app/layout.js: Entry point for the application, where global styles and theme management are set up.
src/component/TableComponent.js: Renders the dynamic table with sorting, filtering, and pagination.
src/theme/ThemeToggle.js: Button for switching between light and dark themes.
src/app/globals.css: Defines global styles, including theme-specific styles.
src/app/fonts/: Stores custom fonts for use throughout the project.

**Installation & Setup**
_Prerequisites_
Node.js (ensure it's installed on your machine)
Next.js and Material UI (MUI) libraries installed (handled automatically through dependencies)


**Implementation Details**
_Theme Toggle_
The ThemeToggle component allows users to switch between light and dark modes. The current theme is stored in the browser’s localStorage to persist across page reloads. The component uses Material UI’s IconButton and theme icons (Brightness4Icon for dark mode and Brightness7Icon for light mode).
It uses useEffect to update the document’s data-theme attribute, which triggers CSS changes for light or dark mode.

_Global CSS for Theme Management_
Theme variables are defined in globals.css. Depending on the value of data-theme (light or dark), different styles are applied throughout the application.


_TableComponent_
The TableComponent renders a responsive table that displays a list of invoices. It includes:

Search: Users can search by name or email.
Sorting: Users can sort invoices by total amount.
Filtering: Filter invoices by their status (paid, pending, sent).
Pagination: Handles large data sets by paginating the invoice list.

_Custom Fonts_
The project uses custom fonts loaded locally from the src/app/fonts folder. Two fonts, GeistSans and GeistMono, are imported into the layout for use throughout the application.

**How to Run the Project**
Ensure Node.js is installed.
Clone the repository and run npm install to install dependencies.
Run **npm run dev** to start the development server.
Access the app at http://localhost:3000.
Use the Theme Toggle button in the top-right corner to switch between light and dark modes.
Use the table's search, sort, filter, and pagination features to browse through the invoice data.

**Future Improvements**
Add more advanced filtering options (e.g., filter by date range or client).
Improve accessibility with ARIA labels and keyboard navigation.
Implement server-side fetching for dynamic data.
Enhance table responsiveness for smaller screen sizes.

**Conclusion**
This project showcases how to build a responsive and accessible Next.js application using Material UI. It implements common features like search, filtering, sorting, and pagination in a table, along with theme management. The architecture is flexible, making it easy to extend the project with new features.
