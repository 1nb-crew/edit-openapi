## Setup for development

### Install and setup Volta

https://volta.sh/

Volta is used as Node an NPM version manager.
It'll update versions automatically when they are updated for the project, you don't need to manage those manually once volta is set up.

```bash
curl https://get.volta.sh | bash
volta install node
```

### Install dependencies

```bash
npm install
```

### Setup local environment variables

```bash
# Your can further customize the .env.local file as you wish
cp .env.local.example .env.local
```

### Run the app in development mode

```bash
npm run dev
```
