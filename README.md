# RomanceSpace Templates

This repository contains all the customizable templates for RomanceSpace.

## How to upload a Template

Templates are uploaded directly to the Cloudflare Worker.

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a `.env` file at the root of this repository:
   ```env
   RS_ADMIN_KEY="your_admin_secret_here"
   # Optional: set RS_WORKER_URL if your worker is not at the default domain
   # RS_WORKER_URL="https://romancespace.885201314.xyz"
   ```

3. Run the upload command:
   ```bash
   npm run upload <template_name> <path_to_template_folder>
   ```

   **Example:**
   ```bash
   npm run upload love_letter ./src/love_letter
   ```
