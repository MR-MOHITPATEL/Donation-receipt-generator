# 📜 NGO Donation Receipts Generator

A professional, high-performance React application designed for NGOs to generate and manage donor receipts in bulk. This tool operates entirely in the browser, ensuring maximum privacy and zero server overhead.

---

## ✨ Features

- **🎯 Professional Templates**: Choose from three distinct layouts (Horizontal, Vertical, and Alternate) to suit your brand.
- **📊 Bulk Processing**: Upload an Excel file with up to 50 donor records and generate all receipts simultaneously.
- **📦 ZIP Export**: Automatically bundles all generated receipts into a single ZIP file for easy distribution.
- **🔒 Privacy First**: Your data never leaves your computer. All processing is done locally in your browser.
- **📱 Responsive Design**: A sleek, modern UI that works perfectly across devices.

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18.0.0 or higher)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/donation-receipts-generator.git
   cd donation-receipts-generator
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

---

## 🛠 Tech Stack

- **Framework**: [React 18](https://reactjs.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: Standard CSS with a custom premium design system.
- **PDF Generation**: `html2canvas` & `jsPDF`
- **Excel Handling**: `xlsx`
- **File Utilities**: `JSZip` & `file-saver`
- **Icons**: `Lucide React`

---

## 📝 Usage Instructions

1. **Enter NGO Details**: Fill in your NGO's name, address, and upload your logo/signature.
2. **Template Selection**: Choose your preferred receipt style.
3. **Data Entry**: Either enter donor details manually or upload an Excel file.
4. **Generate & Download**: Review the receipts and download them as individual PDFs or a combined ZIP file.

---

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to improve the templates or features.

---

## 📄 License

This project is licensed under the MIT License.
