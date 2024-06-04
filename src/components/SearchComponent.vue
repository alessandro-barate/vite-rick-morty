<script>
export default {
    name: 'SearchComponent'
}
</script>

<template>
    <div class="search-bar">
        <input type="text" placeholder="Search character" class="margin-lr padding border-radius">
        <select name="character-status" id="character-status" class="margin-lr border-radius">
            <option value="default"> Select Status</option>
            <option value="alive">Alive</option>
            <option value="dead">Dead</option>
            <option value="unknown">Unknown</option>
        </select>
        <button class="margin-lr padding border-radius bg-blue">Search</button>
        <button class="margin-lr padding border-radius bg-gold">Reset</button>
    </div>
</template>