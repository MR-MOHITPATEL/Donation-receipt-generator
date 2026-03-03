# 📜 NGO Donation Receipt Generator (Production Grade)

A robust, frontend-only React application designed for NGOs to generate professional, legally-compliant donor receipts in bulk. This tool operates 100% in the browser, ensuring maximum privacy and zero server overhead.

---

## ✨ Features

- **🎯 Multi-Step Wizard Flow**: A 4-step guided process (Templates → NGO Details → Excel Upload → Generate).
- **📋 Legal Compliance**:
  - Integrated validation for **Indian PAN** format.
  - Fields for **80G Number**, **NGO Registration**, and **PAN**.
  - Auto-generated unique receipt numbers (`REC-0001` format).
- **📊 Robust Excel Utility**:
  - Bulk processing for up to **50 donors**.
  - Row-level validation (ensures no bad data enters the receipts).
  - Clear error reporting for missing columns or malformed data.
- **📦 High-Fidelity PDF & ZIP Export**:
  - High-resolution receipt generation using `html2canvas` and `jsPDF`.
  - Single-click ZIP bundle export for all generated receipts.
- **🔒 Privacy First**: Zero data is sent to any server. Everything happens on your local machine.

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18.0.0 or higher)

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

---

## 🧪 Testing

The project includes a comprehensive test suite using **Jest** and **React Testing Library**.

### Run all tests:
```bash
npm test
```

### Test Coverage:
- **Validation Logic**: Strict PAN, Amount, and NGO detail checks.
- **Excel Parsing**: Edge cases (>50 rows, missing columns, row errors).
- **Component Flow**: Multi-step navigation and state preservation.
- **Utility Logic**: Receipt number formatting and unique ID generation.

---

## 🛠 Tech Stack

- **Framework**: React 18 (Vite)
- **Icons**: Lucide React
- **PDF/ZIP**: `html2canvas`, `jsPDF`, `JSZip`, `file-saver`
- **Excel**: `xlsx` (SheetJS)
- **Testing**: Jest, React Testing Library

---

## 📝 Usage

1. **Step 1**: Select your preferred layout (Horizontal, Vertical, or Alternate).
2. **Step 2**: Enter your NGO details and upload your logo.
3. **Step 3**: Upload a `.xlsx` file with donor data.
4. **Step 4**: Preview the batch list and click **"Generate & Export"** to download the ZIP.

---

## 📄 License

This project is licensed under the MIT License.
