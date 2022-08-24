<template>
    <div id="app">
        <h1>{{ $t('Traslateapp') }}</h1>
        <div class="locale-changer">
            <label>Select your language : </label>
            <select v-model="$i18n.locale">
                <option v-for="locale in languages" :key="`locale-${locale}`" :value="locale.language">{{
                        $t(locale.title)
                }}
                </option>
            </select>
        </div>
        <br><br>
        <div>
            <button v-for="entry in languages" :key="entry.title" @click="changeLocale(entry.language)">
                {{ $t(entry.title) }}
            </button>
        </div>
        <HelloWorld />
    </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import i18n from '@/plugins/i18n';

export default {
    name: 'app',
    components: {
        HelloWorld,

    },
    data() {
        return {
            selected: 'Select Your Language',
            languages: [
                { language: 'en', title: 'English' },
                { language: 'es', title: 'japanese' }
            ]
        };
    },
    methods: {
        changeLocale(locale) {
            i18n.locale = locale;
        }
    }
}
</script>

<style scoped>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #171e25;
}

button {
    padding: 10px;
    border: 1px solid green;
    border-radius: 15px;
    font-size: 18px;
    margin: 15px;
}

.main {
    top: 0px;
    position: sticky;
}
</style>
