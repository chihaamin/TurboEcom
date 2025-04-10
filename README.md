# Turborepo Tailwind CSS & Shadcn UI for Ecommerce CMS

This Turborepo is designed to serve as the foundation for an eCommerce CMS project. It includes separate applications for the **Admin Dashboard** and the **Client Web** interface, built with modern tools and technologies.

## Using this example

Run the following command to initialize the project:

```sh
npx create-turbo@latest -e "this repo link"
```

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `admin`: A [Next.js](https://nextjs.org/) app for the **Admin Dashboard**, styled with [Tailwind CSS](https://tailwindcss.com/) and utilizing [Shadcn UI](https://ui.shadcn.dev/).
- `client`: A [Next.js](https://nextjs.org/) app for the **Client Web** interface, styled with [Tailwind CSS](https://tailwindcss.com/) and utilizing [Shadcn UI](https://ui.shadcn.dev/).
- `ui`: A shared React component library with [Tailwind CSS](https://tailwindcss.com/) used by both `admin` and `client` applications.
- `@repo/eslint-config`: Shared `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`).
- `@repo/typescript-config`: Shared `tsconfig.json` configurations used throughout the monorepo.

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Building packages/ui

The `ui` package is set up to produce compiled styles for shared components into the `dist` directory. The `.tsx` files are consumed directly by the Next.js apps using `transpilePackages` in `next.config.ts`. This approach ensures:

- Easy sharing of a single `tailwind.config.ts` across apps and packages.
- Simplified package compilation using the Next.js Compiler and `tailwindcss`.
- Avoidance of Tailwind class conflicts by using a `ui-` prefix for `ui` package classes.
- Clear package export boundaries.

Alternatively, you can consume `packages/ui` directly from the source without building. If you choose this option, update the `tailwind.config.ts` in your apps to include the package locations for CSS class scanning.

For example, in [tailwind.config.ts](packages/tailwind-config/tailwind.config.ts):

```js
  content: [
    // app content
    `src/**/*.{js,ts,jsx,tsx}`,
    // include packages if not transpiling
    "../../packages/ui/*.{js,ts,jsx,tsx}",
  ],
```

If using this strategy, you can remove the `tailwindcss` and `autoprefixer` dependencies from the `ui` package.

## Utilities

This Turborepo includes the following tools:

- [Tailwind CSS](https://tailwindcss.com/) for styling
- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

## Project Structure

- **Admin Dashboard**: Manage products, orders, users, and other CMS functionalities.
- **Client Web**: The storefront for customers to browse and purchase products.

This structure ensures a clean separation of concerns and scalability for your eCommerce CMS.