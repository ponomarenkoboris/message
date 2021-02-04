<template>
    <article id="search">
        <input class="search__input" type="text" placeholder="Search..." @input="findWord">
        <button class="search__submit">
            <img class="search-btn__img" src="../../public/img/systemImages/search.svg" alt="magnifying-glass">
        </button>
    </article>
</template>

<script>
export default {
    name: 'Search',
    setup() {
        function findWord(e) {
            const value = e.target.value.trim();
            if (value) {
                console.log('value: ', value);
                // TODO add array of values
            }
            
        }
        return {
            findWord
        }
    }
}
</script>

<style lang="scss" scoped>
#search {
    .search__input {
        outline: none;
        border: none;
        padding: 5px 10px;
        max-width: 100px;
        border-radius: 50px;
    }
    .search__submit {
        cursor: pointer;
        background-color: #fff;
        border: none;
        position: relative;
        top: 2.5px;
        left: -34px;

        .search-btn__img {
            height: 15px;
        }
    }
}
</style>