# NGO Donation Receipts Generator

A professional, frontend-only React application for NGOs to generate donor receipts in bulk. No server required, everything happens in the browser.

## ✨ Features
- **3 Templates**: Horizontal, Vertical, and Alternate layouts.
- **Bulk Capture**: Upload Excel files (up to 50 donors) and generate PDFs instantly.
- **ZIP Export**: Download all receipts in one go.
- **100% Privacy**: No data is ever sent to a server.

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher)

### Setup
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```

## 🛠 Tech Stack
- React + Vite
- html2canvas & jsPDF (for PDF generation)
- xlsx (for Excel parsing)
- JSZip & file-saver (for ZIP exports)
- Lucide React (for icons)
