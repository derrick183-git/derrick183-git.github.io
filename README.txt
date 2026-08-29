BUZZWAVE V2 — WITH SIMPLE PUBLISHING

Your site now includes:
- admin.html — simple phone-friendly publisher
- stories.json — automatic story feed
- Homepage automatically displays newly published stories
- Each publish creates a complete article HTML file in /articles/

HOW TO USE
1. Upload this whole project to your GitHub Pages repository.
2. Open: https://derrick183-git.github.io/admin.html
3. Create a GitHub fine-grained personal access token.
4. Give the token Contents: Read and write access to the repository only.
5. Enter the token on the publisher page.
6. Write your headline, category, author and story.
7. Tap Publish Story.
8. GitHub creates the article and updates stories.json automatically.

SECURITY
The page does not save the token in localStorage or cookies. It is held in memory for the current page session. For best security, create a token limited to this repository and revoke it when you no longer need it.

IMPORTANT
GitHub Pages is static hosting. This system uses the GitHub API to create/update files in your repository; it is not a full database/CMS. Keep your token private and never put it into the website source code.
