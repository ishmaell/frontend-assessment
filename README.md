#A simple web application built with React &amp; TypeScript.

## Summary

- [Getting Started](#getting-started)
- [Dependencies](#dependencies)
- [Prerequisites](#prerequisites)
- [Challenges](#challenges)
- [Repo Structure](#repo-structure)
- [Authors](#authors-[dev])

## Getting Started

- clone the repo using `git clone https://github.com/ishmaell/frontend-assessment.git`
- install the dependencies using `npm install`
- start the application using `npm start`
- visit `http://localhost:3000` on your browser to view the application

### Dependencies

- node v16.13.0
- tailwindcss

### Prerequisites

The following are required to run the app

- [node v16.13.0](https://nodejs.org)

## Challenges

- Trying to understand the Mono documentation
- Web application not sending the cookies to the backend as expected

## Repo Structure

```
├── @mono.co
│   └── connect.js.d.ts
├── App.test.tsx
├── App.tsx
├── api
│   └── axios.ts
├── assets
│   └── images
│       ├── bank-icons.svg
│       ├── loading-skeleton.svg
│       ├── mono-logo-white.svg
│       ├── mono-logo.svg
│       ├── padlock.svg
│       ├── stats.svg
│       └── user.svg
├── components
│   ├── auth
│   │   ├── PersistLogin.tsx
│   │   └── RequireAuth.tsx
│   ├── form
│   │   ├── Button.tsx
│   │   ├── FormGroup.tsx
│   │   ├── Input.tsx
│   │   └── index.ts
│   ├── stateless
│   │   ├── ExpenseTracker.tsx
│   │   ├── LatestTransactions.tsx
│   │   └── WhereYourMoneyGo.tsx
│   ├── toast
│   │   └── Toast.ts
│   └── ui
│       ├── Card.tsx
│       ├── Header.tsx
│       ├── Sidenav.tsx
│       ├── Spinner.tsx
│       └── Toast.tsx
├── constants
│   └── index.ts
├── context
│   ├── AccounBalProvider.tsx
│   └── AuthProvider.tsx
├── css
│   ├── components
│   │   ├── button.css
│   │   ├── card.css
│   │   ├── expense-tracker.css
│   │   ├── form.css
│   │   ├── header.css
│   │   ├── latest-tx.css
│   │   ├── private-layout.css
│   │   ├── public-layout.css
│   │   ├── sidenav.css
│   │   ├── spinner.css
│   │   ├── table.css
│   │   ├── toast.css
│   │   └── where-your-money-go.css
│   ├── index.css
│   └── pages
│       ├── dashboard.css
│       ├── initialization.css
│       └── not-found.css
├── hooks
│   ├── useAccountBalance.tsx
│   ├── useAuth.tsx
│   ├── useAxiosPrivate.tsx
│   ├── useLoginForm.tsx
│   ├── useRefreshToken.tsx
│   └── useSignupForm.tsx
├── index.tsx
├── layout
│   ├── PrivateLayout.tsx
│   └── PublicLayout.tsx
├── models
│   ├── AccountBalType.ts
│   ├── AuthType.ts
│   ├── LoginFormType.ts
│   ├── OptionalType.ts
│   ├── SignupFormType.ts
│   └── index.ts
├── pages
│   ├── Accounts.tsx
│   ├── Dashboard.tsx
│   ├── Initialization.tsx
│   ├── Login.tsx
│   ├── NotFound.tsx
│   ├── Signup.tsx
│   └── Transactions.tsx
├── react-app-env.d.ts
├── reportWebVitals.ts
├── routes
│   └── index.tsx
├── schema
│   ├── LoginSchema.ts
│   └── SignupSchema.ts
├── setupTests.ts
└── utils
    └── index.ts
```

## Authors [Dev]

- **Isiaka Ismaila**
  ​​
