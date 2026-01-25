# setup guide

complete instructions for setting up this project on a new machine

## 1. clone the main repository

```bash
git clone https://github.com/openmikasa/personal_website.git
cd personal_website
```

## 2. install dependencies

```bash
npm install
```

## 3. set up environment variables (if needed)

if you have a private secrets repository:

```bash
# in a separate directory, clone your private secrets repo
cd ~/
git clone https://github.com/openmikasa/personal-website-secrets.git

# copy .env files to your project
cp ~/personal-website-secrets/.env ~/personal_website/.env
```

**or** create `.env` file manually with:
```bash
# create .env file in project root
touch .env
```

then add your environment variables (stored in password manager):
```
FORMSPREE_FORM_ID=mwvljpgj
# add other secrets as needed
```

## 4. verify setup

```bash
npm run dev
```

visit `http://localhost:4321` to verify everything works

## 5. build for production

```bash
npm run build
```

## key files protected by .gitignore

these files are NOT in the public repo but may be needed:
- `.env` - environment variables (backed up in private repo or password manager)
- `node_modules/` - auto-generated with `npm install`
- `dist/` - auto-generated with `npm run build`

## where sensitive data is stored

- **formspree form id**: `mwvljpgj`
  - location: `src/pages/contact.astro` (line 21)
  - also stored in: [password manager / private repo]
- **vercel deployment**: auto-deploys from main branch
- **domain**: [add your domain if you have one]

## development workflow

1. make changes locally
2. test with `npm run dev`
3. commit and push to github
4. vercel auto-deploys to production

## useful commands

- `npm run dev` - start local dev server
- `npm run build` - build for production
- `git status` - check what files changed
- `git add -A && git commit -m "message" && git push` - commit and push changes
