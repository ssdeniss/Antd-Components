# Ant Design component playground

A small React playground for exploring common [Ant Design](https://ant.design/) patterns in one place. The examples are intentionally compact so they can be inspected, changed, and compared while learning the library.

## Included examples

- Buttons, inputs, icons, loaders, and progress indicators
- Validated and dynamic forms
- Configurable, filterable, selectable, searchable, and editable tables
- Menus, tabs, carousels, and collapsible panels
- Timers and enter/leave table animations

The examples are collected in [`src/components`](src/components), while [`src/App.js`](src/App.js) renders the complete playground.

## Run locally

You need a current Node.js installation and npm.

```bash
git clone https://github.com/ssdeniss/Antd-Components.git
cd Antd-Components
npm install
npm start
```

The development server opens at [http://localhost:3000](http://localhost:3000).

## Available commands

| Command | Purpose |
| --- | --- |
| `npm start` | Start the local development server |
| `npm test` | Run the test watcher |
| `npm run build` | Create an optimized production build |

## Project structure

```text
src/
├── components/     # Individual Ant Design examples
├── App.js          # Playground composition
├── Style.css       # Shared demo styling
└── index.js        # React entry point
```

## Contributing

Focused improvements are welcome. Keep examples self-contained, give new components a descriptive folder name, and verify the production build before opening a pull request.

## Notes

This repository is a learning playground rather than a published component library. Some examples use mock data or placeholder integrations and should be adapted before production use.
