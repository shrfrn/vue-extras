<template>
    <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/dynamic">Dynamic Cmps</RouterLink>
        <RouterLink to="/Directives">Directives</RouterLink>
        <RouterLink to="/watchers">Watchers</RouterLink>
        <RouterLink to="/VModel">v-model</RouterLink>
        <RouterLink to="/modal">Modal</RouterLink>
        <!-- <RouterLink to="/about">About</RouterLink> -->
    </nav>
    <RouterView />
</template>

<script></script>

<style>
@import '@/assets/base.css';

#app {
    max-width: 1280px;
    margin: 0 auto;
    padding: 2rem;

    font-weight: normal;
}

header {
    line-height: 1.5;
    max-height: 100vh;
}

.logo {
    display: block;
    margin: 0 auto 2rem;
}

a,
.green {
    text-decoration: none;
    color: hsla(160, 100%, 37%, 1);
    transition: 0.4s;
}

nav a.router-link-exact-active {
    color: var(--color-text);
}

nav a.router-link-exact-active:hover {
    background-color: transparent;
}

nav a:not(:first-of-type) {
    display: inline-block;
    padding-inline: 1rem;
    border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
    display: inline-block;
    padding-inline-end: 1rem;
    border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
    border: 0;
}
</style>
