<template lang="html">
    <header class="hero is-success">
        <div class="hero-head">
            <nav class="navbar is-transparent">
                <div class="nav-left navbar-start">
                    <div class="navbar-item"><strong>📻 ESpotify, Aplicación para RIAS!</strong></div>
                </div>
                <div class="navbar-brand">
                    <div class="navbar-right navbar-menu">
                        <router-link class="navbar-item" :to="{ name: 'buscar' }">Buscar</router-link>
                        <router-link class="navbar-item" to="/about">Nosotros</router-link>
                    </div>
                </div>
            </nav>
        </div>
    </header>
</template>
