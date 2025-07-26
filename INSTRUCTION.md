# Portfolio Template Installation & Configuration Guide

Follow these steps to configure and personalize this portfolio template. This template is designed as a lightweight static page, with project data stored in a JSON file.

**Important Note on Editable Sections:**
Throughout the code, you will find comments like `<!-- ============ EDITABLE SECTION START: Section Name ============ -->` and `<!-- ============ EDITABLE SECTION END: Section Name ============ -->` (for HTML/PHP) or `// ============ EDITABLE SECTION START: Section Name ============ ` and `// ============ EDITABLE SECTION END: Section Name ============ ` (for JavaScript).
These markers indicate areas of the code that are specifically designed for you to modify and personalize. Please refer to these markers when making changes.

## Step 1: Download and Extract

Download this template's ZIP file and extract it to the folder where you want to store this project.

## Step 2: Personalize Content

Open `index.php` with your favorite text or code editor. Find and replace the following placeholder texts:

-   **Name**: Replace all occurrences of `John Doe` with your name.
-   **Title & Description**: Modify the content of the `<title>` tag and `<meta name="description">` to match your profile.
-   **Social Media Links**: At the bottom of the file, find the social media links and replace `#` with your actual profile URLs.
-   **Images**: Replace the image paths within the `<img>` tags to match the filenames of the images you prepare in the `img/` folder.

For multi-language texts, the `js/script.js` file now uses generic (lorem ipsum) text. You can edit the `langData` section in `js/script.js` to customize translations.

## Step 3: Update Portfolio Projects

Open `data/projects.json`. This file contains your project list in JSON format. **Important: JSON files do not support comments. Ensure your `projects.json` file is valid JSON without any comments.** You can modify existing examples or add new ones using the same format:

```json
{
  "title": "Your Project Name",
  "thumbnail": "img/your-project-image.png",
  "content": "A brief description of your project.",
  "demo_url": "#", // Link to live demo
  "source_code_url": "#" // Link to source code
}
```

## Step 4: Replace Images

Open the `img/` folder and replace all images within it with your own:

-   **Logo**: Replace the logo file.
-   **Profile Photo**: Replace the profile picture.
-   **Favicon**: Replace `favicon.ico` and `apple-touch-icon.png`.

## Step 5: JavaScript Configuration (js/script.js)

`js/script.js` controls several interactive features and dynamic texts. You can edit it to customize:

-   **Multi-Language Texts**: Inside `js/script.js`, find the `langData` object. You can change the texts for each language (`id` and `en`) as needed. Ensure to maintain the object structure.
-   **Typing Animation**: Find the `words` array within the `initTypingAnimation` function. Change the words in this array to customize the text appearing in the hero section's typing animation.

## Step 6 (Optional): Contact Form Configuration

The contact form in `index.php` requires some server-side configuration if you wish to use it.

1.  **Hosting**: Ensure your hosting supports PHP.
2.  **Email Script**: This template is designed to work with an email sending script (like PHPMailer). You need to upload the library to your server and ensure the path in `index.php` (`$mailerPath`) is correct.
3.  **Email Address**: Configure the email script to send notifications to your email address.

**Note**: This template no longer uses a database for data storage. All project data is managed via `data/projects.json`.

If you do not wish to use the contact form, you can remove the `<form>` section from `index.php`.

## Step 7: Upload to Server

After all configurations are complete, upload all files and folders to your web server. Your portfolio should now be online!

## Credits

This template was created by **FARIS AY**.

-   Instagram: [@faris.a.y](https://www.instagram.com/faris.a.y)
-   Threads: [@faris.a.y](https://www.threads.net/@faris.a.y)
